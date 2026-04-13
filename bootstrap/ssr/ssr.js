import { Fragment, TransitionGroup, computed, createBlock, createCommentVNode, createSSRApp, createTextVNode, createVNode, defineComponent, h, isRef, mergeModels, mergeProps, onMounted, openBlock, ref, renderList, renderSlot, resolveDynamicComponent, toDisplayString, unref, useModel, useSSRContext, useTemplateRef, vModelSelect, vModelText, withCtx, withDirectives, withModifiers } from "vue";
import { renderToString, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrInterpolate, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderDynamicModel, ssrRenderList, ssrRenderSlot, ssrRenderStyle, ssrRenderTeleport, ssrRenderVNode } from "vue/server-renderer";
import { Head, InfiniteScroll, Link, createInertiaApp, useForm, usePage } from "@inertiajs/vue3";
import { ArrowLeft, ArrowLeftRight, Calendar, CalendarDays, Check, CircleAlert, CircleCheckBig, CircleCheckBigIcon, CircleQuestionMark, Clock, ClockFading, Construction, CreditCard, Eye, EyeClosed, FileSearchCorner, FileText, FileUp, Files, FormInput, GalleryHorizontalEnd, HandMetal, Image, Lock, Mail, Phone, ScanText, School, Search, Send, SquareStack, Trash, Upload, User, UserPlus, Users } from "@lucide/vue";
import { BOverlay } from "bootstrap-vue-next/components/BOverlay";
import { BCard, BCardText } from "bootstrap-vue-next/components/BCard";
import { BApp, useModal } from "bootstrap-vue-next";
import { Toaster, toast } from "vue-sonner";
import { onClickOutside, refDebounced, useDropZone, useFileDialog } from "@vueuse/core";
import { BApp as BApp$1 } from "bootstrap-vue-next/components/BApp";
import { BBadge } from "bootstrap-vue-next/components/BBadge";
import { BTab, BTabs } from "bootstrap-vue-next/components/BTabs";
import { BFormTextarea } from "bootstrap-vue-next/components/BFormTextarea";
import { BFormRadio, BFormRadioGroup } from "bootstrap-vue-next/components/BFormRadio";
import { BFormInput } from "bootstrap-vue-next/components/BFormInput";
import { BModal } from "bootstrap-vue-next/components/BModal";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
import "dayjs/locale/id.js";
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
* @see routes/web.php:11
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
* @see routes/web.php:11
* @route '/check'
*/
check.url = (options) => {
	return check.definition.url + queryParams(options);
};
/**
* @see routes/web.php:11
* @route '/check'
*/
check.get = (options) => ({
	url: check.url(options),
	method: "get"
});
/**
* @see routes/web.php:11
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
			_push(`</div><h2 class="display-6 fw-bold mb-2 text-light">${ssrInterpolate(_ctx.$page.props.name)}</h2><p class="opacity-75 mb-5 text-light"> Gerbang menuju masa depan gemilang bagi putra-putri terbaik bangsa. </p><div class="row g-3 text-start"><div class="col-12"><div class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"><div class="me-3">`);
			_push(ssrRenderComponent(unref(Files), { size: 24 }, null, _parent));
			_push(`</div><span class="fw-medium">Proses 100% Online</span></div></div><div class="col-12"><div class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"><div class="me-3">`);
			_push(ssrRenderComponent(unref(Clock), { size: 24 }, null, _parent));
			_push(`</div><span class="fw-medium">Update Status Real-time</span></div></div><div class="col-12"><div class="d-flex align-items-center bg-primary-subtle text-primary p-3 rounded-4"><div class="me-3">`);
			_push(ssrRenderComponent(unref(CreditCard), { size: 24 }, null, _parent));
			_push(`</div><span class="fw-medium">Pembayaran Mudah</span></div></div></div></div></div><div class="col-lg-6 p-4 p-md-5 bg-body-tertiary"><div class="mb-4"><h3 class="fw-bold mb-1"> Selamat Datang </h3><p class="text-secondary"> Silahkan masuk ke akun orang tua Anda. </p></div><form><div class="mb-4"><label class="form-label small fw-bold">Email Peserta Didik</label><div class="input-group has-validation"><span class="input-group-text border-0 shadow-sm">`);
			_push(ssrRenderComponent(unref(Mail), { size: 16 }, null, _parent));
			_push(`</span><input${ssrRenderAttr("value", unref(form).email)} class="${ssrRenderClass([{ "is-invalid": unref(form).errors.email }, "form-control"])}" placeholder="nama@email.com" type="email"><div class="invalid-feedback">${ssrInterpolate(unref(form).errors.email)}</div></div></div><div class="mb-4"><div class="d-flex justify-content-between align-items-center mb-2"><label class="form-label small fw-bold mb-0">Kata Sandi</label><a size="14" class="text-decoration-none small fw-bold" href="/forgot-password" data-discover="true">Lupa Sandi?</a></div><div class="input-group has-validation"><span class="input-group-text border-0 shadow-sm">`);
			_push(ssrRenderComponent(unref(Lock), { size: 16 }, null, _parent));
			_push(`</span><input${ssrRenderDynamicModel(show.value ? "text" : "password", unref(form).password, null)} class="${ssrRenderClass([{ "is-invalid": unref(form).errors.password }, "form-control"])}" placeholder="Kata Sandi"${ssrRenderAttr("type", show.value ? "text" : "password")}><button type="button" class="input-group-text border-0 shadow-sm">`);
			if (!show.value) _push(ssrRenderComponent(unref(Eye), { size: 16 }, null, _parent));
			else _push(ssrRenderComponent(unref(EyeClosed), { size: 16 }, null, _parent));
			_push(`</button><div class="invalid-feedback">${ssrInterpolate(unref(form).errors.password)}</div></div></div><div class="mb-4 form-check"><input class="form-check-input" id="remember" type="checkbox"><label class="form-check-label small" for="remember">Ingat saya di perangkat ini</label></div><button type="submit" class="btn btn-primary w-100"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> Masuk </button><div class="position-relative text-center my-3"><span class="text-secondary small"> Atau masuk dengan </span></div><div class="row g-3 mb-4"><div class="col-12"><button type="button" class="btn btn-light text-dark w-100 d-flex align-items-center justify-content-center"><img width="16" class="me-2" alt="Google" src="https://www.google.com/favicon.ico"> Google </button></div></div><div class="text-center"><p class="small text-secondary mb-0"> Belum memiliki akun? <a class="text-decoration-none fw-bold" href="/register" data-discover="true">Daftar Akun Baru</a></p></div></form></div></div></div></div></div></div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Auth/Login.vue
var Login_exports = /* @__PURE__ */ __exportAll({ default: () => Login_default });
var _sfc_setup$21 = Login_vue_vue_type_script_setup_true_lang_default.setup;
Login_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/Login.vue");
	return _sfc_setup$21 ? _sfc_setup$21(props, ctx) : void 0;
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
var _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
	_push(`<div${ssrRenderAttrs(_attrs)}><p>register</p></div>`);
}
var _sfc_setup$20 = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Auth/Register.vue");
	return _sfc_setup$20 ? _sfc_setup$20(props, ctx) : void 0;
};
var Register_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
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
			_push(`<div class="min-vh-100"><section class="py-5 position-relative overflow-hidden"><div class="container py-5 position-relative z-1"><div class="row justify-content-center text-center"><div class="col-lg-8"><h1 class="display-5 fw-bold mb-3"> Lacak Pendaftaran Anda </h1><p class="lead mb-5 text-muted"> Masukkan Nomor Registrasi untuk melihat status terbaru pendaftaran putra-putri Anda. </p><div class="card border shadow-lg rounded-pill p-2 mx-auto" style="${ssrRenderStyle({ "max-width": "600px" })}"><form class="d-flex align-items-center"><div class="flex-grow-1 ps-4"><div class="d-flex align-items-center">`);
			_push(ssrRenderComponent(unref(Search), { class: "text-primary" }, null, _parent));
			_push(`<input class="form-control border-0 shadow-none bg-transparent py-3" placeholder="Contoh: REG-20260401-001" type="text" value="REG-0001-0001"></div></div><button type="submit" class="btn btn-primary rounded-pill px-4 py-2 me-1"> Cek Status </button></form></div></div></div></div><div class="position-absolute top-0 start-0 translate-middle opacity-50 rounded-circle bg-primary" style="${ssrRenderStyle({
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
				_push(`<h3 class="fw-bold text-primary"> Sedang Ditinjau </h3><p class="small opacity-75 mb-0"> Terakhir diperbarui: <strong>1 jam yang lalu</strong></p></div><div class="col-md-8 bg-body-tertiary p-5"><div class="d-flex justify-content-between align-items-start mb-4"><div><h4 class="fw-bold mb-1"> Budi Santoso </h4><span class="badge bg-success-subtle text-muted rounded-pill small">Siswa Baru</span></div><div class="text-end"><small class="text-muted d-block">ID Pendaftaran</small><span class="fw-bold text-primary">REG-0001-0001</span></div></div><hr class="my-4 opacity-10"><div class="row g-4 mb-5"><div class="col-sm-6"><div class="d-flex align-items-center"><div class="p-2 rounded-3 me-3">`);
				_push(ssrRenderComponent(unref(Calendar), { class: "text-primary" }, null, _parent));
				_push(`</div><div><small class="text-muted d-block">Tanggal Daftar</small><span class="fw-bold">02 April 2026</span></div></div></div><div class="col-sm-6"><div class="d-flex align-items-center"><div class="p-2 rounded-3 me-3">`);
				_push(ssrRenderComponent(unref(SquareStack), { class: "text-primary" }, null, _parent));
				_push(`</div><div><small class="text-muted d-block">Gelombang</small><span class="fw-bold">Gelombang 1 (Reguler)</span></div></div></div></div><div class="alert bg-primary-subtle border-0 rounded-4 p-4 mb-4"><div class="d-flex">`);
				_push(ssrRenderComponent(unref(CircleAlert), { class: "me-3 text-primary" }, null, _parent));
				_push(`<div><h6 class="fw-bold mb-1"> Keterangan: </h6><p class="small mb-0 text-muted"> Berkas Anda sedang dalam antrean verifikasi oleh panitia. </p></div></div></div><div class="d-flex flex-wrap gap-3"><a class="btn btn-primary rounded-pill px-4" href="/login" data-discover="true">Masuk ke Dashboard</a><button data-bs-theme="dark" class="btn btn-light rounded-pill px-4"> Cetak Bukti </button></div></div></div></div><div class="mt-5 text-center"><h5 class="fw-bold mb-4"> Alur Pendaftaran Selanjutnya </h5><div class="row g-3"><div class="col-6 col-md-3"><div class="card border-0 rounded-4 p-3 bg-primary text-white shadow-lg">`);
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
				_push(`</div><h5>Belum ada hasil pencarian</h5><p class="text-muted small"> Silahkan masukkan nomor pendaftaran Anda di atas. </p></div></div></section>`);
			}
			_push(`<section class="py-5"><div class="container"><div class="row justify-content-center"><div class="col-lg-8"><h4 class="fw-bold text-center mb-5"> Pertanyaan Seputar Status </h4><div class="accordion border-0" id="faqStatus"><div class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"><h2 class="accordion-header"><button class="accordion-button fw-bold py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="false"> Berapa lama proses review berkas? </button></h2><div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqStatus" style="${ssrRenderStyle({})}"><div class="accordion-body text-secondary small"> Proses verifikasi berkas biasanya memakan waktu 1-3 hari kerja setelah Anda menekan tombol &quot;Kirim Berkas&quot; di dashboard. </div></div></div><div class="accordion-item border-0 rounded-4 mb-3 shadow-sm overflow-hidden"><h2 class="accordion-header"><button class="accordion-button fw-bold py-3 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false"> Apa yang harus dilakukan jika status &quot;Perlu Perbaikan&quot;? </button></h2><div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqStatus" style="${ssrRenderStyle({})}"><div class="accordion-body text-secondary small"> Silahkan masuk ke dashboard Anda, lihat catatan dari panitia pada bagian berkas, unggah kembali dokumen yang diminta, lalu klik &quot;Kirim Ulang&quot;. </div></div></div></div></div></div></div></section></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Check.vue
var Check_exports = /* @__PURE__ */ __exportAll({ default: () => Check_default });
var _sfc_setup$19 = Check_vue_vue_type_script_setup_true_lang_default.setup;
Check_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Check.vue");
	return _sfc_setup$19 ? _sfc_setup$19(props, ctx) : void 0;
};
var Check_default = Check_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/Forms/Dropzone.vue?vue&type=script&setup=true&lang.ts
var Dropzone_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Dropzone",
	__ssrInlineRender: true,
	props: { itemId: {} },
	emits: ["dropped"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const dropZoneRef = useTemplateRef("dropZoneRef");
		const onDrop = (files) => {
			if (!files?.length) return;
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
		const isDragging = refDebounced(isOverDropZone, 50);
		const { open, onChange } = useFileDialog({
			accept: "image/jpeg, image/png, image/jpg, application/pdf",
			multiple: false
		});
		onChange((files) => {
			if (files) onDrop(Array.from(files));
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({
				ref_key: "dropZoneRef",
				ref: dropZoneRef,
				class: ["rounded-4 p-4 border text-center", unref(isDragging) ? "bg-primary-subtle border-primary" : "border-dashed"]
			}, _attrs))}><div class="mb-3"><div class="${ssrRenderClass([unref(isDragging) ? "bg-primary text-white" : "bg-primary-subtle text-primary", "d-inline-flex p-3 rounded-circle mb-2"])}">`);
			if (unref(isDragging)) _push(ssrRenderComponent(unref(HandMetal), { size: 22 }, null, _parent));
			else _push(ssrRenderComponent(unref(FileUp), { size: 22 }, null, _parent));
			_push(`</div><p class="small text-secondary mb-0">${ssrInterpolate(unref(isDragging) ? "Lepaskan file di sini" : "Klik tombol atau seret file ke sini")}</p><p class="small text-secondary opacity-50 mb-0"> PDF, JPG, PNG — Maks. 2MB </p></div>`);
			if (!unref(isDragging)) _push(`<button type="button" class="btn btn-sm btn-primary rounded-pill px-4 fw-bold"> Pilih Berkas </button>`);
			else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/Forms/Dropzone.vue
var _sfc_setup$18 = Dropzone_vue_vue_type_script_setup_true_lang_default.setup;
Dropzone_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Forms/Dropzone.vue");
	return _sfc_setup$18 ? _sfc_setup$18(props, ctx) : void 0;
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
//#region resources/js/components/Footer.vue?vue&type=script&setup=true&lang.ts
var Footer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "Footer",
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "container py-4" }, _attrs))}><div class="row"><div class="col-lg-3"><h3>Tentang Kami</h3><ul class="list-unstyled small"><li class="mb-2">`);
			_push(ssrRenderComponent(unref(Link), {
				class: "text-decoration-none text-secondary",
				href: unref(home$1)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Beranda `);
					else return [createTextVNode("Beranda ")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li class="mb-2">`);
			_push(ssrRenderComponent(unref(Link), {
				class: "text-decoration-none text-secondary",
				href: unref(check)()
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(` Cek Pendaftaran `);
					else return [createTextVNode(" Cek Pendaftaran ")];
				}),
				_: 1
			}, _parent));
			_push(`</li><li class="mb-2"><a class="text-decoration-none text-secondary" href="/login" data-discover="true">Login</a></li><li class="mb-2"><a class="text-decoration-none text-secondary" href="/register" data-discover="true">Daftar</a></li></ul></div><div class="col-lg-3"><h3>Dukungan</h3><ul class="list-unstyled small"><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Alur Pendaftaran</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Biaya Pendidikan</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Beasiswa</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">FAQ</a></li></ul></div><div class="col-lg-3"><ul class="list-unstyled small"><h2 class="d-none d-lg-block"> </h2><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Alur Pendaftaran</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Biaya Pendidikan</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">Beasiswa</a></li><li class="mb-2"><a href="#" class="text-decoration-none text-secondary">FAQ</a></li></ul></div><div class="col-lg-3"><h1>Connect With Us</h1><ul class="list-inline"><li class="list-inline-item"><img${ssrRenderAttr("src", facebook_48_default)} alt="facebook" class="img-fluid" width="48px"></li><li class="list-inline-item"><img${ssrRenderAttr("src", instagram_48_default)} alt="instagram" class="img-fluid" width="48px"></li><li class="list-inline-item"><img${ssrRenderAttr("src", tiktok_48_default)} alt="instagram" class="img-fluid" width="48px"></li><li class="list-inline-item"><img${ssrRenderAttr("src", youtube_48_default)} alt="instagram" class="img-fluid" width="48px"></li></ul><p class="text-secondary small"> Jl. Sukagalih No.80, Sukagalih, Kec. Sukajadi, Kota Bandung, Jawa Barat 40162 </p></div></div><div class="col-lg-12 mt-5"><div class="d-flex justify-content-between"><span class="small text-muted"> © 2026 `);
			_push(ssrRenderComponent(unref(Link), { href: unref(home$1)() }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`SMA PGRI 1 Bandung`);
					else return [createTextVNode("SMA PGRI 1 Bandung")];
				}),
				_: 1
			}, _parent));
			_push(`. Hak cipta dilindungi. </span><span class="small text-muted"> Powered by <span class="fw-bold">PT. Edubee Technology ID</span></span></div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/components/Footer.vue
var _sfc_setup$17 = Footer_vue_vue_type_script_setup_true_lang_default.setup;
Footer_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Footer.vue");
	return _sfc_setup$17 ? _sfc_setup$17(props, ctx) : void 0;
};
var Footer_default = Footer_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/routes/dashboard/home/index.ts
/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:25
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
* @see app/Http/Controllers/Dashboard/HomeController.php:25
* @route '/dashboard'
*/
index.url = (options) => {
	return index.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:25
* @route '/dashboard'
*/
index.get = (options) => ({
	url: index.url(options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\HomeController::index
* @see app/Http/Controllers/Dashboard/HomeController.php:25
* @route '/dashboard'
*/
index.head = (options) => ({
	url: index.url(options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\HomeController::store
* @see app/Http/Controllers/Dashboard/HomeController.php:41
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
* @see app/Http/Controllers/Dashboard/HomeController.php:41
* @route '/dashboard'
*/
store.url = (options) => {
	return store.definition.url + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\HomeController::store
* @see app/Http/Controllers/Dashboard/HomeController.php:41
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
* @see app/Http/Controllers/DocumentUploadController.php:53
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
* @see app/Http/Controllers/DocumentUploadController.php:53
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
* @see app/Http/Controllers/DocumentUploadController.php:53
* @route '/dashboard/{candidate}/document/{document}'
*/
nullMethod.patch = (args, options) => ({
	url: nullMethod.url(args, options),
	method: "patch"
});
/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
var upload = (args, options) => ({
	url: upload.url(args, options),
	method: "post"
});
upload.definition = {
	methods: ["post"],
	url: "/dashboard/{candidate}/document/{document}"
};
/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
upload.url = (args, options) => {
	if (Array.isArray(args)) args = {
		candidate: args[0],
		document: args[1]
	};
	args = applyUrlDefaults(args);
	const parsedArgs = {
		candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate,
		document: typeof args.document === "object" ? args.document.id : args.document
	};
	return upload.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace("{document}", parsedArgs.document.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\DocumentUploadController::__invoke
* @see app/Http/Controllers/DocumentUploadController.php:17
* @route '/dashboard/{candidate}/document/{document}'
*/
upload.post = (args, options) => ({
	url: upload.url(args, options),
	method: "post"
});
var document$1 = {
	null: Object.assign(nullMethod, nullMethod),
	upload: Object.assign(upload, upload)
};
//#endregion
//#region resources/js/routes/dashboard/form/index.ts
/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:16
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
* @see app/Http/Controllers/Dashboard/FormController.php:16
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
* @see app/Http/Controllers/Dashboard/FormController.php:16
* @route '/dashboard/{candidate}'
*/
guide.get = (args, options) => ({
	url: guide.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::guide
* @see app/Http/Controllers/Dashboard/FormController.php:16
* @route '/dashboard/{candidate}'
*/
guide.head = (args, options) => ({
	url: guide.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:40
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
* @see app/Http/Controllers/Dashboard/FormController.php:40
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
* @see app/Http/Controllers/Dashboard/FormController.php:40
* @route '/dashboard/{candidate}/form'
*/
form.get = (args, options) => ({
	url: form.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::form
* @see app/Http/Controllers/Dashboard/FormController.php:40
* @route '/dashboard/{candidate}/form'
*/
form.head = (args, options) => ({
	url: form.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:64
* @route '/dashboard/{candidate}/document'
*/
var document = (args, options) => ({
	url: document.url(args, options),
	method: "get"
});
document.definition = {
	methods: ["get", "head"],
	url: "/dashboard/{candidate}/document"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:64
* @route '/dashboard/{candidate}/document'
*/
document.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return document.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:64
* @route '/dashboard/{candidate}/document'
*/
document.get = (args, options) => ({
	url: document.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::document
* @see app/Http/Controllers/Dashboard/FormController.php:64
* @route '/dashboard/{candidate}/document'
*/
document.head = (args, options) => ({
	url: document.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:79
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
* @see app/Http/Controllers/Dashboard/FormController.php:79
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
* @see app/Http/Controllers/Dashboard/FormController.php:79
* @route '/dashboard/{candidate}/send'
*/
send.get = (args, options) => ({
	url: send.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::send
* @see app/Http/Controllers/Dashboard/FormController.php:79
* @route '/dashboard/{candidate}/send'
*/
send.head = (args, options) => ({
	url: send.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::submit
* @see app/Http/Controllers/Dashboard/FormController.php:172
* @route '/dashboard/{candidate}/submit'
*/
var submit = (args, options) => ({
	url: submit.url(args, options),
	method: "post"
});
submit.definition = {
	methods: ["post"],
	url: "/dashboard/{candidate}/submit"
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::submit
* @see app/Http/Controllers/Dashboard/FormController.php:172
* @route '/dashboard/{candidate}/submit'
*/
submit.url = (args, options) => {
	if (typeof args === "string" || typeof args === "number") args = { candidate: args };
	if (typeof args === "object" && !Array.isArray(args) && "id" in args) args = { candidate: args.id };
	if (Array.isArray(args)) args = { candidate: args[0] };
	args = applyUrlDefaults(args);
	const parsedArgs = { candidate: typeof args.candidate === "object" ? args.candidate.id : args.candidate };
	return submit.definition.url.replace("{candidate}", parsedArgs.candidate.toString()).replace(/\/+$/, "") + queryParams(options);
};
/**
* @see \App\Http\Controllers\Dashboard\FormController::submit
* @see app/Http/Controllers/Dashboard/FormController.php:172
* @route '/dashboard/{candidate}/submit'
*/
submit.post = (args, options) => ({
	url: submit.url(args, options),
	method: "post"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:96
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
* @see app/Http/Controllers/Dashboard/FormController.php:96
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
* @see app/Http/Controllers/Dashboard/FormController.php:96
* @route '/dashboard/{candidate}/review'
*/
review.get = (args, options) => ({
	url: review.url(args, options),
	method: "get"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::review
* @see app/Http/Controllers/Dashboard/FormController.php:96
* @route '/dashboard/{candidate}/review'
*/
review.head = (args, options) => ({
	url: review.url(args, options),
	method: "head"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::update
* @see app/Http/Controllers/Dashboard/FormController.php:111
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
* @see app/Http/Controllers/Dashboard/FormController.php:111
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
* @see app/Http/Controllers/Dashboard/FormController.php:111
* @route '/dashboard/{candidate}'
*/
update.put = (args, options) => ({
	url: update.url(args, options),
	method: "put"
});
/**
* @see \App\Http\Controllers\Dashboard\FormController::destroy
* @see app/Http/Controllers/Dashboard/FormController.php:143
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
* @see app/Http/Controllers/Dashboard/FormController.php:143
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
* @see app/Http/Controllers/Dashboard/FormController.php:143
* @route '/dashboard/{candidate}'
*/
destroy.delete = (args, options) => ({
	url: destroy.url(args, options),
	method: "delete"
});
var formNamespace = {
	guide: Object.assign(guide, guide),
	form: Object.assign(form, form),
	document: Object.assign(document, document$1),
	send: Object.assign(send, send),
	submit: Object.assign(submit, submit),
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
			_push(`<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"><div class="offcanvas-header"><h5 class="offcanvas-title" id="offcanvasNavbarLabel"> Menu </h5><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div><div class="offcanvas-body"><ul class="navbar-nav justify-content-lg-center flex-grow-1"><li class="nav-item">`);
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
				_push(`<ul class="navbar-nav justify-content-lg-end flex-grow-1"><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">${ssrInterpolate(unref(page).props.auth.user.name)}</a><ul class="dropdown-menu dropdown-menu-end border-0"><li>`);
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
var _sfc_setup$16 = Navbar_vue_vue_type_script_setup_true_lang_default.setup;
Navbar_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Navbar.vue");
	return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
var Navbar_default = Navbar_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/SidebarItem.vue?vue&type=script&setup=true&lang.ts
var SidebarItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SidebarItem",
	__ssrInlineRender: true,
	props: {
		href: {},
		icon: {},
		label: {},
		active: { type: Boolean },
		disabled: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.disabled ? "button" : unref(Link)), mergeProps(__props.disabled ? {
				type: "button",
				disabled: true
			} : { href: __props.href }, {
				class: ["d-flex align-items-center gap-3 px-3 py-2 rounded-3 border-0 w-100 text-decoration-none small fw-bold transition", [__props.disabled ? "text-secondary opacity-50 bg-transparent" : __props.active ? "bg-primary-subtle text-primary" : "text-body-secondary bg-transparent sidebar-item-hover"]],
				"aria-current": __props.active ? "page" : void 0
			}, _attrs), {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), {
							size: 17,
							class: "flex-shrink-0"
						}, null), _parent, _scopeId);
						_push(`<span data-v-19029845${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
						if (__props.disabled) _push(`<span class="ms-auto badge bg-secondary-subtle text-secondary rounded-pill fw-normal" style="${ssrRenderStyle({ "font-size": "10px" })}" data-v-19029845${_scopeId}> Segera </span>`);
						else _push(`<!---->`);
					} else return [
						(openBlock(), createBlock(resolveDynamicComponent(__props.icon), {
							size: 17,
							class: "flex-shrink-0"
						})),
						createVNode("span", null, toDisplayString(__props.label), 1),
						__props.disabled ? (openBlock(), createBlock("span", {
							key: 0,
							class: "ms-auto badge bg-secondary-subtle text-secondary rounded-pill fw-normal",
							style: { "font-size": "10px" }
						}, " Segera ")) : createCommentVNode("", true)
					];
				}),
				_: 1
			}), _parent);
		};
	}
});
//#endregion
//#region resources/js/components/SidebarItem.vue
var _sfc_setup$15 = SidebarItem_vue_vue_type_script_setup_true_lang_default.setup;
SidebarItem_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/SidebarItem.vue");
	return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
var SidebarItem_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SidebarItem_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-19029845"]]);
//#endregion
//#region resources/js/layouts/Form.vue?vue&type=script&setup=true&lang.ts
var Form_vue_vue_type_script_setup_true_lang_default$1 = /* @__PURE__ */ defineComponent({
	__name: "Form",
	__ssrInlineRender: true,
	props: { candidate: {} },
	setup(__props) {
		const page = usePage();
		const props = __props;
		const initials = computed(() => page.props.auth.user.name.split(" ").slice(0, 2).map((w) => w[0].toUpperCase()).join(""));
		const navItems = computed(() => [
			{
				label: "Petunjuk Pengisian",
				icon: FormInput,
				href: dashboard.form.guide(props.candidate.id).url,
				disabled: false
			},
			{
				label: "Formulir Pendaftaran",
				icon: User,
				href: dashboard.form.form(props.candidate.id).url,
				disabled: false
			},
			{
				label: "Berkas Persyaratan",
				icon: FileSearchCorner,
				href: dashboard.form.document(props.candidate.id).url,
				disabled: false
			},
			{
				label: "Kirim Berkas",
				icon: ScanText,
				href: dashboard.form.send(props.candidate.id).url,
				disabled: true === props.candidate.is_locked
			},
			{
				label: "Status Peninjauan",
				icon: Send,
				href: dashboard.form.review(props.candidate.id).url,
				disabled: false
			},
			{
				label: "Pembayaran",
				icon: CreditCard,
				href: null,
				url: null,
				disabled: true
			},
			{
				label: "Jadwal Tes",
				icon: CalendarDays,
				href: null,
				url: null,
				disabled: true
			}
		]);
		return (_ctx, _push, _parent, _attrs) => {
			_push(ssrRenderComponent(BApp$1, _attrs, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="d-flex flex-column min-vh-100"${_scopeId}><header${_scopeId}>`);
						_push(ssrRenderComponent(Navbar_default, null, null, _parent, _scopeId));
						_push(`</header><main class="flex-grow-1"${_scopeId}><div class="container py-5"${_scopeId}>`);
						_push(ssrRenderComponent(unref(Link), {
							href: unref(dashboard).home.index(),
							class: "d-inline-flex align-items-center gap-2 text-secondary text-decoration-none small fw-bold mb-4"
						}, {
							default: withCtx((_, _push, _parent, _scopeId) => {
								if (_push) {
									_push(ssrRenderComponent(unref(ArrowLeft), { size: 16 }, null, _parent, _scopeId));
									_push(` Kembali ke Dashboard `);
								} else return [createVNode(unref(ArrowLeft), { size: 16 }), createTextVNode(" Kembali ke Dashboard ")];
							}),
							_: 1
						}, _parent, _scopeId));
						_push(`<div class="row g-4 mt-0"${_scopeId}><div class="col-lg-3"${_scopeId}><div class="sticky-top" style="${ssrRenderStyle({ "top": "20px" })}"${_scopeId}><div class="card border-0 bg-body-tertiary rounded-4"${_scopeId}><div class="card-body p-4"${_scopeId}><div class="d-flex align-items-center gap-3 mb-4"${_scopeId}><div class="rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center fw-bold flex-shrink-0" style="${ssrRenderStyle({
							"width": "44px",
							"height": "44px",
							"font-size": "16px"
						})}"${_scopeId}>${ssrInterpolate(initials.value)}</div><div class="overflow-hidden"${_scopeId}><p class="fw-bold small mb-0 text-truncate"${_scopeId}>${ssrInterpolate(unref(page).props.auth.user.name)}</p><p class="text-secondary mb-0" style="${ssrRenderStyle({ "font-size": "11px" })}"${_scopeId}> No. Reg belum terbentuk </p></div></div><div class="mb-4"${_scopeId}><div class="d-flex justify-content-between mb-1"${_scopeId}><span class="small text-secondary"${_scopeId}>Kelengkapan Data</span><span class="small fw-bold text-primary"${_scopeId}>${ssrInterpolate(__props.candidate.snapshot.progress)}%</span></div><div class="progress rounded-pill" style="${ssrRenderStyle({ "height": "6px" })}"${_scopeId}><div class="progress-bar rounded-pill" style="${ssrRenderStyle({ width: `${__props.candidate.snapshot.progress}%` })}"${_scopeId}></div></div></div><hr class="text-secondary opacity-25 mb-3 mt-0"${_scopeId}><nav class="d-flex flex-column gap-1"${_scopeId}><!--[-->`);
						ssrRenderList(navItems.value, (item) => {
							_push(ssrRenderComponent(SidebarItem_default, {
								key: item.label,
								href: item.href,
								icon: item.icon,
								label: item.label,
								active: _ctx.$page.url === item.href,
								disabled: item.disabled
							}, null, _parent, _scopeId));
						});
						_push(`<!--]--></nav></div></div></div></div><div class="col-lg-9"${_scopeId}>`);
						ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent, _scopeId);
						_push(`</div></div></div></main>`);
						_push(ssrRenderComponent(Footer_default, null, null, _parent, _scopeId));
						_push(`</div>`);
					} else return [createVNode("div", { class: "d-flex flex-column min-vh-100" }, [
						createVNode("header", null, [createVNode(Navbar_default)]),
						createVNode("main", { class: "flex-grow-1" }, [createVNode("div", { class: "container py-5" }, [createVNode(unref(Link), {
							href: unref(dashboard).home.index(),
							class: "d-inline-flex align-items-center gap-2 text-secondary text-decoration-none small fw-bold mb-4"
						}, {
							default: withCtx(() => [createVNode(unref(ArrowLeft), { size: 16 }), createTextVNode(" Kembali ke Dashboard ")]),
							_: 1
						}, 8, ["href"]), createVNode("div", { class: "row g-4 mt-0" }, [createVNode("div", { class: "col-lg-3" }, [createVNode("div", {
							class: "sticky-top",
							style: { "top": "20px" }
						}, [createVNode("div", { class: "card border-0 bg-body-tertiary rounded-4" }, [createVNode("div", { class: "card-body p-4" }, [
							createVNode("div", { class: "d-flex align-items-center gap-3 mb-4" }, [createVNode("div", {
								class: "rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center fw-bold flex-shrink-0",
								style: {
									"width": "44px",
									"height": "44px",
									"font-size": "16px"
								}
							}, toDisplayString(initials.value), 1), createVNode("div", { class: "overflow-hidden" }, [createVNode("p", { class: "fw-bold small mb-0 text-truncate" }, toDisplayString(unref(page).props.auth.user.name), 1), createVNode("p", {
								class: "text-secondary mb-0",
								style: { "font-size": "11px" }
							}, " No. Reg belum terbentuk ")])]),
							createVNode("div", { class: "mb-4" }, [createVNode("div", { class: "d-flex justify-content-between mb-1" }, [createVNode("span", { class: "small text-secondary" }, "Kelengkapan Data"), createVNode("span", { class: "small fw-bold text-primary" }, toDisplayString(__props.candidate.snapshot.progress) + "%", 1)]), createVNode("div", {
								class: "progress rounded-pill",
								style: { "height": "6px" }
							}, [createVNode("div", {
								class: "progress-bar rounded-pill",
								style: { width: `${__props.candidate.snapshot.progress}%` }
							}, null, 4)])]),
							createVNode("hr", { class: "text-secondary opacity-25 mb-3 mt-0" }),
							createVNode("nav", { class: "d-flex flex-column gap-1" }, [(openBlock(true), createBlock(Fragment, null, renderList(navItems.value, (item) => {
								return openBlock(), createBlock(SidebarItem_default, {
									key: item.label,
									href: item.href,
									icon: item.icon,
									label: item.label,
									active: _ctx.$page.url === item.href,
									disabled: item.disabled
								}, null, 8, [
									"href",
									"icon",
									"label",
									"active",
									"disabled"
								]);
							}), 128))])
						])])])]), createVNode("div", { class: "col-lg-9" }, [renderSlot(_ctx.$slots, "default")])])])]),
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
var _sfc_setup$14 = Form_vue_vue_type_script_setup_true_lang_default$1.setup;
Form_vue_vue_type_script_setup_true_lang_default$1.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/layouts/Form.vue");
	return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
var Form_default$1 = Form_vue_vue_type_script_setup_true_lang_default$1;
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
		const props = __props;
		const mount = ref(false);
		const activeOverlayId = ref(null);
		const form = useForm({ file: null });
		const uploadedCount = computed(() => props.candidate.documentable.filter((d) => d.name !== null).length);
		const totalCount = computed(() => props.candidate.documentable.length);
		const formatSize = (size) => typeof size === "number" ? (size / (1024 * 1024)).toFixed(2) : "Tidak diketahui";
		onMounted(() => {
			mount.value = true;
		});
		const handleUpload = ({ id, files }) => {
			if (!files.length || props.candidate.is_locked) return;
			form.file = files[0];
			activeOverlayId.value = Number(id);
			form.post(dashboard.form.document.upload({
				candidate: props.candidate.id,
				document: Number(id)
			}).url, {
				preserveScroll: true,
				forceFormData: true,
				onFinish: () => {
					form.reset();
					activeOverlayId.value = null;
				},
				onSuccess: (success) => {
					toast.success(success.flash.message, {
						style: {
							background: "var(--bs-success)",
							color: "#fff",
							border: "none",
							fontFamily: "Rubik"
						},
						position: "top-right"
					});
				},
				onError: (errors) => {
					if (errors.file || errors.message) toast.error(errors.file, {
						style: {
							background: "var(--bs-danger)",
							color: "#fff",
							border: "none",
							fontFamily: "Rubik"
						},
						position: "top-right"
					});
				}
			});
		};
		const { create } = useModal();
		const confirmDelete = (uuid, id, title) => {
			if (props.candidate.is_locked) return;
			create({
				size: "md",
				title,
				body: "Apakah anda yakin ingin menghapus file ini?",
				bodyClass: "small text-muted",
				okClass: "btn-danger",
				okTitle: "Hapus",
				cancelTitle: "Batal",
				centered: true,
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
			const _component_BCard = BCard;
			const _component_BOverlay = BOverlay;
			_push(`<!--[-->`);
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
			_push(ssrRenderComponent(_component_BCard, { rounded: "lg" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) {
						_push(`<div class="d-flex justify-content-between align-items-center mb-4"${_scopeId}><div${_scopeId}><h4 class="fw-bold mb-1"${_scopeId}>${ssrInterpolate(__props.meta.title)}</h4><p class="text-secondary small mb-0"${_scopeId}> Unggah berkas dalam format PDF <strong${_scopeId}>(Direkomendasikan)</strong> atau Gambar (Maks. 2MB) </p></div><span class="${ssrRenderClass([uploadedCount.value === totalCount.value ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger", "badge rounded-pill px-3 py-2 fw-bold"])}"${_scopeId}>${ssrInterpolate(uploadedCount.value)}/${ssrInterpolate(totalCount.value)} Dokumen Terunggah </span></div>`);
						if (mount.value) {
							_push(`<div class="row g-4"${_scopeId}><!--[-->`);
							ssrRenderList(__props.candidate.documentable, (doc) => {
								_push(`<div class="col-md-6"${_scopeId}>`);
								_push(ssrRenderComponent(_component_BOverlay, {
									rounded: "lg",
									variant: "transparent",
									show: activeOverlayId.value === doc.id
								}, {
									default: withCtx((_, _push, _parent, _scopeId) => {
										if (_push) {
											_push(`<div class="card border-0 rounded-5 h-100 shadow-sm"${_scopeId}><div class="p-4"${_scopeId}><div class="d-flex justify-content-between align-items-start mb-3"${_scopeId}><div${_scopeId}><p class="small fw-bold mb-1"${_scopeId}>${ssrInterpolate(doc.document_type.name)} `);
											if (doc.is_required) _push(`<sup class="text-danger"${_scopeId}>*</sup>`);
											else _push(`<!---->`);
											_push(`</p><div class="${ssrRenderClass([doc.name ? "text-success" : "text-secondary", "d-flex align-items-center small fw-bold"])}"${_scopeId}>`);
											ssrRenderVNode(_push, createVNode(resolveDynamicComponent(doc.name ? unref(CircleCheckBig) : unref(CircleAlert)), {
												size: 16,
												class: "me-2"
											}, null), _parent, _scopeId);
											_push(` ${ssrInterpolate(doc.name ? "Terverifikasi Sistem" : "Belum diunggah")}</div></div><div class="${ssrRenderClass([doc.name ? "bg-success-subtle text-success" : "text-primary shadow-sm", "p-2 rounded-circle"])}"${_scopeId}>`);
											ssrRenderVNode(_push, createVNode(resolveDynamicComponent(doc.name ? unref(Check) : unref(Upload)), null, null), _parent, _scopeId);
											_push(`</div></div>`);
											if (doc.name) {
												_push(`<div class="rounded-4 p-3 border"${_scopeId}><div class="d-flex align-items-center mb-3"${_scopeId}><div class="${ssrRenderClass([doc.mime === "application/pdf" ? "bg-danger-subtle text-danger" : "bg-success-subtle text-success", "p-2 rounded-3 me-3"])}"${_scopeId}>`);
												ssrRenderVNode(_push, createVNode(resolveDynamicComponent(doc.mime === "application/pdf" ? unref(FileText) : unref(Image)), null, null), _parent, _scopeId);
												_push(`</div><div class="overflow-hidden"${_scopeId}><p class="fw-bold mb-0"${_scopeId}>${ssrInterpolate(doc.mime === "application/pdf" ? "PDF" : "Gambar")}</p><small class="text-secondary"${_scopeId}>${ssrInterpolate(formatSize(doc.size))} MB </small></div></div><div class="d-flex gap-2"${_scopeId}><button class="btn btn-sm btn-primary flex-grow-1 fw-bold"${_scopeId}> Lihat </button><button type="button" class="btn btn-sm btn-danger"${ssrIncludeBooleanAttr(unref(form).processing || __props.candidate.is_locked) ? " disabled" : ""}${_scopeId}>`);
												_push(ssrRenderComponent(unref(Trash), { size: 16 }, null, _parent, _scopeId));
												_push(`</button></div></div>`);
											} else _push(ssrRenderComponent(Dropzone_default, {
												"item-id": doc.id,
												onDropped: handleUpload
											}, null, _parent, _scopeId));
											_push(`</div></div>`);
										} else return [createVNode("div", { class: "card border-0 rounded-5 h-100 shadow-sm" }, [createVNode("div", { class: "p-4" }, [createVNode("div", { class: "d-flex justify-content-between align-items-start mb-3" }, [createVNode("div", null, [createVNode("p", { class: "small fw-bold mb-1" }, [createTextVNode(toDisplayString(doc.document_type.name) + " ", 1), doc.is_required ? (openBlock(), createBlock("sup", {
											key: 0,
											class: "text-danger"
										}, "*")) : createCommentVNode("", true)]), createVNode("div", { class: ["d-flex align-items-center small fw-bold", doc.name ? "text-success" : "text-secondary"] }, [(openBlock(), createBlock(resolveDynamicComponent(doc.name ? unref(CircleCheckBig) : unref(CircleAlert)), {
											size: 16,
											class: "me-2"
										})), createTextVNode(" " + toDisplayString(doc.name ? "Terverifikasi Sistem" : "Belum diunggah"), 1)], 2)]), createVNode("div", { class: ["p-2 rounded-circle", doc.name ? "bg-success-subtle text-success" : "text-primary shadow-sm"] }, [(openBlock(), createBlock(resolveDynamicComponent(doc.name ? unref(Check) : unref(Upload))))], 2)]), doc.name ? (openBlock(), createBlock("div", {
											key: 0,
											class: "rounded-4 p-3 border"
										}, [createVNode("div", { class: "d-flex align-items-center mb-3" }, [createVNode("div", { class: ["p-2 rounded-3 me-3", doc.mime === "application/pdf" ? "bg-danger-subtle text-danger" : "bg-success-subtle text-success"] }, [(openBlock(), createBlock(resolveDynamicComponent(doc.mime === "application/pdf" ? unref(FileText) : unref(Image))))], 2), createVNode("div", { class: "overflow-hidden" }, [createVNode("p", { class: "fw-bold mb-0" }, toDisplayString(doc.mime === "application/pdf" ? "PDF" : "Gambar"), 1), createVNode("small", { class: "text-secondary" }, toDisplayString(formatSize(doc.size)) + " MB ", 1)])]), createVNode("div", { class: "d-flex gap-2" }, [createVNode("button", { class: "btn btn-sm btn-primary flex-grow-1 fw-bold" }, " Lihat "), createVNode("button", {
											type: "button",
											class: "btn btn-sm btn-danger",
											disabled: unref(form).processing || __props.candidate.is_locked,
											onClick: ($event) => confirmDelete(__props.candidate.id, doc.id, doc.document_type.name)
										}, [createVNode(unref(Trash), { size: 16 })], 8, ["disabled", "onClick"])])])) : (openBlock(), createBlock(Dropzone_default, {
											key: 1,
											"item-id": doc.id,
											onDropped: handleUpload
										}, null, 8, ["item-id"]))])])];
									}),
									_: 2
								}, _parent, _scopeId));
								_push(`</div>`);
							});
							_push(`<!--]--></div>`);
						} else _push(`<!---->`);
						_push(`<div class="mt-5 d-flex justify-content-between"${_scopeId}><button type="submit" class="btn btn-sm btn-primary px-5 rounded-pill"${_scopeId}> Simpan </button></div>`);
					} else return [
						createVNode("div", { class: "d-flex justify-content-between align-items-center mb-4" }, [createVNode("div", null, [createVNode("h4", { class: "fw-bold mb-1" }, toDisplayString(__props.meta.title), 1), createVNode("p", { class: "text-secondary small mb-0" }, [
							createTextVNode(" Unggah berkas dalam format PDF "),
							createVNode("strong", null, "(Direkomendasikan)"),
							createTextVNode(" atau Gambar (Maks. 2MB) ")
						])]), createVNode("span", { class: ["badge rounded-pill px-3 py-2 fw-bold", uploadedCount.value === totalCount.value ? "bg-success-subtle text-success" : "bg-danger-subtle text-danger"] }, toDisplayString(uploadedCount.value) + "/" + toDisplayString(totalCount.value) + " Dokumen Terunggah ", 3)]),
						mount.value ? (openBlock(), createBlock("div", {
							key: 0,
							class: "row g-4"
						}, [(openBlock(true), createBlock(Fragment, null, renderList(__props.candidate.documentable, (doc) => {
							return openBlock(), createBlock("div", {
								key: doc.id,
								class: "col-md-6"
							}, [createVNode(_component_BOverlay, {
								rounded: "lg",
								variant: "transparent",
								show: activeOverlayId.value === doc.id
							}, {
								default: withCtx(() => [createVNode("div", { class: "card border-0 rounded-5 h-100 shadow-sm" }, [createVNode("div", { class: "p-4" }, [createVNode("div", { class: "d-flex justify-content-between align-items-start mb-3" }, [createVNode("div", null, [createVNode("p", { class: "small fw-bold mb-1" }, [createTextVNode(toDisplayString(doc.document_type.name) + " ", 1), doc.is_required ? (openBlock(), createBlock("sup", {
									key: 0,
									class: "text-danger"
								}, "*")) : createCommentVNode("", true)]), createVNode("div", { class: ["d-flex align-items-center small fw-bold", doc.name ? "text-success" : "text-secondary"] }, [(openBlock(), createBlock(resolveDynamicComponent(doc.name ? unref(CircleCheckBig) : unref(CircleAlert)), {
									size: 16,
									class: "me-2"
								})), createTextVNode(" " + toDisplayString(doc.name ? "Terverifikasi Sistem" : "Belum diunggah"), 1)], 2)]), createVNode("div", { class: ["p-2 rounded-circle", doc.name ? "bg-success-subtle text-success" : "text-primary shadow-sm"] }, [(openBlock(), createBlock(resolveDynamicComponent(doc.name ? unref(Check) : unref(Upload))))], 2)]), doc.name ? (openBlock(), createBlock("div", {
									key: 0,
									class: "rounded-4 p-3 border"
								}, [createVNode("div", { class: "d-flex align-items-center mb-3" }, [createVNode("div", { class: ["p-2 rounded-3 me-3", doc.mime === "application/pdf" ? "bg-danger-subtle text-danger" : "bg-success-subtle text-success"] }, [(openBlock(), createBlock(resolveDynamicComponent(doc.mime === "application/pdf" ? unref(FileText) : unref(Image))))], 2), createVNode("div", { class: "overflow-hidden" }, [createVNode("p", { class: "fw-bold mb-0" }, toDisplayString(doc.mime === "application/pdf" ? "PDF" : "Gambar"), 1), createVNode("small", { class: "text-secondary" }, toDisplayString(formatSize(doc.size)) + " MB ", 1)])]), createVNode("div", { class: "d-flex gap-2" }, [createVNode("button", { class: "btn btn-sm btn-primary flex-grow-1 fw-bold" }, " Lihat "), createVNode("button", {
									type: "button",
									class: "btn btn-sm btn-danger",
									disabled: unref(form).processing || __props.candidate.is_locked,
									onClick: ($event) => confirmDelete(__props.candidate.id, doc.id, doc.document_type.name)
								}, [createVNode(unref(Trash), { size: 16 })], 8, ["disabled", "onClick"])])])) : (openBlock(), createBlock(Dropzone_default, {
									key: 1,
									"item-id": doc.id,
									onDropped: handleUpload
								}, null, 8, ["item-id"]))])])]),
								_: 2
							}, 1032, ["show"])]);
						}), 128))])) : createCommentVNode("", true),
						createVNode("div", { class: "mt-5 d-flex justify-content-between" }, [createVNode("button", {
							type: "submit",
							class: "btn btn-sm btn-primary px-5 rounded-pill"
						}, " Simpan ")])
					];
				}),
				_: 1
			}, _parent));
			if (mount.value) ssrRenderTeleport(_push, (_push) => {
				_push(ssrRenderComponent(unref(Toaster), null, null, _parent));
			}, "body", false, _parent);
			else _push(`<!---->`);
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/pages/Dashboard/Document.vue
var Document_exports = /* @__PURE__ */ __exportAll({ default: () => Document_default });
var _sfc_setup$13 = Document_vue_vue_type_script_setup_true_lang_default.setup;
Document_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Document.vue");
	return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
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
			}, _attrs))} data-v-bf0189c0><div class="form-control form-control-sm d-flex justify-content-between align-items-center cursor-pointer" style="${ssrRenderStyle({ "cursor": "pointer" })}" data-v-bf0189c0><span class="text-truncate me-2" data-v-bf0189c0>${ssrInterpolate(selected.value?.name || "Pilih Opsi")}</span><button type="button" class="btn-close" style="${ssrRenderStyle({ "font-size": "0.65rem" })}" data-v-bf0189c0></button></div>`);
			if (show.value) {
				_push(`<div class="position-absolute w-100 bg-body-tertiary border rounded-2 mt-1 z-3 shadow-sm" style="${ssrRenderStyle({
					"max-height": "185px",
					"overflow-y": "auto",
					"overflow-x": "hidden"
				})}" data-v-bf0189c0><div class="p-2" data-v-bf0189c0><!--[-->`);
				ssrRenderList(__props.options, (option, index) => {
					_push(`<div class="${ssrRenderClass([{ "mb-0": index === __props.options.length - 1 }, "form-check p-1 rounded-1 small"])}" data-v-bf0189c0><input class="form-check-input ms-0 me-2" type="radio"${ssrRenderAttr("name", "radio-group-" + __props.label)}${ssrRenderAttr("id", "radio-" + index)}${ssrRenderAttr("value", option.id)}${ssrIncludeBooleanAttr(__props.modelValue === option.id) ? " checked" : ""} data-v-bf0189c0><label class="form-check-label d-block w-100"${ssrRenderAttr("for", "radio-" + index)} data-v-bf0189c0>${ssrInterpolate(option.name)}</label></div>`);
				});
				_push(`<!--]--></div></div>`);
			} else _push(`<!---->`);
			_push(`</div>`);
		};
	}
});
//#endregion
//#region resources/js/components/Forms/Select.vue
var _sfc_setup$12 = Select_vue_vue_type_script_setup_true_lang_default.setup;
Select_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Forms/Select.vue");
	return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
var Select_default = /* @__PURE__ */ _plugin_vue_export_helper_default(Select_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-bf0189c0"]]);
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
			_push(`<form${ssrRenderAttrs(_attrs)}><div class="mb-5"><div class="mb-5"><h4 class="text-primary-emphasis border-start border-primary ps-2"> Identitas Anak </h4><div class="mb-3 row"><label class="col-sm-3 col-form-label" for="name">Nama Lengkap</label><div class="col-sm-9">`);
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
			_push(`</div></div></div><div class="mb-3"><h4 class="text-primary-emphasis text-primary-emphasis border-start border-primary ps-2"> Pendidikan Sebelumnya </h4><div class="row mb-3"><label class="col-sm-3 col-form-label" for="school-origin-name">Asal Sekolah</label><div class="col-sm-9">`);
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
			_push(`</div></div></div></div><div class="mb-5"><h4 class="text-primary-emphasis border-start border-primary ps-2"> Status Tempat Tinggal dan Alamat </h4><div class="row mb-3"><label class="col-sm-3 col-form-label" for="address">Alamat Lengkap</label><div class="col-sm-9">`);
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
var _sfc_setup$11 = PersonalData_vue_vue_type_script_setup_true_lang_default.setup;
PersonalData_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/Forms/PersonalData.vue");
	return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
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
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-5" }, _attrs))}><h4 class="text-primary-emphasis border-start border-primary ps-2"> Identitas Orang Tua </h4><div class="mb-3"><!--[-->`);
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
var _sfc_setup$10 = StudentParent_vue_vue_type_script_setup_true_lang_default.setup;
StudentParent_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/RegistrationForms/StudentParent.vue");
	return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
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
		const CANDIDATE_TYPE_LABELS = {
			new: "Siswa Baru",
			transfer: "Siswa Pindahan"
		};
		const achievementLevels = [
			"Kabupaten",
			"Provinsi",
			"Nasional",
			"Internasional"
		];
		const candidateTypeLabel = computed(() => CANDIDATE_TYPE_LABELS[props.candidate.type] ?? "Tidak Diketahui");
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
		const addAchievement = () => {
			if (!temp.value.name || !temp.value.level) return;
			form.achievements.push({ ...temp.value });
			temp.value = {
				name: "",
				level: ""
			};
		};
		const removeAchievement = (index) => {
			form.achievements.splice(index, 1);
		};
		const onSubmit = () => {
			form.put(update(props.candidate.id).url, {
				preserveScroll: true,
				onSuccess: () => {
					toast.success("Data berhasil disimpan", { style: {
						background: "var(--bs-success)",
						color: "#fff",
						border: "none",
						fontFamily: "Rubik"
					} });
				},
				onError: (errors) => {
					toast.error(errors.message, { style: {
						background: "var(--bs-danger)",
						color: "#fff",
						border: "none",
						fontFamily: "Rubik"
					} });
				}
			});
		};
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BOverlay = BOverlay;
			const _component_BTabs = BTabs;
			const _component_BTab = BTab;
			const _component_BCardText = BCardText;
			const _component_BBadge = BBadge;
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
						_push(ssrRenderComponent(unref(Toaster), { position: "top-right" }, null, _parent, _scopeId));
						_push(`<div class="card bg-body-tertiary border-0"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-4"${_scopeId}><h4 class="fw-bold mb-0"${_scopeId}>Formulir Pendaftaran</h4><span class="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill"${_scopeId}>${ssrInterpolate(candidateTypeLabel.value)}</span></div>`);
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
										_push(ssrRenderComponent(_component_BTab, { title: "KIP / Beasiswa" }, {
											default: withCtx((_, _push, _parent, _scopeId) => {
												if (_push) _push(ssrRenderComponent(_component_BCardText, { class: "py-3" }, {
													default: withCtx((_, _push, _parent, _scopeId) => {
														if (_push) {
															_push(`<div class="text-center py-5 text-secondary"${_scopeId}>`);
															_push(ssrRenderComponent(unref(Construction), {
																size: 40,
																class: "mb-3 opacity-50"
															}, null, _parent, _scopeId));
															_push(`<p class="fw-bold mb-1"${_scopeId}> Sedang Dalam Pengembangan </p><p class="small mb-0"${_scopeId}> Fitur ini akan segera tersedia. </p></div>`);
														} else return [createVNode("div", { class: "text-center py-5 text-secondary" }, [
															createVNode(unref(Construction), {
																size: 40,
																class: "mb-3 opacity-50"
															}),
															createVNode("p", { class: "fw-bold mb-1" }, " Sedang Dalam Pengembangan "),
															createVNode("p", { class: "small mb-0" }, " Fitur ini akan segera tersedia. ")
														])];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(_component_BCardText, { class: "py-3" }, {
													default: withCtx(() => [createVNode("div", { class: "text-center py-5 text-secondary" }, [
														createVNode(unref(Construction), {
															size: 40,
															class: "mb-3 opacity-50"
														}),
														createVNode("p", { class: "fw-bold mb-1" }, " Sedang Dalam Pengembangan "),
														createVNode("p", { class: "small mb-0" }, " Fitur ini akan segera tersedia. ")
													])]),
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
															if (unref(form).achievements.length) {
																_push(`<div class="list-group list-group-flush mb-4 rounded-3 border"${_scopeId}><!--[-->`);
																ssrRenderList(unref(form).achievements, (achievement, index) => {
																	_push(`<div class="list-group-item d-flex align-items-center justify-content-between gap-3 py-3"${_scopeId}><div${_scopeId}><p class="fw-bold small mb-1"${_scopeId}>${ssrInterpolate(achievement.name)}</p>`);
																	_push(ssrRenderComponent(_component_BBadge, {
																		variant: "info",
																		class: "fw-normal"
																	}, {
																		default: withCtx((_, _push, _parent, _scopeId) => {
																			if (_push) _push(`${ssrInterpolate(achievement.level)}`);
																			else return [createTextVNode(toDisplayString(achievement.level), 1)];
																		}),
																		_: 2
																	}, _parent, _scopeId));
																	_push(`</div><button type="button" class="btn btn-sm btn-outline-danger rounded-pill px-3 flex-shrink-0"${_scopeId}>`);
																	_push(ssrRenderComponent(unref(Trash), { size: 14 }, null, _parent, _scopeId));
																	_push(`</button></div>`);
																});
																_push(`<!--]--></div>`);
															} else _push(`<p class="text-secondary small text-center py-3"${_scopeId}> Belum ada prestasi yang ditambahkan. </p>`);
															_push(`<div class="card border-0 bg-body-secondary rounded-4 p-3"${_scopeId}><p class="small fw-bold mb-3 text-secondary"${_scopeId}> Tambah Prestasi </p><div class="row g-3 align-items-end"${_scopeId}><div class="col-md-5"${_scopeId}><label for="achievement-name" class="form-label small fw-bold"${_scopeId}> Nama Lomba / Prestasi </label><input id="achievement-name"${ssrRenderAttr("value", temp.value.name)} type="text" class="form-control form-control-sm rounded-3" placeholder="Contoh: Juara 1 OSN Matematika"${_scopeId}></div><div class="col-md-4"${_scopeId}><label for="achievement-level" class="form-label small fw-bold"${_scopeId}> Tingkat </label><select id="achievement-level" class="form-select form-select-sm rounded-3"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(temp.value.level) ? ssrLooseContain(temp.value.level, "") : ssrLooseEqual(temp.value.level, "")) ? " selected" : ""}${_scopeId}> -- Pilih Tingkat -- </option><!--[-->`);
															ssrRenderList(achievementLevels, (level) => {
																_push(`<option${ssrRenderAttr("value", level)}${ssrIncludeBooleanAttr(Array.isArray(temp.value.level) ? ssrLooseContain(temp.value.level, level) : ssrLooseEqual(temp.value.level, level)) ? " selected" : ""}${_scopeId}>${ssrInterpolate(level)}</option>`);
															});
															_push(`<!--]--></select></div><div class="col-md-3"${_scopeId}><button type="button" class="btn btn-sm btn-primary w-100 rounded-pill fw-bold"${ssrIncludeBooleanAttr(!temp.value.name || !temp.value.level) ? " disabled" : ""}${_scopeId}> + Tambah </button></div></div></div>`);
														} else return [unref(form).achievements.length ? (openBlock(), createBlock("div", {
															key: 0,
															class: "list-group list-group-flush mb-4 rounded-3 border"
														}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).achievements, (achievement, index) => {
															return openBlock(), createBlock("div", {
																key: index,
																class: "list-group-item d-flex align-items-center justify-content-between gap-3 py-3"
															}, [createVNode("div", null, [createVNode("p", { class: "fw-bold small mb-1" }, toDisplayString(achievement.name), 1), createVNode(_component_BBadge, {
																variant: "info",
																class: "fw-normal"
															}, {
																default: withCtx(() => [createTextVNode(toDisplayString(achievement.level), 1)]),
																_: 2
															}, 1024)]), createVNode("button", {
																type: "button",
																class: "btn btn-sm btn-outline-danger rounded-pill px-3 flex-shrink-0",
																onClick: ($event) => removeAchievement(index)
															}, [createVNode(unref(Trash), { size: 14 })], 8, ["onClick"])]);
														}), 128))])) : (openBlock(), createBlock("p", {
															key: 1,
															class: "text-secondary small text-center py-3"
														}, " Belum ada prestasi yang ditambahkan. ")), createVNode("div", { class: "card border-0 bg-body-secondary rounded-4 p-3" }, [createVNode("p", { class: "small fw-bold mb-3 text-secondary" }, " Tambah Prestasi "), createVNode("div", { class: "row g-3 align-items-end" }, [
															createVNode("div", { class: "col-md-5" }, [createVNode("label", {
																for: "achievement-name",
																class: "form-label small fw-bold"
															}, " Nama Lomba / Prestasi "), withDirectives(createVNode("input", {
																id: "achievement-name",
																"onUpdate:modelValue": ($event) => temp.value.name = $event,
																type: "text",
																class: "form-control form-control-sm rounded-3",
																placeholder: "Contoh: Juara 1 OSN Matematika"
															}, null, 8, ["onUpdate:modelValue"]), [[vModelText, temp.value.name]])]),
															createVNode("div", { class: "col-md-4" }, [createVNode("label", {
																for: "achievement-level",
																class: "form-label small fw-bold"
															}, " Tingkat "), withDirectives(createVNode("select", {
																id: "achievement-level",
																"onUpdate:modelValue": ($event) => temp.value.level = $event,
																class: "form-select form-select-sm rounded-3"
															}, [createVNode("option", { value: "" }, " -- Pilih Tingkat -- "), (openBlock(), createBlock(Fragment, null, renderList(achievementLevels, (level) => {
																return createVNode("option", {
																	key: level,
																	value: level
																}, toDisplayString(level), 9, ["value"]);
															}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, temp.value.level]])]),
															createVNode("div", { class: "col-md-3" }, [createVNode("button", {
																type: "button",
																class: "btn btn-sm btn-primary w-100 rounded-pill fw-bold",
																disabled: !temp.value.name || !temp.value.level,
																onClick: addAchievement
															}, " + Tambah ", 8, ["disabled"])])
														])])];
													}),
													_: 1
												}, _parent, _scopeId));
												else return [createVNode(_component_BCardText, { class: "py-3" }, {
													default: withCtx(() => [unref(form).achievements.length ? (openBlock(), createBlock("div", {
														key: 0,
														class: "list-group list-group-flush mb-4 rounded-3 border"
													}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).achievements, (achievement, index) => {
														return openBlock(), createBlock("div", {
															key: index,
															class: "list-group-item d-flex align-items-center justify-content-between gap-3 py-3"
														}, [createVNode("div", null, [createVNode("p", { class: "fw-bold small mb-1" }, toDisplayString(achievement.name), 1), createVNode(_component_BBadge, {
															variant: "info",
															class: "fw-normal"
														}, {
															default: withCtx(() => [createTextVNode(toDisplayString(achievement.level), 1)]),
															_: 2
														}, 1024)]), createVNode("button", {
															type: "button",
															class: "btn btn-sm btn-outline-danger rounded-pill px-3 flex-shrink-0",
															onClick: ($event) => removeAchievement(index)
														}, [createVNode(unref(Trash), { size: 14 })], 8, ["onClick"])]);
													}), 128))])) : (openBlock(), createBlock("p", {
														key: 1,
														class: "text-secondary small text-center py-3"
													}, " Belum ada prestasi yang ditambahkan. ")), createVNode("div", { class: "card border-0 bg-body-secondary rounded-4 p-3" }, [createVNode("p", { class: "small fw-bold mb-3 text-secondary" }, " Tambah Prestasi "), createVNode("div", { class: "row g-3 align-items-end" }, [
														createVNode("div", { class: "col-md-5" }, [createVNode("label", {
															for: "achievement-name",
															class: "form-label small fw-bold"
														}, " Nama Lomba / Prestasi "), withDirectives(createVNode("input", {
															id: "achievement-name",
															"onUpdate:modelValue": ($event) => temp.value.name = $event,
															type: "text",
															class: "form-control form-control-sm rounded-3",
															placeholder: "Contoh: Juara 1 OSN Matematika"
														}, null, 8, ["onUpdate:modelValue"]), [[vModelText, temp.value.name]])]),
														createVNode("div", { class: "col-md-4" }, [createVNode("label", {
															for: "achievement-level",
															class: "form-label small fw-bold"
														}, " Tingkat "), withDirectives(createVNode("select", {
															id: "achievement-level",
															"onUpdate:modelValue": ($event) => temp.value.level = $event,
															class: "form-select form-select-sm rounded-3"
														}, [createVNode("option", { value: "" }, " -- Pilih Tingkat -- "), (openBlock(), createBlock(Fragment, null, renderList(achievementLevels, (level) => {
															return createVNode("option", {
																key: level,
																value: level
															}, toDisplayString(level), 9, ["value"]);
														}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, temp.value.level]])]),
														createVNode("div", { class: "col-md-3" }, [createVNode("button", {
															type: "button",
															class: "btn btn-sm btn-primary w-100 rounded-pill fw-bold",
															disabled: !temp.value.name || !temp.value.level,
															onClick: addAchievement
														}, " + Tambah ", 8, ["disabled"])])
													])])]),
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
										createVNode(_component_BTab, { title: "KIP / Beasiswa" }, {
											default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
												default: withCtx(() => [createVNode("div", { class: "text-center py-5 text-secondary" }, [
													createVNode(unref(Construction), {
														size: 40,
														class: "mb-3 opacity-50"
													}),
													createVNode("p", { class: "fw-bold mb-1" }, " Sedang Dalam Pengembangan "),
													createVNode("p", { class: "small mb-0" }, " Fitur ini akan segera tersedia. ")
												])]),
												_: 1
											})]),
											_: 1
										}),
										createVNode(_component_BTab, { title: "Prestasi" }, {
											default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
												default: withCtx(() => [unref(form).achievements.length ? (openBlock(), createBlock("div", {
													key: 0,
													class: "list-group list-group-flush mb-4 rounded-3 border"
												}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).achievements, (achievement, index) => {
													return openBlock(), createBlock("div", {
														key: index,
														class: "list-group-item d-flex align-items-center justify-content-between gap-3 py-3"
													}, [createVNode("div", null, [createVNode("p", { class: "fw-bold small mb-1" }, toDisplayString(achievement.name), 1), createVNode(_component_BBadge, {
														variant: "info",
														class: "fw-normal"
													}, {
														default: withCtx(() => [createTextVNode(toDisplayString(achievement.level), 1)]),
														_: 2
													}, 1024)]), createVNode("button", {
														type: "button",
														class: "btn btn-sm btn-outline-danger rounded-pill px-3 flex-shrink-0",
														onClick: ($event) => removeAchievement(index)
													}, [createVNode(unref(Trash), { size: 14 })], 8, ["onClick"])]);
												}), 128))])) : (openBlock(), createBlock("p", {
													key: 1,
													class: "text-secondary small text-center py-3"
												}, " Belum ada prestasi yang ditambahkan. ")), createVNode("div", { class: "card border-0 bg-body-secondary rounded-4 p-3" }, [createVNode("p", { class: "small fw-bold mb-3 text-secondary" }, " Tambah Prestasi "), createVNode("div", { class: "row g-3 align-items-end" }, [
													createVNode("div", { class: "col-md-5" }, [createVNode("label", {
														for: "achievement-name",
														class: "form-label small fw-bold"
													}, " Nama Lomba / Prestasi "), withDirectives(createVNode("input", {
														id: "achievement-name",
														"onUpdate:modelValue": ($event) => temp.value.name = $event,
														type: "text",
														class: "form-control form-control-sm rounded-3",
														placeholder: "Contoh: Juara 1 OSN Matematika"
													}, null, 8, ["onUpdate:modelValue"]), [[vModelText, temp.value.name]])]),
													createVNode("div", { class: "col-md-4" }, [createVNode("label", {
														for: "achievement-level",
														class: "form-label small fw-bold"
													}, " Tingkat "), withDirectives(createVNode("select", {
														id: "achievement-level",
														"onUpdate:modelValue": ($event) => temp.value.level = $event,
														class: "form-select form-select-sm rounded-3"
													}, [createVNode("option", { value: "" }, " -- Pilih Tingkat -- "), (openBlock(), createBlock(Fragment, null, renderList(achievementLevels, (level) => {
														return createVNode("option", {
															key: level,
															value: level
														}, toDisplayString(level), 9, ["value"]);
													}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, temp.value.level]])]),
													createVNode("div", { class: "col-md-3" }, [createVNode("button", {
														type: "button",
														class: "btn btn-sm btn-primary w-100 rounded-pill fw-bold",
														disabled: !temp.value.name || !temp.value.level,
														onClick: addAchievement
													}, " + Tambah ", 8, ["disabled"])])
												])])]),
												_: 1
											})]),
											_: 1
										})
									];
								}),
								_: 1
							}, _parent, _scopeId));
							_push(`<div class="mt-5 d-flex justify-content-between"${_scopeId}><button type="submit" class="btn btn-sm btn-primary px-5 rounded-pill"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}${_scopeId}> Simpan </button></div></form>`);
						} else _push(`<!---->`);
						_push(`</div></div>`);
					} else return [createVNode(unref(Toaster), { position: "top-right" }), createVNode("div", { class: "card bg-body-tertiary border-0" }, [createVNode("div", { class: "card-body" }, [createVNode("div", { class: "d-flex justify-content-between align-items-center mb-4" }, [createVNode("h4", { class: "fw-bold mb-0" }, "Formulir Pendaftaran"), createVNode("span", { class: "badge bg-primary-subtle text-primary px-3 py-2 rounded-pill" }, toDisplayString(candidateTypeLabel.value), 1)]), mount.value ? (openBlock(), createBlock("form", {
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
							createVNode(_component_BTab, { title: "KIP / Beasiswa" }, {
								default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
									default: withCtx(() => [createVNode("div", { class: "text-center py-5 text-secondary" }, [
										createVNode(unref(Construction), {
											size: 40,
											class: "mb-3 opacity-50"
										}),
										createVNode("p", { class: "fw-bold mb-1" }, " Sedang Dalam Pengembangan "),
										createVNode("p", { class: "small mb-0" }, " Fitur ini akan segera tersedia. ")
									])]),
									_: 1
								})]),
								_: 1
							}),
							createVNode(_component_BTab, { title: "Prestasi" }, {
								default: withCtx(() => [createVNode(_component_BCardText, { class: "py-3" }, {
									default: withCtx(() => [unref(form).achievements.length ? (openBlock(), createBlock("div", {
										key: 0,
										class: "list-group list-group-flush mb-4 rounded-3 border"
									}, [(openBlock(true), createBlock(Fragment, null, renderList(unref(form).achievements, (achievement, index) => {
										return openBlock(), createBlock("div", {
											key: index,
											class: "list-group-item d-flex align-items-center justify-content-between gap-3 py-3"
										}, [createVNode("div", null, [createVNode("p", { class: "fw-bold small mb-1" }, toDisplayString(achievement.name), 1), createVNode(_component_BBadge, {
											variant: "info",
											class: "fw-normal"
										}, {
											default: withCtx(() => [createTextVNode(toDisplayString(achievement.level), 1)]),
											_: 2
										}, 1024)]), createVNode("button", {
											type: "button",
											class: "btn btn-sm btn-outline-danger rounded-pill px-3 flex-shrink-0",
											onClick: ($event) => removeAchievement(index)
										}, [createVNode(unref(Trash), { size: 14 })], 8, ["onClick"])]);
									}), 128))])) : (openBlock(), createBlock("p", {
										key: 1,
										class: "text-secondary small text-center py-3"
									}, " Belum ada prestasi yang ditambahkan. ")), createVNode("div", { class: "card border-0 bg-body-secondary rounded-4 p-3" }, [createVNode("p", { class: "small fw-bold mb-3 text-secondary" }, " Tambah Prestasi "), createVNode("div", { class: "row g-3 align-items-end" }, [
										createVNode("div", { class: "col-md-5" }, [createVNode("label", {
											for: "achievement-name",
											class: "form-label small fw-bold"
										}, " Nama Lomba / Prestasi "), withDirectives(createVNode("input", {
											id: "achievement-name",
											"onUpdate:modelValue": ($event) => temp.value.name = $event,
											type: "text",
											class: "form-control form-control-sm rounded-3",
											placeholder: "Contoh: Juara 1 OSN Matematika"
										}, null, 8, ["onUpdate:modelValue"]), [[vModelText, temp.value.name]])]),
										createVNode("div", { class: "col-md-4" }, [createVNode("label", {
											for: "achievement-level",
											class: "form-label small fw-bold"
										}, " Tingkat "), withDirectives(createVNode("select", {
											id: "achievement-level",
											"onUpdate:modelValue": ($event) => temp.value.level = $event,
											class: "form-select form-select-sm rounded-3"
										}, [createVNode("option", { value: "" }, " -- Pilih Tingkat -- "), (openBlock(), createBlock(Fragment, null, renderList(achievementLevels, (level) => {
											return createVNode("option", {
												key: level,
												value: level
											}, toDisplayString(level), 9, ["value"]);
										}), 64))], 8, ["onUpdate:modelValue"]), [[vModelSelect, temp.value.level]])]),
										createVNode("div", { class: "col-md-3" }, [createVNode("button", {
											type: "button",
											class: "btn btn-sm btn-primary w-100 rounded-pill fw-bold",
											disabled: !temp.value.name || !temp.value.level,
											onClick: addAchievement
										}, " + Tambah ", 8, ["disabled"])])
									])])]),
									_: 1
								})]),
								_: 1
							})
						]),
						_: 1
					}), createVNode("div", { class: "mt-5 d-flex justify-content-between" }, [createVNode("button", {
						type: "submit",
						class: "btn btn-sm btn-primary px-5 rounded-pill",
						disabled: unref(form).processing
					}, " Simpan ", 8, ["disabled"])])], 32)) : createCommentVNode("", true)])])];
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
var _sfc_setup$9 = Form_vue_vue_type_script_setup_true_lang_default.setup;
Form_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Form.vue");
	return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
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
			_push(` atau Hubungi Kami. </p><div class="mt-5 d-flex justify-content-between"><button type="button" class="btn btn-sm btn-primary px-5 rounded-pill"> Lanjutkan </button></div></div></div></div>`);
		};
	}
});
//#endregion
//#region resources/js/pages/Dashboard/Guide.vue
var Guide_exports = /* @__PURE__ */ __exportAll({ default: () => Guide_default });
var _sfc_setup$8 = Guide_vue_vue_type_script_setup_true_lang_default.setup;
Guide_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/pages/Dashboard/Guide.vue");
	return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Guide_default = Guide_vue_vue_type_script_setup_true_lang_default;
//#endregion
//#region resources/js/components/ui/DayJS.vue?vue&type=script&setup=true&lang.ts
var DayJS_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	name: "DayJS",
	__name: "DayJS",
	__ssrInlineRender: true,
	props: {
		date: {},
		format: {},
		relative: { type: Boolean },
		relativeType: {},
		from: {},
		to: {}
	},
	setup(__props) {
		const props = __props;
		dayjs.locale("id");
		if (props.relative) dayjs.extend(relativeTime);
		const relativeRender = () => {
			switch (props.relativeType) {
				case "fromNow": return dayjs(props.date).fromNow();
				case "from": return dayjs(props.date).from(props.from);
				case "toNow": return dayjs(props.date).toNow();
				case "to": return dayjs(props.date).to(props.to);
				default: return dayjs(props.date).format(props.format);
			}
		};
		return (_ctx, _push, _parent, _attrs) => {
			if (__props.relative && __props.relativeType) _push(`<!--[-->${ssrInterpolate(relativeRender().charAt(0).toUpperCase() + relativeRender().slice(1))}<!--]-->`);
			else _push(`<!--[-->${ssrInterpolate(unref(dayjs)(props.date).format(props.format))}<!--]-->`);
		};
	}
});
//#endregion
//#region resources/js/components/ui/DayJS.vue
var _sfc_setup$7 = DayJS_vue_vue_type_script_setup_true_lang_default.setup;
DayJS_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/components/ui/DayJS.vue");
	return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var DayJS_default = DayJS_vue_vue_type_script_setup_true_lang_default;
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
				},
				onError: (errors) => {
					toast.error(errors.message, {
						style: {
							background: "var(--bs-danger)",
							color: "#fff",
							border: "none",
							fontFamily: "Rubik"
						},
						position: "top-right"
					});
				},
				onFinish: () => {
					modal.value = false;
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
									fontFamily: "Rubik"
								},
								position: "top-right"
							});
						},
						onError: (errors) => {
							toast.error(errors.message, {
								style: {
									background: "var(--bs-danger)",
									color: "#fff",
									border: "none",
									fontFamily: "Rubik"
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
			_push(`<div class="container py-5"><div class="row justify-content-between align-items-center mb-5"><div class="col-lg-6"><h2 class="fw-bold mb-1">Dashboard Orang Tua</h2><p class="text-muted m-0"> Kelola pendaftaran anak-anak Anda di sini. </p></div><div class="col-lg-6"><button class="btn btn-primary rounded-pill d-flex align-items-center ms-0 ms-lg-auto"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}>`);
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
							_push(`<div class="col-md-6 col-lg-4" style="${ssrRenderStyle({ "--animate-duration": "0.3s" })}"${_scopeId}><div class="${ssrRenderClass([{ "bg-body-tertiary": candidate.is_locked }, "card card-hover border-0 shadow-sm rounded-4 overflow-hidden h-100 overflow-hidden"])}"${_scopeId}>`);
							if (candidate.is_locked) {
								_push(`<div class="position-absolute top-0 end-0 p-3 opacity-25" style="${ssrRenderStyle({
									"transform": "translate(20%, -20%)",
									"z-index": "0"
								})}"${_scopeId}>`);
								_push(ssrRenderComponent(unref(Clock), {
									size: 200,
									class: "text-warning"
								}, null, _parent, _scopeId));
								_push(`</div>`);
							} else _push(`<!---->`);
							_push(`<div class="card-body position-relative"${_scopeId}><div class="d-flex justify-content-between align-items-start mb-3"${_scopeId}><div class="bg-primary-subtle rounded-4 d-flex align-items-center justify-content-center" style="${ssrRenderStyle({
								"width": "60px",
								"height": "60px"
							})}"${_scopeId}>`);
							if (candidate.type === "transfer") _push(ssrRenderComponent(unref(ArrowLeftRight), { class: "text-primary" }, null, _parent, _scopeId));
							else _push(`<!---->`);
							if (candidate.type === "new") _push(ssrRenderComponent(unref(UserPlus), { class: "text-primary" }, null, _parent, _scopeId));
							else _push(`<!---->`);
							_push(`</div>`);
							if (candidate.is_locked) _push(`<span class="badge rounded-pill px-3 py-2 bg-warning-subtle text-warning"${_scopeId}> PENINJAUAN </span>`);
							else _push(`<span class="badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary"${_scopeId}> DRAFT </span>`);
							_push(`</div><h5 class="${ssrRenderClass([{ "fst-italic opacity-50": !candidate.name }, "fw-bold mb-1"])}"${_scopeId}>${ssrInterpolate(candidate.name || "Nama Belum Diisi")}</h5><p class="small text-secondary mb-3"${_scopeId}> Jenis Pendaftaran: `);
							if (!candidate.type) _push(`<!--[-->Belum Dipilih<!--]-->`);
							else _push(`<span class="fw-bold"${_scopeId}>${ssrInterpolate(candidate.type === "new" ? "Siswa Baru" : "Siswa Pindahan")}</span>`);
							_push(`</p><div class="mb-4"${_scopeId}><div class="d-flex justify-content-between mb-1"${_scopeId}><span class="small text-secondary"${_scopeId}>Progress</span><span class="small fw-bold"${_scopeId}>${ssrInterpolate(candidate.snapshot.progress)}%</span></div><div class="progress" style="${ssrRenderStyle({ "height": "6px" })}"${_scopeId}><div class="progress-bar" style="${ssrRenderStyle({
								"background-color": `hsl(${candidate.snapshot.progress * 1.2}, 60%, 50%)`,
								width: candidate.snapshot.progress + "%"
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
							_push(`</button></div><small class="text-secondary text-end"${_scopeId}><span class="fw-bold small"${_scopeId}> Update Terakhir: </span><br${_scopeId}>`);
							_push(ssrRenderComponent(DayJS_default, {
								date: candidate.updated_at,
								relative: true,
								"relative-type": "fromNow"
							}, null, _parent, _scopeId));
							_push(`</small></div></div></div></div>`);
						});
						_push(`<!--]--></div>`);
					} else _push(`<div class="alert alert-warning"${_scopeId}> Belum ada pendaftaran. </div>`);
					else return [__props.candidates.data.length ? (openBlock(), createBlock("div", {
						key: 0,
						class: "row g-4"
					}, [createVNode(TransitionGroup, { name: "fadeLeft" }, {
						default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList(__props.candidates.data, (candidate) => {
							return openBlock(), createBlock("div", {
								class: "col-md-6 col-lg-4",
								key: candidate.id,
								style: { "--animate-duration": "0.3s" }
							}, [createVNode("div", { class: ["card card-hover border-0 shadow-sm rounded-4 overflow-hidden h-100 overflow-hidden", { "bg-body-tertiary": candidate.is_locked }] }, [candidate.is_locked ? (openBlock(), createBlock("div", {
								key: 0,
								class: "position-absolute top-0 end-0 p-3 opacity-25",
								style: {
									"transform": "translate(20%, -20%)",
									"z-index": "0"
								}
							}, [createVNode(unref(Clock), {
								size: 200,
								class: "text-warning"
							})])) : createCommentVNode("", true), createVNode("div", { class: "card-body position-relative" }, [
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
								})) : createCommentVNode("", true)]), candidate.is_locked ? (openBlock(), createBlock("span", {
									key: 0,
									class: "badge rounded-pill px-3 py-2 bg-warning-subtle text-warning"
								}, " PENINJAUAN ")) : (openBlock(), createBlock("span", {
									key: 1,
									class: "badge rounded-pill px-3 py-2 bg-secondary-subtle text-secondary"
								}, " DRAFT "))]),
								createVNode("h5", { class: ["fw-bold mb-1", { "fst-italic opacity-50": !candidate.name }] }, toDisplayString(candidate.name || "Nama Belum Diisi"), 3),
								createVNode("p", { class: "small text-secondary mb-3" }, [createTextVNode(" Jenis Pendaftaran: "), !candidate.type ? (openBlock(), createBlock(Fragment, { key: 0 }, [createTextVNode("Belum Dipilih")], 64)) : (openBlock(), createBlock("span", {
									key: 1,
									class: "fw-bold"
								}, toDisplayString(candidate.type === "new" ? "Siswa Baru" : "Siswa Pindahan"), 1))]),
								createVNode("div", { class: "mb-4" }, [createVNode("div", { class: "d-flex justify-content-between mb-1" }, [createVNode("span", { class: "small text-secondary" }, "Progress"), createVNode("span", { class: "small fw-bold" }, toDisplayString(candidate.snapshot.progress) + "%", 1)]), createVNode("div", {
									class: "progress",
									style: { "height": "6px" }
								}, [createVNode("div", {
									class: "progress-bar",
									style: {
										"background-color": `hsl(${candidate.snapshot.progress * 1.2}, 60%, 50%)`,
										width: candidate.snapshot.progress + "%"
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
								}, [createVNode(unref(Trash), { size: 18 })], 8, ["disabled", "onClick"])]), createVNode("small", { class: "text-secondary text-end" }, [
									createVNode("span", { class: "fw-bold small" }, " Update Terakhir: "),
									createVNode("br"),
									createVNode(DayJS_default, {
										date: candidate.updated_at,
										relative: true,
										"relative-type": "fromNow"
									}, null, 8, ["date"])
								])])
							])], 2)]);
						}), 128))]),
						_: 1
					})])) : (openBlock(), createBlock("div", {
						key: 1,
						class: "alert alert-warning"
					}, " Belum ada pendaftaran. "))];
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
					scrollable: "",
					"ok-disabled": unref(form).type === null
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) {
							_push(`<div class="row g-4"${_scopeId}><div class="col-md-12"${_scopeId}><div class="${ssrRenderClass([{
								"bg-primary-subtle border-primary": unref(form).type === "new",
								"border-primary-subtle": unref(form).type !== "new"
							}, "card h-100 border-2 cursor-pointer rounded-4 p-4 shadow-sm"])}"${_scopeId}><div class="d-flex"${_scopeId}>`);
							_push(ssrRenderComponent(unref(UserPlus), {
								size: 48,
								class: "text-primary me-3"
							}, null, _parent, _scopeId));
							_push(`<div class="me-auto"${_scopeId}><h5 class="fw-bold text-primary-emphasis"${_scopeId}> Siswa Baru </h5><p class="small text-muted m-0"${_scopeId}> Lulusan SMP/MTS yang akan masuk ke kelas X. </p></div></div></div></div><div class="col-md-12"${_scopeId}><div class="${ssrRenderClass([{
								"bg-primary-subtle border-primary": unref(form).type === "transfer",
								"border-primary-subtle": unref(form).type !== "transfer"
							}, "card h-100 border-2 cursor-pointer rounded-4 p-4 shadow-sm"])}"${_scopeId}><div class="d-flex"${_scopeId}>`);
							_push(ssrRenderComponent(unref(ArrowLeftRight), {
								size: 48,
								class: "text-primary me-3"
							}, null, _parent, _scopeId));
							_push(`<div class="me-auto"${_scopeId}><h5 class="fw-bold text-primary-emphasis"${_scopeId}> Siswa Pindahan </h5><p class="small text-muted m-0"${_scopeId}> Siswa dari SMA lain yang ingin pindah ke sekolah kami. </p></div></div></div></div></div>`);
						} else return [createVNode("div", { class: "row g-4" }, [createVNode("div", { class: "col-md-12" }, [createVNode("div", {
							class: ["card h-100 border-2 cursor-pointer rounded-4 p-4 shadow-sm", {
								"bg-primary-subtle border-primary": unref(form).type === "new",
								"border-primary-subtle": unref(form).type !== "new"
							}],
							onClick: ($event) => choose("new")
						}, [createVNode("div", { class: "d-flex" }, [createVNode(unref(UserPlus), {
							size: 48,
							class: "text-primary me-3"
						}), createVNode("div", { class: "me-auto" }, [createVNode("h5", { class: "fw-bold text-primary-emphasis" }, " Siswa Baru "), createVNode("p", { class: "small text-muted m-0" }, " Lulusan SMP/MTS yang akan masuk ke kelas X. ")])])], 10, ["onClick"])]), createVNode("div", { class: "col-md-12" }, [createVNode("div", {
							class: ["card h-100 border-2 cursor-pointer rounded-4 p-4 shadow-sm", {
								"bg-primary-subtle border-primary": unref(form).type === "transfer",
								"border-primary-subtle": unref(form).type !== "transfer"
							}],
							onClick: ($event) => choose("transfer")
						}, [createVNode("div", { class: "d-flex" }, [createVNode(unref(ArrowLeftRight), {
							size: 48,
							class: "text-primary me-3"
						}), createVNode("div", { class: "me-auto" }, [createVNode("h5", { class: "fw-bold text-primary-emphasis" }, " Siswa Pindahan "), createVNode("p", { class: "small text-muted m-0" }, " Siswa dari SMA lain yang ingin pindah ke sekolah kami. ")])])], 10, ["onClick"])])])];
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
	props: {
		meta: {},
		candidate: {}
	},
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_BProgress = BProgress;
			_push(`<!--[-->`);
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
			_push(`<div class="card bg-body-tertiary border-0"><div class="p-4" style="${ssrRenderStyle({
				"opacity": "1",
				"transform": "none"
			})}"><div class="d-flex justify-content-between align-items-center mb-4"><h4 class="fw-bold mb-0">${ssrInterpolate(__props.meta.title)}</h4><span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2 fw-bold small">ID: 2026-SMAU-001</span></div><div class="row g-4"><div class="col-lg-8"><div class="card shadow-sm rounded-4 border-0"><div class="card-header bg-primary-subtle"><div class="d-flex align-items-center"><div class="bg-white bg-opacity-25 p-3 rounded-4 me-4">`);
			_push(ssrRenderComponent(unref(Clock), {
				size: 32,
				class: "text-primary"
			}, null, _parent));
			_push(`</div><div><h5 class="fw-bold mb-0 text-primary-emphasis"> Berkas Sedang Ditinjau </h5><span class="small opacity-75 fw-light">Update terakhir: 02 April 2026</span></div></div></div><div class="card-body"><p class="small mb-4"> Tim administrasi kami sedang melakukan verifikasi terhadap data dan dokumen yang Anda unggah. Proses ini biasanya memakan waktu 1-3 hari kerja. </p><div class="timeline"><!--[-->`);
			ssrRenderList(__props.candidate.reviews, (review) => {
				_push(`<div class="timeline-item timeline-item-warning"><span class="timeline-date">`);
				_push(ssrRenderComponent(DayJS_default, {
					date: review.pivot.created_at,
					format: "dddd, DD MMMM YYYY HH:mm"
				}, null, _parent));
				_push(`</span><div class="timeline-content"><h6 class="fw-bold mb-0">${ssrInterpolate(review.name)}</h6><p class="small text-muted mb-0"> Catatan: ${ssrInterpolate(review.pivot.note === null ? "-" : review.pivot.note)}</p></div></div>`);
			});
			_push(`<!--]--></div></div></div></div><div class="col-lg-4"><div class="card border-0 shadow-sm rounded-4 mb-4"><div class="card-body p-4"><h6 class="fw-bold mb-3 d-flex align-items-center">`);
			_push(ssrRenderComponent(unref(CircleQuestionMark), {
				size: 18,
				class: "text-primary me-2"
			}, null, _parent));
			_push(` Butuh Bantuan? </h6><p class="small text-muted mb-4"> Jika Anda memiliki pertanyaan mengenai status pendaftaran, silahkan hubungi panitia PPDB kami. </p><div class="d-grid gap-2"><button class="btn btn-white border rounded-pill small fw-bold shadow-sm d-flex align-items-center justify-content-center">`);
			_push(ssrRenderComponent(unref(Phone), {
				size: 18,
				class: "text-success me-2"
			}, null, _parent));
			_push(` WhatsApp CS </button></div></div></div><div class="card border-0 shadow-sm rounded-5 p-4"><h6 class="fw-bold mb-3">Ringkasan Data</h6><div class="mb-3"><small class="text-secondary d-block mb-1"> Nama Lengkap </small><span class="fw-bold small">${ssrInterpolate(__props.candidate.name)}</span></div><div class="mb-3"><small class="text-secondary d-block mb-1"> Tipe Pendaftaran </small>`);
			if (__props.candidate.type) _push(`<span class="fw-bold small"> Siswa Baru </span>`);
			else _push(`<span class="fw-bold small"> Pindahan </span>`);
			_push(`</div><div class="mb-0"><small class="text-secondary d-block mb-1"> Kelengkapan Berkas </small>`);
			_push(ssrRenderComponent(_component_BProgress, {
				value: __props.candidate.snapshot.progress,
				"show-progress": ""
			}, null, _parent));
			_push(`</div></div></div></div></div></div><!--]-->`);
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
		const form = useForm({ agree: false });
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
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
			_push(`</div><h4 class="fw-bold mb-3">Konfirmasi &amp; Kirim Berkas</h4><p class="text-secondary mb-4 mx-auto" style="${ssrRenderStyle({ "max-width": "500px" })}"> Pastikan semua data yang Anda masukkan sudah benar. Setelah dikirim, data akan dikunci untuk proses peninjauan oleh panitia PPDB. </p><div class="card border-0 rounded-4 mb-4 text-start bg-body-tertiary shadow-sm"><div class="card-body"><h6 class="fw-bold mb-3">Ringkasan Pendaftaran:</h6><div class="row g-2 small"><div class="col-6 text-secondary"> Nama Calon Siswa: </div><div class="col-6 fw-bold">${ssrInterpolate(__props.candidate.name)}</div><div class="col-6 text-secondary"> Tipe Pendaftaran: </div><div class="col-6 fw-bold">${ssrInterpolate(__props.candidate.type === "new" ? "Siswa Baru" : "Siswa Pindahan")}</div><div class="col-6 text-secondary"> Status Kelengkapan: </div><div class="col-6 fw-bold text-success">${ssrInterpolate(__props.candidate.snapshot.progress)}</div></div></div></div><form><div class="form-check d-inline-block text-start mb-4"><input class="${ssrRenderClass([{ "is-invalid": unref(form).errors.agree }, "form-check-input"])}" id="agree" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).agree) ? ssrLooseContain(unref(form).agree, null) : unref(form).agree) ? " checked" : ""}><label class="form-check-label small" for="agree"> Saya menyatakan bahwa data yang saya masukkan adalah benar dan dapat dipertanggungjawabkan. </label>`);
			if (unref(form).errors.agree) _push(`<div class="invalid-feedback"> Anda harus menyetujui sebelum mengirimkan. </div>`);
			else _push(`<!---->`);
			_push(`</div><div class="d-flex justify-content-center gap-3"><button class="btn btn-outline-secondary px-4 rounded-pill"> Kembali </button><button type="submit" class="btn btn-primary px-5 rounded-pill"${ssrIncludeBooleanAttr(!unref(form).agree || unref(form).processing) ? " disabled" : ""}> Kirim Sekarang </button></div></form></div></div></div><!--]-->`);
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
	props: { seo: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.seo.title)}</title><meta name="description"${ssrRenderAttr("content", __props.seo.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.seo.title), 1), createVNode("meta", {
						name: "description",
						content: __props.seo.description
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
//#region resources/img/internet-of-things.png
var internet_of_things_default = "/build/assets/internet-of-things-DFpkiZzo.png";
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
			_push(`</div><div class="mt-5 d-flex align-items-center gap-4"><div class="d-flex -space-x-2"><img class="rounded-circle border border-2 border-white shadow-sm" width="40" alt="User" src="https://i.pravatar.cc/150?u=1" style="${ssrRenderStyle({ "margin-left": "0px" })}"><img class="rounded-circle border border-2 border-white shadow-sm" width="40" alt="User" src="https://i.pravatar.cc/150?u=2" style="${ssrRenderStyle({ "margin-left": "-10px" })}"><img class="rounded-circle border border-2 border-white shadow-sm" width="40" alt="User" src="https://i.pravatar.cc/150?u=3" style="${ssrRenderStyle({ "margin-left": "-10px" })}"><img class="rounded-circle border border-2 border-white shadow-sm" width="40" alt="User" src="https://i.pravatar.cc/150?u=4" style="${ssrRenderStyle({ "margin-left": "-10px" })}"></div><p class="small mb-0 text-secondary fw-bold"> Bergabung dengan 1,200+ calon siswa lainnya </p></div></div></div><div class="col-lg-6"><div class="position-relative" style="${ssrRenderStyle({
				"opacity": "1",
				"transform": "none"
			})}"><img class="img-fluid rounded-5 shadow-2xl" alt="School" src="https://eduport.webestica.com/assets/images/element/07.png"><div class="position-absolute top-100 start-0 translate-middle-y bg-light-subtle p-4 rounded-4 shadow-lg d-none d-md-block" style="${ssrRenderStyle({ "margin-left": "-30px" })}"><div class="d-flex align-items-center gap-3"><div class="bg-success-subtle p-2 rounded-circle">`);
			_push(ssrRenderComponent(unref(CircleCheckBig), { class: "text-success" }, null, _parent));
			_push(`</div><div><h6 class="fw-bold mb-0">Akreditasi A</h6><small class="text-secondary"> Memenuhi standar nasional </small></div></div></div></div></div></div></div></section>`);
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
	props: { seo: {} },
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<!--[-->`);
			_push(ssrRenderComponent(unref(Head), null, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<title${_scopeId}>${ssrInterpolate(__props.seo.title)}</title><meta name="description"${ssrRenderAttr("content", __props.seo.description)}${_scopeId}>`);
					else return [createVNode("title", null, toDisplayString(__props.seo.title), 1), createVNode("meta", {
						name: "description",
						content: __props.seo.description
					}, null, 8, ["content"])];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(Hero_default, null, null, _parent));
			_push(`<div class="bg-body-tertiary"><section class="py-5"><div class="container"><div class="row g-4"><div class="col-lg-3"><h2 class="fw-bold text-primary-emphasis mb-2"> Informasi Kuota Pendaftaran </h2><p class="text-muted small"> Pantau ketersediaan slot pendaftaran secara real-time untuk setiap jenjang kelas. </p></div><!--[-->`);
			ssrRenderList(3, (i) => {
				_push(`<div class="col-lg-3"><div class="card card-body card-hover border-0 shadow rounded-4"><div class="d-flex gap-3"><div class="col-lg-3"><img${ssrRenderAttr("src", internet_of_things_default)} class="img-fluid"></div><div class="col-lg-9"><h5 class="m-0 text-primary-subtle"> Fasilitas </h5><p class="text-muted small m-0"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p></div></div></div></div>`);
			});
			_push(`<!--]--></div></div></section></div><section class="py-5"><div class="container py-5"><div class="col-lg-3"></div><div class="text-center mb-5"><h2 class="fw-bold">Mengapa Memilih Kami?</h2><p class="text-secondary"> Keunggulan yang kami tawarkan untuk perkembangan putra-putri Anda. </p></div><div class="row g-4"><div class="col-md-6 col-lg-3"><div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"><div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">`);
			_push(ssrRenderComponent(unref(CircleCheckBigIcon), {
				size: 64,
				class: "text-primary"
			}, null, _parent));
			_push(`</div><h5 class="fw-bold">Akreditasi A</h5><p class="text-secondary small mb-0"> Memenuhi standar nasional pendidikan dengan sangat baik. </p></div></div><div class="col-md-6 col-lg-3"><div class="card card-hover border-0 shadow-sm bg-light-subtle rounded-4 p-4 h-100 text-center"><div class="d-inline-block p-3 rounded-circle mb-3 mx-auto">`);
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
			_push(`</div><h5 class="fw-bold">Ekstrakurikuler Beragam</h5><p class="text-secondary small mb-0"> Lebih dari 30 pilihan klub untuk mengasah minat dan bakat siswa. </p></div></div></div></div></section><!--]-->`);
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
			_push(ssrRenderComponent(unref(BApp), _attrs, {
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