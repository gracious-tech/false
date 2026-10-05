
// Data for the judaism page

import type {Religion, Source} from '../common'
import {gq, sefaria} from '../common'


// Maimonides' Mishneh Torah, the most widely accepted summary of traditional Jewish law
function rambam(label:string, ref:string):Source{
    return sefaria(`Maimonides, Mishneh Torah, ${label}`, `Mishneh_Torah,_${ref}`)
}


const religion:Religion = {
    slug: 'judaism',
    name: "Judaism",
    summary: "Christians owe a great debt to the Jewish people: Jesus and his apostles were"
        + " Jews, and the Old Testament is the Hebrew Bible. Christians and Jews worship the"
        + " God of Abraham and share the Ten Commandments and the hope of a Messiah. The"
        + " difference is whether Jesus is that Messiah. Judaism today ranges from Orthodox"
        + " to Reform, so the sources below are from Maimonides and Rashi, whose works"
        + " remain the most widely accepted summaries of traditional Jewish belief.",
    beliefs: [
        {
            primary: true,
            title: "Jesus is not the Messiah, who is still to come",
            explanation: "Traditional Judaism awaits a Messiah who will restore David's"
                + " kingdom, rebuild the Temple and gather Israel.[1] Since Jesus did not do"
                + " these things, it does not accept him as the Messiah.",
            sources: [rambam("Kings and Wars 11:1", 'Kings_and_Wars.11.1')],
            quote: {
                text: "In the future, the Messianic king will arise and renew the Davidic"
                    + " dynasty, restoring it to its initial sovereignty. He will build the"
                    + " Temple and gather the dispersed of Israel.",
                source: 1,
            },
            response: "Jesus fulfilled the prophecies of the Messiah's first coming: his"
                + " birthplace, his suffering and his death for sin. He will fulfil the rest"
                + " when he returns as King.",
            verse: "Luke 24:44",
            see_also: ['Micah 5:2', 'Daniel 9:25-26', 'Zechariah 12:10', 'Acts 17:2-3'],
            further: [
                gq("Is Jesus the Messiah?", 'is-Jesus-the-Messiah'),
                gq("Why do most Jews reject Jesus as the Messiah?", 'Jews-reject-Jesus'),
            ],
        },
        {
            primary: true,
            title: "Repentance atones for sin without a sacrifice",
            explanation: "Since the Temple was destroyed in AD 70, there have been no"
                + " sacrifices. Traditional Judaism teaches that repentance, along with Yom"
                + " Kippur, now atones for all sins.[1]",
            sources: [rambam("Repentance 1:3", 'Repentance.1.3')],
            quote: {
                text: "At present, when the Temple does not exist and there is no altar of"
                    + " atonement, there remains nothing else aside from Teshuvah. Teshuvah"
                    + " atones for all sins.",
                source: 1,
            },
            response: "God required the shedding of blood for atonement. The sacrifices"
                + " pointed to the Messiah, whose death is the final sacrifice for sin, made"
                + " before the Temple was destroyed.",
            verse: "Hebrews 9:12",
            see_also: ['Leviticus 17:11', 'Isaiah 53:10', 'John 1:29', 'Hebrews 10:4'],
            further: [
                gq("If the Jewish people do not offer animal sacrifices, how do they believe"
                    + " they can receive forgiveness from God?", 'Jewish-sacrifices'),
                gq("Why did the sacrificial system require a blood sacrifice?",
                    'blood-sacrifice'),
            ],
        },
        {
            primary: true,
            title: "God is one in a way that rules out the Trinity and the incarnation",
            explanation: "Judaism teaches that God is absolutely one, with no parts or"
                + " persons, and has no body,[1] so he could not become a man.",
            sources: [rambam("Foundations of the Torah 1:7", 'Foundations_of_the_Torah.1.7')],
            quote: {
                text: "This God is one. He is not two or more, but one, unified in a manner"
                    + " which [surpasses] any unity that is found in the world.",
                source: 1,
            },
            response: "Christians agree that there is only one God. But the Hebrew Scriptures"
                + " themselves promised a child who would be called \"Mighty God\", and the"
                + " one God revealed himself as Father, Son and Holy Spirit.",
            verse: "Isaiah 9:6",
            see_also: ['Genesis 1:26', 'Psalm 110:1', 'Isaiah 48:16', 'John 1:14'],
            further: [gq("What does the Bible teach about the Trinity?", 'Trinity-Bible')],
        },
        {
            primary: true,
            title: "Isaiah's suffering servant is Israel, not the Messiah",
            explanation: "The influential commentator Rashi taught that the servant who"
                + " suffers in Isaiah 53 is the people of Israel, spoken of as one man.[1]",
            sources: [sefaria("Rashi on Isaiah 53:3", 'Rashi_on_Isaiah.53.3.1')],
            quote: {
                text: "So is the custom of this prophet: he mentions all Israel as one man.",
                source: 1,
            },
            response: "The servant is innocent and suffers for the sins of God's people, so he"
                + " cannot be the people themselves. He is the Messiah, who died for our sins"
                + " and rose again.",
            verse: "Isaiah 53:8",
            see_also: ['Isaiah 53:5-6', 'Isaiah 53:9', 'Isaiah 53:11', 'Acts 8:32-35'],
            further: [
                gq("Is the “The Suffering Servant” prophecy in Isaiah 53 about Jesus?",
                    'suffering-servant-Isaiah-53'),
            ],
        },
        {
            title: "A person whose merits outweigh their sins is righteous",
            explanation: "Maimonides taught that God weighs each person's merits against their"
                + " sins, and a person whose merits are greater is counted righteous.[1]",
            sources: [rambam("Repentance 3:1", 'Repentance.3.1')],
            quote: {
                text: "Each and every person has merits and sins. A person whose merits exceed"
                    + " his sins is [termed] righteous.",
                source: 1,
            },
            response: "No one can be made right with God by keeping the law, because everyone"
                + " has broken it. Righteousness is credited to those who trust God, as it was"
                + " to Abraham.",
            verse: "Romans 3:20",
            see_also: ['Genesis 15:6', 'Habakkuk 2:4', 'Galatians 3:10-11', 'Psalm 143:2'],
            further: [
                gq("Why is salvation by works the predominantly held viewpoint?",
                    'salvation-by-works'),
            ],
        },
        {
            title: "The rabbis' oral law carries God's authority",
            explanation: "Traditional Judaism holds that God gave Moses an oral law alongside"
                + " the written Torah, later recorded in the Talmud, and that the rabbis'"
                + " rulings must be obeyed.[1]",
            sources: [rambam("Rebels 1:2", 'Rebels.1.2')],
            quote: {
                text: "We are obligated to heed their words whether they: a) learned them from"
                    + " the Oral Tradition, i.e., the Oral Law, b) derived them on the basis of"
                    + " their own knowledge …",
                source: 1,
            },
            response: "Jesus taught that human traditions must never be placed alongside or"
                + " above God's written word.",
            verse: "Mark 7:13",
            see_also: ['Isaiah 29:13', 'Matthew 15:3', '2 Timothy 3:16-17'],
            further: [gq("What is sola scriptura?", 'sola-scriptura')],
        },
        {
            title: "The law of Moses is unchanging and binding forever",
            explanation: "Maimonides taught that the commandments of the Torah remain forever,"
                + " and no prophet can add to them or change them.[1]",
            sources: [rambam("Foundations of the Torah 9:1", 'Foundations_of_the_Torah.9.1')],
            quote: {
                text: "It is clear and explicit in the Torah that it is [God's] commandment,"
                    + " remaining forever without change, addition, or diminishment.",
                source: 1,
            },
            response: "The Hebrew Scriptures promised a new covenant. Jesus fulfilled the law,"
                + " and its sacrifices and ceremonies pointed to him.",
            verse: "Jeremiah 31:31",
            see_also: ['Matthew 5:17', 'Hebrews 8:13', 'Galatians 3:24-25'],
            further: [gq("I am Jewish, can I become a Christian?", 'Jewish-Christian')],
        },
        {
            title: "Every person can choose to be righteous",
            explanation: "Maimonides taught that people are not born sinful but have free will"
                + " to become as righteous as Moses.[1]",
            sources: [rambam("Repentance 5:2", 'Repentance.5.2')],
            quote: {
                text: "Each person is fit to be righteous like Moses, our teacher, or wicked,"
                    + " like Jeroboam.",
                source: 1,
            },
            response: "Since Adam, every person is born with a sinful heart and cannot make"
                + " themselves righteous. God promised to give his people a new heart.",
            verse: "Ezekiel 36:26",
            see_also: ['Psalm 51:5', 'Jeremiah 17:9', 'Romans 3:10-12'],
            further: [gq("What is original sin?", 'original-sin')],
        },
    ],
}


export default religion
