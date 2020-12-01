const currentPage = location.pathname
const menuItems = document.querySelectorAll("header .links a")

for (const item of menuItems) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active")
    }
}

// Paginação
// totalPages = 20
// selectedPage = 15
// [1,..., 13, 14, 15, 16, 17, ..., 20]

let totalPages = 20,
    selectedPage = 16,
    pages = [],
    oldPage

for (let currentPage = 1; currentPage <= totalPages; currentPage++) {

    const firstAndLastPage = currentPage == 1 || currentPage == totalPages
    const pagesAfterSelectedPage = currentPage <= selectedPage + 2
    const pagesBeforeSelectedPage = currentPage >= selectedPage - 2
 
    if (firstAndLastPage || pagesBeforeSelectedPage && pagesAfterSelectedPage) {

        if (oldPage && currentPage - oldPage > 2) {
            pages.push("...")
        }

        if (currentPage - oldPage == 2) {
            pages.push(oldPage + 1)
        }

        pages.push(currentPage)

        oldPage = currentPage
    }
}

console.log(pages)