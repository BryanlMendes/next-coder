import Padrao, { Comp1, Comp2, Comp4, Comp5, Comp6 } from "../../component/modulo/funcionais"

export default function teste(){
    return(
        <div>
            <Comp1 />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Legal!"/>
        </div>
    )
}