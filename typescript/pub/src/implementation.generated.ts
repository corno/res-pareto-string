import { API } from "./api.generated"
import { $$ as iescape } from "./implementations/escape.native"
import { $$ as ifromCharacterArray } from "./implementations/fromCharacterArray.native"
import { $$ as ijoin } from "./implementations/join.native"
import { $$ as ilength } from "./implementations/length.native"
import { $$ as ireplaceAll } from "./implementations/replaceAll.native"
import { $$ as isplit } from "./implementations/split.native"
import { $$ as isplitIn2 } from "./implementations/splitIn2.native"
import { $$ as istartsWith } from "./implementations/startsWith.native"
import { $$ as isubstr } from "./implementations/substr.native"
import { $$ as itoCharacterArray } from "./implementations/toCharacterArray.native"
import { $$ as itrimEnd } from "./implementations/trimEnd.native"

export const $api: API = {
    'escape': iescape,
    'fromCharacterArray': ifromCharacterArray,
    'join': ijoin,
    'length': ilength,
    'replaceAll': ireplaceAll,
    'split': isplit,
    'splitIn2': isplitIn2,
    'startsWith': istartsWith,
    'substr': isubstr,
    'toCharacterArray': itoCharacterArray,
    'trimEnd': itrimEnd,
}