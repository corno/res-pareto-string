import * as mapi from "../api"

export const $$: mapi.CstartsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}