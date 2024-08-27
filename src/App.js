
import { useEffect, useState } from 'react';
import './App.css';
import Container from './Components/Container';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setData(data))
      .catch(error => console.error('Error fetching the JSON data:', error));
  }, []);
  return (
    <>
      <p className='mx-3 mt-4 fs-5 mb-4' style={{color:"lightgreen"}}>Copy top performing technical indicator strategies for short-term trading</p>
      <div className='d-flex my-3 flex-wrap' style={{color:"white"}}>
        <a href='#' className='mx-3' style={{textDecoration:"none",color:"lightgreen"}}>Indicator Strategies</a>
        <a href='#' className='mx-3' style={{textDecoration:"none",color:"white"}}>Candlestick Patterns</a>
        <a href='#' className='mx-3' style={{textDecoration:"none",color:"white"}}>Crypto Strategies</a>
        <a href='#' className='mx-3' style={{textDecoration:"none",color:"white"}}>Social Trading (Coming soon)</a>
      </div>
    <div className="App ">
{data &&  data.map((element,i)=>{return (
  <Container key={i} name={element.name} heading={element.heading} desc={element.desc} percen={element.percen} copiers={element.copiers} triggered={element.triggered} outcomes={element.outcomes} spercentage={element.spercentage} sratio={element.sratio} drawdown={element.drawdown} />

)})}
     
    </div>
</>
  );
}

export default App;
