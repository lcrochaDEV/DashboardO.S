import { useState } from "react";

interface StorageItens {
    id: number | string | null,
    marca: string | false,
    ip: string | false,
    macaddress?: string,
}
interface UseLocalStorageReturn {
  poststorage: () => void,
  editestorage: (id: string | number | null) => void,
  deletestorage: (id: string | number | null) => void,
}

const STORAGE_KEY = 'gateway';
const itensStorage: StorageItens[] = JSON.parse(localStorage.getItem(STORAGE_KEY) as string) || [];
const itemId = () => {
   return itensStorage.length +1;
}

const cadastrarLocalSorage = ({ value }: StorageItens | any) => {
    //VERIFICA CADASTRO REPETIDOS     
    let arraList = itensStorage.filter((item) => item.ip === value[0].ip);
    if(!arraList.length ){
        itensStorage.push(value[0])
        localStorage.setItem(STORAGE_KEY, JSON.stringify(itensStorage));
        console.log('Cadastrado')
    }else{
        console.log('Item cadastrado!')
    }
}

const removedataLocalSorage = ({ id }: StorageItens) => {
    itensStorage.splice(itensStorage.findIndex(itens => itens.id === id), 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itensStorage));
}

const editdataLocalSorage = ({ id, ip, marca, macaddress }: StorageItens) => {
    let objItens = {
                "id": id,
                "marca": marca,
                "ip": ip,
                "macaddress": macaddress,
    }
    itensStorage.splice(itensStorage.findIndex(itens => itens.id === id), 1, objItens)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itensStorage));
  

}

export const useLocalStorge = ({ marca, ip, macaddress }: Omit<StorageItens, 'id'>): [UseLocalStorageReturn, StorageItens[]] => {
    const [ getstorage ] = useState<StorageItens[]>(Object.assign(itensStorage)); //BUSCA DADOS E EXIBE NA TABELA
    
    const poststorage = () => {
        if(marca !== false && ip !== false)
            cadastrarLocalSorage({ marca: marca, 
        value: [
            {
                "id": itemId(),
                "marca": marca,
                "ip": ip,
                "macaddress": macaddress,
            }
        ]})
    }

    const editestorage = (id: string | number | null) => {
        if (id !== null) {
            editdataLocalSorage({ id: id, ip: ip, marca: marca, macaddress: macaddress })
        }
    }

    const deletestorage =  (id: string | number | null) => {
        if (id !== null) { 
            removedataLocalSorage({ id: id, marca: false, ip: false })
        }
    }

    return [ { poststorage: poststorage, editestorage: editestorage ,deletestorage: deletestorage }, getstorage ]
}
