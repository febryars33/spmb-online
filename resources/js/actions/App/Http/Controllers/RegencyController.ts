import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\RegencyController::index
* @see [unknown]:0
* @route '/api/regionals/regencies/{province_id}'
*/
export const index = (args: { province_id: string | number } | [province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/regionals/regencies/{province_id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\RegencyController::index
* @see [unknown]:0
* @route '/api/regionals/regencies/{province_id}'
*/
index.url = (args: { province_id: string | number } | [province_id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province_id: args }
    }

    if (Array.isArray(args)) {
        args = {
            province_id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province_id: args.province_id,
    }

    return index.definition.url
            .replace('{province_id}', parsedArgs.province_id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\RegencyController::index
* @see [unknown]:0
* @route '/api/regionals/regencies/{province_id}'
*/
index.get = (args: { province_id: string | number } | [province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\RegencyController::index
* @see [unknown]:0
* @route '/api/regionals/regencies/{province_id}'
*/
index.head = (args: { province_id: string | number } | [province_id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(args, options),
    method: 'head',
})

const RegencyController = { index }

export default RegencyController