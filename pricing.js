(() => {
  const data = window.PRICING_DATA;
  const money = n => "₹" + Number(n).toLocaleString("en-IN");
  const $ = id => document.getElementById(id);
  const categories = name => {
    const n = name.toLowerCase();
    if (/school|college|coaching|learning|examination|student|tutor/.test(n)) return "education";
    if (/store|e-commerce|marketplace|dropshipping|wholesale|classified|buy & sell|crowdfunding|subscription/.test(n)) return "commerce";
    if (/booking|appointment|rental|visit|restaurant|café|salon|spa|gym|fitness|hotel|travel|tour|event/.test(n)) return "booking";
    if (/dashboard|crm|inventory|billing|employee|hr management|project management|support portal|saas|analytics|admin dashboard/.test(n)) return "systems";
    if (/blog|news|forum|social networking|chat application|job portal|matrimonial/.test(n)) return "content";
    if (/hospital|clinic|ngo|charity|government|iot|ai-powered|real estate portal/.test(n)) return "special";
    return "business";
  };
  let filteredWebsites = data.websites.map((item, index) => ({...item, original: index + 1}));
  function renderWebsites() {
    const query = $("websiteSearch").value.trim().toLowerCase();
    const cat = $("categoryFilter").value;
    const sort = $("sortFilter").value;
    let items = filteredWebsites.filter(item => item.name.toLowerCase().includes(query) && (cat === "all" || categories(item.name) === cat));
    if (sort === "low") items.sort((a,b) => a.price - b.price);
    if (sort === "high") items.sort((a,b) => b.price - a.price);
    if (sort === "az") items.sort((a,b) => a.name.localeCompare(b.name));
    $("websiteRows").innerHTML = items.length ? items.map(item => `<tr><td>${item.original.toString().padStart(2,"0")}</td><td>${item.name}</td><td>${money(item.price)}</td><td><a class="mini-link" href="#contact" data-quote="${item.name}">Enquire ↗</a></td></tr>`).join("") : `<tr><td colspan="4"><div class="empty-state">No website types match your search.</div></td></tr>`;
  }
  function renderFeatures() {
    const query = $("featureSearch").value.trim().toLowerCase();
    const items = data.features.filter(item => item.name.toLowerCase().includes(query));
    $("featureGrid").innerHTML = items.length ? items.map(item => `<article class="feature-card"><div><span class="num">${String(data.features.indexOf(item)+1).padStart(2,"0")}</span><h3>${item.name}</h3></div><strong>${money(item.price)}</strong></article>`).join("") : `<div class="empty-state">No features match your search.</div>`;
  }
  
function renderServices() {
  const container = document.getElementById("serviceGrid");

  if (!container || !window.PRICING_DATA) return;

  container.innerHTML = window.PRICING_DATA.services
    .map((item) => `
      <article class="service-card">
        <div>
          <h3>${item.name}</h3>
          <small>
            ${
              item.billing === "yearly"
                ? "Billed yearly"
                : item.billing === "monthly"
                ? "Billed monthly"
                : "Per request / revision"
            }
          </small>
        </div>
        <strong>${item.price}</strong>
      </article>
    `)
    .join("");
}

  $("websiteSearch").addEventListener("input", renderWebsites);
  $("categoryFilter").addEventListener("change", renderWebsites);
  $("sortFilter").addEventListener("change", renderWebsites);
  $("featureSearch").addEventListener("input", renderFeatures);
  // WhatsApp number: replace with your own number
  const whatsappNumber = "917387112834";

  // Main WhatsApp inquiry button
  $("whatsappLink").href =
    "https://wa.me/" + whatsappNumber +
    "?text=" + encodeURIComponent(
      "Hi, I would like a quotation for a dynamic website."
    );

  // Website-specific enquiry links
  $("websiteRows").addEventListener("click", event => {
    const link = event.target.closest("[data-quote]");
    if (!link) return;

    const name = link.getAttribute("data-quote");

    $("whatsappLink").href =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(
        "Hi, I would like a quotation for a " + name + "."
      );
  });
  $("menuToggle").addEventListener("click", () => {
    const open = $("mainNav").classList.toggle("open");
    $("menuToggle").setAttribute("aria-expanded", String(open));
  });
  $("mainNav").querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    $("mainNav").classList.remove("open"); $("menuToggle").setAttribute("aria-expanded","false");
  }));
  $("year").textContent = new Date().getFullYear();
  renderWebsites(); renderFeatures(); renderServices();
})();