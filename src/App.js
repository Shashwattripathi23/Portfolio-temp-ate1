import { profile } from "./data/Data";
import "./App.css";
import random from "./data/random.png";
import dp from "./data/dp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Document, Page } from "react-pdf";
import coffee from "./data/coffee.png";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import working from "./data/working2.png";

import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

let originalStates = [];

library.add(faLinkedin);
library.add(faGithub);

function App() {
  const pdfUrl = "./data/siddhi.pdf";
  const setOriginalStates = () => {
    for (let i = 0; i < originalStates.length; i++) {
      let element = originalStates[i].first;
      let style = originalStates[i].second.first;
      let value = originalStates[i].second.second;
      document.getElementById(element).style[style] = value;
      // console.log(element, style, value);
    }
  };

  const pushElement = (element, style, value) => {
    originalStates.push({
      first: element,
      second: { first: style, second: value },
    });
  };

  const Home = () => {
    setOriginalStates();
    const Pink = document.getElementById("pink");
    const Black1 = document.getElementById("black1");
    const Black2 = document.getElementById("black2");
    const Name = document.getElementById("name");
    const position = document.getElementById("position");
    const Dp = document.getElementById("dp");
    const About = document.getElementById("about");

    const ExperiencePreview = document.getElementById("experiencePreview");
    const Profiles = document.getElementById("profiles");
    let Rimage = document.getElementById("Rimage");
    const github = document.getElementById("github");
    const linkedin = document.getElementById("linkedin");
    document.getElementById("black1").style.transform = "translateX(0)";
    document.getElementById("pink").style.transform = "translateX(0)";
    document.getElementById("pink").style.width = "30%";
    document.getElementById("black2").style.transform = "translateX(0)";
    document.getElementById("black2").style.width = "45%";
    pushElement("pink", "transform", Pink.style.transform);
    pushElement("name", "opacity", Name.style.opacity);
    pushElement("position", "opacity", position.style.opacity);
    pushElement("dp", "opacity", Dp.style.opacity);
    pushElement("dp", "transform", Dp.style.transform);
    pushElement("about", "opacity", About.style.opacity);
    pushElement("Rimage", "opacity", Rimage.style.opacity);
    pushElement("Rimage", "transform", Rimage.style.transform);
    pushElement("profiles", "opacity", Profiles.style.opacity);
    pushElement("profiles", "transform", Profiles.style.transform);
    pushElement("github", "opacity", github.style.opacity);
    pushElement("github", "transform", github.style.transform);
    pushElement("github", "display", github.style.display);
    
    pushElement("linkedin", "opacity", linkedin.style.opacity);
    pushElement("linkedin", "transform", linkedin.style.transform);
    pushElement("linkedin", "display", linkedin.style.display);
    pushElement(
      "experiencePreview",
      "opacity",
      ExperiencePreview.style.opacity
    );
    pushElement(
      "experiencePreview",
      "transform",
      ExperiencePreview.style.transform
    );
    setTimeout(() => {
      document.getElementById("name").style.opacity = 1;
    }, 300);
    setTimeout(() => {
      document.getElementById("position").style.opacity = 1;
    }, 600);
    setTimeout(() => {
      document.getElementById("dp").style.opacity = 1;
      document.getElementById("dp").style.transform = "translateY(0)";

      document.getElementById("about").style.opacity = 1;

      document.getElementById("Rimage").style.opacity = 1;
      document.getElementById("Rimage").style.transform = "translateX(0)";

      document.getElementById("experiencePreview").style.opacity = 1;
      document.getElementById("experiencePreview").transform = "translateY(0)";
    }, 900);
    setTimeout(() => {
      document.getElementById("github").style.opacity = 1;
      document.getElementById("linkedin").style.opacity = 1;
      document.getElementById("github").style.transform = "translateY(0)";
      document.getElementById("linkedin").style.transform = "translateY(0)";
      document.getElementById("github").style.display = "flex";
      document.getElementById("linkedin").style.display = "flex";
    }, 1100);

    // console.log(originalStates);
  };
  const Resume = () => {
    setOriginalStates();
    document.getElementById("black1").style.transform = "translateX(-100%)";
    document.getElementById("pink").style.transform = "translateX(-150%)";
    // document.getElementById("pink").style.width = "10%";
    document.getElementById("black2").style.transform = "translateX(-50%)";
    document.getElementById("black2").style.width = "90%";

    const ResumeHeading = document.getElementById("resumeHeading");
    const Download = document.getElementById("download");
    const ProfilesResume = document.getElementById("profilesResume");
    const githubR = document.getElementById("githubR");
    const linkedinR = document.getElementById("linkedinR");
    const resumepdf = document.getElementById("resumepdf");
    pushElement("resumeHeading", "opacity", ResumeHeading.style.opacity);
    pushElement("resumeHeading", "transform", ResumeHeading.style.transform);
    pushElement("download", "opacity", Download.style.opacity);
    pushElement("profilesResume", "opacity", ProfilesResume.style.opacity);
    pushElement("profilesResume", "transform", ProfilesResume.style.transform);
    pushElement("githubR", "opacity", githubR.style.opacity);
    pushElement("githubR", "transform", githubR.style.transform);
    pushElement("linkedinR", "opacity", linkedinR.style.opacity);
    pushElement("linkedinR", "transform", linkedinR.style.transform);
    pushElement("download", "opacity", Download.style.opacity);
    pushElement("download", "transform", Download.style.transform);
    pushElement("download", "display", Download.style.display);

    pushElement("linkedinR", "opacity", linkedinR.style.opacity);
    pushElement("githubR", "opacity", githubR.style.opacity);
    pushElement("linkedinR", "display", linkedinR.style.display);
    pushElement("githubR", "display", githubR.style.display);
    pushElement("githubR", "transform", githubR.style.transform);
    pushElement("linkedinR", "transform", linkedinR.style.transform);

    setTimeout(() => {
      document.getElementById("resumeHeading").style.opacity = 1;
      document.getElementById("resumeHeading").style.transform =
        "Rotate(-90deg) translateX(0)";
    }, 300);
    pushElement("resumepdf", "opacity", resumepdf.style.opacity);
    pushElement("resumepdf", "transform", resumepdf.style.transform);
    setTimeout(() => {
      resumepdf.style.opacity = 1;
      resumepdf.style.transform = "translateY(0)";
      githubR.style.opacity = 1;
      linkedinR.style.opacity = 1;
      githubR.style.transform = "translateY(0%)";
      linkedinR.style.transform = "translateY(0%)";
      githubR.style.display = "flex";
      linkedinR.style.display = "flex";
    }, 600);
    setTimeout(() => {
      Download.style.opacity = 1;
      Download.style.transform = "translateY(0%)";
      Download.style.display = "flex";
    }, 800);
  };

  const Experience = () => {
    console.log(profile);
    setOriginalStates();
    document.getElementById("pink").style.transform = "translateX(135%)";
    document.getElementById("pink").style.width = "25%";
    document.getElementById("black2").style.transform = "translateX(50%)";
    document.getElementById("black2").style.width = "90%";
    const ExperiencePreview = document.getElementById("experiencePreview");
    const Profiles = document.getElementById("profiles");
    const working = document.getElementById("working");
    const LinkedInE = document.getElementById("linkedinE");
    const GithubE = document.getElementById("githubE");
    const nextE = document.getElementById("nextE");
    const prevE = document.getElementById("prevE");
    const expContent = document.getElementById("expContent");
    const expHeading = document.getElementById("expHeading");

    pushElement(
      "experiencePreview",
      "opacity",
      ExperiencePreview.style.opacity
    );
    pushElement(
      "experiencePreview",
      "transform",
      ExperiencePreview.style.transform
    );

    pushElement("working", "opacity", working.style.opacity);
    pushElement("working", "transform", working.style.transform);
    pushElement("linkedinE", "opacity", LinkedInE.style.opacity);
    pushElement("linkedinE", "transform", LinkedInE.style.transform);
    pushElement("githubE", "opacity", GithubE.style.opacity);
    pushElement("githubE", "transform", GithubE.style.transform);
    pushElement("nextE", "opacity", nextE.style.opacity);
    pushElement("nextE", "transform", nextE.style.transform);
    pushElement("prevE", "opacity", prevE.style.opacity);
    pushElement("prevE", "transform", prevE.style.transform);
    pushElement("expContent", "opacity", expContent.style.opacity);
    pushElement("expContent", "transform", expContent.style.transform);
    pushElement("expHeading", "opacity", expHeading.style.opacity);
    pushElement("expHeading", "transform", expHeading.style.transform);
    setTimeout(() => {
      document.getElementById("expHeading").style.opacity = 1;
      document.getElementById("expHeading").style.transform = "translateX(0)";
    }, 300);

    setTimeout(() => {
      document.getElementById("working").style.opacity = 1;
      document.getElementById("working").style.transform = "translateY(0)";
    }, 900);
    setTimeout(() => {
      document.getElementById("linkedinE").style.opacity = 1;
      document.getElementById("githubE").style.opacity = 1;
      document.getElementById("linkedinE").style.transform = "translateY(0)";
      document.getElementById("githubE").style.transform = "translateY(0)";
    }, 1100);
    setTimeout(() => {
      document.getElementById("nextE").style.opacity = 1;
      document.getElementById("prevE").style.opacity = 1;
      document.getElementById("nextE").style.transform = "translateY(0)";
      document.getElementById("prevE").style.transform = "translateY(0)";
      document.getElementById("expContent").style.opacity = 1;
      document.getElementById("expContent").style.transform = "translateY(0)";
    }, 1300);
  };

  const Projects = () => {
    setOriginalStates();
    document.getElementById("pink").style.transform = "translateX(200%)";

    document.getElementById("pink").style.transform =
      "translateX(240%) rotate(45deg) translateY(50%)";

    // document.getElementById("pink").style.transform ="Rotate(45deg)";
    document.getElementById("pink").style.width = "30%";
    document.getElementById("black2").style.display = "none";
    const Projects = document.getElementById("projectsCarousal");
    const ProjHeading = document.getElementById("projectsHeading");
    const projNavs  = document.getElementById("projNavs");
    const githubP = document.getElementById("githubP");
    const linkedinP = document.getElementById("linkedinP");

    pushElement("projectsCarousal", "opacity", Projects.style.opacity);
    pushElement("projectsCarousal", "transform", Projects.style.transform);
    pushElement("projectsHeading", "opacity", ProjHeading.style.opacity);
    pushElement("projectsHeading", "transform", ProjHeading.style.transform);
    pushElement("projNavs", "opacity", projNavs.style.opacity);

    pushElement("githubP", "opacity", githubP.style.opacity);
    pushElement("githubP", "transform", githubP.style.transform);
    pushElement("linkedinP", "opacity", linkedinP.style.opacity);
    pushElement("linkedinP", "transform", linkedinP.style.transform);
    
    setTimeout(() => {
      document.getElementById("projectsHeading").style.opacity = 1;
      document.getElementById("projectsHeading").style.transform = "translateX(0)";
    }
    ,300);
    setTimeout(() => {
      document.getElementById("projectsCarousal").style.opacity = 1;
      document.getElementById("projectsCarousal").style.transform = "translateY(0)";
    }, 600);
    setTimeout(() => {
      document.getElementById("projNavs").style.opacity = 1;
    }, 900);
    setTimeout(() => {
      document.getElementById("githubP").style.opacity = 1;
      document.getElementById("linkedinP").style.opacity = 1;
      document.getElementById("githubP").style.transform = "translateY(0)";
      document.getElementById("linkedinP").style.transform = "translateY(0)";
    }, 1100);


  };
  const [prevIndex, setPrevIndex] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  const [experience, setExperience] = useState(
    profile.experience.map((exp) => {
      return {
        company: exp.company,
        role: exp.role,
        duration: exp.duration,
        location: exp.location,
        responsibilities: exp.responsibilities,
      };
    })
  );
  const [expIndex, setExpIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const handleNext = () => {
    setDirection("right");
    setExpIndex((prev) => (prev + 1) % experience.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setExpIndex((prev) => (prev === 0 ? experience.length - 1 : prev - 1));
  };
  const [jobEntries, setJobEntries] = useState([
    {
      "title": "Amazon",
      "description": "Designed and implemented responsive user interfaces using React.js, ensuring cross-platform compatibility and enhanced user experience."
    },
    {
      "title": "HackerRank",
      "description": "Participated in algorithm challenges and coding contests, improving problem-solving skills and achieving high rankings."
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeEntry = (direction) => {
    if (direction === "up") {
      setCurrentIndex(
        currentIndex === 0 ? jobEntries.length - 1 : currentIndex - 1
      );
    } else if (direction === "down") {
      setCurrentIndex(
        currentIndex === jobEntries.length - 1 ? 0 : currentIndex + 1
      );
    }
  };

  const projects = profile.projects.map((proj) => {
    return {
      title: proj.title,
      description: proj.description,
      techStack: proj.techStack,
      github: proj.github,
      demo: proj.demo,
    };
  });
  const [currentProjIndex, setCurrentProjIndex] = useState(0);

  const handleProjPrev = () => {
    setCurrentProjIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleProjNext = () => {
    setCurrentProjIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    Home();
  }, []);

  const handleClick = () => {
    setShowIcons(!showIcons);
  };

  // document.addEventListener("mousemove", (e) => {
  //   let cursor = document.getElementById("cursor");
  

  //   requestAnimationFrame(() => {
  //     cursor.style.top = e.pageY - 18+ "px";
  //     cursor.style.left = e.pageX -18 + "px";
  //   });
  // });
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenWidth = () => {
    setIsMobile(window.innerWidth < 1200);
  };

  useEffect(() => {
    checkScreenWidth(); 
    window.addEventListener('resize', checkScreenWidth); // Check on resize

    return () => {
      window.removeEventListener('resize', checkScreenWidth); // Clean up event listener
    };
  }, []);

  if (isMobile) {
    return (
      <div>
        <h1
          style={{
            color: "white",
            fontFamily: "Cyntho Next Bold",
            fontSize: "2rem",
            textAlign: "center",
            padding: "20px",
          }}
        >
          Please view this page on a larger screen
        </h1>
      </div>
    );
  }


  return (
    <div className="App">
      {/* <div
      id="cursor"
      style={{
        position: "absolute",
        width: "35px",
        height: "35px",
        // background: "white",
        borderRadius: "50%",
        zIndex: 1000,
        pointerEvents: "none",
        // display: "none",
        top: "0",
        left: "0",
        zIndex: 10000,
        border: "2px solid white",
        // backgroundColor: "white",
      }}
      >

      </div> */}
    

      <div>
      <div
        id="black1"
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          width: "25%",
          height: "100vh",
          background: "#191919",
          transition: "transform 0.5s ease  ",
        }}
      ></div>
      <div
        id="pink"
        style={{
          position: "absolute",
          top: "0%",
          left: "25%",
          width: "30%",
          height: "140vh",
          background:
            "linear-gradient(to bottom, #db6b6b 25%,rgb(160, 53, 53) 100%)",
          transition: "transform 0.5s ease",
        }}
      ></div>
      <div
        id="black2"
        style={{
          position: "absolute",
          top: "0%",
          left: "55%",
          width: "45%",
          height: "100vh",
          background: "#191919",
          transition: "transform 0.5s ease",
        }}
      ></div>

      <div
        id="name"
        style={{
          position: "absolute",
          top: "10%",
          left: "12%",
          fontFamily: "Cyntho Next Bold",
          fontWeight: "bold",
          color: "#eaeaea",
          fontSize: "6vw",
          textAlign: "center",
          lineHeight: "50px",
          opacity: 0,
          transition: "opacity 0.5s ease",
          textShadow: "5px 10px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        {profile.personalInfo.name.split(" ")[0]}
      </div>
      <div
        id="position"
        style={{
          position: "absolute",
          top: "20%",
          left: "12%",
          fontFamily: "Cyntho Next",

          color: "#eaeaea",
          fontSize: "2.5vw",
          textAlign: "center",
          lineHeight: "50px",
          opacity: 0,
          transition: "opacity 0.5s ease",
          textShadow: "5px 10px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        Software developer
      </div>
      <img
        id="Rimage"
        src={random} // Pass the image directly here
        alt="Profile"
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "40%",
          height: "40%",
          borderRadius: "0%",
          boxShadow: "0px 10px 50px 5px rgba(25, 25, 25, 0.77)",
          transform: "translateX(50%)",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
        }}
      />
      <div>
        <FontAwesomeIcon
          icon={faBars}
          style={{
            fontSize: "2rem",
            color: "#fff",
            position: "absolute",
            top: "7%",
            right: "5%",
            cursor: "pointer",
          }}
          onClick={handleClick}
        />
        <div
          style={{
            position: "absolute",
            top: showIcons ? "6.5%" : "9%", // Start below and animate up
            right: "10%",
            opacity: showIcons ? 1 : 0,
            width: "20%",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",

            transition: "top 0.3s ease, opacity 0.5s ease", // Animate top and opacity
          }}
        >
          <div
            style={{
              fontFamily: "Cyntho Next",
              cursor: "pointer",
              paddingRight: "20px",
            }}
            onClick={Home}
          >
            Home
          </div>
          <div
            style={{
              fontFamily: "Cyntho Next",
              cursor: "pointer",
              paddingRight: "20px",
            }}
            onClick={Resume}
          >
            Resume
          </div>

          <div
            style={{
              fontFamily: "Cyntho Next",
              cursor: "pointer",
              paddingRight: "20px",
            }}
            onClick={Experience}
          >
            Experience
          </div>
          <div
            style={{
              fontFamily: "Cyntho Next",
              cursor: "pointer",
              paddingRight: "20px",
            }}
            onClick={Projects}
          >
            Projects
          </div>
        </div>
      </div>
      <img
        id="dp"
        src={dp}
        alt="dp"
        style={{
          position: "absolute",
          bottom: "0%",
          left: "25%",
          width: "20%",
          height: "40%",
          borderRadius: "0%",
          filter: "drop-shadow(5px 10px 20px rgb(25, 25, 25))",
          transform: "translateY(50%)",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
        }}
      />
      <div
        id="about"
        style={{
          opacity: 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <img
          src={coffee}
          alt="coffee"
          style={{
            position: "absolute",
            bottom: "35%",
            left: "12%",
            width: "4%",
            height: "8%",
            borderRadius: "0%",
            filter: "drop-shadow(5px 10px 20px rgb(25, 25, 25))",
          }}
        />
        <h1
          style={{
            position: "absolute",
            bottom: "28%",
            left: "12%",
            fontFamily: "Cyntho Next Bold",
            color: "white",
            fontSize: "0.9vw",
            textAlign: "center",
            lineHeight: "50px",
            filter: "drop-shadow(5px 10px 20px rgb(25, 25, 25))",
          }}
        >
          ABOUT ME
        </h1>

        <h3
          style={{
            position: "absolute",
            bottom: "15%",
            left: "12%",
            fontFamily: "Cyntho Next",
            color: "#eaeaea",
            fontSize: "0.8vw",
            textAlign: "left",
            lineHeight: "20px",
            width: "10%",
            filter: "drop-shadow(5px 10px 20px rgb(25, 25, 25))",
          }}
        >
          I am a software developer with a passion for creating innovative
          solutions to complex problems.I am a quick learner and a team player.
        </h3>
        <h3
          style={{
            position: "absolute",
            bottom: "8%",
            left: "12%",
            fontFamily: "Cyntho Next ",
            color: "#eaeaea",
            fontSize: "0.8vw",
            textAlign: "left",
            lineHeight: "20px",
            width: "10%",
            filter: "drop-shadow(5px 10px 20px rgb(25, 25, 25))",
          }}
        >
          I am open to working on new projects.{" "}
          <span
            style={{
              color: "#00b2ff",
              cursor: "pointer",
              fontFamily: "Cyntho Next Bold ",
            }}
          >
            Contact me
          </span>
        </h3>
      </div>
      <div
        id="experiencePreview"
        style={{
          position: "absolute",
          width: "400px",
          margin: "0 auto",
          textAlign: "center",
          right: "20%",
          bottom: "35%",
          // background: "#db6b6b",
          height: "auto",
          padding: "20px",
          borderRadius: "10px",
          opacity: 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <div
          style={{
            position: "relative",
            transition: "transform 0.5s ease", // Smooth sliding animation
            // transform: `translateY(-${(currentIndex-1) * 100}%)`, // Move the content based on index
          }}
        >
          {jobEntries.map((entry, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                color: "white",

                opacity: currentIndex === index ? 1 : 0,
                transform:
                  currentIndex === index ? "translateY(0)" : "translateY(45px)",
                transition: "transform  0.5s ease , opacity 0.5s linear",
                alignItems: "left",
                width: "100%",
              }}
            >
              <h3
                style={{
                  fontFamily: "Cyntho Next Bold",
                  color: "#eaeaea",
                  fontSize: "1.5vw",
                  textAlign: "left",
                }}
              >
                {entry.title}
              </h3>
              <p
                style={{
                  fontFamily: "Cyntho Next",
                  color: "#eaeaea",
                  fontSize: "0.8vw",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {entry.description}
              </p>
            </div>
          ))}
        </div>

        {/* Arrows to change the entry */}
        <div
          style={{
            top: "105%",
            right: "-225px",
            width: "50px",
            height: "120px",
            display: "flex",

            position: "absolute",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",

            borderRadius: "10px",
          }}
        >
          <FontAwesomeIcon
            icon={faArrowUp}
            style={{
              fontSize: "1.8rem",
              cursor: "pointer",
              color: "#007bff",
            }}
            onClick={() => changeEntry("up")}
          />
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{
              fontSize: "1.8rem",
              cursor: "pointer",
              color: "#007bff",
            }}
            onClick={() => changeEntry("down")}
          />
        </div>
      </div>
      <div
        id="profiles"
        style={{
          opacity: 1,
        }}
      >
        <div
          id="github"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "32%",
            width: "10%",
            height: "6%",
            background: "#2b2b2b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            cursor: "pointer",
            transform: "translateY(50%)",
            opacity: 0,
            display:"none",
            zIndex: 1000,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          onClick={() => {
            window.open("https://github.com/Siddhi-Gubrele", "_blank");
          }
          }

        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "8px", // Space between icon and text
            }}
          />
          <span
            style={{
              color: "#eaeaea",
              fontFamily: "Cyntho Next",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            GitHub
          </span>
        </div>
        <div
          id="linkedin"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "20%",
            width: "10%",
            height: "6%",
            background: "linear-gradient(90deg, #0077B5, #005582)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            cursor: "pointer",
            transform: "translateY(50%)",
            display:"none",
            opacity: 0,
            zIndex: 1000,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          onClick={() => {
            window.open("https://www.linkedin.com/in/siddhi-gubrele-046098248/", "_blank");
          }
          }
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "8px",
            }}
          />
          <span
            style={{
              color: "#eaeaea",
              fontFamily: "Cyntho Next",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            LinkedIn
          </span>
        </div>
      </div>
      <h1
        id="resumeHeading"
        style={{
          position: "absolute",
          bottom: "35%",
          left: "-11%",
          fontFamily: "Cyntho Next Bold",
          color: "white",
          fontSize: "8vw",
          textAlign: "center",
          lineHeight: "50px",
          opacity: 0,
          transition: "opacity 0.5s ease, transform 0.5s ease",
          transform: "Rotate(-90deg) translateX(-50%)",
          textShadow: "5px 10px 20px rgba(0, 0, 0, 0.5)", // Corrected property
        }}
      >
        Resume
      </h1>
      <div
       
      >
        <FontAwesomeIcon
          icon={faDownload}
          style={{
            fontSize: "1.6rem",
            cursor: "pointer",
            color: "#eaeaea",
            position: "absolute",
            bottom: "8.5%",
            right: "25%",
            opacity: 0,
            display:"none",
            zIndex: 1000,
            transform: "translateY(-150%)",
          }}
          id="download"
          onClick={() => {
            // Add your download logic here
            const filePath = "/data/siddhi.pdf";
    
    // Try opening the file in a new window
    window.open(filePath, "_blank");
          
          }}
        />
      </div>
      <div id="profilesResume">
        <div
          id="githubR"
          style={{
            position: "absolute",
            bottom: "7%",
            right: "14%",
            width: "10%",
            height: "6%",
            background: "#2b2b2b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            cursor: "pointer",
            transform: "translateY(-50%)",
            opacity: 0,
            display:"none",
            zIndex: 1000,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          onClick={() => {
            window.open("https://github.com/Siddhi-Gubrele", "_blank");
          }
          }

        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "8px", // Space between icon and text
            }}
          />
          <span
            style={{
              color: "#eaeaea",
              fontFamily: "Cyntho Next",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            GitHub
          </span>
        </div>
        <div
          id="linkedinR"
          style={{
            position: "absolute",
            bottom: "7%",
            right: "3%",
            
            width: "10%",
            height: "6%",
            background: "linear-gradient(90deg, #0077B5, #005582)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            cursor: "pointer",
            display:"none",
            transform: "translateY(-50%)",
            opacity: 0,
            zIndex: 1000,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          onClick={() => {
            window.open("https://www.linkedin.com/in/siddhi-gubrele-046098248/", "_blank");
          }
          }
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "8px",
            }}
          />
          <span
            style={{
              color: "#eaeaea",
              fontFamily: "Cyntho Next",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            LinkedIn
          </span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "85.15vh",
          zIndex: 1000,
          position: "absolute",
          width: "35%",
          top: "5%",
          right: "32%",
          // border: "2px solid gray", // Border for the container
          borderRadius: "8px",
          padding: "10px",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
          transform: "translateY(-50%)",
        }}
        id="resumepdf"
      >
        <div style={{ flex: 1 }}>
          <iframe
            src="/data/siddhi.pdf#page=2&zoom=cover&toolbar=0"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              overflowX: "hidden",
            }}
            title="PDF Viewer"
          />
        </div>
      </div>
      <img
        id="working"
        src={working}
        style={{
          position: "absolute",
          bottom: "0%",
          left: "59%",
          width: "25%",
          height: "30%",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
          zIndex: 180,
          transform: "translateY(-50%)",
        }}
      />
      <h1
        id="expHeading"
        style={{
          position: "absolute",
          top: "5%",
          left: "56.5%",
          fontFamily: "Cyntho Next Bold",
          color: "white",
          fontSize: "5.5vw",
          textAlign: "center",
          lineHeight: "50px",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
          textShadow: "5px 10px 20px rgba(0, 0, 0, 0.5)",
          transform: "translateX(-50%)",
        }}
      >
        Experience
      </h1>

      <div
        id="expContent"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",

          width: "50%",
          margin: "auto",
          overflow: "hidden",
          height: "80%",
          transform: "translateY(-50%)",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(${
              direction === "right" ? -expIndex * 100 : -expIndex * 100
            }%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {experience.map((exp, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%",
                textAlign: "left",
                padding: "20px",
                boxSizing: "border-box",
                // backgroundColor: "#191919",
                color: "#eaeaea",
                borderRadius: "10px",
                opacity: expIndex === index ? 1 : 0,
                transition: "opacity 0.5s ease",
                // overflow: "hidden",
              }}
            >
              <h3
                style={{
                  fontFamily: "Cyntho Next Bold",
                  fontSize: "2.8vw",
                  marginBottom: "20px",
                }}
              >
                {exp.company}
              </h3>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  fontSize: "1.6vw",
                }}
              >
                <span>{exp.role}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "start",
                  fontSize: "1.6vw",
                  // border: "2px solid black",
                  marginTop: "20px",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.8vw",
                    // position: "absolute",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    style={{
                      marginRight: "15px",
                      fontSize: "0.8vw",
                      // marginLeft:"7.5vw
                    }}
                  />
                  {exp.duration}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "0.8vw",
                    marginLeft: "2.5vw",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    style={{ marginRight: "15px" }}
                  />
                  {exp.location}
                </span>
              </div>
              <ul
                style={{
                  marginTop: "70px",
                  fontSize: "1vw",
                  lineHeight: "1.5",
                  marginLeft: "-20px",
                }}
              >
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        id="prevE"
        style={{
          position: "absolute",

          left: "30px",
          opacity: 1,
          top: "45%",
          transform: "translateY(-50%)",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
          cursor: "pointer",
          zIndex: 1000,
        }}
        onClick={handlePrev}
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{
            fontSize: "2rem",
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "10px",
            color: "#191919",
            display: expIndex === 0 ? "none" : "block",
          }}
        />
      </div>
      <div
        id="nextE"
        style={{
          position: "absolute",

          top: "45%",
          left: "55%",
          cursor: "pointer",
          zIndex: 1000,
          transform: "translateY(-50%)",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",

          display: expIndex === experience.length - 1 ? "none" : "block",
        }}
        onClick={handleNext}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{
            fontSize: "2rem",
            backgroundColor: "#fff",
            borderRadius: "50%",
            padding: "10px",
            color: "#191919",
          }}
        />
      </div>

      <div id="profileEx">
        <div
          id="githubE"
          style={{
            position: "absolute",
            bottom: "7%",
            left: "17%",
            width: "10%",
            height: "6%",
            background: "#2b2b2b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            cursor: "pointer",
            transform: "translateX(-150%)",
            opacity: 0,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          onClick={() => {
            window.open("https://github.com/Siddhi-Gubrele", "_blank");
          }
          }

        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "8px", // Space between icon and text
            }}
          />
          <span
            style={{
              color: "#eaeaea",
              fontFamily: "Cyntho Next",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            GitHub
          </span>
        </div>
        <div
          id="linkedinE"
          style={{
            position: "absolute",
            bottom: "7%",
            left: "6%",
            width: "10%",
            height: "6%",
            background: "linear-gradient(90deg, #0077B5, #005582)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            cursor: "pointer",
            transform: "translateX(-150%)",
            opacity: 0,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
          onClick={() => {
            window.open("https://www.linkedin.com/in/siddhi-gubrele-046098248/", "_blank");
          }
          }
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            style={{
              color: "white",
              fontSize: "1.5rem",
              marginRight: "8px",
            }}
          />
          <span
            style={{
              color: "#eaeaea",
              fontFamily: "Cyntho Next",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            LinkedIn
          </span>
        </div>
      </div>
      <h1
        id="projectsHeading"
        style={{
          position: "absolute",
          bottom: "6%",
          right: "3.5%",
          fontFamily: "Cyntho Next Bold",
          color: "white",
          fontSize: "5.5vw",
          textAlign: "center",
          lineHeight: "50px",
          opacity: 0,
          zIndex: 1000,
          transition: "opacity 0.5s ease , transform 0.5s ease",
          textShadow: "5px 10px 20px rgba(0, 0, 0, 0.5)",
          transform: "translatey(100%)",

        }}
      >
        Projects
      </h1>
      <div
        id="projectsCarousal"
        style={{
          position: "absolute",
          top: "12%", // Center vertically
          left: "20%", // Center horizontally
          // transform: "translate(-50%, -50%)", // Adjust alignment
          width: "60%",
          height: "70%",
          margin: "auto",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
          transform: "translateY(50%)",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 1.0s ease",
            transform: `translateX(-${currentProjIndex * 100}%)`,
            height: "100%",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                minWidth: "95%",
                marginLeft: "1%",
                padding: "20px",
                textAlign: "center",
                height: "94%",
                borderRadius: "60px",
                background: "rgba(135, 133, 133, 0.11)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0)",
                backdropFilter: "blur(5px)", // Add some blur for a glass effect
                color: "#fff",
                transform: `${
                  index === currentProjIndex ? "scale(1)" : "scale(0.6)"
                }`,
                transition: "transform 1.0s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <h3
                style={{
                  fontSize: "3vw",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  fontFamily: "Cyntho Next ",
                }}
              >
                {project.title}
              </h3>

              <ul
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "20px",
                  paddingLeft: "20px",
                  textAlign: "left",
                  fontFamily: "Cyntho Next",
                  lineHeight: "2",
                }}
              >
                {Array.isArray(project.description) ? (
                  project.description.map((desc, descIndex) => (
                    <li key={descIndex} style={{ marginBottom: "10px" }}>
                      {desc}
                    </li>
                  ))
                ) : (
                  <li>{project.description}</li>
                )}
              </ul>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                {project.techStack.map((tech, techIndex) => {
                  const techIconMap = {
                    nodejs: "https://nodejs.org/static/images/logo.svg", // Node.js Logo
                    mongodb: "https://www.svgrepo.com/show/331488/mongodb.svg", // MongoDB Logo
                    express:
                      "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", // Express.js Logo
                    // Add more mappings if needed
                  };

                  const normalizedTech = tech.toLowerCase(); // Normalize tech to lowercase
                  const iconSrc =
                    techIconMap[normalizedTech] ||
                    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${normalizedTech}/${normalizedTech}-original.svg`;

                  return (
                    <img
                      key={techIndex}
                      src={iconSrc}
                      alt={tech}
                      title={tech}
                      style={{ width: "40px", height: "40px" }}
                      onError={(e) => (e.target.style.display = "none")} // Hide if image fails to load
                    />
                  );
                })}
              </div>

              {/* GitHub and Demo Links */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #4e5b6e, #6f7c8e)", // Muted gradient
                    padding: "10px 20px",
                    borderRadius: "20px",
                    fontFamily: "Cyntho Next",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ fontSize: "1.2rem" }}
                  />{" "}
                  {/* GitHub Icon */}
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "bold",
                    background:
                      "linear-gradient(to right,rgb(239, 110, 155),rgb(113, 23, 47))  ",
                    padding: "10px 20px",
                    borderRadius: "20px",
                    fontFamily: "Cyntho Next",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faLink}
                    style={{ fontSize: "1.2rem" }}
                  />{" "}
                  {/* Demo Icon */}
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
      id="projNavs"
      style={
        {opacity: 0,
        transition: "opacity 0.5s ease , transform 0.5s ease",
        // transform: "translateY(10%)",


        }
      }
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "250px",
            transform: "translateY(-50%)",
            cursor: "pointer",
            display: currentProjIndex === 0 ? "none" : "block",
          }}
          onClick={handleProjPrev}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{
              fontSize: "2rem",
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "10px",
              color: "#191919",
              display: currentProjIndex === 0 ? "none" : "block",
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "250px",
            transform: "translateY(-50%)",
            cursor: "pointer",
            display:
              currentProjIndex === projects.length - 1 ? "none" : "block",
          }}
          onClick={handleProjNext}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              fontSize: "2rem",
              backgroundColor: "#fff",
              borderRadius: "50%",
              padding: "10px",
              color: "#191919",
            }}
          />
        </div>
      </div>

      <div
        id="githubP"
        style={{
          position: "absolute",
          bottom: "7%",
          left: "15%",
          width: "10%",
          height: "6%",
          background: "#2b2b2b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "15px",
          cursor: "pointer",
          transform: "translateX(-150%)",
          opacity: 0,
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        onClick={() => {
          window.open("https://github.com/Siddhi-Gubrele", "_blank");
        }
        }

      >
        <FontAwesomeIcon
          icon={["fab", "github"]}
          style={{
            color: "white",
            fontSize: "1.5rem",
            marginRight: "8px", // Space between icon and text
          }}
        />
        <span
          style={{
            color: "#eaeaea",
            fontFamily: "Cyntho Next",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          GitHub
        </span>
      </div>
      <div
        id="linkedinP"
        style={{
          position: "absolute",
          bottom: "7%",
          left: "4%",
          width: "10%",
          height: "6%",
          background: "linear-gradient(90deg, #0077B5, #005582)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "15px",
          cursor: "pointer",
          transform: "translateX(-150%)",
          opacity: 0,
          transition: "opacity 0.5s ease, transform 0.5s ease",
        }}
        onClick={() => {
          window.open("https://www.linkedin.com/in/siddhi-gubrele-046098248/", "_blank");
        }
        }
      >
        <FontAwesomeIcon
          icon={["fab", "linkedin"]}
          style={{
            color: "white",
            fontSize: "1.5rem",
            marginRight: "8px",
          }}
        />
        <span
          style={{
            color: "#eaeaea",
            fontFamily: "Cyntho Next",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          LinkedIn
        </span>
      </div>
    </div>
    </div>
  );
}

export default App;
