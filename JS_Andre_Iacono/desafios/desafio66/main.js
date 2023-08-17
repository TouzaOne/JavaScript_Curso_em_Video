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
        Q=()=> [c.width/2+X/Z*800,c.height/2+Y/Z*800]
        Cylinder = (rw, cl, ls1, ls2) => {
            let a = []
            for (let i=rw; i--;) {
                let b = []
                for(let j=cl; j--;) {
                    X = S(p=Math.PI*2/cl*j)*ls1
                    Y = (1/rw*i-.5)*ls2
                    Z = C(p) *ls1
                    b = [...b, [X,Y,Z]]
                }
                for(let j=cl; j--;) {
                    b = []
                    X = S(p=Math.PI*2/cl*j)*ls1
                    Y = (1/rw*i-.5)*ls2
                    Z = C(p) * ls1
                    b = [...b, [X,Y,Z]]
                    X = S(p=Math.PI*2/cl*(j+1)) * ls1
                    Y = (1/rw*i-.5)*ls2
                    Z = C(p) * ls1
                    b = [...b, [X,Y,Z]]
                    X = S(p=Math.PI*2/cl*(j+1))*ls1
                    Y = (1/rw*(i+1)-.5)*ls2
                    Z = C(p)*ls1
                    b = [...b, [X,Y,Z]]
                    X = S(p=Math.PI*2/cl*j)* ls1
                    Y = (1/rw*(i+1)-.5)*ls2
                    Z = C(p)*ls1
                    b = [...b, [X,Y,Z]]
                    a = [...a, b]
                }
            }
            b = []
            for(let j=cl; j--;) {
                X = S(p=Math.PI*2/cl*j) * ls1
                Y = ls2/2
                Z = C(p)*ls1
                b = [...b, [X,Y,Z]]
            }
            return a
        }
        stroke = (scol, fcol, lwo=1) => {
            if(scol) {
                x.closePath()
                x.globalAlpha = .1
                x.strokeStyle = scol
                x.lineWidth = Math.min(100, 15000*lwo/Z)
                x.stroke()
                x.lineWidth /= 8
                x.globalAlpha = 1
                x.stroke()
            }
            if(fcol) {
                x.fillStyle = fcol
                x.fill()
            }
        }
        Rn = Math.random
        guns = []
        a = Cylinder(1,6,2,2.5)
        a.map(v=> {
            v.map(q=> {
                q[1]-=1.25
            })
        })
        guns = [...guns, a]
        a = Cylinder(1,6,1,5)
        a.map(v=> {
            v.map(q=> {
                q[1]-=5
            })            
        })
        guns = [...guns, a]
        progIdx = prog = 0
        shots = []
        iPv = .01
        shotFreq = 0
        spawnShot = () => {
            X = ofx
            Y = ofy-7
            Z = ofz
            vx = 0
            vy = -iPv
            vz = 0
            shots = [...shots, [X,Y,Z,vx,vy,vz,1]]
        }
        bg = new Image()
        bg.src = 'https://i.imgur.com/MCjtiXN.jpeg'
    }
    oX=0, oY=20, oZ=300+Math.min(100,Math.max(-150,S(t/2)*600))
    Rl=S(t/4),
}
