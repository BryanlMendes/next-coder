import Pessoa from "../../component/Pessoa";

export default function exemploTS(){
    return(
        <div>
            <Pessoa nome="Bryan" idade={30}/>
            <Pessoa nome="Larissa" />
        </div>
    )
}