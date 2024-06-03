document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById('splash').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }, 2000);
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('main .section');
    sections.forEach(section => section.classList.add('hidden'));
    document.getElementById(`${sectionId}-section`).classList.remove('hidden');
}