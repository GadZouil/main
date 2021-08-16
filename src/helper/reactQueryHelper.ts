import { FormikProps } from "formik"
import { isEmpty, isNull, isUndefined } from "lodash"
import { RefObject } from "react"
import { useAlert } from "react-alert"
import { QueryKey, useQuery, UseQueryResult } from "react-query"



/*
export const extractQueryDataArray = <Type>(query: UseQueryResult<Array<Type>>) : Array<Type> => {

    const data = isEmpty(query.data) || isUndefined(query.data) ? [] : query.data

    return data
}

interface UseQueryArrayResult<Type> {
    data: Array<Type>,
    isLoading: boolean
}

export const useQueryArray = <Type> (
    key: string | QueryKey,
    apiToCall: () => Promise<Array<Type>>,
    convertFn: (data: Type) => Type,
    typeName: string
) : UseQueryArrayResult<Type> => {

    const alert = useAlert();

    const query = useQuery<Array<Type>>(key, apiToCall, {

        onError: (error) => {
            alert.error(`Error while fetching ${typeName}`)
        },

        select: (data: Array<Type>) => data.map((rec: Type) => convertFn(rec))

    });

    return {
        data: extractQueryDataArray<Type>(query),
        isLoading: query.isLoading
    }
}


export const extractQueryDataObject = <Type>(query: UseQueryResult<Type | null>, defaultObject: Type) : Type => {
    const data = isNull(query.data) || isEmpty(query.data) || isUndefined(query.data) ? defaultObject : query.data
    return data
}

export const extractDataObject = <Type>(query: UseQueryResult<Type | null>) : Type => {
    const data = isNull(query.data) || isEmpty(query.data) || isUndefined(query.data) ? {} as Type : query.data
    return data
}

interface UseQueryObjectResult<Type> {
    data: Type,
    isLoading: boolean
}

export const UseQueryObject = <Type> (
    key: string | QueryKey,
    apiToCall: () => Promise<Type>,
    convertFn: (data: Type) => Type,
    typeName: string
) : UseQueryObjectResult<Type> => {

    const alert = useAlert();

    const query = useQuery<Type>(key, apiToCall, {

        onError: (error) => {
            alert.error(`Error while fetching ${typeName}`)
        },

        select: (data: Type) => convertFn(data)

    });

    return {
        data: extractDataObject<Type>(query),
        isLoading: query.isLoading
    }

}
*/




















export const convertNumberData = (value: number) : number => {
    return value
}