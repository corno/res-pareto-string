import * as pi from 'pareto-core-internals'



import { Csplit } from "../api"

export const $$:Csplit = ($) => {
    return pi.wrapRawArray($.value.split($.splitter))
}