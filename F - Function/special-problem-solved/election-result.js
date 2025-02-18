function  electionResult( votes ) {
    if(!Array.isArray(votes)){
        return "Invalid";
    }
       let mangoVote = 0;
       let bananaVote = 0;

    for (let vote of votes) {
        if(vote !== "string"){
            return "Invalid";
        }
        else if(vote === "mango"){
            mangoVote++;
        }
        else if(vote === "banana"){
            bananaVote++;
        }
    }
    if(mangoVote > bananaVote){
        return "Mango";
    }
    else if(bananaVote > mangoVote){
        return "Banana";
    }
    else if(mangoVote === bananaVote){
        return "Draw";
    }
}




let result =electionResult(["mango", "banana", "mango", "banana", "mango"]);
console.log(result);