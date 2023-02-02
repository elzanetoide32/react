import './task.css'
export function TaskCard({ready}){
    return <div className='card'>
        <h1 style={{fontWeight:'lighter'}}>mi primera tarea</h1>
        <span style={ready?{background:'green'}:{background:'red'}}>
            {ready?"tarea realizada":"tarea pendiente"}
        </span>
    </div>
}
///los estilos se pueden añadir con constante tambien