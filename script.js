document.addEventListener("DOMContentLoaded", () => {
  function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach((section) => {
      section.style.display = "none";
    });
    document.querySelector(sectionId).style.display = "block";
  }

  function updateActiveLink(targetId) {
    // Usuń klasę .active-link z wszystkich linków
    document
      .querySelectorAll(".nav-link, .dropdown-content a")
      .forEach((link) => {
        if (link.getAttribute("href") === targetId) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      });
  }

  document
    .querySelectorAll(".nav-link, .dropdown-content a")
    .forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href");
        showSection(sectionId);
        updateActiveLink(sectionId);
      });
    });

  // Pokaż domyślną sekcję i zaktualizuj aktywny link
  const defaultSectionId = "#bramki";
  showSection(defaultSectionId);
  updateActiveLink(defaultSectionId);

  // Obsługa przełączania menu
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});
