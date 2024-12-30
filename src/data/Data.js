const profile = {
    personalInfo: {
      name: "Siddhi Gubrele",
      email: "21bcs201@iiitdmj.ac.in",
      linkedin: "LinkedIn/Siddhi-Gubrele",
      github: "github/Siddhi-Gubrele"
    },
    education: [
      {
        institution: "PDPM Indian Institute Of Information Technology Design And Manufacturing",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        duration: "Dec. 2021 – Present",
        location: "Jabalpur, Madhya Pradesh"
      },
      {
        institution: "GVN The Global School Govindpura (BHEL)",
        qualification: "Class 12th CBSE",
        percentage: "90.02%",
        duration: "April, 2019 – 2021",
        location: "Bhopal, Madhya Pradesh"
      }
    ],
    experience: [
      {
        company: "Amazon Development Centre",
        role: "Software Developer Engineer Intern",
        duration: "May, 2024 – July, 2024",
        location: "Hyderabad, Telangana",
        responsibilities: [
          "Developed an independent full stack Voice of Customer User Research Tool to gather feedback from customers and integrated it into the customer purchase journey flow.",
          "Engineered a scalable and multifaceted DynamoDB database schema that improved data retrieval efficiency by 40%.",
          "Devised APIs in Java to decide if a customer should be shown the feedback widget based on metadata.",
          "Created feedback widget UI assets as a React-Native library, integrated with the existing SDK, and ensured it was 100% unit tested and fully functional."
        ]
      },
    
      {
        company: "HackerRank",
        role: "Software Development Engineer Intern",
        duration: "Jan, 2024 – Apr, 2024",
        location: "Remote",
        responsibilities: [
          "Designed and implemented new features for the core platform, improving user engagement by 25%.",
          "Refactored existing backend code in Node.js to enhance scalability and reduce response time by 30%.",
          "Developed automated unit and integration tests, achieving 95% code coverage across multiple modules.",
          "Collaborated with the product team to prototype and launch a gamification feature for coding challenges, increasing user retention by 20%."
        ]
      },
     
    ],
    
    projects :  [
      {
        title: "FocusMate",
        description: [
          "FocusMate is an intuitive task management and scheduling tool which is designed to help users organize, prioritize, and complete their daily tasks efficiently while simultaneously keeping track of unfinished tasks.",
          "Developed a responsive user interface with JavaScript, integrated seamlessly with Mongoose and MongoDB Atlas, leading to a 35% improvement in user data processing and querying speed.",
          "Incorporated Async/await and Promises to enhance its scalability, speed, and further making the code more efficient for handling asynchronous operations."
        ],
        techStack: [
          "JavaScript",
          "React",
          "Node.js",
          "Express.js",
          "MongoDB Atlas"
        ],
        github: "https://github.com/your-repo/focusmate",
        demo: "https://focusmate-demo.com"
      },
      {
        title: "Wanderlust: Book hotels anywhere",
        description: [
          "Built a website as part of a 3-person team that enables visitors to book a hotel room based on location, cost, and other factors as well as browse details about well-liked tourist sites in the neighborhood.",
          "Formulated the backend utilizing PHP and MySQL to operate on the database. Also, worked on 3 of the website’s pages."
        ],
        techStack: [
          "PHP",
          "MySQL",
          "Bootstrap",
          "JavaScript"
        ],
        github: "https://github.com/your-repo/wanderlust",
        demo: "https://wanderlust-demo.com"
      }
    ],
    technicalSkills: {
      languages: ["C++", "Python", "Java", "C", "TypeScript", "HTML/CSS", "JavaScript", "SQL"],
      frameworksDatabases: ["ReactJs", "React-Native", "NodeJs", "ExpressJs", "DynamoDB", "MongoDB", "Mongoose"],
      otherSkills: ["AWS Resources", "git", "github", "JUnit", "cloud-computing", "REST APIs", "CI-CD"]
    },
    codingProfiles: ["geeksforgeeks", "Leetcode"],
    relevantCoursework: [
      "Data Structures and Algorithms",
      "Operating System",
      "Object Oriented Programming",
      "DBMS",
      "SDLC"
    ],
    achievements: [
      {
        name: "Google Generation Scholar",
        organization: "Google",
        duration: "2023-24",
        details: [
          "Awarded the highly selective Generation Google Scholarship, recognizing outstanding women in computer science.",
          "Selected from a pool of over 5,000 applicants and received mentorship.",
          "Received a $2,500 USD scholarship award from Google."
        ]
      }
    ],
    leadershipExtracurricular: {
      positionsOfResponsibility: [
        {
          role: "Programming Guide",
          organization: "Programming Club",
          year: 2023,
          details: "Mentored a group of 15 juniors in coding."
        },
        {
          role: "Student Mentor",
          organization: "Counselling Committee",
          year: 2023,
          details: "Helped 10 girls with academic and personal problems."
        }
      ],
      extracurricularActivities: [
        {
          event: "Makeathon",
          organization: "American-Express",
          details: "Participated in a hackathon and developed a blockchain-based E-wallet with a voice bot using Node/Express for backend and MongoDB for data processing."
        },
        {
          event: "Intra College Hackathon",
          details: "Won the hackathon by developing a website that fetched real-time cryptocurrency data using Rapid API."
        }
      ]
    }
  };

  
    export { profile };