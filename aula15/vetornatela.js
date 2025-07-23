let valores = [ 6, 7, 8, 4, 5, 6]
valores.sort()
/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}