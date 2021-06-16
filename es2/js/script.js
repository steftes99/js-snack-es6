const squadre = [
    {
        nome: "milan",
        punti: 0,
        falli: 0,
    },
    {
        nome: "juve",
        punti: 0,
        falli: 0,
    },
    {
        nome: "inter",
        punti: 0,
        falli: 0,
    },
    {
        nome: "napoli",
        punti: 0,
        falli: 0,
    }
];
 const squadreNuove = [];

puntiRandom = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);
falliRandom = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let i = 0; i < squadre.length; i++) {
    puntiFatti = puntiRandom(0,15);
    falliSubiti = falliRandom(1,8);
    squadre[i].punti = puntiFatti;
    squadre[i].falli = falliSubiti;

    

    squadreNuove.push(squadre[i].nome)
    squadreNuove.push(squadre[i].falli)
}
console.log(squadreNuove);


