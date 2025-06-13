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
echo "Finalizando containers e volumes antigos..."
docker-compose down -v

echo ""
echo "Subindo containers com Docker Compose..."
docker-compose up -d --build

echo ""
echo "Aguardando banco de dados iniciar completamente..."
until docker-compose exec mysqldb mysqladmin ping -h"localhost" --silent; do
  printf "."
  sleep 2
done

echo ""
echo "Executando script de seed..."
docker-compose exec app npm run seed

echo ""
echo "Tudo pronto!"
echo "------------------------------------------"
echo "Acesse a API em: http://localhost:3000"
echo "Endpoints disponíveis:"
echo "   GET     /clientes"
echo "   POST    /clientes"
echo "   GET     /carros"
echo "   POST    /carros"
echo ""
echo "Para testar, use Postman, Insomnia ou navegador."
echo "------------------------------------------"
