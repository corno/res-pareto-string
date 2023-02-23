
import * as mapi from "../api"

export const $$: mapi.CreplaceAll = ($) => {
    return $.value.replace(new RegExp($.pattern, 'g'), $.replacement)
}