const addBook = document.getElementsByClassName("button")[0];
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
const checkboxDemo = document.getElementById("checkbox");
const formContainer = document.getElementById("form-container");
let closeCard = document.getElementsByClassName("close-card");
let readBtn = document.getElementsByClassName("read-button");
let dateMonth ="";
let i = 0;
let myLibrary = [
];


class Book{
    constructor(name, author, pages, language, pubDate, status) {
            this.name = name 
            this.author = author
            this.pages = pages
            this.language = language
            this.pubDate = pubDate
            this.status = status
    }

}

function addBookToLibrary(){
    let book = new Book(bookName.value, author.value, pages.value, 
        language.value, date.value, bookStatus.value);
        myLibrary.push(book);
}


function readStatusTogLib(){
    if(myLibrary[i].status == "read"){
        // console.log("if statement working");
        // console.log(this.parentElement.parentElement);
        this.parentElement.parentElement.classList.add("books-read");
        this.parentElement.parentElement.classList.remove("books-unread");
        this.innerHTML = "Mark as read";
        this.classList.add("read-status");
        this.classList.remove("unread-status");

    }
    else{
        this.parentElement.parentElement.classList.add("books-unread");
        this.parentElement.parentElement.classList.remove("books-read");
        this.innerHTML = "Mark as unread";
        this.classList.add("unread-status");
        this.classList.remove("read-status");

    }
}

const bookDemo = new Book("A Game of Thrones",  "George R. R. Martin", "694",
                             "English", "1996-07-01", "read")
myLibrary.push(bookDemo);
readLibrary();


function readLibrary(){
    // console.log(i);
    for(; i < myLibrary.length ; i++){

        // console.log(i);
        let bookOne = document.createElement("div");
        bookOne.setAttribute("data-index", i)
        bodyBooks.appendChild(bookOne);
        let p0 = document.createElement('p');
        let cross = document.createElement("button");
        cross.setAttribute("class", "close-card")
        let iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let iconPath = document.createElementNS(
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
        bookOne.appendChild(p1);

        let p2 = document.createElement('p');
        bookOne.appendChild(p2);

        let p3 = document.createElement('p');
        bookOne.appendChild(p3);

        let p4 = document.createElement('p');
        bookOne.appendChild(p4);

        let p5 = document.createElement('p');
        console.log(myLibrary[i].pubDate)
        let dateDemoValue = myLibrary[i].pubDate;
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
        bookOne.appendChild(p5);


        let p6 = document.createElement('p');
        var checkbox = document.createElement('button');
        checkbox.type = "button";
        checkbox.name = "read";
        checkbox.innerHTML = "Mark as read"
        checkbox.classList.add("read-button");
            var label = document.createElement('label');
            label.htmlFor = "read";
        p6.appendChild(checkbox);
        bookOne.appendChild(p6);
        console.log(myLibrary[i].status)
        let toggleStatus = readStatusTogLib.bind(checkbox);
        toggleStatus();
        p1.innerText = myLibrary[i].name;
        p2.innerText = "By: " + myLibrary[i].author;
        p3.innerText = "Number of pages: " +myLibrary[i].pages;
        p4.innerText = "langauge: " + myLibrary[i].language;
        p5.innerText = "Published: " + dateMonth + " " + dateValue[2] + " " + dateValue[0];
        checkbox.value = myLibrary[i].status;
        dateMonth = "";


    }
}


// function readStatusTog(){
//     console.log("outer function working")
//     if(this.parentElement.parentElement.classList.contains("books-unread")){
//         // console.log("if statement working");
//         // console.log(this.parentElement.parentElement);
//         this.parentElement.parentElement.classList.add("books-read");
//         this.parentElement.parentElement.classList.remove("books-unread");
//         this.innerHTML = "Mark as read";
//         this.classList.add("read-status");
//         this.classList.remove("unread-status");

//     }
//     else{
//         this.parentElement.parentElement.classList.add("books-unread");
//         this.parentElement.parentElement.classList.remove("books-read");
//         this.innerHTML = "Mark as unread";
//         this.classList.add("unread-status");
//         this.classList.remove("read-status");

//     }
// }

readBtn[0].__proto__.removeDiv = function(){
        this.onclick = function(){
            if(this.parentElement.parentElement.classList.contains("books-unread")){
                // console.log("if statement working");
                // console.log(this.parentElement.parentElement);
                this.parentElement.parentElement.classList.add("books-read");
                this.parentElement.parentElement.classList.remove("books-unread");
                this.innerHTML = "Mark as read";
                this.classList.add("read-status");
                this.classList.remove("unread-status");
        
            }
            else{
                this.parentElement.parentElement.classList.add("books-unread");
                this.parentElement.parentElement.classList.remove("books-read");
                this.innerHTML = "Mark as unread";
                this.classList.add("unread-status");
                this.classList.remove("read-status");
        
            }
            
        }

}
//  readBtn[0].removeDiv();

checkStatus();






function checkStatus(){
    for(let j= 0; j < readBtn.length; j++){
        console.log(j + " this is outside the for j loop")
            // console.log(j)
            // console.log(readBtn[j])

            readBtn[j].removeDiv();
        }
}



function closeCards(){
    for(let j= 0; j < closeCard.length; j++){
    closeCard[j].onclick = function(){
    this.parentElement.parentElement.remove();
    let x = this.parentElement.parentElement.getAttribute("data-index");
    myLibrary.splice(x, 1);
    checkStatus();
    if(i >= 1)  {i--};
}
    }}
closeCards();


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
    // console.log(myLibrary.length)
    readLibrary();
    dateMonth ="";
    errorMessage.style.display = "none"
    
    closeCard = document.getElementsByClassName("close-card");
    readBtn = document.getElementsByClassName("read-button");

    container.classList.remove("blur");
    formPopup.classList.add("hide-popup");
    closeCards();
    checkStatus();
    form.reset();
    // readBtn[1].removeDiv();


    }
})

/*Form Code*/



addBook.onclick = function(){
    container.classList.add("blur");
    formPopup.classList.remove("hide-popup");
    closeCards();
}
