#!/bin/bash

echo "🔍 Parando o serviço MySQL local..."

if systemctl is-active --quiet mysql; then
  echo "⚠️  Serviço MySQL está rodando. Parando agora..."
  sudo systemctl stop mysql
  echo "✅ Serviço MySQL parado."
else
  echo "✅ Serviço MySQL já estava parado."
fi

echo "🚀 Subindo containers com Docker Compose..."
docker-compose down
docker-compose up --build
