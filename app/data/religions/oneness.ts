
// Data for the oneness page

import type {Religion, Source} from '../common'
import {gq} from '../common'


// The official statement of beliefs of the United Pentecostal Church International
const beliefs:Source = {
    label: "United Pentecostal Church International, “Our Beliefs”",
    url: 'https://upci.org/our-beliefs/',
}

// The UPCI's official explanation of Oneness Pentecostalism
const oneness:Source = {
    label: "United Pentecostal Church International, “Oneness Pentecostalism”",
    url: 'https://upci.org/oneness-pentecostalism/',
}


const religion:Religion = {
    slug: 'oneness',
    name: "Oneness Pentecostalism",
    summary: "Oneness Pentecostals, the largest group being the United Pentecostal Church"
        + " International, began in 1916. They believe the Bible is God's word, that Jesus is"
        + " God in the flesh, and that salvation is by grace through faith in his death and"
        + " resurrection. But they deny the Trinity and teach that the new birth comes"
        + " through baptism in Jesus' name and speaking in tongues. The sources below are"
        + " from the UPCI's official website.",
    beliefs: [
        {
            primary: true,
            title: "God is one person who appears as Father, Son and Spirit",
            explanation: "Oneness Pentecostals believe Jesus is the one God, who revealed"
                + " himself as Father, in the Son and as the Holy Spirit,[1] rather than God"
                + " existing as three distinct persons.",
            sources: [beliefs],
            quote: {
                text: "There is one God, who has revealed Himself as Father; through His Son, in"
                    + " redemption; and as the Holy Spirit, by emanation.",
                source: 1,
            },
            response: "There is one God, but the Father, Son and Spirit are distinct persons"
                + " who love and speak to one another, and were all present at once at"
                + " Jesus' baptism.",
            verse: "Matthew 3:16-17",
            see_also: ['John 17:5', 'John 14:16', 'Hebrews 1:8-9', 'Matthew 28:19'],
            further: [
                gq("What are the beliefs of Jesus only / oneness Pentecostals?",
                    'oneness-Jesus-only'),
                gq("What does the Bible teach about the Trinity?", 'Trinity-Bible'),
            ],
        },
        {
            primary: true,
            title: "We are born again through baptism in Jesus' name",
            explanation: "Oneness Pentecostals teach that salvation is by grace through faith,"
                + " but that faith is expressed and the new birth received by obeying Acts"
                + " 2:38: repentance, baptism in the name of Jesus (not \"Father, Son and Holy"
                + " Spirit\") and the gift of the Spirit.[1][2]",
            sources: [oneness, beliefs],
            quote: {
                text: "The application of grace and the expression of faith come as a person"
                    + " obeys Acts 2:38, thereby receiving the new birth promised by Jesus.",
                source: 1,
            },
            response: "We receive the Spirit and new birth when we believe in Christ. Baptism"
                + " follows as a sign of it, and no particular wording is needed to make it"
                + " valid.",
            verse: "Ephesians 1:13",
            see_also: ['Acts 10:43-47', 'John 3:16', '1 Corinthians 1:17'],
            further: [
                gq("What is the United Pentecostal Church?", 'United-Pentecostal-Church'),
                gq("What does it mean to be a born again Christian?", 'born-again'),
            ],
        },
        {
            primary: true,
            title: "Speaking in tongues is the sign of receiving the Spirit",
            explanation: "Oneness Pentecostals teach that receiving the Holy Spirit, part of"
                + " the new birth, is always first shown by speaking in tongues.[1]",
            sources: [beliefs],
            quote: {
                text: "We obey the gospel … by repentance (death to sin), water baptism in the"
                    + " name of Jesus Christ (burial), and the baptism of the Holy Spirit with"
                    + " the initial sign of speaking in tongues.",
                source: 1,
            },
            response: "Every believer has the Holy Spirit, but the Spirit gives different gifts"
                + " to different people. Not every believer speaks in tongues.",
            verse: "1 Corinthians 12:30",
            see_also: ['1 Corinthians 12:7-11', 'Romans 8:9', 'Galatians 3:2'],
            further: [gq("Is speaking in tongues evidence for having the Holy Spirit?",
                'tongues-Holy-Spirit')],
        },
    ],
}


export default religion
