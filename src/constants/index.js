import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Android App Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "UI & UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Android",
      icon: typescript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: redux,
    },
    {
      name: "Adobe XD",
      icon: nodejs,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Kali Linux",
      icon: mongodb,
    },
    {
      name: "AWS",
      icon: docker,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Mobile Application Developer",
      company_name: "Strarts",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Developing and researching about solutions for real world problems with existing technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Main objective is to develop an unique solution which is able to withstand for long decades.",
        "Participating in progress meetings, code reviews and providing/receiving constructive feedback to/from other developers.",
      ],
    },
    {
      title: "Android Developer",
      company_name: "Blunav Technologies Pvt Ltd",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Mar 2023",
      points: [
        "Developed an asset and issue management system for Airport Authority of India Chennai for digitilization of asset and issue management.",
        "I worked as an Application development intern for Blunav Technologies Pvt Ltd for working in the project of Chennai Airport.",
        "I developed a responsive application which could manage the assets and issues reported by officials in airport.",
        "Participated in progress meeting, code reviews and received constructive feedback from CEO, team lead and other developers which sharpened my skills in development.",
      ],
    },
    {
      title: "Android Frontend Developer",
      company_name: "Tamil Nadu Government",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sep 2021 - Dec 2022",
      points: [
        "Developed an android application for Tamil Nadu Government for the NGTM Program",
        "I worked as a frontend developer with my team including the members of various expertise such UI&UX, frontend and backend.",
        "Implementing responsive design and ensuring cross-browser compatibility, this application mainly focused on to enrich the plastic free society among the students.",
        "This application will be the contribution towards the plastic free society.",
      ],
    },
    {
      title: "Android App Developer",
      company_name: "Huawei Technologies Pvt Ltd",
      icon: starbucks,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Dec 2021",
      points: [
        "Developed two android applications and deployed in Huawei App Gallery.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create more applications.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Coordinated and acted as a lead for team for Application Development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
      {
        name: "Performance Predictor",
        description:
          "A Mobile application integrated with Machine Learning which is able to predict the performance of students with more accuracy. A new Ensembled Approach is used for better performance.",
        tags: [
          {
            name: "android studio",
            color: "green-text-gradient",
          },
          {
            name: "JAVA",
            color: "blue-text-gradient",
          },
          {
            name: "XML",
            color: "pink-text-gradient",
          },
          {
            name: "python",
            color: "green-text-gradient",
          },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
      },
      {
      name: "NGTM",
      description:
        "A mobile application which manages the activities of students towards contributing to reduction of plastics.This application will be the contribution towards the plastic free society.",
      tags: [
        {
          name: "android studio",
          color: "green-text-gradient",
        },
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "DigiField",
      description:
        "A mobile application that enables airport officials and workers to report issues and to track the issues in an easy way, it is an efficient Asset and Issue management system.",
      tags: [
        {
          name: "android studio",
          color: "green-text-gradient",
        },
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "XML",
          color: "pink-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  
  ];
  
  export { services, technologies, experiences, testimonials, projects };