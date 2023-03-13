import styles from "./ButtonInline.module.scss";

const ButtonInline = (props) => {
  const {text, arrow} = props;
  return <button className={styles['btn-inline']}>{text} {arrow && <span>&rarr;</span>}</button>;
};

export default ButtonInline;
