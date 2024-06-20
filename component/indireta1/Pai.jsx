import Filho from "./Filho";

export default function Pai(props){

    function falarcomigo(param1, param2, param3){
        console.log(param1, param2, param3);
    }
    return(
        <div>
            <Filho funcao={falarcomigo} />
        </div>
    )
}