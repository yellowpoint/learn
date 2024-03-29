

function initSourceWebcam() {
  // init default value
  var onError = function (error) {
    alert('Webcam Error\nName: ' + error.name + '\nMessage: ' + error.message);
  }

  // var domElement = document.createElement('video');
  var domElement = document.getElementById('webcam');;

  domElement.setAttribute('autoplay', '');
  domElement.setAttribute('muted', '');
  // domElement.setAttribute('playsinline', '');
  // domElement.style.width = document.documentElement.clientWidth - 20 + 'px';
  // domElement.style.height = document.documentElement.clientHeight - 20 + 'px';

  // check API is available
  // if (navigator.mediaDevices === undefined || navigator.mediaDevices.enumerateDevices === undefined || navigator.mediaDevices.getUserMedia === undefined) {
  //   if (navigator.mediaDevices === undefined) {
  //     var fctName = 'navigator.mediaDevices';
  //   }
  //   else if (navigator.mediaDevices.enumerateDevices === undefined) {
  //     var fctName = 'navigator.mediaDevices.enumerateDevices';
  //   }
  //   else if (navigator.mediaDevices.getUserMedia === undefined) {
  //     var fctName = 'navigator.mediaDevices.getUserMedia';
  //   }
  //   else {
  //     console.assert(false);
  //   }
  //   onError({
  //     name: '',
  //     message: 'WebRTC issue-! ' + fctName + ' not present in your browser'
  //   });
  //   return null;
  // }

  // get available devices
  navigator.mediaDevices.enumerateDevices().then(function (devices) {

    var userMediaConstraints = {
      audio: false,
      video: true,
      // video: {
      //   facingMode: 'environment',
      // }
    }

    // get a device which satisfy the constraints
    navigator.mediaDevices.getUserMedia(userMediaConstraints).then(function success(stream) {
      domElement.srcObject = stream;
      // document.body.addEventListener('click', function () {
      //   domElement.play();
      // });
      // wait until the video stream is ready
      // var interval = setInterval(function () {
      //   if (!domElement.videoWidth) {
      //     return;
      //   }
      //   // stage.appendChild(domElement);
      //   // document.body.appendChild(domElement)
      //   clearInterval(interval);
      // }, 1000 / 50);
    }).catch(function (error) {
      onError({
        name: error.name,
        message: error.message
      });
    });
  }).catch(function (error) {
    onError({
      message: error.message
    });
  });

  return domElement;
}

// document.body.appendChild()
// initSourceWebcam()

export default initSourceWebcam