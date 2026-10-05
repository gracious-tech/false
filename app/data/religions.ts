
// All religion/sect pages, each defined in its own file under ./religions

import type {Religion} from './common'
import bahai from './religions/bahai'
import buddhism from './religions/buddhism'
import catholic from './religions/catholic'
import christian_science from './religions/christian-science'
import hinduism from './religions/hinduism'
import islam from './religions/islam'
import judaism from './religions/judaism'
import jw from './religions/jw'
import mormon from './religions/mormon'
import oneness from './religions/oneness'
import orthodox from './religions/orthodox'
import scientology from './religions/scientology'
import sikhism from './religions/sikhism'
import unitarian from './religions/unitarian'

export type {FalseBelief, Quote, Religion, Source} from './common'


// All religions, sorted by name as listed on the home page
export const religions:Religion[] = [
    bahai,
    buddhism,
    catholic,
    christian_science,
    hinduism,
    islam,
    judaism,
    jw,
    mormon,
    oneness,
    orthodox,
    scientology,
    sikhism,
    unitarian,
].sort((a, b) => a.name.localeCompare(b.name))


// Lookup a religion by its URL slug
export function get_religion(slug:string):Religion|undefined{
    return religions.find(r => r.slug === slug)
}
