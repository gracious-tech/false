
// Data for the unitarian page

import type {Religion, Source} from '../common'
import {gq} from '../common'


// Link to a page on uua.org, the official site of the Unitarian Universalist Association
function uua(label:string, path:string):Source{
    return {label: `Unitarian Universalist Association, “${label}”`,
        url: `https://www.uua.org/beliefs/${path}`}
}


const religion:Religion = {
    slug: 'unitarian',
    name: "Unitarian Universalism",
    summary: "Unitarian Universalism grew out of liberal Christian movements that denied the"
        + " Trinity (Unitarians) and taught that everyone will be saved (Universalists). The"
        + " two merged in 1961. Today it welcomes people of any belief or none, united by"
        + " shared values such as justice, equity and love rather than a creed. The sources"
        + " below are from the Unitarian Universalist Association.",
    beliefs: [
        {
            primary: true,
            title: "There is no shared creed, so each person decides what is true",
            explanation: "Unitarian Universalists have no shared creed, and each member is"
                + " free to reach their own beliefs.[1]",
            sources: [uua("What We Believe", 'what-we-believe')],
            quote: {
                text: "Our beliefs are diverse and inclusive. We have no shared creed.",
                source: 1,
            },
            response: "God has spoken and revealed the truth in his word. It is not ours to"
                + " decide, but to receive and believe.",
            verse: "John 17:17",
            see_also: ['2 Timothy 3:16-17', 'Jude 3', 'Isaiah 55:8-9'],
            further: [gq("What is sola scriptura?", 'sola-scriptura')],
        },
        {
            primary: true,
            title: "Any religion, or none, is an equally valid path",
            explanation: "Unitarian Universalists include atheists, Buddhists, Christians,"
                + " Hindus, humanists, Jews, Muslims, pagans and more, and treat each path as"
                + " equally welcome.[1]",
            sources: [uua("What We Believe", 'what-we-believe')],
            quote: {
                text: "We are Unitarian Universalist and: Atheist/Agnostic, Buddhist, Christian,"
                    + " Hindu, Humanist, Jewish, Muslim, Pagan, and many other beliefs.",
                source: 1,
            },
            response: "Eternal life is found only in Jesus. Whoever has the Son has life, and"
                + " whoever does not have the Son does not have life.",
            verse: "1 John 5:12",
            see_also: ['John 14:6', 'Acts 4:12', 'John 3:36'],
            further: [
                gq("Why are there so many religions? Do all religions lead to God?",
                    'so-many-religions'),
            ],
        },
        {
            primary: true,
            title: "Our experience shapes our beliefs more than anything",
            explanation: "Unitarian Universalists think for themselves and see life experience"
                + " as the greatest influence on what they believe.[1]",
            sources: [uua("Who We Are", 'who-we-are')],
            quote: {
                text: "We think for ourselves and recognize that life experience influences our"
                    + " beliefs more than anything.",
                source: 1,
            },
            response: "Our own experience and reasoning can lead us astray. We need God's word"
                + " to show us what is true.",
            verse: "Proverbs 14:12",
            see_also: ['Proverbs 3:5-6', 'Jeremiah 17:9', 'Psalm 119:105'],
            further: [gq("What is Unitarianism?", 'unitarianism')],
        },
    ],
}


export default religion
