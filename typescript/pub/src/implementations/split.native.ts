import * as pi from 'pareto-core-internals'



import { Csplit } from "../definition/api.generated"

export const $$:Csplit = ($) => {
    return pi.wrapRawArray($.value.split($.splitter))
}