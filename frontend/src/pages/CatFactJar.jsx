import { useState } from "react"

function CatFactJar() {
    const [isShaking, setIsShaking] = useState(false)
    const [isSlipEmerging, setIsSlipEmerging] = useState(false)
    const [fact, setFact] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const getRandomFact = async () => {
        setIsShaking(true)
        setIsSlipEmerging(false)
        setFact(null)
        setError('')
        setIsLoading(true)

        try {
            const response = await fetch('http://localhost:3001/api/facts/random')

            if (!response.ok) {
                throw new Error('Could not retrieve a cat fact')
            }

            const data = await response.json()
            setFact(data)
        } catch (error) {
            setError('Oops! The cats couldn’t share a fact just now. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <main className="cat-fact-jar-page">
            <section className="cat-fact-jar-intro">
                <h1>The Cat Fact Jar</h1>
                <p className="cat-fact-jar-message">
                    Psst... the cats have secrets to share.
                </p>
            </section>

            <section className="cat-fact-jar-experience">
                <div className="jar-container">
                    <div className="jar-lid"></div>

                    <div className={`jar ${isShaking ? 'shaking' : ''}`}
                        onAnimationEnd={(event) => {
                            if (event.target === event.currentTarget) {
                                setIsShaking(false)
                                setIsSlipEmerging(true)
                            }
                        }}>
                        <div className={`jar-slips ${isShaking ? 'shuffling' : ''}`}>
                            <span className="paper-slip paper-slip-one"></span>
                            <span className="paper-slip paper-slip-two"></span>
                            <span className="paper-slip paper-slip-three"></span>
                            <span className="paper-slip paper-slip-four"></span>
                            <span className="paper-slip paper-slip-five"></span>
                        </div>
                    </div>
                    {isSlipEmerging && (
                        <div className="emerging-slip emerging"></div>
                    )}
                </div>

                <button type="button" className="jar-button" onClick={getRandomFact} disabled={isLoading || isShaking}>
                    See what you find!
                </button>

                <p className="jar-tagline">
                    You never know what you'll discover!
                </p>
                {isSlipEmerging && fact && (
                    <div className="fact-card">
                        <h2>{fact.title}</h2>
                        <p className="fact-card-content">{fact.fact}</p>
                        <p>{fact.more}</p>
                        <p className="fact-card-category">{fact.category}</p>
                    </div>
                )}

                {error && <p className="fact-error">{error}</p>}
            </section>
        </main >
    )
}

export default CatFactJar
