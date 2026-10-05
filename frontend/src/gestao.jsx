import { useState } from "react";

const usuariosIniciais = [
  { id: 1, nome: "Ana Silva", email: "ana.silva@email.com", telefone: "(98) 99911-1001", cidade: "São Luís" },
  { id: 2, nome: "Bruno Costa", email: "bruno.costa@email.com", telefone: "(98) 99911-1002", cidade: "Imperatriz" },
  { id: 3, nome: "Carlos Souza", email: "carlos.souza@email.com", telefone: "(98) 99911-1003", cidade: "Caxias" },
  { id: 4, nome: "Daniela Oliveira", email: "daniela.oliveira@email.com", telefone: "(98) 99911-1004", cidade: "Timon" },
  { id: 5, nome: "Eduardo Santos", email: "eduardo.santos@email.com", telefone: "(98) 99911-1005", cidade: "Bacabal" },
  { id: 6, nome: "Fernanda Lima", email: "fernanda.lima@email.com", telefone: "(98) 99911-1006", cidade: "Pinheiro" },
  { id: 7, nome: "Gabriel Rocha", email: "gabriel.rocha@email.com", telefone: "(98) 99911-1007", cidade: "Codó" },
  { id: 8, nome: "Helena Martins", email: "helena.martins@email.com", telefone: "(98) 99911-1008", cidade: "Açailândia" },
  { id: 9, nome: "Igor Almeida", email: "igor.almeida@email.com", telefone: "(98) 99911-1009", cidade: "Paço do Lumiar" },
  { id: 10, nome: "Juliana Ferreira", email: "juliana.ferreira@email.com", telefone: "(98) 99911-1010", cidade: "Raposa" },
];

export default function Gestao() {
  const [usuarios, setUsuarios] = useState(usuariosIniciais);
  const [idBusca, setIdBusca] = useState("");
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const buscarUsuario = () => {
    if (idBusca.trim() === "") {
      setUsuarioSelecionado(null);
      setMensagem("Digite um ID para buscar.");
      return;
    }

    const id = Number(idBusca);
    const usuario = usuarios.find((item) => item.id === id);

    if (!usuario) {
      setUsuarioSelecionado(null);
      setMensagem("Usuário não encontrado.");
      return;
    }

    setUsuarioSelecionado(usuario);
    setMensagem("");
  };

  const apagarUsuario = (id) => {
    const usuario = usuarios.find((item) => item.id === id);
    if (!usuario) return;

    const confirmar = window.confirm(
      `Deseja realmente apagar o usuário "${usuario.nome}"?`
    );

    if (!confirmar) return;

    setUsuarios((listaAtual) =>
      listaAtual.filter((item) => item.id !== id)
    );

    if (usuarioSelecionado?.id === id) {
      setUsuarioSelecionado(null);
    }

    if (Number(idBusca) === id) {
      setIdBusca("");
    }

    setMensagem(`Usuário ${id} apagado com sucesso.`);
  };

  const atualizarUsuario = (e) => {
    e.preventDefault();
    if (!usuarioSelecionado) return;

    setUsuarios((listaAtual) =>
      listaAtual.map((item) =>
        item.id === usuarioSelecionado.id ? usuarioSelecionado : item
      )
    );

    setMensagem("Usuário atualizado com sucesso.");
  };

  return (
    <div style={styles.container}>
      <h1>Gestão de Usuários</h1>

      <div style={styles.buscaArea}>
        <label htmlFor="id">Insira o ID do usuário:</label>

        <input
          id="id"
          type="number"
          min="1"
          placeholder="Ex: 3"
          value={idBusca}
          onChange={(e) => setIdBusca(e.target.value)}
        />

        <button onClick={buscarUsuario}>Buscar</button>
      </div>

      {mensagem && <p style={styles.mensagem}>{mensagem}</p>}

      {usuarioSelecionado && (
        <form onSubmit={atualizarUsuario} style={styles.edicao}>
          <h2>Atualizar usuário #{usuarioSelecionado.id}</h2>

          <input
            type="text"
            placeholder="Nome"
            value={usuarioSelecionado.nome}
            onChange={(e) =>
              setUsuarioSelecionado({
                ...usuarioSelecionado,
                nome: e.target.value,
              })
            }
          />

          <input
            type="email"
            placeholder="E-mail"
            value={usuarioSelecionado.email}
            onChange={(e) =>
              setUsuarioSelecionado({
                ...usuarioSelecionado,
                email: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Telefone"
            value={usuarioSelecionado.telefone}
            onChange={(e) =>
              setUsuarioSelecionado({
                ...usuarioSelecionado,
                telefone: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Cidade"
            value={usuarioSelecionado.cidade}
            onChange={(e) =>
              setUsuarioSelecionado({
                ...usuarioSelecionado,
                cidade: e.target.value,
              })
            }
          />

          <button type="submit">Salvar alterações</button>
        </form>
      )}

      <h2>Lista de usuários</h2>

      <div style={styles.tabelaContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Nome</th>
              <th style={styles.th}>E-mail</th>
              <th style={styles.th}>Telefone</th>
              <th style={styles.th}>Cidade</th>
              <th style={styles.th}>Ações</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td style={styles.td}>{usuario.id}</td>
                <td style={styles.td}>{usuario.nome}</td>
                <td style={styles.td}>{usuario.email}</td>
                <td style={styles.td}>{usuario.telefone}</td>
                <td style={styles.td}>{usuario.cidade}</td>
                <td style={styles.td}>
                  <div style={styles.acoes}>
                    <button
                      onClick={() => setUsuarioSelecionado(usuario)}
                    >
                      Atualizar
                    </button>

                    <button
                      onClick={() => apagarUsuario(usuario.id)}
                      style={styles.botaoApagar}
                    >
                      Apagar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },
  buscaArea: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  mensagem: {
    marginBottom: "15px",
    fontWeight: "bold",
  },
  edicao: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    marginBottom: "30px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  tabelaContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
    background: "#f4f4f4",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
  acoes: {
    display: "flex",
    gap: "8px",
  },
  botaoApagar: {
    background: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "7px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
