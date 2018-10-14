/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export class MatchedUrl {
    constructor(urlPath, urlParams, allParams, auxiliary, rest) {
        this.urlPath = urlPath;
        this.urlParams = urlParams;
        this.allParams = allParams;
        this.auxiliary = auxiliary;
        this.rest = rest;
    }
}
export class GeneratedUrl {
    constructor(urlPath, urlParams) {
        this.urlPath = urlPath;
        this.urlParams = urlParams;
    }
}
//# sourceMappingURL=route_path.js.map