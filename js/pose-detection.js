/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("@mediapipe/pose"), require("@tensorflow/tfjs-core"), require("@tensorflow/tfjs-converter")) : "function" == typeof define && define.amd ? define(["exports", "@mediapipe/pose", "@tensorflow/tfjs-core", "@tensorflow/tfjs-converter"], t) : t((e = e || self).poseDetection = {}, e.globalThis, e.tf, e.tf)
}(this, (function (e, t, i, n) {
    "use strict";
    var r = function (e, t) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        }
            instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
            })(e, t)
    };

    function o(e, t) {
        function i() {
            this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
    }
    var a = function () {
        return (a = Object.assign || function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }).apply(this, arguments)
    };

    function s(e, t, i, n) {
        return new (i || (i = Promise))((function (r, o) {
            function a(e) {
                try {
                    l(n.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function s(e) {
                try {
                    l(n.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function l(e) {
                var t;
                e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i((function (e) {
                    e(t)
                }))).then(a, s)
            }
            l((n = n.apply(e, t || [])).next())
        }))
    }

    function l(e, t) {
        var i, n, r, o, a = {
            label: 0,
            sent: function () {
                if (1 & r[0]) throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function s(o) {
            return function (s) {
                return function (o) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done) return r;
                        switch (n = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                            case 0:
                            case 1:
                                r = o;
                                break;
                            case 4:
                                return a.label++, {
                                    value: o[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = a.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < r[1]) {
                                    a.label = r[1], r = o;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(o);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = t.call(e, a)
                    } catch (e) {
                        o = [6, e], n = 0
                    } finally {
                            i = r = 0
                        }
                    if (5 & o[0]) throw o[1];
                    return {
                        value: o[0] ? o[1] : void 0,
                        done: !0
                    }
                }([o, s])
            }
        }
    }

    function u() {
        for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
        var n = Array(e),
            r = 0;
        for (t = 0; t < i; t++)
            for (var o = arguments[t], a = 0, s = o.length; a < s; a++, r++) n[r] = o[a];
        return n
    }
    var h = ["nose", "left_eye", "right_eye", "left_ear", "right_ear", "left_shoulder", "right_shoulder", "left_elbow", "right_elbow", "left_wrist", "right_wrist", "left_hip", "right_hip", "left_knee", "right_knee", "left_ankle", "right_ankle"],
        c = ["nose", "left_eye_inner", "left_eye", "left_eye_outer", "right_eye_inner", "right_eye", "right_eye_outer", "left_ear", "right_ear", "mouth_left", "mouth_right", "left_shoulder", "right_shoulder", "left_elbow", "right_elbow", "left_wrist", "right_wrist", "left_pinky", "right_pinky", "left_index", "right_index", "left_thumb", "right_thumb", "left_hip", "right_hip", "left_knee", "right_knee", "left_ankle", "right_ankle", "left_heel", "right_heel", "left_foot_index", "right_foot_index"],
        p = {
            left: [1, 2, 3, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
            right: [4, 5, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32],
            middle: [0]
        },
        d = {
            left: [1, 3, 5, 7, 9, 11, 13, 15],
            right: [2, 4, 6, 8, 10, 12, 14, 16],
            middle: [0]
        },
        f = [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 4],
            [5, 6],
            [5, 7],
            [5, 11],
            [6, 8],
            [6, 12],
            [7, 9],
            [8, 10],
            [11, 12],
            [11, 13],
            [12, 14],
            [13, 15],
            [14, 16]
        ],
        m = [
            [0, 1],
            [0, 4],
            [1, 2],
            [2, 3],
            [3, 7],
            [4, 5],
            [5, 6],
            [6, 8],
            [9, 10],
            [11, 12],
            [11, 13],
            [11, 23],
            [12, 14],
            [14, 16],
            [12, 24],
            [13, 15],
            [15, 17],
            [16, 18],
            [16, 20],
            [15, 17],
            [15, 19],
            [15, 21],
            [16, 22],
            [17, 19],
            [18, 20],
            [23, 25],
            [23, 24],
            [24, 26],
            [25, 27],
            [26, 28],
            [27, 29],
            [28, 30],
            [27, 31],
            [28, 32],
            [29, 31],
            [30, 32]
        ];

    function g(e) {
        return e instanceof SVGAnimatedLength ? e.baseVal.value : e
    }

    function y(e) {
        return s(this, void 0, void 0, (function () {
            var t, n;
            return l(this, (function (r) {
                switch (r.label) {
                    case 0:
                        return t = document.createElement("canvas"), e instanceof i.Tensor ? [4, i.browser.toPixels(e, t)] : [3, 2];
                    case 1:
                        return r.sent(), [3, 3];
                    case 2:
                        t.width = g(e.width), t.height = g(e.height), n = t.getContext("2d"), e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0), r.label = 3;
                    case 3:
                        return [2, t]
                }
            }))
        }))
    }

    function v(e) {
        return s(this, void 0, void 0, (function () {
            var t, n, r, o, a, s;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return e instanceof i.Tensor ? (t = e.shape.slice(0, 2), n = t[0], r = t[1], o = ImageData.bind, [4, i.browser.toPixels(e)]) : [3, 2];
                    case 1:
                        return [2, new (o.apply(ImageData, [void 0, l.sent(), r, n]))];
                    case 2:
                        return a = document.createElement("canvas"), s = a.getContext("2d"), a.width = g(e.width), a.height = g(e.height), s.drawImage(e, 0, 0), [2, s.getImageData(0, 0, a.width, a.height)]
                }
            }))
        }))
    }

    function x(e) {
        return s(this, void 0, void 0, (function () {
            var t, n;
            return l(this, (function (r) {
                switch (r.label) {
                    case 0:
                        return e instanceof SVGImageElement || e instanceof OffscreenCanvas ? [4, y(e)] : [3, 2];
                    case 1:
                        return n = r.sent(), [3, 3];
                    case 2:
                        n = e, r.label = 3;
                    case 3:
                        return t = n, [2, i.browser.fromPixels(t, 4)]
                }
            }))
        }))
    }

    function w(e) {
        if (e < 0 || e >= 256) throw new Error("Mask value must be in range [0, 255] but got " + e);
        if (!Number.isInteger(e)) throw new Error("Mask value must be an integer but got " + e)
    }
    var k = {
        runtime: "mediapipe",
        enableSmoothing: !0,
        enableSegmentation: !1,
        smoothSegmentation: !0,
        modelType: "full"
    };
    var b = function () {
        function e(e) {
            this.mask = e
        }
        return e.prototype.toCanvasImageSource = function () {
            return s(this, void 0, void 0, (function () {
                return l(this, (function (e) {
                    return [2, this.mask]
                }))
            }))
        }, e.prototype.toImageData = function () {
            return s(this, void 0, void 0, (function () {
                return l(this, (function (e) {
                    return [2, v(this.mask)]
                }))
            }))
        }, e.prototype.toTensor = function () {
            return s(this, void 0, void 0, (function () {
                return l(this, (function (e) {
                    return [2, x(this.mask)]
                }))
            }))
        }, e.prototype.getUnderlyingType = function () {
            return "canvasimagesource"
        }, e
    }();

    function M(e) {
        return w(e), "person"
    }
    var S = function () {
        function e(e) {
            var i, n = this;
            switch (this.width = 0, this.height = 0, this.selfieMode = !1, this.poseSolution = new t.Pose({
                locateFile: function (t, i) {
                    return e.solutionPath ? e.solutionPath.replace(/\/+$/, "") + "/" + t : i + "/" + t
                }
            }), e.modelType) {
                case "lite":
                    i = 0;
                    break;
                case "heavy":
                    i = 2;
                    break;
                case "full":
                default:
                    i = 1
            }
            this.poseSolution.setOptions({
                modelComplexity: i,
                smoothLandmarks: e.enableSmoothing,
                enableSegmentation: e.enableSegmentation,
                smoothSegmentation: e.smoothSegmentation,
                selfieMode: this.selfieMode
            }), this.poseSolution.onResults((function (e) {
                if (n.height = e.image.height, n.width = e.image.width, null == e.poseLandmarks) n.poses = [];
                else {
                    var t = n.translateOutput(e.poseLandmarks, e.poseWorldLandmarks);
                    e.segmentationMask && (t.segmentation = {
                        maskValueToLabel: M,
                        mask: new b(e.segmentationMask)
                    }), n.poses = [t]
                }
            }))
        }
        return e.prototype.translateOutput = function (e, t) {
            var i = this,
                n = {
                    keypoints: e.map((function (e, t) {
                        return {
                            x: e.x * i.width,
                            y: e.y * i.height,
                            z: e.z,
                            score: e.visibility,
                            name: c[t]
                        }
                    }))
                };
            return null != t && (n.keypoints3D = t.map((function (e, t) {
                return {
                    x: e.x,
                    y: e.y,
                    z: e.z,
                    score: e.visibility,
                    name: c[t]
                }
            }))), n
        }, e.prototype.estimatePoses = function (e, t, n) {
            return s(this, void 0, void 0, (function () {
                var r, o;
                return l(this, (function (a) {
                    switch (a.label) {
                        case 0:
                            return t && t.flipHorizontal && t.flipHorizontal !== this.selfieMode && (this.selfieMode = t.flipHorizontal, this.poseSolution.setOptions({
                                selfieMode: this.selfieMode
                            })), e instanceof i.Tensor ? (o = ImageData.bind, [4, i.browser.toPixels(e)]) : [3, 2];
                        case 1:
                            return r = new (o.apply(ImageData, [void 0, a.sent(), e.shape[1], e.shape[0]])), [3, 3];
                        case 2:
                            r = e, a.label = 3;
                        case 3:
                            return e = r, [4, this.poseSolution.send({
                                image: e
                            }, n)];
                        case 4:
                            return a.sent(), [2, this.poses]
                    }
                }))
            }))
        }, e.prototype.dispose = function () {
            this.poseSolution.close()
        }, e.prototype.reset = function () {
            this.poseSolution.reset()
        }, e.prototype.initialize = function () {
            return this.poseSolution.initialize()
        }, e
    }();

    function T(e) {
        return s(this, void 0, void 0, (function () {
            var t, i;
            return l(this, (function (n) {
                switch (n.label) {
                    case 0:
                        return t = function (e) {
                            if (null == e) return a({}, k);
                            var t = a({}, e);
                            return t.runtime = "mediapipe", null == t.enableSegmentation && (t.enableSegmentation = k.enableSegmentation), null == t.enableSmoothing && (t.enableSmoothing = k.enableSmoothing), null == t.smoothSegmentation && (t.smoothSegmentation = k.smoothSegmentation), null == t.modelType && (t.modelType = k.modelType), t
                        }(e), [4, (i = new S(t)).initialize()];
                    case 1:
                        return n.sent(), [2, i]
                }
            }))
        }))
    }

    function P(e) {
        return e instanceof i.Tensor ? {
            height: e.shape[0],
            width: e.shape[1]
        } : {
            height: e.height,
            width: e.width
        }
    }

    function F(e) {
        return e - 2 * Math.PI * Math.floor((e + Math.PI) / (2 * Math.PI))
    }

    function _(e) {
        return e instanceof i.Tensor ? e : i.browser.fromPixels(e)
    }

    function z(e, t, i) {
        return O(i, "inputResolution"), [1 / i.width * e[0][0] * t.width, 1 / i.height * e[0][1] * t.width, e[0][3] * t.width, 1 / i.width * e[1][0] * t.height, 1 / i.height * e[1][1] * t.height, e[1][3] * t.height, 0, 0]
    }

    function O(e, t) {
        i.util.assert(0 !== e.width, (function () {
            return t + " width cannot be 0."
        })), i.util.assert(0 !== e.height, (function () {
            return t + " height cannot be 0."
        }))
    }

    function A(e, t, i) {
        var n = i.rotationVectorStartKeypointIndex,
            r = i.rotationVectorEndKeypointIndex,
            o = e.locationData,
            a = o.relativeKeypoints[n].x * t.width,
            s = o.relativeKeypoints[n].y * t.height,
            l = o.relativeKeypoints[r].x * t.width,
            u = o.relativeKeypoints[r].y * t.height,
            h = 2 * Math.sqrt((l - a) * (l - a) + (u - s) * (u - s)),
            c = function (e, t, i) {
                var n, r = e.locationData,
                    o = i.rotationVectorStartKeypointIndex,
                    a = i.rotationVectorEndKeypointIndex;
                n = i.rotationVectorTargetAngle ? i.rotationVectorTargetAngle : Math.PI * i.rotationVectorTargetAngleDegree / 180;
                var s = r.relativeKeypoints[o].x * t.width,
                    l = r.relativeKeypoints[o].y * t.height,
                    u = r.relativeKeypoints[a].x * t.width,
                    h = r.relativeKeypoints[a].y * t.height;
                return F(n - Math.atan2(-(h - l), u - s))
            }(e, t, i);
        return {
            xCenter: a / t.width,
            yCenter: s / t.height,
            width: h / t.width,
            height: h / t.height,
            rotation: c
        }
    }

    function I(e) {
        if (16 !== e.length) throw new Error("Array length must be 16 but got " + e.length);
        return [
            [e[0], e[1], e[2], e[3]],
            [e[4], e[5], e[6], e[7]],
            [e[8], e[9], e[10], e[11]],
            [e[12], e[13], e[14], e[15]]
        ]
    }

    function C(e, t, i, n, r, o, a) {
        return e[t][r] * (e[i][o] * e[n][a] - e[i][a] * e[n][o])
    }

    function R(e, t, i) {
        var n = (t + 1) % 4,
            r = (t + 2) % 4,
            o = (t + 3) % 4,
            a = (i + 1) % 4,
            s = (i + 2) % 4,
            l = (i + 3) % 4;
        return C(e, n, r, o, a, s, l) + C(e, r, o, n, a, s, l) + C(e, o, n, r, a, s, l)
    }

    function E(e, t, i) {
        void 0 === i && (i = {
            ignoreRotation: !1
        });
        for (var n = [], r = 0, o = e; r < o.length; r++) {
            var s = o[r],
                l = s.x - .5,
                u = s.y - .5,
                h = i.ignoreRotation ? 0 : t.rotation,
                c = Math.cos(h) * l - Math.sin(h) * u,
                p = Math.sin(h) * l + Math.cos(h) * u;
            c = c * t.width + t.xCenter, p = p * t.height + t.yCenter;
            var d = s.z * t.width,
                f = a({}, s);
            f.x = c, f.y = p, f.z = d, n.push(f)
        }
        return n
    }

    function V(e, t) {
        var n = function (e, t, i, n) {
            var r = t - e,
                o = n - i;
            if (0 === r) throw new Error("Original min and max are both " + e + ", range cannot be 0.");
            var a = o / r;
            return {
                scale: a,
                offset: i - e * a
            }
        }(0, 255, t[0], t[1]);
        return i.tidy((function () {
            return i.add(i.mul(e, n.scale), n.offset)
        }))
    }

    function B(e, t, n) {
        var r, o, a, s, l, u, h, c, p, d, f, m, g, y, v = t.outputTensorSize,
            x = t.keepAspectRatio,
            w = t.borderMode,
            k = t.outputTensorFloatRange,
            b = P(e),
            M = function (e, t) {
                return t ? {
                    xCenter: t.xCenter * e.width,
                    yCenter: t.yCenter * e.height,
                    width: t.width * e.width,
                    height: t.height * e.height,
                    rotation: t.rotation
                } : {
                    xCenter: .5 * e.width,
                    yCenter: .5 * e.height,
                    width: e.width,
                    height: e.height,
                    rotation: 0
                }
            }(b, n),
            S = function (e, t, i) {
                if (void 0 === i && (i = !1), !i) return {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                };
                var n = t.height,
                    r = t.width;
                O(t, "targetSize"), O(e, "roi");
                var o, a, s = n / r,
                    l = e.height / e.width,
                    u = 0,
                    h = 0;
                return s > l ? (o = e.width, a = e.width * s, h = (1 - l / s) / 2) : (o = e.height / s, a = e.height, u = (1 - s / l) / 2), e.width = o, e.height = a, {
                    top: h,
                    left: u,
                    right: u,
                    bottom: h
                }
            }(M, v, x),
            T = (r = M, o = b.width, a = b.height, s = !1, l = r.width, u = r.height, h = s ? -1 : 1, c = Math.cos(r.rotation), p = Math.sin(r.rotation), d = r.xCenter, f = r.yCenter, m = 1 / o, g = 1 / a, (y = new Array(16))[0] = l * c * h * m, y[1] = -u * p * m, y[2] = 0, y[3] = (-.5 * l * c * h + .5 * u * p + d) * m, y[4] = l * p * h * g, y[5] = u * c * g, y[6] = 0, y[7] = (-.5 * u * c - .5 * l * p * h + f) * g, y[8] = 0, y[9] = 0, y[10] = l * m, y[11] = 0, y[12] = 0, y[13] = 0, y[14] = 0, y[15] = 1, I(y));
        return {
            imageTensor: i.tidy((function () {
                var t = _(e),
                    n = i.tensor2d(z(T, b, v), [1, 8]),
                    r = "zero" === w ? "constant" : "nearest",
                    o = i.image.transform(i.expandDims(i.cast(t, "float32")), n, "bilinear", r, 0, [v.height, v.width]);
                return null != k ? V(o, k) : o
            })),
            padding: S,
            transformationMatrix: T
        }
    }

    function L(e, t, i, n) {
        return 1 === n ? .5 * (e + t) : e + (t - e) * i / (n - 1)
    }

    function D(e) {
        return i.tidy((function () {
            var t = function (e) {
                return i.tidy((function () {
                    return [i.slice(e, [0, 0, 0], [1, -1, 1]), i.slice(e, [0, 0, 1], [1, -1, -1])]
                }))
            }(e),
                n = t[0],
                r = t[1];
            return {
                boxes: i.squeeze(r),
                logits: i.squeeze(n)
            }
        }))
    }

    function N(e) {
        return null != e && null != e.currentTime
    }

    function q(e) {
        for (var t = {
            locationData: {
                relativeKeypoints: []
            }
        }, i = Number.MAX_SAFE_INTEGER, n = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER, o = Number.MIN_SAFE_INTEGER, a = 0; a < e.length; ++a) {
            var s = e[a];
            i = Math.min(i, s.x), n = Math.max(n, s.x), r = Math.min(r, s.y), o = Math.max(o, s.y), t.locationData.relativeKeypoints.push({
                x: s.x,
                y: s.y
            })
        }
        return t.locationData.relativeBoundingBox = {
            xMin: i,
            yMin: r,
            xMax: n,
            yMax: o,
            width: n - i,
            height: o - r
        }, t
    }

    function K(e, t, n, r) {
        return s(this, void 0, void 0, (function () {
            var r, o, a, s, u;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return e.sort((function (e, t) {
                            return Math.max.apply(Math, t.score) - Math.max.apply(Math, e.score)
                        })), r = i.tensor2d(e.map((function (e) {
                            return [e.locationData.relativeBoundingBox.yMin, e.locationData.relativeBoundingBox.xMin, e.locationData.relativeBoundingBox.yMax, e.locationData.relativeBoundingBox.xMax]
                        }))), o = i.tensor1d(e.map((function (e) {
                            return e.score[0]
                        }))), [4, i.image.nonMaxSuppressionAsync(r, o, t, n)];
                    case 1:
                        return [4, (a = l.sent()).array()];
                    case 2:
                        return s = l.sent(), u = e.filter((function (e, t) {
                            return s.indexOf(t) > -1
                        })), i.dispose([r, o, a]), [2, u]
                }
            }))
        }))
    }

    function j(e, t) {
        return e.map((function (e) {
            var i = a(a({}, e), {
                x: e.x * t.width,
                y: e.y * t.height
            });
            return null != e.z && (i.z = e.z * t.width), i
        }))
    }

    function H(e, t, n) {
        return s(this, void 0, void 0, (function () {
            var r, o, s, u, h, c, p, d, f, m, g, y, v, x, w, k, b, M, S, T, P, F, _, z;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        if (r = i.squeeze(t, [0]), o = r.shape, s = o[0], u = o[1], h = o[2], e.length !== h) throw new Error("Expected heatmap to have same number of channels as the number of landmarks. But got landmarks length: " + e.length + ", heatmap length: " + h);
                        return c = [], [4, r.buffer()];
                    case 1:
                        for (p = l.sent(), d = 0; d < e.length; d++)
                            if (f = e[d], m = a({}, f), c.push(m), g = Math.trunc(m.x * u), y = Math.trunc(m.y * s), !(g < 0 || g >= u || y < 0 || g >= s)) {
                                for (v = Math.trunc((n.kernelSize - 1) / 2), x = Math.max(0, g - v), w = Math.min(u, g + v + 1), k = Math.max(0, y - v), b = Math.min(s, y + v + 1), M = 0, S = 0, T = 0, P = 0, F = k; F < b; ++F)
                                    for (_ = x; _ < w; ++_) z = p.get(F, _, d), M += z, P = Math.max(P, z), S += _ * z, T += F * z;
                                P >= n.minConfidenceToRefine && M > 0 && (m.x = S / u / M, m.y = T / s / M)
                            } return r.dispose(), [2, c]
                }
            }))
        }))
    }

    function U(e, t) {
        var i = t.left,
            n = t.top,
            r = t.left + t.right,
            o = t.top + t.bottom;
        return e.map((function (e) {
            return a(a({}, e), {
                x: (e.x - i) / (1 - r),
                y: (e.y - n) / (1 - o),
                z: e.z / (1 - r)
            })
        }))
    }

    function X(e, t, n) {
        return "webgl" === i.getBackend() ? function (e, t, n) {
            var r = n.combineWithPreviousRatio.toFixed(2),
                o = {
                    variableNames: ["prevMask", "newMask"],
                    outputShape: e.shape,
                    userCode: "\n  void main() {\n      ivec2 coords = getOutputCoords();\n      int height = coords[0];\n      int width = coords[1];\n\n      float prevMaskValue = getPrevMask(height, width);\n      float newMaskValue = getNewMask(height, width);\n\n      /*\n      * Assume p := newMaskValue\n      * H(p) := 1 + (p * log(p) + (1-p) * log(1-p)) / log(2)\n      * uncertainty alpha(p) =\n      *   Clamp(1 - (1 - H(p)) * (1 - H(p)), 0, 1) [squaring the\n      * uncertainty]\n      *\n      * The following polynomial approximates uncertainty alpha as a\n      * function of (p + 0.5):\n      */\n      const float c1 = 5.68842;\n      const float c2 = -0.748699;\n      const float c3 = -57.8051;\n      const float c4 = 291.309;\n      const float c5 = -624.717;\n      float t = newMaskValue - 0.5;\n      float x = t * t;\n\n      float uncertainty =\n        1.0 - min(1.0, x * (c1 + x * (c2 + x * (c3 + x * (c4 + x * c5)))));\n\n      float outputValue = newMaskValue + (prevMaskValue - newMaskValue) *\n                             (uncertainty * " + r + ");\n\n      setOutput(outputValue);\n    }\n"
                },
                a = i.backend();
            return i.tidy((function () {
                var n = a.compileAndRun(o, [e, t]);
                return i.engine().makeTensorFromDataId(n.dataId, n.shape, n.dtype)
            }))
        }(e, t, n) : i.tidy((function () {
            var r = i.sub(t, .5),
                o = i.square(r),
                a = i.sub(1, i.minimum(1, i.mul(o, i.add(5.68842, i.mul(o, i.add(-.748699, i.mul(o, i.add(-57.8051, i.mul(o, i.add(291.309, i.mul(o, -624.717)))))))))));
            return i.add(t, i.mul(i.sub(e, t), i.mul(a, n.combineWithPreviousRatio)))
        }))
    }

    function W(e, t, n) {
        return s(this, void 0, void 0, (function () {
            var r, o, a, s, u;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return r = e[0], o = e[1], a = function (e, t, n) {
                            return i.tidy((function () {
                                var r, o, a, s;
                                n.reverseOutputOrder ? (o = i.squeeze(i.slice(e, [0, n.boxCoordOffset + 0], [-1, 1])), r = i.squeeze(i.slice(e, [0, n.boxCoordOffset + 1], [-1, 1])), s = i.squeeze(i.slice(e, [0, n.boxCoordOffset + 2], [-1, 1])), a = i.squeeze(i.slice(e, [0, n.boxCoordOffset + 3], [-1, 1]))) : (r = i.squeeze(i.slice(e, [0, n.boxCoordOffset + 0], [-1, 1])), o = i.squeeze(i.slice(e, [0, n.boxCoordOffset + 1], [-1, 1])), a = i.squeeze(i.slice(e, [0, n.boxCoordOffset + 2], [-1, 1])), s = i.squeeze(i.slice(e, [0, n.boxCoordOffset + 3], [-1, 1]))), o = i.add(i.mul(i.div(o, n.xScale), t.w), t.x), r = i.add(i.mul(i.div(r, n.yScale), t.h), t.y), n.applyExponentialOnBoxSize ? (a = i.mul(i.exp(i.div(a, n.hScale)), t.h), s = i.mul(i.exp(i.div(s, n.wScale)), t.w)) : (a = i.mul(i.div(a, n.hScale), t.h), s = i.mul(i.div(s, n.wScale), t.h));
                                var l = i.sub(r, i.div(a, 2)),
                                    u = i.sub(o, i.div(s, 2)),
                                    h = i.add(r, i.div(a, 2)),
                                    c = i.add(o, i.div(s, 2)),
                                    p = i.concat([i.reshape(l, [n.numBoxes, 1]), i.reshape(u, [n.numBoxes, 1]), i.reshape(h, [n.numBoxes, 1]), i.reshape(c, [n.numBoxes, 1])], 1);
                                if (n.numKeypoints)
                                    for (var d = 0; d < n.numKeypoints; ++d) {
                                        var f = n.keypointCoordOffset + d * n.numValuesPerKeypoint,
                                            m = void 0,
                                            g = void 0;
                                        n.reverseOutputOrder ? (m = i.squeeze(i.slice(e, [0, f], [-1, 1])), g = i.squeeze(i.slice(e, [0, f + 1], [-1, 1]))) : (g = i.squeeze(i.slice(e, [0, f], [-1, 1])), m = i.squeeze(i.slice(e, [0, f + 1], [-1, 1])));
                                        var y = i.add(i.mul(i.div(m, n.xScale), t.w), t.x),
                                            v = i.add(i.mul(i.div(g, n.yScale), t.h), t.y);
                                        p = i.concat([p, i.reshape(y, [n.numBoxes, 1]), i.reshape(v, [n.numBoxes, 1])], 1)
                                    }
                                return p
                            }))
                        }(o, t, n), s = i.tidy((function () {
                            var e = r;
                            return n.sigmoidScore ? (null != n.scoreClippingThresh && (e = i.clipByValue(r, -n.scoreClippingThresh, n.scoreClippingThresh)), e = i.sigmoid(e)) : e
                        })), [4, G(a, s, n)];
                    case 1:
                        return u = l.sent(), i.dispose([a, s]), [2, u]
                }
            }))
        }))
    }

    function G(e, t, i) {
        return s(this, void 0, void 0, (function () {
            var n, r, o, a, s, u, h, c, p, d, f, m;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return n = [], [4, e.data()];
                    case 1:
                        return r = l.sent(), [4, t.data()];
                    case 2:
                        for (o = l.sent(), a = 0; a < i.numBoxes; ++a)
                            if (!(null != i.minScoreThresh && o[a] < i.minScoreThresh || (s = a * i.numCoords, u = Y(r[s + 0], r[s + 1], r[s + 2], r[s + 3], o[a], i.flipVertically, a), (h = u.locationData.relativeBoundingBox).width < 0 || h.height < 0))) {
                                if (i.numKeypoints > 0)
                                    for ((c = u.locationData).relativeKeypoints = [], p = i.numKeypoints * i.numValuesPerKeypoint, d = 0; d < p; d += i.numValuesPerKeypoint) f = s + i.keypointCoordOffset + d, m = {
                                        x: r[f + 0],
                                        y: i.flipVertically ? 1 - r[f + 1] : r[f + 1]
                                    }, c.relativeKeypoints.push(m);
                                n.push(u)
                            } return [2, n]
                }
            }))
        }))
    }

    function Y(e, t, i, n, r, o, a) {
        return {
            score: [r],
            ind: a,
            locationData: {
                relativeBoundingBox: {
                    xMin: t,
                    yMin: o ? 1 - i : e,
                    xMax: n,
                    yMax: o ? 1 - e : i,
                    width: n - t,
                    height: i - e
                }
            }
        }
    }

    function Q(e, t) {
        return "none" === e ? t : function (e) {
            return 1 / (1 + Math.exp(-e))
        }(t)
    }

    function Z(e, t, i, n) {
        return s(this, void 0, void 0, (function () {
            var r, o, a, s, u, h, c, p;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return i = i || t.flipHorizontally || !1, n = n || t.flipVertically || !1, r = e.size, o = r / t.numLandmarks, [4, e.data()];
                    case 1:
                        for (a = l.sent(), s = [], u = 0; u < t.numLandmarks; ++u) h = u * o, (p = {
                            x: 0,
                            y: 0
                        }).x = i ? t.inputImageWidth - a[h] : a[h], o > 1 && (p.y = n ? t.inputImageHeight - a[h + 1] : a[h + 1]), o > 2 && (p.z = a[h + 2]), o > 3 && (p.score = Q(t.visibilityActivation, a[h + 3])), s.push(p);
                        for (c = 0; c < s.length; ++c)(p = s[c]).x = p.x / t.inputImageWidth, p.y = p.y / t.inputImageHeight, p.z = p.z / t.inputImageWidth / (t.normalizeZ || 1);
                        return [2, s]
                }
            }))
        }))
    }

    function $(e, t, i) {
        var n = e.width,
            r = e.height,
            o = e.rotation;
        if (null == i.rotation && null == i.rotationDegree || (o = function (e, t) {
            null != t.rotation ? e += t.rotation : null != t.rotationDegree && (e += Math.PI * t.rotationDegree / 180);
            return F(e)
        }(o, i)), 0 === o) e.xCenter = e.xCenter + n * i.shiftX, e.yCenter = e.yCenter + r * i.shiftY;
        else {
            var a = (t.width * n * i.shiftX * Math.cos(o) - t.height * r * i.shiftY * Math.sin(o)) / t.width,
                s = (t.width * n * i.shiftX * Math.sin(o) + t.height * r * i.shiftY * Math.cos(o)) / t.height;
            e.xCenter = e.xCenter + a, e.yCenter = e.yCenter + s
        }
        if (i.squareLong) {
            var l = Math.max(n * t.width, r * t.height);
            n = l / t.width, r = l / t.height
        } else if (i.squareShort) {
            var u = Math.min(n * t.width, r * t.height);
            n = u / t.width, r = u / t.height
        }
        return e.width = n * i.scaleX, e.height = r * i.scaleY, e
    }

    function J(e, t) {
        return e.map((function (e) {
            var i = a(a({}, e), {
                x: e.x / t.width,
                y: e.y / t.height
            });
            return null != e.z && (e.z = e.z / t.width), i
        }))
    }
    var ee = function () {
        function e(e) {
            this.alpha = e, this.initialized = !1
        }
        return e.prototype.apply = function (e, t) {
            var i;
            return this.initialized ? i = null == t ? this.storedValue + this.alpha * (e - this.storedValue) : this.storedValue + this.alpha * t * Math.asinh((e - this.storedValue) / t) : (i = e, this.initialized = !0), this.rawValue = e, this.storedValue = i, i
        }, e.prototype.applyWithAlpha = function (e, t, i) {
            return this.alpha = t, this.apply(e, i)
        }, e.prototype.hasLastRawValue = function () {
            return this.initialized
        }, e.prototype.lastRawValue = function () {
            return this.rawValue
        }, e.prototype.reset = function () {
            this.initialized = !1
        }, e
    }(),
        te = function () {
            function e(e) {
                this.frequency = e.frequency, this.minCutOff = e.minCutOff, this.beta = e.beta, this.thresholdCutOff = e.thresholdCutOff, this.thresholdBeta = e.thresholdBeta, this.derivateCutOff = e.derivateCutOff, this.x = new ee(this.getAlpha(this.minCutOff)), this.dx = new ee(this.getAlpha(this.derivateCutOff)), this.lastTimestamp = 0
            }
            return e.prototype.apply = function (e, t, i) {
                if (null == e) return e;
                var n = Math.trunc(t);
                if (this.lastTimestamp >= n) return e;
                0 !== this.lastTimestamp && 0 !== n && (this.frequency = 1 / (1e-6 * (n - this.lastTimestamp))), this.lastTimestamp = n;
                var r = this.x.hasLastRawValue() ? (e - this.x.lastRawValue()) * i * this.frequency : 0,
                    o = this.dx.applyWithAlpha(r, this.getAlpha(this.derivateCutOff)),
                    a = this.minCutOff + this.beta * Math.abs(o),
                    s = null != this.thresholdCutOff ? this.thresholdCutOff + this.thresholdBeta * Math.abs(o) : null;
                return this.x.applyWithAlpha(e, this.getAlpha(a), s)
            }, e.prototype.getAlpha = function (e) {
                return 1 / (1 + this.frequency / (2 * Math.PI * e))
            }, e
        }(),
        ie = function () {
            function e(e) {
                this.config = e
            }
            return e.prototype.apply = function (e, t, i) {
                var n = this;
                if (null == e) return this.reset(), null;
                this.initializeFiltersIfEmpty(e);
                var r = 1;
                if (!this.config.disableValueScaling) {
                    if (i < this.config.minAllowedObjectScale) return u(e);
                    r = 1 / i
                }
                return e.map((function (e, i) {
                    var o = a(a({}, e), {
                        x: n.xFilters[i].apply(e.x, t, r),
                        y: n.yFilters[i].apply(e.y, t, r)
                    });
                    return null != e.z && (o.z = n.zFilters[i].apply(e.z, t, r)), o
                }))
            }, e.prototype.reset = function () {
                this.xFilters = null, this.yFilters = null, this.zFilters = null
            }, e.prototype.initializeFiltersIfEmpty = function (e) {
                var t = this;
                null != this.xFilters && this.xFilters.length === e.length || (this.xFilters = e.map((function (e) {
                    return new te(t.config)
                })), this.yFilters = e.map((function (e) {
                    return new te(t.config)
                })), this.zFilters = e.map((function (e) {
                    return new te(t.config)
                })))
            }, e
        }(),
        ne = function () {
            function e(e) {
                this.config = e, this.window = [], this.lowPassFilter = new ee(1), this.lastValue = 0, this.lastValueScale = 1, this.lastTimestamp = -1
            }
            return e.prototype.apply = function (e, t, i) {
                if (null == e) return e;
                var n, r = Math.trunc(t);
                if (this.lastTimestamp >= r) return e;
                if (-1 === this.lastTimestamp) n = 1;
                else {
                    for (var o = e * i - this.lastValue * this.lastValueScale, a = r - this.lastTimestamp, s = o, l = a, u = (1 + this.window.length) * (1e6 / 30), h = 0, c = this.window; h < c.length; h++) {
                        var p = c[h];
                        if (l + p.duration > u) break;
                        s += p.distance, l += p.duration
                    }
                    var d = s / (1e-6 * l);
                    n = 1 - 1 / (1 + this.config.velocityScale * Math.abs(d)), this.window.unshift({
                        distance: o,
                        duration: a
                    }), this.window.length > this.config.windowSize && this.window.pop()
                }
                return this.lastValue = e, this.lastValueScale = i, this.lastTimestamp = r, this.lowPassFilter.applyWithAlpha(e, n)
            }, e
        }(),
        re = function () {
            function e(e) {
                this.config = e
            }
            return e.prototype.apply = function (e, t, i) {
                var n = this;
                if (null == e) return this.reset(), null;
                var r = 1;
                if (!this.config.disableValueScaling) {
                    if (i < this.config.minAllowedObjectScale) return u(e);
                    r = 1 / i
                }
                return this.initializeFiltersIfEmpty(e), e.map((function (e, i) {
                    var o = a(a({}, e), {
                        x: n.xFilters[i].apply(e.x, t, r),
                        y: n.yFilters[i].apply(e.y, t, r)
                    });
                    return null != e.z && (o.z = n.zFilters[i].apply(e.z, t, r)), o
                }))
            }, e.prototype.reset = function () {
                this.xFilters = null, this.yFilters = null, this.zFilters = null
            }, e.prototype.initializeFiltersIfEmpty = function (e) {
                var t = this;
                null != this.xFilters && this.xFilters.length === e.length || (this.xFilters = e.map((function (e) {
                    return new ne(t.config)
                })), this.yFilters = e.map((function (e) {
                    return new ne(t.config)
                })), this.zFilters = e.map((function (e) {
                    return new ne(t.config)
                })))
            }, e
        }(),
        oe = function () {
            function e(e) {
                if (null != e.velocityFilter) this.keypointsFilter = new re(e.velocityFilter);
                else {
                    if (null == e.oneEuroFilter) throw new Error("Either configure velocityFilter or oneEuroFilter, but got " + e + ".");
                    this.keypointsFilter = new ie(e.oneEuroFilter)
                }
            }
            return e.prototype.apply = function (e, t, i, n, r) {
                if (void 0 === n && (n = !1), null == e) return this.keypointsFilter.reset(), null;
                var o = null != r ? function (e, t) {
                    return (e.width * t.width + e.height * t.height) / 2
                }(r, i) : 1,
                    a = n ? j(e, i) : e,
                    s = this.keypointsFilter.apply(a, t, o);
                return n ? J(s, i) : s
            }, e
        }(),
        ae = function () {
            function e(e) {
                this.alpha = e.alpha
            }
            return e.prototype.apply = function (e) {
                var t = this;
                if (null == e) return this.visibilityFilters = null, null;
                null != this.visibilityFilters && this.visibilityFilters.length === e.length || (this.visibilityFilters = e.map((function (e) {
                    return new ee(t.alpha)
                })));
                for (var i = [], n = 0; n < e.length; ++n) {
                    var r = e[n],
                        o = a({}, r);
                    o.score = this.visibilityFilters[n].apply(r.score), i.push(o)
                }
                return i
            }, e
        }(),
        se = {
            reduceBoxesInLowestlayer: !1,
            interpolatedScaleAspectRatio: 1,
            featureMapHeight: [],
            featureMapWidth: [],
            numLayers: 5,
            minScale: .1484375,
            maxScale: .75,
            inputSizeHeight: 224,
            inputSizeWidth: 224,
            anchorOffsetX: .5,
            anchorOffsetY: .5,
            strides: [8, 16, 32, 32, 32],
            aspectRatios: [1],
            fixedAnchorSize: !0
        },
        le = {
            runtime: "tfjs",
            modelType: "full",
            enableSmoothing: !0,
            enableSegmentation: !1,
            smoothSegmentation: !0,
            detectorModelUrl: "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/detector/1",
            landmarkModelUrl: "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"
        },
        ue = {
            maxPoses: 1,
            flipHorizontal: !1
        },
        he = {
            applyExponentialOnBoxSize: !1,
            flipVertically: !1,
            ignoreClasses: [],
            numClasses: 1,
            numBoxes: 2254,
            numCoords: 12,
            boxCoordOffset: 0,
            keypointCoordOffset: 4,
            numKeypoints: 4,
            numValuesPerKeypoint: 2,
            sigmoidScore: !0,
            scoreClippingThresh: 100,
            reverseOutputOrder: !0,
            xScale: 224,
            yScale: 224,
            hScale: 224,
            wScale: 224,
            minScoreThresh: .5
        },
        ce = .3,
        pe = {
            shiftX: 0,
            shiftY: 0,
            scaleX: 1.25,
            scaleY: 1.25,
            squareLong: !0
        },
        de = {
            outputTensorSize: {
                width: 224,
                height: 224
            },
            keepAspectRatio: !0,
            outputTensorFloatRange: [-1, 1],
            borderMode: "zero"
        },
        fe = {
            outputTensorSize: {
                width: 256,
                height: 256
            },
            keepAspectRatio: !0,
            outputTensorFloatRange: [0, 1],
            borderMode: "zero"
        },
        me = {
            numLandmarks: 39,
            inputImageWidth: 256,
            inputImageHeight: 256,
            visibilityActivation: "sigmoid",
            flipHorizontally: !1,
            flipVertically: !1
        },
        ge = {
            numLandmarks: 39,
            inputImageWidth: 1,
            inputImageHeight: 1,
            visibilityActivation: "sigmoid",
            flipHorizontally: !1,
            flipVertically: !1
        },
        ye = {
            kernelSize: 7,
            minConfidenceToRefine: .5
        },
        ve = {
            alpha: .1
        },
        xe = {
            oneEuroFilter: {
                frequency: 30,
                minCutOff: .05,
                beta: 80,
                derivateCutOff: 1,
                minAllowedObjectScale: 1e-6
            }
        },
        we = {
            oneEuroFilter: {
                frequency: 30,
                minCutOff: .01,
                beta: 10,
                derivateCutOff: 1,
                minAllowedObjectScale: 1e-6
            }
        },
        ke = {
            oneEuroFilter: {
                frequency: 30,
                minCutOff: .1,
                beta: 40,
                derivateCutOff: 1,
                minAllowedObjectScale: 1e-6,
                disableValueScaling: !0
            }
        },
        be = {
            activation: "none"
        },
        Me = {
            combineWithPreviousRatio: .7
        };
    var Se = function () {
        function e(e) {
            this.mask = e
        }
        return e.prototype.toCanvasImageSource = function () {
            return s(this, void 0, void 0, (function () {
                return l(this, (function (e) {
                    return [2, y(this.mask)]
                }))
            }))
        }, e.prototype.toImageData = function () {
            return s(this, void 0, void 0, (function () {
                return l(this, (function (e) {
                    return [2, v(this.mask)]
                }))
            }))
        }, e.prototype.toTensor = function () {
            return s(this, void 0, void 0, (function () {
                return l(this, (function (e) {
                    return [2, this.mask]
                }))
            }))
        }, e.prototype.getUnderlyingType = function () {
            return "tensor"
        }, e
    }();

    function Te(e) {
        return w(e), "person"
    }
    var Pe = function () {
        function e(e, t, n, r, o, a) {
            this.detectorModel = e, this.landmarkModel = t, this.enableSmoothing = n, this.enableSegmentation = r, this.smoothSegmentation = o, this.modelType = a, this.regionOfInterest = null, this.prevFilteredSegmentationMask = null, this.anchors = function (e) {
                null == e.reduceBoxesInLowestLayer && (e.reduceBoxesInLowestLayer = !1), null == e.interpolatedScaleAspectRatio && (e.interpolatedScaleAspectRatio = 1), null == e.fixedAnchorSize && (e.fixedAnchorSize = !1);
                for (var t = [], i = 0; i < e.numLayers;) {
                    for (var n = [], r = [], o = [], a = [], s = i; s < e.strides.length && e.strides[s] === e.strides[i];) {
                        var l = L(e.minScale, e.maxScale, s, e.strides.length);
                        if (0 === s && e.reduceBoxesInLowestLayer) o.push(1), o.push(2), o.push(.5), a.push(.1), a.push(l), a.push(l);
                        else {
                            for (var u = 0; u < e.aspectRatios.length; ++u) o.push(e.aspectRatios[u]), a.push(l);
                            if (e.interpolatedScaleAspectRatio > 0) {
                                var h = s === e.strides.length - 1 ? 1 : L(e.minScale, e.maxScale, s + 1, e.strides.length);
                                a.push(Math.sqrt(l * h)), o.push(e.interpolatedScaleAspectRatio)
                            }
                        }
                        s++
                    }
                    for (var c = 0; c < o.length; ++c) {
                        var p = Math.sqrt(o[c]);
                        n.push(a[c] / p), r.push(a[c] * p)
                    }
                    var d = 0,
                        f = 0;
                    if (e.featureMapHeight.length > 0) d = e.featureMapHeight[i], f = e.featureMapWidth[i];
                    else {
                        var m = e.strides[i];
                        d = Math.ceil(e.inputSizeHeight / m), f = Math.ceil(e.inputSizeWidth / m)
                    }
                    for (var g = 0; g < d; ++g)
                        for (var y = 0; y < f; ++y)
                            for (var v = 0; v < n.length; ++v) {
                                var x = {
                                    xCenter: (y + e.anchorOffsetX) / f,
                                    yCenter: (g + e.anchorOffsetY) / d,
                                    width: 0,
                                    height: 0
                                };
                                e.fixedAnchorSize ? (x.width = 1, x.height = 1) : (x.width = r[v], x.height = n[v]), t.push(x)
                            }
                    i = s
                }
                return t
            }(se);
            var s = i.tensor1d(this.anchors.map((function (e) {
                return e.width
            }))),
                l = i.tensor1d(this.anchors.map((function (e) {
                    return e.height
                }))),
                u = i.tensor1d(this.anchors.map((function (e) {
                    return e.xCenter
                }))),
                h = i.tensor1d(this.anchors.map((function (e) {
                    return e.yCenter
                })));
            this.anchorTensor = {
                x: u,
                y: h,
                w: s,
                h: l
            }, this.prevFilteredSegmentationMask = this.enableSegmentation ? i.tensor2d([], [0, 0]) : null
        }
        return e.prototype.estimatePoses = function (e, t, n) {
            return s(this, void 0, void 0, (function () {
                var r, o, s, u, h, p, d, f, m, g, y, v, x, w, k, b, M, S, T, F, z, O, A;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            return r = function (e) {
                                var t;
                                if (null == (t = null == e ? ue : a({}, e)).maxPoses && (t.maxPoses = 1), t.maxPoses <= 0) throw new Error("Invalid maxPoses " + t.maxPoses + ". Should be > 0.");
                                if (t.maxPoses > 1) throw new Error("Multi-pose detection is not implemented yet. Please set maxPoses to 1.");
                                return t
                            }(t), null == e ? (this.reset(), [2, []]) : (this.maxPoses = r.maxPoses, this.timestamp = null != n ? 1e3 * n : N(e) ? 1e6 * e.currentTime : null, o = P(e), s = i.tidy((function () {
                                return i.cast(_(e), "float32")
                            })), null != (u = this.regionOfInterest) ? [3, 2] : [4, this.detectPose(s)]);
                        case 1:
                            if (0 === (h = l.sent()).length) return this.reset(), s.dispose(), [2, []];
                            p = h[0], u = this.poseDetectionToRoi(p, o), l.label = 2;
                        case 2:
                            return [4, this.poseLandmarksByRoi(u, s)];
                        case 3:
                            return d = l.sent(), s.dispose(), null == d ? (this.reset(), [2, []]) : (f = d.landmarks, m = d.auxiliaryLandmarks, g = d.poseScore, y = d.worldLandmarks, v = d.segmentationMask, x = this.poseLandmarkFiltering(f, m, y, o), w = x.actualLandmarksFiltered, k = x.auxiliaryLandmarksFiltered, b = x.actualWorldLandmarksFiltered, M = this.poseLandmarksToRoi(k, o), this.regionOfInterest = M, S = this.smoothSegmentation && null != v ? this.poseSegmentationFiltering(v) : v, null != (T = null != w ? j(w, o) : null) && T.forEach((function (e, t) {
                                e.name = c[t]
                            })), null != (F = b) && F.forEach((function (e, t) {
                                e.name = c[t]
                            })), z = {
                                score: g,
                                keypoints: T,
                                keypoints3D: F
                            }, null !== S && (O = i.tidy((function () {
                                var e = i.expandDims(S, 2),
                                    t = i.pad(e, [
                                        [0, 0],
                                        [0, 0],
                                        [0, 1]
                                    ]);
                                return i.mirrorPad(t, [
                                    [0, 0],
                                    [0, 0],
                                    [0, 2]
                                ], "symmetric")
                            })), this.smoothSegmentation || i.dispose(S), A = {
                                maskValueToLabel: Te,
                                mask: new Se(O)
                            }, z.segmentation = A), [2, [z]])
                    }
                }))
            }))
        }, e.prototype.poseSegmentationFiltering = function (e) {
            var t = this.prevFilteredSegmentationMask;
            return 0 === t.size ? this.prevFilteredSegmentationMask = e : (this.prevFilteredSegmentationMask = X(t, e, Me), i.dispose(e)), i.dispose(t), this.prevFilteredSegmentationMask
        }, e.prototype.dispose = function () {
            this.detectorModel.dispose(), this.landmarkModel.dispose(), i.dispose([this.anchorTensor.x, this.anchorTensor.y, this.anchorTensor.w, this.anchorTensor.h, this.prevFilteredSegmentationMask])
        }, e.prototype.reset = function () {
            this.regionOfInterest = null, this.enableSegmentation && (i.dispose(this.prevFilteredSegmentationMask), this.prevFilteredSegmentationMask = i.tensor2d([], [0, 0])), this.visibilitySmoothingFilterActual = null, this.visibilitySmoothingFilterAuxiliary = null, this.landmarksSmoothingFilterActual = null, this.landmarksSmoothingFilterAuxiliary = null
        }, e.prototype.detectPose = function (e) {
            return s(this, void 0, void 0, (function () {
                var t, n, r, o, a, s, u, h, c, p;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            return t = B(e, de), n = t.imageTensor, r = t.padding, o = this.detectorModel.predict(n), a = D(o), s = a.boxes, [4, W([u = a.logits, s], this.anchorTensor, he)];
                        case 1:
                            return 0 === (h = l.sent()).length ? (i.dispose([n, o, u, s]), [2, h]) : [4, K(h, this.maxPoses, ce)];
                        case 2:
                            return c = l.sent(), p = function (e, t) {
                                void 0 === e && (e = []);
                                for (var i = t.left, n = t.top, r = t.left + t.right, o = t.top + t.bottom, a = 0; a < e.length; a++) {
                                    var s = e[a],
                                        l = s.locationData.relativeBoundingBox,
                                        u = (l.xMin - i) / (1 - r),
                                        h = (l.yMin - n) / (1 - o),
                                        c = l.width / (1 - r),
                                        p = l.height / (1 - o);
                                    l.xMin = u, l.yMin = h, l.width = c, l.height = p, l.xMax = u + c, l.yMax = h + p;
                                    var d = s.locationData.relativeKeypoints;
                                    d && d.forEach((function (e) {
                                        var t = (e.x - i) / (1 - r),
                                            a = (e.y - n) / (1 - o);
                                        e.x = t, e.y = a
                                    }))
                                }
                                return e
                            }(c, r), i.dispose([n, o, u, s]), [2, p]
                    }
                }))
            }))
        }, e.prototype.poseDetectionToRoi = function (e, t) {
            return 0, 1, $(A(e, t, {
                rotationVectorEndKeypointIndex: 1,
                rotationVectorStartKeypointIndex: 0,
                rotationVectorTargetAngleDegree: 90
            }), t, pe)
        }, e.prototype.poseLandmarksByRoi = function (e, t) {
            return s(this, void 0, void 0, (function () {
                var n, r, o, s, u, h, c, p, d, f, m, g, y, v;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            if (n = P(t), r = B(t, fe, e), o = r.imageTensor, s = r.padding, u = r.transformationMatrix, "lite" !== this.modelType && "full" !== this.modelType && "heavy" !== this.modelType) throw new Error("Model type must be one of lite, full or heavy,but got " + this.modelType);
                            return h = ["ld_3d", "output_poseflag", "activation_heatmap", "world_3d"], this.enableSegmentation && h.push("activation_segmentation"), c = this.landmarkModel.execute(o, h), [4, this.tensorsToPoseLandmarksAndSegmentation(c)];
                        case 1:
                            return null == (p = l.sent()) ? (i.dispose(c), i.dispose(o), [2, null]) : (d = p.landmarks, f = p.auxiliaryLandmarks, m = p.poseScore, g = p.worldLandmarks, y = p.segmentationMask, [4, this.poseLandmarksAndSegmentationInverseProjection(n, e, s, u, d, f, g, y)]);
                        case 2:
                            return v = l.sent(), i.dispose(c), i.dispose(o), [2, a({
                                poseScore: m
                            }, v)]
                    }
                }))
            }))
        }, e.prototype.poseLandmarksAndSegmentationInverseProjection = function (e, t, n, r, o, u, h, c) {
            return s(this, void 0, void 0, (function () {
                var s, p, d, f, m, g;
                return l(this, (function (l) {
                    return s = U(o, n), p = U(u, n), d = E(s, t), f = E(p, t), m = function (e, t) {
                        for (var i = [], n = 0, r = e; n < r.length; n++) {
                            var o = r[n],
                                s = o.x,
                                l = o.y,
                                u = t.rotation,
                                h = Math.cos(u) * s - Math.sin(u) * l,
                                c = Math.sin(u) * s + Math.cos(u) * l,
                                p = a({}, o);
                            p.x = h, p.y = c, i.push(p)
                        }
                        return i
                    }(h, t), g = null, this.enableSegmentation && (g = i.tidy((function () {
                        var t = c.shape,
                            n = t[0],
                            o = t[1],
                            a = function (e) {
                                var t = I(new Array(16).fill(0));
                                t[0][0] = R(e, 0, 0), t[1][0] = -R(e, 0, 1), t[2][0] = R(e, 0, 2), t[3][0] = -R(e, 0, 3), t[0][2] = R(e, 2, 0), t[1][2] = -R(e, 2, 1), t[2][2] = R(e, 2, 2), t[3][2] = -R(e, 2, 3), t[0][1] = -R(e, 1, 0), t[1][1] = R(e, 1, 1), t[2][1] = -R(e, 1, 2), t[3][1] = R(e, 1, 3), t[0][3] = -R(e, 3, 0), t[1][3] = R(e, 3, 1), t[2][3] = -R(e, 3, 2), t[3][3] = R(e, 3, 3);
                                for (var i = e[0][0] * t[0][0] + e[1][0] * t[0][1] + e[2][0] * t[0][2] + e[3][0] * t[0][3], n = 0; n < t.length; n++)
                                    for (var r = 0; r < t.length; r++) t[n][r] /= i;
                                return t
                            }(r),
                            s = i.tensor2d(z(a, {
                                width: o,
                                height: n
                            }, e), [1, 8]),
                            l = [1, n, o, 1];
                        return i.squeeze(i.image.transform(i.reshape(c, l), s, "bilinear", "constant", 0, [e.height, e.width]), [0, 3])
                    })), i.dispose(c)), [2, {
                        landmarks: d,
                        auxiliaryLandmarks: f,
                        worldLandmarks: m,
                        segmentationMask: g
                    }]
                }))
            }))
        }, e.prototype.tensorsToPoseLandmarksAndSegmentation = function (e) {
            return s(this, void 0, void 0, (function () {
                var t, n, r, o, s, u, h, c, p, d, f, m, g;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            return t = e[0], n = e[1], r = e[2], o = e[3], s = this.enableSegmentation ? e[4] : null, [4, n.data()];
                        case 1:
                            return (u = l.sent()[0]) < .5 ? [2, null] : [4, Z(t, me)];
                        case 2:
                            return [4, H(l.sent(), r, ye)];
                        case 3:
                            return h = l.sent(), c = h.slice(0, 33), p = h.slice(33, 35), [4, Z(o, ge)];
                        case 4:
                            return d = l.sent(), f = d.slice(0, 33), m = function (e, t, i) {
                                void 0 === i && (i = !0);
                                for (var n = [], r = 0; r < e.length; r++) {
                                    var o = a({}, t[r]);
                                    i && (o.score = e[r].score), n.push(o)
                                }
                                return n
                            }(c, f, !0), g = this.enableSegmentation ? function (e, t, n) {
                                return i.tidy((function () {
                                    var r = i.squeeze(e, [0]),
                                        o = r.shape[2];
                                    if (1 === o) {
                                        var a = r;
                                        switch (t.activation) {
                                            case "none":
                                                break;
                                            case "sigmoid":
                                                a = i.sigmoid(a);
                                                break;
                                            case "softmax":
                                                throw new Error("Softmax activation requires two channels.");
                                            default:
                                                throw new Error("Activation not supported (" + t.activation + ")")
                                        }
                                        var s = n ? i.image.resizeBilinear(a, [n.height, n.width]) : a;
                                        return i.squeeze(s, [2])
                                    }
                                    throw new Error("Unsupported number of tensor channels " + o)
                                }))
                            }(s, be) : null, [2, {
                                landmarks: c,
                                auxiliaryLandmarks: p,
                                poseScore: u,
                                worldLandmarks: m,
                                segmentationMask: g
                            }]
                    }
                }))
            }))
        }, e.prototype.poseLandmarksToRoi = function (e, t) {
            return $(A(q(e), t, {
                rotationVectorStartKeypointIndex: 0,
                rotationVectorEndKeypointIndex: 1,
                rotationVectorTargetAngleDegree: 90
            }), t, pe)
        }, e.prototype.poseLandmarkFiltering = function (e, t, i, n) {
            var r, o, a;
            if (null != this.timestamp && this.enableSmoothing) {
                var s = A(q(t), n, {
                    rotationVectorEndKeypointIndex: 0,
                    rotationVectorStartKeypointIndex: 1,
                    rotationVectorTargetAngleDegree: 90
                });
                null == this.visibilitySmoothingFilterActual && (this.visibilitySmoothingFilterActual = new ae(ve)), r = this.visibilitySmoothingFilterActual.apply(e), null == this.visibilitySmoothingFilterAuxiliary && (this.visibilitySmoothingFilterAuxiliary = new ae(ve)), o = this.visibilitySmoothingFilterAuxiliary.apply(t), a = this.visibilitySmoothingFilterActual.apply(i), null == this.landmarksSmoothingFilterActual && (this.landmarksSmoothingFilterActual = new oe(xe)), r = this.landmarksSmoothingFilterActual.apply(r, this.timestamp, n, !0, s), null == this.landmarksSmoothingFilterAuxiliary && (this.landmarksSmoothingFilterAuxiliary = new oe(we)), o = this.landmarksSmoothingFilterAuxiliary.apply(o, this.timestamp, n, !0, s), null == this.worldLandmarksSmoothingFilterActual && (this.worldLandmarksSmoothingFilterActual = new oe(ke)), a = this.worldLandmarksSmoothingFilterActual.apply(i, this.timestamp)
            } else r = e, o = t, a = i;
            return {
                actualLandmarksFiltered: r,
                auxiliaryLandmarksFiltered: o,
                actualWorldLandmarksFiltered: a
            }
        }, e
    }();

    function Fe(e) {
        return s(this, void 0, void 0, (function () {
            var t, i, r, o, s, u;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return t = function (e) {
                            var t = a({}, null == e ? le : e);
                            if (null == t.enableSmoothing && (t.enableSmoothing = le.enableSmoothing), null == t.enableSegmentation && (t.enableSegmentation = le.enableSegmentation), null == t.smoothSegmentation && (t.smoothSegmentation = le.smoothSegmentation), null == t.modelType && (t.modelType = le.modelType), null == t.detectorModelUrl && (t.detectorModelUrl = le.detectorModelUrl), null == t.landmarkModelUrl) switch (t.modelType) {
                                case "lite":
                                    t.landmarkModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/lite/2";
                                    break;
                                case "heavy":
                                    t.landmarkModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/heavy/2";
                                    break;
                                case "full":
                                default:
                                    t.landmarkModelUrl = "https://tfhub.dev/mediapipe/tfjs-model/blazepose_3d/landmark/full/2"
                            }
                            return t
                        }(e), i = "string" == typeof t.detectorModelUrl && t.detectorModelUrl.indexOf("https://tfhub.dev") > -1, r = "string" == typeof t.landmarkModelUrl && t.landmarkModelUrl.indexOf("https://tfhub.dev") > -1, [4, Promise.all([n.loadGraphModel(t.detectorModelUrl, {
                            fromTFHub: i
                        }), n.loadGraphModel(t.landmarkModelUrl, {
                            fromTFHub: r
                        })])];
                    case 1:
                        return o = l.sent(), s = o[0], u = o[1], [2, new Pe(s, u, t.enableSmoothing, t.enableSegmentation, t.smoothSegmentation, t.modelType)]
                }
            }))
        }))
    }
    var _e, ze, Oe = function () {
        function e(e) {
            ! function (e) {
                if (e.maxTracks < 1) throw new Error("Must specify 'maxTracks' to be at least 1, but encountered " + e.maxTracks);
                if (e.maxAge <= 0) throw new Error("Must specify 'maxAge' to be positive, but encountered " + e.maxAge);
                if (void 0 !== e.keypointTrackerParams) {
                    if (e.keypointTrackerParams.keypointConfidenceThreshold < 0 || e.keypointTrackerParams.keypointConfidenceThreshold > 1) throw new Error("Must specify 'keypointConfidenceThreshold' to be in the range [0, 1], but encountered " + e.keypointTrackerParams.keypointConfidenceThreshold);
                    if (e.keypointTrackerParams.minNumberOfKeypoints < 1) throw new Error("Must specify 'minNumberOfKeypoints' to be at least 1, but encountered " + e.keypointTrackerParams.minNumberOfKeypoints);
                    for (var t = 0, i = e.keypointTrackerParams.keypointFalloff; t < i.length; t++) {
                        var n = i[t];
                        if (n <= 0) throw new Error("Must specify each keypoint falloff parameterto be positive but encountered " + n)
                    }
                }
            }(e), this.tracks = [], this.maxTracks = e.maxTracks, this.maxAge = 1e3 * e.maxAge, this.minSimilarity = e.minSimilarity, this.nextID = 1
        }
        return e.prototype.apply = function (e, t) {
            this.filterOldTracks(t);
            var i = this.computeSimilarity(e);
            return this.assignTracks(e, i, t), this.updateTracks(t), e
        }, e.prototype.getTracks = function () {
            return this.tracks.slice()
        }, e.prototype.getTrackIDs = function () {
            return new Set(this.tracks.map((function (e) {
                return e.id
            })))
        }, e.prototype.filterOldTracks = function (e) {
            var t = this;
            this.tracks = this.tracks.filter((function (i) {
                return e - i.lastTimestamp <= t.maxAge
            }))
        }, e.prototype.assignTracks = function (e, t, i) {
            for (var n = Array.from(Array(t[0].length).keys()), r = [], o = 0, a = Array.from(Array(e.length).keys()); o < a.length; o++) {
                var s = a[o];
                if (0 !== n.length) {
                    for (var l = -1, u = -1, h = 0, c = n; h < c.length; h++) {
                        var p = c[h],
                            d = t[s][p];
                        d >= this.minSimilarity && d > u && (l = p, u = d)
                    }
                    if (l >= 0) {
                        var f = this.tracks[l];
                        f = Object.assign(f, this.createTrack(e[s], i, f.id)), e[s].id = f.id;
                        var m = n.indexOf(l);
                        n.splice(m, 1)
                    } else r.push(s)
                } else r.push(s)
            }
            for (var g = 0, y = r; g < y.length; g++) {
                s = y[g];
                var v = this.createTrack(e[s], i);
                this.tracks.push(v), e[s].id = v.id
            }
        }, e.prototype.updateTracks = function (e) {
            this.tracks.sort((function (e, t) {
                return t.lastTimestamp - e.lastTimestamp
            })), this.tracks = this.tracks.slice(0, this.maxTracks)
        }, e.prototype.createTrack = function (e, t, i) {
            var n = {
                id: i || this.nextTrackID(),
                lastTimestamp: t,
                keypoints: u(e.keypoints).map((function (e) {
                    return a({}, e)
                }))
            };
            return void 0 !== e.box && (n.box = a({}, e.box)), n
        }, e.prototype.nextTrackID = function () {
            var e = this.nextID;
            return this.nextID += 1, e
        }, e.prototype.remove = function () {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            this.tracks = this.tracks.filter((function (t) {
                return !e.includes(t.id)
            }))
        }, e.prototype.reset = function () {
            this.tracks = []
        }, e
    }(),
        Ae = function (e) {
            function t(t) {
                return e.call(this, t) || this
            }
            return o(t, e), t.prototype.computeSimilarity = function (e) {
                var t = this;
                return 0 === e.length || 0 === this.tracks.length ? [
                    []
                ] : e.map((function (e) {
                    return t.tracks.map((function (i) {
                        return t.iou(e, i)
                    }))
                }))
            }, t.prototype.iou = function (e, t) {
                var i = Math.max(e.box.xMin, t.box.xMin),
                    n = Math.max(e.box.yMin, t.box.yMin),
                    r = Math.min(e.box.xMax, t.box.xMax),
                    o = Math.min(e.box.yMax, t.box.yMax);
                if (i >= r || n >= o) return 0;
                var a = (r - i) * (o - n);
                return a / (e.box.width * e.box.height + t.box.width * t.box.height - a)
            }, t
        }(Oe),
        Ie = function (e) {
            function t(t) {
                var i = e.call(this, t) || this;
                return i.keypointThreshold = t.keypointTrackerParams.keypointConfidenceThreshold, i.keypointFalloff = t.keypointTrackerParams.keypointFalloff, i.minNumKeyoints = t.keypointTrackerParams.minNumberOfKeypoints, i
            }
            return o(t, e), t.prototype.computeSimilarity = function (e) {
                if (0 === e.length || 0 === this.tracks.length) return [
                    []
                ];
                for (var t = [], i = 0, n = e; i < n.length; i++) {
                    for (var r = n[i], o = [], a = 0, s = this.tracks; a < s.length; a++) {
                        var l = s[a];
                        o.push(this.oks(r, l))
                    }
                    t.push(o)
                }
                return t
            }, t.prototype.oks = function (e, t) {
                for (var i = this.area(t.keypoints) + 1e-6, n = 0, r = 0, o = 0; o < e.keypoints.length; ++o) {
                    var a = e.keypoints[o],
                        s = t.keypoints[o];
                    if (!(a.score < this.keypointThreshold || s.score < this.keypointThreshold)) {
                        r += 1;
                        var l = Math.pow(a.x - s.x, 2) + Math.pow(a.y - s.y, 2),
                            u = 2 * this.keypointFalloff[o];
                        n += Math.exp(-1 * l / (2 * i * Math.pow(u, 2)))
                    }
                }
                return r < this.minNumKeyoints ? 0 : n / r
            }, t.prototype.area = function (e) {
                var t = this,
                    i = e.filter((function (e) {
                        return e.score > t.keypointThreshold
                    })),
                    n = Math.min.apply(Math, u([1], i.map((function (e) {
                        return e.x
                    })))),
                    r = Math.max.apply(Math, u([0], i.map((function (e) {
                        return e.x
                    })))),
                    o = Math.min.apply(Math, u([1], i.map((function (e) {
                        return e.y
                    }))));
                return (r - n) * (Math.max.apply(Math, u([0], i.map((function (e) {
                    return e.y
                })))) - o)
            }, t
        }(Oe);

    function Ce(t) {
        switch (t) {
            case e.SupportedModels.BlazePose:
                return c.reduce((function (e, t, i) {
                    return e[t] = i, e
                }), {});
            case e.SupportedModels.PoseNet:
            case e.SupportedModels.MoveNet:
                return h.reduce((function (e, t, i) {
                    return e[t] = i, e
                }), {});
            default:
                throw new Error("Model " + t + " is not supported.")
        }
    } (_e = e.TrackerType || (e.TrackerType = {})).Keypoint = "keypoint", _e.BoundingBox = "boundingBox", (ze = e.SupportedModels || (e.SupportedModels = {})).MoveNet = "MoveNet", ze.BlazePose = "BlazePose", ze.PoseNet = "PoseNet";
    var Re = Object.freeze({
        __proto__: null,
        getKeypointIndexBySide: function (t) {
            switch (t) {
                case e.SupportedModels.BlazePose:
                    return p;
                case e.SupportedModels.PoseNet:
                case e.SupportedModels.MoveNet:
                    return d;
                default:
                    throw new Error("Model " + t + " is not supported.")
            }
        },
        getAdjacentPairs: function (t) {
            switch (t) {
                case e.SupportedModels.BlazePose:
                    return m;
                case e.SupportedModels.PoseNet:
                case e.SupportedModels.MoveNet:
                    return f;
                default:
                    throw new Error("Model " + t + " is not supported.")
            }
        },
        getKeypointIndexByName: Ce
    }),
        Ee = ["SinglePose.Lightning", "SinglePose.Thunder", "MultiPose.Lightning"],
        Ve = {
            modelType: "SinglePose.Lightning",
            enableSmoothing: !0
        },
        Be = {},
        Le = {
            frequency: 30,
            minCutOff: 2.5,
            beta: 300,
            derivateCutOff: 2.5,
            thresholdCutOff: .5,
            thresholdBeta: 5,
            disableValueScaling: !0
        },
        De = {
            maxTracks: 18,
            maxAge: 1e3,
            minSimilarity: .2,
            keypointTrackerParams: {
                keypointConfidenceThreshold: .3,
                keypointFalloff: [.026, .025, .025, .035, .035, .079, .079, .072, .072, .062, .062, .107, .107, .087, .087, .089, .089],
                minNumberOfKeypoints: 4
            }
        },
        Ne = {
            maxTracks: 18,
            maxAge: 1e3,
            minSimilarity: .15,
            trackerParams: {}
        };

    function qe(e, t, i, n) {
        for (var r = {}, o = 0, a = h; o < a.length; o++) {
            var s = a[o];
            r[s] = [t[i[s]].y * n.height, t[i[s]].x * n.width]
        }
        if (function (e, t) {
            return (e[t.left_hip].score > .2 || e[t.right_hip].score > .2) && (e[t.left_shoulder].score > .2 || e[t.right_shoulder].score > .2)
        }(t, i)) {
            var l = (r.left_hip[0] + r.right_hip[0]) / 2,
                u = (r.left_hip[1] + r.right_hip[1]) / 2,
                c = function (e, t, i, n, r) {
                    for (var o = ["left_shoulder", "right_shoulder", "left_hip", "right_hip"], a = 0, s = 0, l = 0; l < o.length; l++) {
                        (d = Math.abs(n - i[o[l]][0])) > a && (a = d), (f = Math.abs(r - i[o[l]][1])) > s && (s = f)
                    }
                    for (var u = 0, h = 0, c = 0, p = Object.keys(i); c < p.length; c++) {
                        var d, f, m = p[c];
                        if (!(e[t[m]].score < .2)) (d = Math.abs(n - i[m][0])) > u && (u = d), (f = Math.abs(r - i[m][1])) > h && (h = f)
                    }
                    return [a, s, u, h]
                }(t, i, r, l, u),
                p = c[0],
                d = c[1],
                f = c[2],
                m = c[3],
                g = Math.max(1.9 * d, 1.9 * p, 1.2 * f, 1.2 * m),
                y = [l - (g = Math.min(g, Math.max(u, n.width - u, l, n.height - l))), u - g];
            if (g > Math.max(n.width, n.height) / 2) return Ke(null == e, n);
            var v = 2 * g;
            return {
                yMin: y[0] / n.height,
                xMin: y[1] / n.width,
                yMax: (y[0] + v) / n.height,
                xMax: (y[1] + v) / n.width,
                height: (y[0] + v) / n.height - y[0] / n.height,
                width: (y[1] + v) / n.width - y[1] / n.width
            }
        }
        return Ke(null == e, n)
    }

    function Ke(e, t) {
        var i, n, r, o;
        return e ? t.width > t.height ? (i = 1, n = t.height / t.width, r = 0, o = (t.width / 2 - t.height / 2) / t.width) : (i = t.width / t.height, n = 1, r = (t.height / 2 - t.width / 2) / t.height, o = 0) : t.width > t.height ? (i = t.width / t.height, n = 1, r = (t.height / 2 - t.width / 2) / t.height, o = 0) : (i = 1, n = t.height / t.width, r = 0, o = (t.width / 2 - t.height / 2) / t.width), {
            yMin: r,
            xMin: o,
            yMax: r + i,
            xMax: o + n,
            height: i,
            width: n
        }
    }

    function je(t) {
        var i, n = null == t ? Ve : a({}, t);
        if (null == n.modelType) n.modelType = "SinglePose.Lightning";
        else if (Ee.indexOf(n.modelType) < 0) throw new Error("Invalid architecture " + n.modelType + ". Should be one of " + Ee);
        if (null == n.enableSmoothing && (n.enableSmoothing = !0), null != n.minPoseScore && (n.minPoseScore < 0 || n.minPoseScore > 1)) throw new Error("minPoseScore should be between 0.0 and 1.0");
        if (null != n.multiPoseMaxDimension && (n.multiPoseMaxDimension % 32 != 0 || n.multiPoseMaxDimension < 32)) throw new Error("multiPoseMaxDimension must be a multiple of 32 and higher than 0");
        if ("MultiPose.Lightning" === n.modelType && null == n.enableTracking && (n.enableTracking = !0), "MultiPose.Lightning" === n.modelType && !0 === n.enableTracking)
            if (null == n.trackerType && (n.trackerType = e.TrackerType.BoundingBox), n.trackerType === e.TrackerType.Keypoint) null != n.trackerConfig ? n.trackerConfig = function (e) {
                var t = He(De, e);
                t.keypointTrackerParams = a({}, De.keypointTrackerParams), null != e.keypointTrackerParams && (null != e.keypointTrackerParams.keypointConfidenceThreshold && (t.keypointTrackerParams.keypointConfidenceThreshold = e.keypointTrackerParams.keypointConfidenceThreshold), null != e.keypointTrackerParams.keypointFalloff && (t.keypointTrackerParams.keypointFalloff = e.keypointTrackerParams.keypointFalloff), null != e.keypointTrackerParams.minNumberOfKeypoints && (t.keypointTrackerParams.minNumberOfKeypoints = e.keypointTrackerParams.minNumberOfKeypoints));
                return t
            }(n.trackerConfig) : n.trackerConfig = De;
            else {
                if (n.trackerType !== e.TrackerType.BoundingBox) throw new Error("Tracker type not supported by MoveNet");
                null != n.trackerConfig ? n.trackerConfig = (i = n.trackerConfig, He(Ne, i)) : n.trackerConfig = Ne
            } return n
    }

    function He(e, t) {
        var i = {
            maxTracks: e.maxTracks,
            maxAge: e.maxAge,
            minSimilarity: e.minSimilarity
        };
        return null != t.maxTracks && (i.maxTracks = t.maxTracks), null != t.maxAge && (i.maxAge = t.maxAge), null != t.minSimilarity && (i.minSimilarity = t.minSimilarity), i
    }
    var Ue = function () {
        function t(t, i) {
            this.moveNetModel = t, this.modelInputResolution = {
                height: 0,
                width: 0
            }, this.keypointIndexByName = Ce(e.SupportedModels.MoveNet), "SinglePose.Lightning" === i.modelType ? (this.modelInputResolution.width = 192, this.modelInputResolution.height = 192) : "SinglePose.Thunder" === i.modelType && (this.modelInputResolution.width = 256, this.modelInputResolution.height = 256), this.multiPoseModel = "MultiPose.Lightning" === i.modelType, this.multiPoseModel || (this.keypointFilter = new ie(Le), this.cropRegionFilterYMin = new ee(.9), this.cropRegionFilterXMin = new ee(.9), this.cropRegionFilterYMax = new ee(.9), this.cropRegionFilterXMax = new ee(.9)), this.enableSmoothing = i.enableSmoothing, i.minPoseScore ? this.minPoseScore = i.minPoseScore : this.minPoseScore = .25, i.multiPoseMaxDimension ? this.multiPoseMaxDimension = i.multiPoseMaxDimension : this.multiPoseMaxDimension = 256, this.enableTracking = i.enableTracking, this.multiPoseModel && this.enableTracking && (i.trackerType === e.TrackerType.Keypoint ? this.tracker = new Ie(i.trackerConfig) : i.trackerType === e.TrackerType.BoundingBox && (this.tracker = new Ae(i.trackerConfig)), this.enableSmoothing && (this.keypointFilterMap = new Map))
        }
        return t.prototype.runSinglePersonPoseModel = function (e) {
            return s(this, void 0, void 0, (function () {
                var t, n, r, o, a;
                return l(this, (function (s) {
                    switch (s.label) {
                        case 0:
                            if (4 !== (t = this.moveNetModel.execute(e)).shape.length || 1 !== t.shape[0] || 1 !== t.shape[1] || 17 !== t.shape[2] || 3 !== t.shape[3]) throw t.dispose(), new Error("Unexpected output shape from model: [" + t.shape + "]");
                            return "webgpu" === i.getBackend() ? [3, 1] : (n = t.dataSync(), [3, 3]);
                        case 1:
                            return [4, t.data()];
                        case 2:
                            n = s.sent(), s.label = 3;
                        case 3:
                            for (t.dispose(), r = {
                                keypoints: [],
                                score: 0
                            }, o = 0, a = 0; a < 17; ++a) r.keypoints[a] = {
                                y: n[3 * a],
                                x: n[3 * a + 1],
                                score: n[3 * a + 2]
                            }, r.keypoints[a].score > .2 && (++o, r.score += r.keypoints[a].score);
                            return o > 0 && (r.score /= o), [2, r]
                    }
                }))
            }))
        }, t.prototype.runMultiPersonPoseModel = function (e) {
            return s(this, void 0, void 0, (function () {
                var t, n, r, o, a, s, u, h;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            if (3 !== (t = this.moveNetModel.execute(e)).shape.length || 1 !== t.shape[0] || 56 !== t.shape[2]) throw t.dispose(), new Error("Unexpected output shape from model: [" + t.shape + "]");
                            return "webgpu" === i.getBackend() ? [3, 1] : (n = t.dataSync(), [3, 3]);
                        case 1:
                            return [4, t.data()];
                        case 2:
                            n = l.sent(), l.label = 3;
                        case 3:
                            for (t.dispose(), r = [], o = n.length / 56, a = 0; a < o; ++a)
                                for (r[a] = {
                                    keypoints: []
                                }, s = 56 * a + 51, r[a].box = {
                                    yMin: n[s],
                                    xMin: n[s + 1],
                                    yMax: n[s + 2],
                                    xMax: n[s + 3],
                                    width: n[s + 3] - n[s + 1],
                                    height: n[s + 2] - n[s]
                                }, u = 56 * a + 55, r[a].score = n[u], r[a].keypoints = [], h = 0; h < 17; ++h) r[a].keypoints[h] = {
                                    y: n[56 * a + 3 * h],
                                    x: n[56 * a + 3 * h + 1],
                                    score: n[56 * a + 3 * h + 2]
                                };
                            return [2, r]
                    }
                }))
            }))
        }, t.prototype.estimatePoses = function (e, t, n) {
            return void 0 === t && (t = Be), s(this, void 0, void 0, (function () {
                var r, o, s, u, c, p;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            return t = function (e) {
                                return null == e ? Be : a({}, e)
                            }(t), null == e ? (this.reset(), [2, []]) : (null == n ? N(e) && (n = 1e6 * e.currentTime) : n *= 1e3, r = _(e), o = P(r), s = i.expandDims(r, 0), e instanceof i.Tensor || r.dispose(), u = [], this.multiPoseModel ? [3, 2] : [4, this.estimateSinglePose(s, o, n)]);
                        case 1:
                            return u = l.sent(), [3, 4];
                        case 2:
                            return [4, this.estimateMultiplePoses(s, o, n)];
                        case 3:
                            u = l.sent(), l.label = 4;
                        case 4:
                            for (c = 0; c < u.length; ++c)
                                for (p = 0; p < u[c].keypoints.length; ++p) u[c].keypoints[p].name = h[p], u[c].keypoints[p].y *= o.height, u[c].keypoints[p].x *= o.width;
                            return [2, u]
                    }
                }))
            }))
        }, t.prototype.estimateSinglePose = function (e, t, n) {
            return s(this, void 0, void 0, (function () {
                var r, o, a, s, u = this;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            return this.cropRegion || (this.cropRegion = Ke(null == this.cropRegion, t)), r = i.tidy((function () {
                                var t = i.tensor2d([
                                    [u.cropRegion.yMin, u.cropRegion.xMin, u.cropRegion.yMax, u.cropRegion.xMax]
                                ]),
                                    n = i.zeros([1], "int32"),
                                    r = [u.modelInputResolution.height, u.modelInputResolution.width];
                                return i.cast(i.image.cropAndResize(e, t, n, r, "bilinear", 0), "int32")
                            })), e.dispose(), [4, this.runSinglePersonPoseModel(r)];
                        case 1:
                            if (o = l.sent(), r.dispose(), o.score < this.minPoseScore) return this.reset(), [2, []];
                            for (a = 0; a < o.keypoints.length; ++a) o.keypoints[a].y = this.cropRegion.yMin + o.keypoints[a].y * this.cropRegion.height, o.keypoints[a].x = this.cropRegion.xMin + o.keypoints[a].x * this.cropRegion.width;
                            return null != n && this.enableSmoothing && (o.keypoints = this.keypointFilter.apply(o.keypoints, n, 1)), s = qe(this.cropRegion, o.keypoints, this.keypointIndexByName, t), this.cropRegion = this.filterCropRegion(s), [2, [o]]
                    }
                }))
            }))
        }, t.prototype.estimateMultiplePoses = function (e, t, n) {
            return s(this, void 0, void 0, (function () {
                var r, o, a, s, u, h, c, p, d, f, m, g = this;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            return 32, t.width > t.height ? (o = this.multiPoseMaxDimension, a = Math.round(this.multiPoseMaxDimension * t.height / t.width), r = i.image.resizeBilinear(e, [a, o]), u = o, h = 32 * Math.ceil(a / 32), s = i.pad(r, [
                                [0, 0],
                                [0, h - a],
                                [0, 0],
                                [0, 0]
                            ])) : (o = Math.round(this.multiPoseMaxDimension * t.width / t.height), a = this.multiPoseMaxDimension, r = i.image.resizeBilinear(e, [a, o]), u = 32 * Math.ceil(o / 32), h = a, s = i.pad(r, [
                                [0, 0],
                                [0, 0],
                                [0, u - o],
                                [0, 0]
                            ])), r.dispose(), e.dispose(), c = i.cast(s, "int32"), s.dispose(), [4, this.runMultiPersonPoseModel(c)];
                        case 1:
                            for (p = l.sent(), c.dispose(), p = p.filter((function (e) {
                                return e.score >= g.minPoseScore
                            })), f = 0; f < p.length; ++f)
                                for (d = 0; d < p[f].keypoints.length; ++d) p[f].keypoints[d].y *= h / a, p[f].keypoints[d].x *= u / o;
                            if (this.enableTracking && (this.tracker.apply(p, n), this.enableSmoothing)) {
                                for (f = 0; f < p.length; ++f) this.keypointFilterMap.has(p[f].id) || this.keypointFilterMap.set(p[f].id, new ie(Le)), p[f].keypoints = this.keypointFilterMap.get(p[f].id).apply(p[f].keypoints, n, 1);
                                m = this.tracker.getTrackIDs(), this.keypointFilterMap.forEach((function (e, t) {
                                    m.has(t) || g.keypointFilterMap.delete(t)
                                }))
                            }
                            return [2, p]
                    }
                }))
            }))
        }, t.prototype.filterCropRegion = function (e) {
            if (e) {
                var t = this.cropRegionFilterYMin.apply(e.yMin),
                    i = this.cropRegionFilterXMin.apply(e.xMin),
                    n = this.cropRegionFilterYMax.apply(e.yMax),
                    r = this.cropRegionFilterXMax.apply(e.xMax);
                return {
                    yMin: t,
                    xMin: i,
                    yMax: n,
                    xMax: r,
                    height: n - t,
                    width: r - i
                }
            }
            return this.cropRegionFilterYMin.reset(), this.cropRegionFilterXMin.reset(), this.cropRegionFilterYMax.reset(), this.cropRegionFilterXMax.reset(), null
        }, t.prototype.dispose = function () {
            this.moveNetModel.dispose()
        }, t.prototype.reset = function () {
            this.cropRegion = null, this.resetFilters()
        }, t.prototype.resetFilters = function () {
            this.keypointFilter.reset(), this.cropRegionFilterYMin.reset(), this.cropRegionFilterXMin.reset(), this.cropRegionFilterYMax.reset(), this.cropRegionFilterXMax.reset()
        }, t
    }();

    function Xe(e) {
        return void 0 === e && (e = Ve), s(this, void 0, void 0, (function () {
            var t, r, o, a;
            return l(this, (function (s) {
                switch (s.label) {
                    case 0:
                        return t = je(e), o = !0, t.modelUrl ? (o = "string" == typeof t.modelUrl && t.modelUrl.indexOf("https://tfhub.dev") > -1, [4, n.loadGraphModel(t.modelUrl, {
                            fromTFHub: o
                        })]) : [3, 2];
                    case 1:
                        return r = s.sent(), [3, 4];
                    case 2:
                        return a = void 0, "SinglePose.Lightning" === t.modelType ? a = "https://tfhub.dev/google/tfjs-model/movenet/singlepose/lightning/4" : "SinglePose.Thunder" === t.modelType ? a = "https://tfhub.dev/google/tfjs-model/movenet/singlepose/thunder/4" : "MultiPose.Lightning" === t.modelType && (a = "https://tfhub.dev/google/tfjs-model/movenet/multipose/lightning/1"), [4, n.loadGraphModel(a, {
                            fromTFHub: o
                        })];
                    case 3:
                        r = s.sent(), s.label = 4;
                    case 4:
                        return "webgl" === i.getBackend() && i.env().set("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD", 0), [2, new Ue(r, t)]
                }
            }))
        }))
    }
    var We = {
        architecture: "MobileNetV1",
        outputStride: 16,
        multiplier: .75,
        inputResolution: {
            height: 257,
            width: 257
        }
    },
        Ge = ["MobileNetV1", "ResNet50"],
        Ye = {
            MobileNetV1: [8, 16],
            ResNet50: [16]
        },
        Qe = [8, 16, 32],
        Ze = {
            MobileNetV1: [.5, .75, 1],
            ResNet50: [1]
        },
        $e = [1, 2, 4],
        Je = {
            maxPoses: 1,
            flipHorizontal: !1
        },
        et = {
            maxPoses: 5,
            flipHorizontal: !1,
            scoreThreshold: .5,
            nmsRadius: 20
        },
        tt = [-123.15, -115.9, -103.06];

    function it(e) {
        return Math.floor(e / 2)
    }
    var nt = function () {
        function e(e, t) {
            this.priorityQueue = new Array(e), this.numberOfElements = -1, this.getElementValue = t
        }
        return e.prototype.enqueue = function (e) {
            this.priorityQueue[++this.numberOfElements] = e, this.swim(this.numberOfElements)
        }, e.prototype.dequeue = function () {
            var e = this.priorityQueue[0];
            return this.exchange(0, this.numberOfElements--), this.sink(0), this.priorityQueue[this.numberOfElements + 1] = null, e
        }, e.prototype.empty = function () {
            return -1 === this.numberOfElements
        }, e.prototype.size = function () {
            return this.numberOfElements + 1
        }, e.prototype.all = function () {
            return this.priorityQueue.slice(0, this.numberOfElements + 1)
        }, e.prototype.max = function () {
            return this.priorityQueue[0]
        }, e.prototype.swim = function (e) {
            for (; e > 0 && this.less(it(e), e);) this.exchange(e, it(e)), e = it(e)
        }, e.prototype.sink = function (e) {
            for (; 2 * e <= this.numberOfElements;) {
                var t = 2 * e;
                if (t < this.numberOfElements && this.less(t, t + 1) && t++, !this.less(e, t)) break;
                this.exchange(e, t), e = t
            }
        }, e.prototype.getValueAt = function (e) {
            return this.getElementValue(this.priorityQueue[e])
        }, e.prototype.less = function (e, t) {
            return this.getValueAt(e) < this.getValueAt(t)
        }, e.prototype.exchange = function (e, t) {
            var i = this.priorityQueue[e];
            this.priorityQueue[e] = this.priorityQueue[t], this.priorityQueue[t] = i
        }, e
    }();

    function rt(e, t, i, n, r, o) {
        for (var a = o.shape, s = a[0], l = a[1], u = !0, h = Math.max(i - r, 0), c = Math.min(i + r + 1, s), p = h; p < c; ++p) {
            for (var d = Math.max(n - r, 0), f = Math.min(n + r + 1, l), m = d; m < f; ++m)
                if (o.get(p, m, e) > t) {
                    u = !1;
                    break
                } if (!u) break
        }
        return u
    }

    function ot(e) {
        return s(this, void 0, void 0, (function () {
            return l(this, (function (t) {
                return [2, Promise.all(e.map((function (e) {
                    return e.buffer()
                })))]
            }))
        }))
    }

    function at(e, t, i, n) {
        return {
            y: n.get(e, t, i),
            x: n.get(e, t, i + 17)
        }
    }

    function st(e, t, i) {
        var n = at(e.heatmapY, e.heatmapX, e.id, i),
            r = n.y,
            o = n.x;
        return {
            x: e.heatmapX * t + o,
            y: e.heatmapY * t + r
        }
    }

    function lt(e, t, i, n) {
        var r = i.x,
            o = i.y;
        return e.some((function (e) {
            var i, a, s, l, u, h, c = e.keypoints;
            return i = o, a = r, s = c[n].y, l = c[n].x, (u = s - i) * u + (h = l - a) * h <= t
        }))
    }
    var ut = h.reduce((function (e, t, i) {
        return e[t] = i, e
    }), {}),
        ht = [
            ["nose", "left_eye"],
            ["left_eye", "left_ear"],
            ["nose", "right_eye"],
            ["right_eye", "right_ear"],
            ["nose", "left_shoulder"],
            ["left_shoulder", "left_elbow"],
            ["left_elbow", "left_wrist"],
            ["left_shoulder", "left_hip"],
            ["left_hip", "left_knee"],
            ["left_knee", "left_ankle"],
            ["nose", "right_shoulder"],
            ["right_shoulder", "right_elbow"],
            ["right_elbow", "right_wrist"],
            ["right_shoulder", "right_hip"],
            ["right_hip", "right_knee"],
            ["right_knee", "right_ankle"]
        ].map((function (e) {
            var t = e[0],
                i = e[1];
            return [ut[t], ut[i]]
        })),
        ct = ht.map((function (e) {
            return e[1]
        })),
        pt = ht.map((function (e) {
            return e[0]
        }));

    function dt(e, t, i) {
        return e < t ? t : e > i ? i : e
    }

    function ft(e, t, i, n) {
        return {
            y: dt(Math.round(e.y / t), 0, i - 1),
            x: dt(Math.round(e.x / t), 0, n - 1)
        }
    }

    function mt(e, t) {
        return {
            x: e.x + t.x,
            y: e.y + t.y
        }
    }

    function gt(e, t, i, n, r, o, a, s) {
        void 0 === s && (s = 2);
        for (var l = n.shape, u = l[0], c = l[1], p = {
            y: t.y,
            x: t.x
        }, d = mt(p, function (e, t, i) {
            var n = i.shape[2] / 2;
            return {
                y: i.get(t.y, t.x, e),
                x: i.get(t.y, t.x, n + e)
            }
        }(e, ft(p, o, u, c), a)), f = 0; f < s; f++) {
            var m = ft(d, o, u, c),
                g = at(m.y, m.x, i, r);
            d = mt({
                x: m.x * o,
                y: m.y * o
            }, {
                x: g.x,
                y: g.y
            })
        }
        var y = ft(d, o, u, c),
            v = n.get(y.y, y.x, i);
        return {
            y: d.y,
            x: d.x,
            name: h[i],
            score: v
        }
    }

    function yt(e, t, i, n, r, o) {
        var a = t.shape[2],
            s = ct.length,
            l = new Array(a),
            u = e.part,
            c = e.score,
            p = st(u, n, i);
        l[u.id] = {
            score: c,
            name: h[u.id],
            y: p.y,
            x: p.x
        };
        for (var d = s - 1; d >= 0; --d) {
            var f = ct[d],
                m = pt[d];
            l[f] && !l[m] && (l[m] = gt(d, l[f], m, t, i, n, o))
        }
        for (d = 0; d < s; ++d) {
            f = pt[d], m = ct[d];
            l[f] && !l[m] && (l[m] = gt(d, l[f], m, t, i, n, r))
        }
        return l
    }

    function vt(e, t, i) {
        return i.reduce((function (i, n, r) {
            var o = n.y,
                a = n.x,
                s = n.score;
            return lt(e, t, {
                y: o,
                x: a
            }, r) || (i += s), i
        }), 0) / i.length
    }

    function xt(e, t, i, n, r, o, a, u) {
        return void 0 === a && (a = .5), void 0 === u && (u = 20), s(this, void 0, void 0, (function () {
            var s, h, c, p, d, f, m, g, y, v, x, w;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return [4, ot([e, t, i, n])];
                    case 1:
                        for (s = l.sent(), h = s[0], c = s[1], p = s[2], d = s[3], f = [], m = function (e, t, i) {
                            for (var n = i.shape, r = n[0], o = n[1], a = n[2], s = new nt(r * o * a, (function (e) {
                                return e.score
                            })), l = 0; l < r; ++l)
                                for (var u = 0; u < o; ++u)
                                    for (var h = 0; h < a; ++h) {
                                        var c = i.get(l, u, h);
                                        c < e || rt(h, c, l, u, t, i) && s.enqueue({
                                            score: c,
                                            part: {
                                                heatmapY: l,
                                                heatmapX: u,
                                                id: h
                                            }
                                        })
                                    }
                            return s
                        }(a, 1, h), g = u * u; f.length < o && !m.empty();) y = m.dequeue(), v = st(y.part, r, c), lt(f, g, v, y.part.id) || (x = yt(y, h, c, r, p, d), w = vt(f, g, x), f.push({
                            keypoints: x,
                            score: w
                        }));
                        return [2, f]
                }
            }))
        }))
    }

    function wt(e) {
        var t = e.shape,
            n = t[0],
            r = t[1],
            o = t[2];
        return i.tidy((function () {
            var t, a, s = i.reshape(e, [n * r, o]),
                l = i.argMax(s, 0),
                u = i.expandDims(i.div(l, i.scalar(r, "int32")), 1),
                h = i.expandDims((t = l, a = r, i.tidy((function () {
                    var e = i.div(t, i.scalar(a, "int32"));
                    return i.sub(t, i.mul(e, i.scalar(a, "int32")))
                }))), 1);
            return i.concat([u, h], 1)
        }))
    }

    function kt(e, t, n) {
        return i.tidy((function () {
            var r = function (e, t) {
                for (var n = [], r = 0; r < h.length; r++) {
                    var o = e.get(r, 0).valueOf(),
                        a = e.get(r, 1).valueOf(),
                        s = bt(o, a, r, t),
                        l = s.x,
                        u = s.y;
                    n.push(u), n.push(l)
                }
                return i.tensor2d(n, [h.length, 2])
            }(e, n);
            return i.add(i.cast(i.mul(e.toTensor(), i.scalar(t, "int32")), "float32"), r)
        }))
    }

    function bt(e, t, i, n) {
        return {
            y: n.get(e, t, i),
            x: n.get(e, t, i + h.length)
        }
    }

    function Mt(e, t, i) {
        return s(this, void 0, void 0, (function () {
            var n, r, o, a, s, u, c, p, d, f;
            return l(this, (function (l) {
                switch (l.label) {
                    case 0:
                        return n = 0, r = wt(e), [4, Promise.all([e.buffer(), t.buffer(), r.buffer()])];
                    case 1:
                        return o = l.sent(), a = o[0], s = o[1], u = o[2], [4, (c = kt(u, i, s)).buffer()];
                    case 2:
                        return p = l.sent(), d = Array.from(function (e, t) {
                            for (var i = t.shape[0], n = new Float32Array(i), r = 0; r < i; r++) {
                                var o = t.get(r, 0),
                                    a = t.get(r, 1);
                                n[r] = e.get(o, a, r)
                            }
                            return n
                        }(a, u)), f = d.map((function (e, t) {
                            return n += e, {
                                y: p.get(t, 0),
                                x: p.get(t, 1),
                                score: e,
                                name: h[t]
                            }
                        })), r.dispose(), c.dispose(), [2, {
                            keypoints: f,
                            score: n / f.length
                        }]
                }
            }))
        }))
    }

    function St(e, t) {
        return (e - 1) % t == 0
    }
    var Tt = "https://storage.googleapis.com/tfjs-models/savedmodel/posenet/mobilenet/",
        Pt = "model-weights/";

    function Ft(e, t) {
        return function (e, t) {
            return (e - 1) % t == 0
        }(e, t) ? e : Math.floor(e / t) * t + 1
    }
    var _t = function () {
        function e(e, t) {
            this.posenetModel = e;
            var n = this.posenetModel.inputs[0].shape;
            i.util.assert(-1 === n[1] && -1 === n[2], (function () {
                return "Input shape [" + n[1] + ", " + n[2] + "] must both be equal to or -1"
            }));
            var r, o, a = (r = t.inputResolution, o = t.outputStride, {
                height: Ft(r.height, o),
                width: Ft(r.width, o)
            });
            ! function (e) {
                i.util.assert(Qe.indexOf(e) >= 0, (function () {
                    return "outputStride of " + e + " is invalid. It must be either 8 or 16."
                }))
            }(t.outputStride),
                function (e, t) {
                    i.util.assert(St(e.height, t), (function () {
                        return "height of " + e.height + " is invalid for output stride " + t + "."
                    })), i.util.assert(St(e.width, t), (function () {
                        return "width of " + e.width + " is invalid for output stride " + t + "."
                    }))
                }(a, t.outputStride), this.inputResolution = a, this.outputStride = t.outputStride, this.architecture = t.architecture
        }
        return e.prototype.estimatePoses = function (e, t) {
            return void 0 === t && (t = Je), s(this, void 0, void 0, (function () {
                var n, r, o, s, u, h, c, p, d, f, m, g, y, v, x;
                return l(this, (function (l) {
                    switch (l.label) {
                        case 0:
                            return n = function (e) {
                                var t = e;
                                if (null == t.maxPoses && (t.maxPoses = 1), t.maxPoses <= 0) throw new Error("Invalid maxPoses " + t.maxPoses + ". Should be > 0.");
                                if (t.maxPoses > 1) {
                                    if ((t = a(a({}, et), t)).scoreThreshold < 0 || t.scoreThreshold > 1) throw new Error("Invalid scoreThreshold " + t.scoreThreshold + ". Should be in range [0.0, 1.0]");
                                    if (t.nmsRadius <= 0) throw new Error("Invalid nmsRadius " + t.nmsRadius + ".")
                                }
                                return t
                            }(t), null == e ? [2, []] : (this.maxPoses = n.maxPoses, r = B(e, {
                                outputTensorSize: this.inputResolution,
                                keepAspectRatio: !0,
                                borderMode: "replicate"
                            }), o = r.imageTensor, s = r.padding, u = "ResNet50" === this.architecture ? i.add(o, tt) : V(o, [-1, 1]), h = this.posenetModel.predict(u), "ResNet50" === this.architecture ? (c = i.squeeze(h[2], [0]), p = i.squeeze(h[3], [0]), d = i.squeeze(h[0], [0]), f = i.squeeze(h[1], [0])) : (c = i.squeeze(h[0], [0]), p = i.squeeze(h[1], [0]), d = i.squeeze(h[2], [0]), f = i.squeeze(h[3], [0])), m = i.sigmoid(p), 1 !== this.maxPoses ? [3, 2] : [4, Mt(m, c, this.outputStride)]);
                        case 1:
                            return y = l.sent(), g = [y], [3, 4];
                        case 2:
                            return [4, xt(m, c, d, f, this.outputStride, this.maxPoses, n.scoreThreshold, n.nmsRadius)];
                        case 3:
                            g = l.sent(), l.label = 4;
                        case 4:
                            return v = P(e), x = function (e, t, i, n) {
                                var r = t.height,
                                    o = t.width,
                                    a = r / (i.height * (1 - n.top - n.bottom)),
                                    s = o / (i.width * (1 - n.left - n.right)),
                                    l = -n.top * i.height,
                                    u = -n.left * i.width;
                                if (1 === s && 1 === a && 0 === l && 0 === u) return e;
                                for (var h = 0, c = e; h < c.length; h++)
                                    for (var p = 0, d = c[h].keypoints; p < d.length; p++) {
                                        var f = d[p];
                                        f.x = (f.x + u) * s, f.y = (f.y + l) * a
                                    }
                                return e
                            }(g, v, this.inputResolution, s), n.flipHorizontal && (x = function (e, t) {
                                for (var i = 0, n = e; i < n.length; i++)
                                    for (var r = 0, o = n[i].keypoints; r < o.length; r++) {
                                        var a = o[r];
                                        a.x = t.width - 1 - a.x
                                    }
                                return e
                            }(x, v)), o.dispose(), u.dispose(), i.dispose(h), c.dispose(), p.dispose(), d.dispose(), f.dispose(), m.dispose(), [2, x]
                    }
                }))
            }))
        }, e.prototype.dispose = function () {
            this.posenetModel.dispose()
        }, e.prototype.reset = function () { }, e
    }();

    function zt(e) {
        return void 0 === e && (e = We), s(this, void 0, void 0, (function () {
            var t, i, r, o, a;
            return l(this, (function (s) {
                switch (s.label) {
                    case 0:
                        return "ResNet50" !== (t = function (e) {
                            var t = e || We;
                            if (null == t.architecture && (t.architecture = "MobileNetV1"), Ge.indexOf(t.architecture) < 0) throw new Error("Invalid architecture " + t.architecture + ". Should be one of " + Ge);
                            if (null == t.inputResolution && (t.inputResolution = {
                                height: 257,
                                width: 257
                            }), null == t.outputStride && (t.outputStride = 16), Ye[t.architecture].indexOf(t.outputStride) < 0) throw new Error("Invalid outputStride " + t.outputStride + ". Should be one of " + Ye[t.architecture] + " for architecture " + t.architecture + ".");
                            if (null == t.multiplier && (t.multiplier = 1), Ze[t.architecture].indexOf(t.multiplier) < 0) throw new Error("Invalid multiplier " + t.multiplier + ". Should be one of " + Ze[t.architecture] + " for architecture " + t.architecture + ".");
                            if (null == t.quantBytes && (t.quantBytes = 4), $e.indexOf(t.quantBytes) < 0) throw new Error("Invalid quantBytes " + t.quantBytes + ". Should be one of " + $e + " for architecture " + t.architecture + ".");
                            if ("MobileNetV1" === t.architecture && 32 === t.outputStride && 1 !== t.multiplier) throw new Error("When using an output stride of 32, you must select 1 as the multiplier.");
                            return t
                        }(e)).architecture ? [3, 2] : (l = t.outputStride, u = t.quantBytes, h = "model-stride" + l + ".json", i = 4 === u ? Pt + "float/" + h : Pt + "quant" + u + "/" + h, [4, n.loadGraphModel(t.modelUrl || i)]);
                    case 1:
                        return r = s.sent(), [2, new _t(r, t)];
                    case 2:
                        return o = function (e, t, i) {
                            var n = {
                                1: "100",
                                .75: "075",
                                .5: "050"
                            },
                                r = "model-stride" + e + ".json";
                            return 4 === i ? Tt + "float/" + n[t] + "/" + r : Tt + "quant" + i + "/" + n[t] + "/" + r
                        }(t.outputStride, t.multiplier, t.quantBytes), [4, n.loadGraphModel(t.modelUrl || o)];
                    case 3:
                        return a = s.sent(), [2, new _t(a, t)]
                }
                var l, u, h
            }))
        }))
    }
    var Ot = {
        keypointsToNormalizedKeypoints: J
    },
        At = {
            modelType: {
                SINGLEPOSE_LIGHTNING: "SinglePose.Lightning",
                SINGLEPOSE_THUNDER: "SinglePose.Thunder",
                MULTIPOSE_LIGHTNING: "MultiPose.Lightning"
            }
        };
    e.calculators = Ot, e.createDetector = function (t, i) {
        return s(this, void 0, void 0, (function () {
            var n, r;
            return l(this, (function (o) {
                switch (t) {
                    case e.SupportedModels.PoseNet:
                        return [2, zt(i)];
                    case e.SupportedModels.BlazePose:
                        if (r = void 0, null != (n = i)) {
                            if ("tfjs" === n.runtime) return [2, Fe(i)];
                            if ("mediapipe" === n.runtime) return [2, T(i)];
                            r = n.runtime
                        }
                        throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got " + r);
                    case e.SupportedModels.MoveNet:
                        return [2, Xe(i)];
                    default:
                        throw new Error(t + " is not a supported model name.")
                }
            }))
        }))
    }, e.movenet = At, e.util = Re, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));