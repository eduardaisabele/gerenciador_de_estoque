let buttonAdd = document.getElementById('buttonAdd');
let buttonRemove = document.getElementById('buttonRemove');
let number = document.getElementById('number');
let contador = 0;

const addElement =
     buttonAdd.addEventListener('click', () => {
          number.innerHTML = contador++;
          console.log(contador);
     });

const removeElement = 
     buttonRemove.addEventListener('click', () => {
          number.innerHTML = contador--;
          console.log(contador);
     });
