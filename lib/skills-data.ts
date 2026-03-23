export type SkillCategory =
  | "search"
  | "memory"
  | "code"
  | "communication"
  | "data"
  | "vision"
  | "audio"
  | "browser"
  | "infrastructure"
  | "reasoning";

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: SkillCategory;
  author: string;
  version: string;
  installs: string;
  rating: number;
  tags: string[];
  featured?: boolean;
  verified?: boolean;
  new?: boolean;
}

export const FEATURED_SKILLS: Skill[] = [
  {
    id: "web-search-pro",
    name: "WebSearch Pro",
    description:
      "Multi-engine web search with result ranking, content extraction, and semantic deduplication. Supports Brave, Google, and Bing APIs with automatic fallback.",
    category: "search",
    author: "IDC Labs",
    version: "3.2.1",
    installs: "48.2k",
    rating: 4.9,
    tags: ["search", "web", "extraction", "ranking"],
    featured: true,
    verified: true,
  },
  {
    id: "memory-graph",
    name: "Memory Graph",
    description:
      "Persistent knowledge graph for agent long-term memory. Stores entities, relations, and temporal context with graph-traversal retrieval and semantic similarity search.",
    category: "memory",
    author: "IDC Labs",
    version: "2.0.4",
    installs: "31.7k",
    rating: 4.8,
    tags: ["memory", "graph", "knowledge", "persistence"],
    featured: true,
    verified: true,
  },
  {
    id: "code-executor",
    name: "CodeExecutor",
    description:
      "Sandboxed multi-language code execution with output capture, error tracing, and resource limits. Supports Python, JS, TypeScript, Bash, and Ruby.",
    category: "code",
    author: "SandboxLabs",
    version: "1.8.0",
    installs: "27.4k",
    rating: 4.7,
    tags: ["code", "sandbox", "execution", "python", "javascript"],
    featured: true,
    verified: true,
  },
  {
    id: "browser-pilot",
    name: "BrowserPilot",
    description:
      "Full browser automation — navigate, click, fill forms, capture screenshots, extract structured data from any web page. Playwright-powered with headless support.",
    category: "browser",
    author: "NavigatorAI",
    version: "4.1.2",
    installs: "22.9k",
    rating: 4.8,
    tags: ["browser", "automation", "scraping", "playwright"],
    verified: true,
  },
  {
    id: "vision-analyzer",
    name: "VisionAnalyzer",
    description:
      "Advanced image analysis: object detection, OCR, scene understanding, document parsing, and chart data extraction from any image or screenshot.",
    category: "vision",
    author: "PixelMind",
    version: "2.3.0",
    installs: "19.1k",
    rating: 4.6,
    tags: ["vision", "ocr", "image", "detection"],
    new: true,
  },
  {
    id: "data-transformer",
    name: "DataTransformer",
    description:
      "Schema-aware data pipeline: parse, validate, clean, reshape, and serialize structured data across CSV, JSON, XML, Parquet, and SQL formats.",
    category: "data",
    author: "FlowData",
    version: "1.5.3",
    installs: "16.8k",
    rating: 4.5,
    tags: ["data", "etl", "transform", "pipeline"],
  },
];

export const ALL_SKILLS: Skill[] = [
  ...FEATURED_SKILLS,
  {
    id: "email-composer",
    name: "EmailComposer",
    description: "Draft, send, and manage emails with full MIME support across all major providers.",
    category: "communication",
    author: "MailAgent",
    version: "2.1.0",
    installs: "14.3k",
    rating: 4.4,
    tags: ["email", "communication", "smtp"],
    verified: true,
  },
  {
    id: "semantic-memory",
    name: "SemanticMemory",
    description: "Vector-based episodic memory with automatic summarization and decay functions.",
    category: "memory",
    author: "VecStore",
    version: "1.2.0",
    installs: "11.7k",
    rating: 4.5,
    tags: ["memory", "vector", "embeddings"],
  },
  {
    id: "audio-transcriber",
    name: "AudioTranscriber",
    description: "High-accuracy speech-to-text with speaker diarization and timestamp extraction.",
    category: "audio",
    author: "SpeechCraft",
    version: "3.0.1",
    installs: "9.8k",
    rating: 4.7,
    tags: ["audio", "transcription", "whisper"],
    new: true,
  },
];

export const CATEGORIES = [
  {
    id: "search" as SkillCategory,
    label: "Search & Retrieval",
    icon: "🔍",
    count: 34,
    description: "Web search, semantic lookup, document retrieval",
  },
  {
    id: "memory" as SkillCategory,
    label: "Memory & Knowledge",
    icon: "🧠",
    count: 28,
    description: "Long-term memory, knowledge graphs, vector stores",
  },
  {
    id: "code" as SkillCategory,
    label: "Code & Execution",
    icon: "⚡",
    count: 41,
    description: "Code generation, sandboxed execution, debugging",
  },
  {
    id: "browser" as SkillCategory,
    label: "Browser & Web",
    icon: "🌐",
    count: 22,
    description: "Browser automation, web scraping, form filling",
  },
  {
    id: "data" as SkillCategory,
    label: "Data & Pipelines",
    icon: "📊",
    count: 37,
    description: "ETL, transformation, validation, serialization",
  },
  {
    id: "communication" as SkillCategory,
    label: "Communication",
    icon: "📡",
    count: 19,
    description: "Email, messaging, notifications, webhooks",
  },
  {
    id: "vision" as SkillCategory,
    label: "Vision & Images",
    icon: "👁",
    count: 16,
    description: "Image analysis, OCR, object detection",
  },
  {
    id: "reasoning" as SkillCategory,
    label: "Reasoning & Logic",
    icon: "🎯",
    count: 13,
    description: "Chain-of-thought, planning, decision trees",
  },
];
