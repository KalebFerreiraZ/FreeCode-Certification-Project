import exemple from "./assets/exemple.png";
export default function DOCS(){
    return(<div>
        <h1>#*Gerenciador De Usuarios Excel*#</h1>
        <h2>-Pra que serve</h2>
        <p>O Gerenciador de Usuários Excel tem como objetivo facilitar o envio e a organização dos dados dos motoristas que estão armazenados em planilhas do Excel. Os dados da planilha são inseridos no sistema e enviados para o banco de dados, onde ficam organizados para serem consultados posteriormente.</p>

A ideia é facilitar o acesso dos motoristas às suas próprias informações, permitindo que eles consultem seus dados pelo celular através da matrícula, sem precisar acessar diretamente a planilha original.
        <h2>-como usar</h2>
        <p>
            selecione os dados do Excel e 
            copie os dados com Control C,
            como neste exemplo  
            
            
        </p>
            
        <img src={exemple}></img>
        <p>depois va no app principal e cole os dados com control V dentro do primeiro campo,</p>
        <p>como os dados estao todos quebrados, clique em formatar depois de bota-los no campo</p>
        <h2>-funcionalidades</h2>
        <p>depois de concluir o processo anterior o aplicativo oferece algumas funcionalidades.</p>
        <h3>#criar no Banco:</h3>
        <p>leva os dados formatados para o banco de dados onde  cria um documento individual para cada usuario,</p> 
        <h3>#Atualizar no Banco</h3>
        <p>atualiza os dados dos usuarios apartir da matricula, voce envia os dados para inves de serem criados novos usuarios,atualizarem os usuarios existentes</p>
        <h3>#deletar no banco</h3>
        <p>Deleta os usuarios apartir de suas matriculas,é a mesma ideia de atualizar os usuarios, com a diferenca que voce esta deletando-os</p>
        </div>)
}
