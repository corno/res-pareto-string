import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    sfunc,
    type,
    optional,
    number,
    imp,
    externalTypeReference,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "common": imp({}),
    }),
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
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "ReplaceAll": sfunc(typeReference("ReplaceAllData"), null, null, sdata(externalTypeReference("common", "String"))),
            "Substr": sfunc(typeReference("SubstrData"), null, null, sdata(externalTypeReference("common", "String"))),
            "ToCharacterArray": sfunc(externalTypeReference("common", "String"), null, null, sdata(typeReference("CharacterArray"))),
            "FromCharacterArray": sfunc(typeReference("CharacterArray"), null, null, sdata(externalTypeReference("common", "String"))),
            "Split": sfunc(typeReference("SplitData"), null, null, sdata(typeReference("SplitResult"))),
            "SplitIn2": sfunc(typeReference("SplitData"), null, null, sdata(typeReference("SplitIn2Result"))),
            "Length": sfunc(externalTypeReference("common", "String"), null, null, sdata(externalTypeReference("common", "Number"))),
            "TrimEnd": sfunc(externalTypeReference("common", "String"), null, null, sdata(externalTypeReference("common", "String"))),
            "StartsWith": sfunc(typeReference("StartsWithData"), null, null, sdata(externalTypeReference("common", "Boolean"))),
        }),

    }],
}