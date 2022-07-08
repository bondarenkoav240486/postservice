import React from 'react';

const About = () => {
    return (<div className="page__about">
        <div className="page__about__row">
        <h1>
                Цей додаток є учбовим проектом , реалізує сервіс для створення постів та отримання їх з серверу . Cтворений на react.js 
        </h1>
        <br/>
        <h3>Bикористані:</h3>
        <br/>
        <ul>
        <li> - useState;  </li>
        <li> - JSONPlaceholder.сом;  </li>
        <li> - useMemo; </li>
        <li> - axios;  </li>
        <li> - створена UI бібліотека; </li>
        <li> - CSS модулі ; </li>
        <li> - хук useRef ; </li>
        <li> - React Devtools ; </li>
        <li> - Анимації. React transition group; </li>
        <li> - Декомпозиція. Кастомні хуки; </li>
        <li> - Робота з сервером. Axios; </li>
        <li> - API. PostService;  </li>
        <li> - Кастомний хук useFetching(). Обробка помилок; </li>
        <li> - Посторінковий вивід. Пагинація (pagination);  </li>
        <li> - React router ; </li>
        </ul>

        </div>
        </div>);
};

export default About;