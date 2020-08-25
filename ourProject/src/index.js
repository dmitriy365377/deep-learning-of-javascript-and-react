const array = [
    "вертикаль",
    "кильватер",
    "апельсин",
    "спаниель",
    "австралопитек",
    "ватерполистка",
    "кластер",
    "сталкер",
    "стрелка",
    "корабль"
]

annogramm2(array)
function annogramm2(arr) {
    const result  = {}
    arr.forEach((item,i) => {
        const itemSorted = item.split('').sort().join('')
        return result[itemSorted] = result[itemSorted] ? [...result[itemSorted], item] : [item]
    })
    console.log(Object.values(result))
}