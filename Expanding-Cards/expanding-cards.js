const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

const removeActiveClass = () => {
    panels.forEach(panel => {
        if (panel.classList.contains('active')){
            panel.classList.remove('active')
        }
    })
}