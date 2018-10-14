/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { makeDecorator } from '../../core_private';
import { RouteConfig as RouteConfigAnnotation } from './route_config_impl';
export { AsyncRoute, AuxRoute, Redirect, Route } from './route_config_impl';
// Copied from RouteConfig in route_config_impl.
/**
 * The `RouteConfig` decorator defines routes for a given component.
 *
 * It takes an array of {@link RouteDefinition}s.
 * @Annotation
 */
export var RouteConfig = makeDecorator(RouteConfigAnnotation);
//# sourceMappingURL=route_config_decorator.js.map