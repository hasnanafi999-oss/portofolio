const enterButton = document.getElementById("enter-button");

enterButton.addEventListener("click", function () {
    document.body.classList.remove("locked");

    const intro = document.querySelector(".intro");
    intro.style.display = "none";
});

function toggleSkill(card) {
    card.classList.toggle("active");
}