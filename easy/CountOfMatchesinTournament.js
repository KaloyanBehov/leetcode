/*
You are given an integer n, the number of teams in a tournament that has strange rules:

If the current number of teams is even, each team gets paired with another team. A total of n / 2 matches are played, and n / 2 teams advance to the next round.
If the current number of teams is odd, one team randomly advances in the tournament, and the rest gets paired. A total of (n - 1) / 2 matches are played, and (n - 1) / 2 + 1 teams advance to the next round.
Return the number of matches played in the tournament until a winner is decided.

* */

/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let numberOfMatches = []

    while (n > 0){
        if (n <= 1) break
        if ( n % 2 === 0){
            let currentMatch = Math.trunc(n / 2)
            numberOfMatches = [...numberOfMatches, currentMatch]
            n = Math.trunc(n /2)
        }else{

            let currentMatch = ((n - 1 ) / 2  );
            numberOfMatches = [...numberOfMatches,currentMatch]
            n = Math.trunc((n - 1 ) / 2 + 1 );

        }

    }
    return  numberOfMatches.reduce((a,b)=> a + b , 0)
};
console.log(numberOfMatches(14))