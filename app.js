document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null, // Use the viewport as the container
        rootMargin: "0px",
        threshold: 0.6 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                
            }
            else{
                entry.target.classList.remove("show");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    document.querySelectorAll(".hidden").forEach(element => {
        observer.observe(el);
    });
});const observer = new IntersectionObserver(());

