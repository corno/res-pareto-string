import * as pd from 'pareto-core-data'

import {
    array, data, externalTypeReference, group, imp, member, number, optional, sfunction, string, type, typeReference
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
    'asynchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'constructors': d({}),
        'functions': d({
            "ReplaceAll": sfunction(data(typeReference("ReplaceAllData")), externalTypeReference("common", "String")),
            "Substr": sfunction(data(typeReference("SubstrData")), externalTypeReference("common", "String")),
            "ToCharacterArray": sfunction(data(externalTypeReference("common", "String")), typeReference("CharacterArray")),
            "FromCharacterArray": sfunction(data(typeReference("CharacterArray")), externalTypeReference("common", "String")),
            "Split": sfunction(data(typeReference("SplitData")), typeReference("SplitResult")),
            "SplitIn2": sfunction(data(typeReference("SplitData")), typeReference("SplitIn2Result")),
            "Length": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "Number")),
            "TrimEnd": sfunction(data(externalTypeReference("common", "String")), externalTypeReference("common", "String")),
            "StartsWith": sfunction(data(typeReference("StartsWithData")), externalTypeReference("common", "Boolean")),
        }),
    },
}