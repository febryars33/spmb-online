import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\API\ProvinceController::index
* @see app/Http/Controllers/Auth/API/ProvinceController.php:10
* @route '/api/regionals/provinces'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/regionals/provinces',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\API\ProvinceController::index
* @see app/Http/Controllers/Auth/API/ProvinceController.php:10
* @route '/api/regionals/provinces'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\API\ProvinceController::index
* @see app/Http/Controllers/Auth/API/ProvinceController.php:10
* @route '/api/regionals/provinces'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\API\ProvinceController::index
* @see app/Http/Controllers/Auth/API/ProvinceController.php:10
* @route '/api/regionals/provinces'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\API\ProvinceController::show
* @see app/Http/Controllers/Auth/API/ProvinceController.php:15
* @route '/api/regionals/provinces/{province}'
*/
export const show = (args: { province: number | { id: number } } | [province: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/regionals/provinces/{province}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\API\ProvinceController::show
* @see app/Http/Controllers/Auth/API/ProvinceController.php:15
* @route '/api/regionals/provinces/{province}'
*/
show.url = (args: { province: number | { id: number } } | [province: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { province: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { province: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            province: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        province: typeof args.province === 'object'
        ? args.province.id
        : args.province,
    }

    return show.definition.url
            .replace('{province}', parsedArgs.province.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\API\ProvinceController::show
* @see app/Http/Controllers/Auth/API/ProvinceController.php:15
* @route '/api/regionals/provinces/{province}'
*/
show.get = (args: { province: number | { id: number } } | [province: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\API\ProvinceController::show
* @see app/Http/Controllers/Auth/API/ProvinceController.php:15
* @route '/api/regionals/provinces/{province}'
*/
show.head = (args: { province: number | { id: number } } | [province: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

const provinces = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default provinces