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
    Rl=S(t/4), Pt=-.4+C(t/2)/3, Yw=S(t/8)*6
    path = [], sd=100
    for(i=sd+1; i--;){
        ls = 120+S(Math.PI*2*(sd/20|0)/sd*i)*8**2/2
        X = S(p=Math.PI*2/sd*i)*ls
        Y = ((Math.hypot(X,Y)*99)**7/16e26)*Math.max(-1,Math.min(1,S(t*4)))
        path=[...path, [X,Y,Z]]
    }
    for(j=30; j--;){
        prog +=.666
        if(prog>=1) prog-=1,progIdx++
        el1 = path[progIdx%path.length]
        el2 = path[(progIdx + 1) % path.length]
        ofx = el1[0] + (el2[0]-el1[0])*prog
        ofy = el1[1] + (el2[1]-el1[1])*prog
        ofz = el1[2] + (el2[2]-el1[2])*prog
        if(!((t*60|0)%shotFreq))
            spawnShot()
    }
    x.globalAlpha = .1
    x.drawImage(bg,0,0,c.width,c.height)
    x.globalAlpha = 1
    x.fillStyle = '#0003'
    x.fillRect(0,0,c.width,c.height)
    x.lineJoin = x.lineCap = 'round'
    x.beginPath()
    path.map((v,i)=> {
        X = v[0]
        Y = v[1]
        Z = v[2]
        R(0,0,S(t)/10)
        v[0] = X
        v[1] = Y
        v[2] = Z
        R(Rl,Pt,Yw,1)
        if(Z>0)x.lineTo(...Q())
    })
    stroke("#0f8", "#40f1")
    shots = shots.filter(v=>v[6]>0)
    shots.map(v=> {
        v[0]/=1.02
        v[2]/=1.02
        X = v[0] += v[3]*=1.05
        Y = v[1] += v[4]*=1.05
        Z = v[2] += v[5]*=1.05
        v[6]-=.005
        R(Rl,Pt,Yw,1)
        if(Z>0){
            
        }
    })
}
