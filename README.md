# CSV INSPECTOR

Программа позволяет выбрать файл .csv формата и прочитать из него данные.
Программа на данный момент не позиционируется как универсальное средство для просмотра содержимого .csv файлов.
Предполагается что данный функционал будет использоваться как внутренний инструмент системы компании для просмотра файлов, имеющих задокументированную и неизменную структуру. Пример файла представлен в [public/CSV-файл.csv](https://github.com/Tionlierite/csv-inspector/blob/main/public/CSV-%D1%84%D0%B0%D0%B9%D0%BB.csv).
## Использованные библиотеки и методологии
* Архитектураная методология Feature-Sliced Design
* React.js, React Router v6
* Redux, Redux Tool-Kit, LocalStorage
* PapaParse, Lodash
* Tailwind
## Установка и запуск
### Предварительные условия
Перед установкой убедитесь, что в вашей системе установлен:

- [Node.js](https://nodejs.org/)

Установлен ли Node.js можно проверить, выполнив эту команду в терминале:

`node --version`

### Установка

Клонируйте репозиторий на ваше устройство посредством команды:

`git clone https://github.com/Tionlierite/csv-inspector.git`

Перейдите в папку проекта:

`cd csv-inspector`

Установите необходимые пакеты для работы проекта:

`npm install`

После установки всех необходимых пакетов, вы можете запустить сервер разработки:

`vite dev`

Приложение должно работать на:

http://localhost:5173/

## Известные проблемы

- Т.к предоставленный .csv [файл](https://github.com/Tionlierite/csv-inspector/blob/main/public/CSV-%D1%84%D0%B0%D0%B9%D0%BB.csv) имеет кодировку Windows-1251, то [парсер](https://github.com/Tionlierite/csv-inspector/blob/main/src/features/ChooseFileButton/csvParser.js) в программе работает только на данной кодировке. В будущем будет реализовано несколько видов кодировок.