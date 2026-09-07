export interface PaperAuthor {
  name: string;
  department: string;
  institution: string;
  location: string;
  email: string;
}

export interface PaperTable {
  id: string;
  title: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface PaperSection {
  id: string;
  number?: string;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

export interface ResearchPaper {
  title: string;
  subtitle: string;
  publication: string;
  publisher: string;
  year: number;
  authors: PaperAuthor[];
  abstract: string;
  keywords: string[];
  sections: PaperSection[];
  tables: PaperTable[];
  references: string[];
  pdfUrl: string;
}

export const bloomnetPaperData: ResearchPaper = {
  title: "Optimizing Distributed Storage Efficiency with Fractal-Based Interlocking Data Marts",
  subtitle: "Bloom-Net: A Semi-Decentralized Object Storage System",
  publication: "2026 IEEE Conference Proceedings",
  publisher: "IEEE",
  year: 2026,
  pdfUrl: "/bloomnet-paper.pdf",
  authors: [
    {
      name: "Rishabh Soni",
      department: "Department of Artificial Intelligence and Data Science Engineering",
      institution: "SIES Graduate School of Technology",
      location: "Navi Mumbai, India",
      email: "rishu358so@gmail.com",
    },
    {
      name: "Mihir Panpatil",
      department: "Department of Artificial Intelligence and Data Science Engineering",
      institution: "SIES Graduate School of Technology",
      location: "Navi Mumbai, India",
      email: "minnimihir05@gmail.com",
    },
    {
      name: "Medhansh Khedekar",
      department: "Department of Artificial Intelligence and Data Science Engineering",
      institution: "SIES Graduate School of Technology",
      location: "Navi Mumbai, India",
      email: "medhanshk10@gmail.com",
    },
    {
      name: "Sahil Navale",
      department: "Department of Artificial Intelligence and Data Science Engineering",
      institution: "SIES Graduate School of Technology",
      location: "Navi Mumbai, India",
      email: "sahilnavale2004@gmail.com",
    },
    {
      name: "Rohini Gaikwad",
      department: "Department of Artificial Intelligence and Data Science Engineering",
      institution: "SIES Graduate School of Technology",
      location: "Navi Mumbai, India",
      email: "rohinig@sies.edu.in",
    },
  ],
  abstract:
    "Storage workloads have outgrown the comfortable boundary between centralized and decentralized design. Centralized systems give clean orchestration but inherit master node fragility; fully decentralized ones avoid that fragility but pay for it in coordination overhead. We introduce Bloom-Net, a semi-decentralized object storage system built for on-premises deployments where hardware is limited and downtime is expensive. Its central idea is what we call the Interlocking Data Mart Topology: each physical machine runs two containerized MinIO instances, and each instance is pinned to a different logical cluster (a Data Mart). A single host therefore takes part in two overlapping Marts at once, which gives per-instance fault isolation and removes any need to rebalance a global cluster when failures occur. Scaling works the same way at a larger granularity — a new node forms a new Data Mart branch rather than enlarging a monolithic ring. Orchestration lives off the data path, on a FastAPI and Neo4j control plane we refer to as the Kernel, so reads and writes keep flowing even when the Kernel itself is unavailable. Node-to-node traffic rides a zero-trust Tailscale mesh, which sidesteps the certificate management pain that comes with heterogeneous on-prem fleets. Storage efficiency comes from MinIO’s in-line erasure coding (~1.6× overhead) coupled with active-active site replication for cross-Mart synchronization. We validate the design on an 18-instance testbed (9 physical nodes × 2 MinIO instances), and report measured comparisons against a 4-node MinIO baseline along with analytical HDFS estimates.",
  keywords: [
    "Distributed Object Storage",
    "Interlocking Topology",
    "Semi-Decentralized Architecture",
    "Dual-Instance Nodes",
    "MinIO",
    "In-line Erasure Coding",
    "Zero-Trust Mesh Networking",
    "Containerized Storage",
    "Fault Isolation",
    "Active-Active Site Replication",
    "On-Premises Infrastructure",
  ],
  sections: [
    {
      id: "sec-1",
      number: "I",
      title: "Introduction",
      content: [
        "Data produced by cloud platforms, IoT deployments, and edge devices continues to climb, and the storage layer underneath is being asked to do more on three fronts at once: hold more, ingest faster, and stay up under failure. Centralized designs such as the Hadoop Distributed File System (HDFS) handle the first two reasonably well but inherit their well-known limits — metadata scaling on a single NameNode, awkward adaptability across heterogeneous hardware, and a master-node dependency that turns any failure of that one component into a cluster-wide event.",
        "Fully decentralized systems flip the trade-off: they avoid that single point of failure but pay for it in consensus chatter, and the latency that comes with global coordination is rarely free.",
        "Hierarchical modular topologies offer a useful way around the scaling wall, and blockchain-derived cryptographic primitives can guarantee integrity without a central authority. The catch is that you usually inherit blockchain-scale latency along the way, which limits what such techniques can do inside the data path of a working storage system.",
        "Bloom-Net sits between those two extremes. It is a semi-decentralized distributed storage architecture organized around a Dual-Instance Interlocking Topology, in which each physical node belongs to more than one logical Data Mart at the same time. That arrangement lets us push hardware utilization upward while keeping fault domains tight.",
        "Concretely, this paper makes four contributions:",
        "1. Interlocking Data Mart Topology: a dual-instance node design that puts each physical machine in two overlapping logical clusters at once, so failures are contained at the instance level and no global rebalancing is ever needed.",
        "2. Dual-Head Node Architecture: every physical node runs two containerized MinIO instances, each tied to a different Data Mart, which pushes hardware utilization up while keeping the two co-located storage services isolated at the process level.",
        "3. Stateless Kernel Control Plane: a thin orchestration layer on FastAPI and Neo4j that sits entirely off the data path, so reads and writes keep flowing even when the control plane itself is unavailable.",
        "4. On-Premises Integration of Tailscale Mesh and Erasure Coding: a zero-trust Tailscale overlay paired with MinIO’s in-line erasure coding (1.6× overhead) — you get the security posture and the storage efficiency without having to lean on the cloud.",
      ],
    },
    {
      id: "sec-2",
      number: "II",
      title: "Literature Survey",
      content: [
        "Distributed File Systems and Hadoop: HDFS works well for large-scale batch processing but is held back by NameNode-side bottlenecks and a rigid posture toward heterogeneous deployments. Medalla et al. found that the choice of block size has a sizable effect on throughput, which is part of what pushed us toward erasure-coded object storage instead of a block-replicated layout.",
        "Blockchain and Decentralized Storage: Blockchain-backed storage adds verifiable access control and, in IPFS-style hybrids, a degree of decentralization that pure object stores do not offer. The standard objection still applies: every consensus round adds latency. Our position is a compromise — keep authenticated access, drop the global ledger.",
        "Object Storage and Performance: MinIO and similar lightweight object stores do well on edge and unstructured workloads, and disaggregated designs that pull compute and storage apart can shave latency further. Bloom-Net sits a layer above this: rather than treating MinIO as a single cluster, we wire several MinIO instances into a topology-aware arrangement that buys redundancy and throughput at the same time.",
        "Fractal and Honeycomb Architectures: Honeycomb-style and similarly modular network topologies are interesting because they get fault tolerance and efficient communication for free, simply from the way redundancy is distributed across the structure. We borrow that idea but apply it on the storage side instead of the network side, so that adding a node grows the system by spawning fresh Data Marts that remain connected to the existing ones rather than being absorbed into a single cluster.",
      ],
    },
    {
      id: "sec-3",
      number: "III",
      title: "Proposed System",
      content: [
        "Bloom-Net is containerized, semi-decentralized object store aimed at on-premises environments where resources are tight, and operators want fault isolation without the operational tax of a fully decentralized design. Its organizing idea is the Dual-Instance Interlocking Topology, which keeps orchestration centralized while pushing data resilience out to the nodes.",
        "System Layers:",
        "• Kernel Layer (Control Plane): The Kernel is the orchestration backbone. It handles topology registration and metadata coordination through a graph-shaped model. Implemented in Python on top of FastAPI and Neo4j 5.15, it sits off the data path — if the Kernel goes down, storage nodes carry on serving reads and writes.",
        "• Storage Layer (Data Plane): Object persistence runs on MinIO. A single physical host runs two MinIO instances (Instance A on ports 9001/9002, Instance B on ports 9003/9004), isolated from each other, participating in two different logical clusters at the same time.",
        "• Network Layer (Secure Mesh): Nodes communicate over an encrypted zero-trust Tailscale mesh network overlay (100.x.y.z Tailnet IPs).",
        "Storage Efficiency: MinIO's in-line erasure coding is used instead of 3x replication, reducing overhead to ~1.60x while tolerating up to M failures.",
      ],
    },
    {
      id: "sec-4",
      number: "IV",
      title: "Market Comparison and Effectiveness Analysis",
      content: [
        "We put Bloom-Net's interlocking design alongside systems used today: MinIO, Red Hat Ceph Storage, HDFS, and Dell PowerScale/ObjectScale.",
        "Key comparative metrics across 366 MB normalized baseline:",
        "• Overhead ratio: Bloom-Net achieves 1.60x overhead (585.6 MB physical for 366 MB logical), compared to MinIO (1.84x / 674 MB) and HDFS (3.00x / 1,098 MB). This is an 88.4 MB (13.1%) saving over MinIO and 512.4 MB (46.7%) saving over HDFS.",
        "• Write Ingest Rate: Bloom-Net achieves 2.85 MB/s sustained write throughput (2.1 min ingest time) vs MinIO (1.91 MB/s / 3.2 min) and HDFS (1.4 MB/s / 4.4 min).",
        "• Fault Tolerance: Bloom-Net tolerates 9 of 18 node failures (50%) per-instance with no NameNode single point of failure.",
      ],
    },
    {
      id: "sec-5",
      number: "V",
      title: "Implementation and Experimental Setup",
      content: [
        "We built Bloom-Net as a modular, fully containerized distributed system using Docker and Tailscale.",
        "Testbed Topology: 10 physical machines (1 Kernel control plane node + 9 physical commodity data nodes running 18 MinIO instances). Hardware per node: Intel Core i5-8250U (4C/8T), 8 GB DDR4, 256 GB SATA SSD.",
        "Validation Procedure: 1. Registration via Kernel API (/register-node). 2. Cluster Formation via /clusters active-active replication setup. 3. Synthetic S3 traffic generation (1 KB – 10 MB objects, ~2 GB per run).",
      ],
    },
    {
      id: "sec-6",
      number: "VI",
      title: "Results and Conclusion",
      content: [
        "We presented Bloom-Net, a semi-decentralized distributed storage architecture built for on-premises environments. Its defining idea is the Interlocking Data Mart Topology — logically splitting physical nodes into isolated dual instances so each host sits inside two independent clusters.",
        "Bloom-Net comes out ahead on storage efficiency, sustained write throughput, ingest speed, write P99 latency, and concurrent fault tolerance while maintaining zero control-plane SPOF on the data path.",
      ],
    },
  ],
  tables: [
    {
      id: "table-1",
      title: "Table I. Architectural Characteristics of Distributed Storage Systems",
      headers: ["Item", "HDFS", "MinIO", "Bloom-Net"],
      rows: [
        ["Architecture", "Master-worker", "Distributed peer", "Semi-dec. dual-head"],
        ["Metadata", "NameNode", "Distributed", "Out-of-path Kernel (FastAPI + Neo4j)"],
        ["Redundancy", "3x Replication", "In-line EC (1.5-2.0x)", "In-line EC (~1.60x)"],
        ["Overhead", "3.00x", "1.5–2.0x", "~1.60x"],
        ["Scale unit", "DataNode", "Node", "Dual-instance Mart"],
        ["Topology", "Flat", "Flat", "Overlapping Marts"],
        ["Control plane", "Coupled", "None", "Decoupled"],
        ["Net. security", "Kerberos", "TLS (manual)", "Zero-trust Tailscale mesh"],
      ],
    },
    {
      id: "table-2",
      title: "Table II. Fault Tolerance and Design Focus Comparison",
      headers: ["Item", "HDFS", "MinIO", "Bloom-Net"],
      rows: [
        ["SPOF", "Yes (NameNode)", "No", "No"],
        ["Detection", "30–90 s", "<15 s", "<15 s"],
        ["Domain", "Rack", "Pool", "Per-instance"],
        ["Recovery", "Block re-replication", "EC rebuild", "EC + cross-Mart"],
        ["Priority Target", "Data center", "Edge to cloud", "On-prem (Fault isolation)"],
      ],
    },
    {
      id: "table-3",
      title: "Table III. Storage Efficiency — Normalized to 366 MB",
      headers: ["Metric", "MinIO", "Bloom-Net", "HDFS"],
      rows: [
        ["Logical storage", "366 MB", "366 MB", "366 MB"],
        ["Overhead ratio", "1.84x", "1.60x", "3.00x"],
        ["Physical storage", "674 MB", "585.6 MB", "1,098 MB"],
        ["Per-node footprint", "168.5 MB / 4 nodes", "32.5 MB / 18 nodes", "366 MB / 3 DataNodes"],
        ["Per-node skew", "0.002%", "<5%", "15–30%"],
      ],
    },
    {
      id: "table-4",
      title: "Table IV. Network and Throughput — Normalized to 366 MB",
      headers: ["Metric", "MinIO", "Bloom-Net", "HDFS"],
      rows: [
        ["Write peak", "3.81 MB/s", "3.83 MB/s", "1.2–1.8 MB/s"],
        ["Write sustained avg", "~1.91 MB/s", "2.85 MB/s", "~1.4 MB/s"],
        ["Write amplification", "1.84x", "1.60x", "3.00x"],
        ["Projected ingest time", "~3.2 min", "~2.1 min", "~4.4 min"],
      ],
    },
  ],
  references: [
    "K. Dwivedi and S. K. Dubey, 'Analytical review on Hadoop Distributed file system,' 2014 5th International Conference - Confluence, IEEE, 2014.",
    "D. Kim, H. Yang, H. Lee and S. Park, 'Blockchain-Based Verifiable and Reliable File Access Control Layer for Cloud Storages,' 2023 IEEE International Conference on Big Data.",
    "G. Ramesh et al., 'A Comprehensive Review on Scaling Machine Learning Workflows Using Cloud Technologies and DevOps,' IEEE Access, 2025.",
    "A. Salvi et al., 'Leveraging MinIO and FileCloud for On-Premise Storage-as-a-Service in Educational Institutions,' 2025 IEEE IC3 Conference.",
  ],
};
