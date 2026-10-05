
// Data for the sikhism page

import type {Religion, Source} from '../common'
import {gq} from '../common'


// Link to a page (ang) of the Guru Granth Sahib on SriGranth.org (translation by Sant Singh
// Khalsa)
function granth(page:number, label:string):Source{
    return {label: `Guru Granth Sahib, page ${page}${label ? `, ${label}` : ''}`,
        url: `https://www.srigranth.org/servlet/gurbani.gurbani?Action=Page&Param=${page}`}
}


const religion:Religion = {
    slug: 'sikhism',
    name: "Sikhism",
    summary: "Founded by Guru Nanak around 1500 in the Punjab region of India, Sikhism teaches"
        + " devotion to one Creator God, equality of all people, honest work and service to"
        + " others. Sikhs follow the teachings of ten Gurus, recorded in their scripture, the"
        + " Guru Granth Sahib. The sources below are from the Guru Granth Sahib.",
    beliefs: [
        {
            primary: true,
            title: "God is never born, so he never became a man",
            explanation: "The opening words of the Sikh scripture describe God as \"Beyond"
                + " Birth\" (ajooni),[1] so Sikhs reject the idea that God has ever been born"
                + " as a human being.",
            sources: [granth(1, "Mool Mantar")],
            quote: {
                text: "One Universal Creator God. The Name Is Truth. Creative Being"
                    + " Personified. No Fear. No Hatred. Image Of The Undying, Beyond Birth,"
                    + " Self-Existent.",
                source: 1,
            },
            response: "God is eternal and was never created, but out of love the eternal Son"
                + " took on human flesh and was born as Jesus.",
            verse: "John 1:14",
            see_also: ['John 1:1', 'Philippians 2:6-7', 'Colossians 2:9'],
            further: [gq("Is Jesus God in the flesh? Why is it important that Jesus is God in"
                + " the flesh?", 'God-in-the-flesh')],
        },
        {
            primary: true,
            title: "We wander through countless births according to our deeds",
            explanation: "Sikh scripture teaches that those who turn from God wander through"
                + " countless lives, reaping what they have sown.[1]",
            sources: [granth(176, "")],
            quote: {
                text: "They wander lost through countless incarnations; this is their"
                    + " preordained destiny. As they plant, so shall they harvest.",
                source: 1,
            },
            response: "Each person lives once, then faces judgement. There is no cycle of"
                + " rebirth.",
            verse: "Hebrews 9:27",
            see_also: ['Luke 16:22-23', 'Luke 23:43', '2 Corinthians 5:8'],
            further: [gq("What does the Bible say about reincarnation?", 'reincarnation')],
        },
        {
            primary: true,
            title: "We reach God by meditating on his Name",
            explanation: "Sikh scripture teaches that this human life is our chance to meet God,"
                + " by meditating on his Name (Naam) in the company of the holy, and that"
                + " nothing else will work.[1]",
            sources: [granth(12, "")],
            quote: {
                text: "This human body has been given to you. This is your chance to meet the"
                    + " Lord of the Universe. Nothing else will work. Join the Saadh Sangat, the"
                    + " Company of the Holy; vibrate and meditate on the Jewel of the Naam.",
                source: 1,
            },
            response: "God's saving name is Jesus. We come to God not by meditation but by"
                + " calling on Jesus, who died for our sins.",
            verse: "Acts 4:12",
            see_also: ['Romans 10:13', 'John 14:6', 'Philippians 2:9-11'],
            further: [gq("Is Jesus the only way to heaven?", 'Jesus-only-way')],
        },
        {
            title: "God is revealed through the Guru",
            explanation: "Sikhs believe God is revealed through the Guru's word, now found in"
                + " the Guru Granth Sahib, which Sikhs honour as their living Guru.[1]",
            sources: [granth(12, "")],
            quote: {
                text: "The Lord is revealed through the Gurmukh, the Living Expression of the"
                    + " Guru’s Word.",
                source: 1,
            },
            response: "God has revealed himself fully in his Son, Jesus. Whoever has seen"
                + " Jesus has seen the Father.",
            verse: "John 14:9",
            see_also: ['Hebrews 1:1-3', 'John 1:18', 'Colossians 1:15'],
            further: [gq("What is Sikhism?", 'Sikhism')],
        },
    ],
}


export default religion
