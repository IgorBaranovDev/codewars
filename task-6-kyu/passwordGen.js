// https://www.codewars.com/kata/58ade2233c9736b01d0000b3/train/javascript

function passwordGen() {
 const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const allCharacters = lowercaseLetters + uppercaseLetters + numbers;

    let password = [
        lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)],
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)],
        numbers[Math.floor(Math.random() * numbers.length)]
    ];

    const length = Math.floor(Math.random() * (20 - 6 + 1)) + 6;

    for (let i = 3; i < length; i++) {
        password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
    }

    password = password.sort(() => Math.random() - 0.5);

    password = password.join('');
  
    const charCount = {};
    for (const char of password) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > password.length / 2) {
             return generatePassword();
        }
    }