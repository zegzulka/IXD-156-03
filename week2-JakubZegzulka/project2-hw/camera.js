const video = document.getElementById("video");
const constraints = {
  video: { facingMode: "user" },
  audio: false,
};
async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;
}
startCamera();
