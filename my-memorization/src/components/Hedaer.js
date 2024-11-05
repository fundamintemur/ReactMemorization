import React from 'react'

function Hedaer({number,data}) {
    console.log("header component re-rendered")
  return (
    <div>
     Header-{number}
     <br/>
     <code>{JSON.stringify(data)}</code>
    </div>
  )
}

export default React.memo(Hedaer);
