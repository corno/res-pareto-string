import * as mapi from "../api"

export const $$: mapi.CfromCharacterArray = ($) => {
    let out = ""
    $.__forEach(($) => {
        out += String.fromCharCode($)
    })
    return out
}
