export interface Template {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  tier: "basic" | "pro" | "ultimate";
  image: string;
  gallery: string[];
  features: string[];
  includes: string[];
  rating: number;
  reviewCount: number;
  salesCount: number;
  isFeatured: boolean;
  isFree: boolean;
  isNew: boolean;
  isBestseller: boolean;
  notionUrl: string;
  createdAt: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  icon: string;
  templateCount: number;
  color: string;
}

export const categories: Category[] = [
  {
    name: "Life OS & Planners",
    slug: "life-planner",
    description:
      "All-in-one life management systems. Plan your days, track goals, build habits, and organize everything in one place.",
    icon: "Sparkles",
    templateCount: 6,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Business & Startups",
    slug: "business",
    description:
      "Complete business operation hubs. Manage projects, teams, clients, and workflows like a Fortune 500 company.",
    icon: "Briefcase",
    templateCount: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Finance & Budgeting",
    slug: "finance",
    description:
      "Take control of your money. Track expenses, budgets, investments, subscriptions, and net worth in one dashboard.",
    icon: "DollarSign",
    templateCount: 5,
    color: "from-emerald-500 to-green-600",
  },
  {
    name: "Student & Study",
    slug: "student",
    description:
      "Ace your academics. Organize courses, assignments, notes, exam prep, and GPA tracking all in Notion.",
    icon: "GraduationCap",
    templateCount: 4,
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Content Creator",
    slug: "content-creator",
    description:
      "Manage your content empire. Plan, create, schedule, and analyze content across all platforms.",
    icon: "Video",
    templateCount: 4,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "CRM & Sales",
    slug: "crm-sales",
    description:
      "Never lose a lead again. Track contacts, deals, pipelines, and revenue in a powerful Notion CRM.",
    icon: "Users",
    templateCount: 4,
    color: "from-indigo-500 to-blue-600",
  },
  {
    name: "Health & Fitness",
    slug: "health-fitness",
    description:
      "Your personal wellness command center. Track workouts, meals, sleep, mental health, and progress.",
    icon: "Heart",
    templateCount: 4,
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Project Management",
    slug: "project-management",
    description:
      "Ship projects on time, every time. Agile boards, timelines, resource planning, and team collaboration.",
    icon: "LayoutDashboard",
    templateCount: 4,
    color: "from-teal-500 to-emerald-500",
  },
];

export const templates: Template[] = [
  // === LIFE PLANNER CATEGORY ===
  {
    id: "life-os-ultimate",
    slug: "life-os-ultimate",
    name: "Life OS — Ultimate Life Planner",
    description:
      "The most comprehensive life management system for Notion. Plan every aspect of your life from one beautiful dashboard.",
    longDescription:
      "Life OS is the ultimate all-in-one Notion template that transforms how you organize your entire life. From daily planning to long-term goal setting, habit tracking to journaling, finance management to health monitoring — everything lives in one beautifully designed, interconnected system. Built with 50+ linked databases, automated workflows, and stunning dashboards that make planning a joy, not a chore.",
    category: "Life OS & Planners",
    categorySlug: "life-planner",
    price: 89,
    originalPrice: 129,
    tier: "ultimate",
    image: "/templates/life-os-hero.png",
    gallery: [
      "/templates/life-os-1.png",
      "/templates/life-os-2.png",
      "/templates/life-os-3.png",
      "/templates/life-os-4.png",
    ],
    features: [
      "50+ interconnected databases",
      "Daily, weekly, monthly planners",
      "Goal setting & tracking with progress bars",
      "Habit tracker with streaks & analytics",
      "Journaling system with prompts",
      "Finance dashboard with budget tracking",
      "Health & fitness tracker",
      "Reading list & book notes",
      "Recipe collection & meal planner",
      "Travel planner with packing lists",
      "Automated dashboards & rollups",
      "Dark & light mode designs",
    ],
    includes: [
      "Full Life OS template",
      "Video setup walkthrough (15 min)",
      "Quickstart guide PDF",
      "50+ pre-built database views",
      "Lifetime free updates",
      "Priority email support",
    ],
    rating: 4.9,
    reviewCount: 847,
    salesCount: 4230,
    isFeatured: true,
    isFree: false,
    isNew: false,
    isBestseller: true,
    notionUrl: "#",
    createdAt: "2025-06-15",
  },
  {
    id: "life-planner-pro",
    slug: "life-planner-pro",
    name: "Life Planner Pro",
    description:
      "A powerful daily planner with goal tracking, habit builder, and weekly reviews. Perfect for ambitious professionals.",
    longDescription:
      "Life Planner Pro gives you the perfect balance between structure and flexibility. Designed for professionals who want to plan their days intentionally, track their goals systematically, and build lasting habits — without the overwhelm of a massive all-in-one system.",
    category: "Life OS & Planners",
    categorySlug: "life-planner",
    price: 49,
    originalPrice: 69,
    tier: "pro",
    image: "/templates/life-planner-pro-hero.png",
    gallery: [
      "/templates/life-planner-pro-1.png",
      "/templates/life-planner-pro-2.png",
    ],
    features: [
      "Daily & weekly planner views",
      "Goal setting with milestones",
      "Habit tracker with 30-day view",
      "Weekly review template",
      "Priority matrix (Eisenhower)",
      "Clean, minimal design",
    ],
    includes: [
      "Full template",
      "Setup guide",
      "30+ pre-built views",
      "Free updates",
    ],
    rating: 4.8,
    reviewCount: 423,
    salesCount: 2180,
    isFeatured: true,
    isFree: false,
    isNew: false,
    isBestseller: true,
    notionUrl: "#",
    createdAt: "2025-07-01",
  },
  {
    id: "minimal-daily-planner",
    slug: "minimal-daily-planner",
    name: "Minimal Daily Planner",
    description:
      "A clean, simple daily planner for people who love minimalism. No clutter, just clarity.",
    longDescription:
      "Sometimes less is more. The Minimal Daily Planner strips away complexity and gives you exactly what you need: a beautiful, distraction-free space to plan your day, capture thoughts, and stay on track.",
    category: "Life OS & Planners",
    categorySlug: "life-planner",
    price: 0,
    tier: "basic",
    image: "/templates/minimal-planner-hero.png",
    gallery: ["/templates/minimal-planner-1.png"],
    features: [
      "Daily task list",
      "Quick notes section",
      "Priority highlights",
      "Clean minimal design",
    ],
    includes: ["Full template", "Basic setup guide"],
    rating: 4.7,
    reviewCount: 1205,
    salesCount: 8900,
    isFeatured: false,
    isFree: true,
    isNew: false,
    isBestseller: false,
    notionUrl: "#",
    createdAt: "2025-05-01",
  },

  // === BUSINESS CATEGORY ===
  {
    id: "business-os-ultimate",
    slug: "business-os-ultimate",
    name: "Business OS — Complete Operations Hub",
    description:
      "Run your entire business from Notion. CRM, project management, finance, HR, and client delivery in one system.",
    longDescription:
      "Business OS is the enterprise-grade Notion system that replaces 10+ tools. From lead generation to client delivery, team management to financial tracking — every aspect of your business operations lives in one interconnected hub. Used by 2,000+ entrepreneurs and agencies worldwide.",
    category: "Business & Startups",
    categorySlug: "business",
    price: 129,
    originalPrice: 179,
    tier: "ultimate",
    image: "/templates/business-os-hero.png",
    gallery: [
      "/templates/business-os-1.png",
      "/templates/business-os-2.png",
      "/templates/business-os-3.png",
    ],
    features: [
      "Full CRM with pipeline management",
      "Project management with timelines",
      "Invoice & expense tracking",
      "Team management & HR hub",
      "Client portal & delivery tracker",
      "Meeting notes & agenda system",
      "SOPs & documentation wiki",
      "Financial dashboards & reports",
      "Automated status workflows",
      "100+ pre-built views",
    ],
    includes: [
      "Complete Business OS",
      "30-min video walkthrough",
      "PDF setup manual",
      "Sample data included",
      "Lifetime updates",
      "Priority support",
    ],
    rating: 4.9,
    reviewCount: 634,
    salesCount: 2890,
    isFeatured: true,
    isFree: false,
    isNew: false,
    isBestseller: true,
    notionUrl: "#",
    createdAt: "2025-08-10",
  },
  {
    id: "startup-launch-kit",
    slug: "startup-launch-kit",
    name: "Startup Launch Kit",
    description:
      "Everything you need to launch your startup. Business model canvas, roadmap, pitch deck planner, and fundraising tracker.",
    longDescription:
      "Go from idea to launch with a proven framework. The Startup Launch Kit gives you structured templates for every phase of building a startup — from validating your idea to tracking your fundraising rounds.",
    category: "Business & Startups",
    categorySlug: "business",
    price: 59,
    originalPrice: 79,
    tier: "pro",
    image: "/templates/startup-kit-hero.png",
    gallery: ["/templates/startup-kit-1.png", "/templates/startup-kit-2.png"],
    features: [
      "Business model canvas",
      "Product roadmap with milestones",
      "Pitch deck content planner",
      "Fundraising tracker",
      "Competitor analysis matrix",
      "OKR goal framework",
    ],
    includes: [
      "Full template",
      "Startup checklist PDF",
      "Free updates",
      "Email support",
    ],
    rating: 4.8,
    reviewCount: 312,
    salesCount: 1450,
    isFeatured: false,
    isFree: false,
    isNew: true,
    isBestseller: false,
    notionUrl: "#",
    createdAt: "2025-11-01",
  },

  // === FINANCE CATEGORY ===
  {
    id: "finance-hub-ultimate",
    slug: "finance-hub-ultimate",
    name: "Finance Hub — Complete Money System",
    description:
      "Your personal CFO in Notion. Track budgets, expenses, investments, subscriptions, net worth, and financial goals.",
    longDescription:
      "Finance Hub transforms Notion into a complete personal finance management system. With automated budget tracking, expense categorization, investment portfolio monitoring, subscription management, and net worth calculations — you'll finally have a clear picture of your entire financial life.",
    category: "Finance & Budgeting",
    categorySlug: "finance",
    price: 59,
    originalPrice: 79,
    tier: "ultimate",
    image: "/templates/finance-hub-hero.png",
    gallery: [
      "/templates/finance-hub-1.png",
      "/templates/finance-hub-2.png",
      "/templates/finance-hub-3.png",
    ],
    features: [
      "Monthly & yearly budget planner",
      "Expense tracker with categories",
      "Investment portfolio dashboard",
      "Subscription manager with renewals",
      "Net worth calculator",
      "Savings goals with progress bars",
      "Debt payoff tracker",
      "Bill payment calendar",
      "Financial reports & analytics",
      "Multi-currency support",
    ],
    includes: [
      "Complete Finance Hub",
      "Video setup guide",
      "Budget category presets",
      "Free updates",
      "Email support",
    ],
    rating: 4.9,
    reviewCount: 567,
    salesCount: 3100,
    isFeatured: true,
    isFree: false,
    isNew: false,
    isBestseller: true,
    notionUrl: "#",
    createdAt: "2025-07-20",
  },
  {
    id: "budget-tracker-basic",
    slug: "budget-tracker-basic",
    name: "Simple Budget Tracker",
    description:
      "A clean, easy-to-use budget tracker. Perfect for getting started with managing your money in Notion.",
    longDescription:
      "Start managing your money today with this beautifully simple budget tracker. No complicated formulas, no overwhelming features — just a clean interface to track income, expenses, and savings.",
    category: "Finance & Budgeting",
    categorySlug: "finance",
    price: 0,
    tier: "basic",
    image: "/templates/budget-basic-hero.png",
    gallery: ["/templates/budget-basic-1.png"],
    features: [
      "Income & expense tracking",
      "Monthly budget overview",
      "Expense categories",
      "Simple savings tracker",
    ],
    includes: ["Full template", "Quick setup guide"],
    rating: 4.6,
    reviewCount: 892,
    salesCount: 12400,
    isFeatured: false,
    isFree: true,
    isNew: false,
    isBestseller: false,
    notionUrl: "#",
    createdAt: "2025-04-15",
  },

  // === STUDENT CATEGORY ===
  {
    id: "student-os-ultimate",
    slug: "student-os-ultimate",
    name: "Student OS — Complete Academic System",
    description:
      "The ultimate academic companion. Course tracker, assignment manager, GPA calculator, study planner, and note-taking system.",
    longDescription:
      "Student OS is the all-in-one Notion system designed for academic excellence. Whether you're in high school, college, or graduate school — this template gives you everything you need to stay organized, study effectively, and achieve your best grades.",
    category: "Student & Study",
    categorySlug: "student",
    price: 39,
    originalPrice: 49,
    tier: "ultimate",
    image: "/templates/student-os-hero.png",
    gallery: [
      "/templates/student-os-1.png",
      "/templates/student-os-2.png",
      "/templates/student-os-3.png",
    ],
    features: [
      "Course & semester organizer",
      "Assignment tracker with deadlines",
      "GPA calculator & grade tracker",
      "Study session planner",
      "Note-taking system (Cornell method)",
      "Exam prep scheduler",
      "Reading list & research tracker",
      "Class schedule & timetable",
      "Pomodoro timer integration",
      "Extracurricular activity log",
    ],
    includes: [
      "Complete Student OS",
      "Video walkthrough",
      "Study tips PDF",
      "Free updates each semester",
      "Email support",
    ],
    rating: 4.9,
    reviewCount: 723,
    salesCount: 5200,
    isFeatured: true,
    isFree: false,
    isNew: false,
    isBestseller: true,
    notionUrl: "#",
    createdAt: "2025-08-25",
  },

  // === CONTENT CREATOR CATEGORY ===
  {
    id: "creator-hub-ultimate",
    slug: "creator-hub-ultimate",
    name: "Creator Hub — Content Management System",
    description:
      "Manage your entire content empire. Editorial calendar, content pipeline, analytics tracker, and brand deal manager.",
    longDescription:
      "Creator Hub is the command center every content creator needs. Plan content across YouTube, Instagram, TikTok, Twitter, and your blog — all from one dashboard. Track performance, manage brand deals, organize your content library, and never miss a posting deadline again.",
    category: "Content Creator",
    categorySlug: "content-creator",
    price: 69,
    originalPrice: 99,
    tier: "ultimate",
    image: "/templates/creator-hub-hero.png",
    gallery: [
      "/templates/creator-hub-1.png",
      "/templates/creator-hub-2.png",
      "/templates/creator-hub-3.png",
    ],
    features: [
      "Multi-platform content calendar",
      "Content idea bank with scoring",
      "Production pipeline (idea → publish)",
      "Analytics & performance tracker",
      "Brand deal & sponsorship manager",
      "Revenue tracking dashboard",
      "Equipment & asset inventory",
      "Collaboration & team tasks",
      "Hashtag & caption library",
      "Thumbnail planning board",
    ],
    includes: [
      "Complete Creator Hub",
      "Platform-specific setup guides",
      "Content strategy PDF",
      "Free updates",
      "Priority support",
    ],
    rating: 4.8,
    reviewCount: 445,
    salesCount: 2340,
    isFeatured: true,
    isFree: false,
    isNew: false,
    isBestseller: true,
    notionUrl: "#",
    createdAt: "2025-09-05",
  },

  // === CRM CATEGORY ===
  {
    id: "crm-pro",
    slug: "crm-pro",
    name: "CRM Pro — Sales Pipeline System",
    description:
      "A powerful yet simple CRM built entirely in Notion. Track leads, manage deals, and close more sales.",
    longDescription:
      "CRM Pro turns Notion into a sales powerhouse. With visual pipeline management, contact databases, deal tracking, and automated follow-up reminders — you'll never let a lead slip through the cracks again. Perfect for freelancers, agencies, and small teams.",
    category: "CRM & Sales",
    categorySlug: "crm-sales",
    price: 59,
    originalPrice: 89,
    tier: "pro",
    image: "/templates/crm-pro-hero.png",
    gallery: ["/templates/crm-pro-1.png", "/templates/crm-pro-2.png"],
    features: [
      "Visual sales pipeline (Kanban)",
      "Contact & company database",
      "Deal tracking with revenue forecast",
      "Follow-up reminders & tasks",
      "Email template library",
      "Meeting notes & call logs",
      "Revenue analytics dashboard",
      "Lead scoring system",
    ],
    includes: [
      "Full CRM template",
      "Sales playbook PDF",
      "Sample data for testing",
      "Free updates",
      "Email support",
    ],
    rating: 4.8,
    reviewCount: 389,
    salesCount: 1980,
    isFeatured: true,
    isFree: false,
    isNew: false,
    isBestseller: false,
    notionUrl: "#",
    createdAt: "2025-09-20",
  },

  // === HEALTH & FITNESS ===
  {
    id: "fitness-tracker-pro",
    slug: "fitness-tracker-pro",
    name: "Fitness Tracker Pro",
    description:
      "Your personal fitness command center. Track workouts, nutrition, body metrics, and reach your fitness goals faster.",
    longDescription:
      "Fitness Tracker Pro is the most comprehensive health and fitness template for Notion. Whether you're a gym beginner or a seasoned athlete, this system helps you plan workouts, log exercises, track nutrition, monitor body metrics, and visualize your progress over time.",
    category: "Health & Fitness",
    categorySlug: "health-fitness",
    price: 39,
    originalPrice: 49,
    tier: "pro",
    image: "/templates/fitness-hero.png",
    gallery: ["/templates/fitness-1.png", "/templates/fitness-2.png"],
    features: [
      "Workout planner & exercise library",
      "Nutrition & meal tracker",
      "Body measurement log",
      "Progress photo gallery",
      "Water intake tracker",
      "Sleep quality monitor",
      "Personal records board",
      "Weekly & monthly analytics",
    ],
    includes: [
      "Full template",
      "Exercise database (100+ exercises)",
      "Meal plan examples",
      "Free updates",
    ],
    rating: 4.7,
    reviewCount: 298,
    salesCount: 1650,
    isFeatured: false,
    isFree: false,
    isNew: true,
    isBestseller: false,
    notionUrl: "#",
    createdAt: "2025-10-15",
  },

  // === PROJECT MANAGEMENT ===
  {
    id: "project-hub-ultimate",
    slug: "project-hub-ultimate",
    name: "Project Hub — Agile Management System",
    description:
      "Enterprise-grade project management in Notion. Kanban boards, sprints, timelines, and team collaboration tools.",
    longDescription:
      "Project Hub brings professional project management to Notion. With Agile/Scrum boards, sprint planning, timeline views, resource allocation, and team dashboards — it's everything you need to ship projects on time, every time.",
    category: "Project Management",
    categorySlug: "project-management",
    price: 69,
    originalPrice: 99,
    tier: "ultimate",
    image: "/templates/project-hub-hero.png",
    gallery: [
      "/templates/project-hub-1.png",
      "/templates/project-hub-2.png",
      "/templates/project-hub-3.png",
    ],
    features: [
      "Kanban board with custom statuses",
      "Sprint planning & backlog",
      "Timeline / Gantt view",
      "Team workload dashboard",
      "Bug & issue tracker",
      "Client feedback system",
      "Document & asset library",
      "Automated status rollups",
      "Meeting notes & standups",
      "Multi-project overview",
    ],
    includes: [
      "Complete Project Hub",
      "Agile methodology guide",
      "Team onboarding template",
      "Free updates",
      "Priority support",
    ],
    rating: 4.8,
    reviewCount: 412,
    salesCount: 2100,
    isFeatured: true,
    isFree: false,
    isNew: false,
    isBestseller: false,
    notionUrl: "#",
    createdAt: "2025-10-01",
  },
];

export const bundles = [
  {
    id: "mega-bundle",
    name: "SkyHigh Mega Bundle",
    description: "Every single template we make. One price. Lifetime updates.",
    templates: templates.filter((t) => !t.isFree).map((t) => t.id),
    price: 249,
    originalPrice: 699,
    savings: 450,
    image: "/bundles/mega-bundle.png",
  },
  {
    id: "productivity-bundle",
    name: "Productivity Power Pack",
    description:
      "Life OS, Project Hub, and Finance Hub — everything for peak productivity.",
    templates: ["life-os-ultimate", "project-hub-ultimate", "finance-hub-ultimate"],
    price: 149,
    originalPrice: 217,
    savings: 68,
    image: "/bundles/productivity-bundle.png",
  },
  {
    id: "business-bundle",
    name: "Business Growth Bundle",
    description:
      "Business OS, CRM Pro, and Content Creator Hub — scale your business.",
    templates: ["business-os-ultimate", "crm-pro", "creator-hub-ultimate"],
    price: 179,
    originalPrice: 257,
    savings: 78,
    image: "/bundles/business-bundle.png",
  },
];

export function getTemplatesByCategory(categorySlug: string): Template[] {
  return templates.filter((t) => t.categorySlug === categorySlug);
}

export function getFeaturedTemplates(): Template[] {
  return templates.filter((t) => t.isFeatured);
}

export function getFreeTemplates(): Template[] {
  return templates.filter((t) => t.isFree);
}

export function getBestsellers(): Template[] {
  return templates.filter((t) => t.isBestseller);
}

export function getTemplateBySlug(
  categorySlug: string,
  slug: string
): Template | undefined {
  return templates.find(
    (t) => t.categorySlug === categorySlug && t.slug === slug
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
