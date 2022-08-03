import { Link } from "react-router-dom";
import s from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={s.navigation}>
      <Link to='/' className={s.navLink}>
        Основная информация
      </Link>
      <Link to='Portfolio' className={s.navLink}>
        Портфолио
      </Link>
    </nav>
  );
};

export default Navbar;
