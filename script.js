let currentPage = 0;
const pages = document.querySelectorAll('.page');
const container = document.getElementById('storyContainer');
const coverPage = document.getElementById('coverPage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumberDisplay = document.getElementById('pageNumberDisplay');
const bookmarkBtn = document.getElementById('bookmarkBtn');
const startBtn = document.getElementById('startBtn');

window.onload = function () {
    const bookmarkedPage = localStorage.getItem('bookmarkedPage');
    if (bookmarkedPage) {
        startBtn.textContent = 'Continue Reading';
        currentPage = parseInt(bookmarkedPage, 10);
    }
    showPage(currentPage);
};

function showPage(index) {
    pages.forEach((page, i) => {
        page.classList.remove('active');
        if (i === index) {
            page.classList.add('active');
        }
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;
    pageNumberDisplay.textContent = `Page: ${index + 1} of ${pages.length}`;
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}

function startReading() {
    coverPage.style.display = 'none';
    container.style.display = 'block';
    showPage(currentPage);
}

function goToCover() {
    currentPage = 0;
    localStorage.removeItem('bookmarkedPage');
    container.style.display = 'none';
    coverPage.style.display = 'flex';
    startBtn.textContent = 'Start Reading';
}

function bookmarkPage() {
    localStorage.setItem('bookmarkedPage', currentPage);
    alert('Page bookmarked!');
}
