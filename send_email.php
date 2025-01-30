<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームデータを取得
    $name = $_POST['name'];
    $kname= $_POST['kname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // メールの内容を作成
    $to = "mao.nakagawa@nagase.co.jp";  // 送信先のメールアドレス
    $subject = "問い合わせフォームからのメッセージ";
    $body = "名前: $kname\nカタカナ: $name\nメールアドレス: $email\n\nメッセージ:\n$message";
    $headers = "From: $email";

    // メールを送信
    if (mail($to, $subject, $body, $headers)) {
        echo "メールが送信されました。";
    } else {
        echo "メールの送信に失敗しました。";
    }
}
?>
