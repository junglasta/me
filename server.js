const express = require('express'); // 서버기능구현을 위한 core 모듈 express 호출
const path = require('path'); // 경로기능제어하기 위해서 모듈 호출
const cors = require('cors'); // 다른 서버와 연동호출
const app = express(); // 실행해라 

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/contact');
const view1 = require('./routes/view1');

app.use(cors()); // cors 미들웨어를 삽입합니다. 다른 도메인에서 너한테 요청오면 응답해줘

app.use('/', indexRouter);
app.use('/contact', usersRouter); //주소창 localhost:8080/contact
app.use('/view1', view1); //주소창 localhost:8080/view1

// listen 포트 지정 & 서버 실행
app.listen(8080, ()=>{
  console.log('서버 구동용 포트는 8080')
})