"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-sync-external-store";
exports.ids = ["vendor-chunks/use-sync-external-store"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * use-sync-external-store-shim.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function is(x, y) {\n      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);\n    }\n    function useSyncExternalStore$2(subscribe, getSnapshot) {\n      didWarnOld18Alpha ||\n        void 0 === React.startTransition ||\n        ((didWarnOld18Alpha = !0),\n        console.error(\n          \"You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.\"\n        ));\n      var value = getSnapshot();\n      if (!didWarnUncachedGetSnapshot) {\n        var cachedValue = getSnapshot();\n        objectIs(value, cachedValue) ||\n          (console.error(\n            \"The result of getSnapshot should be cached to avoid an infinite loop\"\n          ),\n          (didWarnUncachedGetSnapshot = !0));\n      }\n      cachedValue = useState({\n        inst: { value: value, getSnapshot: getSnapshot }\n      });\n      var inst = cachedValue[0].inst,\n        forceUpdate = cachedValue[1];\n      useLayoutEffect(\n        function () {\n          inst.value = value;\n          inst.getSnapshot = getSnapshot;\n          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n        },\n        [subscribe, value, getSnapshot]\n      );\n      useEffect(\n        function () {\n          checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n          return subscribe(function () {\n            checkIfSnapshotChanged(inst) && forceUpdate({ inst: inst });\n          });\n        },\n        [subscribe]\n      );\n      useDebugValue(value);\n      return value;\n    }\n    function checkIfSnapshotChanged(inst) {\n      var latestGetSnapshot = inst.getSnapshot;\n      inst = inst.value;\n      try {\n        var nextValue = latestGetSnapshot();\n        return !objectIs(inst, nextValue);\n      } catch (error) {\n        return !0;\n      }\n    }\n    function useSyncExternalStore$1(subscribe, getSnapshot) {\n      return getSnapshot();\n    }\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n    var React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"),\n      objectIs = \"function\" === typeof Object.is ? Object.is : is,\n      useState = React.useState,\n      useEffect = React.useEffect,\n      useLayoutEffect = React.useLayoutEffect,\n      useDebugValue = React.useDebugValue,\n      didWarnOld18Alpha = !1,\n      didWarnUncachedGetSnapshot = !1,\n      shim =\n        \"undefined\" === typeof window ||\n        \"undefined\" === typeof window.document ||\n        \"undefined\" === typeof window.document.createElement\n          ? useSyncExternalStore$1\n          : useSyncExternalStore$2;\n    exports.useSyncExternalStore =\n      void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n  })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhO0FBQ2IsS0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWTtBQUNwRSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsWUFBWTtBQUNwRTtBQUNBLDBEQUEwRCxZQUFZO0FBQ3RFLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdHQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0QkFBNEI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWluLWRpYWdub3N0aWNzLy4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLmRldmVsb3BtZW50LmpzP2VmNDciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgTWV0YSBQbGF0Zm9ybXMsIEluYy4gYW5kIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cInByb2R1Y3Rpb25cIiAhPT0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgJiZcbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgICByZXR1cm4gKHggPT09IHkgJiYgKDAgIT09IHggfHwgMSAvIHggPT09IDEgLyB5KSkgfHwgKHggIT09IHggJiYgeSAhPT0geSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlJDIoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCkge1xuICAgICAgZGlkV2Fybk9sZDE4QWxwaGEgfHxcbiAgICAgICAgdm9pZCAwID09PSBSZWFjdC5zdGFydFRyYW5zaXRpb24gfHxcbiAgICAgICAgKChkaWRXYXJuT2xkMThBbHBoYSA9ICEwKSxcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIllvdSBhcmUgdXNpbmcgYW4gb3V0ZGF0ZWQsIHByZS1yZWxlYXNlIGFscGhhIG9mIFJlYWN0IDE4IHRoYXQgZG9lcyBub3Qgc3VwcG9ydCB1c2VTeW5jRXh0ZXJuYWxTdG9yZS4gVGhlIHVzZS1zeW5jLWV4dGVybmFsLXN0b3JlIHNoaW0gd2lsbCBub3Qgd29yayBjb3JyZWN0bHkuIFVwZ3JhZGUgdG8gYSBuZXdlciBwcmUtcmVsZWFzZS5cIlxuICAgICAgICApKTtcbiAgICAgIHZhciB2YWx1ZSA9IGdldFNuYXBzaG90KCk7XG4gICAgICBpZiAoIWRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90KSB7XG4gICAgICAgIHZhciBjYWNoZWRWYWx1ZSA9IGdldFNuYXBzaG90KCk7XG4gICAgICAgIG9iamVjdElzKHZhbHVlLCBjYWNoZWRWYWx1ZSkgfHxcbiAgICAgICAgICAoY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwiVGhlIHJlc3VsdCBvZiBnZXRTbmFwc2hvdCBzaG91bGQgYmUgY2FjaGVkIHRvIGF2b2lkIGFuIGluZmluaXRlIGxvb3BcIlxuICAgICAgICAgICksXG4gICAgICAgICAgKGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gITApKTtcbiAgICAgIH1cbiAgICAgIGNhY2hlZFZhbHVlID0gdXNlU3RhdGUoe1xuICAgICAgICBpbnN0OiB7IHZhbHVlOiB2YWx1ZSwgZ2V0U25hcHNob3Q6IGdldFNuYXBzaG90IH1cbiAgICAgIH0pO1xuICAgICAgdmFyIGluc3QgPSBjYWNoZWRWYWx1ZVswXS5pbnN0LFxuICAgICAgICBmb3JjZVVwZGF0ZSA9IGNhY2hlZFZhbHVlWzFdO1xuICAgICAgdXNlTGF5b3V0RWZmZWN0KFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5zdC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIGluc3QuZ2V0U25hcHNob3QgPSBnZXRTbmFwc2hvdDtcbiAgICAgICAgICBjaGVja0lmU25hcHNob3RDaGFuZ2VkKGluc3QpICYmIGZvcmNlVXBkYXRlKHsgaW5zdDogaW5zdCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgW3N1YnNjcmliZSwgdmFsdWUsIGdldFNuYXBzaG90XVxuICAgICAgKTtcbiAgICAgIHVzZUVmZmVjdChcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkgJiYgZm9yY2VVcGRhdGUoeyBpbnN0OiBpbnN0IH0pO1xuICAgICAgICAgIHJldHVybiBzdWJzY3JpYmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2hlY2tJZlNuYXBzaG90Q2hhbmdlZChpbnN0KSAmJiBmb3JjZVVwZGF0ZSh7IGluc3Q6IGluc3QgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIFtzdWJzY3JpYmVdXG4gICAgICApO1xuICAgICAgdXNlRGVidWdWYWx1ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrSWZTbmFwc2hvdENoYW5nZWQoaW5zdCkge1xuICAgICAgdmFyIGxhdGVzdEdldFNuYXBzaG90ID0gaW5zdC5nZXRTbmFwc2hvdDtcbiAgICAgIGluc3QgPSBpbnN0LnZhbHVlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5leHRWYWx1ZSA9IGxhdGVzdEdldFNuYXBzaG90KCk7XG4gICAgICAgIHJldHVybiAhb2JqZWN0SXMoaW5zdCwgbmV4dFZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAhMDtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXNlU3luY0V4dGVybmFsU3RvcmUkMShzdWJzY3JpYmUsIGdldFNuYXBzaG90KSB7XG4gICAgICByZXR1cm4gZ2V0U25hcHNob3QoKTtcbiAgICB9XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChFcnJvcigpKTtcbiAgICB2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIiksXG4gICAgICBvYmplY3RJcyA9IFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIE9iamVjdC5pcyA/IE9iamVjdC5pcyA6IGlzLFxuICAgICAgdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZSxcbiAgICAgIHVzZUVmZmVjdCA9IFJlYWN0LnVzZUVmZmVjdCxcbiAgICAgIHVzZUxheW91dEVmZmVjdCA9IFJlYWN0LnVzZUxheW91dEVmZmVjdCxcbiAgICAgIHVzZURlYnVnVmFsdWUgPSBSZWFjdC51c2VEZWJ1Z1ZhbHVlLFxuICAgICAgZGlkV2Fybk9sZDE4QWxwaGEgPSAhMSxcbiAgICAgIGRpZFdhcm5VbmNhY2hlZEdldFNuYXBzaG90ID0gITEsXG4gICAgICBzaGltID1cbiAgICAgICAgXCJ1bmRlZmluZWRcIiA9PT0gdHlwZW9mIHdpbmRvdyB8fFxuICAgICAgICBcInVuZGVmaW5lZFwiID09PSB0eXBlb2Ygd2luZG93LmRvY3VtZW50IHx8XG4gICAgICAgIFwidW5kZWZpbmVkXCIgPT09IHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuICAgICAgICAgID8gdXNlU3luY0V4dGVybmFsU3RvcmUkMVxuICAgICAgICAgIDogdXNlU3luY0V4dGVybmFsU3RvcmUkMjtcbiAgICBleHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID1cbiAgICAgIHZvaWQgMCAhPT0gUmVhY3QudXNlU3luY0V4dGVybmFsU3RvcmUgPyBSZWFjdC51c2VTeW5jRXh0ZXJuYWxTdG9yZSA6IHNoaW07XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AoRXJyb3IoKSk7XG4gIH0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/**\n * @license React\n * use-sync-external-store-shim/with-selector.development.js\n *\n * Copyright (c) Meta Platforms, Inc. and affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n true &&\n  (function () {\n    function is(x, y) {\n      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);\n    }\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());\n    var React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\"),\n      shim = __webpack_require__(/*! use-sync-external-store/shim */ \"(ssr)/./node_modules/use-sync-external-store/shim/index.js\"),\n      objectIs = \"function\" === typeof Object.is ? Object.is : is,\n      useSyncExternalStore = shim.useSyncExternalStore,\n      useRef = React.useRef,\n      useEffect = React.useEffect,\n      useMemo = React.useMemo,\n      useDebugValue = React.useDebugValue;\n    exports.useSyncExternalStoreWithSelector = function (\n      subscribe,\n      getSnapshot,\n      getServerSnapshot,\n      selector,\n      isEqual\n    ) {\n      var instRef = useRef(null);\n      if (null === instRef.current) {\n        var inst = { hasValue: !1, value: null };\n        instRef.current = inst;\n      } else inst = instRef.current;\n      instRef = useMemo(\n        function () {\n          function memoizedSelector(nextSnapshot) {\n            if (!hasMemo) {\n              hasMemo = !0;\n              memoizedSnapshot = nextSnapshot;\n              nextSnapshot = selector(nextSnapshot);\n              if (void 0 !== isEqual && inst.hasValue) {\n                var currentSelection = inst.value;\n                if (isEqual(currentSelection, nextSnapshot))\n                  return (memoizedSelection = currentSelection);\n              }\n              return (memoizedSelection = nextSnapshot);\n            }\n            currentSelection = memoizedSelection;\n            if (objectIs(memoizedSnapshot, nextSnapshot))\n              return currentSelection;\n            var nextSelection = selector(nextSnapshot);\n            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))\n              return (memoizedSnapshot = nextSnapshot), currentSelection;\n            memoizedSnapshot = nextSnapshot;\n            return (memoizedSelection = nextSelection);\n          }\n          var hasMemo = !1,\n            memoizedSnapshot,\n            memoizedSelection,\n            maybeGetServerSnapshot =\n              void 0 === getServerSnapshot ? null : getServerSnapshot;\n          return [\n            function () {\n              return memoizedSelector(getSnapshot());\n            },\n            null === maybeGetServerSnapshot\n              ? void 0\n              : function () {\n                  return memoizedSelector(maybeGetServerSnapshot());\n                }\n          ];\n        },\n        [getSnapshot, getServerSnapshot, selector, isEqual]\n      );\n      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);\n      useEffect(\n        function () {\n          inst.hasValue = !0;\n          inst.value = value;\n        },\n        [value]\n      );\n      useDebugValue(value);\n      return value;\n    };\n    \"undefined\" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&\n      \"function\" ===\n        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&\n      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());\n  })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7QUFDYixLQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG1CQUFPLENBQUMsd0dBQU87QUFDL0IsYUFBYSxtQkFBTyxDQUFDLGdHQUE4QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHdDQUF3QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1pbi1kaWFnbm9zdGljcy8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzPzkwODciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBNZXRhIFBsYXRmb3JtcywgSW5jLiBhbmQgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblwicHJvZHVjdGlvblwiICE9PSBwcm9jZXNzLmVudi5OT0RFX0VOViAmJlxuICAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAgIHJldHVybiAoeCA9PT0geSAmJiAoMCAhPT0geCB8fCAxIC8geCA9PT0gMSAvIHkpKSB8fCAoeCAhPT0geCAmJiB5ICE9PSB5KTtcbiAgICB9XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCAmJlxuICAgICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChFcnJvcigpKTtcbiAgICB2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIiksXG4gICAgICBzaGltID0gcmVxdWlyZShcInVzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW1cIiksXG4gICAgICBvYmplY3RJcyA9IFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIE9iamVjdC5pcyA/IE9iamVjdC5pcyA6IGlzLFxuICAgICAgdXNlU3luY0V4dGVybmFsU3RvcmUgPSBzaGltLnVzZVN5bmNFeHRlcm5hbFN0b3JlLFxuICAgICAgdXNlUmVmID0gUmVhY3QudXNlUmVmLFxuICAgICAgdXNlRWZmZWN0ID0gUmVhY3QudXNlRWZmZWN0LFxuICAgICAgdXNlTWVtbyA9IFJlYWN0LnVzZU1lbW8sXG4gICAgICB1c2VEZWJ1Z1ZhbHVlID0gUmVhY3QudXNlRGVidWdWYWx1ZTtcbiAgICBleHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yID0gZnVuY3Rpb24gKFxuICAgICAgc3Vic2NyaWJlLFxuICAgICAgZ2V0U25hcHNob3QsXG4gICAgICBnZXRTZXJ2ZXJTbmFwc2hvdCxcbiAgICAgIHNlbGVjdG9yLFxuICAgICAgaXNFcXVhbFxuICAgICkge1xuICAgICAgdmFyIGluc3RSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgICBpZiAobnVsbCA9PT0gaW5zdFJlZi5jdXJyZW50KSB7XG4gICAgICAgIHZhciBpbnN0ID0geyBoYXNWYWx1ZTogITEsIHZhbHVlOiBudWxsIH07XG4gICAgICAgIGluc3RSZWYuY3VycmVudCA9IGluc3Q7XG4gICAgICB9IGVsc2UgaW5zdCA9IGluc3RSZWYuY3VycmVudDtcbiAgICAgIGluc3RSZWYgPSB1c2VNZW1vKFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZnVuY3Rpb24gbWVtb2l6ZWRTZWxlY3RvcihuZXh0U25hcHNob3QpIHtcbiAgICAgICAgICAgIGlmICghaGFzTWVtbykge1xuICAgICAgICAgICAgICBoYXNNZW1vID0gITA7XG4gICAgICAgICAgICAgIG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3Q7XG4gICAgICAgICAgICAgIG5leHRTbmFwc2hvdCA9IHNlbGVjdG9yKG5leHRTbmFwc2hvdCk7XG4gICAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGlzRXF1YWwgJiYgaW5zdC5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50U2VsZWN0aW9uID0gaW5zdC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNFcXVhbChjdXJyZW50U2VsZWN0aW9uLCBuZXh0U25hcHNob3QpKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChtZW1vaXplZFNlbGVjdGlvbiA9IGN1cnJlbnRTZWxlY3Rpb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAobWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U25hcHNob3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudFNlbGVjdGlvbiA9IG1lbW9pemVkU2VsZWN0aW9uO1xuICAgICAgICAgICAgaWYgKG9iamVjdElzKG1lbW9pemVkU25hcHNob3QsIG5leHRTbmFwc2hvdCkpXG4gICAgICAgICAgICAgIHJldHVybiBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgdmFyIG5leHRTZWxlY3Rpb24gPSBzZWxlY3RvcihuZXh0U25hcHNob3QpO1xuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gaXNFcXVhbCAmJiBpc0VxdWFsKGN1cnJlbnRTZWxlY3Rpb24sIG5leHRTZWxlY3Rpb24pKVxuICAgICAgICAgICAgICByZXR1cm4gKG1lbW9pemVkU25hcHNob3QgPSBuZXh0U25hcHNob3QpLCBjdXJyZW50U2VsZWN0aW9uO1xuICAgICAgICAgICAgbWVtb2l6ZWRTbmFwc2hvdCA9IG5leHRTbmFwc2hvdDtcbiAgICAgICAgICAgIHJldHVybiAobWVtb2l6ZWRTZWxlY3Rpb24gPSBuZXh0U2VsZWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGhhc01lbW8gPSAhMSxcbiAgICAgICAgICAgIG1lbW9pemVkU25hcHNob3QsXG4gICAgICAgICAgICBtZW1vaXplZFNlbGVjdGlvbixcbiAgICAgICAgICAgIG1heWJlR2V0U2VydmVyU25hcHNob3QgPVxuICAgICAgICAgICAgICB2b2lkIDAgPT09IGdldFNlcnZlclNuYXBzaG90ID8gbnVsbCA6IGdldFNlcnZlclNuYXBzaG90O1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBtZW1vaXplZFNlbGVjdG9yKGdldFNuYXBzaG90KCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG51bGwgPT09IG1heWJlR2V0U2VydmVyU25hcHNob3RcbiAgICAgICAgICAgICAgPyB2b2lkIDBcbiAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbWVtb2l6ZWRTZWxlY3RvcihtYXliZUdldFNlcnZlclNuYXBzaG90KCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBdO1xuICAgICAgICB9LFxuICAgICAgICBbZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90LCBzZWxlY3RvciwgaXNFcXVhbF1cbiAgICAgICk7XG4gICAgICB2YXIgdmFsdWUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGluc3RSZWZbMF0sIGluc3RSZWZbMV0pO1xuICAgICAgdXNlRWZmZWN0KFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5zdC5oYXNWYWx1ZSA9ICEwO1xuICAgICAgICAgIGluc3QudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgW3ZhbHVlXVxuICAgICAgKTtcbiAgICAgIHVzZURlYnVnVmFsdWUodmFsdWUpO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgXCJ1bmRlZmluZWRcIiAhPT0gdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAmJlxuICAgICAgXCJmdW5jdGlvblwiID09PVxuICAgICAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wICYmXG4gICAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AoRXJyb3IoKSk7XG4gIH0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sync-external-store/shim/index.js":
/*!************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/index.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim.development.js */ \"(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsOExBQThFO0FBQ2hGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW1pbi1kaWFnbm9zdGljcy8uL25vZGVfbW9kdWxlcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS9zaGltL2luZGV4LmpzPzJmYjgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL2Nqcy91c2Utc3luYy1leHRlcm5hbC1zdG9yZS1zaGltLnByb2R1Y3Rpb24uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/shim/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/use-sync-external-store/shim/with-selector.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ../cjs/use-sync-external-store-shim/with-selector.development.js */ \"(ssr)/./node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS93aXRoLXNlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSwwTkFBNEY7QUFDOUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWluLWRpYWdub3N0aWNzLy4vbm9kZV9tb2R1bGVzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlL3NoaW0vd2l0aC1zZWxlY3Rvci5qcz82M2I1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9janMvdXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUtc2hpbS93aXRoLXNlbGVjdG9yLnByb2R1Y3Rpb24uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vY2pzL3VzZS1zeW5jLWV4dGVybmFsLXN0b3JlLXNoaW0vd2l0aC1zZWxlY3Rvci5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js\n");

/***/ })

};
;