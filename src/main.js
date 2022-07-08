let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `测试测试测试测试测试测试测试测试
测试   测试测试
测试测试测试
`
let string2 = ""
let n = 0

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2
        if (n < string.length - 1) {
            n++
            step()
        }
    }, 10)
}

step()