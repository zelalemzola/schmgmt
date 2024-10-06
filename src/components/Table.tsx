import React from 'react'

const Table = ({columns,renderRow,data}:{columns:{header:string,accesor:string,className?:string}[]
    renderRow:(item:any)=>React.ReactNode;
    data:any[];
}) => {
  return (
    <table className='w-full mt-4 '>
        <thead>
         <tr className='text-left text0gray-500 text-sm'>
            {columns.map((column)=>(
                    <th className={column.className} key={column.header}>{column.header}</th>
            ))}
         </tr>
        </thead>
        <tbody>
            {data.map((item)=>(
                renderRow(item)
            ))

            }
        </tbody>
    </table>
  )
}

export default Table