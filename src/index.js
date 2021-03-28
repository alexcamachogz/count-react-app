import React from 'react'
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp'
import './index.css'

// referencia al root, donde se visualizan los componentes
const divRoot = document.querySelector('#root')

ReactDOM.render(<PrimeraApp />, divRoot)
