/**
 * Title: Dubstep
 * Link: https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
 * Kata Level: 6 kyu
 */

function songDecoder(song) {
  let noWubs = song.split('WUB').join(' ').trim();
  let spaceRegex = /\s{2,}/g;
  return noWubs.replace(spaceRegex, ' ');
}

// Should return: "WE ARE THE CHAMPIONS MY FRIEND"
console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));

// Should return: "A B C"
console.log(songDecoder('AWUBBWUBC'));

// Should return: "A B C"
console.log(songDecoder('AWUBWUBWUBBWUBWUBWUBC'));

// Should return: "A B C"
console.log(songDecoder('WUBAWUBBWUBCWUB'));
