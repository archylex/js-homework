// Task #1

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let count = 0;
    for (let i = 0; i < firstRow.length; i++)
        if (firstRow[i] === 'а') count++;
        
    for (let i = 0; i < secondRow.length; i++)
        if (secondRow[i] === 'а') count--;
        
    return count < 0 ? secondRow : firstRow;
}

console.log(getRow(firstRow, secondRow)); // мама мыла раму
document.getElementById("task1").innerHTML = getRow(firstRow, secondRow);

// Task #2
let num;
let result = "";

while(true) {
  num = prompt("Enter phone number");
  if (num[0] === '+' && !isNaN(num.slice(1,12)) && num.length === 12) break;
}

for (let i = 0; i < num.length; i++) {
    result += num[i];
    
    switch(i) {
        case 1: 
            result += " (";
            break;
        case 4:
            result += ") ";
            break;
        case 7:
            result += "-";
            break;
        case 9:
            result += "-";
            break;
    }
}

document.getElementById("task2").innerHTML = result;
alert(result);

// Old version
/*String.prototype.InsertStr = function(index, str) {
    return this.slice(0, index) + str + this.slice(index);
};

let num;

while(true) {
  num = prompt("Enter phone number");
  if (num[0] === '+' && !isNaN(num.slice(1,12)) && num.length === 12) break;
}

let result = num.InsertStr(2, " (").InsertStr(7, ") ").InsertStr(12, "-").InsertStr(15, "-");

alert(result);*/
