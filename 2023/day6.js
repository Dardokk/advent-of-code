const input = 
`   Time:        59     68     82     74
    Distance:   543   1020   1664   1022
`;

const testinput = 
`   Time:      7  15   30
    Distance:  9  40  200
`;

function getResult(input) {
    let res = [];
    let inputArr = input.split('\n')
    let times = inputArr[0].match(/\d+/g);
    let dists = inputArr[1].match(/\d+/g);

    for (let i = 0; i < times.length; i++) {
        let time = times[i];
        let dist = dists[i];
        let cnt = 0;

        for (let j = 0; j < time; j++) {
            if (j * (time - j) > dist)
                cnt++;
        }
        res.push(cnt);
    }

    return res.reduce((acc, cur) => acc * cur, 1);;
}

function getResult2(input) {
    let inputArr = input.replaceAll(' ', '').split('\n')
    let time = inputArr[0].match(/\d+/g)[0];
    let dist = inputArr[1].match(/\d+/g)[0];
    let cnt = 0;
    
    for (let j = 0; j < time; j++) {
        if (j * (time - j) > dist)
            cnt++;
    }

    return cnt;
}

console.log(getResult(input));
console.log(getResult2(input));