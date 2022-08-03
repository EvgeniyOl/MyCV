import React from "react";
import s from "./General.module.scss";
import hexletDoc from "../../images/hexletDoc.png";
import github from "../../images/github.svg";
import git from "../../images/Git_icon.svg.png";
import vs from "../../images/Visual_Studio_Code_1.35_icon.svg.png";
import js from "../../images/JavaScript_logo_2.svg.png";
import css from "../../images/1200px-CSS.3.svg.png";
import html from "../../images/HTML5.svg.png";
import react from "../../images/react-icon1.svg";
import bootstrap from "../../images/bootstrap.png";
import ts from "../../images/typescript.png";
import vercel from "../../images/vercel.webp";
import heroku from "../../images/heroku.jpeg";

const General: React.FC = () => {
  return (
    <>
      <div>
        <h2>Образование</h2>
        <hr />
        <h3>СибАДИ</h3>
        <p>
          «Сервис транспортных и технологических машин и оборудования
          (нефтепродуктообеспечение и газоснабжение)» 2012 - 2016
        </p>
        <h3>Hexlet</h3>
        <p>«Frontend Development» 2021 - 2022</p>
        <img className={s.hexletDoc} src={hexletDoc} alt='hexletDocument' />
      </div>
      <div>
        <h2>Опыт работы</h2>
        <hr />
        <p>Сеть кофеен "Тинто", "Santino-Omsk", "Santino-Tbilisi".</p>
        <p>Должность - Специалист технического отдела. "Инженер-менеджер"</p>
        <ul>
          <li>Обучение и контроль команды (~20 человек).</li>
          <li>Посещение выставок, изучение новейших технологий.</li>
          <li>
            Подбор, установка, настройка, техническое обслуживание
            профессионального оборудования.
          </li>
          <li>...</li>
        </ul>
      </div>
      <div>
        <h2>Навыки</h2>
        <hr />
        <div className={s.skills}>
          <div>
            <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React/Redux/toolkit</li>
              <li>GitHub</li>
              <li>Git</li>
              <li>VSCode</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Vercel</li>
              <li>Heroku</li>
            </ul>
          </div>
          <div className={s.icons}>
            <img src={js} alt='js' />
            <img src={react} alt='react' />
            <img src={ts} alt='ts' />
            <img src={html} alt='html' />
            <img src={css} alt='css' />
            <br />
            <img src={github} alt='github' />
            <img src={git} alt='git' />
            <img src={bootstrap} alt='bootstrap' />
            <img src={vs} alt='vscode' />
            <img src={vercel} alt='vercel' />
            <img src={heroku} alt='heroku' />
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
