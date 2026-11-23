import { useState } from 'react'
import { Link } from 'react-router'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="site-header">
            <Link to="/" className="logo">
                <span aria-hidden="true">✿</span>
                Wonderfully Feline
            </Link>

            <button
                className={`menu-toogle ${menuOpen ? 'open' : ''}`}
                type="button"
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
            </button>

            <nav
                className={`main-nav ${menuOpen ? 'open' : ''}`}
                id="main-navigation"
                aria-label="Main navigation"
            >
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
                <Link to="/saved" onClick={() => setMenuOpen(false)}>Saved</Link>
            </nav>
        </header>
    )
}

export default Header