import { useState } from "react"
import Formater from "./formater.js"
import Menu from "./Menu.jsx"

export default function App(){

    const [users,setUsers] = useState(null)
    const [text,setText] = useState(null)
    const [isVisible,setVisible] = useState(false)
    const [message,setMessage] = useState('')
    function Handler(e){
        setText(e.target.value)
    }
    function formatar(){
        const usuarios = Formater(text)
        setUsers(usuarios)
    }
    async function create(){
        const confirmar = window.confirm( "Você realmente quer CRIAR esses usuários no banco de dados?" ); if (!confirmar) { return; }
        const response = await fetch('http://localhost:3001/criar',{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({usuarios:users})
        })
        setVisible(true)
        const data = await response.json()
        console.log(data)
        setVisible(false)
        setMessage(data.message)
        
    }
    async function update(){
        const confirmar = window.confirm( "Você realmente quer ATUALIZAR esses usuários no banco de dados?" ); if (!confirmar) { return; }
        const response = await fetch('http://localhost:3001/atualizar',{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({usuarios:users})
        })
         setVisible(true)
        const data = await response.json()
        console.log(data)
        setVisible(false)
        setMessage(data.message)
    }
    async function deleter(params) {
        const confirmar = window.confirm( "Você realmente quer DELETAR esses usuários no banco de dados?" ); if (!confirmar) { return; }
        const response = await fetch('http://localhost:3001/deletar',{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({usuarios:users})
        })
          setVisible(true)
        const data = await response.json()
        console.log(data)
        setVisible(false)
        setMessage(data.message)
    }

   return(
    
   <div>
    <Menu></Menu> 
    <h1>Cadastro e Registros Excel</h1>
    <h1>Formatando os Dados</h1>
    <textarea onChange={(e) => Handler(e)} placeholder="Insira os dados Aqui..."></textarea>
    <button onClick={formatar}>Formatar</button><br></br>
    <h1>Enviando os dados</h1>
    <h2>Funcoes:</h2>
    <button onClick={create}>criar no Banco</button>
    <p>ou</p>
    <button onClick={update}>Atualizar No Banco</button>
    <p>ou</p>
    <button onClick={deleter}>Deletar No Banco</button>
    {isVisible && <p>Dados sendo Processados...</p>}
    {message !== null && <p>{message}</p>}

   </div>)
}
