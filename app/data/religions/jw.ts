
// Data for the jw page

import type {Religion} from '../common'
import {jw, gq} from '../common'


const religion:Religion = {
    slug: 'jw',
    name: "Jehovah's Witnesses",
    summary: "A movement founded in the 1870s by Charles Taze Russell and led today by the"
        + " Governing Body in Warwick, New York. It denies the Trinity and the deity of"
        + " Christ. The sources below are from jw.org, its official website.",
    beliefs: [
        {
            primary: true,
            title: "Jesus is a created being, not God",
            explanation: "Jehovah's Witnesses teach that Jesus was God's first creation,"
                + " made before everything else,[1] and that he is not Almighty God.[2]",
            sources: [
                jw("Why Is Jesus Called the Son of God?",
                    'bible-teachings/questions/jesus-son-of-god'),
                jw("Is Jesus Almighty God?", 'bible-teachings/questions/is-jesus-almighty'),
            ],
            quote: {
                text: "God created Jesus before he created anything else.",
                source: 1,
            },
            response: "Jesus is the eternal Word who was with God and was God. He was not"
                + " created; all things were created through him.",
            verse: "John 1:3",
            see_also: [
                'John 1:1', 'John 8:58', 'Colossians 1:16-17', 'Hebrews 1:8', 'Titus 2:13',
            ],
            further: [
                gq("Was Jesus created?", 'was-Jesus-created'),
                gq("What does it mean that Jesus is the “firstborn” over Creation?",
                    'Jesus-first-born'),
            ],
        },
        {
            primary: true,
            title: "The Trinity is not biblical",
            explanation: "Jehovah's Witnesses reject the Trinity,[1] and have done so since"
                + " their earliest publications.[2]",
            sources: [
                jw("Is God a Trinity?", 'bible-teachings/questions/trinity'),
                jw("Have Jehovah’s Witnesses Changed the Bible to Fit Their Beliefs?",
                    'jehovahs-witnesses/faq/changed-bible-beliefs'),
            ],
            quote: {
                text: "We reject as totally unscriptural, the teaching that these are three"
                    + " Gods in one person or, as some put it, one God in three persons.",
                source: 2,
            },
            response: "There is one God, who exists as Father, Son and Holy Spirit. All"
                + " three share the one name we are baptised into.",
            verse: "Matthew 28:19",
            see_also: ['Deuteronomy 6:4', '2 Corinthians 13:14', 'John 20:28'],
            further: [
                gq("What does the Bible teach about the Trinity?", 'Trinity-Bible'),
            ],
        },
        {
            primary: true,
            title: "Salvation depends on our continued obedience",
            explanation: "Jehovah's Witnesses teach that faith must be shown by obeying"
                + " Jesus' commands to gain salvation, and that someone who has been saved"
                + " can still lose it.[1]",
            sources: [jw("What Does the Bible Say About Salvation?",
                'bible-teachings/questions/what-is-salvation')],
            quote: {
                text: "To gain salvation, you must exercise faith in Jesus and demonstrate"
                    + " that faith by obeying his commands.",
                source: 1,
            },
            response: "Salvation is a free gift received by faith in Christ, and those who"
                + " belong to him are kept safe by him, not by their own performance.",
            verse: "John 10:28",
            see_also: ['Ephesians 2:8-9', 'Romans 4:5', 'John 6:28-29'],
            further: [
                gq("Eternal security - is it biblical?", 'eternal-security'),
            ],
        },
        {
            primary: true,
            title: "The Governing Body is Christ's channel of truth",
            explanation: "Jehovah's Witnesses teach that Jesus feeds his followers through"
                + " \"the faithful and discreet slave\", which they identify as their"
                + " Governing Body.[1][2] They admit it is not infallible, but members are"
                + " expected to follow its direction.[3]",
            sources: [
                {
                    label: "The Watchtower, July 15, 2013, “Who Really Is the Faithful and"
                        + " Discreet Slave?”",
                    url: 'https://www.jw.org/en/library/magazines/w20130715/'
                        + 'who-is-faithful-discreet-slave/',
                },
                jw("What Is the Governing Body of Jehovah’s Witnesses?",
                    'jehovahs-witnesses/faq/governing-body-jw-helpers'),
                {
                    label: "The Watchtower, February 2017, “Who Is Leading God’s People"
                        + " Today?”",
                    url: 'https://www.jw.org/en/library/magazines/'
                        + 'watchtower-study-february-2017/who-is-leading-gods-people-today/',
                },
            ],
            quote: {
                text: "That faithful slave is the channel through which Jesus is feeding his"
                    + " true followers in this time of the end.",
                source: 1,
            },
            response: "Christ is the only mediator, and every believer is to test all"
                + " teaching against Scripture, not accept it because of who teaches it.",
            verse: "Acts 17:11",
            see_also: ['1 Timothy 2:5', '1 John 2:27', '1 Thessalonians 5:21'],
            further: [
                gq("Who are the Jehovah’s Witnesses and what are their beliefs?",
                    'Jehovahs-Witnesses'),
            ],
        },
        {
            title: "Jesus is Michael the archangel",
            explanation: "Jehovah's Witnesses teach that Michael the archangel is Jesus,"
                + " both before and after his life on earth.[1]",
            sources: [jw("Who Is the Archangel Michael?",
                'bible-teachings/questions/archangel-michael')],
            quote: {
                text: "Michael … is evidently a name given to Jesus before and after his life"
                    + " on earth.",
                source: 1,
            },
            response: "The Son is far greater than the angels. God commands all the angels"
                + " to worship him, something never said of any angel.",
            verse: "Hebrews 1:6",
            see_also: ['Hebrews 1:4-5', 'Hebrews 1:13', 'Jude 9'],
            further: [
                gq("Is Jesus Michael the archangel?", 'Jesus-Michael-archangel'),
            ],
        },
        {
            title: "The Holy Spirit is an impersonal force",
            explanation: "Jehovah's Witnesses teach that the holy spirit is not a person but"
                + " God's power in action.[1]",
            sources: [jw("What Is the Holy Spirit?",
                'bible-teachings/questions/what-is-the-holy-spirit')],
            quote: {
                text: "The holy spirit is God’s power in action, his active force.",
                source: 1,
            },
            response: "The Holy Spirit is a person who speaks, teaches and can be grieved,"
                + " and lying to him is lying to God.",
            verse: "Acts 5:3-4",
            see_also: ['Acts 13:2', 'John 16:13-14', 'Ephesians 4:30'],
            further: [
                gq("Is the Holy Spirit a person?", 'Holy-Spirit-person'),
            ],
        },
        {
            title: "Jesus rose as a spirit, not in his body",
            explanation: "Jehovah's Witnesses teach that Jesus was raised as a spirit"
                + " creature and did not take back his body.[1]",
            sources: [jw("After Jesus’ Resurrection, Was His Body Flesh or Spirit?",
                'bible-teachings/questions/jesus-body')],
            quote: {
                text: "Jesus’ own words showed that he would not be resurrected with his"
                    + " flesh-and-blood body.",
                source: 1,
            },
            response: "Jesus rose bodily from the grave. He showed his wounds, ate food and"
                + " said a spirit does not have flesh and bones as he did.",
            verse: "Luke 24:39",
            see_also: ['Luke 24:40-43', 'John 2:19-21', 'John 20:27'],
            further: [
                gq("Why is the truth of the bodily resurrection of Jesus Christ so important?",
                    'bodily-resurrection-Jesus'),
            ],
        },
        {
            title: "Only 144,000 go to heaven and are born again",
            explanation: "Jehovah's Witnesses teach that only 144,000 go to heaven,[1] and"
                + " that most Christians are not born again but hope to live on earth.[2]",
            sources: [
                jw("Who Goes to Heaven?", 'bible-teachings/questions/go-to-heaven'),
                jw("What Does It Mean to Be Born Again?",
                    'bible-teachings/questions/what-does-it-mean-to-be-born-again'),
            ],
            quote: {
                text: "Misconception: A person must be born again to gain salvation or to be"
                    + " a Christian.",
                source: 2,
            },
            response: "Every believer must be born again and is a child of God. Heaven is"
                + " promised to a great multitude from every nation, not a select few.",
            verse: "Revelation 7:9",
            see_also: ['John 3:3', 'Galatians 3:26', 'Philippians 3:20'],
            further: [
                gq("What do the Jehovah’s Witnesses believe about the 144,000 and a"
                    + " heavenly/earthly hope?",
                    'Jehovahs-Witnesses-144000'),
                gq("What does it mean to be a born again Christian?", 'born-again'),
            ],
        },
        {
            title: "The dead cease to exist and there is no hell",
            explanation: "Jehovah's Witnesses teach that the soul dies,[1] and that hell is"
                + " simply the grave, where the dead no longer exist until God resurrects"
                + " them. The wicked are not punished forever but destroyed.[2]",
            sources: [
                jw("What Is a Soul?", 'bible-teachings/questions/what-is-a-soul'),
                jw("Is Hell Real?", 'bible-teachings/questions/what-is-hell'),
            ],
            quote: {
                text: "The Bible shows that people in “the Grave” are in a state of"
                    + " nonexistence.",
                source: 2,
            },
            response: "The soul continues after death. Believers go to be with Christ and"
                + " unbelievers face eternal punishment.",
            verse: "Matthew 25:46",
            see_also: ['Luke 16:22-24', '2 Corinthians 5:8', 'Philippians 1:23'],
            further: [
                gq("What does the Bible say about soul sleep?", 'soul-sleep'),
                gq("Is hell real? Is hell eternal?", 'hell-real-eternal'),
            ],
        },
        {
            title: "Blood transfusions are forbidden by God",
            explanation: "Jehovah's Witnesses seek good medical care but refuse transfusions"
                + " of whole blood or its main components, even to save a life, because"
                + " they believe the Bible's command to abstain from blood applies to"
                + " them.[1][2]",
            sources: [
                jw("What Does the Bible Say About Blood Transfusions?",
                    'bible-teachings/questions/bible-about-blood-transfusion'),
                jw("Why Don’t Jehovah’s Witnesses Accept Blood Transfusions?",
                    'jehovahs-witnesses/faq/jehovahs-witnesses-why-no-blood-transfusions'),
            ],
            quote: {
                text: "The Bible commands that we not ingest blood. So we should not accept"
                    + " whole blood or its primary components in any form, whether offered as"
                    + " food or as a transfusion.",
                source: 1,
            },
            response: "The command concerns eating blood, not receiving medical care. God"
                + " values human life, and saving a life is never against his law.",
            verse: "Mark 3:4",
            see_also: ['Leviticus 17:10-12', 'Acts 15:20', 'John 15:13'],
            further: [
                gq("Why do Jehovah’s Witnesses refuse blood transfusions?",
                    'blood-transfusions'),
            ],
        },
    ],
}


export default religion
