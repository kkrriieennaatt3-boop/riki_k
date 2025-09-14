<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>カメラ起動テスト</title>
</head>
<body>
  <h1>カメラ起動テスト</h1>
  <button id="startBtn">カメラを起動</button>
  <br><br>
  <video id="video" autoplay playsinline style="width:90%;max-width:400px;"></video>

  <script>
    const video = document.getElementById("video");
    const btn = document.getElementById("startBtn");

    btn.addEventListener("click", async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" }, // 背面カメラを希望
          audio: false
        });
        video.srcObject = stream;
      } catch (err) {
        alert("カメラにアクセスできません: " + err);
      }
    });
  </script>
</body>
</html>
