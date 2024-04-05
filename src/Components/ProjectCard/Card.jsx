import React from "react";
import styles from "./Card.module.css";
import project from "../../assets/project.jpg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
const Card = ({ project }) => {
  const { Img_link, title, description, Tags, project_no } = project;
  return (
    <div
      className={`${styles.container} ${
        project_no % 2 == 0 ? styles.reverse : ""
      } `}
    >
      <img src={Img_link} alt="project_img" className={styles.project_image} />
      <div className={styles.project_details}>
        <p className={styles.project_title}>{title}</p>
        <p className={styles.project_description}>{description}</p>
        <p className={styles.project_tags}>
          {Tags.map((tag, index) => (
            <span key={index} className={styles.tags}>
              {tag}
            </span>
          ))}
        </p>
        <div className={styles.actions_btn}>
          <button className={styles.btn}>
            Code <FaGithub />
          </button>
          <button className={styles.btn}>
            Live Preview <FaExternalLinkAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
