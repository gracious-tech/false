// Data for each religion/sect page


// A link to an official source that the religion itself treats as authoritative
export interface Source {
    label:string
    url:string
}


// A single false belief and the biblical response to it
export interface FalseBelief {
    primary?:boolean  // Shown more prominently as one of the most important differences
    belief:string
    detail?:string  // What the religion teaches, in plain words or its own
    response:string
    refs:string[]
    sources?:Source[]
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
        belief: `False belief ${i + 1}`,
        response: "What Scripture teaches instead.",
        refs: [],
    }))
}


// Link to a page of the Catechism of the Catholic Church on the Vatican's website
function ccc(label:string, page:string):Source{
    return {label, url: `https://www.vatican.va/archive/ENG0015/${page}.HTM`}
}


// Link to a session of the Council of Trent
function trent(label:string, session:string):Source{
    return {label, url: `https://www.papalencyclicals.net/councils/trent/${session}-session.htm`}
}


// All religions, in the order they are listed on the home page
export const religions:Religion[] = [
    {
        slug: 'buddhism',
        name: "Buddhism",
        summary: "A religion founded in India around 500 BC by Siddhartha Gautama, known as the"
            + " Buddha. It teaches that suffering is ended by following a path of right living"
            + " and meditation that leads to enlightenment and release from rebirth.",
        beliefs: [
            {
                primary: true,
                belief: "There is no Creator God",
                response: "God created everything that exists, and his power and nature are"
                    + " clearly seen in what he has made.",
                refs: ['Genesis 1:1', 'Psalm 19:1', 'Romans 1:20', 'Revelation 4:11'],
            },
            {
                primary: true,
                belief: "Karma decides what we deserve",
                response: "Everyone has sinned and deserves judgement, but God offers mercy and"
                    + " forgiveness freely through Christ instead of what we deserve.",
                refs: ['Romans 3:23-24', 'Psalm 103:10-12', 'Romans 6:23', 'Ephesians 1:7'],
            },
            {
                primary: true,
                belief: "We must save ourselves by our own effort",
                response: "No one can save themselves by good works or discipline. Salvation is"
                    + " a gift of God's grace received by faith in Christ.",
                refs: ['Ephesians 2:8-9', 'Titus 3:5', 'Galatians 2:16', 'Isaiah 64:6'],
            },
            {
                primary: true,
                belief: "Jesus was one enlightened teacher among many",
                response: "Jesus is God in the flesh and the only way to God. Salvation is found"
                    + " in no one else.",
                refs: ['John 14:6', 'Acts 4:12', 'Colossians 2:9', 'John 1:14'],
            },
            {
                belief: "There is no lasting self or soul",
                response: "Each person is made in God's image with a soul that continues after"
                    + " death and is known and loved by God individually.",
                refs: ['Genesis 1:27', 'Psalm 139:13-16', 'Matthew 10:28', 'Luke 12:7'],
            },
            {
                belief: "We are reborn again and again",
                response: "Each person lives once, then faces judgement. There is no cycle of"
                    + " rebirth.",
                refs: ['Hebrews 9:27', 'Luke 16:22-23', 'Luke 23:43', '2 Corinthians 5:8'],
            },
            {
                belief: "Suffering is caused by desire",
                response: "Suffering entered the world through sin. Not all desire is wrong;"
                    + " God gives good desires and will one day end suffering completely.",
                refs: ['Genesis 3:17-19', 'Romans 5:12', 'Psalm 37:4', 'Revelation 21:4'],
            },
            {
                belief: "The goal is nirvana, the end of the self",
                response: "The goal is not to cease to exist but to have eternal life, knowing"
                    + " God and living with him forever in a renewed creation.",
                refs: ['John 17:3', 'Revelation 21:3-4', '1 Corinthians 15:42-44',
                    'John 10:10'],
            },
            {
                belief: "The real problem is ignorance, not sin",
                response: "Our real problem is sin against a holy God, which needs forgiveness,"
                    + " not merely enlightenment.",
                refs: ['Psalm 51:4', 'Romans 3:10-12', 'Isaiah 59:2', '1 John 1:8-9'],
            },
            {
                belief: "Truth is found within through meditation",
                response: "The human heart is deceitful. Truth is revealed by God in his Word,"
                    + " and we are to meditate on Scripture rather than look within.",
                refs: ['Jeremiah 17:9', 'Proverbs 3:5-6', '2 Timothy 3:16-17', 'Psalm 1:1-2'],
            },
        ],
    },
    {
        slug: 'catholic',
        name: "Roman Catholicism",
        summary: "Most Catholics believe in the Trinity, that Jesus is God, and that he died and"
            + " rose again. The difference is how a person is forgiven and made right with God."
            + " Each point below comes from official teaching still in force today, mostly the"
            + " Catechism and the Council of Trent, and links to the original so you can read"
            + " it yourself.",
        beliefs: [
            {
                primary: true,
                belief: "We are not saved by faith alone",
                detail: "The Council of Trent declared anyone who teaches that we are made right"
                    + " with God by faith alone to be \"anathema\" (condemned). Rome teaches that"
                    + " God pours grace into us so we actually become good, and we must"
                    + " cooperate with it.",
                response: "We are made right with God by trusting Christ alone. His perfect"
                    + " righteousness is credited to us as a free gift, not earned by us.",
                refs: ['Romans 3:28', 'Romans 4:5', 'Galatians 2:16', 'Philippians 3:9'],
                sources: [trent("Council of Trent, Session VI, Canons 9 & 11", 'sixth')],
            },
            {
                primary: true,
                belief: "Good works can merit eternal life",
                detail: "The Catechism teaches that after the first grace, \"we can merit for"
                    + " ourselves and for others all the graces needed to attain eternal life\"."
                    + " This grace can be lost through mortal sin and restored through"
                    + " confession.",
                response: "Eternal life is a gift we receive, never wages we earn. Those who"
                    + " belong to Christ are kept by him and cannot be snatched away.",
                refs: ['Romans 6:23', 'Ephesians 2:8-9', 'Romans 11:6', 'John 10:28-29'],
                sources: [
                    ccc("Catechism 2006–2011", '__P70'),
                    ccc("Catechism 2027", '__P72'),
                ],
            },
            {
                primary: true,
                belief: "Church Tradition is equal to the Bible",
                detail: "The Catechism says the Church \"does not derive her certainty about all"
                    + " revealed truths from the holy Scriptures alone\", and that only the"
                    + " Church's teaching office can interpret them.",
                response: "Scripture is God's own word and the final authority that judges all"
                    + " church teaching and tradition, not the other way around.",
                refs: ['2 Timothy 3:16-17', 'Mark 7:8-13', 'Acts 17:11', 'Isaiah 8:20'],
                sources: [
                    ccc("Catechism 80–82", '__PL'),
                    ccc("Catechism 85–87", '__PM'),
                ],
            },
            {
                primary: true,
                belief: "The Mass is a sacrifice that takes away sins",
                detail: "The Catechism calls the cross and the Mass \"one single sacrifice\"."
                    + " The same Christ is offered again at every Mass through the priest, for"
                    + " the sins of the living and the dead.",
                response: "Christ offered himself once for all, and his sacrifice is finished."
                    + " It is never repeated, and no further offering for sin is needed.",
                refs: ['Hebrews 7:27', 'Hebrews 9:25-28', 'Hebrews 10:10-18', 'John 19:30'],
                sources: [ccc("Catechism 1366–1367", '__P41')],
            },
            {
                belief: "The Pope can teach without error",
                detail: "When the Pope formally defines a teaching on faith or morals, the"
                    + " Catechism says he \"enjoys this infallibility in virtue of his office\","
                    + " and the faithful must accept it.",
                response: "Christ alone is head of the church. Even the apostle Peter was"
                    + " publicly corrected when he went against the gospel.",
                refs: ['Ephesians 1:22-23', 'Colossians 1:18', 'Galatians 2:11-14',
                    'Matthew 15:9'],
                sources: [
                    ccc("Catechism 891", '__P2A'),
                    ccc("Catechism 2035", '__P74'),
                ],
            },
            {
                belief: "The communion bread is to be worshipped as Jesus",
                detail: "Rome teaches the bread and wine become Christ's actual body and blood"
                    + " (transubstantiation), so the bread is given \"the cult of adoration\","
                    + " both during Mass and when displayed outside of it.",
                response: "Jesus gave the bread and cup as a remembrance of his death. Worship"
                    + " belongs to God alone, and the bread remains bread.",
                refs: ['Luke 22:19-20', '1 Corinthians 11:24-26', 'Exodus 20:4-5',
                    'Matthew 4:10'],
                sources: [
                    ccc("Catechism 1376–1378", '__P41'),
                    ccc("Catechism 1418", '__P44'),
                ],
            },
            {
                belief: "Punishment for sin remains and can be reduced by indulgences",
                detail: "Even after forgiveness, Rome teaches \"temporal punishment\" remains,"
                    + " paid in this life or in purgatory. Indulgences reduce it by drawing on"
                    + " a \"treasury\" of the merits of Christ, Mary and the saints.",
                response: "Christ's death fully paid for the sins of those who trust him. There"
                    + " is no condemnation left and no debt for us or the saints to pay.",
                refs: ['Romans 8:1', 'Hebrews 10:14', '1 John 1:7', 'Colossians 2:13-14'],
                sources: [ccc("Catechism 1471–1479", '__P4G')],
            },
            {
                belief: "Mary was sinless and was taken bodily into heaven",
                detail: "Catholics must believe Mary was conceived without sin and was \"taken"
                    + " up body and soul into heavenly glory\". These were declared by popes in"
                    + " 1854 and 1950, not taught from the Bible.",
                response: "All have sinned except Christ, and Mary herself called God her"
                    + " Saviour. We are only bound to believe what Scripture teaches.",
                refs: ['Luke 1:46-47', 'Romans 3:23', 'Hebrews 4:15', '1 Corinthians 4:6'],
                sources: [
                    ccc("Catechism 491", '__P1K'),
                    ccc("Catechism 966", '__P2C'),
                    {
                        label: "Ineffabilis Deus (1854)",
                        url: 'https://www.papalencyclicals.net/pius09/p9ineff.htm',
                    },
                    {
                        label: "Munificentissimus Deus (1950)",
                        url: 'https://www.vatican.va/content/pius-xii/en/apost_constitutions/'
                            + 'documents/hf_p-xii_apc_19501101_munificentissimus-deus.html',
                    },
                ],
            },
            {
                belief: "Mary is a mediator, and we should pray to the saints",
                detail: "The Catechism calls Mary \"Advocate, Helper, Benefactress, and"
                    + " Mediatrix\", and teaches that we should ask the saints in heaven to"
                    + " pray for us.",
                response: "There is one mediator between God and people, Jesus Christ. We can"
                    + " come boldly to God through him, and prayer belongs to God alone.",
                refs: ['1 Timothy 2:5', 'Hebrews 4:14-16', 'John 14:13-14', 'Matthew 6:9'],
                sources: [
                    ccc("Catechism 956", '__P2B'),
                    ccc("Catechism 969", '__P2C'),
                    ccc("Catechism 2677", '__P9F'),
                ],
            },
            {
                belief: "Statues, images and relics should be venerated",
                detail: "The Catechism teaches that images of Christ, Mary and the saints are"
                    + " owed \"respectful veneration\", and that relics of saints are honoured."
                    + " Catholics bow before, kneel at and kiss them.",
                response: "God commands us not to bow down to images. Calling it honour rather"
                    + " than worship does not change what the command forbids.",
                refs: ['Exodus 20:4-5', 'Isaiah 42:8', 'Acts 10:25-26', '1 John 5:21'],
                sources: [
                    ccc("Catechism 2129–2132", '__P7F'),
                    ccc("Catechism 1674", '__P58'),
                ],
            },
            {
                belief: "The true Church is the one under the Pope",
                detail: "The Catechism teaches that the Church of Christ \"subsists in\" the"
                    + " Catholic Church, \"governed by the successor of Peter\", and that the"
                    + " fullness of the means of salvation is found only there.",
                response: "The true church is all who trust in Christ, wherever the gospel is"
                    + " rightly preached. Christ, not Peter, is the foundation.",
                refs: ['1 Corinthians 3:11', 'Ephesians 2:19-22', 'Galatians 3:26-29',
                    '1 Peter 2:4-6'],
                sources: [ccc("Catechism 816, 846", '__P29')],
            },
            {
                belief: "The Apocrypha is Scripture",
                detail: "In 1546 the Council of Trent added Tobit, Judith, Wisdom, Sirach, Baruch,"
                    + " 1–2 Maccabees and extra parts of Daniel and Esther to the Old Testament,"
                    + " and declared anyone who rejects them \"anathema\".",
                response: "The Old Testament is the one God entrusted to the Jews, which Jesus"
                    + " and the apostles quoted. These extra books can be useful history but"
                    + " are not God's word.",
                refs: ['Romans 3:1-2', 'Luke 24:44', 'Matthew 23:35'],
                sources: [trent("Council of Trent, Session IV", 'fourth')],
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
            + " Governing Body of the Watch Tower Society. It denies the Trinity and the deity"
            + " of Christ, and teaches that salvation comes through faithful obedience to"
            + " its organization.",
        beliefs: [
            {
                primary: true,
                belief: "Jesus is a created being, not God",
                response: "Jesus is the eternal Word who was with God and was God. He was not"
                    + " created; all things were created through him.",
                refs: ['John 1:1-3', 'John 8:58', 'Colossians 1:16-17', 'Hebrews 1:8',
                    'Titus 2:13'],
            },
            {
                primary: true,
                belief: "The Trinity is a pagan teaching",
                response: "There is one God, who exists as Father, Son and Holy Spirit. All"
                    + " three are named together as the one God we are baptised into.",
                refs: ['Deuteronomy 6:4', 'Matthew 28:19', '2 Corinthians 13:14',
                    'John 20:28'],
            },
            {
                primary: true,
                belief: "Salvation is earned by obedience to the organization",
                response: "Salvation is a free gift received by faith in Christ alone, not"
                    + " earned by works, door-to-door preaching or loyalty to any group.",
                refs: ['Ephesians 2:8-9', 'Titus 3:5', 'Romans 4:5', 'John 6:28-29'],
            },
            {
                primary: true,
                belief: "The Watchtower is God's only channel of truth",
                response: "Christ is the only mediator between God and people. The Watchtower"
                    + " has made failed predictions, such as for 1914 and 1975, and Scripture"
                    + " says such a prophet is not from God.",
                refs: ['1 Timothy 2:5', 'Deuteronomy 18:21-22', 'Acts 17:11', '1 John 2:27'],
            },
            {
                belief: "Jesus is Michael the archangel",
                response: "The Son is far greater than the angels. God commands all the angels"
                    + " to worship him, something never said of any angel.",
                refs: ['Hebrews 1:4-8', 'Hebrews 1:13', 'Jude 9', 'Philippians 2:9-11'],
            },
            {
                belief: "The Holy Spirit is an impersonal force",
                response: "The Holy Spirit is a person who speaks, teaches and can be grieved,"
                    + " and lying to him is lying to God.",
                refs: ['Acts 5:3-4', 'Acts 13:2', 'John 16:13-14', 'Ephesians 4:30'],
            },
            {
                belief: "Jesus rose as a spirit, not in his body",
                response: "Jesus rose bodily from the grave. He showed his wounds, ate food and"
                    + " said a spirit does not have flesh and bones as he did.",
                refs: ['Luke 24:39-43', 'John 2:19-21', 'John 20:27', '1 Corinthians 15:17'],
            },
            {
                belief: "Only 144,000 go to heaven and are born again",
                response: "Every believer must be born again and is a child of God. Heaven is"
                    + " promised to a great multitude from every nation, not a select few.",
                refs: ['John 3:3', 'Galatians 3:26', 'Revelation 7:9', 'Philippians 3:20'],
            },
            {
                belief: "The soul ceases to exist at death and there is no hell",
                response: "The soul continues after death. Believers go to be with Christ and"
                    + " unbelievers face eternal, conscious punishment.",
                refs: ['Matthew 25:46', 'Luke 16:22-24', '2 Corinthians 5:8',
                    'Philippians 1:23'],
            },
            {
                belief: "Blood transfusions are forbidden by God",
                response: "The command concerns eating blood, not receiving medical care. God"
                    + " values human life, and refusing life-saving treatment is not required"
                    + " of believers.",
                refs: ['Leviticus 17:10-12', 'Acts 15:20', 'Mark 3:4', 'John 15:13'],
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
