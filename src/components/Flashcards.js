import Flashcard from "./Flashcard";
import sortQuestionOrder from "./Utils";

const flashcards = [
    {
        name: "Pergunta 1",
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    },
    {
        name: "Pergunta 2",
        question: "O React é __",
        answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
        name: "Pergunta 3",
        question: "Componentes devem iniciar com __ ",
        answer: "letra maiúscula"
    },
    {
        name: "Pergunta 4",
        question: "Podemos colocar __ dentro do JSX",
        answer: "expressões"
    },
    {
        name: "Pergunta 5",
        question: "O ReactDOM nos ajuda __",
        answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
        name: "Pergunta 6",
        question: "Usamos o npm para __",
        answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
        name: "Pergunta 7",
        question: "Usamos props para __",
        answer: "passar diferentes informações para componentes"
    },
    {
        name: "Pergunta 8",
        question: "Usamos estado (state) para __",
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
];

sortQuestionOrder(flashcards);

export default function Flashcards() {
    return (
        <ul className="flashcards" >
            {
                flashcards.map(({ name, question, answer }) => {
                    return (
                            <Flashcard name={name} question={question} answer={answer} />
                    );
                })
            }
        </ul>
    );
}