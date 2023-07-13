import style from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className={style.nav}>
      <ul className="nav__list">
        <li className={style.navItem}>
          <NavLink to="/profile" activeClassName={style.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink to="/dialogs" activeClassName={style.activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink to="/news" activeClassName={style.activeLink}>
            News
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
