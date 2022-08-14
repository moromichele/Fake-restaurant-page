import QrCode from "./qrlinkedin.png";

const contact = () => {
  const title = "Contact";
  const contactTab = document.createElement("div");
  contactTab.classList.add("tab");

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const qrCode = new Image();
  qrCode.src = QrCode;
  qrCode.classList.add("qr-code");

  const contactText = document.createElement("h1");
  contactText.classList.add("contact-text");
  contactText.innerHTML = `holophone: 22554646BA <br/><br/> 0.1ms response time <br/><br/> Available 24/7 `;

  contactContainer.appendChild(imageContainer);
  contactContainer.appendChild(contactText);
  imageContainer.appendChild(qrCode);
  contactTab.appendChild(contactContainer);

  return { title: title, tab: contactTab };
};

export default contact;
