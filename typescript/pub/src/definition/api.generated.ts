import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export type fromCharacterArray = g_this.F.FromCharacterArray

export type length = g_this.F.Length

export type replaceAll = g_this.F.ReplaceAll

export type split = g_this.F.Split

export type splitIn2 = g_this.F.SplitIn2

export type startsWith = g_this.F.StartsWith

export type substr = g_this.F.Substr

export type toCharacterArray = g_this.F.ToCharacterArray

export type trimEnd = g_this.F.TrimEnd

export type API = {
    fromCharacterArray: fromCharacterArray
    length: length
    replaceAll: replaceAll
    split: split
    splitIn2: splitIn2
    startsWith: startsWith
    substr: substr
    toCharacterArray: toCharacterArray
    trimEnd: trimEnd
}