function confrontazione(player1, player2) {
    var num_cas = Math.floor(Math.random() * (100 - 1) + 1);
    var ciao = document.getElementById("trovato");
    ciao.innerHTML = "numero trovato: ".concat(num_cas);
    var x = document.getElementById("ciao");
    console.log(num_cas);
    if (player1 === num_cas) {
        return x.innerHTML = "Il giocatore che ha vinto \u00E8 il player 1";
    }
    else if (player2 === num_cas) {
        return x.innerHTML = "Il giocatore che ha vinto \u00E8 il player 2";
    }
    else {
        var player_1_avv = Math.abs(num_cas - player1);
        var player_2_avv = Math.abs(num_cas - player2);
        if (player_1_avv < player_2_avv) {
            return x.innerHTML = "Il giocatore 1 non ha vinto, ma si \u00E8 avvicinato di pi\u00F9";
        }
        else if (player_1_avv === player_2_avv) {
            return x.innerHTML = "pareggio!";
        }
        else {
            return x.innerHTML = "Il giocatore 2 non ha vinto, ma si \u00E8 avvicinato di pi\u00F9";
        }
    }
}
function callConfrontazione() {
    var player1 = document.getElementById('player1').value;
    var player2 = document.getElementById('player2').value;
    confrontazione(Number(player1), Number(player2));
}
