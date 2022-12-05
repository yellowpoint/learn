var deviceInfoId = "", //摄像头ID
  num = 0, //摄像头数量
  carema = []; //摄像头ID数组
//在页面加载完成后获得设备ID数组
// window.onload = navigator.mediaDevices.enumerateDevices().then(gotDevices);
function gotDevices(deviceInfos) {
  for (let i = 0; i < deviceInfos.length; ++i) {
    if (deviceInfos[i].kind === 'videoinput') {
      carema.push(deviceInfos[i].deviceId)

    }
  }
  deviceInfoId = carema[0];
  console.log('carema', deviceInfos, carema, deviceInfoId);
  show()
}


var constraints = {
  audio: false,
  video: {
    deviceId: deviceInfoId,
    //放在app里面需要下面配置一下
    "permissions": {
      "audio-capture": {
        "description": "Required to capture audio using getUserMedia()"
      },
      "video-capture": {
        "description": "Required to capture video using getUserMedia()"
      }
    }
  }
};

function show() {
  navigator.mediaDevices.getUserMedia(constraints)
    .then(function (stream) {

      var video = document.getElementById('webcam');

      try {
        window.stream = stream;
        video.srcObject = stream;
      } catch (error) {
        console.log('error', error);
        video.src = window.URL.createObjectURL(stream);
      }
      // this.localMediaStream = stream;
      // video.play(); //这个加不加好像没有影响
    })
    .catch(function (err) {
      console.log(err.name + ": " + err.message);
    });
}




navigator.mediaDevices.getUserMedia({
  audio: false,
  video: true,
})
  .then(function (stream) {
    navigator.mediaDevices.enumerateDevices().then(gotDevices)

  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });




  // carema  ["5497880CAAFAD694182BA250A36CE9D3249BC8B8", "5BF30EFCAF309CC93BE79EAB400F36201D040E8F"] 