import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
    
    
    
    
    
    
}

export namespace A {
    
    export type escape = () => g_this.SYNC.A.F.Escape
    
    export type fromCharacterArray = () => g_this.SYNC.A.F.FromCharacterArray
    
    export type join = () => g_this.SYNC.A.F.Join
    
    export type length = () => g_this.SYNC.A.F.Length
    
    export type replaceAll = () => g_this.SYNC.A.F.ReplaceAll
    
    export type split = () => g_this.SYNC.A.F.Split
    
    export type splitIn2 = () => g_this.SYNC.A.F.SplitIn2
    
    export type startsWith = () => g_this.SYNC.A.F.StartsWith
    
    export type substr = () => g_this.SYNC.A.F.Substr
    
    export type toCharacterArray = () => g_this.SYNC.A.F.ToCharacterArray
    
    export type trimEnd = () => g_this.SYNC.A.F.TrimEnd
}

export type API = {
    readonly 'escape': A.escape
    readonly 'fromCharacterArray': A.fromCharacterArray
    readonly 'join': A.join
    readonly 'length': A.length
    readonly 'replaceAll': A.replaceAll
    readonly 'split': A.split
    readonly 'splitIn2': A.splitIn2
    readonly 'startsWith': A.startsWith
    readonly 'substr': A.substr
    readonly 'toCharacterArray': A.toCharacterArray
    readonly 'trimEnd': A.trimEnd
}