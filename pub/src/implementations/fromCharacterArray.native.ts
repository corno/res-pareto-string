

import { CfromCharacterArray } from "../api"

export const $$:CfromCharacterArray = ($) => {
    let out = ""
    $.__forEach(($) => {
        out += String.fromCharCode($)
    })
    return out
}
