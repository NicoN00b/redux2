import React from 'react'
import { render } from 'react-dom'
import  { DayCount } from './components/dayCounter'

window.React = React

render(
    <DayCount total={6}
              bball={2}
              bike={3}
              misc={1}
              goal={30}/>,
    document.getElementById('react-container')
)
