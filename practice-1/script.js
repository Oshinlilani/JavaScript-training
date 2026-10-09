const profileBox = document.getElementById("profileBox");
const name = document.getElementById("name");
const title = document.getElementById("title");
const changebtn = document.getElementById("changebtn");

const skill = document.getElementById("skill");
const skills = document.getElementById("skills");
const location = document.getElementById("location");
const locations = document.getElementById("locations");

changebtn.addEventListener("click", () => {
    name.textContent = "Oshin lilani";

    profileBox.classList.toggle("bg-blue-500");
    profileBox.classList.toggle("text-white");

    title.textContent = "Software Developer";

    skills.classList.toggle("hidden");
    skill.classList.toggle("hidden");

    changebtn.textContent = changebtn.textContent === "click me" ? "clicked" : "click me";

    locations.classList.toggle("hidden");
    location.classList.toggle("hidden");
});
