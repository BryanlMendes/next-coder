import Titulo from "../Titulo"

export default function Filho(props){
    //"Passei no ENEM!"
    console.log(props.funcao)
    return(
        <div>
            <h1>Filho</h1>
            <button onClick={() => props.funcao("Passei no ENEM","Uhuuuuu",10)}>Falar com o Pai</button>
        </div>
    )
}