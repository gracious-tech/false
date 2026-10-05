
// Shared types and source-link helpers for religion data



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
    see_also?:string[]  // More supporting passages
    further?:Source[]  // Helpful pages for more depth
}


// A religion/sect and its top false beliefs
export interface Religion {
    slug:string
    name:string
    summary:string
    beliefs:FalseBelief[]
}


// Link to a page of the Catechism of the Catholic Church on the Vatican's website
export function ccc(label:string, page:string):Source{
    return {label: `Catechism of the Catholic Church ${label}`,
        url: `https://www.vatican.va/archive/ENG0015/${page}.HTM`}
}


// Link to a session of the Council of Trent
export function trent(label:string, session:string):Source{
    return {label: `Council of Trent, ${label}`,
        url: `https://www.papalencyclicals.net/councils/trent/${session}-session.htm`}
}


// Link to an article on jw.org, the official website of Jehovah's Witnesses
export function jw(label:string, path:string):Source{
    return {label: `jw.org, “${label}”`, url: `https://www.jw.org/en/${path}/`}
}


// Link to a Buddhist scripture on SuttaCentral (translation by Bhikkhu Sujato)
export function sutta(label:string, id:string):Source{
    return {label, url: `https://suttacentral.net/${id}/en/sujato`}
}


// Link to a helpful article on GotQuestions.org
export function gq(label:string, slug:string):Source{
    return {label, url: `https://www.gotquestions.org/${slug}.html`}
}


// Link to a verse of the Quran on Quran.com (Sahih International translation), like "4:157"
export function quran(ref:string):Source{
    return {label: `Quran ${ref}`, url: `https://quran.com/${ref.replace(':', '/')}`}
}


// Link to a page on churchofjesuschrist.org, the official site of the Latter-day Saints
export function lds(label:string, path:string):Source{
    return {label, url: `https://www.churchofjesuschrist.org/study/${path}?lang=eng`}
}


// Link to a Jewish text on Sefaria, like "Mishneh_Torah,_Repentance.1.3"
export function sefaria(label:string, ref:string):Source{
    return {label, url: `https://www.sefaria.org/${ref}?lang=en`}
}


// Link to a page on oca.org, the official site of the Orthodox Church in America
export function oca(label:string, path:string):Source{
    return {label: `Orthodox Church in America, ${label}`, url: `https://www.oca.org/${path}`}
}
