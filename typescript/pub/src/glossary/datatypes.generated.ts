import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"

export namespace N {}

export namespace T {
    
    export namespace CharacterArray {
        
        export type A = number
    }
    
    export type CharacterArray = pt.Array<number>
    
    export namespace EscapeParameters {
        
        export type escape = string
        
        export namespace patterns__to__escape {
            
            export type A = string
        }
        
        export type patterns__to__escape = pt.Array<string>
        
        export type _lstring = string
    }
    
    export type EscapeParameters = {
        readonly 'escape': string
        readonly 'patterns to escape': pt.Array<string>
        readonly 'string': string
    }
    
    export namespace JoinData {
        
        export type first = string
        
        export type second = string
    }
    
    export type JoinData = {
        readonly 'first': string
        readonly 'second': string
    }
    
    export namespace ReplaceAllData {
        
        export type pattern = string
        
        export type replacement = string
        
        export type value = string
    }
    
    export type ReplaceAllData = {
        readonly 'pattern': string
        readonly 'replacement': string
        readonly 'value': string
    }
    
    export namespace SplitData {
        
        export type splitter = string
        
        export type value = string
    }
    
    export type SplitData = {
        readonly 'splitter': string
        readonly 'value': string
    }
    
    export namespace SplitIn2Result {
        
        export type first = string
        
        export namespace second {
            
            export type O = string
        }
        
        export type second = [ false ] | [ true, string]
    }
    
    export type SplitIn2Result = {
        readonly 'first': string
        readonly 'second': [ false ] | [ true, string]
    }
    
    export namespace SplitResult {
        
        export type A = string
    }
    
    export type SplitResult = pt.Array<string>
    
    export namespace StartsWithData {
        
        export type contextString = string
        
        export type searchString = string
    }
    
    export type StartsWithData = {
        readonly 'contextString': string
        readonly 'searchString': string
    }
    
    export namespace SubstrData {
        
        export type begin = number
        
        export type length = number
        
        export type value = string
    }
    
    export type SubstrData = {
        readonly 'begin': number
        readonly 'length': number
        readonly 'value': string
    }
}