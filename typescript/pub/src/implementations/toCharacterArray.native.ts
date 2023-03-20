import * as pi from 'pareto-core-internals'

import { A } from "../api.generated"

export const $$: A.toCharacterArray = () => {
    return ($) => {
        const out: number[] = []
        for (let i = 0; i !== $.length; i += 1) {
            out.push($.charCodeAt(i))
        }
        return pi.wrapRawArray(out)
    }
}