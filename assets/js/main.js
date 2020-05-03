const ergebnisse = document.getElementById("displayErgebnisse");


function clearScreen(){
    ergebnisse.innerHTML= "";
}

/*  !!!!! WICHTIG / dieNummer ist einfach eine Name und ist gelich was im Parameter "onclick= add (7) */
function add(dieNummern){
    ergebnisse.innerHTML+= dieNummern;
}

function calculate()
{ /* diese Function geht zum Screen liest alles dann  eval liest die Zeichen "+" oder "x" und setzt es ein in einer operation und zeitgt alle im ergebnisse.innerHtml  */
    ergebnisse.innerHTML = eval(ergebnisse.innerHTML);
}