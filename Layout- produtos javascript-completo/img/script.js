
/*
Métodos:
 - Os métodos em JavaScript devem iniciar com a palavra reservada "function", seguido de um nome, dos parâmetros (entre parênteses) e a abertura de bloco com as chaves.
	{ } chaves
	[ ] colchetes
	( ) parênteses
	function nomeDaFunction() {
		código
	}
*/

/*
Padrão de nomenclatura de métodos (function)
 - Deve iniciar com letra minúscula
 - O nome deve iniciar com um verbo no infinitivo (verbo sem conjugação)
 - Seguido de um substantivo ou adjetivo
 - Este padrão é chamado de lowerCamelCase
 Ex:
*/

// Lista de Produtos vindos do "Banco de Dados" (simulado)
const listaProdutos = [
	produto = {
@@ -32,6 +55,14 @@ const listaProdutos = [
		valor_produto: 11.99,
		foto_produto: "img/pao-integral.jpg",
	},

	produto = {
		id_produto: 5,
		nome_produto: "Pão integral",
		descricao_produto: "Pão feito com farinha integral, que mantém todos os nutrientes.",
		valor_produto: 11.99,
		foto_produto: "img/pao-integral.jpg",
	},
];

const blocoProdutos = document.querySelector('#bloco-produto');
@@ -42,48 +73,120 @@ let contador = 0; // Conta até 4 (Produtos por linha)

// Se houver algm Produto na Lista
if (listaProdutos.length > 0) {
	for (let i = 0; i < listaProdutos.length; i++) {}
	for (let i = 0; i < listaProdutos.length || contador < 4; i++) {
		// Verifica se é o primeiro produto (cria nova linha)
		if (i == 0 || contador == 0) {
			rowProduto = criarDivLinha();
            colProduto = criarDivProduto(i);
            rowProduto.appendChild(colProduto);
            blocoProdutos.appendChild(rowProduto);

		} else {
			colProduto = criarDivProduto(i);
            rowProduto.appendChild(colProduto);
		}
		contador++;

		// Se já tem 4 Produtos na tela e ainda tem itens na Lista, cria um anova Linha
		if (contador == 4 && listaProdutos[i +1] != null) {
			contador = 0;
		}
	}

} else {
	blocoProdutos.innerHTML = "Não há produtos cadastrados"
	blocoProdutos.innerHTML = "Não há produtos cadastrados";
}

function criarDivLinha() {
	// Cria a Linha (row)
	const rowProdutoTemp = document.createElement('div');

	// Adiciona a classe
	rowProdutoTemp.classList.add('row');
	return rowProdutoTemp;
}

function criarDivProduto(i) {
	const colProdutoTemp = document.createElement('div');
	colProdutoTemp.classList.add('col');












/*
Métodos:
 - Os métodos em JavaScript devem iniciar com a palavra reservada "function", seguido de um nome, dos parâmetros (entre parênteses) e a abertura de bloco com as chaves.
	{ } chaves
	[ ] colchetes
	( ) parênteses
	function nomeDaFunction() {
		código
	// Se não há mais itens na Lista, retorna apenas a div vazia
	if (listaProdutos[i] == null) {
		return colProdutoTemp; // Early return (retorno precoce/antecipado)
	}
*/

/*
Padrão de nomenclatura de métodos (function)
 - Deve iniciar com letra minúscula
 - O nome deve iniciar com um verbo no infinitivo (verbo sem conjugação)
 - Seguido de um substantivo ou adjetivo
 - Este padrão é chamado de lowerCamelCase
	// Cria a estrutura do Produto
	const divProduto = document.createElement('div');
	divProduto.classList.add('produto');

	// Adiciona o atributo (ao passar o mouse)
	divProduto.setAttribute(
		'onmouseover',
		'mudarCorBotao(btnComprar' + listaProdutos[i].id_produto + ')'
	);

	// Adiciona o atributo (ao tirar o mouse)
	divProduto.setAttribute(
		'onmouseout',
		'voltarCorBotao(btnComprar' + listaProdutos[i].id_produto + ')'
	);

	// Cria a estrutura da Foto do Produto
	const divFotoProduto = document.createElement('div');
	divFotoProduto.classList.add('foto-produto');

	// Inclui a div Foto no Card Produto
	divProduto.appendChild(divFotoProduto);

	// Cria o elemento img com o atributo src e o texto alternativo (alt)
	const tagImg = document.createElement('img');
	tagImg.setAttribute('src', listaProdutos[i].foto_produto);
	tagImg.setAttribute('alt', listaProdutos[i].nome_produto);
	divFotoProduto.appendChild(tagImg);

	// Cria a estrutua do Nome do Produto
	const divNomeProduto = document.createElement('div');
	divNomeProduto.classList.add('nome-produto');
	divNomeProduto.innerHTML = listaProdutos[i].nome_produto;
	divProduto.appendChild(divNomeProduto);

	// Cria a estrutua da Descrição do Produto
	const divDescricaoProduto = document.createElement('div');
	divDescricaoProduto.classList.add('descricao-produto');
	divDescricaoProduto.innerHTML = listaProdutos[i].descricao_produto;
	divProduto.appendChild(divDescricaoProduto);

	// Cria a estrutura do Valor do Produto
	const divValorProduto = document.createElement('div');
	divValorProduto.classList.add('preco-produto');

	let valorAjustado = ajustarCasasDecimais(listaProdutos[i].valor_produto);
	divValorProduto.innerHTML = `R$ ${valorAjustado} kg`;

	divProduto.appendChild(divValorProduto);

	// Cria a estrutura do Botão Comprar
	const divBtnComprar = document.createElement('div');
	divBtnComprar.classList.add('btn');
	divBtnComprar.classList.add('btn-outline-light');
	divBtnComprar.setAttribute('id', 'btnComprar' + listaProdutos[i].id_produto);
	divBtnComprar.innerHTML = "Comprar >>>";
	divProduto.appendChild(divBtnComprar);

	// Adiciona o Produto preenchido
	colProdutoTemp.appendChild(divProduto);
	return colProdutoTemp;
}

 Ex:
*/
// Ajusta as Casas Decimais
function ajustarCasasDecimais(valor) {
	/*let valorAjustado = valor.toFixed(2);
	valorAjustado = valorAjustado.replace('.', ',');
	return valorAjustado;*/

	// Encurtado
	return valor.toFixed(2).replace('.', ',');
}

function mudarCorBotao(btnComprar) {
    btnComprar.classList.replace("btn-outline-light", "btn-success");
	function voltarCorBotao(btnComprar) {
		btnComprar.classList.replace("btn-success", "btn-outline-light");
	}
	