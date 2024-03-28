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
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
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
  description: ``,
  aboutItems: [
    {label: 'Location', text: 'Pekanbaru, Riau.', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indonesia', Icon: FlagIcon},
    {label: 'Interests', text: 'Programming, Gaming, Food, Travel, & Music', Icon: SparklesIcon},
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
    image: porfolioImage2,
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
    image: porfolioImage2,
  },
  {
    title: 'Aspirasi',
    description: 'The Aspiration project aims to provide a platform for students and the surrounding community of Politeknik Caltex Riau to voice their aspirations, provide information, and lodge complaints. This application features multiple user levels, with the initial user being able to submit aspirations, information, or complaints to Politeknik Caltex Riau. These submissions are then reviewed by administrators. If accepted, they are escalated to the relevant executive level. Users receive email notifications regarding the status of their reports. This system fosters transparency, accountability, and engagement between the institution and its stakeholders, ultimately contributing to a more responsive and inclusive environment.',
    url: '#',
    image: porfolioImage2,
  },
  {
    title: 'Edu Kids(Android & Website',
    description: 'Edukids is a program designed to facilitate the learning process for children through various multimedia formats, including audio, video, and written materials. The system incorporates interactive exercises utilizing images to engage children in learning activities, ensuring an enjoyable and stimulating learning experience. Additionally, the program offers a consultation feature, allowing parents to easily communicate with teachers or seek advice regarding their childs education. This comprehensive approach not only supports childrens learning but also provides parents with satisfaction and peace of mind knowing they can actively participate in their childs educational journey.',
    url: '#',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2017 - Oct 2021',
    location: 'Politeknik Caltex Riau',
    title: 'Bachelor of Science in Computer Science',
    content: (
      <div>
        <p>
          During my time at school, I gained a comprehensive understanding of programming, despite having no prior background in it. Initially, concepts such as MVC architecture and various frameworks were entirely new to me, as was the process of running projects locally. However, my experience at the university has been transformative, as I immersed myself in learning these fundamentals.
        </p>
        <p>
          In addition to academic knowledge, I actively engaged in extracurricular activities to further enhance my skills. As a member of the Information Systems Student Association, I participated in various activities and events, gaining valuable experience in project management and teamwork. Furthermore, my involvement in the Computer Security Incident Response Team (CSIRT) as the coordinator for development and training allowed me to deepen my understanding of cybersecurity and hone my leadership abilities.
        </p>
        <p>
          Throughout my academic journey, I have developed several applications that I believe could be beneficial to relevant institutions. These experiences have not only equipped me with technical skills but also fostered a strong sense of responsibility and dedication to continuous learning and improvement.
        </p>
      </div>
    ),
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'Feb 2022 - July 2022',
    location: 'Bank Riau Kepri',
    title: 'Software Developer Intern',
    content: (
    <p>
    During my internship at Bank Riau Kepri, I had the opportunity to work on the E-Registration project. This project aimed to streamline the attendance tracking system for bank employees using QR code technology. My responsibilities included developing and implementing features such as QR code generation and scanning, activity registration, and email notifications.
    <br/>
    Through this experience, I gained hands-on experience in full-stack web development, particularly in frontend and backend technologies. I collaborated with senior developers to understand the project requirements, design system architecture, and write clean and efficient code.
    <br/>
    Additionally, I had the chance to contribute to the integration of the E-Registration system with the mobile application, ensuring seamless connectivity and user experience across platforms. This involved working with APIs and understanding mobile development principles.
    <br/>
    Furthermore, I participated in regular meetings with project stakeholders to discuss progress, gather feedback, and address any issues or challenges encountered during the development process. This allowed me to enhance my communication and problem-solving skills in a professional setting.
    <br/>
    Overall, my internship at Bank Riau Kepri provided me with invaluable real-world experience and further solidified my passion for software development and technology.
    </p>
    ),
    },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is how you can reach me.',
  items: [
    {
      type: ContactType.Location,
      text: 'Pekanbaru, Indonesia',
      href: 'https://www.google.com/maps/@0.5139623,101.3587749,12z',
    },
    {
      type: ContactType.Instagram,
      text: '@ebietsy',
      href: 'https://www.instagram.com/ebietsy',
    },
    {
      type: ContactType.Github,
      text: 'ebietsuprayogi',
      href: 'https://github.com/ebietsuprayogi',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/ebietsuprayogi'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/ebietsy'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ebietsy/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/ebiet_sy'},
];
