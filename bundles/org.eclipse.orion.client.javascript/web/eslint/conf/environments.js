
(function(root, factory) {
    if(typeof exports === 'object') {
        module.exports = factory(require, exports, module);
    }
    else if(typeof define === 'function' && define.amd) {
        define(['require', 'exports', 'module'], factory);
    }
    else {
        var req = function(id) {return root[id];},
            exp = root,
            mod = {exports: exp};
        root.conf.environments = factory(req, exp, mod);
    }
}(this, function(require, exports, module) {
module.exports = {
    "builtin": {
        "NaN"                : false,
        "Infinity"           : false,
        "undefined"          : false,
        "eval"               : false,

        "parseFloat"         : false,
        "parseInt"           : false,
        "isNaN"              : false,
        "isFinite"           : false,

        "decodeURI"          : false,
        "decodeURIComponent" : false,
        "encodeURI"          : false,
        "encodeURIComponent" : false,

        "Object"             : false,
        "Function"           : false,
        "Array"              : false,
        "String"             : false,
        "Boolean"            : false,
        "Number"             : false,
        "Date"               : false,
        "RegExp"             : false,
        "Error"              : false,
        "EvalError"          : false,
        "RangeError"         : false,
        "ReferenceError"     : false,
        "SyntaxError"        : false,
        "TypeError"          : false,
        "URIError"           : false,

        "Math"               : false,
        "JSON"               : false
    },

    "browser": {
        "addEventListener"     : false,
        "applicationCache"     : false,
        "ArrayBuffer"          : false,
        "atob"                 : false,
        "Audio"                : false,
        "Blob"                 : false,
        "blur"                 : false,
        "btoa"                 : false,
        "cancelAnimationFrame" : false,
        "clearInterval"        : false,
        "clearTimeout"         : false,
        "close"                : false,
        "closed"               : false,
        "crypto"               : false,
        "DataView"             : false,
        "defaultStatus"        : false,
        "devicePixelRatio"     : false,
        "dispatchEvent"        : false,
        "document"             : false,
        "DOMParser"            : false,
        "Element"              : false,
        "FileReader"           : false,
        "find"                 : false,
        "Float32Array"         : false,
        "Float64Array"         : false,
        "focus"                : false,
        "FormData"             : false,
        "frameElement"         : false,
        "frames"               : false,
        "getComputedStyle"     : false,
        "getSelection"         : false,
        "history"              : false,
        "HTMLAnchorElement"    : false,
        "HTMLBaseElement"      : false,
        "HTMLBodyElement"      : false,
        "HTMLBRElement"        : false,
        "HTMLButtonElement"    : false,
        "HTMLCanvasElement"    : false,
        "HTMLDirectoryElement" : false,
        "HTMLDivElement"       : false,
        "HTMLDListElement"     : false,
        "HTMLElement"          : false,
        "HTMLFieldSetElement"  : false,
        "HTMLFontElement"      : false,
        "HTMLFormElement"      : false,
        "HTMLFrameElement"     : false,
        "HTMLFrameSetElement"  : false,
        "HTMLHeadElement"      : false,
        "HTMLHeadingElement"   : false,
        "HTMLHRElement"        : false,
        "HTMLHtmlElement"      : false,
        "HTMLIFrameElement"    : false,
        "HTMLImageElement"     : false,
        "HTMLInputElement"     : false,
        "HTMLLabelElement"     : false,
        "HTMLLegendElement"    : false,
        "HTMLLIElement"        : false,
        "HTMLLinkElement"      : false,
        "HTMLMapElement"       : false,
        "HTMLMenuElement"      : false,
        "HTMLMetaElement"      : false,
        "HTMLModElement"       : false,
        "HTMLObjectElement"    : false,
        "HTMLOListElement"     : false,
        "HTMLOptGroupElement"  : false,
        "HTMLOptionElement"    : false,
        "HTMLParagraphElement" : false,
        "HTMLParamElement"     : false,
        "HTMLPreElement"       : false,
        "HTMLQuoteElement"     : false,
        "HTMLScriptElement"    : false,
        "HTMLSelectElement"    : false,
        "HTMLStyleElement"     : false,
        "HTMLTableCaptionElement" : false,
        "HTMLTableCellElement" : false,
        "HTMLTableColElement"  : false,
        "HTMLTableElement"     : false,
        "HTMLTableRowElement"  : false,
        "HTMLTableSectionElement" : false,
        "HTMLTextAreaElement"  : false,
        "HTMLTitleElement"     : false,
        "HTMLUListElement"     : false,
        "HTMLVideoElement"     : false,
        "Image"                : false,
        "indexedDB"            : false,
        "innerHeight"          : false,
        "innerWidth"           : false,
        "Int16Array"           : false,
        "Int32Array"           : false,
        "Int8Array"            : false,
        "Intl"                 : false,
        "length"               : false,
        "localStorage"         : false,
        "location"             : false,
        "matchMedia"           : false,
        "MessageChannel"       : false,
        "MessageEvent"         : false,
        "MessagePort"          : false,
        "moveBy"               : false,
        "moveTo"               : false,
        "MutationObserver"     : false,
        "name"                 : false,
        "navigator"            : false,
        "Node"                 : false,
        "NodeFilter"           : false,
        "onbeforeunload"       : true,
        "onblur"               : true,
        "onerror"              : true,
        "onfocus"              : true,
        "onload"               : true,
        "onresize"             : true,
        "onunload"             : true,
        "open"                 : false,
        "openDatabase"         : false,
        "opener"               : false,
        "Option"               : false,
        "outerHeight"          : false,
        "outerWidth"           : false,
        "pageXOffset"          : false,
        "pageYOffset"          : false,
        "parent"               : false,
        "postMessage"          : false,
        "print"                : false,
        "removeEventListener"  : false,
        "requestAnimationFrame" : false,
        "resizeBy"             : false,
        "resizeTo"             : false,
        "screen"               : false,
        "screenX"              : false,
        "screenY"              : false,
        "scroll"               : false,
        "scrollbars"           : false,
        "scrollBy"             : false,
        "scrollTo"             : false,
        "scrollX"              : false,
        "scrollY"              : false,
        "self"                 : false,
        "sessionStorage"       : false,
        "setInterval"          : false,
        "setTimeout"           : false,
        "SharedWorker"         : false,
        "showModalDialog"      : false,
        "stop"                 : false,
        "SVGAElement"          : false,
        "SVGAltGlyphDefElement" : false,
        "SVGAltGlyphElement"   : false,
        "SVGAltGlyphItemElement" : false,
        "SVGAngle"             : false,
        "SVGAnimateColorElement" : false,
        "SVGAnimatedAngle"     : false,
        "SVGAnimatedBoolean"   : false,
        "SVGAnimatedEnumeration" : false,
        "SVGAnimatedInteger"   : false,
        "SVGAnimatedLength"    : false,
        "SVGAnimatedLengthList" : false,
        "SVGAnimatedNumber"    : false,
        "SVGAnimatedNumberList" : false,
        "SVGAnimatedPreserveAspectRatio" : false,
        "SVGAnimatedRect"      : false,
        "SVGAnimatedString"    : false,
        "SVGAnimatedTransformList" : false,
        "SVGAnimateElement"    : false,
        "SVGAnimateMotionElement" : false,
        "SVGAnimateTransformElement" : false,
        "SVGAnimationElement"  : false,
        "SVGCircleElement"     : false,
        "SVGClipPathElement"   : false,
        "SVGColor"             : false,
        "SVGComponentTransferFunctionElement" : false,
        "SVGCursorElement"     : false,
        "SVGDefsElement"       : false,
        "SVGDescElement"       : false,
        "SVGDocument"          : false,
        "SVGElement"           : false,
        "SVGElementInstance"   : false,
        "SVGElementInstanceList" : false,
        "SVGEllipseElement"    : false,
        "SVGFEBlendElement"    : false,
        "SVGFEColorMatrixElement" : false,
        "SVGFEComponentTransferElement" : false,
        "SVGFECompositeElement" : false,
        "SVGFEConvolveMatrixElement" : false,
        "SVGFEDiffuseLightingElement" : false,
        "SVGFEDisplacementMapElement" : false,
        "SVGFEDistantLightElement" : false,
        "SVGFEFloodElement"    : false,
        "SVGFEFuncAElement"    : false,
        "SVGFEFuncBElement"    : false,
        "SVGFEFuncGElement"    : false,
        "SVGFEFuncRElement"    : false,
        "SVGFEGaussianBlurElement" : false,
        "SVGFEImageElement"    : false,
        "SVGFEMergeElement"    : false,
        "SVGFEMergeNodeElement" : false,
        "SVGFEMorphologyElement" : false,
        "SVGFEOffsetElement"   : false,
        "SVGFEPointLightElement" : false,
        "SVGFESpecularLightingElement" : false,
        "SVGFESpotLightElement" : false,
        "SVGFETileElement"     : false,
        "SVGFETurbulenceElement" : false,
        "SVGFilterElement"     : false,
        "SVGFontElement"       : false,
        "SVGFontFaceElement"   : false,
        "SVGFontFaceFormatElement" : false,
        "SVGFontFaceNameElement" : false,
        "SVGFontFaceSrcElement" : false,
        "SVGFontFaceUriElement" : false,
        "SVGForeignObjectElement" : false,
        "SVGGElement"          : false,
        "SVGGlyphElement"      : false,
        "SVGGlyphRefElement"   : false,
        "SVGGradientElement"   : false,
        "SVGHKernElement"      : false,
        "SVGImageElement"      : false,
        "SVGLength"            : false,
        "SVGLengthList"        : false,
        "SVGLinearGradientElement" : false,
        "SVGLineElement"       : false,
        "SVGMarkerElement"     : false,
        "SVGMaskElement"       : false,
        "SVGMatrix"            : false,
        "SVGMetadataElement"   : false,
        "SVGMissingGlyphElement" : false,
        "SVGMPathElement"      : false,
        "SVGNumber"            : false,
        "SVGNumberList"        : false,
        "SVGPaint"             : false,
        "SVGPathElement"       : false,
        "SVGPathSeg"           : false,
        "SVGPathSegArcAbs"     : false,
        "SVGPathSegArcRel"     : false,
        "SVGPathSegClosePath"  : false,
        "SVGPathSegCurvetoCubicAbs" : false,
        "SVGPathSegCurvetoCubicRel" : false,
        "SVGPathSegCurvetoCubicSmoothAbs" : false,
        "SVGPathSegCurvetoCubicSmoothRel" : false,
        "SVGPathSegCurvetoQuadraticAbs" : false,
        "SVGPathSegCurvetoQuadraticRel" : false,
        "SVGPathSegCurvetoQuadraticSmoothAbs" : false,
        "SVGPathSegCurvetoQuadraticSmoothRel" : false,
        "SVGPathSegLinetoAbs"  : false,
        "SVGPathSegLinetoHorizontalAbs" : false,
        "SVGPathSegLinetoHorizontalRel" : false,
        "SVGPathSegLinetoRel"  : false,
        "SVGPathSegLinetoVerticalAbs" : false,
        "SVGPathSegLinetoVerticalRel" : false,
        "SVGPathSegList"       : false,
        "SVGPathSegMovetoAbs"  : false,
        "SVGPathSegMovetoRel"  : false,
        "SVGPatternElement"    : false,
        "SVGPoint"             : false,
        "SVGPointList"         : false,
        "SVGPolygonElement"    : false,
        "SVGPolylineElement"   : false,
        "SVGPreserveAspectRatio" : false,
        "SVGRadialGradientElement" : false,
        "SVGRect"              : false,
        "SVGRectElement"       : false,
        "SVGRenderingIntent"   : false,
        "SVGScriptElement"     : false,
        "SVGSetElement"        : false,
        "SVGStopElement"       : false,
        "SVGStringList"        : false,
        "SVGStyleElement"      : false,
        "SVGSVGElement"        : false,
        "SVGSwitchElement"     : false,
        "SVGSymbolElement"     : false,
        "SVGTextContentElement" : false,
        "SVGTextElement"       : false,
        "SVGTextPathElement"   : false,
        "SVGTextPositioningElement" : false,
        "SVGTitleElement"      : false,
        "SVGTransform"         : false,
        "SVGTransformList"     : false,
        "SVGTRefElement"       : false,
        "SVGTSpanElement"      : false,
        "SVGUnitTypes"         : false,
        "SVGUseElement"        : false,
        "SVGViewElement"       : false,
        "SVGViewSpec"          : false,
        "SVGVKernElement"      : false,
        "top"                  : false,
        "Uint16Array"          : false,
        "Uint32Array"          : false,
        "Uint8Array"           : false,
        "Uint8ClampedArray"    : false,
        "WebSocket"            : false,
        "window"               : false,
        "Worker"               : false,
        "XMLHttpRequest"       : false,
        "XMLSerializer"        : false,
        "XPathEvaluator"       : false,
        "XPathExpression"      : false,
        "XPathResult"          : false
    },

    "node": {
        "__filename"    : false,
        "__dirname"     : false,
        "Buffer"        : false,
        "DataView"      : false,
        "console"       : false,
        "exports"       : true,
        "GLOBAL"        : false,
        "global"        : false,
        "module"        : false,
        "process"       : false,
        "require"       : false,
        "setTimeout"    : false,
        "clearTimeout"  : false,
        "setInterval"   : false,
        "clearInterval" : false,
        "setImmediate"  : false,
        "clearImmediate": false
    }
};
    return module.exports;
}));
