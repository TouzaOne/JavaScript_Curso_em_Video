c = document.querySelector('#c')
c.width = 1920
c.height = 1080
x = c.getContext('2d')
C = Math.cos
S = Math.sin
t = 0
T = Math.tan
rsz = window.onresize=()=> {
    setTimeout(()=> {
        if(document.body.clientWidth > document.body.clientHeight*1.77777778)
    } 
    c.style.height = '100vh'
    setTimeout(()=> c.style.width = c.clientHeight*1.77777778+'px', 0))
}