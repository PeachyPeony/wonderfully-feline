import { useState } from 'react'

const senses = [
    {
        id: 'hearing',
        name: 'Hearing',
        explanation: 'Cats have an impressive sense of hearing. Their ears can detect a wide range of sounds, including high-pitched noises that humans cannot hear.',
        example: 'Did you know? Cats can rotate their ears independently to help locate where a sound is coming from.',
    },
    {
        id: 'smell',
        name: 'Smell',
        explanation: 'A cat’s sense of smell is much stronger than ours. It helps cats recognise familiar people and animals, explore their surroundings and gather information about the world.',
        example: 'Did you know? Cats use scent marking to leave messages for other cats.',
    },
    {
        id: 'touch',
        name: 'Touch',
        explanation: 'Cats use their sensitive whiskers and paws to explore their surroundings. Whiskers help them sense nearby objects and changes in their environment.',
        example: 'Did you know? Whiskers can help cats judge whether an opening is wide enough for them to pass through.',
    },
    {
        id: 'vision',
        name: 'Vision',
        explanation: 'Cats are especially good at seeing in dim light. Their eyes are adapted to help them detect movement, making them excellent hunters in low-light conditions.',
        example: 'Did you know? Cats have a wider field of vision than humans, which helps them notice movement around them.',
    },

]

function FelineSensesExplorer() {
    const [selectedSense, setSelectedSense] = useState('hearing')

    const selectedInfo = senses.find(
        (sense) => sense.id === selectedSense
    )

    return (
        <section className="interactive-experience feline-senses-experience">
            <div className="interactive-intro">
                <p className="eyebrow">Discover a different perspective</p>
                <h2>How do cats experience the world?</h2>
                <p>
                    A cat's senses are remarkably different from our own.
                    Explore how they use their senses to understand
                    the world around them.
                </p>
            </div>

            <div className="interactive-content">
                <div className="feline-senses-stage">
                    <p>Senses cat illustration will go here.</p>
                </div>

                <div className="feline-senses-information">
                    <h3>Explore feline senses</h3>

                    <div className="feline-senses-controls">
                        {senses.map((sense) => (
                            <button
                                key={sense.id}
                                type="button"
                                onClick={() => setSelectedSense(sense.id)}
                                aria-pressed={selectedSense === sense.id}
                            >
                                {sense.name}
                            </button>
                        ))}
                    </div>

                    <div className="feline-senses-details" aria-live="polite">
                        <h4>{selectedInfo.name}</h4>
                        <p>{selectedInfo.explanation}</p>
                        <p>{selectedInfo.example}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FelineSensesExplorer
