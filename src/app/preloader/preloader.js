let hide_preloader = () => {
    let preloader = document.querySelector('.preloader')
    let timer = setTimeout(() => {
        preloader.classList.add('hide')
        document.body.style.overflowX = 'hidden'
    }, 2500)
}
export default hide_preloader
