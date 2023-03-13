import icons from "../../assets/sprite.svg";

const Icon = (props) => {
  return (
    <svg className={`${props.className}`}>
      <use href={`${icons}#${props.name}`} />
    </svg>
  );
};

export default Icon;
