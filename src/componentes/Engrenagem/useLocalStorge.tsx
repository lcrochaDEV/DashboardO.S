
const STORAGE_KEY = 'menuLateral';

interface StorageItens {
    key: string,
    id?: number;
    value?: string[] | number[] | {}
}
const itensStorge: StorageItens[] = JSON.parse(localStorage.getItem(STORAGE_KEY) as string) || [];
function itemId() {
 
    if(itensStorge.length === 0) {
        return itensStorge.findIndex(id => id.id === itensStorge.length) +2
    }if(itensStorge.length > 0) {
        return itensStorge.findIndex(id => id.id === itensStorge.length) +1
    }
}

function cadastrarLocalSorage({ key, value }: StorageItens) {
    //VERIFICA CADASTRO REPETIDOS  
    if(itensStorge.filter(itens => itens.value !== value[0].value).length === 0) {
        localStorage.setItem(key, JSON.stringify(value));
        console.log('Cadastrado')
    }else if(itensStorge.filter(itens => itens.value !== value[0].value).length > 0) {
        itensStorge.push(...value as StorageItens)
        //localStorage.setItem(key, JSON.stringify(itensStorge));
        console.log('Novo Cadastrado')
    }else{
        console.log('Encontrado um Cadastrado')
    }
    
    
console.log(itensStorge)
}
//cadastrarLocalSorage({ key: STORAGE_KEY, value: newItem });
export const useGetLocalStorge = (key, value) => {
    cadastrarLocalSorage({ key:key, value: [{"id":itemId(), "value":value}] })
}