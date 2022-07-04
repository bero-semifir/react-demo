const Button = ({buttonText, buttonType='button', onClickAction, className}) => {
    return (
        <button className={className} type={buttonType} onClick={onClickAction}>
            {buttonText}
        </button>
    )
}

export default Button;
