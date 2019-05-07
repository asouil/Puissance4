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
	afficheTextAnnonce("Le jeu commence, c'est au tour du joueur"+nomDuJoueur(joueur));
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

