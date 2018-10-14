/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Type } from '../../facade/lang';
import { RouteData } from '../../instruction';
import { RouteHandler } from './route_handler';
export declare class AsyncRouteHandler implements RouteHandler {
    private _loader;
    componentType: Type;
    data: RouteData;
    constructor(_loader: () => Promise<Type>, data?: {
        [key: string]: any;
    });
    resolveComponentType(): Promise<Type>;
}
