// Creare un oggetto che descriva uno studente, 
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte 
// le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi,
//  nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), 
// di aggiungere un nuovo oggetto studente inserendo nell’ordine:
//  nome, cognome e età.

// creo un oggetto che descriva lo studente
var studente = {
    "nome" : 'Luca',
    "cognome" : 'Giozza',
    "età" : 22
};



for ( var k in studente){
   console.log(studente[k]);
}



var alunni= [

  {
   'nome' : 'Matteo',
   'cognome' : 'Bianchi',
   'età' : 18
  },
  {
    'nome' : 'Simone' ,
    'cognome' : 'Cristoforetti',
    'età' : 25
  },
  {
    'nome' : 'Alessia',
    'cognome' : 'Mocellini',
    'età' : 21
  },
  {
   'nome' :  'x' ,
   'cognome' : 'x', 
   'età' :  'x'

  }

];


document.getElementById('primo').innerHTML =' Primo studente : ' + ' ' +  alunni[0].nome + ' ' +  alunni[0].cognome ;


document.getElementById('secondo').innerHTML =' Secondo studente :  ' + ' ' +  alunni[1].nome + ' ' + alunni[1].cognome ;


document.getElementById('terzo').innerHTML =' Terzo studente : ' + ' ' +  alunni[2].nome + ' ' +  alunni[2].cognome;



var inserisciNome = prompt('inserisci nome studente');
var inserisciCognome= prompt('inserisci cognome studente');
var inserisciEta = parseInt(prompt('inserisci età studente'));


alunni[3].nome = inserisciNome;
alunni[3].cognome = inserisciCognome;
alunni[3].età = inserisciEta;

document.getElementById('scuola').innerHTML = 'Quarto studente' + ' ' + alunni[3].nome + ' ' + alunni[3].cognome + ' ' + alunni[3].età + ' anni'  ;
