const slowedTextArea = document.querySelector('#text');
const inputText = document.querySelector('input');


function showSlowedText(){

    slowedTextAnimation(inputText.value,slowedTextArea,{time:30});

}

getInputTextValue();

