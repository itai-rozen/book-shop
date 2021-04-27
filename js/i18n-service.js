'use strict';
let gCurrLang = 'en';
let gTrans = {
    'rate-me': {
        en:'Rate me' ,
        he: 'דרג אותי'
    },
    'next-page': {
        en: 'Next Page',
        he: 'לעמוד הבא'
    },
    'prev-page': {
        en: 'Prev Page',
        he: 'לעמוד הקודם'
    },
    id: {
        en: 'id',
        he: 'מסד'
    },
    name: {
        en: 'name',
        he: 'שם'
    },
    price: {
        en: 'price',
        he: 'מחיר'
    },
    link: {
        en: 'link',
        he: 'קישור'
    },
    actions: {
        en: 'actions',
        he: 'פעולות'
    },
    add: {
        en: 'add+',
        he: '+הוסף'
    },
    'please-rate': {
        en: 'please rate',
        he: 'דרג נא'
    },
    'new-price': {
        en: 'New Price',
        he: 'מחיר עדכני'
    },
    DELETE: {
        en: 'DELETE',
        he: 'מחק'
    },
    UPDATE: {
        en: 'UPDATE',
        he: 'עדכן'
    },
    READ: {
        en: 'READ',
        he: 'קרא'
    },
    'current-rate': {
        en: 'Current Rate:',
        he: 'דרוג נוכחי:'
    },
    'Book-Shop':{
        en: 'Book-Shop',
        he: 'חנות הספרים'
    }
}

function doTrans(lang){
    gCurrLang = lang;
    let elCurrencys = document.querySelectorAll('.currency')
    elCurrencys.forEach(function(elCurrency){
        elCurrency.innerHTML = (gCurrLang === 'en')? '$' : '₪';
    })
    let els = document.querySelectorAll('[data-trans]');
    els.forEach((element,i) => {
        let txt = gTrans[element.dataset.trans][lang]
        element.innerText = txt
    })
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function getCurrencySign(){
    let sign = (gCurrLang === 'en')? '$' : '₪';
    return sign;
}