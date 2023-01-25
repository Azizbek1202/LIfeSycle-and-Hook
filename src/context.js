import React, {useState, createContext} from 'react'
import { tableData } from './mock/table';

export const TableContext = createContext();

const Context = ({children}) => {

    const [data, setData] = useState(tableData);

    return(
        <TableContext.Provider value={[data, setData]}>
            {children}
        </TableContext.Provider>
    )
}

export default Context;