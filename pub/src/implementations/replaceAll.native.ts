import * as pi from "pareto-core-internals"

import * as api from "../api"

export const $$: api.CreplaceAll = ($) => {
    return $.value.replace(new RegExp($.pattern, 'g'), $.replacement)
}