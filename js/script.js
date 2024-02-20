//1.
const ageUserOne = 51 // prompt

//2.
const ageUserTwo = 52 // prompt

let message = '';

//3. e 4.
if(ageUserOne > ageUserTwo){
  message = 'Utente uno è maggiore di utente due'
}else if (ageUserOne < ageUserTwo){
  message = 'Utente uno è minore di utente due'
}else{
  message = 'I due utenti hanno la stessa età'
}

document.getElementById('output').innerHTML = message;
