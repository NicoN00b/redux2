import React from 'react'
import { render } from 'react-dom'
import  { DayCount } from './components/dayCounter'

window.React = React

render(
    <DayCount />,
    document.getElementById('react-container')
)
