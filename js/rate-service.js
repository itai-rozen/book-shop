function renderRateSystem() {
    let book = getCurrBookbj()
    let strHtml = `<div data-trans="please-rate" >${gCurrLang === 'en' ? 'please rate': 'דרג נא'}</div><ul class="rating-list">`
    for (let i = 1; i <= 10; i++){
            strHtml += `<li><div><img class="star-${i}" onclick="updateRate(${i})" src=${i <= book.rate ? "img/star-full.png" : "img/star-empty.png"} /></div></li>`
    }
    strHtml += `</ul>`
    $('.modal-rate').removeClass('green');
    $('.modal-rate button').removeClass('green');
    $('.rating-system').html(strHtml)

}

function getBookRateStr(starsNum) {
    let strHtml = '';
    for (let i = 0; i < starsNum; i++) {
        strHtml += `<img src="img/star-full.png">`
    }
    return strHtml
}

function updateRate(num){
    let book = getCurrBookbj()
    let bookIdx = findIdxById(book.id)
    gBooks[bookIdx].rate = num
    $('.book-rate').html(getBookRateStr(num))
    renderRateSystem() 
    renderBooks()
    $('.modal-rate').addClass('green');
    $('.modal-rate button').addClass('green');
}

