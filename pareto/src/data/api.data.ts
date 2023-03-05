import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> =  {
    'algorithms': d({
        "fromCharacterArray": algorithm(functionReference("this", {}, "FromCharacterArray")),
        "length": algorithm(functionReference("this", {}, "Length")),
        "replaceAll": algorithm(functionReference("this", {}, "ReplaceAll")),
        "split": algorithm(functionReference("this", {}, "Split")),
        "splitIn2": algorithm(functionReference("this", {}, "SplitIn2")),
        "startsWith": algorithm(functionReference("this", {}, "StartsWith")),
        "substr": algorithm(functionReference("this", {}, "Substr")),
        "toCharacterArray": algorithm(functionReference("this", {}, "ToCharacterArray")),
        "trimEnd": algorithm(functionReference("this", {}, "TrimEnd")),
    }),
}