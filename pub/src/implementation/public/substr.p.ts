import * as api from "glo-pareto-string"

export const f_substr: api.FSubStr = ($) => {
    return $.value.substr($.begin, $.length)
}
