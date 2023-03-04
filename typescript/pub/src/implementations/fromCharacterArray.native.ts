

import { fromCharacterArray } from "../definition/api.generated"

export const $$:fromCharacterArray = ($) => {
    let out = ""
    $.__forEach(($) => {
        out += String.fromCharCode($)
    })
    return out
}
