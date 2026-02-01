// ESCALIMETRO
function converter(medida, unidade) {
    let resultado = {}

    if (unidade === 'mm') {
        resultado = {
            mm: medida,
            cm: medida / 10,
            dm: medida / 100,
            m: medida / 1000,
            km: medida / 1000000
        }
    }

    if (unidade === 'cm') {
        resultado = {
            mm: medida * 10,
            cm: medida,
            dm: medida / 10,
            m: medida / 100,
            km: medida / 100000
        }
    }

    if (unidade === 'dm') {
        resultado = {
            mm: medida * 100,
            cm: medida * 10,
            dm: medida,
            m: medida / 10,
            km: medida / 10000
        }
    }

    if (unidade === 'metro') {
        resultado = {
            mm: medida * 1000,
            cm: medida * 100,
            dm: medida * 10,
            m: medida,
            km: medida / 1000
        }
    }

    if (unidade === 'km') {
        resultado = {
            mm: medida * 1000000,
            cm: medida * 100000,
            dm: medida * 10000,
            m: medida * 1000,
            km: medida
        }
    }

    return resultado
}

let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', () => {
    let unidade = document.getElementById('unidade').value
    let medida = Number(document.getElementById('medida').value)

    let r = converter(medida, unidade)

    resposta.innerHTML = `
        <p>mm: ${r.mm}</p>
        <p>cm: ${r.cm}</p>
        <p>dm: ${r.dm}</p>
        <p>m: ${r.m}</p>
        <p>km: ${r.km}</p>
    `
})

//LEI DE OHM
function leiDeOhm(tensao, corrente, resistencia) {
    let resultado = {}

    if (tensao === 0 && corrente !== 0 && resistencia !== 0) {
        resultado = {
            tensao: corrente * resistencia,
            corrente,
            resistencia
        }
    }

    else if (corrente === 0 && tensao !== 0 && resistencia !== 0) {
        resultado = {
            tensao,
            corrente: tensao / resistencia,
            resistencia
        }
    }

    else if (resistencia === 0 && tensao !== 0 && corrente !== 0) {
        resultado = {
            tensao,
            corrente,
            resistencia: tensao / corrente
        }
    }

    else {
        return `Indefinido`
    }

    return resultado
}

let calcdois = document.getElementById('calcdois')
let resdois = document.getElementById('resdois')

calcdois.addEventListener('click', () => {
    let tensaoInput = document.getElementById('tensao')
    let correnteInput = document.getElementById('corrente')
    let resistenciaInput = document.getElementById('resistencia')

    let tensao = Number(tensaoInput.value)
    let corrente = Number(correnteInput.value)
    let resistencia = Number(resistenciaInput.value)

    let r = leiDeOhm(tensao, corrente, resistencia)

    if (!r || r === "Indefinido") {
        resdois.innerHTML = `<p>Preencha exatamente DOIS campos</p>`
        return
    }

    tensaoInput.style.color = ""
    correnteInput.style.color = ""
    resistenciaInput.style.color = ""

    tensaoInput.value = r.tensao.toFixed(2)
    correnteInput.value = r.corrente.toFixed(2)
    resistenciaInput.value = r.resistencia.toFixed(2)

    if (tensao === 0) {
        tensaoInput.style.color = "#ff9c1a", tensaoInput.style.fontWeight = "bold"
    } else if (corrente === 0) {
        correnteInput.style.color = "red", correnteInput.style.fontWeight = "bold"
    } else if (resistencia === 0) {
        resistenciaInput.style.color = "green", resistenciaInput.style.fontWeight = "bold"
    }

    resdois.innerHTML = `
        <p>Tensão (V): ${r.tensao.toFixed(2)}</p>
        <p>Corrente (I): ${r.corrente.toFixed(2)}</p>
        <p>Resistência (R): ${r.resistencia.toFixed(2)}</p>
    `
})
