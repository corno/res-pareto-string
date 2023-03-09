


import { replaceAll } from "../api.generated"

export const $$:replaceAll = ($) => {
    return $.value.replace(new RegExp($.pattern, 'g'), $.replacement)
}