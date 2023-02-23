import * as mapi from "../api"

export const $$: mapi.Csubstr = ($) => {
    return $.value.substr($.begin, $.length)
}
