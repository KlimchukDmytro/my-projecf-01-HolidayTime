import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import Rock from "../../assets/rock.png";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header className={s.header}>
      <img src={Rock} alt="rock" width="178" className={s.img} />
      <nav className={s.nav}>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="/">
            ГОЛОВНА
          </NavLink>
        </div>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="/abaut">
            ПРО НАС
          </NavLink>
        </div>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="/reserve">
            ЗАБРОНЮВАТИ
          </NavLink>
        </div>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="/contacts">
            КОНТАКТИ
          </NavLink>
        </div>
        <div className={s.list}>
          <NavLink className={buildLinkClass} to="/personal">
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
