// var heading=document.createElement('h1')
// heading.textContent="Coundown"
// document.body.append(heading)

var div=document.createElement("div")
document.body.append(div)

setTimeout(function(){
    document.querySelector("div").innerText=`${10}`
    setTimeout(function(){
        document.querySelector("div").innerText=`${9}`
        setTimeout(function(){
            document.querySelector("div").innerText=`${8}`
            setTimeout(function(){
                document.querySelector("div").innerText=`${7}`
                setTimeout(function(){
                    document.querySelector("div").innerText=`${6}`
                    setTimeout(function(){
                        document.querySelector("div").innerText=`${5}`
                        setTimeout(function(){
                            document.querySelector("div").innerText=`${4}`
                            setTimeout(function(){
                                document.querySelector("div").innerText=`${3}`
                                setTimeout(function(){
                                    document.querySelector("div").innerText=`${2}`
                                    setTimeout(function(){
                                        document.querySelector("div").innerText=`${1}`
                                        setTimeout(function(){
                                            document.querySelector("div").innerText=`Happy Independence day`
                                            
                                        },1000)   
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)