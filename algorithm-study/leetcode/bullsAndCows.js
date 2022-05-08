/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    const hash = {};

    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) bulls++;
        else hash[secret[i]] = hash[secret[i]] + 1 || 1;
    }

    for (let i = 0; i < guess.length; i++) {
        if (secret[i] === guess[i]) continue;
        if (!hash[guess[i]]) continue;
        
        cows++;
        hash[guess[i]]--;
    }

    return bulls + "A" + cows + "B";
};