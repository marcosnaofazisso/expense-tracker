import { Item } from '../types/Item';


export const items: Item[] = [
    { date: new Date(2021, 9,15), category: 'food', title: 'Vegan Burguer', value: 24.99 },
    { date: new Date(2021, 9,1), category: 'salary', title: 'Renda Extra', value: 180.99 },
    { date: new Date(2021, 10,20), category: 'pet', title: 'Cuidados com Pets', value: 1400 },
    { date: new Date(2021, 9,15), category: 'food', title: 'Pizza Saudável', value: 32 },
    { date: new Date(2021, 9,16), category: 'rent', title: 'Aluguel', value: 2300 },
    { date: new Date(2021, 9,18), category: 'salary', title: 'Salário', value: 3200 },
    { date: new Date(2021, 9,18), category: 'drinks', title: 'Tchê Café', value: 120 },
    { date: new Date(2021, 10,10), category: 'salary', title: 'Renda Extra', value: 499 },
    { date: new Date(2021, 10,7), category: 'food', title: 'Lanche Vegano', value: 18 },
    { date: new Date(2021, 10,2), category: 'food', title: 'Ceará Lanches', value: 40 },
    { date: new Date(2021, 10,5), category: 'gym', title: 'Academia', value: 100 },
    { date: new Date(2021, 10,8), category: 'pet', title: 'Cuidados com Pets', value: 90 },
    { date: new Date(2021, 10,11), category: 'salary', title: 'Salário', value: 1000 },
    { date: new Date(2021, 10,20), category: 'food', title: '', value: 100 },
    { date: new Date(2021, 10,21), category: 'salary', title: 'Renda Extra', value: 1120},
    { date: new Date(2021, 10,22), category: 'food', title: 'Loja da Ana', value: 25 },
    { date: new Date(2021, 10,19), category: 'rent', title: 'Aluguel', value: 2500 },
    { date: new Date(2021, 10,10), category: 'food', title: 'Doceria Dois Irmãos', value: 95 },
    { date: new Date(2021, 10,13), category: 'salary', title: 'João estava me devendo', value: 100 },
    { date: new Date(2021, 10,18), category: 'pet', title: 'Banho da Belinha', value: 100 },
    { date: new Date(2021, 11,18), category: 'food', title: 'Banho da Belinha', value: 100 },
    { date: new Date(2021, 11,18), category: 'food', title: 'Banho da Belinha', value: 100 },
    { date: new Date(2021, 11,18), category: 'drinks', title: 'Confraternização da Firma', value: 100 },
    { date: new Date(2021, 11,18), category: 'drinks', title: 'Encontro com Amigos', value: 250 },
    { date: new Date(2021, 11,18), category: 'gym', title: 'Academia', value: 100 },
    { date: new Date(2021, 11,18), category: 'salary', title: 'Salário', value: 1400 },
    { date: new Date(2021, 12,1), category: 'rent', title: 'Aluguel', value: 1400 },
    { date: new Date(2021, 12,5), category: 'salary', title: 'Aluguel', value: 3800 },
    { date: new Date(2021, 12,8), category: 'pet', title: 'Ração do Belo', value: 120 },
    { date: new Date(2021, 12,10), category: 'rent', title: 'Aluguel', value: 1400 },
    { date: new Date(2021, 8,8), category: 'rent', title: 'Aluguel', value: 1400 },
    { date: new Date(2021, 8,5), category: 'salary', title: 'Salário', value: 3000 },
    { date: new Date(2021, 8,6), category: 'gym', title: 'Academia', value: 100 },
    { date: new Date(2021, 8,8), category: 'pet', title: 'Banho do Bill', value: 100 },
];


// TypeScript é uma linguagem tipada, então precisamos colocar o tipo das variáveis. 
// Portanto, criamos uma pasta ''types'' com o arquivo TS chamado Item, que foi exportado (export type)