// creation des variables:
let form = document.querySelector("form");
let input = document.querySelector("#item");
let list = document.querySelector("ul");
let clearButton = document.querySelector("button");
let taches = JSON.parse(localStorage.getItem("taches"))
  ? JSON.parse(localStorage.getItem("taches"))
  : []; // if you find some data in tache display them , if not give me an empty array
let data = JSON.parse(localStorage.getItem("taches"))
  ? JSON.parse(localStorage.getItem("taches"))
  : []; // get tasks from local storage and convert them to an array to display  them on the page load.

/**Le but de l'exercice :
 * Si on click sur le bouton Add Item , l'input doit être ajouter a la ul sur un li
 * Et si on click sur le bouton Clear Data, on efface la vue et  tout le LocalStorage
 */

// Creer le li dans la ul

/**
 * La fonction CreateLi():
 * Creates a new li element, sets its text content,which is the input.
 * and appends it to the provided list element.
 * @param {string} text - this is the input = text content for the li element.
 * return {HTMLElement} - The created li element
 */
const CreateLi = (text) => {
  let li = document.createElement("li");
  li.textContent = text;
  list.appendChild(li);
};
// loop through data

data.map((item) => {
  CreateLi(item);
});

// ajouter un événement au bouton Add item: submit event:
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //Add to Local Storage
  taches.push(input.value); // On va ajouter a chaque fois les taches au l Storage.
  localStorage.setItem("taches", JSON.stringify(taches));

  // ajouter des li au ul en faisant appel a la fonction createLi() le paramètre est le text de l'input
  CreateLi(input.value);
  input.value = ""; //On vide l'input une fois qu'il est ajouté à la liste.
});

/**
 * Deuxième challenge:
 * Chaque item ajouter a la list doit être ajouter aussi au LocalStorage ==> add to Local Storage
 * Chaque fois qu'on ouvre la page , on trouve nos items dans la list, rapportés du LocalStorage ==> const data = localStorage.getItem('taches')
 *cette data doit être parser
 */


// Clear Data from Local Storage and UI
clearButton.addEventListener('click', () => {
    localStorage.clear();
    list.innerHTML=  "";
 })