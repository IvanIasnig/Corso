class SonAccount {
    protected balance: number;
    public nome: string;
  
    constructor(nome: string, balance: number) {
      this.balance = balance;
      this.nome = nome;
    }
  
    oneDeposit(amount: number): void {
      this.balance += amount;
    }
  
    oneWithdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Fondi insufficienti per prelevare!");
      }
    }
  
    printBalance(): void {
        console.log(`Il saldo attuale del conto del figlio è: ${this.balance}`);
        const ciaoElement = (document.getElementById("ciao") as HTMLInputElement);
        ciaoElement.innerHTML = `${this.balance}`;
      }
  
    saluta(): void {
      console.log(
        `Ciao, il mio nome è ${this.nome} e voglio tutti i tuoi soldi :D`
      );
    }
  }
  

class MotherAccount {
  constructor(public balance: number, public readonly interestRate: number = 0.1) {}
  //shorthand molto utile

  twoDeposit(amount: number): void {
    this.balance += amount;
  }

  twoWithdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log("Fondi insufficienti per prelevare!");
    }
  }

  addInterest(): void {
    this.balance += this.balance * this.interestRate;
  }

  printBalance(): void {
    console.log(`Il saldo attuale del conto della madre è: ${this.balance}`);
  }
}

const son = new SonAccount("Mario", 7777777);
son.oneDeposit(2000); // versamento
son.oneWithdraw(150); // prelievo
son.printBalance(); // stampa il saldo attuale
son.saluta();

//console.log(son.nome); non mi da errore perchè è pubblica
// console.log(son.balance) mi da errore perchè è privata

const mother = new MotherAccount(1000);
mother.twoDeposit(500); // versamento
mother.twoWithdraw(100); // prelievo
mother.addInterest(); // calcola l'interesse del 10%
mother.printBalance(); // stampa il saldo attuale

class NipoteAccount extends SonAccount {
  salutaNip(): void {
    console.log(
      `Ciao! Sono ${this.nome}, e sono il più pazzo della città! Andiamo a derubare la Nonna`
    );
  }

  printBalance(): void {
    // override del metodo
    console.log(
      `Il saldo attuale del conto del nipotino è: non te lo dico perchè il conticino del nipotino è privatino, e il papà non vuole che te lo mostro sennò ti dà un errorino :D`
    );
  }
}

const nipotinoPazzo = new NipoteAccount("Gigino il nipotino", 10000000);
nipotinoPazzo.oneDeposit(2000); // versamento
nipotinoPazzo.oneWithdraw(150); // prelievo
nipotinoPazzo.printBalance(); // stampa il saldo attuale
nipotinoPazzo.salutaNip();

class AmikoNipotino extends NipoteAccount {
  constructor(nome: string, balance: number) {
    super(nome, balance);
  }

  salutaNipamik(): void {
    console.log(`Ciao! Sono ${this.nome}, e sono l'amiko del nipotino`);
  }

  printBalanceAmiketto(): void {
    // override del metodo
    console.log(
      `Il saldo attuale del conto dell' amiko del nipotino è ${this.balance} lire, perchè il nipotino deruba tutti`
    );
  }
}

const amiketto = new AmikoNipotino("Luigino l'amiko", 0);
amiketto.oneDeposit(10); // versamento
amiketto.oneWithdraw(8); // prelievo
amiketto.printBalanceAmiketto(); // stampa il saldo attuale
amiketto.salutaNipamik();

// se uso public posso usare la variabile dove voglio
// se uso private posso andare a utilizzare la variabile solo all'interno della classe, ma nun funziona se la utilizzo al di fuori (ad esempio su un extends o in un console.log esterno)
// se uso protected posso utilizzare la variabile sia all'interno della classe che nelle classi figlie, ma non all'esterno
