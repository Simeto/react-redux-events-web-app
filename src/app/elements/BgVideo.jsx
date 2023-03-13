import styles from "./BgVideo.module.scss";

const BgVideo = () => {
  return (
    <div className={styles["bg-video"]}>
      <video autoplay="autoplay" muted loop className={styles["bg-video__content"]}>
        <source src="../../../assets/beach.mp4" type="video/mp4" />
        Your browser is not supported !
      </video>
    </div>
  );
};

export default BgVideo;
