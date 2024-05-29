function lista(){
    return(
        <div>
            <p>{gerarLista(30)}</p>
            <p>{gerarLista(5)}</p>
        </div>
    )
}
export default lista;

function gerarLista(final = 10){
    const lista =[]
    for(let i=1; i <= final; i++){
        lista.push(<span>{i},</span>)
    }
    return lista;
}