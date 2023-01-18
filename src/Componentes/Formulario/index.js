import { useState } from 'react';
import CampoTexto from "../CampoTexto"
import "./Formulario.css"
import Botao from '../Botao';


const Formulario = (props) => {
    const [nome, setNome] = useState('')
    const [nomeEmpresa, setNomeEmpresarial] = useState('')
    const [CPF, setCPF] = useState('')
    const [CNPJ, setCNPJ] = useState('')
    const [CEP, setCEP] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [numero, setNumero] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [geracao, setGeracao] = useState('')
    const [quantidadeInv, setQuantidadeInv] = useState('')
    const [marcaInv, setMarcaInv] = useState('')
    const [modeloInv, setmodeloInv] = useState('')
    const [quantidadeMod, setQuantidadeMod] = useState('')
    const [marcaMod, setMarcaMod] = useState('')
    const [modeloMod, setModeloMod] = useState('')
    const [disjuntoPadrao, setDisjuntoPadrao] = useState('')
    const [cabeamentoPadrao, setCabeamentoPadrao] = useState('')

    const aoClicar = (evento) => {
        evento.preventDefault();
        /*props.aoFormularioCadastrado({
            nome,
            nomeEmpresa,
            CPF,
            CNPJ,
            CEP,
            logradouro,
            numero,
            bairro,
            cidade,
            estado,
            geracao,
            quantidadeInv,
            marcaInv,
            modeloInv,
            quantidadeMod,
            marcaMod,
            modeloMod,
            disjuntoPadrao,
            cabeamentoPadrao,
        })*/
        setNome('')
        setNomeEmpresarial('')
        setCPF('')
        setCNPJ('')
        setCEP('')
        setLogradouro('')
        setNumero('')
        setBairro('')
        setCidade('')
        setEstado('')
        setGeracao('')
        setQuantidadeInv('')
        setMarcaInv('')
        setmodeloInv('')
        setQuantidadeMod('')
        setMarcaMod('')
        setModeloMod('')
        setDisjuntoPadrao('')
        setCabeamentoPadrao('')
        alert("Você acabou de deixar o setor de engenharia muto feliz")
    }

    return (
        <form onSubmit={aoClicar}>

            <div className="principal">
                <label className='cabecalho'>Dados do Cliente e Instalação</label>
                <section className="cliente-primaria">

                    <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite Seu Nome" valor={nome} aoAlterado={valor => setNome(valor)} />
                    <CampoTexto obrigatorio={true} label="Nome Empresarial" placeholder="Digite o Nome Empresarial" valor={nomeEmpresa} aoAlterado={valor => setNomeEmpresarial(valor)} />
                    <CampoTexto obrigatorio={true} label="CPF" placeholder="Digite Seu CPF" valor={CPF} aoAlterado={valor => setCPF(valor)} />
                    <CampoTexto obrigatorio={true} label="CNPJ" placeholder="Digite o CNPJ" valor={CNPJ} aoAlterado={valor => setCNPJ(valor)} />
                    <CampoTexto obrigatorio={true} label="CEP" placeholder="Digite o CEP" valor={CEP} aoAlterado={valor => setCEP(valor)} />
                    <CampoTexto obrigatorio={true} label="Logradouro" placeholder="Digite o Logradouro" valor={logradouro} aoAlterado={valor => setLogradouro(valor)} />
                    <CampoTexto obrigatorio={true} label="Numero" placeholder="Digite o Número" valor={numero} aoAlterado={valor => setNumero(valor)} />
                    <CampoTexto obrigatorio={true} label="Bairro" placeholder="Digite o Bairro" valor={bairro} aoAlterado={valor => setBairro(valor)} />
                    <CampoTexto obrigatorio={true} label="Cidade" placeholder="Digite a Cidade" valor={cidade} aoAlterado={valor => setCidade(valor)} />
                    <CampoTexto obrigatorio={true} label="Estado" placeholder="Digite o Estado" valor={estado} aoAlterado={valor => setEstado(valor)} />

                </section>
                <label className='cabecalho'>Dados da Usina e Instalação</label>
                <section className="cliente-usina">
                    <CampoTexto obrigatorio={true} label="Geração" placeholder="Digite a Geração Contratada" valor={geracao} aoAlterado={valor => setGeracao(valor)} />
                    <CampoTexto obrigatorio={true} label="Qtd. Inversor" placeholder="Digite a Quantidade de Inversor" valor={quantidadeInv} aoAlterado={valor => setQuantidadeInv(valor)} />
                    <CampoTexto obrigatorio={true} label="Marca Inversor(es)" placeholder="Digite a Marca do(s) Inveror(es)" valor={marcaInv} aoAlterado={valor => setMarcaInv(valor)} />
                    <CampoTexto obrigatorio={true} label="Modelo Inversor(es)" placeholder="Digite o Modelo do(s) Inversor(es)" valor={modeloInv} aoAlterado={valor => setmodeloInv(valor)} />
                    <CampoTexto obrigatorio={true} label="Quantidade de Módulos" placeholder="Digite a Quantidade de Módulos" valor={quantidadeMod} aoAlterado={valor => setQuantidadeMod(valor)} />
                    <CampoTexto obrigatorio={true} label="Marca dos Módulos" placeholder="Digite a Marca dos Módulos" valor={marcaMod} aoAlterado={valor => setMarcaMod(valor)} />
                    <CampoTexto obrigatorio={true} label="Modelo dos Módulos" placeholder="Digite o Modelo dos Módulos" valor={modeloMod} aoAlterado={valor => setModeloMod(valor)} />
                    <div>
                        <label className='cabecalho-1'>Detalhes de Ligação do Padrão</label>
                        <div className='cliente-padrao'>
                            <CampoTexto obrigatorio={true} label="Disjuntor do Padrão" placeholder="Qual Disjuntor" valor={disjuntoPadrao} aoAlterado={valor => setDisjuntoPadrao(valor)} />
                            <CampoTexto obrigatorio={true} label="Cabeamento" placeholder="Qual Bitola do Cabo" valor={cabeamentoPadrao} aoAlterado={valor => setCabeamentoPadrao(valor)} />
                        </div>
                    </div>

                </section>
                
            </div>
            <Botao>Enviar Formulário</Botao>
        </form>




    )

}



export default Formulario;