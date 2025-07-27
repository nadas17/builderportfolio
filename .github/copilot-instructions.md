# GitHub Copilot Instructions

This is a Turkish construction business portfolio website built with **Astro + React + Tailwind CSS**. The site uses a hybrid architecture where static content uses Astro components and interactive elements use React with Framer Motion.

## Architecture & Key Patterns

### Component Strategy
- **Astro components** (`.astro`): Static sections like Navigation, Hero, About, Services, Contact, Footer
- **React components** (`.tsx`): Interactive features requiring state or animations
- **Critical pattern**: React components must use `client:only="react"` directive in `src/pages/index.astro`
- Example: `<Projects client:only="react" />` for carousel functionality

### Custom Color System
All colors use the `construction-*` prefix defined in `tailwind.config.mjs`:
```css
.text-construction-yellow    /* #FBBF24 */
.bg-construction-orange     /* #F59E0B */  
.text-construction-black    /* #1F2937 */
```
Also available as `brand-primary`, `brand-secondary` variants.

### Animation Patterns
- **Framer Motion**: Only in React components, using consistent spring animations
- **Standard motion props**: `whileHover: { scale: 1.05 }`, `whileTap: { scale: 0.95 }`
- **CSS transitions**: For Astro components, use Tailwind `transition-all duration-300`
- See `AnimatedButton.tsx` for the canonical animation implementation

### Responsive Design
- **Mobile-first breakpoints**: `sm:`, `md:`, `lg:`, `xl:` following Tailwind conventions
- **Navigation pattern**: Desktop horizontal menu + mobile slide-down menu with hamburger animation
- **Typography scaling**: Text sizes increase across breakpoints (e.g., `text-sm sm:text-base md:text-xl`)

## File Organization & Key Files

- **Site config**: `src/config/site.ts` - Contains Turkish site title, description, and metadata
- **Global styles**: `src/styles/global.css` - Custom CSS classes and Tailwind layers
- **Main layout**: `src/layouts/Layout.astro` - HTML structure, fonts (Inter + Poppins), Turkish lang
- **Image assets**: `public/images/` - 27+ project photos, placeholder.svg, hero video

## Development Workflow

```bash
npm run dev     # Development server with hot reload
npm run build   # Production build (generates dist/)
npm run preview # Preview production build locally
```

### Component Development Pattern
1. **Static content**: Create `.astro` component with frontmatter for props/logic
2. **Interactive content**: Create `.tsx` component, import Framer Motion, add to `index.astro` with `client:only`
3. **Styling**: Use construction color classes, maintain mobile-first responsive design
4. **Turkish content**: All text content should be in Turkish following existing patterns

## Business Context
- **Target**: Turkish construction contractor (Elbeyi Gültekin) in Istanbul
- **Services**: Alçıpan, boya, seramik, tesisat, elektrik (drywall, paint, ceramics, plumbing, electrical)
- **Content tone**: Professional, experienced (30+ years), trustworthy
- **Navigation**: Turkish labels (Hakkımda, Hizmetler, Projeler, İletişim)
