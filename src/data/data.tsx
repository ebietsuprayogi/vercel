import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Ebiet Suprayogi Portofolio',
  description: 'React Template'
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Ebiet Suprayogi.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      My name is Ebiet Suprayogi, I'm currently unemployed, hailing from <strong className="text-stone-100">Pekanbaru, Indonesia.</strong> Graduated from Politeknik Caltex Riau with a degree in Computer Engineering.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Alongside my passion for programming 💻, I enjoy indulging in delicious food 🍚 and diving into the world of gaming 🎮.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: ``
  aboutItems: [
    {label: 'Location', text: 'Pekanbaru, Riau.', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Interests', text: 'Animals, Science, Technology, Gaming, Food, Travel, & Music', Icon: SparklesIcon},
    {label: 'Study', text: 'Politeknik Caltex Riau', Icon: AcademicCapIcon},
    {label: 'Employment', text: '-', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Indonesia',
        level: 10,
      },
      {
        name: 'English',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React JS',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'PHP Native',
        level: 9,
      },
      {
        name: 'CodeIgninter(CI3)',
        level: 9,
      },
      {
        name: 'Express JS',
        level: 5,
      },
    ],
  },
  {
    name: 'Database development',
    skills: [
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'MongoDB',
        level: 5,
      },
      {
        name: 'IIS',
        level: 3,
      },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Nginx',
        level: 5,
      },
      {
        name: 'Docker',
        level: 3,
      },
    ],
  },
  {
    name: 'Workflow',
    skills: [
      {
        name: 'Trello',
        level: 8,
      },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'Nginx',
        level: 8,
      },
      {
        name: 'Docker',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'HIMASISTIFO Website',
    description: 'The project involves the development of a website for the Information Systems Student Association of Politeknik Caltex Riau. This website serves as an informational platform for the association, providing details about its activities and upcoming events. It includes features such as committee registration and member profiles. Each member, including the governors, has a dedicated profile page where they can input information such as upcoming activities, documentation, and committee registration details. The governors are designated as super administrators, granting them special privileges for managing the website. This website aims to streamline communication within the association, enhance member engagement, and centralize the management of association activities and initiatives.',
    url: '#',
    image: porfolioImage1,
  },
  {
    title: 'E-Registrasi',
    description: 'The E-Registration system for Bank Riau Kepri serves as a comprehensive solution for recording the attendance of all bank employees using QR code technology. Additionally, it allows the addition of new activities and sends notifications to employees via email. The system is integrated with an API that enables connectivity to the mobile application, making the website an integral part of the overall application ecosystem. Through this system, the bank aims to streamline attendance tracking, facilitate communication with employees through email notifications, and provide a seamless experience across web and mobile platforms.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'SIAKMS',
    description: 'The Academic Information and Student Monitoring System, based on a website platform, serves as my final project aimed at providing comprehensive information to students, teachers, administrative staff, and the student body. Students have access to view their grades, provide comments, check any disciplinary actions taken against them, and register for extracurricular activities. Teachers can input grades, oversee extracurricular activities, assign disciplinary actions, and schedule meetings with parents or guardians of students as needed. Administrative staff are responsible for managing users, types of student achievements, and extracurricular data, including assigning teachers as supervisors. The student body can access all extracurricular and achievement data. This system aims to enhance communication and transparency within the educational institution, streamline administrative processes, and empower stakeholders with valuable insights into student performance and activities.',
    url: '#',
    image: porfolioImage3,
  },
  {
    title: 'Aspirasi',
    description: 'The Aspiration project aims to provide a platform for students and the surrounding community of Politeknik Caltex Riau to voice their aspirations, provide information, and lodge complaints. This application features multiple user levels, with the initial user being able to submit aspirations, information, or complaints to Politeknik Caltex Riau. These submissions are then reviewed by administrators. If accepted, they are escalated to the relevant executive level. Users receive email notifications regarding the status of their reports. This system fosters transparency, accountability, and engagement between the institution and its stakeholders, ultimately contributing to a more responsive and inclusive environment.',
    url: '#',
    image: porfolioImage4,
  },
  {
    title: 'Edu Kids(Android & Website',
    description: 'Edukids is a program designed to facilitate the learning process for children through various multimedia formats, including audio, video, and written materials. The system incorporates interactive exercises utilizing images to engage children in learning activities, ensuring an enjoyable and stimulating learning experience. Additionally, the program offers a consultation feature, allowing parents to easily communicate with teachers or seek advice regarding their childs education. This comprehensive approach not only supports childrens learning but also provides parents with satisfaction and peace of mind knowing they can actively participate in their childs educational journey.',
    url: '#',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
