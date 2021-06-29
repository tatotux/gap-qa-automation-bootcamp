/* 
A pangram is a sentence that contains every sing leletter of the alphabet at least once.For example, 
the sentence "The quick brown fox jumpsover the lazy dog" is a pangram,
because it uses the letters A-Z at least once (caseis irrelevant).
Given a string, detect whether or not it is a pangram.
Return True if it is, False if not.Ignore numbers and punctuation

*/

const panagram = (sentence) => {

    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    sentence = sentence.toLowerCase();
    let isPanagram = abc.every(x => sentence.includes(x));
    
    console.log(isPanagram);
}
panagram("The quick brown fox jumpsover the lazy dog");
