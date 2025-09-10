import { useEffect, useState } from "react";

interface StorageItens {
    key?: string,
    id: number | string,
    marca: string,
    ip: string,
    macaddress?: string,
    user: string | number,
    password: string | number
    imgUrl?: string
}
interface UseLocalStorageReturn {
  poststorage: () => void,
  editestorage: (id: string | number | null) => void,
  deletestorage: (id: string | number | null) => void,
}

export const useLocalStorge = ({ key, marca, ip, macaddress, user, password, imgUrl }: Partial<Omit<StorageItens, 'id'>>): [UseLocalStorageReturn, StorageItens[]] => {
    const [ storage_key ] = useState<string>(key ?? 'gateway');
    const itensStorage: StorageItens[] = JSON.parse(localStorage.getItem(storage_key) as string) || [];
    const [ getstorage, setGetstorage ] = useState<StorageItens[]>(itensStorage); //BUSCA DADOS E EXIBE NA TABELA

    useEffect(() => {
        setGetstorage(itensStorage as []);
    }, [marca]);


    const itemId = () => itensStorage.length +1;

    const cadastrarLocalSorage = ({ ...objItensStorage }: StorageItens | any) => {
        //VERIFICA CADASTRO REPETIDOS     
        let arraList = itensStorage.filter((item) => item.ip === objItensStorage.ip || item.macaddress === objItensStorage.macaddress);
        console.log(arraList)
        if(!arraList.length ){
            itensStorage.push(objItensStorage)
           localStorage.setItem(storage_key, JSON.stringify(itensStorage));
            console.log('Cadastrado')
        }else{
            console.log('Item já cadastrado!')
        }
    }

    const removedataLocalSorage = ({ id }: Omit<StorageItens, 'marca' | 'ip' | 'user' | 'password' | 'imgUrl'>) => {
        itensStorage.splice(itensStorage.findIndex(itens => itens.id === id), 1);
        localStorage.setItem(storage_key, JSON.stringify(itensStorage));
    }

    const editdataLocalSorage = ({ ...objItensStorage }: StorageItens) => {
        itensStorage.splice(itensStorage.findIndex(itens => itens.id === objItensStorage.id), 1, objItensStorage)
        localStorage.setItem(storage_key, JSON.stringify(itensStorage));
    }

    const poststorage = () => {
        if(storage_key === "gateway" ? marca && ip : marca && macaddress)
            cadastrarLocalSorage(
                {
                    "id": itemId(),
                    "marca": marca,
                    "ip": ip,
                    "macaddress": macaddress,
                    "user": user,
                    "password": password,
                    "imgUrl": imgUrl
                }
            )
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
                    password: password ?? '',
                    imgUrl: imgUrl ?? ''
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
