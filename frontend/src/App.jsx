import { useNavigate } from "react-router-dom"

function App() {
  const navigation = useNavigate()
  function redirect(){
    navigation('/gestao')
  }
  return(<div>
    <h1>Login</h1>
    <input placeholder="nome"></input>
    <input placeholder="email"></input>
    <button onClick={redirect}>Prosseguir</button>
  </div>)
}

export default App
