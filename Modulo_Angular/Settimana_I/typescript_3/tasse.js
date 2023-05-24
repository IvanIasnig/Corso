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
var TaxIva = /** @class */ (function () {
    function TaxIva(codredd, redditoaanuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoaanuolordo = redditoaanuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    TaxIva.prototype.getUtileTasse = function () {
        var a = Math.floor(this.redditoaanuolordo * (this.tasseinps + this.tasseirpef));
        return a;
    };
    TaxIva.prototype.getTasseInps = function () {
        var x = Math.floor(this.redditoaanuolordo * this.tasseinps);
        return x;
    };
    TaxIva.prototype.getTasseIrpef = function () {
        var y = Math.floor(this.redditoaanuolordo * this.tasseirpef);
        return y;
    };
    TaxIva.prototype.getRedditoAnnuoNetto = function () {
        return (this.redditoaanuolordo -
            Math.floor(this.redditoaanuolordo * (this.tasseinps + this.tasseirpef)));
    };
    return TaxIva;
}());
var TassazioneStandrd = /** @class */ (function (_super) {
    __extends(TassazioneStandrd, _super);
    function TassazioneStandrd(codredd, redditoaanuolordo, tasseinps, tasseirpef) {
        if (tasseinps === void 0) { tasseinps = 0.2; }
        if (tasseirpef === void 0) { tasseirpef = 0.15; }
        return _super.call(this, codredd, redditoaanuolordo, tasseinps, tasseirpef) || this;
    }
    return TassazioneStandrd;
}(TaxIva));
var account = new TassazioneStandrd(1, 100000);
console.log("Totale Tasse: " + account.getUtileTasse());
console.log("Tasse INPS: " + account.getTasseInps());
console.log("Tasse IRPEF: " + account.getTasseIrpef());
console.log("Reddito Annuo Netto: " + account.getRedditoAnnuoNetto());
var TassazionePovero = /** @class */ (function (_super) {
    __extends(TassazionePovero, _super);
    function TassazionePovero(codredd, redditoaanuolordo, tasseinps, tasseirpef) {
        if (tasseinps === void 0) { tasseinps = 0.5; }
        if (tasseirpef === void 0) { tasseirpef = 0.5; }
        return _super.call(this, codredd, redditoaanuolordo, tasseinps, tasseirpef) || this;
    }
    return TassazionePovero;
}(TaxIva));
console.log("------------------------------------");
var accountPovero = new TassazionePovero(1, 1000);
console.log("Totale Tasse Povero: " + accountPovero.getUtileTasse());
console.log("Tasse INPS Povero: " + accountPovero.getTasseInps());
console.log("Tasse IRPEF Povero: " + accountPovero.getTasseIrpef());
console.log("Reddito Annuo Netto Povero: " + accountPovero.getRedditoAnnuoNetto());
