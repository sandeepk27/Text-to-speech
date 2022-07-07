let btn = document.querySelector('.s_btn');
btn.onclick = () => {
    let txt = document.querySelector('.e_text').value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.text = txt;
    speech.rate = 1;
    speech.volume = 1;
    speech.pitch = 1;

    speechSynthesis.speak(speech);
}