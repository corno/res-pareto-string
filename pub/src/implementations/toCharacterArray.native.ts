import * as pi from 'pareto-core-internals'

import * as mapi from "../api"

export const $$: mapi.CtoCharacterArray = ($) => {
    const out: number[] = []
    for (let i = 0; i !== $.length; i += 1) {
        out.push($.charCodeAt(i))
    }
    return pi.wrapRawArray(out)
}
