import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\SubDistrictController::index
* @see [unknown]:0
* @route '/api/regionals/sub-districts/{district_id}'
*/
export const index = (args: { district_id: string | number } | [district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/regionals/sub-districts/{district_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\SubDistrictController::index
* @see [unknown]:0
* @route '/api/regionals/sub-districts/{district_id}'
*/
index.url = (args: { district_id: string | number } | [district_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { district_id: args }
    }

    if (Array.isArray(args)) {
        args = {
            district_id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        district_id: args.district_id,
    }

    return index.definition.url
            .replace('{district_id}', parsedArgs.district_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\SubDistrictController::index
* @see [unknown]:0
* @route '/api/regionals/sub-districts/{district_id}'
*/
index.get = (args: { district_id: string | number } | [district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\SubDistrictController::index
* @see [unknown]:0
* @route '/api/regionals/sub-districts/{district_id}'
*/
index.head = (args: { district_id: string | number } | [district_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

const SubDistrictController = { index }

export default SubDistrictController