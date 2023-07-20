
let win = [50,50,50,50];
let maf = 1;

let obj = {}, myWin = 73;
win.push(myWin);
let pl = win.length;
let iter = 0;
obj[1] = function (h = 0,dop = [-1]) {
  let res = 0;
  for (let i = h; i<pl-1;i++) {
  for (let j=0; j<pl;j++) {
    iter++;
    if (j == i || dop.includes(j) && j != pl-1)
    res += 100-win[j];
    else res += win[j];
  }
}
return res;
}

for (let n=2;n<=maf;n++) {
  obj[n] = new Function(`h=0,dop=[-1]`,`let res = 0;
  for (let i=h;i<${pl-n};i++) {
    res += obj[${n-1}](i+1,[i,...dop]);
  }
  return res;`)
}

console.log(obj[maf]() / iter + "%");
console.log(iter/pl + "");
console.log(iter + "");
