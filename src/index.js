import React from 'react'
import ReactDOM from 'react-dom'
import CounterApp from './CounterApp'
// import PrimeraApp from './PrimeraApp'
import './index.css'

// referencia al root, donde se visualizan los componentes
const divRoot = document.querySelector('#root')

// ReactDOM.render(<CounterApp value={10} />, divRoot)
ReactDOM.render(<CounterApp value={0}/>, divRoot)
