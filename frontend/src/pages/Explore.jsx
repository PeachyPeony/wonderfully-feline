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
            {
                title: 'What cat ears and eyes tell us',
                slug: 'what-cat-ears-and-eyes-tell-us',
            },
            {
                title: 'Why cats purr and meow',
                slug: 'why-cats-purr-and-meow',
            },
        ],
    },
    {
        name: 'Feline Senses',
        topics: [
            {
                title: 'How cats see the world',
                slug: 'how-cats-see-the-world',
            },
            {
                title: 'The remarkable power of whiskers',
                slug: 'the-remarkable-power-of-whiskers',
            },

        ],
    },
    {
        name: 'Cats & Humans',
        topics: [
            {

                title: 'How cats build trust',
                slug: 'how-cats-build-trust',
            },
            {
                title: 'How cats show affection',
                slug: 'how-cats-show-affection',
            },
        ],
    },
    {
        name: 'Everyday Cat Life',
        topics: [
            {

                title: 'Why cats sleep so much',
                slug: 'why-cats-sleep-so-much',
            },
            {
                title: 'Why play matters to cats',
                slug: 'why-play-matters-to-cats',
            },
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
                                            topic.slug === 'understanding-tail-language' ||
                                            topic.slug === 'what-cat-ears-and-eyes-tell-us' ||
                                            topic.slug === 'why-cats-purr-and-meow' ||
                                            topic.slug === 'how-cats-see-the-world' ||
                                            topic.slug === 'the-remarkable-power-of-whiskers' ||
                                            topic.slug === 'how-cats-build-trust' ||
                                            topic.slug === 'how-cats-show-affection' ||
                                            topic.slug === 'why-cats-sleep-so-much' ||
                                            topic.slug === 'why-play-matters-to-cats' ? (
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