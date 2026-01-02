# Technical Implementation Plan

## Project Structure & Setup

### Next.js Project Configuration
```typescript
// next.config.ts
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@radix-ui/react-icons']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.drkeithndlovu.com',
        pathname: '/artwork/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async rewrites() {
    return [
      {
        source: '/art/:slug',
        destination: '/artwork/:slug'
      }
    ]
  }
}
```

### Folder Structure
```
src/
├── app/
│   ├── (root)/
│   │   ├── page.tsx                 // Homepage
│   │   └── layout.tsx              // Root layout
│   ├── about/
│   │   ├── page.tsx                // About overview
│   │   ├── biography/page.tsx      // Detailed biography
│   │   ├── medical-career/page.tsx // Medical background
│   │   └── artistic-journey/page.tsx
│   ├── medical-practice/
│   │   ├── page.tsx                // Practice overview
│   │   ├── westpoint/page.tsx      // Westpoint Medical Centre
│   │   ├── services/page.tsx       // Medical services
│   │   └── patient-info/page.tsx   // Patient information
│   ├── art-portfolio/
│   │   ├── page.tsx                // Portfolio overview
│   │   ├── paintings/page.tsx      // Paintings gallery
│   │   ├── sculptures/page.tsx     // Sculptures gallery
│   │   ├── digital/page.tsx        // Digital art
│   │   └── [slug]/page.tsx         // Individual artwork
│   ├── artistico-studios/
│   │   ├── page.tsx                // Studio overview
│   │   ├── services/page.tsx       // Studio services
│   │   └── artists/page.tsx        // Featured artists
│   ├── journal/
│   │   ├── page.tsx                // Blog overview
│   │   ├── [slug]/page.tsx         // Individual blog post
│   │   └── category/[category]/page.tsx
│   ├── contact/
│   │   └── page.tsx                // Contact forms
│   └── api/
│       ├── contact/route.ts        // Contact form handler
│       ├── artwork/route.ts        // Artwork data API
│       └── newsletter/route.ts     // Newsletter signup
├── components/
│   ├── ui/                         // shadcn/ui components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── MobileMenu.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ArtworkGrid.tsx
│   │   ├── Biography.tsx
│   │   ├── Services.tsx
│   │   └── ContactForm.tsx
│   ├── artwork/
│   │   ├── ArtworkCard.tsx
│   │   ├── ArtworkViewer.tsx
│   │   ├── ArtworkFilter.tsx
│   │   └── ArtworkModal.tsx
│   └── common/
│       ├── LoadingSpinner.tsx
│       ├── ImageOptimized.tsx
│       └── SectionContainer.tsx
├── lib/
│   ├── utils.ts                    // Utility functions
│   ├── types.ts                    // TypeScript types
│   ├── data/
│   │   ├── artwork.ts              // Artwork data
│   │   ├── services.ts             // Medical services data
│   │   └── testimonials.ts         // Client testimonials
│   └── api/
│       ├── artwork.ts              // Artwork API functions
│       └── contact.ts              // Contact form functions
├── styles/
│   └── globals.css                 // Global styles
└── public/
    ├── images/
    │   ├── artwork/                // Artwork images
    │   ├── portraits/              // Professional photos
    │   └── medical/                // Medical practice photos
    └── icons/                      // Custom icons
```

## Component Architecture

### Core Layout Components

#### Header Component
```typescript
// components/layout/Header.tsx
interface HeaderProps {
  variant?: 'default' | 'transparent' | 'compact'
}

const Header: React.FC<HeaderProps> = ({ variant = 'default' }) => {
  return (
    <header className={cn(
      "sticky top-0 z-50 border-b bg-white/95 backdrop-blur",
      {
        'bg-transparent border-transparent': variant === 'transparent',
        'py-2': variant === 'compact',
      }
    )}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Logo />
          <NavigationMenu />
          <MobileMenuTrigger className="lg:hidden" />
        </nav>
      </div>
    </header>
  )
}
```

#### Navigation Component
```typescript
// components/layout/Navigation.tsx
const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about', 
    submenu: [
      { label: 'Biography', href: '/about/biography' },
      { label: 'Medical Career', href: '/about/medical-career' },
      { label: 'Artistic Journey', href: '/about/artistic-journey' }
    ]
  },
  { label: 'Medical Practice', href: '/medical-practice' },
  { label: 'Art Portfolio', href: '/art-portfolio' },
  { label: 'Artistico Studios', href: '/artistico-studios' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' }
]

const Navigation: React.FC = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            {item.submenu ? (
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
            ) : (
              <NavigationMenuLink href={item.href}>
                {item.label}
              </NavigationMenuLink>
            )}
            {item.submenu && (
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {item.submenu.map((subItem) => (
                    <NavigationMenuLink key={subItem.href} href={subItem.href}>
                      {subItem.label}
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

### Artwork Components

#### ArtworkGrid Component
```typescript
// components/artwork/ArtworkGrid.tsx
interface ArtworkGridProps {
  artworks: Artwork[]
  columns?: 2 | 3 | 4
  showFilter?: boolean
  infinite?: boolean
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ 
  artworks, 
  columns = 3, 
  showFilter = true,
  infinite = false 
}) => {
  return (
    <div className="space-y-8">
      {showFilter && <ArtworkFilter />}
      
      <div className={cn(
        "grid gap-6",
        {
          'grid-cols-1 md:grid-cols-2': columns === 2,
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': columns === 3,
          'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4': columns === 4,
        }
      )}>
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} />
        ))}
      </div>
      
      {infinite && <InfiniteScrollTrigger />}
    </div>
  )
}
```

#### ArtworkCard Component
```typescript
// components/artwork/ArtworkCard.tsx
interface ArtworkCardProps {
  artwork: Artwork
  size?: 'sm' | 'md' | 'lg'
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, size = 'md' }) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={artwork.images.thumbnail}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          View Details
        </Button>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{artwork.title}</h3>
        <p className="text-sm text-muted-foreground mb-2">{artwork.year}</p>
        <p className="text-sm text-muted-foreground">{artwork.medium.join(', ')}</p>
        {artwork.availability === 'available' && artwork.price && (
          <p className="text-lg font-semibold mt-3 text-primary">
            ${artwork.price.toLocaleString()}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
```

## Data Management Strategy

### TypeScript Types
```typescript
// lib/types.ts
export interface Artwork {
  id: string
  title: string
  slug: string
  year: number
  medium: string[]
  dimensions: {
    height: number
    width: number
    depth?: number
    unit: 'cm' | 'in'
  }
  description: string
  inspiration?: string
  technique?: string
  availability: 'available' | 'sold' | 'private_collection' | 'not_for_sale'
  price?: number
  category: ArtworkCategory
  subcategory?: string
  tags: string[]
  images: {
    hero: string
    thumbnail: string
    gallery: string[]
    details: string[]
  }
  exhibitions?: Exhibition[]
  provenance?: string
  certification?: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Exhibition {
  title: string
  venue: string
  location: string
  startDate: Date
  endDate?: Date
  type: 'solo' | 'group' | 'public' | 'private'
}

export type ArtworkCategory = 
  | 'paintings'
  | 'sculptures' 
  | 'digital'
  | 'commissioned'
  | 'medical-inspired'

export interface MedicalService {
  id: string
  name: string
  description: string
  category: 'primary-care' | 'specialized' | 'emergency' | 'preventive'
  duration?: number
  price?: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: 'art' | 'medical' | 'personal' | 'industry'
  tags: string[]
  author: string
  publishedAt: Date
  updatedAt: Date
  featured?: boolean
  image?: string
}
```

### Data Layer
```typescript
// lib/api/artwork.ts
export const getArtworks = async (filters?: ArtworkFilters): Promise<Artwork[]> => {
  // In production, this would connect to a database or CMS
  const artworks = await import('@/lib/data/artwork').then(m => m.artworks)
  
  if (!filters) return artworks
  
  return artworks.filter(artwork => {
    if (filters.category && artwork.category !== filters.category) return false
    if (filters.availability && artwork.availability !== filters.availability) return false
    if (filters.year && artwork.year !== filters.year) return false
    if (filters.priceRange) {
      const price = artwork.price || 0
      if (price < filters.priceRange.min || price > filters.priceRange.max) return false
    }
    return true
  })
}

export const getArtworkBySlug = async (slug: string): Promise<Artwork | null> => {
  const artworks = await getArtworks()
  return artworks.find(artwork => artwork.slug === slug) || null
}
```

## Performance Optimization

### Image Optimization Strategy
```typescript
// components/common/ImageOptimized.tsx
interface ImageOptimizedProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
}

const ImageOptimized: React.FC<ImageOptimizedProps> = ({
  src,
  alt,
  priority = false,
  className,
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+kXRNlk+8XTx5VLwvA0IytmfXOdcNcjcxNgO0MqGrjCGGwzipRjt6nWWh7SHT0pdOLj9rC4dBhj/bEMxNzLZB4FPgZXPP6hqgJ/AhQ=="
      quality={90}
      className={className}
      {...props}
    />
  )
}
```

### Loading States & Error Boundaries
```typescript
// components/common/LoadingSpinner.tsx
export const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ 
  size = 'md' 
}) => (
  <div className={cn(
    "animate-spin rounded-full border-2 border-gray-300 border-t-primary",
    {
      'h-4 w-4': size === 'sm',
      'h-8 w-8': size === 'md',
      'h-12 w-12': size === 'lg',
    }
  )} />
)

// components/common/ErrorBoundary.tsx
export class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <ErrorFallback />
    }
    return this.props.children
  }
}
```

## SEO & Metadata Strategy

### Dynamic Metadata
```typescript
// app/art-portfolio/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const artwork = await getArtworkBySlug(params.slug)
  
  if (!artwork) {
    return {
      title: 'Artwork Not Found | Dr. Keith Ndlovu'
    }
  }

  return {
    title: `${artwork.title} | Dr. Keith Ndlovu Art Portfolio`,
    description: artwork.description,
    openGraph: {
      title: artwork.title,
      description: artwork.description,
      images: [artwork.images.hero],
      type: 'article',
      url: `https://drkeithndlovu.com/art-portfolio/${artwork.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: artwork.title,
      description: artwork.description,
      images: [artwork.images.hero],
    },
  }
}
```

## Form Handling & API Routes

### Contact Form Implementation
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json()
  
  const validationResult = contactSchema.safeParse(body)
  if (!validationResult.success) {
    return NextResponse.json(
      { error: 'Invalid form data' },
      { status: 400 }
    )
  }

  try {
    // Send email notification
    await sendContactEmail(validationResult.data)
    
    // Save to database if needed
    // await saveContactInquiry(validationResult.data)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
```

## Deployment & Infrastructure

### Vercel Configuration
```json
// vercel.json
{
  "functions": {
    "app/api/**/*.ts": {
      "maxDuration": 10
    }
  },
  "images": {
    "domains": ["images.drkeithndlovu.com"],
    "minimumCacheTTL": 86400
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Environment Configuration
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://drkeithndlovu.com
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX

# Email service (Resend, SendGrid, etc.)
EMAIL_API_KEY=your_email_api_key
CONTACT_EMAIL=info@drkeithndlovu.com

# CMS (if using Sanity, Contentful, etc.)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Database (if needed)
DATABASE_URL=your_database_url
```