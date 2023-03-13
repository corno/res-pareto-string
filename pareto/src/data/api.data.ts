import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> =  {
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