export const formatosService = {
    PrecoBR: (preco: number): string => {
        return `${preco.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
        })}`
    },
    pesoEmKg: (valorPeso: number): string => {
        return `${valorPeso.toLocaleString ('pt-BR', {minimumFractionDigits: 3})} Kg`
    }

}