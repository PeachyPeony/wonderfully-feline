import { useParams } from 'react-router'
import { topics } from '../data/topics'

function TopicPage() {
    const { slug } = useParams()
    const topic = topics[slug]

    if (!topic) {
        return <h1>Topic not found</h1>
    }

    return (
        <main className="topic-page">
            <nav className="topic-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span aria-hidden="true">/</span>
                <a href="/explore">Explore</a>
                <span aria-hidden="true">/</span>
                <span>{topic.title}</span>
            </nav>

            <section className="topic-header">
                <p className="eyebrow">{topic.category}</p>

                <h1>{topic.title}</h1>

                <p className="topic-introduction">
                    {topic.introduction}
                </p>
            </section>
            <section className="topic-illustration">
                {topic.image ? (
                    <img
                        src={topic.image}
                        alt={topic.imageAlt}
                        className="topic-image"
                    />
                ) : (
                    <div className="topic-image-placeholder">
                        Topic illustration
                    </div>
                )}

            </section>

            <article className="topic-article">
                {topic.article.map((section) => (
                    <section key={section.heading}>
                        <h2>{section.heading}</h2>
                        {section.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </section>
                ))}
            </article>
            <aside className="topic-fun-fact">
                <h2>Did you know?</h2>

                <p>{topic.funFact}</p>
            </aside>

            <section className="related-topics">
                <h2>Keep exploring</h2>

                <p>You might also enjoy these topics:</p>

                <ul>
                    {topic.relatedTopics.map((relatedTopic) => (
                        <li key={relatedTopic}>
                            <a href={`/topics/${relatedTopic.toLowerCase().replaceAll(' ', '-')}`}>
                                {relatedTopic}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default TopicPage