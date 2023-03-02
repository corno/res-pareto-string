import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type FFromCharacterArray = ($: T.CharacterArray,) => gcommon.T.String

export type FLength = ($: gcommon.T.String,) => gcommon.T.Number

export type FReplaceAll = ($: T.ReplaceAllData,) => gcommon.T.String

export type FSplit = ($: T.SplitData,) => T.SplitResult

export type FSplitIn2 = ($: T.SplitData,) => T.SplitIn2Result

export type FStartsWith = ($: T.StartsWithData,) => gcommon.T.Boolean

export type FSubstr = ($: T.SubstrData,) => gcommon.T.String

export type FToCharacterArray = ($: gcommon.T.String,) => T.CharacterArray

export type FTrimEnd = ($: gcommon.T.String,) => gcommon.T.String