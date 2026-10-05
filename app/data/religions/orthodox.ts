
// Data for the orthodox page

import type {Religion, Source} from '../common'
import {gq, oca} from '../common'


// Link to a chapter of "The Orthodox Faith", the OCA's official summary of its teaching
function faith(label:string, path:string):Source{
    return oca(`The Orthodox Faith, “${label}”`, `orthodoxy/the-orthodox-faith/${path}`)
}


const religion:Religion = {
    slug: 'orthodox',
    name: "Eastern Orthodoxy",
    summary: "The Eastern Orthodox Church separated from Rome in 1054 and is especially"
        + " strong in Eastern Europe, Russia and the Middle East. Orthodox Christians hold the"
        + " Nicene Creed, the Trinity, and Jesus' full deity, death and bodily resurrection,"
        + " and Protestants share far more with them than with the groups on most other"
        + " pages. The differences are in how a person is saved and what has authority"
        + " alongside the Bible. The sources below are from the Orthodox Church in America.",
    beliefs: [
        {
            primary: true,
            title: "Salvation is a lifelong process, not something we can be sure we have",
            explanation: "Orthodoxy teaches that salvation is a process of being transformed"
                + " into God's likeness (theosis) through faith, the sacraments and our"
                + " cooperation with God, and so rejects the idea that a believer is \"already"
                + " saved\".[1][2]",
            sources: [
                oca("“Hebrews 6:4-6 - Falling Away from the Faith”",
                    'questions/scripture/hebrews-64-6-falling-away-from-the-faith'),
                faith("Incarnation", 'doctrine-scripture/the-symbol-of-faith/incarnation'),
            ],
            quote: {
                text: "Orthodoxy, unlike some Protestant bodies, does not hold to the notion"
                    + " that we are “already saved.” For Orthodox Christians, salvation is a"
                    + " process, not a once-and-done event.",
                source: 1,
            },
            response: "Those who trust Christ are already made right with God and have"
                + " eternal life now. Growing in holiness follows from this, but does not"
                + " decide it.",
            verse: "Romans 5:1",
            see_also: ['Ephesians 2:8-9', 'John 5:24', '1 John 5:13', 'Romans 8:30'],
            further: [
                gq("Eternal security - is it biblical?", 'eternal-security'),
                gq("Why is sola fide important?", 'sola-fide'),
            ],
        },
        {
            primary: true,
            title: "Holy Tradition carries authority alongside the Bible",
            explanation: "Orthodoxy teaches that the Bible holds first place within Holy"
                + " Tradition, which also includes the liturgy, councils, church fathers,"
                + " saints, canon law and icons.[1]",
            sources: [faith("Tradition", 'doctrine-scripture/sources-of-christian-doctrine/'
                + 'tradition')],
            quote: {
                text: "Among the elements which make up the Holy Tradition of the Church, the"
                    + " Bible holds the first place. Next comes the Church’s liturgical life and"
                    + " its prayer, then its dogmatic decisions and the acts of its approved"
                    + " churchly councils.",
                source: 1,
            },
            response: "Scripture alone is God-breathed and is the final authority that every"
                + " tradition, council and teacher must be tested by.",
            verse: "2 Timothy 3:16-17",
            see_also: ['Mark 7:13', 'Acts 17:11', 'Isaiah 8:20'],
            further: [gq("What is sola scriptura?", 'sola-scriptura')],
        },
        {
            primary: true,
            title: "Icons are spiritually necessary and should be venerated",
            explanation: "Orthodoxy teaches that icons are not just pictures but windows to"
                + " God's kingdom, and that they are necessary because God became flesh.[1]"
                + " Orthodox Christians bow before, kiss and pray before them.",
            sources: [faith("Icons", 'worship/the-church-building/icons')],
            quote: {
                text: "It is the Orthodox faith that icons are not only permissible, but are"
                    + " spiritually necessary because “the Word became flesh and dwelt among"
                    + " us.”",
                source: 1,
            },
            response: "God commands us not to bow down to images. Christ's coming in the flesh"
                + " does not change this, and true worship is in spirit and truth.",
            verse: "Exodus 20:4",
            see_also: ['Exodus 20:5', 'John 4:24', '1 John 5:21'],
            further: [
                gq("What are dulia, hyperdulia, and latria?", 'dulia-hyperdulia-latria'),
                gq("What is iconoclasm?", 'iconoclasm'),
            ],
        },
        {
            primary: true,
            title: "Mary's prayers deliver us, and we should pray to the saints",
            explanation: "Orthodox worship constantly asks Mary and the saints to pray for"
                + " believers, and its hymns praise Mary as one whose prayers deliver souls"
                + " from death.[1]",
            sources: [faith("Dormition of the Theotokos",
                'worship/the-church-year/dormition-of-the-theotokos')],
            quote: {
                text: "You were translated to life, O Mother of Life, and by your prayers, you"
                    + " deliver our souls from death.",
                source: 1,
            },
            response: "Only Christ delivers us from death. He is the one mediator between God"
                + " and people, and Scripture never directs prayer to anyone but God.",
            verse: "1 Timothy 2:5",
            see_also: ['Hebrews 7:25', 'Hebrews 4:14-16', 'Matthew 6:9'],
            further: [
                gq("Is prayer to saints / Mary biblical?", 'prayer-saints-Mary'),
            ],
        },
        {
            title: "Mary was always a virgin and was taken bodily into heaven",
            explanation: "Orthodoxy teaches that Mary remained a virgin all her life and that"
                + " after her death she was taken body and soul into heaven.[1]",
            sources: [faith("Dormition of the Theotokos",
                'worship/the-church-year/dormition-of-the-theotokos')],
            quote: {
                text: "Mary has been “assumed” by God into the heavenly kingdom of Christ in the"
                    + " fullness of her spiritual and bodily existence.",
                source: 1,
            },
            response: "Scripture says nothing of Mary being taken into heaven, and it names"
                + " Jesus' brothers and sisters.",
            verse: "Mark 6:3",
            see_also: ['Matthew 1:25', 'Matthew 12:46-47', 'John 7:5'],
            further: [
                gq("What is the Assumption of Mary?", 'Assumption-Mary'),
                gq("Is the perpetual virginity of Mary biblical?", 'perpetual-virginity-Mary'),
            ],
        },
        {
            title: "Baptism is where we are born again",
            explanation: "Orthodoxy teaches that in baptism a person dies to the world and is"
                + " born again into eternal life,[1] so infants are baptised to receive new"
                + " life.",
            sources: [faith("Baptism", 'worship/the-sacraments/baptism')],
            quote: {
                text: "Through the act of immersion, the baptized person dies to this world and"
                    + " is born again in the resurrection of Christ into eternal life.",
                source: 1,
            },
            response: "New birth comes by the Spirit through faith in Christ. Baptism is the"
                + " outward sign of it, and some received the Spirit before they were"
                + " baptised.",
            verse: "John 5:24",
            see_also: ['Acts 10:44-48', 'Ephesians 1:13', 'John 1:12-13'],
            further: [gq("What does it mean to be a born again Christian?", 'born-again')],
        },
        {
            title: "The fullness of the Church is found only in the Orthodox Church",
            explanation: "Orthodoxy teaches that there is only one Church, and that only in"
                + " the Orthodox Church can one fully share in it, while other churches have"
                + " obstacles to true unity with God.[1]",
            sources: [faith("Church", 'doctrine-scripture/the-symbol-of-faith/church')],
            quote: {
                text: "Orthodox Christians believe that in the historical Orthodox Church there"
                    + " exists the full possibility of participating totally in the Church of"
                    + " God.",
                source: 1,
            },
            response: "The one true church is made up of all who trust in Christ, joined to"
                + " him by the Holy Spirit, whatever their denomination.",
            verse: "1 Corinthians 12:13",
            see_also: ['Ephesians 4:4-6', 'Galatians 3:26-28', '1 Corinthians 3:11'],
            further: [gq("Which church is the true church?", 'true-church')],
        },
    ],
}


export default religion
