
function ajouterEtudiant(nom, cours, carte, date) {
    
    let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];
    
    
    let nouvelEtudiant = {
        id: Date.now(), 
        nom: nom, 
        cours: cours,
        carte: carte, 
        date: date
    };

    
    etudiants.push(nouvelEtudiant);

    
    localStorage.setItem('etudiants', JSON.stringify(etudiants));

    
    alert("Étudiant bien ajouté!");

    
    window.location.href = "liste-etudiants.html";
}



function afficherListeEtudiants() {
    
    let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];

    
    let listeEtudiantsBody = $('#listeEtudiantsBody');
    listeEtudiantsBody.empty(); 

    etudiants.forEach(function(etudiant) {
        listeEtudiantsBody.append(`<tr>
            <td>${etudiant.nom}</td>
            <td>${etudiant.cours}</td>
            <td>${etudiant.carte}</td> <!-- Utiliser 'carte' au lieu de 'tz' -->
            <td>${etudiant.date}</td>
            <td>
                <button onclick="creerCarte(${etudiant.id})">Création de carte</button>
                <button onclick="if (typeof supprimerEtudiant === 'function') { supprimerEtudiant(${etudiant.id}) }">X</button>
            </td>
        </tr>`);
    });
}



function creerCarte(id) {
    
    let carteImg = document.createElement("img");
    carteImg.src = "https://i.imgur.com/iHVoPAH.png"; 
    carteImg.alt = "Carte étudiant";
    carteImg.style.width = "100%"; 
    carteImg.style.height = "auto"; 
    
    
    let modal = document.createElement("div");
    modal.id = "carteModal";
    modal.style.display = "block";
    modal.style.position = "fixed";
    modal.style.zIndex = "1";
    modal.style.left = "0";
    modal.style.top = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.overflow = "auto";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    
    
    let modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fefefe";
    modalContent.style.margin = "15% auto";
    modalContent.style.padding = "20px";
    modalContent.style.border = "1px solid #888";
    modalContent.style.width = "80%";
    
    
    modalContent.appendChild(carteImg);
    
    
    modal.appendChild(modalContent);
    
    
    document.body.appendChild(modal);
    
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
function supprimerEtudiant(id) {

    let etudiants = JSON.parse(localStorage.getItem('etudiants')) || [];

    
    etudiants = etudiants.filter(etudiant => etudiant.id !== parseInt(id));

    
    localStorage.setItem('etudiants', JSON.stringify(etudiants));

    
    afficherListeEtudiants();
}







 $(document).ready(function() {
    afficherListeEtudiants();
});