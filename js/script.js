"use strict";
// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// const classe74 = ['Mattia','Lucca','Silvia'];

// l’array di oggetti con le informazioni fornite
var team = [
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'photo' : '<img src="./img/wayne-barnett-founder-ceo.jpg">',
    },
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'photo' :  '<img src="./img/angela-caroll-chief-editor.jpg">',
    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'photo' : '<img src="./img/walter-gordon-office-manager.jpg">',
    },
    {
        'name' : 'Angela Loper',
        'role' : 'Social Media Manager',
        'photo' : '<img src="./img/angela-lopez-social-media-manager.jpg">',
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'photo' : '<img src="./img/scott-estrada-developer.jpg">',
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'photo' : '<img src="./img/barbara-ramos-graphic-designer.jpg">',
    },
];

// Stampare su console le informazioni di nome, ruolo e la stringa della foto
for(let value of team){
    for(let key in value){
        console.log(key+' : '+value[key]);
    }
}
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const informazioni = document.getElementById('info');
for(let value of team){ 
    informazioni.innerHTML += 'Nome: ' + value.name + ' Ruolo: ' + value.role + ' Foto: ' + value.photo;
}