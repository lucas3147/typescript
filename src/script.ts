//Rascunhos

//Type para funções
type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1, n2) => {
    return n1 + n2;
}

const subtrair: MathFunction = (n1, n2) => {
    return n1 - n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: MathFunction = (n1, n2) => {
    return n1 / n2;
}

//Retorno void
function removerElemento(el: HTMLElement ): void {
    if (el.classList) {
        return
    }

    el.remove();
}

removerElemento( document.getElementById('teste') as HTMLElement );

type QualquerFuncao = () => void;

const algo: QualquerFuncao = () => {
    return 'estou retornando uma string dessa função';
}

let retorno = algo();

//watch Mode
const nome: string = 'Lucas';


// TRABALHANDO COM LBS NO TYPESCRIPT

const botao = document.querySelector('button') as HTMLButtonElement;

botao.addEventListener('click', () => {
    console.log('Clicou!');
});