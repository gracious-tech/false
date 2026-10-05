
// Data for the christian-science page

import type {Religion, Source} from '../common'
import {gq} from '../common'


// The six tenets of Christian Science, as published on its official website
const tenets:Source = {
    label: "christianscience.com, “What a Christian Scientist believes” (the six tenets)",
    url: 'https://www.christianscience.com/what-we-believe/what-a-christian-scientist-believes',
}

// The official website's frequently asked questions
const faq:Source = {
    label: "christianscience.com, “Frequently asked questions”",
    url: 'https://www.christianscience.com/what-we-believe/frequently-asked-questions',
}

// Mary Baker Eddy's textbook, Science and Health with Key to the Scriptures
const science_and_health:Source = {
    label: "Mary Baker Eddy, Science and Health with Key to the Scriptures, “Recapitulation”",
    url: 'https://en.wikisource.org/wiki/'
        + 'Science_and_Health_with_Key_to_the_Scriptures_(1906)/14_Recapitulation',
}


const religion:Religion = {
    slug: 'christian-science',
    name: "Christian Science",
    summary: "Founded in 1866 by Mary Baker Eddy in Boston, Christian Science teaches that"
        + " God is Love and that spiritual understanding brings healing. It is not related"
        + " to Scientology. Christian Scientists use the Bible alongside Eddy's book Science"
        + " and Health with Key to the Scriptures, which reinterprets core Christian"
        + " teaching. The sources below are from the church's official website and Science"
        + " and Health.",
    beliefs: [
        {
            primary: true,
            title: "Matter and sickness are not truly real",
            explanation: "Science and Health teaches that only Spirit is real and that matter,"
                + " including the body, is \"unreal\",[1] and the church's tenets speak of"
                + " \"the nothingness of matter\".[2] Sickness is healed by understanding this.",
            sources: [science_and_health, tenets],
            quote: {
                text: "There is no life, truth, intelligence, nor substance in matter. … Spirit"
                    + " is the real and eternal; matter is the unreal and temporal.",
                source: 1,
            },
            response: "God created a real physical world and called it very good. Jesus came"
                + " in a real body, and suffering and sickness are real, not illusions.",
            verse: "Genesis 1:31",
            see_also: ['John 1:14', 'Luke 24:39', '1 John 4:2-3'],
            further: [gq("What does it mean that God is the Creator?", 'creator-God')],
        },
        {
            primary: true,
            title: "Sin is unreal, and forgiveness means destroying the belief in it",
            explanation: "Christian Science teaches that God forgives sin by destroying it and"
                + " showing evil to be unreal, but that the belief in sin brings suffering as"
                + " long as it lasts.[1]",
            sources: [tenets],
            quote: {
                text: "We acknowledge God’s forgiveness of sin in the destruction of sin and the"
                    + " spiritual understanding that casts out evil as unreal.",
                source: 1,
            },
            response: "Sin is real rebellion against a holy God, not a mistaken belief. It is"
                + " forgiven because Jesus shed his blood for it.",
            verse: "1 John 1:8",
            see_also: ['1 John 1:9', 'Romans 3:23', 'Ephesians 1:7'],
            further: [gq("What is sin?", 'what-is-sin')],
        },
        {
            primary: true,
            title: "Jesus' atonement shows God's love but did not pay for sin",
            explanation: "Christian Science sees Jesus' atonement as evidence of God's love and"
                + " Jesus as the \"Way-shower\" who demonstrated how to overcome sin and"
                + " death,[1] rather than a substitute who bore God's judgement for us.",
            sources: [tenets],
            quote: {
                text: "We acknowledge Jesus’ atonement as the evidence of divine, efficacious"
                    + " Love, unfolding man’s unity with God through Christ Jesus the"
                    + " Way-shower.",
                source: 1,
            },
            response: "Jesus is more than an example. He took the punishment for our sins in"
                + " our place, so that we could be forgiven.",
            verse: "Isaiah 53:5",
            see_also: ['2 Corinthians 5:21', '1 Peter 2:24', 'Romans 3:25'],
            further: [
                gq("What is the substitutionary atonement?", 'substitutionary-atonement'),
            ],
        },
        {
            primary: true,
            title: "The crucifixion and resurrection were lessons, not a bodily victory",
            explanation: "Christian Science teaches that Jesus' crucifixion and resurrection"
                + " served to lift our understanding to spiritual life and the \"nothingness of"
                + " matter\".[1]",
            sources: [tenets],
            quote: {
                text: "We acknowledge that the crucifixion of Jesus and his resurrection served"
                    + " to uplift faith to understand eternal Life, even the allness of Soul,"
                    + " Spirit, and the nothingness of matter.",
                source: 1,
            },
            response: "Jesus truly died for our sins and rose bodily from the grave. If he did"
                + " not, our faith is useless and we are still in our sins.",
            verse: "1 Corinthians 15:17",
            see_also: ['1 Corinthians 15:3-4', 'Luke 24:39', 'Romans 4:25'],
            further: [
                gq("Why is the truth of the bodily resurrection of Jesus Christ so"
                    + " important?", 'bodily-resurrection-Jesus'),
            ],
        },
        {
            title: "Anyone can heal as Jesus did by understanding God's laws",
            explanation: "Christian Scientists usually rely on prayer rather than medicine,"
                + " though they are free to choose medical care. They believe healing follows"
                + " reliably from understanding God's spiritual laws.[1]",
            sources: [faq],
            quote: {
                text: "Anyone is capable of healing the way that Jesus did by learning about"
                    + " God’s divine laws.",
                source: 1,
            },
            response: "God does heal in answer to prayer, but as he wills, not by a law we can"
                + " master. Sometimes he chooses not to heal, and using medicine is not a lack"
                + " of faith.",
            verse: "2 Corinthians 12:9",
            see_also: ['2 Corinthians 12:7-8', '1 Timothy 5:23', 'Colossians 4:14',
                'James 5:14-15'],
            further: [gq("What is Christian Science?", 'Christian-science')],
        },
    ],
}


export default religion
