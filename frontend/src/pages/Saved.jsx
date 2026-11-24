import { Link } from 'react-router'
import { topics } from '../data/topics'
import { useSavedTopics } from '../context/SavedTopicsContext'

function Saved() {
    const { savedTopics, toggleSavedTopic } = useSavedTopics()

    const savedTopicDetails = savedTopics.map((slug) => ({
        slug,
        ...topics[slug],
    }))
    return (
        <main className="saved-page">
            <h1>Saved</h1>
            <p>Your favourite cat topics will find a home here.</p>

            {savedTopicDetails.length === 0 ? (
                <p>You haven't saved any topics yet.</p>
            ) : (
                <div className="saved-topics">
                    {savedTopicDetails.map((topic) => (
                        <article className="saved-topic" key={topic.slug}>
                            <h2>
                                <Link to={`/topics/${topic.slug}`}>
                                    {topic.title
                                    }</Link>
                            </h2>

                            <p>{topic.category}</p>
                            <button type="button" onClick={() => toggleSavedTopic(topic.slug)}>
                                Remove from saved
                            </button>
                        </article>
                    ))}
                </div>
            )}
        </main>
    )
}

export default Saved