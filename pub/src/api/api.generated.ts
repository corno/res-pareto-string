import * as pt from 'pareto-core-types'

import * as gthis from "./glossary"

export type CfromCharacterArray = gthis.FFromCharacterArray

export type Clength = gthis.FLength

export type CreplaceAll = gthis.FReplaceAll

export type Csplit = gthis.FSplit

export type CsplitIn2 = gthis.FSplitIn2

export type CstartsWith = gthis.FStartsWith

export type Csubstr = gthis.FSubstr

export type CtoCharacterArray = gthis.FToCharacterArray

export type CtrimEnd = gthis.FTrimEnd

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