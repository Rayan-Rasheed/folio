/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rayan Rasheed",
  title: "Hi, I'm Rayan",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with expertise in Cloud Computing, having expertise in building and deploying scalable application."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_R6AYbayHBPagJ_YG1ZnIUGYjlX32HZt/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rayan-Rasheed",
  linkedin: "https://github.com/Rayan-Rasheed",
  gmail: "rasheedrayan514@gmail.com",
  gitlab: "https://gitlab.com/rayanrasheed",
  facebook: "https://web.facebook.com/profile.php?id=100007218317577",
  medium: "https://medium.com/@rasheedrayan514",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK AND FIELD.",
  skills: [
    emoji(
      "⚡ Develop highly interactive and Scalable Applications."
    ),
    emoji("⚡ Deploy application to Cloud Services like GCP,AWS and Azure."),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    
    {
      schoolName: "University of Engineering and Technology, Lahore",
      logo: ("https://media.licdn.com/dms/image/C4D03AQENIoknFlS06Q/profile-displayphoto-shrink_800_800/0/1631273371111?e=1709769600&v=beta&t=IiKPYVGb_c2DhMyNsY2ZN0_5kW17EYMCniCiR1RpLww"),
      subHeader: "BSc Computer Science",
      duration: "September 2021 - April 2025",
      desc: "Ranked among top 5 univresities in Computer Science.",
      descBullets: ["Picked courses like Machine Learning, Cloud Computing."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "React", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "SpringBoot",
      progressPercentage: "90%"
    },
    {
      Stack: "Express",
      progressPercentage: "80%"
    },
    {
      Stack: "Python Scripting",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "Vocs AI",
      companylogo: ("https://media.licdn.com/dms/image/D560BAQFVGj9vt8fd-w/company-logo_200_200/0/1694708615479?e=2147483647&v=beta&t=OZGgPlvGXpdFP1fF1F-JyN0iEhYSqXXPDbnHPwIMDTQ"),
      date: "May 2023 – Present",
      desc: "Vocs AI is a revolutionize application in the field of Music Industry that bring revolution with Arrtificial Intelligence.",
      descBullets: [
        "FrontEnd on React.",
        "Backend with fast API's deployed over GCE on GCP.",
        "Pytorch for audio processing."
      ]
    },
    {
      role: "Front-End Web Developer",
      company: "Neo Docto",
      companylogo: "https://media.licdn.com/dms/image/C4D0BAQGDnXaap7k5DA/company-logo_200_200/0/1631341900756?e=2147483647&v=beta&t=KANSI1EadMxOWNK3nB6Y7S968FDYRSAJWHsiPWFcUdw",
      date: "April 2023 – June 2023",
      desc: "A digital healthcare company."
    },
    {
      role: "Freelance Software Engineer",
      company: "Fiverr",
      companylogo: "https://media.licdn.com/dms/image/C4D1BAQFUkaekC5ol8w/company-background_10000/0/1602006914948/top_fiverr_freelancers_cover?e=2147483647&v=beta&t=KPnHTaTMpqjkovGpFqi1x8U2ScK8X2KfujLXrsw50dg",
      date: "Jan 2023 – Present",
      desc: "Provide Services on Full stack Software Development."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: ("https://media.licdn.com/dms/image/D560BAQFVGj9vt8fd-w/company-logo_200_200/0/1694708615479?e=2147483647&v=beta&t=OZGgPlvGXpdFP1fF1F-JyN0iEhYSqXXPDbnHPwIMDTQ"),
      projectName: "VOCS AI",
      projectDesc: "Vocs AI is a revolutionize application in the field of Music Industry that bring revolution with Arrtificial Intelligence.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://vocs.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: ("https://futr.sg/wp-content/uploads/2023/08/ignition-labs-futr-singapore-m1-eazie-tv-1.jpg"),
      projectName: "EAZIE TV",
      projectDesc: "Eazie TV is a subscription streaming service that lets you watch live and on-demand TV from top 75+ leading TV Channels on your favourite devices.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://https://eazie.tv/"
        }
        //  you can add extra buttons here.
      ]
    }
    
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Neo Docto Scholarship Grant",
      subtitle:
        "Associate Web Developer Intern with $1500 grant from Neo Docto. NeoDocto continues to be one of the fastest growing IT services brands in Asia Europe and North America.",
      image: require("./assets/images/neodocto.PNG"),
      imageAlt: "Scholarship Grant Letter",
      footerLink: [
        {
          name: "Offer Letter",
          url: "https://drive.google.com/file/d/1fH_zb6Xe7oPzrrKcbLjx257Oq13T8W03/view?usp=sharing"
        },
        {
          name: "Accepted Letter",
          url: "https://drive.google.com/file/d/1GKpfUBv9bw2Ar0HUDjGnE3GrN8oEOSkV/view?usp=sharing"
        },
        
      ]
    },
    {
      title: "Prime Minister Laptop Award for Top-Performers",
      subtitle:
        "Prime Minister Laptop Award for among 1% top-performing Students in Pakistani Universities.",
      image:require("./assets/images/laptop.jpg"),
      imageAlt: "Laptop Award",
      footerLink: [
        {
          name: "Laptop Award",
          url: "https://drive.google.com/file/d/1HU1tdej9Mj_lhIX5P5omPtldhg_1CQwD/view?usp=sharing"
        }
      ]
    },

    {
      title: "Advanced SQL Developer Certified Professional",
      subtitle: "Aced Hacker Rank Skill Certification in 2023 when I was in 4rth Semester of my Computer Science.",
      image: require("./assets/images/hackerRank.PNG"),
      imageAlt: "Certificate",
      footerLink: [
        {name: "Certification", url: "https://media.licdn.com/dms/image/D4D2DAQGVKceAMKcn4A/profile-treasury-document-cover-images_800/0/1695472716201?e=1704895200&v=beta&t=g8GTO-NsJKThree2sQGCPhQD6eR17Ezh5HD9odggx5A"},
        {
          name: "Hacker Rack",
          url: "https://media.licdn.com/dms/image/D4D2DAQGVKceAMKcn4A/profile-treasury-document-cover-images_800/0/1695472716201?e=1704895200&v=beta&t=g8GTO-NsJKThree2sQGCPhQD6eR17Ezh5HD9odggx5A"
        }
      ]
    },
    {
      title: "1st Runner-Up Zindigi Prize.",
      subtitle: "Startup Idea Competition by Zindigi Prize powered by JS Bank. My innovative idea stood me 1st runner up.",
      image: require("./assets/images/march.PNG"),
      imageAlt: "Certificate",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1PwiUVWejbBaH2OigEOL4MY4dzP5x0rTV/view?usp=sharing"},
        
      ]
    },
    {
      title: "Level-1 Seller at Fiverr",
      subtitle: "Promoted to Leveled Seller at Fiverr. Forcasted the skills in project Management and Full Stack Web Software Developement.",
      image: require("./assets/images/fiverr.jpeg"),
      imageAlt: "Certificate",
      footerLink: [
        {name: "Profile", url: "https://fiverr.com"},{name: "Reviews", url: "https://drive.google.com/file/d/1WtFwbeGkHtm7QrtO9Isp9QaA1SHeC4rV/view?usp=sharing"},
        
      ]
    },
    {
      title: "Software Developer Internship Letter",
      subtitle: "Vocs AI is a revolutionize application in the field of Music Industry that bring revolution with Arrtificial Intelligence.",
      image: require("./assets/images/Dec2.PNG"),
      imageAlt: "Certificate",
      footerLink: [
        {name: "Certificate", url: "https://drive.google.com/file/d/1stRkcjanDwIVENDGT1S_LzL9DFwlRWwH/view?usp=sharing"},
        
      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Articles",
  subtitle:
    "With Love for Developing cool stuff, I love to contribute and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/advice/0/how-can-you-learn-web-development-while-working-w1utc?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145839011020832768%2C7145839012824367104%29%2C7146052643679903744%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287146052643679903744%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145839011020832768%2C7145839012824367104%29%29&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145839011020832768%2C7145839012824367104%29&trackingId=MmL2BYiksbUFrKS6nm6q3A%3D%3D&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop",
      title: "How can you learn web development while working full-time?",
      description:
      "One effective way to learn web development is through project-based learning. Choose a project aligned with your interests or professional background..."
      
    },
    {
      url: "https://www.linkedin.com/advice/1/how-can-you-protect-your-privacy-when-developing-lngpf?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7141461065271336960%2C7141461067016187904%29%2C7146049890215792641%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287146049890215792641%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7141461065271336960%2C7141461067016187904%29%29&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7141461065271336960%2C7141461067016187904%29&trackingId=b6Q%2BIrtBc8m8Y7RP0UZ0sA%3D%3D&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop",
      title: "HTTPS is a protocol that encrypts the communication between your website and your users' browsers. It prevents anyone from intercepting, modifying, or stealing the data that is exchanged. To use HTTPS, you need to obtain a SSL certificate from a trusted authority and install it on your server. You can also use tools like Let's Encrypt or Cloudflare to get a free certificate and enable HTTPS automatically.",
      description:
      "If you are hosting your server or application on cloud platforms like GCP (Google Cloud Platform) or AWS (Amazon Web Services) often comes with the added benefit of default SSL support. "
    },
    {
      url: "https://www.linkedin.com/advice/0/what-testing-framework-how-can-you-use-automate-nbisf?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145448638658371585%2C7145448640449335296%29%2C7145622969627709440%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287145622969627709440%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145448638658371585%2C7145448640449335296%29%29&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145448638658371585%2C7145448640449335296%29&trackingId=U8muCpfIleTSIU9riIS2Kg%3D%3D&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop",
      title: "What is a testing framework and how can you use it to automate your tests?",
      description:
      "When navigating the landscape of testing applications and selecting the appropriate framework, the right choice hinges on aligning specific needs with the strengths of each framework."
    },
    {
      url: "https://www.linkedin.com/advice/1/what-most-important-java-web-services-testing-techniques-cfdoe?trackingId=o7szxM8FQtV4P%2BvUoIe6UA%3D%3D&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop&contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145475765642358784%2C7145475767672467456%29%2C7145621108908613632%29&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145475765642358784%2C7145475767672467456%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287145621108908613632%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7145475765642358784%2C7145475767672467456%29%29",
      title: "Testing Java web services can be done with a variety of tools, both open source and commercial. SoapUI is one of the most popular, as it supports both SOAP and REST web services testing, allowing you to create, execute, and automate functional, load, security, and compliance tests. Postman is another user-friendly tool that focuses on REST web services testing and enables you to create, send, and analyze HTTP requests and responses. Additionally, JMeter is a powerful tool for load and performance testing of web services. It can generate and simulate a large number of concurrent requests while measuring metrics such as response time, throughput, and error rate. All these tools have graphical user interfaces or scripting interfaces for easy use.",
      description:
      "In addition to these tools, integration with CI/CD pipelines is essential for maintaining a robust development and testing workflow. Validating your Java web services within a CI/CD environment helps catch issues early and ensures a streamlined deployment process."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "Being a tech enthusiast always eager to learn and share myy knowledge among my peers."
  ),

  talks: [
    {
      title: "Unlocking Freelancing Success.",
      subtitle: "Kickstart your Career.Way to freedom!",
      event_url: "https://media.licdn.com/dms/image/D4D22AQE49DdPZ5dzeg/feedshare-shrink_1280/0/1697445913731?e=1707350400&v=beta&t=oYddLJorqK1qx7k3AE9T28QppeLdcTiYVlDhoqZJtIQ",
      slides_url:"https://docs.google.com/presentation/d/1EG0ksb3eFSpSE3sZ1wg--3kb4tCV1hiY/edit?usp=sharing&ouid=110650691660439408790&rtpof=true&sd=true"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3077963751",
  email_address: "rasheedrayan514@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
