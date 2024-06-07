//aplicação da funcionalidade do javascript
document.querySelectorAll('button').forEach(button => { 
    button.addEventListener('click' , () => {
})

    //o botão adiciona um evento do mouse (click)
    button.addEventListener('click' , () => {
        document.body.className = button.id
    })

})