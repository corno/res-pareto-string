import * as pd from 'pareto-core-data'

import {
    aInterface,
    aInterfaceMethod,
    aInterfaceReference,
    array, constructor, data, externalTypeReference, group, imp, member, number, optional, sfunction, streamconsumer, string, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters':d({}),
    'imports': d({
        "common": imp(),
    }),
    'root': {
        'namespaces': d({}),
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
            "JoinData": type(group({
                "first": member(string()),
                "second": member(string()),
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "ReplaceAll": sfunction(externalTypeReference("common", "String"), data(typeReference("ReplaceAllData"))),
            "Substr": sfunction(externalTypeReference("common", "String"), data(typeReference("SubstrData"))),
            "ToCharacterArray": sfunction(typeReference("CharacterArray"), data(externalTypeReference("common", "String"))),
            "Join": sfunction(externalTypeReference("common", "String"), data(typeReference("JoinData"))),
            "FromCharacterArray": sfunction(externalTypeReference("common", "String"), data(typeReference("CharacterArray"))),
            "Split": sfunction(typeReference("SplitResult"), data(typeReference("SplitData"))),
            "SplitIn2": sfunction(typeReference("SplitIn2Result"), data(typeReference("SplitData"))),
            "Length": sfunction(externalTypeReference("common", "Number"), data(externalTypeReference("common", "String"))),
            "TrimEnd": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("common", "String"))),
            "StartsWith": sfunction(externalTypeReference("common", "Boolean"), data(typeReference("StartsWithData"))),
        }),
    },
}