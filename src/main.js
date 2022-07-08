let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/*你好，我是Achel
*下面我将使用JS画出一个八卦
*首先要准备一个div
**/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*然后要把方框变成一个圆
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/*太极生两仪
*一半阴一半阳
**/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*阳中有阴，阴中有阳
*加两个黑白小点
**/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
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
        style.innerHTML = string.substring(0, n)
        window.scrollTo(0,document.body.scrollHeight)
        html.scrollTo(0,document.body.scrollHeight)
        if (n < string.length - 1) {
            n += 1
            step()
        }
    }, 10)
}

step()