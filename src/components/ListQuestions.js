import React, {Fragment, useEffect, useState} from "react";

import ShuffleQuestions from "./ShuffleButton"
import "../assets/css/Table.css"
import "../assets/css/Text.css"

const ListQuestions = () => {

    const [questions, setQuestions] = useState([]);
    console.log(questions)

    const getQuestions = async() => {
        try {
            const questions = [
                "If you could live anywhere in the world for a year, where would it be?",
                "Where is your favorite vacation spot?",
                "What’s the weirdest food you’ve ever eaten?",
                "What activities do you dream of trying someday?",
                "If you could have a superpower, what would it be and why?",
                "As a child, what did you want to be when you grew up?"
            ]

            setQuestions(questions)

        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getQuestions();
    }, []);

    return (
        <Fragment>
            <ShuffleQuestions ques={questions}/>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th className="RemoveOutline">
                            <button class="collapseQues RemoveOutline TextStyle" type="button" data-toggle="collapse" data-target="#quesList">
                                <h4>Questions</h4>
                                <p style={{"font-size": "12px"}}>(Click to expand)</p>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody id="quesList" className="collapse">                 
                        {questions.map(ques => (
                            <tr key={ques.id}>
                                <td className="RemoveOutline TextStyle">{ques}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <div className="mb-10"></div>
        </Fragment>
    )
}

export default ListQuestions