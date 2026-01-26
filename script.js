const items = document.querySelectorAll(".nav-item");

items.forEach(item => {
    item.addEventListener("click", () => {
        // Remove active class from all items
        items.forEach(i => i.classList.remove("active"));

        // Add active class to clicked item
        item.classList.add("active");
    });
});
