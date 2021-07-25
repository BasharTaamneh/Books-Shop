'use strict';
let form = document.getElementById('myform');
let table = document.getElementById('mytable');
let tableFooter = document.getElementById('table-footer');


let tdElement;
function tableHeadrender() {

    let trElement = document.createElement('tr');
    tdElement = document.createElement('td');
    tdElement.textContent = 'Book name';
    trElement.append(tdElement);

    tdElement = document.createElement('td');
    tdElement.textContent = 'Book Pages';
    trElement.append(tdElement);

    tdElement = document.createElement('td');
    tdElement.textContent = 'Price';
    trElement.append(tdElement);
    table.append(trElement);

}
tableHeadrender();

let Books = [];

function Bookshop(Bookname, BookPages, Price) {
    this.Bookname = Bookname;
    this.BookPages = BookPages;
    this.Price = Price;
    Books.push(this);
}

Bookshop.prototype.BookPagesCalc = function () {
    this.BookPages = Math.floor(Math.random() * 501 + 1);
    return this.BookPages;
}

function newBook(event) {
    event.preventDefault();
    let Bname = event.target.bookname.value;
    let Bpages = Bookshop.prototype.BookPagesCalc();
    let Bprice = event.target.bookprice.value;
    new Bookshop(Bname, Bpages, Bprice);
    SavToLocStor();
    Tfootrender();
    form.reset();
    window.location = '';
    // console.log(Books);
}
form.addEventListener('submit', newBook)
let total = 0;
function Tfootrender() {
    tableFooter.textContent = '';
    for (let i = 0; i < Books.length; i++) {

        let trElement = document.createElement('tr');
        tdElement = document.createElement('td');
        tdElement.textContent = Books[i].Bookname;
        trElement.append(tdElement);

        tdElement = document.createElement('td');
        tdElement.textContent = Books[i].BookPages;
        trElement.append(tdElement);

        tdElement = document.createElement('td');
        tdElement.textContent = Books[i].Price + ',00 JOD';
        trElement.append(tdElement);

        tableFooter.append(trElement);
        total += Number(Books[i].Price);
    }
    let trElement = document.createElement('tr');
    tdElement = document.createElement('td');
    tdElement.textContent = 'Total price: ' + total + ',00 JOD';
    trElement.append(tdElement);
    tableFooter.append(trElement);
}
function SavToLocStor() {
    let Data = JSON.stringify(Books);
    localStorage.setItem('Bookstoe', Data);
}

function RedFrLocStor() {
    let storeData = localStorage.getItem('Bookstoe')
    let saveData = JSON.parse(storeData);
    if (saveData !== null) {
        Books = saveData;
        Tfootrender()
    }
}
RedFrLocStor();