import * as api from "glo-pareto-string"

export const f_splitStringIn2: api.FSplitStringIn2 = ($) => {
    const position = $.value.indexOf($.splitter)
    if (position === -1) {
        return {
            first: $.value,
            second: null
        }
    } else {
        return {
            first: $.value.substring(0, position),
            second: $.value.substring(position + $.splitter.length),
        }
    }
}