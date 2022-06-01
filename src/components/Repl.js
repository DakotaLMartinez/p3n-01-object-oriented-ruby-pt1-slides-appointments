import React from 'react'

function Repl({src, width, height}) {
  return (
    <>
      <iframe
        src={src}
        width={width || "1200px"}
        height={height || "1000px"}
        className="replit"
      ></iframe>
      <a href={src} target="_blank" rel="noreferrer">View on Repl.it</a>
    </>
  )
}

export default Repl
