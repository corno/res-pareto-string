import * as api from "glo-pareto-string"

export const f_startsWith: api.FStartsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}