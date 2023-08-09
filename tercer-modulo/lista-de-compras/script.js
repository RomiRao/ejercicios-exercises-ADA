const $ = (selector) => document.getElementById(selector);

let shoppingList = [];

//to update the array
const addItem = () => {
    shoppingList.push($("newItemInput").value);
    $("newItemInput").value = "";
    updateList(shoppingList);
};

const updateList = (shoppingList) => {
    $("list").innerHTML = "";
    shoppingList.forEach((item, index) => {
        //creates item list
        let liContent = document.createTextNode(`${item}`);
        let liItem = document.createElement("li");
        liItem.appendChild(liContent);
        liItem.classList.add("list-item");
        $("list").appendChild(liItem);

        //create update btn
        const updateBtn = document.createElement("button");
        updateBtn.innerHTML = "📝";
        updateBtn.classList.add("btn");
        liItem.appendChild(updateBtn);
        updateBtn.addEventListener("click", () => updateItem(index));

        //create delete btn
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "🚫";
        deleteBtn.classList.add("btn");
        liItem.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", () => deleteItem(item));
    });
};

const deleteItem = (item) => {
    shoppingList = shoppingList.filter((listItem) => {
        return listItem !== item;
    });
    updateList(shoppingList);
};

const updateItem = (itemIndex) => {
    let newvalue = prompt("cambio");
    shoppingList[itemIndex] = newvalue;
    updateList(shoppingList);
};

const switchMode = () => {
    if ($("body").getAttribute("data-theme") === "light") {
        $("body").setAttribute("data-theme", "dark");
        $("modeBtn").innerText = "☀️";
    } else {
        $("body").setAttribute("data-theme", "light");
        $("modeBtn").innerText = "🌑";
    }
};

$("addButton").addEventListener("click", () => addItem());

$("modeBtn").addEventListener("click", () => switchMode());
