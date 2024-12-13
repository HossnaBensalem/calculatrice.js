class calcul {
add(a, b) {
    return a + b;
}
sostraction(a, b) {
    return a - b;
}
multiplication(a, b) {
    return a * b;
}
division(a, b) {
    if (b === 0) {
     return "Erreur : Division par zéro !"; // Vérification pour éviter la division par zéro
    }
    return a / b;
}
factorielle(n) {
    if (n < 0) {
        return "Erreur : La factorielle n'est pas définie pour les nombres négatifs !"; // Vérification pour les nombres négatifs
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Calcul de la factorielle
    }
    return result;
}
sqrt(n) {
    if (n < 0) {
        return "Erreur : Racine carrée impossible pour les nombres négatifs !"; // Vérification pour les nombres négatifs
    }
    return Math.sqrt(n); // Calcul de la racine carrée
}
}
// Exporter toutes les fonctions du module
module.exports = calcul;
