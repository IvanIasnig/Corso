abstract class TaxIva {
  constructor(
    public codredd: number,
    public redditoaanuolordo: number,
    public tasseinps: number,
    public tasseirpef: number
  ) {}

  getUtileTasse(): number {
    let a: number = Math.floor(
      this.redditoaanuolordo * (this.tasseinps + this.tasseirpef)
    );
    return a;
  }

  getTasseInps(): number {
    let x: number = Math.floor(this.redditoaanuolordo * this.tasseinps);
    return x;
  }

  getTasseIrpef(): number {
    let y: number = Math.floor(this.redditoaanuolordo * this.tasseirpef);
    return y;
  }

  getRedditoAnnuoNetto(): number {
    return (
      this.redditoaanuolordo -
      Math.floor(this.redditoaanuolordo * (this.tasseinps + this.tasseirpef))
    );
  }
}

class TassazioneStandrd extends TaxIva {
  constructor(
    codredd: number,
    redditoaanuolordo: number,
    tasseinps: number = 0.2,
    tasseirpef: number = 0.15
  ) {
    super(codredd, redditoaanuolordo, tasseinps, tasseirpef);
  }
}

let account = new TassazioneStandrd(1, 100000);

console.log("Totale Tasse: " + account.getUtileTasse());
console.log("Tasse INPS: " + account.getTasseInps());
console.log("Tasse IRPEF: " + account.getTasseIrpef());
console.log("Reddito Annuo Netto: " + account.getRedditoAnnuoNetto());

class TassazionePovero extends TaxIva {
  constructor(
    codredd: number,
    redditoaanuolordo: number,
    tasseinps: number = 0.5,
    tasseirpef: number = 0.5
  ) {
    super(codredd, redditoaanuolordo, tasseinps, tasseirpef);
  }
}

console.log("------------------------------------")

let accountPovero = new TassazionePovero(1, 1000);

console.log("Totale Tasse Povero: " + accountPovero.getUtileTasse());
console.log("Tasse INPS Povero: " + accountPovero.getTasseInps());
console.log("Tasse IRPEF Povero: " + accountPovero.getTasseIrpef());
console.log(
  "Reddito Annuo Netto Povero: " + accountPovero.getRedditoAnnuoNetto()
);
