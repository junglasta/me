const {createProxyMiddleware} = require('http-proxy-middleware');
    // 노드기능_미들웨어 모듈들

//노드모듈이 배출하는 = 함수 실행(app){ }
module.exports = function(app){
    app.use(
        createProxyMiddleware("/api",{ 	  // 라우팅) 주소창에 "/api"라고 치면
        target:"http://localhost:8080", // 노드 서버에서 뭘 가져와 뿌리겠다!
        changeOrigin:true,
        })
    )
}