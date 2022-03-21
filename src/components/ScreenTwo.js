import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


export default function ScreenTwo() {
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [icons, setIcons] = useState([]);

    function increseQuestionsAnswered(x){
        setQuestionsAnswered(questionsAnswered + x);
    }

    function setIcon(newIcon){
        setIcons([...icons, newIcon]);
    }

    return (
        <div class="screen-2 ">
            <Header />
            <Main increseQuestionsAnswered={increseQuestionsAnswered} setIcon={setIcon} /> 
            <Footer questionsAnswered={questionsAnswered} icons={icons} />
        </div>
    );
}