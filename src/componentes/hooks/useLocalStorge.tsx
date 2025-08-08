const STORAGE_KEY = 'menuLateral';

interface StorageItens {
    id?: number,
    key: string | false,
    ip?: string | false,
    macaddress?: string,
}
const itensStorge: StorageItens[] = JSON.parse(localStorage.getItem(STORAGE_KEY) as string) || [];
function itemId() { 
    return itensStorge.length +1
}
function cadastrarLocalSorage({ key, value }: StorageItens | any) {
    //VERIFICA CADASTRO REPETIDOS     
    let arraList = itensStorge.filter((item) => {
  	    return item.ip === value[0].ip;
	})
    if(!arraList.length ){
        itensStorge.push(value[0])
        localStorage.setItem(key, JSON.stringify(itensStorge));
        console.log('Cadastrado')
    }else{
        console.log('Item cadastrado!')
    }
}


//BUSCA DADOS E EXIBE NA TABELA
function recuperaLocalstorge(){	
	itensStorge.forEach((itens) => {
        console.log(itens)
	})
}


export const useLocalStorge = ({ key, ip, macaddress }: Omit<StorageItens, 'id'>) => {
    const poststorge = () => {
        if(key !== false && ip !== false)
            cadastrarLocalSorage({ key: key, value: 
                [
                    {
                        "id": itemId(),
                        "marca": key,
                        "ip": ip,
                        "macaddress": macaddress,
                    }
                ]})
    }
    const getstorge = () => {
        recuperaLocalstorge()
    }
    return [poststorge, getstorge]
}

/*
function cadastrarLocalSorage({ key, value }: StorageItens) {
    //VERIFICA CADASTRO REPETIDOS  
    if(!itensStorge.length){
        if(itensStorge.filter(itens => itens.value !== value[0].value)) {
            localStorage.setItem(key, JSON.stringify(value));
             itensStorge.push(value[0])
            console.log('Cadastrado')
        }
    }else if(itensStorge.length !== 0) {
        if(itensStorge.filter(itens => itens.value !== value[0].value)) {
            localStorage.setItem(key, JSON.stringify(itensStorge));
            console.log('Novo item cadastrado')
        }else{
            console.log('O cadastrado existe')
        }
    }
    console.log(itensStorge)
}
*/
