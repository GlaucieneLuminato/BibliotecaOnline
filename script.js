document.addEventListener("DOMContentLoaded", () => {
    const bookForm = document.getElementById("book-form");
    const bookList = document.getElementById("book-list");

    // Função para carregar os livros armazenados
    function loadBooks() {
        const books = JSON.parse(localStorage.getItem("books")) || [];
        bookList.innerHTML = "";
        books.forEach(book => addBookToUI(book));
    }

    // Função para adicionar livro à interface
    function addBookToUI(book) {
        const li = document.createElement("li");
        li.textContent = `ID: ${book.id} - ${book.title} (Autor: ${book.author})`;
        bookList.appendChild(li);
    }

    // Evento de submissão do formulário
    bookForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const id = document.getElementById("id").value;
        const author = document.getElementById("author").value;

        if (!title || !id || !author) return;

        const newBook = { id, title, author };

        // Armazenando no localStorage
        const books = JSON.parse(localStorage.getItem("books")) || [];
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));

        addBookToUI(newBook);

        // Limpar os campos do formulário
        bookForm.reset();
    });

    // Carregar livros ao iniciar
    loadBooks();
});