const express = require('express'); // 서버기능구현을 위한 core 모듈 express 호출
const path = require('path'); // 경로기능제어하기 위해서 모듈 호출
const cors = require('cors'); // 다른 서버와 연동호출
const app = express(); // 실행해라 

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/contact');

app.use(cors()); // cors 미들웨어를 삽입합니다. 다른 도메인에서 너한테 요청오면 응답해줘

app.use('/', indexRouter);
//추후 리액트 라우터랑 연동할 주소
//리액트의 연락컴포넌트의 폼태그의 데이터를 비동기로 POST 전송받아 저장할 라우터임
//결과여부를 리액트 전송할 라우터임
app.use('/contact', usersRouter);
//주소창 localhost:8080/contact

app.listen(8080, ()=>{
  console.log('server is running on 8080')
})