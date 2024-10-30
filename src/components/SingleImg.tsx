import React, { useEffect, useState } from 'react'
interface Props {
    id:string 
}

export default function SingleImg({id}:Props) {
    const [data, setData] = useState<any>(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            console.log(id)
          const response = await fetch(`https://api.unsplash.com/photos/${id}/?client_id=ZlBePobXPFId2_I5U2xpfHhCoTUVlZ4xn6rySOAdD_I`);
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
      }, [id])
  return (
    <div className="details-modal details-overlay">
        <button>close ❌</button>
        {
            isLoading && <p>Loading...</p>
            }
        {
            data && <img src={data.urls.regular} alt="bla bla" />
        }
        {
            data  && <p>{data.alt_description}</p>
        }
        {
            data && <button>👍🏼</button>
        }
    </div>
  )
}
