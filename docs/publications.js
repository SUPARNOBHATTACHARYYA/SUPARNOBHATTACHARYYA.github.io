window.addEventListener("DOMContentLoaded", () => {
  const typeSel = document.getElementById("pub-type");
  const yearSel = document.getElementById("pub-year");
  const items   = Array.from(document.querySelectorAll(".pub-item"));

  function applyFilters() {
    const selType = typeSel.value;
    const selYear = yearSel.value;

    items.forEach(item => {
      const okType = !selType || item.dataset.type === selType;
      const okYear = !selYear || item.dataset.year === selYear;
      item.style.display = (okType && okYear) ? "" : "none";
    });
  }

  typeSel.addEventListener("change", applyFilters);
  yearSel.addEventListener("change", applyFilters);

  // run once on load in case you want default filtering
  applyFilters()
});