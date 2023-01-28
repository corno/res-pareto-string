import { API } from "./api"
import { $$ as ilength } from "./implementations/length.native"
import { $$ as isplit } from "./implementations/split.native"
import { $$ as isplitIn2 } from "./implementations/splitIn2.native"
import { $$ as istartsWith } from "./implementations/startsWith.native"
import { $$ as isubstr } from "./implementations/substr.native"
import { $$ as itrimEnd } from "./implementations/trimEnd.native"

export const $a: API = {
    'length': ilength,
    'split': isplit,
    'splitIn2': isplitIn2,
    'startsWith': istartsWith,
    'substr': isubstr,
    'trimEnd': itrimEnd,
}