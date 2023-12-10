import { useEffect, useState } from "react";
import styles from "../Style/Topsecstyle.module.css";
// import "animate.css";
const Topsec = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check the scroll position of the page
      const scrollY = window.scrollY;

      // Set isScrolled based on the scroll position
      setIsScrolled(scrollY > 0);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <video autoPlay muted loop className={styles.myVideo} id="myVideo">
        <source
          src="/Images/DatePlatter - Plan Experience Create Moments and 1 more page - Personal - Microsoft_ Edge 2023-12-07 12-12-35 (online-video-cutter.com).mp4"
          type="video/mp4"
        />
      </video>
      <div className={`${styles.content}`}>
        <div className={`${styles.icons}`}>
          <div className={`${styles.iconsbg}`}>
            <div className={`${styles.iconsimg1}`}>
              <img
                className={`${styles.iconsimg}`}
                src="/Images/icin.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className={`${styles.contenttext} ${
            isScrolled ? "animate__animated animate__zoomIn" : ""
          }`}
        >
          <p className={`${styles.contenttext1}`}>DatePlatte</p>
          <p className={`${styles.contenttext2}`}>
            PLAN EXPERIENCE, CREATE MOMENTS
          </p>
          <p className={`${styles.contenttext3}`}>COMING SOON !!</p>
        </div>
      </div>
    </>
  );
};

export default Topsec;
