import * as api from "../api"

export const $$: api.Csubstr = ($) => {
    return $.value.substr($.begin, $.length)
}
