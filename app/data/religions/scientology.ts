
// Data for the scientology page

import type {Religion, Source} from '../common'
import {gq} from '../common'


// Link to a question in the official Scientology FAQ
function faq(label:string, path:string):Source{
    return {label: `scientology.org, “${label}”`,
        url: `https://www.scientology.org/faq/${path}.html`}
}


const religion:Religion = {
    slug: 'scientology',
    name: "Scientology",
    summary: "Founded in the 1950s by the science fiction writer L. Ron Hubbard, Scientology"
        + " teaches that each person is an immortal spiritual being (a \"thetan\") who can be"
        + " freed from past trauma through a paid course of counselling called auditing. It"
        + " is not related to Christian Science. The sources below are from the Church of"
        + " Scientology's official website.",
    beliefs: [
        {
            primary: true,
            title: "People are basically good",
            explanation: "Scientology teaches that people are basically good, but that harmful"
                + " acts over many lifetimes have reduced their awareness and goodness.[1]",
            sources: [faq("Does Scientology believe Man is sinful?",
                'scientology-beliefs/does-scientology-believe-man-is-sinful')],
            quote: {
                text: "A fundamental tenet of Scientology is that Man is basically good; that he"
                    + " is seeking to survive; and that his survival depends upon himself and"
                    + " upon his fellows.",
                source: 1,
            },
            response: "No one is good by nature. Everyone has sinned against God, and our"
                + " hearts need to be made new.",
            verse: "Romans 3:10",
            see_also: ['Romans 3:23', 'Jeremiah 17:9', 'Mark 7:21-23'],
            further: [gq("What is original sin?", 'original-sin')],
        },
        {
            primary: true,
            title: "Spiritual freedom comes through auditing",
            explanation: "Scientology teaches that auditing, a form of counselling with an"
                + " auditor, is the only precise route to higher spiritual states, step by"
                + " step up \"the Bridge\".[1][2]",
            sources: [
                faq("What is auditing?", 'scientology-and-dianetics-auditing/what-is-auditing'),
                faq("What is the Bridge in Scientology?",
                    'background-and-basic-principles/what-is-the-bridge-in-scientology'),
            ],
            quote: {
                text: "Only auditing provides a precise route by which individuals may travel to"
                    + " higher states of spiritual awareness.",
                source: 1,
            },
            response: "True spiritual freedom is freedom from sin, and only Jesus can give it."
                + " It is a free gift, not something we work our way up to.",
            verse: "John 8:36",
            see_also: ['John 8:34', 'Galatians 5:1', 'Ephesians 2:8-9'],
            further: [gq("Is Scientology Christian or a cult?", 'scientology-Christian-cult')],
        },
        {
            primary: true,
            title: "We can help ourselves, because the answers are within us",
            explanation: "Scientology teaches that God helps those who help themselves, and"
                + " that each person already has the answers to life's mysteries.[1]",
            sources: [faq("Can’t God be the only one to help Man?",
                'scientology-beliefs/can\'t-god-be-the-only-one-to-help-man')],
            quote: {
                text: "Scientologists take the maxim quite to heart that God helps those who"
                    + " help themselves. They believe that each person has the answers to the"
                    + " mysteries of life.",
                source: 1,
            },
            response: "We cannot save or fix ourselves. We need God, who helps those who"
                + " cannot help themselves and gives wisdom to those who ask him.",
            verse: "Proverbs 3:5",
            see_also: ['John 15:5', 'Jeremiah 10:23', 'Romans 5:6'],
            further: [gq("What is Dianetics?", 'Dianetics')],
        },
        {
            primary: true,
            title: "We are immortal spirits who have lived many past lives",
            explanation: "Scientology teaches that each person is a spiritual being, a"
                + " \"thetan\", who has lived many lives before this one,[1] and whose goal is"
                + " to become free of the body.[2]",
            sources: [
                faq("Reincarnation", 'scientology-beliefs/reincarnation'),
                faq("What is OT?", 'operating-thetan/what-is-ot'),
            ],
            quote: {
                text: "Today in Scientology, many people have certainty that they have lived"
                    + " lives prior to their current one.",
                source: 1,
            },
            response: "Each person lives once, then faces judgement. We are created by God,"
                + " body and soul, and our hope is the resurrection of the body.",
            verse: "Hebrews 9:27",
            see_also: ['Genesis 2:7', '1 Corinthians 15:42-44', 'Luke 23:43'],
            further: [gq("What does the Bible say about reincarnation?", 'reincarnation')],
        },
        {
            title: "Jesus was a great teacher of the past",
            explanation: "Scientology honours Jesus as one of the great religious leaders of the"
                + " past, whose goals it shares.[1] It does not see him as God or as the"
                + " Saviour who died for sin.",
            sources: [faq("What is Scientology’s view of Moses, Jesus, Muhammad, the Buddha and"
                + " other religious figures of the past?",
                'scientology-beliefs/religious-figures-of-the-past')],
            quote: {
                text: "Scientology shares “the goals set for Man by Christ, which are wisdom, good"
                    + " health and immortality.”",
                source: 1,
            },
            response: "Jesus' goal was not to teach self-improvement but to save sinners by"
                + " giving his life for them.",
            verse: "1 Timothy 1:15",
            see_also: ['Mark 10:45', 'John 14:6', 'John 1:1'],
            further: [gq("Is Jesus God? Why should I believe that Jesus is God?",
                'is-Jesus-God')],
        },
        {
            title: "There is no set teaching about who God is",
            explanation: "Scientology speaks of a Supreme Being, but has no fixed teaching about"
                + " God and leaves each member to reach their own understanding.[1]",
            sources: [faq("What is the concept of God in Scientology?",
                'scientology-beliefs/what-is-the-concept-of-god-in-scientology')],
            quote: {
                text: "Unlike religions with Judeo-Christian origins, the Church of Scientology"
                    + " has no set dogma concerning God that it imposes on its members.",
                source: 1,
            },
            response: "God has made himself known, above all in Jesus. Knowing him truly is"
                + " eternal life, not a matter of personal opinion.",
            verse: "John 1:18",
            see_also: ['John 17:3', 'Hebrews 1:1-3', 'John 14:9'],
            further: [gq("Is Scientology Christian or a cult?", 'scientology-Christian-cult')],
        },
    ],
}


export default religion
