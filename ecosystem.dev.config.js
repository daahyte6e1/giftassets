module.exports = {
  apps: [
    {
      name: 'giftassets-dev',
      script: 'npm',
      args: 'run dev',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 5173
      }
    }
  ]
}; 