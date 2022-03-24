/**
 * https://leetcode.com/problems/unique-email-addresses/submissions/
 * @param {string[]} emails
 * @return {number}
 */
 const makeLocalName = (local) => {
    let name = ""
    
    for(const char of local) {
        if (char === "+") return name;
        if (char === ".") continue;
        
        name += char;
    }
    
    return name;
}

var numUniqueEmails = function(emails) {
    const result = new Set();
    
    for (const email of emails) {
        let [local, domain] = email.split("@");
        local = makeLocalName(local);
        result.add(local + '@' + domain);
    }
    
    return result.size;
};