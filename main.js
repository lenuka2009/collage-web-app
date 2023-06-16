var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}


camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}

setTimeout(function () {
    img_id = "selfie";
    take_snapshot();
    speak_data = "taking your next selie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 5000);

function take_snapshot() {
    console.log(img_id);

    webcam.snape(function (data_uri) {
        if (img_id == "selfie") {
            document.getElementById("photo1.jfif").innerHTML = '<img id="photo1.jfif" src="' + data_uri + '"/>';
        }
        if (img_id == "selfie") {
            document.getElementById("photo2.jpg").innerHTML = '<img id="photo1.jfif" src="' + data_uri + '"/>';
        }
        if (img_id == "selfie") {
            document.getElementById("photo3.jfif").innerHTML = '<img id="photo1.jfif" src="' + data_uri + '"/>';
        }

    })


}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#my_camera' );