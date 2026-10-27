import { Project } from './types';

export const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: any[] = [];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Website Advertising',
    category: '',
    image: '/images/project-1.jpg',
    gallery: [
      '/images/cff-page-hero-itm.jpg',
      '/images/cff-flyer-fall.jpg',
      '/images/reed-r2340-hero.jpg',
      '/images/reed-smart-series-hero.jpg',
      '/images/aemc-6550-6555-hero.jpg',
      '/images/deals-tg-series-cameras-current-promotions.jpg'
    ],
    description: 'High-impact digital display ads and landing page visuals.',
    tags: ['Adobe Photoshop', 'GitHub', 'Visual Studio Code'],
    fullDescription: 'I designed a series of website ads in Photoshop and then hand-coded them into the live site using HTML/CSS. My focus was adapting each design to fit a specific branch\'s brand, creating a consistent look that still felt custom.'
  },
  {
    id: '2',
    title: 'Social Media',
    category: '',
    image: '/images/project-2.jpg',
    gallery: [
      '/images/social-media-8.png',
      '/images/social-media-12.png',
      '/images/social-media-2.png',
      '/images/social-media-3.png',
      '/images/social-media-4.png',
      '/images/social-media-5.png',
      '/images/social-media-6.png',
      '/images/social-media-7.png',
      '/images/social-media-1.png',
      '/images/social-media-9.png',
      '/images/social-media-10.png',
      '/images/social-media-11.png',
      '/images/social-media-hioki.png',

      '/images/social-media-5.png'
    ],
    description: 'A cohesive visual identity system for Instagram and LinkedIn.',
    tags: ['Adobe Photoshop', 'Canva'],
    fullDescription: 'Developed a flexible social media template system for a lifestyle brand. The kit includes story layouts, carousel templates for educational content, and static feed post designs that ensure brand consistency across all social channels.'
  },
  {
    id: '3',
    title: 'Email Marketing',
    category: '',
    image: '/images/spring-start.png',
    gallery: [
      { 
        url: '/images/spring-start.png',
        externalLinks: [
          { label: 'CAD', url: 'https://mailchi.mp/302e966a0011/first-week-back-avoid-day-one-delays?e=[UNIQID]' },
          { label: 'FR', url: 'https://mailchi.mp/c09cfc655003/premire-semaine-de-retour-vitez-les-retards-du-premier-jour-3574252?e=[UNIQID]' },
          { label: 'USA', url: 'https://mailchi.mp/d1b26232dd83/first-week-back-avoid-day-one-delays?e=[UNIQID]' }
        ]
      }, 
      { 
        url: '/images/aemc-eblast.png',
        externalLinks: [
          { label: 'CAD', url: 'https://www.itm.com/content/3-common-electrical-headaches-eng' },
          { label: 'FR', url: 'https://www.itm.com/fr/information/3-common-electrical-headaches-fr' },
          { label: 'USA', url: 'https://www.globaltestsupply.com/content/3-common-electrical-headaches-eng' }
        ]
      },
      { 
        url: '/images/baker-eblast.png',
        externalLinks: [
          { label: 'CAD', url: 'https://mailchi.mp/d36bccbbafbe/new-tools-proven-performance-explore-bakers-latest-greatest?e=[UNIQID]' },
          { label: 'FR', url: 'https://mailchi.mp/3b73b3896154/nouveaux-outils-performances-prouves-dcouvrez-les-dernires-nouveauts-de-baker?e=[UNIQID]' },
          { label: 'USA', url: 'https://mailchi.mp/bf89525a7806/new-tools-proven-performance-explore-bakers-latest-greatest?e=[UNIQID]' }
        ]
      },
    ],
    description: 'Responsive newsletter templates focusing on customer retention.',
    tags: ['Mailchimp', 'Beefree', 'Dreamweaver'],
    fullDescription: 'Designed and built three responsive eblasts in BeeFree, later exported and sent through Mailchimp. The emails were created for English-speaking Canada, French-speaking Canada, and the U.S audience.The layout remained consistent, with language and link adjustments across versions. I followed direction and insights provided by the marketing team during the discovery phase to ensure alignment with campaign goals. Each eblast was tested and optimized for both desktop and mobile viewing.',
  },
  {
    id: '4',
    title: 'Manuals and Datasheets',
    category: '',
    image: '/images/project-5.jpg',
    gallery: [
      {
        url: '/images/R7930-manual.png',
        title: 'Manual',
        externalLinks: [
          { label: 'Link', url: '#' }
        ]
      },
      {
        url: '/images/reed-datasheets.png',
        title: 'Datasheets',
        externalLinks: [
          { label: 'Link', url: '#' }
        ]
      },
      {
        url: '/images/r2900-manual.png',
        title: 'Manual',
        externalLinks: [
          { label: 'Link', url: '#' }
        ]
      },
      {
        url: '/images/criterion-manual.png',
        title: 'Manual',
        externalLinks: [
          { label: 'Link', url: '#' }
        ]
      }
    ],
    description: 'Manual and technical documentation',
    tags: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Acrobat'],
    fullDescription: 'Produced product manuals from template setup to final delivery in both English and French. Managed content adaptation, created and refined layouts in InDesign, designed and edited technical graphics, and prepared print-ready files. Ensured brand consistency, high visual standards, and accuracy across digital and print formats.'
  },
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for Ali Fuentes Diaz's professional portfolio.
Ali is a Web Designer and Graphic Designer based in Montreal, Quebec.

Contact Details:
- Email: alifuentesdiaz@gmail.com
- Phone: +438 389 2184
- Location: Montreal, Quebec

Work Experience:
1. ITM Instruments. (2023 - 2026) - Junior Front End Designer
   - Design and maintain website pages, templates, and forms using HTML and CSS.
   - Support marketing campaigns by creating email layouts and graphics in Mailchimp.
   - Produce digital and print materials including product manuals, advertisements, and packaging assets.
   - Perform website quality checks to ensure consistent formatting, usability, and functionality.
   - Collaborate with marketing and development teams to maintain visual consistency across multiple company websites.
   - Apply design best practices while managing multiple projects and tight deadlines.

2. Funnel Cares (2033) - Graphic Designer
   - Crafted and optimized visual content for social media, Facebook Ads, landing pages, and digital marketing campaigns.
   - Managed the company's social media accounts, creating content calendars, publishing posts, and maintaining a consistent brand presence across platforms.
   - Designed graphics, presentations, GIFs, and promotional materials to support marketing initiatives and audience engagement.
   - Established and maintained cohesive brand aesthetics across all digital communications.

Education:
- Computer Graphics, Rosemount Technology Centre (2021-2022)
- Communication Sciences, Universidad del Valle de México (2015-2018)

Key Skills:
- HTML/CSS, Adobe Creative Suite (InDesign, Illustrator, Photoshop, Acrobat), Mailchimp, SQL Databases, Visual Studio Code, BeeFree.

Your goal is to answer visitor questions about Ali's experience, background, and availability.
Tone: Professional, Creative, Helpful, and Concisely polished.
If asked about rates or availability, encourage them to use the contact form or email alifuentesdiaz@gmail.com.
`;