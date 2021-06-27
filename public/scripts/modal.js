export default function Modal(){


const modalWrapper = document.querySelector('.modal-wrapper');
const cancelButton = document.querySelector('.button.cancel');

cancelButton.addEventListener("click", close);

    function open(){
        //functionality to attribute the active class to the modal
        modalWrapper.classList.add("active");
    }
    function close(){
        //functionality to remove the active class to the modal
        modalWrapper.classList.remove("active")
    }

    return{
        open, close
    }
}