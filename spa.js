document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("[data-action='navigate']");
    links.forEach(link => link.addEventListener("click", navigate));
});

async function navigate(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение ссылки
    const href = event.target.href;
    await loadPage(href);
}

async function loadPage(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        const parser = new DOMParser().parseFromString(text, "text/html");
        
        // Получаем содержание новой страницы
        const content = parser.querySelector("#content").innerHTML;
        document.querySelector("#content").innerHTML = content;
    } catch (err) {
        console.error(err);
    }
}