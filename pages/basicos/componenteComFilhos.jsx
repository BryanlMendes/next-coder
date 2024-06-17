import Item from "@/component/Item";
import Lista from "@/component/Lista";

export default function componenteComFilhos(){
    return(
        <div>
            <Lista>
                <Item conteudo="Item #11"/>
                <Item conteudo="Item #12"/>
                <Item conteudo="Item #13"/>
            </Lista>
        </div>
    )
}