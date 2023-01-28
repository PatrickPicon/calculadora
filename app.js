function calcular(tipo, valor) {

	if(tipo == 'acao') {

		if(valor == 'C') {
			document.getElementById('visor').value = ''
		}

		if(valor == '+' || valor == '-' || valor == '*' || valor == '/') {
			document.getElementById('visor').value += valor
		}

		
		if(valor == '=') {
			let valorCampo = eval(document.getElementById('visor').value)

			document.getElementById('visor').value = valorCampo 
		}

	} else if(tipo == 'valor') {
		document.getElementById('visor').value += valor
	}

}