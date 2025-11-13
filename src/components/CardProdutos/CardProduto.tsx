import type { CardProdutoProps } from '../../types/CardProdutoProps';
import './CardProduto.css';
import CardProduto from "../../components/CardProdutos/CardProduto";
import bolo_default from '../../assets/imgs/bolo-default.png';
import { formatosService } from '../../services/formatosService';


export default function CradProduto({ nome, descricao, preco, imagem, id, peso }:
    CardProdutoProps) {
    return (
        <div key={id} className="card_produto">
            <img src={(imagem.length > 0) ? `http://localhost:3000/static/${imagem}` : bolo_default} alt="Uma fatia de bolo de chocolate belga" />
            <h2>{nome}</h2>
            <p>{(descricao.length > 0) ? descricao : "Descição não informada"}</p>
            <div>
                <span>{formatosService.PrecoBR(preco)}</span>
                <br/>
                <span>{ (peso != null) ? formatosService.pesoEmKg
                    (peso) : "quantidade não informada" }</span>

            </div>
        </div>
    )

}