let mevalar = ["anor" , "olma" , "nok" , "banan" , "gilos" , "aziza" , "mashina" , "atham" , "yusuf"]

let nHarf = []
let nHarfyoq = []

for (let index = 0; index < mevalar.length; index++) {
    let soz = mevalar[index]
    
    if (soz.includes("n")) {
        nHarf.push(soz) 
    } else {
        nHarfyoq.push(soz)
    }
    
}

console.log(mevalar);
console.log(" N harfi bor sozlar: " + nHarf);
console.log(" N harfi bor sozlar: " + nHarfyoq);


