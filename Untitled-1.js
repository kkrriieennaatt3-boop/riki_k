document.getElementById("startBtn").addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment" }, audio: false
    });
    const video = document.getElementById("video");
    video.srcObject = stream; // <video>に映す
  } catch (err) {
    alert("カメラ起動エラー: " + err);
  }
});
