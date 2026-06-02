# Production Deployment Checklist

This checklist ensures your Buddhist Temple website is ready for production deployment on Vercel (or any hosting platform).

## Pre-Deployment Checklist

### ✅ Environment Setup

- [ ] Create `.env.production` file with production environment variables
- [ ] Set `NEXT_PUBLIC_SITE_URL` to your production domain
- [ ] Configure any CMS API keys if using a headless CMS
- [ ] Set up analytics IDs (Google Analytics, etc.) if needed
- [ ] Verify all environment variables are set correctly

**Required Environment Variables:**
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NODE_ENV=production
```

### ✅ Build Validation

- [ ] Run `npm run build` successfully
- [ ] Run `npm run type-check` (no TypeScript errors)
- [ ] Run `npm run lint` (no linting errors)
- [ ] Test production build locally: `npm run build && npm start`
- [ ] Verify all pages load correctly
- [ ] Check for console errors in browser

### ✅ Error Handling

- [ ] Error boundaries are implemented (`components/ErrorBoundary.tsx`)
- [ ] Global error page exists (`app/error.tsx`)
- [ ] 404 page exists (`app/not-found.tsx`)
- [ ] Global error handler exists (`app/global-error.tsx`)
- [ ] Test error scenarios (invalid routes, API failures)

### ✅ Performance

- [ ] Images are optimized (Next.js Image component)
- [ ] Lazy loading implemented for below-fold content
- [ ] Font optimization configured
- [ ] Code splitting working correctly
- [ ] Run Lighthouse audit (target: 90+ performance score)
- [ ] Check Core Web Vitals (LCP < 2.5s, CLS < 0.1, FID < 100ms)

### ✅ Security

- [ ] Security headers configured in `next.config.mjs`
- [ ] No sensitive data in client-side code
- [ ] Environment variables properly scoped (NEXT_PUBLIC_* for client)
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Content Security Policy configured if needed

### ✅ SEO

- [ ] Metadata configured in `app/layout.tsx`
- [ ] Open Graph tags present
- [ ] Twitter Card tags present
- [ ] Sitemap.xml generated (if needed)
- [ ] Robots.txt configured (if needed)
- [ ] Canonical URLs set correctly

### ✅ Content

- [ ] All content is data-driven (using data API)
- [ ] No hardcoded content in components
- [ ] All images have alt text
- [ ] All links are valid
- [ ] Test all navigation links

### ✅ Accessibility

- [ ] Skip to main content link present
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA standards
- [ ] Screen reader testing (optional but recommended)

## Vercel Deployment Steps

### 1. Connect Repository

- [ ] Push code to GitHub/GitLab/Bitbucket
- [ ] Connect repository to Vercel
- [ ] Select the correct repository and branch

### 2. Configure Project

- [ ] Set Framework Preset: **Next.js**
- [ ] Root Directory: `.` (or your project root)
- [ ] Build Command: `npm run build` (default)
- [ ] Output Directory: `.next` (default)
- [ ] Install Command: `npm install` (default)

### 3. Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

- [ ] Add `NEXT_PUBLIC_SITE_URL` = `https://yourdomain.com`
- [ ] Add any CMS API keys
- [ ] Add analytics IDs
- [ ] Set for Production, Preview, and Development environments

### 4. Domain Configuration

- [ ] Add custom domain in Vercel Dashboard
- [ ] Configure DNS records (A, AAAA, or CNAME)
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Verify SSL certificate

### 5. Build Settings

- [ ] Node.js Version: 18.x or 20.x (check `package.json` engines)
- [ ] Enable "Automatically detect Framework"
- [ ] Build Command: `npm run build`
- [ ] Install Command: `npm install`

### 6. Deploy

- [ ] Trigger initial deployment
- [ ] Monitor build logs for errors
- [ ] Verify deployment succeeded
- [ ] Test production URL

## Post-Deployment Verification

### ✅ Functionality

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Forms submit correctly (if any)
- [ ] Images load properly
- [ ] Links work correctly
- [ ] Mobile responsiveness verified

### ✅ Performance

- [ ] Run Lighthouse audit on production
- [ ] Check Core Web Vitals in Google Search Console
- [ ] Verify image optimization working
- [ ] Check page load times
- [ ] Test on slow 3G connection

### ✅ SEO

- [ ] Verify metadata in page source
- [ ] Test Open Graph preview (use Facebook Debugger)
- [ ] Test Twitter Card preview
- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt accessible

### ✅ Monitoring

- [ ] Set up error tracking (Sentry, LogRocket, etc.)
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up uptime monitoring
- [ ] Configure alerts for errors

## Production Optimizations

### Recommended Additions

- [ ] **Error Tracking**: Integrate Sentry or similar
  ```bash
  npm install @sentry/nextjs
  ```

- [ ] **Analytics**: Add Google Analytics or Plausible
  ```bash
  npm install @next/third-parties
  ```

- [ ] **Monitoring**: Set up Vercel Analytics
  - Enable in Vercel Dashboard → Analytics

- [ ] **Caching**: Configure ISR (Incremental Static Regeneration) if needed
  ```typescript
  export const revalidate = 3600; // Revalidate every hour
  ```

## Rollback Plan

- [ ] Know how to rollback in Vercel (Deployments → Previous Deployment → Promote)
- [ ] Keep previous working version tagged in Git
- [ ] Document rollback procedure

## Maintenance

### Regular Tasks

- [ ] Update dependencies monthly: `npm update`
- [ ] Review and update content regularly
- [ ] Monitor error logs weekly
- [ ] Check performance metrics monthly
- [ ] Review security advisories
- [ ] Backup content/data regularly

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Vercel
   - Verify all dependencies are in `package.json`
   - Check for TypeScript errors: `npm run type-check`
   - Verify environment variables are set

2. **Images Not Loading**
   - Check image paths are correct
   - Verify Next.js Image optimization is working
   - Check image domains in `next.config.mjs` if using external images

3. **Environment Variables Not Working**
   - Ensure variables start with `NEXT_PUBLIC_` for client-side
   - Rebuild after adding new variables
   - Check variable names match exactly

4. **404 Errors**
   - Verify all routes exist
   - Check `app/not-found.tsx` is present
   - Verify dynamic routes are configured correctly

## Quick Deploy Command

```bash
# 1. Run production checks
node scripts/check-production-ready.js

# 2. Build and test locally
npm run build
npm start

# 3. Push to repository (triggers Vercel deployment)
git add .
git commit -m "Production ready"
git push origin main
```

## Vercel-Specific Features

### Recommended Settings

- [ ] Enable **Vercel Analytics** (free tier available)
- [ ] Enable **Web Vitals** monitoring
- [ ] Configure **Preview Deployments** for PRs
- [ ] Set up **Deployment Protection** rules
- [ ] Configure **Password Protection** if needed (for staging)

### Performance

- [ ] Enable **Edge Functions** if using API routes
- [ ] Configure **ISR** for static pages that need updates
- [ ] Use **Image Optimization** (automatic with Next.js Image)

## Final Checklist

Before going live:

- [ ] All tests pass
- [ ] Production build succeeds
- [ ] All environment variables set
- [ ] Domain configured and verified
- [ ] SSL certificate active
- [ ] Error tracking configured
- [ ] Analytics configured
- [ ] Content reviewed and approved
- [ ] Performance targets met
- [ ] SEO verified
- [ ] Mobile testing complete
- [ ] Cross-browser testing done
- [ ] Documentation updated

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: support@vercel.com
- **Project Issues**: Check GitHub issues

---

**Last Updated**: [Current Date]
**Deployment Target**: Vercel
**Next.js Version**: 14.2.35

