/*export function Greeting() {
  const married = false;
  //return <div>
  //    <h1>hello world</h1>
  // </div>
  return <h1>{married ? "estoy casado" : "no estoy casado"}</h1>; //es como un ifelse
}*/
//es distinto porque este exporta todo eldocumento
//export default Geeting

/*export function Greeting(props,name="user") {
  console.log(props,name)
  return <h1>Componente de React</h1>; 
}*/

export function UserCard(props){
  console.log(props,props.name,props.greet)
  return(
    <div>
      <h1>{props.name}</h1>
      <p>${props.amount}</p>
      <p>{props.married ? "married":"single"}</p>
      <ul>
        <li>city: {props.address.city}</li>
        <li>adress: {props.address.street}</li>
      </ul>
    </div>
  )
}