var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition()

function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}

recognition.onresult = function(event){
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;

    if (Content=="take my selfie"){
        speak()
    }
   
}

function speak(){
    var synth = window.speechSynthesis;
    speakdata="Taking your selfie in 5 seconds"
    var speakthis=new SpeechSynthesisUtterance(speakdata)
    synth.speak(speakthis);
    setTimeout(function (){
        takeSnapshot()
        save()
    }, 5000)

    
    Webcam.attach(camera)
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
    })
}

function save(){
    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src;
    link.href=image
    link.click()
}