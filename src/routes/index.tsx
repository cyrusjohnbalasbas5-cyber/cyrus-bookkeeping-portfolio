import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight, BookOpen, Building2, Calculator, CheckCheck, FileSpreadsheet, FileText, GraduationCap, Landmark, Linkedin, Mail, MapPin, Menu, Monitor, ShieldCheck, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import bankStatement from '@/assets/bank-statement.jpg';
import desk from '@/assets/bookkeeping-desk.jpg';
import incomeExpenses from '@/assets/income-expenses.jpg';
import inventoryStock from '@/assets/inventory-stock.jpg';
import laptop from '@/assets/spreadsheet-work.jpg';
import reports from '@/assets/financial-reports.jpg';
import salesReceipts from '@/assets/sales-receipts.jpg';
import purchaseOrder from '@/assets/purchase-order.jpg';
import fixedAssets from '@/assets/fixed-assets.jpg';
import chartOfAccounts from '@/assets/chart-of-accounts.jpg';
import { email, profiles, projects } from '@/lib/portfolio';
import { PracticeGallery } from '@/components/practice-gallery';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Cyrus Bookkeeping Portfolio' },
    { name: 'description', content: 'Meet Cyrus John Balasbas, an accounting clerk and Financial Management graduate in Catbalogan City, Philippines. Explore his experience and bookkeeping practice samples.' },
    { property: 'og:title', content: 'Cyrus Bookkeeping Portfolio' },
    { property: 'og:description', content: 'Accounting experience, practical tools, and bookkeeping practice samples from Cyrus John Balasbas.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

const navigation = [['About', 'about'], ['Experience', 'experience'], ['Skills', 'skills'], ['Portfolio', 'portfolio']];
const images: Record<string, string> = { desk, reports, laptop, bank: bankStatement, inventory: inventoryStock, sales: salesReceipts, income: incomeExpenses, purchase: purchaseOrder, assets: fixedAssets, accounts: chartOfAccounts };
const skills = [
  { icon: BookOpen, title: 'Transaction recording', copy: 'Organized recording of day-to-day cash and non-cash transactions.' },
  { icon: Landmark, title: 'Bank reconciliation', copy: 'Matching bank deposits and income against accounting records.' },
  { icon: Users, title: 'Accounts receivable', copy: 'Monitoring balances, updating payments, and following up on accounts.' },
  { icon: FileText, title: 'Reporting & record review', copy: 'Preparing requested reports and checking supporting records.' },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const project = selected === null ? null : projects[selected];
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4">Skip to content</a>
      <header className="site-header">
        <div className="page-width header-inner">
          <a className="brand" href="#home" aria-label="Cyrus John Balasbas home"><span className="brand-mark">CJ</span><div className="min-w-0"><div className="brand-name">Cyrus John Balasbas</div><div className="brand-subtitle">BOOKKEEPING PORTFOLIO</div></div></a>
          <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([label, id]) => <a className="nav-link" key={id} href={`#${id}`}>{label}</a>)}<Button variant="portfolio" asChild><a href="#contact">Let’s connect <ArrowUpRight /></a></Button></nav>
          <Button className="mobile-toggle" variant="ghost" size="icon" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        </div>
        {menuOpen && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{[...navigation, ['Contact', 'contact']].map(([label,id]) => <a key={id} className="nav-link" href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>}
      </header>
      <main id="main">
        <section id="home" className="hero">
          <img className="hero-photo" src={desk} alt="Illustrative bookkeeping workspace with a laptop, calculator, and financial documents" width={1536} height={1024} fetchPriority="high" />
          <div className="page-width hero-content"><div className="eyebrow">A thoughtful approach to bookkeeping</div><h1>Cyrus John Balasbas<span>.<br />Care in every number.</span></h1><p className="hero-description">An accounting professional with hands-on experience in transaction recording, reconciliation, and accounts receivable. Bringing clarity and care to everyday financial records.</p><div className="hero-actions"><Button variant="portfolio" size="lg" asChild><a href="#portfolio">Explore my portfolio <ArrowUpRight /></a></Button><Button variant="outline" size="lg" asChild><a href="#contact">Get in touch <ArrowRight /></a></Button></div><div className="location"><MapPin /> Catbalogan City, Samar, Philippines</div></div>
        </section>
        <div className="service-strip"><div className="page-width service-inner">{[[BookOpen, 'Transaction recording'], [Landmark, 'Bank reconciliation'], [Users, 'Accounts receivable'], [FileText, 'Financial reporting']].map(([Icon, label]) => { const ServiceIcon = Icon as typeof BookOpen; return <div key={String(label)} className="service-item"><ServiceIcon />{String(label)}</div>; })}</div></div>
        <section id="about" className="section"><div className="page-width about-grid"><div className="about-visual"><img className="about-photo" src={reports} alt="Illustrative financial reports and calculator on an organized desk" width={1280} height={896} loading="lazy" /><div className="photo-caption">Illustrative workspace photography</div></div><div><div className="eyebrow">About me</div><h2 className="section-heading">Grounded in finance.<br />Focused on the details.</h2><p className="section-copy">I’m Cyrus John Balasbas, a Business Administration graduate majoring in Financial Management, based in Catbalogan City, Samar, Philippines.</p><p className="section-copy">My work at DES Marketing, Inc. has given me practical experience with daily accounting records, bank-related transactions, and customer accounts. I value clear records, careful review, and a consistent approach to each task.</p><p className="section-copy">Alongside my professional experience, I’m developing my QuickBooks Online skills through practice and continuing to build my bookkeeping knowledge.</p><div className="education"><GraduationCap /><div><h3>Business Administration · Financial Management</h3><p>Samar Colleges, Inc.<br />Graduated in 2019</p></div></div></div></div></section>
        <section id="experience" className="section mint-section">
          <div className="page-width">
            <div className="section-intro">
              <div className="eyebrow">Work experience</div>
              <h2 className="section-heading">Practical experience.<br />A dependable foundation.</h2>
              <p className="section-copy">Hands-on accounting and customer account experience at DES Marketing, Inc.</p>
            </div>
            <div className="timeline">
              <article className="experience-item">
                <span className="timeline-dot" />
                <div>
                  <h3>Accounting Clerk</h3>
                  <div className="experience-meta">DES Marketing, Inc.</div>
                  <div className="experience-date">Feb 12, 2023 — Present</div>
                </div>
                <ul className="experience-list">
                  <li>Record day-to-day cash and non-cash transactions.</li>
                  <li>Handle bank-related transactions and update customer account payments.</li>
                  <li>Reconcile bank deposits and income against accounting records.</li>
                  <li>Prepare requested reports using the company accounting system.</li>
                </ul>
              </article>
              <article className="experience-item">
                <span className="timeline-dot" />
                <div>
                  <h3>Standby Account Specialist</h3>
                  <div className="experience-meta">DES Marketing, Inc.</div>
                  <div className="experience-date">Feb 19, 2020 — Feb 11, 2023</div>
                </div>
                <ul className="experience-list">
                  <li>Monitor account balances and maintain accurate physical records.</li>
                  <li>Handle accounts receivable inquiries and follow up on customer accounts.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="page-width">
            <div className="section-intro">
              <div className="eyebrow">Core Skills</div>
              <h2 className="section-heading">Professional Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="flex gap-4 p-6 border rounded-lg bg-card">
                    <Icon className="w-6 h-6 text-blue-600 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">{skill.title}</h3>
                      <p className="text-muted-foreground mt-1">{skill.copy}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="portfolio" className="section mint-section">
