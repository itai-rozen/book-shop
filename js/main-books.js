
function init() {
    createBooks()
    renderBooks()

}

function onDeleteBook(bookId) {
    deleteBook(bookId)
}

function onReadaAndAddNewBook() {
    revealModal('.modal-add');
}

function onReadAndUpdateBook(bookId) {
    revealModal('.modal-update')
    updateBook(bookId);
}
function onReadBook(bookId){
    readBook(bookId);

}

function onRateBook() {
    revealModal('.modal-rate')
    renderRateSystem()
}

function onNextPage() {
    nextPage();
    renderBooks();
    doTrans(gCurrLang)
}

function onPrevPage() {
    prevPage();
    renderBooks();
    doTrans(gCurrLang)
}

function onTrans(lang){
    if (lang === 'he') {
        document.body.classList.add('rtl')
    } else {
        document.body.classList.remove('rtl')
    }
    doTrans(lang);
}

