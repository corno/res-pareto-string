import * as api from "../api"

export const $$: api.CstartsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}