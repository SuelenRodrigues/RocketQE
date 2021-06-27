import Modal from './modal.js';

const modal = Modal();
const modalTitle = document.querySelector('.modal h2');
const modalDescription = document.querySelector('.modal p');
const modalButton = document.querySelector('.modal button');

//Get all buttons with class "check"
const checkButtons = document.querySelectorAll(".actions a.check");

checkButtons.forEach(button =>{
button.addEventListener("click", handleClick)
});

/*When delete button is clicked the modal opens*/
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
button.addEventListener("click", (event) => handleClick(event, false))
});

function handleClick(event, check=true){

    event.preventDefault();

    const text = check ? "Check as read" : "Delete";
    const form = document.querySelector(".modal form");
    const roomId = document.querySelector("#room-id").dataset.id;
    const slug = check ? "check": "delete";
    const questionId = event.target.dataset.id;

    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

    modalTitle.innerHTML = `${text} this question`;
    modalDescription.innerHTML = `Are you sure you want to ${text.toLowerCase()} this question?`;

    modalButton.innerHTML = `Yes, ${text.toLowerCase()}`;

    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");
    modal.open();
};