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
  { title: 'QuickBooks transactions', category: 'QuickBooks Online', description: 'A practice approach to recording and categorizing everyday transactions.', image: 'laptop', steps: ['Review a fictional transaction and identify its date, amount, and supporting document.', 'Choose the appropriate account and transaction type in QuickBooks Online.', 'Check the entry for accuracy and review its effect on the relevant accounts.'], focus: 'Transaction entry & categorization', screenshots: [] },
  { title: 'Bank reconciliation', category: 'Reconciliation', description: 'A practice walkthrough for matching bank activity with accounting records.', image: 'bank', steps: ['Compare a fictional bank statement with the cash ledger for the same period.', 'Match deposits and payments, then identify outstanding items and bank charges.', 'Review differences and confirm the adjusted balances agree before completing reconciliation.'], focus: 'Matching records & reviewing differences' },
  { title: 'Accounts receivable workflow', category: 'Accounts receivable', description: 'A sample process for tracking payments and following up on overdue accounts.', image: 'desk', steps: ['Organize fictional invoices by customer, due date, payment status, and outstanding balance.', 'Review due and overdue items and prepare a courteous payment follow-up.', 'Record a sample payment, update the outstanding balance, and check the account history.'], focus: 'Account monitoring & payment updates' },
  { title: 'Financial-report review', category: 'Financial reporting', description: 'A practice checklist for reviewing reports for consistency and completeness.', image: 'reports', steps: ['Confirm the reporting period and review a fictional income statement and balance sheet.', 'Compare key account balances with their supporting records and note inconsistencies.', 'Document questions and items requiring clarification without drawing unsupported conclusions.'], focus: 'Report consistency & supporting records' },
  { title: 'Inventory stock check', category: 'Inventory', description: 'A practice walkthrough for tracking stock movements and supporting a stock count.', image: 'inventory', steps: ['List fictional stock items with their quantities, unit costs, and storage locations.', 'Record sample receipts and issues, then update the running quantity for each item.', 'Compare the recorded quantities with a fictional count sheet and note the differences.'], focus: 'Stock records & count differences' },
  { title: 'Sales records', category: 'Sales recording', description: 'A practice walkthrough for recording sales and matching them with supporting documents.', image: 'sales', steps: ['Review fictional sales documents and confirm the customer, date, and amount for each.', 'Record each sale in a sample sales register and note its payment status.', 'Check the recorded sales against the documents and the total for the period.'], focus: 'Sales entries & supporting documents' },
  { title: 'Income and expenses', category: 'Income & expenses', description: 'A practice walkthrough for sorting income and expenses into the right categories.', image: 'income', steps: ['Review fictional income and expense items and the documents supporting each one.', 'Assign each item to an appropriate income or expense category in a sample ledger.', 'Total the categories for the period and review the summary for completeness.'], focus: 'Categorizing income & expenses' },
  { title: 'Purchase orders & item receipts', category: 'Purchasing', description: 'A practice walkthrough for ordering stock and recording what actually arrives.', image: 'purchase', steps: ['Create a fictional purchase order with the supplier, items, quantities, and agreed prices.', 'Record an item receipt against the order when the fictional delivery arrives.', 'Compare the received quantities and amounts with the order and note any differences.'], focus: 'Ordering & receiving stock' },
  { title: 'Fixed assets setup', category: 'Fixed assets', description: 'A practice walkthrough for registering equipment and tracking it over time.', image: 'assets', steps: ['List fictional assets with their description, cost, purchase date, and location.', 'Register each asset in a sample asset list and assign it to the right account.', 'Review the register for completeness and note how depreciation would be tracked.'], focus: 'Asset registration & tracking' },
  { title: 'Chart of accounts & journal entries', category: 'QuickBooks Online', description: 'A practice walkthrough for organizing accounts and recording manual adjustments.', image: 'accounts', steps: ['Review a fictional chart of accounts and check that each account has the right type.', 'Add a sample account and confirm where it appears in the financial reports.', 'Record a fictional journal entry with balanced debits and credits and a clear memo.'], focus: 'Account setup & adjustments' },
];
