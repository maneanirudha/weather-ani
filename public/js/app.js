

const formin = document.querySelector('form')
const search  = document.querySelector('input')
const messageone = document.querySelector('#message1')
const messagetwo = document.querySelector('#message2')
const message3 = document.querySelector('#message3')
const message4 = document.querySelector('#message4')


formin.addEventListener('submit',(event)=>{
    event.preventDefault()
    const loc = search.value
    fetch('https://api.weatherapi.com/v1/current.json?key=d3cc2b169c3e4bdf93d60535201710&q='+loc).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageone.textContent = data.error.message
        }else{
            messageone.textContent = data.location.name+','+data.location.region+','+data.location.country
            messagetwo.textContent = 'Tempurature Is: '+data.current.temp_c+'C'
            message3.textContent = 'Current Local Date/Time is '+data.location.localtime
            message4.textContent = 'Current Weather Is: '+data.current.condition.text
            
        }
    })
})
})