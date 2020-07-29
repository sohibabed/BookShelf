let selector = (select) => {
  return document.querySelector(select);
};
const creatElement = (ele) => {
  return document.createElement(ele);
};
const appendElement = (parent, child) => {
  return parent.appendChild(child);
};

const mainContainer = selector('.container');

const firstShelf = creatElement('div');
const secondShelf = creatElement('div');
const thirdShelf = creatElement('div');
const addButton = creatElement('button');
const titleInput = creatElement('input');
titleInput.placeholder = 'Enter Book Title';
const authorInput = creatElement('input');
authorInput.placeholder = 'Enter Book Author';

const imgInput = creatElement('input');
imgInput.placeholder = 'Enter Image Link';

const submitButton = creatElement('button');
submitButton.textContent = 'Submit';
const form = creatElement('div');

form.className = 'add_form_hidden';
const inputs = [titleInput, authorInput, imgInput, submitButton];
inputs.map((e) => {
  e.className = 'input_style';
});

firstShelf.className = 'first_shelf';
secondShelf.className = 'second_shelf';
thirdShelf.className = 'third_shelf';
addButton.className = 'add_btn';
addButton.textContent = 'Add Book';
let books = [
  {
    title: 'Eloquent javascript',
    author: 'Marijn Haver beke',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5-DiCuIjqT9nyTL7jC9LxveXFE4QCMtrRjKWLV9cs7KQok5D',
  },

  {
    title: 'Java how to program',
    author: 'Paul Deitel',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyD18PC-Z02Np2B8YMUKVwB-YP-9bO9cB3AocpWbFByXmUwI_E',
  },

  {
    title: 'byte of paython',
    author: 'Swaroop C.H',
    image:
      'https://open.umn.edu/opentextbooks/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdmdCIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--5ba77a1b31c9035b4c139f0e158af71c5ab95b23/0000ByteOPyto.png',
  },

  {
    title: 'Men in the sun',
    author: 'Ghassan kanfani',
    image:
      'https://upload.wikimedia.org/wikipedia/ar/4/40/%D8%B5%D9%88%D8%B1%D8%A9_%D8%BA%D9%84%D8%A7%D9%81_%D8%B1%D9%88%D8%A7%D9%8A%D8%A9_%D8%B1%D8%AC%D8%A7%D9%84_%D9%81%D9%8A_%D8%A7%D9%84%D8%B4%D9%85%D8%B3.jpg',
  },

  {
    title: 'Me',
    author: 'Abbas Mahmoud Al-Akkad',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1460482781l/29903921._SX318_.jpg',
  },

  {
    title: 'the castle',
    author: 'Franz Kafka',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyFdvotch0521KVMeYIEcNIdZezkxBtq23aQI46_UjiUMCuGVC',
  },

  {
    title: 'A dreamer in Palestine',
    author: 'Randa Ghazi',
    image:
      'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1227709013i/5936375._UY630_SR1200,630_.jpg',
  },

  {
    title: 'Les Miserables',
    author: 'Victor Hugo',
    image:
      'https://www.kutubpdfbook.com/kutubpdfcafe/cover/Booksstream_k33_imgHMHK2RMH.jpg',
  },
];
books.map((book) => {
  const bookDiv = creatElement('div');
  bookDiv.className = 'book_div';
  const image = creatElement('img');
  image.src = book.image;
  image.className = 'book_img';
  const title = creatElement('p');
  title.textContent = book.title;
  title.className = 'book_title';
  const author = creatElement('p');
  author.textContent = book.author;
  author.className = 'book_author';
  const bookDetails = creatElement('div');
  bookDetails.className = 'book_details';
  appendElement(bookDiv, image);
  appendElement(bookDiv, bookDetails);
  appendElement(bookDetails, title);
  appendElement(bookDetails, author);
  appendElement(firstShelf, bookDiv);
});

appendElement(mainContainer, firstShelf);
appendElement(mainContainer, secondShelf);
appendElement(mainContainer, thirdShelf);

// appendElement(firstShelf, booksSection);

appendElement(mainContainer, addButton);
appendElement(form, titleInput);
appendElement(form, authorInput);
appendElement(form, imgInput);
appendElement(form, submitButton);
appendElement(mainContainer, form);

addButton.addEventListener('click', () => {
  form.className = 'add_form';
});

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  form.className = 'add_form_hidden';

  let newTitle = creatElement('p');
  newTitle.textContent = titleInput.value;
  newTitle.className = 'book_title';

  let newAuthor = creatElement('p');
  newAuthor.textContent = authorInput.value;
  newAuthor.className = 'book_author';

  let book_details = creatElement('div');
  book_details.className = 'book_details';

  let newBook = creatElement('div');
  newBook.className = 'book_div';

  appendElement(book_details, newTitle);
  appendElement(book_details, newAuthor);
  let newImg = creatElement('img');
  newImg.src = imgInput.value;
  newImg.className = 'book_img';

  appendElement(newBook, newImg);
  appendElement(newBook, book_details);
  if (secondShelf.childElementCount < 8) {
    appendElement(secondShelf, newBook);
  } else if (thirdShelf.childElementCount < 8) {
    appendElement(thirdShelf, newBook);
  } else {
    alert('there is no enough space, all shelfs are full');
  }
});
