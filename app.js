
let input = document.getElementById("itemInput");
let button = document.getElementById("addBtn");
let ul = document.getElementById("itemList");

button.addEventListener("click", function () {

    if (input.value === "") {
        alert("Please enter an item");
    }

    let li = document.createElement("li");
    li.textContent = input.value;

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(removeBtn);
    ul.appendChild(li);

    input.value = "";
});
