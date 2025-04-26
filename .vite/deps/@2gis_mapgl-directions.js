import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/@2gis/mapgl-directions/dist/directions.js
var require_directions = __commonJS({
  "node_modules/@2gis/mapgl-directions/dist/directions.js"(exports, module) {
    !function(t, e) {
      if ("object" == typeof exports && "object" == typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        var n = e();
        for (var r in n) ("object" == typeof exports ? exports : t)[r] = n[r];
      }
    }("undefined" != typeof self ? self : exports, function() {
      return function(t) {
        var e = {};
        function n(r) {
          if (e[r]) return e[r].exports;
          var o = e[r] = { i: r, l: false, exports: {} };
          return t[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = t, n.c = e, n.d = function(t2, e2, r) {
          n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: r });
        }, n.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, n.t = function(t2, e2) {
          if (1 & e2 && (t2 = n(t2)), 8 & e2) return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule) return t2;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2) for (var o in t2) n.d(r, o, (function(e3) {
            return t2[e3];
          }).bind(null, o));
          return r;
        }, n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, n.p = "/", n(n.s = 1);
      }([function(t, e) {
        t.exports = o, t.exports.parse = o, t.exports.stringify = function t2(e2) {
          "Feature" === e2.type && (e2 = e2.geometry);
          function n2(t3) {
            return t3.join(" ");
          }
          function r2(t3) {
            return t3.map(n2).join(", ");
          }
          function o2(t3) {
            return t3.map(r2).map(i).join(", ");
          }
          function i(t3) {
            return "(" + t3 + ")";
          }
          switch (e2.type) {
            case "Point":
              return "POINT (" + n2(e2.coordinates) + ")";
            case "LineString":
              return "LINESTRING (" + r2(e2.coordinates) + ")";
            case "Polygon":
              return "POLYGON (" + o2(e2.coordinates) + ")";
            case "MultiPoint":
              return "MULTIPOINT (" + r2(e2.coordinates) + ")";
            case "MultiPolygon":
              return "MULTIPOLYGON (" + (e2.coordinates.map(o2).map(i).join(", ") + ")");
            case "MultiLineString":
              return "MULTILINESTRING (" + o2(e2.coordinates) + ")";
            case "GeometryCollection":
              return "GEOMETRYCOLLECTION (" + e2.geometries.map(t2).join(", ") + ")";
            default:
              throw new Error("stringify requires a valid GeoJSON Feature or geometry object as input");
          }
        };
        var n = /[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/, r = new RegExp("^" + n.source + "(\\s" + n.source + "){1,}");
        function o(t2) {
          var e2, n2 = t2.split(";"), o2 = n2.pop(), i = (n2.shift() || "").split("=").pop(), s = 0;
          function a(t3) {
            var e3 = o2.substring(s).match(t3);
            return e3 ? (s += e3[0].length, e3[0]) : null;
          }
          function u() {
            a(/^\s*/);
          }
          function l() {
            u();
            for (var t3, e3 = 0, n3 = [], o3 = [n3], i2 = n3; t3 = a(/^(\()/) || a(/^(\))/) || a(/^(,)/) || a(r); ) {
              if ("(" === t3) o3.push(i2), i2 = [], o3[o3.length - 1].push(i2), e3++;
              else if (")" === t3) {
                if (0 === i2.length) return null;
                if (!(i2 = o3.pop())) return null;
                if (0 === --e3) break;
              } else if ("," === t3) i2 = [], o3[o3.length - 1].push(i2);
              else {
                if (t3.split(/\s/g).some(isNaN)) return null;
                Array.prototype.push.apply(i2, t3.split(/\s/g).map(parseFloat));
              }
              u();
            }
            return 0 !== e3 ? null : n3;
          }
          function p() {
            for (var t3, e3, n3 = []; e3 = a(r) || a(/^(,)/); ) "," === e3 ? (n3.push(t3), t3 = []) : e3.split(/\s/g).some(isNaN) || (t3 || (t3 = []), Array.prototype.push.apply(t3, e3.split(/\s/g).map(parseFloat))), u();
            return t3 ? (n3.push(t3), n3.length ? n3 : null) : null;
          }
          function c() {
            return function() {
              if (!a(/^(point(\sz)?)/i)) return null;
              if (u(), !a(/^(\()/)) return null;
              var t3 = p();
              return t3 ? (u(), a(/^(\))/) ? { type: "Point", coordinates: t3[0] } : null) : null;
            }() || function() {
              if (!a(/^(linestring(\sz)?)/i)) return null;
              if (u(), !a(/^(\()/)) return null;
              var t3 = p();
              return t3 && a(/^(\))/) ? { type: "LineString", coordinates: t3 } : null;
            }() || function() {
              if (!a(/^(polygon(\sz)?)/i)) return null;
              u();
              var t3 = l();
              return t3 ? { type: "Polygon", coordinates: t3 } : null;
            }() || function() {
              if (!a(/^(multipoint)/i)) return null;
              u();
              var t3 = o2.substring(o2.indexOf("(") + 1, o2.length - 1).replace(/\(/g, "").replace(/\)/g, "");
              o2 = "MULTIPOINT (" + t3 + ")";
              var e3 = l();
              return e3 ? (u(), { type: "MultiPoint", coordinates: e3 }) : null;
            }() || function() {
              if (!a(/^(multilinestring)/i)) return null;
              u();
              var t3 = l();
              return t3 ? (u(), { type: "MultiLineString", coordinates: t3 }) : null;
            }() || function() {
              if (!a(/^(multipolygon)/i)) return null;
              u();
              var t3 = l();
              return t3 ? { type: "MultiPolygon", coordinates: t3 } : null;
            }() || function() {
              var t3, e3 = [];
              if (!a(/^(geometrycollection)/i)) return null;
              if (u(), !a(/^(\()/)) return null;
              for (; t3 = c(); ) e3.push(t3), u(), a(/^(,)/), u();
              return a(/^(\))/) ? { type: "GeometryCollection", geometries: e3 } : null;
            }();
          }
          return (e2 = c()) && i.match(/\d+/) && (e2.crs = { type: "name", properties: { name: "urn:ogc:def:crs:EPSG::" + i } }), e2;
        }
      }, function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "Directions", function() {
          return g;
        });
        var r = function(t2, e2) {
          return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t3, e3) {
            t3.__proto__ = e3;
          } || function(t3, e3) {
            for (var n2 in e3) e3.hasOwnProperty(n2) && (t3[n2] = e3[n2]);
          })(t2, e2);
        };
        var o = function() {
          return (o = Object.assign || function(t2) {
            for (var e2, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var o2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, o2) && (t2[o2] = e2[o2]);
            return t2;
          }).apply(this, arguments);
        };
        var i = 0, s = 1, a = { fast: "#22aa01", normal: "#ffc402", slow: "#f72000", "slow-jams": "#81020d", "no-traffic": "#0f6ec1", ignore: "#0f6ec1", pedestrian: "#626262", "pedestrian-underground": "#626262", inactive: "#b4bcd2", border: "#ffffff", border2: "#ff141414", hovered: "#000000" }, u = { size: [22, 22], offset: [11, 11], img: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMTUiIGQ9Ik0xMSAyMkMxNy4wNzUxIDIyIDIyIDE3LjA3NTEgMjIgMTFDMjIgNC45MjQ4NyAxNy4wNzUxIDAgMTEgMEM0LjkyNDg3IDAgMCA0LjkyNDg3IDAgMTFDMCAxNy4wNzUxIDQuOTI0ODcgMjIgMTEgMjJaIi8+CiAgPHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTExIDIxQzE2LjUyMjggMjEgMjEgMTYuNTIyOCAyMSAxMUMyMSA1LjQ3NzE1IDE2LjUyMjggMSAxMSAxQzUuNDc3MTUgMSAxIDUuNDc3MTUgMSAxMUMxIDE2LjUyMjggNS40NzcxNSAyMSAxMSAyMVoiLz4KICA8cGF0aCBmaWxsPSIjMGY2ZWMxIiBkPSJNMTEgMTlDMTUuNDE4MyAxOSAxOSAxNS40MTgzIDE5IDExQzE5IDYuNTgxNzIgMTUuNDE4MyAzIDExIDNDNi41ODE3MiAzIDMgNi41ODE3MiAzIDExQzMgMTUuNDE4MyA2LjU4MTcyIDE5IDExIDE5WiIvPgo8L3N2Zz4K" }, l = 14, p = "#ffffff";
        function c(t2) {
          switch (t2) {
            case "fast":
            case "normal":
            case "slow":
            case "slow-jams":
            case "no-traffic":
              return t2;
            default:
              return "ignore";
          }
        }
        function f(t2) {
          return t2.map(function(e2, n2) {
            var r2 = String(n2);
            return 0 === n2 && (r2 = "A"), n2 === t2.length - 1 && (r2 = "B"), { position: e2, label: { text: r2, fontSize: l, color: p }, icon: u };
          });
        }
        var d = n(0), h = function() {
          function t2(t3, e2) {
            this.defaultStyle = { routeLineWidth: 10.5, substrateLineWidth: 21.5, haloLineWidth: 23.1 }, this.map = t3, this.settings = e2, this.polylines = [], this.markers = [], this.nextPolylinePhase = i, this.nextPointPhase = s;
          }
          return t2.prototype.draw = function(t3) {
            this.drawPoints(t3.points), this.drawRoutes(t3.routes, t3.activeRouteId, t3.style);
          }, t2.prototype.clear = function() {
            this.draw({ routes: [], points: [] });
          }, t2.prototype.drawPoints = function(t3) {
            for (var e2 = 0, n2 = this.markers; e2 < n2.length; e2++) {
              (l2 = n2[e2]).destroy();
            }
            this.markers = [], this.nextPointPhase = s;
            for (var r2 = 0; r2 < t3.length; r2++) {
              var o2 = t3[r2], i2 = o2.position, a2 = o2.label, u2 = o2.icon, l2 = new mapgl.Marker(this.map, { coordinates: i2, icon: u2.img, size: u2.size, anchor: u2.offset, zIndex: this.getNextPointPhase(), label: { text: a2.text, fontSize: a2.fontSize, color: a2.color, anchor: [0, 0], zIndex: this.getNextPointPhase(), haloRadius: 0, haloColor: "#ffffff", letterSpacing: 0, lineHeight: 1.2, minZoom: NaN, maxZoom: NaN } });
              this.markers.push(l2);
            }
          }, t2.prototype.drawRoutes = function(t3, e2, n2) {
            for (var r2 = 0, s2 = this.polylines; r2 < s2.length; r2++) {
              s2[r2].polyline.destroy();
            }
            this.polylines = [], this.nextPolylinePhase = i;
            for (var a2, u2 = o(o({}, this.defaultStyle), n2), l2 = 0, p2 = t3; l2 < p2.length; l2++) {
              var c2 = p2[l2];
              c2.id === e2 ? a2 = c2 : this.drawRoute(c2, false, u2);
            }
            a2 && this.drawRoute(a2, true, u2);
          }, t2.prototype.drawRoute = function(t3, e2, n2) {
            for (var r2 = t3.id, o2 = t3.sections, i2 = this.getNextPolylinePhase(), s2 = this.getNextPolylinePhase(), a2 = 0, u2 = o2; a2 < u2.length; a2++) {
              var l2 = u2[a2], p2 = Object(d.parse)(l2.geometry);
              if (p2) {
                var c2 = p2.coordinates, f2 = this.settings.lineStyles, h2 = void 0 !== f2[l2.type] ? l2.type : "inactive", y2 = e2 ? h2 : "inactive", g2 = f2[y2], m = g2.color, v = g2.borderColor, M = g2.border2Color, I = new mapgl.Polyline(this.map, { coordinates: c2, zIndex: this.getNextPolylinePhase(), zIndex2: s2, zIndex3: i2, color: m, color2: v, color3: M, width: n2.routeLineWidth, width2: n2.substrateLineWidth, width3: n2.haloLineWidth, interactive: true, maxZoom: NaN, minZoom: NaN });
                this.polylines.push({ routeId: r2, type: y2, polyline: I });
              }
            }
          }, t2.prototype.getNextPolylinePhase = function() {
            return this.nextPolylinePhase += 1e-6;
          }, t2.prototype.getNextPointPhase = function() {
            return this.nextPointPhase += 1e-6;
          }, t2;
        }(), y = function(t2, e2) {
          return { color: e2[t2], hoveredColor: e2.hovered, borderColor: e2.border, hoveredBorderColor: e2.border, border2Color: e2.border2, hoveredBorder2Color: e2.border2 };
        }, g = function(t2) {
          function e2(e3, n2) {
            var r2 = t2.call(this) || this;
            r2.map = e3, r2.map.setOption("loopWorld", false), r2.options = n2;
            var o2, i2 = { lineStyles: { normal: y("normal", o2 = a), fast: y("fast", o2), ignore: y("ignore", o2), "no-traffic": y("no-traffic", o2), slow: y("slow", o2), "slow-jams": y("slow-jams", o2), pedestrian: y("pedestrian", o2), "pedestrian-underground": y("pedestrian-underground", o2), inactive: y("inactive", o2) } };
            return r2.ppnaDrawer = new h(r2.map, i2), r2;
          }
          return function(t3, e3) {
            function n2() {
              this.constructor = t3;
            }
            r(t3, e3), t3.prototype = null === e3 ? Object.create(e3) : (n2.prototype = e3.prototype, new n2());
          }(e2, t2), e2.prototype.clear = function() {
            this.ppnaDrawer.clear(), this.map.setStyleOptions({ traffic: false });
          }, e2.prototype.carRoute = function(t3) {
            var e3 = t3.points, n2 = t3.style;
            return this.findAndDrawRoute({ type: "jam", points: e3, style: n2 });
          }, e2.prototype.pedestrianRoute = function(t3) {
            var e3 = t3.points, n2 = t3.style;
            return this.findAndDrawRoute({ type: "pedestrian", points: e3, style: n2 });
          }, e2.prototype.findAndDrawRoute = function(t3) {
            var e3 = this, n2 = t3.points, r2 = t3.type, o2 = t3.style;
            if (n2.length < 2) throw new Error("At least two points are required");
            var i2 = { type: r2, point_a_name: "Source", point_b_name: "Target", locale: "en", points: n2.map(function(t4, e4) {
              return { x: t4[0], y: t4[1], type: 0 === e4 || e4 === n2.length - 1 ? "pedo" : "pref" };
            }) };
            return fetch("https://routing.api.2gis.com/carrouting/6.0.0/global?key=" + this.options.directionsApiKey, { method: "post", body: JSON.stringify(i2) }).then(function(t4) {
              if (200 !== t4.status) throw new Error("HTTP code is " + t4.status);
              return t4.json();
            }).then(function(n3) {
              e3.emit("directionsLoaded", { routes: n3.result || [] }), e3.drawRoute(n3.result || [], t3.points, o2);
            });
          }, e2.prototype.drawRoute = function(t3, e3, n2) {
            var r2 = function(t4, e4) {
              var n3 = [];
              return e4.forEach(function(e5) {
                var r3 = { id: e5.id, sections: [] };
                e5.begin_pedestrian_path && r3.sections.push({ type: "pedestrian", geometry: e5.begin_pedestrian_path.geometry.selection }), (e5.maneuvers || []).forEach(function(e6) {
                  var n4 = e6.outcoming_path && e6.outcoming_path.geometry;
                  n4 && n4.forEach(function(e7) {
                    r3.sections.push({ type: "pedestrian" !== t4 ? c(e7.color) : "pedestrian", geometry: e7.selection });
                  });
                }), e5.end_pedestrian_path && r3.sections.push({ type: "pedestrian", geometry: e5.end_pedestrian_path.geometry.selection }), n3.push(r3);
              }), n3;
            }("ppna", t3)[0];
            this.map.setStyleOptions({ traffic: true }), this.ppnaDrawer.draw({ routes: [r2], points: f(e3), activeRouteId: r2.id, style: n2 });
          }, e2;
        }(function() {
          function t2() {
            this.events = {};
          }
          return t2.prototype.on = function(t3, e2) {
            var n2 = this.events[t3];
            return n2 || (n2 = this.events[t3] = []), n2.push(e2), this;
          }, t2.prototype.once = function(t3, e2) {
            var n2 = this, r2 = function(o2) {
              n2.off(t3, r2), e2.call(n2, o2);
            };
            return this.on(t3, r2), this;
          }, t2.prototype.off = function(t3, e2) {
            var n2 = this.events[t3];
            if (!n2) return this;
            var r2 = n2.indexOf(e2);
            return -1 !== r2 && n2.splice(r2, 1), this;
          }, t2.prototype.emit = function(t3, e2) {
            var n2 = this.events[t3];
            if (!n2) return this;
            for (var r2 = n2.slice(), o2 = 0; o2 < r2.length; o2++) r2[o2].call(this, e2);
            return this;
          }, t2;
        }());
        "undefined" != typeof window && ("mapgl" in window ? mapgl.Directions = g : (window.__mapglPlugins || (window.__mapglPlugins = {}), window.__mapglPlugins.Directions = g));
      }]);
    });
  }
});
export default require_directions();
/*! Bundled license information:

@2gis/mapgl-directions/dist/directions.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@2gis_mapgl-directions.js.map
