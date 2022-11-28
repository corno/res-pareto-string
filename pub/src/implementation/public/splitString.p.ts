import * as pi from "pareto-core-internals"

import * as api from "../../interface"

export const f_splitString: api.FSplitString = ($) => {
    return pi.wrapRawArray($.value.split($.splitter))
}