import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <img src="/" alt="rock" className={s.img} />
      <nav className={s.nav}>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="/">
            ГОЛОВНА
          </NavLink>
        </div>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="">
            ПРО НАС
          </NavLink>
        </div>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="">
            ЗАБРОНЮВАТИ
          </NavLink>
        </div>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="">
            КОНТАКТИ
          </NavLink>
        </div>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="">
            ОСОБИСТИЙ КАБІНЕТ
          </NavLink>
        </div>
        <div className={s.icon_container}>
          <p className={s.icon_text}>
            <HiOutlineGlobeAlt className={s.icon} />
            UA
          </p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
