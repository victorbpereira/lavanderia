const inputValue = document.querySelectorAll('.container > input')
const btn = document.querySelector('button')
const pdf = document.querySelector('.pdf')
const content = document.querySelector('.content')
const obs = document.querySelector('#obs')
const nomeCliente = document.querySelector('#nome')
const titulo = document.querySelector('#titulo')
const tel = document.querySelector('#tel')
pdf.style = 'display: none;'

function clique() {
    let itens = 0
    let nomeItens = []
    let total = 0
    inputValue.forEach((e) => {
        total = (Number(e.id) * Number(e.value)) + total
        if (e.value >= 1) {
            itens += Number(e.value)
            nomeItens = [...nomeItens, e.name + ` - ${e.value}x` + '</br>']
        }
    })
    pdf.style = 'display: block;'

    content.innerHTML = `
    <p style="font-weight: bold; font-size: 24px; margin-bottom: 20px;">LAVANDERIA MODELO</p>
    <p>Cliente: <span style="font-weight: bold;">${nomeCliente.value}</span></p>
    <p>Tel: <span style="font-weight: bold;">${tel.value}</span></p>
    </br>
    <p style="font-weight: 500;">Total de itens: <span style="font-weight: bold;">${itens}</span></p>
    </br>
    <p style="font-weight: 500;">Itens:</br>,<span style="font-weight: 600;">${nomeItens}</span></p>
    </br>
    <p style="font-weight: 500; margin-bottom: 50px;">Total: R$ <span style="font-weight: bold; font-size: 20px;">${total.toFixed(2)}</span></p>
    <p style="font-weight: bold">Observações:</p>
    <p style="margin-bottom: 50px;">${obs.value.toUpperCase()}</p>
    <img src="src/pix.png" alt="">
    `
}

function gerarPDF() {
    document.querySelector('.container-principal').style = 'display: none'
    nomeCliente.style = 'display: none'
    obs.style = 'display: none'
    pdf.style = 'display: none'
    btn.style = 'display: none'
    titulo.style = 'display: none'
    const opt = {
        margin: [20, 20, 20, 20],
        filename:     'orçamento.pdf',
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

    html2pdf().set(opt).from(content).save()
}

pdf.addEventListener('click', gerarPDF)

btn.addEventListener('click', clique)