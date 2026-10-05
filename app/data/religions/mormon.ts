
// Data for the mormon page

import type {Religion} from '../common'
import {gq, lds} from '../common'


const religion:Religion = {
    slug: 'mormon',
    name: "Mormonism",
    summary: "The Church of Jesus Christ of Latter-day Saints was founded in 1830 by Joseph"
        + " Smith, whom members believe God called to restore the true church. Latter-day"
        + " Saints love Jesus as their Saviour and value family, service and clean living,"
        + " but their teaching about God, humanity and salvation differs deeply from the"
        + " Bible's. The sources below are from the Church's official website.",
    beliefs: [
        {
            primary: true,
            title: "God the Father has a physical body and was once a man",
            explanation: "Latter-day Saint scripture says the Father has a body of flesh and"
                + " bones.[1] Church leaders have taught \"As man now is, God once was\", though"
                + " the Church now says little has been revealed or taught about this.[2]",
            sources: [
                lds("Doctrine and Covenants 130:22", 'scriptures/dc-testament/dc/130'),
                lds("Gospel Topics Essays, “Becoming Like God”",
                    'manual/gospel-topics-essays/becoming-like-god'),
            ],
            quote: {
                text: "The Father has a body of flesh and bones as tangible as man’s; the Son"
                    + " also.",
                source: 1,
            },
            response: "God is spirit and has always been God. He is not a man, and there was"
                + " never a time when he was not God.",
            verse: "John 4:24",
            see_also: ['Numbers 23:19', 'Psalm 90:2', 'Malachi 3:6', 'Hosea 11:9'],
            further: [
                gq("What is exaltation in Mormonism?", 'exaltation-in-Mormonism'),
                gq("What is Mormonism? What do Mormons believe?", 'Mormons'),
            ],
        },
        {
            primary: true,
            title: "Faithful people can become gods",
            explanation: "Latter-day Saints teach that every person is a spirit child of"
                + " heavenly parents with the potential to become like God.[1] Their scripture"
                + " says those who keep their covenants, including eternal marriage, will"
                + " \"be gods\".[2]",
            sources: [
                lds("Gospel Topics Essays, “Becoming Like God”",
                    'manual/gospel-topics-essays/becoming-like-god'),
                lds("Doctrine and Covenants 132:20", 'scriptures/dc-testament/dc/132'),
            ],
            quote: {
                text: "Then shall they be gods, because they have no end.",
                source: 2,
            },
            response: "There is only one God. No god existed before him and none will come"
                + " after him. Believers are made like Christ in character, but never become"
                + " gods.",
            verse: "Isaiah 43:10",
            see_also: ['Isaiah 44:6-8', 'Genesis 3:5', '1 John 3:2'],
            further: [
                gq("What is exaltation in Mormonism?", 'exaltation-in-Mormonism'),
                gq("What does the Bible mean by “you are gods” / “ye are gods” in Psalm 82:6"
                    + " and John 10:34?", 'you-are-gods'),
            ],
        },
        {
            primary: true,
            title: "The Father, Son and Holy Ghost are three separate beings",
            explanation: "Latter-day Saints believe in the Father, Son and Holy Ghost,[1] but"
                + " teach that they are three separate beings who are one in purpose, not one"
                + " God.[2]",
            sources: [
                lds("Articles of Faith 1", 'scriptures/pgp/a-of-f/1'),
                lds("Topics and Questions, “Godhead”", 'manual/gospel-topics/godhead'),
            ],
            quote: {
                text: "We know that the members of the Godhead are three separate beings.",
                source: 2,
            },
            response: "There is only one God. The Father, Son and Holy Spirit are three"
                + " persons who share the one being of God, not three gods united in purpose.",
            verse: "Isaiah 45:5",
            see_also: ['Deuteronomy 6:4', 'John 10:30', '1 Corinthians 8:4-6',
                'Matthew 28:19'],
            further: [
                gq("Do Mormons believe in the Trinity?", 'Mormons-believe-Trinity'),
                gq("What does the Bible teach about the Trinity?", 'Trinity-Bible'),
            ],
        },
        {
            primary: true,
            title: "The true church was lost and restored through Joseph Smith",
            explanation: "Latter-day Saints teach that after the apostles died, the church fell"
                + " into a \"Great Apostasy\" and God's authority was taken from the earth"
                + " until it was restored through Joseph Smith.[1]",
            sources: [lds("Topics and Questions, “Apostasy”", 'manual/gospel-topics/apostasy')],
            quote: {
                text: "Because of this widespread apostasy, the Lord withdrew the authority of"
                    + " the priesthood from the earth.",
                source: 1,
            },
            response: "Jesus promised that his church would never be overcome and that he"
                + " would be with it always. The gospel was delivered once for all.",
            verse: "Matthew 16:18",
            see_also: ['Matthew 28:20', 'Jude 3', 'Ephesians 3:21'],
            further: [gq("Are Mormons Christians? Are Mormons saved?", 'Mormons-Christians')],
        },
        {
            title: "The Book of Mormon is more reliable than the Bible",
            explanation: "Latter-day Saints accept the Bible \"as far as it is translated"
                + " correctly\" but the Book of Mormon without that limit,[1] and Joseph Smith"
                + " called the Book of Mormon the \"most correct\" book on earth.[2]",
            sources: [
                lds("Articles of Faith 8", 'scriptures/pgp/a-of-f/1'),
                lds("Introduction to the Book of Mormon", 'scriptures/bofm/introduction'),
            ],
            quote: {
                text: "We believe the Bible to be the word of God as far as it is translated"
                    + " correctly; we also believe the Book of Mormon to be the word of God.",
                source: 1,
            },
            response: "The Bible is God's complete and trustworthy word, preserved by him."
                + " Any later message that adds to or changes the gospel is not from God.",
            verse: "2 Timothy 3:16",
            see_also: ['Isaiah 40:8', 'Galatians 1:8', 'Revelation 22:18'],
            further: [
                gq("How should Christians view the Book of Mormon?", 'book-of-Mormon'),
            ],
        },
        {
            title: "Temple ordinances are needed for the highest salvation",
            explanation: "Latter-day Saints believe all people can be saved through Christ's"
                + " Atonement \"by obedience to the laws and ordinances of the Gospel\".[1] To"
                + " reach the highest glory (exaltation), they must also receive ordinances"
                + " such as the temple endowment and eternal marriage.[2]",
            sources: [
                lds("Articles of Faith 3", 'scriptures/pgp/a-of-f/1'),
                lds("Topics and Questions, “Ordinances”", 'manual/gospel-topics/ordinances'),
            ],
            quote: {
                text: "Some ordinances are essential to our exaltation. They include baptism,"
                    + " confirmation, ordination to the Melchizedek Priesthood (for men), the"
                    + " temple endowment, and the marriage sealing.",
                source: 2,
            },
            response: "Salvation and every blessing of heaven are a free gift received by"
                + " faith in Christ, not earned by keeping ordinances.",
            verse: "Ephesians 2:8-9",
            see_also: ['Titus 3:5', 'Romans 4:5', 'Galatians 3:10-11', 'Romans 8:17'],
            further: [
                gq("What are the celestial, telestial, and terrestrial kingdoms in"
                    + " Mormonism?", 'celestial-telestial-terrestrial-kingdoms'),
            ],
        },
        {
            title: "The living can be baptised on behalf of the dead",
            explanation: "Latter-day Saints perform proxy baptisms in temples for people who"
                + " died without being baptised, who can then accept or reject them in the"
                + " spirit world.[1]",
            sources: [lds("Topics and Questions, “Baptisms for the Dead”",
                'manual/gospel-topics/baptisms-for-the-dead')],
            quote: {
                text: "A living person, often a descendant who has become a member of The"
                    + " Church of Jesus Christ of Latter-day Saints, is baptized on behalf of a"
                    + " deceased person.",
                source: 1,
            },
            response: "There is no second chance after death. Each person must trust Christ"
                + " in this life, and no one can do it for them.",
            verse: "Hebrews 9:27",
            see_also: ['Luke 16:26', '2 Corinthians 6:2', 'John 3:18'],
            further: [gq("What is baptism for the dead?", 'baptism-dead')],
        },
        {
            title: "We lived before birth as spirit children of God, as did Jesus and Lucifer",
            explanation: "Latter-day Saints teach that all people lived with Heavenly Father as"
                + " his spirit children before birth. Jesus was his firstborn spirit son, and"
                + " Lucifer was another spirit son who rebelled.[1]",
            sources: [lds("Topics and Questions, “Premortality”",
                'manual/gospel-topics/premortality')],
            quote: {
                text: "Lucifer, another spirit son of God, rebelled against the plan.",
                source: 1,
            },
            response: "Jesus is the eternal Creator of all things, including the angels who"
                + " later fell. We did not exist before conception; God formed us in the womb.",
            verse: "Colossians 1:16",
            see_also: ['John 1:3', 'Genesis 2:7', 'Psalm 139:13', 'Ezekiel 28:15'],
            further: [
                gq("Are Jesus and Satan brothers?", 'Jesus-Satan-brothers'),
                gq("Does the Bible support the pre-existence of Jesus?",
                    'pre-existence-Jesus'),
            ],
        },
        {
            title: "Almost everyone will inherit a kingdom of glory",
            explanation: "Latter-day Saint scripture describes three kingdoms of glory after"
                + " death, celestial, terrestrial and telestial. Even the lowest, for the"
                + " wicked, has a glory that \"surpasses all understanding\".[1]",
            sources: [lds("Doctrine and Covenants 76", 'scriptures/dc-testament/dc/76')],
            quote: {
                text: "And thus we saw, in the heavenly vision, the glory of the telestial,"
                    + " which surpasses all understanding.",
                source: 1,
            },
            response: "There are only two eternal destinies: eternal life with God for those"
                + " who trust Christ, and eternal punishment for those who do not.",
            verse: "Matthew 25:46",
            see_also: ['John 3:36', 'Revelation 20:15', 'Matthew 7:13-14'],
            further: [
                gq("What are the celestial, telestial, and terrestrial kingdoms in"
                    + " Mormonism?", 'celestial-telestial-terrestrial-kingdoms'),
            ],
        },
    ],
}


export default religion
