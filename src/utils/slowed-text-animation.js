function slowedTextAnimation(text, textArea, options = { time: 800 }){

    if( textArea.innerHTML.length > 0 ){
        textArea.innerHTML = '';
    }

    const splitedText = text.split('');

    const { time } = options;

    let initialWordIndex = 0;

    const intervalId = setInterval(() => {

        if( initialWordIndex < splitedText.length ){
            
            textArea.innerHTML += splitedText[initialWordIndex];
            initialWordIndex++;
        }

        if( initialWordIndex === splitedText.length){
            clearInterval(intervalId);
        }



    },time);

}