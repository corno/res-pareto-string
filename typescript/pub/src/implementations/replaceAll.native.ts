


import { CreplaceAll } from "../definition/api.generated"

export const $$:CreplaceAll = ($) => {
    return $.value.replace(new RegExp($.pattern, 'g'), $.replacement)
}