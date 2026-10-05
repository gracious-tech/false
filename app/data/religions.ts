
// Data for each religion/sect page


// A link to an official source that the religion itself treats as authoritative
export interface Source {
    label:string
    url:string
}


// A quote from an official source
export interface Quote {
    text:string
    source?:number  // 1-based index into the point's sources, shown as a footnote
}


// A single false belief and the biblical response to it
export interface FalseBelief {
    primary?:boolean  // Shown more prominently as one of the most important differences
    title:string
    explanation:string  // What the religion teaches, with [n] footnote markers for its sources
    sources:Source[]
    quote:Quote
    response:string  // What Scripture says instead
    verse:string  // Reference of a verse to quote from the BSB, like "John 3:16"
}


// A religion/sect and its top false beliefs
export interface Religion {
    slug:string
    name:string
    summary:string
    beliefs:FalseBelief[]
}


// Generate placeholder beliefs until real content is written
function placeholder_beliefs():FalseBelief[]{
    return Array.from({length: 10}, (_, i) => ({
        title: `False belief ${i + 1}`,
        explanation: "What they teach.",
        sources: [],
        quote: {text: "Official quote."},
        response: "What Scripture teaches instead.",
        verse: "John 3:16",
    }))
}


// Link to a page of the Catechism of the Catholic Church on the Vatican's website
function ccc(label:string, page:string):Source{
    return {label: `Catechism of the Catholic Church ${label}`,
        url: `https://www.vatican.va/archive/ENG0015/${page}.HTM`}
}


// Link to a session of the Council of Trent
function trent(label:string, session:string):Source{
    return {label: `Council of Trent, ${label}`,
        url: `https://www.papalencyclicals.net/councils/trent/${session}-session.htm`}
}


// Link to an article on jw.org, the official website of Jehovah's Witnesses
function jw(label:string, path:string):Source{
    return {label: `jw.org, “${label}”`, url: `https://www.jw.org/en/${path}/`}
}


// Link to a Buddhist scripture on SuttaCentral (translation by Bhikkhu Sujato)
function sutta(label:string, id:string):Source{
    return {label, url: `https://suttacentral.net/${id}/en/sujato`}
}


// All religions, in the order they are listed on the home page
export const religions:Religion[] = [
    {
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
            },
            {
                primary: true,
                title: "We must save ourselves by our own effort",
                explanation: "Buddhism teaches that each person must purify themselves, and that"
                    + " no one else can do it for them.[1] The Buddha only shows the way.[2]",
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
            },
            {
                primary: true,
                title: "Refuge is found in the Buddha and his teaching",
                explanation: "Buddhists take refuge in the Buddha, his teaching and the community"
                    + " of monks, and are told this is the supreme refuge that releases from all"
                    + " suffering.[1] Jesus is at most seen as one wise teacher among many.",
                sources: [sutta("Dhammapada 190–192", 'dhp179-196')],
                quote: {
                    text: "Such refuge is a sanctuary, it is the supreme refuge. By going to that"
                        + " refuge, you’re released from all suffering.",
                    source: 1,
                },
                response: "Jesus is God in the flesh and the only way to God. Salvation is found"
                    + " in no one else.",
                verse: "John 14:6",
            },
            {
                title: "There is no lasting self or soul",
                explanation: "The Buddha taught that nothing in a person, body or mind, is a"
                    + " lasting self.[1]",
                sources: [sutta("Saṃyutta Nikāya 22.59, The Characteristic of Not-Self",
                    'sn22.59')],
                quote: {text: "Mendicants, form is not-self.", source: 1},
                response: "Each person is made in God's image with a soul that continues after"
                    + " death and is known and loved by God individually.",
                verse: "Genesis 1:27",
            },
            {
                title: "We are reborn again and again",
                explanation: "Buddhism teaches that beings wander through countless lives in a"
                    + " cycle of rebirth with no known beginning.[1]",
                sources: [sutta("Saṃyutta Nikāya 15.3, Tears", 'sn15.3')],
                quote: {
                    text: "Mendicants, this transmigration has no known beginning.",
                    source: 1,
                },
                response: "Each person lives once, then faces judgement. There is no cycle of"
                    + " rebirth.",
                verse: "Hebrews 9:27",
            },
            {
                title: "Suffering is caused by desire",
                explanation: "The second of the Four Noble Truths says the origin of suffering is"
                    + " craving, and that suffering ends when craving ends.[1]",
                sources: [sutta("Saṃyutta Nikāya 56.11, Rolling Forth the Wheel of Dhamma",
                    'sn56.11')],
                quote: {
                    text: "It’s the craving that leads to future lives, mixed up with relishing"
                        + " and greed, taking pleasure there wherever it alights.",
                    source: 1,
                },
                response: "Suffering and death entered the world through sin. Not all desire is"
                    + " wrong, and God will one day end suffering completely.",
                verse: "Romans 5:12",
            },
            {
                title: "The goal is nirvana, the end of the self",
                explanation: "The goal of Buddhism is nirvana (\"extinguishment\"), the ending of"
                    + " greed, hate and delusion and release from rebirth.[1]",
                sources: [sutta("Saṃyutta Nikāya 38.1, A Question About Extinguishment",
                    'sn38.1')],
                quote: {
                    text: "The ending of greed, hate, and delusion is called extinguishment.",
                    source: 1,
                },
                response: "The goal is not to cease to exist but to have eternal life, knowing"
                    + " God and living with him forever.",
                verse: "John 17:3",
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
            },
            {
                title: "Truth is found within",
                explanation: "The Buddha told people not to rely on scripture or authority, but"
                    + " to judge for themselves what is good.[1]",
                sources: [sutta("Aṅguttara Nikāya 3.65, With the Kālāmas", 'an3.65')],
                quote: {
                    text: "Don’t go by oral transmission, don’t go by lineage, don’t go by"
                        + " testament, don’t go by canonical authority … But when you know for"
                        + " yourselves …",
                    source: 1,
                },
                response: "The human heart is deceitful. Truth is revealed by God in his Word,"
                    + " not discovered by looking within.",
                verse: "Jeremiah 17:9",
            },
        ],
    },
    {
        slug: 'catholic',
        name: "Roman Catholicism",
        summary: "Most Catholics believe in the Trinity, that Jesus is God, and that he died and"
            + " rose again. The difference is how a person is forgiven and made right with God."
            + " Each point below comes from official teaching still in force today, mostly the"
            + " Catechism and the Council of Trent, so you can read it yourself.",
        beliefs: [
            {
                primary: true,
                title: "We are not saved by faith alone",
                explanation: "The Council of Trent condemned anyone who teaches that we are made"
                    + " right with God by faith alone, or by Christ's righteousness being"
                    + " credited to us.[1] Rome teaches that God pours grace into us so we"
                    + " actually become good, and we must cooperate with it.",
                sources: [trent("Session VI, Canons 9 & 11", 'sixth')],
                quote: {
                    text: "If any one saith, that by faith alone the impious is justified … let"
                        + " him be anathema.",
                    source: 1,
                },
                response: "We are made right with God by trusting Christ alone. His perfect"
                    + " righteousness is credited to us as a free gift, not earned by us.",
                verse: "Romans 3:28",
            },
            {
                primary: true,
                title: "Good works can merit eternal life",
                explanation: "Rome teaches that no one can earn the first grace, but after that"
                    + " we can merit what is needed for eternal life.[1][2] This grace can be"
                    + " lost through mortal sin and restored through confession.",
                sources: [ccc("2006–2011", '__P70'), ccc("2027", '__P72')],
                quote: {
                    text: "Moved by the Holy Spirit, we can merit for ourselves and for others"
                        + " all the graces needed to attain eternal life.",
                    source: 2,
                },
                response: "Eternal life is a gift we receive, never wages we earn. Those who"
                    + " belong to Christ are kept by him.",
                verse: "Romans 6:23",
            },
            {
                primary: true,
                title: "Church Tradition is equal to the Bible",
                explanation: "Rome teaches that Scripture and Tradition together form one source"
                    + " of revelation, to be honoured equally,[1] and that only the Church's"
                    + " teaching office can interpret them.[2]",
                sources: [ccc("80–82", '__PL'), ccc("85–87", '__PM')],
                quote: {
                    text: "The Church … \"does not derive her certainty about all revealed truths"
                        + " from the holy Scriptures alone. Both Scripture and Tradition must be"
                        + " accepted and honoured with equal sentiments of devotion and"
                        + " reverence.\"",
                    source: 1,
                },
                response: "Scripture is God's own word and the final authority that judges all"
                    + " church teaching and tradition, not the other way around.",
                verse: "Mark 7:13",
            },
            {
                primary: true,
                title: "The Mass is a sacrifice that takes away sins",
                explanation: "Rome teaches that the cross and the Mass are one sacrifice. The same"
                    + " Christ is offered at every Mass through the priest, for the sins of the"
                    + " living and the dead.[1]",
                sources: [ccc("1366–1367", '__P41')],
                quote: {
                    text: "The sacrifice of Christ and the sacrifice of the Eucharist are one"
                        + " single sacrifice.",
                    source: 1,
                },
                response: "Christ offered himself once for all, and his sacrifice is finished."
                    + " It is never repeated, and no further offering for sin is needed.",
                verse: "Hebrews 10:14",
            },
            {
                title: "The Pope can teach without error",
                explanation: "Rome teaches that when the Pope formally defines a teaching on faith"
                    + " or morals, he cannot be wrong,[1] and the faithful must accept it.[2]",
                sources: [ccc("891", '__P2A'), ccc("2035", '__P74')],
                quote: {
                    text: "The Roman Pontiff, head of the college of bishops, enjoys this"
                        + " infallibility in virtue of his office.",
                    source: 1,
                },
                response: "Christ alone is head of the church. Even the apostle Peter was"
                    + " publicly corrected when he went against the gospel.",
                verse: "Galatians 2:11",
            },
            {
                title: "The communion bread is to be worshipped as Jesus",
                explanation: "Rome teaches that the bread and wine become Christ's actual body and"
                    + " blood (transubstantiation),[1] so the bread is adored, both during Mass"
                    + " and when displayed outside of it.[2]",
                sources: [ccc("1376–1378", '__P41'), ccc("1418", '__P44')],
                quote: {
                    text: "The Catholic Church has always offered and still offers to the"
                        + " sacrament of the Eucharist the cult of adoration, not only during"
                        + " Mass, but also outside of it.",
                    source: 1,
                },
                response: "Jesus gave the bread and cup as a remembrance of his death. Worship"
                    + " belongs to God alone, and the bread remains bread.",
                verse: "Luke 22:19",
            },
            {
                title: "Punishment for sin remains and can be reduced by indulgences",
                explanation: "Rome teaches that even after forgiveness, \"temporal punishment\""
                    + " remains, paid in this life or in purgatory. Indulgences reduce it by"
                    + " drawing on a treasury of the merits of Christ and the saints.[1]",
                sources: [ccc("1471–1479", '__P4G')],
                quote: {
                    text: "An indulgence is a remission before God of the temporal punishment due"
                        + " to sins whose guilt has already been forgiven.",
                    source: 1,
                },
                response: "Christ's death fully paid for the sins of those who trust him. There"
                    + " is no condemnation left and no debt for us or the saints to pay.",
                verse: "Romans 8:1",
            },
            {
                title: "Mary was sinless and was taken bodily into heaven",
                explanation: "Catholics must believe Mary was conceived without sin, as declared"
                    + " by Pope Pius IX in 1854,[1][2] and that she was taken body and soul into"
                    + " heaven, as declared by Pope Pius XII in 1950.[3][4]",
                sources: [
                    ccc("491", '__P1K'),
                    {
                        label: "Pope Pius IX, Ineffabilis Deus (1854)",
                        url: 'https://www.papalencyclicals.net/pius09/p9ineff.htm',
                    },
                    ccc("966", '__P2C'),
                    {
                        label: "Pope Pius XII, Munificentissimus Deus (1950)",
                        url: 'https://www.vatican.va/content/pius-xii/en/apost_constitutions/'
                            + 'documents/hf_p-xii_apc_19501101_munificentissimus-deus.html',
                    },
                ],
                quote: {
                    text: "The Immaculate Virgin, preserved free from all stain of original sin,"
                        + " when the course of her earthly life was finished, was taken up body"
                        + " and soul into heavenly glory.",
                    source: 3,
                },
                response: "All have sinned except Christ, and Mary herself called God her"
                    + " Saviour. We are only bound to believe what Scripture teaches.",
                verse: "Luke 1:47",
            },
            {
                title: "Mary is a mediator, and we should pray to the saints",
                explanation: "Rome gives Mary the title \"Mediatrix\" and teaches that she"
                    + " continues to bring us salvation,[1] and that we should ask the saints in"
                    + " heaven to pray for us.[2][3]",
                sources: [ccc("969", '__P2C'), ccc("956", '__P2B'), ccc("2677", '__P9F')],
                quote: {
                    text: "Therefore the Blessed Virgin is invoked in the Church under the titles"
                        + " of Advocate, Helper, Benefactress, and Mediatrix.",
                    source: 1,
                },
                response: "There is one mediator between God and people, Jesus Christ. We can"
                    + " come boldly to God through him, and prayer belongs to God alone.",
                verse: "1 Timothy 2:5",
            },
            {
                title: "Statues, images and relics should be venerated",
                explanation: "Rome teaches that images of Christ, Mary and the saints should be"
                    + " honoured,[1] and that relics of saints are to be venerated.[2] Catholics"
                    + " bow before, kneel at and kiss them.",
                sources: [ccc("2129–2132", '__P7F'), ccc("1674", '__P58')],
                quote: {
                    text: "The honor paid to sacred images is a \"respectful veneration,\" not the"
                        + " adoration due to God alone.",
                    source: 1,
                },
                response: "God commands us not to bow down to images. Calling it honour rather"
                    + " than worship does not change what the command forbids.",
                verse: "Exodus 20:5",
            },
            {
                title: "The true Church is the one under the Pope",
                explanation: "Rome teaches that the one Church of Christ is found in the Catholic"
                    + " Church, governed by the Pope, and that the fullness of the means of"
                    + " salvation is found only there.[1]",
                sources: [ccc("816, 846", '__P29')],
                quote: {
                    text: "This Church, constituted and organized as a society in the present"
                        + " world, subsists in the Catholic Church, which is governed by the"
                        + " successor of Peter and by the bishops in communion with him.",
                    source: 1,
                },
                response: "The true church is all who trust in Christ, wherever the gospel is"
                    + " rightly preached. Christ, not Peter, is the foundation.",
                verse: "1 Corinthians 3:11",
            },
            {
                title: "The Apocrypha is Scripture",
                explanation: "In 1546 the Council of Trent added Tobit, Judith, Wisdom, Sirach,"
                    + " Baruch, 1–2 Maccabees and extra parts of Daniel and Esther to the Old"
                    + " Testament, and condemned anyone who rejects them.[1]",
                sources: [trent("Session IV", 'fourth')],
                quote: {
                    text: "But if any one receive not, as sacred and canonical, the said books"
                        + " entire with all their parts … let him be anathema.",
                    source: 1,
                },
                response: "The Old Testament is the one God entrusted to the Jews, which Jesus"
                    + " and the apostles quoted. These extra books can be useful history but"
                    + " are not God's word.",
                verse: "Romans 3:2",
            },
        ],
    },
    {
        slug: 'islam',
        name: "Islam",
        summary: "",
        beliefs: placeholder_beliefs(),
    },
    {
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
            },
            {
                primary: true,
                title: "The Governing Body is Christ's channel of truth",
                explanation: "Jehovah's Witnesses teach that Jesus feeds his followers through"
                    + " \"the faithful and discreet slave\", which they identify as their"
                    + " Governing Body.[1][2]",
                sources: [
                    {
                        label: "The Watchtower, July 15, 2013, “Who Really Is the Faithful and"
                            + " Discreet Slave?”",
                        url: 'https://www.jw.org/en/library/magazines/w20130715/'
                            + 'who-is-faithful-discreet-slave/',
                    },
                    jw("What Is the Governing Body of Jehovah’s Witnesses?",
                        'jehovahs-witnesses/faq/governing-body-jw-helpers'),
                ],
                quote: {
                    text: "That faithful slave is the channel through which Jesus is feeding his"
                        + " true followers in this time of the end.",
                    source: 1,
                },
                response: "Christ is the only mediator, and every believer is to test all"
                    + " teaching against Scripture, not accept it because of who teaches it.",
                verse: "Acts 17:11",
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
            },
            {
                title: "The dead cease to exist and there is no hell",
                explanation: "Jehovah's Witnesses teach that the soul dies,[1] and that hell is"
                    + " simply the grave, where the dead no longer exist.[2]",
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
            },
            {
                title: "Blood transfusions are forbidden by God",
                explanation: "Jehovah's Witnesses refuse blood transfusions, even to save a life,"
                    + " because they believe the Bible's command to abstain from blood applies"
                    + " to them.[1]",
                sources: [jw("Why Don’t Jehovah’s Witnesses Accept Blood Transfusions?",
                    'jehovahs-witnesses/faq/jehovahs-witnesses-why-no-blood-transfusions')],
                quote: {
                    text: "Both the Old and New Testaments clearly command us to abstain from"
                        + " blood.",
                    source: 1,
                },
                response: "The command concerns eating blood, not receiving medical care. God"
                    + " values human life, and saving a life is never against his law.",
                verse: "Mark 3:4",
            },
        ],
    },
    {
        slug: 'mormon',
        name: "Mormonism",
        summary: "",
        beliefs: placeholder_beliefs(),
    },
]


// Lookup a religion by its URL slug
export function get_religion(slug:string):Religion|undefined{
    return religions.find(r => r.slug === slug)
}
