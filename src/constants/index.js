import {
    mobile,
    backend,
    creator,
    web,
    net,
    javascript,
    html,
    css,
    python,
    reactjs,
    bootstrap,
    csharp,
    nodejs,
    git,
    docker,
    oracle,
    postgresql,
    dometrain,
    ganalytics,
    aws,
    byu,
    aptive,
    lds,
    provo,
    stoke,
    threejs,
    checkboxes,
    airgradient,
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
      title: ".NET Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Expert",
      icon: creator,
    },
  ];
  const languages = [
    {
      id: 0,
      name: "C#",
      icon: csharp,
    },
    {
      id: 1,
      name: "JavaScript",
      icon: javascript,
    },
    {
      id: 2,
      name: "HTML & CSS",
      icon: html,
    },
    {
      id: 3,
      name: "Python",
      icon: python,
    },
  ];
  const frameworks = [
    {
      id: 4,
      name: ".NET",
      icon: net,
    },
    {
      id: 5,
      name: "React JS",
      icon: reactjs,
    },
    {
      id: 6,
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      id: 7,
      name: "Three JS",
      icon: threejs,
    },
  ];
  const technologies = [
    {
      id: 8,
      name: "git",
      icon: git,
    },
    {
      id: 9,
      name: "Oracle Database",
      icon: oracle,
    },
    {
      id: 10,
      name: "docker",
      icon: docker,
    },
    {
      id: 11,
      name: "PostgreSQL",
      icon: postgresql,
    },
  ];
  const certificates = [
    {
      id: 12,
      name: "Cloud Practitioner",
      icon: aws,
    },
    {
      id: 13,
      name: "Dometrain",
      icon: dometrain,
    },
    {
      id: 14,
      name: "Google Analytics",
      icon: ganalytics
    },
  ];
  
  const experiences = [
    {
      title: "Technical Lead",
      company_name: "BYU Residence Life",
      icon: byu,
      iconBg: "#f1f1f1",
      date: "January 2024 - August 2024",
      points: [
        "Implemented SCRUM methodology, leading to 135% increase in developer output and efficiency, while achieving 100% developer satisfaction.",
        "Adopted Domain Driven Design (DDD) practices and introduced documentation techniques like event storming to streamline and document the design process.",
        "Developed a strategic plan to reduce AWS costs by 75%, significantly lowering the monthly bill and optimizing resource utilization.",
        "Established a CI/CD pipeline with testing environments, facilitating easier publishing and catching hundreds of bugs early in the development process.",
      ],
    },
    {
      title: "Web Developer II",
      company_name: "BYU Residence Life",
      icon: byu,
      iconBg: "#f1f1f1",
      date: "August 2022 - January 2024",
      points: [
        "Wrote and implemented over 300,000 lines of code to support updates to homegrown legacy software that managed over 10,000 housing contracts worth $3 million annually.",
        "Created a 1000x increase in concurrent users and boosted system uptime to 95% by refactoring code to eliminate memory leaks.",
        "Enhanced security measures by implementing new practices and secrets management to safeguard student PII and prevent potential malicious attacks.",
        "Integrated standard .NET technologies and best practices, including dependency injection and Entity Framework, to improve software performance and maintainability.",
        "Established an end-to-end (E2E) testing system to ensure critical systems remain functional and reliable during updates.",
        "Upgraded legacy code to .NET Framework 4.8 and conducted a comprehensive dependency audit, eliminating over 1,000,000 lines of technical debt.",
      ],
    },
    {
      title: "Salesperson",
      company_name: "Aptive Environmental",
      icon: aptive,
      iconBg: "#fff",
      date: "March 2021 - July 2022",
      points: [
        "Generated over $135,000 in revenue in 4 months through door-to-door sales",
        "Senior member of a 30-person team obtaining new accounts",       
        "Help train salespeople and plan team-building activities",
        "Work with dozens of municipal and local governments to obtain proper licenses",
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
      name: "One Million Checkboxes",
      description:
        "One million checkboxes, each with a unique state, all synchronized in real-time using SignalR. Built with Blazor and ASP.NET.",
      tags: [
        {
          name: "Blazor",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "green-text-gradient",
        },
        {
          name: "SignalR",
          color: "pink-text-gradient",
        },
      ],
      image: checkboxes,
      source_code_link: "https://github.com/qkarpowi/OneMillionCheckboxesBlazor",
    },
    {
      name: "Air Quality Sensor API",
      description:
        "An API that collects air quality data within my apartment from DIY sensors and stores it in a postgres database. Built with ASP.NET and Entity Framework, with a Grafana dashboard to moniter data.",
      tags: [
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "ASP.NET",
          color: "green-text-gradient",
        },
        {
          name: "Entity Framework",
          color: "pink-text-gradient",
        },
      ],
      image: airgradient,
      source_code_link: "https://github.com/qkarpowi/AirGradientAPI",
    },
  ];
  
  export { services, languages, frameworks, technologies, certificates, experiences, testimonials, projects };