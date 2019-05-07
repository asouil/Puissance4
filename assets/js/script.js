var joueur=1;
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
	joueur=1;
	afficheTextAnnonce("Le jeu commence, c'est au tour du joueur "+nomDuJoueur(joueur)+"!");
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
			txt+="<td onclick='detecteclic("+j+")' id='"+i+"-"+j+"'>";
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

function detecteclic(int){
	if(verifPosition(int) && jeu){
		var ligneEnCours = poseJeton(int);/* numéro de la ligne en cours */
		var verifEnd = puissance4(ligneEnCours, int, 0, 0);
		if(verifEnd){
			jeu=false;
			afficheTextAnnonce("Le joueur "+nomDujoueur(joueur)+" a gagné la partie.");
		}
		else{
			if(joueur==1){
				joueur=2;
			}else{
				joueur=1;
			}
			afficheTextAnnonce("C'est au tour deu joueur "+nomDuJoueur(joueur));
		}
	}	
}

function verifPosition(int){
	if(plateau[0][int]==0){
		return true;
	}
	else{
		return false;
	}
	/* si la case du haut de la colonne est vide */
}

function poseJeton(int){
	for(var i=nblignes-1;i>=0;i--){
		if(plateau[i][int]==0){
			plateau[i][int]=joueur;
			refreshTableau(i, int, joueur);
			return i;
		}
	}
}

function refreshTableau(x ,y ,i){
	/* permet de chercher l'élément qui a l'id="x-y" et lui met en value */
	document.getElementById(x+"-"+y).innerHTML="<div class='joueur'>"+i+"</div>";
}

function puissance4(ligne, colonne, l, c){
	console.log("valeur:"+ligne+" "+colonne+" / increment "+l+" "+c);
	return false;
}