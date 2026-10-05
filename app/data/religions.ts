
// All religion/sect pages, each defined in its own file under ./religions

import type {Religion} from './common'
import buddhism from './religions/buddhism'
import catholic from './religions/catholic'
import islam from './religions/islam'
import jw from './religions/jw'
import mormon from './religions/mormon'

export type {FalseBelief, Quote, Religion, Source} from './common'


// All religions, sorted by name as listed on the home page
export const religions:Religion[] = [
    buddhism,
    catholic,
    islam,
    jw,
    mormon,
].sort((a, b) => a.name.localeCompare(b.name))


// Lookup a religion by its URL slug
export function get_religion(slug:string):Religion|undefined{
    return religions.find(r => r.slug === slug)
}
