import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type FLength = ($: mcommon.T.String,) => mcommon.T.Number

export type FSplit = ($: T.SplitData,) => T.SplitResult

export type FSplitIn2 = ($: T.SplitData,) => T.SplitIn2Result

export type FStartsWith = ($: T.StartsWithData,) => mcommon.T.Boolean

export type FSubstr = ($: T.SubstrData,) => mcommon.T.String

export type FTrimEnd = ($: mcommon.T.String,) => mcommon.T.String