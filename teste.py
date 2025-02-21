from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

# Inicializa o navegador
driver = webdriver.Chrome()

# Abre o sistema da biblioteca (ajuste para o caminho correto do seu arquivo HTML)
driver.get("file:///C:/caminho/do/seu/projeto/index.html")

# Preenche os campos do formulário
driver.find_element(By.ID, "title").send_keys("O Pequeno Príncipe")
driver.find_element(By.ID, "id").send_keys("1")
driver.find_element(By.ID, "author").send_keys("Antoine de Saint-Exupéry")

# Clica no botão de adicionar
driver.find_element(By.TAG_NAME, "button").click()

# Espera um tempo para o elemento ser adicionado (alternativamente, usar espera explícita)
time.sleep(1)

# Verifica se o livro foi adicionado à lista
book_list = driver.find_element(By.ID, "book-list").text
assert "O Pequeno Príncipe" in book_list

print("Teste passou! O livro foi adicionado corretamente.")

# Fecha o navegador
driver.quit()