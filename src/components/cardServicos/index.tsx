
import { Link } from "react-router-dom"
import "./style.css"


export default function CardServicos(props: any) {




    return (
        <div className="servico">
            <div className="topo_servico">
                {/* <h3>{props.titulo}</h3> */}

                <Link to={ "/visualizarServicos/" + props.id }>{ props.nome }</Link>

                <span>{props.valor}</span>
            </div>
            <p>{props.descricao}</p>
            <div className="techs">
                {
                    props.techs.map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })
                }
            </div>
        </div>
    )
}