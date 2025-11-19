# Лендинг-пейдж на React с FSD (Учебный проект)

## Описание
Это учебный макет сайта туристического агентства на React с использованием Vite, TypeScript, Sass, React Router и Feature-Sliced Design (FSD). FSD помогает организовать код по слоям для лучшей модульности: от общих компонентов до специфических фич.

Цель: Практика React-экосистемы, включая FSD для структурирования кода

**Цель:** Практика React-экосистемы, включая FSD для структурирования кода и роутинг.

## Скриншоты
![Скриншот лендинга](file:///C:/Users/yurik/Downloads/Telegram%20Desktop/animation.mp4)  


## Установка и запуск
1. Клонируйте репозиторий:
  `git clone hhttps://github.com/6QWERTY9/2rism.git`

2. Установите зависимости:
  `pnpm install`

3. Запустите dev-сервер:
  `pnpm dev`

  Откройте `http://localhost:5173` в браузере.

*Требования*: Node.js (версия 16+), pnpm.

## Структура проекта (по FSD)

```
2rism/
├── public/              # Статические файлы (favicon, images, туры)
├── src/
│   ├── app/             # Глобальная логика (providers, router, конфиг)
|   |  ├── App.tsx          # Главный компонент с роутингом
│   |  └── main.tsx         # Точка входа
│   ├── pages/           # Страницы (Home, Tours, About, Contacts) — точки входа для роутов
│   ├── widgets/         # Виджеты (Header, Footer, TourCard) — крупные UI-блоки
│   ├── features/        # Фичи (TourSearch, BookingForm) — бизнес-логика (поиск, бронирование)
│   ├── entities/        # Сущности (Tour, User, Booking) — модели данных
│   ├── shared/          # Общие ресурсы (UI-компоненты, утилиты, стили)
│   │   ├── ui/          # Переиспользуемые компоненты (Button, Input, Modal)
│   │   ├── lib/         # Утилиты (hooks, API helpers)
│   │   └── styles/      # Глобальные Sass-файлы (переменные, миксины)
├── index.html           # HTML-шаблон
├── vite.config.ts       # Конфиг Vite
├── tsconfig.json        # Конфиг TypeScript
└── README.md            # Этот файл
```


## Технологии

- *React*: Компонентная архитектура и хуки.
- *TypeScript*: Типизация для надежности.
- *Vite*: Быстрый сборщик.
- *Sass*: Препроцессор для стилей.
- *React Router*: Навигация между страницами.
- *Feature-Sliced Design (FSD)*: Архитектура для организации кода по слоям.
- *Инструменты*: VS Code, Git, ESLint, pnpm.

## Автор

- *Имя*: Юрий
- *GitHub*: [gitHub](https://github.com/6QWERTY9)
- *Email*: yurasmirnovlynxtram@gmail.com
