import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [imageVisible, setImageVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (imageVisible) {
      const timer = setTimeout(() => {
        setContactVisible(true);
      }, 1000); // match fade duration
      return () => clearTimeout(timer);
    }
  }, [imageVisible]);

  const basePath = process.env.NODE_ENV === "production" ? "" : "";

  return (
    <div className={styles.container}>
      <div
        className={`${styles.fade} ${imageVisible ? styles.visible : ""} ${
          styles.imageWrapper
        }`}
      >
        <img
          src={`${basePath}/logga.png`}
          alt="Logo of VIDEL"
          className={styles.responsiveImage}
        />
      </div>

      <div
        className={`${styles.fade} ${contactVisible ? styles.visible : ""} ${
          styles.contact
        }`}
      >
        <address
          className={`${styles.fade} ${contactVisible ? styles.visible : ""} ${
            styles.contact
          }`}
        >
          <p>
            <a href="tel:+46123456789">+46 123 456 789</a>
          </p>
          <p>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </p>
        </address>
      </div>
    </div>
  );
}
