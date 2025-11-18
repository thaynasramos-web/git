import "./Produtos.css";

import choc_belga from "../../assets/imgs/choc-belga.png"

import whats from "../../assets/whatsapp.png"
import { useEffect, useState } from "react";
import type { Bolo } from "../../types/Bolo";
import { getBolos } from "../../services/bolosService";
import CardProduto from "../../components/CardProdutos/CardProduto";
import Carossel from "../../components/Carossel/Carossel";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";


//funções assincronas
export default function Produtos() {
    const [bolos, setBolos] = useState<Bolo[]>([]);
    const location = useLocation();

    const parametrosPesquisados = new URLSearchParams(location.search);
    const termo_pesquisado = parametrosPesquisados.get('query');


    const fetchBolos = async () => {
        try {
            const dados = await getBolos();
            if (termo_pesquisado) {
                const dados_filtrados = dados.filter(b =>
                    b.nome.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    b.descricao.toLowerCase().includes(termo_pesquisado.toLowerCase()) ||
                    b.categorias.some(cat => cat.toLowerCase()
                        .includes(termo_pesquisado
                            .toLowerCase()))
                )
                setBolos(dados_filtrados)
            } else {
                console.log("Dados retornados da API: ", dados);
                setBolos(dados);
            }
        } catch (error) {
            console.error("Error ao executar getBolos:", error)
        }
    }

    useEffect(() => {
        fetchBolos();

    }, [])



    return (

        <>
            <Header />
            <main>
                <Carossel />

                <section className="container_produtos">
                    <h1 className="acessivel">produtos de chocolate</h1>
                    <div className="titulo">
                        <span>
                            {
                                termo_pesquisado ? `Resultados para: ${termo_pesquisado}` :
                                    "Nome da categoria"

                            }
                        </span>
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

        </>

    )
}



























