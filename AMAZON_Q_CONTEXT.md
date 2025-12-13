# Amazon Q Context - Ning K Chen Portfolio

## Project Overview
Next.js 16 portfolio website with React 19, TypeScript, and Tailwind CSS. Dockerized with nginx reverse proxy and SSL/HTTPS support.

## Tech Stack
- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Build**: Standalone output for Docker
- **Infrastructure**: Docker, nginx, Let's Encrypt SSL
- **Deployment**: Docker Compose with SSL termination

## Project Structure
```
~/Servers/ning-k-chen/
├── app/
│   ├── page.tsx          # Main portfolio page with skills, dark mode
│   ├── layout.tsx        # Root layout
│   ├── globals.css       # Tailwind styles + custom CSS
│   └── favicon.svg
├── public/
│   └── assets/           # Static assets (fonts, images, documents)
├── ssl/                  # SSL certificates
├── certbot/              # Let's Encrypt automation
├── Dockerfile            # Multi-stage Node.js build
├── docker-compose.yml    # Services orchestration
├── nginx.conf            # Reverse proxy config
├── manage.sh             # Docker management script
└── package.json          # Dependencies and scripts
```

## Mobile vs Desktop Layout Management

### Responsive Design Strategy
- **Tailwind Breakpoints**: Uses `md:`, `sm:`, `lg:` prefixes for responsive design
- **Mobile-First**: Base styles target mobile, desktop styles added with breakpoints
- **Orientation Handling**: Special `landscape:` classes for mobile landscape mode

### Key Responsive Patterns
```tsx
// Mobile menu toggle (hidden on desktop)
<div className="md:hidden">
  <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>

// Desktop navigation (hidden on mobile)  
<div className="hidden md:flex space-x-8">

// Responsive text sizing
<h1 className="text-5xl md:text-6xl font-bold">

// Responsive grid layouts
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
```

### Mobile-Specific Features
- **Hamburger Menu**: Toggles mobile navigation overlay
- **Touch-Friendly**: Larger tap targets and spacing
- **Orientation Changes**: Auto-reload on orientation change for layout fixes
- **Landscape Adjustments**: Special handling for mobile landscape with `landscape:min-h-[200vh]`

## CSS Styling Architecture

### Theme System
- **CSS Variables**: HSL color system with light/dark variants
- **Dynamic Theming**: JavaScript toggles `.dark` class on `documentElement`
- **Cookie Persistence**: Theme preference saved in browser cookies

### Custom CSS Classes

#### Glass Morphism Effects
```css
.glass {
  background: linear-gradient(135deg, rgba(242, 250, 242, 0.8) 0%, rgba(242, 250, 242, 0.7) 100%);
  backdrop-filter: blur(60px) saturate(250%) contrast(1.1) brightness(1.05);
  border: 1px solid rgba(74, 222, 128, 0.35);
  box-shadow: multiple layered shadows;
}
```

#### Card Components
```css
.glass-card {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px) saturate(150%);
  border: 1px solid rgba(142, 76, 36, 0.15);
}
```

#### Animations
```css
.typing-animation {
  animation: typing 2s steps(9) forwards, blink 0.75s step-end infinite;
}
```

### Color System
- **Primary**: Green theme (`--primary: 142 76% 36%`)
- **Background**: Light/dark adaptive backgrounds
- **Semantic Colors**: Card, muted, accent, border variants
- **HSL Format**: All colors use HSL for better manipulation

### Tailwind Integration
- **Custom Properties**: Tailwind uses CSS variables via `@theme inline`
- **Utility Classes**: Standard Tailwind classes with custom color mappings
- **Component Classes**: Custom `.glass` and `.glass-card` for reusable effects

## Key Files

### manage.sh - Docker Management
```bash
./manage.sh rebuild    # Rebuild and restart (use after code changes)
./manage.sh start      # Start services
./manage.sh stop       # Stop services
./manage.sh logs       # View logs
./manage.sh status     # Check status
```

### Dockerfile
Multi-stage build: deps → builder → runner with standalone output

### next.config.ts
- Standalone output for Docker
- Remote image patterns for CDN assets
- Current image domains: cdn.jsdelivr.net, docs.hub.amazon.dev, kiro.dev, raw.githubusercontent.com
- **Note**: To add new external image sources, add the hostname to remotePatterns array in next.config.ts

### app/page.tsx Features
- Client-side portfolio with skills grid
- Dark/light theme toggle with cookie persistence
- Mobile responsive with orientation change handling
- Skills categorized: Frontend, Backend, Cloud, Tools
- Glass morphism UI effects
- Typing animation for name display

## Development Workflow

1. **Make Changes**: Edit files in app/ or root
2. **Rebuild**: `cd ~/Servers/ning-k-chen && ./manage.sh rebuild`
3. **Check Logs**: `./manage.sh logs` if issues occur

## SSL/HTTPS Setup
- Let's Encrypt certificates in certbot/
- nginx handles SSL termination
- Auto-renewal configured

## Dependencies
```json
{
  "next": "16.0.7",
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "tailwindcss": "^4",
  "typescript": "^5"
}
```

## Docker Services
- **app**: Next.js application (port 3000)
- **nginx**: Reverse proxy with SSL (ports 80/443)
- **certbot**: SSL certificate management

## Important Notes
- Always use `./manage.sh rebuild` after code changes
- Standalone build required for Docker deployment
- Theme state persists via document cookies
- Mobile orientation changes trigger page reload
- Glass effects have fallbacks for unsupported browsers
- All images use Next.js Image component for optimization
