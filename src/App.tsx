import { useEffect, useState } from 'react'
import Grid from './components/grid'


function App() {
const [arr, setArr] = useState<any>([])
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.unsplash.com/photos/random/?client_id=ZlBePobXPFId2_I5U2xpfHhCoTUVlZ4xn6rySOAdD_I&count=30');
      const data = await response.json();
      setArr((arr :any) => [...arr, ...data]);
      console.log(data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
      setArr([]);
      setIsLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  const handleClick = () => {
    fetchData();
  }
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !isLoading) {
      fetchData();
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <div className='header'>Wellcom to my app</div>
      <button onClick={handleClick}>Click to show random photos</button>
      <div className="container">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {arr.length > 0 && <Grid data={arr} />}
      </div>
      
    </div>
  )
}

export default App
