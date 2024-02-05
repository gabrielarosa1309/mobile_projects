//Import Styles
import { ContainerForm, ScrollForm, ViewUF } from "./style";

//Componente BoxInput
import { BoxInput } from "../../components/BoxInput";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
    //hooks -- states
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUf] = useState('');

    //hooks -- effect
    // useEffect(async () => {
    //     //chamada da API
    //     try {
    //         if (cep != "" && cep.length === 8) {
    //             const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    //             if (endereco.error) {
    //                 alert("Verifique o CEP");
    //                 return;
    //             }

    //             setLogradouro(endereco.data.logradouro);
    //             setBairro(endereco.data.bairro);
    //             setCidade(endereco.data.localidade);
    //             setEstado(endereco.data.estado);
    //             setUf(endereco.data.uf);
    //         }
    //     } catch (error) {
    //         console.log("Erro ao buscar CEP");
    //         console.log(error)
    //     }
    // }, []);

    useEffect(() => {
        const buscaApi = async () => {
            if (cep !== "") {
                try {
                    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
                    const data = response.data;
                    if (!data.erro) {
                        setLogradouro(data.logradouro);
                        setBairro(data.bairro);
                        setCidade(data.localidade);
                        setEstado(data.uf);
                        setUf(data.uf)
                    } else {
                        alert("Verifique o CEP");
                    }
                } catch (error) {
                    console.log("Erro ao buscar CEP", error);
                }
            }
        };
    
        buscaApi();
    }, [cep]);

    //O OUTRO USE EFFECT ESTAVA DANDO O ERRO "DESTROY IS NOT A FUNCTION" PQ EU PRECISAVA FAZER A ASYNC FUNCTION DENTRO DO USE EFFECT E N NO USE EFFECT EM SI. ISSO EVITA O PROBLEA DE RETORNAR UMA PROMESSA DO USEEFFECT.

    return (
        <ScrollForm>
            <ContainerForm>
                <BoxInput
                    textLabel="Informe o CEP"
                    placeholder="Cep..."
                    keyType="numeric"
                    maxLength={9}
                    editable={true}
                    fieldValue={cep}
                    onChangeText={tx => setCep(tx)}
                />
                <BoxInput
                    textLabel="Endereço"
                    placeholder="Endereço..."
                    fieldValue={logradouro}
                    onChangeText={tx => setLogradouro(tx)}
                />
                <BoxInput
                    textLabel="Bairro"
                    placeholder="Bairro..."
                    fieldValue={bairro}
                    onChangeText={tx => setBairro(tx)}
                />
                <BoxInput
                    textLabel="Cidade"
                    placeholder="Cidade..."
                    fieldValue={cidade}
                    onChangeText={tx => setCidade(tx)}
                />
                <ViewUF>
                    <BoxInput
                        textLabel="Estado"
                        placeholder="Estado..."
                        fieldWidth="70"
                        fieldValue={estado}
                        onChangeText={tx => setEstado(tx)}
                    />
                    <BoxInput
                        textLabel="UF"
                        placeholder="UF"
                        fieldWidth="20"
                        fieldValue={uf}
                        onChangeText={tx => setUf(tx)}
                    />
                </ViewUF>
            </ContainerForm>
        </ScrollForm>

    )
}