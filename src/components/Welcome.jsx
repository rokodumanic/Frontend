import React from "react";
import NavBar from "./tools/NavBar";
import Headline from "./welcome/Headline";
import Gradient from "./tools/Gradiant";
import VideoPlayer from "./tools/Video";
import styles from "./welcome.module.css";

function Welcome() {
  return (
    <div className={styles.welcomeContainer}>
    <VideoPlayer src={"/catamaran.mp4"}/>
    <div className={styles.contentContainer}>
      <NavBar color={"#ffffff"}/>
      <Headline />
      <Gradient color={"#062949"} height={"h-48"} />
      </div>
    </div>
  );
}

export default Welcome;
