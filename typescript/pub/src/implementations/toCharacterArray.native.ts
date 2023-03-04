import * as pi from 'pareto-core-internals'



import { toCharacterArray } from "../definition/api.generated"

export const $$:toCharacterArray = ($) => {
    const out: number[] = []
    for (let i = 0; i !== $.length; i += 1) {
        out.push($.charCodeAt(i))
    }
    return pi.wrapRawArray(out)
}
