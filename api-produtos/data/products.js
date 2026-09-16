// data/products.js
//
// Aqui simulamos um banco de dados usando um array em memória.
// Em um projeto real, isso seria substituído por chamadas a um banco
// de verdade (MySQL, PostgreSQL, MongoDB etc). Mas a LÓGICA de negócio
// (buscar, criar, atualizar, remover) continua sendo a mesma ideia.

// Array que guarda os produtos. Começa com alguns itens de exemplo.
let products = [
  { id: 1, name: "Teclado Mecânico RGB", price: 329.9, stock: 60 },
  { id: 2, name: "Mouse Gamer 16000 DPI", price: 189.9, stock: 85 },
  { id: 3, name: "Monitor 27' 144Hz", price: 1499.0, stock: 40 },
  { id: 4, name: "Headset 7.1 Surround", price: 279.9, stock: 75 },
  { id: 5, name: "Webcam Full HD 1080p", price: 219.5, stock: 50 },
  { id: 6, name: "Mousepad Speed XL", price: 89.9, stock: 120 },
  { id: 7, name: "Cadeira Gamer Reclinável", price: 1099.0, stock: 25 },
  { id: 8, name: "SSD NVMe 1TB", price: 449.0, stock: 95 },
  { id: 9, name: "Memória RAM 16GB DDR4", price: 289.9, stock: 110 },
  { id: 10, name: "Hub USB-C 7 portas", price: 159.9, stock: 70 },
];

// Contador para gerar o próximo id disponível.
// Em um banco real isso seria automático (auto-incremento / UUID).
let nextId = 11;

// Retorna TODOS os produtos. Usado pelo GET /product
function getAll() {
  return products;
}

// Busca um produto específico pelo id. Usado pelo GET /product/:id
function getById(id) {
  return products.find((p) => p.id === id);
}

// Cria um novo produto e devolve ele já com o id atribuído.
// Usado pelo POST /product
function create(data) {
  const newProduct = { id: nextId++, ...data };
  products.push(newProduct);
  return newProduct;
}

// Substitui um produto INTEIRO (todos os campos são trocados).
// Usado pelo PUT /product/:id
function replace(id, data) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null; // não achou -> devolve null
  products[index] = { id, ...data };
  return products[index];
}

// Atualiza APENAS os campos enviados, mantendo o resto como estava.
// Usado pelo PATCH /product/:id
function update(id, data) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  // "..." (spread) mescla o objeto antigo com os campos novos
  products[index] = { ...products[index], ...data };
  return products[index];
}

// Remove um produto pelo id. Devolve true/false indicando sucesso.
// Usado pelo DELETE /product/:id
function remove(id) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return false;
  products.splice(index, 1);
  return true;
}

// Exportamos as funções para que routes/products.js possa usá-las
module.exports = { getAll, getById, create, replace, update, remove };