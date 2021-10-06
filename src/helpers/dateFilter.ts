import { Item } from "../types/Item";


export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for( let i in list ) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}
const addZeroToDate = (n: number): string => {
    if (n < 10) {
        return `0${n}`;
    
    }else {
        return `${n}`;
    }
}




// Essa linha 11 = let [year,month] = date.split('-');
// seria a MESMA COISA que fazer:
//
// let dateSplit = date.split('-');
// let year = dateSplit[0];
// let month = dateSplit[1];



// Já essa função da linha 32 = const addZeroToDate
// pode ser feita em apenas uma linha, dessa forma:
//
// const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;