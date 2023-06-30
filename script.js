let idsProducts = []
let namesProducts = []
let priceProducts = []
let evaluationProducts = []
let cartProduct
let cartQuantityProduct = 0

function registerProduct(){
    let quantity = parseInt(prompt('Quantos produtos deseja cadstrar?'))
    for (let i = 0; i < quantity; i++) {
        idsProducts[i] = parseInt(prompt(`Diga o id do ${i+1}º produto`))
        namesProducts[i] = prompt(`Diga o nome do ${i+1}º produto`)
        priceProducts[i] = parseInt(prompt(`Diga o preço do ${i+1}º produto`))
        evaluationProducts[i] = parseInt(prompt(`Diga a avaliacao do ${i+1}º produto. De 1 a 5`))
    }
    let whichFunction = prompt('O que deseja fazer?\nBuscar produto por nome\nBuscar produto por id\nMudar preço de produto\nDeletar Produto\nMostrar produtos ou Encerrar programa\nMostrar por maior avaliação\nAdicionar produto ao carrinho')
    switch (whichFunction) {
        case 'Buscar produto por nome':
            let askName = prompt('Diga o nome do produto para buscar seu id')     
            console.log(bringForName(askName))
            break;
        case 'Buscar produto por id':
            let askId = parseInt(prompt('Diga o id do produto que deseja buscar'))
            console.log(bringForId(askId))
            break;
        case 'Mudar preço de produto':
            let idChangePrice = parseInt(prompt('Diga o id do produto que deseja mudar o preço'))  
            updatePrice(idChangePrice)
            break;
        case 'Deletar produto':
            let namedeleteProduct = prompt('Diga o nome do produto que quer deletar')
            deleteProduct(namedeleteProduct)
            break;
        case 'Mostrar produtos' || 'Encerrar Programa':
            showProducts()
            break;
        case 'Mostrar por maior avaliação':
            showForEvaluation()
            break;
        case 'Adicionar produto ao carrinho':
            const nameToAdd = prompt('Diga o nome do produto que quer adicionar')
            const quantity = parseInt(prompt(`Diga a quantidade que deseja adicionar de ${nameToAdd}`))
            console.log(addToCart(nameToAdd, quantity))
            break;
        default:
            alert('Ação Indisponível')
            break;
    }
}
registerProduct()
function bringForId(id){
    let product
    for (let i = 0; i < idsProducts.length; i++) {
        if(id === idsProducts[i]) return product = `id: ${idsProducts[i]}, ${namesProducts[i]}, R$${priceProducts[i]}, Nota ${evaluationProducts[i]}`            
    }
    return product
}

function bringForName(nameProduct){
    let product
    for (let i = 0; i < namesProducts.length; i++) {
        if(nameProduct === namesProducts[i]) product = `${nameProduct} tem id ${idsProducts[i]}`
    }
    return product
}

 function showProducts(){
    for (let i = 0; i < idsProducts.length; i++) {
        console.log(`id: ${idsProducts[i]}, ${namesProducts[i]}, R$ ${priceProducts[i]},00 de Nota ${evaluationProducts[i]}`)
    }
} 
// 1, 2, 4 -> 4, 2, 1
function showForEvaluation(){
    let biggestEvaluation = 0
    let mediumEvaluation = 0
    let smallEvaluation = 0
    let evaluationsOrdered = []
    
    for (let i = 0; i < evaluationProducts.length; i++) {
        if(evaluationProducts[i] > biggestEvaluation) biggestEvaluation = evaluationProducts[i]
    }
    for (let j = 0; j < evaluationProducts.length; j++) {
        if(evaluationProducts[j] < biggestEvaluation && evaluationProducts[j] > mediumEvaluation) mediumEvaluation = evaluationProducts[j]
    }
    for (let k = 0; k < evaluationProducts.length; k++) {
        if(evaluationProducts[k] < mediumEvaluation && evaluationProducts[k] > smallEvaluation) smallEvaluation = evaluationProducts[k]
    }
    evaluationsOrdered = [biggestEvaluation, mediumEvaluation, smallEvaluation]
    
    for (let l = 0; l < evaluationProducts.length; l++) {
        for (let m = 0; m < evaluationProducts.length; m++) {
            if(evaluationProducts[l] === evaluationsOrdered[m]) {
                console.log(`id: ${idsProducts[m]}, ${namesProducts[m]}, R$ ${priceProducts[m]},00 de Nota ${evaluationProducts[m]} `)
            }
        }
    }
}

function updatePrice(id){
    let priceCurrent
    for (let i = 0; i < idsProducts.length; i++) {
        if(id === idsProducts[i]){ 
            priceCurrent = priceProducts[i]
            let askNewPrice = parseInt(prompt(`O preço desse produto é ${priceCurrent}, deseja mudar para quanto?`))
            priceProducts[i] = askNewPrice
        }
    }
    showProducts()
}

function deleteProduct(nameProduct){
    let newIds = []
    let newNames = []
    let newPrices = []
    let newEvaluations = []
    let count = 0
    for (let i = 0; i < namesProducts.length; i++) {
        if(nameProduct != namesProducts[i]){
            newIds[count] = idsProducts[i]
            newNames[count] = namesProducts[i]
            newPrices[count] = priceProducts[i]
            newEvaluations[count] = evaluationProducts[i]
            count++
        }
    }
    for (let j = 0; j < newIds.length; j++) {
        console.log(`id: ${newIds[j]}, ${newNames[j]}, R$ ${newPrices[j]},00 de Nota ${newEvaluations[j]}`)
    }
}

function addToCart(nameProduct, quantityProduct){
    if(nameProduct === cartProduct) cartQuantityProduct += quantityProduct
    else {
        cartProduct = nameProduct
        cartQuantityProduct += quantityProduct
    }
    console.log(showCart(cartProduct, cartQuantityProduct))
}

function deleteProductCart(nameProduct, quantityProduct){
    if(quantityProduct >= cartQuantityProduct) {
        cartQuantityProduct = 0
        cartProduct = ''
    } else cartQuantityProduct -= quantityProduct
    alert(`${quantityProduct} unidades de ${nameProduct} foi(ram) deletado(s)`)
}

function showCart(nameProduct, quantityProduct){
    let message = `Carrinho: ${nameProduct}, com ${quantityProduct} unidades`
    return message
}