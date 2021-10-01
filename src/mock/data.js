import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Developing', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Merrilee Murphy',
  subtitle: 'Simply Developing.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'During the fall of 2020, I decided to dip my toes into the waters of web development. I immediately fell in love with the logic of code (usually) and also the creativity. I felt like I was able to bring my whole self to the table and contribute fully to projects I was working on.',
  paragraphTwo:
    "I decided that becoming a developer was worth quitting my job and attending Thinkful, all in the hopes of launching a brand new career. I am gaining confidence in JavaScript, HTML, CSS, and Bootstrap. I'm dedicated to learning all that I can, and I'm not afraid to ask questions or learn a better way. The last decade of my life has been working to develop my communication and I know that I will bring that strength to any team that I'm lucky enough to join.",
  paragraphThree:
    "Graduating from an online bootcamp proved to myself and my educators that I can learn anything that's thrown my way. I'm excited to begin my new career and look forward to all I will continue to learn.",
  resume:
    'https://docs.google.com/document/d/1CMIIhV2XgX2cW2kFuTdNZw9ljYo58xbwC1Sfexv0gX8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Pomodoro Timer',
    info: "This timer allows you alternate between focusing and taking a break to help increase productivity. The timer chimes when it's time to take a break and then again when it's time to begin working. You can select the time duration for the focus and break sessions.",
    info2: '',
    url: '',
    repo: 'https://github.com/Merrilee18/Pomodoro-Timer', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.PNG',
    title: 'Flashcard App',
    info: 'This app allows you to create virtual flashcards to help you study. You can create different decks filled with at least three cards. Each card has a front (question) and back (answer). Flip through the deck to study! Manage the deck and cards easily by adding, editing, and deleting.',
    info2: '',
    url: '',
    repo: 'https://github.com/Merrilee18/Flashcards_App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Library Project',
    info: 'The Library Project organizes an imaginary Library. I created functions to organize the books, authors, and accounts. It tested my ability to write complicated algorithms and write practical functions. Different abilities include searching for the most common authors, searching for the most popular books, and displaying authors by genre.',
    info2: '',
    url: '',
    repo: 'https://github.com/Merrilee18/Library-Project', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'm.murphy.developer@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/merrilee-murphy/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Merrilee18',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
