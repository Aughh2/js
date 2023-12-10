"use strict";

function main() {
    let candidateNum = prompt("Enter a number of candidates:");
    let candidates = []

    for (let i = 1; i <= candidateNum; i++) {
        let candidateName = prompt(`Name for candidate ${i}:`);
        candidates.push({
            name: candidateName.toLowerCase(),
            votes: 0
        });
    }

    let votersNum = prompt("Enter number of voters:");
    for (let i = 1; i <= votersNum; i++) {
        let vote = prompt(`Voter ${i} votes for candidate:`);
        if (vote === "") {
            continue;
        }

        candidates.find(cand => cand.name === vote.toLowerCase()).votes++;
    }

    candidates.sort((a, b) => b.votes - a.votes);

    console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);
    console.log("results:");
    for (let i = 0; i < candidateNum; i++) {
        console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
    }
}

main();