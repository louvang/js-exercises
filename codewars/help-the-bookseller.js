/**
 * Title: Help the Bookseller
 * Link: https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
 * Kata Level: 6 kyu
 */

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0) {
    return '';
  }

  return listOfCat
    .map((letter) => {
      let matches = listOfArt.filter((stockItem) => {
        return stockItem[0] === letter;
      });

      let amt = 0;
      if (matches.length >= 1) {
        amt = matches
          .map((item) => {
            return parseInt(item.match(/\d+/)[0]);
          })
          .reduce((acc, curr) => {
            return acc + curr;
          });
      }

      return `(${letter} : ${amt})`;
    })
    .join(' - ');
}

// Should return: "(A : 200) - (B : 1140)"
let l1 = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
let m1 = ['A', 'B'];
console.log(stockList(l1, m1));

// Should return: "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
let l2 = ['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'];
let m2 = ['A', 'B', 'C', 'W'];
console.log(stockList(l2, m2));

// Should return: "(A : 0) - (B : 1290) - (C : 515) - (W : 0)"
let l3 = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
let m3 = ['A', 'B', 'C', 'W'];
console.log(stockList(l3, m3));

// Should return: "(B : 364) - (R : 225) - (D : 60) - (X : 0)"
let l4 = ['ROXANNE 102', 'RHODODE 123', 'BKWRKAA 125', 'BTSQZFG 239', 'DRTYMKH 060'];
let m4 = ['B', 'R', 'D', 'X'];
console.log(stockList(l4, m4));

// Should return: ""
let l5 = [];
let m5 = ['A', 'B'];
console.log(stockList(l5, m5));

// Should return: ""
let l6 = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
let m6 = [];
console.log(stockList(l6, m6));
