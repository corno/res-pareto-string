import * as pi from 'pareto-core-internals'



import { split } from "../api.generated"

export const $$:split = ($) => {
    return pi.wrapRawArray($.value.split($.splitter))
}