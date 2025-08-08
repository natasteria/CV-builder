function Button({label, onClick}){
    return (
        <div className='button-container'>
            <button onClick={onClick}>{label}</button>
        </div>
    )
}

export default Button