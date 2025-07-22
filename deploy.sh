#!/bin/bash

# Скрипт деплоя для GiftAssets
# Использование: ./deploy.sh [production|staging]

set -e

ENVIRONMENT=${1:-production}
PROJECT_NAME="giftassets"
BUILD_DIR="dist"
LOG_DIR="logs"

echo "🚀 Начинаем деплой в окружение: $ENVIRONMENT"

# Создаем директорию для логов
mkdir -p $LOG_DIR

# Останавливаем текущее приложение
echo "⏹️ Останавливаем текущее приложение..."
if pm2 list | grep -q $PROJECT_NAME; then
    pm2 stop $PROJECT_NAME
fi

# Устанавливаем зависимости
echo "📦 Устанавливаем зависимости..."
npm ci --only=production

# Собираем приложение
echo "🔨 Собираем приложение..."
npm run build

# Проверяем, что сборка прошла успешно
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Ошибка: директория $BUILD_DIR не найдена после сборки"
    exit 1
fi

# Копируем файлы на сервер (если нужно)
if [ "$ENVIRONMENT" = "production" ]; then
    echo "📤 Копируем файлы на сервер..."
    # Замените на ваши настройки
    # rsync -avz --delete $BUILD_DIR/ user@your-server:/var/www/giftassets/
fi

# Запускаем приложение
echo "▶️ Запускаем приложение..."
if [ "$ENVIRONMENT" = "production" ]; then
    pm2 start ecosystem.config.js --env production
else
    pm2 start ecosystem.dev.config.js
fi

# Проверяем статус
echo "✅ Проверяем статус приложения..."
pm2 list

echo "🎉 Деплой завершен успешно!"
echo "📊 Мониторинг: pm2 monit"
echo "📋 Логи: pm2 logs $PROJECT_NAME" 