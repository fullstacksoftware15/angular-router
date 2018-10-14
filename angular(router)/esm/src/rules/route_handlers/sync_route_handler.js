/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { PromiseWrapper } from '../../facade/async';
import { isPresent } from '../../facade/lang';
import { BLANK_ROUTE_DATA, RouteData } from '../../instruction';
export class SyncRouteHandler {
    constructor(componentType, data) {
        this.componentType = componentType;
        /** @internal */
        this._resolvedComponent = null;
        this._resolvedComponent = PromiseWrapper.resolve(componentType);
        this.data = isPresent(data) ? new RouteData(data) : BLANK_ROUTE_DATA;
    }
    resolveComponentType() { return this._resolvedComponent; }
}
//# sourceMappingURL=sync_route_handler.js.map