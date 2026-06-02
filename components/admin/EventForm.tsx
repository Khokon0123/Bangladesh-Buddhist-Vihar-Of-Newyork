"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TempleEvent, EventImage } from "@/lib/types/content";
import ImageUploader from "./ImageUploader";

interface Props {
  event?: TempleEvent;
}

export default function EventForm({ event }: Props) {
  const router = useRouter();
  const isEdit = !!event;

  const [title, setTitle] = useState(event?.title ?? "");
  const [date, setDate] = useState(event?.date ?? "");
  const [description, setDescription] = useState(event?.description ?? "");
  const [images, setImages] = useState<EventImage[]>(event?.images ?? []);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function addImage(url: string) {
    setImages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), src: url, alt: "", caption: "" },
    ]);
  }

  function removeImage(id: string) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  function updateImage(id: string, field: "alt" | "caption", value: string) {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, [field]: value } : img))
    );
  }

  function moveImage(index: number, direction: "up" | "down") {
    const next = [...images];
    const swap = direction === "up" ? index - 1 : index + 1;
    if (swap < 0 || swap >= next.length) return;
    [next[index], next[swap]] = [next[swap], next[index]];
    setImages(next);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!title.trim() || !date || !description.trim()) {
      setError("Title, date, and description are required.");
      return;
    }
    setSaving(true);
    try {
      const url = isEdit
        ? `/api/admin/events/${event!.id}`
        : "/api/admin/events";
      const method = isEdit ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, date, description, images }),
      });
      const json = await res.json() as { error?: string };
      if (!res.ok) {
        setError(json.error ?? "Failed to save event");
        return;
      }
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
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          Event Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Vesak Celebration 2026"
          className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
          required
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          Event Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1.5">
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder="Describe the event…"
          className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-y"
          required
        />
      </div>

      {/* Images */}
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-3">
          Event Photos
        </label>
        <div className="space-y-3 mb-4">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className="flex gap-3 items-start p-3 bg-neutral-50 rounded-xl border border-neutral-200"
            >
              {/* Thumbnail */}
              <img
                src={img.src}
                alt={img.alt || "Event photo"}
                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
              />

              {/* Fields */}
              <div className="flex-1 min-w-0 space-y-2">
                <input
                  type="text"
                  value={img.alt}
                  onChange={(e) => updateImage(img.id, "alt", e.target.value)}
                  placeholder="Alt text (describe the image)"
                  className="w-full border border-neutral-200 rounded-md px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-primary/30 focus:border-primary outline-none"
                />
                <input
                  type="text"
                  value={img.caption ?? ""}
                  onChange={(e) => updateImage(img.id, "caption", e.target.value)}
                  placeholder="Caption (optional)"
                  className="w-full border border-neutral-200 rounded-md px-2.5 py-1.5 text-xs focus:ring-1 focus:ring-primary/30 focus:border-primary outline-none"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-1 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => moveImage(idx, "up")}
                  disabled={idx === 0}
                  className="p-1 text-neutral-400 hover:text-neutral-700 disabled:opacity-30"
                  aria-label="Move up"
                >
                  ↑
                </button>
                <button
                  type="button"
                  onClick={() => moveImage(idx, "down")}
                  disabled={idx === images.length - 1}
                  className="p-1 text-neutral-400 hover:text-neutral-700 disabled:opacity-30"
                  aria-label="Move down"
                >
                  ↓
                </button>
                <button
                  type="button"
                  onClick={() => removeImage(img.id)}
                  className="p-1 text-red-400 hover:text-red-600"
                  aria-label="Remove image"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
        <ImageUploader onUpload={addImage} />
        {!process.env.NEXT_PUBLIC_BLOB_AVAILABLE && images.length === 0 && (
          <p className="mt-2 text-xs text-neutral-400">
            Image uploads require Vercel Blob to be configured in production.
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={saving}
          className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark disabled:opacity-50 transition-colors"
        >
          {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Event"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2.5 rounded-xl border border-neutral-200 text-neutral-700 text-sm font-medium hover:bg-neutral-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
