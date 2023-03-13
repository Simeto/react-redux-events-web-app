import styles from "./EventGallery.module.scss";

const EventGallery = () => {
  return (
    <div className={styles.gallery}>
      <figure className={styles.gallery__item}>
        <img
          src="../../../assets/event1.jfif"
          alt="Event"
          className={styles.gallery__photo}
        />
      </figure>
      <figure className={styles.gallery__item}>
        <img
          src="../../../assets/event2.jfif"
          alt="Event"
          className={styles.gallery__photo}
        />
      </figure>
      <figure className={styles.gallery__item}>
        <img
          src="../../../assets/event3.jfif"
          alt="Event"
          className={styles.gallery__photo}
        />
      </figure>
    </div>
  );
};

export default EventGallery;
