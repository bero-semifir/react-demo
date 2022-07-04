// déclaration d'un composant fonction en React
const Personnage = ({ nom, pvMax, pv, action1, action1_text, action2, action2_text }) => {
    // la fonction doit retourner UN element JSX
    return (
        <div>
          {nom} <progress max={pvMax} value={pv} /> {pv} / {pvMax}
            {/* boutons d'action */}
            <button onClick={action1}>
                {action1_text}
            </button>
            
            <button onClick={action2}>
                {action2_text}
            </button>
        </div>
    );
}

// on rend le composant "importable"
export default Personnage;
