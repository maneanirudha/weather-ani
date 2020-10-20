




const formin = document.querySelector('form')
const search  = document.querySelector('input')
const messageone = document.querySelector('#message1')
const messagetwo = document.querySelector('#message2')




formin.addEventListener('submit',(event)=>{
    event.preventDefault()
    const loc = search.value
    fetch('http://api.weatherapi.com/v1/current.json?key=d3cc2b169c3e4bdf93d60535201710&q='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageone.textContent = data.error.message
        }else{
            messageone.textContent = data.location.name
            messagetwo.textContent = data.current.temp_c
            // console.log(data.location.name)
            // console.log(data.current.temp_c)
        }
    })
})
})