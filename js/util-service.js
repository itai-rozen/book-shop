function makeId() {
     length = 6;
    let txt = '';
    let charsStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    while(txt.length < length) {
        txt += charsStr.charAt(Math.floor(Math.random() * charsStr.length));
    }

    return txt;
}


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (max !== 100) return Math.floor((Math.random() * (max - min + 1)) + min); //The maximum is inclusive and the minimum is inclusive 
    
    return parseFloat((Math.random() * (max - min + 1)) + min).toFixed(2); //The maximum is inclusive and the minimum is inclusive 
}

function revealModal(className) {
    $(className).removeClass('close');
}

function hideModal(className) {
    console.log('clicked! class: ',className)
    $(className).addClass('close');
}

function showEvent(ev){
    console.log(ev)
}

