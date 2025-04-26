import {
  __commonJS
} from "./chunk-DC5AMYBS.js";

// node_modules/@2gis/mapgl/dist/index.js
var require_dist = __commonJS({
  "node_modules/@2gis/mapgl/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.load = void 0;
    var map;
    function load(mapglURL) {
      if (mapglURL === void 0) {
        mapglURL = "https://mapgl.2gis.com/api/js";
      }
      if (typeof window === "undefined") {
        throw new Error("mapgl is supported only in browser environment");
      }
      if (map) {
        return Promise.resolve(map);
      }
      return createScriptAndLoad(mapglURL).then(function() {
        map = window.mapgl;
        return map;
      });
    }
    exports.load = load;
    function createScriptAndLoad(mapglURL) {
      return new Promise(function(resolve, reject) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.src = mapglURL;
        document.body.appendChild(script);
        script.addEventListener("load", function() {
          resolve();
        });
        script.addEventListener("error", function(error) {
          reject(error);
        });
      });
    }
  }
});
export default require_dist();
//# sourceMappingURL=@2gis_mapgl.js.map
