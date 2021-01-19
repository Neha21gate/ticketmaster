  
import React from "react";
import ticket from "../image/ticket.png";

function Home() {
  return (
    <div align="center" >
      <br />
      <h1 style={{color:"Red"}}>You are welcome in the Ticket Master's World</h1>
      <div style={{width:"800px", height:"400px"}}>
      <img
        src={ticket}
        width={800}
        height={400}
        alt="loading"
      ></img>
      </div>
    </div>
  );
}

export default Home;