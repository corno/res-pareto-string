import * as pd from 'pareto-core-data'

import { algorithm, constructor, data, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "fromCharacterArray": algorithm(sfunction("this", {}, "FromCharacterArray"), {}),
        "length": algorithm(sfunction("this", {}, "Length"), {}),
        "replaceAll": algorithm(sfunction("this", {}, "ReplaceAll"), {}),
        "split": algorithm(sfunction("this", {}, "Split"), {}),
        "splitIn2": algorithm(sfunction("this", {}, "SplitIn2"), {}),
        "startsWith": algorithm(sfunction("this", {}, "StartsWith"), {}),
        "substr": algorithm(sfunction("this", {}, "Substr"), {}),
        "toCharacterArray": algorithm(sfunction("this", {}, "ToCharacterArray"), {}),
        "trimEnd": algorithm(sfunction("this", {}, "TrimEnd"), {}),

        "createStringBuilder": algorithm(constructor("this", {}, "CreateStringBuilder"), {}, dependent(data("common", {}, "String"), {
        }, {})),
    }),
}