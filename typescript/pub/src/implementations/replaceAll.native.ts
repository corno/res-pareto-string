


import { A } from "../api.generated"

export const $$: A.replaceAll = () => {
    return ($) => {
        return $.value.replace(new RegExp($.pattern, 'g'), $.replacement)
    }
}