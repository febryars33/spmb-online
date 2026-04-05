import { queryParams, type RouteQueryOptions, type RouteDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Auth\RegisterController::__invoke
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
const RegisterController = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RegisterController.url(options),
    method: 'get',
})

RegisterController.definition = {
    methods: ["get","head"],
    url: '/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Auth\RegisterController::__invoke
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
RegisterController.url = (options?: RouteQueryOptions) => {
    return RegisterController.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Auth\RegisterController::__invoke
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
RegisterController.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: RegisterController.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Auth\RegisterController::__invoke
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
RegisterController.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: RegisterController.url(options),
    method: 'head',
})

export default RegisterController