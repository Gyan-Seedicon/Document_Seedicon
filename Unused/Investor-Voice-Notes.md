# Investor Module / Platform

---

## 1. Overview

### What is Seedicon?
Seedicon is an investment banking advisory firm that empowers startups and businesses with fundraising, strategic advisory, and investor engagement services.

### What Problem Does It Solve?
By connecting founders with the right investors and providing end-to-end investment support, Seedicon helps businesses accelerate growth while enabling investors to discover high-potential opportunities more efficiently.

### User Types
* **Founders:** Specifically early-stage founders below the Series funding stage.
* **Investors:** Individuals or firms who want to invest in startups that can generate strong returns.

---

## 2. Core User Flow

### Explore the Platform
`Landing Page` → `Sign Up` → `Select User Type (Investor)` → `Complete Basic Investor Onboarding` → `Investor Dashboard`

---

## 3. Features / Pages (Investor Module)

1. **Dashboard:** On this page, investors can view a list of startups, key metrics, the deal pipeline summary, and recent inbound startups.
2. **Funds:** Investors can add multiple funds from the sidebar and manage the fund amounts charged to them.
3. **Public Submission Link:** Investors can share a public submission link with founders and startups. The link contains a due diligence document requirement form. Investors can customize the form by adding or removing fields according to the information they want to collect. Once submitted, the startup is automatically added to the Startup Pool.
4. **All Documents:** Works like Google Drive, allowing investors to store and access all their documents directly within the platform instead of using external platforms. Documents feature metrics such as total views, average time spent, and visualization graphs.
5. **Investment Thesis:** Investors can create multiple investment theses defining the target industries, stages, and types of startups they want to invest in. They can also upload or import an existing thesis from their local computer.
6. **LP Lists:** Investors can manage all their Limited Partners (LPs) from a single platform, including their records and reporting, so everything remains organized and accessible in one place.
7. **Startup Pool:** Contains all inbound startups received through the submission link. Investors can open any startup to view its detailed profile and all the information submitted through the form. Startups can also be filtered based on the investor's specific requirements.
8. **Pipeline Startups:** Works as a saved/bookmark section where investors can add interesting startups from the Startup Pool to their pipeline. Investors can organize startups into different folders based on their investment thesis or requirements.
9. **Data Room:** Works like a Virtual Data Room (VDR) where investors can manage due diligence documents. Investors can create multiple VDRs with folders such as General, Financial, and Legal, and share them securely with founders or other stakeholders. Investors can also add notes, manage sharing, view analytics, and track activity. If a founder has shared a VDR with the investor, it can also be accessed directly from this page.
10. **Reporting:** Investors and VCs can create and submit performance reports to LPs and maintain a complete record of the reports within the platform.
11. **Founder Reports:** Investors can request reports from founders and manage all founder reporting activities from this section.
12. **My Team:** Investors can add multiple team members and manage their access to VDRs and other platform features.
13. **DD Partners:** Investors can add and manage due diligence partners and share VDRs with them whenever required.
14. **History Logs:** Records and maintains a complete history of activities and actions performed across the investor account.

---

## 4. Investor Onboarding Forms (Basic Details)

### Step 1: Identity & Credibility

#### Profile Visibility
* Public / Private Profile Toggle

#### Personal & Professional Info
* LinkedIn Profile URL
* Full Name
* Designation / Headline
* Email Address
* Investor Type *(Angel Investor, Venture Capitalist, Micro VC, Family Office, Syndicate Lead, Corporate VC, Accelerator / Incubator)*
* Location *(City, Country)*
* Phone Number
* Bio / Profile Summary
* Profile Avatar Photo
* Cover Photo

#### Professional Experience *(Repeatable)*
* Company / Firm Name
* Role / Designation
* Start Date
* End Date
* Currently Working Here *(Checkbox)*

#### Education *(Repeatable)*
* Institution / University
* Degree / Field of Study
* Start Year
* End Year

---

## 5. Business Rules

1. Investors must complete basic onboarding before accessing investor features.
2. Investor data and documents must remain private unless explicitly shared.
3. Investors can manage multiple funds, investment theses, LPs, team members, and DD partners.
4. Access to sensitive data must be controlled through role-based permissions.
5. Startups received through submission links must automatically enter the investor’s Startup Pool.
6. Investors can customize submission requirements before sharing the public submission link.
7. Startups can only be added to the pipeline by authorized investor or team members.
8. VDR access must always be permission-based and revocable.
9. Every shared, viewed, downloaded, edited, or deleted document should be tracked.
10. Team members and DD partners can access only the resources explicitly permitted to them.
11. LP and founder reports must maintain submission status, history, and records.
12. All critical investor activities must be captured in History Logs for auditability.
13. Deleted or revoked resources should no longer be accessible to previously authorized users.
14. Investor-level data should be isolated from other investors unless explicitly shared.

> **Note:** These are a few core rules. Please think beyond these and create more important business rules where required when building the full PRD.

---

## 6. Admin Portal

### Admin Part Overview & Functionality

| Module | Purpose & Features |
|---|---|
| **Investor Verification & Approval** | Review submitted investor onboarding profiles, verify LinkedIn/credibility info, and grant verified status. |
| **Startup Pool Oversight** | Oversee inbound startups, manage public submission links, and handle flagged submissions. |
| **VDR & Security Audit** | Audit platform-wide VDR access permissions, document view logs, and data security compliance. |
| **User & Team Management** | Manage investor team permissions, DD partner links, and user access controls across the platform. |
> **Note:** These are a few core things. Please think beyond these and create more important things where required when building the full PRD.
---
