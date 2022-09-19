
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

    totalFeedback = () => this.state.good + this.state.bad + this.state.neutral+1; 

    
    
    positivePercantage = () => 
    Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100)
   
    

    
  render() {
      const { good, neutral, bad } = this.state
     
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
        {good + neutral + bad === 0 ? <NotificationMessage /> : <Statistics good={good} neutral={neutral} bad={bad} totalFeedback={this.totalFeedback()} positivePercentage={this.positivePercantage()} />}
        </Section>
      
        </div> 
        
    }
}
export default App