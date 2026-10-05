
// Data for the catholic page

import type {Religion} from '../common'
import {ccc, trent, gq} from '../common'


const religion:Religion = {
    slug: 'catholic',
    name: "Roman Catholicism",
    summary: "Most Catholics believe in the Trinity, that Jesus is God, and that he died and"
        + " rose again. Since 1999 Rome has even agreed with Lutherans that we are saved by"
        + " grace alone through faith in Christ. Real differences remain, though, in what"
        + " being made right with God means and how it is received and kept. Each point"
        + " below comes from official teaching still in force today, mostly the Catechism.",
    beliefs: [
        {
            primary: true,
            title: "God makes us right by changing us, not by crediting Christ's righteousness"
                + " to us",
            explanation: "Rome now affirms with Lutherans that we are accepted by God \"by"
                + " grace alone, in faith in Christ’s saving work and not because of any"
                + " merit on our part\".[1] But it still teaches that being made right with"
                + " God is not just forgiveness but an inner renewal, first received at"
                + " baptism,[2] which can be lost through serious sin and restored through"
                + " confession.[3] The Council of Trent's condemnation of justification by"
                + " faith alone has never been withdrawn.[4]",
            sources: [
                {
                    label: "Joint Declaration on the Doctrine of Justification (1999), 15",
                    url: 'https://lutheranworld.org/sites/default/files/2022-02/'
                        + 'joint_declaration_2019_en.pdf',
                },
                ccc("1989–1992", '__P6Y'),
                ccc("1446", '__P4C'),
                trent("Session VI, Canons 9 & 11", 'sixth'),
            ],
            quote: {
                text: "Justification is conferred in Baptism, the sacrament of faith. It"
                    + " conforms us to the righteousness of God, who makes us inwardly just by"
                    + " the power of his mercy.",
                source: 2,
            },
            response: "God declares the ungodly righteous the moment they trust Christ,"
                + " because Christ's perfect righteousness is credited to them. A changed"
                + " life follows as the fruit of being made right with God, not as its"
                + " basis, and it rests on Christ's finished work, not on our condition.",
            verse: "Romans 4:5",
            see_also: [
                'Romans 3:28', 'Galatians 2:16', 'Philippians 3:9', '2 Corinthians 5:21',
            ],
            further: [
                gq("Why does Christ’s righteousness need to be imputed to us?",
                    'imputed-righteousness'),
                gq("Why is sola fide important?", 'sola-fide'),
            ],
        },
        {
            primary: true,
            title: "Good works can merit eternal life",
            explanation: "Rome stresses that all merit is first God's gift and that no one"
                + " can earn the first grace.[1] But it teaches that, moved by grace, our"
                + " good works truly merit what is needed for eternal life.[2]",
            sources: [ccc("2006–2011", '__P70'), ccc("2027", '__P72')],
            quote: {
                text: "Moved by the Holy Spirit, we can merit for ourselves and for others"
                    + " all the graces needed to attain eternal life.",
                source: 2,
            },
            response: "Eternal life is a gift we receive, never wages we earn. Those who"
                + " belong to Christ are kept by him.",
            verse: "Romans 6:23",
            see_also: ['Ephesians 2:8-9', 'Romans 11:6', 'John 10:28-29'],
            further: [
                gq("Why is salvation by works the predominantly held viewpoint?",
                    'salvation-by-works'),
            ],
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
            see_also: ['2 Timothy 3:16-17', 'Acts 17:11', 'Isaiah 8:20'],
            further: [
                gq("What is sola scriptura?", 'sola-scriptura'),
                gq("Should Catholic tradition have equal or greater authority than the Bible?",
                    'Catholic-tradition'),
            ],
        },
        {
            primary: true,
            title: "The Mass is a sacrifice that takes away sins",
            explanation: "Rome does not teach that Christ dies again, but that each Mass"
                + " makes present the one sacrifice of the cross, offered through the priest"
                + " for the sins of the living and the dead.[1]",
            sources: [ccc("1366–1367", '__P41')],
            quote: {
                text: "The sacrifice of Christ and the sacrifice of the Eucharist are one"
                    + " single sacrifice.",
                source: 1,
            },
            response: "Christ offered himself once for all, and his sacrifice is finished."
                + " It is never repeated, and no further offering for sin is needed.",
            verse: "Hebrews 10:14",
            see_also: ['Hebrews 7:27', 'Hebrews 9:25-28', 'John 19:30'],
            further: [
                gq("What is the Catholic sacrament of Holy Eucharist?", 'Holy-Eucharist'),
            ],
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
            see_also: ['Ephesians 1:22-23', 'Colossians 1:18', 'Matthew 15:9'],
            further: [
                gq("Is papal infallibility biblical?", 'papal-infallibility'),
            ],
        },
        {
            title: "The bread and wine become Christ and are to be worshipped",
            explanation: "Rome teaches that the bread and wine become Christ's actual body and"
                + " blood, with only their appearance remaining (transubstantiation).[1] So"
                + " Catholics worship the consecrated host as Christ himself, both during Mass"
                + " and when it is displayed outside of it.[2]",
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
            see_also: ['1 Corinthians 11:24-26', 'Exodus 20:4', 'Matthew 4:10'],
            further: [
                gq("What is transubstantiation?", 'transubstantiation'),
            ],
        },
        {
            title: "Punishment for sin remains and can be reduced by indulgences",
            explanation: "Indulgences are no longer sold, but Rome still teaches that even"
                + " after forgiveness, \"temporal punishment\" remains, to be paid in this"
                + " life or in purgatory. Indulgences, still granted today, reduce it by"
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
            see_also: ['Hebrews 10:14', '1 John 1:7', 'Colossians 2:13-14'],
            further: [
                gq("What are indulgences and plenary indulgences, and are the concepts"
                    + " biblical?",
                    'plenary-indulgences'),
                gq("What does the Bible say about purgatory?", 'purgatory'),
            ],
        },
        {
            title: "Mary was sinless and was taken bodily into heaven",
            explanation: "Catholics must believe Mary was kept from all sin from her"
                + " conception, saved by Christ in advance, as declared by Pope Pius IX in"
                + " 1854,[1][2] and that she was taken body and soul into heaven, as declared"
                + " by Pope Pius XII in 1950.[3][4]",
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
            response: "Scripture says nothing of Mary being sinless or taken bodily into"
                + " heaven. It teaches that all have sinned except Christ, and no one may be"
                + " required to believe as essential what God has not revealed.",
            verse: "Luke 1:47",
            see_also: ['Romans 3:23', 'Hebrews 4:15', '1 Corinthians 4:6'],
            further: [
                gq("What is the Immaculate Conception?", 'immaculate-conception'),
                gq("What is the Assumption of Mary?", 'Assumption-Mary'),
            ],
        },
        {
            title: "We should pray to Mary and the saints for their help",
            explanation: "Rome teaches that Christ is the only Redeemer, and in 2025 it"
                + " rejected calling Mary \"Co-redemptrix\".[1] But it still teaches that"
                + " Mary shares in Christ's mediation by her intercession,[2] and encourages"
                + " Catholics to pray to her and to the saints in heaven for help.[3][4]",
            sources: [
                {
                    label: "Dicastery for the Doctrine of the Faith, Mater Populi Fidelis"
                        + " (2025)",
                    url: 'https://www.vatican.va/roman_curia/congregations/cfaith/'
                        + 'documents/rc_ddf_doc_20251104_mater-populi-fidelis_en.html',
                },
                ccc("969–970", '__P2C'),
                ccc("956", '__P2B'),
                ccc("2677", '__P9F'),
            ],
            quote: {
                text: "Through her intercession, Mary can implore God to grant us those"
                    + " internal impulses of the Holy Spirit that are called “actual"
                    + " graces.”",
                source: 1,
            },
            response: "There is one mediator between God and people, Jesus Christ. Scripture"
                + " never directs prayer to anyone in heaven but God, and through Christ we"
                + " can come to God directly.",
            verse: "1 Timothy 2:5",
            see_also: ['Hebrews 4:14-16', 'John 14:13-14', 'Matthew 6:9'],
            further: [
                gq("Is the Catholic doctrine of intercession of the saints biblical?",
                    'intercession-of-the-saints'),
                gq("Is prayer to saints / Mary biblical?", 'prayer-saints-Mary'),
            ],
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
            see_also: ['Exodus 20:4', 'Isaiah 42:8', 'Acts 10:25-26', '1 John 5:21'],
            further: [
                gq("What are dulia, hyperdulia, and latria?", 'dulia-hyperdulia-latria'),
                gq("How should a Christian view relics?", 'Christian-relics'),
            ],
        },
        {
            title: "The true Church is the one under the Pope",
            explanation: "Rome warmly calls Protestants fellow Christians and sees elements"
                + " of truth and grace in their churches.[1] But it teaches that the one"
                + " Church of Christ \"subsists in\" the Catholic Church under the Pope, and"
                + " that the fullness of the means of salvation is found only there.[1]",
            sources: [ccc("816–819, 846", '__P29')],
            quote: {
                text: "This Church, constituted and organized as a society in the present"
                    + " world, subsists in the Catholic Church, which is governed by the"
                    + " successor of Peter and by the bishops in communion with him.",
                source: 1,
            },
            response: "The true church is all who trust in Christ, wherever the gospel is"
                + " rightly preached. Christ, not Peter, is the foundation.",
            verse: "1 Corinthians 3:11",
            see_also: ['Ephesians 2:19-22', 'Galatians 3:26-29', '1 Peter 2:4-6'],
            further: [
                gq("Which church is the true church?", 'true-church'),
            ],
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
            see_also: ['Luke 24:44', 'Matthew 23:35'],
            further: [
                gq("What are the Apocrypha / Deuterocanonical books?",
                    'Apocrypha-deuterocanonical'),
            ],
        },
    ],
}


export default religion
