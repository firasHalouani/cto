# Deadlift AI

Rapport final – Défi **“Devenez le CTO de Votre Santé Posturale”**

## 🏋️‍♂️ Résumé du projet

**Deadlift AI** est une application d’analyse en temps réel de la posture lors du soulevé de terre.  
Elle aide les sportifs à exécuter correctement ce mouvement à haut risque de blessure grâce à une correction immédiate et intelligente.

### 🎯 Fonctionnalités clés
- Détection de pose ultra‑précise avec **MediaPipe**
- Classification du stade (montée/descente) via un modèle **scikit‑learn**
- Comptage automatique des répétitions **valides uniquement**
- Feedback visuel et textuel instantané sur les erreurs posturales

---

## 🥇 Niveau 1 — Profilage Sportif

Au premier démarrage, un QCM rapide adapte le système à l'utilisateur :

- Niveau d’expérience (débutant / intermédiaire / avancé)
- Antécédents de douleurs lombaires
- Objectif (force / hypertrophie / technique / santé)
- Fréquence d’entraînement
- Suggestion automatique de variante : **Conventional, Sumo ou Romanian Deadlift**

---

## 🥈🥉 Niveaux 2 & 3 — Instructions personnalisées + Visualisation

### 📝 Feedback textuel en temps réel
Affiché directement sur la vidéo :

- ❗ Dos trop arrondi  
- ❗ Hanches trop hautes  
- ❗ Barre trop éloignée  
- ❗ Genoux pas assez fléchis  
- Conseils adaptés au profil (ex. rétroversion du bassin)

### 👁️ Visualisation avancée
- Squelette complet (33 landmarks MediaPipe)
- Colonne vertébrale en rouge si arrondi
- Trajectoire idéale de la barre en vert
- Compteur de répétitions valides
- Jauge de symétrie gauche/droite

---

## 🛒 Niveau 4 — Lien commercial (Bonus Decathlon)

Recommandations personnalisées :
- Barre olympique Domyos 20 kg  
- Ceinture lombaire renforcée  
- Tapis épais 15 mm  
- Chaussures d’haltérophilie  
Liens avec tag `?ref=deadlift-ai-nuitinfo2025`.

---

## 🧱 Architecture & Déploiement

### Backend
- **Flask API**
  - `/detect`
  - `/stream`
  - `/status`
  - `/reset`

### Frontend
- **CustomTkinter** interface locale moderne

### Modèle
- RandomForest pré‑entraîné (**12 000 frames**)  
- Fichier : `deadlift.pkl`

### Docker
- Déploiement instantané via `docker-compose.yml`

### Dépôt officiel
👉 https://github.com/iyedzarrougui/Deadlift_AI

---

## 🚀 Conclusion

Deadlift AI transforme une simple webcam en **coach intelligent** permettant d’améliorer la technique et de prévenir les blessures, sur l’un des exercices les plus exigeants.

### 🔮 Prochaines étapes
- Support du squat, développé couché et tractions
- Version web + mobile
- Partenariat Decathlon pour utilisation en magasin

---

## 👤 Auteurs
Iyed Zarrougui  
*Nuit de l'Info 2025 – Santé Posturale & Sport*

