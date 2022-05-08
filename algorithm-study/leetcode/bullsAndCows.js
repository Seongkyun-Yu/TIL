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
        else if (secret[i] in hash) hash[secret[i]]++;
        else hash[secret[i]] = 1;
    }

    for (let i = 0; i < guess.length; i++) {
        if (secret[i] !== guess[i] && hash[guess[i]]) {
          cows++;
          hash[guess[i]]--;
        }
    }

    return bulls + "A" + cows + "B";
};