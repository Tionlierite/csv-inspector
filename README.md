# CSV INSPECTOR

Программа позволяет выбрать файл .csv формата и прочитать из него данные. Пример файла представлен в [public/CSV-файл.csv](https://github.com/Tionlierite/csv-inspector/blob/main/public/CSV-%D1%84%D0%B0%D0%B9%D0%BB.csv).
Т.к тестовое задание с вышеуказанным файлом было прислано с кодировкой Windows-1251, то [парсер](https://github.com/Tionlierite/csv-inspector/blob/main/src/features/ChooseFileButton/csvParser.js) в программе работает только на данной кодировке. В будущем будет реализовано несколько видов кодировок.
## Использованные библиотеки
* React.js, React Router v6
* Redux, Redux Tool-Kit, LocalStorage
* PapaParse, Lodash
* Tailwind
## Установка и запуск
После клонирования репозитория, необходимо установить все пакеты из зависимостей:

`npm i`

Запустить режим разработки посредством команды

`vite dev`