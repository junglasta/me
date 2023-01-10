// app.js
const express = require('express');
const router = express.Router();

// get 메서드 - 주소창 보고 요청받아 처리
router.get('/', (req, res)=>{
    res.send('나는 노드 서버 첫뷰에요')
})
// get 메서드 - 주소창 보고 요청받아 처리
router.get('/about', (req, res)=>{
    res.send({
        title:"리액트 소개페이지의 타이틀로 보내져서 나오니까 API연동이라고 하자",
        num : 10
    })
})

module.exports = router; // 메인에 router 출력되도록!