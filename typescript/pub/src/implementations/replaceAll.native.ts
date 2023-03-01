


import { CreplaceAll } from "../api"

export const $$:CreplaceAll = ($) => {
    return $.value.replace(new RegExp($.pattern, 'g'), $.replacement)
}