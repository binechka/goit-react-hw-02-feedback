import React from "react"
class Feedback extends React.Component {

    static defaultProps = {
        initialValue:0,
    }
state = {
  good: 0,
  neutral: 0,
  bad: 0
}
    Good = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
               
            }
        })
    }
    Neutral = () => {
        this.setState(prevState => {
            return {
           
                neutral: prevState.neutral + 1,
         
            }
        })
    }
    Bad = () => {
        this.setState(prevState => {
            return {
           
                bad:prevState.bad+1,
            }
        })
    }
    render() {
        return <div> <h2>Please leave feedback</h2>
            <button type="button" onClick={this.Good}>Good</button>
    <button type="button" onClick={this.Neutral}>Neutral</button>
        <button onClick={this.Bad}>bad</button>
        <h2>Statistics</h2>
            <p>Good: <span>{ this.state.good}</span></p>
        <p>Neutral: <span>{ this.state.neutral}</span></p>
        <p>Bad: <span>{ this.state.bad}</span></p>
        </div> 
    }
}

// const Feedback = () => {
//     return <div> <h2>Please leave feedback</h2>
//     <button>Good</button>
//     <button>Neutral</button>
//         <button>bad</button>
//         <h2>Statistics</h2>
//         <p>Good: <span>1</span></p>
//         <p>Neutral: <span>2</span></p>
//         <p>Bad: <span>3</span></p>
//         </div>
// }

export default Feedback