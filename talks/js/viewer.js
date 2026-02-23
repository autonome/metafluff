(function() {

  var firstRun = !!localStorage.firstRun || true,
      server = window.location.hostname,
      port = 8009,
      socketURL = 'wss://' + server + ':' + port,
      socket = null;

  console.log('firstRun', firstRun);

  function onDCL() {
    // initialize websocket connection
    socket = new WebSocket(socketURL);

    socket.onopen = function() {
      console.log('socket opened')

      // ensures binary sends work correctly
      socket.binaryType = "arraybuffer";

      // register with server
      socket.send(JSON.stringify({ 'firstRun': firstRun }));
      console.log('registered!');

      socket.onmessage = function(msg) {
        var obj = JSON.parse(msg.data);
        console.log('ws message:', obj)
      };
    };
  }
  window.addEventListener('DOMContentLoaded', onDCL);

  function startCamera() {
    // initialize camera source
    var vid = document.querySelector('#vid');
    cameraSource.start({
      videoElement: vid,
      callback: function() {
        console.log('videoooo')
      }
    });

    var button = document.createElement('button')
    button.innerText = 'take snapshot'
    button.addEventListener('click', function() {
      // uncomment for trashbeaty v1 testing
      //cameraSource.snapshot();

      cameraSource.snapshotToCanvas(function(canvas) {
        // local test
        var img = document.createElement('img')
        img.src = canvas.toDataURL()
        document.body.appendChild(img)

        var context = canvas.getContext('2d'),
            image = context.getImageData(0, 0, canvas.width, canvas.height),
            buffer = new ArrayBuffer(image.data.length),
            bytes = new Uint8Array(buffer);
        for (var i = 0; i < bytes.length; i++) {
            bytes[i] = image.data[i];
        }
        socket.send(buffer);
      });
    });
    document.body.appendChild(button)
  }
})();
