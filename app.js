let bilfirma = {
    firmaNavn: "tesla",
    antallAnsatte: 50000,
    bilListe: ["tesla S", "tesla 3", "telsa x", "tesla y"],
    betaltSkatt: 0.25,
    nettside: "https://www.tesla.com/no_no",
    informasjon: function () {
        return ("Jeg eier dette firma ")
    }
}



// Oppgave 2
bilfirma.firmaNavn = "Tesla big sexy"
// Oppgave 3
bilfirma.bilListe.push("Tesla plaid")
// Oppgave 4
// bilfirma.bilListe.shift()
// Oppgave 5
delete bilfirma.nettside
// Oppgave 6 
bilfirma.status = true
// Oppgave 7
for (let i = 0; i < bilfirma.bilListe.length; i++) {
     console.log(bilfirma.bilListe[i])
    
}
// Oppgave 8
for (const key in bilfirma) {
     console.log(key);
}
// Oppgave 9
for (const key in bilfirma) {
    console.log(bilfirma[key]);
}
// Oppgave 10
function førsteElement () {
    console.log(bilfirma.bilListe[0])
}
førsteElement()
// Oppgave 11
function sisteElement () {
    let siste = bilfirma.bilListe[bilfirma.bilListe.length - 1]
    console.log(siste);
}
sisteElement()
// Oppgave 12
var library = [
    {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
    },

    {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: false
    },

    {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
    }];

    for (const i of library) {
        if (i.readingStatus == false)
        {
            console.log(i.title);
        }
    }



