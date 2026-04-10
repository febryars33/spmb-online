import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../../wayfinder'
import document08b617 from './document'
/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:17
* @route '/dashboard/{candidate}'
*/
export const guide = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: guide.url(args, options),
    method: 'get',
})

guide.definition = {
    methods: ["get","head"],
    url: '/dashboard/{candidate}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:17
* @route '/dashboard/{candidate}'
*/
guide.url = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { candidate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
    }

    return guide.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:17
* @route '/dashboard/{candidate}'
*/
guide.get = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: guide.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:17
* @route '/dashboard/{candidate}'
*/
guide.head = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: guide.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:41
* @route '/dashboard/{candidate}/form'
*/
export const form = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: form.url(args, options),
    method: 'get',
})

form.definition = {
    methods: ["get","head"],
    url: '/dashboard/{candidate}/form',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:41
* @route '/dashboard/{candidate}/form'
*/
form.url = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { candidate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
    }

    return form.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:41
* @route '/dashboard/{candidate}/form'
*/
form.get = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: form.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:41
* @route '/dashboard/{candidate}/form'
*/
form.head = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: form.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:65
* @route '/dashboard/{candidate}/document'
*/
export const document = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: document.url(args, options),
    method: 'get',
})

document.definition = {
    methods: ["get","head"],
    url: '/dashboard/{candidate}/document',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:65
* @route '/dashboard/{candidate}/document'
*/
document.url = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { candidate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
    }

    return document.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:65
* @route '/dashboard/{candidate}/document'
*/
document.get = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: document.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:65
* @route '/dashboard/{candidate}/document'
*/
document.head = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: document.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:80
* @route '/dashboard/{candidate}/send'
*/
export const send = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: send.url(args, options),
    method: 'get',
})

send.definition = {
    methods: ["get","head"],
    url: '/dashboard/{candidate}/send',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:80
* @route '/dashboard/{candidate}/send'
*/
send.url = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { candidate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
    }

    return send.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:80
* @route '/dashboard/{candidate}/send'
*/
send.get = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: send.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:80
* @route '/dashboard/{candidate}/send'
*/
send.head = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: send.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:93
* @route '/dashboard/{candidate}/review'
*/
export const review = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: review.url(args, options),
    method: 'get',
})

review.definition = {
    methods: ["get","head"],
    url: '/dashboard/{candidate}/review',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:93
* @route '/dashboard/{candidate}/review'
*/
review.url = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { candidate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
    }

    return review.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:93
* @route '/dashboard/{candidate}/review'
*/
review.get = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: review.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:93
* @route '/dashboard/{candidate}/review'
*/
review.head = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: review.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::update
* @see app/Http/Controllers/Dashboard/FormController.php:106
* @route '/dashboard/{candidate}'
*/
export const update = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/dashboard/{candidate}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Dashboard\FormController::update
* @see app/Http/Controllers/Dashboard/FormController.php:106
* @route '/dashboard/{candidate}'
*/
update.url = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { candidate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
    }

    return update.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FormController::update
* @see app/Http/Controllers/Dashboard/FormController.php:106
* @route '/dashboard/{candidate}'
*/
update.put = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Dashboard\FormController::destroy
* @see app/Http/Controllers/Dashboard/FormController.php:129
* @route '/dashboard/{candidate}'
*/
export const destroy = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/dashboard/{candidate}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Dashboard\FormController::destroy
* @see app/Http/Controllers/Dashboard/FormController.php:129
* @route '/dashboard/{candidate}'
*/
destroy.url = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { candidate: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { candidate: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            candidate: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        candidate: typeof args.candidate === 'object'
        ? args.candidate.id
        : args.candidate,
    }

    return destroy.definition.url
            .replace('{candidate}', parsedArgs.candidate.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Dashboard\FormController::destroy
* @see app/Http/Controllers/Dashboard/FormController.php:129
* @route '/dashboard/{candidate}'
*/
destroy.delete = (args: { candidate: string | { id: string } } | [candidate: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const formNamespace = {
    guide: Object.assign(guide, guide),
    form: Object.assign(form, form),
    document: Object.assign(document, document08b617),
    send: Object.assign(send, send),
    review: Object.assign(review, review),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default formNamespace