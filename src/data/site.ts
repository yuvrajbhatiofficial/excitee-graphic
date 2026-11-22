export interface NavItem {
  label: string;
  href: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
  number: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  aspectClass: string;
  colSpanClass: string;
  shapeClass?: string;
  image: string;
  alt: string;
  year: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    wordmark: string;
    submark: string;
    location: string;
    category: string;
    foundedYear: string;
    description: string;
  };
  navigation: NavItem[];
  hero: {
    headline: string;
    supportingStatement: string;
    scrollPrompt: string;
  };
  philosophy: {
    badge: string;
    statementPart1: string;
    statementEmphasized: string;
    statementPart2: string;
    pillars: PhilosophyPillar[];
  };
  portfolio: {
    sectionNumber: string;
    sectionTitle: string;
    subtitle: string;
    projects: PortfolioProject[];
  };
  services: {
    sectionNumber: string;
    sectionTitle: string;
    subtitle: string;
    items: ServiceItem[];
  };
  contact: {
    headline: string;
    supportingStatement: string;
    email: string;
    instagramHandle: string;
    instagramUrl: string;
    location: string;
    ctaLabel: string;
  };
  footer: {
    agencyIntro: string;
    exploreLinks: NavItem[];
    socialLinks: { label: string; href: string }[];
  };
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    twitterHandle: string;
    themeColor: string;
  };
}

export const siteData: SiteConfig = {
  brand: {
    name: "EXCITEE.GRAPHIC",
    wordmark: "EXCITEE.GRAPHIC",
    submark: "CREATIVE & MEDIA AGENCY",
    location: "India",
    category: "Creative Agency / Media Agency",
    foundedYear: "2026",
    description: "An independent creative studio shaping brands through visual storytelling, cinematic production, and editorial graphic direction.",
  },

  navigation: [
    { label: "HOME", href: "#" },
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ],

  hero: {
    headline: "WE MAKE\nVISUALS\nMATTER.",
    supportingStatement: "An independent creative studio shaping brands through visual storytelling.",
    scrollPrompt: "SCROLL TO EXPLORE",
  },

  philosophy: {
    badge: "01 / PHILOSOPHY",
    statementPart1: "WE DON'T JUST CREATE CONTENT.\nWE CREATE HOW PEOPLE\n",
    statementEmphasized: "SEE",
    statementPart2: " YOUR BRAND.",
    pillars: [
      {
        number: "01",
        title: "CREATIVE THINKING",
        description: "We approach every project with a distinct visual direction and a focus on meaningful storytelling.",
      },
      {
        number: "02",
        title: "VISUAL EXECUTION",
        description: "From cinematic production to thoughtful design, we turn ideas into compelling visual experiences.",
      },
      {
        number: "03",
        title: "BRAND IMPACT",
        description: "We help businesses build a stronger visual identity and communicate with their audience.",
      },
    ],
  },

  portfolio: {
    sectionNumber: "02 / SELECTED WORK",
    sectionTitle: "SELECTED WORK",
    subtitle: "A curated curation of cinematic frames, tactile packaging, and brand identities crafted with Swiss editorial discipline.",
    projects: [
      {
        id: "project-01",
        title: "CINEMATIC FRAMES & COMMERCIAL REELS",
        category: "Cinematic Shoots",
        description: "High-contrast motion picture campaign captured with anamorphic glass and raw grain treatment.",
        aspectClass: "aspect-[16/10]",
        colSpanClass: "col-span-12 lg:col-span-8",
        shapeClass: "rounded-none",
        image: "/images/portfolio/cinematic-shoot.svg",
        alt: "Cinematic film still showcasing high-contrast mood and atmospheric lighting",
        year: "2024",
      },
      {
        id: "project-02",
        title: "MONOLITHIC PROPERTY & ARCHITECTURE",
        category: "Property & Architecture",
        description: "Brutalist concrete architecture study highlighting tactile light transitions and structural scale.",
        aspectClass: "aspect-[9/16]",
        colSpanClass: "col-span-12 sm:col-span-6 lg:col-span-4",
        shapeClass: "rounded-full overflow-hidden",
        image: "/images/portfolio/building.jpeg",
        alt: "Architectural monolithic structure with dramatic light and shadow in a pill-shaped frame",
        year: "2024",
      },
      {
        id: "project-03",
        title: "EDITORIAL FASHION BRANDING",
        category: "Fashion Branding",
        description: "Haute couture visual campaign exploring silhouette contrast and monochromatic elegance.",
        aspectClass: "aspect-square",
        colSpanClass: "col-span-12 sm:col-span-6 lg:col-span-5",
        shapeClass: "rounded-full overflow-hidden mx-auto w-full max-w-[480px]",
        image: "/images/portfolio/faishon.jpeg",
        alt: "Circular editorial fashion campaign frame highlighting haute couture silhouettes",
        year: "2024",
      },
      {
        id: "project-04",
        title: "TACTILE PACKAGING & IDENTITY",
        category: "Packaging Design & Graphics",
        description: "Custom geometric typography, debossed letterpress details, and sustainable editorial packaging.",
        aspectClass: "aspect-[16/9]",
        colSpanClass: "col-span-12 lg:col-span-7",
        shapeClass: "rounded-none",
        image: "/images/portfolio/package.jpeg",
        alt: "Wide rectangular composition of minimalist packaging design with Swiss typographic layout",
        year: "2024",
      },
    ],
  },

  services: {
    sectionNumber: "03 / SERVICES",
    sectionTitle: "OUR CAPABILITIES",
    subtitle: "Precision-engineered creative services crafted to position modern brands with visual clarity and cultural resonance.",
    items: [
      {
        id: "service-01",
        number: "01",
        title: "VISUAL PRODUCTION",
        description: "Cinematic shoots, commercial photography, reels, and visual storytelling.",
        deliverables: [
          "Commercial & Brand Films",
          "High-Impact Short-Form Reels",
          "Architectural & Lifestyle Photography",
          "Post-Production Color Grading",
        ],
        icon: "film",
      },
      {
        id: "service-02",
        number: "02",
        title: "BRAND IDENTITY",
        description: "Brand strategy, visual identity, packaging, graphic design, and creative direction.",
        deliverables: [
          "Complete Brand Systems",
          "Editorial Typography & Guidelines",
          "Product & Sustainable Packaging",
          "Art Direction & Visual Tone",
        ],
        icon: "compass",
      },
      {
        id: "service-03",
        number: "03",
        title: "DIGITAL PRESENCE",
        description: "Social media content, creative campaigns, and social media marketing.",
        deliverables: [
          "Curated Feed Direction & Aesthetic",
          "Viral Video Editing & Audio Design",
          "Targeted Campaign Architecture",
          "Content Growth Strategy",
        ],
        icon: "sparkles",
      },
    ],
  },

  contact: {
    headline: "HAVE A PROJECT\nIN MIND?",
    supportingStatement: "Let's create something worth remembering.",
    email: "contact@exciteegraphic.com",
    instagramHandle: "@excitee.graphic",
    instagramUrl: "https://instagram.com/excitee.graphic",
    location: "India",
    ctaLabel: "START A CONVERSATION",
  },

  footer: {
    agencyIntro: "Excitee.graphic is an independent Indian creative and media agency dedicated to cinematic shoots, editorial brand identity, and deliberate visual storytelling.",
    exploreLinks: [
      { label: "Home", href: "#" },
      { label: "About Studio", href: "#about" },
      { label: "Selected Work", href: "#work" },
      { label: "Services & Capabilities", href: "#services" },
      { label: "Client Inquiries", href: "#contact" },
    ],
    socialLinks: [
      { label: "Instagram (@excitee.graphic)", href: "https://instagram.com/excitee.graphic" },
      { label: "Email (Direct)", href: "mailto:contact@exciteegraphic.com" },
    ],
  },

  seo: {
    title: "Excitee.graphic — Creative Agency | Branding, Shoots & Visual Storytelling",
    description: "Excitee.graphic is an independent creative and media agency in India specializing in cinematic shoots, branding, social media marketing, graphic design, and visual storytelling.",
    canonical: "https://exciteegraphic.com/",
    ogImage: "https://exciteegraphic.com/images/og-image.png",
    twitterHandle: "@exciteegraphic",
    themeColor: "#f2f2f2",
  },
};
