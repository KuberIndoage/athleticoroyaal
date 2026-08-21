import { ProductItem, ProductCategoryInfo, StatItem, BlogPost } from '../types';

export const BRAND_INFO = {
  name: "ATHLETICO ROYAAL",
  legalName: "ATHLETICO ROYAAL SPORTSWEAR MANUFACTURING",
  tagline: "Performance. Precision. Legacy.",
  description: "Specialized sports apparel manufacturer producing high-end dry-fit jerseys, engineered tracksuits, and customized teamwear with Japanese Tajima embroidery and Italian sublimation technologies.",
  primaryColor: "#e62129",
  darkColor: "#111317",
  phone: "+91 98765 43210",
  email: "wholesale@athleticoroyaal.com",
  address: "Plot 42, Apparel & Sports Goods Complex, Sports City Industrial Area, Meerut, UP 250002, India",
  establishedYear: "2012",
  productionCapacity: "120,000 Units / Month",
};

export const STATS_DATA: StatItem[] = [
  {
    id: "stat-1",
    number: "120K+",
    label: "Monthly Garment Capacity",
    subtext: "Vertically integrated knitting, cutting & printing plant",
  },
  {
    id: "stat-2",
    number: "250+",
    label: "Partner Clubs & Academies",
    subtext: "Kitted state leagues, university & collegiate teams",
  },
  {
    id: "stat-3",
    number: "100+",
    label: "Wash Cycle Durability",
    subtext: "Zero peeling sublimation & anti-pilling test certified",
  },
  {
    id: "stat-4",
    number: "7 - 10 Days",
    label: "Express Squad Dispatch",
    subtext: "Guaranteed turnaround for customized team rosters",
  },
];

export const CATEGORIES_DATA: ProductCategoryInfo[] = [
  {
    id: "tshirts",
    title: "T-Shirts & Matchwear",
    highlight: "160-220 GSM Dry-Fit",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop",
    count: 24,
    description: "Sublimated match jerseys, training tees, compression base layers, and crewneck team shirts.",
  },
  {
    id: "pants",
    title: "Pants & Trousers",
    highlight: "4-Way Mechanical Stretch",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop",
    count: 16,
    description: "Sideline warmup pants, coach trousers, and moisture-wicking athletic bottoms.",
  },
  {
    id: "trackpants",
    title: "Trackpants & Joggers",
    highlight: "Tapered Ergonomic Cut",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop",
    count: 18,
    description: "Gym training joggers, travel trackpants with concealed YKK zippers and reinforced gussets.",
  },
  {
    id: "caps",
    title: "Performance Caps",
    highlight: "Laser Perforated UPF 50+",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    count: 10,
    description: "Featherlight running caps, 3D puff embroidered team snapbacks, and moisture-wicking athletic visors.",
  },
  {
    id: "bags",
    title: "Sports Duffels & Bags",
    highlight: "900D Waterproof Cordura",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    count: 8,
    description: "Team kit bags with ventilated shoe compartments, club backpacks, and athlete travel gear.",
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-01",
    name: "Apex Sublimated Match Jersey (Pro Fit)",
    category: "tshirts",
    categoryLabel: "T-Shirts & Jerseys",
    tagline: "180 GSM Bird-Eye Interlock with Capillary Evaporation",
    description: "Engineered for professional football, cricket, and multisport squads. Full-body digital sublimation with infinite sponsor placements and player roster customization.",
    price: 699,
    bulkPriceEstimate: "₹349 / pc (100+ pcs)",
    moq: 20,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Capillary Dry-Fit Wicking", "Anti-Chafe Flatlock Seams", "UV 40+ Sun Protection", "0% Color Degradation"],
    fabricSpecs: {
      composition: "100% Micro-Poly Micro-Mesh",
      weightGsm: "180 GSM",
      weave: "Bird-Eye Hydro-Pique",
      properties: ["Moisture Dispersal", "Anti-Odor Silver Shield", "Sublimation Ready"]
    },
    sizes: ["XS", "S", "M", "L", "XL", "2XL", "3XL"],
    colors: [
      { name: "Crimson Red", hex: "#e62129" },
      { name: "Midnight Black", hex: "#111317" },
      { name: "Royal Blue", hex: "#1e40af" },
      { name: "Optic White", hex: "#ffffff" }
    ],
    customizationOptions: ["Edge-to-Edge Sublimation", "3D Silicone Crest", "Player Names & Numbers"],
    bestseller: true,
    tags: ["180 GSM", "Sublimated", "Match Grade", "Anti-Odor"]
  },
  {
    id: "prod-02",
    name: "Vanguard Team Warmup Tracksuit",
    category: "trackpants",
    categoryLabel: "Trackpants & Warmups",
    tagline: "Podium Presentation Set with Micro-Mesh Breathable Lining",
    description: "Full-zip presentation tracksuit designed for tournament travel, awards ceremonies, and cold-weather sidelines. Custom color blocking with Tajima 3D chest embroidery.",
    price: 1899,
    bulkPriceEstimate: "₹999 / set (50+ sets)",
    moq: 20,
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Windproof Micro-Poly Outer", "Soft Thermal Lining", "Concealed YKK Pockets", "Custom Institutional Trims"],
    fabricSpecs: {
      composition: "92% Polyester, 8% Elastane",
      weightGsm: "240 GSM",
      weave: "Diamond Ripstop Weave",
      properties: ["Wind-Resistant", "Breathable Lining", "DWR Water Repellent"]
    },
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Black & Crimson", hex: "#111317" },
      { name: "Navy & White", hex: "#0f172a" },
      { name: "Slate Grey", hex: "#475569" }
    ],
    customizationOptions: ["3D Puff Embroidery", "Sublimated Side Panels", "Custom Zipper Pulls"],
    bestseller: true,
    tags: ["240 GSM", "Podium Set", "Tajima Embroidery", "YKK Zips"]
  },
  {
    id: "prod-03",
    name: "Pro-Velocity Tapered Training Joggers",
    category: "trackpants",
    categoryLabel: "Trackpants & Joggers",
    tagline: "Ergonomic 4-Way Stretch with Reinforced Knee Articulation",
    description: "Designed for intensive gym training, athletic drills, and travel. Features anti-snag French Terry knit, ankle zip adjusters, and zippered security pockets.",
    price: 899,
    bulkPriceEstimate: "₹449 / pc (50+ pcs)",
    moq: 20,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["4-Way Poly-Spandex Stretch", "Deep Zippered Pockets", "Ankle Gussets", "Elastic Waist with Drawcord"],
    fabricSpecs: {
      composition: "88% Polyester, 12% Spandex",
      weightGsm: "220 GSM",
      weave: "Technical Interlock Knit",
      properties: ["Shape Retention", "Abrasion Resistant", "Quick Dry"]
    },
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Pitch Black", hex: "#111317" },
      { name: "Dark Heather Grey", hex: "#374151" },
      { name: "Deep Navy", hex: "#1e3a8a" }
    ],
    customizationOptions: ["Reflective Heat Transfer", "Woven Club Patch"],
    bestseller: false,
    tags: ["220 GSM", "4-Way Stretch", "YKK Pockets", "Gym & Squad"]
  },
  {
    id: "prod-04",
    name: "AeroTech Laser-Perforated Runner Cap",
    category: "caps",
    categoryLabel: "Performance Caps",
    tagline: "Featherlight 65g Construction with UV 50+ Defense",
    description: "Ultralight technical running and team cap with laser-perforated cooling side panels, internal absorbent terry sweatband, and adjustable micro-buckle.",
    price: 399,
    bulkPriceEstimate: "₹189 / pc (50+ pcs)",
    moq: 30,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Laser-Perforated Ventilation", "Absorbent Terry Sweatband", "UPF 50+ UV Defense", "Crushable Packable Visor"],
    fabricSpecs: {
      composition: "100% Quick-Dry Taslan Poly",
      weightGsm: "120 GSM",
      weave: "Taslan Weave",
      properties: ["Featherlight", "Water Resistant", "Fast Evaporating"]
    },
    sizes: ["One Size (Adjustable)"],
    colors: [
      { name: "Pure White", hex: "#ffffff" },
      { name: "Carbon Black", hex: "#111317" },
      { name: "Crimson Red", hex: "#e62129" }
    ],
    customizationOptions: ["3D Puff Embroidery", "Reflective Logo Print"],
    bestseller: false,
    tags: ["65g Ultra-Light", "Laser Perforated", "UPF 50+", "Custom Embroidered"]
  },
  {
    id: "prod-05",
    name: "Tournament Sideline Warmup Pants",
    category: "pants",
    categoryLabel: "Pants & Trousers",
    tagline: "Weather-Resistant DWR Finish with Side Breakaway Zips",
    description: "Engineered for match day sidelines, coaching staff, and pre-game athletic routines. Water-repellent finish with full or 3/4 length side zips for quick footwear removal.",
    price: 999,
    bulkPriceEstimate: "₹499 / pc (40+ pcs)",
    moq: 20,
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Breakaway Leg Zippers", "Water-Repellent DWR", "Reinforced Seam Tape", "Ergonomic Waistband"],
    fabricSpecs: {
      composition: "90% Polyester, 10% Spandex",
      weightGsm: "210 GSM",
      weave: "Mechanical Stretch Weave",
      properties: ["DWR Coated", "Wind Blocking", "Flexible"]
    },
    sizes: ["S", "M", "L", "XL", "2XL"],
    colors: [
      { name: "Carbon Black", hex: "#111317" },
      { name: "Navy Blue", hex: "#0f172a" }
    ],
    customizationOptions: ["Sublimated Side Stripes", "Heat Pressed Crest"],
    bestseller: false,
    tags: ["210 GSM", "Side Zips", "Water Repellent", "Coaching Staff"]
  },
  {
    id: "prod-06",
    name: "Squad Master Team Kit Duffel (55L)",
    category: "bags",
    categoryLabel: "Sports Duffels & Bags",
    tagline: "900D Waterproof Cordura with Ventilated Cleat Tunnel",
    description: "Heavy-duty 55L athletic team travel duffel with independent ventilated shoe compartment, padded shoulder harness, water-resistant base, and custom team name embroidery.",
    price: 1499,
    bulkPriceEstimate: "₹749 / pc (30+ pcs)",
    moq: 20,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop"
    ],
    features: ["Separate Cleat Tunnel", "900D Ballistic Nylon", "Heavy Duty #10 Zippers", "Padded Ergonomic Straps"],
    fabricSpecs: {
      composition: "100% 900D Ballistic Polyester",
      weightGsm: "420 GSM",
      weave: "Oxford Canvas",
      properties: ["Waterproof PU Backing", "Tear-Proof", "Heavy Duty Load"]
    },
    sizes: ["55L Standard Capacity"],
    colors: [
      { name: "Black & Red", hex: "#111317" },
      { name: "Solid Black", hex: "#000000" },
      { name: "Navy Blue", hex: "#1e3a8a" }
    ],
    customizationOptions: ["Direct High-Density Embroidery", "Custom Color Panels"],
    bestseller: true,
    tags: ["55 Liters", "900D Ballistic", "Shoe Tunnel", "Embroidered"]
  }
];

export const CRAFTSMANSHIP_STEPS = [
  {
    step: "01",
    title: "Yarn Knitting & GSM Formulation",
    tagline: "Custom Yarn Matrix Engineering",
    description: "We spin and knit high-filament micro-polyester and elastane yarns in-house. GSM is calibrated with digital spectrophotometers to achieve ideal capillary wicking tension without adding excess weight.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    details: [
      "160 - 240 GSM specialized micro-pique formulations",
      "Silver-ion antibacterial infusion during filament extrusion",
      "Zero pilling and 100% opacity certification",
    ]
  },
  {
    step: "02",
    title: "Digital Sublimation & Pantone Calenders",
    tagline: "Gaseous Molecular Color Fusion",
    description: "Using Italian dye calenders and Epson industrial print engines, pigments turn gaseous and fuse permanently inside the core molecular polymer chains, guaranteeing 0% fading after 100+ boiling washes.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    details: [
      "±0.1% Pantone Matching System (PMS) color fidelity",
      "Zero added garment weight or pore clogging",
      "OEKO-TEX 100 non-toxic certified Italian dyes",
    ]
  },
  {
    step: "03",
    title: "Automated Laser Cutting & Tajima 3D Embroidery",
    tagline: "Millimeter Precision Assembly",
    description: "Patterns are cut using automated computer-guided laser tables to prevent fabric edge fraying. Team crests are stitched with Japanese 15-needle Tajima embroidery heads utilizing 3D foam underlays.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    details: [
      "Sub-millimeter laser cutting precision for anatomical fit",
      "High-density Tajima 3D raised embroidery for club badges",
      "German Madeira color-fast rayon threads",
    ]
  },
  {
    step: "04",
    title: "Japanese 5S Flatlock Seaming & Assembly",
    tagline: "Frictionless Ergonomic Stitching",
    description: "Garments are assembled on 4-needle 6-thread flatlock seaming machines. The flat stitch lies flush against the skin, eliminating chafing during intensive athletic movement.",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
    details: [
      "4-needle, 6-thread reinforced flatlock seams",
      "Bar-tacked stress points on pocket corners and gussets",
      "Tested for 35kg tensile tear resistance",
    ]
  },
  {
    step: "05",
    title: "4-Point QA & Roster-Grouped Dispatch",
    tagline: "Strict Zero-Defect Protocol",
    description: "Every order undergoes 4-point inspection: dimensional stability, seam tensile stretch, color-fastness, and barcode verification before being grouped and labeled by team roster numbers.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    details: [
      "Steam tunnel shape-retention finishing",
      "Roster sorting by player names & jersey numbers",
      "Eco-grade protective polybag packaging with fast door dispatch",
    ]
  }
];

export const CUSTOMIZATION_METHODS = [
  {
    id: "sublimation",
    title: "Full Thermal Sublimation",
    subtitle: "Complete Kit Customization",
    description: "Edge-to-edge full surface printing with unlimited sponsor logos and photographic color gradients. Permanently infused into the fabric fibers.",
    moq: "20 Pcs",
    durability: "100+ Washes (Zero Fading)",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "embroidery",
    title: "Tajima 3D Crest Embroidery",
    subtitle: "Podium & Institutional Crests",
    description: "Multi-needle Japanese embroidery with dense foam underlays for raised 3D crests, academy emblems, and monogrammed logos.",
    moq: "20 Pcs",
    durability: "Lifetime of Garment",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "silicone",
    title: "3D Silicone Heat Press",
    subtitle: "Tactile Performance Badges",
    description: "High-density matte textured silicone badges that flex with the garment and produce striking tactile dimensions on jerseys and joggers.",
    moq: "50 Pcs",
    durability: "60+ Washes (Flexible)",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "dtf",
    title: "Digital Film & Screen Print",
    subtitle: "Event & Marathon Merch",
    description: "Vibrant high-resolution digital film printing and industrial screen printing for high-volume corporate marathons and event apparel.",
    moq: "50 Pcs",
    durability: "50+ Washes",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop"
  }
];

export const WHOLESALE_TIERS = [
  {
    tier: "Squad Tier",
    volumeRange: "20 - 50 Pcs",
    discount: "5% - 15% OFF",
    turnaround: "6 - 8 Days",
    idealFor: "Local Sports Clubs, School Teams, Academy Squads",
    popular: false,
    perks: [
      "Custom Player Numbers & Surnames Included",
      "Choice of 180 GSM Pro-Poly Fabric",
      "Free 2D Digital Tech Pack Preview",
      "Standard Doorstep Express Dispatch",
    ]
  },
  {
    tier: "Club & Academy Tier",
    volumeRange: "50 - 250 Pcs",
    discount: "18% - 28% OFF",
    turnaround: "7 - 10 Days",
    idealFor: "State Athletic Academies, Collegiate Leagues, Marathon Runs",
    popular: true,
    perks: [
      "Complete Custom Pantone PMS Color Matching",
      "Free Physical Sizing Sample Kit Provided",
      "Tajima 3D Embroidered Crest Setup Included",
      "Direct Priority Manufacturing Lane",
      "Individual Player Name Tag Packaging",
    ]
  },
  {
    tier: "Institutional & Enterprise",
    volumeRange: "250 - 2,000+ Pcs",
    discount: "30% - 45% OFF",
    turnaround: "10 - 15 Days",
    idealFor: "Federations, Corporate Sports Games, National Tournaments",
    popular: false,
    perks: [
      "Dedicated Industrial Merchandiser Assigned",
      "Custom Woven Neck Labels & Hangtags",
      "Staggered Dispatch to Multiple Branch Locations",
      "Official Institutional GST Billing & Credit Terms",
      "Full Lab GSM & Tensile Inspection Reports",
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: "Apex Football Academy", type: "State League Club" },
  { name: "National Sports University", type: "Collegiate Athletics" },
  { name: "Tech Mahindra Marathon", type: "Corporate Event" },
  { name: "Delhi Premier Cricket League", type: "Tournament Board" },
  { name: "Gold's Gym North India", type: "Fitness Apparel" },
  { name: "Doon Athletic School", type: "Institutional Teamwear" },
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    name: "Coach Devraj Nair",
    role: "Head Technical Coach",
    organization: "Apex State Football Academy",
    rating: 5,
    sport: "Football Matchwear",
    comment: "Athletico Royaal has kitted our entire academy of 350+ athletes for 3 consecutive seasons. The fabric breathability under 38°C humidity is unmatched, and the custom sublimation colors have not faded a single shade.",
  },
  {
    id: "test-2",
    name: "Ananya Deshmukh",
    role: "VP Employee Engagement",
    organization: "Global Tech Services Corp",
    rating: 5,
    sport: "Marathon Tees & Duffels",
    comment: "We ordered 2,500 dry-fit marathon tees and customized duffel bags for our annual corporate sports festival. Sizing was spot on, zero stitching defects, and delivered 3 days ahead of our deadline. Exceptional B2B partner.",
  },
  {
    id: "test-3",
    name: "Prof. Rajesh Vardhan",
    role: "Director of Physical Education",
    organization: "National Sports University",
    rating: 5,
    sport: "Podium Tracksuits",
    comment: "The Tajima 3D embroidery on our college presentation tracksuits looks like an international European club kit. The students and faculty are proud to wear Athletico Royaal on the national podium.",
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: "blog-01",
    title: "The Science of 180 GSM: Why Fabric Weight Dictates Athletic Endurance",
    slug: "science-of-180-gsm-fabric-weight",
    excerpt: "Discover how microscopic capillary structures in poly-elastane blends regulate core temperature and shave vital seconds off athlete sprint times.",
    content: "When designing high-intensity sportswear, textile GSM (Grams per Square Metre) is not just a weight metric—it is the biological engine of temperature control...",
    readTime: "4 min read",
    date: "Aug 14, 2026",
    category: "Fabric Engineering",
    author: "R. Royaal (Technical Director)",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    tags: ["Textile Science", "Performance", "Dry-Fit"]
  },
  {
    id: "blog-02",
    title: "Sublimation vs Screen Printing: Choosing the Ultimate Branding for Team Kits",
    slug: "sublimation-vs-screen-printing-team-kits",
    excerpt: "A comprehensive breakdown for team managers, procurement heads, and tournament organizers on longevity, cost-per-wear, and skin breathability.",
    content: "Choosing the right branding method can mean the difference between a pristine team kit that lasts three seasons and a peeling, uncomfortable jersey after three washes...",
    readTime: "5 min read",
    date: "Jul 28, 2026",
    category: "B2B Customization",
    author: "Apparel Engineering Team",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    tags: ["Customization", "Team Kits", "Sublimation"]
  },
  {
    id: "blog-03",
    title: "B2B Procurement Guide: How to Order Custom Sportswear for 500+ Member Organizations",
    slug: "b2b-procurement-guide-bulk-sportswear",
    excerpt: "Step-by-step blueprint on sample sizing runs, PMS color approvals, roster grouping, and timeline planning for institutions and corporate sports meets.",
    content: "Managing a bulk sportswear order for corporate marathons or collegiate sports departments requires strict quality gates and logistics precision...",
    readTime: "6 min read",
    date: "Jun 19, 2026",
    category: "Institutional Guide",
    author: "Vikram S., Institutional Sales Lead",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop",
    tags: ["B2B Wholesale", "Procurement", "Marathon"]
  }
];
