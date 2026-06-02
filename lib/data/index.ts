/**
 * Central Data Export
 * Single entry point for all data access
 * 
 * This file provides a unified interface for accessing all content data.
 * In the future, this can be easily swapped to fetch from a CMS API.
 */

// Export all data functions
export * from "./articles";
export * from "./books";
export * from "./venerables";
export * from "./practices";
export * from "./resources";
export * from "./events";
export * from "./navigation";
export * from "./site-config";

// Re-export types for convenience
export * from "../types/content";

