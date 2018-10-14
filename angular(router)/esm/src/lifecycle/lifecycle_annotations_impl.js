/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* @ts2dart_const */
export class RouteLifecycleHook {
    constructor(name) {
        this.name = name;
    }
}
/* @ts2dart_const */
export class CanActivate {
    constructor(fn) {
        this.fn = fn;
    }
}
export const routerCanReuse = 
/*@ts2dart_const*/ new RouteLifecycleHook('routerCanReuse');
export const routerCanDeactivate = 
/*@ts2dart_const*/ new RouteLifecycleHook('routerCanDeactivate');
export const routerOnActivate = 
/*@ts2dart_const*/ new RouteLifecycleHook('routerOnActivate');
export const routerOnReuse = 
/*@ts2dart_const*/ new RouteLifecycleHook('routerOnReuse');
export const routerOnDeactivate = 
/*@ts2dart_const*/ new RouteLifecycleHook('routerOnDeactivate');
//# sourceMappingURL=lifecycle_annotations_impl.js.map