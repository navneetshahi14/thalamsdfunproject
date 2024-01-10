const text = document.getElementById("text");
const number = document.getElementById("number");
const inputThala = document.getElementById("inputThala");
const ThalaCheck = document.getElementById("ThalaCheck");
const thalapara = document.getElementById("thalapara");
const moyegif = document.getElementById('moyegif')
const thalagif = document.getElementById('thalagif')

const moyeAudio = new Audio(
  "/music/Memes Sound Effect - Moye Moye _ Editing _ Copyright Free(M4A_128K).m4a"
);
const thalaAudio = new Audio(
  "/music/WhatsApp Audio 2024-01-10 at 2.22.47 PM.mp4"
);

text.onclick = () => {
  if (inputThala.type === "number") {
    inputThala.type = "text";
    inputThala.placeholder = "Enter Text";
  }
};
number.onclick = () => {
  if (inputThala.type === "text") {
    inputThala.type = "Number";
    inputThala.placeholder = "Enter Number";
  }
};

if (thalapara.innerHTML !== " ") {
  setTimeout(() => {
    thalapara.innerHTML = " ";
    console.log("moye");
  }, 3000);
}

ThalaCheck.addEventListener("click", () => {
  if (inputThala.type === "number") {
    let sum = 0;
    let remainder;
    let arr = [];
    let n = parseInt(inputThala.value);
    // console.log(n)
    while (n) {
      remainder = n % 10;
      arr.push([remainder]);
      sum = sum + remainder;
      n = Math.floor(n / 10);
    }
    // console.log('val = '+sum)
    // console.log(arr)

    thalapara.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      thalapara.innerHTML += arr[i];
      if (i !== arr.length - 1) {
        thalapara.innerHTML += "+";
      }
    }

    if (sum === 7) {
      thalaAudio.play();
      moyeAudio.pause();
      thalapara.innerHTML += " = " + sum + " Thala for a reason!!😎🫡";
      thalagif.classList.remove('hidden')
      moyegif.classList.add('hidden')
    } else {
      moyeAudio.play();
      thalaAudio.pause();
      thalapara.innerHTML += " = " + sum + " Not a Thala!!😭😢";
      thalagif.classList.add('hidden')
      moyegif.classList.remove('hidden')
    }
    if (thalapara.innerHTML !== " ") {
      setTimeout(() => {
        thalapara.innerHTML = " ";
        thalagif.classList.add('hidden')
        moyegif.classList.add('hidden')
      }, 9000);
    }
  } else if (inputThala.type === "text") {
    let sum = 0;
    let arr = [];
    let t = inputThala.value;
    // console.log(t)
    for (let i = 0; i < t.length; i++) {
      arr.push(t[i]);
    }
    for (let j = 0; j < arr.length; j++) {
      thalapara.innerHTML += arr[j];
      if (j !== arr.length - 1) {
        thalapara.innerHTML += "+";
      }
    }
    // console.log(arr)
    if (t.length === 7) {
      thalaAudio.play();
      moyeAudio.pause();
      thalapara.innerHTML += " = " + t.length + " Thala for a reason!!😎🫡";
      thalagif.classList.remove('hidden')
      moyegif.classList.add('hidden')
    } else {
      moyeAudio.play();
      thalaAudio.pause();
      thalapara.innerHTML += " = " + t.length + " Not a Thala!!😭😢";
      thalagif.classList.add('hidden')
      moyegif.classList.remove('hidden')
    }
    if (thalapara.innerHTML !== " ") {
      setTimeout(() => {
        thalapara.innerHTML = " ";
        thalagif.classList.add('hidden')
        moyegif.classList.add('hidden')
        // console.log("moye");
      }, 9000);
    }
  }
});
