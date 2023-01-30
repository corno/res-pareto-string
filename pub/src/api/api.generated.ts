import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type Clength = glo.FLength

export type Csplit = glo.FSplit

export type CsplitIn2 = glo.FSplitIn2

export type CstartsWith = glo.FStartsWith

export type Csubstr = glo.FSubstr

export type CtrimEnd = glo.FTrimEnd

export type API = {
    length: Clength
    split: Csplit
    splitIn2: CsplitIn2
    startsWith: CstartsWith
    substr: Csubstr
    trimEnd: CtrimEnd
}