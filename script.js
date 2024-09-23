const bookShelf = document.getElementById("book-shelf");

const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");

const openBookFormButton = document.getElementById("book-form-btn");

const closeBookFormButton = document.getElementById("cancel-btn");

const bookForm = document.getElementById("book-form");

openBookFormButton.addEventListener("click", () =>
  bookForm.classList.toggle("hidden")/*
  onclick hide or show taskForm*/
);

closeBookFormButton.addEventListener("click", () =>
  bookForm.classList.toggle("hidden")/*
  onclick hide or show taskForm*/
);



const myLibrary = [
  {id:1,
    title: "Atomic Habits",
  author: "James Clear",
  pages: "200"
},
  {
    id: 2,
    title: "The 7 Habits of Highly Effective People",
  author:"Stephen R. Covey",
  pages: "300"
     
  },
  {
    id: 3,
    title: "How to Win Friends and Influence People",
  author: "Dale Carnegie", 
  pages: "200"
     }
];
 myLibrary.forEach(
    ({id,title, author, pages }) => {
      bookShelf.innerHTML += `<tr id="${id}"><td><strong>${title}</strong></td><td>${author}</td><td>${pages}</td><td><button onclick="deleteTask(this)" type="button" class="btn">Delete</button></td><td><input type="checkbox"/></td> </tr>`;   
 })

const deleteTask = (buttonEl) => {
  const dataArrIndex = buttonEl.parentElement.id
  ; 
  buttonEl.parentElement.parentElement.remove(); /*then removes the parentElement, the whole div*/
  myLibrary.splice(dataArrIndex, 1);/*removes the element from the array*/
  /*localStorage.setItem("data", JSON.stringify(myLibrary));updates local data storage*/
}

const addBook = () => {
 
  const newBook = {
    id: Date.now(),
    title: titleInput.value,
    author: authorInput.value,
    pages: pagesInput.value,
  }; 


    myLibrary.push(newBook); 
 

  localStorage.setItem("data", JSON.stringify(myLibrary)); 
  updateLibrary();
  reset()
  console.log(myLibrary);
  bookForm.classList.toggle("hidden")
   event.preventDefault();
  
};

const updateLibrary = () => {
  bookShelf.innerHTML = "";
   myLibrary.forEach(
    ({id,title, author, pages }) => {
      bookShelf.innerHTML += `<tr id="${id}"><td><strong>${title}</strong></td><td>${author}</td><td>${pages}</td><td><button onclick="deleteTask(this)" type="button" class="btn">Delete</button></td><td><input type="checkbox" id="completed-checkbox-${id}"/></td> </tr>`;   
 }
  );
   event.preventDefault();
  }

const reset = () => {
  titleInput.value = " ";
  authorInput.value = "";
  pagesInput.value = "";
   event.preventDefault();
}

const completed = () => {
  var readBooks= document.querySelectorAll("input:checked");
  for (var i = 0; i < readBooks.length; i++) {
    readBooks[i].parentElement.parentElement.className="selected"; 
    readBooks[i].checked=false;
  }
  console.log(readBooks);
  
   
  
}
  
const inCompleted = () => {
  
  var readBooks= document.querySelectorAll("input:checked");
  
  for (var i = 0; i < readBooks.length; i++) {
    readBooks[i].parentElement.parentElement.classList.remove("selected");  
    readBooks[i].checked=false; 
 
  }
}
  
  
