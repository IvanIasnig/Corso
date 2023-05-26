// da traccia in teoria dovevo andare a richiamare du volte i metodi, per come è strutturata la parte del display non avrebbe senso (perchè se ad esempio inserisco 10 di ricarica e parto da credito 20 alposto di andare a 30 andrei a 40)

interface ITelefono {
  credito: number;
  numeroChiamate: number;
  ricarica(prezzo: number): void;
  chiamata(minuti: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}

class Primo implements ITelefono {
  constructor(public credito: number, public numeroChiamate: number) {}

  public ricarica(prezzo: number): void {
    this.credito += prezzo;
  }

  public chiamata(minuti: number): void {
    let costoChiamata = minuti * 0.2;
    this.credito -= costoChiamata;
    this.numeroChiamate++;
  }

  public numero404(): number {
    return this.credito;
  }

  public getNumeroChiamate(): number {
    return this.numeroChiamate;
  }

  public azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

class Secondo extends Primo {}
class Terzo extends Primo {} //essendo che Primo implementa già la interface e Secondo e Terzo sono uguali a Primo gli ho dato solo l'extends

document
  .getElementById("telefonoForm")!
  .addEventListener("submit", function (event: Event) {
    event.preventDefault();

    let credito = Number(
      (<HTMLInputElement>document.getElementById("credito")).value
    );
    let numeroChiamate = Number(
      (<HTMLInputElement>document.getElementById("numeroChiamate")).value
    );
    let ricarica = Number(
      (<HTMLInputElement>document.getElementById("ricarica")).value
    );
    let minutiChiamata = Number(
      (<HTMLInputElement>document.getElementById("minutiChiamata")).value
    );

    let primo = new Primo(credito, numeroChiamate);

    primo.ricarica(ricarica);
    primo.chiamata(minutiChiamata);

    let risultato = document.getElementById("risultato");
    risultato!.classList.add("alert", "alert-info", "text-center");
    risultato!.innerHTML = `Credito utente 1: ${primo.numero404()}€<br>Chiamata numero ${primo.getNumeroChiamate()}`;
    primo.azzeraChiamate();
    risultato!.innerHTML += `<br>Azzeramento chiamate: ${primo.getNumeroChiamate()}`;
  });

document
  .getElementById("telefonoForm2")!
  .addEventListener("submit", function (event: Event) {
    event.preventDefault();

    let credito = Number(
      (<HTMLInputElement>document.getElementById("credito2")).value
    );
    let numeroChiamate = Number(
      (<HTMLInputElement>document.getElementById("numeroChiamate2")).value
    );
    let ricarica = Number(
      (<HTMLInputElement>document.getElementById("ricarica2")).value
    );
    let minutiChiamata = Number(
      (<HTMLInputElement>document.getElementById("minutiChiamata2")).value
    );

    let secondo = new Secondo(credito, numeroChiamate);

    secondo.ricarica(ricarica);
    secondo.chiamata(minutiChiamata);

    let risultato = document.getElementById("risultato2");
    risultato!.classList.add("alert", "alert-info", "text-center");
    risultato!.innerHTML = `Credito utente 2: ${secondo.numero404()}€<br>Chiamata numero ${secondo.getNumeroChiamate()}`;
    secondo.azzeraChiamate();
    risultato!.innerHTML += `<br>Azzeramento chiamate effettuato... numero chiamate pregresse: ${secondo.getNumeroChiamate()}`;
  });

document
  .getElementById("telefonoForm3")!
  .addEventListener("submit", function (event: Event) {
    event.preventDefault();

    let credito = Number(
      (<HTMLInputElement>document.getElementById("credito3")).value
    );
    let numeroChiamate = Number(
      (<HTMLInputElement>document.getElementById("numeroChiamate3")).value
    );
    let ricarica = Number(
      (<HTMLInputElement>document.getElementById("ricarica3")).value
    );
    let minutiChiamata = Number(
      (<HTMLInputElement>document.getElementById("minutiChiamata3")).value
    );

    let terzo = new Terzo(credito, numeroChiamate);

    terzo.ricarica(ricarica);
    terzo.chiamata(minutiChiamata);

    let risultato = document.getElementById("risultato3");
    risultato!.classList.add("alert", "alert-info", "text-center");
    risultato!.innerHTML = `Credito utente 3: ${terzo.numero404()}€ <br>Chiamata numero ${terzo.getNumeroChiamate()}`;
    terzo.azzeraChiamate();
    risultato!.innerHTML += `<br>Azzeramento chiamate effettuato... numero chiamate pregresse: ${terzo.getNumeroChiamate()}`;
  });
