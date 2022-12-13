# Тестовое задание для ЯСП
Тестовое разбито на две части:
 - [Фронтенд](https://demasx64.github.io/yasp)
 - [Бэкенд](https://demasx64.github.io/yasp-backend)

Для запуска фронтенда и бэкенда:
### npm install
и
### npm start
Сервер распологается на Yandex.Cloud. (Google забанил Россию)
Распознавание изображений происходит на сервере через библиотеку tesseract.
## Стэк
(Линтеры и ts не использовал в этом тестовом)
### Frontend
- react
### Backend
- express - создание сервера
- express-fileupload - удобная загрузка файлов
- uuid - для создания уникальных id
- tesseract.js - распознавание текста
- cors - для поддержки cors
## Описание
Моя реализация состоит в том:
При нажатии на кнопку происходит проверка, есть ли в буфере обмена , если нет, то надо нажать PrintScreen. (Хотел сделать, чтобы сразу после нажатия на PrintScreen происходила отправка, но браузер не дает так делать). Далее происходит отправка на сервер.
Успешный ответ приходит в виде:
``{
        id: '123', recognizedText: 'text'
}``
P.S. Других идей как достать полное изображение экрана в браузере не было
