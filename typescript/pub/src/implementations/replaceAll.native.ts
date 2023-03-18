


import { A } from "../api.generated"

export const $$: A.replaceAll = ($) => {
    return $.value.replace(new RegExp($.pattern, 'g'), $.replacement)
}