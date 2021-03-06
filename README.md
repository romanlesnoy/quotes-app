# Routes Quotes App

Демо приложения, с карточками цитат

[Ссылка на сайт](https://router-quotes-app.netlify.app/quotes)

### Функционал

-   Добавление карточек с цитатами
-   Отдельная страница для каждой карточки
-   Секция комментариев
-   Форма для добавления новой карточки

### Стек

-   приложение написано на функциональном React
-   для роутинга используется React Router v5
-   настороенны основные роуты для страниц
-   настроенны вложенные роуты для карточек и сеций комментариев
-   для сортировки карточек добавлены query parameters в роут
-   для хранения данных карточек и комментариев используется firebase
-   для отправки запросов на бэк используется кастомный хук useHttp
-   для изоляции стилей использованы css modules
-   в проекте настроен линтер, и добавлены скрипты
-   для валидации параметров переданных компонентам используется PropTypes

### Дополнительно

-   добавлена отдельная ветка для приложения переписанного на React-Router v6

### Запуск приложения

-   Клонировать репозиторий
    ```bash
    $ git clone https://github.com/romanlesnoy/quotes-app.git
    ```
-   Перейти в директорию проекта и установить зависимости
    ```bash
    $ cd  quotes-app && npm install
    ```
-   Запустить приложение
    ```bash
    npm start
    ```
