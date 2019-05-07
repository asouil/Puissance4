var numjoueur=1;
var nbcolonnes=5
var nblignes=5;
var jeu=true;
var txt="";
var plateau = [];

for(var i=0; i<nblignes;i++){
	plateau[i]=[];
}

NewGame();

function NewGame(){
	for(var i=0; i<nblignes;i++){
		for(var j=0;j<nbcolonnes;j++){
			plateau[i][j]=0;
		}
	}
	var joueur=1;
	afficheTextAnnonce("Le jeu commence, c'est au tour du joueur "+nomDuJoueur(joueur));
	jeu=true;
	creerTableau();
}

function afficheTextAnnonce(texte){
	document.getElementById("text-annonce").innerHTML=texte;
}

function nomDuJoueur(numjoueur){
	if(numjoueur==1){
		return "rouge";
	}else{
		return "bleu";
	}
}

function creerTableau(){
	txt="<table>";
	for(var i=0;i<nblignes;i++){
		txt+="<tr>";
		for(var j=0;j<nbcolonnes;j++){
			txt+="<td onclick='detecteclic(j)' id='index"+i+"-index"+j+"'>";
			if(plateau[i][j]==1){
				txt+="<div class='joueur1'></div>";
			}else if(plateau[i][j]==2){
				txt+="<div class='joueur2'></div>";
			}
			txt+="</td>";
		}
		txt+="</tr>";
	}
	txt+="</table>";
	document.getElementById("puissance4").innerHTML=txt;
}

