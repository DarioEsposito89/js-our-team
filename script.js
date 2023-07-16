"use scrict"

// OUR TEAM
// --------------------------------------------------------------------------------------------------------
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// Organizzare i singoli membri in card/schede

// ARRAY DI OGGETTI CON I MEMBRI DEL TEAM
const ourTeam = [
    {
        completeName: "Wayne Barnett",
        role: "Founder & CEO",
        fotoProfile: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        completeName: "Angela Caroll",
        role: "Chief Editor",
        fotoProfile: "img/angela-caroll-chief-editor.jpg",
        
    },
    {
        completeName: "Walter Gordon",
        role: "Office Manager",
        fotoProfile: "img/walter-gordon-office-manager.jpg",

    },
    {
        completeName: "Angela Lopez",
        role: "Social Media Manager",
        fotoProfile: "img/angela-lopez-social-media-manager.jpg",

    },
    {
        completeName: "Scott Estrada",
        role: "Developer",
        fotoProfile: "img/scott-estrada-developer.jpg",

    },
    {
        completeName: "Barbara Ramos",
        role: "Graphic Designer",
        fotoProfile: "img/barbara-ramos-graphic-designer.jpg",

    },
];

console.log(ourTeam)

let teamContainer = document.getElementById("team-container");
let cardTeam = "";

// CICLO CHE CREA LE CARD CON GLI OBJECTS DELL'ARRAY E LE STAMPA IN HTML
for (i = 0; i < ourTeam.length; i++) {
    // CREO UN ELEMENTO DIV 
    let cardTeam = document.createElement("div");
    teamContainer.append(cardTeam);
    // SOVRASCRIVO E ASSEGNO LE CLASSI AL DIV, INSERENDO GLI OBJECTS
    cardTeam.innerHTML = `
        <div class="col py-4">
            <div class="card" style="width: 20em;">
                <img src="${ourTeam[i].fotoProfile}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-center">${ourTeam[i].completeName}</h5>
                    <p class="card-text text-center">${ourTeam[i].role}</p>
                </div>
            </div>
        </div>
        `;
    }

    let newMember = {
        image: "",
        name: "",
        role: "",
    };

    let addCards = document.getElementById("addMemberBtn");

    // FUNZIONE CHE GENERA LA CARD DI UN NUOVO MEMBRO DEL TEAM AL CLICK DEL BOTTONE
    addCards.addEventListener("click", function () {
    newMember.image = "https://xsgames.co/randomusers/avatar.php?g=male";
    newMember.name = document.getElementById("name").value;
    newMember.role = document.getElementById("role").value;
    newCardTeam = document.createElement("div");
    teamContainer.append(newCardTeam);
    newCardTeam.innerHTML = `
    <div class="col py-4">
            <div class="card" style="width: 20em;">
                <img src="${newMember.image}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title text-center">${newMember.name}</h5>
                    <p class="card-text text-center">${newMember.role}</p>
                </div>
            </div>
        </div>
    `;
});