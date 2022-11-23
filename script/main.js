let btnGroup = document.querySelector("#btn-group");
let btnDown = document.querySelector("#btn-down");
let listContact = document.querySelector("#number-contacts");
let contacts = document.querySelector("#tbody");
let addContact = document.querySelector("#add_icon");
let newContact = document.querySelector("#newContact");
let closeContact = document.querySelector("#btn_close");
let addUser = document.querySelector("#addUser")

btnGroup.addEventListener("click", function () {
  let listGroup = document.querySelector("#list-group");
  if (listGroup.classList[0] == "list-off") {
    listGroup.classList.replace("list-off", "list");
    btnDown.style.transform = "rotate(-180deg)";
  } else {
    listGroup.classList.replace("list", "list-off");
    btnDown.style.transform = "rotate(0deg)";
  }
});

addContact.addEventListener("click", function () {
  newContact.classList.replace("add_contact-off", "add_contact");
});

closeContact.addEventListener("click", function () {
  newContact.classList.replace("add_contact", "add_contact-off");
});

function refreshNumberContacts() {
  listContact.innerHTML = `(${contacts.children.length - 1})`;
}

addUser.addEventListener("click", function (e) {
    e.preventDefault()
    addNewContact()
})

function addNewContact(){
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let number = document.querySelector("#number");
  let group = document.getElementsByName("group");
  let inputEmpyt = name == "" && email == "" && number == "";

  if(!inputEmpyt) {
    for(i = 0; i < group.length; i++) {
      if(group[i].checked){
        let tbody = document.querySelector("tbody");
        let nameF = `<td id="user-name">${name.value}</td>`
        let emailF = `<td id="user-email">${email.value}</td>`
        let numberF = `<td><a id="user-phone" href="tel:+55${number.value}" class="phone">
        ${number.value}</a></td>`
        let id = `<td>${Math.round(Math.random() * 1000)}</td>`
        let groupF = `<td><div class="group-user">${group[i].value}</div></td>`
        tbody.innerHTML += `<tr>${nameF+emailF+groupF+id+numberF}</tr>`
      }
    }
  }

  name.value = ""
  email.value = ""
  number.value = ""
    
    refreshNumberContacts();
}

