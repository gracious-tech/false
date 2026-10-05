
// Data for the buddhism page

import type {Religion} from '../common'
import {sutta, gq} from '../common'


const religion:Religion = {
    slug: 'buddhism',
    name: "Buddhism",
    summary: "A religion founded in India around 500 BC by Siddhartha Gautama, known as the"
        + " Buddha. It teaches that suffering is ended by following a path of right living"
        + " and meditation that leads to enlightenment and release from rebirth. Buddhism"
        + " has no single authority, so the sources below are from its oldest scriptures,"
        + " the Pali Canon.",
    beliefs: [
        {
            primary: true,
            title: "There is no Creator God",
            explanation: "The Buddha rejected the view that what we experience is the work of"
                + " a creator God, and taught that it comes from our own past and present"
                + " actions.[1] Buddhism has no place for a personal God we must answer to.",
            sources: [sutta("Aṅguttara Nikāya 3.61, Sectarian Tenets", 'an3.61')],
            quote: {
                text: "Those who believe that God Almighty’s creative power is the most"
                    + " important thing have no enthusiasm, no effort, no idea that there are"
                    + " things that should and should not be done.",
                source: 1,
            },
            response: "God created everything that exists, and his power and nature are"
                + " clearly seen in what he has made. We are accountable to him.",
            verse: "Genesis 1:1",
            see_also: ['Psalm 19:1', 'Romans 1:20', 'Revelation 4:11'],
            further: [
                gq("What does it mean that God is the Creator?", 'creator-God'),
            ],
        },
        {
            primary: true,
            title: "Karma decides what we deserve",
            explanation: "Buddhism teaches that our deeds (karma) determine our future, in"
                + " this life and the next.[1] There is no one who can forgive or cancel what"
                + " our deeds have earned.",
            sources: [sutta("Majjhima Nikāya 135, The Shorter Analysis of Deeds", 'mn135')],
            quote: {
                text: "Sentient beings are the owners of their deeds and heir to their deeds."
                    + " Deeds are their womb, their relative, and their refuge.",
                source: 1,
            },
            response: "Everyone has sinned and deserves judgement, but God offers mercy and"
                + " forgiveness freely through Christ instead of what we deserve.",
            verse: "Psalm 103:10",
            see_also: ['Romans 3:23-24', 'Ephesians 1:7', 'Romans 6:23'],
            further: [
                gq("What does the Bible say about karma?", 'karma'),
            ],
        },
        {
            primary: true,
            title: "We must save ourselves by our own effort",
            explanation: "The Buddha taught that each person must purify themselves, and"
                + " that no one else can do it for them.[1] He only shows the way.[2] Some"
                + " later schools, such as Pure Land, rely on the help of a Buddha, but none"
                + " look to the grace of a Creator God.",
            sources: [
                sutta("Dhammapada 165", 'dhp157-166'),
                sutta("Dhammapada 276", 'dhp273-289'),
            ],
            quote: {
                text: "Purity and impurity are personal matters, no one can purify another.",
                source: 1,
            },
            response: "No one can save themselves by good works or discipline. Salvation is"
                + " a gift of God's grace received by faith in Christ.",
            verse: "Ephesians 2:8-9",
            see_also: ['Titus 3:5', 'Galatians 2:16', 'Isaiah 64:6'],
            further: [
                gq("Why is salvation by works the predominantly held viewpoint?",
                    'salvation-by-works'),
            ],
        },
        {
            primary: true,
            title: "Refuge is found in the Buddha and his teaching",
            explanation: "Buddhists take refuge in the Buddha, his teaching and the community"
                + " of monks, which is called the supreme refuge that releases from all"
                + " suffering.[1] Many Buddhists respect Jesus as a wise teacher, but not as"
                + " the only way to God.",
            sources: [sutta("Dhammapada 190–192", 'dhp179-196')],
            quote: {
                text: "Such refuge is a sanctuary, it is the supreme refuge. By going to that"
                    + " refuge, you’re released from all suffering.",
                source: 1,
            },
            response: "Jesus is God in the flesh and the only way to God. Salvation is found"
                + " in no one else.",
            verse: "John 14:6",
            see_also: ['Acts 4:12', 'Colossians 2:9', 'John 1:14'],
            further: [
                gq("Is Jesus the only way to heaven?", 'Jesus-only-way'),
            ],
        },
        {
            title: "There is no lasting self or soul",
            explanation: "The Buddha taught that nothing in a person, body or mind, is a"
                + " permanent, unchanging self. A person is a changing process rather than a"
                + " soul.[1]",
            sources: [sutta("Saṃyutta Nikāya 22.59, The Characteristic of Not-Self",
                'sn22.59')],
            quote: {text: "Mendicants, form is not-self.", source: 1},
            response: "Each person is made in God's image with a soul that continues after"
                + " death and is known and loved by God individually.",
            verse: "Genesis 1:27",
            see_also: ['Psalm 139:13-16', 'Matthew 10:28', 'Luke 12:7'],
            further: [
                gq("What is the difference between the soul and spirit of humanity?",
                    'soul-spirit'),
            ],
        },
        {
            title: "We are reborn again and again",
            explanation: "Buddhism teaches that beings pass through countless lives in a"
                + " cycle of rebirth with no known beginning.[1] It is not a soul moving to a"
                + " new body, but a stream of cause and effect that continues after death.",
            sources: [sutta("Saṃyutta Nikāya 15.3, Tears", 'sn15.3')],
            quote: {
                text: "Mendicants, this transmigration has no known beginning.",
                source: 1,
            },
            response: "Each person lives once, then faces judgement. There is no cycle of"
                + " rebirth.",
            verse: "Hebrews 9:27",
            see_also: ['Luke 16:22-23', 'Luke 23:43', '2 Corinthians 5:8'],
            further: [
                gq("What does the Bible say about reincarnation?", 'reincarnation'),
            ],
        },
        {
            title: "Suffering is caused by craving, not by sin",
            explanation: "The second of the Four Noble Truths says the origin of suffering is"
                + " craving and clinging, and that suffering ends when craving ends.[1]",
            sources: [sutta("Saṃyutta Nikāya 56.11, Rolling Forth the Wheel of Dhamma",
                'sn56.11')],
            quote: {
                text: "It’s the craving that leads to future lives, mixed up with relishing"
                    + " and greed, taking pleasure there wherever it alights.",
                source: 1,
            },
            response: "Suffering and death entered the world through sin against God. The"
                + " answer is not to end desire but to be reconciled to God, who will one"
                + " day end suffering completely.",
            verse: "Romans 5:12",
            see_also: ['Genesis 3:17-19', 'Psalm 37:4', 'Revelation 21:4'],
            further: [
                gq("What are the Four Noble Truths?", 'Four-Noble-Truths'),
                gq("What is original sin?", 'original-sin'),
            ],
        },
        {
            title: "The goal is nirvana, release from rebirth",
            explanation: "The goal of Buddhism is nirvana (\"extinguishment\"), the ending of"
                + " greed, hate and delusion and release from rebirth.[1] Buddhists do not"
                + " call it simply ceasing to exist, but it is not life with God either.[2]",
            sources: [
                sutta("Saṃyutta Nikāya 38.1, A Question About Extinguishment", 'sn38.1'),
                sutta("Majjhima Nikāya 72, With Vacchagotta on Fire", 'mn72'),
            ],
            quote: {
                text: "The ending of greed, hate, and delusion is called extinguishment.",
                source: 1,
            },
            response: "The goal is eternal life, knowing God personally and living with him"
                + " forever in a renewed creation.",
            verse: "John 17:3",
            see_also: ['Revelation 21:3-4', '1 Corinthians 15:42-44', 'John 10:10'],
            further: [
                gq("What is the concept of Nirvana in Buddhism?", 'Nirvana-in-Buddhism'),
            ],
        },
        {
            title: "The real problem is ignorance, not sin",
            explanation: "Buddhism traces suffering back to ignorance, the first link in the"
                + " chain that keeps us in the cycle of rebirth.[1]",
            sources: [sutta("Saṃyutta Nikāya 12.1, Dependent Origination", 'sn12.1')],
            quote: {
                text: "Ignorance is a requirement for choices.",
                source: 1,
            },
            response: "Our real problem is sin against a holy God, which needs forgiveness,"
                + " not merely enlightenment.",
            verse: "Romans 3:23",
            see_also: ['Psalm 51:4', 'Isaiah 59:2', '1 John 1:8-9'],
            further: [
                gq("What is sin?", 'what-is-sin'),
            ],
        },
        {
            title: "Truth is confirmed by personal experience",
            explanation: "The Buddha told people not to accept teachings just because of"
                + " scripture or authority, but to test them for themselves.[1] Insight is"
                + " gained through meditation and practice, not revealed by God.",
            sources: [sutta("Aṅguttara Nikāya 3.65, With the Kālāmas", 'an3.65')],
            quote: {
                text: "Don’t go by oral transmission, don’t go by lineage, don’t go by"
                    + " testament, don’t go by canonical authority … But when you know for"
                    + " yourselves …",
                source: 1,
            },
            response: "The human heart is deceitful. Truth is revealed by God in his Word,"
                + " and our experience is to be tested by it, not the other way around.",
            verse: "Jeremiah 17:9",
            see_also: ['Proverbs 3:5-6', '2 Timothy 3:16-17', 'Psalm 1:1-2'],
            further: [
                gq("What is sola scriptura?", 'sola-scriptura'),
                gq("What is Christian meditation?", 'Christian-meditation'),
            ],
        },
    ],
}


export default religion
