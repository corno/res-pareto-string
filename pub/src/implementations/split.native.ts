import * as pi from "pareto-core-internals"

import * as api from "../api"

export const $$: api.Csplit = ($) => {
    return pi.wrapRawArray($.value.split($.splitter))
}