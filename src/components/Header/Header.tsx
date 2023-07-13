import headerImg from "../../images/headerImg.jpg";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <img className={style.headerImg} src={headerImg} alt="111" />
    </div>
  );
};
export default Header;
