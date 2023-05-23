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
var SonAccount = /** @class */ (function () {
    function SonAccount(nome, balance) {
        this.balance = balance;
        this.nome = nome;
    }
    SonAccount.prototype.oneDeposit = function (amount) {
        this.balance += amount;
    };
    SonAccount.prototype.oneWithdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Fondi insufficienti per prelevare!");
        }
    };
    SonAccount.prototype.printBalance = function () {
        console.log("Il saldo attuale del conto del figlio \u00E8: ".concat(this.balance));
        var ciaoElement = document.getElementById("ciao");
        ciaoElement.innerHTML = "".concat(this.balance);
    };
    SonAccount.prototype.saluta = function () {
        console.log("Ciao, il mio nome \u00E8 ".concat(this.nome, " e voglio tutti i tuoi soldi :D"));
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function () {
    function MotherAccount(balance, interestRate) {
        if (interestRate === void 0) { interestRate = 0.1; }
        this.balance = balance;
        this.interestRate = interestRate;
    }
    //shorthand molto utile
    MotherAccount.prototype.twoDeposit = function (amount) {
        this.balance += amount;
    };
    MotherAccount.prototype.twoWithdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Fondi insufficienti per prelevare!");
        }
    };
    MotherAccount.prototype.addInterest = function () {
        this.balance += this.balance * this.interestRate;
    };
    MotherAccount.prototype.printBalance = function () {
        console.log("Il saldo attuale del conto della madre \u00E8: ".concat(this.balance));
    };
    return MotherAccount;
}());
var son = new SonAccount("Mario", 7777777);
son.oneDeposit(2000); // versamento
son.oneWithdraw(150); // prelievo
son.printBalance(); // stampa il saldo attuale
son.saluta();
//console.log(son.nome); non mi da errore perchè è pubblica
// console.log(son.balance) mi da errore perchè è privata
var mother = new MotherAccount(1000);
mother.twoDeposit(500); // versamento
mother.twoWithdraw(100); // prelievo
mother.addInterest(); // calcola l'interesse del 10%
mother.printBalance(); // stampa il saldo attuale
var NipoteAccount = /** @class */ (function (_super) {
    __extends(NipoteAccount, _super);
    function NipoteAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NipoteAccount.prototype.salutaNip = function () {
        console.log("Ciao! Sono ".concat(this.nome, ", e sono il pi\u00F9 pazzo della citt\u00E0! Andiamo a derubare la Nonna"));
    };
    NipoteAccount.prototype.printBalance = function () {
        // override del metodo
        console.log("Il saldo attuale del conto del nipotino \u00E8: non te lo dico perch\u00E8 il conticino del nipotino \u00E8 privatino, e il pap\u00E0 non vuole che te lo mostro senn\u00F2 ti d\u00E0 un errorino :D");
    };
    return NipoteAccount;
}(SonAccount));
var nipotinoPazzo = new NipoteAccount("Gigino il nipotino", 10000000);
nipotinoPazzo.oneDeposit(2000); // versamento
nipotinoPazzo.oneWithdraw(150); // prelievo
nipotinoPazzo.printBalance(); // stampa il saldo attuale
nipotinoPazzo.salutaNip();
var AmikoNipotino = /** @class */ (function (_super) {
    __extends(AmikoNipotino, _super);
    function AmikoNipotino(nome, balance) {
        return _super.call(this, nome, balance) || this;
    }
    AmikoNipotino.prototype.salutaNipamik = function () {
        console.log("Ciao! Sono ".concat(this.nome, ", e sono l'amiko del nipotino"));
    };
    AmikoNipotino.prototype.printBalanceAmiketto = function () {
        // override del metodo
        console.log("Il saldo attuale del conto dell' amiko del nipotino \u00E8 ".concat(this.balance, " lire, perch\u00E8 il nipotino deruba tutti"));
    };
    return AmikoNipotino;
}(NipoteAccount));
var amiketto = new AmikoNipotino("Luigino l'amiko", 0);
amiketto.oneDeposit(10); // versamento
amiketto.oneWithdraw(8); // prelievo
amiketto.printBalanceAmiketto(); // stampa il saldo attuale
amiketto.salutaNipamik();
// se uso public posso usare la variabile dove voglio
// se uso private posso andare a utilizzare la variabile solo all'interno della classe, ma nun funziona se la utilizzo al di fuori (ad esempio su un extends o in un console.log esterno)
// se uso protected posso utilizzare la variabile sia all'interno della classe che nelle classi figlie, ma non all'esterno
