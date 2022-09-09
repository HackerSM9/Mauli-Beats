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
