# Agridera Seeds & Agriculture

Адаптивная вёрстка многостраничного сайта агрокомпании — мой учебный проект по HTML/CSS.

**Живая версия:** https://lukider228.github.io/

## Страницы

- **Главная** (`index.html`) — hero-блок, разделы Vision/Mission и основные направления деятельности компании;
- **Kiwi Hybrids** (`tomato.html`) — каталог сортов с карточками товаров;
- **Product Details** (`tomato_one.html`) — детальная страница товара: характеристики, устойчивость, сезонность;
- **Contact Us** (`contact.html`) — страница обратной связи.

## Стек

- HTML5 + CSS3, раскладка на flexbox;
- [Bootstrap 4](https://getbootstrap.com/docs/4.6/) — сетка;
- [Vue 2](https://v2.vuejs.org/) — каталог товаров и детальные карточки рендерятся из общего массива данных (`js/main.js`), без дублирования разметки;
- адаптив под мобильные (`responsive.css`), бургер-меню на чистом CSS (чекбокс-хак, без JS);
- шрифты Roboto Slab подключены локально через `@font-face` (woff/woff2).

## Запуск локально

Сборка не нужна — это статика:

```bash
git clone https://github.com/Lukider228/Lukider228.github.io.git
cd Lukider228.github.io
# открой index.html в браузере или подними локальный сервер:
python -m http.server 8000
```

И зайди на http://localhost:8000.
