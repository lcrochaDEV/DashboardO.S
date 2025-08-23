import { useState } from "react";

interface StorageItens {
    id: number | string,
    marca: string,
    ip: string,
    macaddress?: string,
    user: string | number,
    password: string | number
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

const removedataLocalSorage = ({ id }: Omit<StorageItens, 'marca' | 'ip' | 'user' | 'password'>) => {
    itensStorage.splice(itensStorage.findIndex(itens => itens.id === id), 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itensStorage));
}

const editdataLocalSorage = ({ id, ip, marca, macaddress, user, password  }: StorageItens) => {
    let objItens = {
                "id": id,
                "marca": marca,
                "ip": ip,
                "macaddress": macaddress,
                "user": user,
                "password": password
    }
    itensStorage.splice(itensStorage.findIndex(itens => itens.id === id), 1, objItens)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itensStorage));
  

}

export const useLocalStorge = ({ marca, ip, macaddress, user, password }: Partial<Omit<StorageItens, 'id'>>): [UseLocalStorageReturn, StorageItens[]] => {
    const [ getstorage, setGetstorage ] = useState<StorageItens[]>(itensStorage); //BUSCA DADOS E EXIBE NA TABELA
    
    const poststorage = () => {
        if(marca && ip)
            cadastrarLocalSorage({ marca: marca, 
        value: [
            {
                "id": itemId(),
                "marca": marca,
                "ip": ip,
                "macaddress": macaddress,
                "user": user,
                "password": password
            }
        ]})
        setGetstorage(itensStorage as [])
    }

    const editestorage = (id: string | number | null) => {
        if (id !== null) {
            editdataLocalSorage(
                {
                    id: id, 
                    ip: ip ?? '', 
                    marca: marca ?? '', 
                    macaddress: macaddress, 
                    user: user ?? '', 
                    password: password ?? ''
                }
            )
        }
    }

    const deletestorage =  (id: string | number | null) => {
        if (id !== null) { 
            removedataLocalSorage({ id: id })
        }
        setGetstorage(getstorage.filter(itens => itens.id !== id))
    }

    return [ { poststorage: poststorage, editestorage: editestorage, deletestorage: deletestorage }, getstorage ]
}
