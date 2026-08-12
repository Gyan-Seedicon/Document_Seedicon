# Founder Module / Platform PRD Notes

---

## 1. Overview

### What is Seedicon?
Seedicon is an investment banking advisory firm that empowers startups and businesses with fundraising, strategic advisory, and investor engagement services.

### What Problem Does It Solve?
By connecting founders with the right investors and providing end-to-end investment support, Seedicon helps businesses accelerate growth while enabling investors to discover high-potential opportunities more efficiently.

### User Types
* **Founders:** Specifically early-stage founders below Series funding stage.
* **Investors:** Individuals or firms looking to invest in high-return startups.

---

## 2. Core User Flows

### Flow 1: Explore the Platform
`Landing Page` → `Sign Up` → `Select User Type (Founder)` → `Choose "Want to Explore"` → `Complete Basic Founder Onboarding` → `Dashboard`

### Flow 2: List Startup
`Landing Page` → `Sign Up` → `Select User Type (Founder)` → `Choose "Want to List Startup"` → `Complete Product Listing Form` → `Pay $5 Listing Fee` → `Submit for Admin Verification` → `Product Approved & Listed` → `Product Listing Page`

### Flow 3: Raise Funds
`Landing Page` → `Sign Up` → `Select User Type (Founder)` → `Choose "Want to Raise Funds"` → `Complete Fundraising Form` → `Submit to Seedicon (Investor Curation & Matching by Seedicon)` → `Dashboard`

---

## 3. Core Features & Modules (Organized Flow)

1. **Dashboard:** Central page displaying startup-related news, upcoming local startup events, government grant opportunities, learning blogs/articles, and due diligence checklists for fundraising readiness.
2. **Product Listing (Products Hub):** Product Hunt-style discovery page displaying listed startups/products with advanced filters, social engagement features, and individual product details.
3. **Founder Network:** Exclusive networking area for founders only (investors excluded) featuring profile details and internal messaging.
4. **Government Grants:** Directory listing government grants with filter options and direct links to official application portals (e.g., Grants of India).
5. **Real Market Problems:** Database of real-world market problems aggregated via web scraping or AI generation to help founders find new opportunities.
6. **Founder Struggles & Challenges:** Forum where founders post building challenges (publicly or anonymously) to get answers and advice from fellow founders.
7. **Pitch Deck Reviewer:** Tool where founders upload pitch decks (PDF/PPT/PPTX) to receive AI analysis and improvement insights, with a CTA linking to **Deckwale** for rebuilding decks from scratch.
8. **Due Diligence Checklist:** Industry-specific due diligence checklists helping founders verify required legal, financial, and product documents prior to pitching to investors.
9. **Startup News & Blogs:** Aggregated startup news from online sources and SEO-optimized learning blogs published by Seedicon.
10. **Product Analytics:** Performance dashboard for listed products showing views, search appearances, and time spent metrics.
11. **Messages:** Internal conversations between verified founders.

---

## 4. Onboarding & Forms

### 4.1 Founder Onboarding Form (Basic Details)

* **Founder Details:**
  * LinkedIn Profile URL *(Triggers auto-fill via Apify / scraping)*
  * Profile Photo
  * Profile Banner
  * Full Name
  * Designation
  * Official Email
  * Contact Number
  * Country
  * City
  * Founder Background / Bio
* **Professional Experience (Multiple):**
  * Company Name
  * Designation / Role
  * Start Date
  * End Date
* **Education (Multiple):**
  * University / Institution Name
  * Course / Major
  * Start Date
  * End Date
* **Co-Founders / Founding Team (Optional | Multiple):**
  * Co-Founder Full Name
  * Role
  * Official Email
  * LinkedIn Profile URL
  * *"Add Member"* Button

---

### 4.2 Product Listing Form (9 Steps)

* **Step 1: Product Description**
  * Product Logo
  * Product Name
  * Short Description
  * Detailed Description

* **Step 2: Product Details**
  * Website
  * Company Address
  * Social Links (LinkedIn, Instagram, X / Twitter)
  * Key Features *(Multiple)*

* **Step 3: Product Media**
  * Product Demo Video
  * Product Images *(Up to 6)*

* **Step 4: Product Integrations**
  * Integrations *(Multiple)*

* **Step 5: Product Category**
  * Industries *(Multi-Select)*
  * Other Industry

* **Step 6: Target Market & Stage**
  * Development Stage
  * Frequently Asked Questions:
    * What problem does your product solve?
    * Who is your target audience?
    * What makes your product unique?
    * What is your business model?
    * What are your future plans?
    * How do customers use your product?

* **Step 7: Product Pricing & Competitors**
  * Pricing Plans *(Multiple: Plan Name, Price, Included Features)*
  * Competitor Links *(Multiple: Competitor Website URL)*

* **Step 8: Important Links**
  * Link Name & Link URL *(Multiple)*

* **Step 9: Submit for Review**
  * Required fields before submission: Product Logo, Product Name, Short Description, Detailed Description, Website, Company Address, Industry (or Other Industry), Development Stage.

---

### 4.3 Founder Struggle Form
* Challenge Title
* Description
* Category
* Tags *(Auto-filled based on description)*
* Posting option: Anonymous or Named

---

### 4.4 Pitch Deck Reviewer Form
* Upload Pitch Deck (PDF / PPT / PPTX)

---

## 5. Business Rules

### Platform Access
* Only registered users can access the Founder Dashboard.
* Users must select a role (**Founder** or **Investor**) during sign-up.
* Mandatory onboarding details must be completed before using the platform.
* Unverified founders cannot send internal messages until basic profile verification is completed.
* Phone number is required during onboarding to reduce fake accounts. Alternatively, sign-up via Google OAuth with disposable email blocking is enforced.
* User duplication must be prevented.

### Startup Listing
* Only founders can create and manage startup listings.
* A mandatory **$5 listing fee** is required before submission.
* Listings remain **Pending Review** until approved by Seedicon admins.
* Only approved listings are publicly visible.
* Founders can edit and resubmit Draft or Rejected listings.
* A startup can have only one active public listing at a time.
* Duplicate startup listings are not allowed.
* Analytics become available only after the listing is approved and published.
* Deleted listings can be restored by an admin within a defined retention period.
* Featured Startup listings are selected exclusively by the Seedicon team.

### Fundraising
* Only founders can submit fundraising applications.
* Requests are manually reviewed and curated by the Seedicon team.
* Application submission does not guarantee investor meetings or funding.
* Founders cannot submit a new fundraising request while one is currently under review.

### Founder Network & Messaging
* Access is restricted to verified founders only.
* Verified founders can message other verified founders within the platform.
* File or image attachments are not allowed in messages.
* Spam, solicitation, and abusive content are prohibited.
* Users can report or block inappropriate accounts.
* Guideline violations may result in account suspension or bans.

### Government Grants
* Grant listings are for discovery purposes only.
* Applications redirect to official government portals (e.g., Grants of India).
* Seedicon does not guarantee grant approvals.

### Real Market Problems
* Problems are aggregated via AI or scraped from public sources.
* Content is informational and may not represent real-time conditions.

### Founder Challenges
* Posts can be published anonymously or under the founder's identity.
* Founders can comment, react, and share solutions.
* Seedicon reserves the right to moderate inappropriate content.

### Pitch Deck Reviewer
* Supports PDF, PPT, and PPTX formats only.
* AI analysis starts automatically upon upload.
* Uploaded decks remain private to the founder.
* AI recommendations are advisory and do not guarantee funding success.
* Users can regenerate AI analysis or rebuild their deck using Deckwale.

### Due Diligence Checklist
* Checklists are filtered by industry.
* Content is guidance only and does not guarantee investment readiness.

### Startup News & Blogs
* News is scraped from public online sources.
* Blogs are published by Seedicon for founder learning and SEO.
* External news links redirect to original sources.

### Product Analytics
* Available only to the founder who owns the listing.
* Metrics are updated periodically.
* Analytics are private and hidden from public users.

### Dashboard
* Content is personalized based on founder profile data.
* Grants, events, and recommendations update dynamically.
* AI-generated content is clearly marked.

### Admin Permissions & Governance
* Admins can Approve, Reject, Request Changes, or Remove listings.
* Admins can moderate posts, comments, and reported content.
* Admins can manage grants, blogs, featured startups, and global announcements.

### Notifications & Privacy
* Notifications sent for listing status changes, fundraising updates, and messages.
* Uploaded decks and fundraising docs remain private unless explicitly shared.

---

## 6. AI Integration & Automations

* **LinkedIn Profile Auto-Fill:** Automation via tools like Apify to scrape founder profile data from LinkedIn during onboarding.
* **Pitch Deck Reviewer:** LLM (e.g., ChatGPT) analyzes uploaded decks and offers improvement insights.
* **Real Market Problems:** AI & web scraping aggregate existing real-world market problems from online resources.
* **Struggle Auto-Tagging:** AI auto-fills tags based on the challenge description.

---

## 7. Success Metrics

| Metric | Definition | Target |
|---|---|---|
| Onboarding Completion Rate | Percentage of signed-up founders completing basic onboarding | High completion (>70%) |
| Paid Listing Conversion | Percentage of listed products completing $5 payment & submission | Steady growth |
| Founder Network Engagement | Active messages exchanged between verified founders | High daily active usage |
| Deck Reviewer Utilization | Pitch deck uploads and Deckwale rebuild conversions | Strong conversion to Deckwale |

---

## 8. User Stories

* **As a Founder**, I want to complete my onboarding with LinkedIn auto-fill so that I can set up my profile quickly.
* **As a Founder**, I want to list my product by paying $5 so that it can be reviewed and published for visibility.
* **As a Founder**, I want to upload my pitch deck so that I can get AI feedback and use Deckwale to recreate it.
* **As a Founder**, I want to message other verified founders so that I can network without investor or recruiter spam.
* **As an Admin**, I want to review submitted startup listings so that I can approve, reject, or request changes.

---

## 9. Pages to Design

| Slug | Ref | Page Name | User Type | Key Components | Purpose |
|---|---|---|---|---|---|
| `/dashboard` | P01 | Dashboard | Founder | News feed, events, grant alerts, due diligence widget | Overview hub for founders |
| `/products` | P02 | Product Listing | Public / Founder | Product Hunt style grid, filters, upvotes, product detail view | Discover listed startups |
| `/network` | P03 | Founder Network | Verified Founder | Founder directory, filters, message button | Founder-to-founder networking |
| `/grants` | P04 | Government Grants | Founder | Grant cards, filters, apply redirect link | Discover & apply for grants |
| `/market-problems` | P05 | Real Market Problems | Founder | Aggregated market problem list, category tags | Research market gaps |
| `/struggles` | P06 | Founder Struggles | Founder | Struggle post feed, anonymous toggle, comment section | Share challenges & advice |
| `/pitch-reviewer` | P07 | Pitch Deck Reviewer | Founder | File dropzone, AI insights display, Deckwale CTA button | Analyze & improve pitch decks |
| `/due-diligence` | P08 | Due Diligence Checklist | Founder | Industry selector, document checklist | Prepare for fundraising |
| `/news-blogs` | P09 | News & Blogs | Public / Founder | Scraped news feed, SEO blogs | Learn & stay informed |
| `/analytics` | P10 | Product Analytics | Listing Owner | Views graph, search impressions, time spent | Monitor product performance |
| `/messages` | P11 | Messages | Verified Founder | Chat list, message thread pane | Private founder communication |

---

## 10. Notifications & Email Summary

| Trigger Event | Channel | Summary |
|---|---|---|
| User Onboarding Completed | Email | Welcome email with next step guidance. |
| Product Listing Submitted & Fee Paid | Email / In-App | Confirmation of submission & payment; pending admin review. |
| Product Listing Approved / Rejected | Email / In-App | Listing status update notification with admin feedback. |
| Direct Message Received | In-App / Email | Notification of a new message from a verified founder. |
| Pitch Deck Review Ready | In-App | Alert when AI deck feedback is generated. |

---

## 11. Admin Portal Summary

Summarized admin view for handling founder onboarding submissions, startup listing approvals, content moderation, and platform management.

| Module / Area | Summary View & Admin Actions |
|---|---|
| Onboarding Submissions | Table summary of pending founder profiles for identity verification. |
| Product Listings Queue | Table of submitted product listings, fee payment verification, and Approve/Reject/Change buttons. |
| Content & Moderation | Interface for moderating struggle posts, reported accounts, and comments. |

---

## 12. UI Structure of Platform

### Navigation Skeleton

```
+---------------------------------------------------------------------------------------+
| TOP NAVBAR: Seedicon Logo | Search | Profile Avatar                                   |
+---------------------+-----------------------------------------------------------------+
| TINY SIDEBAR        | FEATURE NAVIGATION SIDEBAR                                      |
| (Core App Launcher) |                                                                 |
|                     |  - Dashboard                                                    |
|  - Seedicon         |  - Product Listing                                              |
|  - Allbuddy         |  - Founder Network                                              |
|  - Deckwale         |  - Government Grants                                            |
|  - Watch            |  - Real Market Problems                                         |
|                     |  - Founder Struggles                                            |
|  - Profile          |  - Pitch Deck Reviewer                                          |
|  - Settings         |  - Due Diligence Checklist                                      |
|                     |  - Startup News & Blogs                                         |
|                     |  - Product Analytics                                            |
|                     |  - Messages                                                     |
+---------------------+-----------------------------------------------------------------+
| MAIN CONTENT AREA                                                                     |
| Page views based on selected feature menu item                                        |
+---------------------------------------------------------------------------------------+
```
