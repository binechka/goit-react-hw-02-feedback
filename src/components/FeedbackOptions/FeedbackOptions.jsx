
import s from "./FeedbackOptions.module.css"
const FeedbackOptions = ({ Good, Neutral, Bad }) => {
    return <div className = {s.btnBox}><button className={s.btn} type="button" onClick={Good}>Good</button>
    <button className={s.btn}  type="button" onClick={Neutral}>Neutral</button>
        <button className={s.btn} onClick={Bad}>Bad</button></div>
}
export default FeedbackOptions