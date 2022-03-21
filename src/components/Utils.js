function comparator() { 
    return Math.random() - 0.5; 
}

export default function sortQuestionOrder(array){
    array.sort(comparator);    

    for(let i = 0; i < array.length; i++){
        array[i].name = `Pergunta ${i + 1}`
    }
}

