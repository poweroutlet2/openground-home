import {
  IconShieldLock,
  IconSourceCode,
  IconSearch,
  IconGitBranch,
  IconRefresh,
  IconPlug,
  IconCheck,
  IconX,
  IconMinus,
} from "@tabler/icons-react";

export const GITHUB_URL = "https://github.com/poweroutlet2/openground";
export const DOCS_URL = "https://docs.openground.ai";

export const HERO = {
  tagline: "On-device docs for AI agents.",
  subtitle:
    "Give your AI coding assistant accurate, up-to-date documentation, without sending a single byte to the cloud.",
  cta_primary: "Get Started",
  cta_secondary: "Read the Docs",
};

export const PROBLEM = {
  heading: "AI models hallucinate APIs.",
  subheading:
    "Training data goes stale. Cloud services see your queries. Your code breaks. There's a better way.",
  points: [
    {
      title: "Outdated Training Data",
      description:
        "LLMs are trained on snapshots of documentation. By the time you use them, APIs have changed and best practices have shifted.",
    },
    {
      title: "Cloud Privacy Concerns",
      description:
        "Most doc-search tools send your queries to third-party servers where they're processed, stored, and used for benchmarking.",
    },
    {
      title: "Limited to Their Catalog",
      description:
        "Cloud services only index what they choose. Internal docs, niche libraries, and private repos are left out, unless you pay.",
    },
  ],
};

export const FEATURES = [
  {
    icon: IconShieldLock,
    title: "Fully On-Device",
    description:
      "Embeddings, vector search, and retrieval all happen locally. Your queries and documentation never leave your machine.",
  },
  {
    icon: IconSourceCode,
    title: "Any Documentation Source",
    description:
      "Ingest from git repos, XML sitemaps, or local directories. If it's docs, openground can index it.",
  },
  {
    icon: IconSearch,
    title: "Hybrid Search",
    description:
      "Combines semantic vector search with BM25 full-text search for results that are both relevant and precise.",
  },
  {
    icon: IconGitBranch,
    title: "Version-Aware",
    description:
      "Search the exact version you're using. Not whatever was current when the model was trained.",
  },
  {
    icon: IconRefresh,
    title: "Incremental Updates",
    description:
      "Updates are instant. Only changed pages get re-indexed.",
  },
  {
    icon: IconPlug,
    title: "Universal MCP",
    description:
      "Works with Cursor, Claude Code, and OpenCode out of the box. One install command and your agents can search.",
  },
];

export const HOW_IT_WORKS = {
  heading: "Two commands. Then your AI just knows.",
  steps: [
    {
      step: "01",
      title: "Add your docs",
      command: "openground add nextjs --source https://nextjs.org/sitemap.xml",
      description:
        "Point openground at any documentation source: a sitemap URL, a GitHub repo, or a local directory.",
    },
    {
      step: "02",
      title: "Connect your editor",
      command: "openground install-mcp --cursor",
      description:
        "One command sets up the MCP server in your editor. Cursor, Claude Code, and OpenCode are all supported.",
    },
    {
      step: "03",
      title: "That's it. Just ask.",
      command: '// No command needed. Your AI just knows.',
      description:
        "Ask your AI anything. It searches your local docs automatically and gives you accurate answers for the exact version you're using.",
    },
  ],
};

export type ComparisonDimension = {
  dimension: string;
  openground: { text: string; icon: typeof IconCheck };
  context7: { text: string; icon: typeof IconCheck };
  websearch: { text: string; icon: typeof IconCheck };
};

export const COMPARISON = {
  heading: "How openground compares",
  subheading:
    "See how openground stacks up against cloud-based alternatives.",
  dimensions: [
    {
      dimension: "Data Location",
      openground: { text: "On-device", icon: IconCheck },
      context7: { text: "Cloud API", icon: IconX },
      websearch: { text: "Cloud", icon: IconX },
    },
    {
      dimension: "Privacy",
      openground: { text: "Nothing leaves your machine", icon: IconCheck },
      context7: {
        text: "Queries sent to Upstash, processed by OpenAI/Gemini",
        icon: IconX,
      },
      websearch: { text: "Queries sent to search engine", icon: IconX },
    },
    {
      dimension: "Custom / Private Docs",
      openground: { text: "Any source, no restrictions", icon: IconCheck },
      context7: { text: "Pro/Enterprise plan required", icon: IconMinus },
      websearch: { text: "Not possible", icon: IconX },
    },
    {
      dimension: "API Key Required",
      openground: { text: "No", icon: IconCheck },
      context7: { text: "Yes", icon: IconX },
      websearch: { text: "Depends", icon: IconMinus },
    },
    {
      dimension: "Cost",
      openground: { text: "Free & open source", icon: IconCheck },
      context7: { text: "Free tier, paid for private repos", icon: IconMinus },
      websearch: { text: "Free but unreliable", icon: IconMinus },
    },
    {
      dimension: "Offline Support",
      openground: { text: "Yes", icon: IconCheck },
      context7: { text: "No", icon: IconX },
      websearch: { text: "No", icon: IconX },
    },
    {
      dimension: "Search Quality",
      openground: { text: "Hybrid semantic + BM25", icon: IconCheck },
      context7: { text: "Cloud-ranked, LLM-reranked", icon: IconMinus },
      websearch: { text: "Generic web ranking", icon: IconX },
    },
    {
      dimension: "Version Support",
      openground: { text: "Multi-version per library", icon: IconCheck },
      context7: { text: "Version-specific", icon: IconCheck },
      websearch: { text: "No version awareness", icon: IconX },
    },
    {
      dimension: "Library Coverage",
      openground: { text: "Any library. You add what you need.", icon: IconCheck },
      context7: { text: "9,000+ pre-indexed, limited to catalog", icon: IconMinus },
      websearch: { text: "Unlimited but noisy", icon: IconMinus },
    },
  ] as ComparisonDimension[],
};

export const ENTERPRISE = {
  heading: "Enterprise Solutions",
  subheading:
    "Need openground tailored to your organization? We offer custom solutions for teams that need more.",
  offerings: [
    "On-premise deployment with your infrastructure",
    "Custom documentation pipelines and integrations",
    "Priority support and dedicated engineering",
    "SSO, audit trails, and compliance features",
    "Custom embedding models and search tuning",
  ],
};

export const FOOTER = {
  tagline: "Open source. On device. On your terms.",
  links: [
    { label: "GitHub", href: GITHUB_URL },
    { label: "Documentation", href: DOCS_URL },
  ],
};
