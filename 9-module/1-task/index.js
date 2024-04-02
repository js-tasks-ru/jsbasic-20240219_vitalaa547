
export default function promiseClick(button) {
  return new Promise((resolve) => {
    button.addEventListener('click', (event) => {
      resolve(event);
    }, { once: true });
  });
}

const button = document.querySelector('button');


  // ваш код...

