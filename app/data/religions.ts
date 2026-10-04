// Data for each religion/sect page


// A single false belief and the biblical response to it
export interface FalseBelief {
    belief:string
    response:string
    refs:string[]
}


// A religion/sect and its top false beliefs
export interface Religion {
    slug:string
    name:string
    summary:string
    beliefs:FalseBelief[]
}


// Generate placeholder beliefs until real content is written
function placeholder_beliefs():FalseBelief[]{
    return Array.from({length: 10}, (_, i) => ({
        belief: `False belief ${i + 1}`,
        response: "What Scripture teaches instead.",
        refs: [],
    }))
}


// All religions, in the order they are listed on the home page
export const religions:Religion[] = [
    {
        slug: 'catholic',
        name: "Roman Catholicism",
        summary: "",
        beliefs: placeholder_beliefs(),
    },
    {
        slug: 'islam',
        name: "Islam",
        summary: "",
        beliefs: placeholder_beliefs(),
    },
    {
        slug: 'mormon',
        name: "Mormonism",
        summary: "",
        beliefs: placeholder_beliefs(),
    },
]


// Lookup a religion by its URL slug
export function get_religion(slug:string):Religion|undefined{
    return religions.find(r => r.slug === slug)
}
