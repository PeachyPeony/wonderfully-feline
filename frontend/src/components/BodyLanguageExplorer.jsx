import { useState } from 'react'

const bodyAreas = [
    {
        id: 'posture',
        name: 'Body posture',
        explanation: 'The way a cat holds its body can tell us whether it feels relaxed, playful, defensive or uncomfortable. A loose, relaxed posture often suggests that a cat feels safe.',
        example: 'Look for this: A relaxed body with no signs of tension.',
    },
    {
        id: 'ears',
        name: 'Ears',
        explanation: 'A cat’s ears can reveal a lot about how it is feeling. Forward-facing ears often suggest curiosity or interest, while flattened ears can indicate fear, stress or irritation.',
        example: 'Look for this: Ears pointing forward when your cat hears something interesting.',
    },
    {
        id: 'eyes',
        name: 'Eyes',
        explanation: 'A cat’s eyes can communicate comfort, curiosity and emotion. Soft eyes and slow blinking can be signs that your cat feels relaxed and safe.',
        example: 'Look for this: A slow blink when your cat is calmly looking at you.',
    },
    {
        id: 'tail',
        name: 'Tail',
        explanation: 'A cat’s tail can express different emotions. A gently raised tail often signals a friendly greeting, while a tucked or puffed-up tail can indicate uncertainty or fear.',
        example: 'Look for this: A relaxed, upright tail when your cat approaches you.',
    },
    {
        id: 'whiskers',
        name: 'Whiskers',
        explanation: 'Whiskers are sensitive touch receptors that also help us understand a cat’s mood. Relaxed whiskers usually rest naturally to the sides, while whiskers pushed forward can suggest interest or excitement.',
        example: 'Look for this: Whiskers pointing forward when your cat investigates something.',
    },

]

function BodyLanguageExplorer() {
    const [selectedArea, setSelectedArea] = useState('posture')

    const selectedInfo = bodyAreas.find(
        (area) => area.id === selectedArea
    )

    return (
        <section className="interactive-experience body-language-experience">
            <div className="interactive-intro">
                <p className="eyebrow">Read the little signals</p>
                <h2>What is your cat telling you?</h2>
                <p>
                    Cats communicate with more than just sounds.
                    Explore their body language and discover what
                    those little signals might mean.
                </p>
            </div>

            <div className="interactive-content">
                <div className="body-language-stage">
                    <p>Cat illustration will go here.</p>
                </div>

                <div className="body-language-information">
                    <h3>Explore body language</h3>

                    <div className="body-language-controls">
                        {bodyAreas.map((area) => (
                            <button
                                key={area.id}
                                type="button"
                                onClick={() => setSelectedArea(area.id)}
                                aria-pressed={selectedArea === area.id}
                            >
                                {area.name}
                            </button>
                        ))}
                    </div>

                    <div className="body-language-details" aria-live="polite">
                        <h4>{selectedInfo.name}</h4>
                        <p>{selectedInfo.explanation}</p>
                        <p>{selectedInfo.example}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BodyLanguageExplorer
