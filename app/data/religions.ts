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
        slug: 'buddhism',
        name: "Buddhism",
        summary: "A religion founded in India around 500 BC by Siddhartha Gautama, known as the"
            + " Buddha. It teaches that suffering is ended by following a path of right living"
            + " and meditation that leads to enlightenment and release from rebirth.",
        beliefs: [
            {
                belief: "There is no Creator God",
                response: "God created everything that exists, and his power and nature are"
                    + " clearly seen in what he has made.",
                refs: ['Genesis 1:1', 'Psalm 19:1', 'Romans 1:20', 'Revelation 4:11'],
            },
            {
                belief: "There is no lasting self or soul",
                response: "Each person is made in God's image with a soul that continues after"
                    + " death and is known and loved by God individually.",
                refs: ['Genesis 1:27', 'Psalm 139:13-16', 'Matthew 10:28', 'Luke 12:7'],
            },
            {
                belief: "We are reborn again and again",
                response: "Each person lives once, then faces judgement. There is no cycle of"
                    + " rebirth.",
                refs: ['Hebrews 9:27', 'Luke 16:22-23', 'Luke 23:43', '2 Corinthians 5:8'],
            },
            {
                belief: "Karma decides what we deserve",
                response: "Everyone has sinned and deserves judgement, but God offers mercy and"
                    + " forgiveness freely through Christ instead of what we deserve.",
                refs: ['Romans 3:23-24', 'Psalm 103:10-12', 'Romans 6:23', 'Ephesians 1:7'],
            },
            {
                belief: "Suffering is caused by desire",
                response: "Suffering entered the world through sin. Not all desire is wrong;"
                    + " God gives good desires and will one day end suffering completely.",
                refs: ['Genesis 3:17-19', 'Romans 5:12', 'Psalm 37:4', 'Revelation 21:4'],
            },
            {
                belief: "We must save ourselves by our own effort",
                response: "No one can save themselves by good works or discipline. Salvation is"
                    + " a gift of God's grace received by faith in Christ.",
                refs: ['Ephesians 2:8-9', 'Titus 3:5', 'Galatians 2:16', 'Isaiah 64:6'],
            },
            {
                belief: "The goal is nirvana, the end of the self",
                response: "The goal is not to cease to exist but to have eternal life, knowing"
                    + " God and living with him forever in a renewed creation.",
                refs: ['John 17:3', 'Revelation 21:3-4', '1 Corinthians 15:42-44',
                    'John 10:10'],
            },
            {
                belief: "Jesus was one enlightened teacher among many",
                response: "Jesus is God in the flesh and the only way to God. Salvation is found"
                    + " in no one else.",
                refs: ['John 14:6', 'Acts 4:12', 'Colossians 2:9', 'John 1:14'],
            },
            {
                belief: "The real problem is ignorance, not sin",
                response: "Our real problem is sin against a holy God, which needs forgiveness,"
                    + " not merely enlightenment.",
                refs: ['Psalm 51:4', 'Romans 3:10-12', 'Isaiah 59:2', '1 John 1:8-9'],
            },
            {
                belief: "Truth is found within through meditation",
                response: "The human heart is deceitful. Truth is revealed by God in his Word,"
                    + " and we are to meditate on Scripture rather than look within.",
                refs: ['Jeremiah 17:9', 'Proverbs 3:5-6', '2 Timothy 3:16-17', 'Psalm 1:1-2'],
            },
        ],
    },
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
        slug: 'jw',
        name: "Jehovah's Witnesses",
        summary: "A movement founded in the 1870s by Charles Taze Russell and led today by the"
            + " Governing Body of the Watch Tower Society. It denies the Trinity and the deity"
            + " of Christ, and teaches that salvation comes through faithful obedience to"
            + " its organization.",
        beliefs: [
            {
                belief: "Jesus is a created being, not God",
                response: "Jesus is the eternal Word who was with God and was God. He was not"
                    + " created; all things were created through him.",
                refs: ['John 1:1-3', 'John 8:58', 'Colossians 1:16-17', 'Hebrews 1:8',
                    'Titus 2:13'],
            },
            {
                belief: "Jesus is Michael the archangel",
                response: "The Son is far greater than the angels. God commands all the angels"
                    + " to worship him, something never said of any angel.",
                refs: ['Hebrews 1:4-8', 'Hebrews 1:13', 'Jude 9', 'Philippians 2:9-11'],
            },
            {
                belief: "The Holy Spirit is an impersonal force",
                response: "The Holy Spirit is a person who speaks, teaches and can be grieved,"
                    + " and lying to him is lying to God.",
                refs: ['Acts 5:3-4', 'Acts 13:2', 'John 16:13-14', 'Ephesians 4:30'],
            },
            {
                belief: "The Trinity is a pagan teaching",
                response: "There is one God, who exists as Father, Son and Holy Spirit. All"
                    + " three are named together as the one God we are baptised into.",
                refs: ['Deuteronomy 6:4', 'Matthew 28:19', '2 Corinthians 13:14',
                    'John 20:28'],
            },
            {
                belief: "Jesus rose as a spirit, not in his body",
                response: "Jesus rose bodily from the grave. He showed his wounds, ate food and"
                    + " said a spirit does not have flesh and bones as he did.",
                refs: ['Luke 24:39-43', 'John 2:19-21', 'John 20:27', '1 Corinthians 15:17'],
            },
            {
                belief: "Salvation is earned by obedience to the organization",
                response: "Salvation is a free gift received by faith in Christ alone, not"
                    + " earned by works, door-to-door preaching or loyalty to any group.",
                refs: ['Ephesians 2:8-9', 'Titus 3:5', 'Romans 4:5', 'John 6:28-29'],
            },
            {
                belief: "Only 144,000 go to heaven and are born again",
                response: "Every believer must be born again and is a child of God. Heaven is"
                    + " promised to a great multitude from every nation, not a select few.",
                refs: ['John 3:3', 'Galatians 3:26', 'Revelation 7:9', 'Philippians 3:20'],
            },
            {
                belief: "The Watchtower is God's only channel of truth",
                response: "Christ is the only mediator between God and people. The Watchtower"
                    + " has made failed predictions, such as for 1914 and 1975, and Scripture"
                    + " says such a prophet is not from God.",
                refs: ['1 Timothy 2:5', 'Deuteronomy 18:21-22', 'Acts 17:11', '1 John 2:27'],
            },
            {
                belief: "The soul ceases to exist at death and there is no hell",
                response: "The soul continues after death. Believers go to be with Christ and"
                    + " unbelievers face eternal, conscious punishment.",
                refs: ['Matthew 25:46', 'Luke 16:22-24', '2 Corinthians 5:8',
                    'Philippians 1:23'],
            },
            {
                belief: "Blood transfusions are forbidden by God",
                response: "The command concerns eating blood, not receiving medical care. God"
                    + " values human life, and refusing life-saving treatment is not required"
                    + " of believers.",
                refs: ['Leviticus 17:10-12', 'Acts 15:20', 'Mark 3:4', 'John 15:13'],
            },
        ],
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
