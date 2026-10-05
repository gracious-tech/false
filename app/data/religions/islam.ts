
// Data for the islam page

import type {Religion} from '../common'
import {gq, quran} from '../common'


const religion:Religion = {
    slug: 'islam',
    name: "Islam",
    summary: "A religion founded in Arabia in the 7th century AD by Muhammad, whom Muslims"
        + " believe was the final prophet of God. Muslims honour Jesus as a great prophet and"
        + " the Messiah, and believe in one God, prayer, fasting and judgement. The sources"
        + " below are from the Quran, which all Muslims accept as God's word (Sahih"
        + " International translation).",
    beliefs: [
        {
            primary: true,
            title: "Jesus is a prophet, not God or the Son of God",
            explanation: "The Quran honours Jesus as the Messiah, born of a virgin and a"
                + " worker of miracles, but says he was only a messenger like those before"
                + " him,[1] created like Adam,[2] and that calling him God is unbelief.[3]",
            sources: [quran('5:75'), quran('3:59'), quran('5:72')],
            quote: {
                text: "The Messiah, son of Mary, was not but a messenger; [other] messengers"
                    + " have passed on before him.",
                source: 1,
            },
            response: "Jesus is the eternal Word who was with God and was God, who became"
                + " flesh. He accepted worship and claimed to be one with the Father.",
            verse: "John 1:1",
            see_also: ['John 1:14', 'John 8:58', 'John 20:28', 'Colossians 2:9'],
            further: [
                gq("Is Jesus God? Why should I believe that Jesus is God?", 'is-Jesus-God'),
                gq("What is Islam, and what do Muslims believe?", 'Islam'),
            ],
        },
        {
            primary: true,
            title: "Jesus was not crucified",
            explanation: "The Quran says Jesus was neither killed nor crucified, but that"
                + " someone was made to look like him, and God raised Jesus up to himself.[1][2]",
            sources: [quran('4:157'), quran('4:158')],
            quote: {
                text: "And they did not kill him, nor did they crucify him; but [another] was"
                    + " made to resemble him to them.",
                source: 1,
            },
            response: "Jesus' death on the cross and his resurrection are the heart of the"
                + " gospel. He foretold them himself, and many eyewitnesses saw him die and"
                + " rise again.",
            verse: "1 Corinthians 15:3-4",
            see_also: ['Mark 8:31', 'Luke 24:46', 'Acts 2:23-24', '1 Corinthians 15:5-8'],
            further: [
                gq("What is the substitutionary atonement?", 'substitutionary-atonement'),
            ],
        },
        {
            primary: true,
            title: "Our deeds will be weighed, and no one can carry another's sins",
            explanation: "The Quran teaches that on Judgement Day each person's deeds will be"
                + " weighed, and those whose good deeds are heavy will succeed.[1] It also"
                + " says no one can bear the burden of another's sin.[2] So there is no"
                + " sacrifice that takes away sin, and no assurance of Paradise.",
            sources: [quran('7:8'), quran('35:18')],
            quote: {
                text: "And the weighing [of deeds] that Day will be the truth. So those whose"
                    + " scales are heavy - it is they who will be the successful.",
                source: 1,
            },
            response: "No one's good deeds can outweigh their sin. Jesus, who had no sin of"
                + " his own, bore our sins in our place, so those who trust him can know they"
                + " have eternal life.",
            verse: "1 Peter 2:24",
            see_also: ['Isaiah 53:5-6', '2 Corinthians 5:21', 'Ephesians 2:8-9', '1 John 5:13'],
            further: [
                gq("How can I, a Muslim, become assured of paradise?", 'assured-paradise'),
                gq("What is the substitutionary atonement?", 'substitutionary-atonement'),
            ],
        },
        {
            primary: true,
            title: "Muhammad is the final prophet, and the Quran is God's final word",
            explanation: "Islam teaches that Muhammad is the \"seal\" or last of the"
                + " prophets,[1] and that the Quran confirms earlier scripture and stands as"
                + " the judge over it.[2]",
            sources: [quran('33:40'), quran('5:48')],
            quote: {
                text: "Muḥammad is not the father of [any] one of your men, but [he is] the"
                    + " Messenger of Allāh and seal [i.e., last] of the prophets.",
                source: 1,
            },
            response: "God's final and complete word is his Son, Jesus. Any message that"
                + " contradicts the gospel the apostles preached is not from God.",
            verse: "Hebrews 1:1-2",
            see_also: ['Galatians 1:8', 'Jude 3', 'John 14:6'],
            further: [
                gq("Who was Muhammad?", 'who-was-Muhammad'),
                gq("Does the Qur'an replace the Bible?", 'Quran-annul-Bible'),
            ],
        },
        {
            title: "God has no son, and belief in the Trinity is unbelief",
            explanation: "The Quran says God is one and is above having a son, and tells"
                + " Christians not to say \"Three\".[1][2] It rejects the idea of God as \"the"
                + " third of three\".[3]",
            sources: [quran('4:171'), quran('112:3'), quran('5:73')],
            quote: {
                text: "And do not say, \"Three\"; desist - it is better for you. Indeed, Allāh"
                    + " is but one God. Exalted is He above having a son.",
                source: 1,
            },
            response: "Christians also believe there is only one God, not three gods. The one"
                + " God exists eternally as Father, Son and Holy Spirit. \"Son\" does not mean"
                + " God had a child, but that Jesus shares God's own nature.",
            verse: "Matthew 28:19",
            see_also: ['Deuteronomy 6:4', 'John 10:30', '2 Corinthians 13:14'],
            further: [gq("What does the Bible teach about the Trinity?", 'Trinity-Bible')],
        },
        {
            title: "The Bible has been changed",
            explanation: "The Quran says God gave the Torah and the Gospel and that the Quran"
                + " confirms them.[1] Yet most Muslims today believe the Bible we have has been"
                + " corrupted, often pointing to verses that condemn people who write"
                + " scripture with their own hands.[2]",
            sources: [quran('5:46'), quran('2:79')],
            quote: {
                text: "So woe to those who write the \"scripture\" with their own hands, then"
                    + " say, \"This is from Allāh,\" in order to exchange it for a small price.",
                source: 2,
            },
            response: "God's word cannot be lost or corrupted. The manuscripts we have today"
                + " date from long before Muhammad, and they agree with the Bible we read now.",
            verse: "Isaiah 40:8",
            see_also: ['Matthew 24:35', '1 Peter 1:24-25', 'Psalm 119:89'],
            further: [
                gq("Has the Bible been corrupted, altered, edited, revised, or tampered"
                    + " with?", 'Bible-corrupted'),
                gq("What is the Islamic dilemma?", 'Islamic-dilemma'),
            ],
        },
        {
            title: "People are born pure, without a sinful nature",
            explanation: "Islam teaches that every person is created with a pure, natural"
                + " inclination toward God (fitrah).[1] There is no original sin, so people"
                + " need guidance more than rescue.",
            sources: [quran('30:30')],
            quote: {
                text: "[Adhere to] the fiṭrah of Allāh upon which He has created [all] people.",
                source: 1,
            },
            response: "Since Adam, every person is born with a sinful nature and cannot"
                + " become right with God by guidance alone. We need a new heart that only God"
                + " can give.",
            verse: "Psalm 51:5",
            see_also: ['Romans 5:12', 'Jeremiah 17:9', 'Ephesians 2:1-3', 'Ezekiel 36:26'],
            further: [gq("What is original sin?", 'original-sin')],
        },
        {
            title: "God forgives whom he wills, without a sacrifice",
            explanation: "The Quran teaches that God forgives every sin except worshipping"
                + " another beside him, for whomever he wills.[1] Forgiveness depends on God's"
                + " will and our repentance, not on any payment for sin.",
            sources: [quran('4:48')],
            quote: {
                text: "Indeed, Allāh does not forgive association with Him, but He forgives"
                    + " what is less than that for whom He wills.",
                source: 1,
            },
            response: "God is merciful, but he is also just and cannot simply overlook sin."
                + " Forgiveness is possible because Jesus' death paid the penalty in full.",
            verse: "Hebrews 9:22",
            see_also: ['Romans 3:25-26', 'Leviticus 17:11', 'John 1:29'],
            further: [
                gq("What is the substitutionary atonement?", 'substitutionary-atonement'),
            ],
        },
        {
            title: "The Holy Spirit is the angel Gabriel",
            explanation: "Muslims understand the \"Pure Spirit\" that brought the Quran to"
                + " Muhammad to be the angel Gabriel,[1] who is also named as bringing it down"
                + " to him.[2]",
            sources: [quran('16:102'), quran('2:97')],
            quote: {
                text: "The Pure Spirit [i.e., Gabriel] has brought it down from your Lord in"
                    + " truth.",
                source: 1,
            },
            response: "The Holy Spirit is not an angel but God himself, who lives in every"
                + " believer. Lying to the Holy Spirit is lying to God.",
            verse: "Acts 5:3-4",
            see_also: ['John 14:16-17', '1 Corinthians 3:16', 'Luke 1:35'],
            further: [gq("Is the Holy Spirit a person?", 'Holy-Spirit-person')],
        },
    ],
}


export default religion
