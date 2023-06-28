window.addEventListener("DOMContentLoaded", (e) => {
    const scroller = document.querySelector(".scroller");

    function updateScroller() {
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrollTop = document.documentElement.scrollTop;
        scroller.style.width = `${(scrollTop / height) * 100}%`;
    }

    window.addEventListener("scroll", updateScroller);
    window.addEventListener("resize", updateScroller); // Gérer les changements de taille de fenêtre

    // Appeler la fonction une fois au chargement initial de la page
    updateScroller();
});
