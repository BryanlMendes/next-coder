import { Component } from "react";
import Contador from "../../component/Contador";

export default class ContadorPage extends Component{

    render(){
        return(
            <Contador valorInicial={100} passo={10}/>
        )
    }
}