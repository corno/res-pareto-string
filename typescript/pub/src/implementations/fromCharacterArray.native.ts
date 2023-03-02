

import { CfromCharacterArray } from "../definition/api.generated"

export const $$:CfromCharacterArray = ($) => {
    let out = ""
    $.__forEach(($) => {
        out += String.fromCharCode($)
    })
    return out
}
