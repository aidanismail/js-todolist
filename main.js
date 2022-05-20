const todolist = document.getElementById('todolist')
const pencil = document.getElementById('pencil')
const allItems = document.getElementById('allItems')
const userInput = document.getElementById('userInput')

pencil.addEventListener('click', function(){
    allItems.innerHTML ='';
})

userInput.addEventListener('keydown', function(event){
    if(event.key =='Enter'){
        addItem();
    }
})

function addItem(){
    var h1 = document.createElement('h1');
    h1.innerHTML ='-'+ userInput.value;

    h1.addEventListener('click', function(){
        h1.style.textDecoration ='line-through'
    })

    allItems.insertAdjacentElement('beforeend', h1)

    userInput.value = '';
}