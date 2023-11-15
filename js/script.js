// Créer un simulateur de lancés de dé
// Lorsque vous lancer votre page de navigateur, 
// je veux voir apparaitre le résultat la face d'un dé à 6 face (faire apparaitre une image).

// Quelques conseils pour réussir l'exercice :

// Essayez de décomposer au maximum le projet et allez y étape par étape.
// Faites votre structure HTML avec votre image
// Changer la source de votre image à l'aide de JS
// Récupérer dans la console un nombre aléatoire entre 1 et 6
// Adapter votre changement de source d'image par rapport au résultat du random (if)

// Bonus :
// Utilisez les inputs de type radio pour sélectionner 
// le nombre de face (6, 12 ou 20). Lors d'un click sur un bouton, 
// afficher l'image avec le résultat du dé.
//     input type radio
//     addeventlistner -> click
//     event.preventdefault()

function lancerdés() 
{

    const nombrealeatoire = Math.floor(Math.random() * 6) + 1;
    const déImage = document.getElementById("img/dé");
    déImage.src = "img/dé" + nombrealeatoire + ".png";

    console.log ("Resultat du lancer : " + nombrealeatoire);

    
    // const typededé = document.querySelector('input[name="diceType"]:checked');
    // const nombrea12 = Math.floor (Math.random() * 12) + 1;
    // const déImages = document.getElementById('img/dé');
    // déImages.src = 'img/dé' + typededé + '.png';
    // console.log ("Resultat du lancer : " + nombrea12);


}
// Générer un nombre aléatoire entre 1 et 6
// Mettre à jour l'image du dé en fonction du résultat
// Afficher le résultat dans la console


// Récupérer la valeur sélectionnée du type de dé
// Générer un nombre aléatoire entre 1 et le nombre de faces sélectionné
// Changer la source de l'image en fonction du résultat du dé