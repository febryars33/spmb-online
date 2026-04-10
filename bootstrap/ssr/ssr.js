import { Fragment, TransitionGroup, createBlock, createCommentVNode, createSSRApp, createTextVNode, createVNode, defineComponent, h, isRef, mergeModels, mergeProps, onMounted, openBlock, ref, renderList, renderSlot, toDisplayString, unref, useModel, useSSRContext, useTemplateRef, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { renderToString, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderDynamicModel, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderTeleport } from "vue/server-renderer";
import { Head, InfiniteScroll, Link, createInertiaApp, useForm, usePage } from "@inertiajs/vue3";
import { ArrowLeft, ArrowLeftRight, Calendar, Check, CircleAlert, CircleCheckBig, CircleQuestionMark, Clock, ClockFading, CreditCard, Eye, EyeClosed, FileSearchCorner, FileText, FileUp, Files, Form, GalleryHorizontalEnd, Hand, Image, Lock, Mail, Phone, ScanText, School, Search, SquareStack, Trash, Upload, User, UserPlus, Users } from "@lucide/vue";
import { BOverlay } from "bootstrap-vue-next/components/BOverlay";
import { onClickOutside, useDropZone, useFileDialog } from "@vueuse/core";
import { BApp } from "bootstrap-vue-next/components/BApp";
import { BApp as BApp$1, useModal } from "bootstrap-vue-next";
import { Toaster, toast } from "vue-sonner";
import { BButton } from "bootstrap-vue-next/components/BButton";
import { BBadge } from "bootstrap-vue-next/components/BBadge";
import { BCardText } from "bootstrap-vue-next/components/BCard";
import { BTab, BTabs } from "bootstrap-vue-next/components/BTabs";
import { BFormTextarea } from "bootstrap-vue-next/components/BFormTextarea";
import { BFormRadio, BFormRadioGroup } from "bootstrap-vue-next/components/BFormRadio";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BModal } from "bootstrap-vue-next/components/BModal";
import { BProgress } from "bootstrap-vue-next/components/BProgress";
import createServer from "@inertiajs/vue3/server";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region resources/js/wayfinder/index.ts
var urlDefaults = () => ({});
var getValue = (value) => {
	if (value === true) return "1";
	if (value === false) return "0";
	return value.toString();
};
var addNestedParams = (obj, prefix, params) => {
	Object.entries(obj).forEach(([subKey, value]) => {
		if (value === void 0) return;
		const paramKey = `${prefix}[${subKey}]`;
		if (Array.isArray(value)) value.forEach((v) => params.append(`${paramKey}[]`, getValue(v)));
		else if (value !== null && typeof value === "object") addNestedParams(value, paramKey, params);
		else if ([
			"string",
			"number",
			"boolean"
		].includes(typeof value)) params.set(paramKey, getValue(value));
	});
};
var queryParams = (options) => {
	if (!options || !options.query && !options.mergeQuery) return "";
	const query = options.query ?? options.mergeQuery;
	const includeExisting = options.mergeQuery !== void 0;
	const params = new URLSearchParams(includeExisting && typeof window !== "undefined" ? window.location.search : "");
	for (const key in query) {
		const queryValue = query[key];
		if (queryValue === void 0 || queryValue === null) {
			params.delete(key);
			continue;
		}
		if (Array.isArray(queryValue)) {
			if (params.has(`${key}[]`)) params.delete(`${key}[]`);
			queryValue.forEach((value) => {
				params.append(`${key}[]`, value.toString());
			});
		} else if (typeof queryValue === "object") {
			params.forEach((_, paramKey) => {
				if (paramKey.startsWith(`${key}[`)) params.delete(paramKey);
			});
			addNestedParams(queryValue, key, params);
		} else params.set(key, getValue(queryValue));
	}
	const str = params.toString();
	return str.length > 0 ? `?${str}` : "";
};
var applyUrlDefaults = (existing) => {
	const existingParams = { ...existing ?? {} };
	const defaultParams = urlDefaults();
	for (const key in defaultParams) if (existingParams[key] === void 0 && defaultParams[key] !== void 0) existingParams[key] = defaultParams[key];
	return existingParams;
};
//#endregion
//#region resources/js/routes/index.ts
/**
* @see \App\Http\Controllers\Auth\LoginController::__invoke
* @see app/Http/Controllers/Auth/LoginController.php:14
* @route '/login'
*/
var login = (options) => ({
	url: login.url(options),
	method: "get"
});
login.definition = {
	methods: ["get", "head"],
	url: "/login"
};
/**
* @see \App\Http\Controllers\Auth\LoginController::__invoke
* @see app/Http/Controllers/Auth/LoginController.php:14
* @route '/login'
*/
login.url = (options) => {
	return login.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\LoginController::__invoke
* @see app/Http/Controllers/Auth/LoginController.php:14
* @route '/login'
*/
login.get = (options) => ({
	url: login.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Auth\LoginController::__invoke
* @see app/Http/Controllers/Auth/LoginController.php:14
* @route '/login'
*/
login.head = (options) => ({
	url: login.url(options),
	method: "head"
});
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
var logout = (options) => ({
	url: logout.url(options),
	method: "post"
});
logout.definition = {
	methods: ["post"],
	url: "/logout"
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.url = (options) => {
	return logout.definition.url + queryParams(options);
};
/**
* @see \Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::logout
* @see vendor/laravel/fortify/src/Http/Controllers/AuthenticatedSessionController.php:100
* @route '/logout'
*/
logout.post = (options) => ({
	url: logout.url(options),
	method: "post"
});
/**
* @see \App\Http\Controllers\Auth\RegisterController::__invoke
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
var register = (options) => ({
	url: register.url(options),
	method: "get"
});
register.definition = {
	methods: ["get", "head"],
	url: "/register"
};
/**
* @see \App\Http\Controllers\Auth\RegisterController::__invoke
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
register.url = (options) => {
	return register.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Auth\RegisterController::__invoke
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
register.get = (options) => ({
	url: register.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Auth\RegisterController::__invoke
* @see app/Http/Controllers/Auth/RegisterController.php:13
* @route '/register'
*/
register.head = (options) => ({
	url: register.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\HomeController::__invoke
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
var home$1 = (options) => ({
	url: home$1.url(options),
	method: "get"
});
home$1.definition = {
	methods: ["get", "head"],
	url: "/"
};
/**
* @see \App\Http\Controllers\HomeController::__invoke
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
home$1.url = (options) => {
	return home$1.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\HomeController::__invoke
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
home$1.get = (options) => ({
	url: home$1.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\HomeController::__invoke
* @see app/Http/Controllers/HomeController.php:13
* @route '/'
*/
home$1.head = (options) => ({
	url: home$1.url(options),
	method: "head"
});
/**
* @see routes/web.php:10
* @route '/check'
*/
var check = (options) => ({
	url: check.url(options),
	method: "get"
});
check.definition = {
	methods: ["get", "head"],
	url: "/check"
};
/**
* @see routes/web.php:10
* @route '/check'
*/
check.url = (options) => {
	return check.definition.url + queryParams(options);
};
/**
* @see routes/web.php:10
* @route '/check'
*/
check.get = (options) => ({
	url: check.url(options),
	method: "get"
});
/**
* @see routes/web.php:10
* @route '/check'
*/
check.head = (options) => ({
	url: check.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\FaqController::__invoke
* @see app/Http/Controllers/FaqController.php:14
* @route '/faq'
*/
var faq = (options) => ({
	url: faq.url(options),
	method: "get"
});
faq.definition = {
	methods: ["get", "head"],
	url: "/faq"
};
/**
* @see \App\Http\Controllers\FaqController::__invoke
* @see app/Http/Controllers/FaqController.php:14
* @route '/faq'
*/
faq.url = (options) => {
	return faq.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\FaqController::__invoke
* @see app/Http/Controllers/FaqController.php:14
* @route '/faq'
*/
faq.get = (options) => ({
	url: faq.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\FaqController::__invoke
* @see app/Http/Controllers/FaqController.php:14
* @route '/faq'
*/
faq.head = (options) => ({
	url: faq.url(options),
	method: "head"
});
//#endregion
//#region resources/js/pages/Auth/Login.vue?vue&type=script&setup=true&lang.ts
var Login_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Login",
	__ssrInlineRender: true,
	props: { meta: {} },
	setup(__props) {
		const show = ref(false);
		const form = useForm({
			email: "",
			password: ""
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.meta.title)}</title><meta name="description"${ssrRenderAttr("content", __props.meta.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.meta.title), 1), createVNode("meta", {
						name: "description",
						content: __props.meta.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="min-vh-100 d-flex align-items-center justify-content-center py-5 px-3 position-relative overflow-hidden"><div class="container position-relative z-1"><div class="row justify-content-center"><div class="col-lg-10"><div class="card border-0 shadow-xl rounded-5 overflow-hidden" style="${ssrRenderStyle({
				"opacity": "1",
				"transform": "none"
			})}"><div class="row g-0"><div class="col-lg-6 bg-primary d-none d-lg-flex flex-column justify-content-center p-5 text-center position-relative"><div class="position-relative z-1"><div class="bg-opacity-20 d-inline-block rounded-circle mb-4">`);
			_push(ssrRenderComponent(unref(CircleCheckBig), { size: 96 }, null, _parent));
			_push(`</div><h2 class="display-6 fw-bold mb-2 text-light">${ssrInterpolate(_ctx.$page.props.name)}</h2><p class="opacity-75 mb-5 text-light">Gerbang menuju masa depan gemilang bagi putra-putri terbaik bangsa.</p><div class="row g-3 text-start"><div class="col-12"><div class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"><div class="me-3">`);
			_push(ssrRenderComponent(unref(Files), { size: 24 }, null, _parent));
			_push(`</div><span class="fw-medium">Proses 100% Online</span></div></div><div class="col-12"><div class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"><div class="me-3">`);
			_push(ssrRenderComponent(unref(Clock), { size: 24 }, null, _parent));
			_push(`</div><span class="fw-medium">Update Status Real-time</span></div></div><div class="col-12"><div class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"><div class="me-3">`);
			_push(ssrRenderComponent(unref(CreditCard), { size: 24 }, null, _parent));
			_push(`</div><span class="fw-medium">Pembayaran Mudah</span></div></div></div></div></div><div class="col-lg-6 p-4 p-md-5 bg-body-tertiary"><div class="mb-4"><h3 class="fw-bold mb-1">Selamat Datang</h3><p class="text-secondary">Silahkan masuk ke akun orang tua Anda.</p></div><form><div class="mb-4"><label class="form-label small fw-bold">Email Peserta Didik</label><div class="input-group has-validation"><span class="input-group-text">`);
			_push(ssrRenderComponent(unref(Mail), { size: 16 }, null, _parent));
			_push(`</span><input${ssrRenderAttr("value", unref(form).email)} class="${ssrRenderClass([{ "is-invalid": unref(form).errors.email }, "form-control"])}" placeholder="nama@email.com" type="email"><div class="invalid-feedback">${ssrInterpolate(unref(form).errors.email)}</div></div></div><div class="mb-4"><div class="d-flex justify-content-between align-items-center mb-2"><label class="form-label small fw-bold mb-0">Kata Sandi</label><a size="14" class="text-decoration-none small fw-bold" href="/forgot-password" data-discover="true">Lupa Sandi?</a></div><div class="input-group has-validation"><span class="input-group-text">`);
			_push(ssrRenderComponent(unref(Lock), { size: 16 }, null, _parent));
			_push(`</span><input${ssrRenderDynamicModel(show.value ? "text" : "password", unref(form).password, null)} class="${ssrRenderClass([{ "is-invalid": unref(form).errors.password }, "form-control"])}" placeholder="Kata Sandi"${ssrRenderAttr("type", show.value ? "text" : "password")}><button type="button" class="input-group-text">`);
			if (!show.value) _push(ssrRenderComponent(unref(Eye), { size: 16 }, null, _parent));
			else _push(ssrRenderComponent(unref(EyeClosed), { size: 16 }, null, _parent));
			_push(`</button><div class="invalid-feedback">${ssrInterpolate(unref(form).errors.password)}</div></div></div><div class="mb-4 form-check"><input class="form-check-input" id="remember" type="checkbox"><label class="form-check-label small" for="remember">Ingat saya di perangkat ini</label></div><button type="submit" class="btn btn-primary w-100"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>Masuk</button><div class="position-relative text-center my-3"><span class="text-secondary small"> Atau masuk dengan </span></div><div class="row g-3 mb-4"><div class="col-12"><button type="button" class="btn btn-light text-dark w-100 d-flex align-items-center justify-content-center"><img width="16" class="me-2" alt="Google" src="https://www.google.com/favicon.ico"> Google </button></div></div><div class="text-center"><p class="small text-secondary mb-0"> Belum memiliki akun? <a class="text-decoration-none fw-bold" href="/register" data-discover="true">Daftar Akun Baru</a></p></div></form></div></div></div></div></div></div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Auth/Login.vue
var Login_exports = /* @__PURE__ */ __exportAll({ default: () => Login_default });
var _sfc_setup$19 = Login_vue_vue_type_script_setup_true_lang_default.setup;
Login_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/Login.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var Login_default = Login_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region \0plugin-vue:export-helper
var _plugin_vue_export_helper_default = (sfc, props) => {
	const target = sfc.__vccOpts || sfc;
	for (const [key, val] of props) target[key] = val;
	return target;
};
//#endregion
//#region resources/js/pages/Auth/Register.vue
var Register_exports = /* @__PURE__ */ __exportAll({ default: () => Register_default });
var _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(_attrs)}><p>register</p></div>`);
}
var _sfc_setup$18 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/Register.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
};
var Register_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
//#endregion
//#region resources/js/pages/Check.vue?vue&type=script&setup=true&lang.ts
var Check_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Check",
	__ssrInlineRender: true,
	props: { meta: {} },
	setup(__props) {
		const show = ref(false);
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.meta.title)}</title><meta name="description"${ssrRenderAttr("content", __props.meta.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.meta.title), 1), createVNode("meta", {
						name: "description",
						content: __props.meta.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="min-vh-100"><section class="py-5 position-relative overflow-hidden"><div class="container py-5 position-relative z-1"><div class="row justify-content-center text-center"><div class="col-lg-8"><h1 class="display-5 fw-bold mb-3">Lacak Pendaftaran Anda</h1><p class="lead mb-5 text-muted">Masukkan Nomor Registrasi untuk melihat status terbaru pendaftaran putra-putri Anda.</p><div class="card border shadow-lg rounded-pill p-2 mx-auto" style="${ssrRenderStyle({ "max-width": "600px" })}"><form class="d-flex align-items-center"><div class="flex-grow-1 ps-4"><div class="d-flex align-items-center">`);
			_push(ssrRenderComponent(unref(Search), { class: "text-primary" }, null, _parent));
			_push(`<input class="form-control border-0 shadow-none bg-transparent py-3" placeholder="Contoh: REG-20260401-001" type="text" value="REG-0001-0001"></div></div><button type="submit" class="btn btn-primary rounded-pill px-4 py-2 me-1">Cek Status</button></form></div></div></div></div><div class="position-absolute top-0 start-0 translate-middle opacity-50 rounded-circle bg-primary" style="${ssrRenderStyle({
				"width": "400px",
				"height": "400px"
			})}"></div><div class="position-absolute bottom-0 end-0 translate-middle-y opacity-50 rounded-circle bg-primary" style="${ssrRenderStyle({
				"width": "200px",
				"height": "200px",
				"margin-right": "-100px"
			})}"></div></section>`);
			if (show.value) {
				_push(`<section class="py-5 mt-n5 position-relative z-2"><div class="container"><div class="row justify-content-center" style="${ssrRenderStyle({
					"opacity": "1",
					"transform": "none"
				})}"><div class="col-lg-10"><div class="card border-0 shadow-xl rounded-5 overflow-hidden"><div class="row g-0"><div class="col-md-4 bg-primary-subtle p-5 text-center d-flex flex-column justify-content-center align-items-center">`);
				_push(ssrRenderComponent(unref(ClockFading), {
					size: 48,
					class: "text-primary mb-3"
				}, null, _parent));
				_push(`<h3 class="fw-bold text-primary">Sedang Ditinjau</h3><p class="small opacity-75 mb-0">Terakhir diperbarui: <strong>1 jam yang lalu</strong></p></div><div class="col-md-8 bg-body-tertiary p-5"><div class="d-flex justify-content-between align-items-start mb-4"><div><h4 class="fw-bold mb-1">Budi Santoso</h4><span class="badge bg-success-subtle text-muted rounded-pill small">Siswa Baru</span></div><div class="text-end"><small class="text-muted d-block">ID Pendaftaran</small><span class="fw-bold text-primary">REG-0001-0001</span></div></div><hr class="my-4 opacity-10"><div class="row g-4 mb-5"><div class="col-sm-6"><div class="d-flex align-items-center"><div class="p-2 rounded-3 me-3">`);
				_push(ssrRenderComponent(unref(Calendar), { class: "text-primary" }, null, _parent));
				_push(`</div><div><small class="text-muted d-block">Tanggal Daftar</small><span class="fw-bold">02 April 2026</span></div></div></div><div class="col-sm-6"><div class="d-flex align-items-center"><div class="p-2 rounded-3 me-3">`);
				_push(ssrRenderComponent(unref(SquareStack), { class: "text-primary" }, null, _parent));
				_push(`</div><div><small class="text-muted d-block">Gelombang</small><span class="fw-bold">Gelombang 1 (Reguler)</span></div></div></div></div><div class="alert bg-primary-subtle border-0 rounded-4 p-4 mb-4"><div class="d-flex">`);
				_push(ssrRenderComponent(unref(CircleAlert), { class: "me-3 text-primary" }, null, _parent));
				_push(`<div><h6 class="fw-bold mb-1">Keterangan:</h6><p class="small mb-0 text-muted">Berkas Anda sedang dalam antrean verifikasi oleh panitia.</p></div></div></div><div class="d-flex flex-wrap gap-3"><a class="btn btn-primary rounded-pill px-4" href="/login" data-discover="true">Masuk ke Dashboard</a><button data-bs-theme="dark" class="btn btn-light rounded-pill px-4">Cetak Bukti</button></div></div></div></div><div class="mt-5 text-center"><h5 class="fw-bold mb-4">Alur Pendaftaran Selanjutnya</h5><div class="row g-3"><div class="col-6 col-md-3"><div class="card border-0 rounded-4 p-3 bg-primary text-white shadow-lg">`);
				_push(ssrRenderComponent(unref(Files), {
					size: 32,
					class: "mb-2 mx-auto"
				}, null, _parent));
				_push(`<span class="small fw-bold">Review Berkas</span></div></div><div class="col-6 col-md-3"><div class="card border-0 rounded-4 p-3 bg-body-tertiary text-secondary">`);
				_push(ssrRenderComponent(unref(Files), {
					size: 32,
					class: "mb-2 mx-auto"
				}, null, _parent));
				_push(`<span class="small fw-bold">Pembayaran</span></div></div><div class="col-6 col-md-3"><div class="card border-0 rounded-4 p-3 bg-body-tertiary text-secondary">`);
				_push(ssrRenderComponent(unref(Files), {
					size: 32,
					class: "mb-2 mx-auto"
				}, null, _parent));
				_push(`<span class="small fw-bold">Tes Seleksi</span></div></div><div class="col-6 col-md-3"><div class="card border-0 rounded-4 p-3 bg-body-tertiary text-secondary">`);
				_push(ssrRenderComponent(unref(Files), {
					size: 32,
					class: "mb-2 mx-auto"
				}, null, _parent));
				_push(`<span class="small fw-bold">Pengumuman Akhir</span></div></div></div></div></div></div></div></section>`);
			} else {
				_push(`<section class="py-5 mt-n5 position-relative z-2"><div class="container"><div class="text-center py-5" style="${ssrRenderStyle({ "opacity": "1" })}"><div class="bg-body-tertiary d-inline-block p-5 rounded-circle mb-4">`);
				_push(ssrRenderComponent(unref(Search), {
					size: 96,
					class: "text-primary opacity-25"
				}, null, _parent));
				_push(`</div><h5>Belum ada hasil pencarian</h5><p class="text-muted small">Silahkan masukkan nomor pendaftaran Anda di atas.</p></div></div></section>`);
			}
			_push(`<section class="py-5"><div class="container"><div class="row justify-content-center"><div class="col-lg-8"><h4 class="fw-bold text-center mb-5">Pertanyaan Seputar Status</h4><div class="accordion border-0" id="faqStatus"><div class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"><h2 class="accordion-header"><button class="accordion-button fw-bold py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false"> Berapa lama proses review berkas? </button></h2><div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqStatus" style="${ssrRenderStyle({})}"><div class="accordion-body text-secondary small"> Proses verifikasi berkas biasanya memakan waktu 1-3 hari kerja setelah Anda menekan tombol &quot;Kirim Berkas&quot; di dashboard. </div></div></div><div class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"><h2 class="accordion-header"><button class="accordion-button fw-bold py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"> Apa yang harus dilakukan jika status &quot;Perlu Perbaikan&quot;? </button></h2><div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqStatus" style="${ssrRenderStyle({})}"><div class="accordion-body text-secondary small"> Silahkan masuk ke dashboard Anda, lihat catatan dari panitia pada bagian berkas, unggah kembali dokumen yang diminta, lalu klik &quot;Kirim Ulang&quot;. </div></div></div></div></div></div></div></section></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Check.vue
var Check_exports = /* @__PURE__ */ __exportAll({ default: () => Check_default });
var _sfc_setup$17 = Check_vue_vue_type_script_setup_true_lang_default.setup;
Check_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Check.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var Check_default = Check_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/Forms/Dropzone.vue?vue&type=script&setup=true&lang.ts
var Dropzone_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Dropzone",
	__ssrInlineRender: true,
	props: { itemId: [String, Number] },
	emits: ["dropped"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const dropZoneRef = useTemplateRef("dropZoneRef");
		const props = __props;
		const onDrop = (files) => {
			emit("dropped", {
				id: props.itemId,
				files
			});
		};
		const { isOverDropZone } = useDropZone(dropZoneRef, {
			onDrop,
			multiple: false,
			dataTypes: [
				"image/jpeg",
				"image/png",
				"image/jpg",
				"application/pdf"
			]
		});
		const { open, onChange } = useFileDialog({ accept: "image/jpeg, image/png, image/jpg, application/pdf" });
		onChange((files) => onDrop(files));
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				ref_key: "dropZoneRef",
				ref: dropZoneRef,
				class: ["rounded-4 p-4 border text-center", { "bg-primary-subtle border-primary": unref(isOverDropZone) }]
			}, _attrs))}><div class="mb-3"><div class="bg-primary-subtle d-inline-flex p-3 rounded-circle text-primary mb-2">`);
			if (!unref(isOverDropZone)) _push(ssrRenderComponent(unref(FileUp), null, null, _parent));
			else _push(ssrRenderComponent(unref(Hand), null, null, _parent));
			_push(`</div>`);
			if (!unref(isOverDropZone)) _push(`<p class="small text-secondary mb-0">Klik untuk pilih file atau seret ke sini</p>`);
			else _push(`<p class="small text-secondary mb-0">Lepaskan file di sini</p>`);
			_push(`</div><button type="button" class="btn btn-sm btn-primary rounded-pill px-4 py-2 fw-bold small cursor-pointer"${ssrIncludeBooleanAttr(unref(isOverDropZone)) ? " disabled" : ""}> Pilih Berkas </button></div>`);
		};
	}
});
//#endregion
//#region resources/js/components/Forms/Dropzone.vue
var _sfc_setup$16 = Dropzone_vue_vue_type_script_setup_true_lang_default.setup;
Dropzone_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Forms/Dropzone.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var Dropzone_default = Dropzone_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/img/facebook-48.png
var facebook_48_default = "/build/assets/facebook-48-CIEVyuPs.png";
//#endregion
//#region resources/img/instagram-48.png
var instagram_48_default = "/build/assets/instagram-48-0hFP1FUJ.png";
//#endregion
//#region resources/img/tiktok-48.png
var tiktok_48_default = "/build/assets/tiktok-48-D0cvbkfR.png";
//#endregion
//#region resources/img/youtube-48.png
var youtube_48_default = "/build/assets/youtube-48-Dp9a8xPi.png";
//#endregion
//#region resources/js/components/Footer.vue
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-5" }, _attrs))}><div class="row"><div class="col-lg-3"><h3>Tentang Kami</h3><ul class="list-unstyled small"><li class="mb-2"><a class="text-decoration-none text-secondary" href="/" data-discover="true">Beranda</a></li><li class="mb-2"><a class="text-decoration-none text-secondary" href="/cek-status" data-discover="true">Cek Status</a></li><li class="mb-2"><a class="text-decoration-none text-secondary" href="/login" data-discover="true">Login</a></li><li class="mb-2"><a class="text-decoration-none text-secondary" href="/register" data-discover="true">Daftar</a></li></ul></div><div class="col-lg-3"><h3>Dukungan</h3><ul class="list-unstyled small"><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Alur Pendaftaran</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Biaya Pendidikan</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Beasiswa</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">FAQ</a></li></ul></div><div class="col-lg-3"><ul class="list-unstyled small"><h2 class="d-none d-lg-block"> </h2><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Alur Pendaftaran</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Biaya Pendidikan</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Beasiswa</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">FAQ</a></li></ul></div><div class="col-lg-3"><h1>Connect With Us</h1><ul class="list-inline"><li class="list-inline-item"><img${ssrRenderAttr("src", facebook_48_default)} alt="facebook" class="img-fluid" width="48px"></li><li class="list-inline-item"><img${ssrRenderAttr("src", instagram_48_default)} alt="instagram" class="img-fluid" width="48px"></li><li class="list-inline-item"><img${ssrRenderAttr("src", tiktok_48_default)} alt="instagram" class="img-fluid" width="48px"></li><li class="list-inline-item"><img${ssrRenderAttr("src", youtube_48_default)} alt="instagram" class="img-fluid" width="48px"></li></ul><p>Laborum minima ipsam facere? Ad nulla culpa explicabo</p></div></div><div class="col-lg-9"><span class="small text-secondary"> Officia dolor esse quo harum nemo unde magni sed repudiandae, consequatur placeat corporis, culpa, quidem veritatis a. Error praesentium sit necessitatibus repellendus. </span></div></div>`);
}
var _sfc_setup$15 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Footer.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var Footer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
//#region resources/js/routes/dashboard/home/index.ts
/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:18
* @route '/dashboard'
*/
var index = (options) => ({
	url: index.url(options),
	method: "get"
});
index.definition = {
	methods: ["get", "head"],
	url: "/dashboard"
};
/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:18
* @route '/dashboard'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:18
* @route '/dashboard'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:18
* @route '/dashboard'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\HomeController::store
* @see app/Http/Controllers/Dashboard/HomeController.php:34
* @route '/dashboard'
*/
var store = (options) => ({
	url: store.url(options),
	method: "post"
});
store.definition = {
	methods: ["post"],
	url: "/dashboard"
};
/**
* @see \App\Http\Controllers\Dashboard\HomeController::store
* @see app/Http/Controllers/Dashboard/HomeController.php:34
* @route '/dashboard'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\HomeController::store
* @see app/Http/Controllers/Dashboard/HomeController.php:34
* @route '/dashboard'
*/
store.post = (options) => ({
	url: store.url(options),
	method: "post"
});
var home = {
	index: Object.assign(index, index),
	store: Object.assign(store, store)
};
//#endregion
//#region resources/js/routes/dashboard/form/document/index.ts
/**
* @see \App\Http\Controllers\DocumentUploadController::nullMethod
* @see app/Http/Controllers/DocumentUploadController.php:54
* @route '/dashboard/{candidate}/document/{document}'
*/
var nullMethod = (args, options) => ({
	url: nullMethod.url(args, options),
	method: "patch"
});
nullMethod.definition = {
	methods: ["patch"],
	url: "/dashboard/{candidate}/document/{document}"
};
/**
* @see \App\Http\Controllers\DocumentUploadController::nullMethod
* @see app/Http/Controllers/DocumentUploadController.php:54
* @route '/dashboard/{candidate}/document/{document}'
*/
nullMethod.url = (args, options) => {
	if (Array.isArray(args)) args = {
		candidate: args[0],
		document: args[1]
	};
	args = applyUrlDefaults(args);
	const parsedArgs = {
		candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate,
		document: typeof args.document === "object" ? args.document.id : args.document
	};
	return nullMethod.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace("{document}", parsedArgs.document.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\DocumentUploadController::nullMethod
* @see app/Http/Controllers/DocumentUploadController.php:54
* @route '/dashboard/{candidate}/document/{document}'
*/
nullMethod.patch = (args, options) => ({
	url: nullMethod.url(args, options),
	method: "patch"
});
var document$2 = { null: Object.assign(nullMethod, nullMethod) };
//#endregion
//#region resources/js/routes/dashboard/form/index.ts
/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:17
* @route '/dashboard/{candidate}'
*/
var guide = (args, options) => ({
	url: guide.url(args, options),
	method: "get"
});
guide.definition = {
	methods: ["get", "head"],
	url: "/dashboard/{candidate}"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:17
* @route '/dashboard/{candidate}'
*/
guide.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return guide.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:17
* @route '/dashboard/{candidate}'
*/
guide.get = (args, options) => ({
	url: guide.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:17
* @route '/dashboard/{candidate}'
*/
guide.head = (args, options) => ({
	url: guide.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:41
* @route '/dashboard/{candidate}/form'
*/
var form = (args, options) => ({
	url: form.url(args, options),
	method: "get"
});
form.definition = {
	methods: ["get", "head"],
	url: "/dashboard/{candidate}/form"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:41
* @route '/dashboard/{candidate}/form'
*/
form.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return form.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:41
* @route '/dashboard/{candidate}/form'
*/
form.get = (args, options) => ({
	url: form.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:41
* @route '/dashboard/{candidate}/form'
*/
form.head = (args, options) => ({
	url: form.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:65
* @route '/dashboard/{candidate}/document'
*/
var document$1 = (args, options) => ({
	url: document$1.url(args, options),
	method: "get"
});
document$1.definition = {
	methods: ["get", "head"],
	url: "/dashboard/{candidate}/document"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:65
* @route '/dashboard/{candidate}/document'
*/
document$1.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return document$1.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:65
* @route '/dashboard/{candidate}/document'
*/
document$1.get = (args, options) => ({
	url: document$1.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:65
* @route '/dashboard/{candidate}/document'
*/
document$1.head = (args, options) => ({
	url: document$1.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:80
* @route '/dashboard/{candidate}/send'
*/
var send = (args, options) => ({
	url: send.url(args, options),
	method: "get"
});
send.definition = {
	methods: ["get", "head"],
	url: "/dashboard/{candidate}/send"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:80
* @route '/dashboard/{candidate}/send'
*/
send.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return send.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:80
* @route '/dashboard/{candidate}/send'
*/
send.get = (args, options) => ({
	url: send.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:80
* @route '/dashboard/{candidate}/send'
*/
send.head = (args, options) => ({
	url: send.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:93
* @route '/dashboard/{candidate}/review'
*/
var review = (args, options) => ({
	url: review.url(args, options),
	method: "get"
});
review.definition = {
	methods: ["get", "head"],
	url: "/dashboard/{candidate}/review"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:93
* @route '/dashboard/{candidate}/review'
*/
review.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return review.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:93
* @route '/dashboard/{candidate}/review'
*/
review.get = (args, options) => ({
	url: review.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:93
* @route '/dashboard/{candidate}/review'
*/
review.head = (args, options) => ({
	url: review.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::update
* @see app/Http/Controllers/Dashboard/FormController.php:106
* @route '/dashboard/{candidate}'
*/
var update = (args, options) => ({
	url: update.url(args, options),
	method: "put"
});
update.definition = {
	methods: ["put"],
	url: "/dashboard/{candidate}"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::update
* @see app/Http/Controllers/Dashboard/FormController.php:106
* @route '/dashboard/{candidate}'
*/
update.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return update.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::update
* @see app/Http/Controllers/Dashboard/FormController.php:106
* @route '/dashboard/{candidate}'
*/
update.put = (args, options) => ({
	url: update.url(args, options),
	method: "put"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::destroy
* @see app/Http/Controllers/Dashboard/FormController.php:129
* @route '/dashboard/{candidate}'
*/
var destroy = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
destroy.definition = {
	methods: ["delete"],
	url: "/dashboard/{candidate}"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::destroy
* @see app/Http/Controllers/Dashboard/FormController.php:129
* @route '/dashboard/{candidate}'
*/
destroy.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return destroy.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::destroy
* @see app/Http/Controllers/Dashboard/FormController.php:129
* @route '/dashboard/{candidate}'
*/
destroy.delete = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
var formNamespace = {
	guide: Object.assign(guide, guide),
	form: Object.assign(form, form),
	document: Object.assign(document$1, document$2),
	send: Object.assign(send, send),
	review: Object.assign(review, review),
	update: Object.assign(update, update),
	destroy: Object.assign(destroy, destroy)
};
//#endregion
//#region resources/js/routes/dashboard/index.ts
var dashboard = {
	home: Object.assign(home, home),
	form: Object.assign(formNamespace, formNamespace)
};
//#endregion
//#region resources/js/components/Navbar.vue?vue&type=script&setup=true&lang.ts
var Navbar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Navbar",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg bg-body-tertiary rounded" }, _attrs))}><div class="container">`);
			_push(ssrRenderComponent(unref(Link), {
				class: "navbar-brand col-lg-3 m-0",
				href: unref(home$1)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`${ssrInterpolate(unref(page).props.name)}`);
					else return [createTextVNode(toDisplayString(unref(page).props.name), 1)];
				}),
				_: 1
			}, _parent));
			_push(`<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"><div class="offcanvas-header"><h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body"><ul class="navbar-nav justify-content-lg-center flex-grow-1"><li class="nav-item">`);
			_push(ssrRenderComponent(unref(Link), {
				class: "nav-link me-0 me-lg-2 active",
				href: unref(home$1)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Beranda`);
					else return [createTextVNode("Beranda")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li class="nav-item">`);
			_push(ssrRenderComponent(unref(Link), {
				class: "nav-link me-0 me-lg-2",
				href: unref(faq)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`FAQ`);
					else return [createTextVNode("FAQ")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li class="nav-item">`);
			_push(ssrRenderComponent(unref(Link), {
				class: "nav-link",
				href: unref(check)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Cek Pendaftaran`);
					else return [createTextVNode("Cek Pendaftaran")];
				}),
				_: 1
			}, _parent));
			_push(`</li></ul>`);
			if (unref(page).props.auth.user) {
				_push(`<ul class="navbar-nav justify-content-lg-end flex-grow-1"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${ssrInterpolate(unref(page).props.auth.user.name)}</a><ul class="dropdown-menu dropdown-menu-end"><li>`);
				_push(ssrRenderComponent(unref(Link), {
					class: "dropdown-item",
					href: unref(dashboard).home.index()
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Dashboard`);
						else return [createTextVNode("Dashboard")];
					}),
					_: 1
				}, _parent));
				_push(`</li><li><a class="dropdown-item" href="#">Pengaturan</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item" role="button">Keluar</a></li></ul></li></ul>`);
			} else _push(`<!---->`);
			if (!unref(page).props.auth.user) {
				_push(`<div class="d-lg-flex col-lg-3 justify-content-lg-end mt-3 mt-lg-0">`);
				_push(ssrRenderComponent(unref(Link), {
					href: unref(login)(),
					class: "btn btn-primary"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Masuk`);
						else return [createTextVNode("Masuk")];
					}),
					_: 1
				}, _parent));
				_push(`</div>`);
			} else _push(`<!---->`);
			_push(`</div></div></div></nav>`);
		};
	}
});
//#endregion
//#region resources/js/components/Navbar.vue
var _sfc_setup$14 = Navbar_vue_vue_type_script_setup_true_lang_default.setup;
Navbar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Navbar.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var Navbar_default = Navbar_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/layouts/Form.vue?vue&type=script&setup=true&lang.ts
var Form_vue_vue_type_script_setup_true_lang_default$1 = /* @__PURE__ */ defineComponent({
	__name: "Form",
	__ssrInlineRender: true,
	props: { candidate: {} },
	setup(__props) {
		const page = usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(BApp, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="d-flex flex-column min-vh-100"${_scopeId}><header${_scopeId}>`);
						_push(ssrRenderComponent(Navbar_default, null, null, _parent, _scopeId));
						_push(`</header><main class="flex-grow-1"${_scopeId}><div class="container py-5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), { href: unref(dashboard).home.index() }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(ArrowLeft), null, null, _parent, _scopeId));
									_push(` Kembali ke Dashboard `);
								} else return [createVNode(unref(ArrowLeft)), createTextVNode(" Kembali ke Dashboard ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div class="row mt-4"${_scopeId}><div class="col-lg-3"${_scopeId}><div class="card bg-body-tertiary border-0"${_scopeId}><div class="card-body text-center"${_scopeId}><div class="text-center mb-4"${_scopeId}><h5 class="fw-bold mb-0"${_scopeId}>${ssrInterpolate(unref(page).props.auth.user.name)}</h5><p class="text-secondary small"${_scopeId}> Nomor Registrasi belum terbentuk. </p></div><div class="mb-4"${_scopeId}><div class="d-flex justify-content-between mb-2"${_scopeId}><span class="small fw-bold"${_scopeId}>Kelengkapan Data</span><span class="small fw-bold text-primary"${_scopeId}>40%</span></div><div class="progress"${_scopeId}><div class="progress-bar" style="${ssrRenderStyle({ "width": "40%" })}"${_scopeId}></div></div></div><div class="list-group list-group-flush shadow-none"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: unref(dashboard).form.guide(__props.candidate.id),
							class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.guide(__props.candidate.id).url }]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span class="me-3"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Form), null, null, _parent, _scopeId));
									_push(`</span><span class="small fw-bold"${_scopeId}>Petunjuk Pengisian</span>`);
								} else return [createVNode("span", { class: "me-3" }, [createVNode(unref(Form))]), createVNode("span", { class: "small fw-bold" }, "Petunjuk Pengisian")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: unref(dashboard).form.form(__props.candidate.id),
							class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.form(__props.candidate.id).url }]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span class="me-3"${_scopeId}>`);
									_push(ssrRenderComponent(unref(User), null, null, _parent, _scopeId));
									_push(`</span><span class="small fw-bold"${_scopeId}>Formulir Pendaftaran</span>`);
								} else return [createVNode("span", { class: "me-3" }, [createVNode(unref(User))]), createVNode("span", { class: "small fw-bold" }, "Formulir Pendaftaran")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: unref(dashboard).form.document(__props.candidate.id),
							class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.document(__props.candidate.id).url }]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span class="me-3"${_scopeId}>`);
									_push(ssrRenderComponent(unref(FileSearchCorner), null, null, _parent, _scopeId));
									_push(`</span><span class="small fw-bold"${_scopeId}>Berkas Persyaratan</span>`);
								} else return [createVNode("span", { class: "me-3" }, [createVNode(unref(FileSearchCorner))]), createVNode("span", { class: "small fw-bold" }, "Berkas Persyaratan")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: unref(dashboard).form.send(__props.candidate.id),
							class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.send(__props.candidate.id).url }]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span class="me-3"${_scopeId}>`);
									_push(ssrRenderComponent(unref(ScanText), null, null, _parent, _scopeId));
									_push(`</span><span class="small fw-bold"${_scopeId}>Kirim Berkas</span>`);
								} else return [createVNode("span", { class: "me-3" }, [createVNode(unref(ScanText))]), createVNode("span", { class: "small fw-bold" }, "Kirim Berkas")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(unref(Link), {
							href: unref(dashboard).form.review(__props.candidate.id),
							class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.review(__props.candidate.id).url }]
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(`<span class="me-3"${_scopeId}>`);
									_push(ssrRenderComponent(unref(CircleCheckBig), null, null, _parent, _scopeId));
									_push(`</span><span class="small fw-bold"${_scopeId}>Status Review</span>`);
								} else return [createVNode("span", { class: "me-3" }, [createVNode(unref(CircleCheckBig))]), createVNode("span", { class: "small fw-bold" }, "Status Review")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<button class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-secondary"${_scopeId}><span class="me-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card" aria-hidden="true"${_scopeId}><rect width="20" height="14" x="2" y="5" rx="2"${_scopeId}></rect><line x1="2" x2="22" y1="10" y2="10"${_scopeId}></line></svg></span><span class="small fw-bold"${_scopeId}>Pembayaran</span></button><button class="list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-secondary"${_scopeId}><span class="me-3"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar" aria-hidden="true"${_scopeId}><path d="M8 2v4"${_scopeId}></path><path d="M16 2v4"${_scopeId}></path><rect width="18" height="18" x="3" y="4" rx="2"${_scopeId}></rect><path d="M3 10h18"${_scopeId}></path></svg></span><span class="small fw-bold"${_scopeId}>Jadwal Tes</span></button></div></div></div></div><div class="col-lg-9"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`</div></div></div></main>`);
						_push(ssrRenderComponent(Footer_default, null, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "d-flex flex-column min-vh-100" }, [
						createVNode("header", null, [createVNode(Navbar_default)]),
						createVNode("main", { class: "flex-grow-1" }, [createVNode("div", { class: "container py-5" }, [createVNode(unref(Link), { href: unref(dashboard).home.index() }, {
							default: withCtx(() => [createVNode(unref(ArrowLeft)), createTextVNode(" Kembali ke Dashboard ")]),
							_: 1
						}, 8, ["href"]), createVNode("div", { class: "row mt-4" }, [createVNode("div", { class: "col-lg-3" }, [createVNode("div", { class: "card bg-body-tertiary border-0" }, [createVNode("div", { class: "card-body text-center" }, [
							createVNode("div", { class: "text-center mb-4" }, [createVNode("h5", { class: "fw-bold mb-0" }, toDisplayString(unref(page).props.auth.user.name), 1), createVNode("p", { class: "text-secondary small" }, " Nomor Registrasi belum terbentuk. ")]),
							createVNode("div", { class: "mb-4" }, [createVNode("div", { class: "d-flex justify-content-between mb-2" }, [createVNode("span", { class: "small fw-bold" }, "Kelengkapan Data"), createVNode("span", { class: "small fw-bold text-primary" }, "40%")]), createVNode("div", { class: "progress" }, [createVNode("div", {
								class: "progress-bar",
								style: { "width": "40%" }
							})])]),
							createVNode("div", { class: "list-group list-group-flush shadow-none" }, [
								createVNode(unref(Link), {
									href: unref(dashboard).form.guide(__props.candidate.id),
									class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.guide(__props.candidate.id).url }]
								}, {
									default: withCtx(() => [createVNode("span", { class: "me-3" }, [createVNode(unref(Form))]), createVNode("span", { class: "small fw-bold" }, "Petunjuk Pengisian")]),
									_: 1
								}, 8, ["href", "class"]),
								createVNode(unref(Link), {
									href: unref(dashboard).form.form(__props.candidate.id),
									class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.form(__props.candidate.id).url }]
								}, {
									default: withCtx(() => [createVNode("span", { class: "me-3" }, [createVNode(unref(User))]), createVNode("span", { class: "small fw-bold" }, "Formulir Pendaftaran")]),
									_: 1
								}, 8, ["href", "class"]),
								createVNode(unref(Link), {
									href: unref(dashboard).form.document(__props.candidate.id),
									class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.document(__props.candidate.id).url }]
								}, {
									default: withCtx(() => [createVNode("span", { class: "me-3" }, [createVNode(unref(FileSearchCorner))]), createVNode("span", { class: "small fw-bold" }, "Berkas Persyaratan")]),
									_: 1
								}, 8, ["href", "class"]),
								createVNode(unref(Link), {
									href: unref(dashboard).form.send(__props.candidate.id),
									class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.send(__props.candidate.id).url }]
								}, {
									default: withCtx(() => [createVNode("span", { class: "me-3" }, [createVNode(unref(ScanText))]), createVNode("span", { class: "small fw-bold" }, "Kirim Berkas")]),
									_: 1
								}, 8, ["href", "class"]),
								createVNode(unref(Link), {
									href: unref(dashboard).form.review(__props.candidate.id),
									class: ["list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-decoration-none", { "active bg-primary-subtle text-primary disabled": _ctx.$page.url === unref(dashboard).form.review(__props.candidate.id).url }]
								}, {
									default: withCtx(() => [createVNode("span", { class: "me-3" }, [createVNode(unref(CircleCheckBig))]), createVNode("span", { class: "small fw-bold" }, "Status Review")]),
									_: 1
								}, 8, ["href", "class"]),
								createVNode("button", { class: "list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-secondary" }, [createVNode("span", { class: "me-3" }, [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									width: "18",
									height: "18",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									class: "lucide lucide-credit-card",
									"aria-hidden": "true"
								}, [createVNode("rect", {
									width: "20",
									height: "14",
									x: "2",
									y: "5",
									rx: "2"
								}), createVNode("line", {
									x1: "2",
									x2: "22",
									y1: "10",
									y2: "10"
								})]))]), createVNode("span", { class: "small fw-bold" }, "Pembayaran")]),
								createVNode("button", { class: "list-group-item list-group-item-action border-0 rounded-3 mb-2 d-flex align-items-center text-secondary" }, [createVNode("span", { class: "me-3" }, [(openBlock(), createBlock("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									width: "18",
									height: "18",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									"stroke-width": "2",
									"stroke-linecap": "round",
									"stroke-linejoin": "round",
									class: "lucide lucide-calendar",
									"aria-hidden": "true"
								}, [
									createVNode("path", { d: "M8 2v4" }),
									createVNode("path", { d: "M16 2v4" }),
									createVNode("rect", {
										width: "18",
										height: "18",
										x: "3",
										y: "4",
										rx: "2"
									}),
									createVNode("path", { d: "M3 10h18" })
								]))]), createVNode("span", { class: "small fw-bold" }, "Jadwal Tes")])
							])
						])])]), createVNode("div", { class: "col-lg-9" }, [renderSlot(_ctx.$slots, "default")])])])]),
						createVNode(Footer_default)
					])];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/layouts/Form.vue
var _sfc_setup$13 = Form_vue_vue_type_script_setup_true_lang_default$1.setup;
Form_vue_vue_type_script_setup_true_lang_default$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Form.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
var Form_default$1 = Form_vue_vue_type_script_setup_true_lang_default$1;
//#endregion
//#region resources/js/routes/document/index.ts
/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:16
* @route '/document-upload'
*/
var upload = (options) => ({
	url: upload.url(options),
	method: "post"
});
upload.definition = {
	methods: ["post"],
	url: "/document-upload"
};
/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:16
* @route '/document-upload'
*/
upload.url = (options) => {
	return upload.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:16
* @route '/document-upload'
*/
upload.post = (options) => ({
	url: upload.url(options),
	method: "post"
});
var document = { upload: Object.assign(upload, upload) };
//#endregion
//#region resources/js/pages/Dashboard/Document.vue?vue&type=script&setup=true&lang.ts
var Document_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	layout: Form_default$1,
	__name: "Document",
	__ssrInlineRender: true,
	props: {
		meta: {},
		candidate: {}
	},
	setup(__props) {
		const mount = ref(false);
		onMounted(() => {
			mount.value = true;
		});
		const { create } = useModal();
		const overlay = ref({
			id: 0,
			show: false
		});
		const form = useForm({
			id: 0,
			file: null
		});
		const handleUpload = ({ id, files }) => {
			if (!files.length) return;
			form.id = Number(id);
			form.file = files[0];
			overlay.value = {
				id: Number(id),
				show: true
			};
			form.post(document.upload().url, {
				preserveScroll: true,
				forceFormData: true,
				onFinish: () => {
					form.reset();
					overlay.value = {
						id: 0,
						show: false
					};
				}
			});
		};
		const trash = (uuid, id, title) => {
			create({
				size: "md",
				body: "Apakah anda yakin ingin menghapus file ini?",
				bodyClass: "small text-muted",
				title,
				okClass: "btn-danger",
				okTitle: "Hapus",
				centered: true,
				cancelTitle: "Batal",
				onOk: () => {
					form.processing = true;
					useForm().patch(dashboard.form.document.null({
						candidate: uuid,
						document: id
					}).url, {
						preserveScroll: true,
						onFinish: () => {
							form.reset();
							form.processing = false;
						}
					});
				}
			}).show();
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BOverlay = BOverlay;
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.meta.title)}</title><meta name="description"${ssrRenderAttr("content", __props.meta.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.meta.title), 1), createVNode("meta", {
						name: "description",
						content: __props.meta.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="card bg-body-tertiary border-0"><div class="card-body"><div class="d-flex justify-content-between align-items-center mb-4"><div><h4 class="fw-bold mb-1">${ssrInterpolate(__props.meta.title)}</h4><p class="text-secondary small mb-0"> Unggah berkas dalam format PDF <strong>(Direkomendasikan)</strong> atau Gambar (Maks. 2MB) </p></div><div class="${ssrRenderClass([{
				"bg-success-subtle text-success": __props.candidate.documentable.filter((document) => document.name !== null).length === __props.candidate.documentable.length,
				"bg-danger-subtle text-danger": __props.candidate.documentable.filter((document) => document.name !== null).length !== __props.candidate.documentable.length
			}, "badge rounded-pill px-3 py-2 fw-bold"])}">${ssrInterpolate(__props.candidate.documentable.filter((document) => document.name !== null).length)}/${ssrInterpolate(__props.candidate.documentable.length)} Dokumen Terunggah </div></div>`);
			if (mount.value) {
				_push(`<div class="row g-4"><!--[-->`);
				ssrRenderList(__props.candidate.documentable, (document) => {
					_push(`<div class="col-md-6">`);
					_push(ssrRenderComponent(_component_BOverlay, {
						rounded: "lg",
						variant: "transparent",
						show: overlay.value.id === document.id
					}, {
						default: withCtx((_, _push, _parent, _scopeId) => {
							if (_push) {
								_push(`<div class="card border-0 rounded-5 h-100 shadow-sm border-0"${_scopeId}>`);
								if (document.name) {
									_push(`<div class="p-4"${_scopeId}><div class="d-flex justify-content-between align-items-start mb-3"${_scopeId}><div${_scopeId}><label class="form-label small fw-bold d-block mb-1"${_scopeId}>${ssrInterpolate(document.document_type.name)}</label><div class="d-flex align-items-center text-success small fw-bold"${_scopeId}>`);
									_push(ssrRenderComponent(unref(CircleCheckBig), {
										size: 16,
										class: "me-2"
									}, null, _parent, _scopeId));
									_push(` Terverifikasi Sistem </div></div><div class="p-2 rounded-circle bg-success-subtle text-success"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Check), null, null, _parent, _scopeId));
									_push(`</div></div><div class="mt-2"${_scopeId}><div class="rounded-4 p-3 border"${_scopeId}><div class="d-flex align-items-center mb-3"${_scopeId}>`);
									if (document.mime === "application/pdf") {
										_push(`<div class="bg-danger-subtle p-2 rounded-3 me-3 text-danger"${_scopeId}>`);
										_push(ssrRenderComponent(unref(FileText), null, null, _parent, _scopeId));
										_push(`</div>`);
									} else {
										_push(`<div class="bg-success-subtle p-2 rounded-3 me-3 text-success"${_scopeId}>`);
										_push(ssrRenderComponent(unref(Image), null, null, _parent, _scopeId));
										_push(`</div>`);
									}
									_push(`<div class="overflow-hidden"${_scopeId}><h6 class="small fw-bold mb-0 text-truncate"${_scopeId}>${ssrInterpolate(document.mime === "application/pdf" ? "PDF" : "Gambar")}</h6><small class="text-secondary"${_scopeId}>${ssrInterpolate(typeof document.size === "number" ? (document.size / (1024 * 1024)).toFixed(2) : "Tidak diketahui")} MB </small></div></div><div class="d-flex gap-2"${_scopeId}><button type="button" class="btn btn-sm btn-primary"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Search), { size: 16 }, null, _parent, _scopeId));
									_push(`</button><button type="button" class="btn btn-sm btn-danger"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>`);
									_push(ssrRenderComponent(unref(Trash), { size: 16 }, null, _parent, _scopeId));
									_push(`</button></div></div></div></div>`);
								} else {
									_push(`<div class="p-4"${_scopeId}><div class="d-flex justify-content-between align-items-start mb-3"${_scopeId}><div${_scopeId}><label class="form-label small fw-bold d-block mb-1"${_scopeId}>${ssrInterpolate(document.document_type.name)}</label><div class="d-flex align-items-center text-secondary small"${_scopeId}>`);
									_push(ssrRenderComponent(unref(CircleAlert), {
										size: 16,
										class: "me-2"
									}, null, _parent, _scopeId));
									_push(` Belum diunggah </div></div><div class="p-2 rounded-circle text-primary shadow-sm"${_scopeId}>`);
									_push(ssrRenderComponent(unref(Upload), null, null, _parent, _scopeId));
									_push(`</div></div>`);
									_push(ssrRenderComponent(Dropzone_default, {
										"item-id": document.id,
										onDropped: handleUpload
									}, null, _parent, _scopeId));
									_push(`</div>`);
								}
								_push(`</div>`);
							} else return [createVNode("div", { class: "card border-0 rounded-5 h-100 shadow-sm border-0" }, [document.name ? (openBlock(), createBlock("div", {
								key: 0,
								class: "p-4"
							}, [createVNode("div", { class: "d-flex justify-content-between align-items-start mb-3" }, [createVNode("div", null, [createVNode("label", { class: "form-label small fw-bold d-block mb-1" }, toDisplayString(document.document_type.name), 1), createVNode("div", { class: "d-flex align-items-center text-success small fw-bold" }, [createVNode(unref(CircleCheckBig), {
								size: 16,
								class: "me-2"
							}), createTextVNode(" Terverifikasi Sistem ")])]), createVNode("div", { class: "p-2 rounded-circle bg-success-subtle text-success" }, [createVNode(unref(Check))])]), createVNode("div", { class: "mt-2" }, [createVNode("div", { class: "rounded-4 p-3 border" }, [createVNode("div", { class: "d-flex align-items-center mb-3" }, [document.mime === "application/pdf" ? (openBlock(), createBlock("div", {
								key: 0,
								class: "bg-danger-subtle p-2 rounded-3 me-3 text-danger"
							}, [createVNode(unref(FileText))])) : (openBlock(), createBlock("div", {
								key: 1,
								class: "bg-success-subtle p-2 rounded-3 me-3 text-success"
							}, [createVNode(unref(Image))])), createVNode("div", { class: "overflow-hidden" }, [createVNode("h6", { class: "small fw-bold mb-0 text-truncate" }, toDisplayString(document.mime === "application/pdf" ? "PDF" : "Gambar"), 1), createVNode("small", { class: "text-secondary" }, toDisplayString(typeof document.size === "number" ? (document.size / (1024 * 1024)).toFixed(2) : "Tidak diketahui") + " MB ", 1)])]), createVNode("div", { class: "d-flex gap-2" }, [createVNode("button", {
								type: "button",
								class: "btn btn-sm btn-primary"
							}, [createVNode(unref(Search), { size: 16 })]), createVNode("button", {
								type: "button",
								class: "btn btn-sm btn-danger",
								onClick: ($event) => trash(__props.candidate.id, document.id, document.document_type.name),
								disabled: unref(form).processing
							}, [createVNode(unref(Trash), { size: 16 })], 8, ["onClick", "disabled"])])])])])) : (openBlock(), createBlock("div", {
								key: 1,
								class: "p-4"
							}, [createVNode("div", { class: "d-flex justify-content-between align-items-start mb-3" }, [createVNode("div", null, [createVNode("label", { class: "form-label small fw-bold d-block mb-1" }, toDisplayString(document.document_type.name), 1), createVNode("div", { class: "d-flex align-items-center text-secondary small" }, [createVNode(unref(CircleAlert), {
								size: 16,
								class: "me-2"
							}), createTextVNode(" Belum diunggah ")])]), createVNode("div", { class: "p-2 rounded-circle text-primary shadow-sm" }, [createVNode(unref(Upload))])]), createVNode(Dropzone_default, {
								"item-id": document.id,
								onDropped: handleUpload
							}, null, 8, ["item-id"])]))])];
						}),
						_: 2
					}, _parent));
					_push(`</div>`);
				});
				_push(`<!--]--></div>`);
			} else _push(`<!---->`);
			_push(`<div class="mt-5 d-flex justify-content-between">`);
			_push(ssrRenderComponent(unref(Link), {
				href: unref(dashboard).form.form(__props.candidate.id),
				class: "btn btn-sm btn-outline-secondary px-4 rounded-pill"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Kembali`);
					else return [createTextVNode("Kembali")];
				}),
				_: 1
			}, _parent));
			_push(`<button type="submit" class="btn btn-sm btn-primary px-5 rounded-pill"> Lanjutkan </button></div></div></div>`);
			if (mount.value) ssrRenderTeleport(_push, (_push) => {
				_push(ssrRenderComponent(unref(Toaster), null, null, _parent));
			}, "body", false, _parent);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Dashboard/Document.vue
var Document_exports = /* @__PURE__ */ __exportAll({ default: () => Document_default });
var _sfc_setup$12 = Document_vue_vue_type_script_setup_true_lang_default.setup;
Document_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Document.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var Document_default = Document_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/Forms/Select.vue?vue&type=script&setup=true&lang.ts
var Select_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Select",
	__ssrInlineRender: true,
	props: {
		label: {},
		placeholder: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		size: {},
		options: {},
		modelValue: {}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const show = ref(false);
		const target = useTemplateRef("target");
		const selected = ref(null);
		onClickOutside(target, () => {
			show.value = false;
		});
		if (props.modelValue) selected.value = props.options.find((option) => {
			return option.id === props.modelValue;
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				class: "position-relative",
				ref_key: "target",
				ref: target
			}, _attrs))} data-v-cbbb0ceb><div class="form-control form-control-sm d-flex justify-content-between align-items-center cursor-pointer" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-cbbb0ceb><span class="text-truncate me-2" data-v-cbbb0ceb>${ssrInterpolate(selected.value?.name || "Pilih Opsi")}</span><button type="button" class="btn-close" style="${ssrRenderStyle({ "font-size": "0.65rem" })}" data-v-cbbb0ceb></button></div>`);
			if (show.value) {
				_push(`<div class="position-absolute w-100 bg-body-tertiary border rounded-2 mt-1 z-3 shadow-sm" style="${ssrRenderStyle({
					"max-height": "185px",
					"overflow-y": "auto",
					"overflow-x": "hidden"
				})}" data-v-cbbb0ceb><div class="p-2" data-v-cbbb0ceb><!--[-->`);
				ssrRenderList(__props.options, (option, index) => {
					_push(`<div class="${ssrRenderClass([{ "mb-0": index === __props.options.length - 1 }, "form-check p-1 rounded-1 small"])}" data-v-cbbb0ceb><input class="form-check-input ms-0 me-2" type="radio"${ssrRenderAttr("name", "radio-group-" + __props.label)}${ssrRenderAttr("id", "radio-" + index)}${ssrRenderAttr("value", option.id)}${ssrIncludeBooleanAttr(__props.modelValue === option.id) ? " checked" : ""} data-v-cbbb0ceb><label class="form-check-label d-block w-100"${ssrRenderAttr("for", "radio-" + index)} data-v-cbbb0ceb>${ssrInterpolate(option.name)}</label></div>`);
				});
				_push(`<!--]--></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/Forms/Select.vue
var _sfc_setup$11 = Select_vue_vue_type_script_setup_true_lang_default.setup;
Select_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Forms/Select.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
var Select_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Select_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-cbbb0ceb"]]);
//#endregion
//#region resources/js/components/Forms/PersonalData.vue?vue&type=script&setup=true&lang.ts
var PersonalData_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PersonalData",
	__ssrInlineRender: true,
	props: /* @__PURE__ */ mergeModels({ religions: {} }, {
		"modelValue": { default: {
			kk_number: null,
			nik_number: null,
			name: null,
			nisn: null,
			birth_place: null,
			birth_date: null,
			father_name: null,
			mother_name: null,
			address: null,
			gender: null,
			religion_id: null,
			birth_certificate_number: null
		} },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const number = (e) => {
			const charCode = e.which ? e.which : e.keyCode;
			if (charCode > 31 && (charCode < 48 || charCode > 57)) e.preventDefault();
		};
		const vUppercase = { updated(el) {
			el.value = el.value.toUpperCase();
		} };
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BFormInput = BFormInput;
			const _component_BFormRadioGroup = BFormRadioGroup;
			const _component_BFormRadio = BFormRadio;
			const _component_BFormTextarea = BFormTextarea;
			_push(`<form${ssrRenderAttrs(_attrs)}><div class="mb-5"><div class="mb-5"><h4 class="text-primary-emphasis border-start border-primary ps-2">Identitas Anak</h4><div class="mb-3 row"><label class="col-sm-3 col-form-label" for="name">Nama Lengkap</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormInput, mergeProps({
				type: "text",
				id: "name",
				size: "sm",
				modelValue: model.value.name,
				"onUpdate:modelValue": ($event) => model.value.name = $event
			}, ssrGetDirectiveProps(_ctx, vUppercase)), null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="gender">Jenis Kelamin</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormRadioGroup, {
				id: "gender",
				modelValue: model.value.gender,
				"onUpdate:modelValue": ($event) => model.value.gender = $event
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_BFormRadio, { value: "male" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Laki-laki`);
								else return [createTextVNode("Laki-laki")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_BFormRadio, { value: "female" }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Perempuan`);
								else return [createTextVNode("Perempuan")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [createVNode(_component_BFormRadio, { value: "male" }, {
						default: withCtx(() => [createTextVNode("Laki-laki")]),
						_: 1
					}), createVNode(_component_BFormRadio, { value: "female" }, {
						default: withCtx(() => [createTextVNode("Perempuan")]),
						_: 1
					})];
				}),
				_: 1
			}, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="religion">Agama</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(Select_default, {
				label: "Agama",
				modelValue: model.value.religion_id,
				"onUpdate:modelValue": ($event) => model.value.religion_id = $event,
				options: __props.religions
			}, null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="birth_place">Tempat Lahir</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormInput, mergeProps({
				type: "text",
				id: "birth_place",
				size: "sm",
				modelValue: model.value.birth_place,
				"onUpdate:modelValue": ($event) => model.value.birth_place = $event
			}, ssrGetDirectiveProps(_ctx, vUppercase)), null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="birth_date">Tanggal Lahir</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormInput, {
				type: "date",
				id: "birth_date",
				size: "sm",
				modelValue: model.value.birth_date,
				"onUpdate:modelValue": ($event) => model.value.birth_date = $event
			}, null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="nisn">NISN</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormInput, {
				type: "tel",
				id: "nisn",
				size: "sm",
				modelValue: model.value.nisn,
				"onUpdate:modelValue": ($event) => model.value.nisn = $event,
				onKeypress: ($event) => number($event)
			}, null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="nik_number">No. NIK</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormInput, {
				type: "tel",
				id: "nik_number",
				size: "sm",
				modelValue: model.value.nik_number,
				"onUpdate:modelValue": ($event) => model.value.nik_number = $event,
				onKeypress: ($event) => number($event)
			}, null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="kk_number">No. KK</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormInput, {
				type: "text",
				id: "kk_number",
				size: "sm",
				modelValue: model.value.kk_number,
				"onUpdate:modelValue": ($event) => model.value.kk_number = $event,
				onKeypress: ($event) => number($event)
			}, null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="birth-certificate-number">No. Registrasi Akta Lahir</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormInput, mergeProps({
				type: "text",
				id: "birth-certificate-number",
				size: "sm",
				modelValue: model.value.birth_certificate_number,
				"onUpdate:modelValue": ($event) => model.value.birth_certificate_number = $event
			}, ssrGetDirectiveProps(_ctx, vUppercase)), null, _parent));
			_push(`</div></div></div><div class="mb-3"><h4 class="text-primary-emphasis text-primary-emphasis border-start border-primary ps-2">Pendidikan Sebelumnya</h4><div class="row mb-3"><label class="col-sm-3 col-form-label" for="school-origin-name">Asal Sekolah</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormInput, {
				type: "text",
				id: "school-origin-name",
				size: "sm",
				placeholder: "Contoh: SMP Negeri 1 Bandung"
			}, null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="school-origin-address">Alamat Sekolah</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormTextarea, {
				id: "school-origin-address",
				size: "sm",
				rows: "3"
			}, null, _parent));
			_push(`</div></div></div></div><div class="mb-5"><h4 class="text-primary-emphasis border-start border-primary ps-2">Status Tempat Tinggal dan Alamat</h4><div class="row mb-3"><label class="col-sm-3 col-form-label" for="address">Alamat Lengkap</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormTextarea, {
				id: "address",
				modelValue: model.value.address,
				"onUpdate:modelValue": ($event) => model.value.address = $event,
				size: "sm",
				rows: "3"
			}, null, _parent));
			_push(`</div></div><div class="row mb-3"><label class="col-sm-3 col-form-label" for="live-with">Tinggal Bersama</label><div class="col-sm-9">`);
			_push(ssrRenderComponent(_component_BFormRadioGroup, {
				id: "live-with",
				stacked: ""
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(_component_BFormRadio, { value: null }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Orang Tua`);
								else return [createTextVNode("Orang Tua")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_BFormRadio, { value: null }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Wali`);
								else return [createTextVNode("Wali")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_BFormRadio, { value: null }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Saudara`);
								else return [createTextVNode("Saudara")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(ssrRenderComponent(_component_BFormRadio, { value: null }, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) _push(`Pesantren`);
								else return [createTextVNode("Pesantren")];
							}),
							_: 1
						}, _parent, _scopeId));
					} else return [
						createVNode(_component_BFormRadio, { value: null }, {
							default: withCtx(() => [createTextVNode("Orang Tua")]),
							_: 1
						}),
						createVNode(_component_BFormRadio, { value: null }, {
							default: withCtx(() => [createTextVNode("Wali")]),
							_: 1
						}),
						createVNode(_component_BFormRadio, { value: null }, {
							default: withCtx(() => [createTextVNode("Saudara")]),
							_: 1
						}),
						createVNode(_component_BFormRadio, { value: null }, {
							default: withCtx(() => [createTextVNode("Pesantren")]),
							_: 1
						})
					];
				}),
				_: 1
			}, _parent));
			_push(`</div></div></div></form>`);
		};
	}
});
//#endregion
//#region resources/js/components/Forms/PersonalData.vue
var _sfc_setup$10 = PersonalData_vue_vue_type_script_setup_true_lang_default.setup;
PersonalData_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Forms/PersonalData.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
var PersonalData_default = PersonalData_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/RegistrationForms/StudentParent.vue?vue&type=script&setup=true&lang.ts
var StudentParent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "StudentParent",
	__ssrInlineRender: true,
	props: {
		"modelValue": { default: {
			father: {
				name: null,
				nik_number: null,
				address: null,
				phone: null,
				job: null,
				type: "father"
			},
			mother: {
				name: null,
				nik_number: null,
				address: null,
				phone: null,
				job: null,
				type: "mother"
			},
			guardian: {
				name: null,
				nik_number: null,
				address: null,
				phone: null,
				job: null,
				type: "guardian"
			}
		} },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const types = [
			{
				label: "Ayah",
				value: "father"
			},
			{
				label: "Ibu",
				value: "mother"
			},
			{
				label: "Wali",
				value: "guardian"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BFormInput = BFormInput;
			const _component_BFormTextarea = BFormTextarea;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))}><h4 class="text-primary-emphasis border-start border-primary ps-2">Identitas Orang Tua</h4><div class="mb-3"><!--[-->`);
			ssrRenderList(types, (type, index) => {
				_push(`<div class="col-lg-12 mb-5"><h6 class="text-primary">Identitas ${ssrInterpolate(type.label)}</h6><div class="mb-3 row"><label class="col-sm-3 col-form-label"${ssrRenderAttr("for", model.value[type.value] + "-name")}>Nama</label><div class="col-sm-9">`);
				_push(ssrRenderComponent(_component_BFormInput, {
					type: "text",
					id: model.value[type.value].id + "-name",
					size: "sm",
					modelValue: model.value[type.value].name,
					"onUpdate:modelValue": ($event) => model.value[type.value].name = $event
				}, null, _parent));
				_push(`</div></div><div class="mb-3 row"><label class="col-sm-3 col-form-label"${ssrRenderAttr("for", model.value[type.value] + "-nik-number")}>NIK</label><div class="col-sm-9">`);
				_push(ssrRenderComponent(_component_BFormInput, {
					type: "text",
					id: model.value[type.value].id + "-nik-number",
					size: "sm",
					modelValue: model.value[type.value].nik_number,
					"onUpdate:modelValue": ($event) => model.value[type.value].nik_number = $event
				}, null, _parent));
				_push(`</div></div><div class="mb-3 row"><label class="col-sm-3 col-form-label"${ssrRenderAttr("for", model.value[type.value] + "-phone")}>No. Telepon</label><div class="col-sm-9">`);
				_push(ssrRenderComponent(_component_BFormInput, {
					type: "text",
					id: model.value[type.value].id + "-phone",
					size: "sm",
					modelValue: model.value[type.value].phone,
					"onUpdate:modelValue": ($event) => model.value[type.value].phone = $event
				}, null, _parent));
				_push(`</div></div><div class="mb-3 row"><label class="col-sm-3 col-form-label"${ssrRenderAttr("for", model.value[type.value] + "-address")}>Alamat</label><div class="col-sm-9">`);
				_push(ssrRenderComponent(_component_BFormTextarea, {
					id: model.value[type.value].id + "-address",
					size: "sm",
					modelValue: model.value[type.value].address,
					"onUpdate:modelValue": ($event) => model.value[type.value].address = $event,
					rows: 4
				}, null, _parent));
				_push(`</div></div></div>`);
			});
			_push(`<!--]--></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/components/RegistrationForms/StudentParent.vue
var _sfc_setup$9 = StudentParent_vue_vue_type_script_setup_true_lang_default.setup;
StudentParent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/RegistrationForms/StudentParent.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var StudentParent_default = StudentParent_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/pages/Dashboard/Form.vue?vue&type=script&setup=true&lang.ts
var Form_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	layout: Form_default$1,
	__name: "Form",
	__ssrInlineRender: true,
	props: {
		candidate: {},
		religions: {},
		meta: {}
	},
	setup(__props) {
		const props = __props;
		const mount = ref(false);
		onMounted(() => {
			mount.value = true;
		});
		const temp = ref({
			name: "",
			level: ""
		});
		const form = useForm({
			kk_number: props.candidate.kk_number,
			nik_number: props.candidate.nik_number,
			name: props.candidate.name,
			nisn: props.candidate.nisn,
			birth_place: props.candidate.birth_place,
			birth_date: props.candidate.birth_date,
			father_name: props.candidate.father_name,
			mother_name: props.candidate.mother_name,
			address: props.candidate.address,
			religion_id: props.candidate.religion_id,
			gender: props.candidate.gender,
			birth_certificate_number: props.candidate.birth_certificate_number,
			parents: {
				father: props.candidate.parents["father"],
				mother: props.candidate.parents["mother"],
				guardian: props.candidate.parents["guardian"]
			},
			achievements: [{
				name: "Juara 1 OSN Matematika",
				level: "Provinsi"
			}, {
				name: "Juara 1 OSN Bahasa Inggris",
				level: "Provinsi"
			}]
		});
		const create = () => {
			form.achievements.push(temp.value);
			temp.value = {
				name: "",
				level: ""
			};
		};
		const remove = (index) => {
			form.achievements.splice(index, 1);
		};
		const onSubmit = () => {
			form.put(update(props.candidate.id).url, {
				preserveScroll: true,
				onSuccess: () => {
					toast.success("Data berhasil disimpan", {
						style: {
							background: "var(--bs-success)",
							color: "#fff",
							border: "none",
							fontFamily: "Poppins"
						},
						position: "top-right"
					});
				}
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BOverlay = BOverlay;
			const _component_BTabs = BTabs;
			const _component_BTab = BTab;
			const _component_BCardText = BCardText;
			const _component_BBadge = BBadge;
			const _component_BButton = BButton;
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.meta.title)}</title><meta name="description"${ssrRenderAttr("content", __props.meta.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.meta.title), 1), createVNode("meta", {
						name: "description",
						content: __props.meta.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_BOverlay, {
				show: !mount.value,
				rounded: "sm"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(ssrRenderComponent(unref(Toaster), null, null, _parent, _scopeId));
						_push(`<div class="card bg-body-tertiary border-0"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-4"${_scopeId}><h4 class="fw-bold mb-0"${_scopeId}>Formulir Pendaftaran</h4><span class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill"${_scopeId}>`);
						if (__props.candidate.type === "new") _push(`<!--[-->Siswa Baru<!--]-->`);
						else if (__props.candidate.type === "transfer") _push(`<!--[-->Siswa Pindahan<!--]-->`);
						else _push(`<!--[-->Tidak Diketahui<!--]-->`);
						_push(`</span></div>`);
						if (mount.value) {
							_push(`<form${_scopeId}>`);
							_push(ssrRenderComponent(_component_BTabs, {
								pills: "",
								fill: ""
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) {
										_push(ssrRenderComponent(_component_BTab, {
											title: "Identitas Siswa",
											active: ""
										}, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(_component_BCardText, { class: "py-3" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(PersonalData_default, {
															modelValue: unref(form),
															"onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
															religions: __props.religions
														}, null, _parent, _scopeId));
														else return [createVNode(PersonalData_default, {
															modelValue: unref(form),
															"onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
															religions: __props.religions
														}, null, 8, [
															"modelValue",
															"onUpdate:modelValue",
															"religions"
														])];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(_component_BCardText, { class: "py-3" }, {
													default: withCtx(() => [createVNode(PersonalData_default, {
														modelValue: unref(form),
														"onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
														religions: __props.religions
													}, null, 8, [
														"modelValue",
														"onUpdate:modelValue",
														"religions"
													])]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(_component_BTab, { title: "Identitas Orang Tua" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(_component_BCardText, { class: "py-3" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(ssrRenderComponent(StudentParent_default, {
															modelValue: unref(form).parents,
															"onUpdate:modelValue": ($event) => unref(form).parents = $event
														}, null, _parent, _scopeId));
														else return [createVNode(StudentParent_default, {
															modelValue: unref(form).parents,
															"onUpdate:modelValue": ($event) => unref(form).parents = $event
														}, null, 8, ["modelValue", "onUpdate:modelValue"])];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(_component_BCardText, { class: "py-3" }, {
													default: withCtx(() => [createVNode(StudentParent_default, {
														modelValue: unref(form).parents,
														"onUpdate:modelValue": ($event) => unref(form).parents = $event
													}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(_component_BTab, { title: "KIP/Beasiswa" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(_component_BCardText, { class: "py-3" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) _push(`<p${_scopeId}> Repudiandae nisi delectus assumenda quas labore ipsa saepe voluptatibus ipsam tempore, vel neque. Voluptatibus libero rem doloremque quaerat repellendus, excepturi harum. </p>`);
														else return [createVNode("p", null, " Repudiandae nisi delectus assumenda quas labore ipsa saepe voluptatibus ipsam tempore, vel neque. Voluptatibus libero rem doloremque quaerat repellendus, excepturi harum. ")];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(_component_BCardText, { class: "py-3" }, {
													default: withCtx(() => [createVNode("p", null, " Repudiandae nisi delectus assumenda quas labore ipsa saepe voluptatibus ipsam tempore, vel neque. Voluptatibus libero rem doloremque quaerat repellendus, excepturi harum. ")]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
										_push(ssrRenderComponent(_component_BTab, { title: "Prestasi" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(_component_BCardText, { class: "py-3" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(`<ul class="list-group list-group-flush shadow-none mb-3"${_scopeId}><!--[-->`);
															ssrRenderList(unref(form).achievements, (achievement, index) => {
																_push(`<li class="list-group-item"${_scopeId}><div class="d-flex align-items-center justify-content-between"${_scopeId}><div class="me-auto"${_scopeId}><h5 class="m-0"${_scopeId}>${ssrInterpolate(achievement.name)}</h5>`);
																_push(ssrRenderComponent(_component_BBadge, { variant: "info" }, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(`${ssrInterpolate(achievement.level)}`);
																		else return [createTextVNode(toDisplayString(achievement.level), 1)];
																	}),
																	_: 2
																}, _parent, _scopeId));
																_push(`</div>`);
																_push(ssrRenderComponent(_component_BButton, {
																	size: "sm",
																	variant: "danger",
																	onClick: ($event) => remove(index)
																}, {
																	default: withCtx((_, _push, _parent, _scopeId) => {
																		if (_push) _push(ssrRenderComponent(unref(Trash), { size: 16 }, null, _parent, _scopeId));
																		else return [createVNode(unref(Trash), { size: 16 })];
																	}),
																	_: 2
																}, _parent, _scopeId));
																_push(`</div></li>`);
															});
															_push(`<!--]--></ul><form class="row g-3"${_scopeId}><div class="col-md-5"${_scopeId}><label for="achievement-name" class="form-label small fw-bold"${_scopeId}>Nama Lomba/Prestasi</label><input id="achievement-name" class="form-control form-control-sm rounded-3" placeholder="Contoh: Juara 1 OSN Matematika" type="text"${ssrRenderAttr("value", temp.value.name)}${_scopeId}></div><div class="col-md-4"${_scopeId}><label for="achievement-level" class="form-label small fw-bold"${_scopeId}>Tingkat</label><select id="achievement-level" class="form-select form-select-sm rounded-3"${_scopeId}><option value="Kabupaten"${ssrIncludeBooleanAttr(Array.isArray(temp.value.level) ? ssrLooseContain(temp.value.level, "Kabupaten") : ssrLooseEqual(temp.value.level, "Kabupaten")) ? " selected" : ""}${_scopeId}> Kabupaten </option><option value="Provinsi"${ssrIncludeBooleanAttr(Array.isArray(temp.value.level) ? ssrLooseContain(temp.value.level, "Provinsi") : ssrLooseEqual(temp.value.level, "Provinsi")) ? " selected" : ""}${_scopeId}> Provinsi </option><option value="Nasional"${ssrIncludeBooleanAttr(Array.isArray(temp.value.level) ? ssrLooseContain(temp.value.level, "Nasional") : ssrLooseEqual(temp.value.level, "Nasional")) ? " selected" : ""}${_scopeId}> Nasional </option><option value="Internasional"${ssrIncludeBooleanAttr(Array.isArray(temp.value.level) ? ssrLooseContain(temp.value.level, "Internasional") : ssrLooseEqual(temp.value.level, "Internasional")) ? " selected" : ""}${_scopeId}> Internasional </option></select></div><div class="col-md-3 d-flex align-items-end"${_scopeId}><button type="submit" class="btn btn-sm btn-primary w-100 rounded-pill py-2 fw-bold"${_scopeId}> Tambah </button></div></form>`);
														} else return [createVNode("ul", { class: "list-group list-group-flush shadow-none mb-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).achievements, (achievement, index) => {
															return openBlock(), createBlock("li", {
																class: "list-group-item",
																key: index
															}, [createVNode("div", { class: "d-flex align-items-center justify-content-between" }, [createVNode("div", { class: "me-auto" }, [createVNode("h5", { class: "m-0" }, toDisplayString(achievement.name), 1), createVNode(_component_BBadge, { variant: "info" }, {
																default: withCtx(() => [createTextVNode(toDisplayString(achievement.level), 1)]),
																_: 2
															}, 1024)]), createVNode(_component_BButton, {
																size: "sm",
																variant: "danger",
																onClick: ($event) => remove(index)
															}, {
																default: withCtx(() => [createVNode(unref(Trash), { size: 16 })]),
																_: 1
															}, 8, ["onClick"])])]);
														}), 128))]), createVNode("form", {
															class: "row g-3",
															onSubmit: withModifiers(create, ["prevent"])
														}, [
															createVNode("div", { class: "col-md-5" }, [createVNode("label", {
																for: "achievement-name",
																class: "form-label small fw-bold"
															}, "Nama Lomba/Prestasi"), withDirectives(createVNode("input", {
																id: "achievement-name",
																class: "form-control form-control-sm rounded-3",
																placeholder: "Contoh: Juara 1 OSN Matematika",
																type: "text",
																"onUpdate:modelValue": ($event) => temp.value.name = $event
															}, null, 8, ["onUpdate:modelValue"]), [[vModelText, temp.value.name]])]),
															createVNode("div", { class: "col-md-4" }, [createVNode("label", {
																for: "achievement-level",
																class: "form-label small fw-bold"
															}, "Tingkat"), withDirectives(createVNode("select", {
																id: "achievement-level",
																class: "form-select form-select-sm rounded-3",
																"onUpdate:modelValue": ($event) => temp.value.level = $event
															}, [
																createVNode("option", { value: "Kabupaten" }, " Kabupaten "),
																createVNode("option", { value: "Provinsi" }, " Provinsi "),
																createVNode("option", { value: "Nasional" }, " Nasional "),
																createVNode("option", { value: "Internasional" }, " Internasional ")
															], 8, ["onUpdate:modelValue"]), [[vModelSelect, temp.value.level]])]),
															createVNode("div", { class: "col-md-3 d-flex align-items-end" }, [createVNode("button", {
																type: "submit",
																class: "btn btn-sm btn-primary w-100 rounded-pill py-2 fw-bold"
															}, " Tambah ")])
														], 32)];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(_component_BCardText, { class: "py-3" }, {
													default: withCtx(() => [createVNode("ul", { class: "list-group list-group-flush shadow-none mb-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).achievements, (achievement, index) => {
														return openBlock(), createBlock("li", {
															class: "list-group-item",
															key: index
														}, [createVNode("div", { class: "d-flex align-items-center justify-content-between" }, [createVNode("div", { class: "me-auto" }, [createVNode("h5", { class: "m-0" }, toDisplayString(achievement.name), 1), createVNode(_component_BBadge, { variant: "info" }, {
															default: withCtx(() => [createTextVNode(toDisplayString(achievement.level), 1)]),
															_: 2
														}, 1024)]), createVNode(_component_BButton, {
															size: "sm",
															variant: "danger",
															onClick: ($event) => remove(index)
														}, {
															default: withCtx(() => [createVNode(unref(Trash), { size: 16 })]),
															_: 1
														}, 8, ["onClick"])])]);
													}), 128))]), createVNode("form", {
														class: "row g-3",
														onSubmit: withModifiers(create, ["prevent"])
													}, [
														createVNode("div", { class: "col-md-5" }, [createVNode("label", {
															for: "achievement-name",
															class: "form-label small fw-bold"
														}, "Nama Lomba/Prestasi"), withDirectives(createVNode("input", {
															id: "achievement-name",
															class: "form-control form-control-sm rounded-3",
															placeholder: "Contoh: Juara 1 OSN Matematika",
															type: "text",
															"onUpdate:modelValue": ($event) => temp.value.name = $event
														}, null, 8, ["onUpdate:modelValue"]), [[vModelText, temp.value.name]])]),
														createVNode("div", { class: "col-md-4" }, [createVNode("label", {
															for: "achievement-level",
															class: "form-label small fw-bold"
														}, "Tingkat"), withDirectives(createVNode("select", {
															id: "achievement-level",
															class: "form-select form-select-sm rounded-3",
															"onUpdate:modelValue": ($event) => temp.value.level = $event
														}, [
															createVNode("option", { value: "Kabupaten" }, " Kabupaten "),
															createVNode("option", { value: "Provinsi" }, " Provinsi "),
															createVNode("option", { value: "Nasional" }, " Nasional "),
															createVNode("option", { value: "Internasional" }, " Internasional ")
														], 8, ["onUpdate:modelValue"]), [[vModelSelect, temp.value.level]])]),
														createVNode("div", { class: "col-md-3 d-flex align-items-end" }, [createVNode("button", {
															type: "submit",
															class: "btn btn-sm btn-primary w-100 rounded-pill py-2 fw-bold"
														}, " Tambah ")])
													], 32)]),
													_: 1
												})];
											}),
											_: 1
										}, _parent, _scopeId));
									} else return [
										createVNode(_component_BTab, {
											title: "Identitas Siswa",
											active: ""
										}, {
											default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
												default: withCtx(() => [createVNode(PersonalData_default, {
													modelValue: unref(form),
													"onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
													religions: __props.religions
												}, null, 8, [
													"modelValue",
													"onUpdate:modelValue",
													"religions"
												])]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(_component_BTab, { title: "Identitas Orang Tua" }, {
											default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
												default: withCtx(() => [createVNode(StudentParent_default, {
													modelValue: unref(form).parents,
													"onUpdate:modelValue": ($event) => unref(form).parents = $event
												}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(_component_BTab, { title: "KIP/Beasiswa" }, {
											default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
												default: withCtx(() => [createVNode("p", null, " Repudiandae nisi delectus assumenda quas labore ipsa saepe voluptatibus ipsam tempore, vel neque. Voluptatibus libero rem doloremque quaerat repellendus, excepturi harum. ")]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(_component_BTab, { title: "Prestasi" }, {
											default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
												default: withCtx(() => [createVNode("ul", { class: "list-group list-group-flush shadow-none mb-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).achievements, (achievement, index) => {
													return openBlock(), createBlock("li", {
														class: "list-group-item",
														key: index
													}, [createVNode("div", { class: "d-flex align-items-center justify-content-between" }, [createVNode("div", { class: "me-auto" }, [createVNode("h5", { class: "m-0" }, toDisplayString(achievement.name), 1), createVNode(_component_BBadge, { variant: "info" }, {
														default: withCtx(() => [createTextVNode(toDisplayString(achievement.level), 1)]),
														_: 2
													}, 1024)]), createVNode(_component_BButton, {
														size: "sm",
														variant: "danger",
														onClick: ($event) => remove(index)
													}, {
														default: withCtx(() => [createVNode(unref(Trash), { size: 16 })]),
														_: 1
													}, 8, ["onClick"])])]);
												}), 128))]), createVNode("form", {
													class: "row g-3",
													onSubmit: withModifiers(create, ["prevent"])
												}, [
													createVNode("div", { class: "col-md-5" }, [createVNode("label", {
														for: "achievement-name",
														class: "form-label small fw-bold"
													}, "Nama Lomba/Prestasi"), withDirectives(createVNode("input", {
														id: "achievement-name",
														class: "form-control form-control-sm rounded-3",
														placeholder: "Contoh: Juara 1 OSN Matematika",
														type: "text",
														"onUpdate:modelValue": ($event) => temp.value.name = $event
													}, null, 8, ["onUpdate:modelValue"]), [[vModelText, temp.value.name]])]),
													createVNode("div", { class: "col-md-4" }, [createVNode("label", {
														for: "achievement-level",
														class: "form-label small fw-bold"
													}, "Tingkat"), withDirectives(createVNode("select", {
														id: "achievement-level",
														class: "form-select form-select-sm rounded-3",
														"onUpdate:modelValue": ($event) => temp.value.level = $event
													}, [
														createVNode("option", { value: "Kabupaten" }, " Kabupaten "),
														createVNode("option", { value: "Provinsi" }, " Provinsi "),
														createVNode("option", { value: "Nasional" }, " Nasional "),
														createVNode("option", { value: "Internasional" }, " Internasional ")
													], 8, ["onUpdate:modelValue"]), [[vModelSelect, temp.value.level]])]),
													createVNode("div", { class: "col-md-3 d-flex align-items-end" }, [createVNode("button", {
														type: "submit",
														class: "btn btn-sm btn-primary w-100 rounded-pill py-2 fw-bold"
													}, " Tambah ")])
												], 32)]),
												_: 1
											})]),
											_: 1
										})
									];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`<div class="mt-5 d-flex justify-content-between"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: unref(dashboard).form.guide(__props.candidate.id),
								class: "btn btn-sm btn-outline-secondary px-4 rounded-pill"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(`Kembali`);
									else return [createTextVNode("Kembali")];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`<button type="submit" class="btn btn-sm btn-primary px-5 rounded-pill"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}> Simpan &amp; Lanjutkan </button></div></form>`);
						} else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode(unref(Toaster)), createVNode("div", { class: "card bg-body-tertiary border-0" }, [createVNode("div", { class: "card-body" }, [createVNode("div", { class: "d-flex justify-content-between align-items-center mb-4" }, [createVNode("h4", { class: "fw-bold mb-0" }, "Formulir Pendaftaran"), createVNode("span", { class: "badge bg-primary-subtle text-primary px-3 py-2 rounded-pill" }, [__props.candidate.type === "new" ? (openBlock(), createBlock(Fragment, { key: 0 }, [createTextVNode("Siswa Baru")], 64)) : __props.candidate.type === "transfer" ? (openBlock(), createBlock(Fragment, { key: 1 }, [createTextVNode("Siswa Pindahan")], 64)) : (openBlock(), createBlock(Fragment, { key: 2 }, [createTextVNode("Tidak Diketahui")], 64))])]), mount.value ? (openBlock(), createBlock("form", {
						key: 0,
						onSubmit: withModifiers(onSubmit, ["prevent"])
					}, [createVNode(_component_BTabs, {
						pills: "",
						fill: ""
					}, {
						default: withCtx(() => [
							createVNode(_component_BTab, {
								title: "Identitas Siswa",
								active: ""
							}, {
								default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
									default: withCtx(() => [createVNode(PersonalData_default, {
										modelValue: unref(form),
										"onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null,
										religions: __props.religions
									}, null, 8, [
										"modelValue",
										"onUpdate:modelValue",
										"religions"
									])]),
									_: 1
								})]),
								_: 1
							}),
							createVNode(_component_BTab, { title: "Identitas Orang Tua" }, {
								default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
									default: withCtx(() => [createVNode(StudentParent_default, {
										modelValue: unref(form).parents,
										"onUpdate:modelValue": ($event) => unref(form).parents = $event
									}, null, 8, ["modelValue", "onUpdate:modelValue"])]),
									_: 1
								})]),
								_: 1
							}),
							createVNode(_component_BTab, { title: "KIP/Beasiswa" }, {
								default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
									default: withCtx(() => [createVNode("p", null, " Repudiandae nisi delectus assumenda quas labore ipsa saepe voluptatibus ipsam tempore, vel neque. Voluptatibus libero rem doloremque quaerat repellendus, excepturi harum. ")]),
									_: 1
								})]),
								_: 1
							}),
							createVNode(_component_BTab, { title: "Prestasi" }, {
								default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
									default: withCtx(() => [createVNode("ul", { class: "list-group list-group-flush shadow-none mb-3" }, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).achievements, (achievement, index) => {
										return openBlock(), createBlock("li", {
											class: "list-group-item",
											key: index
										}, [createVNode("div", { class: "d-flex align-items-center justify-content-between" }, [createVNode("div", { class: "me-auto" }, [createVNode("h5", { class: "m-0" }, toDisplayString(achievement.name), 1), createVNode(_component_BBadge, { variant: "info" }, {
											default: withCtx(() => [createTextVNode(toDisplayString(achievement.level), 1)]),
											_: 2
										}, 1024)]), createVNode(_component_BButton, {
											size: "sm",
											variant: "danger",
											onClick: ($event) => remove(index)
										}, {
											default: withCtx(() => [createVNode(unref(Trash), { size: 16 })]),
											_: 1
										}, 8, ["onClick"])])]);
									}), 128))]), createVNode("form", {
										class: "row g-3",
										onSubmit: withModifiers(create, ["prevent"])
									}, [
										createVNode("div", { class: "col-md-5" }, [createVNode("label", {
											for: "achievement-name",
											class: "form-label small fw-bold"
										}, "Nama Lomba/Prestasi"), withDirectives(createVNode("input", {
											id: "achievement-name",
											class: "form-control form-control-sm rounded-3",
											placeholder: "Contoh: Juara 1 OSN Matematika",
											type: "text",
											"onUpdate:modelValue": ($event) => temp.value.name = $event
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, temp.value.name]])]),
										createVNode("div", { class: "col-md-4" }, [createVNode("label", {
											for: "achievement-level",
											class: "form-label small fw-bold"
										}, "Tingkat"), withDirectives(createVNode("select", {
											id: "achievement-level",
											class: "form-select form-select-sm rounded-3",
											"onUpdate:modelValue": ($event) => temp.value.level = $event
										}, [
											createVNode("option", { value: "Kabupaten" }, " Kabupaten "),
											createVNode("option", { value: "Provinsi" }, " Provinsi "),
											createVNode("option", { value: "Nasional" }, " Nasional "),
											createVNode("option", { value: "Internasional" }, " Internasional ")
										], 8, ["onUpdate:modelValue"]), [[vModelSelect, temp.value.level]])]),
										createVNode("div", { class: "col-md-3 d-flex align-items-end" }, [createVNode("button", {
											type: "submit",
											class: "btn btn-sm btn-primary w-100 rounded-pill py-2 fw-bold"
										}, " Tambah ")])
									], 32)]),
									_: 1
								})]),
								_: 1
							})
						]),
						_: 1
					}), createVNode("div", { class: "mt-5 d-flex justify-content-between" }, [createVNode(unref(Link), {
						href: unref(dashboard).form.guide(__props.candidate.id),
						class: "btn btn-sm btn-outline-secondary px-4 rounded-pill"
					}, {
						default: withCtx(() => [createTextVNode("Kembali")]),
						_: 1
					}, 8, ["href"]), createVNode("button", {
						type: "submit",
						class: "btn btn-sm btn-primary px-5 rounded-pill",
						disabled: unref(form).processing
					}, " Simpan & Lanjutkan ", 8, ["disabled"])])], 32)) : createCommentVNode("", true)])])];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Dashboard/Form.vue
var Form_exports = /* @__PURE__ */ __exportAll({ default: () => Form_default });
var _sfc_setup$8 = Form_vue_vue_type_script_setup_true_lang_default.setup;
Form_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Form.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Form_default = Form_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/pages/Dashboard/Guide.vue?vue&type=script&setup=true&lang.ts
var Guide_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	layout: Form_default$1,
	__name: "Guide",
	__ssrInlineRender: true,
	props: {
		meta: {},
		candidate: {},
		guides: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.meta.title)}</title><meta name="description"${ssrRenderAttr("content", __props.meta.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.meta.title), 1), createVNode("meta", {
						name: "description",
						content: __props.meta.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="card bg-body-tertiary border-0"><div class="card-body"><div class="d-flex justify-content-between align-items-center mb-4"><h4 class="fw-bold mb-0">${ssrInterpolate(__props.meta.title)}</h4></div><ol><!--[-->`);
			ssrRenderList(__props.guides, (guide) => {
				_push(`<li>${ssrInterpolate(guide)}</li>`);
			});
			_push(`<!--]--></ol><p> Jika sudah memahami langkah-langkah di atas, silakan lanjut ke tahap berikutnya. Jika ada pertanyaan, kunjungi halaman `);
			_push(ssrRenderComponent(unref(Link), {
				href: unref(faq)(),
				class: "fw-bold"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`FAQ`);
					else return [createTextVNode("FAQ")];
				}),
				_: 1
			}, _parent));
			_push(` atau Hubungi Kami. </p><div class="mt-5 d-flex justify-content-between"><button type="button" class="btn btn-sm btn-outline-secondary px-4 rounded-pill" disabled> Kembali </button><button type="button" class="btn btn-sm btn-primary px-5 rounded-pill"> Lanjutkan </button></div></div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Dashboard/Guide.vue
var Guide_exports = /* @__PURE__ */ __exportAll({ default: () => Guide_default });
var _sfc_setup$7 = Guide_vue_vue_type_script_setup_true_lang_default.setup;
Guide_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Guide.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Guide_default = Guide_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/pages/Dashboard/Home.vue?vue&type=script&setup=true&lang.ts
var Home_vue_vue_type_script_setup_true_lang_default$1 = /* @__PURE__ */ defineComponent({
	__name: "Home",
	__ssrInlineRender: true,
	props: {
		meta: {},
		candidates: {}
	},
	setup(__props) {
		const mount = ref(false);
		const { create } = useModal();
		onMounted(() => {
			mount.value = true;
		});
		const modal = ref(false);
		const form = useForm({ type: null });
		const ok = () => {
			form.post(home.store().url, {
				preserveScroll: true,
				onSuccess: () => {
					form.reset();
				}
			});
		};
		const hide = () => {
			form.type = null;
		};
		const choose = (type) => {
			form.type = type;
		};
		const trash = (uuid) => {
			create({
				size: "md",
				body: "Semua data yang terkait dengan pendaftaran ini akan hilang secara permanen termasuk data Isi Formulir & Berkas Persyaratan. Tindakan ini tidak dapat dikembalikan.",
				bodyClass: "small text-muted",
				title: "Hapus Pendaftaran?",
				okClass: "btn-danger",
				okTitle: "Hapus",
				centered: true,
				cancelTitle: "Batal",
				onOk: () => {
					useForm().delete(dashboard.form.destroy(uuid).url, {
						preserveScroll: true,
						onSuccess: (page) => {
							toast.success(String(page.flash.message), {
								style: {
									background: "var(--bs-success)",
									color: "#fff",
									border: "none",
									fontFamily: "Poppins"
								},
								position: "top-right"
							});
						},
						onError: () => {
							toast.error("Gagal menghapus pendaftaran", {
								style: {
									background: "var(--bs-danger)",
									color: "#fff",
									border: "none",
									fontFamily: "Poppins"
								},
								position: "top-right"
							});
						},
						onFinish: () => {
							form.reset();
						}
					});
				}
			}).show();
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BModal = BModal;
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.meta.title)}</title><meta name="description"${ssrRenderAttr("content", __props.meta.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.meta.title), 1), createVNode("meta", {
						name: "description",
						content: __props.meta.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="container py-5"><div class="row justify-content-between align-items-center mb-5"><div class="col-lg-6"><h2 class="fw-bold mb-1">Dashboard Orang Tua</h2><p class="text-muted m-0">Kelola pendaftaran anak-anak Anda di sini.</p></div><div class="col-lg-6"><button class="btn btn-primary rounded-pill d-flex align-items-center ms-0 ms-lg-auto"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
			_push(ssrRenderComponent(unref(UserPlus), {
				size: 24,
				class: "me-2"
			}, null, _parent));
			_push(` Tambah Pendaftaran </button></div></div>`);
			_push(ssrRenderComponent(unref(InfiniteScroll), { data: "candidates" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) if (__props.candidates.data.length) {
						_push(`<div class="row g-4"${_scopeId}><!--[-->`);
						ssrRenderList(__props.candidates.data, (candidate) => {
							_push(`<div class="col-md-6 col-lg-4" style="${ssrRenderStyle({ "--animate-duration": "0.3s" })}"${_scopeId}><div class="card card-hover bg-body-tertiary border-0 shadow-sm rounded-4 overflow-hidden h-100"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex justify-content-between align-items-start mb-3"${_scopeId}><div class="bg-primary-subtle rounded-4 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({
								"width": "60px",
								"height": "60px"
							})}"${_scopeId}>`);
							if (candidate.type === "transfer") _push(ssrRenderComponent(unref(ArrowLeftRight), { class: "text-primary" }, null, _parent, _scopeId));
							else _push(`<!---->`);
							if (candidate.type === "new") _push(ssrRenderComponent(unref(UserPlus), { class: "text-primary" }, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</div><span class="badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary"${_scopeId}>DRAFT</span></div><h5 class="${ssrRenderClass([{ "fst-italic opacity-50": !candidate.name }, "fw-bold mb-1"])}"${_scopeId}>${ssrInterpolate(candidate.name || "Nama Belum Diisi")}</h5><p class="small text-secondary mb-3"${_scopeId}> Jenis Pendaftaran: `);
							if (!candidate.type) _push(`<!--[-->Belum Dipilih<!--]-->`);
							else _push(`<span class="fw-bold"${_scopeId}>${ssrInterpolate(candidate.type === "new" ? "Siswa Baru" : "Siswa Pindahan")}</span>`);
							_push(`</p><div class="mb-4"${_scopeId}><div class="d-flex justify-content-between mb-1"${_scopeId}><span class="small text-secondary"${_scopeId}>Progress</span><span class="small fw-bold"${_scopeId}>${ssrInterpolate(candidate.progress)}%</span></div><div class="progress" style="${ssrRenderStyle({ "height": "6px" })}"${_scopeId}><div class="progress-bar" style="${ssrRenderStyle({
								"background-color": `hsl(${candidate.progress * 1.2}, 60%, 50%)`,
								width: candidate.progress + "%"
							})}"${_scopeId}></div></div></div><div class="d-flex justify-content-between align-items-center mt-auto"${_scopeId}><div class="d-flex gap-2"${_scopeId}>`);
							_push(ssrRenderComponent(unref(Link), {
								href: unref(dashboard).form.guide(candidate.id),
								class: "btn btn-sm btn-primary px-3 rounded-pill"
							}, {
								default: withCtx((_, _push, _parent, _scopeId) => {
									if (_push) _push(` Lengkapi `);
									else return [createTextVNode(" Lengkapi ")];
								}),
								_: 2
							}, _parent, _scopeId));
							_push(`<button class="btn btn-sm btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center" title="Hapus Pendaftaran"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}>`);
							_push(ssrRenderComponent(unref(Trash), { size: 18 }, null, _parent, _scopeId));
							_push(`</button></div><small class="text-secondary"${_scopeId}>Update: 02 April 2026</small></div></div></div></div>`);
						});
						_push(`<!--]--></div>`);
					} else _push(`<div class="alert alert-warning"${_scopeId}>Belum ada pendaftaran.</div>`);
					else return [__props.candidates.data.length ? (openBlock(), createBlock("div", {
						key: 0,
						class: "row g-4"
					}, [createVNode(TransitionGroup, { name: "fadeLeft" }, {
						default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(__props.candidates.data, (candidate) => {
							return openBlock(), createBlock("div", {
								class: "col-md-6 col-lg-4",
								key: candidate.id,
								style: { "--animate-duration": "0.3s" }
							}, [createVNode("div", { class: "card card-hover bg-body-tertiary border-0 shadow-sm rounded-4 overflow-hidden h-100" }, [createVNode("div", { class: "card-body" }, [
								createVNode("div", { class: "d-flex justify-content-between align-items-start mb-3" }, [createVNode("div", {
									class: "bg-primary-subtle rounded-4 d-flex align-items-center justify-content-center",
									style: {
										"width": "60px",
										"height": "60px"
									}
								}, [candidate.type === "transfer" ? (openBlock(), createBlock(unref(ArrowLeftRight), {
									key: 0,
									class: "text-primary"
								})) : createCommentVNode("", true), candidate.type === "new" ? (openBlock(), createBlock(unref(UserPlus), {
									key: 1,
									class: "text-primary"
								})) : createCommentVNode("", true)]), createVNode("span", { class: "badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary" }, "DRAFT")]),
								createVNode("h5", { class: ["fw-bold mb-1", { "fst-italic opacity-50": !candidate.name }] }, toDisplayString(candidate.name || "Nama Belum Diisi"), 3),
								createVNode("p", { class: "small text-secondary mb-3" }, [createTextVNode(" Jenis Pendaftaran: "), !candidate.type ? (openBlock(), createBlock(Fragment, { key: 0 }, [createTextVNode("Belum Dipilih")], 64)) : (openBlock(), createBlock("span", {
									key: 1,
									class: "fw-bold"
								}, toDisplayString(candidate.type === "new" ? "Siswa Baru" : "Siswa Pindahan"), 1))]),
								createVNode("div", { class: "mb-4" }, [createVNode("div", { class: "d-flex justify-content-between mb-1" }, [createVNode("span", { class: "small text-secondary" }, "Progress"), createVNode("span", { class: "small fw-bold" }, toDisplayString(candidate.progress) + "%", 1)]), createVNode("div", {
									class: "progress",
									style: { "height": "6px" }
								}, [createVNode("div", {
									class: "progress-bar",
									style: {
										"background-color": `hsl(${candidate.progress * 1.2}, 60%, 50%)`,
										width: candidate.progress + "%"
									}
								}, null, 4)])]),
								createVNode("div", { class: "d-flex justify-content-between align-items-center mt-auto" }, [createVNode("div", { class: "d-flex gap-2" }, [createVNode(unref(Link), {
									href: unref(dashboard).form.guide(candidate.id),
									class: "btn btn-sm btn-primary px-3 rounded-pill"
								}, {
									default: withCtx(() => [createTextVNode(" Lengkapi ")]),
									_: 1
								}, 8, ["href"]), createVNode("button", {
									class: "btn btn-sm btn-outline-danger rounded-circle p-2 d-flex align-items-center justify-content-center",
									title: "Hapus Pendaftaran",
									disabled: unref(form).processing,
									onClick: ($event) => trash(candidate.id)
								}, [createVNode(unref(Trash), { size: 18 })], 8, ["disabled", "onClick"])]), createVNode("small", { class: "text-secondary" }, "Update: 02 April 2026")])
							])])]);
						}), 128))]),
						_: 1
					})])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "alert alert-warning"
					}, "Belum ada pendaftaran."))];
				}),
				_: 1
			}, _parent));
			_push(`</div>`);
			if (mount.value) ssrRenderTeleport(_push, (_push) => {
				_push(ssrRenderComponent(unref(Toaster), null, null, _parent));
				_push(ssrRenderComponent(_component_BModal, {
					modelValue: modal.value,
					"onUpdate:modelValue": ($event) => modal.value = $event,
					title: "Pilih Tipe Pendaftaran",
					onOk: ok,
					onHide: hide,
					size: "lg",
					"ok-disabled": unref(form).type === null
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="row g-4 justify-content-center"${_scopeId}><div class="col-md-5"${_scopeId}><div class="${ssrRenderClass([{ "bg-primary-subtle": unref(form).type === "new" }, "card h-100 border-2 cursor-pointer rounded-4 p-4 text-center border-primary"])}"${_scopeId}>`);
							_push(ssrRenderComponent(unref(UserPlus), {
								size: 48,
								class: "text-primary mx-auto mb-2"
							}, null, _parent, _scopeId));
							_push(`<h5 class="fw-bold"${_scopeId}>Siswa Baru</h5><p class="small text-muted mb-0"${_scopeId}>Lulusan SMP/MTS yang akan masuk ke kelas X.</p></div></div><div class="col-md-5"${_scopeId}><div class="${ssrRenderClass([{ "bg-primary-subtle": unref(form).type === "transfer" }, "card h-100 border-2 cursor-pointer rounded-4 p-4 text-center border-primary"])}"${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowLeftRight), {
								size: 48,
								class: "text-primary mx-auto mb-2"
							}, null, _parent, _scopeId));
							_push(`<h5 class="fw-bold"${_scopeId}>Siswa Pindahan</h5><p class="small text-muted mb-0"${_scopeId}>Siswa dari SMA lain yang ingin pindah ke sekolah kami.</p></div></div></div>`);
						} else return [createVNode("div", { class: "row g-4 justify-content-center" }, [createVNode("div", { class: "col-md-5" }, [createVNode("div", {
							class: ["card h-100 border-2 cursor-pointer rounded-4 p-4 text-center border-primary", { "bg-primary-subtle": unref(form).type === "new" }],
							onClick: ($event) => choose("new")
						}, [
							createVNode(unref(UserPlus), {
								size: 48,
								class: "text-primary mx-auto mb-2"
							}),
							createVNode("h5", { class: "fw-bold" }, "Siswa Baru"),
							createVNode("p", { class: "small text-muted mb-0" }, "Lulusan SMP/MTS yang akan masuk ke kelas X.")
						], 10, ["onClick"])]), createVNode("div", { class: "col-md-5" }, [createVNode("div", {
							class: ["card h-100 border-2 cursor-pointer rounded-4 p-4 text-center border-primary", { "bg-primary-subtle": unref(form).type === "transfer" }],
							onClick: ($event) => choose("transfer")
						}, [
							createVNode(unref(ArrowLeftRight), {
								size: 48,
								class: "text-primary mx-auto mb-2"
							}),
							createVNode("h5", { class: "fw-bold" }, "Siswa Pindahan"),
							createVNode("p", { class: "small text-muted mb-0" }, "Siswa dari SMA lain yang ingin pindah ke sekolah kami.")
						], 10, ["onClick"])])])];
					}),
					_: 1
				}, _parent));
			}, "body", false, _parent);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Dashboard/Home.vue
var Home_exports$1 = /* @__PURE__ */ __exportAll({ default: () => Home_default$1 });
var _sfc_setup$6 = Home_vue_vue_type_script_setup_true_lang_default$1.setup;
Home_vue_vue_type_script_setup_true_lang_default$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Home.vue");
	return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Home_default$1 = Home_vue_vue_type_script_setup_true_lang_default$1;
//#endregion
//#region resources/js/pages/Dashboard/Review.vue?vue&type=script&setup=true&lang.ts
var Review_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	layout: Form_default$1,
	__name: "Review",
	__ssrInlineRender: true,
	props: { meta: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BProgress = BProgress;
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>Send</title><meta name="description" content="Send"${_scopeId}>`);
					else return [createVNode("title", null, "Send"), createVNode("meta", {
						name: "description",
						content: "Send"
					})];
				}),
				_: 1
			}, _parent));
			_push(`<div class="card bg-body-tertiary border-0"><div class="p-4" style="${ssrRenderStyle({
				"opacity": "1",
				"transform": "none"
			})}"><div class="d-flex justify-content-between align-items-center mb-4"><h4 class="fw-bold mb-0">Status Review Pendaftaran</h4><span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 fw-bold small">ID: 2026-SMAU-001</span></div><div class="row g-4"><div class="col-lg-8"><div class="card shadow-sm rounded-4 border-0"><div class="card-header bg-primary-subtle"><div class="d-flex align-items-center"><div class="bg-white bg-opacity-25 p-3 rounded-4 me-4">`);
			_push(ssrRenderComponent(unref(Clock), {
				size: 32,
				class: "text-primary"
			}, null, _parent));
			_push(`</div><div><h5 class="fw-bold mb-0 text-primary-emphasis"> Berkas Sedang Ditinjau </h5><span class="small opacity-75 fw-light">Update terakhir: 02 April 2026</span></div></div></div><div class="card-body"><p class="small mb-4"> Tim administrasi kami sedang melakukan verifikasi terhadap data dan dokumen yang Anda unggah. Proses ini biasanya memakan waktu 1-3 hari kerja. </p></div></div></div><div class="col-lg-4"><div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4"><h6 class="fw-bold mb-3 d-flex align-items-center">`);
			_push(ssrRenderComponent(unref(CircleQuestionMark), {
				size: 18,
				class: "text-primary me-2"
			}, null, _parent));
			_push(` Butuh Bantuan? </h6><p class="small text-muted mb-4"> Jika Anda memiliki pertanyaan mengenai status pendaftaran, silahkan hubungi panitia PPDB kami. </p><div class="d-grid gap-2"><button class="btn btn-white border rounded-pill small fw-bold shadow-sm d-flex align-items-center justify-content-center">`);
			_push(ssrRenderComponent(unref(Phone), {
				size: 18,
				class: "text-success me-2"
			}, null, _parent));
			_push(` WhatsApp CS </button></div></div></div><div class="card border-0 shadow-sm rounded-5 p-4"><h6 class="fw-bold mb-3">Ringkasan Data</h6><div class="mb-3"><small class="text-secondary d-block mb-1">Nama Lengkap</small><span class="fw-bold small">Budi Santoso</span></div><div class="mb-3"><small class="text-secondary d-block mb-1">Tipe Pendaftaran</small><span class="fw-bold small">Siswa Baru</span></div><div class="mb-0"><small class="text-secondary d-block mb-1">Kelengkapan Berkas</small>`);
			_push(ssrRenderComponent(_component_BProgress, {
				value: 90,
				"show-progress": ""
			}, null, _parent));
			_push(`</div></div></div></div></div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Dashboard/Review.vue
var Review_exports = /* @__PURE__ */ __exportAll({ default: () => Review_default });
var _sfc_setup$5 = Review_vue_vue_type_script_setup_true_lang_default.setup;
Review_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Review.vue");
	return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var Review_default = Review_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/pages/Dashboard/Send.vue?vue&type=script&setup=true&lang.ts
var Send_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	layout: Form_default$1,
	__name: "Send",
	__ssrInlineRender: true,
	props: {
		candidate: {},
		meta: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.meta.title)}</title><meta name="description"${ssrRenderAttr("content", __props.meta.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.meta.title), 1), createVNode("meta", {
						name: "description",
						content: __props.meta.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="card border-0 shadow-sm rounded-4"><div class="card-body"><div class="text-center py-5"><div class="bg-primary-subtle d-inline-block p-4 rounded-circle mb-4">`);
			_push(ssrRenderComponent(unref(FileText), {
				size: 64,
				class: "text-primary"
			}, null, _parent));
			_push(`</div><h4 class="fw-bold mb-3">Konfirmasi &amp; Kirim Berkas</h4><p class="text-secondary mb-4 mx-auto" style="${ssrRenderStyle({ "max-width": "500px" })}"> Pastikan semua data yang Anda masukkan sudah benar. Setelah dikirim, data akan dikunci untuk proses peninjauan oleh panitia PPDB. </p><div class="card border-0 rounded-4 mb-4 text-start bg-body-tertiary shadow-sm"><div class="card-body"><h6 class="fw-bold mb-3">Ringkasan Pendaftaran:</h6><div class="row g-2 small"><div class="col-6 text-secondary"> Nama Calon Siswa: </div><div class="col-6 fw-bold">Budi Santoso</div><div class="col-6 text-secondary"> Tipe Pendaftaran: </div><div class="col-6 fw-bold">Siswa Baru</div><div class="col-6 text-secondary"> Status Kelengkapan: </div><div class="col-6 fw-bold text-success"> Siap Dikirim (70%) </div></div></div></div><div class="form-check d-inline-block text-start mb-4"><input class="form-check-input" id="confirmData" type="checkbox"><label class="form-check-label small" for="confirmData"> Saya menyatakan bahwa data yang saya masukkan adalah benar dan dapat dipertanggungjawabkan. </label></div><div class="d-flex justify-content-center gap-3"><button class="btn btn-outline-secondary px-4 rounded-pill"> Kembali </button><button class="btn btn-primary px-5 rounded-pill"> Kirim Sekarang </button></div></div></div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Dashboard/Send.vue
var Send_exports = /* @__PURE__ */ __exportAll({ default: () => Send_default });
var _sfc_setup$4 = Send_vue_vue_type_script_setup_true_lang_default.setup;
Send_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Send.vue");
	return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var Send_default = Send_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/pages/Faq.vue?vue&type=script&setup=true&lang.ts
var Faq_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Faq",
	__ssrInlineRender: true,
	props: { SEOData: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.SEOData.title)}</title><meta name="description"${ssrRenderAttr("content", __props.SEOData.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.SEOData.title), 1), createVNode("meta", {
						name: "description",
						content: __props.SEOData.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(`<div class="min-vh-100 py-5"><div class="container py-5"><div class="text-center mb-5"><span class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3 fw-bold">Pusat Bantuan</span><h1 class="display-5 fw-bold mb-3"> Pertanyaan yang Sering Diajukan </h1><p class="text-secondary lead mx-auto" style="${ssrRenderStyle({ "max-width": "600px" })}"> Temukan jawaban cepat untuk pertanyaan umum mengenai proses pendaftaran di ${ssrInterpolate(_ctx.$page.props.name)}. </p></div><div class="row justify-content-center mb-5"><div class="col-lg-6"><div class="position-relative">`);
			_push(ssrRenderComponent(unref(Search), { class: "position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" }, null, _parent));
			_push(`<input class="form-control form-control-lg ps-5 rounded-pill shadow-sm border-0" placeholder="Cari pertanyaan..." type="text"></div></div></div><div class="d-flex flex-wrap justify-content-center gap-2 mb-5"><button class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-primary shadow"> Semua</button><button class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-white text-secondary border-0 shadow-sm"> Umum</button><button class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-white text-secondary border-0 shadow-sm"> Pendaftaran</button><button class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-white text-secondary border-0 shadow-sm"> Pembayaran</button><button class="btn px-4 py-2 rounded-pill fw-bold transition-all btn-white text-secondary border-0 shadow-sm"> Teknis </button></div><div class="row justify-content-center"><div class="col-lg-8"><div class="accordion border-0" id="faq"><div class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"><h2 class="accordion-header"><button class="accordion-button fw-bold py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false"> Berapa lama proses review berkas? </button></h2><div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faq"><div class="accordion-body text-secondary small"> Proses verifikasi berkas biasanya memakan waktu 1-3 hari kerja setelah Anda menekan tombol &quot;Kirim Berkas&quot; di dashboard. </div></div></div><div class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"><h2 class="accordion-header"><button class="accordion-button fw-bold py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"> Apa yang harus dilakukan jika status &quot;Perlu Perbaikan&quot;? </button></h2><div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faq"><div class="accordion-body text-secondary small"> Silahkan masuk ke dashboard Anda, lihat catatan dari panitia pada bagian berkas, unggah kembali dokumen yang diminta, lalu klik &quot;Kirim Ulang&quot;. </div></div></div></div></div></div><div class="mt-5 text-center"><div class="card shadow-sm rounded-4 border-0 bg-body-tertiary"><div class="card-body py-5"><h4 class="fw-bold mb-3">Masih punya pertanyaan?</h4><p class="text-secondary mb-4"> Tim dukungan kami siap membantu Anda setiap hari kerja pukul 08:00 - 16:00 WIB. </p><div class="d-flex flex-wrap justify-content-center gap-3"><a href="https://wa.me/628123456789" class="btn btn-success px-4 py-2 rounded-pill d-flex align-items-center">`);
			_push(ssrRenderComponent(unref(Phone), {
				size: 20,
				class: "me-2"
			}, null, _parent));
			_push(` Hubungi via WhatsApp </a><a href="mailto:info@smaunggul.sch.id" class="btn btn-outline-primary px-4 py-2 rounded-pill d-flex align-items-center">`);
			_push(ssrRenderComponent(unref(Mail), {
				size: 20,
				class: "me-2"
			}, null, _parent));
			_push(` Kirim Email </a></div></div></div></div></div></div><!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/pages/Faq.vue
var Faq_exports = /* @__PURE__ */ __exportAll({ default: () => Faq_default });
var _sfc_setup$3 = Faq_vue_vue_type_script_setup_true_lang_default.setup;
Faq_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Faq.vue");
	return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var Faq_default = Faq_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/Hero.vue?vue&type=script&setup=true&lang.ts
var Hero_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Hero",
	__ssrInlineRender: true,
	setup(__props) {
		const page = usePage();
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<section${ssrRenderAttrs(mergeProps({ class: "py-5 bg-body-tertiary overflow-hidden" }, _attrs))}><div class="container py-lg-5"><div class="row align-items-center g-5"><div class="col-lg-6"><div style="${ssrRenderStyle({
				"opacity": "1",
				"transform": "none"
			})}"><span class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill mb-3 fw-bold"> Pendaftaran TA 2026/2027 Telah Dibuka </span><h1 class="display-4 fw-bold mb-4"> Wujudkan Masa Depan Gemilang di <span class="text-primary">${ssrInterpolate(_ctx.$page.props.name)}</span></h1><p class="lead text-secondary mb-5"> Sekolah terbaik dengan fasilitas modern dan kurikulum internasional untuk mencetak pemimpin masa depan. </p><div class="d-flex flex-wrap gap-3">`);
			if (unref(page).props.auth.user) _push(ssrRenderComponent(unref(Link), {
				class: "btn btn-primary btn-lg px-5 rounded-pill shadow-lg hover-lift",
				href: unref(home).index()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Dashboard `);
					else return [createTextVNode(" Dashboard ")];
				}),
				_: 1
			}, _parent));
			else _push(ssrRenderComponent(unref(Link), {
				class: "btn btn-primary btn-lg px-5 rounded-pill shadow-lg hover-lift",
				href: unref(login)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Daftar Sekarang `);
					else return [createTextVNode(" Daftar Sekarang ")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(unref(Link), {
				class: "btn btn-outline-primary btn-lg px-5 rounded-pill hover-lift",
				href: unref(check)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Cek Status `);
					else return [createTextVNode(" Cek Status ")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="mt-5 d-flex align-items-center gap-4"><div class="d-flex -space-x-2"><img class="rounded-circle border border-2 border-white shadow-sm" width="40" alt="User" src="https://i.pravatar.cc/150?u=1" style="${ssrRenderStyle({ "margin-left": "0px" })}"><img class="rounded-circle border border-2 border-white shadow-sm" width="40" alt="User" src="https://i.pravatar.cc/150?u=2" style="${ssrRenderStyle({ "margin-left": "-10px" })}"><img class="rounded-circle border border-2 border-white shadow-sm" width="40" alt="User" src="https://i.pravatar.cc/150?u=3" style="${ssrRenderStyle({ "margin-left": "-10px" })}"><img class="rounded-circle border border-2 border-white shadow-sm" width="40" alt="User" src="https://i.pravatar.cc/150?u=4" style="${ssrRenderStyle({ "margin-left": "-10px" })}"></div><p class="small mb-0 text-secondary fw-bold">Bergabung dengan 1,200+ calon siswa lainnya</p></div></div></div><div class="col-lg-6"><div class="position-relative" style="${ssrRenderStyle({
				"opacity": "1",
				"transform": "none"
			})}"><img class="img-fluid rounded-5 shadow-2xl" alt="School" referrerpolicy="no-referrer" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"><div class="position-absolute top-100 start-0 translate-middle-y bg-light-subtle p-4 rounded-4 shadow-lg d-none d-md-block" style="${ssrRenderStyle({ "margin-left": "-30px" })}"><div class="d-flex align-items-center gap-3"><div class="bg-success-subtle p-2 rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big text-success" aria-hidden="true"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div><div><h6 class="fw-bold mb-0">Akreditasi A</h6><small class="text-secondary">Sertifikasi Nasional</small></div></div></div></div></div></div></div></section>`);
		};
	}
});
//#endregion
//#region resources/js/components/Hero.vue
var _sfc_setup$2 = Hero_vue_vue_type_script_setup_true_lang_default.setup;
Hero_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Hero.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var Hero_default = Hero_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/pages/Home.vue?vue&type=script&setup=true&lang.ts
var Home_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Home",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}>`);
			_push(ssrRenderComponent(Hero_default, null, null, _parent));
			_push(`<div class="bg-body-tertiary"><section class="py-5"><div class="container"><div class="row justify-content-center text-center mb-5"><div class="col-lg-8"><h2 class="fw-bold mb-2"> Informasi Kuota Pendaftaran </h2><p class="text-muted"> Pantau ketersediaan slot pendaftaran secara real-time untuk setiap jenjang kelas. </p></div></div><div class="row g-4"><div class="col-lg-4"><div class="card bg-primary-subtle card-hover border-0 shadow-lg rounded-5 h-100 overflow-hidden position-relative"><div class="card-body"><div class="position-relative z-1"><div class="d-flex justify-content-between align-items-start mb-4"><div class="bg-primary rounded-4 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({
				"width": "60px",
				"height": "60px"
			})}">`);
			_push(ssrRenderComponent(unref(User), {
				size: 32,
				class: "text-white"
			}, null, _parent));
			_push(`</div><span class="badge bg-white text-primary rounded-pill px-3 py-2 fw-bold">Kelas 10</span></div><h4 class="fw-bold mb-2">Siswa Baru</h4><p class="small text-muted mb-4"> Pendaftaran reguler untuk lulusan SMP/Sederajat. </p><div class="mb-4"><div class="d-flex justify-content-between mb-2"><span class="small fw-bold">Pendaftar: 284</span><span class="small fw-bold">Kuota: 350</span></div><div class="progress" role="progressbar"><div class="progress-bar" style="${ssrRenderStyle({ "width": "25%" })}"></div></div><div class="mt-2 text-end text-primary"><small class="fw-bold">Sisa 66 Kursi</small></div></div></div></div></div></div><div class="col-lg-4"><div class="card bg-body-tertiary card-hover border-0 shadow-lg rounded-5 h-100 overflow-hidden position-relative"><div class="card-body"><div class="position-relative z-1"><div class="d-flex justify-content-between align-items-start mb-4"><div class="bg-info rounded-4 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({
				"width": "60px",
				"height": "60px"
			})}">`);
			_push(ssrRenderComponent(unref(ArrowLeftRight), {
				size: 32,
				class: "text-white"
			}, null, _parent));
			_push(`</div><span class="badge bg-info-subtle text-info rounded-pill px-3 py-2 fw-bold">Kelas 11</span></div><h4 class="fw-bold mb-2"> Siswa Pindahan </h4><p class="small text-muted mb-4"> Slot tersedia karena mutasi keluar siswa lama. </p><div class="mb-4"><div class="d-flex justify-content-between mb-2"><span class="small fw-bold">Pendaftar: 142</span><span class="small fw-bold">Kuota: 150</span></div><div class="progress" role="progressbar"><div class="progress-bar bg-info" style="${ssrRenderStyle({ "width": "94.67%" })}"></div></div><div class="mt-2 text-end text-info"><small class="fw-bold">Sisa 6 Kursi</small></div></div></div></div></div></div><div class="col-lg-4"><div class="card bg-body-tertiary card-hover border-0 shadow-lg rounded-5 h-100 overflow-hidden position-relative"><div class="card-body"><div class="position-relative z-1"><div class="d-flex justify-content-between align-items-start mb-4"><div class="bg-warning rounded-4 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({
				"width": "60px",
				"height": "60px"
			})}">`);
			_push(ssrRenderComponent(unref(ArrowLeftRight), {
				size: 32,
				class: "text-white"
			}, null, _parent));
			_push(`</div><span class="badge bg-warning-subtle text-warning rounded-pill px-3 py-2 fw-bold">Kelas 12</span></div><h4 class="fw-bold mb-2"> Siswa Pindahan </h4><p class="small text-muted mb-4"> Slot terbatas untuk jenjang akhir tahun ajaran. </p><div class="mb-4"><div class="d-flex justify-content-between mb-2"><span class="small fw-bold">Pendaftar: 142</span><span class="small fw-bold">Kuota: 150</span></div><div class="progress" role="progressbar"><div class="progress-bar bg-warning" style="${ssrRenderStyle({ "width": "25%" })}"></div></div><div class="mt-2 text-end text-warning"><small class="fw-bold">Sisa 8 Kursi</small></div></div></div></div></div></div></div></div></section></div><section class="py-5"><div class="container py-5"><div class="col-lg-3"></div><div class="text-center mb-5"><h2 class="fw-bold">Mengapa Memilih Kami?</h2><p class="text-secondary"> Keunggulan yang kami tawarkan untuk perkembangan putra-putri Anda. </p></div><div class="row g-4"><div class="col-md-6 col-lg-3"><div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"><div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">`);
			_push(ssrRenderComponent(unref(Search), {
				size: 64,
				class: "text-primary"
			}, null, _parent));
			_push(`</div><h5 class="fw-bold">Kurikulum Internasional</h5><p class="text-secondary small mb-0"> Kurikulum yang diakui secara global untuk persiapan universitas terbaik. </p></div></div><div class="col-md-6 col-lg-3"><div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"><div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">`);
			_push(ssrRenderComponent(unref(GalleryHorizontalEnd), {
				size: 64,
				class: "text-success"
			}, null, _parent));
			_push(`</div><h5 class="fw-bold">Fasilitas Modern</h5><p class="text-secondary small mb-0"> Laboratorium lengkap, perpustakaan digital, dan sarana olahraga standar atlet. </p></div></div><div class="col-md-6 col-lg-3"><div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"><div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">`);
			_push(ssrRenderComponent(unref(School), {
				size: 64,
				class: "text-info"
			}, null, _parent));
			_push(`</div><h5 class="fw-bold">Pengajar Berpengalaman</h5><p class="text-secondary small mb-0"> Guru-guru lulusan universitas ternama dengan metode mengajar inovatif. </p></div></div><div class="col-md-6 col-lg-3"><div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"><div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">`);
			_push(ssrRenderComponent(unref(Users), {
				size: 64,
				class: "text-warning"
			}, null, _parent));
			_push(`</div><h5 class="fw-bold">Ekstrakurikuler Beragam</h5><p class="text-secondary small mb-0"> Lebih dari 30 pilihan klub untuk mengasah minat dan bakat siswa. </p></div></div></div></div></section></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Home.vue
var Home_exports = /* @__PURE__ */ __exportAll({ default: () => Home_default });
var _sfc_setup$1 = Home_vue_vue_type_script_setup_true_lang_default.setup;
Home_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Home.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var Home_default = Home_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/layouts/App.vue?vue&type=script&setup=true&lang.ts
var App_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "App",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(unref(BApp$1), _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="d-flex flex-column min-vh-100"${_scopeId}><header${_scopeId}>`);
						_push(ssrRenderComponent(Navbar_default, null, null, _parent, _scopeId));
						_push(`</header><main class="flex-grow-1"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`</main>`);
						_push(ssrRenderComponent(Footer_default, null, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "d-flex flex-column min-vh-100" }, [
						createVNode("header", null, [createVNode(Navbar_default)]),
						createVNode("main", { class: "flex-grow-1" }, [renderSlot(_ctx.$slots, "default")]),
						createVNode(Footer_default)
					])];
				}),
				_: 3
			}, _parent));
		};
	}
});
//#endregion
//#region resources/js/layouts/App.vue
var _sfc_setup = App_vue_vue_type_script_setup_true_lang_default.setup;
App_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/App.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var App_default = App_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/ssr.ts
var appName = "SMA PGRI 1 Bandung";
var renderPage = (page) => createInertiaApp({
	title: (title) => title ? `${title} - ${appName}` : appName,
	page,
	render: renderToString,
	resolve: (name) => {
		const page = (/* @__PURE__ */ Object.assign({
			"./pages/Auth/Login.vue": Login_exports,
			"./pages/Auth/Register.vue": Register_exports,
			"./pages/Check.vue": Check_exports,
			"./pages/Dashboard/Document.vue": Document_exports,
			"./pages/Dashboard/Form.vue": Form_exports,
			"./pages/Dashboard/Guide.vue": Guide_exports,
			"./pages/Dashboard/Home.vue": Home_exports$1,
			"./pages/Dashboard/Review.vue": Review_exports,
			"./pages/Dashboard/Send.vue": Send_exports,
			"./pages/Faq.vue": Faq_exports,
			"./pages/Home.vue": Home_exports
		}))[`./pages/${name}.vue`];
		if (!page) throw new Error(`Page ./pages/${name}.vue not found.`);
		page.default.layout = page.default.layout || App_default;
		return page;
	},
	setup({ App, props, plugin }) {
		return createSSRApp({ render: () => h(App, props) }).use(plugin);
	}
});
createServer(renderPage);
//#endregion
export { renderPage as default };

//# sourceMappingURL=ssr.js.map