import React from 'react'
import { useState, useEffect} from 'react';
import * as C from './App.styles'
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';


function App() {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );

  }, [list, currentMonth]);

  return (
    <div>
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>

          {/* Area de informações*/}

          {/* Area de inserção*/}

          {/* Tabela de items*/}
          <TableArea list={filteredList}/>


        </C.Body>
      </C.Container>
    </div>
  )
}

export default App;
