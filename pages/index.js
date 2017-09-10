import React from 'react'
import Svgx from '../modules/svgx'

export default () => (
  <div className="hello">
    <p>Hello World</p>
    <Svgx
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
    >
      <circle cx="150" cy="150" r="50" />
    </Svgx>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }
      .icon {
        stroke-color: #007;
        stroke-width: 3px;
      }
    `}</style>
  </div>
)
