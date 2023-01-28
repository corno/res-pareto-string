import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TSplitData = t.USplitData

export type TSplitIn2Result = t.USplitIn2Result

export type TSplitResult = t.USplitResult

export type TStartsWithData = t.UStartsWithData

export type TSubstrData = t.USubstrData

export type FLength = ($: mcommon.TString,) => mcommon.TNumber

export type FSplit = ($: TSplitData,) => TSplitResult

export type FSplitIn2 = ($: TSplitData,) => TSplitIn2Result

export type FStartsWith = ($: TStartsWithData,) => mcommon.TBoolean

export type FSubstr = ($: TSubstrData,) => mcommon.TString

export type FTrimEnd = ($: mcommon.TString,) => mcommon.TString