
// Fetch Bible verse text from fetch(bible)

import {FetchClient, PassageReference} from '@gracious.tech/fetch-client'


// The translation that all verses are quoted from
export const translation = 'eng_bsb'

// Client for the official fetch(bible) collection
const client = new FetchClient({endpoints: ['https://v1.fetch.bible/']})


// Fetch the plain text of each passage reference (like "John 3:16"), keyed by the reference
export async function fetch_verses(refs:string[]):Promise<Record<string, string>>{
    const collection = await client.fetch_collection()
    const texts:Record<string, string> = {}
    for (const ref_str of refs){

        // Parse the reference and fail loudly so a typo doesn't silently drop a verse
        const ref = PassageReference.from_string(ref_str)
        if (!ref){
            throw new Error(`Invalid Bible reference: ${ref_str}`)
        }

        // Get the passage as plain text without verse numbers, headings, notes or attribution
        const book = await collection.bibles.fetch_book(translation, ref.book, 'txt')
        const text = book.get_passage_from_ref(ref,
            {verse_nums: false, headings: false, notes: false, attribute: false})
        texts[ref_str] = text.replace(/\s+/g, ' ').trim()
    }
    return texts
}
