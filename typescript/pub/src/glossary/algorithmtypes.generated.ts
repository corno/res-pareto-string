import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace C {}
    
    export namespace F {}
}

export namespace SYNC {
    
    export namespace I {}
    
    export namespace I2 {}
    
    export namespace I3 {}
    
    export namespace C {}
    
    export namespace C2 {}
    
    export namespace C3 {}
    
    export namespace F {
        
        export type FromCharacterArray = ($: T.CharacterArray) => g_common.T.String
        
        export type Length = ($: g_common.T.String) => g_common.T.Number
        
        export type ReplaceAll = ($: T.ReplaceAllData) => g_common.T.String
        
        export type Split = ($: T.SplitData) => T.SplitResult
        
        export type SplitIn2 = ($: T.SplitData) => T.SplitIn2Result
        
        export type StartsWith = ($: T.StartsWithData) => g_common.T.Boolean
        
        export type Substr = ($: T.SubstrData) => g_common.T.String
        
        export type ToCharacterArray = ($: g_common.T.String) => T.CharacterArray
        
        export type TrimEnd = ($: g_common.T.String) => g_common.T.String
    }
}