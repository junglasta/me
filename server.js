const express = require('express'); // 서버기능 구현 위한 핵심 모듈인 express 호출
const path = require('path'); // 경로 기능 구현 위해 모듈 path 호출 (아직 사용x)
const cors = require('cors'); // 노드 외 서버를 연동하기 위한 모듈
const app = express(); // express 실행! (←그 자체를 app이라고 부름)

app.use(cors()); // app에 cors 미들웨어 삽입 "다른 서버 명령 오면 내치지말고 받아들여 (라우트 중요 메서드)get/post, use"

app.get('/', (req,res) => { // 주소창에 ~/ 치면 → get방식으로 서버 쪽에서 처리
  res.send({message:'hello'}); // -> 요청패스에 대한 응답할게, {~~}라고!
});

//포트는 8080 ex)한국 서버
app.listen(8080, ()=>{
  console.log('server is running on 8080') // 요청에 대한 응답
})