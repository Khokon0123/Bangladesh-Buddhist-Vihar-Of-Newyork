"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import Link from "next/link";
import { useLang } from "./LanguageProvider";
import type { Lang } from "@/lib/i18n";

const en = {
  title: "Something went wrong",
  text: "We apologize for the inconvenience. An unexpected error has occurred. Please try refreshing the page or return to the home page.",
  refresh: "Refresh Page",
  home: "Go Home",

};

const bn: typeof en = {
  title: "কিছু একটা সমস্যা হয়েছে",
  text: "অসুবিধার জন্য আমরা দুঃখিত। একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে পৃষ্ঠাটি রিফ্রেশ করুন অথবা হোম পেজে ফিরে যান।",
  refresh: "পৃষ্ঠা রিফ্রেশ করুন",
  home: "হোম পেজে যান",

};

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  lang?: Lang;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary Component
 * Catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the whole app
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error to error reporting service in production
    if (process.env.NODE_ENV === "production") {
      // TODO: Integrate with error reporting service (e.g., Sentry, LogRocket)
      console.error("Error caught by boundary:", error, errorInfo);
    } else {
      // In development, log to console
      console.error("Error caught by boundary:", error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      const t = this.props.lang === "bn" ? bn : en;
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
          <div className="max-w-md w-full text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 mx-auto text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-primary-dark mb-4">
              {t.title}
            </h1>
            <p className="text-neutral-600 mb-6">
              {t.text}
            </p>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
                <p className="text-sm font-mono text-red-800 break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200"
              >
                {t.refresh}
              </button>
              <Link
                href="/"
                className="px-6 py-3 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
              >
                {t.home}
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Client-side error boundary wrapper
 * Use this in layout or page components
 */
export default function ErrorBoundaryWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { lang } = useLang();
  return <ErrorBoundary lang={lang}>{children}</ErrorBoundary>;
}

