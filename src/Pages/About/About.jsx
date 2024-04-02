import React from "react";
import styles from "./About.module.css";
import { GoDotFill } from "react-icons/go";
import { FaDownload } from "react-icons/fa";
import pic from "../../assets/pic.png";
import data from "../../data.json";

const About = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.main_container}>
        <div className={styles.page_headings}>
          <p className={styles.sub_heading}>
            <span>
              <GoDotFill className={styles.dot} />
            </span>{" "}
            Who I Am
          </p>
          <h1 className={styles.main_heading}>
            About <span>Me</span>
          </h1>
        </div>
        <div className={styles.page_content}>
          <div className={styles.img_section}>
            <img src={pic} alt="profile_pic" className={styles.pic} />
          </div>
          <div className={styles.detail_section}>
            <h3>
              {data.personalInformation.About_headline}{" "}
              <span>{data.personalInformation.country}</span> .
            </h3>
            <p>{data.personalInformation.About_me_p_1}</p>
            <p>{data.personalInformation.About_me_p_2}</p>
            <p>{data.personalInformation.About_me_p_3}</p>
            <button className={styles.btn_cv}>
              Download CV <FaDownload className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
