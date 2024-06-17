import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <Filho nome="Bryan" familia={props.familia} />
            <Filho nome="Larissa" familia={props.familia} />
            <Filho {...props} nome="Kleberson"  />
        </div>
    )
}