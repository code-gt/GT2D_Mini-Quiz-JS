# 🎮 Mini Quiz en JavaScript

## 🎯 Objectif
Créer un petit quiz en JavaScript à partir d’un fichier JSON.

---

## 📁 Fichiers du projet

- `index.html` → structure de la page  
- `style.css` → design (déjà fait)  
- `questions.json` → les questions du quiz  
- `script.js` → le code JavaScript (à compléter)

---

## 🚀 Consignes

### 1. Compléter le fichier JSON

Dans `questions.json` :

- Ajouter au moins **3 questions**
- Respecter la structure :

```json
{
  "question": "Ta question",
  "choix": ["réponse 1", "réponse 2", "réponse 3"],
  "bonne_reponse": "réponse correcte"
}
```

### 2. Compléter le JavaScript

Dans `script.js`, compléter les fonctions :

🧩 `showQuestion()`
 - Récupérer la question actuelle
 - Afficher la question dans la page
 - Créer des boutons pour chaque choix
 - Ajouter un clic sur chaque bouton
 - Afficher les boutons

🧩 `verifierReponse(choice)`
 - Comparer la réponse choisie avec la bonne réponse
 - Si c’est correct → augmenter le score
 - Afficher un message (bon ou mauvais)

🧩 Bouton "suivant"
 - Passer à la question suivante
 - Vérifier s’il reste des questions
 - Sinon afficher :
   - "Quiz terminé"
   - le score final

### 💡 Conseils
 - Tester souvent dans le navigateur
 - Utiliser `console.log()` pour comprendre ce qui se passe
 - Avancer étape par étape
