const homepage = () => {
  const title = "Homepage";

  const homepageEl = document.createElement("div");
  homepageEl.classList.add("tab");
  const rec = document.createElement("div");
  rec.classList.add("background-rec");

  for (var i = 0; i < 14; i++) {
    const line = document.createElement("div");
    line.classList.add("background-lines");
    line.style.transform = `translate(calc(-200px + ${
      i * 100
    }px), -20vh) rotate(45deg)`;
    rec.appendChild(line);
  }

  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const textContainer = document.createElement("div");
  textContainer.classList.add("text-container");

  const text1 = document.createElement("h1");
  text1.classList.add("tab-text");
  text1.innerHTML = 'Experience the <b class="big-h1">REAL</b> fake RAMEN';

  const text2 = document.createElement("p");
  text2.classList.add("tab-text");
  text2.innerHTML =
    "If it looks like ramen, tastes like ramen, feels like ramen, but you're not human... Its BEYOND RAMEN.";

  const appoggio = document.createElement("div");

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);
  contentContainer.appendChild(rec);
  contentContainer.appendChild(textContainer);

  homepageEl.appendChild(contentContainer);

  return { title: title, tab: homepageEl };
};

export default homepage;
