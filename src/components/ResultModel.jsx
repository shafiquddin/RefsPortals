import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModel = forwardRef(function ResultModel({timeRemaining,targetTime,onReset},ref){
    const dialog = useRef();
    const userLost = timeRemaining <= 0;
    const forrmattedTimeRemaining = (timeRemaining/1000).toFixed(2); 
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100 );
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    })
   
    return <dialog ref={dialog} className="result-modal">
       {userLost && <h2>You Lost</h2>}
       {!userLost && <h2>Your Score : {score}</h2>}  
        <p>Your target time was <strong>{targetTime} seconds.</strong></p>
        <p>You stopped the timer with <strong>{forrmattedTimeRemaining} seconds left</strong></p>
        <form method='dialog' onSubmit = {onReset}>
            <button>Close</button>
        </form>
    </dialog>
});
export default ResultModel;