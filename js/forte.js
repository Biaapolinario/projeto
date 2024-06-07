//aplicação da funcionalidade do javascript
document.querySelectorAll('button').forEach(button => { 
    button.addEventListener('click' , () => {
        document.body.className = button.id
    })
})


