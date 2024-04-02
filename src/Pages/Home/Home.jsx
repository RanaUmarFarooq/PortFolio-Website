import React from "react";
import styles from "./Home.module.css";
import avatar from "../../assets/avatar.png";
import hand from "../../assets/hand.png";
import data from "../../data.json";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import firebase from "../../assets/firebase.png";
import git from "../../assets/git.png";
const Home = () => {
  const { skills } = data;
  return (
    <div className={styles.container} id="home">
      {/* Main Content */}

      <div className={styles.content_section}>
        {/* Text Content */}

        <div className={styles.main_content}>
          <span className={styles.t_greeting}>
            Hi, <img src={hand} alt="emoji" className={styles.emoji} />{" "}
          </span>
          <p className={styles.name}>
            <span>I'm</span> {data.personalInformation.f_name}{" "}
            {data.personalInformation.l_name}
          </p>
          <p className={styles.headline}>{data.personalInformation.headline}</p>

          {/* Action Buttons */}

          <div className={styles.buttons_container}>
            <button className={`${styles.btn} ${styles.btn_work}`}>
              My Work
            </button>
            <button className={`${styles.btn} ${styles.btn_hire}`}>
              Hire Me
            </button>
          </div>
        </div>

        {/* Avatar  */}
        <div className={styles.avatar}>
          <img src={avatar} alt="avatar" className={styles.img} />
        </div>
      </div>

      {/* Skills Section */}
      <div className={styles.skills_section}>
        <p>Tech Stacks |</p>
        {skills.map((skill, index) => (
          <div className={styles.skill} key={index}>
            {renderIcon(skill.image)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
// Function to render icon based on image path
const renderIcon = (imagePath) => {
  switch (imagePath) {
    case "../../assets/html.png":
      return <img src={html} alt="HTML" className={styles.skill} />;
    case "../../assets/css.png":
      return <img src={css} alt="css" className={styles.skill} />;
    case "../../assets/javascript.png":
      return <img src={javascript} alt="javascript" className={styles.skill} />;
    case "../../assets/react.png":
      return <img src={react} alt="react" className={styles.skill} />;
    case "../../assets/tailwind.png":
      return <img src={tailwind} alt="tailwind" className={styles.skill} />;
    case "../../assets/firebase.png":
      return <img src={firebase} alt="firebase" className={styles.skill} />;
    case "../../assets/git.png":
      return <img src={git} alt="git" className={styles.skill} />;

    default:
      return null;
  }
};
