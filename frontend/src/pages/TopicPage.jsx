function TopicPage() {
    return (
        <main className="topic-page">
            <nav className="topic-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span aria-hidden="true">/</span>
                <a href="/explore">Explore</a>
                <span aria-hidden="true">/</span>
                <span>Topic title</span>
            </nav>

            <section className="topic-header">
                <p className="eyebrow">Cat Behaviour</p>

                <h1>The science behind kneading</h1>

                <p className="topic-introduction">
                    Ever wondered why cats rhythmically push their paws against
                    soft surfaces? This familiar behaviour has some fascinating
                    explanations.
                </p>
            </section>
            <section className="topic-image-placeholder">

            </section>

            <article className="topic-article">
                <section>
                    <h2>Why do cats knead?</h2>

                    <p>
                        Cats often knead by rhythmically pressing their paws
                        against soft surfaces. While it might look like a
                        simple habit, this behaviour has roots in kittenhood
                        and can continue throughout a cat's life.
                    </p>
                </section>
                <section>
                    <h2>A behaviour that begins in kittenhood</h2>

                    <p>
                        Kittens knead their mother's belly while nursing.
                        The gentle pushing movement helps stimulate milk
                        flow. Many cats carry this comforting behaviour
                        into adulthood.
                    </p>
                </section>
            </article>
            <aside className="topic-fun-fact">
                <h2>Did you know?</h2>

                <p>
                    Cats have scent glands in their paws, so kneading may
                    also help them leave their scent behind.
                </p>
            </aside>

            <section className="related-topics">
                <h2>Keep exploring</h2>

                <p>You might also enjoy these topics:</p>

                <ul>
                    <li>Why cats scratch</li>
                    <li>The mystery of zoomies</li>
                    <li>Why cats sleep so much</li>
                </ul>
            </section>
        </main>
    )
}

export default TopicPage