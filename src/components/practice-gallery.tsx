import { ArrowUpRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { practiceMedia } from '@/lib/practice-media';

export function PracticeGallery({ entries }: { entries: string[] }) {
  return <div className="sample-shots">{entries.map(key => {
    const item = practiceMedia[key];
    if (!item) return null;
    return <figure className="sample-shot" key={key}>
      <h3 className="text-base font-semibold mb-3">{item.title}</h3>
      <a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${item.title}`}><img src={item.src} alt={item.title} loading="lazy" /></a>
      <figcaption>Manually entered in my own QuickBooks practice company — not client work.</figcaption>
      <div className="flex flex-wrap gap-3 mt-2">
        <Button variant="outline" size="sm" asChild><a href={item.src} target="_blank" rel="noopener noreferrer">Full-size image <ArrowUpRight /></a></Button>
        {item.pdf && <Button variant="outline" size="sm" asChild><a href={item.pdf} target="_blank" rel="noopener noreferrer">Open PDF <FileText /></a></Button>}
      </div>
    </figure>;
  })}</div>;
}