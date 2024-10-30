import React, { useState } from 'react'
import SingleImg from './SingleImg';

import Card from './card'
interface Props {
    data:any
}

export default function Grid({data}:Props) {
    const [seledtedImg, setSelectedImg] = useState('');

    const mouseHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        console.log(target.classList)
        if (target.classList.contains('grid')) {
            setSelectedImg('');
    }
    }

  return (
    <div className= "grid" onClick={mouseHandler}>
        {seledtedImg && <SingleImg id={seledtedImg} />} 
      {data.map((item:any) => (            
        <Card item={item} setSelectedImg={setSelectedImg} key={item.id} />
      ))}
    </div>
  )
}
