## Starting application for development
1. Create `.env` file with same content as `.env.example`
2. ```npm i```
3. ```docker-compose build```
4. ```docker-compose up```
5. Connect to docker container via `docker exec -it ${containerId} /bin/sh` and run ```npm run db:all```

#### It will run on `localhost:3001`
