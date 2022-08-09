const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let firstPwdEl = document.getElementById('first-pwd-el');
let secondPwdEl = document.getElementById('second-pwd-el');

let count = 0;

function genPwds() {
  firstPwdEl.textContent = '';
  secondPwdEl.textContent = '';

  for (let i = 0; i < 16; i++) {
    let pwd1Index = Math.floor(Math.random() * characters.length);
    let pwd2Index = Math.floor(Math.random() * characters.length);

    firstPwdEl.textContent += characters[pwd1Index];
    secondPwdEl.textContent += characters[pwd2Index];
    count[i];
  }

  function copyText() {
    let copy1 = firstPwdEl.textContent;

    copy1.select();
    copy1.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copy1.value);

    alert('Copied text.');
  }
}
