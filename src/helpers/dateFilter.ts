import { Item } from "../types/Item";

// Pasta com lista de funçoes baseadas em datas (manipulação de datas)

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth() + 1}`;
}

//função de nova listas com itens filtrados

export const FilterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for (let i in list) {
        if (list[i].date.getFullYear() === parseInt(year) &&
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
const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

export const formatCurrentMonth = (CurrentMonth: string): string => {
    let [year, month] = CurrentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
return `${months[parseInt(month) - 1]} ${year}`;
}