

import { CstartsWith } from "../api"

export const $$:CstartsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}