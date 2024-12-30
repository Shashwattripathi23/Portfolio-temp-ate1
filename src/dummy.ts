import { profile } from "./data/Data";
import "./App.css";
import random from "./data/random.png";
import dp from "./data/dp.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { Document, Page } from "react-pdf";
import coffee from "./data/coffee.png";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { faBars } from "@fortawesome/free-solid-svg-icons";

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
    pushElement("linkedin", "opacity", linkedin.style.opacity);
    pushElement("linkedin", "transform", linkedin.style.transform);
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
    pushElement("resumeHeading", "opacity", ResumeHeading.style.opacity);
    pushElement("resumeHeading", "transform", ResumeHeading.style.transform);
    pushElement("download", "opacity", Download.style.opacity);
    pushElement("profilesResume", "opacity", ProfilesResume.style.opacity);
    pushElement("profilesResume", "transform", ProfilesResume.style.transform);
    pushElement("githubR", "opacity", githubR.style.opacity);
    pushElement("githubR", "transform", githubR.style.transform);
    pushElement("linkedinR", "opacity", linkedinR.style.opacity);
    pushElement("linkedinR", "transform", linkedinR.style.transform);
    setTimeout(() => {
      document.getElementById("resumeHeading").style.opacity = 1;
      document.getElementById("resumeHeading").style.transform =
        "Rotate(-90deg) translateX(0)";
    }, 300);
  };

  const Experience = () => {
    document.getElementById("pink").style.transform = "translateX(100%)";
    document.getElementById("pink").style.width = "30%";
    document.getElementById("black2").style.transform = "translateX(50%)";
  };

  const Projects = () => {
    document.getElementById("pink").style.transform = "translateX(200%)";

    document.getElementById("pink").style.transform =
      "translateX(240%) rotate(45deg) translateY(50%)";

    // document.getElementById("pink").style.transform ="Rotate(45deg)";
    document.getElementById("pink").style.width = "30%";
    document.getElementById("black2").style.display = "none";
  };

  const [showIcons, setShowIcons] = useState(false);

  const [jobEntries, setJobEntries] = useState([
    {
      title: "NirogyaSaathi",
      description:
        "Built scalable backend APIs using Google Cloud, streamlined user authentication, and integrated health data management features.",
    },
    {
      title: "Amazon",
      description:
        "Designed and implemented responsive user interfaces using React.js, ensuring cross-platform compatibility and enhanced user experience.",
    },
    {
      title: "Google",
      description:
        "Developed RESTful APIs, optimized database queries, and improved server performance for faster data handling.",
    },
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

  useEffect(() => {
    Home();
  }, []);

  const handleClick = () => {
    setShowIcons(!showIcons);
  };
  return (
    <div className="App">
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
          background: "#db6b6b",
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
          fontFamily: "Cyntho Next Bold", // Use the correct font family name
          fontWeight: "bold",
          color: "#eaeaea",
          fontSize: "6vw",
          textAlign: "center",
          lineHeight: "50px",
          opacity: 0,
          transition: "opacity 0.5s ease",
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
          fontFamily: "Cyntho Next", // Use the correct font family name
          // fontWeight: "bold",
          color: "#eaeaea",
          fontSize: "2.5vw",
          textAlign: "center",
          lineHeight: "50px",
          opacity: 0,
          transition: "opacity 0.5s ease",
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
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
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
            opacity: 0,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
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
          fontFamily: "Cyntho Next",
          color: "white",
          fontSize: "8vw",
          textAlign: "center",
          lineHeight: "50px",
          opacity: 0,
          transition: "opacity 0.5s ease , transform 0.5s ease",
          transform: "Rotate(-90deg) translateX(-50%)",
        }}
      >
        Resume
      </h1>
      <div
        id="download"
        onClick={() => {
          // Add your download logic here
        }}
      >
        <FontAwesomeIcon
          icon={faDownload}
          style={{
            fontSize: "1.6rem",
            cursor: "pointer",
            color: "#eaeaea",
            position: "absolute",
            bottom: "8.5%",
            right: "22%",
          }}
        />
      </div>
      <div id="profilesResume">
        <div
          id="githubR"
          style={{
            position: "absolute",
            bottom: "10%",
            right: "12%",
            width: "8%",
            height: "6%",
            background: "#2b2b2b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            cursor: "pointer",
            transform: "translateY(50%)",
            // opacity: 0,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
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
            bottom: "10%",
            right: "3%",
            width: "8%",
            height: "6%",
            background: "linear-gradient(90deg, #0077B5, #005582)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "15px",
            cursor: "pointer",
            transform: "translateY(50%)",
            // opacity: 0,
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
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
      <div style={{ width: "100%", height: "100vh" }}>
      <iframe
      src="/data/siddhi.pdf#toolbar=0"
      style={{
        width: "auto", // Half the screen width
        height: "100%",
        border: "none",
      }}
      title="PDF Viewer"
    />
      </div>
    </div>
  );
}

export default App;
