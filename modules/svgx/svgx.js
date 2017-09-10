import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import hash from 'string-hash'

const svgs = []

export function flushToSvgSymbols() {
  const symbols = svgs.map((el, i) => {
    return (
      <symbol
        id="svgx-12345"
        {...el.props}
        key={i}
      />
    )
  })
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'none' }}
    >
      {symbols}
    </svg>
  )
}

if (process.browser) {
  window.flush = flushToSvgSymbols
  window.react = ReactDOM
}

export default class extends Component {
  componentWillMount() {
    mount(this)
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    unmount(this)
  }

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
      >
        <use
          xlinkHref="#svgx-12345" // this needs to be a hash of the svg synmbol
        />
      </svg>
    )
    // return null
    // this will eventually render the <use xlinkHref="">
  }
}

function mount(n) {
  svgs.push(n)
  return
}

function unmount(n) {
  const i = svgs.indexOf(n)
  if (i < 0) {
    return
  }

  svgs.splice(i, 1)
  return
}
