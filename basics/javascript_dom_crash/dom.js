// //Examine the Document Object

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// // document.title = "123"

// console.log(document.all);
// console.log(document.links)
// console.log(document.forms)

// Get Element by ID 

// console.log(document.getElementById("header-title"))
// var headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.style.borderBottom = "solid 3px black";

// Get Elements by Class Name
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // Gives Error
// // items.style.backgroundColor = "#f4f4f4"

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }

// Get Elements by Tag Name

// var items = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// // Gives Error
// // items.style.backgroundColor = "#f4f4f4"

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4";
// }

// Query Selector

// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4pix #ccc"
// var input = document.querySelector("input");
// input.value = "Hello World";
// var submit = document.querySelector("input[type=\"submit\"]");
// submit.value = "SEND";
// var item = document.querySelector(".list-group-item");
// item.style.color = "red";
// var  lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";
// var secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

//QUERY SELECTOR ALL 
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

// let odd = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");
// for (let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = "#f4f4f4";
//     even[i].style.backgroundColor = "#ccc";
// }

// Traversing DOM 

//let itemList = document.querySelector("#items");

// Parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "f4f4f4";
// console.log(itemList.parentNode.parentNode);

//Parent Element
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "f4f4f4";
// console.log(itemList.parentElement.parentElement);

// Children 
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background = "yellow";

// First Element Child
// console.log(itemList.firstElementChild)

// // Last Element Child
// console.log(itemList.lastElementChild);

// // Previous Sibling
// console.log(itemList.previousElementSibling);

//Create Element
// Create a div 
// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className = "hello";

// // Add Id 
// newDiv.id = "hello1";

// // Add Attr 
// newDiv.setAttribute("title" ,"Hello Div");

// let newDivText = document.createTextNode("Hello Internet!");

// // Add Text to Div 
// newDiv.appendChild(newDivText);

// console.log(newDiv);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");

// container.insertBefore(newDiv, h1);

// newDiv.style.fontSize = "30px";


// let button = document.getElementById("button").addEventListener("click", buttonClick);
// function buttonClick(e){
//     //console.log("Button CLicked");
//     document.getElementById("header-title").textContent = "Changed";
//     document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//     let output = document.getElementById("output");
//     output.innerHTML = "<h3>"+e.target.id+"</h3>";
//     console.log(e.type)
// }

// let button = document.getElementById("button");
// // button.addEventListener("click", runEvent);
// button.addEventListener("mousemove", runEvent);

// let box = document.getElementById("box");
// box.addEventListener("mousemove", runEvent);
// console.log(box)
// function runEvent(e){
//     console.log("Event Type: " + e.type)
//     document.getElementById("output").innerHTML = "<h4>MouseX: "+ e.offsetX + " </h4><h4>MouseY: " + e.offsetY + "</h4>";
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, 40, ${e.offsetY})`;
// }