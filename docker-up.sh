
if ! docker ps | grep -q "mysqlScrum"; then
  echo "🚀 Iniciando o MySQL container..."
  docker-compose up -d mysql  
 
  sleep 5
else
  echo "⚡ MySQL já está em execução."
fi

npm run init:dev && nest start --watch
