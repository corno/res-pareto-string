import * as api from "../api"

export const $$: api.CfromCharacterArray = ($) => {
    let out = ""
    $.forEach(($) => {
        out += String.fromCharCode($)
    })
    return out
}
