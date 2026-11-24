import { createContext, useContext, useState, useEffect } from 'react'

const SavedTopicsContext = createContext()

export function SavedTopicsProvider({ children }) {
    const [savedTopics, setSavedTopics] = useState(() => {
        const storedTopics = localStorage.getItem('savedTopics')
        return storedTopics ? JSON.parse(storedTopics) : []
    })

    useEffect(() => {
        localStorage.setItem('savedTopics', JSON.stringify(savedTopics))
    }, [savedTopics])

    const toggleSavedTopic = (slug) => {
        setSavedTopics((currentTopics) =>
            currentTopics.includes(slug)
                ? currentTopics.filter((topic) => topic !== slug)
                : [...currentTopics, slug]
        )
    }

    const isTopicSaved = (slug) => savedTopics.includes(slug)

    return (
        <SavedTopicsContext.Provider value={{ savedTopics, toggleSavedTopic, isTopicSaved }} >
            {children}
        </SavedTopicsContext.Provider>
    )
}

export function useSavedTopics() {
    return useContext(SavedTopicsContext)
}