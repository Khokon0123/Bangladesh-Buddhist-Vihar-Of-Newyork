# Data-Driven Architecture Documentation

This document explains the data-driven architecture implemented for the Buddhist Temple website, making it CMS-ready and backend-integration friendly.

## Overview

All content has been refactored from hardcoded values to a structured, data-driven system. This architecture:

- ✅ Separates content from presentation
- ✅ Makes content easily manageable
- ✅ Prepares for CMS integration
- ✅ Maintains reusable UI components
- ✅ Allows unique layouts per page

## Architecture Structure

```
lib/
├── types/
│   └── content.ts          # TypeScript type definitions
├── data/
│   ├── articles.ts         # Blog articles data
│   ├── books.ts            # Book library data
│   ├── venerables.ts       # Teacher/venerable profiles
│   ├── practices.ts        # Practice programs (Dhamma School, Meditation)
│   ├── resources.ts        # Downloadable resources
│   ├── navigation.ts       # Navigation menu structure
│   ├── site-config.ts      # Site-wide configuration
│   └── index.ts            # Central data export
├── api/
│   └── content.ts          # Content API layer (abstraction)
└── utils/
    └── date.ts             # Date formatting utilities
```

## Content Types

### 1. Articles (Blog Posts)
- **Location**: `lib/data/articles.ts`
- **Type**: `Article` (defined in `lib/types/content.ts`)
- **API**: `articlesAPI.getAll()`, `articlesAPI.getBySlug()`, etc.

**Features**:
- SEO metadata support
- Author references (can link to Venerables)
- Category and tag support
- Featured article flag
- Publication dates

### 2. Books
- **Location**: `lib/data/books.ts`
- **Type**: `Book`
- **API**: `booksAPI.getAll()`, `booksAPI.getBySlug()`, etc.

**Features**:
- Multiple categories
- Download/external links
- ISBN and metadata
- New book flagging

### 3. Venerables (Teachers)
- **Location**: `lib/data/venerables.ts`
- **Type**: `Venerable`
- **API**: `venerablesAPI.getAll()`, `venerablesAPI.getBySlug()`, etc.

**Features**:
- Biography support
- Teaching specialties
- Lineage information
- Social links
- Ordering for display

### 4. Practices
- **Location**: `lib/data/practices.ts`
- **Types**: `Practice`, `Course`, `Lesson`, `Meditation`
- **API**: `practicesAPI.getAll()`, `practicesAPI.courses.getAll()`, etc.

**Features**:
- Hierarchical structure (Practice → Courses → Lessons)
- Level-based organization
- Meditation types and instructions

### 5. Resources
- **Location**: `lib/data/resources.ts`
- **Type**: `Resource`
- **API**: `resourcesAPI.getAll()`, `resourcesAPI.getByCategory()`, etc.

**Features**:
- Multiple resource types (PDF, video, audio, external)
- Category organization
- File metadata (size, duration)

### 6. Navigation
- **Location**: `lib/data/navigation.ts`
- **Type**: `NavItem`
- **API**: `navigationAPI.getItems()`

**Features**:
- Hierarchical menu structure
- Dropdown support
- Ordering system

### 7. Site Configuration
- **Location**: `lib/data/site-config.ts`
- **Type**: `SiteConfig`
- **API**: `siteAPI.getConfig()`

**Features**:
- Social media links
- Contact information
- Footer content
- Site metadata

## API Layer

The `lib/api/content.ts` file provides a unified interface for accessing all content. This abstraction layer:

1. **Current Implementation**: Uses static data files
2. **Future Implementation**: Can be swapped to fetch from:
   - Headless CMS (Contentful, Strapi, Sanity)
   - REST API
   - GraphQL API
   - Database queries

### Example: Current vs Future

**Current (Static)**:
```typescript
export const articlesAPI = {
  getAll: getAllArticles,  // Returns static array
  getBySlug: getArticleBySlug,
};
```

**Future (CMS)**:
```typescript
export const articlesAPI = {
  getAll: async () => {
    const response = await fetch(`${CMS_API_URL}/articles`);
    return response.json();
  },
  getBySlug: async (slug: string) => {
    const response = await fetch(`${CMS_API_URL}/articles?slug=${slug}`);
    return response.json()[0];
  },
};
```

## Usage in Components

### Before (Hardcoded)
```tsx
const articles = [
  { id: "1", title: "Article 1", ... },
  { id: "2", title: "Article 2", ... },
];
```

### After (Data-Driven)
```tsx
import { articlesAPI } from "@/lib/api/content";

const articles = articlesAPI.getAll();
```

## Usage in Pages

### Example: Blog Page
```tsx
import { articlesAPI } from "@/lib/api/content";
import { formatDate } from "@/lib/utils/date";

export default function BlogPage() {
  const articles = articlesAPI.getAll();
  const categories = articlesAPI.getCategories();
  
  return (
    // Render articles using data
  );
}
```

### Example: Article Detail Page
```tsx
import { articlesAPI } from "@/lib/api/content";
import { notFound } from "next/navigation";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articlesAPI.getBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  return (
    // Render article detail
  );
}
```

## Component Refactoring

### Header Component
- ✅ Uses `navigationAPI.getItems()` for menu structure
- ✅ Uses `siteAPI.getConfig()` for social links
- ✅ Maintains all existing functionality

### Footer Component
- ✅ Uses `siteAPI.getConfig()` for footer content
- ✅ Uses `navigationAPI.getItems()` for quick links
- ✅ Dynamic copyright year from config

## Date Formatting

The `lib/utils/date.ts` utility provides:
- `formatDate()`: Full date format (March 15, 2024)
- `formatDateShort()`: Short format (Mar 15, 2024)
- `getRelativeTime()`: Relative time (2 days ago)

## CMS Integration Guide

### Step 1: Choose a CMS
Popular options:
- **Contentful**: Headless CMS with great API
- **Strapi**: Self-hosted, open-source
- **Sanity**: Real-time collaboration
- **Prismic**: Developer-friendly

### Step 2: Map Content Types
Each content type in `lib/types/content.ts` maps to a CMS content model:

```typescript
// CMS Content Model: Article
{
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: richText;
  category: reference;
  author: reference; // Links to Venerable
  publishedAt: date;
  // ... etc
}
```

### Step 3: Update API Layer
Replace static data functions with API calls:

```typescript
// lib/api/content.ts
const CMS_API_URL = process.env.CMS_API_URL;

export const articlesAPI = {
  getAll: async () => {
    const response = await fetch(`${CMS_API_URL}/articles`);
    const data = await response.json();
    return data.items.map(mapCMSArticleToArticle);
  },
  // ... etc
};
```

### Step 4: Add Data Mapping
Create mapping functions to transform CMS data to your types:

```typescript
function mapCMSArticleToArticle(cmsArticle: CMSArticle): Article {
  return {
    id: cmsArticle.sys.id,
    slug: cmsArticle.fields.slug,
    title: cmsArticle.fields.title,
    // ... map all fields
  };
}
```

## Benefits

### 1. Content Management
- ✅ Non-developers can update content
- ✅ Content changes don't require code deployments
- ✅ Version control for content
- ✅ Preview capabilities

### 2. Scalability
- ✅ Easy to add new content types
- ✅ Supports large content volumes
- ✅ Efficient data fetching
- ✅ Caching strategies

### 3. Maintainability
- ✅ Clear separation of concerns
- ✅ Type safety with TypeScript
- ✅ Consistent data structure
- ✅ Easy to test

### 4. Flexibility
- ✅ Swap data sources easily
- ✅ Support multiple content sources
- ✅ A/B testing capabilities
- ✅ Personalization ready

## Migration Checklist

When migrating to a CMS:

- [ ] Set up CMS account and content models
- [ ] Migrate existing content to CMS
- [ ] Update `lib/api/content.ts` with API calls
- [ ] Add environment variables for API keys
- [ ] Implement caching strategy
- [ ] Add error handling
- [ ] Set up preview mode
- [ ] Test all pages
- [ ] Update deployment process

## Best Practices

1. **Always use the API layer**: Never import data files directly in components
2. **Type safety**: Use TypeScript types for all content
3. **Error handling**: Handle missing content gracefully
4. **Performance**: Implement caching for API calls
5. **SEO**: Ensure CMS supports SEO metadata
6. **Images**: Use CMS image optimization features

## Future Enhancements

- [ ] Add content preview mode
- [ ] Implement content search
- [ ] Add content filtering and sorting
- [ ] Support multiple languages
- [ ] Add content versioning
- [ ] Implement content scheduling
- [ ] Add analytics tracking

## File Structure Summary

```
lib/
├── types/content.ts          # All TypeScript types
├── data/                     # Static data (current)
│   ├── articles.ts
│   ├── books.ts
│   ├── venerables.ts
│   ├── practices.ts
│   ├── resources.ts
│   ├── navigation.ts
│   └── site-config.ts
├── api/content.ts            # API abstraction layer
└── utils/date.ts             # Utility functions
```

## Conclusion

The data-driven architecture provides a solid foundation for:
- ✅ Current static content management
- ✅ Future CMS integration
- ✅ Scalable content growth
- ✅ Maintainable codebase

All components remain reusable, layouts stay unique, and content is now completely separated from presentation logic.

