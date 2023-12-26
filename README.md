# express-server-typescript
Simple template for express server in typescript

To run:
npm start

##### Express server will listen to port 5500

#### API (endpoints)
1. http://localhost:5500/api/heartbeat - 
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 26
ETag: W/"1a-irHFiEx7cjKtgknq6Oyb1nGfbgc"
Date: Tue, 26 Dec 2023 09:03:23 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"status":"App is alive!"}
```

2. http://localhost:5500/api/dummyresult - 
```
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 150
ETag: W/"96-YhzRvCJcWBhtINQhCwdAfN0v9FU"
Date: Tue, 26 Dec 2023 09:03:57 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":111,"subObject":{"name":"lior","positive":true,"innerArray":[1,2,3,{"type":"this is some type","guid":"af54b775-a88b-4ea1-b018-a0e89658e9ac"}]}}
```