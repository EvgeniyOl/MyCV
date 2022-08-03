import React from "react";
import s from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <a href='https://github.com/EvgeniyOl' target='blank'>
        © 2022 Created by Evgeniy Olyanskii
      </a>
    </footer>
  );
};

export default Footer;
