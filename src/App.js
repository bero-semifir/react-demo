import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Personnage from './components/Personnage/Personnage';

const App = () => {

  // state ou état, une variable qui contient n'importe quelle info utilisable
  // useState -> hook d'état ⚠ uniquement utilisable sur les composants fonctions
  // génére un getter et un setter d'un état de composant
  const [joueur, setJoueur] = useState({ nom: "Roland", pv: 40, pvMax: 40 })

  // let joueurs = [
  //   { nom: "Roland", pv: 10, pvMax: 300 },
  //   { nom: "Anthony", pv: 10, pvMax: 500 },
  //   { nom: "Cindy", pv: 200, pvMax: 200 },
  //   { nom: "Cyriak", pv: 2, pvMax: 400 },
  //   { nom: "Gabriel", pv: 6000, pvMax: 20000 },
  // ];

  // fonction "métier" pour taper
  const taper = (degats) => {
    if(isNaN(degats)){
      degats = 20;
    }
    // calcul de la nouvelle valeur des PV du joueur
    let newPv = joueur.pv - degats

    if(newPv < 0){
      newPv = 0
    }

    // modification du joueur avec ses PV
    // le spread opérator sort toutes les valeurs d'un objet ou d'un tableau, il faut *ensuite* redéfinir les valeurs qui doivent changer
    // const newJoueur = {nom: joueur.nom, pv: joueur.pv, pvmax: joueur.pvmax, pv: newPv}; // cette est identique à la suivante
    const newJoueur = {...joueur, pv: parseInt(newPv)};
    
    // spread sur un tableau (équivaleur d'un joueurs.push(newJoueur))
    // joueurs = [...joueurs, newJoueur];

    // modification du joueur au niveau de l'état du composant app
    setJoueur(newJoueur);
  }
  
  // fonction "métier" pour soigner
  const soigner = (soin) => {
    
    if(isNaN(soin)){
      soin = 20
    }

    let newPv = joueur.pv + soin;

    if(newPv > joueur.pvMax){
      newPv = joueur.pvMax
    }

    const newJoueur = {...joueur, pv: newPv};

    setJoueur(newJoueur);

  }

  const debug = () => {
    console.log(joueur);
  }

  return (
    <div>
      <h1>Demo</h1>
      <div>
        <p>
          Barres de vie d'une équipe de Jeu de rôle
        </p>
      </div>
      <div>
        {/* les accolades permettent d'ouvrir un bloc de code qui sera interprété en JSX (avec React) */}
        {/* {
          // équivalent du *ngFor en Angular ♥
          joueurs.map((joueur) => {
            return <Personnage key={joueur.nom+joueur.pv+joueur.pvMax} nom={joueur.nom} pv={joueur.pv} pvMax={joueur.pvMax} action1_text="taper" action1={() => {
              taper(joueur);
            }} action2_text="soigner" action2={() => soigner(joueur)} />
          })
        } */}
        <Personnage nom={joueur.nom} pv={joueur.pv} pvMax={joueur.pvMax} action1={taper} action1_text="taper" action2={soigner} action2_text="soigner" />
        <Button onClickAction={debug} buttonText="debug"/>
      </div>
    </div>
  );
}

export default App;
