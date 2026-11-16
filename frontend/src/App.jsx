import { useState } from 'react'
import './App.css'
import catIllustration from './assets/wonderfully-feline-cat.png';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a href="#home" className="logo">
          <span aria-hidden="true">✿</span>
          Wonderfully Feline
        </a>

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

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#explore" onClick={() => setMenuOpen(false)}>Explore</a>
          <a href="#saved" onClick={() => setMenuOpen(false)}>Saved</a>
        </nav>
      </header>

      <main>
        <section className="welcome-section" id="home">
          <div className="welcome-content">
            <p className="eyebrow">A curious celebration of cats</p>

            <h1>
              A little more
              <br />
              <span>curiosity.</span>
              A lot more cats.
            </h1>

            <p className="welcome-description">
              From mysterious midnight zoomies to the subtle language of a
              flicking tail, there's always something wonderful to discover
              about our feline companions.
            </p>

            <a href="#explore" className="explore-button">
              Explore the world of cats
            </a>
          </div>

          <div className="welcome-image">
            <img
              src={catIllustration}
              alt="A curious white cat with grey ears, a grey tail and green eyes"
              className="cat-illustration"
            />
          </div>
        </section>

        <section className="discover-section" id="explore">
          <p className="eyebrow">There's more than meets the whiskers</p>

          <h2>Get to know the wonderfully feline world</h2>

          <p>
            Explore curious behaviours, remarkable senses and the little
            ways cats communicate with us. There's something new around
            every corner.
          </p>
        </section>
      </main>
    </>
  );
}

export default App
