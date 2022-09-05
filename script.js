var firstName = prompt("What is your first name?");
      
      if(firstName == "") {
         alert("You did not enter a value.");
      } else {
         alert("Hi " + firstName + ", Share our Website to your Friends, Family Members & Relatives "); 
      }

const shareData = {
 title: 'Mauli Beats',
 text: 'If you want any 🎷 Musician 🎺 or 🎸 Instrumental band 🥁 Go Through this Link👇🏻',
 url: 'https://HackerSM9.GitHub.io/Mauli-Beats'
}

const btn = document
 .querySelector('button');
const resultPara = document
 .querySelector('.result');

btn.addEventListener('click',
 async () => {
  try {
   await navigator.share(
    shareData)
   resultPara.textContent =
    'Shared'
  } catch (err) {
   resultPara.textContent =
    err
  }
 })
