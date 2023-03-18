

import { A } from "../api.generated"

export const $$: A.fromCharacterArray = ($) => {
    let out = ""
    $.__forEach(($) => {
        out += String.fromCharCode($)
    })
    return out
}
