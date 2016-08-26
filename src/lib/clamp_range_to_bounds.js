/**
* Copyright 2012-2016, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

/**
 * Clamps a given range to the bounds specified.
 * @param {array} range to clamp to the bounds.
 * @param {array} bounds to clamp to.
 * @return {array} clamped range, where limits are 
 *     always inside bounds. range size is maintained, unless
 *     bigger than bounds size.
 */
module.exports = function clampRangeToBounds(range, bounds) {
    if(!bounds) {
        return range;
    }

    var r1 = range[0], r2 = range[1];
    var dr = r2 - r1;

    var b1 = bounds[0];
    var b2 = bounds[1];
    var db = b2 - b1;
    if(dr > db) {
        dr = db;
    }
    if(r1 < b1) {
        r2 = b1 + dr;
        r1 = b1;
    } else if(r2 > b2) {
        r1 = b2 - dr;
        r2 = b2;
    }

    return [r1, r2];
};