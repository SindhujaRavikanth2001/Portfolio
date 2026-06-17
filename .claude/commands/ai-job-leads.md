# AI Job Lead Generation

Find AI/ML job leads, discover hiring managers & recruiters, generate personalized outreach, and export a ready-to-use CSV — all in one workflow.

## Your Profile (Sindhuja Ravikanth)

- **Role target:** AI/ML Engineer, AI Software Engineer, LLM Engineer, Applied AI Engineer
- **Key skills:** Agentic AI, LangChain/LangGraph, RAG pipelines (AWS Bedrock), Hugging Face fine-tuning (LoRA/QLoRA), Python, TypeScript, React, AWS, Azure, Docker
- **Experience:** 4.5 years — NJ Dept of Children & Families (AI/serverless), Marist Poll (ML/browser agents), TCPWave (microservices)
- **Education:** M.S. Computer Science, Marist University (GPA 3.77)
- **Portfolio:** https://sindhujaravikanth2001.github.io/Portfolio (or your deployed URL)

---

## Step 1 — Find Target Companies & Roles

Search for AI companies actively hiring. Run these web searches and collect results:

```
Search queries to use:
1. "AI engineer hiring 2026 site:linkedin.com/jobs"
2. "LLM engineer OR agentic AI engineer jobs New Jersey OR remote"
3. "AWS Bedrock RAG engineer jobs"
4. "LangChain LangGraph engineer hiring startup"
5. "applied AI engineer entry mid-level remote USA"
```

**Target company types:**
- AI-native startups (Series A–C)
- Enterprise AI teams at mid-size tech companies
- AI consulting firms
- Companies building LLM-powered products

For each company found, collect: Company name, role title, job URL, and any hiring manager/recruiter name visible on the job post.

---

## Step 2 — Find Hiring Managers & Recruiters on LinkedIn

For each target company, search LinkedIn (manually or via the LinkedIn MCP if connected):

```
LinkedIn search patterns:
- "[Company Name]" AND ("AI hiring manager" OR "engineering manager" OR "VP Engineering" OR "Head of AI")
- "[Company Name]" AND ("technical recruiter" OR "talent acquisition" OR "ML recruiter")
```

**Free tools to find their emails** (use in this priority order):
1. **SalesQL** — 100 credits/month free, email + phone per credit: https://salesql.com
2. **Skrapp.io** — 100 emails/month free, LinkedIn extension: https://skrapp.io
3. **Tomba.io** — 75 searches/month free, verification included: https://tomba.io
4. **ContactOut** — 5 lookups/day (~150/month) free: https://contactout.com
5. **Apollo.io** — 50–100 email credits/month free, 210M+ database: https://apollo.io
6. **Snov.io** — 50 credits/month free, LinkedIn extension: https://snov.io
7. **Hunter.io** — 25 searches/month free: https://hunter.io

---

## Step 3 — Generate the Lead CSV

Create a CSV file named `ai_job_leads_YYYY-MM-DD.csv` with these columns:

```csv
Name,Title,Company,LinkedIn_URL,Email,Location,Source,Personalization_Note,Outreach_Message,Status,Follow_Up_Date
```

**Column definitions:**
- `Name` — Full name of the contact
- `Title` — Their job title
- `Company` — Company name
- `LinkedIn_URL` — Direct LinkedIn profile URL
- `Email` — Email address found (leave blank if not found)
- `Location` — City/Remote
- `Source` — How you found them (Apollo, LinkedIn Search, Job Post, etc.)
- `Personalization_Note` — One specific detail about their work/company to reference
- `Outreach_Message` — The personalized message (see Step 4)
- `Status` — Not Contacted / Sent / Replied / Interview / No Response
- `Follow_Up_Date` — Date to follow up if no reply (typically +7 days)

**Generate sample data** using web search results and save as CSV:

```python
# Run this Python snippet to create the CSV template
import csv
from datetime import datetime, timedelta

today = datetime.now().strftime("%Y-%m-%d")
follow_up = (datetime.now() + timedelta(days=7)).strftime("%Y-%m-%d")

filename = f"ai_job_leads_{today}.csv"
headers = ["Name","Title","Company","LinkedIn_URL","Email","Location",
           "Source","Personalization_Note","Outreach_Message","Status","Follow_Up_Date"]

with open(filename, 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=headers)
    writer.writeheader()
    # Rows will be added as leads are found

print(f"Created {filename}")
```

---

## Step 4 — Generate Personalized Outreach Messages

For **LinkedIn connection requests** (max 300 characters):

```
Hi [Name], I'm an AI/ML engineer with experience in agentic AI and RAG pipelines (AWS Bedrock + LangChain). 
I noticed [Company] is building [specific product/initiative]. 
Would love to connect and learn more about your team's AI work!
```

For **LinkedIn InMail / DM** (after connecting):

```
Hi [Name],

I came across [Company]'s work on [specific product or recent news] and was genuinely impressed by [specific detail].

I'm an AI/ML engineer with 4.5 years of experience — most recently building agentic AI workflows and RAG-based systems using AWS Bedrock and LangChain at the NJ Department of Children & Families, and transformer-based ML pipelines at Marist Poll.

I'd love to hear more about what your team is building on the AI side. Are you open to a quick 20-minute chat?

Best,
Sindhuja Ravikanth
[Portfolio URL] | tcp.sindhuja@gmail.com
```

For **cold email**:

```
Subject: AI/ML Engineer with RAG + Agentic AI experience — [Company Name]

Hi [Name],

I noticed [Company] recently [specific initiative/product/news]. As someone who's spent the past year building agentic AI systems and RAG pipelines on AWS Bedrock for production use, I was immediately intrigued.

Quick background: I'm an AI/ML engineer (M.S. CS, Marist University) with hands-on experience in:
• Agentic AI workflows using LangChain/LangGraph
• RAG pipelines with Amazon Bedrock and vector stores
• Transformer fine-tuning (LoRA/QLoRA) with Hugging Face
• Full-stack deployment on AWS + Docker

My portfolio: [URL]

Would you be open to a 15-minute call to explore if there's a fit?

Best,
Sindhuja Ravikanth
tcp.sindhuja@gmail.com
```

---

## Step 5 — MCP Servers You Can Connect Right Now

Connect these MCP servers to Claude Code to automate parts of this workflow:

### LinkedIn Access (Free, Open Source)
```bash
# stickerdaniel/linkedin-mcp-server
# Gives Claude access to LinkedIn profiles, jobs, companies via your logged-in browser
docker pull mcp/server/linkedin-mcp-server
```
Add to `~/.claude/settings.json`:
```json
{
  "mcpServers": {
    "linkedin": {
      "command": "docker",
      "args": ["run", "-i", "--rm", "mcp/server/linkedin-mcp-server"]
    }
  }
}
```

### Email Finding (Hunter.io — Free Tier)
```bash
npm install -g @hunter-io/hunter-mcp
```
Add to `~/.claude/settings.json` (requires free Hunter.io API key from https://hunter.io):
```json
{
  "mcpServers": {
    "hunter": {
      "command": "hunter-mcp",
      "env": { "HUNTER_API_KEY": "your_key_here" }
    }
  }
}
```

### Apollo.io (Free Tier — 50–100 email credits/month)
```bash
pip install apollo-mcp
```
Add to `~/.claude/settings.json` (requires free Apollo.io API key from https://apollo.io):
```json
{
  "mcpServers": {
    "apollo": {
      "command": "python",
      "args": ["-m", "apollo_mcp"],
      "env": { "APOLLO_API_KEY": "your_key_here" }
    }
  }
}
```

### B2B Lead Lists (Vibe Prospecting — No API key needed)
```json
{
  "mcpServers": {
    "vibeprospecting": {
      "command": "npx",
      "args": ["-y", "vibeprospecting-mcp"]
    }
  }
}
```
GitHub: https://github.com/explorium-ai/vibeprospecting-mcp

### Gmail Outreach
```bash
npm install -g email-agent-mcp
```
GitHub: https://github.com/UseJunior/email-agent-mcp  
Supports Gmail and Outlook. After setup, you can ask Claude to send emails directly.

### Full GTM/Sales Skill Suite
```bash
npx skills add sales-skills/sales
```
GitHub: https://github.com/sales-skills/sales  
Covers CRM, outbound, enrichment, email marketing, and more.

---

## Step 6 — Outreach Tracker Workflow

After generating your CSV, use this weekly cadence:

**Day 1:** Send LinkedIn connection requests (batch of 10–15/day to avoid limits)
**Day 3:** Send follow-up DM to those who accepted
**Day 7:** Send cold email to contacts where you found an email
**Day 14:** One final follow-up ("bumping this in case it got buried")

**LinkedIn daily limits (to stay safe):**
- Connection requests: max 20–25/day
- Messages: max 50–100/day
- Profile views: unlimited

---

## Quick Start

```
1. Run this command to start a fresh lead search session:
   "Search for AI/ML engineer jobs posted in the last 7 days on LinkedIn and Indeed. 
    Find 10 companies hiring for roles matching: agentic AI, RAG, LangChain, AWS Bedrock. 
    For each, find the hiring manager or technical recruiter's name and LinkedIn URL. 
    Generate a CSV with the results and a personalized outreach message for each contact."

2. Install SalesQL Chrome extension (free, 100 credits/month) to reveal emails as you browse LinkedIn

3. Connect the Vibe Prospecting MCP for automated B2B lead lists (no API key needed)

4. Connect Gmail MCP to send outreach directly from Claude
```

---

## Recommended Free Tool Stack

| Purpose | Tool | Free Limit | Link |
|---|---|---|---|
| Email finding | SalesQL | 100/month | https://salesql.com |
| Email finding | Skrapp | 100/month | https://skrapp.io |
| Email finding | Tomba | 75/month | https://tomba.io |
| Contact database | Apollo.io | 50–100/month | https://apollo.io |
| Domain email search | Hunter.io | 25/month | https://hunter.io |
| LinkedIn profiles via MCP | stickerdaniel/linkedin-mcp | Free/Open source | GitHub |
| B2B lead lists via MCP | Vibe Prospecting | Free | GitHub |
| Apollo via MCP | Inferensys/apollo-io-mcp | Free (uses your Apollo key) | GitHub |
| Email outreach via MCP | UseJunior/email-agent-mcp | Free (uses your Gmail) | GitHub |
| Full GTM skills | sales-skills/sales | Free | GitHub via npx |
| CRM (track applications) | HubSpot Free CRM | Free forever | https://hubspot.com |
| Job alerts | LinkedIn + Indeed alerts | Free | Set up email alerts |
