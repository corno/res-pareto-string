

import { fromCharacterArray } from "../api.generated"

export const $$:fromCharacterArray = ($) => {
    let out = ""
    $.__forEach(($) => {
        out += String.fromCharCode($)
    })
    return out
}
