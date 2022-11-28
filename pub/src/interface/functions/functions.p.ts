import * as pt from "pareto-core-types"

export type FSplitString =  pt.Function<{
    value: string
    splitter: string
}, pt.Array<string>>

export type FSplitStringIn2 = pt.Function<{
    value: string
    splitter: string
}, {
    first: string
    second: string | null
}>

export type FTrimEnd = pt.Function<string, string>

export type FStringLength = pt.Function<string, number>

export type FSubStr = pt.Function<{
    readonly "value": string,
    readonly "begin": number,
    readonly "length": number,
}, string>

export type FStartsWith = pt.Function<{
    readonly "contextString": string
    readonly "searchString": string
}, boolean>