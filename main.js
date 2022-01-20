//https://teachablemachine.withgoogle.com/models/0GhOSo3Kl/

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/0GhOSo3Kl/model.json",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}