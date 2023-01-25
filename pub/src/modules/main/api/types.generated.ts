import * as pt from 'pareto-core-types'
import * as mcommon from "glo-pareto-common"

export type TSplitData = {
    readonly 'splitter': string
    readonly 'value': string
}

export type TSplitIn2Result = {
    readonly 'first': string
    readonly 'second': null | string
}

export type TSplitResult = pt.Array<string>

export type TStartsWithData = {
    readonly 'contextString': string
    readonly 'searchString': string
}

export type TSubstrData = {
    readonly 'begin': number
    readonly 'length': number
    readonly 'value': string
}

export type FSplit = ($: TSplitData,) => TSplitResult

export type FSplitIn2 = ($: TSplitData,) => TSplitIn2Result

export type FStartsWith = ($: TStartsWithData,) => mcommon.TBoolean

export type FStringLength = ($: mcommon.TString,) => mcommon.TNumber

export type FSubstr = ($: TSubstrData,) => mcommon.TString

export type FTrimEnd = ($: mcommon.TString,) => mcommon.TString