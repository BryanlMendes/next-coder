import Titulo from "@/component/Titulo";

function usandoTitulo(){
    return(
        <>
            <Titulo 
                titulo='Título'
                subtitulo='Subtítulo'
            />
            <Titulo 
                titulo='Título'
                subtitulo='Subtítulo'
                pequeno={false}
            />
                        <Titulo 
                titulo='Título'
                subtitulo='Subtítulo'
                pequeno
            />
        </>
    )
}
export default usandoTitulo;