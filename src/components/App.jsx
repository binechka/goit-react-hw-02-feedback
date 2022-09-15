// import Feedback from "components/Feedback/Feedback"

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//      {/* <Feedback/> */}
//     </div>
//   );
// };
import Statistics from "./Statistics/Statistics"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from "./Section/Section"
import NotificationMessage from "./NotificationMessage/NotificationMessage"
import React from "react"
class App extends React.Component {

    static defaultProps = {
        initialValue:0,
    }
state = {
  good: 0,
  neutral: 0,
    bad: 0,
    

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
      const {good, neutral, bad} = this.state
    return <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        backgroundColor: '#7c7bff'
      }}
    >
      <Section title="Please leave feedback" >
        <FeedbackOptions Good={this.Good} Neutral={this.Neutral} Bad={this.Bad} /> 
      </Section>
      <Section >
        {good + neutral + bad === 0 ? <NotificationMessage /> : <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} positivePercentage={Math.round((good / (good + neutral + bad)) * 100)} />}
        </Section>
      
        </div> 
        
    }
}
export default App