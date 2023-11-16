// Créer un simulateur de lancés de dé
// Lorsque vous lancer votre page de navigateur, 
// je veux voir apparaitre le résultat la face d'un dé à 6 face (faire apparaitre une image).

// Quelques conseils pour réussir l'exercice :

// Essayez de décomposer au maximum le projet et allez y étape par étape.
// Faites votre structure HTML avec votre image
// Changer la source de votre image à l'aide de JS
// Récupérer dans la console un nombre aléatoire entre 1 et 6
// Adapter votre changement de source d'image par rapport au résultat du random (if)

// Générer un nombre aléatoire entre 1 et 6
// demander si 
// Mettre à jour l'image du dé en fonction du résultat
// Afficher le résultat dans la console

// Solution de Base:
// function lancerdés()
// {
//     const imgselect = document.querySelector(".imgdé")
//     let nombrealeatoire = Math.floor(Math.random() * 6) + 1;
//     console.log(nombrealeatoire)

//     if (nombrealeatoire== 1){
//         imgselect.src = "img/dé1.png";
//     }
//     if (nombrealeatoire == 2){
//         imgselect.src = "img/dé2.png";;
//     }
//     if (nombrealeatoire == 3){
//         imgselect.src = "img/dé3.png";
//     }
//     if (nombrealeatoire == 4){
//         imgselect.src = "img/dé4.png";
//     }
//     if (nombrealeatoire == 5){
//         imgselect.src = "img/dé5.png";
//     }
//     if (nombrealeatoire == 6){
//         imgselect.src = "img/dé6.png";
//     }
// }

// Solution Optimisée:
// function lancerdés() 
// {
//     const nombrealeatoire = Math.floor(Math.random()* 6)+ 1;
//     const déImage = document.querySelector(".imgdé");
//     déImage.src = "img/dé" + nombrealeatoire + ".png";

//     console.log ("Resultat du lancer : " + nombrealeatoire);
// }

// Bonus :
// Utilisez les inputs de type radio pour sélectionner 
// le nombre de face (6, 12 ou 20). Lors d'un click sur un bouton, 
// afficher l'image avec le résultat du dé.
//     input type radio
//     addeventlistner -> click
//     event.preventdefault()

// Solution de base :
let typeDe
const lancerUnDe = document.querySelector('.lancerdés');

lancerUnDe.addEventListener('mouseover', (event) => {
    event.preventDefault();
    
let deRadio = document.getElementsByName('typededé');

    for(let i = 0; i < deRadio.length; i++){
    if(deRadio[i].checked){
        typeDe = deRadio[i].value;
    }
    }

let nombre = Math.floor(Math.random()*typeDe +1)  

    if (de6.checked){
        de.src = "img/dé6.png"
    }
    if (de12.checked){
        de.src = "img/dé12.png"
    }
    if (de20.checked){
        de.src = "img/dé20.png"
    }
    
const selectP = document.querySelector('.nombreDe');
    selectP.textContent = nombre
 
    console.log(nombre)
})


// function lancerdés() 
// {
//     const nombrealeatoire = Math.floor(Math.random() * 6) + 1;
//     const déImage = document.querySelector(".img/dé1");
//     déImage.src = ".img/dé" + nombrealeatoire + ".png";
//     console.log ("Resultat du lancer : " + nombrealeatoire);
// }


// Récupérer la valeur sélectionnée du type de dé
// Générer un nombre aléatoire entre 1 et le nombre de faces sélectionné
// Changer la source de l'image en fonction du résultat du dé