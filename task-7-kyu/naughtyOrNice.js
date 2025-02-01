// https://www.codewars.com/kata/5662b14e0a1fb8320a00005c/train/javascript

function naughtyOrNice(data) {
    let nice = 0;
    let naughty = 0;

    for(const month in data) {
        for(const day in data[month]) {
            if(data[month][day] === 'Naughty') {
                naughty++;
            } else {
                nice++;
            }
        }

        return naughty > nice ? 'Naughty!' : 'Nice!';
    }