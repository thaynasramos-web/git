import "./Produtos.css";

import choc_belga from "../../assets/imgs/choc-belga.png"
import choc_ninho from "../../assets/imgs/choc-ninho.png"
import cenoura_choc from "../../assets/imgs/cenoura-choc.png"
import choc_ninho_morang from "../../assets/imgs/choc-ninho-morango.png"
import choc_pistache from "../../assets/imgs/choc-pistache.png"
import choc_oreo from "../../assets/imgs/choc-oreo.png"
import whats from "../../assets/whatsapp.png"
import { useEffect, useState } from "react";
import type { Bolo } from "../../types/Bolo";
import { getBolos } from "../../services/bolosService";
import bolo_default from "../../assets/imgs/bolo-default.png"
import CardProduto from "../../components/CardProdutos/CardProduto";
import Carossel from "../../components/Carossel/Carossel";


//funções assincronas
export default function Produtos() {
    const [bolos, setBolos] = useState<Bolo[]>([]);




    const fetchBolos = async () => {
        try {
            const dados = await getBolos();
            console.log("Dados retornados da API: ", dados);
            setBolos(dados);
        } catch (error) {
            console.error("Error ao executar getBolos:", error)
        }
    }

    useEffect(() => {
        fetchBolos();

    }, [])



    return (

        <main>
          <Carossel />

            <section className="container_produtos">
                <h1 className="acessivel">produtos de chocolate</h1>
                <div className="titulo">
                    <span>Chocolate</span>
                    <hr />
                </div>

                <section className="cards">

                    {
                        bolos.map((b: Bolo) => (
                            <CardProduto
                                nome={b.nome}
                                descricao={b.descricao}
                                preco={b.preco}
                                imagem={b.imagens[0] ?? ""}
                                peso={b.peso}
                            />
                        ))
                    }

                    <div className="card_produto">
                        <img src={choc_belga} alt="Uma fatia de bolo de chocolate belga" />
                        <h2>Chocolate Belga</h2>
                        <p>Bolo macio de chocolate, aplicado granulado que traz crocância e um sabor irresistível.</p>
                        <span>R$ 80,00/kg.</span>
                    </div>
                </section>
            </section>

            <a className="whatsapp" href="https://wa.me/5511999999999?text=Olá%20,%20gostaria%20de%20mais%20informações."
                target="_blank">
                <img src={whats} alt="icone do whatsapp" />
            </a>
        </main>
    )
}



























