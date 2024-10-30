import React, { useEffect, useState } from 'react'
interface Props {
    id:string 
}

export default function Details({id}:Props) {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
          const response = await fetch('https://api.unsplash.com/photos/?client_id=ZlBePobXPFId2_I5U2xpfHhCoTUVlZ4xn6rySOAdD_I&id='+id);
          const data = await response.json();
          setData(data);
          console.log(data);
          setIsLoading(false);
        } catch (error: any) {
          console.log(error);
        }
      }

      useEffect(() => {
        fetchData();
      }, [])
  return (
    <div className="details">
        <img src="data[0].urls.regular" alt="" />
        <p>{data[0].alt_description}</p>
    </div>
  )
}
