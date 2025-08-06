import { useState } from "react";

const STORAGE_KEY = 'menuLateral';

interface StorageItens {
    id?: number;
    key: string,
    value?: string[] | number | {} | []
}
const itensStorge: StorageItens[] = JSON.parse(localStorage.getItem(STORAGE_KEY) as string) || [];

function itemId() { 
    return itensStorge.length +1
}

function cadastrarLocalSorage({ key, value }: StorageItens) {
    //VERIFICA CADASTRO REPETIDOS  
    if(!itensStorge.length){
        if(itensStorge.filter(itens => itens.value !== value[0].value)) {
            localStorage.setItem(key, JSON.stringify(value));
            console.log('Cadastrado')
        }
    }else if(itensStorge.length !== 0) {
        if(itensStorge.every(itens => itens.value !== value[0].value)) {
            itensStorge.push(value[0])
            localStorage.setItem(key, JSON.stringify(itensStorge));
            console.log('Novo item cadastrado')
        }else{
            console.log('O cadastrado existe')
        }
        console.log(itensStorge)
    }
}
//cadastrarLocalSorage({ key: STORAGE_KEY, value: newItem });
export const useGetLocalStorge = (key, value) => {

    const poststorge = () => {
        cadastrarLocalSorage({ key:key, value: [{"id":itemId(), "value":value}]})
    }
    
    return [poststorge]
}