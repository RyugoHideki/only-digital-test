# Автотесты для сайта only.digital

Этот репозиторий содержит автотесты для проверки наличия футера и его элементов на сайте [only.digital](https://only.digital/).

## Установка и запуск

npx playwright test

### Предварительные требования

- Установить [Node.js](https://nodejs.org/) (версия 18 или выше)

### Установка зависимостей

```bash
npm install



Запуск тестов в Docker

Соберите Docker-образ:

docker build -t only-digital-tests .

Запустите контейнер:

docker run only-digital-tests

Структура проекта

main.test.js - основной файл с тестами.
package.json - файл с зависимостями и скриптами.
Dockerfile - файл для создания Docker-образа.


Тесты проверяют:

Наличие футера на странице.
Наличие ссылок в футере.
Наличие текста в футере.
Наличие ссылок на социальные сети (если они есть)