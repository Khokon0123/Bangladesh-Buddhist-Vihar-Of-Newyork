"use client";

import Link from "next/link";
import { useState, useMemo } from "react";

// Icon Components
const PDFIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const VideoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const SearchIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "pdf" | "video" | "external";
  url: string;
  author?: string;
  duration?: string;
}

// Sample resource data - in a real app, this would come from a CMS or database
const resources: Resource[] = [
  {
    id: "dhammapada-pdf",
    title: "The Dhammapada (PDF)",
    description: "Complete text of the Dhammapada with commentary",
    category: "Sutras",
    type: "pdf",
    url: "#",
    author: "Various Translators",
  },
  {
    id: "meditation-guide",
    title: "Meditation Guide for Beginners",
    description: "Step-by-step guide to starting your meditation practice",
    category: "Meditation",
    type: "pdf",
    url: "#",
    author: "Venerable Master Chen",
  },
  {
    id: "buddhist-philosophy-video",
    title: "Introduction to Buddhist Philosophy",
    description: "Video series exploring core Buddhist concepts",
    category: "Teachings",
    type: "video",
    url: "#",
    author: "Venerable Bhikkhuni Sunita",
    duration: "45 min",
  },
  {
    id: "mindfulness-practice",
    title: "Mindfulness Practice Resources",
    description: "Collection of mindfulness exercises and practices",
    category: "Practice",
    type: "external",
    url: "#",
  },
  {
    id: "heart-sutra-pdf",
    title: "The Heart Sutra (PDF)",
    description: "Translation and commentary on the Heart Sutra",
    category: "Sutras",
    type: "pdf",
    url: "#",
    author: "Thich Nhat Hanh",
  },
  {
    id: "walking-meditation-video",
    title: "Walking Meditation Instruction",
    description: "Video guide to practicing walking meditation",
    category: "Meditation",
    type: "video",
    url: "#",
    author: "Venerable Ajahn Somchai",
    duration: "20 min",
  },
  {
    id: "buddhist-dictionary",
    title: "Buddhist Terms Dictionary",
    description: "Comprehensive dictionary of Buddhist terminology",
    category: "Reference",
    type: "external",
    url: "#",
  },
  {
    id: "compassion-practice-pdf",
    title: "Compassion Practice Guide",
    description: "Detailed guide to loving-kindness and compassion practices",
    category: "Practice",
    type: "pdf",
    url: "#",
    author: "Venerable Bhikkhuni Pema",
  },
  {
    id: "zen-teachings-video",
    title: "Zen Teachings Series",
    description: "Video series on Zen Buddhism and meditation",
    category: "Teachings",
    type: "video",
    url: "#",
    author: "Venerable Master Wang",
    duration: "60 min",
  },
  {
    id: "sutra-library",
    title: "Digital Sutra Library",
    description: "Online collection of Buddhist sutras and texts",
    category: "Sutras",
    type: "external",
    url: "#",
  },
  {
    id: "meditation-schedule",
    title: "Meditation Schedule Template",
    description: "Printable template for tracking your meditation practice",
    category: "Practice",
    type: "pdf",
    url: "#",
  },
  {
    id: "buddhist-ethics-video",
    title: "Buddhist Ethics and Precepts",
    description: "Video lecture on Buddhist ethical guidelines",
    category: "Teachings",
    type: "video",
    url: "#",
    author: "Venerable Master Li",
    duration: "35 min",
  },
];

const categories = ["All", "Sutras", "Meditation", "Teachings", "Practice", "Reference"];

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const getIcon = () => {
    switch (resource.type) {
      case "pdf":
        return <PDFIcon />;
      case "video":
        return <VideoIcon />;
      case "external":
        return <ExternalLinkIcon />;
    }
  };

  const getTypeLabel = () => {
    switch (resource.type) {
      case "pdf":
        return "PDF";
      case "video":
        return "Video";
      case "external":
        return "External Link";
    }
  };

  const getTypeColor = () => {
    switch (resource.type) {
      case "pdf":
        return "bg-red-100 text-red-700";
      case "video":
        return "bg-blue-100 text-blue-700";
      case "external":
        return "bg-green-100 text-green-700";
    }
  };

  const cardContent = (
    <div className="bg-white rounded-xl p-6 border border-neutral-200/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gentle h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className={`p-2 rounded-lg ${getTypeColor()}`}>
              {getIcon()}
            </div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${getTypeColor()}`}>
              {getTypeLabel()}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-primary-dark mb-2 group-hover:text-primary transition-colors duration-300">
            {resource.title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-neutral-600 text-sm mb-4 leading-relaxed flex-1">
        {resource.description}
      </p>

      {/* Footer */}
      <div className="pt-4 border-t border-neutral-100">
        <div className="flex items-center justify-between text-xs text-neutral-500">
          <div className="flex items-center gap-3">
            {resource.author && <span>{resource.author}</span>}
            {resource.duration && (
              <>
                {resource.author && <span>•</span>}
                <span>{resource.duration}</span>
              </>
            )}
          </div>
          <span className="text-primary font-medium">{resource.category}</span>
        </div>
      </div>
    </div>
  );

  if (resource.type === "external") {
    return (
      <a
        href={resource.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <a
      href={resource.url}
      download={resource.type === "pdf"}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {cardContent}
    </a>
  );
};

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const matchesSearch =
        searchQuery === "" ||
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.author?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main id="main-content" className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "300px" }}>
        <img
          src="/images/Buddhist_Digital_Resource_Center_Logo.jpg"
          alt="Buddhist Digital Resource Center"
          style={{ width: "100%", height: "300px", objectFit: "cover", objectPosition: "center center", display: "block" }}
        />
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/95 border-b border-neutral-200 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-neutral-900 placeholder-neutral-400"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-soft"
                      : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-neutral-600">
                {filteredResources.length}{" "}
                {filteredResources.length === 1 ? "resource" : "resources"} found
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
                {searchQuery && ` for "${searchQuery}"`}
              </p>
            </div>

            {/* Resources Grid */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-neutral-600 mb-4">
                  No resources found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-primary-dark mb-4">
              Need Help Finding Resources?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Our teachers can help guide you to the right resources for your
              practice and learning goals.
            </p>
            <Link
              href="/venerable-introduction"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact Our Teachers
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

