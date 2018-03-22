import React from 'react'
import '../style/ui.scss'

export class DayCount extends React.Component {
    percentToDecimal(decimal) {
        return ((decimal * 100) + '%')
    }
    calcGoalProgress(total, goal) {
        return this.percentToDecimal(total/goal)
    }
    render() {
        return (
            <div className="day-count">
                <div className="b-ball-day">
                  <span>{this.props.bball} days</span>
                </div>
                <div className="bike-days">
                  <span>{this.props.bike} days</span>
                  </div>
                <div className="misc-days">
                  <span>{this.props.misc} days</span>
                </div>
                <div className="total-days">
                  <span>{this.props.total} days</span>
                </div>
                <div className="goal-days">
                  <span>{this.calcGoalProgress(this.props.total, this.props.goal)}</span>
                </div>
            </div>
        )
    }
}
