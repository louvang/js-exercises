/**
 * Title: Multi-tap Keypad
 * Link: https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript
 * Kata Level: 6 kyu
 */

function presses(phrase) {
  let presses = 0;

  let pArr = [{ letter: ' ', code: 32, pressCt: 1 }];
  let press = 1;

  for (let i = 65; i < 91; i++) {
    pArr.push({
      letter: String.fromCharCode(i),
      code: i,
      pressCt: press,
    });

    if (press < 3) {
      press += 1;
    } else if (i === 82 || i === 89) {
      press = 4;
    } else {
      press = 1;
    }
  }

  phrase
    .toUpperCase()
    .split('')
    .forEach((letter) => {
      if (letter === '0') {
        presses += 2;
      } else if (letter === '1') {
        presses += 1;
      } else {
        let lp = pArr.findIndex((obj) => {
          return obj.letter === letter;
        });

        if (pArr[lp] === undefined) {
          console.log(`${letter}: ${presses} + 1`);
          presses += 4;
        } else {
          console.log(`${letter}: ${presses} + ${pArr[lp].pressCt}`);
          presses += pArr[lp].pressCt;
        }
      }
    });

  return presses;
}

// Should return: 9
console.log(presses('LOL'));

// Should return: 13
console.log(presses('HOW R U'));

// Should return: 47
console.log(presses('WHERE DO U WANT 2 MEET L8R'));

// Should return: 2
console.log(presses('0'));
