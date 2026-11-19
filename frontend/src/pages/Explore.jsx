import { Link } from 'react-router'

const categories = [
    {
        name: 'Cat Behaviour',
        topics: [
            {
                title: 'The science behind kneading',
                slug: 'the-science-behind-kneading',
            },
            {
                title: 'The mystery of zoomies',
                slug: 'the-mystery-of-zoomies',
            },
            {
                title: 'Why cats scratch',
                slug: 'why-cats-scratch',
            },
        ],
    },
    {
        name: 'Cat Communication',
        topics: [
            {
                title: 'Understanding tail language',
                slug: 'understanding-tail-language',
            },
            'What cat ears and eyes tell us',
            'Why cats purr and meow',
        ],
    },
    {
        name: 'Feline Senses',
        topics: [
            'How cats see the world',
            'The remarkable power of whiskers',
        ],
    },
    {
        name: 'Cats & Humans',
        topics: [
            'How cats build trust',
            'How cats show affection',
        ],
    },
    {
        name: 'Everyday Cat Life',
        topics: [
            'Why cats sleep so much',
            'Why play matters to cats',
        ],
    },
]

function Explore() {
    return (
        <main className="explore-page">
            <section className="explore-intro">
                <p className="eyebrow">A world of whiskers and wonder</p>
                <h1>Explore the feline world</h1>

                <p>
                    Curious about why cats do the things they do?
                    Discover fascinating behaviours, remarkable senses,
                    and all the little things that make cats so wonderfully unique.
                </p>
            </section>

            <section className="explore-categories">
                <div className="category-heading">
                    <p className="eyebrow">Find your curiosity</p>
                    <h2>What would you like to explore?</h2>
                    <p>
                        Choose a corner of the feline world and discover
                        what makes our furry companions so fascinating.
                    </p>
                </div>
                <div className="topic-list">
                    {categories.map((category) => (
                        <div className="topic-category" key={category.name}>
                            <h3>{category.name}</h3>

                            <ul>
                                {category.topics.map((topic) => (
                                    <li key={typeof topic === 'string' ? topic : topic.slug}>
                                        {typeof topic === 'string' ? (
                                            topic
                                        ) : topic.slug === 'the-science-behind-kneading' ||
                                            topic.slug === 'the-mystery-of-zoomies' ||
                                            topic.slug === 'why-cats-scratch' ||
                                            topic.slug === 'understanding-tail-language' ? (
                                            <Link to={`/topics/${topic.slug}`}>
                                                {topic.title}
                                            </Link>
                                        ) : (
                                            topic.title
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Explore