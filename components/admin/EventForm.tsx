"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { TempleEvent, EventImage } from "@/lib/types/content";

interface Props {
  event?: TempleEvent;
}

async function uploadFile(file: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
  const json = await res.json() as { url?: string; error?: string };
  if (!res.ok || !json.url) throw new Error(json.error ?? "Upload failed");
  return json.url;
}

function getYearFromDate(dateStr: string): number | null {
  if (!dateStr) return null;
  const y = new Date(dateStr + "T00:00:00").getFullYear();
  return isNaN(y) ? null : y;
}

// ── Single image row ──────────────────────────────────────────────────────────
function ImageRow({
  img,
  index,
  total,
  onUpdate,
  onRemove,
  onMove,
  onReplace,
}: {
  img: EventImage;
  index: number;
  total: number;
  onUpdate: (id: string, field: "alt" | "caption", value: string) => void;
  onRemove: (id: string) => void;
  onMove: (index: number, dir: "up" | "down") => void;
  onReplace: (id: string, file: File) => void;
}) {
  const [replacing, setReplacing] = useState(false);
  const replaceRef = useRef<HTMLInputElement>(null);

  async function handleReplaceFile(files: FileList | null) {
    if (!files || files.length === 0) return;
    setReplacing(true);
    try {
      onReplace(img.id, files[0]);
    } finally {
      setReplacing(false);
      if (replaceRef.current) replaceRef.current.value = "";
    }
  }

  return (
    <div className="flex gap-3 items-start p-3 bg-neutral-50 rounded-xl border border-neutral-200">
      {/* Thumbnail + replace overlay */}
      <div className="relative flex-shrink-0 w-16 h-16 group">
        <img
          src={img.src}
          alt={img.alt || "Event photo"}
          className="w-16 h-16 object-cover rounded-lg"
        />
        {/* Replace overlay on hover */}
        <button
          type="button"
          onClick={() => replaceRef.current?.click()}
          disabled={replacing}
          className="absolute inset-0 rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity"
          aria-label="Replace photo"
          title="Replace photo"
        >
          {replacing ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg viewBox="0 0 20 20" fill="white" className="w-5 h-5" aria-hidden="true">
              <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <input
          ref={replaceRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="sr-only"
          onChange={(e) => handleReplaceFile(e.target.files)}
        />
      </div>

      {/* Fields */}
      <div className="flex-1 min-w-0 space-y-2">
        <input
          type="text"
          value={img.alt}
          onChange={(e) => onUpdate(img.id, "alt", e.target.value)}
          placeholder="Alt text — describe the photo"
          className="w-full border border-neutral-200 rounded-md px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-primary/30 focus:border-primary outline-none"
        />
        <input
          type="text"
          value={img.caption ?? ""}
          onChange={(e) => onUpdate(img.id, "caption", e.target.value)}
          placeholder="Caption (optional)"
          className="w-full border border-neutral-200 rounded-md px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-primary/30 focus:border-primary outline-none"
        />
      </div>

      {/* Order + delete */}
      <div className="flex flex-col gap-1 flex-shrink-0">
        <button type="button" onClick={() => onMove(index, "up")} disabled={index === 0}
          className="p-1 text-neutral-400 hover:text-neutral-700 disabled:opacity-25" aria-label="Move up">↑</button>
        <button type="button" onClick={() => onMove(index, "down")} disabled={index === total - 1}
          className="p-1 text-neutral-400 hover:text-neutral-700 disabled:opacity-25" aria-label="Move down">↓</button>
        <button type="button" onClick={() => onRemove(img.id)}
          className="p-1 text-red-400 hover:text-red-600" aria-label="Remove photo">×</button>
      </div>
    </div>
  );
}

// ── Main form ─────────────────────────────────────────────────────────────────
export default function EventForm({ event }: Props) {
  const router = useRouter();
  const isEdit = !!event;
  const uploadInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(event?.title ?? "");
  const [date, setDate] = useState(event?.date ?? "");
  const [description, setDescription] = useState(event?.description ?? "");
  const [images, setImages] = useState<EventImage[]>(event?.images ?? []);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const year = getYearFromDate(date);

  // ── Image helpers ────────────────────────────────────────────────────────
  function addImages(urls: string[]) {
    setImages((prev) => [
      ...prev,
      ...urls.map((url) => ({ id: crypto.randomUUID(), src: url, alt: "", caption: "" })),
    ]);
  }

  function removeImage(id: string) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  function updateImage(id: string, field: "alt" | "caption", value: string) {
    setImages((prev) => prev.map((img) => (img.id === id ? { ...img, [field]: value } : img)));
  }

  function moveImage(index: number, direction: "up" | "down") {
    const next = [...images];
    const swap = direction === "up" ? index - 1 : index + 1;
    if (swap < 0 || swap >= next.length) return;
    [next[index], next[swap]] = [next[swap], next[index]];
    setImages(next);
  }

  async function replaceImage(id: string, file: File) {
    try {
      const url = await uploadFile(file);
      if (url) {
        setImages((prev) => prev.map((img) => (img.id === id ? { ...img, src: url } : img)));
      }
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Replace failed");
    }
  }

  async function handleNewUploads(files: FileList | null) {
    if (!files || files.length === 0) return;
    setUploadError(null);
    setUploading(true);
    try {
      const urls: string[] = [];
      for (const file of Array.from(files)) {
        const url = await uploadFile(file);
        if (url) urls.push(url);
      }
      addImages(urls);
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (uploadInputRef.current) uploadInputRef.current.value = "";
    }
  }

  // ── Submit ───────────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!title.trim() || !date || !description.trim()) {
      setError("Title, date, and description are required.");
      return;
    }
    setSaving(true);
    try {
      const url = isEdit ? `/api/admin/events/${event!.id}` : "/api/admin/events";
      const res = await fetch(url, {
        method: isEdit ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, description, images }),
      });
      const json = await res.json() as { error?: string };
      if (!res.ok) { setError(json.error ?? "Failed to save event"); return; }
      router.push("/admin/events");
      router.refresh();
    } catch {
      setError("Network error — please try again");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">{error}</div>
      )}

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          Event Title <span className="text-red-500">*</span>
        </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Vesak Celebration 2024"
          className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
          required />
      </div>

      {/* Date + Year badge */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          Event Date <span className="text-red-500">*</span>
          <span className="ml-1 text-xs text-neutral-400 font-normal">(pick any past or future date)</span>
        </label>
        <div className="flex items-center gap-3">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            className="flex-1 border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
            required />
          {year && (
            <span className="flex-shrink-0 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              Year: {year}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-neutral-400">
          The year badge shows which year this event will appear under on the website.
          To add a 2024 event, simply pick a 2024 date.
        </p>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4}
          placeholder="Describe the event…"
          className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-y"
          required />
      </div>

      {/* Photos */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-medium text-neutral-700">
            Event Photos
            {images.length > 0 && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 text-xs font-normal">
                {images.length} photo{images.length !== 1 ? "s" : ""}
              </span>
            )}
          </label>
        </div>

        {/* Existing images */}
        {images.length > 0 && (
          <div className="space-y-3 mb-4">
            {images.map((img, idx) => (
              <ImageRow
                key={img.id}
                img={img}
                index={idx}
                total={images.length}
                onUpdate={updateImage}
                onRemove={removeImage}
                onMove={moveImage}
                onReplace={replaceImage}
              />
            ))}
          </div>
        )}

        {/* Upload area */}
        <div
          className="border-2 border-dashed border-neutral-200 rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer"
          onClick={() => uploadInputRef.current?.click()}
        >
          {uploading ? (
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
              <span className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              Uploading…
            </div>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                className="w-8 h-8 text-neutral-300 mx-auto mb-2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <p className="text-sm font-medium text-neutral-600">Click to upload photos</p>
              <p className="text-xs text-neutral-400 mt-1">You can select multiple photos at once · JPG, PNG, WebP, GIF · max 10MB each</p>
            </>
          )}
        </div>
        <input
          ref={uploadInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          multiple
          className="sr-only"
          onChange={(e) => handleNewUploads(e.target.files)}
        />
        {uploadError && (
          <p className="mt-2 text-xs text-red-600">{uploadError}</p>
        )}

        {/* Hover-to-replace hint */}
        {images.length > 0 && (
          <p className="mt-2 text-xs text-neutral-400">
            Tip: hover over any photo and click the camera icon to replace it.
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={saving}
          className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark disabled:opacity-50 transition-colors">
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Event"}
        </button>
        <button type="button" onClick={() => router.back()}
          className="px-6 py-2.5 rounded-xl border border-neutral-200 text-neutral-700 text-sm font-medium hover:bg-neutral-50 transition-colors">
          Cancel
        </button>
      </div>
    </form>
  );
}
