var studente = {
    'nome': 'Marco',
    'cognome': 'Mihajlovic',
    'eta': 26
};

for (var key in studente) {
    console.log( key + ": " + studente[key]);
}

var studenti = [
    {
        'nome': 'Marco',
        'cognome': 'Mihajlovic',
        'eta': 26
    },
    
    {
        'nome': 'Hercule',
        'cognome': 'Poirot',
        'eta': 60
    },
    
    {
        'nome': 'Sherlock',
        'cognome': 'Holmes',
        'eta': 60
    },

    {
        'nome': 'Jules',
        'cognome': 'Maigret',
        'eta': 53
    },

    {
        'nome': 'Nero',
        'cognome': 'Wolfe',
        'eta': 56
    }];

for (var i = 0; i < studenti.length; i++){
    console.log("");
    console.log("Nome: " + studenti[i].nome);
    console.log("Cognome: " + studenti[i].cognome);
}

var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var eta = prompt("Inserisci la tua età");

var obj = {
    'nome': nome,
    'cognome': cognome,
    'eta': eta
};

studenti.push(obj);

for (var i = 0; i < studenti.length; i++){
    console.log("");
    console.log("Nome: " + studenti[i].nome);
    console.log("Cognome: " + studenti[i].cognome)
    console.log("Eta: " + studenti[i].eta);
}