# 🚀 Быстрый деплой на GitHub Pages

## Шаг 1: Создать репозиторий на GitHub

1. Перейдите на [github.com](https://github.com)
2. Войдите в аккаунт **kzhuchkovusa-afk**
3. Нажмите кнопку **"New"** (или "+") → **"New repository"**
4. Заполните форму:
   - **Repository name:** `mba-for-kids`
   - **Description:** `Landing page for MBA for Kids - 9-month business & tech program`
   - **Visibility:** ☑️ Public
   - **НЕ ставьте галочки** на "Add README", ".gitignore", "license"
5. Нажмите **"Create repository"**

## Шаг 2: Загрузить код в репозиторий

Скопируйте эти команды в терминал (по порядку):

```bash
cd /home/user/mba-for-kids

# Удалить старый README и переименовать новый
rm README.md
mv README-NEW.md README.md

# Добавить все файлы
git add .

# Сделать первый коммит
git commit -m "Initial commit: MBA for Kids landing page with bilingual support"

# Подключить GitHub репозиторий
git remote add origin https://github.com/kzhuchkovusa-afk/mba-for-kids.git

# Загрузить код
git push -u origin main
```

**Примечание:** GitHub попросит ввести логин и пароль. Используйте:
- **Username:** kzhuchkovusa-afk
- **Password:** Ваш Personal Access Token (если не создан, см. Шаг 3)

## Шаг 3: Создать Personal Access Token (если нужно)

Если у вас нет токена:

1. Перейдите: [github.com/settings/tokens](https://github.com/settings/tokens)
2. Нажмите **"Generate new token"** → **"Generate new token (classic)"**
3. Заполните:
   - **Note:** `MBA for Kids deployment`
   - **Expiration:** 90 days (или больше)
   - **Scopes:** ☑️ `repo` (все галочки)
4. Нажмите **"Generate token"**
5. **СКОПИРУЙТЕ ТОКЕН** (он больше не покажется!)
6. Используйте его вместо пароля при `git push`

## Шаг 4: Включить GitHub Pages

1. Перейдите в ваш репозиторий: `https://github.com/kzhuchkovusa-afk/mba-for-kids`
2. Нажмите **"Settings"** (справа вверху)
3. В левом меню найдите **"Pages"**
4. В секции **"Source"**:
   - **Branch:** выберите `main`
   - **Folder:** оставьте `/ (root)`
5. Нажмите **"Save"**

**Готово!** Через 1-2 минуты сайт будет доступен по адресу:

🌐 **https://kzhuchkovusa-afk.github.io/mba-for-kids/**

## Шаг 5: Проверить сайт

1. Откройте URL: https://kzhuchkovusa-afk.github.io/mba-for-kids/
2. Проверьте:
   - ✅ Страница загружается
   - ✅ Кнопки EN/RU работают
   - ✅ Мобильная версия выглядит хорошо
   - ✅ Все ссылки рабочие

## 🎯 Обновление сайта в будущем

Когда нужно внести изменения:

```bash
cd /home/user/mba-for-kids

# 1. Внесите изменения в файлы

# 2. Добавьте изменённые файлы
git add .

# 3. Сделайте коммит
git commit -m "Описание изменений"

# 4. Загрузите на GitHub
git push origin main
```

Изменения появятся на сайте через 1-2 минуты!

## 📦 Как скачать весь проект

### Вариант 1: Через ZIP
1. Откройте: https://github.com/kzhuchkovusa-afk/mba-for-kids
2. Нажмите зелёную кнопку **"Code"**
3. Выберите **"Download ZIP"**
4. Распакуйте архив

### Вариант 2: Через Git Clone
```bash
git clone https://github.com/kzhuchkovusa-afk/mba-for-kids.git
```

## ❓ Проблемы и решения

### Ошибка: "remote: Repository not found"
- Проверьте, что репозиторий создан на GitHub
- Убедитесь, что URL правильный
- Проверьте права доступа

### Ошибка: "Authentication failed"
- Используйте Personal Access Token вместо пароля
- Проверьте, что токен не истёк
- Убедитесь, что токен имеет права `repo`

### Сайт не обновляется
- Подождите 2-3 минуты после push
- Очистите кеш браузера (Ctrl+F5)
- Проверьте статус деплоя: Settings → Pages

## 🎉 Готово!

Ваш сайт теперь живёт в интернете:
🌐 https://kzhuchkovusa-afk.github.io/mba-for-kids/

Можете делиться ссылкой с клиентами! 🚀
