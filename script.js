function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let pul = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pul.value.length == 0) {
        res.innerHTML = 'Não foi possivel estabelecer a resposta'

        window.alert("Verifique se tudo esta devidamente preenchido")
    } else {
        res.innerHTML = 'contando: ' + '</br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pul.value)
        if (p <= 0) {
            alert('pulo invalido! considerando Pulo=1')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}