/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

var sum = 10 + 20;

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random() * 21);


/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {
  name: "Ivan",
  surname: "Iasnig",
  age: 24,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JS", "HTML", "CSS"]; //(so che html e css sono linguaggi di markup)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("JSX"); //so che JSX è un estensione di js e non è un vero e proprio linguaggio ma non sapevo cosa aggiungere



/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();


// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let cas = Math.floor(Math.random() * 7);
  while (cas === 0) {
    cas = Math.floor(Math.random() * 7);
  }
  return cas;
}
console.log("---ESERCIZIO 1---");
console.log(dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else return "a è uguale a b";
}

console.log("---ESERCIZIO 2---");
console.log(whoIsBigger(5, 5));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function slpitMe(str) {
  return str.split(" ");
}
console.log("---ESERCIZIO 3---");
console.log(slpitMe("Ciao sono Ivan"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(str, boolean) {
  if (boolean === true) {
    return str.slice(1);
  } else return str.slice(0, -1);
}

console.log("---ESERCIZIO 4---");
console.log(deleteOne("ciao", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(str) {
  let nuovaStringa = str.replace(/[0-9]/g, "");
  return nuovaStringa;
}

console.log("---ESERCIZIO 5---");
console.log(onlyLetters("sono nato nel 1998,ho 24 anni e 1 cane"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(str) {
  let expr = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return expr.test(str);
}

console.log("---ESERCIZIO 6---");
console.log(isThisAnEmail("ivan@yahoo"));
console.log(isThisAnEmail("ivan@yahoo.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const oggi = new Date().getDay();
  switch (oggi) {
    case 1:
      return "lunedì";
    case 2:
      return "martedì";
    case 3:
      return "mercoledì";
    case 4:
      return "giovedì";
    case 5:
      return "venerdì";
    case 6:
      return "sabato";
    case 0:
      return "domenica";
  }
}

console.log("---ESERCIZIO 7---");
console.log(whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function rollTheDices(n) {
  let somma = { sum: 0, values: [] };
  for (let i = 0; i < n; i++) {
    let x = dice();
    somma.values.push(x);
    somma.sum += x;
  }
  return somma;
}
console.log("---ESERCIZIO 8---");
console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(data) {
  let oggi = new Date();
  let oggiNum = Date.parse(oggi);

  let dataNum = Date.parse(data);

  let giorniPassati = oggiNum - dataNum;
  let giorniPassatiNum = Math.floor(giorniPassati / 1000 / 60 / 60 / 24);

  return giorniPassatiNum;
}

console.log("---ESERCIZIO 9---");
console.log(howManyDays("2013-03-10"));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(giorno, mese) {
  const data = new Date();

  const giornoOggi = data.getDate();

  const meseOggi = data.getMonth();

  if (giornoOggi === giorno && meseOggi === mese - 1) {
    return true;
  } else {
    return false;
  }
}

console.log("---ESERCIZIO 10---");
console.log(isTodayMyBirthday(15, 04));

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp(oggetto, str) {
  delete oggetto[str];
  return oggetto;
}

console.log("---ESERCIZIO 11---");
console.log(deleteProp({ nome: "Ivan", cognome: "Iasnig" }, "nome"));

/*NON HO BEN CAPITO SE L'ESERCIZIO 11 FOSSE RIFERITO ALL'ARRAY MOVIES O MENO (credo di no), SE LA CONSEGNA RIGUARDAVA QUELL'ARRAY IL CODICE SAREBBE STATO IL SEGUENTE

function deleteProp(oggetto, str) {
  delete movies[oggetto][str];
  return movies[oggetto];
}

console.log(deleteProp(0,"Title"));*/

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

function newestMovie() {
  let nuovo = null;

  for (let i = 0; i < movies.length; i++) {
    const film2 = movies[i];
    if (!nuovo || film2.Year > nuovo.Year) {
      nuovo = film2;
    }
  }
  return nuovo;
}

console.log("---ESERCIZIO 12---");
console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

function countMovies() {
  return movies.length;
}

console.log("---ESERCIZIO 13---");
console.log(countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears() {
  let anni = [];

  for (let i = 0; i < movies.length; i++) {
    const film2 = movies[i].Year;
    anni.push(film2);
  }
  return anni;
}

console.log("---ESERCIZIO 14---");
console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium() {
  let anni = [];

  for (let i = 0; i < movies.length; i++) {
    const film2 = movies[i].Year;
    if (film2 < 2001) {
      anni.push(film2);
    }
  }
  return anni;
}

console.log("---ESERCIZIO 15---");
console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
function sumAllTheYears() {
  let somma = 0;
  for (let i = 0; i < movies.length; i++) {
    const anno = movies[i].Year;
    somma = somma + parseInt(anno);
  }
  return somma;
}

console.log("---ESERCIZIO 16---");
console.log(sumAllTheYears());

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

function searchByTitle(str) {
  const film = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(str.toLowerCase())) {
      film.push(movies[i]);
    }
  }
  return film;
}

console.log("---ESERCIZIO 17---");
console.log(searchByTitle("Avengers"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

function searchAndDivide(str) {
  const film = { match: [], unmatch: [] };

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLowerCase().includes(str.toLowerCase())) {
      film.match.push(movies[i]);
    } else film.unmatch.push(movies[i]);
  }
  return film;
}

console.log("---ESERCIZIO 18---");
console.log(searchAndDivide("Avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

function removeIndex(n) {
  let nuovoArr = movies; //per non rischiare di andare ad intaccare per sbaglio gli altri esercizi ho creato un nuovo array uguale a movies.
  delete nuovoArr[n];
  return nuovoArr;
}

console.log("---ESERCIZIO 19---");
console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function elementoContainer() {
  return document.getElementById("container");
}

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function tdSelezionati() {
  return document.querySelectorAll("td");
}

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaTd() {
  const td = document.querySelectorAll("td");
  for (let i = 0; i < td.length; i++) {
    console.log(td[i].textContent);
  }
}
console.log("---ESERCIZIO 22---");
stampaTd();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function linkBgColor() {
  const linkElements = document.querySelectorAll("a");
  for (let i = 0; i < linkElements.length; i++) {
    linkElements[i].style.backgroundColor = "red";
  }
}

linkBgColor();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function aggiungiLi() {
  const lista = document.getElementById("myList");
  const nuovoLi = document.createElement("li");
  const testo = document.createTextNode("Giraffa");
  nuovoLi.appendChild(testo);
  lista.appendChild(nuovoLi);
}

aggiungiLi();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
function svuotaLista() {
  const lista = document.getElementById("myList");
  lista.innerHTML = "";
}

svuotaLista();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function test() {
  const riga = document.querySelectorAll("tr");
  for (let i = 0; i < riga.length; i++) {
    riga[i].classList.add("test");
  }
}

test();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree(altezza) {
  let riga = "";
  for (let i = 0; i < altezza; i++) {
    riga += "*";
    console.log(riga);
  }
}

console.log("---ESERCIZIO 27---");
console.log(halfTree(3));

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree(altezza) {
  for (let i = 0; i < altezza; i++) {
    let riga = "";
    for (let a = 1; a < altezza - i; a++) {
      riga += " ";
    }
    for (let b = 1; b <= 2 * i + 1; b++) {
      riga += "*";
    }
    console.log(riga);
  }
}
console.log("---ESERCIZIO 28---");
tree(4);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++)
    if (n % i === 0) {
      return false;
    } else return true;
}

console.log("---ESERCIZIO 29---");
console.log(isItPrime(17));
