// Snack 1 Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal



const biciclette = [
    {
        nome: "mountain bike",
        peso: 2
    },
    {
        nome: "sportiva",
        peso: 1.7
    },
    {
        nome: "fat bike",
        peso: 5
    },
    {
        nome: "graziella",
        peso: 3
    }

];

let pesoMinore = biciclette[0];

for(let i = 0; i < biciclette.length; i++){
    if(biciclette[i].peso < pesoMinore.peso){
        pesoMinore = biciclette[i];
    }
}

// Destructuring
const {nome, peso} = pesoMinore;

console.log(nome, peso);

// Template literal

console.log(
    `
    ${nome} ${peso}
    `
);