let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// Form Submit Event
form.addEventListener("submit", addItem)
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItems);

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById("item").value;

    let li =document.createElement('li');
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(newItem));
    
    let deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";


    itemList.appendChild(li);
}

function removeItem(e){
    e.preventDefault();
    if (e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            let li1 = e.target.parentElement;
            itemList.removeChild(li1);
        }
    }
}

function filterItems(e){
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName("li");
    Array.from(items).forEach(function(item){
        let iterName = item.firstChild.textContent;
        if (iterName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
}