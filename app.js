// Aufgabe 1)

// Implementieren Sie eine JavaScript Funktion die einen String umkehrt.

// Beispiel: aus "javascript" wird "tpircsavaj"
const forms = document.querySelectorAll(".form");
const btn = document.getElementById("stringSubmit");
const inputStr = document.getElementById("string");
const resultStr = document.querySelector(".result-string");

forms.forEach((form) => {
  form.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
function backwards(str) {
  str = str.trim();
  if (!str) {
    return;
  }
  let arr = str.split("");
  let arrReversed = arr.reverse();
  console.log(arrReversed);
  let newStr = arrReversed.join("");
  return newStr;
}
btn.addEventListener("click", () => {
  resultStr.textContent = backwards(inputStr.value);
  inputStr.value = "";
});

// Aufgabe 2)

// Implementieren Sie eine JavaScript Funktion, welche erkennt, ob ein Jahr ein Schaltjahr ist. Sie erkennen ein Schaltjahr anhand der folgenden Regeln:

// 1.           Die durch 4 ganzzahlig teilbaren Jahre sind Schaltjahre.

// 2.           Jahre, die ein Jahrhundert abschliessen (z. B. 1800, 1900, 2100 und 2200) sind keine Schaltjahre.

// 3.           Die durch 400 ganzzahlig teilbaren Jahre sind doch Schaltjahre.

// Bspw. ist 1997 kein Schaltjahr, aber 1996 schon. 1900 ist kein Schaltjahr, 2000 ist eines.

const checkBtn = document.getElementById("jahrSubmit");
const inputJahr = document.getElementById("jahr");
const resultJahr = document.querySelector(".result-jahr");

function checkJahr(value) {
  const value400 = value % 400 === 0;
  const value100 = value % 100 === 0;
  const value4 = value % 4 === 0;
  if (value400 || (value4 && !value100)) {
    return true;
  }
  return false;
}

checkBtn.addEventListener("click", () => {
  resultJahr.textContent = "";
  let value = +inputJahr.value;
  if (!value && value !== 0) {
    resultJahr.textContent = "Geben Sie ein Jahr ein";
  } else {
    if (checkJahr(value)) {
      resultJahr.textContent = `${value} ist ein Schaltjahr`;
    } else {
      resultJahr.textContent = `${value} ist kein Schaltjahr`;
    }
    inputJahr.value = "";
  }
});

// Aufgabe 3)

// Schreiben Sie eine JavaScript Funktion, die erkennt, ob ein Satz ein Pangramm ist. Ein Pangramm ist ein Satz, welcher jeden Buchstaben des Alphabets mind. einmal benutzt. Das bekannteste Pangramm im Englischen ist:

// The quick brown fox jumps over the lazy dog.

// Das Alphabet benutzt nur die ASCII-Zeichen a-z. Gross-/Kleinschreibung muss nicht unterschieden werden.

// Laden Sie die Lösungen auf Git hoch und reichen Sie den Link zum Git-Repository ein.
const pangrammBtn = document.getElementById("pangrammSubmit");
const textareaEl = document.getElementById("pangramm");
const resultPangramm = document.querySelector(".result-pangramm");
const alphabet = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "z",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "y",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m"
];

pangrammBtn.addEventListener("click", () => {
  resultPangramm.textContent = "";
  let value = textareaEl.value.trim().toLowerCase();
  if (value) {
    if (erkennenPangramm(value)) {
      resultPangramm.textContent = "Ihr Satz ist ein Panagramm";
    } else {
      resultPangramm.textContent = "Ihr Satz ist kein Panagramm";
    }
  }
  textareaEl.value = "";
});

function erkennenPangramm(value) {
  let arr = value.split("");
  for (let i = 0; i < alphabet.length; i++) {
    if (!arr.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}

// let str = "qwertzuiopasdfghjklyxcvbnm";
