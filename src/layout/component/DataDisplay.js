import React from 'react'

const DataDisplay = ({data}) => {
    const items =data.map((item)=>{<li key={item.id}>
            firstname: {item.firstname}
    </li>})
  return<>{items}</>
}

export default DataDisplay