//define formatos de Ojetos
//Nesse caso irá definir o formato do objeto json q está sendo importado em index.ts via url

export default interface ICategoria {
    nome: string;
    ingredientes: string[];
    imagem: string;
}
