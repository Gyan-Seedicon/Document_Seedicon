/**
 * VDR Mock Data & Standard Due Diligence Presets
 * Used by vdr-detail.html and related Virtual Data Room components.
 */

const VDR_PIPELINE_STARTUPS = [
  { id: 'dd_1', name: 'Alpha Health', avatar: 'AH', sector: 'Healthcare', founder: 'Dr. Sarah Chen', email: 'sarah@alphahealth.com' },
  { id: 'dd_2', name: 'NeuroPulse', avatar: 'NP', sector: 'MedTech', founder: 'Mark Evans', email: 'mark@neuropulse.io' },
  { id: 'dd_3', name: 'EcoPulse Energy', avatar: 'EP', sector: 'CleanTech', founder: 'Priya Sharma', email: 'priya@ecopulse.com' },
  { id: 'dd_4', name: 'Apex AI', avatar: 'AA', sector: 'AI / Software', founder: 'Vikram Mehta', email: 'vikram@apexai.io' },
  { id: 'dd_5', name: 'FinFlow Tech', avatar: 'FF', sector: 'FinTech', founder: 'Alexandre Dubois', email: 'alex@finflow.io' },
  { id: 'dd_6', name: 'LogiChain Labs', avatar: 'LC', sector: 'Logistics', founder: 'Rajan Menon', email: 'rajan@logichain.io' },
  { id: 'dd_7', name: 'BioCore Diagnostics', avatar: 'BC', sector: 'BioTech', founder: 'James Whitfield', email: 'james@biocore.com' },
  { id: 'dd_8', name: 'SkyTrack Mobility', avatar: 'ST', sector: 'Mobility', founder: 'Helen Cruz', email: 'helen@skytrack.io' }
];

const VDR_FULL_FOLDERS_PRESET = [
  {
    id: 'general',
    title: 'General',
    docs: [
      { id: 'doc_g1', name: 'crusource_prd', template: 'PRD_Spec_v2.pdf', size: '29.46 KB', type: '.html', date: 'August 21, 2026' },
      { id: 'doc_g2', name: 'Executive_Summary_Deck', template: 'Exec_Summary_Template.pptx', size: '4.20 MB', type: '.pdf', date: 'August 20, 2026' },
      { id: 'doc_g3', name: 'Company_One_Pager_Overview', template: '1Page_Teaser.pdf', size: '840.10 KB', type: '.pdf', date: 'August 22, 2026' }
    ]
  },
  {
    id: 'corporate_legal',
    title: 'Corporate & Legal',
    docs: [
      { id: 'doc_cl1', name: 'Certificate_of_Incorporation', template: 'Incorporation_Standard.pdf', size: '1.15 MB', type: '.pdf', date: 'August 15, 2026' },
      { id: 'doc_cl2', name: 'Cap_Table_Summary_2026', template: 'CapTable_Model_v3.xlsx', size: '248.10 KB', type: '.xlsx', date: 'August 16, 2026' },
      { id: 'doc_cl3', name: 'Shareholders_Agreement', template: 'SHA_Framework.docx', size: '890.40 KB', type: '.pdf', date: 'August 18, 2026' },
      { id: 'doc_cl4', name: 'MoA_and_AoA_Constituent_Docs', template: 'MOA_AOA_Draft.pdf', size: '1.40 MB', type: '.pdf', date: 'August 17, 2026' },
      { id: 'doc_cl5', name: 'Board_Resolutions_and_Minutes_FY25', template: 'Board_Minutes_Archive.pdf', size: '2.10 MB', type: '.pdf', date: 'August 19, 2026' }
    ]
  },
  {
    id: 'financials',
    title: 'Financials & Tax',
    docs: [
      { id: 'doc_fn1', name: 'Audited_Financial_Statements_2025', template: null, size: '3.80 MB', type: '.pdf', date: 'August 10, 2026' },
      { id: 'doc_fn2', name: '5Yr_Financial_Forecast_Model', template: 'SaaS_Financial_Model_Template.xlsx', size: '420.50 KB', type: '.xlsx', date: 'August 12, 2026' },
      { id: 'doc_fn3', name: 'Monthly_MIS_and_Burn_Rate_Q2', template: 'Monthly_MIS_Report.xlsx', size: '310.20 KB', type: '.xlsx', date: 'August 14, 2026' },
      { id: 'doc_fn4', name: 'Tax_Clearance_and_GST_Filings_2025', template: null, size: '1.65 MB', type: '.pdf', date: 'August 15, 2026' }
    ]
  },
  {
    id: 'product_ip',
    title: 'Product & IP',
    docs: [
      { id: 'doc_pip1', name: 'System_Architecture_Overview', template: 'Tech_Stack_Doc.docx', size: '1.45 MB', type: '.pdf', date: 'August 14, 2026' },
      { id: 'doc_pip2', name: 'IP_Assignment_and_Patents', template: 'IP_Assignment_Form.pdf', size: '780.20 KB', type: '.pdf', date: 'August 15, 2026' },
      { id: 'doc_pip3', name: 'Product_Roadmap_2026_2027', template: 'Roadmap_Milestones.pdf', size: '2.20 MB', type: '.pdf', date: 'August 16, 2026' },
      { id: 'doc_pip4', name: 'Security_and_SOC2_Compliance_Audit', template: 'SOC2_Type2_Report.pdf', size: '4.10 MB', type: '.pdf', date: 'August 18, 2026' }
    ]
  },
  {
    id: 'team_hr',
    title: 'Team & HR',
    docs: [
      { id: 'doc_hr1', name: 'Key_Personnel_Resumes_and_Org_Chart', template: 'Team_Org_Chart.pdf', size: '1.80 MB', type: '.pdf', date: 'August 11, 2026' },
      { id: 'doc_hr2', name: 'ESOP_Scheme_Policy_and_Grants', template: 'ESOP_Plan_Agreement.pdf', size: '950.00 KB', type: '.pdf', date: 'August 13, 2026' },
      { id: 'doc_hr3', name: 'Founder_Employment_Agreements', template: 'Founder_Employment_Agreements.pdf', size: '1.20 MB', type: '.pdf', date: 'August 15, 2026' }
    ]
  },
  {
    id: 'commercial_sales',
    title: 'Commercial & Customers',
    docs: [
      { id: 'doc_cs1', name: 'Customer_Contracts_Top10_Redacted', template: 'Master_Services_Agreement_Bundle.pdf', size: '5.40 MB', type: '.pdf', date: 'August 16, 2026' },
      { id: 'doc_cs2', name: 'Pipeline_and_Cohort_Retention_Analysis', template: 'Sales_Funnel_Analysis.xlsx', size: '620.00 KB', type: '.xlsx', date: 'August 17, 2026' },
      { id: 'doc_cs3', name: 'Enterprise_Case_Studies_and_NPS', template: 'Enterprise_Case_Studies.pdf', size: '3.10 MB', type: '.pdf', date: 'August 19, 2026' }
    ]
  },
  {
    id: 'compliance_esg',
    title: 'Compliance & ESG',
    docs: [
      { id: 'doc_esg1', name: 'Regulatory_Licenses_and_Permits', template: 'Statutory_Approvals.pdf', size: '1.35 MB', type: '.pdf', date: 'August 12, 2026' },
      { id: 'doc_esg2', name: 'Data_Privacy_GDPR_DPDP_Policy', template: 'Privacy_Policy_Compliance.pdf', size: '890.00 KB', type: '.pdf', date: 'August 15, 2026' }
    ]
  }
];

const VDR_FULL_SHARED_STARTUPS = [
  { id: 's1', name: 'Alpha Health', avatar: 'AH', contact: 'Dr. Sarah Chen', email: 'sarah@alphahealth.com', date: 'Jan 14, 2026', receivedOn: 'Feb 12, 2026', status: 'In Review', progress: 75, docsCount: '18 / 24 docs' },
  { id: 's2', name: 'NeuroPulse', avatar: 'NP', contact: 'Mark Evans', email: 'mark@neuropulse.io', date: 'Jan 18, 2026', receivedOn: 'Feb 10, 2026', status: 'Completed', progress: 100, docsCount: '24 / 24 docs' },
  { id: 's3', name: 'EcoPulse Energy', avatar: 'EP', contact: 'Priya Sharma', email: 'priya@ecopulse.com', date: 'Feb 01, 2026', receivedOn: 'Pending', status: 'Invited', progress: 0, docsCount: '0 / 24 docs' },
  { id: 's4', name: 'Apex AI', avatar: 'AA', contact: 'Vikram Mehta', email: 'vikram@apexai.io', date: 'Feb 05, 2026', receivedOn: 'Feb 11, 2026', status: 'In Progress', progress: 45, docsCount: '11 / 24 docs' },
  { id: 's5', name: 'FinFlow Tech', avatar: 'FF', contact: 'Alexandre Dubois', email: 'alex@finflow.io', date: 'Feb 10, 2026', receivedOn: 'Feb 14, 2026', status: 'Completed', progress: 100, docsCount: '24 / 24 docs' },
  { id: 's6', name: 'LogiChain Labs', avatar: 'LC', contact: 'Rajan Menon', email: 'rajan@logichain.io', date: 'Feb 14, 2026', receivedOn: 'Feb 18, 2026', status: 'In Progress', progress: 60, docsCount: '14 / 24 docs' },
  { id: 's7', name: 'BioCore Diagnostics', avatar: 'BC', contact: 'James Whitfield', email: 'james@biocore.com', date: 'Feb 16, 2026', receivedOn: 'Feb 20, 2026', status: 'In Review', progress: 85, docsCount: '20 / 24 docs' },
  { id: 's8', name: 'SkyTrack Mobility', avatar: 'ST', contact: 'Helen Cruz', email: 'helen@skytrack.io', date: 'Feb 18, 2026', receivedOn: 'Pending', status: 'Invited', progress: 10, docsCount: '2 / 24 docs' }
];

const VDR_DEFAULT_COVER_LETTER = `Welcome to our Virtual Data Room.

Please review the requested diligence checklist across all category folders (Corporate, Financials, Product, HR, Commercial, and Compliance) and upload the corresponding documents or download our reference templates.

Reach out to the investment team directly if you have any questions or require custom NDA clearance.`;

const SEED_VDR_DATA = {
  vdr1: {
    id: 'vdr1',
    name: 'Seed Round Due Diligence',
    folders: JSON.parse(JSON.stringify(VDR_FULL_FOLDERS_PRESET)),
    coverLetter: VDR_DEFAULT_COVER_LETTER,
    sharedStartups: JSON.parse(JSON.stringify(VDR_FULL_SHARED_STARTUPS))
  },
  vdr2: {
    id: 'vdr2',
    name: 'Series A Package',
    folders: [
      {
        id: 'general',
        title: 'General',
        docs: [
          { id: 'doc_s1', name: 'SeriesA_Overview_Deck', template: 'SeriesA_Deck_Template.pptx', size: '2.40 MB', type: '.pdf', date: 'August 15, 2026' }
        ]
      },
      {
        id: 'financial_models',
        title: 'Financial Models',
        docs: [
          { id: 'doc_s2', name: 'Cohort_Retention_and_Unit_Economics', template: 'SaaS_Cohort_Model.xlsx', size: '1.10 MB', type: '.xlsx', date: 'August 18, 2026' }
        ]
      }
    ],
    coverLetter: "Welcome to the Series A due diligence package.\n\nAll historical metrics, cap tables, and compliance items are organized by folder.",
    sharedStartups: [
      { id: 's3', name: 'LogiChain Labs', avatar: 'LC', contact: 'Rajan Menon', email: 'rajan@logichain.io', date: 'Feb 14, 2026', receivedOn: 'Feb 18, 2026', status: 'In Progress', progress: 50, docsCount: '2 / 4 docs' }
    ]
  }
};

/**
 * Returns a full filled VDR object
 */
function getFilledVdrPreset(roomId = 'vdr1', roomName = 'Seed Round Due Diligence') {
  return {
    id: roomId,
    name: roomName,
    folders: JSON.parse(JSON.stringify(VDR_FULL_FOLDERS_PRESET)),
    coverLetter: VDR_DEFAULT_COVER_LETTER,
    sharedStartups: JSON.parse(JSON.stringify(VDR_FULL_SHARED_STARTUPS))
  };
}

// Attach to window object for global availability
if (typeof window !== 'undefined') {
  window.VDR_PIPELINE_STARTUPS = VDR_PIPELINE_STARTUPS;
  window.VDR_FULL_FOLDERS_PRESET = VDR_FULL_FOLDERS_PRESET;
  window.VDR_FULL_SHARED_STARTUPS = VDR_FULL_SHARED_STARTUPS;
  window.VDR_DEFAULT_COVER_LETTER = VDR_DEFAULT_COVER_LETTER;
  window.SEED_VDR_DATA = SEED_VDR_DATA;
  window.getFilledVdrPreset = getFilledVdrPreset;
}
