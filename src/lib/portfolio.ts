export const email = 'balasbascyrusjohn08@gmail.com';
export const profiles = {
  onlineJobs: 'https://v2.onlinejobs.ph/jobseekers/info/1366684',
  linkedIn: 'https://www.linkedin.com/in/cyrus-john-balasbas-0611b5430/',
};
export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  steps: string[];
  focus: string;
  // Screen captures from a personal QuickBooks practice company, keyed to src/assets.
  // Left empty until Cyrus uploads his own captures; never fill with generated mock screens.
  screenshots?: string[];
};
export const projects: Project[] = [
  { title: 'QuickBooks transactions', category: 'QuickBooks Online', description: 'Manually entered practice sales, with two invoices and two cash sales receipts from my own QuickBooks company.', image: 'laptop', steps: ['Review the September 2026 sales list and its invoice and sales receipt entries.', 'Inspect the product and service details, quantities, rates, and tax in each supporting document.', 'Compare the document totals with the amounts shown in the sales list.'], focus: 'Sales transaction entry & supporting documents', screenshots: ['sales', 'invoice1019', 'invoice1020', 'receipt1016', 'receipt1017'] },
  { title: 'Bank reconciliation', category: 'Reconciliation', description: 'A practice walkthrough for matching bank activity with accounting records.', image: 'bank', steps: ['Compare a fictional bank statement with the cash ledger for the same period.', 'Match deposits and payments, then identify outstanding items and bank charges.', 'Review differences and confirm the adjusted balances agree before completing reconciliation.'], focus: 'Matching records & reviewing differences' },
  { title: 'Accounts receivable workflow', category: 'Accounts receivable', description: 'A sample process for tracking payments and following up on overdue accounts.', image: 'desk', steps: ['Organize fictional invoices by customer, due date, payment status, and outstanding balance.', 'Review due and overdue items and prepare a courteous payment follow-up.', 'Record a sample payment, update the outstanding balance, and check the account history.'], focus: 'Account monitoring & payment updates' },
  { title: 'Financial-report review', category: 'Financial reporting', description: 'A practice checklist for reviewing reports for consistency and completeness.', image: 'reports', steps: ['Confirm the reporting period and review a fictional income statement and balance sheet.', 'Compare key account balances with their supporting records and note inconsistencies.', 'Document questions and items requiring clarification without drawing unsupported conclusions.'], focus: 'Report consistency & supporting records' },
  { title: 'Inventory stock check', category: 'Inventory', description: 'A practice walkthrough for tracking stock movements and supporting a stock count.', image: 'inventory', steps: ['List fictional stock items with their quantities, unit costs, and storage locations.', 'Record sample receipts and issues, then update the running quantity for each item.', 'Compare the recorded quantities with a fictional count sheet and note the differences.'], focus: 'Stock records & count differences' },
  { title: 'Sales records', category: 'Sales recording', description: 'My September 2026 practice sales list, supported by manually entered invoices and cash sales receipts.', image: 'sales', steps: ['Review the sales list and identify invoices and paid sales receipts.', 'Compare dates and amounts with the two invoices and two sales receipts.', 'Review the payment statuses as captured in the practice company.'], focus: 'Sales entries & supporting documents', screenshots: ['sales', 'receipt1016', 'receipt1017', 'invoice1019', 'invoice1020'] },
  { title: 'Income and expenses', category: 'Income & expenses', description: 'A practice walkthrough for sorting income and expenses into the right categories.', image: 'income', steps: ['Review fictional income and expense items and the documents supporting each one.', 'Assign each item to an appropriate income or expense category in a sample ledger.', 'Total the categories for the period and review the summary for completeness.'], focus: 'Categorizing income & expenses' },
  { title: 'Purchase orders & item receipts', category: 'Purchasing', description: 'A practice walkthrough for ordering stock and recording what actually arrives.', image: 'purchase', steps: ['Create a fictional purchase order with the supplier, items, quantities, and agreed prices.', 'Record an item receipt against the order when the fictional delivery arrives.', 'Compare the received quantities and amounts with the order and note any differences.'], focus: 'Ordering & receiving stock' },
  { title: 'Fixed assets setup', category: 'Fixed assets', description: 'A practice walkthrough for registering equipment and tracking it over time.', image: 'assets', steps: ['List fictional assets with their description, cost, purchase date, and location.', 'Register each asset in a sample asset list and assign it to the right account.', 'Review the register for completeness and note how depreciation would be tracked.'], focus: 'Asset registration & tracking' },
  { title: 'Chart of accounts & journal entries', category: 'QuickBooks Online', description: 'A practice walkthrough for organizing accounts and recording manual adjustments.', image: 'accounts', steps: ['Review a fictional chart of accounts and check that each account has the right type.', 'Add a sample account and confirm where it appears in the financial reports.', 'Record a fictional journal entry with balanced debits and credits and a clear memo.'], focus: 'Account setup & adjustments' },
  {
    title: 'QuickBooks Bills',
    category: 'QuickBooks Online',
    description: 'Practice samples of supplier bills recorded in QuickBooks Online, with supporting bill screenshots and PDF documents.',
    image: 'purchase',
    steps: [
      'Review supplier bill details and dates.',
      'Check bill amounts and supporting documents.',
      'Review the uploaded screenshots and PDF samples.',
    ],
    focus: 'Bills entry & supporting documents',
    screenshots: ['bill101', 'bill102'],
  },
];
