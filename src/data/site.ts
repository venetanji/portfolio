export const site = {
  title: "Giovanni Lion",
  firstName: "Giovanni",
  lastName: "Lion",
  role: "Researcher · Generative AI · Creative Code",
  email: "giovanni.lion@gmail.com",
  bio: "Giovanni's research focuses on generative AI and creativity — the topic of his PhD awarded in May 2025 from The Hong Kong Polytechnic University. Recent work explores agents, automation, and their transformative impact on design practices.",
  longBio: `Giovanni is a researcher specialising in generative AI and creativity. His doctoral research explored diverse applications of generative AI within creative practices, with particular emphasis on understanding usage patterns and network effects in AI adoption within communities. He is technically fluent across Python, JavaScript, Max/MSP, Arduino, Docker, Linux, single-board computers, Leap Motion, Muse EEG, and openvibe. Off-screen he plays Ultimate Frisbee at international level, sails, and writes music with an OP-Z.`,
  description:
    "Giovanni Lion — researcher specialising in generative AI, creative automation and computational creativity.",
};

export const interests = [
  "Generative AI",
  "Creative Automation",
  "AI Agents",
  "Computational Creativity",
  "Sound Design",
  "Robotics",
  "Algorithmic Composition",
  "Sailing",
  "Ultimate Frisbee",
  "Indie Games",
];

export const education = [
  {
    course: "PhD in Design",
    institution: "The Hong Kong Polytechnic University",
    school: "School of Design",
    year: "2025",
  },
  {
    course: "MSc in Multimedia & Entertainment Technologies",
    institution: "The Hong Kong Polytechnic University",
    school: "School of Design",
    year: "2015",
  },
  {
    course: "MSc in Organization Science and Information Systems",
    institution: "Bocconi University",
    year: "2007",
  },
  {
    course: "BSc in Economics",
    institution: "Bocconi University",
    year: "2005",
  },
];

export type Social = {
  name: string;
  url: string;
  glyph: string;
  display?: boolean;
};

export const social: Social[] = [
  { name: "Email", url: "mailto:giovanni.lion@gmail.com", glyph: "@" },
  { name: "GitHub", url: "https://github.com/venetanji", glyph: "GH" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/giovannilion/", glyph: "in" },
  { name: "Twitter", url: "https://twitter.com/venetanji", glyph: "X" },
  {
    name: "Scholar",
    url: "https://scholar.google.co.uk/citations?user=4QbQW8AAAAAJ&hl=en",
    glyph: "GS",
  },
  { name: "ORCID", url: "https://orcid.org/0000-0003-4526-0642", glyph: "iD" },
  { name: "Suno", url: "https://suno.com/@venetanji?page=songs", glyph: "♪" },
  { name: "Observable", url: "https://observablehq.com/@venetanji", glyph: "Ob" },
  { name: "p5.js", url: "https://editor.p5js.org/venetanji/sketches/", glyph: "p5" },
];

export type Experience = {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    title: "Ph.D. — Part-time Visiting Lecturer",
    company: "Hong Kong Polytechnic University, School of Design",
    companyUrl: "https://www.sd.polyu.edu.hk/en/",
    location: "Hong Kong",
    start: "2019-09",
    end: "2025-05",
    bullets: [
      "Completed PhD on generative AI and creativity, with focus on agents, automation and their impact on design practices (awarded May 2025).",
      "Built a real-time TensorRT-accelerated img2img pipeline using WebRTC, Stable Diffusion and Docker.",
      "Developed workshops and tutored students and professionals on integrating generative AI into creative workflows.",
      "Taught electives in Sound Design, Interactive Multimedia Environment and Transformative Technologies.",
      "Created A-Eye, an interactive AI installation that reimagines audiences in real time, premiered at the M+ private party for Art Basel.",
    ],
  },
  {
    title: "Project Associate",
    company: "Hong Kong Polytechnic University, School of Design",
    companyUrl: "https://www.sd.polyu.edu.hk/en/",
    location: "Hong Kong",
    start: "2017-09",
    end: "2019-08",
    bullets: [
      "Designed and ran extracurricular workshops supporting student learning.",
      "Developed a 32-speaker ambisonics system capable of real-time spatial audio.",
      "Lectured in MSc electives Sound Design, Interactive Multimedia Environment and Transformative Technologies.",
    ],
  },
  {
    title: "Robot Operator",
    company: "Hanson Robotics",
    companyUrl: "https://www.hansonrobotics.com/",
    location: "Hong Kong",
    start: "2017-12",
    end: "2019-06",
    bullets: [
      "Oversaw performance scripting, transport, setup and operation of Sophia, the humanoid robot.",
      "Worked across ROS, servo-motor control, computer vision and chatbot components.",
      "Showcased Sophia at high-profile events including a commercial shoot with Cristiano Ronaldo and the World Investment Forum 2018 at the UN in Geneva.",
    ],
  },
  {
    title: "IT Manager",
    company: "Ambulatorio San Massimo",
    companyUrl: "https://ambulatoriosanmassimo.it",
    location: "Padova, Italy — Remote",
    start: "2018-09",
    end: "2022-12",
    bullets: [
      "Designed the network architecture and RemoteApp services (database, VoIP, booking API) for a two-site medical clinic.",
      "Automated backup and routine system administration with Docker, cutting operational costs by ~60%.",
    ],
  },
  {
    title: "Founder, CEO & Lead Programmer",
    company: "Hagao Studio",
    location: "Hong Kong",
    start: "2015-02",
    end: "2016-05",
    bullets: [
      "Created Featherman, a mobile game raising awareness about migratory birds, in partnership with WWF Mai Po Reserve.",
      "Led mobile game development end-to-end as team leader.",
    ],
  },
  {
    title: "Founder, CEO & Lead Programmer",
    company: "83bits",
    location: "Hong Kong",
    start: "2011-09",
    end: "2014-09",
    bullets: [
      "Built and operated AllIn1Social, a web app for managing content and ad campaigns on Facebook pages.",
      "Full-stack development on Ruby on Rails; integration with the Facebook Advertising API.",
    ],
  },
  {
    title: "Founder & CEO",
    company: "Shi Cheng Trading",
    location: "Hong Kong",
    start: "2009-12",
    bullets: [
      "Established an import company specialising in gel and foam pillows and mattresses for the HK and China markets.",
      "Managed end-to-end operations: procurement, sales, logistics, customer service.",
      "Operated ERP systems (OpenERP / Odoo, then ERPNext) for sales, purchases, stock and accounting.",
    ],
  },
  {
    title: "Social Media Specialist",
    company: "77Agency",
    companyUrl: "https://www.77agency.com/",
    location: "Milan",
    start: "2008-09",
    end: "2011-08",
    bullets: [
      "Developed and deployed Facebook applications for marketing campaigns.",
      "Worked with Lavazza, La Repubblica, RCA, Condé Nast and Mondadori.",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "SDA Bocconi",
    location: "Milan",
    start: "2007-02",
    end: "2008-06",
    bullets: [
      "TeD+ lab — e-learning platforms and remote teaching.",
      "Co-taught the EMIT course “Organizational Dynamics and Technical Change”.",
    ],
  },
];

export type Sketch = {
  title: string;
  blurb: string;
  href: string;
  kind: "observable" | "p5" | "video" | "code";
};

// A handful of pointers; expand as you migrate sketches into the site itself.
export const sketches: Sketch[] = [
  {
    title: "Friendly Polygons",
    blurb: "Concentric polygons morphing through simplex noise — the seed of the homepage hero.",
    href: "https://observablehq.com/@venetanji/friendly-poligons",
    kind: "observable",
  },
  {
    title: "p5.js sketches",
    blurb: "An archive of vintage and recent p5.js experiments — flow fields, particle systems, generative geometry.",
    href: "https://editor.p5js.org/venetanji/sketches/",
    kind: "p5",
  },
  {
    title: "Observable notebooks",
    blurb: "Live, reactive notebooks exploring algorithmic composition and visual systems.",
    href: "https://observablehq.com/@venetanji",
    kind: "observable",
  },
];
