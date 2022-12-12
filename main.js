Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera")
Webcam.attach("#camera")
function takesnapshot() {
    Webcam.snap(function(dataURI){
        document.getElementById('result').innerHTML = "<img id ='captured_image' src='"+dataURI+"'>"
    });
}
console.log("ml5 version :", ml5.version)
classifier = ml5.imageClassifier("", modelLoaded)
function modelLoaded() {
    console.log("Model Loaded!")
}
function check () {
    img = document.getElementById("captured_image")
    classifier.classify(img,gotResults)
}
function gotResults(error,results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        document.getElementById("result_name").innerHTML = results[0].label
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}