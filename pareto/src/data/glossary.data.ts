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
            "ReplaceAll": sfunc(sdata(typeReference("ReplaceAllData")), sdata(externalTypeReference("common", "String"))),
            "Substr": sfunc(sdata(typeReference("SubstrData")), sdata(externalTypeReference("common", "String"))),
            "ToCharacterArray": sfunc(sdata(externalTypeReference("common", "String")), sdata(typeReference("CharacterArray"))),
            "FromCharacterArray": sfunc(sdata(typeReference("CharacterArray")), sdata(externalTypeReference("common", "String"))),
            "Split": sfunc(sdata(typeReference("SplitData")), sdata(typeReference("SplitResult"))),
            "SplitIn2": sfunc(sdata(typeReference("SplitData")), sdata(typeReference("SplitIn2Result"))),
            "Length": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "Number"))),
            "TrimEnd": sfunc(sdata(externalTypeReference("common", "String")), sdata(externalTypeReference("common", "String"))),
            "StartsWith": sfunc(sdata(typeReference("StartsWithData")), sdata(externalTypeReference("common", "Boolean"))),
        }),

    }],
}