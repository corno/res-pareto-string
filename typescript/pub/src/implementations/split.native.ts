import * as pi from 'pareto-core-internals'



import { A } from "../api.generated"

export const $$: A.split = ($) => {
    return pi.wrapRawArray($.value.split($.splitter))
}