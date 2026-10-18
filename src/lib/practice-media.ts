import sales from '@/assets/sales-transactions.png.asset.json';
import invoice1019 from '@/assets/Invoice_1019.png.asset.json';
import invoice1020 from '@/assets/Invoice_1020.png.asset.json';
import invoice1019Pdf from '@/assets/Invoice_1019.pdf.asset.json';
import invoice1020Pdf from '@/assets/Invoice_1020.pdf.asset.json';
import receipt1016 from '@/assets/Sales_Receipt_1016-public.png.asset.json';
import receipt1017 from '@/assets/Sales_Receipt_1017-public.png.asset.json';
import receipt1016Pdf from '@/assets/Sales_Receipt_1016-public.pdf.asset.json';
import receipt1017Pdf from '@/assets/Sales_Receipt_1017-public.pdf.asset.json';

export const practiceMedia: Record<string, { title: string; src: string; pdf?: string }> = {
  sales: { title: 'All sales transactions · September 2026', src: sales.url },
  invoice1019: { title: 'Invoice 1019 · Product sale', src: invoice1019.url, pdf: invoice1019Pdf.url },
  invoice1020: { title: 'Invoice 1020 · Service sale', src: invoice1020.url, pdf: invoice1020Pdf.url },
  receipt1016: { title: 'Sales receipt 1016 · Cash service sale', src: receipt1016.url, pdf: receipt1016Pdf.url },
  receipt1017: { title: 'Sales receipt 1017 · Cash product sale', src: receipt1017.url, pdf: receipt1017Pdf.url },
  bill101: { title: 'Bill 101 · Supplier bill', src: '/portfolio/bills/Bill%20101.png' },
  bill102: { title: 'Bill 102 · Supplier bill', src: '/portfolio/bills/bills%20102.png' },
};