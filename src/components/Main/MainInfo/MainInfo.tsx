import style from "./MainInfo.module.css";
import socialNetwork from "../../../images/socialNetwork.jpg";

export const MainInfo = () => {
  return (
    <div className={style.mainInfo}>
      <img className={style.mainImg} src={socialNetwork} alt="mainImg" />
      <div>ava + desk</div>
    </div>
  );
};
