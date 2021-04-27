const BOOKS_PER_PAGE = 5
const NUMBER_OF_BOOKS = 30
let gBooks = []
let gCurrPageIdx = 0
let gCurrBookObj
let NUMBER_OF_PAGES 

function createBooks() {
    for (let i = 0; i < NUMBER_OF_BOOKS; i++) {
        let book = createBook(getRandBookName())
        gBooks.push(book)
    }
    console.log(gBooks)

}

function createBook(bookName) {
    return {
        id: makeId(),
        name: bookName,
        price: getRandomIntInclusive(30, 100),
        rate: getRandomIntInclusive(1, 10)
    }
}

function renderBooks() {
    let books = getBooks();
    let strHtmls = books;
    NUMBER_OF_PAGES = Math.ceil(gBooks.length/BOOKS_PER_PAGE)
    renderPagesPoints()

    strHtmls = books.map((book) => {
        return `<tr><th scope="row">${book.id}</th>
                <td class="book-name-col"> ${book.name} </td>
                <td class="update-price"> ${book.price}<span class="currency">$</span> </td>
                <td class="book-actions-col">
                <button onclick="onDeleteBook('${book.id}')" data-trans="DELETE" class="btn-del">DELETE</button>
                <button onclick="onReadAndUpdateBook('${book.id}')" data-trans="UPDATE" class="btn-update">UPDATE</button>
                <button onclick="onReadBook('${book.id}')" data-trans="READ" class="btn-read">READ</button>
                </td>
                </tr>`
    });
    $('tbody').html(strHtmls.join(''));
    renderCurrPagePoint()
    doTrans(gCurrLang)

}
function renderPagesPoints(){
    console.log('entered renderPagesPoints')
    let strHtml = ''
    for (i = 0; i < NUMBER_OF_PAGES ; i++) {
        strHtml += `<div class="page-point"></div>`
    }
    $('.page-points').html(strHtml)
}

function renderCurrPagePoint() {
    console.log('entered renderCurrPagePoint')
    let elPoints = document.querySelectorAll('.page-point')
    elPoints.forEach((point,i) => {
        if (i === gCurrPageIdx) point.classList.add('shine')
        else point.classList.remove('shine')
    } 
    )
}

function getRandBookName() {
    let loremStr = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorem nesciunt modi nemo' +
        'tempore, iste nam reiciendis sapiente quae repudiandae distinctio odio quod. Consequatur iste iusto veniam' +
        'incidunt, id unde!';
    let loremWords = loremStr.split(' ');
    let bookName = '';
    for (let i = 0; i < getRandomIntInclusive(1, 3); i++) {
        let randLorem = getRandomIntInclusive(0, loremWords.length - 1);
        bookName += loremWords[randLorem] + ' ';
    }
    return bookName;
}

function deleteBook(id) {
    let bookIdx = findIdxById(id);
    gBooks.splice(bookIdx, 1);
    renderBooks()

}

function addBook() {
    let bookName = $('.book-name').val()
    let price = $('.book-price').val()
    price = +price
    if (bookName){
        let book = createBook(bookName)
        book.price = price.toFixed(2)
        gBooks.unshift(book)
        renderBooks()
        // renderPagesPoints()
        hideModal('.modal-add')
    } else alert('the name must contain one character')
}



function submittedPrice() {
    return $('.new-price').val();
}

function updateBook(id) {
    let book = getObjectById(id)
    gCurrBookObj = book
    $('.update-name-input').attr("placeholder",book.name)
    $('.update-price-input').attr("placeholder",book.price)

}

function updateProps() {
    let bookIdx = findIdxById(gCurrBookObj.id)
    let book = gBooks[bookIdx]
    let newName =  $('.update-name-input').val()
    let newPrice = $('.update-price-input').val()
    newPrice = +newPrice
    book.name = (newName) ? newName : book.name
    book.price = (newPrice) ? newPrice.toFixed(2) : book.price
    hideModal('.modal-update')
    renderBooks()
    $('.update-name-input').val('')
    $('.update-price-input').val('')
}





function findIdxById(id) {
    return gBooks.findIndex(book => book.id === id)
}

function getObjectById(id) {
    return gBooks.find(book =>  book.id === id);
}

function readBook(id) {
    $('.modal-container').removeClass('close');
    let book = getObjectById(id);
    gCurrBookObj = book
    $('.centered').text(book.name);
    $('.price').html(book.price + getCurrencySign());
    let strRate = getBookRateStr(book.rate)
    $('.book-rate').html(strRate);
}


function nextPage() {
    if (gCurrPageIdx === NUMBER_OF_PAGES - 1) return;
    gCurrPageIdx++;
    console.log(gCurrPageIdx)
    renderCurrPagePoint()
}
function prevPage() {
    if (gCurrPageIdx === 0) return;
    gCurrPageIdx--;
    renderCurrPagePoint()
}

function getBooks() {
    let fromIdx = gCurrPageIdx * BOOKS_PER_PAGE
    let books = gBooks.slice(fromIdx, fromIdx + ( BOOKS_PER_PAGE) )
    return books;
}

function getCurrBookbj(){
    return gCurrBookObj
}

