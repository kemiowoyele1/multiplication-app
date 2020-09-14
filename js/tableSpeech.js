
function allSpeech(){
    document.addEventListener('deviceready', function () {

    TTS.speak({
        text: 'hello, world!',
        locale: 'en-GB',
        rate: 0.75
    });
});
}
