import React from 'react';
import Card from "./Card.jsx"
import C_data from "./C_data.jsx"
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              
              {
                C_data.map((val,idx)=>{
                  return <Card key={idx} imgsrc={val.imgsrc} title={val.title}/>
                })
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service