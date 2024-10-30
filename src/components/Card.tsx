import React from 'react'
interface Props {
    item: any
    setSelectedImg: (id: string) => void
}

export default function Card({ item, setSelectedImg }: Props) {
    return (
        <div className='grid-card' onClick={() => setSelectedImg(item.id)}>        
            <img src={item.urls.small} alt="" />
            <p className='title'>{item.alt_description}</p>
            <button>👍🏼</button>
        </div>

    )
}
