

import { startsWith } from "../definition/api.generated"

export const $$:startsWith = ($) => {
    return $.contextString.startsWith($.searchString)
}