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
        { feature: "Automated P&L Variance Engine", description: "Detects and explains line-item spikes automatically", reach: "1,500/mo", impact: "3.0 (Huge)", confidence: "90%", effort: "1.5 Wks", priority: "P0", framework: "RICE Score: 450 — MoSCoW: Must Have" },
        { feature: "Natural Language Copilot", description: "Conversational financial Q&A over multi-year ledger", reach: "1,800/mo", impact: "2.5 (High)", confidence: "95%", effort: "2 Wks", priority: "P0", framework: "RICE Score: 380 — MoSCoW: Must Have" },
        { feature: "Automated Anomaly & Fraud Alerts", description: "Real-time Slack/Email alerts for unexpected charges", reach: "1,200/mo", impact: "2.5 (High)", confidence: "85%", effort: "1 Wk", priority: "P1", framework: "RICE Score: 295 — MoSCoW: Should Have" },
        { feature: "Scenario & Runway Modeler", description: "Interactive what-if simulation for hiring & revenue changes", reach: "900/mo", impact: "2.0 (Med)", confidence: "80%", effort: "2 Wks", priority: "P1", framework: "RICE Score: 190 — MoSCoW: Could Have" },
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
          expectedLift: "+32% DAU & 4x Resolution",
        },
        {
          id: "EXP-02",
          title: "Guided Financial Prompt Cards vs Empty Input Box",
          hypothesis: "Displaying context-aware prompt suggestions ('Why did COGS increase in Q3?') increases initial query completion rate.",
          primaryMetric: "First-Session Query Completion Rate",
          guardrailMetric: "Session Bounce Rate",
          sampleSize: "450 Trial Users",
          expectedLift: "+45% Initial Engagement",
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
    tagline: "Architectural Outdoor Ecosystem & AVC Engineering Loop",
    category: "AVC Ecosystem • Architect-Vendor-Contractor Loop • Outdoor Engineering",
    badge: "AVC Loop System",
    websiteUrl: "https://www.archzonestructures.com",
    heroSummary:
      "A technical system and product engineering teardown for Archzone Structures — connecting the AVC (Architect, Vendor, Contractor) loop while redesigning outdoor amenity spaces into a second home environment where clients love to spend their time.",
    overview: {
      problemStatement:
        "Outdoor amenity space design suffers from fragmented coordination across the AVC (Architect, Vendor, Contractor) loop, causing 3–6 week delays, budget opacity, and poor client spatial visualization.",
      targetMarket: "Architects designing luxury amenity spaces, Premium Outdoor Vendors, Landscape Contractors, and Property Owners seeking a second-home outdoor experience.",
      solutionOverview:
        "A unified technical system linking the AVC (Architect - Vendor - Contractor) ecosystem — enabling real-time parametric estimation, 3D structural specs, and automated vendor order dispatch to turn outdoor spaces into a beloved second home.",
    },
    productTeardown: {
      uxFrictionPoints: [
        "Fragmented handoffs between Architects, Vendors, and Contractors (AVC loop) lead to misaligned engineering specs and site re-work.",
        "Property owners cannot visualize custom outdoor structures on their space, leading to hesitation and 3-6 week design iteration cycles.",
        "Lack of automated Bill-of-Materials (BOM) dispatch between vendor catalogs and field contractors creates ordering errors.",
      ],
      marketGaps: [
        "No unified technical system connecting the Architect-Vendor-Contractor (AVC) loop in real time.",
        "Absence of instant parametric cost calculation during the architectural design exploration phase.",
        "Disconnected communication between initial 3D design intent and structural engineering compliance.",
      ],
      competitiveLandscape: [
        { competitor: "Traditional Offline Contractors", gap: "Isolated workflow, slow 3-week quotes, no AVC loop integration", dabbyAdvantage: "Connected AVC platform with instant 3D parametric estimation" },
        { competitor: "Generic 3D Visualizer Tools", gap: "Pure visual rendering without structural BOM or vendor catalog links", dabbyAdvantage: "Full engineering pipeline linking 3D assets to vendor dispatch" },
        { competitor: "Off-the-Shelf Retailers", gap: "Fixed kit sizes, zero custom site fitting, poor durability", dabbyAdvantage: "Custom architectural structures engineered as a second-home amenity space" },
      ],
      coreInsights: [
        "Outdoor amenity spaces shouldn't feel like an afterthought — they are designed to be a second home where you love spending time.",
        "Solving the outdoor architectural market requires a technical system connecting the AVC (Architect-Vendor-Contractor) loop, not just a marketing website.",
      ],
    },
    prd: {
      vision: "Redesign outdoor amenity spaces into a second home environment where clients love to spend their time, powered by a unified technical system connecting the Architect-Vendor-Contractor (AVC) loop.",
      personas: [
        { role: "Architect", needs: "Parametric 3D specs, structural engineering compliance, direct vendor material integration", painPoint: "Fragmented vendor catalog data and slow manual spec validation" },
        { role: "Vendor", needs: "Automated BOM dispatch, real-time lead specifications, inventory sync", painPoint: "Inaccurate order specs from contractors leading to site returns" },
        { role: "Contractor", needs: "Turnkey installation packages, unified timeline scheduling, transparent pricing", painPoint: "Waiting weeks for architect approvals and vendor pricing updates" },
      ],
      functionalRequirements: [
        { category: "AVC Sync Engine", requirement: "Real-time data bridge connecting Architect CAD specs, Vendor BOM catalogs, and Contractor order management", impact: "Cuts project cycle time by 70%" },
        { category: "Parametric Estimator", requirement: "Real-time cost & material calculation based on square footage, louver mechanics, and finish selection", impact: "Instant price transparency for client second-home planning" },
        { category: "3D Configurator", requirement: "Interactive WebGL outdoor space customizer with real-time lighting and spatial preview", impact: "Boosts design consultation bookings by +45%" },
      ],
      nonFunctionalRequirements: [
        { metric: "Page Load Speed", target: "< 1.2 seconds first contentful paint", strategy: "WebP image optimization & Cloudflare CDN asset delivery" },
        { metric: "Mobile Responsiveness", target: "100% touch-optimized 60fps UX", strategy: "GPU-accelerated CSS animations & responsive layout breakpoints" },
        { metric: "Uptime & Reliability", target: "99.9% web platform availability", strategy: "Vercel edge deployment with automated fallback routes" },
      ],
    },
    featurePrioritization: {
      matrix: [
        { feature: "AVC Ecosystem Sync Engine", description: "Real-time data bridge linking Architect specs, Vendor BOMs, and Contractor orders", reach: "1,200/mo", impact: "3.0 (Huge)", confidence: "95%", effort: "2 Wks", priority: "P0", framework: "RICE Score: 520 — MoSCoW: Must Have" },
        { feature: "Interactive Outdoor Amenity Configurator", description: "3D spatial visualizer turning patio spaces into second-home environments", reach: "2,500/mo", impact: "2.5 (High)", confidence: "90%", effort: "2 Wks", priority: "P0", framework: "RICE Score: 450 — MoSCoW: Must Have" },
        { feature: "Dynamic Parametric Cost Estimator", description: "Instant price calculation across materials, motorization, and installation", reach: "2,500/mo", impact: "2.5 (High)", confidence: "95%", effort: "1.5 Wks", priority: "P0", framework: "RICE Score: 420 — MoSCoW: Must Have" },
        { feature: "Vendor Automated Order & Dispatch Portal", description: "Instant dispatch of structural engineering BOMs to material vendors", reach: "800/mo", impact: "2.0 (Med)", confidence: "85%", effort: "2 Wks", priority: "P1", framework: "RICE Score: 280 — MoSCoW: Should Have" },
      ],
      roadmap: [
        { phase: "Phase 1 - AVC Foundation", title: "Connected Architect-Vendor Catalog & 3D Specs", deliverables: ["Parametric 3D outdoor catalog", "Architect spec sheet downloads", "Vendor catalog integration"] },
        { phase: "Phase 2 - Conversion Engine", title: "Parametric Estimator & Contractor Booking", deliverables: ["Interactive pricing calculator", "Contractor dispatch workflow", "Lead intake portal"] },
        { phase: "Phase 3 - AVC Ecosystem Loop", title: "Automated BOM Order Dispatch & Site Sync", deliverables: ["Real-time vendor order dispatch", "Contractor installation package builder", "Client project portal"] },
      ],
    },
    userFlowRedesign: {
      journeySteps: [
        { step: 1, title: "Discovery & Second-Home Vision", before: "Browse static photo galleries without spatial context or pricing.", after: "Filter structures by style, material, and spatial fit framing outdoor amenity spaces as a second home.", benefit: "Captures user vision within 5 seconds." },
        { step: 2, title: "Parametric Customization", before: "Call sales phone line or send generic email contact form.", after: "Input length, width, louver mechanics, and finish preferences into live estimator.", benefit: "Provides immediate cost transparency and pre-qualifies leads." },
        { step: 3, title: "AVC Loop Spec Dispatch", before: "Manual back-and-forth emails between architect, vendor, and contractor.", after: "Single project brief automatically generates Architect CAD specs, Vendor BOM, and Contractor quote.", benefit: "Eliminates 3 weeks of handoff friction." },
        { step: 4, title: "Turnkey Installation", before: "Vendor material delays and site construction re-work.", after: "Vendor pre-dispatches pre-cut modular structural kit directly to contractor with zero error.", benefit: "Cuts installation time by 50%." },
      ],
      keyDesignDecisions: [
        "Second-home aesthetic: Deep charcoal tones, warm architectural lighting, and immersive 3D spatial previews.",
        "AVC Loop integration: Unified project brief downloadable by Architects (CAD), Vendors (BOM), and Contractors (Quote).",
      ],
    },
    metricsAndExperiments: {
      metrics: [
        { label: "Completed Estimation Submissions", value: "1,240+", description: "Core North Star tracking qualified prospective project estimates per month.", type: "northstar" },
        { label: "AVC Loop Project Conversion", value: "38.6%", description: "Percentage of architectural inquiries converting into active vendor orders.", type: "supporting" },
        { label: "Average Session Duration", value: "4m 12s", description: "Time spent exploring second-home outdoor space configurators.", type: "supporting" },
        { label: "Form Abandonment Rate", value: "13.2%", description: "Percentage of users leaving mid-inquiry (kept under 20% target).", type: "guardrail" },
      ],
      experiments: [
        {
          id: "EXP-ARCH-01",
          title: "Live Estimate Calculator vs Static 'Request a Quote' Form",
          hypothesis: "Displaying real-time parametric cost ranges increases total inquiry form completions by 40% compared to opaque quote request forms.",
          primaryMetric: "Qualified Inquiry Submission Volume",
          guardrailMetric: "Low-intent lead rate",
          sampleSize: "2,400 Monthly Visitors",
          expectedLift: "+42% Inquiries & 2x Quality",
        },
        {
          id: "EXP-ARCH-02",
          title: "AVC Loop Project Brief vs Generic Contact Form",
          hypothesis: "Offering an integrated AVC project brief (CAD + BOM + Quote) increases architect & contractor engagement by 50%.",
          primaryMetric: "Architect & Contractor Sign-Ups",
          guardrailMetric: "Lead Processing Time",
          sampleSize: "1,100 Industry Users",
          expectedLift: "+54% Partnership Conversion",
        },
      ],
    },
    technicalArchitecture: {
      topologyDescription:
        "High-performance edge-deployed technical platform connecting the Architect-Vendor-Contractor (AVC) loop via a unified event-driven API gateway, WebGL amenity customizer, and automated BOM dispatch microservices.",
      decisions: [
        { component: "AVC Integration Hub", technology: "Node.js FastAPI Event Bus, Webhooks, PostgreSQL", rationale: "Synchronizes design parameters instantly across Architect CAD exports, Vendor inventory, and Contractor schedules.", tradeoffs: "Requires robust webhook retry logic and data schema validation." },
        { component: "Parametric Pricing Engine", technology: "TypeScript Pure Functions & Web Workers", rationale: "Computes material square footage, wind load multipliers, and vendor unit costs client-side with zero latency.", tradeoffs: "Pricing rules must be synced regularly with vendor database API." },
        { component: "3D Amenity Configurator", technology: "React Three Fiber / Three.js, WebGL", rationale: "Renders photorealistic outdoor amenity spaces to envision the 'second home' experience.", tradeoffs: "Requires GPU optimization for mobile browsers." },
        { component: "Asset Delivery", technology: "Cloudflare CDN & WebP Image Pipelines", rationale: "Serves high-resolution architectural imagery in sub-100ms across global edge nodes.", tradeoffs: "Requires automated image build optimization scripts." },
      ],
      pipelineSteps: [
        "1. Spatial Customization: Client / Architect builds outdoor amenity layout in 3D WebGL configurator.",
        "2. Parametric Calculation: Web Workers calculate dimensions, wind load factors, and material square footage.",
        "3. AVC Data Compilation: System generates 3 synchronized outputs: Architect CAD drawing, Vendor BOM, Contractor Quote.",
        "4. Vendor Dispatch: Automated API webhook pushes Bill-of-Materials directly to vendor fulfillment network.",
        "5. Contractor Scheduling: Installation scope is dispatched to certified local contractor with exact assembly brief.",
      ],
      securityAndScale: [
        "Cloudflare Web Application Firewall (WAF) protecting against bot spam and DDoS attacks.",
        "Strict CORS policy and sanitization on all lead submission API endpoints.",
        "Automated continuous integration and zero-downtime edge deployments via GitHub actions.",
      ],
    },
  },
};
