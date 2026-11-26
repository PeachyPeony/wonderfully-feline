import { useState } from "react"

function CatFactJar() {
    const [isShaking, setIsShaking] = useState(false)
    const [isSlipEmerging, setIsSlipEmerging] = useState(false)
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

                <button type="button" className="jar-button" onClick={() => setIsShaking(true)}>
                    See what you find!
                </button>

                <p className="jar-tagline">
                    You never know what you'll discover!
                </p>
                {isSlipEmerging && (
                    <div className="fact-card">
                        <p className="fact-card-content">
                            Your surprising cat fact will appear here!
                        </p>
                    </div>
                )}
            </section>
        </main >
    )
}

export default CatFactJar
