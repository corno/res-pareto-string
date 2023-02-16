import * as pi from 'pareto-core-internals'

import * as api from "../api"

export const $$: api.CtoCharacterArray = ($) => {
    const out: number[] = []
    for (let i = 0; i !== $.length; i += 1) {
        out.push($.charCodeAt(i))
    }
    return pi.wrapRawArray(out)
}
