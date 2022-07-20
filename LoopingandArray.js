let categories = ["Horror","Sci-Fi", "Thriller", "Adventure", "Animation"]
let info = `Terdapat ${categories.length} categories :\n`
for(i = 0; i < categories.length;i++) {
    info += `${i + 1}` + categories[i] + '\n'
}
console.log(info)

