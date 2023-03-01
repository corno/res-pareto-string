

import { Csubstr } from "../api"

export const $$:Csubstr = ($) => {
    return $.value.substr($.begin, $.length)
}
