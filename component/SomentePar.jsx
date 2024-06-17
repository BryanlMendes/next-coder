export default function SomentePar(props){

    return props.numero % 2 === 0 ? <span>{props.numero}</span> : null
}