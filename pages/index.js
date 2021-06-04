import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/header'
import Input from '../components/input';

export default function Home() {
  const [count, setcount] = useState(0)
  const [posts, setPosts] = useState([])
  const [fonts, setFonts] = useState(['Dancing','Limelight','Lobster','Noto','Roboto','ZCOOL'])
  const [fontWeight, setfontWeight] = useState(['base','sm','lg','xl','2xl','3xl'])
  const [mt, setMt] = useState([1,20,4,4,8,6,7,2,9,10,12,14,16,20])
  const [position, setposition] = useState(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o'])

  const [rotate, setRotate] = useState(['rotate-1','rotate-2','rotate-3','rotate-6','rotate-12','rotate-12','-rotate-12','-rotate-12','-rotate-6','-rotate-3','-rotate-2','-rotate-1'])
  const [color, setColor] = useState(['#D50000','#C51162','#AA00FF','#6200EA','#304FFE','#0091EA','#00B8D4','#00BFA5','#00C853','#64DD17','#FFD600','#FFAB00','#FF6D00','#DD2C00','#6D4C41','#757575','#263238','#78909C'])
  
  
  
  useEffect(async() => {
    const background=Math.round(Math.random()*17);
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
    }
      console.log(position);
      shuffleArray(position)
      console.log(position);

    document.body.style.backgroundColor = color[background];
    const res = await fetch(`/api/post`);
    const data = await res.json();
    console.log(data);
    setPosts(data);
  }, [count])

  const setCount =(data)=>{
    console.log(count);
    setcount(data)
    console.log(data);
  }
  return (
    <div className='relative'>
      <Head>
        <title>Wall Of Positivity</title>
        <meta name="description" content="wall-of-positivity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="pb-16 w-full h-5/6 main">

      {posts.map((post,index)=> {
        const left= (((Math.random() * (window.innerWidth))).toFixed()).toString()+'px'
        const top=((Math.random() * (window.innerHeight - ((Math.random()*100) + 50).toFixed())).toFixed()).toString()+'px'
        const width=((Math.random()*300) + 200).toFixed().toString() +'px'
        return <div>
                   <p  style={{gridArea:position[index]}} className={`bg-white text-black mt-${mt[Math.round(Math.random()*14)]} post transform min-h-8 mx-8 bg-white p-3 rounded-md font-${fonts[Math.round(Math.random()*5)]} ${rotate[Math.round(Math.random()*17)]} text-${fontWeight[Math.round(Math.random()*5)]}`} key={post._id}>{post.post}</p>
                </div>
      })
}
      </div>
      <Input setcount={setCount} />
    </div>
  )
}
//backgroundColor: color[Math.round(Math.random()*17)],