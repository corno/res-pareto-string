import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type fromCharacterArray = g_this.SYNC.A.F.FromCharacterArray
    
    export type length = g_this.SYNC.A.F.Length
    
    export type replaceAll = g_this.SYNC.A.F.ReplaceAll
    
    export type split = g_this.SYNC.A.F.Split
    
    export type splitIn2 = g_this.SYNC.A.F.SplitIn2
    
    export type startsWith = g_this.SYNC.A.F.StartsWith
    
    export type substr = g_this.SYNC.A.F.Substr
    
    export type toCharacterArray = g_this.SYNC.A.F.ToCharacterArray
    
    export type trimEnd = g_this.SYNC.A.F.TrimEnd
}

export type API = {
    fromCharacterArray: A.fromCharacterArray
    length: A.length
    replaceAll: A.replaceAll
    split: A.split
    splitIn2: A.splitIn2
    startsWith: A.startsWith
    substr: A.substr
    toCharacterArray: A.toCharacterArray
    trimEnd: A.trimEnd
}