import s from "./Potfolio.module.scss";

const Portfolio: React.FC = () => {
  return (
    <>
      <h2>Проекты</h2>
      <hr />
      <h3>
        <a
          className={s.projectLink}
          href='http://kofevarkaservice.ru'
          target='blank'
        >
          Kofevarka-service
        </a>
      </h3>

      <p>Онлайн магазин по продаже кофе и ремонту техники</p>
      <ul>
        <li>
          Выполнен на технологиях React Redux/toolkit с приминением TypeScript
        </li>
        <li>В качесве бэка используется mockAPI</li>
        <li>
          Покупка кофе или заявка на ремонт осуществляется через форму
          отправленную в телеграм магазина
        </li>
      </ul>
      <hr />
      <h3>
        <a
          className={s.projectLink}
          href='https://weather-b2uoswpn3-evgeniyol.vercel.app/'
          target='blank'
        >
          Weather
        </a>
      </h3>
      <p>Приложение погоды</p>
      <ul>
        <li>React с приминением TypeScript Scss</li>
        <li>Автоматическое определение геолокации</li>
        <li>Обновление данных каждую минуту</li>
        <li>
          При запрете определения местоположения автоматически устанавливается
          город Омск
        </li>
      </ul>
      <hr />
      <h3>
        <a
          className={s.projectLink}
          href='https://quiz-game-blue.vercel.app/'
          target='blank'
        >
          Quiz game
        </a>
      </h3>
      <p>Маленькая викторина - вопросы из различных областей знания.</p>
      <ul>
        <li>React с приминением TypeScript Scss</li>
      </ul>
      <hr />
      <h3>
        <a
          className={s.projectLink}
          href='https://rss-project-1zjnnkrcb-evgeniyol.vercel.app/'
          target='blank'
        >
          «RSS агрегатор»
        </a>
      </h3>
      <p>
        RSS – специализированный формат, предназначенный для описания лент
        новостей, анонсов статей и других материалов. Это наиболее простой
        способ для сайтов (обычно, блогов) дать возможность пользователям
        подписываться на изменения. Для этого используются специальные сервисы,
        называемые RSS-агрегаторами. Эти сервисы умеют опрашивать RSS-ленты
        сайтов на наличие новых постов и показывают их в удобном виде, отмечая
        прочитанное и так далее.
      </p>
      <hr />
      <h3>
        <a
          className={s.projectLink}
          href='https://my-chat-react-55.herokuapp.com/'
          target='blank'
        >
          Online-Chat (Slack-chat analogue)
        </a>
      </h3>
      <p>
        Проект строится на технологиях, используемых React-разработчиками. Его
        цель - показать спектр всех стандартных задач: работа с веб-сокетами,
        взаимодействие с REST API, использование React (с хуками), Redux (через
        redux/toolkit), организация роутинга на клиента, авторизация,
        аутентификация и деплой (heroku).
      </p>
      <hr />
      <h2>Лендинги</h2>
      <ul className={s.listStyle}>
        <li>
          <a
            className={s.projectLink}
            href='https://evgeniyol.github.io/layout-designer-project-lvl1/'
            target='blank'
          >
            "Когнитивные искажения"
          </a>
        </li>
        <li>
          <a
            className={s.projectLink}
            href='https://evgeniyol.github.io/Purrweb_Test/'
            target='blank'
          >
            No Tab
          </a>
        </li>
        <li>
          <a
            className={s.projectLink}
            href='https://skb-gwgn4fmjt-evgeniyol.vercel.app/'
            target='blank'
          >
            SKB Omsk
          </a>
        </li>
      </ul>
    </>
  );
};

export default Portfolio;
