import puppeteer from 'puppeteer';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const resumeHTML = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  @page { margin: 0.4in 0.45in; }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    font-size: 10.5px;
    line-height: 1.28;
    color: #222;
  }
  .header { text-align: center; margin-bottom: 8px; }
  .header h1 {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: #000;
    margin-bottom: 3px;
  }
  .header .contact {
    font-size: 10px;
    color: #444;
  }
  .header .contact a { color: #444; text-decoration: none; }
  h2 {
    font-size: 11.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #111;
    border-bottom: 1.5px solid #333;
    padding-bottom: 2px;
    margin-top: 10px;
    margin-bottom: 4px;
  }
  h3 {
    font-size: 10.5px;
    font-weight: 700;
    color: #111;
    margin-top: 5px;
    margin-bottom: 1px;
  }
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
  .job-header .company { font-weight: 700; color: #111; }
  .job-header .location-period {
    font-size: 10px;
    color: #555;
    text-align: right;
    white-space: nowrap;
  }
  .job-title {
    font-style: italic;
    font-size: 10px;
    color: #333;
    margin-bottom: 2px;
  }
  ul { padding-left: 14px; margin-bottom: 3px; }
  li { margin-bottom: 1.5px; }
  .skills-block p { margin-bottom: 2px; }
  .skills-block strong { color: #111; }
  .two-col { display: flex; gap: 24px; }
  .two-col > div { flex: 1; }
  .project-title { font-weight: 700; color: #111; display: inline; }
  .project-tech { font-style: italic; color: #555; display: inline; font-size: 10px; }
</style>
</head>
<body>

<div class="header">
  <h1>Jason Terry</h1>
  <div class="contact">
    Livonia, MI 48150 &nbsp;|&nbsp; (313) 753-8592 &nbsp;|&nbsp; jason@terryarbors.com &nbsp;|&nbsp; <a href="https://linkedin.com/in/jason-e-terry">linkedin.com/in/jason-e-terry</a> &nbsp;|&nbsp; terryarbors.com
  </div>
</div>

<h2>Summary</h2>
  <p>Penetration tester and security researcher with 20+ years in technology, including enterprise sales at Microsoft, business operations, and dedicated offensive security training. Ranked in the top 1% on HackTheBox Academy and top 1,000 globally in HTB Labs. Background in enterprise technology sales provides a direct line between technical findings and business risk — reports that executives actually read.</p>

<h2>Technical Skills</h2>
<div class="skills-block">
  <p><strong>Offensive Security:</strong> Network & AD Pentesting, Web/API Security (REST, GraphQL, SOAP), AI/LLM Red Teaming, IoT/Hardware Security, Wireless Auditing (WPA2/3, RF), OSINT, Offensive Tool Development, Binary Exploitation, Physical Security.</p>
  <p><strong>Tools:</strong> Nmap, Metasploit, Burp Suite, BloodHound, Impacket, Netexec, Nuclei, Sliver, SQLMap, Responder, Wireshark, Ligolo-ng, Chisel, Flipper Zero, Proxmark 4, HackRF, Hak5 Suite.</p>
  <p><strong>Programming:</strong> Python, Bash, PowerShell, JavaScript/Node.js, C/C++, Go, C#/.NET.</p>
  <p><strong>Infrastructure:</strong> Linux (Arch, Kali), Windows Server, Proxmox, KVM/QEMU, VMWare, Ansible, Terraform.</p>
  <p><strong>Frameworks:</strong> OWASP Top 10 (Web, API, LLM), MITRE ATT&CK, MITRE ATLAS, NIST 800-53, ISO 27001, PCI-DSS, GDPR.</p>
</div>

<h2>Projects & Research</h2>

<p><span class="project-title">Custom Security Operations Platform</span> <span class="project-tech">| Node.js, React, TypeScript, PostgreSQL</span></p>
<ul>
  <li>Built a modular security testing framework with 49+ API endpoints, Burp Suite deep integration, and automated attack orchestration.</li>
  <li>Operator-driven workflow unifying reconnaissance, exploitation, and reporting with a plugin architecture for rapid capability extension.</li>
</ul>

<p><span class="project-title">Offensive Tooling & Engagement Infrastructure</span> <span class="project-tech">| Python, Bash, PowerShell, C/C++</span></p>
<ul>
  <li>Custom BOF exploit chain: fuzzing, EIP control, bad character analysis, and shellcode injection for x86 targets.</li>
  <li>Automated recon pipelines, NTLM credential attack scripts, and MITRE ATT&CK tactic classifier for structured engagement documentation.</li>
  <li>Curated 480+ tool arsenal organized by attack phase: enumeration, exploitation, privilege escalation, persistence, exfiltration, and C2.</li>
</ul>

<p><span class="project-title">AI Security Research Lab</span> <span class="project-tech">| Python, Ollama, CUDA</span></p>
<ul>
  <li>Built a 5-tool LLM assessment pipeline on dedicated GPU hardware: prompt injection tester, LLM-as-judge classifier, temperature probe, rate limit finder, and RAG canary token injection.</li>
  <li>Integrated with industry frameworks (Garak, PyRIT, Adversarial Robustness Toolbox); maintains organized prompt libraries for jailbreaks, harmful output, and system prompt extraction.</li>
</ul>

<p><span class="project-title">Hardware Security Lab</span> <span class="project-tech">| Raspberry Pi, ESP32, HackRF, Proxmark 4, LoRa</span></p>
<ul>
  <li>Custom wireless recon platforms (Pwnagotchi, Bjorn); signal analysis with HackRF/ESP32; RFID/NFC physical access research with Proxmark 4.</li>
  <li>LoRa mesh networking (LilyGo T-Deck, HELTEC LoRa32) for off-grid communication and security testing.</li>
</ul>

<p><span class="project-title">Home Lab & Honeypot Infrastructure</span></p>
<ul>
  <li>Full research environment with active honeypots for real-time attack pattern analysis; isolated virtualization (Proxmox, libvirt) for production-grade testing.</li>
</ul>

<h2>Certifications</h2>
<ul>
  <li><strong>PJPT</strong> — Practical Junior Penetration Tester (TCM Security)</li>
  <li><strong>Microsoft:</strong> AZ-900, SC-900, MS-900, PL-900</li>
  <li><strong>In Progress:</strong> PNPT (TCM Security), BSCP (PortSwigger)</li>
  <li><strong>Planned:</strong> OSCP (OffSec)</li>
</ul>

<h2>Practical Training</h2>
<ul>
  <li><strong>HTB Academy</strong> — Top 1% rank. 500+ targets across CPTS, CWES, and AI Red Teamer paths.</li>
  <li><strong>HTB Labs</strong> — Global rank #902. Top 1,000 in competitive machine exploitation.</li>
  <li><strong>HTB Seasons</strong> — Bronze tier competitor in time-constrained seasonal challenges.</li>
  <li><strong>TryHackMe</strong> — Global rank top 5%.</li>
  <li><strong>TCM Security</strong> — Completed Python for Hackers, AI Hacking, Web/API Hacking & Bug Bounty, Phishing Campaigns coursework.</li>
</ul>

<h2>Professional Experience</h2>

<div class="job-header">
  <span class="company">Knight Watch Inc.</span>
  <span class="location-period">Novi, MI — 2025</span>
</div>
<div class="job-title">Account Executive — Physical Security</div>
<ul>
  <li>Consulted on physical security integrations for Corporate, SLED, and NPO clients — surveillance, access control, and emergency response systems.</li>
  <li>Assessed on-premises security posture and integrated physical threat identification into enterprise risk frameworks.</li>
</ul>

<div class="job-header">
  <span class="company">Apex Digital Solutions</span>
  <span class="location-period">Southfield, MI — 2023–2024</span>
</div>
<div class="job-title">Senior Account Executive</div>
<ul>
  <li>Helped break the company's first $5M annual revenue milestone in 25 years of business through outcome-focused IT and cybersecurity sales.</li>
  <li>Built an automated RPA pipeline (Power Platform) that eliminated manual data formatting and cut lead generation time by 40%.</li>
  <li>Presented IT and cybersecurity solutions to C-suite stakeholders, aligning technical outcomes with compliance and risk requirements.</li>
</ul>

<div class="job-header">
  <span class="company">Microsoft</span>
  <span class="location-period">Detroit, MI — 2022–2023</span>
</div>
<div class="job-title">Direct Sales & Success — Education & NPO</div>
<ul>
  <li>Advised enterprise Education and NPO clients on M365 and Azure security, specializing in identity management and GRC alignment.</li>
  <li>Designed strategic adoption plans that mapped technical security features to regulatory requirements.</li>
</ul>

<div class="job-header">
  <span class="company">Blockchain Solutions</span>
  <span class="location-period">Pinckney, MI — 2017–2022</span>
</div>
<div class="job-title">System Administrator & Founder</div>
<ul>
  <li>Built and managed a cryptocurrency mining operation (~44 GPUs across 7 rigs), handling networking, power infrastructure, cooling, and remote monitoring.</li>
  <li>Developed custom tooling for real-time device health monitoring, automated alerts, and remote management across distributed hardware.</li>
</ul>

<div class="job-header">
  <span class="company">Terry Arbors</span>
  <span class="location-period">Pinckney, MI — 2010–2022</span>
</div>
<div class="job-title">Operations Director & Founder</div>
<ul>
  <li>Founded and operated a licensed agricultural operation under strict regulatory compliance, scaling from startup to national industry recognition.</li>
  <li>Managed full business operations — licensing, regulatory compliance, facility buildout, supply chain, physical security, and strategic marketing.</li>
</ul>

<h2>Education</h2>
<p><strong>AAS in Computer Information Systems</strong> — Computer & Network Technology (GPA 3.7, In Progress) — Schoolcraft College, Livonia, MI</p>

</body>
</html>`;

async function generatePDF() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  await page.setContent(resumeHTML, { waitUntil: 'networkidle0' });

  const outputPath = resolve(__dirname, '..', 'public', 'Jason-Terry-Resume.pdf');

  await page.pdf({
    path: outputPath,
    format: 'Letter',
    printBackground: true,
    displayHeaderFooter: false,
  });

  console.log(`PDF generated: ${outputPath}`);
  await browser.close();
}

generatePDF().catch(console.error);
