const header = () => {
  const headerEl = document.createElement("header");
  headerEl.classList.add("header");
  const title = document.createElement("h1");
  title.classList.add("h1-header");
  title.textContent = "ラーメン以上";

  const subTitle = document.createElement("h2");
  subTitle.classList.add("h2-header");
  subTitle.textContent = "Beyond Ramen";


  const lineHeader = document.createElement("div");
  lineHeader.classList.add("line-header");
  headerEl.appendChild(lineHeader);
  headerEl.appendChild(title);
  headerEl.appendChild(subTitle);
  return headerEl;
};

export default header;
