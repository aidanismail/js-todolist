// deklarasi variable
const todolist = document.getElementById('todolist')
const pencil = document.getElementById('pencil')
const allItems = document.getElementById('allItems')
const userInput = document.getElementById('userInput')


// function saat logo pencil di click
pencil.addEventListener('click', function(){
    allItems.innerHTML ='';
})

//function saat menekan tombol Enter selesai mengetik
userInput.addEventListener('keydown', function(event){
    if(event.key =='Enter'){
        addItem();
    }
})

//function menambahkan item di todolist
function addItem(){
    //bikin variabel h1
    var h1 = document.createElement('h1');
    h1.innerHTML ='-'+ userInput.value;

    //function saat h1 / items di klik
    h1.addEventListener('click', function(){
        if(h1.style.textDecoration == ''){
            h1.style.textDecoration ='line-through'
        } else{
            h1.style.textDecoration =''
        }
    })

    // menekankan items di add setelah items yang lain
    allItems.insertAdjacentElement('beforeend', h1)

    // ngosongin input box saat selesai ngetik
    userInput.value = '';
}