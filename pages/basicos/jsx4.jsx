function jsx4(){
    const subTitulo = "Estou no javaScript"
    return(
        <div>
            <h1>Integração JS e JSX</h1>
            <h2>{subTitulo}</h2>
            <h3>{3*3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h5>{entre(5, 1, 10)}</h5>
        </div>
    )
}
export default jsx4;

function entre(valor, min, max){
    if(valor >= min && valor < max){
        return "Sim"
    }else{
        return "Não"
    }
}