window.onload = function () {
  fetch("./Abbigliamento.json", {
    method: "GET",
  })
    .then((raw) => {
      return raw.json();
    })
    .then((response) => {
      console.log(response);
      display(response);
    });
};

class SaldoCapo {
  constructor(
    public capo: string,
    public codprod: number,
    public collezione: string,
    public colore: string,
    public disponibile: string,
    public id: number,
    public modello: number,
    public prezzoivaesclusa: number,
    public prezzoivainclusa: number,
    public quantita: number,
    public saldo: number
  ) {}
  getsaldocapo(): number {
    return (this.prezzoivainclusa * this.saldo) / 100;
  }
  getacquistocapo(): number {
    return this.prezzoivainclusa - this.getsaldocapo();
  }
}

function display(el: any) {
  return el.map((element: any) => {
    const saldoCapo = new SaldoCapo(
      element.capo,
      element.codprod,
      element.collezione,
      element.colore,
      element.disponibile,
      element.id,
      element.modello,
      element.prezzoivaesclusa,
      element.prezzoivainclusa,
      element.quantita,
      element.saldo
    );

    console.log(saldoCapo.getsaldocapo());
    console.log("------");
  });
}
