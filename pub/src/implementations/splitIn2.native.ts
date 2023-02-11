import * as api from "../api"

export const $$: api.CsplitIn2 = ($) => {
    const position = $.value.indexOf($.splitter)
    if (position === -1) {
        return {
            first: $.value,
            second: [false],
        }
    } else {
        return {
            first: $.value.substring(0, position),
            second: [true, $.value.substring(position + $.splitter.length)],
        }
    }
}