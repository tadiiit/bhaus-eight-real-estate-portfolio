import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, CheckCircle2,
  ChevronDown, Compass, ExternalLink, Eye, FileSearch, House, Instagram,
  Layers3, MapPin, Menu, MessageCircle, Search, ShieldCheck, Sparkles,
  X, Smartphone, Code2, Database, GitBranch, Clock3, LayoutTemplate,
  Gauge, MousePointer2, Mail, BookOpen, MoveUpRight, ClipboardCheck
} from 'lucide-react';
import './styles.css';

const IMG = {
  hero: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
  house: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
  living: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
  exterior: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80',
  coast: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80',
  kitchen: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
  journal: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80',
  home: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=80'
};
const communities = [
  { name:'Manhattan Beach', number:'01', descriptor:'Coastal living, considered.', img:IMG.coast },
  { name:'Hermosa Beach', number:'02', descriptor:'A little more laid-back.', img:IMG.living },
  { name:'Redondo Beach', number:'03', descriptor:'Room to find your rhythm.', img:IMG.exterior },
  { name:'Palos Verdes', number:'04', descriptor:'Elevated views. Open horizons.', img:IMG.hero }
];
const homes = [
  { name:'The Coastal Residence', area:'South Bay · Illustrative concept', beds:'4 beds', baths:'3.5 baths', size:'2,840 sq ft', img:IMG.house, label:'EDITORIAL CONCEPT' },
  { name:'A Study in Light', area:'South Bay · Illustrative concept', beds:'3 beds', baths:'2 baths', size:'2,120 sq ft', img:IMG.kitchen, label:'EDITORIAL CONCEPT' },
  { name:'The Modern Retreat', area:'South Bay · Illustrative concept', beds:'5 beds', baths:'4 baths', size:'3,460 sq ft', img:IMG.exterior, label:'EDITORIAL CONCEPT' }
];
const stages = [
  {n:'01',title:'Discovery & audit',time:'UNDERSTAND',purpose:'Build a shared picture of the current experience and business priorities.',activities:['Review the existing site and Squarespace setup','Understand audience, brand, content, and analytics','Identify constraints, dependencies, and open questions'],deliverable:'Audit notes & discovery summary'},
  {n:'02',title:'Recommendations & sitemap',time:'STRUCTURE',purpose:'Agree what the site needs to communicate and how visitors should move through it.',activities:['Prioritize opportunities by visitor need','Map the proposed navigation and page hierarchy','Confirm content ownership and migration needs'],deliverable:'Prioritized plan & sitemap'},
  {n:'03',title:'Design concept',time:'EXPLORE',purpose:'Create a coherent visual direction before committing to implementation.',activities:['Define typography, color, imagery, and spacing','Design homepage and responsive page concepts','Collect feedback and approve a direction'],deliverable:'Concept screens & design rationale'},
  {n:'04',title:'Implementation',time:'BUILD',purpose:'Translate the approved direction into the agreed platform and scope.',activities:['Implement approved changes in Squarespace where feasible','Confirm platform limits before proposing custom code','Check content, responsive states, and reusable sections'],deliverable:'Staged implementation for review'},
  {n:'05',title:'QA & SEO checks',time:'VALIDATE',purpose:'Check the core journeys, technical basics, and measurement setup.',activities:['Test devices, navigation, forms, and accessibility basics','Review metadata, links, image alt text, and redirects','Validate agreed analytics events and tracking'],deliverable:'QA checklist & issue log'},
  {n:'06',title:'Launch & handover',time:'SUPPORT',purpose:'Make launch controlled and leave the team able to maintain the site.',activities:['Follow an agreed launch and rollback checklist','Document page editing and publishing workflows','Review baseline metrics and next-step recommendations'],deliverable:'Handover notes & maintenance guide'}
];
const sitemap = [
  {title:'Home',children:[]},
  {title:'Properties',children:['Featured properties','Property detail template']},
  {title:'Communities',children:['Manhattan Beach','Hermosa Beach','Redondo Beach','Palos Verdes']},
  {title:'Buying',children:['Buyer guidance','Buying process']},
  {title:'Selling',children:['Seller guidance','Preparing to sell']},
  {title:'Lifestyle / Journal',children:['Local guides','Design & lifestyle']},
  {title:'About',children:['Team & approach']},
  {title:'Contact',children:['General inquiry','Property inquiry']}
];

function Button({children, href, variant='dark', onClick, ...props}) {
  const cls=`button button-${variant}`;
  return href ? <a className={cls} href={href} {...props}>{children}</a> : <button className={cls} onClick={onClick} {...props}>{children}</button>;
}
function Eyebrow({children, dark=false}) { return <div className={`eyebrow ${dark?'eyebrow-dark':''}`}><span/>{children}</div>; }
function SectionHeading({kicker,title,body,light=false}) { return <div className={`section-heading ${light?'heading-light':''}`}><Eyebrow dark={light}>{kicker}</Eyebrow><h2>{title}</h2>{body&&<p>{body}</p>}</div>; }
function Brand({dark=false}) { return <a href="#top" className={`brand ${dark?'brand-dark':''}`} aria-label="Bhaus Eight concept home"><span className="brand-symbol">B<span>.</span></span><span className="brand-name">BHAUS <i>EIGHT</i><small>REAL ESTATE & LIFESTYLE</small></span></a>; }

function Header() {
  const [open,setOpen]=useState(false);
  const links=[['The concept','#concept'],['Communities','#communities'],['Approach','#approach'],['Technical work','#technical']];
  return <header className="header"><div className="nav-inner"><Brand dark/><nav className={open?'nav nav-open':'nav'} aria-label="Main navigation">{links.map(([t,h])=><a href={h} key={t} onClick={()=>setOpen(false)}>{t}</a>)}<a href="#contact" className="nav-cta" onClick={()=>setOpen(false)}>Discuss the project <ArrowUpRight size={14}/></a></nav><button className="mobile-menu" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>;
}
function Hero() {
  return <section className="hero" id="top"><div className="hero-image" role="img" aria-label="Sunlit contemporary architectural interior"><img src={IMG.hero} fetchPriority="high" alt="Sunlit contemporary home interior with natural materials" /><div className="image-shade"/></div><div className="hero-inner"><div className="hero-copy"><div className="concept-pill"><span/> INDEPENDENT DESIGN PROPOSAL</div><p className="hero-pretitle">A DIGITAL CONCEPT FOR BHAUS EIGHT</p><h1>Real estate,<br/>with a more<br/><em>considered</em> point of view.</h1><p className="hero-lead">A proposed digital experience for a luxury real estate and lifestyle brand, combining editorial-inspired design, intuitive navigation, responsive development, and clear paths to inquiry.</p><div className="hero-buttons"><Button href="#concept">Explore the concept <ArrowDownRight size={16}/></Button><Button href="#technical" variant="outline">View my technical work <ArrowUpRight size={15}/></Button></div></div><div className="hero-side-note"><span className="vertical-line"/><span>THE SOUTH BAY, LOS ANGELES<br/>A PROPOSED DIGITAL DIRECTION</span></div><div className="hero-index"><span>01</span><span className="hero-index-line"/><span>06</span></div></div><div className="hero-bottom"><span>DESIGN THAT FEELS LIKE THE PLACE</span><span>INDEPENDENT PORTFOLIO CONCEPT <ArrowDown size={13}/></span></div></section>;
}

function ClientUnderstanding() {
  const requirements=[
    ['01','Premium brand presentation','Editorial typography, restrained color, generous space, and imagery with a strong sense of place.'],
    ['02','Property discovery','A considered route into property listings, with clear filters and useful property detail pages if supported by the existing setup.'],
    ['03','Local expertise','Distinct community guides for Manhattan Beach, Hermosa Beach, Redondo Beach, and Palos Verdes.'],
    ['04','Buyer & seller guidance','Dedicated paths for visitors who are exploring, preparing to buy, or considering a sale.'],
    ['05','Mobile-first journeys','Navigation, property imagery, and inquiry actions designed to work comfortably on smaller screens.'],
    ['06','Maintainable platform','Work with the existing Squarespace setup where practical, confirming template and integration constraints before committing.']
  ];
  return <section className="section understanding" id="understanding"><div className="container"><div className="understanding-top"><SectionHeading kicker="01 / Understanding the brief" title={<>A digital experience<br/><em>rooted in place.</em></>} body="The opportunity is to express a coastal, design-aware real estate brand online while making it easy for visitors to explore the market, find useful guidance, and get in touch."/><div className="audit-flag"><FileSearch size={19}/><div><strong>Audit first, assumptions second.</strong><p>These are proposal priorities based on the brief, not claims about defects in the live website. Current performance and platform details require review.</p></div></div></div><div className="requirements-grid">{requirements.map(([n,t,d])=><article className="requirement" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div><div className="scope-legend"><span><i className="legend-dot confirmed"/> Requirements from the project brief</span><span><i className="legend-dot audit"/> Items to verify during discovery</span></div></div></section>;
}

function ConceptHeader() {
  const [menu,setMenu]=useState(false);
  return <div className="concept-header"><Brand/><nav aria-label="Concept homepage navigation"><a href="#properties">Properties</a><a href="#communities">Communities <ChevronDown size={12}/></a><a href="#resources">Buying & Selling</a><a href="#journal">Journal</a></nav><Button href="#contact" variant="gold">Let's connect <ArrowUpRight size={14}/></Button><button className="concept-mobile-menu" aria-label="Toggle concept navigation" onClick={()=>setMenu(!menu)}>{menu?<X size={19}/>:<Menu size={19}/>}</button>{menu&&<div className="concept-mobile-nav"><a href="#properties" onClick={()=>setMenu(false)}>Properties</a><a href="#communities" onClick={()=>setMenu(false)}>Communities</a><a href="#resources" onClick={()=>setMenu(false)}>Buying & Selling</a><a href="#journal" onClick={()=>setMenu(false)}>Journal</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></div>}</div>;
}
function HomepageConcept() {
  const [propertyFilter,setPropertyFilter]=useState('All concepts');
  const [selectedCommunity,setSelectedCommunity]=useState(null);
  const [saved,setSaved]=useState([]);
  const visibleHomes=homes.filter(h=>propertyFilter==='All concepts'||h.name===propertyFilter);
  return <section className="section concept-section" id="concept"><div className="container"><div className="concept-section-heading"><SectionHeading kicker="02 / Proposed homepage design" title={<>An editorial home for<br/><em>a coastal point of view.</em></>} body="A visual direction for the experience: tactile imagery, an understated palette, confident typography, and pathways that stay clear without competing with the brand."/></div><div className="proposal-label"><Sparkles size={14}/> PROPOSED HOMEPAGE · ILLUSTRATIVE CONTENT</div><div className="site-preview"><ConceptHeader/><div className="preview-hero"><img src={IMG.coast} alt="Coastal landscape with ocean and sandy shore" loading="lazy"/><div className="preview-hero-overlay"/><div className="preview-hero-copy"><span>THE SOUTH BAY, RECONSIDERED</span><h3>Find your place<br/>by the <em>Pacific.</em></h3><p>Thoughtful guidance for living along the coast.</p><a href="#communities">Explore our communities <ArrowRight size={14}/></a></div><div className="preview-hero-caption">A SENSE OF PLACE, IN EVERY DETAIL</div></div><div className="preview-intro"><span className="mini-overline">A MORE PERSONAL APPROACH</span><h3>Good places are more<br/>than an address.</h3><p>From the rhythm of a neighborhood to the feeling of a well-considered home, the search is personal. This concept gives every part of that journey room to breathe.</p><a href="#resources" className="underlined-link">Get to know our approach <ArrowUpRight size={14}/></a></div><div className="preview-properties" id="properties"><div className="preview-section-head"><div><span className="mini-overline">A FEW PLACES TO IMAGINE</span><h3>Spaces with a point of view.</h3></div><label className="property-filter"><span className="sr-only">Filter illustrative property cards</span><select value={propertyFilter} onChange={e=>setPropertyFilter(e.target.value)}><option>All concepts</option>{homes.map(h=><option key={h.name}>{h.name}</option>)}</select><ChevronDown size={13}/></label></div><div className="property-grid">{visibleHomes.map((h,i)=><article className="property-card" key={h.name}><div className="property-image"><img src={h.img} alt={`${h.name}, illustrative architectural imagery`} loading="lazy"/><span>{h.label}</span><button aria-label={`${saved.includes(h.name)?'Remove':'Save'} ${h.name}`} onClick={()=>setSaved(s=>s.includes(h.name)?s.filter(x=>x!==h.name):[...s,h.name])} className={saved.includes(h.name)?'save-property saved':'save-property'}><Check size={15}/></button></div><div className="property-info"><span>{h.area}</span><h4>{h.name}</h4><div className="property-facts"><span>{h.beds}</span><i/><span>{h.baths}</span><i/><span>{h.size}</span></div></div></article>)}</div><p className="preview-disclaimer">Illustrative design cards and generic imagery only. These are not verified listings; no real addresses, prices, availability, or property claims are represented.</p></div><div className="preview-communities" id="communities"><div className="preview-section-head"><div><span className="mini-overline">GET TO KNOW THE COAST</span><h3>Four communities.<br/>Distinct ways to feel at home.</h3></div><p>A proposed local guide structure, ready to be shaped around verified neighborhood knowledge.</p></div><div className="community-grid">{communities.map(c=><button className={`community-card ${selectedCommunity===c.name?'community-selected':''}`} key={c.name} onClick={()=>setSelectedCommunity(selectedCommunity===c.name?null:c.name)}><img src={c.img} alt={`${c.name} inspired coastal lifestyle imagery`} loading="lazy"/><span className="community-overlay"/><span className="community-num">{c.number}</span><span className="community-copy"><strong>{c.name}</strong><small>{c.descriptor}</small></span><span className="community-arrow"><ArrowUpRight size={17}/></span></button>)}</div>{selectedCommunity&&<div className="community-detail"><MapPin size={17}/><span><strong>{selectedCommunity} guide concept selected.</strong> A future page could cover neighborhood character, local amenities, market context, and related property searches after the content is verified.</span><button onClick={()=>setSelectedCommunity(null)} aria-label="Close community details"><X size={16}/></button></div>}</div><div className="preview-resources" id="resources"><div className="resource-card"><span className="resource-icon"><Compass size={20}/></span><span className="mini-overline">FOR BUYERS</span><h4>Find the right fit.</h4><p>A clear starting point for understanding the process, preparing questions, and exploring neighborhoods.</p><a href="#contact">Explore buyer resources <ArrowUpRight size={14}/></a></div><div className="resource-card"><span className="resource-icon"><House size={20}/></span><span className="mini-overline">FOR SELLERS</span><h4>Make a considered move.</h4><p>A structured introduction to preparation, positioning, and the steps involved in a potential sale.</p><a href="#contact">Explore seller resources <ArrowUpRight size={14}/></a></div></div><div className="preview-journal" id="journal"><div className="journal-image"><img src={IMG.journal} alt="Architectural details in a contemporary building" loading="lazy"/></div><div className="journal-copy"><span className="mini-overline">THE JOURNAL · PROPOSED CONTENT</span><h3>Stories about place,<br/>design, and the way we live.</h3><p>Local neighborhood notes, thoughtful interiors, and coastal living inspiration can extend the brand beyond property search.</p><a href="#approach" className="underlined-link">Explore the editorial approach <ArrowUpRight size={14}/></a></div></div><div className="preview-contact"><div><span className="mini-overline">YOUR NEXT CHAPTER STARTS HERE</span><h3>Let's find your<br/><em>place in the South Bay.</em></h3></div><Button href="#contact" variant="cream">Start a conversation <ArrowUpRight size={15}/></Button></div><div className="preview-footer"><Brand/><span>INDEPENDENT CONCEPT · ILLUSTRATIVE CONTENT</span><a href="#top">Back to top ↑</a></div></div><div className="concept-evaluation"><div><Eye size={18}/><span><strong>What this concept demonstrates</strong><small>Visual direction, hierarchy, reusable UI patterns, and interactive front-end behavior.</small></span></div><div><ShieldCheck size={18}/><span><strong>What it does not claim</strong><small>No client approval, live integration, actual property data, or measured business outcomes.</small></span></div></div></div></section>;
}

function SitemapSection() {
  const [expanded,setExpanded]=useState('Communities');
  return <section className="section sitemap-section"><div className="container sitemap-layout"><div><SectionHeading kicker="03 / Proposed information architecture" title={<>A simple structure<br/><em>for confident decisions.</em></>} body="The proposed sitemap groups pages around what visitors need to do. Final navigation, page depth, and content ownership should be agreed with the client after auditing the existing site."/><div className="sitemap-callout"><Layers3 size={18}/><p><strong>Platform-aware planning</strong><br/>Keep the existing Squarespace setup where practical; confirm template capabilities, listing integrations, redirects, and editing needs before finalizing the build plan.</p></div></div><div className="sitemap-card"><div className="sitemap-card-head"><span>PROPOSED SITE MAP</span><span>08 PRIMARY ITEMS</span></div>{sitemap.map((item,i)=><div className="sitemap-item" key={item.title}><button onClick={()=>setExpanded(expanded===item.title?'':item.title)} aria-expanded={expanded===item.title}><span className="sitemap-num">0{i+1}</span><strong>{item.title}</strong><span className="sitemap-count">{item.children.length?`${item.children.length} pages`: 'Primary page'}</span>{item.children.length>0&&<ChevronDown size={15} className={expanded===item.title?'chevron-open':''}/>}</button>{expanded===item.title&&item.children.length>0&&<div className="sitemap-children">{item.children.map(c=><div key={c}><span/> {c}</div>)}</div>}</div>)}</div></div></section>;
}

function UXPlan() {
  const items=[
    {icon:Compass,title:'Clear visitor routes',text:'Give property explorers, buyers, and sellers distinct paths without making the main navigation feel crowded.'},
    {icon:MousePointer2,title:'Useful calls to action',text:'Use concise, consistent prompts near relevant content, with inquiry actions visible on mobile and desktop.'},
    {icon:Smartphone,title:'Responsive by intent',text:'Prioritize readable type, useful image crops, touch-friendly controls, and short mobile forms.'},
    {icon:ShieldCheck,title:'Accessible inquiry forms',text:'Use explicit labels, helpful validation, keyboard access, clear error states, and a privacy-conscious data request.'},
    {icon:Search,title:'Content with a hierarchy',text:'Organize property and community pages around the visitor’s next question, not just visual decoration.'},
    {icon:Gauge,title:'Measure agreed actions',text:'After analytics is configured, track events such as inquiry submissions, phone/email clicks, and property-detail engagement.'}
  ];
  return <section className="section ux-section"><div className="container"><SectionHeading kicker="04 / UX & lead-generation plan" title={<>Make the next step<br/><em>feel natural.</em></>} body="A considered interface should make discovery feel easy and inquiries feel low-friction. The proposed improvements are hypotheses to validate, not claims of measured uplift."/><div className="ux-grid">{items.map(({icon:Icon,title,text},i)=><article className="ux-card" key={title}><span className="ux-index">0{i+1}</span><span className="ux-icon"><Icon size={20}/></span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="measurement-band"><div className="measurement-icon"><ClipboardCheck size={20}/></div><div><strong>Success measures to agree before launch</strong><p>Establish a baseline first, then review qualified inquiry submissions, contact-click events, property-detail engagement, form completion and errors, organic landing-page performance, and mobile usability. Targets depend on the baseline and business priorities.</p></div></div></div></section>;
}

function SEOPlan() {
  const checks=[
    ['01','Indexability & crawl','Review robots directives, sitemap, canonical URLs, index status, and current page inventory.'],
    ['02','Search intent & local topics','Research relevant local real-estate queries and match topics to genuine service areas and audience needs.'],
    ['03','On-page essentials','Review unique titles, meta descriptions, heading structure, descriptive image alt text, and internal links.'],
    ['04','Useful local content','Identify opportunities for accurate neighborhood guides, buyer/seller resources, and editorial pages.'],
    ['05','Technical quality','Check mobile performance, image payloads, broken links, redirect mapping, and platform constraints.'],
    ['06','Structured data review','Assess appropriate schema types and ensure any structured data reflects visible, verified page content.'],
    ['07','Measurement setup','Review GA4 and Search Console access, consent-aware analytics, event definitions, and reporting.'],
    ['08','Baseline & iteration','Record starting metrics and review agreed changes over time without promising rankings or traffic outcomes.']
  ];
  return <section className="section seo-section"><div className="container seo-layout"><div className="seo-intro"><SectionHeading kicker="05 / Audit-first SEO" title={<>Build visibility<br/><em>on solid ground.</em></>} body="SEO work should begin with evidence from the existing site. This is a proposed audit checklist, not a completed audit or a ranking guarantee."/><div className="seo-caveat"><FileSearch size={19}/><div><strong>Audit before optimizing</strong><p>Current indexation, rankings, traffic, metadata, and analytics configuration are unknown until reviewed with the right access.</p></div></div></div><div className="seo-checklist">{checks.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><CheckCircle2 size={17}/></article>)}</div></div></section>;
}

function Process() {
  const [active,setActive]=useState('01');
  const stage=stages.find(s=>s.n===active);
  return <section className="section process-section" id="approach"><div className="container"><SectionHeading kicker="06 / How I would work" title={<>A transparent process,<br/><em>from first look to handover.</em></>} body="Each stage has a clear purpose and review point. Scope, timing, and dependencies are confirmed together rather than assumed in advance."/><div className="process-layout"><div className="process-list">{stages.map(s=><button key={s.n} className={active===s.n?'process-item active':'process-item'} onClick={()=>setActive(s.n)}><span className="process-num">{s.n}</span><span className="process-title">{s.title}<small>{s.time}</small></span><ArrowUpRight size={16}/></button>)}</div><article className="process-detail"><div className="process-detail-top"><span>STAGE {stage.n} / 06</span><span className="stage-tag">{stage.time}</span></div><h3>{stage.title}</h3><p className="process-purpose">{stage.purpose}</p><h4>Key activities</h4><ul>{stage.activities.map(a=><li key={a}><Check size={15}/>{a}</li>)}</ul><div className="deliverable"><span className="deliverable-icon"><BookOpen size={18}/></span><div><small>EXPECTED DELIVERABLE</small><strong>{stage.deliverable}</strong></div></div><div className="process-pagination"><span>{stage.n} <i/> 06</span><div><button disabled={active==='01'} onClick={()=>setActive(String(Number(active)-1).padStart(2,'0'))} aria-label="Previous stage">←</button><button disabled={active==='06'} onClick={()=>setActive(String(Number(active)+1).padStart(2,'0'))} aria-label="Next stage">→</button></div></div></article></div></div></section>;
}

function Communication() {
  const items=[
    ['Agree priorities','Document the must-haves, nice-to-haves, scope boundaries, and success measures before implementation.'],
    ['Share visible progress','Use review links and concise updates at agreed milestones so feedback is timely and specific.'],
    ['Get design approval','Confirm the visual direction and key page layouts before building the full experience.'],
    ['Raise risks early','Flag Squarespace limits, content gaps, third-party dependencies, and SEO migration risks before they become surprises.'],
    ['Define revisions','Agree what is included, how feedback is consolidated, and how additional requests are handled.'],
    ['Leave a useful handover','Document page editing, publishing, tracking, and any agreed ongoing maintenance steps.']
  ];
  return <section className="section communication-section"><div className="container comm-layout"><div><SectionHeading kicker="07 / Communication & scope" title={<>Good work needs<br/><em>clear agreements.</em></>} body="A practical collaboration style helps the design stay aligned, the scope stay understandable, and handover stay useful."/></div><div className="comm-list">{items.map(([title,desc],i)=><div className="comm-row" key={title}><span>0{i+1}</span><div><strong>{title}</strong><p>{desc}</p></div></div>)}</div></div></section>;
}

function Technical() {
  const tech=[
    {icon:Code2,title:'React & responsive UI',desc:'Component-based interfaces, interactive states, semantic markup, and responsive CSS.'},
    {icon:GitBranch,title:'Java & Spring Boot',desc:'Backend API development, validation, and structured application logic.'},
    {icon:Database,title:'REST APIs & data',desc:'Third-party integration patterns and database-backed application concepts.'},
    {icon:ClipboardCheck,title:'Testing & debugging',desc:'Reproducible checks, Git-based changes, issue isolation, and implementation notes.'}
  ];
  return <section className="section technical-section" id="technical"><div className="container"><SectionHeading kicker="08 / Technical background" title={<>Design-minded frontend.<br/><em>Engineering-led delivery.</em></>} body="My technical background includes React, Java/Spring Boot, APIs, integrations, database-backed applications, Git, testing, and debugging. The skills below are not a claim of established SEO-consulting or Squarespace-specialist experience."/><div className="tech-grid">{tech.map(({icon:Icon,title,desc},i)=><article className="tech-card" key={title}><div className="tech-card-top"><span><Icon size={20}/></span><small>0{i+1}</small></div><h3>{title}</h3><p>{desc}</p></article>)}</div><div className="existing-project-note"><span className="existing-icon"><Code2 size={20}/></span><div><span className="existing-label">EXISTING TECHNICAL PROJECT AREA</span><h3>AI Lead Qualification Agent</h3><p>A separate project involving Spring Boot APIs, AI-based lead scoring, and HubSpot integration where implemented. Repository and demo links have not been supplied, so none are fabricated here. Final claims should be checked against the current code and verified project scope.</p></div><span className="status-chip">LINKS TO ADD</span></div><div className="scope-columns"><div><h4><CheckCircle2 size={16}/> Skills I can bring</h4><p>Frontend development, backend APIs, integration thinking, data handling, testing, and debugging from software project work.</p></div><div><h4><FileSearch size={16}/> Areas to validate or collaborate on</h4><p>Squarespace-specific limitations, current SEO performance, search strategy, and analytics configuration need an audit and may require platform or SEO specialist input.</p></div></div></div></section>;
}

function Contact() {
  const [copied,setCopied]=useState(false);
  const email='hello@example.com';
  return <footer className="footer" id="contact"><div className="container"><div className="footer-cta"><span className="footer-ornament"><Sparkles size={23}/></span><Eyebrow>LET'S TALK ABOUT THE POSSIBILITIES</Eyebrow><h2>Let's create a more<br/><em>thoughtful digital experience.</em></h2><p>I would welcome the opportunity to discuss your priorities, review the existing setup, and define a practical redesign plan based on your brand, audience, and business goals.</p><div className="footer-actions"><Button href={`mailto:${email}?subject=Bhaus%20Eight%20website%20redesign%20discussion`} variant="cream">Discuss the project <ArrowUpRight size={16}/></Button><button className="button button-footer-outline" onClick={()=>{navigator.clipboard?.writeText(email).then(()=>setCopied(true)).catch(()=>setCopied(false));}}>{copied?'Email copied':'Copy contact email'} {copied?<Check size={15}/>:<Mail size={15}/>}</button></div><div className="contact-warning"><span/> Replace hello@example.com with your real contact address before publishing.</div></div><div className="footer-bottom"><Brand/><span>Independent portfolio concept · Not affiliated with Bhaus Eight</span><a href="#top">Back to top ↑</a></div><div className="footer-legal">© {new Date().getFullYear()} · Proposed redesign concept · Illustrative content and imagery · No live client website changes made</div></div></footer>;
}

function App() {
  return <><Header/><main><Hero/><ClientUnderstanding/><HomepageConcept/><SitemapSection/><UXPlan/><SEOPlan/><Process/><Communication/><Technical/><Contact/></main></>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
