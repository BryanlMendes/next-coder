import Estilo from "@/component/Estilo";

function usandoEstilo(){
    return(
        <div>
            <Estilo 
                numero={3}
                color="#000"
                direita= {true}
            />
            <Estilo 
                numero={-1} 
                color="#fff"
            />
        </div>

    )
}
export default usandoEstilo;