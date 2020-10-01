const displayMediaOptions = {
  video: {
    cursor: "always",
  },
  audio: false,
};

class CaptureMedia {
  constructor(config) {
    this.videoElement = config.videoElement;
    this.setIsCapturing = config.setIsCapturing;
    this.setIsRecording = config.setIsRecording;
    
    this.mediaStream = null;
    this.mediaRecorder = null;
  }
  async startCapture() {
    try {
      this.mediaStream = await navigator.mediaDevices.getDisplayMedia(
        displayMediaOptions
      );

      this.videoElement.current.srcObject = this.mediaStream;
      this.setIsCapturing(true);
    } catch (err) {
      console.error("Error: " + err);
    }
  }
  stopCapture() {
    let tracks = this.videoElement.current.srcObject.getTracks();
    tracks.forEach((track) => track.stop());

    this.videoElement.current.srcObject = null;
    this.setIsCapturing(false);
  }
  dataAvail(event) {
    if (event.data.size > 0) {
      const blob = new Blob([event.data], {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "test.webm";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  }
  startRecording() {
    this.mediaRecorder = new MediaRecorder(this.mediaStream, {
      mimeType: "video/webm; codecs=vp9",
    });
    this.mediaRecorder.ondataavailable = this.dataAvail;
    this.mediaRecorder.start();
    this.setIsRecording(true);
  }
  stopRecording() {
    this.mediaRecorder.stop();
    this.setIsRecording(false);
  }
}

export default CaptureMedia