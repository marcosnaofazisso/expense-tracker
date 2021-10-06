import { Item } from '../types/Item';


export const items: Item[] = [
    { date: new Date(2021, 9,15), category: 'food', title: 'McDonalds', value: 24.99 },
    { date: new Date(2021, 9,15), category: 'food', title: 'Burguer King', value: 32.99 },
    { date: new Date(2021, 9,16), category: 'rent', title: 'Aluguel Apto', value: 2300 },
    { date: new Date(2021, 9,18), category: 'salary', title: 'Salário', value: 3200 },
];

// TypeScript é uma linguagem tipada, então precisamos colocar o tipo das variáveis. 
// Portanto, criamos uma pasta ''types'' com o arquivo TS chamado Item, que foi exportado (export type)