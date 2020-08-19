String.prototype.InsertStr = function(index, str) {
    return this.slice(0, index) + str + this.slice(index);
};

let num;

while(true) {
  num = prompt("Enter phone number");
  if (num[0] === '+' && !isNaN(num.slice(1,12)) && num.length === 12) break;
}

let result = num.InsertStr(2, " (").InsertStr(7, ") ").InsertStr(12, "-").InsertStr(15, "-");

alert(result);
