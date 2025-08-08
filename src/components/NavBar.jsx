import '../styles/navBar.css'

function NavBar({currentMode}) {
  return (
    <nav>
      <h1>CV <span>Builder</span></h1>
      <p className='mode'>Current Mode: {currentMode === 0 ? 'edit' : 'result'}</p>
    </nav>
  )
}

export default NavBar
