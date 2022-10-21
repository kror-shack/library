const addBook = document.getElementsByClassName("button")[0];
const demoBook = document.getElementById("demoBook")
const bodyBooks = document.getElementsByClassName("body-books")[0];
const closeButton = document.getElementById("close-popup");
const formPopup = document.getElementsByClassName("form-popup")[0];
const errorMessage = document.getElementById("error");
const bookName = document.querySelector('#book_name');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const language = document.querySelector('#language');
const date = document.querySelector('#date');
const bookStatus = document.querySelector('#status');
const submitButton = document.getElementById("add-book");
const container = document.getElementsByClassName("page-container")[0];
const form = document.getElementById('form');
let closeCard = document.getElementsByClassName("close-card");
let dateMonth ="";
let myLibrary = [];

function Book(name, author, pages, language, pubDate, status) {
        this.name = name
        this.author = author
        this.pages = pages
        this.language = language
        this.pubDate = pubDate
        this.status = status
}

// function createNewBook() {
//     let book = new Book(bookName.value, author.value, pages.value, 
//                         language.value, date.value, bookStatus.value);
//     myLibrary.push(book);
//     console.log(myLibrary);
// }

function addBookToLibrary(){
    let book = new Book(bookName.value, author.value, pages.value, 
        language.value, date.value, bookStatus.value);
    myLibrary.push(book);
    // for (let i = 0; i < myLibrary.length; i++) {
        let bookOne = document.createElement("div");
        bodyBooks.appendChild(bookOne);

        const p0 = document.createElement('p');
        const cross = document.createElement("button");
        cross.setAttribute("class", "close-card")
        const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const iconPath = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        iconSvg.setAttribute('fill', 'currentcolor');
        iconSvg.setAttribute('viewBox', '0 0 24 24');
        iconPath.setAttribute(
          'd',
          'M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z'
        );
        iconSvg.setAttribute('width', '24px');
        iconSvg.setAttribute('heigth', '24px');
        iconSvg.appendChild(iconPath);
        cross.appendChild(iconSvg);
        p0.appendChild(cross);
        bookOne.appendChild(p0);

        let p1 = document.createElement('p');
        p1.innerText = bookName.value;
        bookOne.appendChild(p1);

        let p2 = document.createElement('p');
        p2.innerText = "By: " + author.value;
        bookOne.appendChild(p2);

        let p3 = document.createElement('p');
        p3.innerText = "Number of pages: " +pages.value;
        bookOne.appendChild(p3);

        let p4 = document.createElement('p');
        p4.innerText = "langauge: " + language.value;
        bookOne.appendChild(p4);

        let p5 = document.createElement('p');
        let dateDemoValue = date.value;
        let dateValue = dateDemoValue.split("-");

            switch(dateValue[1]){
                case '01':
                    dateMonth = 'Jan';
                    break;
                case '02':
                    dateMonth = 'Feb';
                    break;
                case '03':
                    dateMonth = 'March';
                    break;
                case '04':
                    dateMonth = 'April';
                    break;
                case '05':
                    dateMonth = 'May';
                    break;
                case '06':
                    dateMonth = 'June';
                    break;
                case '07':
                    dateMonth = 'July';
                    break;
                case '08':
                    dateMonth = 'August';
                    break;
                case '09':
                    dateMonth = 'Sep';
                    break;
                case '10':
                    dateMonth = 'Oct';
                    break;
                case '11':
                    dateMonth = 'Nov';
                    break;
                case '12':
                    dateMonth = 'Dec';
                    break;
            }
        p5.innerText = "Published: " + dateMonth + " " + dateValue[2] + " " + dateValue[0];
        bookOne.appendChild(p5);


        let p6 = document.createElement('p');
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "read";
        checkbox.value = bookStatus.value;
        if(bookStatus.value == "read"){
            checkbox.click();
        }
        checkbox.id = "read";
            var label = document.createElement('label');
            label.htmlFor = "read";
            label.appendChild(document.createTextNode('Mark as read: '));
        p6.appendChild(label);
        p6.appendChild(checkbox);
        bookOne.appendChild(p6);

        // let p7 = document.createElement("input");
        // p7.setAttribute("label")


    //   }
}

console.log(closeCard);

function closeCards(){
    console.log("dfdfkjf")
    for(let j= 0; j < closeCard.length; j++){
        console.log("kjfdskjfd")
    closeCard[j].onclick = function(){
    console.log("happyclicking");
    closeCard[j].parentElement.parentElement.remove();

}
    }}
    closeCards();

    // closeCard[0].onclick = function(){
    //     console.log("happy")
    //     closeCard[0].parentElement.parentElement.remove();
    // }


// function newBook(){
// let book = new Book('bookName.value', 'author.value', 'pages.value', 
//                         'language.value', 'date.value', 'bookStatus.value');
// }

/*Form Code*/
closeButton.onclick = function(){
    formPopup.classList.add("hide-popup");
    container.classList.remove("blur");
}

form.addEventListener('submit', e => {
    if(bookStatus.value == "none"){
        e.preventDefault();
        errorMessage.style.display = "block"
    }
    else{
    addBookToLibrary();
    dateMonth ="";
    closeCard = document.getElementsByClassName("close-card");
    console.log(closeCard);
    container.classList.remove("blur");
    formPopup.classList.add("hide-popup");
    closeCards();
    form.reset();

    }
})

/*Form Code*/



addBook.onclick = function(){
    container.classList.add("blur");
    formPopup.classList.remove("hide-popup");
    closeCards();
    // const book1 = new Book('steve', 'X');
    // bookOne.setAttribute("div")
    // console.log(book1)
    // console.log(bodyBooks)
    // bodyBooks.appendChild(bookOne);
}

/*Close button
trying to assign on click to all the buttons that may or may not exist*/