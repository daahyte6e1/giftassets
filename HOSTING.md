# 🚀 Руководство по хостингу GiftAssets

## 📋 Содержание
1. [Варианты хостинга](#варианты-хостинга)
2. [Подготовка к деплою](#подготовка-к-деплою)
3. [Настройка VPS](#настройка-vps)
4. [Настройка статического хостинга](#настройка-статического-хостинга)
5. [SSL сертификаты](#ssl-сертификаты)
6. [Мониторинг](#мониторинг)

## 🌐 Варианты хостинга

### **A. Статический хостинг (рекомендуется)**
- **Vercel**: Автоматический деплой из Git, бесплатный SSL
- **Netlify**: Простая настройка, CDN
- **GitHub Pages**: Бесплатно для открытых репозиториев

### **B. VPS/Облачный сервер**
- **DigitalOcean**: $5/месяц, полный контроль
- **AWS EC2**: Масштабируемость, множество сервисов
- **Google Cloud**: Интеграция с другими сервисами Google

### **C. Shared хостинг**
- **cPanel**: Простота настройки
- **Plesk**: Удобная панель управления

## 🔧 Подготовка к деплою

### 1. Сборка приложения
```bash
npm run build
```

### 2. Проверка сборки
```bash
npm run preview
```

### 3. Автоматический деплой
```bash
./deploy.sh production
```

## 🖥️ Настройка VPS

### 1. Установка необходимого ПО
```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установка PM2
sudo npm install -g pm2

# Установка Nginx
sudo apt install nginx -y

# Установка Certbot для SSL
sudo apt install certbot python3-certbot-nginx -y
```

### 2. Настройка Nginx
```bash
# Копируем конфигурацию
sudo cp nginx.conf /etc/nginx/sites-available/giftassets

# Создаем символическую ссылку
sudo ln -s /etc/nginx/sites-available/giftassets /etc/nginx/sites-enabled/

# Удаляем дефолтную конфигурацию
sudo rm /etc/nginx/sites-enabled/default

# Проверяем конфигурацию
sudo nginx -t

# Перезапускаем Nginx
sudo systemctl restart nginx
```

### 3. Настройка файрвола
```bash
# Разрешаем SSH, HTTP, HTTPS
sudo ufw allow ssh
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

### 4. Деплой приложения
```bash
# Клонируем репозиторий
git clone https://github.com/your-username/giftassets.git
cd giftassets

# Устанавливаем зависимости
npm install

# Собираем приложение
npm run build

# Запускаем через PM2
pm2 start ecosystem.config.js --env production
pm2 save
pm2 startup
```

## 📁 Настройка статического хостинга

### Vercel
1. Подключите GitHub репозиторий к Vercel
2. Настройте build command: `npm run build`
3. Укажите output directory: `dist`
4. Деплой произойдет автоматически

### Netlify
1. Загрузите папку `dist` в Netlify
2. Или подключите Git репозиторий
3. Настройте build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🔒 SSL сертификаты

### Let's Encrypt (бесплатно)
```bash
# Получение сертификата
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Автоматическое обновление
sudo crontab -e
# Добавьте строку:
# 0 12 * * * /usr/bin/certbot renew --quiet
```

### Cloudflare (рекомендуется)
1. Зарегистрируйтесь на Cloudflare
2. Добавьте ваш домен
3. Измените DNS записи
4. Включите SSL/TLS режим "Full"

## 📊 Мониторинг

### PM2 команды
```bash
# Статус приложений
pm2 list

# Мониторинг в реальном времени
pm2 monit

# Просмотр логов
pm2 logs giftassets

# Перезапуск приложения
pm2 restart giftassets
```

### Nginx логи
```bash
# Access лог
sudo tail -f /var/log/nginx/giftassets.access.log

# Error лог
sudo tail -f /var/log/nginx/giftassets.error.log
```

## 🚨 Устранение проблем

### Приложение не запускается
1. Проверьте логи: `pm2 logs giftassets`
2. Убедитесь, что порт свободен: `netstat -tulpn | grep 4173`
3. Проверьте права доступа к файлам

### Nginx ошибки
1. Проверьте конфигурацию: `sudo nginx -t`
2. Проверьте логи: `sudo tail -f /var/log/nginx/error.log`
3. Убедитесь, что SSL сертификаты корректны

### Проблемы с доменом
1. Проверьте DNS записи
2. Убедитесь, что домен указывает на правильный IP
3. Проверьте настройки Cloudflare (если используется)

## 📞 Поддержка

При возникновении проблем:
1. Проверьте логи приложения и сервера
2. Убедитесь, что все зависимости установлены
3. Проверьте конфигурацию файрвола
4. Обратитесь к документации используемого хостинга 