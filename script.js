// ===============================
// VARIABLES
// ===============================

// tableau qui va contenir les questions du JSON
let questions = [];

// numéro de la question actuelle (commence à 0)
let questionEnCours = 0;

// score du joueur
let score = 0;


// ===============================
// CHARGER LE JSON
// ===============================

// On va chercher le fichier questions.json
fetch('questions.json')

.then(function(response) {
    // On transforme la réponse en JSON
    return response.json();
})

.then(function(data) {
    // On stocke les questions dans la variable
    questions = data;

    // On affiche la première question
    showQuestion();
});


// ===============================
// FONCTION : AFFICHER UNE QUESTION
// ===============================

function showQuestion() {

    // 1. Récupérer la question actuelle dans le tableau
    // (indice : utiliser questionEnCours)
    

    // 2. Afficher le texte de la question dans #question
    

    // 3. Vider la div #choix (important pour ne pas empiler les boutons)
    

    // 4. Faire une boucle sur les choix (q.choix)
    

    // 5. Pour chaque choix :
    //    - créer un bouton
    //    - mettre le texte du choix dans le bouton
    

    // 6. Ajouter un onclick sur chaque bouton
    //    → appeler verifierReponse avec le choix
    

    // 7. Ajouter le bouton dans la div #choix
    

    // 8. Effacer le message de feedback
    

}


// ===============================
// FONCTION : VERIFIER REPONSE
// ===============================

function verifierReponse(choice) {

    // 1. Récupérer la bonne réponse
    

    // 2. Comparer choice avec la bonne réponse
    

    // 3. Si bonne réponse (if) :
    //    - augmenter le score
    //    - afficher "Bonne réponse"
    

    // 4. Sinon (else) :
    //    - afficher "Mauvaise réponse"
    //    - afficher la bonne réponse
    

}


// ===============================
// BOUTON SUIVANT
// ===============================

document.getElementById("prochain").onclick = function() {

    // 1. Passer à la question suivante (incrémenter)
    

    // 2. Vérifier s’il reste des questions (if)
    //    → si oui : afficher la suivante
    

    // 3. Sinon (else) :
    //    → afficher "Quiz terminé"
    //    → afficher le score final
    

};
