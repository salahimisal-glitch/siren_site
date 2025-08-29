// Load year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Example product loader (for collections.html or product pages)
async function loadProducts() {
  try {
    const res = await fetch("products.json");
    const items = await res.json();
    const wrap = document.querySelector("#products");
    if (!wrap) return;
    wrap.innerHTML = "";

    for (const p of items) {
      const el = document.createElement("article");
      el.className = "card";
      el.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <div class="body">
          <h4>${p.name}</h4>
          <p class="desc">${p.description}</p>
          <div class="row">
            <a class="btn" href="products/${p.id}.html">View Details</a>
          </div>
        </div>`;
      wrap.appendChild(el);
    }
  } catch (err) {
    console.error("Error loading products.json", err);
  }
}

// Buy Now button logic
function buyNow(link) {
  if (!link) {
    alert("Payment Link not set yet. Ask the site owner to add a Stripe Payment Link.");
    return;
  }
  window.open(link, "_blank");
}
