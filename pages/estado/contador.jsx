import ContadorDisplay from "@/component/ContadorDisplay";
import { useState } from "react"

export default function contador(){
    const [cont, setCont] = useState(0);

    const soma = () => setCont(cont + 1)

    const subtracao = () => setCont(cont - 1)

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <h1>Contador</h1>
            <ContadorDisplay cont= {cont} />
            <div style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-around",
                            alignItems:"center",
                            width:"100px"
                        }}>
                <button onClick={subtracao}>-</button>
                <button onClick={soma}>+</button>
            </div>

        </div>
    )
}