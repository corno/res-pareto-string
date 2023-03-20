

import { A } from "../api.generated"

export const $$: A.startsWith = () => {
    return ($) => {
        return $.contextString.startsWith($.searchString)
    }
}