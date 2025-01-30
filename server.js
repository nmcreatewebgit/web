// server.js


console.log("Hello, Node.js!");  // サーバー起動前に確認

// 必要なモジュールをインポート
const http = require('http');
const fs = require('fs');
const path = require('path');

// サーバーを作成
const server = http.createServer((req, res) => {
  // リクエストされたファイルパスを取得
  let filePath = '.' + req.url;
  if (filePath == './') {
    filePath = './Profile.html';  // ルートでProfile.htmlを返す
  }

  // ファイルの拡張子を取得
  const extname = path.extname(filePath);
  
  // コンテンツタイプを設定
  let contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'application/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    default:
      contentType = 'text/html';
  }

  // ファイルを読み込んでレスポンスとして送信
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Sorry, there was an error: ${err.code}`);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// サーバーをポート3000で起動
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

const http = require('http');
