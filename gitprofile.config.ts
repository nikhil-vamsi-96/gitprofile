// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'nikhil-vamsi-96',
  },

  base: '/gitprofile/',

  projects: {
    github: {
      display: true,
      header: 'Featured Analytics Projects',
      mode: 'manual',

      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: true,
          projects: [],
        },
      },

      manual: {
        projects: [
          'nikhil-vamsi-96/customer-churn-retention-intelligence',
          'nikhil-vamsi-96/sql-sales-analysis',
          'nikhil-vamsi-96/powerbi-employee-performance',
          'nikhil-vamsi-96/sql-customer-segmentation',
          'nikhil-vamsi-96/powerbi-website-traffic',
          'nikhil-vamsi-96/telecom-churn-analytics',
          'nikhil-vamsi-96/cardekho-market-trends-analysis',
          'nikhil-vamsi-96/Seasonal-Agriculture-Performance-Analysis',
        ],
      },
    },

    external: {
      header: 'More Analytics Projects',
      projects: [],
    },
  },

  seo: {
    title: 'Nikhil Vamsi | Data Analyst Portfolio',
    description:
      'Data Analyst portfolio featuring SQL, Python, Power BI, Excel, business intelligence, customer analytics, data visualization, and predictive analytics projects.',
    imageURL: 'https://avatars.githubusercontent.com/u/140070427?v=4',
  },

  social: {
    linkedin: 'nikhil-vamsi',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'nikhilvamsi96@gmail.com',
  },

  resume: {
    fileUrl: '',
  },

  skills: [
    'SQL',
    'Python',
    'Power BI',
    'Microsoft Excel',
    'Pandas',
    'NumPy',
    'DAX',
    'Business Intelligence',
    'Data Cleaning',
    'Exploratory Data Analysis',
    'Data Visualization',
    'Customer Analytics',
    'RFM Analysis',
    'Customer Segmentation',
    'Predictive Analytics',
    'Machine Learning',
    'Git & GitHub',
    'Jupyter Notebook',
  ],

  experiences: [],

  certifications: [
    {
      name: 'Google IT Automation with Python',
      body: 'Professional Certificate — Coursera',
      year: '',
      link: '',
    },
    {
      name: 'Tata iQ GenAI Data Analytics',
      body: 'Forage',
      year: '',
      link: '',
    },
    {
      name: 'AWS Cloud Virtual Internship',
      body: 'AICTE-EduSkills',
      year: '',
      link: '',
    },
    {
      name: 'Python/Django Internship',
      body: 'ExcelR EdTech — APSCHE collaboration',
      year: '',
      link: '',
    },
    {
      name: 'IBM SQL',
      body: 'Professional certification',
      year: '',
      link: '',
    },
    {
      name: 'JavaScript Essentials',
      body: 'Cisco',
      year: '',
      link: '',
    },
    {
      name: 'IoT',
      body: 'NPTEL',
      year: '',
      link: '',
    },
  ],

  educations: [
    {
      institution: 'Velagapudi Ramakrishna Siddhartha Engineering College',
      degree: 'Master of Computer Applications (MCA)',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'Nalanda Degree College, Vijayawada',
      degree: 'B.Sc. — Computer Science, Electronics & Mathematics',
      from: '',
      to: '',
    },
  ],

  publications: [],

  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'corporate',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'corporate',
      'business',
      'winter',
      'lofi',
      'emerald',
      'nord',
      'forest',
      'aqua',
    ],
  },

  footer: `Built with <a
      class="text-primary"
      href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> for a Data Analyst portfolio.`,

  enablePWA: true,
};

export default CONFIG;
