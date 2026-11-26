function votes(text) {
    if(text.length == 0) {
        return "Empty";
    }

    let countA = 0;
    let countB = 0; 
    let countC = 0;

    for (let i = 0; i < text.length; i++) {
        if(text[i] == 'A') {
            countA++;
        }
        else if(text[i] == 'B') {
            countB++;
        }
        else if(text[i] == 'C') {
            countC++;
        }
    }

    if(countA > countB) {
        if(countA > countC) {
            return "A is the winner";
        }
        else if(countA < countC){
            return "C is the winner";
        }
        else {
            return "A = C";
        }
    }
    else if(countB > countA) {
        if(countB < countC) {
            return "C is the winner";
        }
        else if(countB > countC) {
            return "B is the winner";
        }
        else {
            return "B = C";
        }
    }
    else {
        if(countA > countC) {
            return "A = B";
        }
        else if(countA < countC) {
            return "C is the winner";
        }
        else {
            return "A = B = C";
        }
    }
}

let text = ['A', 'B', 'B', 'C', 'A'];
console.log(votes(text));
let node = ['C', 'B', 'B', 'C', 'A', 'A'];
console.log(votes(node));
