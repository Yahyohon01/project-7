const info = document.querySelector('.info')
const input = document.querySelector('#input')

let poter = []

const harryPoter = async() => {
    let response = await fetch('https://hp-api.herokuapp.com/api/characters')
    poter = await response.json()

    displayElements(poter)
}
    
input.addEventListener('keyup', (event) =>{
    const filterData = poter.filter( (el) => {
        return el.name.includes(event.target.value)
    } )
    console.log(poter);
    console.log(event.target.value);
    displayElements(filterData)
} )


const displayElements = (harry) => {

let html = ``

 harry.map((wB) =>{

    html +=`
        <div class ="main--div">
            <div>
                <p class = "names">${wB.name}</p>
                <p>${wB.house}</p>
            </div>
            <div>
                <img class ="imgs" src="${wB.image}" alt="">
            </div>
        </div>
        
    `
 } )
info.innerHTML = html

}

harryPoter()


// for(let i = 0; i < harry.length; i++){
    //     html +=`
    //         <div class ="main--div">
    //             <div class ="display">
    //                 <div >
    //                     <p class = "names">${harry[i].name}</p>
    //                     <p>${harry[i].house}</p>
    //                 </div>
    //                 <div>
    //                     <img class ="imgs" src="${harry[i].image}" alt="">
    //                 </div>
    //             </div>   
    //         </div>
    //     `
    // info.innerHTML = html
    // }

// harryPoter()
