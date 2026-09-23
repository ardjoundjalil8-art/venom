/* =========================
   ENSEMBLE CAROUSEL
========================= */

let ensembleIndex = 0;

function changeEnsembleImage(direction) {

  const images =
    document.querySelectorAll(".ensemble-slide");

  images[ensembleIndex].classList.remove("active");

  ensembleIndex += direction;

  if (ensembleIndex < 0) {
    ensembleIndex = images.length - 1;
  }

  if (ensembleIndex >= images.length) {
    ensembleIndex = 0;
  }

  images[ensembleIndex].classList.add("active");

  document.getElementById("currentImage").textContent =
    ensembleIndex + 1;
}


/* =========================
   SELECT PRODUCT
========================= */

function selectProduct(productName) {

  document.getElementById("product").value =
    productName;

  const colorSelect =
    document.getElementById("color");

  colorSelect.innerHTML =
    '<option value="">اختر اللون</option>';


  if (productName.includes("سروال")) {

    colorSelect.innerHTML += `
      <option value="أسود">أسود</option>
      <option value="ڨري">ڨري</option>
    `;

  }

  else if (productName.includes("T-shirt")) {

    colorSelect.innerHTML += `
      <option value="أبيض">أبيض</option>
      <option value="أسود">أسود</option>
    `;

  }

  else if (productName.includes("Ensemble")) {

    colorSelect.innerHTML += `
      <option value="أسود">أسود</option>
      <option value="أبيض">أبيض</option>
      <option value="ڨري">ڨري</option>
    `;
  }


  document.getElementById("order")
    .scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================
   ORDER FORM
========================= */

let finalMessage = "";

document
  .getElementById("orderForm")
  .addEventListener("submit", function(e) {

    e.preventDefault();


    const product =
      document.getElementById("product").value;

    const name =
      document.getElementById("name").value;

    const phone =
      document.getElementById("phone").value;

    const wilaya =
      document.getElementById("wilaya").value;

    const commune =
      document.getElementById("commune").value;

    const size =
      document.getElementById("size").value;

    const color =
      document.getElementById("color").value;


    finalMessage =
`🔥 طلب جديد من موقع VENOM

🛍️ المنتج: ${product}

🎨 اللون: ${color}

📏 المقاس: ${size}

👤 الاسم: ${name}

📞 الهاتف: ${phone}

📍 الولاية: ${wilaya}

🏘️ البلدية: ${commune}`;


    document.getElementById("orderForm")
      .style.display = "none";

    document.getElementById("success")
      .style.display = "block";

});


/* =========================
   WHATSAPP
========================= */

document
  .getElementById("whatsappBtn")
  .addEventListener("click", function() {

    const whatsappNumber =
      "213XXXXXXXXX";


    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(finalMessage);


    window.open(
      whatsappURL,
      "_blank"
    );

});
