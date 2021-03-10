var studente = {
    'nome' : 'Marco',
    'cognome' : 'Mihajlovic',
    'eta' : 26
};

for (var key in studente) {
    console.log( key + ": " + studente[key]);
}