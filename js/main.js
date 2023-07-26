
var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var addBtn = document.getElementById("addBtn");
var tableBody =document.getElementById("tableBody");

var bookMarks;

if(localStorage.getItem("bookMarks")==null){
    bookMarks=[];
}else{
    bookMarks= JSON.parse(localStorage.getItem("bookMarks"));
    displayBook()
}

addBtn.onclick = function(){
    var bookMark = {
        name :nameInput.value ,
        url :urlInput.value
    }
    bookMarks.push(bookMark);
    localStorage.setItem("bookMarks" ,JSON.stringify(bookMarks));
    displayBook();
}

function displayBook(){
    var marks ="" ;
    for (var i = 0; i < bookMarks.length; i++) {
        marks+=`
        <tr>
            <td>${[i]}</td>
            <td>${bookMarks[i].name}</td>
            <td> <a href="${bookMarks[i].url}"class="btn btn-outline-info">Visit</a> </td>
            <td><button onclick="deleteBook(${i})" class="btn btn-outline-danger">Delete</button></td>
        </tr>
        `
    }
    tableBody.innerHTML=marks;
}

function deleteBook(index){
    bookMarks.splice(index,1);
    localStorage.setItem("bookMarks" ,JSON.stringify(bookMarks));
    displayBook();
}
