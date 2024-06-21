import { useState } from "react"
import { mega } from "../../functions/mega"
import NumeroDisplay from "@/component/NumeroDisplay"

export default function megasena(){

    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    function renderizarNumeros() {
        return numeros.map(numero => <NumeroDisplay key={numero} numero={numero} />)
    }
    return(
        <div style={{
            display:"flex",
            flexWrap:"wrap",
            flexDirection:"column",
            alignItems:"center",
        }}>
            <h1>Mega Sena</h1>
            <div style={{
                    display:"flex",
                    justifyContent:"center",
                    flexWrap:"wrap",
                }}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={15}  value={qtde} onChange={ev => setQtde(+ev.target.value)}/>
                <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
            </div>
            
        </div>
    )
}