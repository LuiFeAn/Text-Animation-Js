const slowedTextArea = document.querySelector('#text');
const inputText = document.querySelector('input');


function showSlowedText(){

    slowedText(inputText.value,slowedTextArea,{
        time:30,
    });

}

getInputTextValue();

