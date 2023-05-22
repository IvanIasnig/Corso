function confrontazione(player1: number, player2: number) {
    let num_cas: number = Math.floor(Math.random() * (100 - 1) + 1);
    let ciao :any = document.getElementById("trovato");
    ciao.innerHTML= `numero trovato: ${num_cas}`;

    let x :any = document.getElementById("ciao")

    console.log(num_cas);
    if (player1 === num_cas) {
      
      return  x.innerHTML = `Il giocatore che ha vinto è il player 1`;
    } else if (player2 === num_cas) {
      return  x.innerHTML = `Il giocatore che ha vinto è il player 2`;
    } else {
      let player_1_avv: number = Math.abs(num_cas - player1);
      let player_2_avv: number = Math.abs(num_cas - player2);
      if (player_1_avv < player_2_avv) {
        return  x.innerHTML = `Il giocatore 1 non ha vinto, ma si è avvicinato di più`;
      } else if (player_1_avv === player_2_avv) {
        return  x.innerHTML = `pareggio!`;
      } else {
        return  x.innerHTML = `Il giocatore 2 non ha vinto, ma si è avvicinato di più`;
      }
    }
  }
  
  function callConfrontazione() {
    let player1 = (document.getElementById('player1') as HTMLInputElement).value;
    let player2 = (document.getElementById('player2') as HTMLInputElement).value;
    confrontazione(Number(player1), Number(player2));
  }



  

  

