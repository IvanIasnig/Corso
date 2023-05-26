// da traccia in teoria dovevo andare a richiamare du volte i metodi, per come è strutturata la parte del display non avrebbe senso (perchè se ad esempio inserisco 10 di ricarica e parto da credito 20 alposto di andare a 30 andrei a 40)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Primo = /** @class */ (function () {
    function Primo(credito, numeroChiamate) {
        this.credito = credito;
        this.numeroChiamate = numeroChiamate;
    }
    Primo.prototype.ricarica = function (prezzo) {
        this.credito += prezzo;
    };
    Primo.prototype.chiamata = function (minuti) {
        var costoChiamata = minuti * 0.2;
        this.credito -= costoChiamata;
        this.numeroChiamate++;
    };
    Primo.prototype.numero404 = function () {
        return this.credito;
    };
    Primo.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Primo.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Primo;
}());
var Secondo = /** @class */ (function (_super) {
    __extends(Secondo, _super);
    function Secondo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Secondo;
}(Primo));
var Terzo = /** @class */ (function (_super) {
    __extends(Terzo, _super);
    function Terzo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Terzo;
}(Primo)); //essendo che Primo implementa già la interface e Secondo e Terzo sono uguali a Primo gli ho dato solo l'extends
document
    .getElementById("telefonoForm")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    var credito = Number(document.getElementById("credito").value);
    var numeroChiamate = Number(document.getElementById("numeroChiamate").value);
    var ricarica = Number(document.getElementById("ricarica").value);
    var minutiChiamata = Number(document.getElementById("minutiChiamata").value);
    var primo = new Primo(credito, numeroChiamate);
    primo.ricarica(ricarica);
    primo.chiamata(minutiChiamata);
    var risultato = document.getElementById("risultato");
    risultato.classList.add("alert", "alert-info", "text-center");
    risultato.innerHTML = "Credito utente 1: ".concat(primo.numero404(), "\u20AC<br>Chiamata numero ").concat(primo.getNumeroChiamate());
    primo.azzeraChiamate();
    risultato.innerHTML += "<br>Azzeramento chiamate: ".concat(primo.getNumeroChiamate());
});
document
    .getElementById("telefonoForm2")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    var credito = Number(document.getElementById("credito2").value);
    var numeroChiamate = Number(document.getElementById("numeroChiamate2").value);
    var ricarica = Number(document.getElementById("ricarica2").value);
    var minutiChiamata = Number(document.getElementById("minutiChiamata2").value);
    var secondo = new Secondo(credito, numeroChiamate);
    secondo.ricarica(ricarica);
    secondo.chiamata(minutiChiamata);
    var risultato = document.getElementById("risultato2");
    risultato.classList.add("alert", "alert-info", "text-center");
    risultato.innerHTML = "Credito utente 2: ".concat(secondo.numero404(), "\u20AC<br>Chiamata numero ").concat(secondo.getNumeroChiamate());
    secondo.azzeraChiamate();
    risultato.innerHTML += "<br>Azzeramento chiamate effettuato... numero chiamate pregresse: ".concat(secondo.getNumeroChiamate());
});
document
    .getElementById("telefonoForm3")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    var credito = Number(document.getElementById("credito3").value);
    var numeroChiamate = Number(document.getElementById("numeroChiamate3").value);
    var ricarica = Number(document.getElementById("ricarica3").value);
    var minutiChiamata = Number(document.getElementById("minutiChiamata3").value);
    var terzo = new Terzo(credito, numeroChiamate);
    terzo.ricarica(ricarica);
    terzo.chiamata(minutiChiamata);
    var risultato = document.getElementById("risultato3");
    risultato.classList.add("alert", "alert-info", "text-center");
    risultato.innerHTML = "Credito utente 3: ".concat(terzo.numero404(), "\u20AC <br>Chiamata numero ").concat(terzo.getNumeroChiamate());
    terzo.azzeraChiamate();
    risultato.innerHTML += "<br>Azzeramento chiamate effettuato... numero chiamate pregresse: ".concat(terzo.getNumeroChiamate());
});
