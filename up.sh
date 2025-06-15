#!/bin/bash

echo "Parando o serviço MySQL local..."

if systemctl is-active --quiet mysql; then
  echo "Serviço MySQL está rodando. Parando agora..."
  sudo systemctl stop mysql
  echo "Serviço MySQL parado."
else
  echo "Serviço MySQL já estava parado."
fi

echo ""
echo "Finalizando volumes antigos..."
docker-compose down -v

echo ""
echo "Subindo containers com Docker Compose..."
docker-compose up -d --build

echo ""
echo "Aguardando API Node subir e responder na porta 3000..."

MAX_RETRIES=30
RETRY_INTERVAL=2
RETRY_COUNT=0

until curl -s http://localhost:3000 > /dev/null; do
  RETRY_COUNT=$((RETRY_COUNT+1))
  printf "."
  if [ $RETRY_COUNT -ge $MAX_RETRIES ]; then
    echo ""
    echo "Erro: API Node.js não respondeu na porta 3000 após $((MAX_RETRIES * RETRY_INTERVAL)) segundos."
    echo "Abortando execução do seed."
    exit 1
  fi
  sleep $RETRY_INTERVAL
done

echo ""
echo "API Node.js está no ar!"

echo ""
echo "Executando script de seed..."
docker-compose exec app npm run seed

echo ""
echo "Tudo pronto!"
echo "------------------------------------------"
echo "Acesse a API em: http://localhost:3000"
echo "Endpoints disponíveis:"
echo "   GET     /carros"
echo "   GET     /carros/:id"
echo "   POST    /carros"
echo "   PUT     /carros/:id"
echo "   PATCH   /carros/:id"
echo "   DELETE  /carros/:id"
echo "   GET     /clientes"
echo "   GET     /clientes/:id"
echo "   POST    /clientes"
echo "   PUT     /clientes/:id"
echo "   PATCH   /clientes/:id"
echo "   DELETE  /clientes/:id"
echo ""
echo "Para testar, use Postman, Insomnia ou navegador."
echo "------------------------------------------"
