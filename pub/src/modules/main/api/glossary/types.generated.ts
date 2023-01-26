import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GSplitData {}
export type GSplitData = {
    readonly 'splitter': string
    readonly 'value': string
}
export type USplitData = GSplitData

export namespace GSplitIn2Result {
    
    export namespace Psecond {}
    export type Psecond = null | string
}
export type GSplitIn2Result = {
    readonly 'first': string
    readonly 'second': GSplitIn2Result.Psecond
}
export type USplitIn2Result = GSplitIn2Result

export namespace GSplitResult {}
export type GSplitResult = pt.Array<string>
export type USplitResult = GSplitResult

export namespace GStartsWithData {}
export type GStartsWithData = {
    readonly 'contextString': string
    readonly 'searchString': string
}
export type UStartsWithData = GStartsWithData

export namespace GSubstrData {}
export type GSubstrData = {
    readonly 'begin': number
    readonly 'length': number
    readonly 'value': string
}
export type USubstrData = GSubstrData