import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type FromCharacterArray = ($: T.CharacterArray) => g_common.T.String
        }
        
        
        export namespace F {
            export type Length = ($: g_common.T.String) => g_common.T.Number
        }
        
        
        export namespace F {
            export type ReplaceAll = ($: T.ReplaceAllData) => g_common.T.String
        }
        
        
        export namespace F {
            export type Split = ($: T.SplitData) => T.SplitResult
        }
        
        
        export namespace F {
            export type SplitIn2 = ($: T.SplitData) => T.SplitIn2Result
        }
        
        
        export namespace F {
            export type StartsWith = ($: T.StartsWithData) => g_common.T.Boolean
        }
        
        
        export namespace F {
            export type Substr = ($: T.SubstrData) => g_common.T.String
        }
        
        
        export namespace F {
            export type ToCharacterArray = ($: g_common.T.String) => T.CharacterArray
        }
        
        
        export namespace F {
            export type TrimEnd = ($: g_common.T.String) => g_common.T.String
        }
    }
}