import React from "react";
import "../Style/Container.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

const Container = (props) => {
    let {name, heading, desc, percen, copiers, triggered, outcomes, spercentage, sratio, drawdown}=props;
    const percentage = percen;
    let pathColor;
    if (percentage <= 25) {
        pathColor = 'rgb(145, 22, 1)';
      } else if (percentage > 25 && percentage <= 60) {
        pathColor = 'rgb(250, 184, 19)';
      } else {
        pathColor = 'rgb(83, 255, 83)';
      }

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 container1">
      <div className="subcontainer1">
        <div>
        <p className="text-center" style={{color:"lightgreen"}}>{name}</p>
        <h6 className="text-center  pb-2 ">
           {heading}
        </h6>
        <p style={{fontSize:"0.83rem"}} className="text-center"> {desc}<br/>
            <a  style={{textDecoration:"none",color:"rgb(247, 168, 71)"}}>Read more...</a>
        </p>
        </div>
        <div className="d-flex justify-content-center align-items-center " >
            <div className="w-50">

       
<CircularProgressbarWithChildren value={percentage}
  strokeWidth={8}
  text={`${percentage}%`}
  styles={{
    
    path: {
          stroke: pathColor,
      strokeLinecap: 'round',
      transition: 'stroke-dashoffset 0.5s ease 0s',
      transform: 'rotate(0turn)',
      transformOrigin: 'center center',
    },
    
    text: {
      fill: 'lightgreen',
      fontSize: '13px',
    },
    trail: {
        stroke: 'rgb(41, 41, 41)',
        strokeLinecap: 'round',
        transform: 'rotate(0.25turn)',
        transformOrigin: 'center center',
      },
    
  }}>
  <div style={{ fontSize: 11, marginTop: 35 }}>
    <span style={{color:"lightgreen"}} >Backtest avg win%</span>
  </div>
</CircularProgressbarWithChildren>

<h6 className="text-center mt-2">Copiers-{copiers}</h6>
</div>

        </div>
       
        <div className="datacon my-3">
            <h6 className="text-center mb-3" style={{color:"lightgreen"}}>Backtest Performance</h6>
           <div className="subdatacon1 px-2 my-1 pt-1 pb-2">
            <span className="" style={{fontSize:"0.83rem"}}>Total trades triggered</span>
            <span className="" style={{fontSize:"0.8rem"}}>{triggered}</span>
           </div>
           <div className="subdatacon2 px-2 my-1 pt-1 pb-2">
           <span className="" style={{fontSize:"0.83rem"}}>Successful Outcomes</span>
           <span className="" style={{fontSize:"0.8rem"}}>{outcomes}</span>
           </div>
           <div className="subdatacon3 px-2 my-1 pt-1 pb-2">
           <span className="" style={{fontSize:"0.83rem"}}>Successful Percentage</span>
           <span className="" style={{fontSize:"0.8rem"}}>{spercentage}%</span>
           </div>
           <div className="subdatacon4 px-2 my-1 pt-1 pb-2">
           <span className="" style={{fontSize:"0.83rem"}}>Average Sharpe Ratio</span>
           <span className="" style={{fontSize:"0.8rem"}}>{sratio}</span>
           </div>
           <div className="subdatacon5 px-2 my-1 pt-1 pb-2">
           <span className="" style={{fontSize:"0.83rem"}}>Maximum Drawdown</span>
           <span className="" style={{fontSize:"0.8rem"}}>{drawdown}%</span>
           </div>
        </div>

        <div className="buttoncon">
       
<button type="submit" className="outline purple-white">Copy</button>
<p><a  href="#" >View Strategy</a></p>
        </div>

      </div>
    </div>
  );
};

export default Container;
