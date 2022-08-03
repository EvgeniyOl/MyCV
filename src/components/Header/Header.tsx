import s from "./Header.module.scss";
import myPhoto from "../../images/myPhoto.png";
import location from "../../images/marker.png";
import hexletLink from "../../images/hexlet.jpeg";
import github from "../../images/github.svg";
import telega from "../../images/telega.png";
import gMail from "../../images/gmail.png";

const Header: React.FC = () => {
  return (
    <header className={s.tittle}>
      <div>
        <h1 className={s.fio}>Олянский Евгений</h1>
        <h3 className={s.profession}>Frontend - Developer</h3>
        <span className={s.contacts}>
          <img className={s.locationIcon} src={location} alt='location icon' />{" "}
          РФ г.Омск
        </span>
        <span className={s.contacts}>
          <a href='https://ru.hexlet.io/u/evgeniyol/courses' target='blank'>
            <img width='20px' src={hexletLink} alt='HexletLink' /> Hexlet{" "}
          </a>
        </span>
        <span className={s.contacts}>
          <a href='https://github.com/EvgeniyOl' target='blank'>
            <img width='20px' src={github} alt='githibLink' /> GitHub{" "}
          </a>
        </span>
        <span className={s.contacts}>
          <a href='https://t.me/Evgeniy321123' target='blank'>
            <img width='20px' src={telega} alt='telegramLink' /> Telegram{" "}
          </a>
        </span>
        <span className={s.contacts}>
          <a href='mailto:evgeniy.olyanskii@gmail.com' target='blank'>
            <img width='20px' src={gMail} alt='GMailLink' />{" "}
            evgeniy.olyanskii@gmail.com
          </a>
        </span>
      </div>
      <div>
        <img className={s.myPhoto} src={myPhoto} alt='myPhoto' />
      </div>
    </header>
  );
};

export default Header;
