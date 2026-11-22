/* ============================================================
   main.js - JavaScript de la page d'accueil de Viridis
   2 fonctionnalités:
   1. Un message différent selon l'heure ("mise en avant selon un paramètre")
   2. Une astuce écologique au hasard à chaque chargement ("contenu injecté")

   Comment tester :
   - Salutation : ajouter ?heure=8 à la fin de l'adresse (index.html?heure=8)
     puis essayer ?heure=14 et ?heure=22 pour voir les 3 messages.
   - Astuce : recharger la page (F5), l'astuce change au hasard.
   ============================================================ */

// Constantes (en MAJUSCULES pour qu'on voie de suite que c'est une constante (merci au TD3)) : 
const MIDI = 12;
const SOIR = 19;

// Tableau qui contient toutes les astuces écologiques
const ASTUCES = [
  "Astuce : éteignez la lumière en quittant une pièce.",
  "Astuce : prenez le tramway plutôt que la voiture.",
  "Astuce : récupérez l'eau de pluie pour arroser les plantes.",
  "Astuce : coupez l'eau pendant que vous vous brossez les dents.",
  "Astuce : débranchez vos chargeurs quand vous ne les utilisez pas.",
  "Astuce : triez vos déchets pour qu'ils soient recyclés."
];



// Rappel JSDoc (vu au TP3) : le bloc en slash puis 2 étoiles juste en dessous, c'est la "fiche d'identité" de la fonction.
// - "/**" ouvre la fiche JSDoc (avec deux étoiles, sinon JSDoc ne la lit pas).
// - La 1re phrase dit à quoi sert la fonction : ici, choisir quel message afficher selon l'heure.
// - @param = ce qu'on DONNE à la fonction pour qu'elle travaille (comme un ingrédient).
//   {number} = c'est un nombre ; heure = son nom ; après le tiret = ce que c'est (l'heure, de 0 à 23).
// - @returns = ce que la fonction nous RENVOIE à la fin (le plat qui sort du four).
//   {string} = c'est du texte ; ici, le message de salutation à afficher sur la page.
// - Ces commentaires servent aussi à créer une documentation automatique avec l'outil JSDoc (demandé dans le syllabus).

/**
 * Choisit le message de salutation selon l'heure de la journée.
 * @param {number} heure - L'heure de la journée (de 0 à 23)
 * @returns {string} Le message de salutation à afficher
 */
function choisirSalutation(heure) {
  // imagine que choisirSalution c'est un concierge
  // la ligne juste au dessus permet de lui donner l'heure
  let message = "";
  if (heure < MIDI) {
    // pour rappel, MIDI et SOIR on été défini au début du fichier
    message = "Bonjour ! La ville se réveille, les panneaux solaires démarrent.";
  }
  if (heure >= MIDI && heure < SOIR) {
    message = "Bon après-midi ! La cité produit son maximum d'énergie.";
  }
  if (heure >= SOIR) {
    message = "Bonsoir ! Les lumières de Viridis s'allument doucement.";
  }
  return message;
}
// la fonction reçoit l'heure, vérifie si on est le matin, l'après-midi ou le soir,
// et renvoie le message qui correspond pour l'afficher sur la page. »

/**
 * Choisit une astuce au hasard dans un tableau d'astuces.
 * @param {Array} tableau - La liste des astuces
 * @returns {string} Une astuce tirée au hasard
 */
function choisirAstuce(tableau) {
  // Math.random() donne un nombre entre 0 et 1, Math.floor l'arrondit en dessous
  let numero = Math.floor(Math.random() * tableau.length);
  return tableau[numero];
}



/* ---------- Programme principal ---------- */
// Ici, on utilise vraiment les 2 fonctions du haut

// 1. On prend l'heure de l'ordi (un nombre de 0 à 23). Vu au TD3, merci aux cours !
// let = une boîte qui peut changer.
let heure = new Date().getHours();

// 2. Pour tester : si l'adresse finit par ?heure=22, on fait comme s'il était 22h.
const parametres = new URLSearchParams(window.location.search);
if (parametres.get("heure") !== null) {
  // Number = transforme le texte "22" en nombre 22.
  heure = Number(parametres.get("heure"));
}

// 3. On écrit les messages dans les paragraphes vides de index.html.
document.getElementById("salutation").textContent = choisirSalutation(heure);
document.getElementById("astuce").textContent = choisirAstuce(ASTUCES);
