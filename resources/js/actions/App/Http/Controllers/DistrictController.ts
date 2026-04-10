import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\DistrictController::index
* @see [unknown]:0
* @route '/api/regionals/districts/{regency_id}'
*/
export const index = (args: { regency_id: string | number } | [regency_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/regionals/districts/{regency_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\DistrictController::index
* @see [unknown]:0
* @route '/api/regionals/districts/{regency_id}'
*/
index.url = (args: { regency_id: string | number } | [regency_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { regency_id: args }
    }

    if (Array.isArray(args)) {
        args = {
            regency_id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        regency_id: args.regency_id,
    }

    return index.definition.url
            .replace('{regency_id}', parsedArgs.regency_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\DistrictController::index
* @see [unknown]:0
* @route '/api/regionals/districts/{regency_id}'
*/
index.get = (args: { regency_id: string | number } | [regency_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\DistrictController::index
* @see [unknown]:0
* @route '/api/regionals/districts/{regency_id}'
*/
index.head = (args: { regency_id: string | number } | [regency_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

const DistrictController = { index }

export default DistrictController