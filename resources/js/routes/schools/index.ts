import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\API\SchoolController::index
* @see app/Http/Controllers/Auth/API/SchoolController.php:14
* @route '/api/schools'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/schools',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\API\SchoolController::index
* @see app/Http/Controllers/Auth/API/SchoolController.php:14
* @route '/api/schools'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\API\SchoolController::index
* @see app/Http/Controllers/Auth/API/SchoolController.php:14
* @route '/api/schools'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\API\SchoolController::index
* @see app/Http/Controllers/Auth/API/SchoolController.php:14
* @route '/api/schools'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Auth\API\SchoolController::show
* @see app/Http/Controllers/Auth/API/SchoolController.php:30
* @route '/api/schools/{school}'
*/
export const show = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/schools/{school}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\API\SchoolController::show
* @see app/Http/Controllers/Auth/API/SchoolController.php:30
* @route '/api/schools/{school}'
*/
show.url = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { school: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { school: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            school: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        school: typeof args.school === 'object'
        ? args.school.id
        : args.school,
    }

    return show.definition.url
            .replace('{school}', parsedArgs.school.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\API\SchoolController::show
* @see app/Http/Controllers/Auth/API/SchoolController.php:30
* @route '/api/schools/{school}'
*/
show.get = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\API\SchoolController::show
* @see app/Http/Controllers/Auth/API/SchoolController.php:30
* @route '/api/schools/{school}'
*/
show.head = (args: { school: number | { id: number } } | [school: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

const schools = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
}

export default schools