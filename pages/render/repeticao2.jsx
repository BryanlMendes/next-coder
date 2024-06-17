import listaProdutos from '../../data/listaProdutos'

export default function repeticao2(){

    function redenrizarLinhas(){
        return listaProdutos.map(produto => {
            return(
                <tr key={produto.id}>
                    <td style={{border: "1px solid black"}}>{produto.id}</td>
                    <td style={{border: "1px solid black"}}>{produto.nome}</td>
                    <td style={{border: "1px solid black"}}>{produto.preco}</td>
                </tr>
            )
        })
    }

    return(
        <div>
           <table  style={{border: "1px solid black"}}>
            <thead>
                <tr>
                    <th  style={{border: "1px solid black"}}>Código</th>
                    <th style={{border: "1px solid black"}}>Nome</th>
                    <th style={{border: "1px solid black"}}>Preço</th>
                </tr>
            </thead>
            <tbody  style={{border: "1px solid black"}}>
                {redenrizarLinhas()}
            </tbody>
           </table>
        </div>
    )
}