const value = document.querySelectorAll('.box');
const body = document.querySelector('body');
console.log(value);
value.forEach(function(value){
   // console.log(value);
    value.addEventListener('click', function(e){
    //    console.log(e);
    //    console.log(e.target);
        if(e.target.classList.contains('red')){
            body.style.background = "red";
        }
        else if(e.target.classList.contains('skyblue')){
            body.style.background = "skyblue";
        }
        else if(e.target.classList.contains('green')    ){
            body.style.background = "green";
        }
        else if(e.target.classList.contains('yellow')){
            body.style.background = "yellow";
        }
        else if (e.target.classList.contains('pink')){
            body.style.background = "pink";
        }
          
    })
})