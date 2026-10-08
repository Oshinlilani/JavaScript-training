const profileBox = document.getElementById("profileBox");
const name = document.getElementById("name");
const title = document.getElementById("title");
const changebtn = document.getElementById("changebtn");

const skill = document.getElementById("skill");
const skills = document.getElementById("skills");

changebtn.addEventListener("click", () => {
    name.textContent = "Oshin lilani";

    profileBox.classList.toggle("bg-blue-500");
    profileBox.classList.toggle("text-white");

    title.textContent = "Software Developer";

    skills.classList.toggle("hidden");
    skill.classList.toggle("hidden");

});
