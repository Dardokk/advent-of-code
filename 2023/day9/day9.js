import { readFileSync } from "fs";
const testinput = readFileSync(new URL("./testInput.txt", import.meta.url), "utf-8");
const input = readFileSync(new URL("./input.txt", import.meta.url), "utf-8");

function getResult(input) {
    let historics = input.split('\n');
    let total = 0;
    
    historics.forEach(h => {
        let values = [h.split(' ').map(v => +v)];
        let arr = values[0];
        let index = 0;
        
        while (!arr.every(v => v ==  0)) {
            let tmpArr = [];
            for (let i = 0; i < values[index].length - 1; i++) {
                tmpArr.push(values[index][i + 1] - values[index][i]);
            }
            values.push(tmpArr);
            arr = tmpArr;
            index++;
        }

        let add = 0;
        for (let i = values.length - 2; i >= 0;  i--) {
            let hist = values[i];
            hist.push(hist.slice(-1)[0] + add);
            add = hist.slice(-1)[0];
        }
        total += add;
    });
    
    return total;
}

function getResult2(input) {
    let historics = input.split('\n');
    let total = 0;
    
    historics.forEach(h => {
        let values = [h.split(' ').map(v => +v)];
        let arr = values[0];
        let index = 0;
        
        while (!arr.every(v => v ==  0)) {
            let tmpArr = [];
            for (let i = 0; i < values[index].length - 1; i++) {
                tmpArr.push(values[index][i + 1] - values[index][i]);
            }
            values.push(tmpArr);
            arr = tmpArr;
            index++;
        }

        let add = 0;
        for (let i = values.length - 2; i >= 0;  i--) {
            let hist = values[i];
            hist.splice(0, 0, hist[0] - add);
            add = hist[0];
        }
        total += add;
    });
    
    return total;
}

console.log(getResult(input));
console.log(getResult2(input));