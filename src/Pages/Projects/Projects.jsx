import React from "react";
import styles from "./Projects.module.css";
import { GoDotFill } from "react-icons/go";
import Card from "../../Components/ProjectCard/Card";
import data from "../../data.json";
const Projects = () => {
  const { projects } = data;
  return (
    <section className={styles.project_section} id="projects">
      <div className={styles.main_container}>
        <div className={styles.page_headings}>
          <p className={styles.sub_heading}>
            <span>
              <GoDotFill className={styles.dot} />
            </span>{" "}
            Work I have Done
          </p>
          <h1 className={styles.main_heading}>
            My <span>Projects</span>
          </h1>
        </div>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project ${index % 2 !== 0 ? "reverse" : ""}`}
            >
              <Card project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
