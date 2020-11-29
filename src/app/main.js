import './preloader/preloader.js'
import hide_preloader from './preloader/preloader.js'
import nav_bar_sticky from './nav_bar/nav_bar.js'
import show_section from './section/section.js'
let render = () => {
    hide_preloader()
    nav_bar_sticky()
    show_section()
}
render()
