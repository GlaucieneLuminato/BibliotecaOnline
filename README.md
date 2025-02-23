![Uploading Screenshot_20250222_220315_Spck Editor.jpg…]()
📚 Sistema de Biblioteca

Este é um pequeno sistema de biblioteca desenvolvido com HTML, CSS e JavaScript. Ele permite que os usuários adicionem livros informando título, ID e nome do autor, armazenando os dados no localStorage para que sejam mantidos mesmo após o recarregamento da página.

🚀 Funcionalidades

Adicionar novos livros informando título, ID e autor.

Exibir a lista de livros cadastrados.

Armazenamento persistente no localStorage.


🛠️ Tecnologias Utilizadas

HTML: Estrutura da página.

CSS: Estilização da interface.

JavaScript: Lógica do sistema e manipulação do DOM.


📷 Captura de Tela



📂 Estrutura do Projeto

📂 biblioteca
│── 📜 index.html        # Estrutura principal da página
│── 📜 styles.css        # Estilos da interface
│── 📜 script.js         # Lógica e armazenamento de dados
│── 📜 README.md         # Documentação do projeto

▶️ Como Executar o Projeto

1. Clone este repositório



git clone https://github.com/seu-usuario/biblioteca.git

2. Acesse a pasta do projeto



cd biblioteca

3. Abra o arquivo index.html no navegador



🔍 Teste Automatizado

Este projeto pode ser testado automaticamente com Selenium para verificar se a funcionalidade de adicionar livros está funcionando corretamente.

1️⃣ Instale o Selenium:

pip install selenium

2️⃣ Código do Teste Automatizado (Python):

from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("file:///C:/caminho/do/seu/projeto/index.html")

driver.find_element(By.ID, "title").send_keys("O Pequeno Príncipe")
driver.find_element(By.ID, "id").send_keys("1")
driver.find_element(By.ID, "author").send_keys("Antoine de Saint-Exupéry")
driver.find_element(By.TAG_NAME, "button").click()

time.sleep(1)
book_list = driver.find_element(By.ID, "book-list").text
assert "O Pequeno Príncipe" in book_list

driver.quit()

📌 Melhorias Futuras

Adicionar funcionalidade para remover livros.

Criar um campo de pesquisa de livros.

Melhorar a interface com animações e efeitos visuais.


📜 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo!


Feito com ❤️ por Glauciene 
# BibliotecaOnline
# BibliotecaOnline
