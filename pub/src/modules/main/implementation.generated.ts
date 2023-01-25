import { API } from "./api"
import { $$ as isplit } from "./implementations/split.native"
import { $$ as isplitIn2 } from "./implementations/splitIn2.native"
import { $$ as istartsWith } from "./implementations/startsWith.native"
import { $$ as istringLength } from "./implementations/stringLength.native"
import { $$ as isubstr } from "./implementations/substr.native"
import { $$ as itrimEnd } from "./implementations/trimEnd.native"

export const $a: API = {
    'split': isplit,
    'splitIn2': isplitIn2,
    'startsWith': istartsWith,
    'stringLength': istringLength,
    'substr': isubstr,
    'trimEnd': itrimEnd,
}