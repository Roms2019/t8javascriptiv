class Navbar{
    render() {
    const navbar = `
        <img class="Navbar__logo" src="./imgs/logo.png" alt="Logo" />
        <div class="group__input">
            <input class="input__search" type="search" placeholder="Search" aria-label="Search">
            <button class="button__search" onclick=""> Search </button>
        </div>
        `
        document.querySelector('.navbar').innerHTML = navbar
    }
}    
const renderNavbar = new Navbar
renderNavbar.render()
