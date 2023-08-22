
import { useEffect, useState } from "react";
import CardServicos from "../../components/CardServicos";
import "./style.css"
import api from "../../utils/api";



export default function ListaServicos() {



    const [servico, setServicos] = useState<any[]>([]);


    const [techs, setTechDigitada] = useState<string>("")

    const [ListaServicosFiltrados, setListaServicosFiltrados] = useState<any[]>(servico);
    useEffect(() => {

        document.title = "Listar Servicos - VSConnect"
ListarServicos()

        console.log("Teste do userEffect")
    }, [])

    function buscarPorTech(event: any) {
        event.preventDefault();

        const ServicoFiltrados = servico.filter((servico: any) => servico.techs.includes(techs.toLocaleUpperCase()));

        if (ServicoFiltrados.length === 0) {
            alert("Nenhum servico encontrado");
        } else {
            setListaServicosFiltrados(ServicoFiltrados);
        }
    }
    function retornoServicoGeral(event: any) {
        if (event.target.value === "") {
            setListaServicosFiltrados(servico);
        }
        setTechDigitada(event.target.value);
    }


    function ListarServicos() {


        api.get("servicos").then((response: any) => {
            console.log(response.data)
            setListaServicosFiltrados(response.data)
        })

    }

    return (


        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr />
                    <form method="post" onSubmit={buscarPorTech}>
                        <div className="wrapper_form">
                            <label htmlFor="busca">Procurar serviços</label>
                            <div className="campo-label">
                                <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={retornoServicoGeral} />
                                <button type="submit">Buscar</button>
                            </div>
                        </div>
                    </form>
                    <div className="wrapper_lista">
                        <ul>

                            {ListaServicosFiltrados.map((servico: any, index: number) => {

                                return <li key={index}>
                                    <CardServicos
                                        titulo={servico.nome}
                                        valor={servico.valor}
                                        descricao={servico.descricao}
                                        techs={servico.techs}
                                    />
                                </li>
                            }
                            )};

                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}