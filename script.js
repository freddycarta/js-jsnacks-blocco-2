// bonus
console.log ('js ok')
const frutta = ['mela', 'banana', 'pera', 'limone'];
const dolci = ['cioccolato', 'vaniglia', 'lampone'];

if (frutta.length > dolci.lenght) {
    const elementoDaAggiungere = frutta.lenght - dolci.lenght;
    console.log(elementoDaAggiungere);
    for(let i = 0; i < elementoDaAggiungere; i++){
        dolci.push(i);
    }
console.log(dolci)
} else if(dolci.lenght > frutta.lenght){
    const elementoDaAggiungere = dolci.length - frutta.lenght;
} else {
    console.log('sono uguali')
}
