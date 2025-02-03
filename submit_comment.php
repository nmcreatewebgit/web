<?php
// submit_comment.php

// コメントをPOSTで受け取る
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['comment'])) {
    // 受け取ったコメント
    $comment = htmlspecialchars($_POST['comment'], ENT_QUOTES, 'UTF-8');

    // ここでデータベースに保存したり、ファイルに保存する処理を行うことができます

    // 例: コメントをレスポンスとして返す
    echo json_encode(['comment' => $comment]);
}
?>
