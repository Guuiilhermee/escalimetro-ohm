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

    tensaoInput.value = r.tensao
    correnteInput.value = r.corrente
    resistenciaInput.value = r.resistencia

    if(tensao === 0){
        tensaoInput.value = r.tensao.toFixed(3)
    }else if (corrente === 0){
        correnteInput.value = r.corrente.toFixed(3)
    }else if (resistencia === 0){
        resistenciaInput.value = r.resistencia.toFixed(3)
    }

    resdois.innerHTML = `
        <p>Tensão (V): ${tensao === 0 ? r.tensao.toFixed(3) : r.tensao}</p>
        <p>Corrente (I): ${corrente === 0 ? r.corrente.toFixed(3) : r.corrente}</p>
        <p>Resistência (R): ${resistencia === 0 ? r.resistencia.toFixed(3) : r.resistencia}</p>
    `
})
