import React, {Fragment, useState, useEffect} from 'react';

import Loader from "./Loader"
import ShuffleButton from "../assets/images/ice-breaker_button2.png"
import "../assets/css/Buttons.css"
import "../assets/css/Text.css"

const ShuffleQuestions = ({ques}) => {

    const [questions, setQuestions] = useState("")
    const [result, setResult] = useState(false)
    const [question, setQuestion] = useState("")
    const [loading, setLoader] = useState('false')

    useEffect(() => {
        const getQuestions = async() => {
            try {
                setQuestions(ques)
            } catch (error) {
                console.error(error.message)
            }
        };
        getQuestions(); 
    }, [ques]);

    const randomizeQuestions = (e) => {
        try {
            showLoader()
            const ques_arry = questions
            console.log(ques_arry)
            const randomQues = ques_arry[Math.floor(Math.random()*ques_arry.length)]
            console.log(randomQues)
            setResult(true)
            setQuestion(randomQues)
            
        } catch (error) {
            console.error(error.message)
        }
    }

    const ShowShuffleButton = () => {
        return (
            <button onClick={e => randomizeQuestions(e)} style={{"background-color": "transparent", "border-style": "none"}}>
                <img src={ShuffleButton} style={{width:'250px'}}/>
            </button>
        )
    }

    const ShowResult = () => {
        if (loading === 'true') {
            return (
                <div>
                    {showLoader && <Loader/>}
                    <diV className="results">
                        <h4 className="TextStyle">Shuffling questions...</h4>
                    </diV>
                </div>)
        } else {
            return (
                <div>
                    <ShowShuffleButton/>
                    <diV className="results">
                        <h4 className="TextStyle">{question}</h4>
                    </diV>
                </div>)
        }
    }

    const showLoader = () => {
        setLoader('true');

        setTimeout(()=> {
            setLoader('false')
        }, 3500)
    }

    return (
        <Fragment>
            <diV className="container mt-5 text-center">
                { result ? <ShowResult/> : <ShowShuffleButton/> }
            </diV>
        </Fragment>
    )
}

export default ShuffleQuestions