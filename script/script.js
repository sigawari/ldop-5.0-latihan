// Mendapatkan semua elemen dengan kelas "card"
const articles = document.querySelectorAll('.card');

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function scrollHandler() {
    articles.forEach((article) => {
        if (isElementInViewport(article)) {
            article.classList.add('in-view');
        }
    });
}

// Memanggil fungsi scrollHandler saat halaman di-scroll
window.addEventListener('scroll', scrollHandler);

