// // put in console
// document
// document.getElementById('page-banner')
// var banner = document.getElementByID('page-banner')
// banner
// var bookList = Document.getElementById('book-list')


// var titles = document.getElementsByClassName('title')

// titles[0]
// titles[1]
// var lis = document.getElementsByTagName('li')
// lis
// lis[0]
// lis[1]
// for(i=0; i< titles.length; i++){
// 	console.log(titles[i])
// }

const wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

var books = document.querySelector('#book-list li .name');
console.log(books);

books = document.querySelectorAll('#book-list li .name');
console.log(books);

Array.from(books).forEach(function(book){
  console.log(book);
});