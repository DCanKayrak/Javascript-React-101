const dizi = [1,2,3,4]

const kareDizisi = []
dizi.forEach(element => {
    kareDizisi.push(element * element)
});

console.log(kareDizisi)

// map

const mapDizisi = dizi.map(item =>item * 3)

console.log(mapDizisi)

// filter

const filtreliDizi = dizi.filter(item => sayi > 2)

console.log(filtreliDizi)

// reduce
const toplamm = dizi.reduce((acc,sayi) => {
    return acc + sayi;
},10)

console.log(toplamm)