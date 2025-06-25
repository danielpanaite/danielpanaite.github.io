const all = document.querySelectorAll('.wobble');

all.forEach(el => {
  let text = el.textContent;
  text = text.split("");
  const textCode = text.map((x, idx) => {
    let delay = (idx + 1) * 50;
    return `<span style="animation-delay: ${delay}ms">${x === " " ? "\u00A0" : x}</span>`;
  })
  el.innerHTML = textCode.join("");
});