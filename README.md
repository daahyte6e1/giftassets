# GiftAssets

React приложение с настройкой PM2 для управления процессами.

## Установка

```bash
npm install
```

## Разработка

```bash
npm run dev
```

## Сборка

```bash
npm run build
```

## Запуск через PM2

### Production режим

1. Сначала соберите приложение:
```bash
npm run build
```

2. Запустите через PM2:
```bash
npm run start
```

### Development режим

```bash
npm run start:dev
```

## Управление PM2 процессами

### Остановка
```bash
npm run stop          # Production
npm run stop:dev      # Development
```

### Перезапуск
```bash
npm run restart       # Production
npm run restart:dev   # Development
```

### Удаление процесса
```bash
npm run delete        # Production
npm run delete:dev    # Development
```

### Просмотр логов
```bash
npm run logs          # Production
npm run logs:dev      # Development
```

### Мониторинг
```bash
npm run monit
```

## Полезные команды PM2

- `pm2 list` - список всех процессов
- `pm2 status` - статус процессов
- `pm2 monit` - интерактивный мониторинг
- `pm2 logs` - логи всех процессов
- `pm2 flush` - очистка логов

## Порты

- Development: http://localhost:5173
- Production: http://localhost:4173
