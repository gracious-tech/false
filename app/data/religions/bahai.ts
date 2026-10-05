
// Data for the bahai page

import type {Religion, Source} from '../common'
import {gq} from '../common'


// Link to a page of "What Bahá’ís Believe" on bahai.org, the faith's official website
function bahai(label:string, path:string):Source{
    return {label: `bahai.org, “${label}”`, url: `https://www.bahai.org/beliefs/${path}`}
}


const religion:Religion = {
    slug: 'bahai',
    name: "Bahá’í Faith",
    summary: "Founded in 19th-century Persia by Bahá’u’lláh, the Bahá’í Faith teaches that"
        + " God has sent a series of messengers, including Moses, Buddha, Jesus and"
        + " Muhammad, and that Bahá’u’lláh is the latest. Bahá’ís are known for their"
        + " emphasis on the unity of humanity, equality and peace. The sources below are"
        + " from the faith's official website.",
    beliefs: [
        {
            primary: true,
            title: "Bahá’u’lláh is God's messenger for this age",
            explanation: "Bahá’ís believe God has spoken through a series of \"Manifestations"
                + " of God\", ending most recently with the Báb and Bahá’u’lláh,[1] whose"
                + " teachings are for today.[2]",
            sources: [
                bahai("Manifestations of God", 'god-his-creation/revelation/manifestations-god'),
                bahai("The Unknowable God", 'god-his-creation/revelation/unknowable-god'),
            ],
            quote: {
                text: "Abraham, Krishna, Zoroaster, Moses, Buddha, Jesus Christ, Muḥammad,"
                    + " and—in more recent times—the Báb and Bahá’u’lláh.",
                source: 1,
            },
            response: "Jesus is God's final word, not one stage in a series. Any later message"
                + " that changes the gospel is not from God.",
            verse: "Hebrews 1:1-2",
            see_also: ['Galatians 1:8', 'Jude 3', 'Matthew 24:24'],
            further: [gq("What is the Baha'i faith?", 'Bahai-faith')],
        },
        {
            primary: true,
            title: "All the great religions come from the same God",
            explanation: "Bahá’ís teach \"progressive revelation\": each religion's founder was"
                + " sent by the same God to guide humanity in its time, so all religions are"
                + " stages of one faith.[1]",
            sources: [bahai("Manifestations of God",
                'god-his-creation/revelation/manifestations-god')],
            quote: {
                text: "This process—in which the Manifestations of God have successively provided"
                    + " the guidance necessary for humanity’s social and spiritual evolution—is"
                    + " known as “progressive revelation.”",
                source: 1,
            },
            response: "The religions contradict each other on who God is and how to be saved,"
                + " so they cannot all come from him. Jesus is the only way to God.",
            verse: "John 14:6",
            see_also: ['Acts 4:12', '1 John 5:12', 'Galatians 1:6-7'],
            further: [
                gq("Why are there so many religions? Do all religions lead to God?",
                    'so-many-religions'),
            ],
        },
        {
            primary: true,
            title: "Jesus was one Manifestation of God among many",
            explanation: "Bahá’ís honour Jesus as a Manifestation of God, a perfect mirror of"
                + " God's light, but equal to the founders of other religions rather than"
                + " God himself.[1]",
            sources: [bahai("Manifestations of God",
                'god-his-creation/revelation/manifestations-god')],
            quote: {
                text: "These Figures are not simply ordinary people with a greater knowledge than"
                    + " others. Rather they are Manifestations of God.",
                source: 1,
            },
            response: "Jesus is not one reflection of God among many. All the fullness of God"
                + " lives in him in bodily form, and he alone is God's Son.",
            verse: "Colossians 2:9",
            see_also: ['John 1:1', 'John 1:18', 'Hebrews 1:3'],
            further: [gq("Is Jesus God? Why should I believe that Jesus is God?",
                'is-Jesus-God')],
        },
        {
            title: "Heaven and hell are states of the soul, not places",
            explanation: "Bahá’ís teach that heaven and hell are not real places, but describe"
                + " nearness to or distance from God as the soul travels on toward"
                + " perfection.[1]",
            sources: [bahai("Heaven and Hell", 'life-spirit/human-soul/heaven-hell')],
            quote: {
                text: "The Bahá’í teachings state that there is no such physical place as heaven"
                    + " or hell, and emphasise the eternal journey of the soul towards"
                    + " perfection.",
                source: 1,
            },
            response: "Jesus spoke of heaven as a real place he is preparing for his people,"
                + " and of eternal punishment as just as real.",
            verse: "John 14:2",
            see_also: ['Matthew 25:46', 'Revelation 21:1-4', 'Luke 16:22-26'],
            further: [gq("Is hell real? Is hell eternal?", 'hell-real-eternal')],
        },
        {
            title: "We grow closer to God through our own efforts",
            explanation: "Bahá’ís teach that people reflect God's attributes as they cleanse"
                + " their hearts through prayer, study, good conduct and service.[1]",
            sources: [bahai("Human Nature", 'life-spirit/human-soul/human-nature')],
            quote: {
                text: "We are able to reflect divine attributes to the extent that we cleanse the"
                    + " mirrors of our hearts and minds through prayer, the study and application"
                    + " of the sacred scriptures, the acquisition of knowledge, efforts to improve"
                    + " our conduct.",
                source: 1,
            },
            response: "We cannot cleanse our own hearts. We are spiritually dead in sin until"
                + " God, in his mercy, gives us new life in Christ.",
            verse: "Ephesians 2:4-5",
            see_also: ['Titus 3:5', 'Ezekiel 36:26', 'Romans 5:6'],
            further: [gq("Why is salvation by works the predominantly held viewpoint?",
                'salvation-by-works')],
        },
    ],
}


export default religion
