import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"


export type CfromCharacterArray = gglo.FFromCharacterArray

export type Clength = gglo.FLength

export type CreplaceAll = gglo.FReplaceAll

export type Csplit = gglo.FSplit

export type CsplitIn2 = gglo.FSplitIn2

export type CstartsWith = gglo.FStartsWith

export type Csubstr = gglo.FSubstr

export type CtoCharacterArray = gglo.FToCharacterArray

export type CtrimEnd = gglo.FTrimEnd

export type API = {
    fromCharacterArray: CfromCharacterArray
    length: Clength
    replaceAll: CreplaceAll
    split: Csplit
    splitIn2: CsplitIn2
    startsWith: CstartsWith
    substr: Csubstr
    toCharacterArray: CtoCharacterArray
    trimEnd: CtrimEnd
}