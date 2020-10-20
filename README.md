## Starting application for development
1. Create `.env` file with same content as `.env.example`
2. ```npm i```
3. ```docker-compose build```
4. ```docker-compose up```
5. Connect to docker container via `docker exec -it ${containerId} /bin/sh` and run ```npm run db:all```

#### It will run on `localhost:3001`

Didn't have to much time to provide extended unit and integration tests, created only one
test example - `src/modules/core/room-booking/room-booking.controller/index.spec.ts`

API description (Also available via `Selina.postman_collection.json` in project root)
1. Locations `GET http://localhost:3001/api/country/city/estate`
2. Available `GET http://localhost:3001/api/room/available?estateId=1&from=2020-10-19&to=2020-10-29`
3. Book room
```
POST http://localhost:3001/api/room-booking/book
{
    "from": "2020-10-27",
    "to": "2020-10-28",
    "roomId": 4
}
```
