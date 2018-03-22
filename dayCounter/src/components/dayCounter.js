import React from 'react'
import '../style/ui.scss'

export const DayCount = React.createClass({
    render() {
        return (
            <div>
                <div className="b-ball-day">
                  <span>2 days</span>
                </div>
                <div className="bike-days">
                  <span>3 days</span>
                  </div>
                <div className="misc-days">
                  <span>1 day</span>
                </div>
            </div>
        )
    }
})
