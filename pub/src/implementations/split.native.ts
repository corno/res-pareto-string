import * as pi from 'pareto-core-internals'

import * as mapi from "../api"

export const $$: mapi.Csplit = ($) => {
    return pi.wrapRawArray($.value.split($.splitter))
}