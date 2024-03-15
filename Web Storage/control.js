// Selection des Elements:
let theInput = document.querySelector("input");
let allSpan = document.querySelectorAll(".buttons span");
let résultat = document.querySelector(".résultat>span");

// On ajoute un écouteur d'événement sur chaque span de la selection:
/**
 * Chaque span est identifier par une class unique,
 * On ajoute un écouteur d’événement sur chaque span pour appeler la fonction correspondante quand elle est cliqué on peut donc utiliser cette propriété pour déterminer quelle fonction appeler lors d'un clic.
 * e.target.classList.contains("check-item") permet de vérifier si l'élément cliqué contient la classe check-item et appeler la fonction.
 */
allSpan.forEach((span) => {
  span.addEventListener("click", (e) => {
    if (e.target.classList.contains("check-item")) {
      checkItem();
    }

    if (e.target.classList.contains("add-item")) {
      addItem();
    }

    if (e.target.classList.contains("delete-item")) {
      deleteItem();
    }

    if (e.target.classList.contains("show-item")) {
      showItem();
    }
  });
});

function checkInput() {
  résultat.innerHTML = "Aucune donnée à vérifier";
}

function checkItem() {
  if (theInput.value !== "") {
    if (localStorage.getItem(theInput.value)) {
      résultat.innerHTML = `Une donnée trouvée  associée à <span>${theInput.value}</span>`;
    } else {
      résultat.innerHTML = `Aucune donnée trouvée  associée à <span>${theInput.value}</span>`;
    }
  } else {
      checkInput();
  }
}

function addItem() {
  console.log("Add item clicked!");
}

function deleteItem() {
  console.log("Delete item clicked!");
}

function showItem() {
  console.log("Show item clicked!");
}
