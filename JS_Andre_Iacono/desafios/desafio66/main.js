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
        if(document.body.clientWidth > document.body.clientHeight*1.77777778){ 
    c.style.height = '100vh'
    setTimeout(()=> c.style.width = c.clientHeight*1.77777778+'px', 0)
    } else {
        c.style.width = '100vw'
        setTimeout(()=> c.style.height = c.clientWidth/1.77777778 + 'px',0)
    }
    },0)
}
rsz()
async function Draw() {
    if(!t) {
        R= (Rl, Pt, Yw, m)=> {
            M=Math
            A=M.atan2
            H=M.hypot
            X=S(p=A(x,y)+Rl)*(d=H(X,Y))
            Y=C(p)*d
            X=S(p=A(X,Z)+Yw)*(d=H(X,Z))
            Z=C(p)*d
            Y=S(p=A(Y,Z)+Pt)*(d=H(Y,Z))
            Z=C(p)*d
            if(m) {
                X+=oX
                Y+=oY
                Z+=oZ
            }
        }
        Q=
    }
}
