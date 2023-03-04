import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    func,
    type,
    optional,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'types': d({
        "CharacterArray": type(array(number())),
        "SplitData": type(group({
            "value": member(string()),
            "splitter": member(string()),
        })),
        "SplitIn2Result": type(group({
            "first": member(string()),
            "second": member(optional(string())),
        })),
        "SplitResult": type(array(string())),
        "StartsWithData": type(group({
            "contextString": member(string()),
            "searchString": member(string()),
        })),
        "SubstrData": type(group({
            "value": member(string()),
            "begin": member(number()),
            "length": member(number()),
        })),
        "ReplaceAllData": type(group({
            "value": member(string()),
            "pattern": member(string()),
            "replacement": member(string()),
        })),
    }),
    'builders': d({
    }),
    'interfaces': d({
    }),
    'functions': d({
        "ReplaceAll": func(typeReference("ReplaceAllData"), null, null, data(typeReference("common", "String"), false)),
        "Substr": func(typeReference("SubstrData"), null, null, data(typeReference("common", "String"), false)),
        "ToCharacterArray": func(typeReference("common", "String"), null, null, data(typeReference("CharacterArray"), false)),
        "FromCharacterArray": func(typeReference("CharacterArray"), null, null, data(typeReference("common", "String"), false)),
        "Split": func(typeReference("SplitData"), null, null, data(typeReference("SplitResult"), false)),
        "SplitIn2": func(typeReference("SplitData"), null, null, data(typeReference("SplitIn2Result"), false)),
        "Length": func(typeReference("common", "String"), null, null, data(typeReference("common", "Number"), false)),
        "TrimEnd": func(typeReference("common", "String"), null, null, data(typeReference("common", "String"), false)),
        "StartsWith": func(typeReference("StartsWithData"), null, null, data(typeReference("common", "Boolean"), false)),
    }),
}