"use strict";
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// l’array di oggetti con le informazioni fornite
var team = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        photo : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        role : 'Chief Editor',
        photo :  'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        photo : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Loper',
        role : 'Social Media Manager',
        photo : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        photo : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        photo : 'barbara-ramos-graphic-designer.jpg'
    },
];

// Stampare le stesse informazioni su DOM sottoforma di stringhe
// const informazioni = document.getElementById('inf');
// for(let value of team){ 
//     informazioni.innerHTML += 'Nome: ' + value.name + ' Ruolo: ' + value.role + ' Foto: ' + value.photo;
// }

const ourTeam = document.getElementById('info');

// Stampare su console le informazioni di nome, ruolo e la stringa della foto
for(let value of team){
    for(let key in value) {
        console.log(key+' : '+value[key]);
    }
    card(value);
}

// funzione per creare i singoli oggetti delle carte per ogni membro del team 
function card(value){
    // contenitore della colonna della carta
    const column = document.createElement('div');
    // gli aggiungo la classe di bootstrap
    column.classList.add('col-2');

    // contenitore della carta
    const carta = document.createElement('div');
    carta.classList.add('card');

    // il body della carta
    const bodyCard = document.createElement('div');
    bodyCard.classList.add('card-body');

    // contenitore della photo
    const photo = document.createElement('img');
    photo.classList.add('card-img-top');
    photo.src = '/img/' + value.photo ;

    // nome di ogni membro del team
    const nome = document.createElement('h6');
    nome.classList.add('card-title');
    nome.innerHTML = value.name;

    // ruolo di ogni membro del team
    const ruolo = document.createElement('p');
    ruolo.classList.add('fs-6');
    ruolo.innerHTML = value.role;

    // inserico nel ordine giusto gli oggetti della card
    ourTeam.appendChild(column);
    column.appendChild(carta);
    carta.appendChild(photo);
    bodyCard.appendChild(nome);
    bodyCard.appendChild(ruolo);
    carta.appendChild(bodyCard);
};