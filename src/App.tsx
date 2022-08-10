import { useState, useEffect } from "react";

import * as C from "./App.styles";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { Category } from "./types/Category";
import { Item } from "./types/Item";
import { getCurrentMonth, FilterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TabelArea/idex";
import { InfoArea } from "./components/InfoArea";
import { InputNovo } from "./components/InputNovo";

const App = () => {
  //lista geral
  const [list, stList] = useState(items);

  //lista filtrada
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  // INFORMAÇÃO DO MÊS ATUAL
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  //Calcular total
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  //monitorar mudanças,(list e currentM) e execultar a função criada
  useEffect(() => {
    setFilteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  //observa mudanças em FilteredLister e calcula
  useEffect(() => {
    let incomeCout = 0;
    let expenseCout = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCout += filteredList[i].value;
      } else {
        incomeCout += filteredList[i].value;
      }
    }
    setIncome(incomeCout);
    setExpense(expenseCout);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>SISTEMA FINACEIRO</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Área de informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Área de inserção */}
        <InputNovo onAdd={handleAddItem} />

        {/* Tabela de itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
