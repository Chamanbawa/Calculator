'use strict';


let result = "";
let buttons = document.querySelectorAll('.number');

Array.from(buttons).forEach((button)=>{

  button.addEventListener('click', (item) => {

    if(item.target.innerHTML == '='){

      result = eval(result);
      document.querySelector('.input').value = result;
    }

    else if(item.target.innerHTML == 'Clear'){
      result = ""
      document.querySelector('.input').value = result;
    }
    else {
        result = result + item.target.innerHTML;
        document.querySelector('.input').value = result;


      }
  })
})
