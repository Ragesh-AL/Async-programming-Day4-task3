
async function display(){
    try{
        let res = await fetch("https://animechan.xyz/api/random")
        let data= await res.json()
        if(data){
            let root = document.getElementById("quote")
                let div = document.createElement("div")
            div.innerHTML = `<h4>Anime Name:${data.anime}</h4>
            <h4>Character Nmae: ${data.character}</h4>
            <h1>Dialogue:${data.quote}</h1>`
            root.appendChild(div)
        }
        else{
        
        }

    }
    catch(error){
        console.log(error)
    }

}
display()


