import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CfromCharacterArray = glo.FFromCharacterArray

export type Clength = glo.FLength

export type CreplaceAll = glo.FReplaceAll

export type Csplit = glo.FSplit

export type CsplitIn2 = glo.FSplitIn2

export type CstartsWith = glo.FStartsWith

export type Csubstr = glo.FSubstr

export type CtoCharacterArray = glo.FToCharacterArray

export type CtrimEnd = glo.FTrimEnd

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