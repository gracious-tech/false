
// Data for the hinduism page

import type {Religion, Source} from '../common'
import {gq} from '../common'


// Link to a verse of the Bhagavad Gita (translation by Swami Mukundananda), like "2.22"
function gita(ref:string):Source{
    const [chapter, verse] = ref.split('.')
    return {label: `Bhagavad Gita ${ref}`,
        url: `https://www.holy-bhagavad-gita.org/chapter/${chapter}/verse/${verse}`}
}


const religion:Religion = {
    slug: 'hinduism',
    name: "Hinduism",
    summary: "One of the world's oldest religions, Hinduism is a broad family of traditions"
        + " from India rather than a single set of beliefs. Many Hindus worship one supreme"
        + " God in various forms, and most share beliefs in karma, rebirth and liberation"
        + " (moksha). Since there is no central authority, the sources below are from the"
        + " Bhagavad Gita, the most widely read Hindu scripture.",
    beliefs: [
        {
            primary: true,
            title: "The many gods are all forms of the one divine reality",
            explanation: "In the Bhagavad Gita, Krishna says that those who worship other gods"
                + " are really worshipping him,[1] and that he strengthens each worshipper's"
                + " faith in whatever form they choose.[2]",
            sources: [gita('9.23'), gita('7.21')],
            quote: {
                text: "Even those devotees who faithfully worship other gods also worship Me."
                    + " But they do so by the wrong method.",
                source: 1,
            },
            response: "There is only one true God, and he forbids the worship of any other"
                + " god or image. Other gods are not forms of him.",
            verse: "Exodus 20:3",
            see_also: ['Deuteronomy 6:4', 'Isaiah 44:6', '1 Corinthians 8:5-6'],
            further: [gq("What is Hinduism and what do Hindus believe?", 'hinduism')],
        },
        {
            primary: true,
            title: "We are reborn again and again according to our karma",
            explanation: "Hinduism teaches that the soul passes from body to body through"
                + " countless lives, with each life shaped by the karma of the last.[1]",
            sources: [gita('2.22')],
            quote: {
                text: "As a person sheds worn-out garments and wears new ones, likewise, at"
                    + " the time of death, the soul casts off its worn-out body and enters a"
                    + " new one.",
                source: 1,
            },
            response: "Each person lives once, then faces judgement. There is no cycle of"
                + " rebirth.",
            verse: "Hebrews 9:27",
            see_also: ['Luke 16:22-23', 'Luke 23:43', '2 Corinthians 5:8'],
            further: [
                gq("What does the Bible say about reincarnation?", 'reincarnation'),
                gq("What does the Bible say about karma?", 'karma'),
            ],
        },
        {
            primary: true,
            title: "God comes to earth again and again, and Jesus may be one of his avatars",
            explanation: "Krishna says he appears on earth age after age whenever"
                + " righteousness declines.[1][2] Many Hindus therefore honour Jesus as one"
                + " of many avatars or holy teachers.",
            sources: [gita('4.7'), gita('4.8')],
            quote: {
                text: "Whenever there is a decline in righteousness and an increase in"
                    + " unrighteousness, O Arjun, at that time I manifest Myself on earth.",
                source: 1,
            },
            response: "God became man only once, in Jesus, who is God's one and only Son. He"
                + " came once for all to take away sin by his death.",
            verse: "Hebrews 9:26",
            see_also: ['John 1:14', 'John 3:16', 'Colossians 2:9'],
            further: [
                gq("What is an avatar in Hinduism? Was Jesus an avatar?", 'avatar-hinduism'),
            ],
        },
        {
            primary: true,
            title: "All paths lead to God",
            explanation: "Krishna says that everyone follows his path, knowingly or"
                + " unknowingly, and that he responds to people however they come to him.[1]",
            sources: [gita('4.11')],
            quote: {
                text: "In whatever way people surrender unto Me, I reciprocate accordingly."
                    + " Everyone follows My path, knowingly or unknowingly.",
                source: 1,
            },
            response: "Jesus is the only way to God. Salvation is found in no one else.",
            verse: "Acts 4:12",
            see_also: ['John 14:6', '1 Timothy 2:5', 'Matthew 7:13-14'],
            further: [
                gq("Why are there so many religions? Do all religions lead to God?",
                    'so-many-religions'),
            ],
        },
        {
            title: "The soul is eternal, without beginning",
            explanation: "The Bhagavad Gita teaches that the soul was never born and will never"
                + " die,[1] and many Hindus believe the soul is ultimately one with God.",
            sources: [gita('2.20')],
            quote: {
                text: "The soul is neither born, nor does it ever die; nor having once existed,"
                    + " does it ever cease to be.",
                source: 1,
            },
            response: "God alone has no beginning. People are created by God and are not part"
                + " of him, though he gives us souls that live on after death.",
            verse: "Genesis 2:7",
            see_also: ['Psalm 90:2', 'Psalm 100:3', 'Isaiah 45:12'],
            further: [gq("I am a Hindu, why should I consider becoming a Christian?",
                'Hindu-Christian')],
        },
        {
            title: "Spiritual knowledge frees us from karma",
            explanation: "The Bhagavad Gita teaches that spiritual knowledge burns away the"
                + " effects of our past actions,[1] alongside paths of devotion and selfless"
                + " work.",
            sources: [gita('4.37')],
            quote: {
                text: "As a kindled fire reduces wood to ashes, O Arjun, so does the fire of"
                    + " knowledge burn to ashes all reactions from material activities.",
                source: 1,
            },
            response: "No knowledge, devotion or good works can remove sin. Only Jesus' death"
                + " pays for it, and he saves us by his mercy.",
            verse: "Titus 3:5",
            see_also: ['Ephesians 2:8-9', '1 John 1:7', 'Isaiah 64:6'],
            further: [gq("What is the Bhagavad Gita?", 'Bhagavad-Gita')],
        },
    ],
}


export default religion
