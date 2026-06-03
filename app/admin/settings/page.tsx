"use client";

import { useState, useEffect } from "react";
import type { SiteSettings } from "@/lib/server/kv";

type SettingsFormState = SiteSettings & { _loading: boolean; _error: string | null; _saved: boolean };

const DEFAULT: SiteSettings = {
  contactEmail: "",
  contactPhone: "",
  contactAddress: "",
  socialFacebook: "",
  socialInstagram: "",
  socialYoutube: "",
  footerQuote: "",
  footerQuoteAuthor: "",
};

export default function AdminSettingsPage() {
  const [form, setForm] = useState<SettingsFormState>({
    ...DEFAULT,
    _loading: true,
    _error: null,
    _saved: false,
  });

  useEffect(() => {
    fetch("/api/admin/settings")
      .then((r) => r.json())
      .then((data: SiteSettings) => setForm({ ...data, _loading: false, _error: null, _saved: false }))
      .catch(() => setForm((f) => ({ ...f, _loading: false, _error: "Failed to load settings" })));
  }, []);

  function set(field: keyof SiteSettings, value: string) {
    setForm((f) => ({ ...f, [field]: value, _saved: false }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setForm((f) => ({ ...f, _error: null, _saved: false }));
    const { _loading, _error, _saved, ...settings } = form;
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      const json = await res.json() as { ok?: boolean; error?: string };
      if (!res.ok) {
        setForm((f) => ({ ...f, _error: json.error ?? "Save failed" }));
      } else {
        setForm((f) => ({ ...f, _saved: true }));
      }
    } catch {
      setForm((f) => ({ ...f, _error: "Network error — please try again" }));
    }
  }

  if (form._loading) {
    return (
      <div className="flex items-center justify-center h-40 text-neutral-400 text-sm">
        Loading…
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-neutral-900">Site Settings</h1>
        <p className="text-sm text-neutral-500 mt-1">
          Contact information, social links, and footer content
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-8">
        {form._error && (
          <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
            {form._error}
          </div>
        )}
        {form._saved && (
          <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-sm text-green-700">
            Settings saved successfully.
          </div>
        )}

        {/* Contact */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-gentle p-6 space-y-4">
          <h2 className="text-base font-semibold text-neutral-800">Contact Information</h2>
          <Field label="Email" value={form.contactEmail} onChange={(v) => set("contactEmail", v)} type="email" placeholder="info@temple.org" />
          <Field label="Phone" value={form.contactPhone} onChange={(v) => set("contactPhone", v)} placeholder="+1 (718) 000-0000" />
          <Field label="Address" value={form.contactAddress} onChange={(v) => set("contactAddress", v)} placeholder="Queens, New York, NY" />
        </div>

        {/* Social */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-gentle p-6 space-y-4">
          <h2 className="text-base font-semibold text-neutral-800">Social Media</h2>
          <Field label="Facebook URL" value={form.socialFacebook} onChange={(v) => set("socialFacebook", v)} placeholder="https://facebook.com/..." />
          <Field label="Instagram URL" value={form.socialInstagram} onChange={(v) => set("socialInstagram", v)} placeholder="https://instagram.com/..." />
          <Field label="YouTube URL" value={form.socialYoutube} onChange={(v) => set("socialYoutube", v)} placeholder="https://youtube.com/..." />
        </div>

        {/* Footer */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-gentle p-6 space-y-4">
          <h2 className="text-base font-semibold text-neutral-800">Footer Quote</h2>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">Quote</label>
            <textarea
              value={form.footerQuote}
              onChange={(e) => set("footerQuote", e.target.value)}
              rows={3}
              className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-y"
              placeholder="An inspirational quote…"
            />
          </div>
          <Field label="Quote Attribution" value={form.footerQuoteAuthor} onChange={(v) => set("footerQuoteAuthor", v)} placeholder="— The Buddha" />
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-neutral-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
      />
    </div>
  );
}
