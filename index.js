const prompt = require('prompt-sync')(); // Importer prompt-sync pour lire les entrées utilisateur
const calc = require('./calculator');  // Importer le module calculator
const calculll = new calc();
// Fonction principale pour utiliser la calculatrice
function calculator() {
    while (true) {
 // Afficher le menu des opérations disponibles
        console.log("\n--- Calculatrice ---");
        console.log("1. Addition");
        console.log("2. Soustraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Factorielle");
        console.log("6. Racine Carrée");
        console.log("0. Quitter");
 // Demander à l'utilisateur de choisir une opération
        const choice = prompt("Choisissez une opération (0-6) : ");
 // Si l'utilisateur veut quitter
        if (choice === '0') {
            console.log("Au revoir !");
            break; // Quitter la boucle
        }
// Si le choix est invalide
        if (choice < '1' || choice > '6') {
            console.log("Choix invalide. Réessayez.");
            continue; // Reprendre le menu si le choix est invalide
        }
        let num1, num2, result;
// Selon l'opération choisie, demander les nombres nécessaires
        if (choice === '1' || choice === '2' || choice === '3' || choice === '4') {
// Si l'opération nécessite 2 nombres
            num1 = parseFloat(prompt("Entrez le premier nombre : "));
            num2 = parseFloat(prompt("Entrez le deuxième nombre : "));
 // Vérifier que les deux entrées sont des nombres
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Erreur : Veuillez entrer des nombres valides !");
                continue;
            }
// Effectuer l'opération choisie en appelant la méthode du module calculatrice
            if (choice === '1') result = calculll.add(num1, num2); // Addition
            else if (choice === '2') result = calculll.sostraction(num1, num2); // Soustraction
            else if (choice === '3') result = calculll.multiplication(num1, num2); // Multiplication
            else if (choice === '4') result = calculll.division(num1, num2); // Division
// Afficher le résultat
            console.log(`Résultat : ${result}`);
        } else if (choice === '5') {
// Si l'opération est la factorielle
            num1 = parseInt(prompt("Entrez un nombre entier pour la factorielle : "));
// Vérifier que l'entrée est un nombre entier
            if (isNaN(num1)) {
                console.log("Erreur : Veuillez entrer un nombre valide !");
                continue;
            }
// Calculer et afficher la factorielle en appelant la méthode du module calculatrice
            result = calculll.factorielle(num1);
            console.log(`Factorielle de ${num1} : ${result}`);
        } else if (choice === '6') {
// Si l'opération est la racine carrée
            num1 = parseFloat(prompt("Entrez un nombre pour calculer sa racine carrée : "));
// Vérifier que l'entrée est un nombre valide
            if (isNaN(num1)) {
                console.log("Erreur : Veuillez entrer un nombre valide !");
                continue;
            }
// Calculer et afficher la racine carrée en appelant la méthode du module calculatrice
            result = calculll.sqrt(num1);
            console.log(`Racine carrée de ${num1} : ${result}`);
        }
    }
}

// Lancer la calculatrice
calculator();
