import { A } from "../api.generated"

export const $$: A.createStringBuilder = ($c) => {
    return ($is) => {
        let temp = $c
        return {
            'data': ($) => {
                temp += $
            },
            'end': () => {
                $is.handler(temp)
            }
        }
    }
}