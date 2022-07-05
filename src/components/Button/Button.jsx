const Button = ({buttonType='button', onClickAction, className, children}) => {
    return (
        <button className={className} type={buttonType} onClick={onClickAction}>
            {/* children est un props reservé de React
                qui contient tout ce qui est transmis
                entre les balises du composant 
            */}
            {children}
        </button>
    )
}

export default Button;
