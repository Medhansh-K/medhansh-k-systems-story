export interface MetricItem {
  label: string;
  value: string;
  description: string;
  type: "northstar" | "supporting" | "guardrail";
}

export interface FeaturePriorityItem {
  feature: string;
  description: string;
  reach: string;
  impact: string;
  confidence: string;
  effort: string;
  priority: "P0" | "P1" | "P2";
  framework: string;
}

export interface UserFlowStep {
  step: number;
  title: string;
  before: string;
  after: string;
  benefit: string;
}

export interface ExperimentHypothesis {
  id: string;
  title: string;
  hypothesis: string;
  primaryMetric: string;
  guardrailMetric: string;
  sampleSize: string;
  expectedLift: string;
}

export interface TechArchitectureDecision {
  component: string;
  technology: string;
  rationale: string;
  tradeoffs: string;
}

export interface ProjectDoc {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge: string;
  websiteUrl: string;
  heroSummary: string;
  overview: {
    problemStatement: string;
    targetMarket: string;
    solutionOverview: string;
  };
  productTeardown: {
    uxFrictionPoints: string[];
    marketGaps: string[];
    competitiveLandscape: { competitor: string; gap: string; dabbyAdvantage: string }[];
    coreInsights: string[];
  };
  prd: {
    vision: string;
    personas: { role: string; needs: string; painPoint: string }[];
    functionalRequirements: { category: string; requirement: string; impact: string }[];
    nonFunctionalRequirements: { metric: string; target: string; strategy: string }[];
  };
  featurePrioritization: {
    matrix: FeaturePriorityItem[];
    roadmap: { phase: string; title: string; deliverables: string[] }[];
  };
  userFlowRedesign: {
    journeySteps: UserFlowStep[];
    keyDesignDecisions: string[];
  };
  metricsAndExperiments: {
    metrics: MetricItem[];
    experiments: ExperimentHypothesis[];
  };
  technicalArchitecture: {
    topologyDescription: string;
    decisions: TechArchitectureDecision[];
    pipelineSteps: string[];
    securityAndScale: string[];
  };
}

export const projectDocsData: Record<string, ProjectDoc> = {
  dabby: {
    id: "dabby",
    name: "Dabby",
    tagline: "AI Financial Intelligence & Autonomous Workspace",
    category: "FinTech • AI Systems • Financial Engineering",
    badge: "Enterprise AI Platform",
    websiteUrl: "https://www.datalis.in",
    heroSummary:
      "A comprehensive product teardown and engineering architecture case study detailing how Dabby automates enterprise financial analysis, line-item reconciliation, and real-time executive reporting.",
    overview: {
      problemStatement:
        "Mid-market enterprises waste up to 65% of finance bandwidth on manual data aggregation, CSV exports across ERPs (QuickBooks, NetSuite, Stripe), and static MoM variance reporting.",
      targetMarket: "CFOs, Finance VPs, Financial Analysts, and Founders managing $2M–$50M ARR companies.",
      solutionOverview:
        "Dabby unifies multi-source financial telemetry into a real-time, deterministic AI workspace capable of natural language queries, automated P&L variance breakdown, and instant executive slide generation.",
    },
    productTeardown: {
      uxFrictionPoints: [
        "Traditional BI tools (Tableau, Metabase) are read-only visualization layers; they lack contextual reasoning about financial anomalies.",
        "Legacy FP&A platforms (Anaplan, Pigment) require 4–6 months of expensive implementation and dedicated consulting teams.",
        "Manual Excel workflows create error-prone single points of failure with no audit trail or automated anomaly detection.",
      ],
      marketGaps: [
        "Lack of real-time semantic search over multi-entity chart-of-accounts and transaction metadata.",
        "Absence of deterministic AI execution that guarantees 100% mathematical accuracy without LLM hallucination.",
        "High latency between anomaly occurrence and executive alert notification cycles.",
      ],
      competitiveLandscape: [
        { competitor: "Anaplan / Pigment", gap: "Heavy configuration, 6-month setup, high cost", dabbyAdvantage: "Zero-code connector setup in <5 mins with AI-first interface" },
        { competitor: "Metabase / Looker", gap: "No financial reasoning or conversational intelligence", dabbyAdvantage: "Autonomous financial agent explaining *why* line items spiked" },
        { competitor: "Excel / Manual FP&A", gap: "Error-prone, no real-time sync, high manual overhead", dabbyAdvantage: "Continuous automated data sync with instant audit logs" },
      ],
      coreInsights: [
        "Finance teams don't want another dashboard; they want automated answers and executive summaries.",
        "Deterministic math execution must be strictly decoupled from natural language generation.",
      ],
    },
    prd: {
      vision: "Empower every finance team with an autonomous, real-time AI copilot that turns raw transactional telemetry into actionable strategy.",
      personas: [
        { role: "CFO / VP Finance", needs: "Executive P&L summaries, cash runway alerts, scenario planning", painPoint: "Waiting days for weekly financial updates from analysts" },
        { role: "Senior Financial Analyst", needs: "Deep line-item reconciliation, variance drill-downs, audit trails", painPoint: "Copy-pasting data between NetSuite, Stripe, and Excel" },
        { role: "CEO / Founder", needs: "Plain-English answers on burn rate, unit economics, and growth trends", painPoint: "Opaque financial dashboards that require finance team translation" },
      ],
      functionalRequirements: [
        { category: "Ingestion Engine", requirement: "Multi-tenant API connectors for QuickBooks, NetSuite, Stripe, and PostgreSQL", impact: "Zero-effort automated data sync" },
        { category: "Reasoning Engine", requirement: "Natural language query router with deterministic SQL execution and tool calling", impact: "Zero mathematical hallucination" },
        { category: "Reporting Suite", requirement: "One-click automated board deck & P&L variance generator in PDF/Markdown", impact: "Saves 15+ hours per month per analyst" },
      ],
      nonFunctionalRequirements: [
        { metric: "Query Latency", target: "< 1.5 seconds end-to-end", strategy: "Redis caching & pre-computed metric cubes" },
        { metric: "Accuracy", target: "100% mathematical precision", strategy: "Python execution sandbox for math operations" },
        { metric: "Security", target: "SOC2 Type II & RLS compliance", strategy: "Row-Level Security & AES-256 encryption at rest" },
      ],
    },
    featurePrioritization: {
      matrix: [
        { feature: "Automated P&L Variance Engine", description: "Detects and explains line-item spikes automatically", reach: "High", impact: "Huge", confidence: "90%", effort: "Med", priority: "P0", framework: "RICE Score: 450" },
        { feature: "Natural Language Copilot", description: "Conversational financial Q&A over multi-year ledger", reach: "High", impact: "High", confidence: "95%", effort: "Med", priority: "P0", framework: "RICE Score: 380" },
        { feature: "Automated Anomaly & Fraud Alerts", description: "Real-time Slack/Email alerts for unexpected charges", reach: "Med", impact: "High", confidence: "85%", effort: "Low", priority: "P1", framework: "RICE Score: 295" },
        { feature: "Scenario & Runway Modeler", description: "Interactive what-if simulation for hiring & revenue changes", reach: "Med", impact: "Med", confidence: "80%", effort: "High", priority: "P1", framework: "RICE Score: 190" },
      ],
      roadmap: [
        { phase: "Q1 - Core Intelligence", title: "Automated Data Ingestion & Variance Engine", deliverables: ["QuickBooks/Stripe connectors", "Automated P&L line-item analysis", "PDF export engine"] },
        { phase: "Q2 - Agentic Workflows", title: "Conversational Copilot & Real-Time Alerts", deliverables: ["Natural language query interface", "Slack alert webhooks", "Multi-entity consolidation"] },
        { phase: "Q3 - Predictive Financials", title: "Runway Forecasting & What-If Modeling", deliverables: ["Scenario simulator", "Custom metric builder", "SOC2 compliance certification"] },
      ],
    },
    userFlowRedesign: {
      journeySteps: [
        { step: 1, title: "Data Connection", before: "Manually request CSV exports from 3 different portals.", after: "One-click OAuth connection to QuickBooks & Stripe.", benefit: "Reduces onboarding setup time from 3 hours to 2 minutes." },
        { step: 2, title: "Variance Discovery", before: "Sift through 5,000 ledger rows in Excel looking for discrepancies.", after: "Dabby AI flags +28% unexpected SaaS expense spike automatically.", benefit: "Instant anomaly identification without manual scanning." },
        { step: 3, title: "Root-Cause Analysis", before: "Email department leads to manually confirm cause of charge.", after: "Click flagged line item to reveal underlying vendor receipts & breakdown.", benefit: "Resolves root-cause analysis in 30 seconds." },
        { step: 4, title: "Executive Report", before: "Spend 4 hours formatting PowerPoint deck for weekly CFO sync.", after: "Click 'Generate Executive Brief' to produce shareable summary.", benefit: "Saves 15+ analyst hours every single week." },
      ],
      keyDesignDecisions: [
        "Side-by-side view: Natural language conversation panel on left, live interactive chart/table canvas on right.",
        "Confidence badges: Every AI insight displays raw source data links and exact SQL query audit trail for 100% transparency.",
      ],
    },
    metricsAndExperiments: {
      metrics: [
        { label: "Weekly Active Insights Generated (WAIG)", value: "3,850+", description: "Core North Star tracking automated financial reports & queries executed per week.", type: "northstar" },
        { label: "Time-to-First-Insight (TTFI)", value: "48 seconds", description: "Time elapsed from login to first actionable financial anomaly discovery.", type: "supporting" },
        { label: "Query Accuracy Rate", value: "100%", description: "Percentage of financial calculations validated with 0 mathematical deviation.", type: "guardrail" },
        { label: "30-Day Cohort Retention", value: "78.4%", description: "Monthly active business user retention across finance teams.", type: "supporting" },
      ],
      experiments: [
        {
          id: "EXP-01",
          title: "Proactive Push Anomaly Alerts vs Passive Dashboard",
          hypothesis: "Sending proactive Slack alerts for >15% MoM variance increases daily active usage by 35% over passive dashboard monitoring.",
          primaryMetric: "Daily Active User (DAU) Engagement",
          guardrailMetric: "Notification Unsubscribe Rate (< 2%)",
          sampleSize: "120 Business Accounts",
          expectedLift: "+32% DAU increase and 4x faster anomaly resolution",
        },
        {
          id: "EXP-02",
          title: "Guided Financial Prompt Cards vs Empty Input Box",
          hypothesis: "Displaying context-aware prompt suggestions ('Why did COGS increase in Q3?') increases initial query completion rate.",
          primaryMetric: "First-Session Query Completion Rate",
          guardrailMetric: "Session Bounce Rate",
          sampleSize: "450 Trial Users",
          expectedLift: "+45% higher initial engagement within first 5 minutes",
        },
      ],
    },
    technicalArchitecture: {
      topologyDescription:
        "Microservices architecture separating high-speed React/Next.js frontend telemetry from an asynchronous Python FastAPI AI backend, isolated Python execution sandboxes, and pgvector semantic data storage.",
      decisions: [
        { component: "Frontend Layer", technology: "Next.js 14, React, TailwindCSS, Recharts", rationale: "Provides SSR for fast load times and responsive interactive data visualization.", tradeoffs: "Requires state synchronization for real-time WebSocket streaming." },
        { component: "AI Reasoning Gateway", technology: "Python FastAPI, LangChain, Claude 3.5 Sonnet", rationale: "Enables flexible tool calling and high-speed JSON schema response parsing.", tradeoffs: "Requires strict rate-limiting and fallback model handlers." },
        { component: "Math Execution Engine", technology: "Isolated Python Sandbox & Pandas", rationale: "Decouples mathematical calculations from LLM output to guarantee zero hallucinated numbers.", tradeoffs: "Additional RPC hop between AI router and calculation engine." },
        { component: "Data Layer", technology: "PostgreSQL + pgvector, Redis", rationale: "Combines relational ACID guarantees for financial ledgers with vector embeddings for semantic query lookup.", tradeoffs: "Requires careful database indexing and RLS policy maintenance." },
      ],
      pipelineSteps: [
        "1. Ingestion: Webhooks/REST API ingest raw transactional payloads into encrypted staging tables.",
        "2. Normalization: Transactional data is mapped to unified Chart-of-Accounts (CoA) data structures.",
        "3. Vector Embedding: Financial notes and vendor metadata are embedded into pgvector database.",
        "4. Intent Routing: User queries are parsed by AI Gateway into SQL generation vs Python analysis tasks.",
        "5. Deterministic Execution: SQL/Python tasks execute in sandboxed environment; results compiled with LLM executive commentary.",
      ],
      securityAndScale: [
        "AES-256 bank-grade encryption at rest for all financial credentials and API access tokens.",
        "Row-Level Security (RLS) ensuring strict isolation across multi-tenant enterprise organizations.",
        "Redis rate limiting and query cache reducing redundant LLM inference costs by up to 40%.",
      ],
    },
  },

  archzone: {
    id: "archzone",
    name: "Archzone Structures",
    tagline: "Architectural Outdoor Solutions & Engineering Platform",
    category: "Full-Stack Web Platform • 3D Engineering • E-Commerce",
    badge: "Architectural Web Platform",
    websiteUrl: "https://www.archzonestructures.com",
    heroSummary:
      "A complete product teardown, UX redesign, and 3D web engineering case study for Archzone Structures — automating custom outdoor structural design, real-time parametric estimation, and client consultation workflows.",
    overview: {
      problemStatement:
        "Custom architectural outdoor structures (pergolas, louvers, shade sails, outdoor kitchens) face a 3–6 week sales cycle due to static 2D PDF quotes, manual CAD drafting, and upfront cost opacity.",
      targetMarket: "Homeowners, Commercial Property Developers, Architects, and General Contractors seeking premium outdoor living engineering.",
      solutionOverview:
        "A modern web-first architectural platform integrating interactive product showcases, dynamic parametric price estimation, and streamlined consultation booking to reduce project turnaround time by 70%.",
    },
    productTeardown: {
      uxFrictionPoints: [
        "Traditional outdoor construction websites rely on static photo galleries without dimensional or spatial context.",
        "Customers must wait 5–7 business days to receive basic price estimates after submitting custom dimensional requests.",
        "Lack of mobile-optimized interactive configurators causes up to 60% drop-off on initial lead inquiry forms.",
      ],
      marketGaps: [
        "Absence of real-time parametric cost calculation during the architectural design exploration phase.",
        "Disconnect between visual client customization and backend structural engineering specifications (wind load, material BOM).",
        "Inefficient back-and-forth communication between project leads, architects, and field installation teams.",
      ],
      competitiveLandscape: [
        { competitor: "Traditional Contractors", gap: "No online pricing, slow 3-week consultation cycle", archzoneAdvantage: "Instant online parametric estimator & 3D showcase" },
        { competitor: "Off-the-shelf Retailers", gap: "Fixed sizes, poor structural durability, zero custom fit", archzoneAdvantage: "Fully custom architectural engineering tailored to property specs" },
        { competitor: "Generic Landscape Sites", gap: "Cluttered outdated interfaces with poor mobile UX", archzoneAdvantage: "Sleek, modern web application with high-performance responsive UI" },
      ],
      coreInsights: [
        "Providing instant transparent price ranges builds high trust and pre-qualifies high-intent architectural leads.",
        "Visual storytelling combined with engineering specifications dramatically reduces revision iterations.",
      ],
    },
    prd: {
      vision: "Digitally transform outdoor architectural design into a seamless, high-touch web experience that bridges client imagination with precision structural engineering.",
      personas: [
        { role: "Homeowner", needs: "Visual inspiration, instant price range estimates, easy consultation booking", painPoint: "Uncertainty about cost and visual fit on their patio" },
        { role: "Architect / Builder", needs: "Downloadable 3D CAD models, material specifications, engineering compliance", painPoint: "Slow turnaround on custom architectural CAD details" },
        { role: "Sales & Project Lead", needs: "Pre-qualified leads with dimensional requirements attached automatically", painPoint: "Wasting hours on low-intent cold leads requiring manual estimates" },
      ],
      functionalRequirements: [
        { category: "Catalog & Configurator", requirement: "High-resolution product showcase with interactive dimensional customization", impact: "Increases engagement time by 3.2x" },
        { category: "Parametric Estimator", requirement: "Real-time cost calculation based on square footage, louver mechanics, and finish selection", impact: "Reduces quote turn-around from 5 days to 0 seconds" },
        { category: "Lead Ingestion", requirement: "Integrated consultation scheduling connected to CRM with project dimensions attached", impact: "Boosts lead-to-consultation conversion rate by 40%" },
      ],
      nonFunctionalRequirements: [
        { metric: "Page Load Speed", target: "< 1.2 seconds first contentful paint", strategy: "WebP image optimization & Cloudflare CDN asset delivery" },
        { metric: "Mobile Responsiveness", target: "100% touch-optimized 60fps UX", strategy: "GPU-accelerated CSS animations & responsive layout breakpoints" },
        { metric: "Uptime & Reliability", target: "99.9% web platform availability", strategy: "Vercel edge deployment with automated fallback routes" },
      ],
    },
    featurePrioritization: {
      matrix: [
        { feature: "Interactive Outdoor Product Showcase", description: "High-resolution architectural portfolio with filterable structural types", reach: "High", impact: "High", confidence: "95%", effort: "Low", priority: "P0", framework: "MoSCoW: Must Have" },
        { feature: "Dynamic Parametric Cost Estimator", description: "Real-time pricing engine using dimensions, materials, and motorization", reach: "High", impact: "Huge", confidence: "90%", effort: "Med", priority: "P0", framework: "MoSCoW: Must Have" },
        { feature: "Automated Consultation & Lead Capture", description: "Seamless calendar integration with project scope questionnaire", reach: "High", impact: "High", confidence: "95%", effort: "Low", priority: "P0", framework: "MoSCoW: Must Have" },
        { feature: "3D CAD Asset Downloads for Architects", description: "Downloadable glTF/BIM models for architectural project planning", reach: "Med", impact: "Med", confidence: "85%", effort: "Med", priority: "P1", framework: "MoSCoW: Should Have" },
      ],
      roadmap: [
        { phase: "Phase 1 - Digital Foundation", title: "Modern Brand Experience & Product Catalog", deliverables: ["Responsive architectural UI", "Filterable product portfolio", "Mobile optimization"] },
        { phase: "Phase 2 - Conversion Engine", title: "Parametric Estimator & Instant Consultation Booking", deliverables: ["Interactive pricing calculator", "CRM lead automation", "Customer intake portal"] },
        { phase: "Phase 3 - Architectural Suite", title: "3D Visualizer & CAD Specification Portal", deliverables: ["Web Assembly 3D viewer", "Architectural spec sheet downloads", "Contractor partner portal"] },
      ],
    },
    userFlowRedesign: {
      journeySteps: [
        { step: 1, title: "Discovery", before: "Browse static, slow-loading photo galleries without pricing context.", after: "Filter structures by style, material, and environment with instant visual feedback.", benefit: "Captures user interest within 5 seconds." },
        { step: 2, title: "Customization", before: "Call sales phone line or send generic email contact form.", after: "Input target length, width, and motorization preferences into live estimator.", benefit: "Provides immediate cost transparency and pre-qualifies lead." },
        { step: 3, title: "Consultation Request", before: "Wait for callback to negotiate project feasibility and timeline.", after: "Select preferred consultation date/time with project parameters attached.", benefit: "Eliminates phone tag and schedules meeting instantly." },
        { step: 4, title: "Engineering Dispatch", before: "Sales rep manually transcribes notes into draft quote.", after: "Automated project brief dispatched to engineering team prior to initial call.", benefit: "Shortens total project delivery cycle by 2 full weeks." },
      ],
      keyDesignDecisions: [
        "Dark architectural aesthetic: Utilizes deep charcoal hues, crisp typography, and subtle ambient glows to mirror premium physical structural craftsmanship.",
        "Zero-friction inputs: Replaced complex text fields with intuitive sliders, visual toggle cards, and real-time updating totals.",
      ],
    },
    metricsAndExperiments: {
      metrics: [
        { label: "Completed Estimation Submissions", value: "1,240+", description: "Core North Star tracking qualified prospective project estimates per month.", type: "northstar" },
        { label: "Lead-to-Consultation Conversion", value: "34.2%", description: "Percentage of site visitors who complete estimate & book a design call.", type: "supporting" },
        { label: "Average Session Duration", value: "3m 45s", description: "Time spent exploring architectural options and custom configurators.", type: "supporting" },
        { label: "Form Abandonment Rate", value: "14.8%", description: "Percentage of users leaving mid-inquiry (kept under 20% target).", type: "guardrail" },
      ],
      experiments: [
        {
          id: "EXP-ARCH-01",
          title: "Live Estimate Calculator vs Static 'Request a Quote' Form",
          hypothesis: "Displaying real-time parametric cost ranges increases total inquiry form completions by 40% compared to opaque quote request forms.",
          primaryMetric: "Qualified Inquiry Submission Volume",
          guardrailMetric: "Low-intent lead rate",
          sampleSize: "2,400 Monthly Visitors",
          expectedLift: "+42% increase in completed inquiries and 2x higher lead quality",
        },
        {
          id: "EXP-ARCH-02",
          title: "Visual Card Selector vs Dropdown Text Menus",
          hypothesis: "Using image-rich visual toggle cards for material selection increases estimator completion rate over standard HTML select menus.",
          primaryMetric: "Estimator Step-Completion Rate",
          guardrailMetric: "Page Load Time (< 1.5s)",
          sampleSize: "1,100 Mobile Users",
          expectedLift: "+28% higher completion on mobile devices",
        },
      ],
    },
    technicalArchitecture: {
      topologyDescription:
        "High-performance edge-deployed web application utilizing React, TypeScript, and TailwindCSS, backed by serverless API endpoints and Cloudflare CDN asset distribution.",
      decisions: [
        { component: "Frontend Framework", technology: "React, TypeScript, Vite, Framer Motion", rationale: "Delivers smooth 60fps animations and instant client-side state updates during parametric configuration.", tradeoffs: "Requires careful code splitting to maintain lightweight bundle size." },
        { component: "Styling & Design System", technology: "Vanilla CSS Tokens & TailwindCSS", rationale: "Enforces rigid architectural design tokens (colors, typography, grid spacing) across all viewpoints.", tradeoffs: "Initial CSS architecture setup requires upfront design token discipline." },
        { component: "Parametric Pricing Engine", technology: "TypeScript Pure Functions & Web Workers", rationale: "Computes material, surface area, and hardware multipliers client-side with zero latency.", tradeoffs: "Pricing logic must be synchronized with backend database updates." },
        { component: "Asset Delivery", technology: "Cloudflare CDN & WebP Image Pipelines", rationale: "Serves high-resolution architectural imagery in sub-100ms across global edge nodes.", tradeoffs: "Requires automated image build optimization scripts." },
      ],
      pipelineSteps: [
        "1. Request Routing: Edge CDN intercepts visitor requests and serves cached static HTML/JS bundles.",
        "2. State Initialization: Client-side engine loads parametric pricing tables into memory.",
        "3. User Interaction: Customizer inputs trigger reactive Web Worker price calculations in real-time.",
        "4. Payload Assembly: Completed project parameters are bundled into JSON payload with user contact details.",
        "5. Lead Dispatch: Serverless function validates input, stores lead in database, and dispatches CRM webhook.",
      ],
      securityAndScale: [
        "Cloudflare Web Application Firewall (WAF) protecting against bot spam and DDoS attacks.",
        "Strict CORS policy and sanitization on all lead submission API endpoints.",
        "Automated continuous integration and zero-downtime edge deployments via GitHub actions.",
      ],
    },
  },
};
