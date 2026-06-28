export const profile = {
  name: 'Jason Terry',
  website: 'terryarbors.com',
  title: 'Security Researcher & Penetration Tester',
  email: 'jason@terryarbors.com',
  linkedin: 'https://linkedin.com/in/jason-e-terry',
  github: 'https://github.com/loudmumble',
  research: 'https://loudmumble.com',
  tagline: ['Security Researcher', 'Penetration Tester', 'Offensive Tool Developer', 'HTB Top 1%'],
  subTagline:
    'Offensive security operator with enterprise experience and a builder\'s mindset.',
  heroStats: [
    { label: 'HTB Academy', value: 'Top 1%' },
    { label: 'HTB Global Rank', value: '#902' },
    { label: 'Targets Compromised', value: '490' },
    { label: 'Security Tools Built', value: '40+' },
  ],
} as const;

export const summary = {
  short:
    'Penetration tester, security researcher, and offensive tool developer. I build end-to-end security tooling — from recon and exploitation to C2 and detection.',
  long: `I don't just run tools. I build them. ADCS exploitation frameworks, adversary simulation, behavioral intrusion detection, encrypted tunneling, C2 infrastructure — end-to-end across the engagement lifecycle. Select tools open sourced on GitHub.

Between building tools, I worked at Microsoft, Apex Digital Solutions, Knight Watch, and Blockchain Solutions across enterprise sales, business operations, and infrastructure. That experience gave me a perspective most pentesters don't have — I understand how organizations make decisions and what makes findings actionable.

Top 1% rank on HackTheBox Academy, global rank #902, 490 targets compromised. Completed CPTS and CWES job role paths.`,
  pivotQuestion:
    'Why does my business background matter in security?',
  pivotAnswer:
    "Because finding a vulnerability is the easy part. Getting it funded and fixed requires someone who can explain risk to a CFO, not just a CISO. I've sat in those rooms. I know how budget decisions get made.",
} as const;

export interface Skill {
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export const skills: Skill[] = [
  { name: 'OSINT', category: 'Offensive', level: 90 },
  { name: 'Network & AD Pentesting', category: 'Offensive', level: 85 },
  { name: 'Web/API Security', category: 'Offensive', level: 80 },
  { name: 'Wireless Auditing', category: 'Offensive', level: 80 },
  { name: 'IoT/Hardware Security', category: 'Offensive', level: 75 },
  { name: 'Offensive Tool Development', category: 'Offensive', level: 70 },
  { name: 'AI/LLM Red Teaming', category: 'Offensive', level: 70 },
  { name: 'ADCS/PKI Exploitation', category: 'Offensive', level: 75 },
  { name: 'Binary Exploitation', category: 'Offensive', level: 60 },
  { name: 'Reverse Engineering', category: 'Offensive', level: 60 },
  { name: 'Bash', category: 'Languages', level: 85 },
  { name: 'Python', category: 'Languages', level: 80 },
  { name: 'PowerShell', category: 'Languages', level: 73 },
  { name: 'C/C++', category: 'Languages', level: 70 },
  { name: 'JavaScript/TypeScript', category: 'Languages', level: 53 },
  { name: 'Go', category: 'Languages', level: 75 },
  { name: 'Zig', category: 'Languages', level: 40 },
  { name: 'C#/.NET', category: 'Languages', level: 40 },
  { name: 'SQL', category: 'Languages', level: 45 },
  { name: 'Nmap', category: 'Tools', level: 90 },
  { name: 'Metasploit', category: 'Tools', level: 85 },
  { name: 'Burp Suite', category: 'Tools', level: 80 },
  { name: 'Impacket', category: 'Tools', level: 80 },
  { name: 'Wireshark', category: 'Tools', level: 80 },
  { name: 'BloodHound', category: 'Tools', level: 78 },
  { name: 'Nuclei', category: 'Tools', level: 75 },
  { name: 'Sliver', category: 'Tools', level: 70 },
  { name: 'Raspberry Pi', category: 'Hardware', level: 90 },
  { name: 'Hak5 Suite', category: 'Hardware', level: 85 },
  { name: 'Flipper Zero', category: 'Hardware', level: 80 },
  { name: 'Proxmark 4', category: 'Hardware', level: 65 },
  { name: 'HackRF', category: 'Hardware', level: 60 },
  { name: 'Linux (Arch/Kali)', category: 'Infrastructure', level: 90 },
  { name: 'Windows Server', category: 'Infrastructure', level: 75 },
  { name: 'Proxmox/KVM', category: 'Infrastructure', level: 80 },
  { name: 'Ansible', category: 'Infrastructure', level: 55 },
  { name: 'Terraform', category: 'Infrastructure', level: 50 },
  { name: 'eBPF', category: 'Infrastructure', level: 45 },
];

export const skillCategories = [
  'Offensive',
  'Languages',
  'Tools',
  'Hardware',
  'Infrastructure',
] as const;

export const frameworks = [
  'OWASP Top 10 (Web, API, LLM)',
  'MITRE ATT&CK',
  'MITRE ATLAS',
  'NIST 800-53',
  'ISO 27001',
  'PCI-DSS',
];

export const extendedTools = [
  'SQLMap',
  'Commix',
  'Empire',
  'Nishang',
  'PowerView',
  'CrackMapExec',
  'Responder',
  'Hashcat',
  'John the Ripper',
  'Hydra',
  'Gobuster',
  'Feroxbuster',
  'FFuf',
  'breach-parse',
  'dehashed',
  'Sherlock',
  'winPEAS',
  'linPEAS',
  'BloodHound',
  'Mimikatz',
  'Rubeus',
  'Certipy',
  'Evil-WinRM',
  'Covenant',
  'Ligolo-ng',
  'Chisel',
  'Netcat',
  'Socat',
];

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  highlights: string[];
  status: string;
}

export const projects: Project[] = [
  {
    title: 'DE-VoidLink',
    subtitle: 'Adversary Simulation Framework',
    description:
      'Replicated the VoidLink agentic malware framework from published threat intelligence for detection engineering research. Published 11 YARA rules, 7 Sigma rules, and Suricata detection signatures.',
    tech: ['Zig', 'Go', 'C', 'YARA', 'Sigma', 'Suricata'],
    highlights: [
      'Zig beacon with direct syscall fingerprinting',
      'Go C2 server with AES-256-GCM encrypted protocol',
      '5 HTTP traffic camouflage modes',
      'Published detection rules validated against Aegis IDS',
    ],
    status: 'Active Development',
  },
  {
    title: 'Aegis',
    subtitle: 'Behavioral IDS for Agentic Threats',
    description:
      'Detects LLM-driven attacks via cadence analysis and inter-arrival time fingerprinting. 9 detection rules, 9 LLM model profiles, 190 tests.',
    tech: ['Go', 'eBPF', 'Machine Learning', 'Behavioral Analysis'],
    highlights: [
      'Inter-arrival time fingerprinting for LLM detection',
      '9 known LLM model behavioral profiles',
      '9 behavioral detection rules (AEGIS-001 through AEGIS-009)',
      '190 tests passing with full coverage',
    ],
    status: 'Active Development',
  },
  {
    title: 'CertStrike',
    subtitle: 'ADCS Exploitation Framework',
    description:
      'ADCS exploitation framework covering ESC1-14 with shadow credentials, golden certificate forging, and integrated cert-auth C2.',
    tech: ['Go', 'LDAP', 'X.509', 'Kerberos'],
    highlights: [
      'ESC1-14 detection and exploitation with dedicated Scan/Exploit functions',
      'Auto-pwn orchestration across all ESC paths',
      'Cert-auth C2 with file delivery and deploy',
      'SmartPotato privilege escalation implant',
    ],
    status: 'Active Development',
  },
  {
    title: 'Custom Security Operations Platform',
    subtitle: 'Full-Stack Offensive Testing Framework',
    description:
      "A modular security testing framework built from scratch around my engagement workflow. 49+ API endpoints, Burp Suite integration, interactive shell management, and automated attack orchestration. Designed to unify reconnaissance, exploitation, and reporting into a single operator-driven interface.",
    tech: [
      'Node.js',
      'Express',
      'React',
      'TypeScript',
      'PostgreSQL',
      'WebSocket',
    ],
    highlights: [
      'Custom C2 framework with API-driven architecture',
      'Burp Suite deep integration with OOB detection',
      'Purple team feedback loop: offensive findings feed directly into Aegis detection rule tuning',
      'Real-time scan orchestration and findings correlation across coordinated tool ecosystem',
    ],
    status: 'Active Development',
  },
  {
    title: 'eBPF Security Sensors',
    subtitle: 'Kernel-Level Telemetry Collection',
    description:
      'High-performance eBPF-based security sensors for real-time kernel event collection. Captures process execution, file access, network connections, and privilege escalation attempts with minimal overhead.',
    tech: [
      'C',
      'eBPF',
      'Python',
      'Linux Kernel',
    ],
    highlights: [
      'Real-time process, file, and network event capture',
      'Privilege escalation and credential access detection',
      'Minimal kernel overhead via eBPF ring buffers',
      'Feeds directly into Aegis behavioral detection pipeline',
    ],
    status: 'Active Development',
  },
  {
    title: 'AI Security Research Lab',
    subtitle: 'LLM Adversarial Assessment Pipeline',
    description:
      '5-tool LLM assessment pipeline built during TCM Security AI Hacking coursework. Covers prompt injection testing, LLM-as-judge classification, determinism probing, rate limit analysis, and RAG data poisoning detection, integrated with Garak, PyRIT, and the Adversarial Robustness Toolbox.',
    tech: ['Python', 'Ollama', 'CUDA', 'Proxmox', 'Flask', 'REST API'],
    highlights: [
      'Custom prompt injection tester with CSV attack libraries and rate-limited concurrent delivery',
      'LLM-as-judge classifier: local model scores injection success with confidence metrics',
      'RAG canary token injection for detecting knowledge base data extraction',
      'Organized jailbreak, harmful output, and system prompt extraction prompt libraries',
    ],
    status: 'Active Research',
  },
  {
    title: 'Hardware Lab',
    subtitle: 'Wireless & Physical Security Platforms',
    description:
      'Custom wireless recon platforms for passive environment auditing. Signal analysis across Wi-Fi and RF spectrums. RFID/NFC physical access testing with Proxmark 4.',
    tech: [
      'Raspberry Pi',
      'ESP32',
      'HackRF',
      'Proxmark 4',
      'LoRa',
      'Python',
    ],
    highlights: [
      'Pwnagotchi & Bjorn custom wireless recon builds',
      'Wi-Fi and RF reconnaissance with HackRF/ESP32',
      'RFID/NFC physical access research with Proxmark 4',
      'LoRa mesh networking for off-grid comms',
    ],
    status: 'Ongoing',
  },
  {
    title: 'Home Lab & Honeypot',
    subtitle: 'Research Environment',
    description:
      'Full research environment with active honeypots for real-world attack pattern analysis. Managed via Proxmox with isolated VMs for production-grade testing scenarios.',
    tech: ['Proxmox', 'Linux', 'Python', 'Docker', 'Networking'],
    highlights: [
      'Active honeypots monitoring real-world attack patterns',
      'Isolated virtualization for security testing scenarios',
      'Custom monitoring and alerting pipeline',
      'Private LLM and media services on dedicated infrastructure',
    ],
    status: 'Ongoing',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  status: 'earned' | 'in-progress' | 'planned';
  year?: string;
}

export const certifications: Certification[] = [
  { name: 'PJPT', issuer: 'TCM Security', status: 'earned', year: '2024' },
  { name: 'AZ-900', issuer: 'Microsoft', status: 'earned' },
  { name: 'SC-900', issuer: 'Microsoft', status: 'earned' },
  { name: 'MS-900', issuer: 'Microsoft', status: 'earned' },
  { name: 'PL-900', issuer: 'Microsoft', status: 'earned' },
  { name: 'PNPT', issuer: 'TCM Security', status: 'in-progress' },
  { name: 'BSCP', issuer: 'PortSwigger', status: 'in-progress' },
];

export interface TrainingPlatform {
  name: string;
  achievement: string;
  detail: string;
}

export const training: TrainingPlatform[] = [
  {
    name: 'HackTheBox Academy',
    achievement: 'Top 1%',
    detail: '490 targets compromised. Completed CPTS and CWES job role paths; AI Red Teamer in progress',
  },
  {
    name: 'HackTheBox Labs',
    achievement: 'Global #902',
    detail: 'Top 1,000 in competitive machine exploitation',
  },
  {
    name: 'TryHackMe',
    achievement: 'Top 5%',
    detail: 'Global rank top 5%',
  },
  {
    name: 'TCM Security',
    achievement: 'CE Credits',
    detail: 'Python for Hackers, AI Hacking (built 5-tool LLM pipeline), Web/API Hacking & Bug Bounty, Phishing Campaigns',
  },
];

export interface Experience {
  company: string;
  title: string;
  period: string;
}

export const experience: Experience[] = [
  {
    company: 'Knight Watch Inc.',
    title: 'Account Executive',
    period: '2025',
  },
  {
    company: 'Apex Digital Solutions',
    title: 'Senior Account Executive',
    period: '2023 – 2024',
  },
  {
    company: 'Microsoft',
    title: 'Direct Sales & Success, Education & NPO',
    period: '2022 – 2023',
  },
  {
    company: 'Blockchain Solutions',
    title: 'System Administrator & Founder',
    period: '2017 – 2022',
  },
];

export const education = {
  degree: 'AAS in Computer Information Systems',
  focus: 'Computer & Network Technology',
  school: 'Schoolcraft College, Livonia, MI',
  gpa: '3.7',
  status: 'In Progress',
};

export interface ChatResponse {
  patterns: string[];
  response: string;
  followUp?: string;
}

export const chatResponses: ChatResponse[] = [
  {
    patterns: [
      'methodology',
      'approach',
      'process',
      'how',
      'pentest',
      'engagement',
      'assess',
    ],
    response:
      "I don't start with scanners. I start by understanding the business: what they do, where the revenue flows, what a breach actually costs them. Then I map the attack surface with that context. Automated enumeration catches the low-hanging fruit, but the critical findings come from manual testing against business logic. A scanner won't find that your password reset flow leaks user existence, or that your API authorization is role-based in name only. I prioritize findings by actual business impact, not just CVSS scores.",
    followUp: 'Want to know about my reporting approach?',
  },
  {
    patterns: [
      'report',
      'reporting',
      'deliverable',
      'finding',
      'documentation',
      'write',
      'communicate',
    ],
    response:
      "My reports are built for two audiences: the technical team that needs to fix the issue, and the executive who needs to fund the fix. Every finding includes a clear business risk statement, not just 'SQL injection found,' but 'Unauthenticated access to customer PII affecting N records, estimated remediation cost vs. breach liability.' My background at companies like Microsoft means I know what makes someone approve a budget line item.",
    followUp: 'Want to hear about my business background?',
  },
  {
    patterns: [
      'why',
      'hire',
      'different',
      'unique',
      'stand out',
      'special',
      'value',
    ],
    response:
      "Three things separate me from a typical candidate: First, I have a business operations background — I've worked at Microsoft, Apex Digital Solutions, and Knight Watch. My findings come with business context, not just technical jargon. Second, I'm hardware-capable. Physical access testing, RF analysis, badge cloning. Most pentesters never touch physical. Third, I build and maintain my own tooling and engagement infrastructure. I understand the attack chain because I've implemented both sides of it.",
    followUp: 'Want to discuss my methodology or availability?',
  },
  {
    patterns: [
      'sales',
      'pivot',
      'transition',
      'switch',
      'career change',
      'why security',
      'business',
    ],
    response:
      "Security is where I started. I was building tools and doing security research before I was old enough to drive. The business years at Microsoft, Apex Digital Solutions, and Knight Watch weren't a detour — they were additional training. That perspective is rare in this field and it directly improves the quality of every engagement I deliver.",
    followUp: 'Want to see how that translates to my reporting approach?',
  },
  {
    patterns: [
      'experience',
      'background',
      'years',
      'how long',
      'career',
      'work history',
    ],
    response:
      "Security is where I started and where I've always been. I've worked at Microsoft, Apex Digital Solutions, Knight Watch, and Blockchain Solutions across enterprise sales, business operations, and infrastructure. Those roles gave me perspective, but the security work never stopped. I build end-to-end offensive tooling — from exploitation frameworks and C2 to behavioral detection and encrypted tunneling.",
    followUp: 'Want to know about my security methodology?',
  },
  {
    patterns: [
      'project',
      'build',
      'tool',
      'c2',
      'framework',
      'portfolio',
      'custom',
      'script',
    ],
    response:
      "I build tools because I want to understand the full attack chain, not just run someone else's scripts. My main project is a custom security operations platform with 49+ API endpoints, Burp Suite integration, automated orchestration, built because existing tools don't match my workflow. Beyond that, I maintain a full engagement infrastructure: automated recon pipelines that chain asset discovery through subdomain takeover detection, custom buffer overflow exploit tooling for x86 targets, NTLM credential attack scripts, a MITRE ATT&CK tactic classifier I wrote for mapping findings during reporting, and a curated deployment toolkit organized by platform and attack phase. My flagship projects are DE-VoidLink, a full adversary simulation framework I built in Zig, Go, and C from real threat intelligence, and Aegis, a behavioral IDS that detects LLM-driven attacks. I also maintain an AI adversarial research lab and custom wireless recon platforms.",
    followUp: 'Want to know about my hardware capabilities?',
  },
  {
    patterns: ['hardware', 'physical', 'wireless', 'rf', 'iot', 'flipper', 'proxmark', 'badge'],
    response:
      "Physical security assessment is a major differentiator in my skillset. I use Proxmark 4 for access control auditing, HackRF for RF spectrum analysis, and custom-built wireless recon platforms for passive environment mapping. I approach physical assessments the same way I approach network pentests: systematic enumeration, targeted exploitation, and clear documentation of the control failures. Most pentesters can't offer physical access testing. I can scope and deliver it as part of a comprehensive engagement.",
    followUp: 'Want to know about my engagement methodology?',
  },
  {
    patterns: [
      'contact',
      'email',
      'reach',
      'talk',
      'meet',
      'schedule',
      'available',
      'availability',
      'call',
    ],
    response:
      "I'm available immediately for penetration testing, red team, and security consultant roles, full-time or contract. Best way to reach me is jason@terryarbors.com or LinkedIn at linkedin.com/in/jason-e-terry. You can also see my security research and open source tools at loudmumble.com. Scroll down to the contact section to send a message directly.",
    followUp: 'Anything else you want to know before reaching out?',
  },
  {
    patterns: ['ai', 'llm', 'machine learning', 'ml', 'artificial intelligence', 'prompt'],
    response:
      "AI/LLM security is an active research area for me. Through TCM Security's AI Hacking course, I built a 5-tool assessment pipeline on dedicated GPU hardware: a prompt injection tester that fires structured attack libraries at chat endpoints with rate limiting and repeat testing, an LLM-as-judge classifier that uses a local model to score injection success with confidence metrics, a temperature probe for detecting non-determinism, a rate limit threshold finder, and a RAG canary system for detecting knowledge base data extraction. I also work with industry tools like Garak, PyRIT, and the Adversarial Robustness Toolbox, and I maintain organized prompt libraries for jailbreaks, harmful outputs, and system prompt extraction. I've completed HTB's AI Red Teamer path. This is an emerging attack surface and I'm building practical, repeatable assessment methodology.",
    followUp: 'Interested in my other research projects?',
  },
  {
    patterns: [
      'team',
      'collaborate',
      'work with',
      'culture',
      'fit',
      'personality',
      'manage',
    ],
    response:
      "I adapt to the organization. In structured environments, I follow the playbook and contribute improvements through the right channels. In leaner teams, I'm self-directed. I'll scope, execute, and deliver without needing oversight. My time at Microsoft, Apex Digital Solutions, and Knight Watch means I understand deadlines, client expectations, and the reality that security work exists within a commercial context.",
    followUp: 'Want to know about my availability or methodology?',
  },
  {
    patterns: [
      'cert',
      'certification',
      'pjpt',
      'pnpt',
      'oscp',
      'bscp',
      'qualified',
    ],
    response:
      "PJPT certified through TCM Security, with PNPT and BSCP (PortSwigger) actively in progress. I also hold Microsoft AZ-900 and SC-900. But the more meaningful proof is the practical record: top 1% on HTB Academy, global rank #902 in HTB Labs, 490 targets compromised, and completed CPTS and CWES job role paths.",
    followUp: 'Want to see my project work or engagement methodology?',
  },
  {
    patterns: [
      'skill',
      'tool',
      'language',
      'programming',
      'tech',
      'stack',
      'know',
      'capable',
    ],
    response:
      "My technical details are on the Skills section above, but here's what the skill bars don't tell you: I maintain a full engagement toolkit organized by platform and attack phase. Hundreds of tools for Windows and Linux, from privilege escalation and credential extraction to pivoting, exfiltration, and payload staging. I choose tools based on the engagement, not habit. When off-the-shelf doesn't fit, I write custom scripts: NTLM spray tools, buffer overflow exploit chains, CSS-based blind data exfiltration, recon automation. I've also built my own MITRE ATT&CK classifier for structuring findings. That range means I can assess environments from network, application, wireless, and physical angles in a single engagement.",
    followUp: 'Want to know how I approach a typical engagement?',
  },
];

export const defaultChatResponse: ChatResponse = {
  patterns: [],
  response:
    "I can tell you about my engagement methodology, reporting approach, what differentiates me from other candidates, or how my business background strengthens my security work. What would be most useful?",
  followUp:
    'Try asking about my methodology, reporting approach, or what makes me different.',
};

export const suggestedQuestions = [
  'How do you approach an engagement?',
  'What makes you different?',
  'Tell me about your reporting',
  'Why the career path through sales?',
  'How do you fit into a team?',
  'How do I contact you?',
];
