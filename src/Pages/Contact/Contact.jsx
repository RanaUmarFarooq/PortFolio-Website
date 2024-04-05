import React from "react";
import styles from "./Contact.module.css";
import { GoDotFill } from "react-icons/go";
import { FaPhoneAlt, FaGithub, FaRegCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillSendFill } from "react-icons/bs";
import { FaLocationDot, FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
const Contact = () => {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.main_container}>
        <div className={styles.page_headings}>
          <p className={styles.sub_heading}>
            <span>
              <GoDotFill className={styles.dot} />
            </span>{" "}
            Get In Touch
          </p>
          <h1 className={styles.main_heading}>
            Contact <span>Me</span>
          </h1>
        </div>
        <div className={styles.main_content}>
          <div className={styles.contact_information}>
            <div className={styles.phone_number}>
              {" "}
              <FaPhoneAlt className={styles.icon} />
              +92 3069509257
            </div>
            <div className={styles.email}>
              <MdEmail className={styles.icon} />
              ranaumerfaroooq@gmail.com
            </div>
            <div className={styles.location}>
              <FaLocationDot className={styles.icon} />
              Sialkot, Punjab, Paksitan
            </div>
            <div className={styles.social_buttons}>
              <div className={styles.soical_icon}>
                <FaFacebookF className={styles.s_icon} />
              </div>
              <div className={styles.soical_icon}>
                <IoLogoInstagram className={styles.s_icon} />
              </div>
              <div className={styles.soical_icon}>
                <FaGithub className={styles.s_icon} />
              </div>
            </div>
          </div>
          <div className={styles.contact_form}>
            <input
              type="text"
              className={styles.text_input}
              placeholder="Name"
            />
            <input
              type="text"
              className={styles.text_input}
              placeholder="Email"
            />
            <br />
            <input
              type="text"
              className={`${styles.text_input} ${styles.t_project}`}
              placeholder="Project"
            />
            <textarea
              className={`${styles.text_input} ${styles.t_message}`}
              name=""
              id=""
              cols="30"
              rows="6"
              placeholder="Write Message"
            ></textarea>
            <button className={styles.btn}>
              Send Message <BsFillSendFill />
            </button>
          </div>
        </div>
        <div className={styles.footer}>
          <p>
            <span>
              {" "}
              <FaRegCopyright />
            </span>{" "}
            2024 developed by Umar | All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
