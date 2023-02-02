import PropTypes from 'prop-types'
export function Button({text, name='usuario'}){
    console.log(text)
    return<button onClick={function(){
        console.log('hola mund')
    }}>
        {text}-{name}
    </button>
}
Button.PropTypes={
    text: PropTypes.string.isRequired///para filtrar opciones no deseadas
} 