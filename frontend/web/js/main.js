const container = document.getElementById('filter-container');
const loading = document.querySelector('.loading');

// getPost();

// window.addEventListener('scroll', () => {
//     const {scrollTop, scrollHeight, clientHeight} = document.documentElement;
//
//     if (clientHeight + scrollTop >= scrollHeight - 5) {
//         // show the loading animation
//         showLoading();
//     }
// });

// function showLoading() {
//     loading.classList.add('show');
//
//     // load more data
//     setTimeout(getPost, 1000)
// }
//
// async function getPost() {
//     const postResponse = await fetch('?page=0&per-page=3');
//     const postData = await postResponse;
//     const data = postData;
//
//     addDataToDOM(data);
// }
//
// function getRandomNr() {
//     return Math.floor(Math.random() * 100) + 1;
// }

// function addDataToDOM(data) {
//     console.log(data)
//     const postElement = document.createElement('div');
//     postElement.classList.add('card', data.entity, 'mt-2');
//     if (data.entity === 'audio') {
//         postElement.innerHTML = '<div class="card-horizontal p-2">' +
//             '<div class="img-square-wrapper">' +
//             '<a href="/articles/' + data.id + '">' +
//             '<img class="image_size" src="' + data.file1 + '" alt="ge cap" width="315">' +
//             '</a>' +
//             '<i class="icons_video fas fa-volume-up"></i>'+
//             '</div>' +
//             '<div class="card-body">' +
//             '<div class="row">' +
//             '<div class="col-lg-5">' +
//             '<a class="card_name" href="#">' + data.entity + '</a>' +
//             '</div>' +
//             '<div class="col-lg-7 mt-1">' +
//             '<p class="card_inrto">' + data.text1 + '</p>' +
//             '</div>' +
//             '</div>' +
//             '<div class="text_audio pt-3">'+
//             ' <div class="py-3" style="font-weight: 600;">'+
//             '<a href="/articles/' + data.id + '">'+ data.text2 +'</a>'+
//             '</div>'+
//             '<audio controls autoplay muted class="audio_player">' +
//             '<source src="' + data.file2 + '" type="audio/ogg">' +
//             '<source src="' + data.file2 + '" type="audio/mpeg">' +
//             '</audio>'+
//             '</div>'
//             '<div class="icon_get d-flex align-items-center justify-content-between ">' +
//             '<i class="fas fa-eye date">' + data.viewCount + '</i>' +
//             '<p class="date" style="margin: 0;">' + data.createdAt + '</p>' +
//             '</div>' +
//             '</div>' +
//             '</div>';
//     }
//     else if(data.entity === 'video')
//     {
//         postElement.innerHTML = '<div class="card-horizontal p-2">' +
//             '<div class="img-square-wrapper">' +
//             '<a href="/articles/' + data.id + '">' +
//             '<img class="image_size" src="' + data.file1 + '" alt="ge cap" width="315">' +
//             '<i class="icons_video fas fa-video"></i>'+
//             '</a>' +
//             '</div>' +
//             '<div class="card-body">' +
//             '<div class="row">' +
//             '<div class="col-lg-5">' +
//             '<a class="card_name" href="#">' + data.entity + '</a>' +
//             '</div>' +
//             '<div class="col-lg-7 mt-1">' +
//             '<p class="card_inrto">' + data.text1 + '</p>' +
//             '</div>' +
//             '</div>' +
//             '<h5 class="card-text"><a href="/articles/' + data.id + '">' + data.text2 + '</a></h5>' +
//             '<p class="card_intro-text">' + data.text4 + '</p>' +
//             '<div class="card_text-button"><a href="/articles/' + data.id + '">' + truncateHTML(data.text3, 100) + '</a></div>' +
//             '<div class="icon_get d-flex align-items-center justify-content-between ">' +
//             '<i class="fas fa-eye date">' + data.viewCount + '</i>' +
//             '<p class="date" style="margin: 0;">' + data.createdAt + '</p>' +
//             '</div>' +
//             '</div>' +
//             '</div>';
//     } else {
//         postElement.innerHTML = '<div class="card-horizontal p-2">' +
//             '<div class="img-square-wrapper">' +
//             '<a href="/articles/' + data.id + '">' +
//             '<img class="image_size" src="' + data.file1 + '" alt="ge cap" width="315">' +
//             '</a>' +
//             '</div>' +
//             '<div class="card-body">' +
//             '<div class="row">' +
//             '<div class="col-lg-5">' +
//             '<a class="card_name" href="#">' + data.entity + '</a>' +
//             '</div>' +
//             '<div class="col-lg-7 mt-1">' +
//             '<p class="card_inrto">' + data.text1 + '</p>' +
//             '</div>' +
//             '</div>' +
//             '<h5 class="card-text"><a href="/articles/' + data.id + '">' + data.text2 + '</a></h5>' +
//             '<p class="card_intro-text">' + data.text4 + '</p>' +
//             '<div class="card_text-button"><a href="/articles/' + data.id + '">' + truncateHTML(data.text3, 100) + '</a></div>' +
//             '<div class="icon_get d-flex align-items-center justify-content-between ">' +
//             '<i class="fas fa-eye date">' + data.viewCount + '</i>' +
//             '<p class="date" style="margin: 0;">' + data.createdAt + '</p>' +
//             '</div>' +
//             '</div>' +
//             '</div>';
//     }
//
//     container.appendChild(postElement);
//
//     loading.classList.remove('show');
// }
//
// function truncateHTML(text, length) {
//     var truncated = text.substring(0, length);
//     // Remove line breaks and surrounding whitespace
//     truncated = truncated.replace(/(\r\n|\n|\r)/gm, "").trim();
//     // If the text ends with an incomplete start tag, trim it off
//     truncated = truncated.replace(/<(\w*)(?:(?:\s\w+(?:={0,1}(["']{0,1})\w*\2{0,1})))*$/g, '');
//     // If the text ends with a truncated end tag, fix it.
//     var truncatedEndTagExpr = /<\/((?:\w*))$/g;
//     var truncatedEndTagMatch = truncatedEndTagExpr.exec(truncated);
//     if (truncatedEndTagMatch != null) {
//         var truncatedEndTag = truncatedEndTagMatch[1];
//         // Check to see if there's an identifiable tag in the end tag
//         if (truncatedEndTag.length > 0) {
//             // If so, find the start tag, and close it
//             var startTagExpr = new RegExp(
//                 "<(" + truncatedEndTag + "\\w?)(?:(?:\\s\\w+(?:=([\"\'])\\w*\\2)))*>");
//             var testString = truncated;
//             var startTagMatch = startTagExpr.exec(testString);
//
//             var startTag = null;
//             while (startTagMatch != null) {
//                 startTag = startTagMatch[1];
//                 testString = testString.replace(startTagExpr, '');
//                 startTagMatch = startTagExpr.exec(testString);
//             }
//             if (startTag != null) {
//                 truncated = truncated.replace(truncatedEndTagExpr, '</' + startTag + '>');
//             }
//         } else {
//             // Otherwise, cull off the broken end tag
//             truncated = truncated.replace(truncatedEndTagExpr, '');
//         }
//     }
//     // Now the tricky part. Reverse the text, and look for opening tags. For each opening tag,
//     //  check to see that he closing tag before it is for that tag. If not, append a closing tag.
//     var testString = reverseHtml(truncated);
//     var reverseTagOpenExpr = /<(?:(["'])\w*\1=\w+ )*(\w*)>/;
//     var tagMatch = reverseTagOpenExpr.exec(testString);
//     while (tagMatch != null) {
//         var tag = tagMatch[0];
//         var tagName = tagMatch[2];
//         var startPos = tagMatch.index;
//         var endPos = startPos + tag.length;
//         var fragment = testString.substring(0, endPos);
//         // Test to see if an end tag is found in the fragment. If not, append one to the end
//         //  of the truncated HTML, thus closing the last unclosed tag
//         if (!new RegExp("<" + tagName + "\/>").test(fragment)) {
//             truncated += '</' + reverseHtml(tagName) + '>';
//         }
//         // Get rid of the already tested fragment
//         testString = testString.replace(fragment, '');
//         // Get another tag to test
//         tagMatch = reverseTagOpenExpr.exec(testString);
//     }
//     return truncated;
// }
//
// function reverseHtml(str) {
//     var ph = String.fromCharCode(206);
//     var result = str.split('').reverse().join('');
//     while (result.indexOf('<') > -1) {
//         result = result.replace('<', ph);
//     }
//     while (result.indexOf('>') > -1) {
//         result = result.replace('>', '<');
//     }
//     while (result.indexOf(ph) > -1) {
//         result = result.replace(ph, '>');
//     }
//     return result;
// }

/**
 * Swiper 4.4.1
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";
    var f = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, Y = "undefined" == typeof window ? {
        document: f, navigator: {userAgent: ""}, location: {}, history: {}, CustomEvent: function () {
            return this
        }, addEventListener: function () {
        }, removeEventListener: function () {
        }, getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        }, Image: function () {
        }, Date: function () {
        }, screen: {}, setTimeout: function () {
        }, clearTimeout: function () {
        }
    } : window, l = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function L(e, t) {
        var a = [], i = 0;
        if (e && !t && e instanceof l) return e;
        if (e) if ("string" == typeof e) {
            var s, r, n = e.trim();
            if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                var o = "div";
                for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
            } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
        } else if (e.nodeType || e === Y || e === f) a.push(e); else if (0 < e.length && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a)
    }

    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }

    L.fn = l.prototype, L.Class = l, L.Dom7 = l;
    var t = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1) for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        }, attr: function (e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1) if (2 === a.length) this[i].setAttribute(e, t); else for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1) (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e, a.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e, a.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0], r = t[1], n = t[2], s = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a); else for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }

            "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r) for (d = 0; d < p.length; d += 1) {
                    var h = p[d];
                    u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
                        listener: n,
                        proxyListener: o
                    }), u.addEventListener(h, o, s)
                } else for (d = 0; d < p.length; d += 1) {
                    var v = p[d];
                    u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({listener: n, proxyListener: l}), u.addEventListener(v, l, s)
                }
            }
            return this
        }, off: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0], s = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], p = 0; p < this.length; p += 1) {
                var c = this[p], u = void 0;
                if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) for (var h = u.length - 1; 0 <= h; h -= 1) {
                    var v = u[h];
                    r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1) for (var r = a[s], n = 0; n < this.length; n += 1) {
                var o = this[n], l = void 0;
                try {
                    l = new Y.CustomEvent(r, {detail: i, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
                }
                o.dom7EventData = e.filter(function (e, t) {
                    return 0 < t
                }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
            }
            return this
        }, transitionEnd: function (t) {
            var a, i = ["webkitTransitionEnd", "transitionend"], s = this;

            function r(e) {
                if (e.target === this) for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
            }

            if (t) for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this
        }, outerWidth: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (0 < this.length) {
                var e = this[0], t = e.getBoundingClientRect(), a = f.body, i = e.clientTop || a.clientTop || 0, s = e.clientLeft || a.clientLeft || 0, r = e === Y ? Y.scrollY : e.scrollTop,
                    n = e === Y ? Y.scrollX : e.scrollLeft;
                return {top: t.top + r - i, left: t.left + n - s}
            }
            return null
        }, css: function (e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (var i in e) this[a].style[i] = e[i];
                    return this
                }
                if (this[0]) return Y.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, a, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1
            }
            if (e === f) return i === f;
            if (e === Y) return i === Y;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1) if (t[a] === i) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                    var r = f.createElement("div");
                    for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
                } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]); else this[s].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, a, i = this;
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var s = f.createElement("div");
                for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0])
            } else if (e instanceof l) for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]); else i[t].insertBefore(e, i[t].childNodes[0]);
            return this
        }, next: function (e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        }, nextAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        }, prev: function (e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        }, prevAll: function (e) {
            var t = [], a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        }, parent: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        }, parents: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return L(r(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t)
        }, children: function (e) {
            for (var t = [], a = 0; a < this.length; a += 1) for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? Y.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function (e) {
        L.fn[e] = t[e]
    });
    var e, a, i, V = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var a, i, s;
            void 0 === t && (t = "x");
            var r = Y.getComputedStyle(e, null);
            return Y.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), s = new Y.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = Y.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = Y.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
        }, parseUrlQuery: function (e) {
            var t, a, i, s, r = {}, n = e || Y.location.href;
            if ("string" == typeof n && n.length) for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
            })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
            return r
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                var s = e[i];
                if (null != s) for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                    var l = r[n], d = Object.getOwnPropertyDescriptor(s, l);
                    void 0 !== d && d.enumerable && (V.isObject(a[l]) && V.isObject(s[l]) ? V.extend(a[l], s[l]) : !V.isObject(a[l]) && V.isObject(s[l]) ? (a[l] = {}, V.extend(a[l], s[l])) : a[l] = s[l])
                }
            }
            return a
        }
    }, R = (i = f.createElement("div"), {
        touch: Y.Modernizr && !0 === Y.Modernizr.touch || !!("ontouchstart" in Y || Y.DocumentTouch && f instanceof Y.DocumentTouch),
        pointerEvents: !(!Y.navigator.pointerEnabled && !Y.PointerEvent),
        prefixedPointerEvents: !!Y.navigator.msPointerEnabled,
        transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
        transforms3d: Y.Modernizr && !0 === Y.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
        flexbox: function () {
            for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1) if (t[a] in e) return !0;
            return !1
        }(),
        observer: "MutationObserver" in Y || "WebkitMutationObserver" in Y,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                Y.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in Y
    }), s = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, n = {components: {configurable: !0}};
    s.prototype.on = function (e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
        }), i
    }, s.prototype.once = function (i, s, e) {
        var r = this;
        if ("function" != typeof s) return r;
        return r.on(i, function e() {
            for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
            s.apply(r, t), r.off(i, e)
        }, e)
    }, s.prototype.off = function (e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function (a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
                e === i && s.eventsListeners[a].splice(t, 1)
            })
        }), s
    }, s.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(s, i)
                })
            }
        })), r
    }, s.prototype.useModulesParams = function (a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function (e) {
            var t = i.modules[e];
            t.params && V.extend(a, t.params)
        })
    }, s.prototype.useModules = function (i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function (e) {
            var a = s.modules[e], t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function (e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }), a.on && s.on && Object.keys(a.on).forEach(function (e) {
                s.on(e, a.on[e])
            }), a.create && a.create.bind(s)(t)
        })
    }, n.components.set = function (e) {
        this.use && this.use(e)
    }, s.installModule = function (t) {
        for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + V.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function (e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, s.use = function (e) {
        for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(s, n);
    var o = {
        updateSize: function () {
            var e, t, a = this, i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), V.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var e = this, t = e.params, a = e.$wrapperEl, i = e.size, s = e.rtlTranslate, r = e.wrongRTL, n = e.virtual && t.virtual.enabled, o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass), d = n ? e.virtual.slides.length : l.length, p = [], c = [], u = [], h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length, m = e.snapGrid.length, g = t.spaceBetween, b = -h, w = 0, y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({marginLeft: "", marginTop: ""}) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = C - (t.slidesPerColumn * C - d), k = 0; k < d; k += 1) {
                    T = 0;
                    var z = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var P = void 0, $ = void 0, L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), P = $ + L * x / S, z.css({
                            "-webkit-box-ordinal-group": P,
                            "-moz-box-ordinal-group": P,
                            "-ms-flex-order": P,
                            "-webkit-order": P,
                            order: P
                        })) : $ = k - (L = Math.floor(k / C)) * C, z.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== z.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = Y.getComputedStyle(z[0], null), D = z[0].style.transform, O = z[0].style.webkitTransform;
                            D && (z[0].style.transform = "none"), O && (z[0].style.webkitTransform = "none"), T = t.roundLengths ? e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0) : e.isHorizontal() ? z[0].getBoundingClientRect().width + parseFloat(I.getPropertyValue("margin-left")) + parseFloat(I.getPropertyValue("margin-right")) : z[0].getBoundingClientRect().height + parseFloat(I.getPropertyValue("margin-top")) + parseFloat(I.getPropertyValue("margin-bottom")), D && (z[0].style.transform = D), O && (z[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
                        l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({width: e.virtualSize + t.spaceBetween + "px"}), R.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({width: e.virtualSize + t.spaceBetween + "px"}) : a.css({height: e.virtualSize + t.spaceBetween + "px"})), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({width: e.virtualSize + t.spaceBetween + "px"}) : a.css({height: e.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                    E = [];
                    for (var A = 0; A < p.length; A += 1) {
                        var H = p[A];
                        t.roundLengths && (H = Math.floor(H)), p[A] < e.virtualSize + p[0] && E.push(H)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var B = 0; B < p.length; B += 1) {
                        var G = p[B];
                        t.roundLengths && (G = Math.floor(G)), p[B] <= e.virtualSize - i && E.push(G)
                    }
                    p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({marginLeft: g + "px"}) : l.css({marginRight: g + "px"}) : l.css({marginBottom: g + "px"})), t.centerInsufficientSlides) {
                    var N = 0;
                    if (u.forEach(function (e) {
                        N += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }), (N -= t.spaceBetween) < i) {
                        var X = (i - N) / 2;
                        p.forEach(function (e, t) {
                            p[t] = e - X
                        }), c.forEach(function (e, t) {
                            c[t] = e + X
                        })
                    }
                }
                V.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, a = this, i = [], s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView) for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                var r = a.activeIndex + t;
                if (r > a.slides.length) break;
                i.push(a.slides.eq(r)[0])
            } else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var n = i[t].offsetHeight;
                s = s < n ? n : s
            }
            s && a.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this, a = t.params, i = t.slides, s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n], l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset), p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        }, updateProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this, a = t.params, i = t.maxTranslate() - t.minTranslate(), s = t.progress, r = t.isBeginning, n = t.isEnd, o = r, l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), V.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
        }, updateSlidesClasses: function () {
            var e, t = this, a = t.slides, i = t.params, s = t.$wrapperEl, r = t.activeIndex, n = t.realIndex, o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, a = this, i = a.rtlTranslate ? a.translate : -a.translate, s = a.slidesGrid, r = a.snapGrid, n = a.params, o = a.activeIndex, l = a.realIndex, d = a.snapIndex, p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                V.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
            } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this, a = t.params, i = L(e.target).closest("." + a.slideClass)[0], s = !1;
            if (i) for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var d = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, a = this.rtlTranslate, i = this.translate, s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = V.getTranslate(s[0], e);
            return a && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            var a = this, i = a.rtlTranslate, s = a.params, r = a.$wrapperEl, n = a.progress, o = 0, l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (R.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var p = {
        setTransition: function (e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var a = this, i = a.activeIndex, s = a.params, r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var a = this, i = a.activeIndex, s = a.previousIndex;
            a.animating = !1, a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var c = {
        slideTo: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this, r = e;
            r < 0 && (r = 0);
            var n = s.params, o = s.snapGrid, l = s.slidesGrid, d = s.previousIndex, p = s.activeIndex, c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v), n.normalizeSlideIndex) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && R.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
        }, slideToLoop: function (e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
        }, slideNext: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.params, r = i.animating;
            return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        }, slidePrev: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.params, r = i.animating, n = i.snapGrid, o = i.slidesGrid, l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            var p, c = d(l ? i.translate : -i.translate), u = n.map(function (e) {
                return d(e)
            }), h = (o.map(function (e) {
                return d(e)
            }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
        }, slideReset: function (e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
        }, slideToClosest: function (e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this, s = i.activeIndex, r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate, o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        }, slideToClickedSlide: function () {
            var e, t = this, a = t.params, i = t.$wrapperEl, s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView, r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), V.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), V.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var u = {
        loopCreate: function () {
            var i = this, e = i.params, t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [], l = [];
            s.each(function (e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        }, loopFix: function () {
            var e, t = this, a = t.params, i = t.activeIndex, s = t.slides, r = t.loopedSlides, n = t.allowSlidePrev, o = t.allowSlideNext, l = t.snapGrid, d = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n, t.allowSlideNext = o
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), a.removeAttr("data-swiper-slide-index")
        }
    };
    var h = {
        setGrabCursor: function (e) {
            if (!(R.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            R.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var v = {
        appendSlide: function (e) {
            var t = this, a = t.$wrapperEl, i = t.params;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]); else a.append(e);
            i.loop && t.loopCreate(), i.observer && R.observer || t.update()
        }, prependSlide: function (e) {
            var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
            a.loop && t.loopDestroy();
            var r = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                r = s + e.length
            } else i.prepend(e);
            a.loop && t.loopCreate(), a.observer && R.observer || t.update(), t.slideTo(r, 0, !1)
        }, addSlide: function (e, t) {
            var a = this, i = a.$wrapperEl, s = a.params, r = a.activeIndex;
            s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
            var n = a.slides.length;
            if (e <= 0) a.prependSlide(t); else if (n <= e) a.appendSlide(t); else {
                for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                    var p = a.slides.eq(d);
                    p.remove(), l.unshift(p)
                }
                if ("object" == typeof t && "length" in t) {
                    for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                    o = e < r ? r + t.length : r
                } else i.append(t);
                for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                s.loop && a.loopCreate(), s.observer && R.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
            }
        }, removeSlide: function (e) {
            var t = this, a = t.params, i = t.$wrapperEl, s = t.activeIndex;
            a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
            var r, n = s;
            if ("object" == typeof e && "length" in e) {
                for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                n = Math.max(n, 0)
            } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
            a.loop && t.loopCreate(), a.observer && R.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, m = function () {
        var e = Y.navigator.userAgent,
            t = {ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: Y.cordova || Y.phonegap, phonegap: Y.cordova || Y.phonegap},
            a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), i = e.match(/(Android);?[\s\/]+([\d.]+)?/), s = e.match(/(iPad).*OS\s([\d_]+)/), r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
            var o = t.osVersion.split("."), l = f.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
        }
        return t.pixelRatio = Y.devicePixelRatio || 1, t
    }();

    function g() {
        var e = this, t = e.params, a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext, s = e.allowSlidePrev, r = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }

    var b = {
        attachEvents: function () {
            var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl;
            e.onTouchStart = function (e) {
                var t = this, a = t.touchEventsData, i = t.params, s = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var r = e;
                    if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved)) if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0; else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                        s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                        var n = s.currentX, o = s.currentY, l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection, d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                        if (!l || !(n <= d || n >= Y.screen.width - d)) {
                            if (V.extend(a, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), s.startX = n, s.startY = o, a.touchStartTime = V.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                                var p = !0;
                                L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur(), p && t.allowTouchMove && i.touchStartPreventDefault && r.preventDefault()
                            }
                            t.emit("touchStart", r)
                        }
                    }
                }
            }.bind(e), e.onTouchMove = function (e) {
                var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = e;
                if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
                    if (!a.isTouchEvent || "mousemove" !== n.type) {
                        var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX, l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                        if (n.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
                        if (!t.allowTouchMove) return t.allowClick = !1, void (a.isTouched && (V.extend(s, {startX: o, startY: l, currentX: o, currentY: l}), a.touchStartTime = V.now()));
                        if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (t.isVertical()) {
                            if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void (a.isMoved = !1)
                        } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                        if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void (t.allowClick = !1);
                        if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                            s.currentX = o, s.currentY = l;
                            var d, p = s.currentX - s.startX, c = s.currentY - s.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1; else if (a.startMoving) {
                                t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                                var u = t.isHorizontal() ? p : c;
                                s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                                var h = !0, v = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                                    if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void (a.currentTranslate = a.startTranslate);
                                    if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                    position: s[t.isHorizontal() ? "startX" : "startY"],
                                    time: a.touchStartTime
                                }), a.velocities.push({
                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: V.now()
                                })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
                            }
                        }
                    }
                } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
            }.bind(e), e.onTouchEnd = function (e) {
                var t = this, a = t.touchEventsData, i = t.params, s = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, d = e;
                if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void (a.startMoving = !1);
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = V.now(), u = c - a.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = V.nextTick(function () {
                    t && !t.destroyed && t.emit("click", d)
                }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = V.now(), V.nextTick(function () {
                    t.destroyed || (t.allowClick = !0)
                }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void (a.startMoving = !1);
                if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (1 < a.velocities.length) {
                            var h = a.velocities.pop(), v = a.velocities.pop(), f = h.position - v.position, m = h.time - v.time;
                            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < V.now() - h.time) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                        var g = 1e3 * i.freeModeMomentumRatio, b = t.velocity * g, w = t.translate + b;
                        r && (w = -w);
                        var y, x, T = !1, E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0); else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0); else if (i.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1) if (l[C] > -w) {
                                S = C;
                                break
                            }
                            w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (x && t.once("transitionEnd", function () {
                            t.loopFix()
                        }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity); else if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var M = 0, k = t.slidesSizesGrid[0], z = 0; z < o.length; z += i.slidesPerGroup) void 0 !== o[z + i.slidesPerGroup] ? p >= o[z] && p < o[z + i.slidesPerGroup] && (k = o[(M = z) + i.slidesPerGroup] - o[z]) : p >= o[z] && (M = z, k = o[o.length - 1] - o[o.length - 2]);
                    var P = (p - o[M]) / k;
                    if (u > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (P >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (P > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                    }
                }
            }.bind(e), e.onClick = function (e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(e);
            var r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested;
            if (R.touch || !R.pointerEvents && !R.prefixedPointerEvents) {
                if (R.touch) {
                    var o = !("touchstart" !== a.start || !R.passiveListener || !t.passiveListeners) && {passive: !0, capture: !1};
                    r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, R.passiveListener ? {
                        passive: !1,
                        capture: n
                    } : n), r.addEventListener(a.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !R.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
            } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
        }, detachEvents: function () {
            var e = this, t = e.params, a = e.touchEvents, i = e.el, s = e.wrapperEl, r = "container" === t.touchEventsTarget ? i : s, n = !!t.nested;
            if (R.touch || !R.pointerEvents && !R.prefixedPointerEvents) {
                if (R.touch) {
                    var o = !("onTouchStart" !== a.start || !R.passiveListener || !t.passiveListeners) && {passive: !0, capture: !1};
                    r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
                }
                (t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !R.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
        }
    };
    var w, y = {
        setBreakpoint: function () {
            var e = this, t = e.activeIndex, a = e.initialized, i = e.loopedSlides;
            void 0 === i && (i = 0);
            var s = e.params, r = s.breakpoints;
            if (r && (!r || 0 !== Object.keys(r).length)) {
                var n = e.getBreakpoint(r);
                if (n && e.currentBreakpoint !== n) {
                    var o = n in r ? r[n] : e.originalParams, l = s.loop && o.slidesPerView !== s.slidesPerView;
                    V.extend(e.params, o), V.extend(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), e.currentBreakpoint = n, l && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", o)
                }
            }
        }, getBreakpoint: function (e) {
            if (e) {
                var t = !1, a = [];
                Object.keys(e).forEach(function (e) {
                    a.push(e)
                }), a.sort(function (e, t) {
                    return parseInt(e, 10) - parseInt(t, 10)
                });
                for (var i = 0; i < a.length; i += 1) {
                    var s = a[i];
                    this.params.breakpointsInverse ? s <= Y.innerWidth && (t = s) : s >= Y.innerWidth && !t && (t = s)
                }
                return t || "max"
            }
        }
    }, I = {
        isIE: !!Y.navigator.userAgent.match(/Trident/g) || !!Y.navigator.userAgent.match(/MSIE/g),
        isEdge: !!Y.navigator.userAgent.match(/Edge/g),
        isSafari: (w = Y.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent)
    };
    var x = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, T = {
            update: o, translate: d, transition: p, slide: c, loop: u, grabCursor: h, manipulation: v, events: b, breakpoints: y, checkOverflow: {
                checkOverflow: function () {
                    var e = this, t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            }, classes: {
                addClasses: function () {
                    var t = this.classNames, a = this.params, e = this.rtl, i = this.$el, s = [];
                    s.push(a.direction), a.freeMode && s.push("free-mode"), R.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (R.pointerEvents || R.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function (e) {
                        t.push(a.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            }, images: {
                loadImage: function (e, t, a, i, s, r) {
                    var n;

                    function o() {
                        r && r()
                    }

                    e.complete && s ? o() : t ? ((n = new Y.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
                }, preloadImages: function () {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }

                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }, E = {}, S = function (u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = V.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function (t) {
                    Object.keys(T[t]).forEach(function (e) {
                        h.prototype[e] || (h.prototype[e] = T[t][e])
                    })
                });
                var r = this;
                void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
                    var t = r.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0], i = t.params[a];
                        if ("object" != typeof i || null === i) return;
                        if (!(a in s && "enabled" in i)) return;
                        !0 === s[a] && (s[a] = {enabled: !0}), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {enabled: !1})
                    }
                });
                var n = V.extend({}, x);
                r.useModulesParams(n), r.params = V.extend({}, n, E, s), r.originalParams = V.extend({}, r.params), r.passedParams = V.extend({}, s);
                var o = (r.$ = L)(r.params.el);
                if (t = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function (e, t) {
                            var a = V.extend({}, s, {el: t});
                            l.push(new h(a))
                        }), l
                    }
                    t.swiper = r, o.data("swiper", r);
                    var d, p, c = o.children("." + r.params.wrapperClass);
                    return V.extend(r, {
                        $el: o,
                        el: t,
                        $wrapperEl: c,
                        wrapperEl: c[0],
                        classNames: [],
                        slides: L(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === r.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === r.params.direction
                        },
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === c.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], R.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : R.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, r.touchEventsDesktop = {start: p[0], move: p[1], end: p[2]}, R.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: V.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
            }

            u && (h.__proto__ = u);
            var e = {extendedDefaults: {configurable: !0}, defaults: {configurable: !0}, Class: {configurable: !0}, $: {configurable: !0}};
            return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
                var e = this, t = e.params, a = e.slides, i = e.slidesGrid, s = e.size, r = e.activeIndex, n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
                    for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
                } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, h.prototype.update = function () {
                var a = this;
                if (a && !a.destroyed) {
                    var e = a.snapGrid, t = a.params;
                    t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }

                function i() {
                    var e = a.rtlTranslate ? -1 * a.translate : a.translate, t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                    a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
            }, h.prototype.init = function () {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, h.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this, i = a.params, s = a.$el, r = a.$wrapperEl, n = a.slides;
                return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function (e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), V.deleteProps(a)), a.destroyed = !0), null
            }, h.extendDefaults = function (e) {
                V.extend(E, e)
            }, e.extendedDefaults.get = function () {
                return E
            }, e.defaults.get = function () {
                return x
            }, e.Class.get = function () {
                return u
            }, e.$.get = function () {
                return L
            }, Object.defineProperties(h, e), h
        }(s), C = {name: "device", proto: {device: m}, static: {device: m}}, M = {name: "support", proto: {support: R}, static: {support: R}},
        k = {name: "browser", proto: {browser: I}, static: {browser: I}}, z = {
            name: "resize", create: function () {
                var e = this;
                V.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    Y.addEventListener("resize", this.resize.resizeHandler), Y.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    Y.removeEventListener("resize", this.resize.resizeHandler), Y.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, P = {
            func: Y.MutationObserver || Y.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this, i = new P.func(function (e) {
                    if (1 !== e.length) {
                        var t = function () {
                            a.emit("observerUpdate", e[0])
                        };
                        Y.requestAnimationFrame ? Y.requestAnimationFrame(t) : Y.setTimeout(t, 0)
                    } else a.emit("observerUpdate", e[0])
                });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            }, init: function () {
                var e = this;
                if (R.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {childList: !1}), e.observer.attach(e.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        }, $ = {
            name: "observer", params: {observer: !1, observeParents: !1}, create: function () {
                V.extend(this, {observer: {init: P.init.bind(this), attach: P.attach.bind(this), destroy: P.destroy.bind(this), observers: []}})
            }, on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, D = {
            update: function (e) {
                var t = this, a = t.params, i = a.slidesPerView, s = a.slidesPerGroup, r = a.centeredSlides, n = t.params.virtual, o = n.addSlidesBefore, l = n.addSlidesAfter, d = t.virtual, p = d.from,
                    c = d.to, u = d.slides, h = d.slidesGrid, v = d.renderSlide, f = d.offset;
                t.updateActiveIndex();
                var m, g, b, w = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
                var y = Math.max((w || 0) - b, 0), x = Math.min((w || 0) + g, u.length - 1), T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }

                if (V.extend(t.virtual, {
                    from: y,
                    to: x,
                    offset: T,
                    slidesGrid: t.slidesGrid
                }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T, from: y, to: x, slides: function () {
                        for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void E();
                var S = [], C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var M = p; M <= c; M += 1) (M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
                C.forEach(function (e) {
                    t.$wrapperEl.append(v(u[e], e))
                }), S.sort(function (e, t) {
                    return e < t
                }).forEach(function (e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
            }, renderSlide: function (e, t) {
                var a = this, i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
            }, appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            }, prependSlide: function (e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var a = t.virtual.cache, i = {};
                    Object.keys(a).forEach(function (e) {
                        i[e + 1] = a[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        }, O = {
            name: "virtual", params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0}}, create: function () {
                var e = this;
                V.extend(e, {
                    virtual: {
                        update: D.update.bind(e),
                        appendSlide: D.appendSlide.bind(e),
                        prependSlide: D.prependSlide.bind(e),
                        renderSlide: D.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            }, on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {watchSlidesProgress: !0};
                        V.extend(e.params, t), V.extend(e.originalParams, t), e.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, A = {
            handle: function (e) {
                var t = this, a = t.rtlTranslate, i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = Y.innerWidth, o = Y.innerHeight, l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [[l.left, l.top], [l.left + t.width, l.top], [l.left, l.top + t.height], [l.left + t.width, l.top + t.height]], p = 0; p < d.length; p += 1) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            }, enable: function () {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, H = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                V.extend(this, {keyboard: {enabled: !1, enable: A.enable.bind(this), disable: A.disable.bind(this), handle: A.handle.bind(this)}})
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var B = {
        lastScrollTime: V.now(), event: -1 < Y.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function () {
            var e = "onwheel", t = e in f;
            if (!t) {
                var a = f.createElement("div");
                a.setAttribute(e, "return;"), t = "function" == typeof a[e]
            }
            return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
        }() ? "wheel" : "mousewheel", normalize: function (e) {
            var t = 0, a = 0, i = 0, s = 0;
            return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                spinX: t,
                spinY: a,
                pixelX: i,
                pixelY: s
            }
        }, handleMouseEnter: function () {
            this.mouseEntered = !0
        }, handleMouseLeave: function () {
            this.mouseEntered = !1
        }, handle: function (e) {
            var t = e, a = this, i = a.params.mousewheel;
            if (!a.mouseEntered && !i.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var s = 0, r = a.rtlTranslate ? -1 : 1, n = B.normalize(t);
            if (i.forceToAxis) if (a.isHorizontal()) {
                if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                s = n.pixelX * r
            } else {
                if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                s = n.pixelY
            } else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
            if (0 === s) return !0;
            if (i.invert && (s = -s), a.params.freeMode) {
                a.params.loop && a.loopFix();
                var o = a.getTranslate() + s * i.sensitivity, l = a.isBeginning, d = a.isEnd;
                if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = V.nextTick(function () {
                    a.slideToClosest()
                }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
            } else {
                if (60 < V.now() - a.mousewheel.lastScrollTime) if (s < 0) if (a.isEnd && !a.params.loop || a.animating) {
                    if (i.releaseOnEdges) return !0
                } else a.slideNext(), a.emit("scroll", t); else if (a.isBeginning && !a.params.loop || a.animating) {
                    if (i.releaseOnEdges) return !0
                } else a.slidePrev(), a.emit("scroll", t);
                a.mousewheel.lastScrollTime = (new Y.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        }, enable: function () {
            var e = this;
            if (!B.event) return !1;
            if (e.mousewheel.enabled) return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(B.event, e.mousewheel.handle), e.mousewheel.enabled = !0
        }, disable: function () {
            var e = this;
            if (!B.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            var t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(B.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
        }
    }, G = {
        update: function () {
            var e = this, t = e.params.navigation;
            if (!e.params.loop) {
                var a = e.navigation, i = a.$nextEl, s = a.$prevEl;
                s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
            }
        }, init: function () {
            var e, t, a = this, i = a.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", function (e) {
                e.preventDefault(), a.isEnd && !a.params.loop || a.slideNext()
            }), t && 0 < t.length && t.on("click", function (e) {
                e.preventDefault(), a.isBeginning && !a.params.loop || a.slidePrev()
            }), V.extend(a.navigation, {$nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0]}))
        }, destroy: function () {
            var e = this.navigation, t = e.$nextEl, a = e.$prevEl;
            t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), a && a.length && (a.off("click"), a.removeClass(this.params.navigation.disabledClass))
        }
    }, N = {
        update: function () {
            var e = this, t = e.rtl, s = e.params.pagination;
            if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el,
                    n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                    var o, l, d, p = e.pagination.bullets;
                    if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function (e, t) {
                        var a = L(t), i = a.index();
                        i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                    }); else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
                        for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                        c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                    }
                    if (s.dynamicBullets) {
                        var v = Math.min(p.length, s.dynamicMainBullets + 4), f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize, m = t ? "right" : "left";
                        p.css(e.isHorizontal() ? m : "top", f + "px")
                    }
                }
                if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
                    var g;
                    g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    var b = (r + 1) / n, w = 1, y = 1;
                    "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                }
                "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
            }
        }, render: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, i = e.pagination.$el, s = "";
                if ("bullets" === t.type) {
                    for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                    i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                }
                "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
            }
        }, init: function () {
            var a = this, e = a.params.pagination;
            if (e.el) {
                var t = L(e.el);
                0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
                    e.preventDefault();
                    var t = L(this).index() * a.params.slidesPerGroup;
                    a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                }), V.extend(a.pagination, {$el: t, el: t[0]}))
            }
        }, destroy: function () {
            var e = this, t = e.params.pagination;
            if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                var a = e.pagination.$el;
                a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
            }
        }
    }, X = {
        setTranslate: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, a = e.rtlTranslate, i = e.progress, s = t.dragSize, r = t.trackSize, n = t.$dragEl, o = t.$el, l = e.params.scrollbar, d = s, p = (r - s) * i;
                a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (R.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (R.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
                    o[0].style.opacity = 0, o.transition(400)
                }, 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            var e = this;
            if (e.params.scrollbar.el && e.scrollbar.el) {
                var t = e.scrollbar, a = t.$dragEl, i = t.$el;
                a[0].style.width = "", a[0].style.height = "";
                var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, n = e.size / e.virtualSize, o = n * (r / e.size);
                s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), V.extend(t, {
                    trackSize: r,
                    divider: n,
                    moveDivider: o,
                    dragSize: s
                }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
            }
        }, setDragPosition: function (e) {
            var t, a = this, i = a.scrollbar, s = a.rtlTranslate, r = i.$el, n = i.dragSize, o = i.trackSize;
            t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
            a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this, a = t.params.scrollbar, i = t.scrollbar, s = t.$wrapperEl, r = i.$el, n = i.$dragEl;
            t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, a = this.$wrapperEl, i = t.$el, s = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this, a = t.params.scrollbar, i = t.scrollbar.$el;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = V.nextTick(function () {
                i.css("opacity", 0), i.transition(400)
            }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
        }, enableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.touchEvents, i = e.touchEventsDesktop, s = e.params, r = t.$el[0], n = !(!R.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                    o = !(!R.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
                R.touch || !R.pointerEvents && !R.prefixedPointerEvents ? (R.touch && (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !R.touch && m.ios) && (r.addEventListener("mousedown", e.scrollbar.onDragStart, n), f.addEventListener("mousemove", e.scrollbar.onDragMove, n), f.addEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        }, disableDraggable: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.touchEvents, i = e.touchEventsDesktop, s = e.params, r = t.$el[0], n = !(!R.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                    o = !(!R.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
                R.touch || !R.pointerEvents && !R.prefixedPointerEvents ? (R.touch && (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)), (s.simulateTouch && !m.ios && !m.android || s.simulateTouch && !R.touch && m.ios) && (r.removeEventListener("mousedown", e.scrollbar.onDragStart, n), f.removeEventListener("mousemove", e.scrollbar.onDragMove, n), f.removeEventListener("mouseup", e.scrollbar.onDragEnd, o))) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
            }
        }, init: function () {
            var e = this;
            if (e.params.scrollbar.el) {
                var t = e.scrollbar, a = e.$el, i = e.params.scrollbar, s = L(i.el);
                e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                var r = s.find("." + e.params.scrollbar.dragClass);
                0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), V.extend(t, {
                    $el: s,
                    el: s[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), i.draggable && t.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, F = {
        setTransform: function (e, t) {
            var a = this.rtl, i = L(e), s = a ? -1 : 1, r = i.attr("data-swiper-parallax") || "0", n = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y"),
                l = i.attr("data-swiper-parallax-scale"), d = i.attr("data-swiper-parallax-opacity");
            if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                var p = d - (d - 1) * (1 - Math.abs(t));
                i[0].style.opacity = p
            }
            if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)"); else {
                var c = l - (l - 1) * (1 - Math.abs(t));
                i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
            }
        }, setTranslate: function () {
            var i = this, e = i.$el, t = i.slides, s = i.progress, r = i.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                i.parallax.setTransform(t, s)
            }), t.each(function (e, t) {
                var a = t.progress;
                1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                    i.parallax.setTransform(t, a)
                })
            })
        }, setTransition: function (s) {
            void 0 === s && (s = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, t) {
                var a = L(t), i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                0 === s && (i = 0), a.transition(i)
            })
        }
    }, q = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, a = e.targetTouches[0].pageY, i = e.targetTouches[1].pageX, s = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
        }, onGestureStart: function (e) {
            var t = this, a = t.params.zoom, i = t.zoom, s = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !R.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, s.scaleStart = q.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, a = this.zoom, i = a.gesture;
            if (!R.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                a.fakeGestureMoved = !0, i.scaleMove = q.getDistanceBetweenTouches(e)
            }
            i.$imageEl && 0 !== i.$imageEl.length && (R.gestures ? this.zoom.scale = e.scale * a.currentScale : a.scale = i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, a = this.zoom, i = a.gesture;
            if (!R.gestures) {
                if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
                a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
            }
            i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, a = t.gesture, i = t.image;
            a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this, a = t.zoom, i = a.gesture, s = a.image, r = a.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = V.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = V.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var n = s.width * a.scale, o = s.height * a.scale;
                if (!(n < i.slideWidth && o < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                        if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, a = e.image, i = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void (a.isMoved = !1);
                a.isTouched = !1, a.isMoved = !1;
                var s = 300, r = 300, n = i.x * s, o = a.currentX + n, l = i.y * r, d = a.currentY + l;
                0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                var p = Math.max(s, r);
                a.currentX = o, a.currentY = d;
                var c = a.width * e.scale, u = a.height * e.scale;
                a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this, b = g.zoom, w = g.params.zoom, y = b.gesture, x = b.image;
            (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
        }, out: function () {
            var e = this, t = e.zoom, a = e.params.zoom, i = t.gesture;
            i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this, t = e.zoom;
            if (!t.enabled) {
                t.enabled = !0;
                var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && {passive: !0, capture: !1};
                R.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }, disable: function () {
            var e = this, t = e.zoom;
            if (t.enabled) {
                e.zoom.enabled = !1;
                var a = !("touchstart" !== e.touchEvents.start || !R.passiveListener || !e.params.passiveListeners) && {passive: !0, capture: !1};
                R.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
            }
        }
    }, W = {
        loadInSlide: function (e, l) {
            void 0 === l && (l = !0);
            var d = this, p = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                    t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function (e, t) {
                    var i = L(t);
                    i.addClass(p.loadingClass);
                    var s = i.attr("data-background"), r = i.attr("data-src"), n = i.attr("data-srcset"), o = i.attr("data-sizes");
                    d.loadImage(i[0], r || s, n, o, !1, function () {
                        if (null != d && d && (!d || d.params) && !d.destroyed) {
                            if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                                var e = c.attr("data-swiper-slide-index");
                                if (c.hasClass(d.params.slideDuplicateClass)) {
                                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                    d.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadInSlide(a.index(), !1)
                                }
                            }
                            d.emit("lazyImageReady", c[0], i[0])
                        }
                    }), d.emit("lazyImageLoad", c[0], i[0])
                })
            }
        }, load: function () {
            var i = this, t = i.$wrapperEl, a = i.params, s = i.slides, e = i.activeIndex, r = i.virtual && a.virtual.enabled, n = a.lazy, o = a.slidesPerView;

            function l(e) {
                if (r) {
                    if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (s[e]) return !0;
                return !1
            }

            function d(e) {
                return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
            }

            if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function (e, t) {
                var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                i.lazy.loadInSlide(a)
            }); else if (1 < o) for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p); else i.lazy.loadInSlide(e);
            if (n.loadPrevNext) if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
            } else {
                var g = t.children("." + a.slideNextClass);
                0 < g.length && i.lazy.loadInSlide(d(g));
                var b = t.children("." + a.slidePrevClass);
                0 < b.length && i.lazy.loadInSlide(d(b))
            }
        }
    }, j = {
        LinearSpline: function (e, t) {
            var a, i, s, r, n, o = function (e, t) {
                for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
                return a
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            var t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var a, i, s = this, r = s.controller.control;

            function n(e) {
                var t = s.rtlTranslate ? -s.translate : s.translate;
                "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]); else r instanceof S && t !== r && n(r)
        }, setTransition: function (t, e) {
            var a, i = this, s = i.controller.control;

            function r(e) {
                e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && V.nextTick(function () {
                    e.updateAutoHeight()
                }), e.$wrapperEl.transitionEnd(function () {
                    s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                }))
            }

            if (Array.isArray(s)) for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]); else s instanceof S && e !== s && r(s)
        }
    }, U = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this, a = t.params.a11y;
            if (13 === e.keyCode) {
                var i = L(e.target);
                t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            var e = this;
            if (!e.params.loop) {
                var t = e.navigation, a = t.$nextEl, i = t.$prevEl;
                i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
            }
        }, updatePagination: function () {
            var i = this, s = i.params.a11y;
            i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
                var a = L(t);
                i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
            })
        }, init: function () {
            var e = this;
            e.$el.append(e.a11y.liveRegion);
            var t, a, i = e.params.a11y;
            e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }, destroy: function () {
            var e, t, a = this;
            a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
        }
    }, K = {
        init: function () {
            var e = this;
            if (e.params.history) {
                if (!Y.history || !Y.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
                var t = e.history;
                t.initialized = !0, t.paths = K.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || Y.addEventListener("popstate", e.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || Y.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = K.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = Y.location.pathname.slice(1).split("/").filter(function (e) {
                return "" !== e
            }), t = e.length;
            return {key: e[t - 2], value: e[t - 1]}
        }, setHistory: function (e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var a = this.slides.eq(t), i = K.slugify(a.attr("data-history"));
                Y.location.pathname.includes(e) || (i = e + "/" + i);
                var s = Y.history.state;
                s && s.value === i || (this.params.history.replaceState ? Y.history.replaceState({value: i}, null, i) : Y.history.pushState({value: i}, null, i))
            }
        }, slugify: function (e) {
            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, a) {
            var i = this;
            if (t) for (var s = 0, r = i.slides.length; s < r; s += 1) {
                var n = i.slides.eq(s);
                if (K.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                    var o = n.index();
                    i.slideTo(o, e, a)
                }
            } else i.slideTo(0, e, a)
        }
    }, _ = {
        onHashCange: function () {
            var e = this, t = f.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                if (void 0 === a) return;
                e.slideTo(a)
            }
        }, setHash: function () {
            var e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && Y.history && Y.history.replaceState) Y.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""); else {
                var t = e.slides.eq(e.activeIndex), a = t.attr("data-hash") || t.attr("data-history");
                f.location.hash = a || ""
            }
        }, init: function () {
            var e = this;
            if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                e.hashNavigation.initialized = !0;
                var t = f.location.hash.replace("#", "");
                if (t) for (var a = 0, i = e.slides.length; a < i; a += 1) {
                    var s = e.slides.eq(a);
                    if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                        var r = s.index();
                        e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                    }
                }
                e.params.hashNavigation.watchState && L(Y).on("hashchange", e.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && L(Y).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, Z = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), a = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = V.nextTick(function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, a)
        }, start: function () {
            var e = this;
            return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
        }, stop: function () {
            var e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
        }, pause: function (e) {
            var t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    }, Q = {
        setTranslate: function () {
            for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                var i = e.slides.eq(a), s = -i[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                var r = 0;
                e.isHorizontal() || (r = s, s = 0);
                var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: n}).transform("translate3d(" + s + "px, " + r + "px, 0px)")
            }
        }, setTransition: function (e) {
            var a = this, t = a.slides, i = a.$wrapperEl;
            if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
                var s = !1;
                t.transitionEnd(function () {
                    if (!s && a && !a.destroyed) {
                        s = !0, a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                    }
                })
            }
        }
    }, J = {
        setTranslate: function () {
            var e, t = this, a = t.$el, i = t.$wrapperEl, s = t.slides, r = t.width, n = t.height, o = t.rtlTranslate, l = t.size, d = t.params.cubeEffect, p = t.isHorizontal(),
                c = t.virtual && t.params.virtual.enabled, u = 0;
            d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: r + "px"})) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
            for (var h = 0; h < s.length; h += 1) {
                var v = s.eq(h), f = h;
                c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                var m = 90 * f, g = Math.floor(m / 360);
                o && (m = -m, g = Math.floor(-m / 360));
                var b = Math.max(Math.min(v[0].progress, 1), -1), w = 0, y = 0, x = 0;
                f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
                var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                    var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                "transform-origin": "50% 50% -" + l / 2 + "px"
            }), d.shadow) if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")"); else {
                var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90), M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2), k = d.shadowScale,
                    z = d.shadowScale / M, P = d.shadowOffset;
                e.transform("scale3d(" + k + ", 1, " + z + ") translate3d(0px, " + (n / 2 + P) + "px, " + -n / 2 / z + "px) rotateX(-90deg)")
            }
            var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
            i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, ee = {
        setTranslate: function () {
            for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                var s = t.eq(i), r = s[0].progress;
                e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                var n = -180 * r, o = 0, l = -s[0].swiperSlideOffset, d = 0;
                if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                    var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                        c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                }
                s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
            }
        }, setTransition: function (e) {
            var a = this, t = a.slides, i = a.activeIndex, s = a.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.eq(i).transitionEnd(function () {
                    if (!r && a && !a.destroyed) {
                        r = !0, a.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                    }
                })
            }
        }
    }, te = {
        setTranslate: function () {
            for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                var v = i.eq(u), f = r[u], m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier, g = o ? p * m : 0, b = o ? 0 : p * m, w = -c * Math.abs(m), y = o ? 0 : n.stretch * m,
                    x = o ? n.stretch * m : 0;
                Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
                var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
                    var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                    0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                }
            }
            (R.pointerEvents || R.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, ae = {
        init: function () {
            var e = this, t = e.params.thumbs, a = e.constructor;
            t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, V.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), V.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : V.isObject(t.swiper) && (e.thumbs.swiper = new a(V.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        }, onThumbClick: function () {
            var e = this, t = e.thumbs.swiper;
            if (t) {
                var a = t.clickedIndex;
                if (null != a) {
                    var i;
                    if (i = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                        var s = e.activeIndex;
                        e.slides.eq(s).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, s = e.activeIndex);
                        var r = e.slides.eq(s).prevAll('[data-swiper-slide-index="' + i + '"]').eq(0).index(), n = e.slides.eq(s).nextAll('[data-swiper-slide-index="' + i + '"]').eq(0).index();
                        i = void 0 === r ? n : void 0 === n ? r : n - s < s - r ? n : r
                    }
                    e.slideTo(i)
                }
            }
        }, update: function (e) {
            var t = this, a = t.thumbs.swiper;
            if (a) {
                var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                if (t.realIndex !== a.realIndex) {
                    var s, r = a.activeIndex;
                    if (a.params.loop) {
                        a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
                        var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                            o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                        s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                    } else s = t.realIndex;
                    a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
                }
                var l = 1, d = t.params.thumbs.slideThumbActiveClass;
                if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d); else for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
            }
        }
    }, ie = [C, M, k, z, $, O, H, {
        name: "mousewheel",
        params: {mousewheel: {enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container"}},
        create: function () {
            var e = this;
            V.extend(e, {
                mousewheel: {
                    enabled: !1,
                    enable: B.enable.bind(e),
                    disable: B.disable.bind(e),
                    handle: B.handle.bind(e),
                    handleMouseEnter: B.handleMouseEnter.bind(e),
                    handleMouseLeave: B.handleMouseLeave.bind(e),
                    lastScrollTime: V.now()
                }
            })
        },
        on: {
            init: function () {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {navigation: {nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock"}},
        create: function () {
            V.extend(this, {navigation: {init: G.init.bind(this), update: G.update.bind(this), destroy: G.destroy.bind(this)}})
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t = this.navigation, a = t.$nextEl, i = t.$prevEl;
                !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            var e = this;
            V.extend(e, {pagination: {init: N.init.bind(e), render: N.render.bind(e), update: N.update.bind(e), destroy: N.destroy.bind(e), dynamicBulletIndex: 0}})
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                var t = this;
                t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
            }
        }
    }, {
        name: "scrollbar",
        params: {scrollbar: {el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag"}},
        create: function () {
            var e = this;
            V.extend(e, {
                scrollbar: {
                    init: X.init.bind(e),
                    destroy: X.destroy.bind(e),
                    updateSize: X.updateSize.bind(e),
                    setTranslate: X.setTranslate.bind(e),
                    setTransition: X.setTransition.bind(e),
                    enableDraggable: X.enableDraggable.bind(e),
                    disableDraggable: X.disableDraggable.bind(e),
                    setDragPosition: X.setDragPosition.bind(e),
                    onDragStart: X.onDragStart.bind(e),
                    onDragMove: X.onDragMove.bind(e),
                    onDragEnd: X.onDragEnd.bind(e),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            V.extend(this, {parallax: {setTransform: F.setTransform.bind(this), setTranslate: F.setTranslate.bind(this), setTransition: F.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom", params: {zoom: {enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed"}}, create: function () {
            var t = this, a = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {$slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3},
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                a[e] = q[e].bind(t)
            }), V.extend(t, {zoom: a})
        }, on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            V.extend(this, {lazy: {initialImageLoaded: !1, load: W.load.bind(this), loadInSlide: W.loadInSlide.bind(this)}})
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                var e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            var e = this;
            V.extend(e, {
                controller: {
                    control: e.params.controller.control,
                    getInterpolateFunction: j.getInterpolateFunction.bind(e),
                    setTranslate: j.setTranslate.bind(e),
                    setTransition: j.setTransition.bind(e)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var t = this;
            V.extend(t, {a11y: {liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(U).forEach(function (e) {
                t.a11y[e] = U[e].bind(t)
            })
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            var e = this;
            V.extend(e, {
                history: {
                    init: K.init.bind(e),
                    setHistory: K.setHistory.bind(e),
                    setHistoryPopState: K.setHistoryPopState.bind(e),
                    scrollToSlide: K.scrollToSlide.bind(e),
                    destroy: K.destroy.bind(e)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation", params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}}, create: function () {
            var e = this;
            V.extend(e, {hashNavigation: {initialized: !1, init: _.init.bind(e), destroy: _.destroy.bind(e), setHash: _.setHash.bind(e), onHashCange: _.onHashCange.bind(e)}})
        }, on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay", params: {autoplay: {enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1}}, create: function () {
            var t = this;
            V.extend(t, {
                autoplay: {
                    running: !1, paused: !1, run: Z.run.bind(t), start: Z.start.bind(t), stop: Z.stop.bind(t), pause: Z.pause.bind(t), onTransitionEnd: function (e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        }, on: {
            init: function () {
                this.params.autoplay.enabled && this.autoplay.start()
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            V.extend(this, {fadeEffect: {setTranslate: Q.setTranslate.bind(this), setTransition: Q.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                var e = this;
                if ("fade" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "fade");
                    var t = {slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0};
                    V.extend(e.params, t), V.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube", params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}}, create: function () {
            V.extend(this, {cubeEffect: {setTranslate: J.setTranslate.bind(this), setTransition: J.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                var e = this;
                if ("cube" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0};
                    V.extend(e.params, t), V.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            V.extend(this, {flipEffect: {setTranslate: ee.setTranslate.bind(this), setTransition: ee.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                var e = this;
                if ("flip" === e.params.effect) {
                    e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                    var t = {slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0};
                    V.extend(e.params, t), V.extend(e.originalParams, t)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow", params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}}, create: function () {
            V.extend(this, {coverflowEffect: {setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                var e = this;
                "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs", params: {thumbs: {swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs"}}, create: function () {
            V.extend(this, {thumbs: {swiper: null, init: ae.init.bind(this), update: ae.update.bind(this), onThumbClick: ae.onThumbClick.bind(this)}})
        }, on: {
            beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, update: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, resize: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});
//# sourceMappingURL=swiper.min.js.map
// Selectricjs
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = function (t, s) {
        return void 0 === s && (s = "undefined" != typeof window ? require("jquery") : require("jquery")(t)), e(s), s
    } : e(jQuery)
}(function (e) {
    "use strict";
    var t = e(document), s = e(window), i = "selectric", l = ".sl", n = ["a", "e", "i", "o", "u", "n", "c", "y"],
        a = [/[\xE0-\xE5]/g, /[\xE8-\xEB]/g, /[\xEC-\xEF]/g, /[\xF2-\xF6]/g, /[\xF9-\xFC]/g, /[\xF1]/g, /[\xE7]/g, /[\xFD-\xFF]/g], o = function (t, s) {
            var i = this;
            i.element = t, i.$element = e(t), i.state = {
                multiple: !!i.$element.attr("multiple"),
                enabled: !1,
                opened: !1,
                currValue: -1,
                selectedIdx: -1,
                highlightedIdx: -1
            }, i.eventTriggers = {open: i.open, close: i.close, destroy: i.destroy, refresh: i.refresh, init: i.init}, i.init(s)
        };
    o.prototype = {
        utils: {
            isMobile: function () {
                return /android|ip(hone|od|ad)/i.test(navigator.userAgent)
            }, escapeRegExp: function (e) {
                return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            }, replaceDiacritics: function (e) {
                for (var t = a.length; t--;) e = e.toLowerCase().replace(a[t], n[t]);
                return e
            }, format: function (e) {
                var t = arguments;
                return ("" + e).replace(/\{(?:(\d+)|(\w+))\}/g, function (e, s, i) {
                    return i && t[1] ? t[1][i] : t[s]
                })
            }, nextEnabledItem: function (e, t) {
                for (; e[t = (t + 1) % e.length].disabled;) ;
                return t
            }, previousEnabledItem: function (e, t) {
                for (; e[t = (t > 0 ? t : e.length) - 1].disabled;) ;
                return t
            }, toDash: function (e) {
                return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
            }, triggerCallback: function (t, s) {
                var l = s.element, n = s.options["on" + t], a = [l].concat([].slice.call(arguments).slice(1));
                e.isFunction(n) && n.apply(l, a), e(l).trigger(i + "-" + this.toDash(t), a)
            }, arrayToClassname: function (t) {
                var s = e.grep(t, function (e) {
                    return !!e
                });
                return e.trim(s.join(" "))
            }
        }, init: function (t) {
            var s = this;
            if (s.options = e.extend(!0, {}, e.fn[i].defaults, s.options, t), s.utils.triggerCallback("BeforeInit", s), s.destroy(!0), s.options.disableOnMobile && s.utils.isMobile()) s.disableOnMobile = !0; else {
                s.classes = s.getClassNames();
                var l = e("<input/>", {class: s.classes.input, readonly: s.utils.isMobile()}), n = e("<div/>", {class: s.classes.items, tabindex: -1}), a = e("<div/>", {class: s.classes.scroll}),
                    o = e("<div/>", {class: s.classes.prefix, html: s.options.arrowButtonMarkup}), r = e("<span/>", {class: "label"}),
                    u = s.$element.wrap("<div/>").parent().append(o.prepend(r), n, l), p = e("<div/>", {class: s.classes.hideselect});
                s.elements = {
                    input: l,
                    items: n,
                    itemsScroll: a,
                    wrapper: o,
                    label: r,
                    outerWrapper: u
                }, s.options.nativeOnMobile && s.utils.isMobile() && (s.elements.input = void 0, p.addClass(s.classes.prefix + "-is-native"), s.$element.on("change", function () {
                    s.refresh()
                })), s.$element.on(s.eventTriggers).wrap(p), s.originalTabindex = s.$element.prop("tabindex"), s.$element.prop("tabindex", -1), s.populate(), s.activate(), s.utils.triggerCallback("Init", s)
            }
        }, activate: function () {
            var e = this, t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow), s = e.$element.width();
            t.removeClass(e.classes.tempshow), e.utils.triggerCallback("BeforeActivate", e), e.elements.outerWrapper.prop("class", e.utils.arrayToClassname([e.classes.wrapper, e.$element.prop("class").replace(/\S+/g, e.classes.prefix + "-$&"), e.options.responsive ? e.classes.responsive : ""])), e.options.inheritOriginalWidth && s > 0 && e.elements.outerWrapper.width(s), e.unbindEvents(), e.$element.prop("disabled") ? (e.elements.outerWrapper.addClass(e.classes.disabled), e.elements.input && e.elements.input.prop("disabled", !0)) : (e.state.enabled = !0, e.elements.outerWrapper.removeClass(e.classes.disabled), e.$li = e.elements.items.removeAttr("style").find("li"), e.bindEvents()), e.utils.triggerCallback("Activate", e)
        }, getClassNames: function () {
            var t = this, s = t.options.customClass, i = {};
            return e.each("Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Below Scroll Group GroupLabel".split(" "), function (e, l) {
                var n = s.prefix + l;
                i[l.toLowerCase()] = s.camelCase ? n : t.utils.toDash(n)
            }), i.prefix = s.prefix, i
        }, setLabel: function () {
            var t = this, s = t.options.labelBuilder;
            if (t.state.multiple) {
                var i = e.isArray(t.state.currValue) ? t.state.currValue : [t.state.currValue];
                i = 0 === i.length ? [0] : i;
                var l = e.map(i, function (s) {
                    return e.grep(t.lookupItems, function (e) {
                        return e.index === s
                    })[0]
                });
                l = e.grep(l, function (t) {
                    return l.length > 1 || 0 === l.length ? "" !== e.trim(t.value) : t
                }), l = e.map(l, function (i) {
                    return e.isFunction(s) ? s(i) : t.utils.format(s, i)
                }), t.options.multiple.maxLabelEntries && (l.length >= t.options.multiple.maxLabelEntries + 1 ? (l = l.slice(0, t.options.multiple.maxLabelEntries)).push(e.isFunction(s) ? s({text: "..."}) : t.utils.format(s, {text: "..."})) : l.slice(l.length - 1)), t.elements.label.html(l.join(t.options.multiple.separator))
            } else {
                var n = t.lookupItems[t.state.currValue];
                t.elements.label.html(e.isFunction(s) ? s(n) : t.utils.format(s, n))
            }
        }, populate: function () {
            var t = this, s = t.$element.children(), i = t.$element.find("option"), l = i.filter(":selected"), n = i.index(l), a = 0, o = t.state.multiple ? [] : 0;
            l.length > 1 && t.state.multiple && (n = [], l.each(function () {
                n.push(e(this).index())
            })), t.state.currValue = ~n ? n : o, t.state.selectedIdx = t.state.currValue, t.state.highlightedIdx = t.state.currValue, t.items = [], t.lookupItems = [], s.length && (s.each(function (s) {
                var i = e(this);
                if (i.is("optgroup")) {
                    var l = {element: i, label: i.prop("label"), groupDisabled: i.prop("disabled"), items: []};
                    i.children().each(function (s) {
                        var i = e(this);
                        l.items[s] = t.getItemData(a, i, l.groupDisabled || i.prop("disabled")), t.lookupItems[a] = l.items[s], a++
                    }), t.items[s] = l
                } else t.items[s] = t.getItemData(a, i, i.prop("disabled")), t.lookupItems[a] = t.items[s], a++
            }), t.setLabel(), t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))))
        }, getItemData: function (t, s, i) {
            return {
                index: t,
                element: s,
                value: s.val(),
                className: s.prop("class"),
                text: s.html(),
                slug: e.trim(this.utils.replaceDiacritics(s.html())),
                alt: s.attr("data-alt"),
                selected: s.prop("selected"),
                disabled: i
            }
        }, getItemsMarkup: function (t) {
            var s = this, i = "<ul>";
            return e.isFunction(s.options.listBuilder) && s.options.listBuilder && (t = s.options.listBuilder(t)), e.each(t, function (t, l) {
                void 0 !== l.label ? (i += s.utils.format('<ul class="{1}"><li class="{2}">{3}</li>', s.utils.arrayToClassname([s.classes.group, l.groupDisabled ? "disabled" : "", l.element.prop("class")]), s.classes.grouplabel, l.element.prop("label")), e.each(l.items, function (e, t) {
                    i += s.getItemMarkup(t.index, t)
                }), i += "</ul>") : i += s.getItemMarkup(l.index, l)
            }), i + "</ul>"
        }, getItemMarkup: function (t, s) {
            var i = this, l = i.options.optionsItemBuilder, n = {value: s.value, text: s.text, slug: s.slug, index: s.index};
            return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>', t, i.utils.arrayToClassname([s.className, t === i.items.length - 1 ? "last" : "", s.disabled ? "disabled" : "", s.selected ? "selected" : ""]), e.isFunction(l) ? i.utils.format(l(s, this.$element, t), s) : i.utils.format(l, n))
        }, unbindEvents: function () {
            this.elements.wrapper.add(this.$element).add(this.elements.outerWrapper).add(this.elements.input).off(l)
        }, bindEvents: function () {
            var t = this;
            t.elements.outerWrapper.on("mouseenter.sl mouseleave" + l, function (s) {
                e(this).toggleClass(t.classes.hover, "mouseenter" === s.type), t.options.openOnHover && (clearTimeout(t.closeTimer), "mouseleave" === s.type ? t.closeTimer = setTimeout(e.proxy(t.close, t), t.options.hoverIntentTimeout) : t.open())
            }), t.elements.wrapper.on("click" + l, function (e) {
                t.state.opened ? t.close() : t.open(e)
            }), t.options.nativeOnMobile && t.utils.isMobile() || (t.$element.on("focus" + l, function () {
                t.elements.input.focus()
            }), t.elements.input.prop({tabindex: t.originalTabindex, disabled: !1}).on("keydown" + l, e.proxy(t.handleKeys, t)).on("focusin" + l, function (e) {
                t.elements.outerWrapper.addClass(t.classes.focus), t.elements.input.one("blur", function () {
                    t.elements.input.blur()
                }), t.options.openOnFocus && !t.state.opened && t.open(e)
            }).on("focusout" + l, function () {
                t.elements.outerWrapper.removeClass(t.classes.focus)
            }).on("input propertychange", function () {
                var s = t.elements.input.val(), i = new RegExp("^" + t.utils.escapeRegExp(s), "i");
                clearTimeout(t.resetStr), t.resetStr = setTimeout(function () {
                    t.elements.input.val("")
                }, t.options.keySearchTimeout), s.length && e.each(t.items, function (e, s) {
                    if (!s.disabled) {
                        if (i.test(s.text) || i.test(s.slug)) return t.highlight(e), !1;
                        if (s.alt) for (var l = s.alt.split("|"), n = 0; n < l.length && l[n]; n++) if (i.test(l[n].trim())) return t.highlight(e), !1
                    }
                })
            })), t.$li.on({
                mousedown: function (e) {
                    e.preventDefault(), e.stopPropagation()
                }, click: function () {
                    return t.select(e(this).data("index")), !1
                }
            })
        }, handleKeys: function (t) {
            var s = this, i = t.which, l = s.options.keys, n = e.inArray(i, l.previous) > -1, a = e.inArray(i, l.next) > -1, o = e.inArray(i, l.select) > -1, r = e.inArray(i, l.open) > -1,
                u = s.state.highlightedIdx, p = n && 0 === u || a && u + 1 === s.items.length, c = 0;
            if (13 !== i && 32 !== i || t.preventDefault(), n || a) {
                if (!s.options.allowWrap && p) return;
                n && (c = s.utils.previousEnabledItem(s.lookupItems, u)), a && (c = s.utils.nextEnabledItem(s.lookupItems, u)), s.highlight(c)
            }
            if (o && s.state.opened) return s.select(u), void (s.state.multiple && s.options.multiple.keepMenuOpen || s.close());
            r && !s.state.opened && s.open()
        }, refresh: function () {
            this.populate(), this.activate(), this.utils.triggerCallback("Refresh", this)
        }, setOptionsDimensions: function () {
            var e = this, t = e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow), s = e.options.maxHeight, i = e.elements.items.outerWidth(),
                l = e.elements.wrapper.outerWidth() - (i - e.elements.items.width());
            !e.options.expandToItemText || l > i ? e.finalWidth = l : (e.elements.items.css("overflow", "scroll"), e.elements.outerWrapper.width(9e4), e.finalWidth = e.elements.items.width(), e.elements.items.css("overflow", ""), e.elements.outerWrapper.width("")), e.elements.items.width(e.finalWidth).height() > s && e.elements.items.height(s), t.removeClass(e.classes.tempshow)
        }, isInViewport: function () {
            var e = this;
            if (!0 === e.options.forceRenderAbove) e.elements.outerWrapper.addClass(e.classes.above); else if (!0 === e.options.forceRenderBelow) e.elements.outerWrapper.addClass(e.classes.below); else {
                var t = s.scrollTop(), i = s.height(), l = e.elements.outerWrapper.offset().top, n = l + e.elements.outerWrapper.outerHeight() + e.itemsHeight <= t + i, a = l - e.itemsHeight > t,
                    o = !n && a, r = !o;
                e.elements.outerWrapper.toggleClass(e.classes.above, o), e.elements.outerWrapper.toggleClass(e.classes.below, r)
            }
        }, detectItemVisibility: function (t) {
            var s = this, i = s.$li.filter("[data-index]");
            s.state.multiple && (t = e.isArray(t) && 0 === t.length ? 0 : t, t = e.isArray(t) ? Math.min.apply(Math, t) : t);
            var l = i.eq(t).outerHeight(), n = i[t].offsetTop, a = s.elements.itemsScroll.scrollTop(), o = n + 2 * l;
            s.elements.itemsScroll.scrollTop(o > a + s.itemsHeight ? o - s.itemsHeight : n - l < a ? n - l : a)
        }, open: function (s) {
            var n = this;
            if (n.options.nativeOnMobile && n.utils.isMobile()) return !1;
            n.utils.triggerCallback("BeforeOpen", n), s && (s.preventDefault(), n.options.stopPropagation && s.stopPropagation()), n.state.enabled && (n.setOptionsDimensions(), e("." + n.classes.hideselect, "." + n.classes.open).children()[i]("close"), n.state.opened = !0, n.itemsHeight = n.elements.items.outerHeight(), n.itemsInnerHeight = n.elements.items.height(), n.elements.outerWrapper.addClass(n.classes.open), n.elements.input.val(""), s && "focusin" !== s.type && n.elements.input.focus(), setTimeout(function () {
                t.on("click" + l, e.proxy(n.close, n)).on("scroll" + l, e.proxy(n.isInViewport, n))
            }, 1), n.isInViewport(), n.options.preventWindowScroll && t.on("mousewheel.sl DOMMouseScroll" + l, "." + n.classes.scroll, function (t) {
                var s = t.originalEvent, i = e(this).scrollTop(), l = 0;
                "detail" in s && (l = -1 * s.detail), "wheelDelta" in s && (l = s.wheelDelta), "wheelDeltaY" in s && (l = s.wheelDeltaY), "deltaY" in s && (l = -1 * s.deltaY), (i === this.scrollHeight - n.itemsInnerHeight && l < 0 || 0 === i && l > 0) && t.preventDefault()
            }), n.detectItemVisibility(n.state.selectedIdx), n.highlight(n.state.multiple ? -1 : n.state.selectedIdx), n.utils.triggerCallback("Open", n))
        }, close: function () {
            var e = this;
            e.utils.triggerCallback("BeforeClose", e), t.off(l), e.elements.outerWrapper.removeClass(e.classes.open), e.state.opened = !1, e.utils.triggerCallback("Close", e)
        }, change: function () {
            var t = this;
            t.utils.triggerCallback("BeforeChange", t), t.state.multiple ? (e.each(t.lookupItems, function (e) {
                t.lookupItems[e].selected = !1, t.$element.find("option").prop("selected", !1)
            }), e.each(t.state.selectedIdx, function (e, s) {
                t.lookupItems[s].selected = !0, t.$element.find("option").eq(s).prop("selected", !0)
            }), t.state.currValue = t.state.selectedIdx, t.setLabel(), t.utils.triggerCallback("Change", t)) : t.state.currValue !== t.state.selectedIdx && (t.$element.prop("selectedIndex", t.state.currValue = t.state.selectedIdx).data("value", t.lookupItems[t.state.selectedIdx].text), t.setLabel(), t.utils.triggerCallback("Change", t))
        }, highlight: function (e) {
            var t = this, s = t.$li.filter("[data-index]").removeClass("highlighted");
            t.utils.triggerCallback("BeforeHighlight", t), void 0 === e || -1 === e || t.lookupItems[e].disabled || (s.eq(t.state.highlightedIdx = e).addClass("highlighted"), t.detectItemVisibility(e), t.utils.triggerCallback("Highlight", t))
        }, select: function (t) {
            var s = this, i = s.$li.filter("[data-index]");
            if (s.utils.triggerCallback("BeforeSelect", s, t), void 0 !== t && -1 !== t && !s.lookupItems[t].disabled) {
                if (s.state.multiple) {
                    s.state.selectedIdx = e.isArray(s.state.selectedIdx) ? s.state.selectedIdx : [s.state.selectedIdx];
                    var l = e.inArray(t, s.state.selectedIdx);
                    -1 !== l ? s.state.selectedIdx.splice(l, 1) : s.state.selectedIdx.push(t), i.removeClass("selected").filter(function (t) {
                        return -1 !== e.inArray(t, s.state.selectedIdx)
                    }).addClass("selected")
                } else i.removeClass("selected").eq(s.state.selectedIdx = t).addClass("selected");
                s.state.multiple && s.options.multiple.keepMenuOpen || s.close(), s.change(), s.utils.triggerCallback("Select", s, t)
            }
        }, destroy: function (e) {
            var t = this;
            t.state && t.state.enabled && (t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(), e || t.$element.removeData(i).removeData("value"), t.$element.prop("tabindex", t.originalTabindex).off(l).off(t.eventTriggers).unwrap().unwrap(), t.state.enabled = !1)
        }
    }, e.fn[i] = function (t) {
        return this.each(function () {
            var s = e.data(this, i);
            s && !s.disableOnMobile ? "string" == typeof t && s[t] ? s[t]() : s.init(t) : e.data(this, i, new o(this, t))
        })
    }, e.fn[i].defaults = {
        onChange: function (t) {
            e(t).change()
        },
        maxHeight: 300,
        keySearchTimeout: 500,
        arrowButtonMarkup: '<b class="button">&#x25be;</b>',
        disableOnMobile: !1,
        nativeOnMobile: !0,
        openOnFocus: !0,
        openOnHover: !1,
        hoverIntentTimeout: 500,
        expandToItemText: !1,
        responsive: !1,
        preventWindowScroll: !0,
        inheritOriginalWidth: !1,
        allowWrap: !0,
        forceRenderAbove: !1,
        forceRenderBelow: !1,
        stopPropagation: !0,
        optionsItemBuilder: "{text}",
        labelBuilder: "{text}",
        listBuilder: !1,
        keys: {previous: [37, 38], next: [39, 40], select: [9, 13, 27], open: [13, 32, 37, 38, 39, 40], close: [9, 27]},
        customClass: {prefix: i, camelCase: !1},
        multiple: {separator: ", ", keepMenuOpen: !0, maxLabelEntries: !1}
    }
});
/* jquery.nicescroll v3.7.6 InuYaksa - MIT - https://nicescroll.areaaperta.com */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var o = !1, t = !1, r = 0, i = 2e3, s = 0, n = e, l = document, a = window, c = n(a), d = [], u = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || !1,
        h = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || !1;
    if (u) a.cancelAnimationFrame || (h = function (e) {
    }); else {
        var p = 0;
        u = function (e, o) {
            var t = (new Date).getTime(), r = Math.max(0, 16 - (t - p)), i = a.setTimeout(function () {
                e(t + r)
            }, r);
            return p = t + r, i
        }, h = function (e) {
            a.clearTimeout(e)
        }
    }
    var m = a.MutationObserver || a.WebKitMutationObserver || !1, f = Date.now || function () {
        return (new Date).getTime()
    }, g = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 40,
        mousescrollstep: 27,
        touchbehavior: !1,
        emulatetouch: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {top: 0, right: 0, left: 0, bottom: 0},
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function () {
            var e = l.currentScript || function () {
                var e = l.getElementsByTagName("script");
                return !!e.length && e[e.length - 1]
            }(), o = e ? e.src.split("?")[0] : "";
            return o.split("/").length > 0 ? o.split("/").slice(0, -1).join("/") + "/" : ""
        }(),
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1,
        enableobserver: !0,
        scrollbarid: !1
    }, v = !1, w = function () {
        if (v) return v;
        var e = l.createElement("DIV"), o = e.style, t = navigator.userAgent, r = navigator.platform, i = {};
        return i.haspointerlock = "pointerLockElement" in l || "webkitPointerLockElement" in l || "mozPointerLockElement" in l, i.isopera = "opera" in a, i.isopera12 = i.isopera && "getUserMedia" in navigator, i.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(a.operamini), i.isie = "all" in l && "attachEvent" in e && !i.isopera, i.isieold = i.isie && !("msInterpolationMode" in o), i.isie7 = i.isie && !i.isieold && (!("documentMode" in l) || 7 === l.documentMode), i.isie8 = i.isie && "documentMode" in l && 8 === l.documentMode, i.isie9 = i.isie && "performance" in a && 9 === l.documentMode, i.isie10 = i.isie && "performance" in a && 10 === l.documentMode, i.isie11 = "msRequestFullscreen" in e && l.documentMode >= 11, i.ismsedge = "msCredentials" in a, i.ismozilla = "MozAppearance" in o, i.iswebkit = !i.ismsedge && "WebkitAppearance" in o, i.ischrome = i.iswebkit && "chrome" in a, i.ischrome38 = i.ischrome && "touchAction" in o, i.ischrome22 = !i.ischrome38 && i.ischrome && i.haspointerlock, i.ischrome26 = !i.ischrome38 && i.ischrome && "transition" in o, i.cantouch = "ontouchstart" in l.documentElement || "ontouchstart" in a, i.hasw3ctouch = (a.PointerEvent || !1) && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0), i.hasmstouch = !i.hasw3ctouch && (a.MSPointerEvent || !1), i.ismac = /^mac$/i.test(r), i.isios = i.cantouch && /iphone|ipad|ipod/i.test(r), i.isios4 = i.isios && !("seal" in Object), i.isios7 = i.isios && "webkitHidden" in l, i.isios8 = i.isios && "hidden" in l, i.isios10 = i.isios && a.Proxy, i.isandroid = /android/i.test(t), i.haseventlistener = "addEventListener" in e, i.trstyle = !1, i.hastransform = !1, i.hastranslate3d = !1, i.transitionstyle = !1, i.hastransition = !1, i.transitionend = !1, i.trstyle = "transform", i.hastransform = "transform" in o || function () {
            for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], t = 0, r = e.length; t < r; t++) if (void 0 !== o[e[t]]) {
                i.trstyle = e[t];
                break
            }
            i.hastransform = !!i.trstyle
        }(), i.hastransform && (o[i.trstyle] = "translate3d(1px,2px,3px)", i.hastranslate3d = /translate3d/.test(o[i.trstyle])), i.transitionstyle = "transition", i.prefixstyle = "", i.transitionend = "transitionend", i.hastransition = "transition" in o || function () {
            i.transitionend = !1;
            for (var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"], t = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"], r = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"], s = 0, n = e.length; s < n; s++) if (e[s] in o) {
                i.transitionstyle = e[s], i.prefixstyle = t[s], i.transitionend = r[s];
                break
            }
            i.ischrome26 && (i.prefixstyle = t[1]), i.hastransition = i.transitionstyle
        }(), i.cursorgrabvalue = function () {
            var e = ["grab", "-webkit-grab", "-moz-grab"];
            (i.ischrome && !i.ischrome38 || i.isie) && (e = []);
            for (var t = 0, r = e.length; t < r; t++) {
                var s = e[t];
                if (o.cursor = s, o.cursor == s) return s
            }
            return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"
        }(), i.hasmousecapture = "setCapture" in e, i.hasMutationObserver = !1 !== m, e = null, v = i, i
    }, b = function (e, p) {
        function v() {
            var e = T.doc.css(P.trstyle);
            return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
        }

        function b() {
            var e = T.win;
            if ("zIndex" in e) return e.zIndex();
            for (; e.length > 0;) {
                if (9 == e[0].nodeType) return !1;
                var o = e.css("zIndex");
                if (!isNaN(o) && 0 !== o) return parseInt(o);
                e = e.parent()
            }
            return !1
        }

        function x(e, o, t) {
            var r = e.css(o), i = parseFloat(r);
            if (isNaN(i)) {
                var s = 3 == (i = I[r] || 0) ? t ? T.win.outerHeight() - T.win.innerHeight() : T.win.outerWidth() - T.win.innerWidth() : 1;
                return T.isie8 && i && (i += 1), s ? i : 0
            }
            return i
        }

        function S(e, o, t, r) {
            T._bind(e, o, function (r) {
                var i = {
                    original: r = r || a.event,
                    target: r.target || r.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function () {
                        return r.preventDefault ? r.preventDefault() : r.returnValue = !1, !1
                    },
                    stopImmediatePropagation: function () {
                        r.stopImmediatePropagation ? r.stopImmediatePropagation() : r.cancelBubble = !0
                    }
                };
                return "mousewheel" == o ? (r.wheelDeltaX && (i.deltaX = -.025 * r.wheelDeltaX), r.wheelDeltaY && (i.deltaY = -.025 * r.wheelDeltaY), !i.deltaY && !i.deltaX && (i.deltaY = -.025 * r.wheelDelta)) : i.deltaY = r.detail, t.call(e, i)
            }, r)
        }

        function z(e, o, t, r) {
            T.scrollrunning || (T.newscrolly = T.getScrollTop(), T.newscrollx = T.getScrollLeft(), D = f());
            var i = f() - D;
            if (D = f(), i > 350 ? A = 1 : A += (2 - A) / 10, e = e * A | 0, o = o * A | 0, e) {
                if (r) if (e < 0) {
                    if (T.getScrollLeft() >= T.page.maxw) return !0
                } else if (T.getScrollLeft() <= 0) return !0;
                var s = e > 0 ? 1 : -1;
                X !== s && (T.scrollmom && T.scrollmom.stop(), T.newscrollx = T.getScrollLeft(), X = s), T.lastdeltax -= e
            }
            if (o) {
                if (function () {
                    var e = T.getScrollTop();
                    if (o < 0) {
                        if (e >= T.page.maxh) return !0
                    } else if (e <= 0) return !0
                }()) {
                    if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive) return !0;
                    var n = T.view.h >> 1;
                    T.newscrolly < -n ? (T.newscrolly = -n, o = -1) : T.newscrolly > T.page.maxh + n ? (T.newscrolly = T.page.maxh + n, o = 1) : o = 0
                }
                var l = o > 0 ? 1 : -1;
                B !== l && (T.scrollmom && T.scrollmom.stop(), T.newscrolly = T.getScrollTop(), B = l), T.lastdeltay -= o
            }
            (o || e) && T.synched("relativexy", function () {
                var e = T.lastdeltay + T.newscrolly;
                T.lastdeltay = 0;
                var o = T.lastdeltax + T.newscrollx;
                T.lastdeltax = 0, T.rail.drag || T.doScrollPos(o, e)
            })
        }

        function k(e, o, t) {
            var r, i;
            return !(t || !q) || (0 === e.deltaMode ? (r = -e.deltaX * (M.mousescrollstep / 54) | 0, i = -e.deltaY * (M.mousescrollstep / 54) | 0) : 1 === e.deltaMode && (r = -e.deltaX * M.mousescrollstep * 50 / 80 | 0, i = -e.deltaY * M.mousescrollstep * 50 / 80 | 0), o && M.oneaxismousemode && 0 === r && i && (r = i, i = 0, t && (r < 0 ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0) && (i = r, r = 0)), T.isrtlmode && (r = -r), z(r, i, t, !0) ? void (t && (q = !0)) : (q = !1, e.stopImmediatePropagation(), e.preventDefault()))
        }

        var T = this;
        this.version = "3.7.6", this.name = "nicescroll", this.me = p;
        var E = n("body"), M = this.opt = {doc: E, win: !1};
        if (n.extend(M, g), M.snapbackspeed = 80, e) for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
        if (M.disablemutationobserver && (m = !1), this.doc = M.doc, this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : "", this.ispage = /^BODY|HTML/.test(M.win ? M.win[0].nodeName : this.doc[0].nodeName), this.haswrapper = !1 !== M.win, this.win = M.win || (this.ispage ? c : this.doc), this.docscroll = this.ispage && !this.haswrapper ? c : this.win, this.body = E, this.viewport = !1, this.isfixed = !1, this.iframe = !1, this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName, this.istextarea = "TEXTAREA" == this.win[0].nodeName, this.forcescreen = !1, this.canshowonmouseevent = "scroll" != M.autohidemode, this.onmousedown = !1, this.onmouseup = !1, this.onmousemove = !1, this.onmousewheel = !1, this.onkeypress = !1, this.ongesturezoom = !1, this.onclick = !1, this.onscrollstart = !1, this.onscrollend = !1, this.onscrollcancel = !1, this.onzoomin = !1, this.onzoomout = !1, this.view = !1, this.page = !1, this.scroll = {
            x: 0,
            y: 0
        }, this.scrollratio = {x: 0, y: 0}, this.cursorheight = 20, this.scrollvaluemax = 0, "auto" == M.rtlmode) {
            var C = this.win[0] == a ? this.body : this.win, N = C.css("writing-mode") || C.css("-webkit-writing-mode") || C.css("-ms-writing-mode") || C.css("-moz-writing-mode");
            "horizontal-tb" == N || "lr-tb" == N || "" === N ? (this.isrtlmode = "rtl" == C.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N, this.isvertical = "vertical-rl" == N || "tb" == N || "tb-rl" == N)
        } else this.isrtlmode = !0 === M.rtlmode, this.isvertical = !1;
        if (this.scrollrunning = !1, this.scrollmom = !1, this.observer = !1, this.observerremover = !1, this.observerbody = !1, !1 !== M.scrollbarid) this.id = M.scrollbarid; else do {
            this.id = "ascrail" + i++
        } while (l.getElementById(this.id));
        this.rail = !1, this.cursor = !1, this.cursorfreezed = !1, this.selectiondrag = !1, this.zoom = !1, this.zoomactive = !1, this.hasfocus = !1, this.hasmousefocus = !1, this.railslocked = !1, this.locked = !1, this.hidden = !1, this.cursoractive = !0, this.wheelprevented = !1, this.overflowx = M.overflowx, this.overflowy = M.overflowy, this.nativescrollingarea = !1, this.checkarea = 0, this.events = [], this.saved = {}, this.delaylist = {}, this.synclist = {}, this.lastdeltax = 0, this.lastdeltay = 0, this.detected = w();
        var P = n.extend({}, this.detected);
        this.canhwscroll = P.hastransform && M.hwacceleration, this.ishwscroll = this.canhwscroll && T.haswrapper, this.isrtlmode ? this.isvertical ? this.hasreversehr = !(P.iswebkit || P.isie || P.isie11) : this.hasreversehr = !(P.iswebkit || P.isie && !P.isie10 && !P.isie11) : this.hasreversehr = !1, this.istouchcapable = !1, P.cantouch || !P.hasw3ctouch && !P.hasmstouch ? !P.cantouch || P.isios || P.isandroid || !P.iswebkit && !P.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0, M.enablemouselockapi || (P.hasmousecapture = !1, P.haspointerlock = !1), this.debounced = function (e, o, t) {
            T && (T.delaylist[e] || !1 || (T.delaylist[e] = {
                h: u(function () {
                    T.delaylist[e].fn.call(T), T.delaylist[e] = !1
                }, t)
            }, o.call(T)), T.delaylist[e].fn = o)
        }, this.synched = function (e, o) {
            T.synclist[e] ? T.synclist[e] = o : (T.synclist[e] = o, u(function () {
                T && (T.synclist[e] && T.synclist[e].call(T), T.synclist[e] = null)
            }))
        }, this.unsynched = function (e) {
            T.synclist[e] && (T.synclist[e] = !1)
        }, this.css = function (e, o) {
            for (var t in o) T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t])
        }, this.scrollTop = function (e) {
            return void 0 === e ? T.getScrollTop() : T.setScrollTop(e)
        }, this.scrollLeft = function (e) {
            return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e)
        };
        var R = function (e, o, t, r, i, s, n) {
            this.st = e, this.ed = o, this.spd = t, this.p1 = r || 0, this.p2 = i || 1, this.p3 = s || 0, this.p4 = n || 1, this.ts = f(), this.df = o - e
        };
        if (R.prototype = {
            B2: function (e) {
                return 3 * (1 - e) * (1 - e) * e
            }, B3: function (e) {
                return 3 * (1 - e) * e * e
            }, B4: function (e) {
                return e * e * e
            }, getPos: function () {
                return (f() - this.ts) / this.spd
            }, getNow: function () {
                var e = (f() - this.ts) / this.spd, o = this.B2(e) + this.B3(e) + this.B4(e);
                return e >= 1 ? this.ed : this.st + this.df * o | 0
            }, update: function (e, o) {
                return this.st = this.getNow(), this.ed = e, this.spd = o, this.ts = f(), this.df = this.ed - this.st, this
            }
        }, this.ishwscroll) {
            this.doc.translate = {x: 0, y: 0, tx: "0px", ty: "0px"}, P.hastranslate3d && P.isios && this.doc.css("-webkit-backface-visibility", "hidden"), this.getScrollTop = function (e) {
                if (!e) {
                    var o = v();
                    if (o) return 16 == o.length ? -o[13] : -o[5];
                    if (T.timerscroll && T.timerscroll.bz) return T.timerscroll.bz.getNow()
                }
                return T.doc.translate.y
            }, this.getScrollLeft = function (e) {
                if (!e) {
                    var o = v();
                    if (o) return 16 == o.length ? -o[12] : -o[4];
                    if (T.timerscroll && T.timerscroll.bh) return T.timerscroll.bh.getNow()
                }
                return T.doc.translate.x
            }, this.notifyScrollEvent = function (e) {
                var o = l.createEvent("UIEvents");
                o.initUIEvent("scroll", !1, !1, a, 1), o.niceevent = !0, e.dispatchEvent(o)
            };
            var _ = this.isrtlmode ? 1 : -1;
            P.hastranslate3d && M.enabletranslate3d ? (this.setScrollTop = function (e, o) {
                T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
            }, this.setScrollLeft = function (e, o) {
                T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate3d(" + T.doc.translate.tx + "," + T.doc.translate.ty + ",0)"), o || T.notifyScrollEvent(T.win[0])
            }) : (this.setScrollTop = function (e, o) {
                T.doc.translate.y = e, T.doc.translate.ty = -1 * e + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
            }, this.setScrollLeft = function (e, o) {
                T.doc.translate.x = e, T.doc.translate.tx = e * _ + "px", T.doc.css(P.trstyle, "translate(" + T.doc.translate.tx + "," + T.doc.translate.ty + ")"), o || T.notifyScrollEvent(T.win[0])
            })
        } else this.getScrollTop = function () {
            return T.docscroll.scrollTop()
        }, this.setScrollTop = function (e) {
            T.docscroll.scrollTop(e)
        }, this.getScrollLeft = function () {
            return T.hasreversehr ? T.detected.ismozilla ? T.page.maxw - Math.abs(T.docscroll.scrollLeft()) : T.page.maxw - T.docscroll.scrollLeft() : T.docscroll.scrollLeft()
        }, this.setScrollLeft = function (e) {
            return setTimeout(function () {
                if (T) return T.hasreversehr && (e = T.detected.ismozilla ? -(T.page.maxw - e) : T.page.maxw - e), T.docscroll.scrollLeft(e)
            }, 1)
        };
        this.getTarget = function (e) {
            return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
        }, this.hasParent = function (e, o) {
            if (!e) return !1;
            for (var t = e.target || e.srcElement || e || !1; t && t.id != o;) t = t.parentNode || !1;
            return !1 !== t
        };
        var I = {thin: 1, medium: 3, thick: 5};
        this.getDocumentScrollOffset = function () {
            return {top: a.pageYOffset || l.documentElement.scrollTop, left: a.pageXOffset || l.documentElement.scrollLeft}
        }, this.getOffset = function () {
            if (T.isfixed) {
                var e = T.win.offset(), o = T.getDocumentScrollOffset();
                return e.top -= o.top, e.left -= o.left, e
            }
            var t = T.win.offset();
            if (!T.viewport) return t;
            var r = T.viewport.offset();
            return {top: t.top - r.top, left: t.left - r.left}
        }, this.updateScrollBar = function (e) {
            var o, t;
            if (T.ishwscroll) T.rail.css({height: T.win.innerHeight() - (M.railpadding.top + M.railpadding.bottom)}), T.railh && T.railh.css({width: T.win.innerWidth() - (M.railpadding.left + M.railpadding.right)}); else {
                var r = T.getOffset();
                if (o = {
                    top: r.top,
                    left: r.left - (M.railpadding.left + M.railpadding.right)
                }, o.top += x(T.win, "border-top-width", !0), o.left += T.rail.align ? T.win.outerWidth() - x(T.win, "border-right-width") - T.rail.width : x(T.win, "border-left-width"), (t = M.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)), T.railslocked || T.rail.css({
                    top: o.top,
                    left: o.left,
                    height: (e ? e.h : T.win.innerHeight()) - (M.railpadding.top + M.railpadding.bottom)
                }), T.zoom && T.zoom.css({top: o.top + 1, left: 1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4}), T.railh && !T.railslocked) {
                    o = {top: r.top, left: r.left}, (t = M.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
                    var i = T.railh.align ? o.top + x(T.win, "border-top-width", !0) + T.win.innerHeight() - T.railh.height : o.top + x(T.win, "border-top-width", !0),
                        s = o.left + x(T.win, "border-left-width");
                    T.railh.css({top: i - (M.railpadding.top + M.railpadding.bottom), left: s, width: T.railh.width})
                }
            }
        }, this.doRailClick = function (e, o, t) {
            var r, i, s, n;
            T.railslocked || (T.cancelEvent(e), "pageY" in e || (e.pageX = e.clientX + l.documentElement.scrollLeft, e.pageY = e.clientY + l.documentElement.scrollTop), o ? (r = t ? T.doScrollLeft : T.doScrollTop, s = t ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) * T.scrollratio.x : (e.pageY - T.rail.offset().top - T.cursorheight / 2) * T.scrollratio.y, T.unsynched("relativexy"), r(0 | s)) : (r = t ? T.doScrollLeftBy : T.doScrollBy, s = t ? T.scroll.x : T.scroll.y, n = t ? e.pageX - T.railh.offset().left : e.pageY - T.rail.offset().top, i = t ? T.view.w : T.view.h, r(s >= n ? i : -i)))
        }, T.newscrolly = T.newscrollx = 0, T.hasanimationframe = "requestAnimationFrame" in a, T.hascancelanimationframe = "cancelAnimationFrame" in a, T.hasborderbox = !1, this.init = function () {
            if (T.saved.css = [], P.isoperamini) return !0;
            if (P.isandroid && !("hidden" in l)) return !0;
            M.emulatetouch = M.emulatetouch || M.touchbehavior, T.hasborderbox = a.getComputedStyle && "border-box" === a.getComputedStyle(l.body)["box-sizing"];
            var e = {"overflow-y": "hidden"};
            if ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"), T.ishwscroll && (this.doc.css(P.transitionstyle, P.prefixstyle + "transform 0ms ease-out"), P.transitionend && T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)), T.zindex = "auto", T.ispage || "auto" != M.zindex ? T.zindex = M.zindex : T.zindex = b() || "auto", !T.ispage && "auto" != T.zindex && T.zindex > s && (s = T.zindex), T.isie && 0 === T.zindex && "auto" == M.zindex && (T.zindex = "auto"), !T.ispage || !P.isieold) {
                var i = T.docscroll;
                T.ispage && (i = T.haswrapper ? T.win : T.doc), T.css(i, e), T.ispage && (P.isie11 || P.isie) && T.css(n("html"), e), !P.isios || T.ispage || T.haswrapper || T.css(E, {"-webkit-overflow-scrolling": "touch"});
                var d = n(l.createElement("div"));
                d.css({
                    position: "relative",
                    top: 0,
                    float: "right",
                    width: M.cursorwidth,
                    height: 0,
                    "background-color": M.cursorcolor,
                    border: M.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": M.cursorborderradius,
                    "-moz-border-radius": M.cursorborderradius,
                    "border-radius": M.cursorborderradius
                }), d.addClass("nicescroll-cursors"), T.cursor = d;
                var u = n(l.createElement("div"));
                u.attr("id", T.id), u.addClass("nicescroll-rails nicescroll-rails-vr");
                var h, p, f = ["left", "right", "top", "bottom"];
                for (var g in f) p = f[g], (h = M.railpadding[p] || 0) && u.css("padding-" + p, h + "px");
                u.append(d), u.width = Math.max(parseFloat(M.cursorwidth), d.outerWidth()), u.css({
                    width: u.width + "px",
                    zIndex: T.zindex,
                    background: M.background,
                    cursor: "default"
                }), u.visibility = !0, u.scrollable = !0, u.align = "left" == M.railalign ? 0 : 1, T.rail = u, T.rail.drag = !1;
                var v = !1;
                !M.boxzoom || T.ispage || P.isieold || (v = l.createElement("div"), T.bind(v, "click", T.doZoom), T.bind(v, "mouseenter", function () {
                    T.zoom.css("opacity", M.cursoropacitymax)
                }), T.bind(v, "mouseleave", function () {
                    T.zoom.css("opacity", M.cursoropacitymin)
                }), T.zoom = n(v), T.zoom.css({
                    cursor: "pointer",
                    zIndex: T.zindex,
                    backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0 0"
                }), M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom), P.cantouch && M.gesturezoom && (T.ongesturezoom = function (e) {
                    return e.scale > 1.5 && T.doZoomIn(e), e.scale < .8 && T.doZoomOut(e), T.cancelEvent(e)
                }, T.bind(T.win, "gestureend", T.ongesturezoom))), T.railh = !1;
                var w;
                if (M.horizrailenabled && (T.css(i, {overflowX: "hidden"}), (d = n(l.createElement("div"))).css({
                    position: "absolute",
                    top: 0,
                    height: M.cursorwidth,
                    width: 0,
                    backgroundColor: M.cursorcolor,
                    border: M.cursorborder,
                    backgroundClip: "padding-box",
                    "-webkit-border-radius": M.cursorborderradius,
                    "-moz-border-radius": M.cursorborderradius,
                    "border-radius": M.cursorborderradius
                }), P.isieold && d.css("overflow", "hidden"), d.addClass("nicescroll-cursors"), T.cursorh = d, (w = n(l.createElement("div"))).attr("id", T.id + "-hr"), w.addClass("nicescroll-rails nicescroll-rails-hr"), w.height = Math.max(parseFloat(M.cursorwidth), d.outerHeight()), w.css({
                    height: w.height + "px",
                    zIndex: T.zindex,
                    background: M.background
                }), w.append(d), w.visibility = !0, w.scrollable = !0, w.align = "top" == M.railvalign ? 0 : 1, T.railh = w, T.railh.drag = !1), T.ispage) u.css({
                    position: "fixed",
                    top: 0,
                    height: "100%"
                }), u.css(u.align ? {right: 0} : {left: 0}), T.body.append(u), T.railh && (w.css({
                    position: "fixed",
                    left: 0,
                    width: "100%"
                }), w.css(w.align ? {bottom: 0} : {top: 0}), T.body.append(w)); else {
                    if (T.ishwscroll) {
                        "static" == T.win.css("position") && T.css(T.win, {position: "relative"});
                        var x = "HTML" == T.win[0].nodeName ? T.body : T.win;
                        n(x).scrollTop(0).scrollLeft(0), T.zoom && (T.zoom.css({position: "absolute", top: 1, right: 0, "margin-right": u.width + 4}), x.append(T.zoom)), u.css({
                            position: "absolute",
                            top: 0
                        }), u.css(u.align ? {right: 0} : {left: 0}), x.append(u), w && (w.css({position: "absolute", left: 0, bottom: 0}), w.css(w.align ? {bottom: 0} : {top: 0}), x.append(w))
                    } else {
                        T.isfixed = "fixed" == T.win.css("position");
                        var S = T.isfixed ? "fixed" : "absolute";
                        T.isfixed || (T.viewport = T.getViewport(T.win[0])), T.viewport && (T.body = T.viewport, /fixed|absolute/.test(T.viewport.css("position")) || T.css(T.viewport, {position: "relative"})), u.css({position: S}), T.zoom && T.zoom.css({position: S}), T.updateScrollBar(), T.body.append(u), T.zoom && T.body.append(T.zoom), T.railh && (w.css({position: S}), T.body.append(w))
                    }
                    P.isios && T.css(T.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), M.disableoutline && (P.isie && T.win.attr("hideFocus", "true"), P.iswebkit && T.win.css("outline", "none"))
                }
                if (!1 === M.autohidemode ? (T.autohidedom = !1, T.rail.css({opacity: M.cursoropacitymax}), T.railh && T.railh.css({opacity: M.cursoropacitymax})) : !0 === M.autohidemode || "leave" === M.autohidemode ? (T.autohidedom = n().add(T.rail), P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)), T.railh && (T.autohidedom = T.autohidedom.add(T.railh)), T.railh && P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "scroll" == M.autohidemode ? (T.autohidedom = n().add(T.rail), T.railh && (T.autohidedom = T.autohidedom.add(T.railh))) : "cursor" == M.autohidemode ? (T.autohidedom = n().add(T.cursor), T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh))) : "hidden" == M.autohidemode && (T.autohidedom = !1, T.hide(), T.railslocked = !1), P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch) {
                    T.scrollmom = new y(T);
                    T.ontouchstart = function (e) {
                        if (T.locked) return !1;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                        if (T.hasmoving = !1, T.scrollmom.timer && (T.triggerScrollEnd(), T.scrollmom.stop()), !T.railslocked) {
                            var o = T.getTarget(e);
                            if (o && /INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return T.stopPropagation(e);
                            var t = "mousedown" === e.type;
                            if (!("clientX" in e) && "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY), T.forcescreen) {
                                var r = e;
                                (e = {original: e.original ? e.original : e}).clientX = r.screenX, e.clientY = r.screenY
                            }
                            if (T.rail.drag = {
                                x: e.clientX,
                                y: e.clientY,
                                sx: T.scroll.x,
                                sy: T.scroll.y,
                                st: T.getScrollTop(),
                                sl: T.getScrollLeft(),
                                pt: 2,
                                dl: !1,
                                tg: o
                            }, T.ispage || !M.directionlockdeadzone) T.rail.drag.dl = "f"; else {
                                var i = {w: c.width(), h: c.height()}, s = T.getContentSize(), l = s.h - i.h, a = s.w - i.w;
                                T.rail.scrollable && !T.railh.scrollable ? T.rail.drag.ck = l > 0 && "v" : !T.rail.scrollable && T.railh.scrollable ? T.rail.drag.ck = a > 0 && "h" : T.rail.drag.ck = !1
                            }
                            if (M.emulatetouch && T.isiframe && P.isie) {
                                var d = T.win.position();
                                T.rail.drag.x += d.left, T.rail.drag.y += d.top
                            }
                            if (T.hasmoving = !1, T.lastmouseup = !1, T.scrollmom.reset(e.clientX, e.clientY), o && t) {
                                if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName)) return P.hasmousecapture && o.setCapture(), M.emulatetouch ? (o.onclick && !o._onclick && (o._onclick = o.onclick, o.onclick = function (e) {
                                    if (T.hasmoving) return !1;
                                    o._onclick.call(this, e)
                                }), T.cancelEvent(e)) : T.stopPropagation(e);
                                /SUBMIT|CANCEL|BUTTON/i.test(n(o).attr("type")) && (T.preventclick = {tg: o, click: !1})
                            }
                        }
                    }, T.ontouchend = function (e) {
                        if (!T.rail.drag) return !0;
                        if (2 == T.rail.drag.pt) {
                            if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                            T.rail.drag = !1;
                            var o = "mouseup" === e.type;
                            if (T.hasmoving && (T.scrollmom.doMomentum(), T.lastmouseup = !0, T.hideCursor(), P.hasmousecapture && l.releaseCapture(), o)) return T.cancelEvent(e)
                        } else if (1 == T.rail.drag.pt) return T.onmouseup(e)
                    };
                    var z = M.emulatetouch && T.isiframe && !P.hasmousecapture, k = .3 * M.directionlockdeadzone | 0;
                    T.ontouchmove = function (e, o) {
                        if (!T.rail.drag) return !0;
                        if (e.targetTouches && M.preventmultitouchscrolling && e.targetTouches.length > 1) return !0;
                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
                        if (2 == T.rail.drag.pt) {
                            "changedTouches" in e && (e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY);
                            var t, r;
                            if (r = t = 0, z && !o) {
                                var i = T.win.position();
                                r = -i.left, t = -i.top
                            }
                            var s = e.clientY + t, n = s - T.rail.drag.y, a = e.clientX + r, c = a - T.rail.drag.x, d = T.rail.drag.st - n;
                            if (T.ishwscroll && M.bouncescroll) d < 0 ? d = Math.round(d / 2) : d > T.page.maxh && (d = T.page.maxh + Math.round((d - T.page.maxh) / 2)); else if (d < 0 ? (d = 0, s = 0) : d > T.page.maxh && (d = T.page.maxh, s = 0), 0 === s && !T.hasmoving) return T.ispage || (T.rail.drag = !1), !0;
                            var u = T.getScrollLeft();
                            if (T.railh && T.railh.scrollable && (u = T.isrtlmode ? c - T.rail.drag.sl : T.rail.drag.sl - c, T.ishwscroll && M.bouncescroll ? u < 0 ? u = Math.round(u / 2) : u > T.page.maxw && (u = T.page.maxw + Math.round((u - T.page.maxw) / 2)) : (u < 0 && (u = 0, a = 0), u > T.page.maxw && (u = T.page.maxw, a = 0))), !T.hasmoving) {
                                if (T.rail.drag.y === e.clientY && T.rail.drag.x === e.clientX) return T.cancelEvent(e);
                                var h = Math.abs(n), p = Math.abs(c), m = M.directionlockdeadzone;
                                if (T.rail.drag.ck ? "v" == T.rail.drag.ck ? p > m && h <= k ? T.rail.drag = !1 : h > m && (T.rail.drag.dl = "v") : "h" == T.rail.drag.ck && (h > m && p <= k ? T.rail.drag = !1 : p > m && (T.rail.drag.dl = "h")) : h > m && p > m ? T.rail.drag.dl = "f" : h > m ? T.rail.drag.dl = p > k ? "f" : "v" : p > m && (T.rail.drag.dl = h > k ? "f" : "h"), !T.rail.drag.dl) return T.cancelEvent(e);
                                T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0
                            }
                            return T.preventclick && !T.preventclick.click && (T.preventclick.click = T.preventclick.tg.onclick || !1, T.preventclick.tg.onclick = T.onpreventclick), T.rail.drag.dl && ("v" == T.rail.drag.dl ? u = T.rail.drag.sl : "h" == T.rail.drag.dl && (d = T.rail.drag.st)), T.synched("touchmove", function () {
                                T.rail.drag && 2 == T.rail.drag.pt && (T.prepareTransition && T.resetTransition(), T.rail.scrollable && T.setScrollTop(d), T.scrollmom.update(a, s), T.railh && T.railh.scrollable ? (T.setScrollLeft(u), T.showCursor(d, u)) : T.showCursor(d), P.isie10 && l.selection.clear())
                            }), T.cancelEvent(e)
                        }
                        return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0
                    }, T.ontouchstartCursor = function (e, o) {
                        if (!T.rail.drag || 3 == T.rail.drag.pt) {
                            if (T.locked) return T.cancelEvent(e);
                            T.cancelScroll(), T.rail.drag = {x: e.touches[0].clientX, y: e.touches[0].clientY, sx: T.scroll.x, sy: T.scroll.y, pt: 3, hr: !!o};
                            var t = T.getTarget(e);
                            return !T.ispage && P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {"pointer-events": "none"})), T.cancelEvent(e)
                        }
                    }, T.ontouchendCursor = function (e) {
                        if (T.rail.drag) {
                            if (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), 3 != T.rail.drag.pt) return;
                            return T.rail.drag = !1, T.cancelEvent(e)
                        }
                    }, T.ontouchmoveCursor = function (e) {
                        if (T.rail.drag) {
                            if (3 != T.rail.drag.pt) return;
                            if (T.cursorfreezed = !0, T.rail.drag.hr) {
                                T.scroll.x = T.rail.drag.sx + (e.touches[0].clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                                var o = T.scrollvaluemaxw;
                                T.scroll.x > o && (T.scroll.x = o)
                            } else {
                                T.scroll.y = T.rail.drag.sy + (e.touches[0].clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                                var t = T.scrollvaluemax;
                                T.scroll.y > t && (T.scroll.y = t)
                            }
                            return T.synched("touchmove", function () {
                                T.rail.drag && 3 == T.rail.drag.pt && (T.showCursor(), T.rail.drag.hr ? T.doScrollLeft(Math.round(T.scroll.x * T.scrollratio.x), M.cursordragspeed) : T.doScrollTop(Math.round(T.scroll.y * T.scrollratio.y), M.cursordragspeed))
                            }), T.cancelEvent(e)
                        }
                    }
                }
                if (T.onmousedown = function (e, o) {
                    if (!T.rail.drag || 1 == T.rail.drag.pt) {
                        if (T.railslocked) return T.cancelEvent(e);
                        T.cancelScroll(), T.rail.drag = {x: e.clientX, y: e.clientY, sx: T.scroll.x, sy: T.scroll.y, pt: 1, hr: o || !1};
                        var t = T.getTarget(e);
                        return P.hasmousecapture && t.setCapture(), T.isiframe && !P.hasmousecapture && (T.saved.csspointerevents = T.doc.css("pointer-events"), T.css(T.doc, {"pointer-events": "none"})), T.hasmoving = !1, T.cancelEvent(e)
                    }
                }, T.onmouseup = function (e) {
                    if (T.rail.drag) return 1 != T.rail.drag.pt || (P.hasmousecapture && l.releaseCapture(), T.isiframe && !P.hasmousecapture && T.doc.css("pointer-events", T.saved.csspointerevents), T.rail.drag = !1, T.cursorfreezed = !1, T.hasmoving && T.triggerScrollEnd(), T.cancelEvent(e))
                }, T.onmousemove = function (e) {
                    if (T.rail.drag) {
                        if (1 !== T.rail.drag.pt) return;
                        if (P.ischrome && 0 === e.which) return T.onmouseup(e);
                        if (T.cursorfreezed = !0, T.hasmoving || T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), T.hasmoving = !0, T.rail.drag.hr) {
                            T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x), T.scroll.x < 0 && (T.scroll.x = 0);
                            var o = T.scrollvaluemaxw;
                            T.scroll.x > o && (T.scroll.x = o)
                        } else {
                            T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y), T.scroll.y < 0 && (T.scroll.y = 0);
                            var t = T.scrollvaluemax;
                            T.scroll.y > t && (T.scroll.y = t)
                        }
                        return T.synched("mousemove", function () {
                            T.cursorfreezed && (T.showCursor(), T.rail.drag.hr ? T.scrollLeft(Math.round(T.scroll.x * T.scrollratio.x)) : T.scrollTop(Math.round(T.scroll.y * T.scrollratio.y)))
                        }), T.cancelEvent(e)
                    }
                    T.checkarea = 0
                }, P.cantouch || M.emulatetouch) T.onpreventclick = function (e) {
                    if (T.preventclick) return T.preventclick.tg.onclick = T.preventclick.click, T.preventclick = !1, T.cancelEvent(e)
                }, T.onclick = !P.isios && function (e) {
                    return !T.lastmouseup || (T.lastmouseup = !1, T.cancelEvent(e))
                }, M.grabcursorenabled && P.cursorgrabvalue && (T.css(T.ispage ? T.doc : T.win, {cursor: P.cursorgrabvalue}), T.css(T.rail, {cursor: P.cursorgrabvalue})); else {
                    var L = function (e) {
                        if (T.selectiondrag) {
                            if (e) {
                                var o = T.win.outerHeight(), t = e.pageY - T.selectiondrag.top;
                                t > 0 && t < o && (t = 0), t >= o && (t -= o), T.selectiondrag.df = t
                            }
                            if (0 !== T.selectiondrag.df) {
                                var r = -2 * T.selectiondrag.df / 6 | 0;
                                T.doScrollBy(r), T.debounced("doselectionscroll", function () {
                                    L()
                                }, 50)
                            }
                        }
                    };
                    T.hasTextSelected = "getSelection" in l ? function () {
                        return l.getSelection().rangeCount > 0
                    } : "selection" in l ? function () {
                        return "None" != l.selection.type
                    } : function () {
                        return !1
                    }, T.onselectionstart = function (e) {
                        T.ispage || (T.selectiondrag = T.win.offset())
                    }, T.onselectionend = function (e) {
                        T.selectiondrag = !1
                    }, T.onselectiondrag = function (e) {
                        T.selectiondrag && T.hasTextSelected() && T.debounced("selectionscroll", function () {
                            L(e)
                        }, 250)
                    }
                }
                if (P.hasw3ctouch ? (T.css(T.ispage ? n("html") : T.win, {"touch-action": "none"}), T.css(T.rail, {"touch-action": "none"}), T.css(T.cursor, {"touch-action": "none"}), T.bind(T.win, "pointerdown", T.ontouchstart), T.bind(l, "pointerup", T.ontouchend), T.delegate(l, "pointermove", T.ontouchmove)) : P.hasmstouch ? (T.css(T.ispage ? n("html") : T.win, {"-ms-touch-action": "none"}), T.css(T.rail, {"-ms-touch-action": "none"}), T.css(T.cursor, {"-ms-touch-action": "none"}), T.bind(T.win, "MSPointerDown", T.ontouchstart), T.bind(l, "MSPointerUp", T.ontouchend), T.delegate(l, "MSPointerMove", T.ontouchmove), T.bind(T.cursor, "MSGestureHold", function (e) {
                    e.preventDefault()
                }), T.bind(T.cursor, "contextmenu", function (e) {
                    e.preventDefault()
                })) : P.cantouch && (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0), T.bind(l, "touchend", T.ontouchend, !1, !0), T.bind(l, "touchcancel", T.ontouchend, !1, !0), T.delegate(l, "touchmove", T.ontouchmove, !1, !0)), M.emulatetouch && (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0), T.bind(l, "mouseup", T.ontouchend, !1, !0), T.bind(l, "mousemove", T.ontouchmove, !1, !0)), (M.cursordragontouch || !P.cantouch && !M.emulatetouch) && (T.rail.css({cursor: "default"}), T.railh && T.railh.css({cursor: "default"}), T.jqbind(T.rail, "mouseenter", function () {
                    if (!T.ispage && !T.win.is(":visible")) return !1;
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.rail, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }), M.sensitiverail && (T.bind(T.rail, "click", function (e) {
                    T.doRailClick(e, !1, !1)
                }), T.bind(T.rail, "dblclick", function (e) {
                    T.doRailClick(e, !0, !1)
                }), T.bind(T.cursor, "click", function (e) {
                    T.cancelEvent(e)
                }), T.bind(T.cursor, "dblclick", function (e) {
                    T.cancelEvent(e)
                })), T.railh && (T.jqbind(T.railh, "mouseenter", function () {
                    if (!T.ispage && !T.win.is(":visible")) return !1;
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.railh, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }), M.sensitiverail && (T.bind(T.railh, "click", function (e) {
                    T.doRailClick(e, !1, !0)
                }), T.bind(T.railh, "dblclick", function (e) {
                    T.doRailClick(e, !0, !0)
                }), T.bind(T.cursorh, "click", function (e) {
                    T.cancelEvent(e)
                }), T.bind(T.cursorh, "dblclick", function (e) {
                    T.cancelEvent(e)
                })))), M.cursordragontouch && (this.istouchcapable || P.cantouch) && (T.bind(T.cursor, "touchstart", T.ontouchstartCursor), T.bind(T.cursor, "touchmove", T.ontouchmoveCursor), T.bind(T.cursor, "touchend", T.ontouchendCursor), T.cursorh && T.bind(T.cursorh, "touchstart", function (e) {
                    T.ontouchstartCursor(e, !0)
                }), T.cursorh && T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor), T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)), M.emulatetouch || P.isandroid || P.isios ? (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.ontouchend), T.onclick && T.bind(l, "click", T.onclick), M.cursordragontouch ? (T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.cursorh && T.bind(T.cursorh, "mousedown", function (e) {
                    T.onmousedown(e, !0)
                }), T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup)) : (T.bind(T.rail, "mousedown", function (e) {
                    e.preventDefault()
                }), T.railh && T.bind(T.railh, "mousedown", function (e) {
                    e.preventDefault()
                }))) : (T.bind(P.hasmousecapture ? T.win : l, "mouseup", T.onmouseup), T.bind(l, "mousemove", T.onmousemove), T.onclick && T.bind(l, "click", T.onclick), T.bind(T.cursor, "mousedown", T.onmousedown), T.bind(T.cursor, "mouseup", T.onmouseup), T.railh && (T.bind(T.cursorh, "mousedown", function (e) {
                    T.onmousedown(e, !0)
                }), T.bind(T.cursorh, "mouseup", T.onmouseup)), !T.ispage && M.enablescrollonselection && (T.bind(T.win[0], "mousedown", T.onselectionstart), T.bind(l, "mouseup", T.onselectionend), T.bind(T.cursor, "mouseup", T.onselectionend), T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend), T.bind(l, "mousemove", T.onselectiondrag)), T.zoom && (T.jqbind(T.zoom, "mouseenter", function () {
                    T.canshowonmouseevent && T.showCursor(), T.rail.active = !0
                }), T.jqbind(T.zoom, "mouseleave", function () {
                    T.rail.active = !1, T.rail.drag || T.hideCursor()
                }))), M.enablemousewheel && (T.isiframe || T.mousewheel(P.isie && T.ispage ? l : T.win, T.onmousewheel), T.mousewheel(T.rail, T.onmousewheel), T.railh && T.mousewheel(T.railh, T.onmousewheelhr)), T.ispage || P.cantouch || /HTML|^BODY/.test(T.win[0].nodeName) || (T.win.attr("tabindex") || T.win.attr({tabindex: ++r}), T.bind(T.win, "focus", function (e) {
                    o = T.getTarget(e).id || T.getTarget(e) || !1, T.hasfocus = !0, T.canshowonmouseevent && T.noticeCursor()
                }), T.bind(T.win, "blur", function (e) {
                    o = !1, T.hasfocus = !1
                }), T.bind(T.win, "mouseenter", function (e) {
                    t = T.getTarget(e).id || T.getTarget(e) || !1, T.hasmousefocus = !0, T.canshowonmouseevent && T.noticeCursor()
                }), T.bind(T.win, "mouseleave", function (e) {
                    t = !1, T.hasmousefocus = !1, T.rail.drag || T.hideCursor()
                })), T.onkeypress = function (e) {
                    if (T.railslocked && 0 === T.page.maxh) return !0;
                    e = e || a.event;
                    var r = T.getTarget(e);
                    if (r && /INPUT|TEXTAREA|SELECT|OPTION/.test(r.nodeName) && (!(r.getAttribute("type") || r.type || !1) || !/submit|button|cancel/i.tp)) return !0;
                    if (n(r).attr("contenteditable")) return !0;
                    if (T.hasfocus || T.hasmousefocus && !o || T.ispage && !o && !t) {
                        var i = e.keyCode;
                        if (T.railslocked && 27 != i) return T.cancelEvent(e);
                        var s = e.ctrlKey || !1, l = e.shiftKey || !1, c = !1;
                        switch (i) {
                            case 38:
                            case 63233:
                                T.doScrollBy(72), c = !0;
                                break;
                            case 40:
                            case 63235:
                                T.doScrollBy(-72), c = !0;
                                break;
                            case 37:
                            case 63232:
                                T.railh && (s ? T.doScrollLeft(0) : T.doScrollLeftBy(72), c = !0);
                                break;
                            case 39:
                            case 63234:
                                T.railh && (s ? T.doScrollLeft(T.page.maxw) : T.doScrollLeftBy(-72), c = !0);
                                break;
                            case 33:
                            case 63276:
                                T.doScrollBy(T.view.h), c = !0;
                                break;
                            case 34:
                            case 63277:
                                T.doScrollBy(-T.view.h), c = !0;
                                break;
                            case 36:
                            case 63273:
                                T.railh && s ? T.doScrollPos(0, 0) : T.doScrollTo(0), c = !0;
                                break;
                            case 35:
                            case 63275:
                                T.railh && s ? T.doScrollPos(T.page.maxw, T.page.maxh) : T.doScrollTo(T.page.maxh), c = !0;
                                break;
                            case 32:
                                M.spacebarenabled && (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h), c = !0);
                                break;
                            case 27:
                                T.zoomactive && (T.doZoom(), c = !0)
                        }
                        if (c) return T.cancelEvent(e)
                    }
                }, M.enablekeyboard && T.bind(l, P.isopera && !P.isopera12 ? "keypress" : "keydown", T.onkeypress), T.bind(l, "keydown", function (e) {
                    (e.ctrlKey || !1) && (T.wheelprevented = !0)
                }), T.bind(l, "keyup", function (e) {
                    e.ctrlKey || !1 || (T.wheelprevented = !1)
                }), T.bind(a, "blur", function (e) {
                    T.wheelprevented = !1
                }), T.bind(a, "resize", T.onscreenresize), T.bind(a, "orientationchange", T.onscreenresize), T.bind(a, "load", T.lazyResize), P.ischrome && !T.ispage && !T.haswrapper) {
                    var C = T.win.attr("style"), N = parseFloat(T.win.css("width")) + 1;
                    T.win.css("width", N), T.synched("chromefix", function () {
                        T.win.attr("style", C)
                    })
                }
                if (T.onAttributeChange = function (e) {
                    T.lazyResize(T.isieold ? 250 : 30)
                }, M.enableobserver && (T.isie11 || !1 === m || (T.observerbody = new m(function (e) {
                    if (e.forEach(function (e) {
                        if ("attributes" == e.type) return E.hasClass("modal-open") && E.hasClass("modal-dialog") && !n.contains(n(".modal-dialog")[0], T.doc[0]) ? T.hide() : T.show()
                    }), T.me.clientWidth != T.page.width || T.me.clientHeight != T.page.height) return T.lazyResize(30)
                }), T.observerbody.observe(l.body, {childList: !0, subtree: !0, characterData: !1, attributes: !0, attributeFilter: ["class"]})), !T.ispage && !T.haswrapper)) {
                    var R = T.win[0];
                    !1 !== m ? (T.observer = new m(function (e) {
                        e.forEach(T.onAttributeChange)
                    }), T.observer.observe(R, {childList: !0, characterData: !1, attributes: !0, subtree: !1}), T.observerremover = new m(function (e) {
                        e.forEach(function (e) {
                            if (e.removedNodes.length > 0) for (var o in e.removedNodes) if (T && e.removedNodes[o] === R) return T.remove()
                        })
                    }), T.observerremover.observe(R.parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (T.bind(R, P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified", T.onAttributeChange), P.isie9 && R.attachEvent("onpropertychange", T.onAttributeChange), T.bind(R, "DOMNodeRemoved", function (e) {
                        e.target === R && T.remove()
                    }))
                }
                !T.ispage && M.boxzoom && T.bind(a, "resize", T.resizeZoom), T.istextarea && (T.bind(T.win, "keydown", T.lazyResize), T.bind(T.win, "mouseup", T.lazyResize)), T.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var _ = function () {
                    T.iframexd = !1;
                    var o;
                    try {
                        (o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain
                    } catch (e) {
                        T.iframexd = !0, o = !1
                    }
                    if (T.iframexd) return "console" in a && console.log("NiceScroll error: policy restriced iframe"), !0;
                    if (T.forcescreen = !0, T.isiframe && (T.iframe = {doc: n(o), html: T.doc.contents().find("html")[0], body: T.doc.contents().find("body")[0]}, T.getContentSize = function () {
                        return {w: Math.max(T.iframe.html.scrollWidth, T.iframe.body.scrollWidth), h: Math.max(T.iframe.html.scrollHeight, T.iframe.body.scrollHeight)}
                    }, T.docscroll = n(T.iframe.body)), !P.isios && M.iframeautoresize && !T.isiframe) {
                        T.win.scrollTop(0), T.doc.height("");
                        var t = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                        T.doc.height(t)
                    }
                    T.lazyResize(30), T.css(n(T.iframe.body), e), P.isios && T.haswrapper && T.css(n(o.body), {"-webkit-transform": "translate3d(0,0,0)"}), "contentWindow" in this ? T.bind(this.contentWindow, "scroll", T.onscroll) : T.bind(o, "scroll", T.onscroll), M.enablemousewheel && T.mousewheel(o, T.onmousewheel), M.enablekeyboard && T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress), P.cantouch ? (T.bind(o, "touchstart", T.ontouchstart), T.bind(o, "touchmove", T.ontouchmove)) : M.emulatetouch && (T.bind(o, "mousedown", T.ontouchstart), T.bind(o, "mousemove", function (e) {
                        return T.ontouchmove(e, !0)
                    }), M.grabcursorenabled && P.cursorgrabvalue && T.css(n(o.body), {cursor: P.cursorgrabvalue})), T.bind(o, "mouseup", T.ontouchend), T.zoom && (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom), T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom))
                };
                this.doc[0].readyState && "complete" === this.doc[0].readyState && setTimeout(function () {
                    _.call(T.doc[0], !1)
                }, 500), T.bind(this.doc, "load", _)
            }
        }, this.showCursor = function (e, o) {
            if (T.cursortimeout && (clearTimeout(T.cursortimeout), T.cursortimeout = 0), T.rail) {
                if (T.autohidedom && (T.autohidedom.stop().css({opacity: M.cursoropacitymax}), T.cursoractive = !0), T.rail.drag && 1 == T.rail.drag.pt || (void 0 !== e && !1 !== e && (T.scroll.y = e / T.scrollratio.y | 0), void 0 !== o && (T.scroll.x = o / T.scrollratio.x | 0)), T.cursor.css({
                    height: T.cursorheight,
                    top: T.scroll.y
                }), T.cursorh) {
                    var t = T.hasreversehr ? T.scrollvaluemaxw - T.scroll.x : T.scroll.x;
                    T.cursorh.css({width: T.cursorwidth, left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t}), T.cursoractive = !0
                }
                T.zoom && T.zoom.stop().css({opacity: M.cursoropacitymax})
            }
        }, this.hideCursor = function (e) {
            T.cursortimeout || T.rail && T.autohidedom && (T.hasmousefocus && "leave" === M.autohidemode || (T.cursortimeout = setTimeout(function () {
                T.rail.active && T.showonmouseevent || (T.autohidedom.stop().animate({opacity: M.cursoropacitymin}), T.zoom && T.zoom.stop().animate({opacity: M.cursoropacitymin}), T.cursoractive = !1), T.cursortimeout = 0
            }, e || M.hidecursordelay)))
        }, this.noticeCursor = function (e, o, t) {
            T.showCursor(o, t), T.rail.active || T.hideCursor(e)
        }, this.getContentSize = T.ispage ? function () {
            return {w: Math.max(l.body.scrollWidth, l.documentElement.scrollWidth), h: Math.max(l.body.scrollHeight, l.documentElement.scrollHeight)}
        } : T.haswrapper ? function () {
            return {w: T.doc[0].offsetWidth, h: T.doc[0].offsetHeight}
        } : function () {
            return {w: T.docscroll[0].scrollWidth, h: T.docscroll[0].scrollHeight}
        }, this.onResize = function (e, o) {
            if (!T || !T.win) return !1;
            var t = T.page.maxh, r = T.page.maxw, i = T.view.h, s = T.view.w;
            if (T.view = {
                w: T.ispage ? T.win.width() : T.win[0].clientWidth,
                h: T.ispage ? T.win.height() : T.win[0].clientHeight
            }, T.page = o || T.getContentSize(), T.page.maxh = Math.max(0, T.page.h - T.view.h), T.page.maxw = Math.max(0, T.page.w - T.view.w), T.page.maxh == t && T.page.maxw == r && T.view.w == s && T.view.h == i) {
                if (T.ispage) return T;
                var n = T.win.offset();
                if (T.lastposition) {
                    var l = T.lastposition;
                    if (l.top == n.top && l.left == n.left) return T
                }
                T.lastposition = n
            }
            return 0 === T.page.maxh ? (T.hideRail(), T.scrollvaluemax = 0, T.scroll.y = 0, T.scrollratio.y = 0, T.cursorheight = 0, T.setScrollTop(0), T.rail && (T.rail.scrollable = !1)) : (T.page.maxh -= M.railpadding.top + M.railpadding.bottom, T.rail.scrollable = !0), 0 === T.page.maxw ? (T.hideRailHr(), T.scrollvaluemaxw = 0, T.scroll.x = 0, T.scrollratio.x = 0, T.cursorwidth = 0, T.setScrollLeft(0), T.railh && (T.railh.scrollable = !1)) : (T.page.maxw -= M.railpadding.left + M.railpadding.right, T.railh && (T.railh.scrollable = M.horizrailenabled)), T.railslocked = T.locked || 0 === T.page.maxh && 0 === T.page.maxw, T.railslocked ? (T.ispage || T.updateScrollBar(T.view), !1) : (T.hidden || (T.rail.visibility || T.showRail(), T.railh && !T.railh.visibility && T.showRailHr()), T.istextarea && T.win.css("resize") && "none" != T.win.css("resize") && (T.view.h -= 20), T.cursorheight = Math.min(T.view.h, Math.round(T.view.h * (T.view.h / T.page.h))), T.cursorheight = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorheight), T.cursorwidth = Math.min(T.view.w, Math.round(T.view.w * (T.view.w / T.page.w))), T.cursorwidth = M.cursorfixedheight ? M.cursorfixedheight : Math.max(M.cursorminheight, T.cursorwidth), T.scrollvaluemax = T.view.h - T.cursorheight - (M.railpadding.top + M.railpadding.bottom), T.hasborderbox || (T.scrollvaluemax -= T.cursor[0].offsetHeight - T.cursor[0].clientHeight), T.railh && (T.railh.width = T.page.maxh > 0 ? T.view.w - T.rail.width : T.view.w, T.scrollvaluemaxw = T.railh.width - T.cursorwidth - (M.railpadding.left + M.railpadding.right)), T.ispage || T.updateScrollBar(T.view), T.scrollratio = {
                x: T.page.maxw / T.scrollvaluemaxw,
                y: T.page.maxh / T.scrollvaluemax
            }, T.getScrollTop() > T.page.maxh ? T.doScrollTop(T.page.maxh) : (T.scroll.y = T.getScrollTop() / T.scrollratio.y | 0, T.scroll.x = T.getScrollLeft() / T.scrollratio.x | 0, T.cursoractive && T.noticeCursor()), T.scroll.y && 0 === T.getScrollTop() && T.doScrollTo(T.scroll.y * T.scrollratio.y | 0), T)
        }, this.resize = T.onResize;
        var O = 0;
        this.onscreenresize = function (e) {
            clearTimeout(O);
            var o = !T.ispage && !T.haswrapper;
            o && T.hideRails(), O = setTimeout(function () {
                T && (o && T.showRails(), T.resize()), O = 0
            }, 120)
        }, this.lazyResize = function (e) {
            return clearTimeout(O), e = isNaN(e) ? 240 : e, O = setTimeout(function () {
                T && T.resize(), O = 0
            }, e), T
        }, this.jqbind = function (e, o, t) {
            T.events.push({e: e, n: o, f: t, q: !0}), n(e).on(o, t)
        }, this.mousewheel = function (e, o, t) {
            var r = "jquery" in e ? e[0] : e;
            if ("onwheel" in l.createElement("div")) T._bind(r, "wheel", o, t || !1); else {
                var i = void 0 !== l.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                S(r, i, o, t || !1), "DOMMouseScroll" == i && S(r, "MozMousePixelScroll", o, t || !1)
            }
        };
        var Y = !1;
        if (P.haseventlistener) {
            try {
                var H = Object.defineProperty({}, "passive", {
                    get: function () {
                        Y = !0
                    }
                });
                a.addEventListener("test", null, H)
            } catch (e) {
            }
            this.stopPropagation = function (e) {
                return !!e && ((e = e.original ? e.original : e).stopPropagation(), !1)
            }, this.cancelEvent = function (e) {
                return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1
            }
        } else Event.prototype.preventDefault = function () {
            this.returnValue = !1
        }, Event.prototype.stopPropagation = function () {
            this.cancelBubble = !0
        }, a.constructor.prototype.addEventListener = l.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
            this.attachEvent("on" + e, o)
        }, a.constructor.prototype.removeEventListener = l.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
            this.detachEvent("on" + e, o)
        }, this.cancelEvent = function (e) {
            return (e = e || a.event) && (e.cancelBubble = !0, e.cancel = !0, e.returnValue = !1), !1
        }, this.stopPropagation = function (e) {
            return (e = e || a.event) && (e.cancelBubble = !0), !1
        };
        this.delegate = function (e, o, t, r, i) {
            var s = d[o] || !1;
            s || (s = {
                a: [], l: [], f: function (e) {
                    for (var o = s.l, t = !1, r = o.length - 1; r >= 0; r--) if (!1 === (t = o[r].call(e.target, e))) return !1;
                    return t
                }
            }, T.bind(e, o, s.f, r, i), d[o] = s), T.ispage ? (s.a = [T.id].concat(s.a), s.l = [t].concat(s.l)) : (s.a.push(T.id), s.l.push(t))
        }, this.undelegate = function (e, o, t, r, i) {
            var s = d[o] || !1;
            if (s && s.l) for (var n = 0, l = s.l.length; n < l; n++) s.a[n] === T.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (T._unbind(e, o, s.l.f), d[o] = null))
        }, this.bind = function (e, o, t, r, i) {
            var s = "jquery" in e ? e[0] : e;
            T._bind(s, o, t, r || !1, i || !1)
        }, this._bind = function (e, o, t, r, i) {
            T.events.push({e: e, n: o, f: t, b: r, q: !1}), Y && i ? e.addEventListener(o, t, {passive: !1, capture: r}) : e.addEventListener(o, t, r || !1)
        }, this._unbind = function (e, o, t, r) {
            d[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r)
        }, this.unbindAll = function () {
            for (var e = 0; e < T.events.length; e++) {
                var o = T.events[e];
                o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b)
            }
        }, this.showRails = function () {
            return T.showRail().showRailHr()
        }, this.showRail = function () {
            return 0 === T.page.maxh || !T.ispage && "none" == T.win.css("display") || (T.rail.visibility = !0, T.rail.css("display", "block")), T
        }, this.showRailHr = function () {
            return T.railh && (0 === T.page.maxw || !T.ispage && "none" == T.win.css("display") || (T.railh.visibility = !0, T.railh.css("display", "block"))), T
        }, this.hideRails = function () {
            return T.hideRail().hideRailHr()
        }, this.hideRail = function () {
            return T.rail.visibility = !1, T.rail.css("display", "none"), T
        }, this.hideRailHr = function () {
            return T.railh && (T.railh.visibility = !1, T.railh.css("display", "none")), T
        }, this.show = function () {
            return T.hidden = !1, T.railslocked = !1, T.showRails()
        }, this.hide = function () {
            return T.hidden = !0, T.railslocked = !0, T.hideRails()
        }, this.toggle = function () {
            return T.hidden ? T.show() : T.hide()
        }, this.remove = function () {
            T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
            for (var e in T.delaylist) T.delaylist[e] && h(T.delaylist[e].h);
            T.doZoomOut(), T.unbindAll(), P.isie9 && T.win[0].detachEvent("onpropertychange", T.onAttributeChange), !1 !== T.observer && T.observer.disconnect(), !1 !== T.observerremover && T.observerremover.disconnect(), !1 !== T.observerbody && T.observerbody.disconnect(), T.events = null, T.cursor && T.cursor.remove(), T.cursorh && T.cursorh.remove(), T.rail && T.rail.remove(), T.railh && T.railh.remove(), T.zoom && T.zoom.remove();
            for (var o = 0; o < T.saved.css.length; o++) {
                var t = T.saved.css[o];
                t[0].css(t[1], void 0 === t[2] ? "" : t[2])
            }
            T.saved = !1, T.me.data("__nicescroll", "");
            var r = n.nicescroll;
            r.each(function (e) {
                if (this && this.id === T.id) {
                    delete r[e];
                    for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
                    --r.length && delete r[r.length]
                }
            });
            for (var i in T) T[i] = null, delete T[i];
            T = null
        }, this.scrollstart = function (e) {
            return this.onscrollstart = e, T
        }, this.scrollend = function (e) {
            return this.onscrollend = e, T
        }, this.scrollcancel = function (e) {
            return this.onscrollcancel = e, T
        }, this.zoomin = function (e) {
            return this.onzoomin = e, T
        }, this.zoomout = function (e) {
            return this.onzoomout = e, T
        }, this.isScrollable = function (e) {
            var o = e.target ? e.target : e;
            if ("OPTION" == o.nodeName) return !0;
            for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName);) {
                var t = n(o), r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
                o = !!o.parentNode && o.parentNode
            }
            return !1
        }, this.getViewport = function (e) {
            for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);) {
                var t = n(o);
                if (/fixed|absolute/.test(t.css("position"))) return t;
                var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
                if (t.getNiceScroll().length > 0) return t;
                o = !!o.parentNode && o.parentNode
            }
            return !1
        }, this.triggerScrollStart = function (e, o, t, r, i) {
            if (T.onscrollstart) {
                var s = {type: "scrollstart", current: {x: e, y: o}, request: {x: t, y: r}, end: {x: T.newscrollx, y: T.newscrolly}, speed: i};
                T.onscrollstart.call(T, s)
            }
        }, this.triggerScrollEnd = function () {
            if (T.onscrollend) {
                var e = T.getScrollLeft(), o = T.getScrollTop(), t = {type: "scrollend", current: {x: e, y: o}, end: {x: e, y: o}};
                T.onscrollend.call(T, t)
            }
        };
        var B = 0, X = 0, D = 0, A = 1, q = !1;
        if (this.onmousewheel = function (e) {
            if (T.wheelprevented || T.locked) return !1;
            if (T.railslocked) return T.debounced("checkunlock", T.resize, 250), !1;
            if (T.rail.drag) return T.cancelEvent(e);
            if ("auto" === M.oneaxismousemode && 0 !== e.deltaX && (M.oneaxismousemode = !1), M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable) return !T.railh || !T.railh.scrollable || T.onmousewheelhr(e);
            var o = f(), t = !1;
            if (M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, T.nativescrollingarea) return !0;
            var r = k(e, !1, t);
            return r && (T.checkarea = 0), r
        }, this.onmousewheelhr = function (e) {
            if (!T.wheelprevented) {
                if (T.railslocked || !T.railh.scrollable) return !0;
                if (T.rail.drag) return T.cancelEvent(e);
                var o = f(), t = !1;
                return M.preservenativescrolling && T.checkarea + 600 < o && (T.nativescrollingarea = T.isScrollable(e), t = !0), T.checkarea = o, !!T.nativescrollingarea || (T.railslocked ? T.cancelEvent(e) : k(e, !0, t))
            }
        }, this.stop = function () {
            return T.cancelScroll(), T.scrollmon && T.scrollmon.stop(), T.cursorfreezed = !1, T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y)), T.noticeCursor(), T
        }, this.getTransitionSpeed = function (e) {
            return 80 + e / 72 * M.scrollspeed | 0
        }, M.smoothscroll) if (T.ishwscroll && P.hastransition && M.usetransition && M.smoothscroll) {
            var j = "";
            this.resetTransition = function () {
                j = "", T.doc.css(P.prefixstyle + "transition-duration", "0ms")
            }, this.prepareTransition = function (e, o) {
                var t = o ? e : T.getTransitionSpeed(e), r = t + "ms";
                return j !== r && (j = r, T.doc.css(P.prefixstyle + "transition-duration", r)), t
            }, this.doScrollLeft = function (e, o) {
                var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
                T.doScrollPos(e, t, o)
            }, this.doScrollTop = function (e, o) {
                var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
                T.doScrollPos(t, e, o)
            }, this.cursorupdate = {
                running: !1, start: function () {
                    var e = this;
                    if (!e.running) {
                        e.running = !0;
                        var o = function () {
                            e.running && u(o), T.showCursor(T.getScrollTop(), T.getScrollLeft()), T.notifyScrollEvent(T.win[0])
                        };
                        u(o)
                    }
                }, stop: function () {
                    this.running = !1
                }
            }, this.doScrollPos = function (e, o, t) {
                var r = T.getScrollTop(), i = T.getScrollLeft();
                if (((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll(), M.bouncescroll ? (o < 0 ? o = o / 2 | 0 : o > T.page.maxh && (o = T.page.maxh + (o - T.page.maxh) / 2 | 0), e < 0 ? e = e / 2 | 0 : e > T.page.maxw && (e = T.page.maxw + (e - T.page.maxw) / 2 | 0)) : (o < 0 ? o = 0 : o > T.page.maxh && (o = T.page.maxh), e < 0 ? e = 0 : e > T.page.maxw && (e = T.page.maxw)), T.scrollrunning && e == T.newscrollx && o == T.newscrolly) return !1;
                T.newscrolly = o, T.newscrollx = e;
                var s = T.getScrollTop(), n = T.getScrollLeft(), l = {};
                l.x = e - n, l.y = o - s;
                var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y), c = T.prepareTransition(a);
                T.scrollrunning || (T.scrollrunning = !0, T.triggerScrollStart(n, s, e, o, c), T.cursorupdate.start()), T.scrollendtrapped = !0, P.transitionend || (T.scrollendtrapped && clearTimeout(T.scrollendtrapped), T.scrollendtrapped = setTimeout(T.onScrollTransitionEnd, c)), T.setScrollTop(T.newscrolly), T.setScrollLeft(T.newscrollx)
            }, this.cancelScroll = function () {
                if (!T.scrollendtrapped) return !0;
                var e = T.getScrollTop(), o = T.getScrollLeft();
                return T.scrollrunning = !1, P.transitionend || clearTimeout(P.transitionend), T.scrollendtrapped = !1, T.resetTransition(), T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.timerscroll && T.timerscroll.tm && clearInterval(T.timerscroll.tm), T.timerscroll = !1, T.cursorfreezed = !1, T.cursorupdate.stop(), T.showCursor(e, o), T
            }, this.onScrollTransitionEnd = function () {
                if (T.scrollendtrapped) {
                    var e = T.getScrollTop(), o = T.getScrollLeft();
                    if (e < 0 ? e = 0 : e > T.page.maxh && (e = T.page.maxh), o < 0 ? o = 0 : o > T.page.maxw && (o = T.page.maxw), e != T.newscrolly || o != T.newscrollx) return T.doScrollPos(o, e, M.snapbackspeed);
                    T.scrollrunning && T.triggerScrollEnd(), T.scrollrunning = !1, T.scrollendtrapped = !1, T.resetTransition(), T.timerscroll = !1, T.setScrollTop(e), T.railh && T.setScrollLeft(o), T.cursorupdate.stop(), T.noticeCursor(!1, e, o), T.cursorfreezed = !1
                }
            }
        } else this.doScrollLeft = function (e, o) {
            var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
            T.doScrollPos(e, t, o)
        }, this.doScrollTop = function (e, o) {
            var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
            T.doScrollPos(t, e, o)
        }, this.doScrollPos = function (e, o, t) {
            var r = T.getScrollTop(), i = T.getScrollLeft();
            ((T.newscrolly - r) * (o - r) < 0 || (T.newscrollx - i) * (e - i) < 0) && T.cancelScroll();
            var s = !1;
            if (T.bouncescroll && T.rail.visibility || (o < 0 ? (o = 0, s = !0) : o > T.page.maxh && (o = T.page.maxh, s = !0)), T.bouncescroll && T.railh.visibility || (e < 0 ? (e = 0, s = !0) : e > T.page.maxw && (e = T.page.maxw, s = !0)), T.scrollrunning && T.newscrolly === o && T.newscrollx === e) return !0;
            T.newscrolly = o, T.newscrollx = e, T.dst = {}, T.dst.x = e - i, T.dst.y = o - r, T.dst.px = i, T.dst.py = r;
            var n = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y), l = T.getTransitionSpeed(n);
            T.bzscroll = {};
            var a = s ? 1 : .58;
            T.bzscroll.x = new R(i, T.newscrollx, l, 0, 0, a, 1), T.bzscroll.y = new R(r, T.newscrolly, l, 0, 0, a, 1);
            f();
            var c = function () {
                if (T.scrollrunning) {
                    var e = T.bzscroll.y.getPos();
                    T.setScrollLeft(T.bzscroll.x.getNow()), T.setScrollTop(T.bzscroll.y.getNow()), e <= 1 ? T.timer = u(c) : (T.scrollrunning = !1, T.timer = 0, T.triggerScrollEnd())
                }
            };
            T.scrollrunning || (T.triggerScrollStart(i, r, e, o, l), T.scrollrunning = !0, T.timer = u(c))
        }, this.cancelScroll = function () {
            return T.timer && h(T.timer), T.timer = 0, T.bzscroll = !1, T.scrollrunning = !1, T
        }; else this.doScrollLeft = function (e, o) {
            var t = T.getScrollTop();
            T.doScrollPos(e, t, o)
        }, this.doScrollTop = function (e, o) {
            var t = T.getScrollLeft();
            T.doScrollPos(t, e, o)
        }, this.doScrollPos = function (e, o, t) {
            var r = e > T.page.maxw ? T.page.maxw : e;
            r < 0 && (r = 0);
            var i = o > T.page.maxh ? T.page.maxh : o;
            i < 0 && (i = 0), T.synched("scroll", function () {
                T.setScrollTop(i), T.setScrollLeft(r)
            })
        }, this.cancelScroll = function () {
        };
        this.doScrollBy = function (e, o) {
            z(0, e)
        }, this.doScrollLeftBy = function (e, o) {
            z(e, 0)
        }, this.doScrollTo = function (e, o) {
            var t = o ? Math.round(e * T.scrollratio.y) : e;
            t < 0 ? t = 0 : t > T.page.maxh && (t = T.page.maxh), T.cursorfreezed = !1, T.doScrollTop(e)
        }, this.checkContentSize = function () {
            var e = T.getContentSize();
            e.h == T.page.h && e.w == T.page.w || T.resize(!1, e)
        }, T.onscroll = function (e) {
            T.rail.drag || T.cursorfreezed || T.synched("scroll", function () {
                T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y), T.railh && (T.scroll.x = Math.round(T.getScrollLeft() / T.scrollratio.x)), T.noticeCursor()
            })
        }, T.bind(T.docscroll, "scroll", T.onscroll), this.doZoomIn = function (e) {
            if (!T.zoomactive) {
                T.zoomactive = !0, T.zoomrestore = {style: {}};
                var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"], t = T.win[0].style;
                for (var r in o) {
                    var i = o[r];
                    T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : ""
                }
                T.zoomrestore.style.width = T.win.css("width"), T.zoomrestore.style.height = T.win.css("height"), T.zoomrestore.padding = {
                    w: T.win.outerWidth() - T.win.width(),
                    h: T.win.outerHeight() - T.win.height()
                }, P.isios4 && (T.zoomrestore.scrollTop = c.scrollTop(), c.scrollTop(0)), T.win.css({position: P.isios4 ? "absolute" : "fixed", top: 0, left: 0, zIndex: s + 100, margin: 0});
                var n = T.win.css("backgroundColor");
                return ("" === n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && T.win.css("backgroundColor", "#fff"), T.rail.css({zIndex: s + 101}), T.zoom.css({zIndex: s + 102}), T.zoom.css("backgroundPosition", "0 -18px"), T.resizeZoom(), T.onzoomin && T.onzoomin.call(T), T.cancelEvent(e)
            }
        }, this.doZoomOut = function (e) {
            if (T.zoomactive) return T.zoomactive = !1, T.win.css("margin", ""), T.win.css(T.zoomrestore.style), P.isios4 && c.scrollTop(T.zoomrestore.scrollTop), T.rail.css({"z-index": T.zindex}), T.zoom.css({"z-index": T.zindex}), T.zoomrestore = !1, T.zoom.css("backgroundPosition", "0 0"), T.onResize(), T.onzoomout && T.onzoomout.call(T), T.cancelEvent(e)
        }, this.doZoom = function (e) {
            return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e)
        }, this.resizeZoom = function () {
            if (T.zoomactive) {
                var e = T.getScrollTop();
                T.win.css({width: c.width() - T.zoomrestore.padding.w + "px", height: c.height() - T.zoomrestore.padding.h + "px"}), T.onResize(), T.setScrollTop(Math.min(T.page.maxh, e))
            }
        }, this.init(), n.nicescroll.push(this)
    }, y = function (e) {
        var o = this;
        this.nc = e, this.lastx = 0, this.lasty = 0, this.speedx = 0, this.speedy = 0, this.lasttime = 0, this.steptime = 0, this.snapx = !1, this.snapy = !1, this.demulx = 0, this.demuly = 0, this.lastscrollx = -1, this.lastscrolly = -1, this.chkx = 0, this.chky = 0, this.timer = 0, this.reset = function (e, t) {
            o.stop(), o.steptime = 0, o.lasttime = f(), o.speedx = 0, o.speedy = 0, o.lastx = e, o.lasty = t, o.lastscrollx = -1, o.lastscrolly = -1
        }, this.update = function (e, t) {
            var r = f();
            o.steptime = r - o.lasttime, o.lasttime = r;
            var i = t - o.lasty, s = e - o.lastx, n = o.nc.getScrollTop() + i, l = o.nc.getScrollLeft() + s;
            o.snapx = l < 0 || l > o.nc.page.maxw, o.snapy = n < 0 || n > o.nc.page.maxh, o.speedx = s, o.speedy = i, o.lastx = e, o.lasty = t
        }, this.stop = function () {
            o.nc.unsynched("domomentum2d"), o.timer && clearTimeout(o.timer), o.timer = 0, o.lastscrollx = -1, o.lastscrolly = -1
        }, this.doSnapy = function (e, t) {
            var r = !1;
            t < 0 ? (t = 0, r = !0) : t > o.nc.page.maxh && (t = o.nc.page.maxh, r = !0), e < 0 ? (e = 0, r = !0) : e > o.nc.page.maxw && (e = o.nc.page.maxw, r = !0), r ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed) : o.nc.triggerScrollEnd()
        }, this.doMomentum = function (e) {
            var t = f(), r = e ? t + e : o.lasttime, i = o.nc.getScrollLeft(), s = o.nc.getScrollTop(), n = o.nc.page.maxh, l = o.nc.page.maxw;
            o.speedx = l > 0 ? Math.min(60, o.speedx) : 0, o.speedy = n > 0 ? Math.min(60, o.speedy) : 0;
            var a = r && t - r <= 60;
            (s < 0 || s > n || i < 0 || i > l) && (a = !1);
            var c = !(!o.speedy || !a) && o.speedy, d = !(!o.speedx || !a) && o.speedx;
            if (c || d) {
                var u = Math.max(16, o.steptime);
                if (u > 50) {
                    var h = u / 50;
                    o.speedx *= h, o.speedy *= h, u = 50
                }
                o.demulxy = 0, o.lastscrollx = o.nc.getScrollLeft(), o.chkx = o.lastscrollx, o.lastscrolly = o.nc.getScrollTop(), o.chky = o.lastscrolly;
                var p = o.lastscrollx, m = o.lastscrolly, g = function () {
                    var e = f() - t > 600 ? .04 : .02;
                    o.speedx && (p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy)), o.lastscrollx = p, (p < 0 || p > l) && (e = .1)), o.speedy && (m = Math.floor(o.lastscrolly - o.speedy * (1 - o.demulxy)), o.lastscrolly = m, (m < 0 || m > n) && (e = .1)), o.demulxy = Math.min(1, o.demulxy + e), o.nc.synched("domomentum2d", function () {
                        if (o.speedx) {
                            o.nc.getScrollLeft();
                            o.chkx = p, o.nc.setScrollLeft(p)
                        }
                        if (o.speedy) {
                            o.nc.getScrollTop();
                            o.chky = m, o.nc.setScrollTop(m)
                        }
                        o.timer || (o.nc.hideCursor(), o.doSnapy(p, m))
                    }), o.demulxy < 1 ? o.timer = setTimeout(g, u) : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m))
                };
                g()
            } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop())
        }
    }, x = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function (e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : x.call(e)
        }, set: function (e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : x.call(e, o), this
        }
    }, e.fn.scrollTop = function (e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollTop() : x.call(this)
        }
        return this.each(function () {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : x.call(n(this), e)
        })
    };
    var S = e.fn.scrollLeft;
    n.cssHooks.pageXOffset = {
        get: function (e, o, t) {
            var r = n.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : S.call(e)
        }, set: function (e, o) {
            var t = n.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : S.call(e, o), this
        }
    }, e.fn.scrollLeft = function (e) {
        if (void 0 === e) {
            var o = !!this[0] && (n.data(this[0], "__nicescroll") || !1);
            return o && o.ishwscroll ? o.getScrollLeft() : S.call(this)
        }
        return this.each(function () {
            var o = n.data(this, "__nicescroll") || !1;
            o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : S.call(n(this), e)
        })
    };
    var z = function (e) {
        var o = this;
        if (this.length = 0, this.name = "nicescrollarray", this.each = function (e) {
            return n.each(o, e), o
        }, this.push = function (e) {
            o[o.length] = e, o.length++
        }, this.eq = function (e) {
            return o[e]
        }, e) for (var t = 0; t < e.length; t++) {
            var r = n.data(e[t], "__nicescroll") || !1;
            r && (this[this.length] = r, this.length++)
        }
        return this
    };
    !function (e, o, t) {
        for (var r = 0, i = o.length; r < i; r++) t(e, o[r])
    }(z.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
        e[o] = function () {
            var e = arguments;
            return this.each(function () {
                this[o].apply(this, e)
            })
        }
    }), e.fn.getNiceScroll = function (e) {
        return void 0 === e ? new z(this) : this[e] && n.data(this[e], "__nicescroll") || !1
    }, (e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
        return void 0 !== n.data(e, "__nicescroll")
    }, n.fn.niceScroll = function (e, o) {
        void 0 !== o || "object" != typeof e || "jquery" in e || (o = e, e = !1);
        var t = new z;
        return this.each(function () {
            var r = n(this), i = n.extend({}, o);
            if (e) {
                var s = n(e);
                i.doc = s.length > 1 ? n(e, r) : s, i.win = r
            }
            !("doc" in i) || "win" in i || (i.win = r);
            var l = r.data("__nicescroll") || !1;
            l || (i.doc = i.doc || r, l = new b(i, r), r.data("__nicescroll", l)), t.push(l)
        }), 1 === t.length ? t[0] : t
    }, a.NiceScroll = {
        getjQuery: function () {
            return e
        }
    }, n.nicescroll || (n.nicescroll = new z, n.nicescroll.options = g)
});
// Input mask
!function (e) {
    function t(a) {
        if (n[a]) return n[a].exports;
        var i = n[a] = {i: a, l: !1, exports: {}};
        return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }

    var n = {};
    t.m = e, t.c = n, t.d = function (e, n, a) {
        t.o(e, n) || Object.defineProperty(e, n, {configurable: !1, enumerable: !0, get: a})
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 3)
}([function (e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator;
    !function (o) {
        i = [n(2)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r)
    }(function (e) {
        return e
    })
}, function (e, t, n) {
    "use strict";
    var a, i, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function (o) {
        i = [n(0), n(10), n(11)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r)
    }(function (e, t, n, a) {
        function i(t, n, o) {
            if (!(this instanceof i)) return new i(t, n, o);
            this.el = a, this.events = {}, this.maskset = a, this.refreshValue = !1, !0 !== o && (e.isPlainObject(t) ? n = t : (n = n || {}).alias = t, this.opts = e.extend(!0, {}, this.defaults, n), this.noMasksCache = n && n.definitions !== a, this.userOptions = n || {}, this.isRTL = this.opts.numericInput, r(this.opts.alias, n, this.opts))
        }

        function r(t, n, o) {
            var s = i.prototype.aliases[t];
            return s ? (s.alias && r(s.alias, a, o), e.extend(!0, o, s), e.extend(!0, o, n), !0) : (null === o.mask && (o.mask = t), !1)
        }

        function s(t, n) {
            function r(t, r, o) {
                var s = !1;
                if (null !== t && "" !== t || ((s = null !== o.regex) ? t = (t = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (s = !0, t = ".*")), 1 === t.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), o.repeat > 0 || "*" === o.repeat || "+" === o.repeat) {
                    var l = "*" === o.repeat ? 0 : "+" === o.repeat ? 1 : o.repeat;
                    t = o.groupmarker.start + t + o.groupmarker.end + o.quantifiermarker.start + l + "," + o.repeat + o.quantifiermarker.end
                }
                var c, u = s ? "regex_" + o.regex : o.numericInput ? t.split("").reverse().join("") : t;
                return i.prototype.masksCache[u] === a || !0 === n ? (c = {
                    mask: t,
                    maskToken: i.prototype.analyseMask(t, s, o),
                    validPositions: {},
                    _buffer: a,
                    buffer: a,
                    tests: {},
                    metadata: r,
                    maskLength: a
                }, !0 !== n && (i.prototype.masksCache[u] = c, c = e.extend(!0, {}, i.prototype.masksCache[u]))) : c = e.extend(!0, {}, i.prototype.masksCache[u]), c
            }

            if (e.isFunction(t.mask) && (t.mask = t.mask(t)), e.isArray(t.mask)) {
                if (t.mask.length > 1) {
                    t.keepStatic = null === t.keepStatic || t.keepStatic;
                    var o = t.groupmarker.start;
                    return e.each(t.numericInput ? t.mask.reverse() : t.mask, function (n, i) {
                        o.length > 1 && (o += t.groupmarker.end + t.alternatormarker + t.groupmarker.start), i.mask === a || e.isFunction(i.mask) ? o += i : o += i.mask
                    }), o += t.groupmarker.end, r(o, t.mask, t)
                }
                t.mask = t.mask.pop()
            }
            return t.mask && t.mask.mask !== a && !e.isFunction(t.mask.mask) ? r(t.mask.mask, t.mask, t) : r(t.mask, t.mask, t)
        }

        function l(r, s, c) {
            function m(e, t, n) {
                t = t || 0;
                var i, r, o, s = [], l = 0, u = v();
                do {
                    !0 === e && h().validPositions[l] ? (r = (o = h().validPositions[l]).match, i = o.locator.slice(), s.push(!0 === n ? o.input : !1 === n ? r.nativeDef : I(l, r))) : (r = (o = b(l, i, l - 1)).match, i = o.locator.slice(), (!1 === c.jitMasking || l < u || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > l) && s.push(!1 === n ? r.nativeDef : I(l, r))), l++
                } while ((Q === a || l < Q) && (null !== r.fn || "" !== r.def) || t > l);
                return "" === s[s.length - 1] && s.pop(), h().maskLength = l + 1, s
            }

            function h() {
                return s
            }

            function g(e) {
                var t = h();
                t.buffer = a, !0 !== e && (t.validPositions = {}, t.p = 0)
            }

            function v(e, t, n) {
                var i = -1, r = -1, o = n || h().validPositions;
                e === a && (e = -1);
                for (var s in o) {
                    var l = parseInt(s);
                    o[l] && (t || !0 !== o[l].generatedInput) && (l <= e && (i = l), l >= e && (r = l))
                }
                return -1 !== i && e - i > 1 || r < e ? i : r
            }

            function y(t, n, i, r) {
                var o, s = t, l = e.extend(!0, {}, h().validPositions), u = !1;
                for (h().p = t, o = n - 1; o >= s; o--) h().validPositions[o] !== a && (!0 !== i && (!h().validPositions[o].match.optionality && function (e) {
                    var t = h().validPositions[e];
                    if (t !== a && null === t.match.fn) {
                        var n = h().validPositions[e - 1], i = h().validPositions[e + 1];
                        return n !== a && i !== a
                    }
                    return !1
                }(o) || !1 === c.canClearPosition(h(), o, v(), r, c)) || delete h().validPositions[o]);
                for (g(!0), o = s + 1; o <= v();) {
                    for (; h().validPositions[s] !== a;) s++;
                    if (o < s && (o = s + 1), h().validPositions[o] === a && M(o)) o++; else {
                        var p = b(o);
                        !1 === u && l[s] && l[s].match.def === p.match.def ? (h().validPositions[s] = e.extend(!0, {}, l[s]), h().validPositions[s].input = p.input, delete h().validPositions[o], o++) : P(s, p.match.def) ? !1 !== R(s, p.input || I(o), !0) && (delete h().validPositions[o], o++, u = !0) : M(o) || (o++, s--), s++
                    }
                }
                g(!0)
            }

            function k(e, t) {
                for (var n, i = e, r = v(), o = h().validPositions[r] || S(0)[0], s = o.alternation !== a ? o.locator[o.alternation].toString().split(",") : [], l = 0; l < i.length && (!((n = i[l]).match && (c.greedy && !0 !== n.match.optionalQuantifier || (!1 === n.match.optionality || !1 === n.match.newBlockMarker) && !0 !== n.match.optionalQuantifier) && (o.alternation === a || o.alternation !== n.alternation || n.locator[o.alternation] !== a && O(n.locator[o.alternation].toString().split(","), s))) || !0 === t && (null !== n.match.fn || /[0-9a-bA-Z]/.test(n.match.def))); l++) ;
                return n
            }

            function b(e, t, n) {
                return h().validPositions[e] || k(S(e, t ? t.slice() : t, n))
            }

            function x(e) {
                return h().validPositions[e] ? h().validPositions[e] : S(e)[0]
            }

            function P(e, t) {
                for (var n = !1, a = S(e), i = 0; i < a.length; i++) if (a[i].match && a[i].match.def === t) {
                    n = !0;
                    break
                }
                return n
            }

            function S(t, n, i) {
                function r(n, i, o, l) {
                    function p(o, l, g) {
                        function v(t, n) {
                            var a = 0 === e.inArray(t, n.matches);
                            return a || e.each(n.matches, function (e, i) {
                                if (!0 === i.isQuantifier && (a = v(t, n.matches[e - 1]))) return !1
                            }), a
                        }

                        function y(t, n, i) {
                            var r, o;
                            if (h().validPositions[t - 1] && i && h().tests[t]) for (var s = h().validPositions[t - 1].locator, l = h().tests[t][0].locator, c = 0; c < i; c++) if (s[c] !== l[c]) return s.slice(i + 1);
                            return (h().tests[t] || h().validPositions[t]) && e.each(h().tests[t] || [h().validPositions[t]], function (e, t) {
                                var s = i !== a ? i : t.alternation, l = t.locator[s] !== a ? t.locator[s].toString().indexOf(n) : -1;
                                (o === a || l < o) && -1 !== l && (r = t, o = l)
                            }), r ? r.locator.slice((i !== a ? i : r.alternation) + 1) : i !== a ? y(t, n) : a
                        }

                        if (u > 1e4) throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + h().mask;
                        if (u === t && o.matches === a) return f.push({match: o, locator: l.reverse(), cd: m}), !0;
                        if (o.matches !== a) {
                            if (o.isGroup && g !== o) {
                                if (o = p(n.matches[e.inArray(o, n.matches) + 1], l)) return !0
                            } else if (o.isOptional) {
                                var k = o;
                                if (o = r(o, i, l, g)) {
                                    if (s = f[f.length - 1].match, !v(s, k)) return !0;
                                    d = !0, u = t
                                }
                            } else if (o.isAlternator) {
                                var b, x = o, P = [], S = f.slice(), w = l.length, A = i.length > 0 ? i.shift() : -1;
                                if (-1 === A || "string" == typeof A) {
                                    var E, C = u, O = i.slice(), R = [];
                                    if ("string" == typeof A) R = A.split(","); else for (E = 0; E < x.matches.length; E++) R.push(E);
                                    for (var M = 0; M < R.length; M++) {
                                        if (E = parseInt(R[M]), f = [], i = y(u, E, w) || O.slice(), !0 !== (o = p(x.matches[E] || n.matches[E], [E].concat(l), g) || o) && o !== a && R[R.length - 1] < x.matches.length) {
                                            var _ = e.inArray(o, n.matches) + 1;
                                            n.matches.length > _ && (o = p(n.matches[_], [_].concat(l.slice(1, l.length)), g)) && (R.push(_.toString()), e.each(f, function (e, t) {
                                                t.alternation = l.length - 1
                                            }))
                                        }
                                        b = f.slice(), u = C, f = [];
                                        for (var D = 0; D < b.length; D++) {
                                            var j = b[D], N = !1;
                                            j.alternation = j.alternation || w;
                                            for (var I = 0; I < P.length; I++) {
                                                var F = P[I];
                                                if ("string" != typeof A || -1 !== e.inArray(j.locator[j.alternation].toString(), R)) {
                                                    if (function (e, t) {
                                                        return e.match.nativeDef === t.match.nativeDef || e.match.def === t.match.nativeDef || e.match.nativeDef === t.match.def
                                                    }(j, F)) {
                                                        N = !0, j.alternation === F.alternation && -1 === F.locator[F.alternation].toString().indexOf(j.locator[j.alternation]) && (F.locator[F.alternation] = F.locator[F.alternation] + "," + j.locator[j.alternation], F.alternation = j.alternation), j.match.nativeDef === F.match.def && (j.locator[j.alternation] = F.locator[F.alternation], P.splice(P.indexOf(F), 1, j));
                                                        break
                                                    }
                                                    if (j.match.def === F.match.def) {
                                                        N = !1;
                                                        break
                                                    }
                                                    if (function (e, n) {
                                                        return null === e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def, h(), t, !1, c, !1)
                                                    }(j, F) || function (e, n) {
                                                        return null !== e.match.fn && null !== n.match.fn && n.match.fn.test(e.match.def.replace(/[\[\]]/g, ""), h(), t, !1, c, !1)
                                                    }(j, F)) {
                                                        j.alternation === F.alternation && -1 === j.locator[j.alternation].toString().indexOf(F.locator[F.alternation].toString().split("")[0]) && (j.na = j.na || j.locator[j.alternation].toString(), -1 === j.na.indexOf(j.locator[j.alternation].toString().split("")[0]) && (j.na = j.na + "," + j.locator[F.alternation].toString().split("")[0]), N = !0, j.locator[j.alternation] = F.locator[F.alternation].toString().split("")[0] + "," + j.locator[j.alternation], P.splice(P.indexOf(F), 0, j));
                                                        break
                                                    }
                                                }
                                            }
                                            N || P.push(j)
                                        }
                                    }
                                    "string" == typeof A && (P = e.map(P, function (t, n) {
                                        if (isFinite(n)) {
                                            var i = t.alternation, r = t.locator[i].toString().split(",");
                                            t.locator[i] = a, t.alternation = a;
                                            for (var o = 0; o < r.length; o++) -1 !== e.inArray(r[o], R) && (t.locator[i] !== a ? (t.locator[i] += ",", t.locator[i] += r[o]) : t.locator[i] = parseInt(r[o]), t.alternation = i);
                                            if (t.locator[i] !== a) return t
                                        }
                                    })), f = S.concat(P), u = t, d = f.length > 0, o = P.length > 0, i = O.slice()
                                } else o = p(x.matches[A] || n.matches[A], [A].concat(l), g);
                                if (o) return !0
                            } else if (o.isQuantifier && g !== n.matches[e.inArray(o, n.matches) - 1]) for (var T = o, G = i.length > 0 ? i.shift() : 0; G < (isNaN(T.quantifier.max) ? G + 1 : T.quantifier.max) && u <= t; G++) {
                                var B = n.matches[e.inArray(T, n.matches) - 1];
                                if (o = p(B, [G].concat(l), B)) {
                                    if (s = f[f.length - 1].match, s.optionalQuantifier = G > T.quantifier.min - 1, v(s, B)) {
                                        if (G > T.quantifier.min - 1) {
                                            d = !0, u = t;
                                            break
                                        }
                                        return !0
                                    }
                                    return !0
                                }
                            } else if (o = r(o, i, l, g)) return !0
                        } else u++
                    }

                    for (var g = i.length > 0 ? i.shift() : 0; g < n.matches.length; g++) if (!0 !== n.matches[g].isQuantifier) {
                        var v = p(n.matches[g], [g].concat(o), l);
                        if (v && u === t) return v;
                        if (u > t) break
                    }
                }

                function o(e) {
                    if (c.keepStatic && t > 0 && e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) && !0 !== e[0].match.optionality && !0 !== e[0].match.optionalQuantifier && null === e[0].match.fn && !/[0-9a-bA-Z]/.test(e[0].match.def)) {
                        if (h().validPositions[t - 1] === a) return [k(e)];
                        if (h().validPositions[t - 1].alternation === e[0].alternation) return [k(e)];
                        if (h().validPositions[t - 1]) return [k(e)]
                    }
                    return e
                }

                var s, l = h().maskToken, u = n ? i : 0, p = n ? n.slice() : [0], f = [], d = !1, m = n ? n.join("") : "";
                if (t > -1) {
                    if (n === a) {
                        for (var g, v = t - 1; (g = h().validPositions[v] || h().tests[v]) === a && v > -1;) v--;
                        g !== a && v > -1 && (p = function (t) {
                            var n = [];
                            return e.isArray(t) || (t = [t]), t.length > 0 && (t[0].alternation === a ? 0 === (n = k(t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : e.each(t, function (e, t) {
                                if ("" !== t.def) if (0 === n.length) n = t.locator.slice(); else for (var a = 0; a < n.length; a++) t.locator[a] && -1 === n[a].toString().indexOf(t.locator[a]) && (n[a] += "," + t.locator[a])
                            })), n
                        }(g), m = p.join(""), u = v)
                    }
                    if (h().tests[t] && h().tests[t][0].cd === m) return o(h().tests[t]);
                    for (var y = p.shift(); y < l.length && !(r(l[y], p, [y]) && u === t || u > t); y++) ;
                }
                return (0 === f.length || d) && f.push({
                    match: {fn: null, cardinality: 0, optionality: !0, casing: null, def: "", placeholder: ""},
                    locator: [],
                    cd: m
                }), n !== a && h().tests[t] ? o(e.extend(!0, [], f)) : (h().tests[t] = e.extend(!0, [], f), o(h().tests[t]))
            }

            function w() {
                return h()._buffer === a && (h()._buffer = m(!1, 1), h().buffer === a && (h().buffer = h()._buffer.slice())), h()._buffer
            }

            function A(e) {
                return h().buffer !== a && !0 !== e || (h().buffer = m(!0, v(), !0)), h().buffer
            }

            function E(e, t, n) {
                var i, r;
                if (!0 === e) g(), e = 0, t = n.length; else for (i = e; i < t; i++) delete h().validPositions[i];
                for (r = e, i = e; i < t; i++) if (g(!0), n[i] !== c.skipOptionalPartCharacter) {
                    var o = R(r, n[i], !0, !0);
                    !1 !== o && (g(!0), r = o.caret !== a ? o.caret : o.pos + 1)
                }
            }

            function C(t, n, a) {
                switch (c.casing || n.casing) {
                    case"upper":
                        t = t.toUpperCase();
                        break;
                    case"lower":
                        t = t.toLowerCase();
                        break;
                    case"title":
                        var r = h().validPositions[a - 1];
                        t = 0 === a || r && r.input === String.fromCharCode(i.keyCode.SPACE) ? t.toUpperCase() : t.toLowerCase();
                        break;
                    default:
                        if (e.isFunction(c.casing)) {
                            var o = Array.prototype.slice.call(arguments);
                            o.push(h().validPositions), t = c.casing.apply(this, o)
                        }
                }
                return t
            }

            function O(t, n, i) {
                for (var r, o = c.greedy ? n : n.slice(0, 1), s = !1, l = i !== a ? i.split(",") : [], u = 0; u < l.length; u++) -1 !== (r = t.indexOf(l[u])) && t.splice(r, 1);
                for (var p = 0; p < t.length; p++) if (-1 !== e.inArray(t[p], o)) {
                    s = !0;
                    break
                }
                return s
            }

            function R(t, n, r, o, s, l) {
                function u(e) {
                    var t = Z ? e.begin - e.end > 1 || e.begin - e.end == 1 : e.end - e.begin > 1 || e.end - e.begin == 1;
                    return t && 0 === e.begin && e.end === h().maskLength ? "full" : t
                }

                function p(n, i, r) {
                    var s = !1;
                    return e.each(S(n), function (l, p) {
                        for (var d = p.match, m = i ? 1 : 0, k = "", b = d.cardinality; b > m; b--) k += j(n - (b - 1));
                        if (i && (k += i), A(!0), !1 !== (s = null != d.fn ? d.fn.test(k, h(), n, r, c, u(t)) : (i === d.def || i === c.skipOptionalPartCharacter) && "" !== d.def && {
                            c: I(n, d, !0) || d.def,
                            pos: n
                        })) {
                            var x = s.c !== a ? s.c : i;
                            x = x === c.skipOptionalPartCharacter && null === d.fn ? I(n, d, !0) || d.def : x;
                            var P = n, S = A();
                            if (s.remove !== a && (e.isArray(s.remove) || (s.remove = [s.remove]), e.each(s.remove.sort(function (e, t) {
                                return t - e
                            }), function (e, t) {
                                y(t, t + 1, !0)
                            })), s.insert !== a && (e.isArray(s.insert) || (s.insert = [s.insert]), e.each(s.insert.sort(function (e, t) {
                                return e - t
                            }), function (e, t) {
                                R(t.pos, t.c, !0, o)
                            })), s.refreshFromBuffer) {
                                var w = s.refreshFromBuffer;
                                if (E(!0 === w ? w : w.start, w.end, S), s.pos === a && s.c === a) return s.pos = v(), !1;
                                if ((P = s.pos !== a ? s.pos : n) !== n) return s = e.extend(s, R(P, x, !0, o)), !1
                            } else if (!0 !== s && s.pos !== a && s.pos !== n && (P = s.pos, E(n, P, A().slice()), P !== n)) return s = e.extend(s, R(P, x, !0)), !1;
                            return (!0 === s || s.pos !== a || s.c !== a) && (l > 0 && g(!0), f(P, e.extend({}, p, {input: C(x, d, P)}), o, u(t)) || (s = !1), !1)
                        }
                    }), s
                }

                function f(t, n, i, r) {
                    if (r || c.insertMode && h().validPositions[t] !== a && i === a) {
                        var o, s = e.extend(!0, {}, h().validPositions), l = v(a, !0);
                        for (o = t; o <= l; o++) delete h().validPositions[o];
                        h().validPositions[t] = e.extend(!0, {}, n);
                        var u, p = !0, f = h().validPositions, m = !1, y = h().maskLength;
                        for (o = u = t; o <= l; o++) {
                            var k = s[o];
                            if (k !== a) for (var b = u; b < h().maskLength && (null === k.match.fn && f[o] && (!0 === f[o].match.optionalQuantifier || !0 === f[o].match.optionality) || null != k.match.fn);) {
                                if (b++, !1 === m && s[b] && s[b].match.def === k.match.def) h().validPositions[b] = e.extend(!0, {}, s[b]), h().validPositions[b].input = k.input, d(b), u = b, p = !0; else if (P(b, k.match.def)) {
                                    var x = R(b, k.input, !0, !0);
                                    p = !1 !== x, u = x.caret || x.insert ? v() : b, m = !0
                                } else if (!(p = !0 === k.generatedInput) && b >= h().maskLength - 1) break;
                                if (h().maskLength < y && (h().maskLength = y), p) break
                            }
                            if (!p) break
                        }
                        if (!p) return h().validPositions = e.extend(!0, {}, s), g(!0), !1
                    } else h().validPositions[t] = e.extend(!0, {}, n);
                    return g(!0), !0
                }

                function d(t) {
                    for (var n = t - 1; n > -1 && !h().validPositions[n]; n--) ;
                    var i, r;
                    for (n++; n < t; n++) h().validPositions[n] === a && (!1 === c.jitMasking || c.jitMasking > n) && ("" === (r = S(n, b(n - 1).locator, n - 1).slice())[r.length - 1].match.def && r.pop(), (i = k(r)) && (i.match.def === c.radixPointDefinitionSymbol || !M(n, !0) || e.inArray(c.radixPoint, A()) < n && i.match.fn && i.match.fn.test(I(n), h(), n, !1, c)) && !1 !== (x = p(n, I(n, i.match, !0) || (null == i.match.fn ? i.match.def : "" !== I(n) ? I(n) : A()[n]), !0)) && (h().validPositions[x.pos || n].generatedInput = !0))
                }

                r = !0 === r;
                var m = t;
                t.begin !== a && (m = Z && !u(t) ? t.end : t.begin);
                var x = !0, w = e.extend(!0, {}, h().validPositions);
                if (e.isFunction(c.preValidation) && !r && !0 !== o && !0 !== l && (x = c.preValidation(A(), m, n, u(t), c)), !0 === x) {
                    if (d(m), u(t) && (V(a, i.keyCode.DELETE, t, !0, !0), m = h().p), m < h().maskLength && (Q === a || m < Q) && (x = p(m, n, r), (!r || !0 === o) && !1 === x && !0 !== l)) {
                        var D = h().validPositions[m];
                        if (!D || null !== D.match.fn || D.match.def !== n && n !== c.skipOptionalPartCharacter) {
                            if ((c.insertMode || h().validPositions[_(m)] === a) && !M(m, !0)) for (var N = m + 1, F = _(m); N <= F; N++) if (!1 !== (x = p(N, n, r))) {
                                !function (t, n) {
                                    var i = h().validPositions[n];
                                    if (i) for (var r = i.locator, o = r.length, s = t; s < n; s++) if (h().validPositions[s] === a && !M(s, !0)) {
                                        var l = S(s).slice(), c = k(l, !0), u = -1;
                                        "" === l[l.length - 1].match.def && l.pop(), e.each(l, function (e, t) {
                                            for (var n = 0; n < o; n++) {
                                                if (t.locator[n] === a || !O(t.locator[n].toString().split(","), r[n].toString().split(","), t.na)) {
                                                    var i = r[n], s = c.locator[n], l = t.locator[n];
                                                    i - s > Math.abs(i - l) && (c = t);
                                                    break
                                                }
                                                u < n && (u = n, c = t)
                                            }
                                        }), (c = e.extend({}, c, {input: I(s, c.match, !0) || c.match.def})).generatedInput = !0, f(s, c, !0), h().validPositions[n] = a, p(n, i.input, !0)
                                    }
                                }(m, x.pos !== a ? x.pos : N), m = N;
                                break
                            }
                        } else x = {caret: _(m)}
                    }
                    !1 === x && c.keepStatic && !r && !0 !== s && (x = function (t, n, i) {
                        var r, s, l, u, p, f, d, m, y = e.extend(!0, {}, h().validPositions), k = !1, b = v();
                        for (u = h().validPositions[b]; b >= 0; b--) if ((l = h().validPositions[b]) && l.alternation !== a) {
                            if (r = b, s = h().validPositions[r].alternation, u.locator[l.alternation] !== l.locator[l.alternation]) break;
                            u = l
                        }
                        if (s !== a) {
                            m = parseInt(r);
                            var x = u.locator[u.alternation || s] !== a ? u.locator[u.alternation || s] : d[0];
                            x.length > 0 && (x = x.split(",")[0]);
                            var P = h().validPositions[m], w = h().validPositions[m - 1];
                            e.each(S(m, w ? w.locator : a, m - 1), function (r, l) {
                                d = l.locator[s] ? l.locator[s].toString().split(",") : [];
                                for (var u = 0; u < d.length; u++) {
                                    var b = [], S = 0, w = 0, A = !1;
                                    if (x < d[u] && (l.na === a || -1 === e.inArray(d[u], l.na.split(",")) || -1 === e.inArray(x.toString(), d))) {
                                        h().validPositions[m] = e.extend(!0, {}, l);
                                        var E = h().validPositions[m].locator;
                                        for (h().validPositions[m].locator[s] = parseInt(d[u]), null == l.match.fn ? (P.input !== l.match.def && (A = !0, !0 !== P.generatedInput && b.push(P.input)), w++, h().validPositions[m].generatedInput = !/[0-9a-bA-Z]/.test(l.match.def), h().validPositions[m].input = l.match.def) : h().validPositions[m].input = P.input, p = m + 1; p < v(a, !0) + 1; p++) (f = h().validPositions[p]) && !0 !== f.generatedInput && /[0-9a-bA-Z]/.test(f.input) ? b.push(f.input) : p < t && S++, delete h().validPositions[p];
                                        for (A && b[0] === l.match.def && b.shift(), g(!0), k = !0; b.length > 0;) {
                                            var C = b.shift();
                                            if (C !== c.skipOptionalPartCharacter && !(k = R(v(a, !0) + 1, C, !1, o, !0))) break
                                        }
                                        if (k) {
                                            h().validPositions[m].locator = E;
                                            var O = v(t) + 1;
                                            for (p = m + 1; p < v() + 1; p++) ((f = h().validPositions[p]) === a || null == f.match.fn) && p < t + (w - S) && w++;
                                            k = R((t += w - S) > O ? O : t, n, i, o, !0)
                                        }
                                        if (k) return !1;
                                        g(), h().validPositions = e.extend(!0, {}, y)
                                    }
                                }
                            })
                        }
                        return k
                    }(m, n, r)), !0 === x && (x = {pos: m})
                }
                if (e.isFunction(c.postValidation) && !1 !== x && !r && !0 !== o && !0 !== l) {
                    var T = c.postValidation(A(!0), x, c);
                    if (T.refreshFromBuffer && T.buffer) {
                        var G = T.refreshFromBuffer;
                        E(!0 === G ? G : G.start, G.end, T.buffer)
                    }
                    x = !0 === T ? x : T
                }
                return x && x.pos === a && (x.pos = m), !1 !== x && !0 !== l || (g(!0), h().validPositions = e.extend(!0, {}, w)), x
            }

            function M(e, t) {
                var n = b(e).match;
                if ("" === n.def && (n = x(e).match), null != n.fn) return n.fn;
                if (!0 !== t && e > -1) {
                    var a = S(e);
                    return a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0)
                }
                return !1
            }

            function _(e, t) {
                var n = h().maskLength;
                if (e >= n) return n;
                var a = e;
                for (S(n + 1).length > 1 && (m(!0, n + 1, !0), n = h().maskLength); ++a < n && (!0 === t && (!0 !== x(a).match.newBlockMarker || !M(a)) || !0 !== t && !M(a));) ;
                return a
            }

            function D(e, t) {
                var n, a = e;
                if (a <= 0) return 0;
                for (; --a > 0 && (!0 === t && !0 !== x(a).match.newBlockMarker || !0 !== t && !M(a) && ((n = S(a)).length < 2 || 2 === n.length && "" === n[1].match.def));) ;
                return a
            }

            function j(e) {
                return h().validPositions[e] === a ? I(e) : h().validPositions[e].input
            }

            function N(t, n, i, r, o) {
                if (r && e.isFunction(c.onBeforeWrite)) {
                    var s = c.onBeforeWrite.call(W, r, n, i, c);
                    if (s) {
                        if (s.refreshFromBuffer) {
                            var l = s.refreshFromBuffer;
                            E(!0 === l ? l : l.start, l.end, s.buffer || n), n = A(!0)
                        }
                        i !== a && (i = s.caret !== a ? s.caret : i)
                    }
                }
                t !== a && (t.inputmask._valueSet(n.join("")), i === a || r !== a && "blur" === r.type ? H(t, i, 0 === n.length) : d && r && "input" === r.type ? setTimeout(function () {
                    G(t, i)
                }, 0) : G(t, i), !0 === o && (X = !0, e(t).trigger("input")))
            }

            function I(t, n, i) {
                if ((n = n || x(t).match).placeholder !== a || !0 === i) return e.isFunction(n.placeholder) ? n.placeholder(c) : n.placeholder;
                if (null === n.fn) {
                    if (t > -1 && h().validPositions[t] === a) {
                        var r, o = S(t), s = [];
                        if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if (!0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (null === o[l].match.fn || r === a || !1 !== o[l].match.fn.test(r.match.def, h(), t, !0, c)) && (s.push(o[l]), null === o[l].match.fn && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return c.placeholder.charAt(t % c.placeholder.length)
                    }
                    return n.def
                }
                return c.placeholder.charAt(t % c.placeholder.length)
            }

            function F(t, r, o, s, l) {
                function u(e, t) {
                    return -1 !== w().slice(e, _(e)).join("").indexOf(t) && !M(e) && x(e).match.nativeDef === t.charAt(t.length - 1)
                }

                var p = s.slice(), f = "", d = -1, m = a;
                if (g(), o || !0 === c.autoUnmask) d = _(d); else {
                    var y = w().slice(0, _(-1)).join(""), k = p.join("").match(new RegExp("^" + i.escapeRegex(y), "g"));
                    k && k.length > 0 && (p.splice(0, k.length * y.length), d = _(d))
                }
                if (-1 === d ? (h().p = _(d), d = 0) : h().p = d, e.each(p, function (n, i) {
                    if (i !== a) if (h().validPositions[n] === a && p[n] === I(n) && M(n, !0) && !1 === R(n, p[n], !0, a, a, !0)) h().p++; else {
                        var r = new e.Event("_checkval");
                        r.which = i.charCodeAt(0), f += i;
                        var s = v(a, !0), l = h().validPositions[s], y = b(s + 1, l ? l.locator.slice() : a, s);
                        if (!u(d, f) || o || c.autoUnmask) {
                            var k = o ? n : null == y.match.fn && y.match.optionality && s + 1 < h().p ? s + 1 : h().p;
                            m = ae.keypressEvent.call(t, r, !0, !1, o, k), d = k + 1, f = ""
                        } else m = ae.keypressEvent.call(t, r, !0, !1, !0, s + 1);
                        if (!1 !== m && !o && e.isFunction(c.onBeforeWrite)) {
                            var x = m;
                            if (m = c.onBeforeWrite.call(W, r, A(), m.forwardPosition, c), (m = e.extend(x, m)) && m.refreshFromBuffer) {
                                var P = m.refreshFromBuffer;
                                E(!0 === P ? P : P.start, P.end, m.buffer), g(!0), m.caret && (h().p = m.caret, m.forwardPosition = m.caret)
                            }
                        }
                    }
                }), r) {
                    var P = a;
                    n.activeElement === t && m && (P = c.numericInput ? D(m.forwardPosition) : m.forwardPosition), N(t, A(), P, l || new e.Event("checkval"), l && "input" === l.type)
                }
            }

            function T(t) {
                if (t) {
                    if (t.inputmask === a) return t.value;
                    t.inputmask && t.inputmask.refreshValue && ae.setValueEvent.call(t)
                }
                var n = [], i = h().validPositions;
                for (var r in i) i[r].match && null != i[r].match.fn && n.push(i[r].input);
                var o = 0 === n.length ? "" : (Z ? n.reverse() : n).join("");
                if (e.isFunction(c.onUnMask)) {
                    var s = (Z ? A().slice().reverse() : A()).join("");
                    o = c.onUnMask.call(W, s, o, c)
                }
                return o
            }

            function G(e, i, r, o) {
                function s(e) {
                    return !0 === o || !Z || "number" != typeof e || c.greedy && "" === c.placeholder || (e = A().join("").length - e), e
                }

                var l;
                if (i === a) return e.setSelectionRange ? (i = e.selectionStart, r = e.selectionEnd) : t.getSelection ? (l = t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && l.commonAncestorContainer !== e || (i = l.startOffset, r = l.endOffset) : n.selection && n.selection.createRange && (r = (i = 0 - (l = n.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + l.text.length), {
                    begin: s(i),
                    end: s(r)
                };
                if (i.begin !== a && (r = i.end, i = i.begin), "number" == typeof i) {
                    i = s(i), r = "number" == typeof (r = s(r)) ? r : i;
                    var p = parseInt(((e.ownerDocument.defaultView || t).getComputedStyle ? (e.ownerDocument.defaultView || t).getComputedStyle(e, null) : e.currentStyle).fontSize) * r;
                    if (e.scrollLeft = p > e.scrollWidth ? p : 0, u || !1 !== c.insertMode || i !== r || r++, e.setSelectionRange) e.selectionStart = i, e.selectionEnd = r; else if (t.getSelection) {
                        if (l = n.createRange(), e.firstChild === a || null === e.firstChild) {
                            var f = n.createTextNode("");
                            e.appendChild(f)
                        }
                        l.setStart(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), l.setEnd(e.firstChild, r < e.inputmask._valueGet().length ? r : e.inputmask._valueGet().length), l.collapse(!0);
                        var d = t.getSelection();
                        d.removeAllRanges(), d.addRange(l)
                    } else e.createTextRange && ((l = e.createTextRange()).collapse(!0), l.moveEnd("character", r), l.moveStart("character", i), l.select());
                    H(e, {begin: i, end: r})
                }
            }

            function B(t) {
                var n, i, r = A(), o = r.length, s = v(), l = {}, c = h().validPositions[s], u = c !== a ? c.locator.slice() : a;
                for (n = s + 1; n < r.length; n++) u = (i = b(n, u, n - 1)).locator.slice(), l[n] = e.extend(!0, {}, i);
                var p = c && c.alternation !== a ? c.locator[c.alternation] : a;
                for (n = o - 1; n > s && (((i = l[n]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || p && (p !== l[n].locator[c.alternation] && null != i.match.fn || null === i.match.fn && i.locator[c.alternation] && O(i.locator[c.alternation].toString().split(","), p.toString().split(",")) && "" !== S(n)[0].def)) && r[n] === I(n, i.match)); n--) o--;
                return t ? {l: o, def: l[o] ? l[o].match : a} : o
            }

            function L(e) {
                for (var t, n = B(), i = e.length, r = h().validPositions[v()]; n < i && !M(n, !0) && (t = r !== a ? b(n, r.locator.slice(""), r) : x(n)) && !0 !== t.match.optionality && (!0 !== t.match.optionalQuantifier && !0 !== t.match.newBlockMarker || n + 1 === i && "" === (r !== a ? b(n + 1, r.locator.slice(""), r) : x(n + 1)).match.def);) n++;
                for (; (t = h().validPositions[n - 1]) && t && t.match.optionality && t.input === c.skipOptionalPartCharacter;) n--;
                return e.splice(n), e
            }

            function U(t) {
                if (e.isFunction(c.isComplete)) return c.isComplete(t, c);
                if ("*" === c.repeat) return a;
                var n = !1, i = B(!0), r = D(i.l);
                if (i.def === a || i.def.newBlockMarker || i.def.optionality || i.def.optionalQuantifier) {
                    n = !0;
                    for (var o = 0; o <= r; o++) {
                        var s = b(o).match;
                        if (null !== s.fn && h().validPositions[o] === a && !0 !== s.optionality && !0 !== s.optionalQuantifier || null === s.fn && t[o] !== I(o, s)) {
                            n = !1;
                            break
                        }
                    }
                }
                return n
            }

            function V(t, n, r, o, s) {
                if ((c.numericInput || Z) && (n === i.keyCode.BACKSPACE ? n = i.keyCode.DELETE : n === i.keyCode.DELETE && (n = i.keyCode.BACKSPACE), Z)) {
                    var l = r.end;
                    r.end = r.begin, r.begin = l
                }
                n === i.keyCode.BACKSPACE && (r.end - r.begin < 1 || !1 === c.insertMode) ? (r.begin = D(r.begin), h().validPositions[r.begin] !== a && h().validPositions[r.begin].input === c.groupSeparator && r.begin--) : n === i.keyCode.DELETE && r.begin === r.end && (r.end = M(r.end, !0) && h().validPositions[r.end] && h().validPositions[r.end].input !== c.radixPoint ? r.end + 1 : _(r.end) + 1, h().validPositions[r.begin] !== a && h().validPositions[r.begin].input === c.groupSeparator && r.end++), y(r.begin, r.end, !1, o), !0 !== o && function () {
                    if (c.keepStatic) {
                        for (var n = [], i = v(-1, !0), r = e.extend(!0, {}, h().validPositions), o = h().validPositions[i]; i >= 0; i--) {
                            var s = h().validPositions[i];
                            if (s) {
                                if (!0 !== s.generatedInput && /[0-9a-bA-Z]/.test(s.input) && n.push(s.input), delete h().validPositions[i], s.alternation !== a && s.locator[s.alternation] !== o.locator[s.alternation]) break;
                                o = s
                            }
                        }
                        if (i > -1) for (h().p = _(v(-1, !0)); n.length > 0;) {
                            var l = new e.Event("keypress");
                            l.which = n.pop().charCodeAt(0), ae.keypressEvent.call(t, l, !0, !1, !1, h().p)
                        } else h().validPositions = e.extend(!0, {}, r)
                    }
                }();
                var u = v(r.begin, !0);
                if (u < r.begin) h().p = _(u); else if (!0 !== o && (h().p = r.begin, !0 !== s)) for (; h().p < u && h().validPositions[h().p] === a;) h().p++
            }

            function K(a) {
                function i(e) {
                    var t, i = n.createElement("span");
                    for (var o in r) isNaN(o) && -1 !== o.indexOf("font") && (i.style[o] = r[o]);
                    i.style.textTransform = r.textTransform, i.style.letterSpacing = r.letterSpacing, i.style.position = "absolute", i.style.height = "auto", i.style.width = "auto", i.style.visibility = "hidden", i.style.whiteSpace = "nowrap", n.body.appendChild(i);
                    var s, l = a.inputmask._valueGet(), c = 0;
                    for (t = 0, s = l.length; t <= s; t++) {
                        if (i.innerHTML += l.charAt(t) || "_", i.offsetWidth >= e) {
                            var u = e - c, p = i.offsetWidth - e;
                            i.innerHTML = l.charAt(t), t = (u -= i.offsetWidth / 3) < p ? t - 1 : t;
                            break
                        }
                        c = i.offsetWidth
                    }
                    return n.body.removeChild(i), t
                }

                var r = (a.ownerDocument.defaultView || t).getComputedStyle(a, null), o = n.createElement("div");
                o.style.width = r.width, o.style.textAlign = r.textAlign, ($ = n.createElement("div")).className = "im-colormask", a.parentNode.insertBefore($, a), a.parentNode.removeChild(a), $.appendChild(o), $.appendChild(a), a.style.left = o.offsetLeft + "px", e(a).on("click", function (e) {
                    return G(a, i(e.clientX)), ae.clickEvent.call(a, [e])
                }), e(a).on("keydown", function (e) {
                    e.shiftKey || !1 === c.insertMode || setTimeout(function () {
                        H(a)
                    }, 0)
                })
            }

            function H(e, t, i) {
                function r() {
                    f || null !== s.fn && l.input !== a ? f && (null !== s.fn && l.input !== a || "" === s.def) && (f = !1, p += "</span>") : (f = !0, p += "<span class='im-static'>")
                }

                function o(a) {
                    !0 !== a && d !== t.begin || n.activeElement !== e || (p += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>")
                }

                var s, l, u, p = "", f = !1, d = 0;
                if ($ !== a) {
                    var m = A();
                    if (t === a ? t = G(e) : t.begin === a && (t = {begin: t, end: t}), !0 !== i) {
                        var g = v();
                        do {
                            o(), h().validPositions[d] ? (l = h().validPositions[d], s = l.match, u = l.locator.slice(), r(), p += m[d]) : (l = b(d, u, d - 1), s = l.match, u = l.locator.slice(), (!1 === c.jitMasking || d < g || "number" == typeof c.jitMasking && isFinite(c.jitMasking) && c.jitMasking > d) && (r(), p += I(d, s))), d++
                        } while ((Q === a || d < Q) && (null !== s.fn || "" !== s.def) || g > d || f);
                        -1 === p.indexOf("im-caret") && o(!0), f && r()
                    }
                    var y = $.getElementsByTagName("div")[0];
                    y.innerHTML = p, e.inputmask.positionColorMask(e, y)
                }
            }

            s = s || this.maskset, c = c || this.opts;
            var z, q, Q, $, W = this, Y = this.el, Z = this.isRTL, J = !1, X = !1, ee = !1, te = !1, ne = {
                on: function (t, n, r) {
                    var o = function (t) {
                        if (this.inputmask === a && "FORM" !== this.nodeName) {
                            var n = e.data(this, "_inputmask_opts");
                            n ? new i(n).mask(this) : ne.off(this)
                        } else {
                            if ("setvalue" === t.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === t.type && t.ctrlKey && 67 === t.keyCode || !1 === c.tabThrough && t.keyCode === i.keyCode.TAB))) {
                                switch (t.type) {
                                    case"input":
                                        if (!0 === X) return X = !1, t.preventDefault();
                                        break;
                                    case"keydown":
                                        J = !1, X = !1;
                                        break;
                                    case"keypress":
                                        if (!0 === J) return t.preventDefault();
                                        J = !0;
                                        break;
                                    case"click":
                                        if (p || f) {
                                            var o = this, s = arguments;
                                            return setTimeout(function () {
                                                r.apply(o, s)
                                            }, 0), !1
                                        }
                                }
                                var l = r.apply(this, arguments);
                                return !1 === l && (t.preventDefault(), t.stopPropagation()), l
                            }
                            t.preventDefault()
                        }
                    };
                    t.inputmask.events[n] = t.inputmask.events[n] || [], t.inputmask.events[n].push(o), -1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).on(n, o) : e(t).on(n, o)
                }, off: function (t, n) {
                    if (t.inputmask && t.inputmask.events) {
                        var a;
                        n ? (a = [])[n] = t.inputmask.events[n] : a = t.inputmask.events, e.each(a, function (n, a) {
                            for (; a.length > 0;) {
                                var i = a.pop();
                                -1 !== e.inArray(n, ["submit", "reset"]) ? null !== t.form && e(t.form).off(n, i) : e(t).off(n, i)
                            }
                            delete t.inputmask.events[n]
                        })
                    }
                }
            }, ae = {
                keydownEvent: function (t) {
                    var a = this, r = e(a), o = t.keyCode, s = G(a);
                    if (o === i.keyCode.BACKSPACE || o === i.keyCode.DELETE || f && o === i.keyCode.BACKSPACE_SAFARI || t.ctrlKey && o === i.keyCode.X && !function (e) {
                        var t = n.createElement("input"), a = "on" + e, i = a in t;
                        return i || (t.setAttribute(a, "return;"), i = "function" == typeof t[a]), t = null, i
                    }("cut")) t.preventDefault(), V(a, o, s), N(a, A(!0), h().p, t, a.inputmask._valueGet() !== A().join("")), a.inputmask._valueGet() === w().join("") ? r.trigger("cleared") : !0 === U(A()) && r.trigger("complete"); else if (o === i.keyCode.END || o === i.keyCode.PAGE_DOWN) {
                        t.preventDefault();
                        var l = _(v());
                        c.insertMode || l !== h().maskLength || t.shiftKey || l--, G(a, t.shiftKey ? s.begin : l, l, !0)
                    } else o === i.keyCode.HOME && !t.shiftKey || o === i.keyCode.PAGE_UP ? (t.preventDefault(), G(a, 0, t.shiftKey ? s.begin : 0, !0)) : (c.undoOnEscape && o === i.keyCode.ESCAPE || 90 === o && t.ctrlKey) && !0 !== t.altKey ? (F(a, !0, !1, z.split("")), r.trigger("click")) : o !== i.keyCode.INSERT || t.shiftKey || t.ctrlKey ? !0 === c.tabThrough && o === i.keyCode.TAB ? (!0 === t.shiftKey ? (null === x(s.begin).match.fn && (s.begin = _(s.begin)), s.end = D(s.begin, !0), s.begin = D(s.end, !0)) : (s.begin = _(s.begin, !0), s.end = _(s.begin, !0), s.end < h().maskLength && s.end--), s.begin < h().maskLength && (t.preventDefault(), G(a, s.begin, s.end))) : t.shiftKey || !1 === c.insertMode && (o === i.keyCode.RIGHT ? setTimeout(function () {
                        var e = G(a);
                        G(a, e.begin)
                    }, 0) : o === i.keyCode.LEFT && setTimeout(function () {
                        var e = G(a);
                        G(a, Z ? e.begin + 1 : e.begin - 1)
                    }, 0)) : (c.insertMode = !c.insertMode, G(a, c.insertMode || s.begin !== h().maskLength ? s.begin : s.begin - 1));
                    c.onKeyDown.call(this, t, A(), G(a).begin, c), ee = -1 !== e.inArray(o, c.ignorables)
                }, keypressEvent: function (t, n, r, o, s) {
                    var l = this, u = e(l), p = t.which || t.charCode || t.keyCode;
                    if (!(!0 === n || t.ctrlKey && t.altKey) && (t.ctrlKey || t.metaKey || ee)) return p === i.keyCode.ENTER && z !== A().join("") && (z = A().join(""), setTimeout(function () {
                        u.trigger("change")
                    }, 0)), !0;
                    if (p) {
                        46 === p && !1 === t.shiftKey && "" !== c.radixPoint && (p = c.radixPoint.charCodeAt(0));
                        var f, d = n ? {begin: s, end: s} : G(l), m = String.fromCharCode(p);
                        h().writeOutBuffer = !0;
                        var v = R(d, m, o);
                        if (!1 !== v && (g(!0), f = v.caret !== a ? v.caret : n ? v.pos + 1 : _(v.pos), h().p = f), !1 !== r && (setTimeout(function () {
                            c.onKeyValidation.call(l, p, v, c)
                        }, 0), h().writeOutBuffer && !1 !== v)) {
                            var y = A();
                            N(l, y, c.numericInput && v.caret === a ? D(f) : f, t, !0 !== n), !0 !== n && setTimeout(function () {
                                !0 === U(y) && u.trigger("complete")
                            }, 0)
                        }
                        if (t.preventDefault(), n) return !1 !== v && (v.forwardPosition = f), v
                    }
                }, pasteEvent: function (n) {
                    var a, i = this, r = n.originalEvent || n, o = e(i), s = i.inputmask._valueGet(!0), l = G(i);
                    Z && (a = l.end, l.end = l.begin, l.begin = a);
                    var u = s.substr(0, l.begin), p = s.substr(l.end, s.length);
                    if (u === (Z ? w().reverse() : w()).slice(0, l.begin).join("") && (u = ""), p === (Z ? w().reverse() : w()).slice(l.end).join("") && (p = ""), Z && (a = u, u = p, p = a), t.clipboardData && t.clipboardData.getData) s = u + t.clipboardData.getData("Text") + p; else {
                        if (!r.clipboardData || !r.clipboardData.getData) return !0;
                        s = u + r.clipboardData.getData("text/plain") + p
                    }
                    var f = s;
                    if (e.isFunction(c.onBeforePaste)) {
                        if (!1 === (f = c.onBeforePaste.call(W, s, c))) return n.preventDefault();
                        f || (f = s)
                    }
                    return F(i, !1, !1, Z ? f.split("").reverse() : f.toString().split("")), N(i, A(), _(v()), n, z !== A().join("")), !0 === U(A()) && o.trigger("complete"), n.preventDefault()
                }, inputFallBackEvent: function (t) {
                    var n = this, a = n.inputmask._valueGet();
                    if (A().join("") !== a) {
                        var r = G(n);
                        if (!1 === function (t, n, a) {
                            if ("." === n.charAt(a.begin - 1) && "" !== c.radixPoint && ((n = n.split(""))[a.begin - 1] = c.radixPoint.charAt(0), n = n.join("")), n.charAt(a.begin - 1) === c.radixPoint && n.length > A().length) {
                                var i = new e.Event("keypress");
                                return i.which = c.radixPoint.charCodeAt(0), ae.keypressEvent.call(t, i, !0, !0, !1, a.begin - 1), !1
                            }
                        }(n, a, r)) return !1;
                        if (a = a.replace(new RegExp("(" + i.escapeRegex(w().join("")) + ")*"), ""), !1 === function (t, n, a) {
                            if (p) {
                                var i = n.replace(A().join(""), "");
                                if (1 === i.length) {
                                    var r = new e.Event("keypress");
                                    return r.which = i.charCodeAt(0), ae.keypressEvent.call(t, r, !0, !0, !1, h().validPositions[a.begin - 1] ? a.begin : a.begin - 1), !1
                                }
                            }
                        }(n, a, r)) return !1;
                        r.begin > a.length && (G(n, a.length), r = G(n));
                        var o = A().join(""), s = a.substr(0, r.begin), l = a.substr(r.begin), u = o.substr(0, r.begin), f = o.substr(r.begin), d = r, m = "", g = !1;
                        if (s !== u) {
                            d.begin = 0;
                            for (var v = (g = s.length >= u.length) ? s.length : u.length, y = 0; s.charAt(y) === u.charAt(y) && y < v; y++) d.begin++;
                            g && (m += s.slice(d.begin, d.end))
                        }
                        l !== f && (l.length > f.length ? g && (d.end = d.begin) : l.length < f.length ? d.end += f.length - l.length : l.charAt(0) !== f.charAt(0) && d.end++), N(n, A(), d), m.length > 0 ? e.each(m.split(""), function (t, a) {
                            var i = new e.Event("keypress");
                            i.which = a.charCodeAt(0), ee = !1, ae.keypressEvent.call(n, i)
                        }) : (d.begin === d.end - 1 && G(n, D(d.begin + 1), d.end), t.keyCode = i.keyCode.DELETE, ae.keydownEvent.call(n, t)), t.preventDefault()
                    }
                }, setValueEvent: function (t) {
                    this.inputmask.refreshValue = !1;
                    var n = this, a = n.inputmask._valueGet(!0);
                    e.isFunction(c.onBeforeMask) && (a = c.onBeforeMask.call(W, a, c) || a), a = a.split(""), F(n, !0, !1, Z ? a.reverse() : a), z = A().join(""), (c.clearMaskOnLostFocus || c.clearIncomplete) && n.inputmask._valueGet() === w().join("") && n.inputmask._valueSet("")
                }, focusEvent: function (e) {
                    var t = this, n = t.inputmask._valueGet();
                    c.showMaskOnFocus && (!c.showMaskOnHover || c.showMaskOnHover && "" === n) && (t.inputmask._valueGet() !== A().join("") ? N(t, A(), _(v())) : !1 === te && G(t, _(v()))), !0 === c.positionCaretOnTab && !1 === te && "" !== n && (N(t, A(), G(t)), ae.clickEvent.apply(t, [e, !0])), z = A().join("")
                }, mouseleaveEvent: function (e) {
                    var t = this;
                    if (te = !1, c.clearMaskOnLostFocus && n.activeElement !== t) {
                        var a = A().slice(), i = t.inputmask._valueGet();
                        i !== t.getAttribute("placeholder") && "" !== i && (-1 === v() && i === w().join("") ? a = [] : L(a), N(t, a))
                    }
                }, clickEvent: function (t, i) {
                    function r(t) {
                        if ("" !== c.radixPoint) {
                            var n = h().validPositions;
                            if (n[t] === a || n[t].input === I(t)) {
                                if (t < _(-1)) return !0;
                                var i = e.inArray(c.radixPoint, A());
                                if (-1 !== i) {
                                    for (var r in n) if (i < r && n[r].input !== I(r)) return !1;
                                    return !0
                                }
                            }
                        }
                        return !1
                    }

                    var o = this;
                    setTimeout(function () {
                        if (n.activeElement === o) {
                            var e = G(o);
                            if (i && (Z ? e.end = e.begin : e.begin = e.end), e.begin === e.end) switch (c.positionCaretOnClick) {
                                case"none":
                                    break;
                                case"radixFocus":
                                    if (r(e.begin)) {
                                        var t = A().join("").indexOf(c.radixPoint);
                                        G(o, c.numericInput ? _(t) : t);
                                        break
                                    }
                                default:
                                    var s = e.begin, l = v(s, !0), u = _(l);
                                    if (s < u) G(o, M(s, !0) || M(s - 1, !0) ? s : _(s)); else {
                                        var p = h().validPositions[l], f = b(u, p ? p.match.locator : a, p), d = I(u, f.match);
                                        if ("" !== d && A()[u] !== d && !0 !== f.match.optionalQuantifier && !0 !== f.match.newBlockMarker || !M(u, !0) && f.match.def === d) {
                                            var m = _(u);
                                            (s >= m || s === u) && (u = m)
                                        }
                                        G(o, u)
                                    }
                            }
                        }
                    }, 0)
                }, dblclickEvent: function (e) {
                    var t = this;
                    setTimeout(function () {
                        G(t, 0, _(v()))
                    }, 0)
                }, cutEvent: function (a) {
                    var r = this, o = e(r), s = G(r), l = a.originalEvent || a, c = t.clipboardData || l.clipboardData, u = Z ? A().slice(s.end, s.begin) : A().slice(s.begin, s.end);
                    c.setData("text", Z ? u.reverse().join("") : u.join("")), n.execCommand && n.execCommand("copy"), V(r, i.keyCode.DELETE, s), N(r, A(), h().p, a, z !== A().join("")), r.inputmask._valueGet() === w().join("") && o.trigger("cleared")
                }, blurEvent: function (t) {
                    var n = e(this), i = this;
                    if (i.inputmask) {
                        var r = i.inputmask._valueGet(), o = A().slice();
                        "" !== r && (c.clearMaskOnLostFocus && (-1 === v() && r === w().join("") ? o = [] : L(o)), !1 === U(o) && (setTimeout(function () {
                            n.trigger("incomplete")
                        }, 0), c.clearIncomplete && (g(), o = c.clearMaskOnLostFocus ? [] : w().slice())), N(i, o, a, t)), z !== A().join("") && (z = o.join(""), n.trigger("change"))
                    }
                }, mouseenterEvent: function (e) {
                    var t = this;
                    te = !0, n.activeElement !== t && c.showMaskOnHover && t.inputmask._valueGet() !== A().join("") && N(t, A())
                }, submitEvent: function (e) {
                    z !== A().join("") && q.trigger("change"), c.clearMaskOnLostFocus && -1 === v() && Y.inputmask._valueGet && Y.inputmask._valueGet() === w().join("") && Y.inputmask._valueSet(""), c.removeMaskOnSubmit && (Y.inputmask._valueSet(Y.inputmask.unmaskedvalue(), !0), setTimeout(function () {
                        N(Y, A())
                    }, 0))
                }, resetEvent: function (e) {
                    Y.inputmask.refreshValue = !0, setTimeout(function () {
                        q.trigger("setvalue")
                    }, 0)
                }
            };
            i.prototype.positionColorMask = function (e, t) {
                e.style.left = t.offsetLeft + "px"
            };
            var ie;
            if (r !== a) switch (r.action) {
                case"isComplete":
                    return Y = r.el, U(A());
                case"unmaskedvalue":
                    return Y !== a && r.value === a || (ie = r.value, ie = (e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, ie, c) || ie : ie).split(""), F(a, !1, !1, Z ? ie.reverse() : ie), e.isFunction(c.onBeforeWrite) && c.onBeforeWrite.call(W, a, A(), 0, c)), T(Y);
                case"mask":
                    !function (t) {
                        ne.off(t);
                        var i = function (t, i) {
                            var r = t.getAttribute("type"), s = "INPUT" === t.tagName && -1 !== e.inArray(r, i.supportsInputType) || t.isContentEditable || "TEXTAREA" === t.tagName;
                            if (!s) if ("INPUT" === t.tagName) {
                                var l = n.createElement("input");
                                l.setAttribute("type", r), s = "text" === l.type, l = null
                            } else s = "partial";
                            return !1 !== s ? function (t) {
                                function r() {
                                    return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== v() || !0 !== i.nullable ? n.activeElement === this && i.clearMaskOnLostFocus ? (Z ? L(A().slice()).reverse() : L(A().slice())).join("") : l.call(this) : "" : l.call(this)
                                }

                                function s(t) {
                                    c.call(this, t), this.inputmask && e(this).trigger("setvalue")
                                }

                                var l, c;
                                if (!t.inputmask.__valueGet) {
                                    if (!0 !== i.noValuePatching) {
                                        if (Object.getOwnPropertyDescriptor) {
                                            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === o("test".__proto__) ? function (e) {
                                                return e.__proto__
                                            } : function (e) {
                                                return e.constructor.prototype
                                            });
                                            var u = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : a;
                                            u && u.get && u.set ? (l = u.get, c = u.set, Object.defineProperty(t, "value", {
                                                get: r,
                                                set: s,
                                                configurable: !0
                                            })) : "INPUT" !== t.tagName && (l = function () {
                                                return this.textContent
                                            }, c = function (e) {
                                                this.textContent = e
                                            }, Object.defineProperty(t, "value", {get: r, set: s, configurable: !0}))
                                        } else n.__lookupGetter__ && t.__lookupGetter__("value") && (l = t.__lookupGetter__("value"), c = t.__lookupSetter__("value"), t.__defineGetter__("value", r), t.__defineSetter__("value", s));
                                        t.inputmask.__valueGet = l, t.inputmask.__valueSet = c
                                    }
                                    t.inputmask._valueGet = function (e) {
                                        return Z && !0 !== e ? l.call(this.el).split("").reverse().join("") : l.call(this.el)
                                    }, t.inputmask._valueSet = function (e, t) {
                                        c.call(this.el, null === e || e === a ? "" : !0 !== t && Z ? e.split("").reverse().join("") : e)
                                    }, l === a && (l = function () {
                                        return this.value
                                    }, c = function (e) {
                                        this.value = e
                                    }, function (t) {
                                        if (e.valHooks && (e.valHooks[t] === a || !0 !== e.valHooks[t].inputmaskpatch)) {
                                            var n = e.valHooks[t] && e.valHooks[t].get ? e.valHooks[t].get : function (e) {
                                                return e.value
                                            }, r = e.valHooks[t] && e.valHooks[t].set ? e.valHooks[t].set : function (e, t) {
                                                return e.value = t, e
                                            };
                                            e.valHooks[t] = {
                                                get: function (e) {
                                                    if (e.inputmask) {
                                                        if (e.inputmask.opts.autoUnmask) return e.inputmask.unmaskedvalue();
                                                        var t = n(e);
                                                        return -1 !== v(a, a, e.inputmask.maskset.validPositions) || !0 !== i.nullable ? t : ""
                                                    }
                                                    return n(e)
                                                }, set: function (t, n) {
                                                    var a, i = e(t);
                                                    return a = r(t, n), t.inputmask && i.trigger("setvalue"), a
                                                }, inputmaskpatch: !0
                                            }
                                        }
                                    }(t.type), function (t) {
                                        ne.on(t, "mouseenter", function (t) {
                                            var n = e(this);
                                            this.inputmask._valueGet() !== A().join("") && n.trigger("setvalue")
                                        })
                                    }(t))
                                }
                            }(t) : t.inputmask = a, s
                        }(t, c);
                        if (!1 !== i && (Y = t, q = e(Y), -1 === (Q = Y !== a ? Y.maxLength : a) && (Q = a), !0 === c.colorMask && K(Y), d && (Y.hasOwnProperty("inputmode") && (Y.inputmode = c.inputmode, Y.setAttribute("inputmode", c.inputmode)), "rtfm" === c.androidHack && (!0 !== c.colorMask && K(Y), Y.type = "password")), !0 === i && (ne.on(Y, "submit", ae.submitEvent), ne.on(Y, "reset", ae.resetEvent), ne.on(Y, "mouseenter", ae.mouseenterEvent), ne.on(Y, "blur", ae.blurEvent), ne.on(Y, "focus", ae.focusEvent), ne.on(Y, "mouseleave", ae.mouseleaveEvent), !0 !== c.colorMask && ne.on(Y, "click", ae.clickEvent), ne.on(Y, "dblclick", ae.dblclickEvent), ne.on(Y, "paste", ae.pasteEvent), ne.on(Y, "dragdrop", ae.pasteEvent), ne.on(Y, "drop", ae.pasteEvent), ne.on(Y, "cut", ae.cutEvent), ne.on(Y, "complete", c.oncomplete), ne.on(Y, "incomplete", c.onincomplete), ne.on(Y, "cleared", c.oncleared), d || !0 === c.inputEventOnly ? Y.removeAttribute("maxLength") : (ne.on(Y, "keydown", ae.keydownEvent), ne.on(Y, "keypress", ae.keypressEvent)), ne.on(Y, "compositionstart", e.noop), ne.on(Y, "compositionupdate", e.noop), ne.on(Y, "compositionend", e.noop), ne.on(Y, "keyup", e.noop), ne.on(Y, "input", ae.inputFallBackEvent), ne.on(Y, "beforeinput", e.noop)), ne.on(Y, "setvalue", ae.setValueEvent), z = w().join(""), "" !== Y.inputmask._valueGet(!0) || !1 === c.clearMaskOnLostFocus || n.activeElement === Y)) {
                            var r = e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, Y.inputmask._valueGet(!0), c) || Y.inputmask._valueGet(!0) : Y.inputmask._valueGet(!0);
                            "" !== r && F(Y, !0, !1, Z ? r.split("").reverse() : r.split(""));
                            var s = A().slice();
                            z = s.join(""), !1 === U(s) && c.clearIncomplete && g(), c.clearMaskOnLostFocus && n.activeElement !== Y && (-1 === v() ? s = [] : L(s)), N(Y, s), n.activeElement === Y && G(Y, _(v()))
                        }
                    }(Y);
                    break;
                case"format":
                    return ie = (e.isFunction(c.onBeforeMask) ? c.onBeforeMask.call(W, r.value, c) || r.value : r.value).split(""), F(a, !0, !1, Z ? ie.reverse() : ie), r.metadata ? {
                        value: Z ? A().slice().reverse().join("") : A().join(""),
                        metadata: l.call(this, {action: "getmetadata"}, s, c)
                    } : Z ? A().slice().reverse().join("") : A().join("");
                case"isValid":
                    r.value ? (ie = r.value.split(""), F(a, !0, !0, Z ? ie.reverse() : ie)) : r.value = A().join("");
                    for (var re = A(), oe = B(), se = re.length - 1; se > oe && !M(se); se--) ;
                    return re.splice(oe, se + 1 - oe), U(re) && r.value === A().join("");
                case"getemptymask":
                    return w().join("");
                case"remove":
                    if (Y && Y.inputmask) {
                        q = e(Y), Y.inputmask._valueSet(c.autoUnmask ? T(Y) : Y.inputmask._valueGet(!0)), ne.off(Y);
                        Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Y), "value") && Y.inputmask.__valueGet && Object.defineProperty(Y, "value", {
                            get: Y.inputmask.__valueGet,
                            set: Y.inputmask.__valueSet,
                            configurable: !0
                        }) : n.__lookupGetter__ && Y.__lookupGetter__("value") && Y.inputmask.__valueGet && (Y.__defineGetter__("value", Y.inputmask.__valueGet), Y.__defineSetter__("value", Y.inputmask.__valueSet)), Y.inputmask = a
                    }
                    return Y;
                case"getmetadata":
                    if (e.isArray(s.metadata)) {
                        var le = m(!0, 0, !1).join("");
                        return e.each(s.metadata, function (e, t) {
                            if (t.mask === le) return le = t, !1
                        }), le
                    }
                    return s.metadata
            }
        }

        var c = navigator.userAgent, u = /mobile/i.test(c), p = /iemobile/i.test(c), f = /iphone/i.test(c) && !p, d = /android/i.test(c) && !p;
        return i.prototype = {
            dataAttribute: "data-inputmask",
            defaults: {
                placeholder: "_",
                optionalmarker: {start: "[", end: "]"},
                quantifiermarker: {start: "{", end: "}"},
                groupmarker: {start: "(", end: ")"},
                alternatormarker: "|",
                escapeChar: "\\",
                mask: null,
                regex: null,
                oncomplete: e.noop,
                onincomplete: e.noop,
                oncleared: e.noop,
                repeat: 0,
                greedy: !0,
                autoUnmask: !1,
                removeMaskOnSubmit: !1,
                clearMaskOnLostFocus: !0,
                insertMode: !0,
                clearIncomplete: !1,
                alias: null,
                onKeyDown: e.noop,
                onBeforeMask: null,
                onBeforePaste: function (t, n) {
                    return e.isFunction(n.onBeforeMask) ? n.onBeforeMask.call(this, t, n) : t
                },
                onBeforeWrite: null,
                onUnMask: null,
                showMaskOnFocus: !0,
                showMaskOnHover: !0,
                onKeyValidation: e.noop,
                skipOptionalPartCharacter: " ",
                numericInput: !1,
                rightAlign: !1,
                undoOnEscape: !0,
                radixPoint: "",
                radixPointDefinitionSymbol: a,
                groupSeparator: "",
                keepStatic: null,
                positionCaretOnTab: !0,
                tabThrough: !1,
                supportsInputType: ["text", "tel", "password"],
                ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
                isComplete: null,
                canClearPosition: e.noop,
                preValidation: null,
                postValidation: null,
                staticDefinitionSymbol: a,
                jitMasking: !1,
                nullable: !0,
                inputEventOnly: !1,
                noValuePatching: !1,
                positionCaretOnClick: "lvp",
                casing: null,
                inputmode: "verbatim",
                colorMask: !1,
                androidHack: !1,
                importDataAttributes: !0
            },
            definitions: {
                9: {validator: "[0-9１-９]", cardinality: 1, definitionSymbol: "*"},
                a: {validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, definitionSymbol: "*"},
                "*": {validator: "[0-9１-９A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1}
            },
            aliases: {},
            masksCache: {},
            mask: function (o) {
                function c(n, i, o, s) {
                    if (!0 === i.importDataAttributes) {
                        var l, c, u, p, f = function (e, i) {
                            null !== (i = i !== a ? i : n.getAttribute(s + "-" + e)) && ("string" == typeof i && (0 === e.indexOf("on") ? i = t[i] : "false" === i ? i = !1 : "true" === i && (i = !0)), o[e] = i)
                        }, d = n.getAttribute(s);
                        if (d && "" !== d && (d = d.replace(new RegExp("'", "g"), '"'), c = JSON.parse("{" + d + "}")), c) {
                            u = a;
                            for (p in c) if ("alias" === p.toLowerCase()) {
                                u = c[p];
                                break
                            }
                        }
                        f("alias", u), o.alias && r(o.alias, o, i);
                        for (l in i) {
                            if (c) {
                                u = a;
                                for (p in c) if (p.toLowerCase() === l.toLowerCase()) {
                                    u = c[p];
                                    break
                                }
                            }
                            f(l, u)
                        }
                    }
                    return e.extend(!0, i, o), ("rtl" === n.dir || i.rightAlign) && (n.style.textAlign = "right"), ("rtl" === n.dir || i.numericInput) && (n.dir = "ltr", n.removeAttribute("dir"), i.isRTL = !0), i
                }

                var u = this;
                return "string" == typeof o && (o = n.getElementById(o) || n.querySelectorAll(o)), o = o.nodeName ? [o] : o, e.each(o, function (t, n) {
                    var r = e.extend(!0, {}, u.opts);
                    c(n, r, e.extend(!0, {}, u.userOptions), u.dataAttribute);
                    var o = s(r, u.noMasksCache);
                    o !== a && (n.inputmask !== a && (n.inputmask.opts.autoUnmask = !0, n.inputmask.remove()), n.inputmask = new i(a, a, !0), n.inputmask.opts = r, n.inputmask.noMasksCache = u.noMasksCache, n.inputmask.userOptions = e.extend(!0, {}, u.userOptions), n.inputmask.isRTL = r.isRTL || r.numericInput, n.inputmask.el = n, n.inputmask.maskset = o, e.data(n, "_inputmask_opts", r), l.call(n.inputmask, {action: "mask"}))
                }), o && o[0] ? o[0].inputmask || this : this
            },
            option: function (t, n) {
                return "string" == typeof t ? this.opts[t] : "object" === (void 0 === t ? "undefined" : o(t)) ? (e.extend(this.userOptions, t), this.el && !0 !== n && this.mask(this.el), this) : void 0
            },
            unmaskedvalue: function (e) {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {action: "unmaskedvalue", value: e})
            },
            remove: function () {
                return l.call(this, {action: "remove"})
            },
            getemptymask: function () {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {action: "getemptymask"})
            },
            hasMaskedValue: function () {
                return !this.opts.autoUnmask
            },
            isComplete: function () {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {action: "isComplete"})
            },
            getmetadata: function () {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {action: "getmetadata"})
            },
            isValid: function (e) {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {action: "isValid", value: e})
            },
            format: function (e, t) {
                return this.maskset = this.maskset || s(this.opts, this.noMasksCache), l.call(this, {action: "format", value: e, metadata: t})
            },
            analyseMask: function (t, n, r) {
                function o(e, t, n, a) {
                    this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, this.isOptional = t || !1, this.isQuantifier = n || !1, this.isAlternator = a || !1, this.quantifier = {
                        min: 1,
                        max: 1
                    }
                }

                function s(t, o, s) {
                    s = s !== a ? s : t.matches.length;
                    var l = t.matches[s - 1];
                    if (n) 0 === o.indexOf("[") || b && /\\d|\\s|\\w]/i.test(o) || "." === o ? t.matches.splice(s++, 0, {
                        fn: new RegExp(o, r.casing ? "i" : ""),
                        cardinality: 1,
                        optionality: t.isOptional,
                        newBlockMarker: l === a || l.def !== o,
                        casing: null,
                        def: o,
                        placeholder: a,
                        nativeDef: o
                    }) : (b && (o = o[o.length - 1]), e.each(o.split(""), function (e, n) {
                        l = t.matches[s - 1], t.matches.splice(s++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: t.isOptional,
                            newBlockMarker: l === a || l.def !== n && null !== l.fn,
                            casing: null,
                            def: r.staticDefinitionSymbol || n,
                            placeholder: r.staticDefinitionSymbol !== a ? n : a,
                            nativeDef: n
                        })
                    })), b = !1; else {
                        var c = (r.definitions ? r.definitions[o] : a) || i.prototype.definitions[o];
                        if (c && !b) {
                            for (var u = c.prevalidator, p = u ? u.length : 0, f = 1; f < c.cardinality; f++) {
                                var d = p >= f ? u[f - 1] : [], m = d.validator, h = d.cardinality;
                                t.matches.splice(s++, 0, {
                                    fn: m ? "string" == typeof m ? new RegExp(m, r.casing ? "i" : "") : new function () {
                                        this.test = m
                                    } : new RegExp("."),
                                    cardinality: h || 1,
                                    optionality: t.isOptional,
                                    newBlockMarker: l === a || l.def !== (c.definitionSymbol || o),
                                    casing: c.casing,
                                    def: c.definitionSymbol || o,
                                    placeholder: c.placeholder,
                                    nativeDef: o
                                }), l = t.matches[s - 1]
                            }
                            t.matches.splice(s++, 0, {
                                fn: c.validator ? "string" == typeof c.validator ? new RegExp(c.validator, r.casing ? "i" : "") : new function () {
                                    this.test = c.validator
                                } : new RegExp("."),
                                cardinality: c.cardinality,
                                optionality: t.isOptional,
                                newBlockMarker: l === a || l.def !== (c.definitionSymbol || o),
                                casing: c.casing,
                                def: c.definitionSymbol || o,
                                placeholder: c.placeholder,
                                nativeDef: o
                            })
                        } else t.matches.splice(s++, 0, {
                            fn: null,
                            cardinality: 0,
                            optionality: t.isOptional,
                            newBlockMarker: l === a || l.def !== o && null !== l.fn,
                            casing: null,
                            def: r.staticDefinitionSymbol || o,
                            placeholder: r.staticDefinitionSymbol !== a ? o : a,
                            nativeDef: o
                        }), b = !1
                    }
                }

                function l(t) {
                    t && t.matches && e.each(t.matches, function (e, i) {
                        var o = t.matches[e + 1];
                        (o === a || o.matches === a || !1 === o.isQuantifier) && i && i.isGroup && (i.isGroup = !1, n || (s(i, r.groupmarker.start, 0), !0 !== i.openGroup && s(i, r.groupmarker.end))), l(i)
                    })
                }

                function c() {
                    if (P.length > 0) {
                        if (m = P[P.length - 1], s(m, f), m.isAlternator) {
                            h = P.pop();
                            for (var e = 0; e < h.matches.length; e++) h.matches[e].isGroup = !1;
                            P.length > 0 ? (m = P[P.length - 1]).matches.push(h) : x.matches.push(h)
                        }
                    } else s(x, f)
                }

                function u(e) {
                    e.matches = e.matches.reverse();
                    for (var t in e.matches) if (e.matches.hasOwnProperty(t)) {
                        var n = parseInt(t);
                        if (e.matches[t].isQuantifier && e.matches[n + 1] && e.matches[n + 1].isGroup) {
                            var i = e.matches[t];
                            e.matches.splice(t, 1), e.matches.splice(n + 1, 0, i)
                        }
                        e.matches[t].matches !== a ? e.matches[t] = u(e.matches[t]) : e.matches[t] = function (e) {
                            return e === r.optionalmarker.start ? e = r.optionalmarker.end : e === r.optionalmarker.end ? e = r.optionalmarker.start : e === r.groupmarker.start ? e = r.groupmarker.end : e === r.groupmarker.end && (e = r.groupmarker.start), e
                        }(e.matches[t])
                    }
                    return e
                }

                var p, f, d, m, h, g, v, y = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
                    k = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                    b = !1, x = new o, P = [], S = [];
                for (n && (r.optionalmarker.start = a, r.optionalmarker.end = a); p = n ? k.exec(t) : y.exec(t);) {
                    if (f = p[0], n) switch (f.charAt(0)) {
                        case"?":
                            f = "{0,1}";
                            break;
                        case"+":
                        case"*":
                            f = "{" + f + "}"
                    }
                    if (b) c(); else switch (f.charAt(0)) {
                        case r.escapeChar:
                            b = !0, n && c();
                            break;
                        case r.optionalmarker.end:
                        case r.groupmarker.end:
                            if (d = P.pop(), d.openGroup = !1, d !== a) if (P.length > 0) {
                                if ((m = P[P.length - 1]).matches.push(d), m.isAlternator) {
                                    h = P.pop();
                                    for (var w = 0; w < h.matches.length; w++) h.matches[w].isGroup = !1, h.matches[w].alternatorGroup = !1;
                                    P.length > 0 ? (m = P[P.length - 1]).matches.push(h) : x.matches.push(h)
                                }
                            } else x.matches.push(d); else c();
                            break;
                        case r.optionalmarker.start:
                            P.push(new o(!1, !0));
                            break;
                        case r.groupmarker.start:
                            P.push(new o(!0));
                            break;
                        case r.quantifiermarker.start:
                            var A = new o(!1, !1, !0), E = (f = f.replace(/[{}]/g, "")).split(","), C = isNaN(E[0]) ? E[0] : parseInt(E[0]),
                                O = 1 === E.length ? C : isNaN(E[1]) ? E[1] : parseInt(E[1]);
                            if ("*" !== O && "+" !== O || (C = "*" === O ? 0 : 1), A.quantifier = {min: C, max: O}, P.length > 0) {
                                var R = P[P.length - 1].matches;
                                (p = R.pop()).isGroup || ((v = new o(!0)).matches.push(p), p = v), R.push(p), R.push(A)
                            } else (p = x.matches.pop()).isGroup || (n && null === p.fn && "." === p.def && (p.fn = new RegExp(p.def, r.casing ? "i" : "")), (v = new o(!0)).matches.push(p), p = v), x.matches.push(p), x.matches.push(A);
                            break;
                        case r.alternatormarker:
                            if (P.length > 0) {
                                var M = (m = P[P.length - 1]).matches[m.matches.length - 1];
                                g = m.openGroup && (M.matches === a || !1 === M.isGroup && !1 === M.isAlternator) ? P.pop() : m.matches.pop()
                            } else g = x.matches.pop();
                            if (g.isAlternator) P.push(g); else if (g.alternatorGroup ? (h = P.pop(), g.alternatorGroup = !1) : h = new o(!1, !1, !1, !0), h.matches.push(g), P.push(h), g.openGroup) {
                                g.openGroup = !1;
                                var _ = new o(!0);
                                _.alternatorGroup = !0, P.push(_)
                            }
                            break;
                        default:
                            c()
                    }
                }
                for (; P.length > 0;) d = P.pop(), x.matches.push(d);
                return x.matches.length > 0 && (l(x), S.push(x)), (r.numericInput || r.isRTL) && u(S[0]), S
            }
        }, i.extendDefaults = function (t) {
            e.extend(!0, i.prototype.defaults, t)
        }, i.extendDefinitions = function (t) {
            e.extend(!0, i.prototype.definitions, t)
        }, i.extendAliases = function (t) {
            e.extend(!0, i.prototype.aliases, t)
        }, i.format = function (e, t, n) {
            return i(t).format(e, n)
        }, i.unmask = function (e, t) {
            return i(t).unmaskedvalue(e)
        }, i.isValid = function (e, t) {
            return i(t).isValid(e)
        }, i.remove = function (t) {
            e.each(t, function (e, t) {
                t.inputmask && t.inputmask.remove()
            })
        }, i.escapeRegex = function (e) {
            var t = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
            return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1")
        }, i.keyCode = {
            ALT: 18,
            BACKSPACE: 8,
            BACKSPACE_SAFARI: 127,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91,
            X: 88
        }, i
    })
}, function (e, t) {
    e.exports = jQuery
}, function (e, t, n) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {default: e}
    }

    n(4), n(9), n(12), n(13), n(14), n(15);
    var i = a(n(1)), r = a(n(0)), o = a(n(2));
    r.default === o.default && n(16), window.Inputmask = i.default
}, function (e, t, n) {
    var a = n(5);
    "string" == typeof a && (a = [[e.i, a, ""]]);
    var i = {hmr: !0};
    i.transform = void 0;
    n(7)(a, i);
    a.locals && (e.exports = a.locals)
}, function (e, t, n) {
    (e.exports = n(6)(void 0)).push([e.i, "span.im-caret {\r\n    -webkit-animation: 1s blink step-end infinite;\r\n    animation: 1s blink step-end infinite;\r\n}\r\n\r\n@keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    from, to {\r\n        border-right-color: black;\r\n    }\r\n    50% {\r\n        border-right-color: transparent;\r\n    }\r\n}\r\n\r\nspan.im-static {\r\n    color: grey;\r\n}\r\n\r\ndiv.im-colormask {\r\n    display: inline-block;\r\n    border-style: inset;\r\n    border-width: 2px;\r\n    -webkit-appearance: textfield;\r\n    -moz-appearance: textfield;\r\n    appearance: textfield;\r\n}\r\n\r\ndiv.im-colormask > input {\r\n    position: absolute;\r\n    display: inline-block;\r\n    background-color: transparent;\r\n    color: transparent;\r\n    -webkit-appearance: caret;\r\n    -moz-appearance: caret;\r\n    appearance: caret;\r\n    border-style: none;\r\n    left: 0; /*calculated*/\r\n}\r\n\r\ndiv.im-colormask > input:focus {\r\n    outline: none;\r\n}\r\n\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > input::selection{\r\n    background: none;\r\n}\r\ndiv.im-colormask > input::-moz-selection{\r\n    background: none;\r\n}\r\n\r\ndiv.im-colormask > div {\r\n    color: black;\r\n    display: inline-block;\r\n    width: 100px; /*calculated*/\r\n}", ""])
}, function (e, t) {
    function n(e, t) {
        var n = e[1] || "", i = e[3];
        if (!i) return n;
        if (t && "function" == typeof btoa) {
            var r = a(i), o = i.sources.map(function (e) {
                return "/*# sourceURL=" + i.sourceRoot + e + " */"
            });
            return [n].concat(o).concat([r]).join("\n")
        }
        return [n].join("\n")
    }

    function a(e) {
        return "/*# " + ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) + " */"
    }

    e.exports = function (e) {
        var t = [];
        return t.toString = function () {
            return this.map(function (t) {
                var a = n(t, e);
                return t[2] ? "@media " + t[2] + "{" + a + "}" : a
            }).join("")
        }, t.i = function (e, n) {
            "string" == typeof e && (e = [[null, e, ""]]);
            for (var a = {}, i = 0; i < this.length; i++) {
                var r = this[i][0];
                "number" == typeof r && (a[r] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var o = e[i];
                "number" == typeof o[0] && a[o[0]] || (n && !o[2] ? o[2] = n : n && (o[2] = "(" + o[2] + ") and (" + n + ")"), t.push(o))
            }
        }, t
    }
}, function (e, t, n) {
    function a(e, t) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n], i = m[a.id];
            if (i) {
                i.refs++;
                for (o = 0; o < i.parts.length; o++) i.parts[o](a.parts[o]);
                for (; o < a.parts.length; o++) i.parts.push(u(a.parts[o], t))
            } else {
                for (var r = [], o = 0; o < a.parts.length; o++) r.push(u(a.parts[o], t));
                m[a.id] = {id: a.id, refs: 1, parts: r}
            }
        }
    }

    function i(e, t) {
        for (var n = [], a = {}, i = 0; i < e.length; i++) {
            var r = e[i], o = t.base ? r[0] + t.base : r[0], s = {css: r[1], media: r[2], sourceMap: r[3]};
            a[o] ? a[o].parts.push(s) : n.push(a[o] = {id: o, parts: [s]})
        }
        return n
    }

    function r(e, t) {
        var n = g(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var a = k[k.length - 1];
        if ("top" === e.insertAt) a ? a.nextSibling ? n.insertBefore(t, a.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), k.push(t); else if ("bottom" === e.insertAt) n.appendChild(t); else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = g(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, i)
        }
    }

    function o(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = k.indexOf(e);
        t >= 0 && k.splice(t, 1)
    }

    function s(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", c(t, e.attrs), r(e, t), t
    }

    function l(e) {
        var t = document.createElement("link");
        return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", c(t, e.attrs), r(e, t), t
    }

    function c(e, t) {
        Object.keys(t).forEach(function (n) {
            e.setAttribute(n, t[n])
        })
    }

    function u(e, t) {
        var n, a, i, r;
        if (t.transform && e.css) {
            if (!(r = t.transform(e.css))) return function () {
            };
            e.css = r
        }
        if (t.singleton) {
            var c = y++;
            n = v || (v = s(t)), a = p.bind(null, n, c, !1), i = p.bind(null, n, c, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = l(t), a = d.bind(null, n, t), i = function () {
            o(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = s(t), a = f.bind(null, n), i = function () {
            o(n)
        });
        return a(e), function (t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                a(e = t)
            } else i()
        }
    }

    function p(e, t, n, a) {
        var i = n ? "" : a.css;
        if (e.styleSheet) e.styleSheet.cssText = x(t, i); else {
            var r = document.createTextNode(i), o = e.childNodes;
            o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(r, o[t]) : e.appendChild(r)
        }
    }

    function f(e, t) {
        var n = t.css, a = t.media;
        if (a && e.setAttribute("media", a), e.styleSheet) e.styleSheet.cssText = n; else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
        }
    }

    function d(e, t, n) {
        var a = n.css, i = n.sourceMap, r = void 0 === t.convertToAbsoluteUrls && i;
        (t.convertToAbsoluteUrls || r) && (a = b(a)), i && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        var o = new Blob([a], {type: "text/css"}), s = e.href;
        e.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
    }

    var m = {}, h = function (e) {
        var t;
        return function () {
            return void 0 === t && (t = e.apply(this, arguments)), t
        }
    }(function () {
        return window && document && document.all && !window.atob
    }), g = function (e) {
        var t = {};
        return function (n) {
            if (void 0 === t[n]) {
                var a = e.call(this, n);
                if (a instanceof window.HTMLIFrameElement) try {
                    a = a.contentDocument.head
                } catch (e) {
                    a = null
                }
                t[n] = a
            }
            return t[n]
        }
    }(function (e) {
        return document.querySelector(e)
    }), v = null, y = 0, k = [], b = n(8);
    e.exports = function (e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = h()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = i(e, t);
        return a(n, t), function (e) {
            for (var r = [], o = 0; o < n.length; o++) {
                var s = n[o];
                (l = m[s.id]).refs--, r.push(l)
            }
            e && a(i(e, t), t);
            for (o = 0; o < r.length; o++) {
                var l = r[o];
                if (0 === l.refs) {
                    for (var c = 0; c < l.parts.length; c++) l.parts[c]();
                    delete m[l.id]
                }
            }
        }
    };
    var x = function () {
        var e = [];
        return function (t, n) {
            return e[t] = n, e.filter(Boolean).join("\n")
        }
    }()
}, function (e, t) {
    e.exports = function (e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host, a = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
            var i = t.trim().replace(/^"(.*)"$/, function (e, t) {
                return t
            }).replace(/^'(.*)'$/, function (e, t) {
                return t
            });
            if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)) return e;
            var r;
            return r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : a + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")"
        })
    }
}, function (e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator;
    !function (o) {
        i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r)
    }(function (e, t) {
        function n(e) {
            return isNaN(e) || 29 === new Date(e, 2, 0).getDate()
        }

        return t.extendAliases({
            "dd/mm/yyyy": {
                mask: "1/2/y", placeholder: "dd/mm/yyyy", regex: {
                    val1pre: new RegExp("[0-3]"), val1: new RegExp("0[1-9]|[12][0-9]|3[01]"), val2pre: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|[12][0-9]|3[01])" + n + "[01])")
                    }, val2: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|[12][0-9])" + n + "(0[1-9]|1[012]))|(30" + n + "(0[13-9]|1[012]))|(31" + n + "(0[13578]|1[02]))")
                    }
                }, leapday: "29/02/", separator: "/", yearrange: {minyear: 1900, maxyear: 2099}, isInYearRange: function (e, t, n) {
                    if (isNaN(e)) return !1;
                    var a = parseInt(e.concat(t.toString().slice(e.length))), i = parseInt(e.concat(n.toString().slice(e.length)));
                    return !isNaN(a) && (t <= a && a <= n) || !isNaN(i) && (t <= i && i <= n)
                }, determinebaseyear: function (e, t, n) {
                    var a = (new Date).getFullYear();
                    if (e > a) return e;
                    if (t < a) {
                        for (var i = t.toString().slice(0, 2), r = t.toString().slice(2, 4); t < i + n;) i--;
                        var o = i + r;
                        return e > o ? e : o
                    }
                    if (e <= a && a <= t) {
                        for (var s = a.toString().slice(0, 2); t < s + n;) s--;
                        var l = s + n;
                        return l < e ? e : l
                    }
                    return a
                }, onKeyDown: function (n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        var s = new Date;
                        o.val(s.getDate().toString() + (s.getMonth() + 1).toString() + s.getFullYear().toString()), o.trigger("setvalue")
                    }
                }, getFrontValue: function (e, t, n) {
                    for (var a = 0, i = 0, r = 0; r < e.length && "2" !== e.charAt(r); r++) {
                        var o = n.definitions[e.charAt(r)];
                        o ? (a += i, i = o.cardinality) : i++
                    }
                    return t.join("").substr(a, i)
                }, postValidation: function (e, t, a) {
                    var i, r, o = e.join("");
                    return 0 === a.mask.indexOf("y") ? (r = o.substr(0, 4), i = o.substring(4, 10)) : (r = o.substring(6, 10), i = o.substr(0, 6)), t && (i !== a.leapday || n(r))
                }, definitions: {
                    1: {
                        validator: function (e, t, n, a, i) {
                            var r = i.regex.val1.test(e);
                            return a || r || e.charAt(1) !== i.separator && -1 === "-./".indexOf(e.charAt(1)) || !(r = i.regex.val1.test("0" + e.charAt(0))) ? r : (t.buffer[n - 1] = "0", {
                                refreshFromBuffer: {
                                    start: n - 1,
                                    end: n
                                }, pos: n, c: e.charAt(0)
                            })
                        }, cardinality: 2, prevalidator: [{
                            validator: function (e, t, n, a, i) {
                                var r = e;
                                isNaN(t.buffer[n + 1]) || (r += t.buffer[n + 1]);
                                var o = 1 === r.length ? i.regex.val1pre.test(r) : i.regex.val1.test(r);
                                if (o && t.validPositions[n] && (i.regex.val2(i.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), !a && !o) {
                                    if (o = i.regex.val1.test(e + "0")) return t.buffer[n] = e, t.buffer[++n] = "0", {pos: n, c: "0"};
                                    if (o = i.regex.val1.test("0" + e)) return t.buffer[n] = "0", n++, {pos: n}
                                }
                                return o
                            }, cardinality: 1
                        }]
                    }, 2: {
                        validator: function (e, t, n, a, i) {
                            var r = i.getFrontValue(t.mask, t.buffer, i);
                            -1 !== r.indexOf(i.placeholder[0]) && (r = "01" + i.separator);
                            var o = i.regex.val2(i.separator).test(r + e);
                            return a || o || e.charAt(1) !== i.separator && -1 === "-./".indexOf(e.charAt(1)) || !(o = i.regex.val2(i.separator).test(r + "0" + e.charAt(0))) ? o : (t.buffer[n - 1] = "0", {
                                refreshFromBuffer: {
                                    start: n - 1,
                                    end: n
                                }, pos: n, c: e.charAt(0)
                            })
                        }, cardinality: 2, prevalidator: [{
                            validator: function (e, t, n, a, i) {
                                isNaN(t.buffer[n + 1]) || (e += t.buffer[n + 1]);
                                var r = i.getFrontValue(t.mask, t.buffer, i);
                                -1 !== r.indexOf(i.placeholder[0]) && (r = "01" + i.separator);
                                var o = 1 === e.length ? i.regex.val2pre(i.separator).test(r + e) : i.regex.val2(i.separator).test(r + e);
                                return o && t.validPositions[n] && (i.regex.val2(i.separator).test(e + t.validPositions[n].input) || (t.validPositions[n].input = "0" === e ? "1" : "0")), a || o || !(o = i.regex.val2(i.separator).test(r + "0" + e)) ? o : (t.buffer[n] = "0", n++, {pos: n})
                            }, cardinality: 1
                        }]
                    }, y: {
                        validator: function (e, t, n, a, i) {
                            return i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear)
                        }, cardinality: 4, prevalidator: [{
                            validator: function (e, t, n, a, i) {
                                var r = i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);
                                if (!a && !r) {
                                    var o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e + "0").toString().slice(0, 1);
                                    if (r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(0), {pos: n};
                                    if (o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e + "0").toString().slice(0, 2), r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(0), t.buffer[n++] = o.charAt(1), {pos: n}
                                }
                                return r
                            }, cardinality: 1
                        }, {
                            validator: function (e, t, n, a, i) {
                                var r = i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear);
                                if (!a && !r) {
                                    var o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e).toString().slice(0, 2);
                                    if (r = i.isInYearRange(e[0] + o[1] + e[1], i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n++] = o.charAt(1), {pos: n};
                                    if (o = i.determinebaseyear(i.yearrange.minyear, i.yearrange.maxyear, e).toString().slice(0, 2), r = i.isInYearRange(o + e, i.yearrange.minyear, i.yearrange.maxyear)) return t.buffer[n - 1] = o.charAt(0), t.buffer[n++] = o.charAt(1), t.buffer[n++] = e.charAt(0), {
                                        refreshFromBuffer: {
                                            start: n - 3,
                                            end: n
                                        }, pos: n
                                    }
                                }
                                return r
                            }, cardinality: 2
                        }, {
                            validator: function (e, t, n, a, i) {
                                return i.isInYearRange(e, i.yearrange.minyear, i.yearrange.maxyear)
                            }, cardinality: 3
                        }]
                    }
                }, insertMode: !1, autoUnmask: !1
            },
            "mm/dd/yyyy": {
                placeholder: "mm/dd/yyyy", alias: "dd/mm/yyyy", regex: {
                    val2pre: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
                    }, val2: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                }, leapday: "02/29/", onKeyDown: function (n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        var s = new Date;
                        o.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), o.trigger("setvalue")
                    }
                }
            },
            "yyyy/mm/dd": {
                mask: "y/1/2", placeholder: "yyyy/mm/dd", alias: "mm/dd/yyyy", leapday: "/02/29", onKeyDown: function (n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        var s = new Date;
                        o.val(s.getFullYear().toString() + (s.getMonth() + 1).toString() + s.getDate().toString()), o.trigger("setvalue")
                    }
                }
            },
            "dd.mm.yyyy": {mask: "1.2.y", placeholder: "dd.mm.yyyy", leapday: "29.02.", separator: ".", alias: "dd/mm/yyyy"},
            "dd-mm-yyyy": {mask: "1-2-y", placeholder: "dd-mm-yyyy", leapday: "29-02-", separator: "-", alias: "dd/mm/yyyy"},
            "mm.dd.yyyy": {mask: "1.2.y", placeholder: "mm.dd.yyyy", leapday: "02.29.", separator: ".", alias: "mm/dd/yyyy"},
            "mm-dd-yyyy": {mask: "1-2-y", placeholder: "mm-dd-yyyy", leapday: "02-29-", separator: "-", alias: "mm/dd/yyyy"},
            "yyyy.mm.dd": {mask: "y.1.2", placeholder: "yyyy.mm.dd", leapday: ".02.29", separator: ".", alias: "yyyy/mm/dd"},
            "yyyy-mm-dd": {mask: "y-1-2", placeholder: "yyyy-mm-dd", leapday: "-02-29", separator: "-", alias: "yyyy/mm/dd"},
            datetime: {
                mask: "1/2/y h:s",
                placeholder: "dd/mm/yyyy hh:mm",
                alias: "dd/mm/yyyy",
                regex: {
                    hrspre: new RegExp("[012]"),
                    hrs24: new RegExp("2[0-4]|1[3-9]"),
                    hrs: new RegExp("[01][0-9]|2[0-4]"),
                    ampm: new RegExp("^[a|p|A|P][m|M]"),
                    mspre: new RegExp("[0-5]"),
                    ms: new RegExp("[0-5][0-9]")
                },
                timeseparator: ":",
                hourFormat: "24",
                definitions: {
                    h: {
                        validator: function (e, t, n, a, i) {
                            if ("24" === i.hourFormat && 24 === parseInt(e, 10)) return t.buffer[n - 1] = "0", t.buffer[n] = "0", {refreshFromBuffer: {start: n - 1, end: n}, c: "0"};
                            var r = i.regex.hrs.test(e);
                            if (!a && !r && (e.charAt(1) === i.timeseparator || -1 !== "-.:".indexOf(e.charAt(1))) && (r = i.regex.hrs.test("0" + e.charAt(0)))) return t.buffer[n - 1] = "0", t.buffer[n] = e.charAt(0), n++, {
                                refreshFromBuffer: {
                                    start: n - 2,
                                    end: n
                                }, pos: n, c: i.timeseparator
                            };
                            if (r && "24" !== i.hourFormat && i.regex.hrs24.test(e)) {
                                var o = parseInt(e, 10);
                                return 24 === o ? (t.buffer[n + 5] = "a", t.buffer[n + 6] = "m") : (t.buffer[n + 5] = "p", t.buffer[n + 6] = "m"), (o -= 12) < 10 ? (t.buffer[n] = o.toString(), t.buffer[n - 1] = "0") : (t.buffer[n] = o.toString().charAt(1), t.buffer[n - 1] = o.toString().charAt(0)), {
                                    refreshFromBuffer: {
                                        start: n - 1,
                                        end: n + 6
                                    }, c: t.buffer[n]
                                }
                            }
                            return r
                        }, cardinality: 2, prevalidator: [{
                            validator: function (e, t, n, a, i) {
                                var r = i.regex.hrspre.test(e);
                                return a || r || !(r = i.regex.hrs.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {pos: n})
                            }, cardinality: 1
                        }]
                    }, s: {
                        validator: "[0-5][0-9]", cardinality: 2, prevalidator: [{
                            validator: function (e, t, n, a, i) {
                                var r = i.regex.mspre.test(e);
                                return a || r || !(r = i.regex.ms.test("0" + e)) ? r : (t.buffer[n] = "0", n++, {pos: n})
                            }, cardinality: 1
                        }]
                    }, t: {
                        validator: function (e, t, n, a, i) {
                            return i.regex.ampm.test(e + "m")
                        }, casing: "lower", cardinality: 1
                    }
                },
                insertMode: !1,
                autoUnmask: !1
            },
            datetime12: {mask: "1/2/y h:s t\\m", placeholder: "dd/mm/yyyy hh:mm xm", alias: "datetime", hourFormat: "12"},
            "mm/dd/yyyy hh:mm xm": {
                mask: "1/2/y h:s t\\m", placeholder: "mm/dd/yyyy hh:mm xm", alias: "datetime12", regex: {
                    val2pre: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
                    }, val2: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                }, leapday: "02/29/", onKeyDown: function (n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey && n.keyCode === t.keyCode.RIGHT) {
                        var s = new Date;
                        o.val((s.getMonth() + 1).toString() + s.getDate().toString() + s.getFullYear().toString()), o.trigger("setvalue")
                    }
                }
            },
            "hh:mm t": {mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12"},
            "h:s t": {mask: "h:s t\\m", placeholder: "hh:mm xm", alias: "datetime", hourFormat: "12"},
            "hh:mm:ss": {mask: "h:s:s", placeholder: "hh:mm:ss", alias: "datetime", autoUnmask: !1},
            "hh:mm": {mask: "h:s", placeholder: "hh:mm", alias: "datetime", autoUnmask: !1},
            date: {alias: "dd/mm/yyyy"},
            "mm/yyyy": {mask: "1/y", placeholder: "mm/yyyy", leapday: "donotuse", separator: "/", alias: "mm/dd/yyyy"},
            shamsi: {
                regex: {
                    val2pre: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "[0-3])")
                    }, val2: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + n + "30)|((0[1-6])" + n + "31)")
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                }, yearrange: {minyear: 1300, maxyear: 1499}, mask: "y/1/2", leapday: "/12/30", placeholder: "yyyy/mm/dd", alias: "mm/dd/yyyy", clearIncomplete: !0
            },
            "yyyy-mm-dd hh:mm:ss": {
                mask: "y-1-2 h:s:s", placeholder: "yyyy-mm-dd hh:mm:ss", alias: "datetime", separator: "-", leapday: "-02-29", regex: {
                    val2pre: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[13-9]|1[012])" + n + "[0-3])|(02" + n + "[0-2])")
                    }, val2: function (e) {
                        var n = t.escapeRegex.call(this, e);
                        return new RegExp("((0[1-9]|1[012])" + n + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + n + "30)|((0[13578]|1[02])" + n + "31)")
                    }, val1pre: new RegExp("[01]"), val1: new RegExp("0[1-9]|1[012]")
                }, onKeyDown: function (e, t, n, a) {
                }
            }
        }), t
    })
}, function (e, t, n) {
    "use strict";
    var a;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 !== (a = function () {
        return window
    }.call(t, n, t, e)) && (e.exports = a)
}, function (e, t, n) {
    "use strict";
    var a;
    "function" == typeof Symbol && Symbol.iterator;
    void 0 !== (a = function () {
        return document
    }.call(t, n, t, e)) && (e.exports = a)
}, function (e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator;
    !function (o) {
        i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r)
    }(function (e, t) {
        return t.extendDefinitions({
            A: {validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper"},
            "&": {validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper"},
            "#": {validator: "[0-9A-Fa-f]", cardinality: 1, casing: "upper"}
        }), t.extendAliases({
            url: {definitions: {i: {validator: ".", cardinality: 1}}, mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}", insertMode: !1, autoUnmask: !1, inputmode: "url"},
            ip: {
                mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]", definitions: {
                    i: {
                        validator: function (e, t, n, a, i) {
                            return n - 1 > -1 && "." !== t.buffer[n - 1] ? (e = t.buffer[n - 1] + e, e = n - 2 > -1 && "." !== t.buffer[n - 2] ? t.buffer[n - 2] + e : "0" + e) : e = "00" + e, new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                        }, cardinality: 1
                    }
                }, onUnMask: function (e, t, n) {
                    return e
                }, inputmode: "numeric"
            },
            email: {
                mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
                greedy: !1,
                onBeforePaste: function (e, t) {
                    return (e = e.toLowerCase()).replace("mailto:", "")
                },
                definitions: {"*": {validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]", cardinality: 1, casing: "lower"}, "-": {validator: "[0-9A-Za-z-]", cardinality: 1, casing: "lower"}},
                onUnMask: function (e, t, n) {
                    return e
                },
                inputmode: "email"
            },
            mac: {mask: "##:##:##:##:##:##"},
            vin: {mask: "V{13}9{4}", definitions: {V: {validator: "[A-HJ-NPR-Za-hj-npr-z\\d]", cardinality: 1, casing: "upper"}}, clearIncomplete: !0, autoUnmask: !0}
        }), t
    })
}, function (e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator;
    !function (o) {
        i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r)
    }(function (e, t, n) {
        function a(e, n) {
            for (var a = "", i = 0; i < e.length; i++) t.prototype.definitions[e.charAt(i)] || n.definitions[e.charAt(i)] || n.optionalmarker.start === e.charAt(i) || n.optionalmarker.end === e.charAt(i) || n.quantifiermarker.start === e.charAt(i) || n.quantifiermarker.end === e.charAt(i) || n.groupmarker.start === e.charAt(i) || n.groupmarker.end === e.charAt(i) || n.alternatormarker === e.charAt(i) ? a += "\\" + e.charAt(i) : a += e.charAt(i);
            return a
        }

        return t.extendAliases({
            numeric: {
                mask: function (e) {
                    if (0 !== e.repeat && isNaN(e.integerDigits) && (e.integerDigits = e.repeat), e.repeat = 0, e.groupSeparator === e.radixPoint && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), " " === e.groupSeparator && (e.skipOptionalPartCharacter = n), e.autoGroup = e.autoGroup && "" !== e.groupSeparator, e.autoGroup && ("string" == typeof e.groupSize && isFinite(e.groupSize) && (e.groupSize = parseInt(e.groupSize)), isFinite(e.integerDigits))) {
                        var t = Math.floor(e.integerDigits / e.groupSize), i = e.integerDigits % e.groupSize;
                        e.integerDigits = parseInt(e.integerDigits) + (0 === i ? t - 1 : t), e.integerDigits < 1 && (e.integerDigits = "*")
                    }
                    e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && !1 === e.integerOptional && (e.positionCaretOnClick = "lvp"), e.definitions[";"] = e.definitions["~"], e.definitions[";"].definitionSymbol = "~", !0 === e.numericInput && (e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e.decimalProtect = !1);
                    var r = "[+]";
                    if (r += a(e.prefix, e), !0 === e.integerOptional ? r += "~{1," + e.integerDigits + "}" : r += "~{" + e.integerDigits + "}", e.digits !== n) {
                        e.radixPointDefinitionSymbol = e.decimalProtect ? ":" : e.radixPoint;
                        var o = e.digits.toString().split(",");
                        isFinite(o[0] && o[1] && isFinite(o[1])) ? r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional ? r += "[" + e.radixPointDefinitionSymbol + ";{1," + e.digits + "}]" : r += e.radixPointDefinitionSymbol + ";{" + e.digits + "}")
                    }
                    return r += a(e.suffix, e), r += "[-]", e.greedy = !1, r
                },
                placeholder: "",
                greedy: !1,
                digits: "*",
                digitsOptional: !0,
                enforceDigitsOnBlur: !1,
                radixPoint: ".",
                positionCaretOnClick: "radixFocus",
                groupSize: 3,
                groupSeparator: "",
                autoGroup: !1,
                allowMinus: !0,
                negationSymbol: {front: "-", back: ""},
                integerDigits: "+",
                integerOptional: !0,
                prefix: "",
                suffix: "",
                rightAlign: !0,
                decimalProtect: !0,
                min: null,
                max: null,
                step: 1,
                insertMode: !0,
                autoUnmask: !1,
                unmaskAsNumber: !1,
                inputmode: "numeric",
                preValidation: function (t, a, i, r, o) {
                    if ("-" === i || i === o.negationSymbol.front) return !0 === o.allowMinus && (o.isNegative = o.isNegative === n || !o.isNegative, "" === t.join("") || {caret: a, dopost: !0});
                    if (!1 === r && i === o.radixPoint && o.digits !== n && (isNaN(o.digits) || parseInt(o.digits) > 0)) {
                        var s = e.inArray(o.radixPoint, t);
                        if (-1 !== s) return !0 === o.numericInput ? a === s : {caret: s + 1}
                    }
                    return !0
                },
                postValidation: function (a, i, r) {
                    var o = r.suffix.split(""), s = r.prefix.split("");
                    if (i.pos === n && i.caret !== n && !0 !== i.dopost) return i;
                    var l = i.caret !== n ? i.caret : i.pos, c = a.slice();
                    r.numericInput && (l = c.length - l - 1, c = c.reverse());
                    var u = c[l];
                    if (u === r.groupSeparator && (u = c[l += 1]), l === c.length - r.suffix.length - 1 && u === r.radixPoint) return i;
                    u !== n && u !== r.radixPoint && u !== r.negationSymbol.front && u !== r.negationSymbol.back && (c[l] = "?", r.prefix.length > 0 && l >= (!1 === r.isNegative ? 1 : 0) && l < r.prefix.length - 1 + (!1 === r.isNegative ? 1 : 0) ? s[l - (!1 === r.isNegative ? 1 : 0)] = "?" : r.suffix.length > 0 && l >= c.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0) && (o[l - (c.length - r.suffix.length - (!1 === r.isNegative ? 1 : 0))] = "?")), s = s.join(""), o = o.join("");
                    var p = c.join("").replace(s, "");
                    if (p = p.replace(o, ""), p = p.replace(new RegExp(t.escapeRegex(r.groupSeparator), "g"), ""), p = p.replace(new RegExp("[-" + t.escapeRegex(r.negationSymbol.front) + "]", "g"), ""), p = p.replace(new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"), ""), isNaN(r.placeholder) && (p = p.replace(new RegExp(t.escapeRegex(r.placeholder), "g"), "")), p.length > 1 && 1 !== p.indexOf(r.radixPoint) && ("0" === u && (p = p.replace(/^\?/g, "")), p = p.replace(/^0/g, "")), p.charAt(0) === r.radixPoint && "" !== r.radixPoint && !0 !== r.numericInput && (p = "0" + p), "" !== p) {
                        if (p = p.split(""), (!r.digitsOptional || r.enforceDigitsOnBlur && "blur" === i.event) && isFinite(r.digits)) {
                            var f = e.inArray(r.radixPoint, p), d = e.inArray(r.radixPoint, c);
                            -1 === f && (p.push(r.radixPoint), f = p.length - 1);
                            for (var m = 1; m <= r.digits; m++) r.digitsOptional && (!r.enforceDigitsOnBlur || "blur" !== i.event) || p[f + m] !== n && p[f + m] !== r.placeholder.charAt(0) ? -1 !== d && c[d + m] !== n && (p[f + m] = p[f + m] || c[d + m]) : p[f + m] = i.placeholder || r.placeholder.charAt(0)
                        }
                        if (!0 !== r.autoGroup || "" === r.groupSeparator || u === r.radixPoint && i.pos === n && !i.dopost) p = p.join(""); else {
                            var h = p[p.length - 1] === r.radixPoint && i.c === r.radixPoint;
                            p = t(function (e, t) {
                                var n = "";
                                if (n += "(" + t.groupSeparator + "*{" + t.groupSize + "}){*}", "" !== t.radixPoint) {
                                    var a = e.join("").split(t.radixPoint);
                                    a[1] && (n += t.radixPoint + "*{" + a[1].match(/^\d*\??\d*/)[0].length + "}")
                                }
                                return n
                            }(p, r), {
                                numericInput: !0,
                                jitMasking: !0,
                                definitions: {"*": {validator: "[0-9?]", cardinality: 1}}
                            }).format(p.join("")), h && (p += r.radixPoint), p.charAt(0) === r.groupSeparator && p.substr(1)
                        }
                    }
                    if (r.isNegative && "blur" === i.event && (r.isNegative = "0" !== p), p = s + p, p += o, r.isNegative && (p = r.negationSymbol.front + p, p += r.negationSymbol.back), p = p.split(""), u !== n) if (u !== r.radixPoint && u !== r.negationSymbol.front && u !== r.negationSymbol.back) (l = e.inArray("?", p)) > -1 ? p[l] = u : l = i.caret || 0; else if (u === r.radixPoint || u === r.negationSymbol.front || u === r.negationSymbol.back) {
                        var g = e.inArray(u, p);
                        -1 !== g && (l = g)
                    }
                    r.numericInput && (l = p.length - l - 1, p = p.reverse());
                    var v = {caret: u === n || i.pos !== n ? l + (r.numericInput ? -1 : 1) : l, buffer: p, refreshFromBuffer: i.dopost || a.join("") !== p.join("")};
                    return v.refreshFromBuffer ? v : i
                },
                onBeforeWrite: function (a, i, r, o) {
                    if (a) switch (a.type) {
                        case"keydown":
                            return o.postValidation(i, {caret: r, dopost: !0}, o);
                        case"blur":
                        case"checkval":
                            var s;
                            if (function (e) {
                                e.parseMinMaxOptions === n && (null !== e.min && (e.min = e.min.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), null !== e.max && (e.max = e.max.toString().replace(new RegExp(t.escapeRegex(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done")
                            }(o), null !== o.min || null !== o.max) {
                                if (s = o.onUnMask(i.join(""), n, e.extend({}, o, {unmaskAsNumber: !0})), null !== o.min && s < o.min) return o.isNegative = o.min < 0, o.postValidation(o.min.toString().replace(".", o.radixPoint).split(""), {
                                    caret: r,
                                    dopost: !0,
                                    placeholder: "0"
                                }, o);
                                if (null !== o.max && s > o.max) return o.isNegative = o.max < 0, o.postValidation(o.max.toString().replace(".", o.radixPoint).split(""), {
                                    caret: r,
                                    dopost: !0,
                                    placeholder: "0"
                                }, o)
                            }
                            return o.postValidation(i, {caret: r, placeholder: "0", event: "blur"}, o);
                        case"_checkval":
                            return {caret: r}
                    }
                },
                regex: {
                    integerPart: function (e, n) {
                        return n ? new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?") : new RegExp("[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+")
                    }, integerNPart: function (e) {
                        return new RegExp("[\\d" + t.escapeRegex(e.groupSeparator) + t.escapeRegex(e.placeholder.charAt(0)) + "]+")
                    }
                },
                definitions: {
                    "~": {
                        validator: function (e, a, i, r, o, s) {
                            var l = r ? new RegExp("[0-9" + t.escapeRegex(o.groupSeparator) + "]").test(e) : new RegExp("[0-9]").test(e);
                            if (!0 === l) {
                                if (!0 !== o.numericInput && a.validPositions[i] !== n && "~" === a.validPositions[i].match.def && !s) {
                                    var c = a.buffer.join(""),
                                        u = (c = (c = c.replace(new RegExp("[-" + t.escapeRegex(o.negationSymbol.front) + "]", "g"), "")).replace(new RegExp(t.escapeRegex(o.negationSymbol.back) + "$"), "")).split(o.radixPoint);
                                    u.length > 1 && (u[1] = u[1].replace(/0/g, o.placeholder.charAt(0))), "0" === u[0] && (u[0] = u[0].replace(/0/g, o.placeholder.charAt(0))), c = u[0] + o.radixPoint + u[1] || "";
                                    var p = a._buffer.join("");
                                    for (c === o.radixPoint && (c = p); null === c.match(t.escapeRegex(p) + "$");) p = p.slice(1);
                                    l = (c = (c = c.replace(p, "")).split(""))[i] === n ? {pos: i, remove: i} : {pos: i}
                                }
                            } else r || e !== o.radixPoint || a.validPositions[i - 1] !== n || (a.buffer[i] = "0", l = {pos: i + 1});
                            return l
                        }, cardinality: 1
                    }, "+": {
                        validator: function (e, t, n, a, i) {
                            return i.allowMinus && ("-" === e || e === i.negationSymbol.front)
                        }, cardinality: 1, placeholder: ""
                    }, "-": {
                        validator: function (e, t, n, a, i) {
                            return i.allowMinus && e === i.negationSymbol.back
                        }, cardinality: 1, placeholder: ""
                    }, ":": {
                        validator: function (e, n, a, i, r) {
                            var o = "[" + t.escapeRegex(r.radixPoint) + "]", s = new RegExp(o).test(e);
                            return s && n.validPositions[a] && n.validPositions[a].match.placeholder === r.radixPoint && (s = {caret: a + 1}), s
                        }, cardinality: 1, placeholder: function (e) {
                            return e.radixPoint
                        }
                    }
                },
                onUnMask: function (e, n, a) {
                    if ("" === n && !0 === a.nullable) return n;
                    var i = e.replace(a.prefix, "");
                    return i = i.replace(a.suffix, ""), i = i.replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""), "" !== a.placeholder.charAt(0) && (i = i.replace(new RegExp(a.placeholder.charAt(0), "g"), "0")), a.unmaskAsNumber ? ("" !== a.radixPoint && -1 !== i.indexOf(a.radixPoint) && (i = i.replace(t.escapeRegex.call(this, a.radixPoint), ".")), i = i.replace(new RegExp("^" + t.escapeRegex(a.negationSymbol.front)), "-"), i = i.replace(new RegExp(t.escapeRegex(a.negationSymbol.back) + "$"), ""), Number(i)) : i
                },
                isComplete: function (e, n) {
                    var a = e.join("");
                    if (e.slice().join("") !== a) return !1;
                    var i = a.replace(n.prefix, "");
                    return i = i.replace(n.suffix, ""), i = i.replace(new RegExp(t.escapeRegex(n.groupSeparator), "g"), ""), "," === n.radixPoint && (i = i.replace(t.escapeRegex(n.radixPoint), ".")), isFinite(i)
                },
                onBeforeMask: function (e, a) {
                    if (a.isNegative = n, e = e.toString().charAt(e.length - 1) === a.radixPoint ? e.toString().substr(0, e.length - 1) : e.toString(), "" !== a.radixPoint && isFinite(e)) {
                        var i = e.split("."), r = "" !== a.groupSeparator ? parseInt(a.groupSize) : 0;
                        2 === i.length && (i[0].length > r || i[1].length > r || i[0].length <= r && i[1].length < r) && (e = e.replace(".", a.radixPoint))
                    }
                    var o = e.match(/,/g), s = e.match(/\./g);
                    if (e = s && o ? s.length > o.length ? (e = e.replace(/\./g, "")).replace(",", a.radixPoint) : o.length > s.length ? (e = e.replace(/,/g, "")).replace(".", a.radixPoint) : e.indexOf(".") < e.indexOf(",") ? e.replace(/\./g, "") : e.replace(/,/g, "") : e.replace(new RegExp(t.escapeRegex(a.groupSeparator), "g"), ""), 0 === a.digits && (-1 !== e.indexOf(".") ? e = e.substring(0, e.indexOf(".")) : -1 !== e.indexOf(",") && (e = e.substring(0, e.indexOf(",")))), "" !== a.radixPoint && isFinite(a.digits) && -1 !== e.indexOf(a.radixPoint)) {
                        var l = e.split(a.radixPoint)[1].match(new RegExp("\\d*"))[0];
                        if (parseInt(a.digits) < l.toString().length) {
                            var c = Math.pow(10, parseInt(a.digits));
                            e = e.replace(t.escapeRegex(a.radixPoint), "."), e = (e = Math.round(parseFloat(e) * c) / c).toString().replace(".", a.radixPoint)
                        }
                    }
                    return e
                },
                canClearPosition: function (e, t, n, a, i) {
                    var r = e.validPositions[t],
                        o = r.input !== i.radixPoint || null !== e.validPositions[t].match.fn && !1 === i.decimalProtect || r.input === i.radixPoint && e.validPositions[t + 1] && null === e.validPositions[t + 1].match.fn || isFinite(r.input) || t === n || r.input === i.groupSeparator || r.input === i.negationSymbol.front || r.input === i.negationSymbol.back;
                    return !o || "+" !== r.match.nativeDef && "-" !== r.match.nativeDef || (i.isNegative = !1), o
                },
                onKeyDown: function (n, a, i, r) {
                    var o = e(this);
                    if (n.ctrlKey) switch (n.keyCode) {
                        case t.keyCode.UP:
                            o.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(r.step)), o.trigger("setvalue");
                            break;
                        case t.keyCode.DOWN:
                            o.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(r.step)), o.trigger("setvalue")
                    }
                }
            },
            currency: {prefix: "$ ", groupSeparator: ",", alias: "numeric", placeholder: "0", autoGroup: !0, digits: 2, digitsOptional: !1, clearMaskOnLostFocus: !1},
            decimal: {alias: "numeric"},
            integer: {alias: "numeric", digits: 0, radixPoint: ""},
            percentage: {alias: "numeric", digits: 2, digitsOptional: !0, radixPoint: ".", placeholder: "0", autoGroup: !1, min: 0, max: 100, suffix: " %", allowMinus: !1}
        }), t
    })
}, function (e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator;
    !function (o) {
        i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r)
    }(function (e, t) {
        function n(e, t) {
            var n = (e.mask || e).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""), a = (t.mask || t).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
                i = (e.mask || e).split("#")[0], r = (t.mask || t).split("#")[0];
            return 0 === r.indexOf(i) ? -1 : 0 === i.indexOf(r) ? 1 : n.localeCompare(a)
        }

        var a = t.prototype.analyseMask;
        return t.prototype.analyseMask = function (t, n, i) {
            function r(e, n, a) {
                n = n || "", a = a || s, "" !== n && (a[n] = {});
                for (var i = "", o = a[n] || a, l = e.length - 1; l >= 0; l--) o[i = (t = e[l].mask || e[l]).substr(0, 1)] = o[i] || [], o[i].unshift(t.substr(1)), e.splice(l, 1);
                for (var c in o) o[c].length > 500 && r(o[c].slice(), c, o)
            }

            function o(t) {
                var n = "", a = [];
                for (var r in t) e.isArray(t[r]) ? 1 === t[r].length ? a.push(r + t[r]) : a.push(r + i.groupmarker.start + t[r].join(i.groupmarker.end + i.alternatormarker + i.groupmarker.start) + i.groupmarker.end) : a.push(r + o(t[r]));
                return 1 === a.length ? n += a[0] : n += i.groupmarker.start + a.join(i.groupmarker.end + i.alternatormarker + i.groupmarker.start) + i.groupmarker.end, n
            }

            var s = {};
            return i.phoneCodes && (i.phoneCodes && i.phoneCodes.length > 1e3 && (r((t = t.substr(1, t.length - 2)).split(i.groupmarker.end + i.alternatormarker + i.groupmarker.start)), t = o(s)), t = t.replace(/9/g, "\\9")), a.call(this, t, n, i)
        }, t.extendAliases({
            abstractphone: {
                groupmarker: {start: "<", end: ">"}, countrycode: "", phoneCodes: [], mask: function (e) {
                    return e.definitions = {"#": t.prototype.definitions[9]}, e.phoneCodes.sort(n)
                }, keepStatic: !0, onBeforeMask: function (e, t) {
                    var n = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                    return (n.indexOf(t.countrycode) > 1 || -1 === n.indexOf(t.countrycode)) && (n = "+" + t.countrycode + n), n
                }, onUnMask: function (e, t, n) {
                    return e.replace(/[()#-]/g, "")
                }, inputmode: "tel"
            }
        }), t
    })
}, function (e, t, n) {
    "use strict";
    var a, i, r;
    "function" == typeof Symbol && Symbol.iterator;
    !function (o) {
        i = [n(0), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r)
    }(function (e, t) {
        return t.extendAliases({
            Regex: {
                mask: "r",
                greedy: !1,
                repeat: "*",
                regex: null,
                regexTokens: null,
                tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
                quantifierFilter: /[0-9]+[^,]/,
                isComplete: function (e, t) {
                    return new RegExp(t.regex, t.casing ? "i" : "").test(e.join(""))
                },
                definitions: {
                    r: {
                        validator: function (t, n, a, i, r) {
                            function o(e, t) {
                                this.matches = [], this.isGroup = e || !1, this.isQuantifier = t || !1, this.quantifier = {min: 1, max: 1}, this.repeaterPart = void 0
                            }

                            function s(t, n) {
                                var a = !1;
                                n && (p += "(", d++);
                                for (var i = 0; i < t.matches.length; i++) {
                                    var o = t.matches[i];
                                    if (!0 === o.isGroup) a = s(o, !0); else if (!0 === o.isQuantifier) {
                                        var c = e.inArray(o, t.matches), u = t.matches[c - 1], f = p;
                                        if (isNaN(o.quantifier.max)) {
                                            for (; o.repeaterPart && o.repeaterPart !== p && o.repeaterPart.length > p.length && !(a = s(u, !0));) ;
                                            (a = a || s(u, !0)) && (o.repeaterPart = p), p = f + o.quantifier.max
                                        } else {
                                            for (var m = 0, h = o.quantifier.max - 1; m < h && !(a = s(u, !0)); m++) ;
                                            p = f + "{" + o.quantifier.min + "," + o.quantifier.max + "}"
                                        }
                                    } else if (void 0 !== o.matches) for (var g = 0; g < o.length && !(a = s(o[g], n)); g++) ; else {
                                        var v;
                                        if ("[" == o.charAt(0)) {
                                            v = p, v += o;
                                            for (b = 0; b < d; b++) v += ")";
                                            a = (x = new RegExp("^(" + v + ")$", r.casing ? "i" : "")).test(l)
                                        } else for (var y = 0, k = o.length; y < k; y++) if ("\\" !== o.charAt(y)) {
                                            v = p, v = (v += o.substr(0, y + 1)).replace(/\|$/, "");
                                            for (var b = 0; b < d; b++) v += ")";
                                            var x = new RegExp("^(" + v + ")$", r.casing ? "i" : "");
                                            if (a = x.test(l)) break
                                        }
                                        p += o
                                    }
                                    if (a) break
                                }
                                return n && (p += ")", d--), a
                            }

                            var l, c, u = n.buffer.slice(), p = "", f = !1, d = 0;
                            null === r.regexTokens && function () {
                                var e, t, n = new o, a = [];
                                for (r.regexTokens = []; e = r.tokenizer.exec(r.regex);) switch ((t = e[0]).charAt(0)) {
                                    case"(":
                                        a.push(new o(!0));
                                        break;
                                    case")":
                                        c = a.pop(), a.length > 0 ? a[a.length - 1].matches.push(c) : n.matches.push(c);
                                        break;
                                    case"{":
                                    case"+":
                                    case"*":
                                        var i = new o(!1, !0), s = (t = t.replace(/[{}]/g, "")).split(","), l = isNaN(s[0]) ? s[0] : parseInt(s[0]),
                                            u = 1 === s.length ? l : isNaN(s[1]) ? s[1] : parseInt(s[1]);
                                        if (i.quantifier = {min: l, max: u}, a.length > 0) {
                                            var p = a[a.length - 1].matches;
                                            (e = p.pop()).isGroup || ((c = new o(!0)).matches.push(e), e = c), p.push(e), p.push(i)
                                        } else (e = n.matches.pop()).isGroup || ((c = new o(!0)).matches.push(e), e = c), n.matches.push(e), n.matches.push(i);
                                        break;
                                    default:
                                        a.length > 0 ? a[a.length - 1].matches.push(t) : n.matches.push(t)
                                }
                                n.matches.length > 0 && r.regexTokens.push(n)
                            }(), u.splice(a, 0, t), l = u.join("");
                            for (var m = 0; m < r.regexTokens.length; m++) {
                                var h = r.regexTokens[m];
                                if (f = s(h, h.isGroup)) break
                            }
                            return f
                        }, cardinality: 1
                    }
                }
            }
        }), t
    })
}, function (e, t, n) {
    "use strict";
    var a, i, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    !function (o) {
        i = [n(2), n(1)], void 0 !== (r = "function" == typeof (a = o) ? a.apply(t, i) : a) && (e.exports = r)
    }(function (e, t) {
        return void 0 === e.fn.inputmask && (e.fn.inputmask = function (n, a) {
            var i, r = this[0];
            if (void 0 === a && (a = {}), "string" == typeof n) switch (n) {
                case"unmaskedvalue":
                    return r && r.inputmask ? r.inputmask.unmaskedvalue() : e(r).val();
                case"remove":
                    return this.each(function () {
                        this.inputmask && this.inputmask.remove()
                    });
                case"getemptymask":
                    return r && r.inputmask ? r.inputmask.getemptymask() : "";
                case"hasMaskedValue":
                    return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();
                case"isComplete":
                    return !r || !r.inputmask || r.inputmask.isComplete();
                case"getmetadata":
                    return r && r.inputmask ? r.inputmask.getmetadata() : void 0;
                case"setvalue":
                    e(r).val(a), r && void 0 === r.inputmask && e(r).triggerHandler("setvalue");
                    break;
                case"option":
                    if ("string" != typeof a) return this.each(function () {
                        if (void 0 !== this.inputmask) return this.inputmask.option(a)
                    });
                    if (r && void 0 !== r.inputmask) return r.inputmask.option(a);
                    break;
                default:
                    return a.alias = n, i = new t(a), this.each(function () {
                        i.mask(this)
                    })
            } else {
                if ("object" == (void 0 === n ? "undefined" : o(n))) return i = new t(n), void 0 === n.mask && void 0 === n.alias ? this.each(function () {
                    if (void 0 !== this.inputmask) return this.inputmask.option(n);
                    i.mask(this)
                }) : this.each(function () {
                    i.mask(this)
                });
                if (void 0 === n) return this.each(function () {
                    (i = new t(a)).mask(this)
                })
            }
        }), e.fn.inputmask
    })
}]);
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
  * https://jqueryvalidation.org/
  * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    a.extend(a.fn, {
        validate: function (b) {
            if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = a.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
                c.submitButton = b.currentTarget, a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function (b) {
                function d() {
                    var d, e;
                    return c.submitButton && (c.settings.submitHandler || c.formSubmitted) && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), !c.settings.submitHandler || (e = c.settings.submitHandler.call(c, c.currentForm, b), d && d.remove(), void 0 !== e && e)
                }

                return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        }, valid: function () {
            var b, c, d;
            return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
                b = c.element(this) && b, b || (d = d.concat(c.errorList))
            }), c.errorList = d), b
        }, rules: function (b, c) {
            var d, e, f, g, h, i, j = this[0];
            if (null != j && (!j.form && j.hasAttribute("contenteditable") && (j.form = this.closest("form")[0], j.name = this.attr("name")), null != j.form)) {
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case"add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case"remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function (a, b) {
                            i[b] = f[b], delete f[b]
                        }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g)), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
            }
        }
    }), a.extend(a.expr.pseudos || a.expr[":"], {
        blank: function (b) {
            return !a.trim("" + a(b).val())
        }, filled: function (b) {
            var c = a(b).val();
            return null !== c && !!a.trim("" + c)
        }, unchecked: function (b) {
            return !a(b).prop("checked")
        }
    }), a.validator = function (b, c) {
        this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
    }, a.validator.format = function (b, c) {
        return 1 === arguments.length ? function () {
            var c = a.makeArray(arguments);
            return c.unshift(b), a.validator.format.apply(this, c)
        } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
            b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
                return c
            })
        }), b)
    }, a.extend(a.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: a([]),
            errorLabelContainer: a([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (a) {
                this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function (a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function (b, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
            },
            onclick: function (a) {
                a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
            },
            unhighlight: function (b, c, d) {
                "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
            }
        },
        setDefaults: function (b) {
            a.extend(a.validator.defaults, b)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: a.validator.format("Please enter no more than {0} characters."),
            minlength: a.validator.format("Please enter at least {0} characters."),
            rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
            range: a.validator.format("Please enter a value between {0} and {1}."),
            max: a.validator.format("Please enter a value less than or equal to {0}."),
            min: a.validator.format("Please enter a value greater than or equal to {0}."),
            step: a.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function b(b) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = a(this).attr("name"));
                    var c = a.data(this.form, "validator"), d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
                    e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                }

                this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var c, d = this.groups = {};
                a.each(this.settings.groups, function (b, c) {
                    "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
                        d[c] = b
                    })
                }), c = this.settings.rules, a.each(c, function (b, d) {
                    c[b] = a.validator.normalizeRule(d)
                }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            }, element: function (b) {
                var c, d, e = this.clean(b), f = this.validationTargetFor(e), g = this, h = !0;
                return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
                    b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = g.check(e) && h))
                }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
            }, showErrors: function (b) {
                if (b) {
                    var c = this;
                    a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
                        return {message: a, element: c.findByName(b)[0]}
                    }), this.successList = a.grep(this.successList, function (a) {
                        return !(a.name in b)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(b)
            }, resetElements: function (a) {
                var b;
                if (this.settings.unhighlight) for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass); else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (a) {
                var b, c = 0;
                for (b in a) void 0 !== a[b] && null !== a[b] && a[b] !== !1 && c++;
                return c
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (a) {
                a.not(this.containers).text(""), this.addWrapper(a).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (b) {
                }
            }, findLastActive: function () {
                var b = this.lastActive;
                return b && 1 === a.grep(this.errorList, function (a) {
                    return a.element.name === b.name
                }).length && b
            }, elements: function () {
                var b = this, c = {};
                return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var d = this.name || a(this).attr("name");
                    return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0], this.name = d), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
                })
            }, clean: function (b) {
                return a(b)[0]
            }, errors: function () {
                var b = this.settings.errorClass.split(" ").join(".");
                return a(this.settings.errorElement + "." + b, this.errorContext)
            }, resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
            }, reset: function () {
                this.resetInternals(), this.currentElements = a([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (a) {
                this.reset(), this.toHide = this.errorsFor(a)
            }, elementValue: function (b) {
                var c, d, e = a(b), f = b.type;
                return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
            }, check: function (b) {
                b = this.validationTargetFor(this.clean(b));
                var c, d, e, f, g = a(b).rules(), h = a.map(g, function (a, b) {
                    return b
                }).length, i = !1, j = this.elementValue(b);
                if ("function" == typeof g.normalizer ? f = g.normalizer : "function" == typeof this.settings.normalizer && (f = this.settings.normalizer), f) {
                    if (j = f.call(b, j), "string" != typeof j) throw new TypeError("The normalizer should return a string value.");
                    delete g.normalizer
                }
                for (d in g) {
                    e = {method: d, parameters: g[d]};
                    try {
                        if (c = a.validator.methods[d].call(this, j, b, e.parameters), "dependency-mismatch" === c && 1 === h) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
                        if (!c) return this.formatAndAdd(b, e), !1
                    } catch (k) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", k), k instanceof TypeError && (k.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), k
                    }
                }
                if (!i) return this.objectLength(g) && this.successList.push(b), !0
            }, customDataMessage: function (b, c) {
                return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
            }, customMessage: function (a, b) {
                var c = this.settings.messages[a];
                return c && (c.constructor === String ? c : c[b])
            }, findDefined: function () {
                for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a]
            }, defaultMessage: function (b, c) {
                "string" == typeof c && (c = {method: c});
                var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
                    e = /\$?\{(\d+)\}/g;
                return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
            }, formatAndAdd: function (a, b) {
                var c = this.defaultMessage(a, b);
                this.errorList.push({message: c, element: a, method: b.method}), this.errorMap[a.name] = c, this.submitted[a.name] = c
            }, addWrapper: function (a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            }, defaultShowErrors: function () {
                var a, b, c;
                for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return a(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (b, c) {
                var d, e, f, g, h = this.errorsFor(b), i = this.idOrName(b), j = a(b).attr("aria-describedby");
                h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
                    c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
                })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
            }, errorsFor: function (b) {
                var c = this.escapeCssMeta(this.idOrName(b)), d = a(b).attr("aria-describedby"), e = "label[for='" + c + "'], label[for='" + c + "'] *";
                return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
            }, escapeCssMeta: function (a) {
                return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            }, idOrName: function (a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            }, validationTargetFor: function (b) {
                return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
            }, checkable: function (a) {
                return /radio|checkbox/i.test(a.type)
            }, findByName: function (b) {
                return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
            }, getLength: function (b, c) {
                switch (c.nodeName.toLowerCase()) {
                    case"select":
                        return a("option:selected", c).length;
                    case"input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return b.length
            }, depend: function (a, b) {
                return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
            }, dependTypes: {
                "boolean": function (a) {
                    return a
                }, string: function (b, c) {
                    return !!a(b, c.form).length
                }, "function": function (a, b) {
                    return a(b)
                }
            }, optional: function (b) {
                var c = this.elementValue(b);
                return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
            }, startRequest: function (b) {
                this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
            }, stopRequest: function (b, c) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.submitButton && a("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (b, c) {
                return c = "string" == typeof c && c || "remote", a.data(b, "previousValue") || a.data(b, "previousValue", {old: null, valid: !0, message: this.defaultMessage(b, {method: c})})
            }, destroy: function () {
                this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (b, c) {
            b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
        },
        classRules: function (b) {
            var c = {}, d = a(b).attr("class");
            return d && a.each(d.split(" "), function () {
                this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function (a, b, c, d) {
            /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
        },
        attributeRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function (b) {
            var c, d, e = {}, f = a(b), g = b.getAttribute("type");
            for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
            return e
        },
        staticRules: function (b) {
            var c = {}, d = a.data(b.form, "validator");
            return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
        },
        normalizeRules: function (b, c) {
            return a.each(b, function (d, e) {
                if (e === !1) return void delete b[d];
                if (e.param || e.depends) {
                    var f = !0;
                    switch (typeof e.depends) {
                        case"string":
                            f = !!a(e.depends, c.form).length;
                            break;
                        case"function":
                            f = e.depends.call(c, c)
                    }
                    f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
                }
            }), a.each(b, function (d, e) {
                b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
            }), a.each(["minlength", "maxlength"], function () {
                b[this] && (b[this] = Number(b[this]))
            }), a.each(["rangelength", "range"], function () {
                var c;
                b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
            }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
        },
        normalizeRule: function (b) {
            if ("string" == typeof b) {
                var c = {};
                a.each(b.split(/\s/), function () {
                    c[this] = !0
                }), b = c
            }
            return b
        },
        addMethod: function (b, c, d) {
            a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
        },
        methods: {
            required: function (b, c, d) {
                if (!this.depend(d, c)) return "dependency-mismatch";
                if ("select" === c.nodeName.toLowerCase()) {
                    var e = a(c).val();
                    return e && e.length > 0
                }
                return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
            }, email: function (a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            }, url: function (a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
            }, date: function (a, b) {
                return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
            }, dateISO: function (a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            }, number: function (a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            }, digits: function (a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            }, minlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d
            }, maxlength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e <= d
            }, rangelength: function (b, c, d) {
                var e = a.isArray(b) ? b.length : this.getLength(b, c);
                return this.optional(c) || e >= d[0] && e <= d[1]
            }, min: function (a, b, c) {
                return this.optional(b) || a >= c
            }, max: function (a, b, c) {
                return this.optional(b) || a <= c
            }, range: function (a, b, c) {
                return this.optional(b) || a >= c[0] && a <= c[1]
            }, step: function (b, c, d) {
                var e, f = a(c).attr("type"), g = "Step attribute on input type " + f + " is not supported.", h = ["text", "number", "range"], i = new RegExp("\\b" + f + "\\b"),
                    j = f && !i.test(h.join()), k = function (a) {
                        var b = ("" + a).match(/(?:\.(\d+))?$/);
                        return b && b[1] ? b[1].length : 0
                    }, l = function (a) {
                        return Math.round(a * Math.pow(10, e))
                    }, m = !0;
                if (j) throw new Error(g);
                return e = k(d), (k(b) > e || l(b) % l(d) !== 0) && (m = !1), this.optional(c) || m
            }, equalTo: function (b, c, d) {
                var e = a(d);
                return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    a(c).valid()
                }), b === e.val()
            }, remote: function (b, c, d, e) {
                if (this.optional(c)) return "dependency-mismatch";
                e = "string" == typeof e && e || "remote";
                var f, g, h, i = this.previousValue(c, e);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {url: d} || d, h = a.param(a.extend({data: b}, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
                    mode: "abort",
                    port: "validate" + c.name,
                    dataType: "json",
                    data: g,
                    context: f.currentForm,
                    success: function (a) {
                        var d, g, h, j = a === !0 || "true" === a;
                        f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
                            method: e,
                            parameters: b
                        }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
                    }
                }, d)), "pending")
            }
        }
    });
    var b, c = {};
    return a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
        var e = a.port;
        "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
    }) : (b = a.ajax, a.ajax = function (d) {
        var e = ("mode" in d ? d : a.ajaxSettings).mode, f = ("port" in d ? d : a.ajaxSettings).port;
        return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
    }), a
});
// Chart.js
!function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).Chart = t()
    }
}(function () {
    return function t(e, i, n) {
        function a(r, s) {
            if (!i[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(r, !0);
                    if (o) return o(r, !0);
                    var u = new Error("Cannot find module '" + r + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var d = i[r] = {exports: {}};
                e[r][0].call(d.exports, function (t) {
                    var i = e[r][1][t];
                    return a(i || t)
                }, d, d.exports, t, e, i, n)
            }
            return i[r].exports
        }

        for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) a(n[r]);
        return a
    }({
        1: [function (t, e, i) {
        }, {}], 2: [function (t, e, i) {
            var n = t(6);

            function a(t) {
                if (t) {
                    var e = [0, 0, 0], i = 1, a = t.match(/^#([a-fA-F0-9]{3})$/i);
                    if (a) {
                        a = a[1];
                        for (var o = 0; o < e.length; o++) e[o] = parseInt(a[o] + a[o], 16)
                    } else if (a = t.match(/^#([a-fA-F0-9]{6})$/i)) {
                        a = a[1];
                        for (o = 0; o < e.length; o++) e[o] = parseInt(a.slice(2 * o, 2 * o + 2), 16)
                    } else if (a = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (o = 0; o < e.length; o++) e[o] = parseInt(a[o + 1]);
                        i = parseFloat(a[4])
                    } else if (a = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                        for (o = 0; o < e.length; o++) e[o] = Math.round(2.55 * parseFloat(a[o + 1]));
                        i = parseFloat(a[4])
                    } else if (a = t.match(/(\w+)/)) {
                        if ("transparent" == a[1]) return [0, 0, 0, 0];
                        if (!(e = n[a[1]])) return
                    }
                    for (o = 0; o < e.length; o++) e[o] = d(e[o], 0, 255);
                    return i = i || 0 == i ? d(i, 0, 1) : 1, e[3] = i, e
                }
            }

            function o(t) {
                if (t) {
                    var e = t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function r(t) {
                if (t) {
                    var e = t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
                    if (e) {
                        var i = parseFloat(e[4]);
                        return [d(parseInt(e[1]), 0, 360), d(parseFloat(e[2]), 0, 100), d(parseFloat(e[3]), 0, 100), d(isNaN(i) ? 1 : i, 0, 1)]
                    }
                }
            }

            function s(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "rgba(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + e + ")"
            }

            function l(t, e) {
                return "rgba(" + Math.round(t[0] / 255 * 100) + "%, " + Math.round(t[1] / 255 * 100) + "%, " + Math.round(t[2] / 255 * 100) + "%, " + (e || t[3] || 1) + ")"
            }

            function u(t, e) {
                return void 0 === e && (e = void 0 !== t[3] ? t[3] : 1), "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + e + ")"
            }

            function d(t, e, i) {
                return Math.min(Math.max(e, t), i)
            }

            function c(t) {
                var e = t.toString(16).toUpperCase();
                return e.length < 2 ? "0" + e : e
            }

            e.exports = {
                getRgba: a, getHsla: o, getRgb: function (t) {
                    var e = a(t);
                    return e && e.slice(0, 3)
                }, getHsl: function (t) {
                    var e = o(t);
                    return e && e.slice(0, 3)
                }, getHwb: r, getAlpha: function (t) {
                    var e = a(t);
                    {
                        if (e) return e[3];
                        if (e = o(t)) return e[3];
                        if (e = r(t)) return e[3]
                    }
                }, hexString: function (t) {
                    return "#" + c(t[0]) + c(t[1]) + c(t[2])
                }, rgbString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return s(t, e);
                    return "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"
                }, rgbaString: s, percentString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return l(t, e);
                    var i = Math.round(t[0] / 255 * 100), n = Math.round(t[1] / 255 * 100), a = Math.round(t[2] / 255 * 100);
                    return "rgb(" + i + "%, " + n + "%, " + a + "%)"
                }, percentaString: l, hslString: function (t, e) {
                    if (e < 1 || t[3] && t[3] < 1) return u(t, e);
                    return "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)"
                }, hslaString: u, hwbString: function (t, e) {
                    void 0 === e && (e = void 0 !== t[3] ? t[3] : 1);
                    return "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + (void 0 !== e && 1 !== e ? ", " + e : "") + ")"
                }, keyword: function (t) {
                    return h[t.slice(0, 3)]
                }
            };
            var h = {};
            for (var f in n) h[n[f]] = f
        }, {6: 6}], 3: [function (t, e, i) {
            var n = t(5), a = t(2), o = function (t) {
                return t instanceof o ? t : this instanceof o ? (this.valid = !1, this.values = {
                    rgb: [0, 0, 0],
                    hsl: [0, 0, 0],
                    hsv: [0, 0, 0],
                    hwb: [0, 0, 0],
                    cmyk: [0, 0, 0, 0],
                    alpha: 1
                }, void ("string" == typeof t ? (e = a.getRgba(t)) ? this.setValues("rgb", e) : (e = a.getHsla(t)) ? this.setValues("hsl", e) : (e = a.getHwb(t)) && this.setValues("hwb", e) : "object" == typeof t && (void 0 !== (e = t).r || void 0 !== e.red ? this.setValues("rgb", e) : void 0 !== e.l || void 0 !== e.lightness ? this.setValues("hsl", e) : void 0 !== e.v || void 0 !== e.value ? this.setValues("hsv", e) : void 0 !== e.w || void 0 !== e.whiteness ? this.setValues("hwb", e) : void 0 === e.c && void 0 === e.cyan || this.setValues("cmyk", e)))) : new o(t);
                var e
            };
            o.prototype = {
                isValid: function () {
                    return this.valid
                }, rgb: function () {
                    return this.setSpace("rgb", arguments)
                }, hsl: function () {
                    return this.setSpace("hsl", arguments)
                }, hsv: function () {
                    return this.setSpace("hsv", arguments)
                }, hwb: function () {
                    return this.setSpace("hwb", arguments)
                }, cmyk: function () {
                    return this.setSpace("cmyk", arguments)
                }, rgbArray: function () {
                    return this.values.rgb
                }, hslArray: function () {
                    return this.values.hsl
                }, hsvArray: function () {
                    return this.values.hsv
                }, hwbArray: function () {
                    var t = this.values;
                    return 1 !== t.alpha ? t.hwb.concat([t.alpha]) : t.hwb
                }, cmykArray: function () {
                    return this.values.cmyk
                }, rgbaArray: function () {
                    var t = this.values;
                    return t.rgb.concat([t.alpha])
                }, hslaArray: function () {
                    var t = this.values;
                    return t.hsl.concat([t.alpha])
                }, alpha: function (t) {
                    return void 0 === t ? this.values.alpha : (this.setValues("alpha", t), this)
                }, red: function (t) {
                    return this.setChannel("rgb", 0, t)
                }, green: function (t) {
                    return this.setChannel("rgb", 1, t)
                }, blue: function (t) {
                    return this.setChannel("rgb", 2, t)
                }, hue: function (t) {
                    return t && (t = (t %= 360) < 0 ? 360 + t : t), this.setChannel("hsl", 0, t)
                }, saturation: function (t) {
                    return this.setChannel("hsl", 1, t)
                }, lightness: function (t) {
                    return this.setChannel("hsl", 2, t)
                }, saturationv: function (t) {
                    return this.setChannel("hsv", 1, t)
                }, whiteness: function (t) {
                    return this.setChannel("hwb", 1, t)
                }, blackness: function (t) {
                    return this.setChannel("hwb", 2, t)
                }, value: function (t) {
                    return this.setChannel("hsv", 2, t)
                }, cyan: function (t) {
                    return this.setChannel("cmyk", 0, t)
                }, magenta: function (t) {
                    return this.setChannel("cmyk", 1, t)
                }, yellow: function (t) {
                    return this.setChannel("cmyk", 2, t)
                }, black: function (t) {
                    return this.setChannel("cmyk", 3, t)
                }, hexString: function () {
                    return a.hexString(this.values.rgb)
                }, rgbString: function () {
                    return a.rgbString(this.values.rgb, this.values.alpha)
                }, rgbaString: function () {
                    return a.rgbaString(this.values.rgb, this.values.alpha)
                }, percentString: function () {
                    return a.percentString(this.values.rgb, this.values.alpha)
                }, hslString: function () {
                    return a.hslString(this.values.hsl, this.values.alpha)
                }, hslaString: function () {
                    return a.hslaString(this.values.hsl, this.values.alpha)
                }, hwbString: function () {
                    return a.hwbString(this.values.hwb, this.values.alpha)
                }, keyword: function () {
                    return a.keyword(this.values.rgb, this.values.alpha)
                }, rgbNumber: function () {
                    var t = this.values.rgb;
                    return t[0] << 16 | t[1] << 8 | t[2]
                }, luminosity: function () {
                    for (var t = this.values.rgb, e = [], i = 0; i < t.length; i++) {
                        var n = t[i] / 255;
                        e[i] = n <= .03928 ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4)
                    }
                    return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
                }, contrast: function (t) {
                    var e = this.luminosity(), i = t.luminosity();
                    return e > i ? (e + .05) / (i + .05) : (i + .05) / (e + .05)
                }, level: function (t) {
                    var e = this.contrast(t);
                    return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
                }, dark: function () {
                    var t = this.values.rgb;
                    return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
                }, light: function () {
                    return !this.dark()
                }, negate: function () {
                    for (var t = [], e = 0; e < 3; e++) t[e] = 255 - this.values.rgb[e];
                    return this.setValues("rgb", t), this
                }, lighten: function (t) {
                    var e = this.values.hsl;
                    return e[2] += e[2] * t, this.setValues("hsl", e), this
                }, darken: function (t) {
                    var e = this.values.hsl;
                    return e[2] -= e[2] * t, this.setValues("hsl", e), this
                }, saturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] += e[1] * t, this.setValues("hsl", e), this
                }, desaturate: function (t) {
                    var e = this.values.hsl;
                    return e[1] -= e[1] * t, this.setValues("hsl", e), this
                }, whiten: function (t) {
                    var e = this.values.hwb;
                    return e[1] += e[1] * t, this.setValues("hwb", e), this
                }, blacken: function (t) {
                    var e = this.values.hwb;
                    return e[2] += e[2] * t, this.setValues("hwb", e), this
                }, greyscale: function () {
                    var t = this.values.rgb, e = .3 * t[0] + .59 * t[1] + .11 * t[2];
                    return this.setValues("rgb", [e, e, e]), this
                }, clearer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e - e * t), this
                }, opaquer: function (t) {
                    var e = this.values.alpha;
                    return this.setValues("alpha", e + e * t), this
                }, rotate: function (t) {
                    var e = this.values.hsl, i = (e[0] + t) % 360;
                    return e[0] = i < 0 ? 360 + i : i, this.setValues("hsl", e), this
                }, mix: function (t, e) {
                    var i = this, n = t, a = void 0 === e ? .5 : e, o = 2 * a - 1, r = i.alpha() - n.alpha(), s = ((o * r == -1 ? o : (o + r) / (1 + o * r)) + 1) / 2, l = 1 - s;
                    return this.rgb(s * i.red() + l * n.red(), s * i.green() + l * n.green(), s * i.blue() + l * n.blue()).alpha(i.alpha() * a + n.alpha() * (1 - a))
                }, toJSON: function () {
                    return this.rgb()
                }, clone: function () {
                    var t, e, i = new o, n = this.values, a = i.values;
                    for (var r in n) n.hasOwnProperty(r) && (t = n[r], "[object Array]" === (e = {}.toString.call(t)) ? a[r] = t.slice(0) : "[object Number]" === e ? a[r] = t : console.error("unexpected color value:", t));
                    return i
                }
            }, o.prototype.spaces = {
                rgb: ["red", "green", "blue"],
                hsl: ["hue", "saturation", "lightness"],
                hsv: ["hue", "saturation", "value"],
                hwb: ["hue", "whiteness", "blackness"],
                cmyk: ["cyan", "magenta", "yellow", "black"]
            }, o.prototype.maxes = {rgb: [255, 255, 255], hsl: [360, 100, 100], hsv: [360, 100, 100], hwb: [360, 100, 100], cmyk: [100, 100, 100, 100]}, o.prototype.getValues = function (t) {
                for (var e = this.values, i = {}, n = 0; n < t.length; n++) i[t.charAt(n)] = e[t][n];
                return 1 !== e.alpha && (i.a = e.alpha), i
            }, o.prototype.setValues = function (t, e) {
                var i, a, o = this.values, r = this.spaces, s = this.maxes, l = 1;
                if (this.valid = !0, "alpha" === t) l = e; else if (e.length) o[t] = e.slice(0, t.length), l = e[t.length]; else if (void 0 !== e[t.charAt(0)]) {
                    for (i = 0; i < t.length; i++) o[t][i] = e[t.charAt(i)];
                    l = e.a
                } else if (void 0 !== e[r[t][0]]) {
                    var u = r[t];
                    for (i = 0; i < t.length; i++) o[t][i] = e[u[i]];
                    l = e.alpha
                }
                if (o.alpha = Math.max(0, Math.min(1, void 0 === l ? o.alpha : l)), "alpha" === t) return !1;
                for (i = 0; i < t.length; i++) a = Math.max(0, Math.min(s[t][i], o[t][i])), o[t][i] = Math.round(a);
                for (var d in r) d !== t && (o[d] = n[t][d](o[t]));
                return !0
            }, o.prototype.setSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i), this)
            }, o.prototype.setChannel = function (t, e, i) {
                var n = this.values[t];
                return void 0 === i ? n[e] : i === n[e] ? this : (n[e] = i, this.setValues(t, n), this)
            }, "undefined" != typeof window && (window.Color = o), e.exports = o
        }, {2: 2, 5: 5}], 4: [function (t, e, i) {
            function n(t) {
                var e, i, n = t[0] / 255, a = t[1] / 255, o = t[2] / 255, r = Math.min(n, a, o), s = Math.max(n, a, o), l = s - r;
                return s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), i = (r + s) / 2, [e, 100 * (s == r ? 0 : i <= .5 ? l / (s + r) : l / (2 - s - r)), 100 * i]
            }

            function a(t) {
                var e, i, n = t[0], a = t[1], o = t[2], r = Math.min(n, a, o), s = Math.max(n, a, o), l = s - r;
                return i = 0 == s ? 0 : l / s * 1e3 / 10, s == r ? e = 0 : n == s ? e = (a - o) / l : a == s ? e = 2 + (o - n) / l : o == s && (e = 4 + (n - a) / l), (e = Math.min(60 * e, 360)) < 0 && (e += 360), [e, i, s / 255 * 1e3 / 10]
            }

            function o(t) {
                var e = t[0], i = t[1], a = t[2];
                return [n(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(i, a))), 100 * (a = 1 - 1 / 255 * Math.max(e, Math.max(i, a)))]
            }

            function s(t) {
                var e, i = t[0] / 255, n = t[1] / 255, a = t[2] / 255;
                return [100 * ((1 - i - (e = Math.min(1 - i, 1 - n, 1 - a))) / (1 - e) || 0), 100 * ((1 - n - e) / (1 - e) || 0), 100 * ((1 - a - e) / (1 - e) || 0), 100 * e]
            }

            function l(t) {
                return C[JSON.stringify(t)]
            }

            function u(t) {
                var e = t[0] / 255, i = t[1] / 255, n = t[2] / 255;
                return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (i = i > .04045 ? Math.pow((i + .055) / 1.055, 2.4) : i / 12.92) + .1805 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92)), 100 * (.2126 * e + .7152 * i + .0722 * n), 100 * (.0193 * e + .1192 * i + .9505 * n)]
            }

            function d(t) {
                var e = u(t), i = e[0], n = e[1], a = e[2];
                return n /= 100, a /= 108.883, i = (i /= 95.047) > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (i - n), 200 * (n - (a = a > .008856 ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116))]
            }

            function c(t) {
                var e, i, n, a, o, r = t[0] / 360, s = t[1] / 100, l = t[2] / 100;
                if (0 == s) return [o = 255 * l, o, o];
                e = 2 * l - (i = l < .5 ? l * (1 + s) : l + s - l * s), a = [0, 0, 0];
                for (var u = 0; u < 3; u++) (n = r + 1 / 3 * -(u - 1)) < 0 && n++, n > 1 && n--, o = 6 * n < 1 ? e + 6 * (i - e) * n : 2 * n < 1 ? i : 3 * n < 2 ? e + (i - e) * (2 / 3 - n) * 6 : e, a[u] = 255 * o;
                return a
            }

            function h(t) {
                var e = t[0] / 60, i = t[1] / 100, n = t[2] / 100, a = Math.floor(e) % 6, o = e - Math.floor(e), r = 255 * n * (1 - i), s = 255 * n * (1 - i * o), l = 255 * n * (1 - i * (1 - o));
                n *= 255;
                switch (a) {
                    case 0:
                        return [n, l, r];
                    case 1:
                        return [s, n, r];
                    case 2:
                        return [r, n, l];
                    case 3:
                        return [r, s, n];
                    case 4:
                        return [l, r, n];
                    case 5:
                        return [n, r, s]
                }
            }

            function f(t) {
                var e, i, n, a, o = t[0] / 360, s = t[1] / 100, l = t[2] / 100, u = s + l;
                switch (u > 1 && (s /= u, l /= u), n = 6 * o - (e = Math.floor(6 * o)), 0 != (1 & e) && (n = 1 - n), a = s + n * ((i = 1 - l) - s), e) {
                    default:
                    case 6:
                    case 0:
                        r = i, g = a, b = s;
                        break;
                    case 1:
                        r = a, g = i, b = s;
                        break;
                    case 2:
                        r = s, g = i, b = a;
                        break;
                    case 3:
                        r = s, g = a, b = i;
                        break;
                    case 4:
                        r = a, g = s, b = i;
                        break;
                    case 5:
                        r = i, g = s, b = a
                }
                return [255 * r, 255 * g, 255 * b]
            }

            function p(t) {
                var e = t[0] / 100, i = t[1] / 100, n = t[2] / 100, a = t[3] / 100;
                return [255 * (1 - Math.min(1, e * (1 - a) + a)), 255 * (1 - Math.min(1, i * (1 - a) + a)), 255 * (1 - Math.min(1, n * (1 - a) + a))]
            }

            function m(t) {
                var e, i, n, a = t[0] / 100, o = t[1] / 100, r = t[2] / 100;
                return i = -.9689 * a + 1.8758 * o + .0415 * r, n = .0557 * a + -.204 * o + 1.057 * r, e = (e = 3.2406 * a + -1.5372 * o + -.4986 * r) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : e *= 12.92, i = i > .0031308 ? 1.055 * Math.pow(i, 1 / 2.4) - .055 : i *= 12.92, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (i = Math.min(Math.max(0, i), 1)), 255 * (n = Math.min(Math.max(0, n), 1))]
            }

            function v(t) {
                var e = t[0], i = t[1], n = t[2];
                return i /= 100, n /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (i = i > .008856 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116) - 16, 500 * (e - i), 200 * (i - (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116))]
            }

            function x(t) {
                var e, i, n, a, o = t[0], r = t[1], s = t[2];
                return o <= 8 ? a = (i = 100 * o / 903.3) / 100 * 7.787 + 16 / 116 : (i = 100 * Math.pow((o + 16) / 116, 3), a = Math.pow(i / 100, 1 / 3)), [e = e / 95.047 <= .008856 ? e = 95.047 * (r / 500 + a - 16 / 116) / 7.787 : 95.047 * Math.pow(r / 500 + a, 3), i, n = n / 108.883 <= .008859 ? n = 108.883 * (a - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(a - s / 200, 3)]
            }

            function y(t) {
                var e, i = t[0], n = t[1], a = t[2];
                return (e = 360 * Math.atan2(a, n) / 2 / Math.PI) < 0 && (e += 360), [i, Math.sqrt(n * n + a * a), e]
            }

            function k(t) {
                return m(x(t))
            }

            function M(t) {
                var e, i = t[0], n = t[1];
                return e = t[2] / 360 * 2 * Math.PI, [i, n * Math.cos(e), n * Math.sin(e)]
            }

            function w(t) {
                return S[t]
            }

            e.exports = {
                rgb2hsl: n, rgb2hsv: a, rgb2hwb: o, rgb2cmyk: s, rgb2keyword: l, rgb2xyz: u, rgb2lab: d, rgb2lch: function (t) {
                    return y(d(t))
                }, hsl2rgb: c, hsl2hsv: function (t) {
                    var e = t[0], i = t[1] / 100, n = t[2] / 100;
                    if (0 === n) return [0, 0, 0];
                    return [e, 100 * (2 * (i *= (n *= 2) <= 1 ? n : 2 - n) / (n + i)), 100 * ((n + i) / 2)]
                }, hsl2hwb: function (t) {
                    return o(c(t))
                }, hsl2cmyk: function (t) {
                    return s(c(t))
                }, hsl2keyword: function (t) {
                    return l(c(t))
                }, hsv2rgb: h, hsv2hsl: function (t) {
                    var e, i, n = t[0], a = t[1] / 100, o = t[2] / 100;
                    return e = a * o, [n, 100 * (e = (e /= (i = (2 - a) * o) <= 1 ? i : 2 - i) || 0), 100 * (i /= 2)]
                }, hsv2hwb: function (t) {
                    return o(h(t))
                }, hsv2cmyk: function (t) {
                    return s(h(t))
                }, hsv2keyword: function (t) {
                    return l(h(t))
                }, hwb2rgb: f, hwb2hsl: function (t) {
                    return n(f(t))
                }, hwb2hsv: function (t) {
                    return a(f(t))
                }, hwb2cmyk: function (t) {
                    return s(f(t))
                }, hwb2keyword: function (t) {
                    return l(f(t))
                }, cmyk2rgb: p, cmyk2hsl: function (t) {
                    return n(p(t))
                }, cmyk2hsv: function (t) {
                    return a(p(t))
                }, cmyk2hwb: function (t) {
                    return o(p(t))
                }, cmyk2keyword: function (t) {
                    return l(p(t))
                }, keyword2rgb: w, keyword2hsl: function (t) {
                    return n(w(t))
                }, keyword2hsv: function (t) {
                    return a(w(t))
                }, keyword2hwb: function (t) {
                    return o(w(t))
                }, keyword2cmyk: function (t) {
                    return s(w(t))
                }, keyword2lab: function (t) {
                    return d(w(t))
                }, keyword2xyz: function (t) {
                    return u(w(t))
                }, xyz2rgb: m, xyz2lab: v, xyz2lch: function (t) {
                    return y(v(t))
                }, lab2xyz: x, lab2rgb: k, lab2lch: y, lch2lab: M, lch2xyz: function (t) {
                    return x(M(t))
                }, lch2rgb: function (t) {
                    return k(M(t))
                }
            };
            var S = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }, C = {};
            for (var _ in S) C[JSON.stringify(S[_])] = _
        }, {}], 5: [function (t, e, i) {
            var n = t(4), a = function () {
                return new u
            };
            for (var o in n) {
                a[o + "Raw"] = function (t) {
                    return function (e) {
                        return "number" == typeof e && (e = Array.prototype.slice.call(arguments)), n[t](e)
                    }
                }(o);
                var r = /(\w+)2(\w+)/.exec(o), s = r[1], l = r[2];
                (a[s] = a[s] || {})[l] = a[o] = function (t) {
                    return function (e) {
                        "number" == typeof e && (e = Array.prototype.slice.call(arguments));
                        var i = n[t](e);
                        if ("string" == typeof i || void 0 === i) return i;
                        for (var a = 0; a < i.length; a++) i[a] = Math.round(i[a]);
                        return i
                    }
                }(o)
            }
            var u = function () {
                this.convs = {}
            };
            u.prototype.routeSpace = function (t, e) {
                var i = e[0];
                return void 0 === i ? this.getValues(t) : ("number" == typeof i && (i = Array.prototype.slice.call(e)), this.setValues(t, i))
            }, u.prototype.setValues = function (t, e) {
                return this.space = t, this.convs = {}, this.convs[t] = e, this
            }, u.prototype.getValues = function (t) {
                var e = this.convs[t];
                if (!e) {
                    var i = this.space, n = this.convs[i];
                    e = a[i][t](n), this.convs[t] = e
                }
                return e
            }, ["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function (t) {
                u.prototype[t] = function (e) {
                    return this.routeSpace(t, arguments)
                }
            }), e.exports = a
        }, {4: 4}], 6: [function (t, e, i) {
            "use strict";
            e.exports = {
                aliceblue: [240, 248, 255],
                antiquewhite: [250, 235, 215],
                aqua: [0, 255, 255],
                aquamarine: [127, 255, 212],
                azure: [240, 255, 255],
                beige: [245, 245, 220],
                bisque: [255, 228, 196],
                black: [0, 0, 0],
                blanchedalmond: [255, 235, 205],
                blue: [0, 0, 255],
                blueviolet: [138, 43, 226],
                brown: [165, 42, 42],
                burlywood: [222, 184, 135],
                cadetblue: [95, 158, 160],
                chartreuse: [127, 255, 0],
                chocolate: [210, 105, 30],
                coral: [255, 127, 80],
                cornflowerblue: [100, 149, 237],
                cornsilk: [255, 248, 220],
                crimson: [220, 20, 60],
                cyan: [0, 255, 255],
                darkblue: [0, 0, 139],
                darkcyan: [0, 139, 139],
                darkgoldenrod: [184, 134, 11],
                darkgray: [169, 169, 169],
                darkgreen: [0, 100, 0],
                darkgrey: [169, 169, 169],
                darkkhaki: [189, 183, 107],
                darkmagenta: [139, 0, 139],
                darkolivegreen: [85, 107, 47],
                darkorange: [255, 140, 0],
                darkorchid: [153, 50, 204],
                darkred: [139, 0, 0],
                darksalmon: [233, 150, 122],
                darkseagreen: [143, 188, 143],
                darkslateblue: [72, 61, 139],
                darkslategray: [47, 79, 79],
                darkslategrey: [47, 79, 79],
                darkturquoise: [0, 206, 209],
                darkviolet: [148, 0, 211],
                deeppink: [255, 20, 147],
                deepskyblue: [0, 191, 255],
                dimgray: [105, 105, 105],
                dimgrey: [105, 105, 105],
                dodgerblue: [30, 144, 255],
                firebrick: [178, 34, 34],
                floralwhite: [255, 250, 240],
                forestgreen: [34, 139, 34],
                fuchsia: [255, 0, 255],
                gainsboro: [220, 220, 220],
                ghostwhite: [248, 248, 255],
                gold: [255, 215, 0],
                goldenrod: [218, 165, 32],
                gray: [128, 128, 128],
                green: [0, 128, 0],
                greenyellow: [173, 255, 47],
                grey: [128, 128, 128],
                honeydew: [240, 255, 240],
                hotpink: [255, 105, 180],
                indianred: [205, 92, 92],
                indigo: [75, 0, 130],
                ivory: [255, 255, 240],
                khaki: [240, 230, 140],
                lavender: [230, 230, 250],
                lavenderblush: [255, 240, 245],
                lawngreen: [124, 252, 0],
                lemonchiffon: [255, 250, 205],
                lightblue: [173, 216, 230],
                lightcoral: [240, 128, 128],
                lightcyan: [224, 255, 255],
                lightgoldenrodyellow: [250, 250, 210],
                lightgray: [211, 211, 211],
                lightgreen: [144, 238, 144],
                lightgrey: [211, 211, 211],
                lightpink: [255, 182, 193],
                lightsalmon: [255, 160, 122],
                lightseagreen: [32, 178, 170],
                lightskyblue: [135, 206, 250],
                lightslategray: [119, 136, 153],
                lightslategrey: [119, 136, 153],
                lightsteelblue: [176, 196, 222],
                lightyellow: [255, 255, 224],
                lime: [0, 255, 0],
                limegreen: [50, 205, 50],
                linen: [250, 240, 230],
                magenta: [255, 0, 255],
                maroon: [128, 0, 0],
                mediumaquamarine: [102, 205, 170],
                mediumblue: [0, 0, 205],
                mediumorchid: [186, 85, 211],
                mediumpurple: [147, 112, 219],
                mediumseagreen: [60, 179, 113],
                mediumslateblue: [123, 104, 238],
                mediumspringgreen: [0, 250, 154],
                mediumturquoise: [72, 209, 204],
                mediumvioletred: [199, 21, 133],
                midnightblue: [25, 25, 112],
                mintcream: [245, 255, 250],
                mistyrose: [255, 228, 225],
                moccasin: [255, 228, 181],
                navajowhite: [255, 222, 173],
                navy: [0, 0, 128],
                oldlace: [253, 245, 230],
                olive: [128, 128, 0],
                olivedrab: [107, 142, 35],
                orange: [255, 165, 0],
                orangered: [255, 69, 0],
                orchid: [218, 112, 214],
                palegoldenrod: [238, 232, 170],
                palegreen: [152, 251, 152],
                paleturquoise: [175, 238, 238],
                palevioletred: [219, 112, 147],
                papayawhip: [255, 239, 213],
                peachpuff: [255, 218, 185],
                peru: [205, 133, 63],
                pink: [255, 192, 203],
                plum: [221, 160, 221],
                powderblue: [176, 224, 230],
                purple: [128, 0, 128],
                rebeccapurple: [102, 51, 153],
                red: [255, 0, 0],
                rosybrown: [188, 143, 143],
                royalblue: [65, 105, 225],
                saddlebrown: [139, 69, 19],
                salmon: [250, 128, 114],
                sandybrown: [244, 164, 96],
                seagreen: [46, 139, 87],
                seashell: [255, 245, 238],
                sienna: [160, 82, 45],
                silver: [192, 192, 192],
                skyblue: [135, 206, 235],
                slateblue: [106, 90, 205],
                slategray: [112, 128, 144],
                slategrey: [112, 128, 144],
                snow: [255, 250, 250],
                springgreen: [0, 255, 127],
                steelblue: [70, 130, 180],
                tan: [210, 180, 140],
                teal: [0, 128, 128],
                thistle: [216, 191, 216],
                tomato: [255, 99, 71],
                turquoise: [64, 224, 208],
                violet: [238, 130, 238],
                wheat: [245, 222, 179],
                white: [255, 255, 255],
                whitesmoke: [245, 245, 245],
                yellow: [255, 255, 0],
                yellowgreen: [154, 205, 50]
            }
        }, {}], 7: [function (t, e, i) {
            var n = t(29)();
            n.helpers = t(45), t(27)(n), n.defaults = t(25), n.Element = t(26), n.elements = t(40), n.Interaction = t(28), n.layouts = t(30), n.platform = t(48), n.plugins = t(31), n.Ticks = t(34), t(22)(n), t(23)(n), t(24)(n), t(33)(n), t(32)(n), t(35)(n), t(55)(n), t(53)(n), t(54)(n), t(56)(n), t(57)(n), t(58)(n), t(15)(n), t(16)(n), t(17)(n), t(18)(n), t(19)(n), t(20)(n), t(21)(n), t(8)(n), t(9)(n), t(10)(n), t(11)(n), t(12)(n), t(13)(n), t(14)(n);
            var a = t(49);
            for (var o in a) a.hasOwnProperty(o) && n.plugins.register(a[o]);
            n.platform.initialize(), e.exports = n, "undefined" != typeof window && (window.Chart = n), n.Legend = a.legend._element, n.Title = a.title._element, n.pluginService = n.plugins, n.PluginBase = n.Element.extend({}), n.canvasHelpers = n.helpers.canvas, n.layoutService = n.layouts
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            14: 14,
            15: 15,
            16: 16,
            17: 17,
            18: 18,
            19: 19,
            20: 20,
            21: 21,
            22: 22,
            23: 23,
            24: 24,
            25: 25,
            26: 26,
            27: 27,
            28: 28,
            29: 29,
            30: 30,
            31: 31,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            40: 40,
            45: 45,
            48: 48,
            49: 49,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            58: 58,
            8: 8,
            9: 9
        }], 8: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Bar = function (e, i) {
                    return i.type = "bar", new t(e, i)
                }
            }
        }, {}], 9: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Bubble = function (e, i) {
                    return i.type = "bubble", new t(e, i)
                }
            }
        }, {}], 10: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Doughnut = function (e, i) {
                    return i.type = "doughnut", new t(e, i)
                }
            }
        }, {}], 11: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Line = function (e, i) {
                    return i.type = "line", new t(e, i)
                }
            }
        }, {}], 12: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.PolarArea = function (e, i) {
                    return i.type = "polarArea", new t(e, i)
                }
            }
        }, {}], 13: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Radar = function (e, i) {
                    return i.type = "radar", new t(e, i)
                }
            }
        }, {}], 14: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                t.Scatter = function (e, i) {
                    return i.type = "scatter", new t(e, i)
                }
            }
        }, {}], 15: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(40), o = t(45);
            n._set("bar", {
                hover: {mode: "label"},
                scales: {xAxes: [{type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: {offsetGridLines: !0}}], yAxes: [{type: "linear"}]}
            }), n._set("horizontalBar", {
                hover: {mode: "index", axis: "y"},
                scales: {
                    xAxes: [{type: "linear", position: "bottom"}],
                    yAxes: [{position: "left", type: "category", categoryPercentage: .8, barPercentage: .9, offset: !0, gridLines: {offsetGridLines: !0}}]
                },
                elements: {rectangle: {borderSkipped: "left"}},
                tooltips: {
                    callbacks: {
                        title: function (t, e) {
                            var i = "";
                            return t.length > 0 && (t[0].yLabel ? i = t[0].yLabel : e.labels.length > 0 && t[0].index < e.labels.length && (i = e.labels[t[0].index])), i
                        }, label: function (t, e) {
                            return (e.datasets[t.datasetIndex].label || "") + ": " + t.xLabel
                        }
                    }, mode: "index", axis: "y"
                }
            }), e.exports = function (t) {
                t.controllers.bar = t.DatasetController.extend({
                    dataElementType: a.Rectangle, initialize: function () {
                        var e;
                        t.DatasetController.prototype.initialize.apply(this, arguments), (e = this.getMeta()).stack = this.getDataset().stack, e.bar = !0
                    }, update: function (t) {
                        var e, i, n = this.getMeta().data;
                        for (this._ruler = this.getRuler(), e = 0, i = n.length; e < i; ++e) this.updateElement(n[e], e, t)
                    }, updateElement: function (t, e, i) {
                        var n = this, a = n.chart, r = n.getMeta(), s = n.getDataset(), l = t.custom || {}, u = a.options.elements.rectangle;
                        t._xScale = n.getScaleForId(r.xAxisID), t._yScale = n.getScaleForId(r.yAxisID), t._datasetIndex = n.index, t._index = e, t._model = {
                            datasetLabel: s.label,
                            label: a.data.labels[e],
                            borderSkipped: l.borderSkipped ? l.borderSkipped : u.borderSkipped,
                            backgroundColor: l.backgroundColor ? l.backgroundColor : o.valueAtIndexOrDefault(s.backgroundColor, e, u.backgroundColor),
                            borderColor: l.borderColor ? l.borderColor : o.valueAtIndexOrDefault(s.borderColor, e, u.borderColor),
                            borderWidth: l.borderWidth ? l.borderWidth : o.valueAtIndexOrDefault(s.borderWidth, e, u.borderWidth)
                        }, n.updateElementGeometry(t, e, i), t.pivot()
                    }, updateElementGeometry: function (t, e, i) {
                        var n = this, a = t._model, o = n.getValueScale(), r = o.getBasePixel(), s = o.isHorizontal(), l = n._ruler || n.getRuler(), u = n.calculateBarValuePixels(n.index, e),
                            d = n.calculateBarIndexPixels(n.index, e, l);
                        a.horizontal = s, a.base = i ? r : u.base, a.x = s ? i ? r : u.head : d.center, a.y = s ? d.center : i ? r : u.head, a.height = s ? d.size : void 0, a.width = s ? void 0 : d.size
                    }, getValueScaleId: function () {
                        return this.getMeta().yAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getValueScale: function () {
                        return this.getScaleForId(this.getValueScaleId())
                    }, getIndexScale: function () {
                        return this.getScaleForId(this.getIndexScaleId())
                    }, _getStacks: function (t) {
                        var e, i, n = this.chart, a = this.getIndexScale().options.stacked, o = void 0 === t ? n.data.datasets.length : t + 1, r = [];
                        for (e = 0; e < o; ++e) (i = n.getDatasetMeta(e)).bar && n.isDatasetVisible(e) && (!1 === a || !0 === a && -1 === r.indexOf(i.stack) || void 0 === a && (void 0 === i.stack || -1 === r.indexOf(i.stack))) && r.push(i.stack);
                        return r
                    }, getStackCount: function () {
                        return this._getStacks().length
                    }, getStackIndex: function (t, e) {
                        var i = this._getStacks(t), n = void 0 !== e ? i.indexOf(e) : -1;
                        return -1 === n ? i.length - 1 : n
                    }, getRuler: function () {
                        var t, e, i = this.getIndexScale(), n = this.getStackCount(), a = this.index, r = i.isHorizontal(), s = r ? i.left : i.top, l = s + (r ? i.width : i.height), u = [];
                        for (t = 0, e = this.getMeta().data.length; t < e; ++t) u.push(i.getPixelForValue(null, t, a));
                        return {
                            min: o.isNullOrUndef(i.options.barThickness) ? function (t, e) {
                                var i, n, a, o, r = t.isHorizontal() ? t.width : t.height, s = t.getTicks();
                                for (a = 1, o = e.length; a < o; ++a) r = Math.min(r, e[a] - e[a - 1]);
                                for (a = 0, o = s.length; a < o; ++a) n = t.getPixelForTick(a), r = a > 0 ? Math.min(r, n - i) : r, i = n;
                                return r
                            }(i, u) : -1, pixels: u, start: s, end: l, stackCount: n, scale: i
                        }
                    }, calculateBarValuePixels: function (t, e) {
                        var i, n, a, o, r, s, l = this.chart, u = this.getMeta(), d = this.getValueScale(), c = l.data.datasets, h = d.getRightValue(c[t].data[e]), f = d.options.stacked, g = u.stack,
                            p = 0;
                        if (f || void 0 === f && void 0 !== g) for (i = 0; i < t; ++i) (n = l.getDatasetMeta(i)).bar && n.stack === g && n.controller.getValueScaleId() === d.id && l.isDatasetVisible(i) && (a = d.getRightValue(c[i].data[e]), (h < 0 && a < 0 || h >= 0 && a > 0) && (p += a));
                        return o = d.getPixelForValue(p), {size: s = ((r = d.getPixelForValue(p + h)) - o) / 2, base: o, head: r, center: r + s / 2}
                    }, calculateBarIndexPixels: function (t, e, i) {
                        var n, a, r, s, l, u, d, c, h, f, g, p, m, v, b, x, y, k = i.scale.options,
                            M = "flex" === k.barThickness ? (h = e, g = k, m = (f = i).pixels, v = m[h], b = h > 0 ? m[h - 1] : null, x = h < m.length - 1 ? m[h + 1] : null, y = g.categoryPercentage, null === b && (b = v - (null === x ? f.end - v : x - v)), null === x && (x = v + v - b), p = v - (v - b) / 2 * y, {
                                chunk: (x - b) / 2 * y / f.stackCount,
                                ratio: g.barPercentage,
                                start: p
                            }) : (n = e, a = i, u = (r = k).barThickness, d = a.stackCount, c = a.pixels[n], o.isNullOrUndef(u) ? (s = a.min * r.categoryPercentage, l = r.barPercentage) : (s = u * d, l = 1), {
                                chunk: s / d,
                                ratio: l,
                                start: c - s / 2
                            }), w = this.getStackIndex(t, this.getMeta().stack), S = M.start + M.chunk * w + M.chunk / 2, C = Math.min(o.valueOrDefault(k.maxBarThickness, 1 / 0), M.chunk * M.ratio);
                        return {base: S - C / 2, head: S + C / 2, center: S, size: C}
                    }, draw: function () {
                        var t = this.chart, e = this.getValueScale(), i = this.getMeta().data, n = this.getDataset(), a = i.length, r = 0;
                        for (o.canvas.clipArea(t.ctx, t.chartArea); r < a; ++r) isNaN(e.getRightValue(n.data[r])) || i[r].draw();
                        o.canvas.unclipArea(t.ctx)
                    }, setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {}, a = t._model;
                        a.backgroundColor = n.hoverBackgroundColor ? n.hoverBackgroundColor : o.valueAtIndexOrDefault(e.hoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor ? n.hoverBorderColor : o.valueAtIndexOrDefault(e.hoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth ? n.hoverBorderWidth : o.valueAtIndexOrDefault(e.hoverBorderWidth, i, a.borderWidth)
                    }, removeHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {}, a = t._model, r = this.chart.options.elements.rectangle;
                        a.backgroundColor = n.backgroundColor ? n.backgroundColor : o.valueAtIndexOrDefault(e.backgroundColor, i, r.backgroundColor), a.borderColor = n.borderColor ? n.borderColor : o.valueAtIndexOrDefault(e.borderColor, i, r.borderColor), a.borderWidth = n.borderWidth ? n.borderWidth : o.valueAtIndexOrDefault(e.borderWidth, i, r.borderWidth)
                    }
                }), t.controllers.horizontalBar = t.controllers.bar.extend({
                    getValueScaleId: function () {
                        return this.getMeta().xAxisID
                    }, getIndexScaleId: function () {
                        return this.getMeta().yAxisID
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 16: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(40), o = t(45);
            n._set("bubble", {
                hover: {mode: "single"},
                scales: {xAxes: [{type: "linear", position: "bottom", id: "x-axis-0"}], yAxes: [{type: "linear", position: "left", id: "y-axis-0"}]},
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "", n = e.datasets[t.datasetIndex].data[t.index];
                            return i + ": (" + t.xLabel + ", " + t.yLabel + ", " + n.r + ")"
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.bubble = t.DatasetController.extend({
                    dataElementType: a.Point, update: function (t) {
                        var e = this, i = e.getMeta().data;
                        o.each(i, function (i, n) {
                            e.updateElement(i, n, t)
                        })
                    }, updateElement: function (t, e, i) {
                        var n = this, a = n.getMeta(), o = t.custom || {}, r = n.getScaleForId(a.xAxisID), s = n.getScaleForId(a.yAxisID), l = n._resolveElementOptions(t, e),
                            u = n.getDataset().data[e], d = n.index, c = i ? r.getPixelForDecimal(.5) : r.getPixelForValue("object" == typeof u ? u : NaN, e, d),
                            h = i ? s.getBasePixel() : s.getPixelForValue(u, e, d);
                        t._xScale = r, t._yScale = s, t._options = l, t._datasetIndex = d, t._index = e, t._model = {
                            backgroundColor: l.backgroundColor,
                            borderColor: l.borderColor,
                            borderWidth: l.borderWidth,
                            hitRadius: l.hitRadius,
                            pointStyle: l.pointStyle,
                            radius: i ? 0 : l.radius,
                            skip: o.skip || isNaN(c) || isNaN(h),
                            x: c,
                            y: h
                        }, t.pivot()
                    }, setHoverStyle: function (t) {
                        var e = t._model, i = t._options;
                        e.backgroundColor = o.valueOrDefault(i.hoverBackgroundColor, o.getHoverColor(i.backgroundColor)), e.borderColor = o.valueOrDefault(i.hoverBorderColor, o.getHoverColor(i.borderColor)), e.borderWidth = o.valueOrDefault(i.hoverBorderWidth, i.borderWidth), e.radius = i.radius + i.hoverRadius
                    }, removeHoverStyle: function (t) {
                        var e = t._model, i = t._options;
                        e.backgroundColor = i.backgroundColor, e.borderColor = i.borderColor, e.borderWidth = i.borderWidth, e.radius = i.radius
                    }, _resolveElementOptions: function (t, e) {
                        var i, n, a, r = this.chart, s = r.data.datasets[this.index], l = t.custom || {}, u = r.options.elements.point, d = o.options.resolve, c = s.data[e], h = {},
                            f = {chart: r, dataIndex: e, dataset: s, datasetIndex: this.index},
                            g = ["backgroundColor", "borderColor", "borderWidth", "hoverBackgroundColor", "hoverBorderColor", "hoverBorderWidth", "hoverRadius", "hitRadius", "pointStyle"];
                        for (i = 0, n = g.length; i < n; ++i) h[a = g[i]] = d([l[a], s[a], u[a]], f, e);
                        return h.radius = d([l.radius, c ? c.r : void 0, s.radius, u.radius], f, e), h
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 17: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(40), o = t(45);
            n._set("doughnut", {
                animation: {animateRotate: !0, animateScale: !1}, hover: {mode: "single"}, legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data, n = i.datasets, a = i.labels;
                    if (n.length) for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }, legend: {
                    labels: {
                        generateLabels: function (t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                                var a = t.getDatasetMeta(0), r = e.datasets[0], s = a.data[n], l = s && s.custom || {}, u = o.valueAtIndexOrDefault, d = t.options.elements.arc;
                                return {
                                    text: i,
                                    fillStyle: l.backgroundColor ? l.backgroundColor : u(r.backgroundColor, n, d.backgroundColor),
                                    strokeStyle: l.borderColor ? l.borderColor : u(r.borderColor, n, d.borderColor),
                                    lineWidth: l.borderWidth ? l.borderWidth : u(r.borderWidth, n, d.borderWidth),
                                    hidden: isNaN(r.data[n]) || a.data[n].hidden,
                                    index: n
                                }
                            }) : []
                        }
                    }, onClick: function (t, e) {
                        var i, n, a, o = e.index, r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) (a = r.getDatasetMeta(i)).data[o] && (a.data[o].hidden = !a.data[o].hidden);
                        r.update()
                    }
                }, cutoutPercentage: 50, rotation: -.5 * Math.PI, circumference: 2 * Math.PI, tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            var i = e.labels[t.index], n = ": " + e.datasets[t.datasetIndex].data[t.index];
                            return o.isArray(i) ? (i = i.slice())[0] += n : i += n, i
                        }
                    }
                }
            }), n._set("pie", o.clone(n.doughnut)), n._set("pie", {cutoutPercentage: 0}), e.exports = function (t) {
                t.controllers.doughnut = t.controllers.pie = t.DatasetController.extend({
                    dataElementType: a.Arc, linkScales: o.noop, getRingIndex: function (t) {
                        for (var e = 0, i = 0; i < t; ++i) this.chart.isDatasetVisible(i) && ++e;
                        return e
                    }, update: function (t) {
                        var e = this, i = e.chart, n = i.chartArea, a = i.options, r = a.elements.arc, s = n.right - n.left - r.borderWidth, l = n.bottom - n.top - r.borderWidth, u = Math.min(s, l),
                            d = {x: 0, y: 0}, c = e.getMeta(), h = a.cutoutPercentage, f = a.circumference;
                        if (f < 2 * Math.PI) {
                            var g = a.rotation % (2 * Math.PI), p = (g += 2 * Math.PI * (g >= Math.PI ? -1 : g < -Math.PI ? 1 : 0)) + f, m = Math.cos(g), v = Math.sin(g), b = Math.cos(p),
                                x = Math.sin(p), y = g <= 0 && p >= 0 || g <= 2 * Math.PI && 2 * Math.PI <= p, k = g <= .5 * Math.PI && .5 * Math.PI <= p || g <= 2.5 * Math.PI && 2.5 * Math.PI <= p,
                                M = g <= -Math.PI && -Math.PI <= p || g <= Math.PI && Math.PI <= p, w = g <= .5 * -Math.PI && .5 * -Math.PI <= p || g <= 1.5 * Math.PI && 1.5 * Math.PI <= p,
                                S = h / 100, C = M ? -1 : Math.min(m * (m < 0 ? 1 : S), b * (b < 0 ? 1 : S)), _ = w ? -1 : Math.min(v * (v < 0 ? 1 : S), x * (x < 0 ? 1 : S)),
                                D = y ? 1 : Math.max(m * (m > 0 ? 1 : S), b * (b > 0 ? 1 : S)), I = k ? 1 : Math.max(v * (v > 0 ? 1 : S), x * (x > 0 ? 1 : S)), P = .5 * (D - C), A = .5 * (I - _);
                            u = Math.min(s / P, l / A), d = {x: -.5 * (D + C), y: -.5 * (I + _)}
                        }
                        i.borderWidth = e.getMaxBorderWidth(c.data), i.outerRadius = Math.max((u - i.borderWidth) / 2, 0), i.innerRadius = Math.max(h ? i.outerRadius / 100 * h : 0, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), i.offsetX = d.x * i.outerRadius, i.offsetY = d.y * i.outerRadius, c.total = e.calculateTotal(), e.outerRadius = i.outerRadius - i.radiusLength * e.getRingIndex(e.index), e.innerRadius = Math.max(e.outerRadius - i.radiusLength, 0), o.each(c.data, function (i, n) {
                            e.updateElement(i, n, t)
                        })
                    }, updateElement: function (t, e, i) {
                        var n = this, a = n.chart, r = a.chartArea, s = a.options, l = s.animation, u = (r.left + r.right) / 2, d = (r.top + r.bottom) / 2, c = s.rotation, h = s.rotation,
                            f = n.getDataset(), g = i && l.animateRotate ? 0 : t.hidden ? 0 : n.calculateCircumference(f.data[e]) * (s.circumference / (2 * Math.PI)),
                            p = i && l.animateScale ? 0 : n.innerRadius, m = i && l.animateScale ? 0 : n.outerRadius, v = o.valueAtIndexOrDefault;
                        o.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _model: {x: u + a.offsetX, y: d + a.offsetY, startAngle: c, endAngle: h, circumference: g, outerRadius: m, innerRadius: p, label: v(f.label, e, a.data.labels[e])}
                        });
                        var b = t._model;
                        this.removeHoverStyle(t), i && l.animateRotate || (b.startAngle = 0 === e ? s.rotation : n.getMeta().data[e - 1]._model.endAngle, b.endAngle = b.startAngle + b.circumference), t.pivot()
                    }, removeHoverStyle: function (e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    }, calculateTotal: function () {
                        var t, e = this.getDataset(), i = this.getMeta(), n = 0;
                        return o.each(i.data, function (i, a) {
                            t = e.data[a], isNaN(t) || i.hidden || (n += Math.abs(t))
                        }), n
                    }, calculateCircumference: function (t) {
                        var e = this.getMeta().total;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI * (Math.abs(t) / e) : 0
                    }, getMaxBorderWidth: function (t) {
                        for (var e, i, n = 0, a = this.index, o = t.length, r = 0; r < o; r++) e = t[r]._model ? t[r]._model.borderWidth : 0, n = (i = t[r]._chart ? t[r]._chart.config.data.datasets[a].hoverBorderWidth : 0) > (n = e > n ? e : n) ? i : n;
                        return n
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 18: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(40), o = t(45);
            n._set("line", {
                showLines: !0,
                spanGaps: !1,
                hover: {mode: "label"},
                scales: {xAxes: [{type: "category", id: "x-axis-0"}], yAxes: [{type: "linear", id: "y-axis-0"}]}
            }), e.exports = function (t) {
                function e(t, e) {
                    return o.valueOrDefault(t.showLine, e.showLines)
                }

                t.controllers.line = t.DatasetController.extend({
                    datasetElementType: a.Line, dataElementType: a.Point, update: function (t) {
                        var i, n, a, r = this, s = r.getMeta(), l = s.dataset, u = s.data || [], d = r.chart.options, c = d.elements.line, h = r.getScaleForId(s.yAxisID), f = r.getDataset(),
                            g = e(f, d);
                        for (g && (a = l.custom || {}, void 0 !== f.tension && void 0 === f.lineTension && (f.lineTension = f.tension), l._scale = h, l._datasetIndex = r.index, l._children = u, l._model = {
                            spanGaps: f.spanGaps ? f.spanGaps : d.spanGaps,
                            tension: a.tension ? a.tension : o.valueOrDefault(f.lineTension, c.tension),
                            backgroundColor: a.backgroundColor ? a.backgroundColor : f.backgroundColor || c.backgroundColor,
                            borderWidth: a.borderWidth ? a.borderWidth : f.borderWidth || c.borderWidth,
                            borderColor: a.borderColor ? a.borderColor : f.borderColor || c.borderColor,
                            borderCapStyle: a.borderCapStyle ? a.borderCapStyle : f.borderCapStyle || c.borderCapStyle,
                            borderDash: a.borderDash ? a.borderDash : f.borderDash || c.borderDash,
                            borderDashOffset: a.borderDashOffset ? a.borderDashOffset : f.borderDashOffset || c.borderDashOffset,
                            borderJoinStyle: a.borderJoinStyle ? a.borderJoinStyle : f.borderJoinStyle || c.borderJoinStyle,
                            fill: a.fill ? a.fill : void 0 !== f.fill ? f.fill : c.fill,
                            steppedLine: a.steppedLine ? a.steppedLine : o.valueOrDefault(f.steppedLine, c.stepped),
                            cubicInterpolationMode: a.cubicInterpolationMode ? a.cubicInterpolationMode : o.valueOrDefault(f.cubicInterpolationMode, c.cubicInterpolationMode)
                        }, l.pivot()), i = 0, n = u.length; i < n; ++i) r.updateElement(u[i], i, t);
                        for (g && 0 !== l._model.tension && r.updateBezierControlPoints(), i = 0, n = u.length; i < n; ++i) u[i].pivot()
                    }, getPointBackgroundColor: function (t, e) {
                        var i = this.chart.options.elements.point.backgroundColor, n = this.getDataset(), a = t.custom || {};
                        return a.backgroundColor ? i = a.backgroundColor : n.pointBackgroundColor ? i = o.valueAtIndexOrDefault(n.pointBackgroundColor, e, i) : n.backgroundColor && (i = n.backgroundColor), i
                    }, getPointBorderColor: function (t, e) {
                        var i = this.chart.options.elements.point.borderColor, n = this.getDataset(), a = t.custom || {};
                        return a.borderColor ? i = a.borderColor : n.pointBorderColor ? i = o.valueAtIndexOrDefault(n.pointBorderColor, e, i) : n.borderColor && (i = n.borderColor), i
                    }, getPointBorderWidth: function (t, e) {
                        var i = this.chart.options.elements.point.borderWidth, n = this.getDataset(), a = t.custom || {};
                        return isNaN(a.borderWidth) ? !isNaN(n.pointBorderWidth) || o.isArray(n.pointBorderWidth) ? i = o.valueAtIndexOrDefault(n.pointBorderWidth, e, i) : isNaN(n.borderWidth) || (i = n.borderWidth) : i = a.borderWidth, i
                    }, updateElement: function (t, e, i) {
                        var n, a, r = this, s = r.getMeta(), l = t.custom || {}, u = r.getDataset(), d = r.index, c = u.data[e], h = r.getScaleForId(s.yAxisID), f = r.getScaleForId(s.xAxisID),
                            g = r.chart.options.elements.point;
                        void 0 !== u.radius && void 0 === u.pointRadius && (u.pointRadius = u.radius), void 0 !== u.hitRadius && void 0 === u.pointHitRadius && (u.pointHitRadius = u.hitRadius), n = f.getPixelForValue("object" == typeof c ? c : NaN, e, d), a = i ? h.getBasePixel() : r.calculatePointY(c, e, d), t._xScale = f, t._yScale = h, t._datasetIndex = d, t._index = e, t._model = {
                            x: n,
                            y: a,
                            skip: l.skip || isNaN(n) || isNaN(a),
                            radius: l.radius || o.valueAtIndexOrDefault(u.pointRadius, e, g.radius),
                            pointStyle: l.pointStyle || o.valueAtIndexOrDefault(u.pointStyle, e, g.pointStyle),
                            backgroundColor: r.getPointBackgroundColor(t, e),
                            borderColor: r.getPointBorderColor(t, e),
                            borderWidth: r.getPointBorderWidth(t, e),
                            tension: s.dataset._model ? s.dataset._model.tension : 0,
                            steppedLine: !!s.dataset._model && s.dataset._model.steppedLine,
                            hitRadius: l.hitRadius || o.valueAtIndexOrDefault(u.pointHitRadius, e, g.hitRadius)
                        }
                    }, calculatePointY: function (t, e, i) {
                        var n, a, o, r = this.chart, s = this.getMeta(), l = this.getScaleForId(s.yAxisID), u = 0, d = 0;
                        if (l.options.stacked) {
                            for (n = 0; n < i; n++) if (a = r.data.datasets[n], "line" === (o = r.getDatasetMeta(n)).type && o.yAxisID === l.id && r.isDatasetVisible(n)) {
                                var c = Number(l.getRightValue(a.data[e]));
                                c < 0 ? d += c || 0 : u += c || 0
                            }
                            var h = Number(l.getRightValue(t));
                            return h < 0 ? l.getPixelForValue(d + h) : l.getPixelForValue(u + h)
                        }
                        return l.getPixelForValue(t)
                    }, updateBezierControlPoints: function () {
                        var t, e, i, n, a = this.getMeta(), r = this.chart.chartArea, s = a.data || [];

                        function l(t, e, i) {
                            return Math.max(Math.min(t, i), e)
                        }

                        if (a.dataset._model.spanGaps && (s = s.filter(function (t) {
                            return !t._model.skip
                        })), "monotone" === a.dataset._model.cubicInterpolationMode) o.splineCurveMonotone(s); else for (t = 0, e = s.length; t < e; ++t) i = s[t]._model, n = o.splineCurve(o.previousItem(s, t)._model, i, o.nextItem(s, t)._model, a.dataset._model.tension), i.controlPointPreviousX = n.previous.x, i.controlPointPreviousY = n.previous.y, i.controlPointNextX = n.next.x, i.controlPointNextY = n.next.y;
                        if (this.chart.options.elements.line.capBezierPoints) for (t = 0, e = s.length; t < e; ++t) (i = s[t]._model).controlPointPreviousX = l(i.controlPointPreviousX, r.left, r.right), i.controlPointPreviousY = l(i.controlPointPreviousY, r.top, r.bottom), i.controlPointNextX = l(i.controlPointNextX, r.left, r.right), i.controlPointNextY = l(i.controlPointNextY, r.top, r.bottom)
                    }, draw: function () {
                        var t = this.chart, i = this.getMeta(), n = i.data || [], a = t.chartArea, r = n.length, s = 0;
                        for (o.canvas.clipArea(t.ctx, a), e(this.getDataset(), t.options) && i.dataset.draw(), o.canvas.unclipArea(t.ctx); s < r; ++s) n[s].draw(a)
                    }, setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, n = t.custom || {}, a = t._model;
                        a.radius = n.hoverRadius || o.valueAtIndexOrDefault(e.pointHoverRadius, i, this.chart.options.elements.point.hoverRadius), a.backgroundColor = n.hoverBackgroundColor || o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, i, o.getHoverColor(a.backgroundColor)), a.borderColor = n.hoverBorderColor || o.valueAtIndexOrDefault(e.pointHoverBorderColor, i, o.getHoverColor(a.borderColor)), a.borderWidth = n.hoverBorderWidth || o.valueAtIndexOrDefault(e.pointHoverBorderWidth, i, a.borderWidth)
                    }, removeHoverStyle: function (t) {
                        var e = this, i = e.chart.data.datasets[t._datasetIndex], n = t._index, a = t.custom || {}, r = t._model;
                        void 0 !== i.radius && void 0 === i.pointRadius && (i.pointRadius = i.radius), r.radius = a.radius || o.valueAtIndexOrDefault(i.pointRadius, n, e.chart.options.elements.point.radius), r.backgroundColor = e.getPointBackgroundColor(t, n), r.borderColor = e.getPointBorderColor(t, n), r.borderWidth = e.getPointBorderWidth(t, n)
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 19: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(40), o = t(45);
            n._set("polarArea", {
                scale: {type: "radialLinear", angleLines: {display: !1}, gridLines: {circular: !0}, pointLabels: {display: !1}, ticks: {beginAtZero: !0}},
                animation: {animateRotate: !0, animateScale: !0},
                startAngle: -.5 * Math.PI,
                legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    var i = t.data, n = i.datasets, a = i.labels;
                    if (n.length) for (var o = 0; o < n[0].data.length; ++o) e.push('<li><span style="background-color:' + n[0].backgroundColor[o] + '"></span>'), a[o] && e.push(a[o]), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                },
                legend: {
                    labels: {
                        generateLabels: function (t) {
                            var e = t.data;
                            return e.labels.length && e.datasets.length ? e.labels.map(function (i, n) {
                                var a = t.getDatasetMeta(0), r = e.datasets[0], s = a.data[n].custom || {}, l = o.valueAtIndexOrDefault, u = t.options.elements.arc;
                                return {
                                    text: i,
                                    fillStyle: s.backgroundColor ? s.backgroundColor : l(r.backgroundColor, n, u.backgroundColor),
                                    strokeStyle: s.borderColor ? s.borderColor : l(r.borderColor, n, u.borderColor),
                                    lineWidth: s.borderWidth ? s.borderWidth : l(r.borderWidth, n, u.borderWidth),
                                    hidden: isNaN(r.data[n]) || a.data[n].hidden,
                                    index: n
                                }
                            }) : []
                        }
                    }, onClick: function (t, e) {
                        var i, n, a, o = e.index, r = this.chart;
                        for (i = 0, n = (r.data.datasets || []).length; i < n; ++i) (a = r.getDatasetMeta(i)).data[o].hidden = !a.data[o].hidden;
                        r.update()
                    }
                },
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t, e) {
                            return e.labels[t.index] + ": " + t.yLabel
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.polarArea = t.DatasetController.extend({
                    dataElementType: a.Arc, linkScales: o.noop, update: function (t) {
                        var e = this, i = e.chart, n = i.chartArea, a = e.getMeta(), r = i.options, s = r.elements.arc, l = Math.min(n.right - n.left, n.bottom - n.top);
                        i.outerRadius = Math.max((l - s.borderWidth / 2) / 2, 0), i.innerRadius = Math.max(r.cutoutPercentage ? i.outerRadius / 100 * r.cutoutPercentage : 1, 0), i.radiusLength = (i.outerRadius - i.innerRadius) / i.getVisibleDatasetCount(), e.outerRadius = i.outerRadius - i.radiusLength * e.index, e.innerRadius = e.outerRadius - i.radiusLength, a.count = e.countVisibleElements(), o.each(a.data, function (i, n) {
                            e.updateElement(i, n, t)
                        })
                    }, updateElement: function (t, e, i) {
                        for (var n = this, a = n.chart, r = n.getDataset(), s = a.options, l = s.animation, u = a.scale, d = a.data.labels, c = n.calculateCircumference(r.data[e]), h = u.xCenter, f = u.yCenter, g = 0, p = n.getMeta(), m = 0; m < e; ++m) isNaN(r.data[m]) || p.data[m].hidden || ++g;
                        var v = s.startAngle, b = t.hidden ? 0 : u.getDistanceFromCenterForValue(r.data[e]), x = v + c * g, y = x + (t.hidden ? 0 : c),
                            k = l.animateScale ? 0 : u.getDistanceFromCenterForValue(r.data[e]);
                        o.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: u,
                            _model: {
                                x: h,
                                y: f,
                                innerRadius: 0,
                                outerRadius: i ? k : b,
                                startAngle: i && l.animateRotate ? v : x,
                                endAngle: i && l.animateRotate ? v : y,
                                label: o.valueAtIndexOrDefault(d, e, d[e])
                            }
                        }), n.removeHoverStyle(t), t.pivot()
                    }, removeHoverStyle: function (e) {
                        t.DatasetController.prototype.removeHoverStyle.call(this, e, this.chart.options.elements.arc)
                    }, countVisibleElements: function () {
                        var t = this.getDataset(), e = this.getMeta(), i = 0;
                        return o.each(e.data, function (e, n) {
                            isNaN(t.data[n]) || e.hidden || i++
                        }), i
                    }, calculateCircumference: function (t) {
                        var e = this.getMeta().count;
                        return e > 0 && !isNaN(t) ? 2 * Math.PI / e : 0
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 20: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(40), o = t(45);
            n._set("radar", {scale: {type: "radialLinear"}, elements: {line: {tension: 0}}}), e.exports = function (t) {
                t.controllers.radar = t.DatasetController.extend({
                    datasetElementType: a.Line, dataElementType: a.Point, linkScales: o.noop, update: function (t) {
                        var e = this, i = e.getMeta(), n = i.dataset, a = i.data, r = n.custom || {}, s = e.getDataset(), l = e.chart.options.elements.line, u = e.chart.scale;
                        void 0 !== s.tension && void 0 === s.lineTension && (s.lineTension = s.tension), o.extend(i.dataset, {
                            _datasetIndex: e.index,
                            _scale: u,
                            _children: a,
                            _loop: !0,
                            _model: {
                                tension: r.tension ? r.tension : o.valueOrDefault(s.lineTension, l.tension),
                                backgroundColor: r.backgroundColor ? r.backgroundColor : s.backgroundColor || l.backgroundColor,
                                borderWidth: r.borderWidth ? r.borderWidth : s.borderWidth || l.borderWidth,
                                borderColor: r.borderColor ? r.borderColor : s.borderColor || l.borderColor,
                                fill: r.fill ? r.fill : void 0 !== s.fill ? s.fill : l.fill,
                                borderCapStyle: r.borderCapStyle ? r.borderCapStyle : s.borderCapStyle || l.borderCapStyle,
                                borderDash: r.borderDash ? r.borderDash : s.borderDash || l.borderDash,
                                borderDashOffset: r.borderDashOffset ? r.borderDashOffset : s.borderDashOffset || l.borderDashOffset,
                                borderJoinStyle: r.borderJoinStyle ? r.borderJoinStyle : s.borderJoinStyle || l.borderJoinStyle
                            }
                        }), i.dataset.pivot(), o.each(a, function (i, n) {
                            e.updateElement(i, n, t)
                        }, e), e.updateBezierControlPoints()
                    }, updateElement: function (t, e, i) {
                        var n = this, a = t.custom || {}, r = n.getDataset(), s = n.chart.scale, l = n.chart.options.elements.point, u = s.getPointPositionForValue(e, r.data[e]);
                        void 0 !== r.radius && void 0 === r.pointRadius && (r.pointRadius = r.radius), void 0 !== r.hitRadius && void 0 === r.pointHitRadius && (r.pointHitRadius = r.hitRadius), o.extend(t, {
                            _datasetIndex: n.index,
                            _index: e,
                            _scale: s,
                            _model: {
                                x: i ? s.xCenter : u.x,
                                y: i ? s.yCenter : u.y,
                                tension: a.tension ? a.tension : o.valueOrDefault(r.lineTension, n.chart.options.elements.line.tension),
                                radius: a.radius ? a.radius : o.valueAtIndexOrDefault(r.pointRadius, e, l.radius),
                                backgroundColor: a.backgroundColor ? a.backgroundColor : o.valueAtIndexOrDefault(r.pointBackgroundColor, e, l.backgroundColor),
                                borderColor: a.borderColor ? a.borderColor : o.valueAtIndexOrDefault(r.pointBorderColor, e, l.borderColor),
                                borderWidth: a.borderWidth ? a.borderWidth : o.valueAtIndexOrDefault(r.pointBorderWidth, e, l.borderWidth),
                                pointStyle: a.pointStyle ? a.pointStyle : o.valueAtIndexOrDefault(r.pointStyle, e, l.pointStyle),
                                hitRadius: a.hitRadius ? a.hitRadius : o.valueAtIndexOrDefault(r.pointHitRadius, e, l.hitRadius)
                            }
                        }), t._model.skip = a.skip ? a.skip : isNaN(t._model.x) || isNaN(t._model.y)
                    }, updateBezierControlPoints: function () {
                        var t = this.chart.chartArea, e = this.getMeta();
                        o.each(e.data, function (i, n) {
                            var a = i._model, r = o.splineCurve(o.previousItem(e.data, n, !0)._model, a, o.nextItem(e.data, n, !0)._model, a.tension);
                            a.controlPointPreviousX = Math.max(Math.min(r.previous.x, t.right), t.left), a.controlPointPreviousY = Math.max(Math.min(r.previous.y, t.bottom), t.top), a.controlPointNextX = Math.max(Math.min(r.next.x, t.right), t.left), a.controlPointNextY = Math.max(Math.min(r.next.y, t.bottom), t.top), i.pivot()
                        })
                    }, setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, n = t._index, a = t._model;
                        a.radius = i.hoverRadius ? i.hoverRadius : o.valueAtIndexOrDefault(e.pointHoverRadius, n, this.chart.options.elements.point.hoverRadius), a.backgroundColor = i.hoverBackgroundColor ? i.hoverBackgroundColor : o.valueAtIndexOrDefault(e.pointHoverBackgroundColor, n, o.getHoverColor(a.backgroundColor)), a.borderColor = i.hoverBorderColor ? i.hoverBorderColor : o.valueAtIndexOrDefault(e.pointHoverBorderColor, n, o.getHoverColor(a.borderColor)), a.borderWidth = i.hoverBorderWidth ? i.hoverBorderWidth : o.valueAtIndexOrDefault(e.pointHoverBorderWidth, n, a.borderWidth)
                    }, removeHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t.custom || {}, n = t._index, a = t._model, r = this.chart.options.elements.point;
                        a.radius = i.radius ? i.radius : o.valueAtIndexOrDefault(e.pointRadius, n, r.radius), a.backgroundColor = i.backgroundColor ? i.backgroundColor : o.valueAtIndexOrDefault(e.pointBackgroundColor, n, r.backgroundColor), a.borderColor = i.borderColor ? i.borderColor : o.valueAtIndexOrDefault(e.pointBorderColor, n, r.borderColor), a.borderWidth = i.borderWidth ? i.borderWidth : o.valueAtIndexOrDefault(e.pointBorderWidth, n, r.borderWidth)
                    }
                })
            }
        }, {25: 25, 40: 40, 45: 45}], 21: [function (t, e, i) {
            "use strict";
            t(25)._set("scatter", {
                hover: {mode: "single"},
                scales: {xAxes: [{id: "x-axis-1", type: "linear", position: "bottom"}], yAxes: [{id: "y-axis-1", type: "linear", position: "left"}]},
                showLines: !1,
                tooltips: {
                    callbacks: {
                        title: function () {
                            return ""
                        }, label: function (t) {
                            return "(" + t.xLabel + ", " + t.yLabel + ")"
                        }
                    }
                }
            }), e.exports = function (t) {
                t.controllers.scatter = t.controllers.line
            }
        }, {25: 25}], 22: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26), o = t(45);
            n._set("global", {animation: {duration: 1e3, easing: "easeOutQuart", onProgress: o.noop, onComplete: o.noop}}), e.exports = function (t) {
                t.Animation = a.extend({chart: null, currentStep: 0, numSteps: 60, easing: "", render: null, onAnimationProgress: null, onAnimationComplete: null}), t.animationService = {
                    frameDuration: 17, animations: [], dropFrames: 0, request: null, addAnimation: function (t, e, i, n) {
                        var a, o, r = this.animations;
                        for (e.chart = t, n || (t.animating = !0), a = 0, o = r.length; a < o; ++a) if (r[a].chart === t) return void (r[a] = e);
                        r.push(e), 1 === r.length && this.requestAnimationFrame()
                    }, cancelAnimation: function (t) {
                        var e = o.findIndex(this.animations, function (e) {
                            return e.chart === t
                        });
                        -1 !== e && (this.animations.splice(e, 1), t.animating = !1)
                    }, requestAnimationFrame: function () {
                        var t = this;
                        null === t.request && (t.request = o.requestAnimFrame.call(window, function () {
                            t.request = null, t.startDigest()
                        }))
                    }, startDigest: function () {
                        var t = this, e = Date.now(), i = 0;
                        t.dropFrames > 1 && (i = Math.floor(t.dropFrames), t.dropFrames = t.dropFrames % 1), t.advance(1 + i);
                        var n = Date.now();
                        t.dropFrames += (n - e) / t.frameDuration, t.animations.length > 0 && t.requestAnimationFrame()
                    }, advance: function (t) {
                        for (var e, i, n = this.animations, a = 0; a < n.length;) i = (e = n[a]).chart, e.currentStep = (e.currentStep || 0) + t, e.currentStep = Math.min(e.currentStep, e.numSteps), o.callback(e.render, [i, e], i), o.callback(e.onAnimationProgress, [e], i), e.currentStep >= e.numSteps ? (o.callback(e.onAnimationComplete, [e], i), i.animating = !1, n.splice(a, 1)) : ++a
                    }
                }, Object.defineProperty(t.Animation.prototype, "animationObject", {
                    get: function () {
                        return this
                    }
                }), Object.defineProperty(t.Animation.prototype, "chartInstance", {
                    get: function () {
                        return this.chart
                    }, set: function (t) {
                        this.chart = t
                    }
                })
            }
        }, {25: 25, 26: 26, 45: 45}], 23: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(45), o = t(28), r = t(30), s = t(48), l = t(31);
            e.exports = function (t) {
                function e(t) {
                    return "top" === t || "bottom" === t
                }

                t.types = {}, t.instances = {}, t.controllers = {}, a.extend(t.prototype, {
                    construct: function (e, i) {
                        var o, r, l = this;
                        (r = (o = (o = i) || {}).data = o.data || {}).datasets = r.datasets || [], r.labels = r.labels || [], o.options = a.configMerge(n.global, n[o.type], o.options || {}), i = o;
                        var u = s.acquireContext(e, i), d = u && u.canvas, c = d && d.height, h = d && d.width;
                        l.id = a.uid(), l.ctx = u, l.canvas = d, l.config = i, l.width = h, l.height = c, l.aspectRatio = c ? h / c : null, l.options = i.options, l._bufferedRender = !1, l.chart = l, l.controller = l, t.instances[l.id] = l, Object.defineProperty(l, "data", {
                            get: function () {
                                return l.config.data
                            }, set: function (t) {
                                l.config.data = t
                            }
                        }), u && d ? (l.initialize(), l.update()) : console.error("Failed to create chart: can't acquire context from the given item")
                    }, initialize: function () {
                        var t = this;
                        return l.notify(t, "beforeInit"), a.retinaScale(t, t.options.devicePixelRatio), t.bindEvents(), t.options.responsive && t.resize(!0), t.ensureScalesHaveIDs(), t.buildOrUpdateScales(), t.initToolTip(), l.notify(t, "afterInit"), t
                    }, clear: function () {
                        return a.canvas.clear(this), this
                    }, stop: function () {
                        return t.animationService.cancelAnimation(this), this
                    }, resize: function (t) {
                        var e = this, i = e.options, n = e.canvas, o = i.maintainAspectRatio && e.aspectRatio || null, r = Math.max(0, Math.floor(a.getMaximumWidth(n))),
                            s = Math.max(0, Math.floor(o ? r / o : a.getMaximumHeight(n)));
                        if ((e.width !== r || e.height !== s) && (n.width = e.width = r, n.height = e.height = s, n.style.width = r + "px", n.style.height = s + "px", a.retinaScale(e, i.devicePixelRatio), !t)) {
                            var u = {width: r, height: s};
                            l.notify(e, "resize", [u]), e.options.onResize && e.options.onResize(e, u), e.stop(), e.update(e.options.responsiveAnimationDuration)
                        }
                    }, ensureScalesHaveIDs: function () {
                        var t = this.options, e = t.scales || {}, i = t.scale;
                        a.each(e.xAxes, function (t, e) {
                            t.id = t.id || "x-axis-" + e
                        }), a.each(e.yAxes, function (t, e) {
                            t.id = t.id || "y-axis-" + e
                        }), i && (i.id = i.id || "scale")
                    }, buildOrUpdateScales: function () {
                        var i = this, n = i.options, o = i.scales || {}, r = [], s = Object.keys(o).reduce(function (t, e) {
                            return t[e] = !1, t
                        }, {});
                        n.scales && (r = r.concat((n.scales.xAxes || []).map(function (t) {
                            return {options: t, dtype: "category", dposition: "bottom"}
                        }), (n.scales.yAxes || []).map(function (t) {
                            return {options: t, dtype: "linear", dposition: "left"}
                        }))), n.scale && r.push({options: n.scale, dtype: "radialLinear", isDefault: !0, dposition: "chartArea"}), a.each(r, function (n) {
                            var r = n.options, l = r.id, u = a.valueOrDefault(r.type, n.dtype);
                            e(r.position) !== e(n.dposition) && (r.position = n.dposition), s[l] = !0;
                            var d = null;
                            if (l in o && o[l].type === u) (d = o[l]).options = r, d.ctx = i.ctx, d.chart = i; else {
                                var c = t.scaleService.getScaleConstructor(u);
                                if (!c) return;
                                d = new c({id: l, type: u, options: r, ctx: i.ctx, chart: i}), o[d.id] = d
                            }
                            d.mergeTicksOptions(), n.isDefault && (i.scale = d)
                        }), a.each(s, function (t, e) {
                            t || delete o[e]
                        }), i.scales = o, t.scaleService.addScalesToLayout(this)
                    }, buildOrUpdateControllers: function () {
                        var e = this, i = [], n = [];
                        return a.each(e.data.datasets, function (a, o) {
                            var r = e.getDatasetMeta(o), s = a.type || e.config.type;
                            if (r.type && r.type !== s && (e.destroyDatasetMeta(o), r = e.getDatasetMeta(o)), r.type = s, i.push(r.type), r.controller) r.controller.updateIndex(o), r.controller.linkScales(); else {
                                var l = t.controllers[r.type];
                                if (void 0 === l) throw new Error('"' + r.type + '" is not a chart type.');
                                r.controller = new l(e, o), n.push(r.controller)
                            }
                        }, e), n
                    }, resetElements: function () {
                        var t = this;
                        a.each(t.data.datasets, function (e, i) {
                            t.getDatasetMeta(i).controller.reset()
                        }, t)
                    }, reset: function () {
                        this.resetElements(), this.tooltip.initialize()
                    }, update: function (e) {
                        var i, n, o = this;
                        if (e && "object" == typeof e || (e = {duration: e, lazy: arguments[1]}), n = (i = o).options, a.each(i.scales, function (t) {
                            r.removeBox(i, t)
                        }), n = a.configMerge(t.defaults.global, t.defaults[i.config.type], n), i.options = i.config.options = n, i.ensureScalesHaveIDs(), i.buildOrUpdateScales(), i.tooltip._options = n.tooltips, i.tooltip.initialize(), l._invalidate(o), !1 !== l.notify(o, "beforeUpdate")) {
                            o.tooltip._data = o.data;
                            var s = o.buildOrUpdateControllers();
                            a.each(o.data.datasets, function (t, e) {
                                o.getDatasetMeta(e).controller.buildOrUpdateElements()
                            }, o), o.updateLayout(), o.options.animation && o.options.animation.duration && a.each(s, function (t) {
                                t.reset()
                            }), o.updateDatasets(), o.tooltip.initialize(), o.lastActive = [], l.notify(o, "afterUpdate"), o._bufferedRender ? o._bufferedRequest = {
                                duration: e.duration,
                                easing: e.easing,
                                lazy: e.lazy
                            } : o.render(e)
                        }
                    }, updateLayout: function () {
                        !1 !== l.notify(this, "beforeLayout") && (r.update(this, this.width, this.height), l.notify(this, "afterScaleUpdate"), l.notify(this, "afterLayout"))
                    }, updateDatasets: function () {
                        if (!1 !== l.notify(this, "beforeDatasetsUpdate")) {
                            for (var t = 0, e = this.data.datasets.length; t < e; ++t) this.updateDataset(t);
                            l.notify(this, "afterDatasetsUpdate")
                        }
                    }, updateDataset: function (t) {
                        var e = this.getDatasetMeta(t), i = {meta: e, index: t};
                        !1 !== l.notify(this, "beforeDatasetUpdate", [i]) && (e.controller.update(), l.notify(this, "afterDatasetUpdate", [i]))
                    }, render: function (e) {
                        var i = this;
                        e && "object" == typeof e || (e = {duration: e, lazy: arguments[1]});
                        var n = e.duration, o = e.lazy;
                        if (!1 !== l.notify(i, "beforeRender")) {
                            var r = i.options.animation, s = function (t) {
                                l.notify(i, "afterRender"), a.callback(r && r.onComplete, [t], i)
                            };
                            if (r && (void 0 !== n && 0 !== n || void 0 === n && 0 !== r.duration)) {
                                var u = new t.Animation({
                                    numSteps: (n || r.duration) / 16.66, easing: e.easing || r.easing, render: function (t, e) {
                                        var i = a.easing.effects[e.easing], n = e.currentStep, o = n / e.numSteps;
                                        t.draw(i(o), o, n)
                                    }, onAnimationProgress: r.onProgress, onAnimationComplete: s
                                });
                                t.animationService.addAnimation(i, u, n, o)
                            } else i.draw(), s(new t.Animation({numSteps: 0, chart: i}));
                            return i
                        }
                    }, draw: function (t) {
                        var e = this;
                        e.clear(), a.isNullOrUndef(t) && (t = 1), e.transition(t), !1 !== l.notify(e, "beforeDraw", [t]) && (a.each(e.boxes, function (t) {
                            t.draw(e.chartArea)
                        }, e), e.scale && e.scale.draw(), e.drawDatasets(t), e._drawTooltip(t), l.notify(e, "afterDraw", [t]))
                    }, transition: function (t) {
                        for (var e = 0, i = (this.data.datasets || []).length; e < i; ++e) this.isDatasetVisible(e) && this.getDatasetMeta(e).controller.transition(t);
                        this.tooltip.transition(t)
                    }, drawDatasets: function (t) {
                        var e = this;
                        if (!1 !== l.notify(e, "beforeDatasetsDraw", [t])) {
                            for (var i = (e.data.datasets || []).length - 1; i >= 0; --i) e.isDatasetVisible(i) && e.drawDataset(i, t);
                            l.notify(e, "afterDatasetsDraw", [t])
                        }
                    }, drawDataset: function (t, e) {
                        var i = this.getDatasetMeta(t), n = {meta: i, index: t, easingValue: e};
                        !1 !== l.notify(this, "beforeDatasetDraw", [n]) && (i.controller.draw(e), l.notify(this, "afterDatasetDraw", [n]))
                    }, _drawTooltip: function (t) {
                        var e = this.tooltip, i = {tooltip: e, easingValue: t};
                        !1 !== l.notify(this, "beforeTooltipDraw", [i]) && (e.draw(), l.notify(this, "afterTooltipDraw", [i]))
                    }, getElementAtEvent: function (t) {
                        return o.modes.single(this, t)
                    }, getElementsAtEvent: function (t) {
                        return o.modes.label(this, t, {intersect: !0})
                    }, getElementsAtXAxis: function (t) {
                        return o.modes["x-axis"](this, t, {intersect: !0})
                    }, getElementsAtEventForMode: function (t, e, i) {
                        var n = o.modes[e];
                        return "function" == typeof n ? n(this, t, i) : []
                    }, getDatasetAtEvent: function (t) {
                        return o.modes.dataset(this, t, {intersect: !0})
                    }, getDatasetMeta: function (t) {
                        var e = this.data.datasets[t];
                        e._meta || (e._meta = {});
                        var i = e._meta[this.id];
                        return i || (i = e._meta[this.id] = {type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null}), i
                    }, getVisibleDatasetCount: function () {
                        for (var t = 0, e = 0, i = this.data.datasets.length; e < i; ++e) this.isDatasetVisible(e) && t++;
                        return t
                    }, isDatasetVisible: function (t) {
                        var e = this.getDatasetMeta(t);
                        return "boolean" == typeof e.hidden ? !e.hidden : !this.data.datasets[t].hidden
                    }, generateLegend: function () {
                        return this.options.legendCallback(this)
                    }, destroyDatasetMeta: function (t) {
                        var e = this.id, i = this.data.datasets[t], n = i._meta && i._meta[e];
                        n && (n.controller.destroy(), delete i._meta[e])
                    }, destroy: function () {
                        var e, i, n = this, o = n.canvas;
                        for (n.stop(), e = 0, i = n.data.datasets.length; e < i; ++e) n.destroyDatasetMeta(e);
                        o && (n.unbindEvents(), a.canvas.clear(n), s.releaseContext(n.ctx), n.canvas = null, n.ctx = null), l.notify(n, "destroy"), delete t.instances[n.id]
                    }, toBase64Image: function () {
                        return this.canvas.toDataURL.apply(this.canvas, arguments)
                    }, initToolTip: function () {
                        var e = this;
                        e.tooltip = new t.Tooltip({_chart: e, _chartInstance: e, _data: e.data, _options: e.options.tooltips}, e)
                    }, bindEvents: function () {
                        var t = this, e = t._listeners = {}, i = function () {
                            t.eventHandler.apply(t, arguments)
                        };
                        a.each(t.options.events, function (n) {
                            s.addEventListener(t, n, i), e[n] = i
                        }), t.options.responsive && (i = function () {
                            t.resize()
                        }, s.addEventListener(t, "resize", i), e.resize = i)
                    }, unbindEvents: function () {
                        var t = this, e = t._listeners;
                        e && (delete t._listeners, a.each(e, function (e, i) {
                            s.removeEventListener(t, i, e)
                        }))
                    }, updateHoverStyle: function (t, e, i) {
                        var n, a, o, r = i ? "setHoverStyle" : "removeHoverStyle";
                        for (a = 0, o = t.length; a < o; ++a) (n = t[a]) && this.getDatasetMeta(n._datasetIndex).controller[r](n)
                    }, eventHandler: function (t) {
                        var e = this, i = e.tooltip;
                        if (!1 !== l.notify(e, "beforeEvent", [t])) {
                            e._bufferedRender = !0, e._bufferedRequest = null;
                            var n = e.handleEvent(t);
                            i && (n = i._start ? i.handleEvent(t) : n | i.handleEvent(t)), l.notify(e, "afterEvent", [t]);
                            var a = e._bufferedRequest;
                            return a ? e.render(a) : n && !e.animating && (e.stop(), e.render(e.options.hover.animationDuration, !0)), e._bufferedRender = !1, e._bufferedRequest = null, e
                        }
                    }, handleEvent: function (t) {
                        var e, i = this, n = i.options || {}, o = n.hover;
                        return i.lastActive = i.lastActive || [], "mouseout" === t.type ? i.active = [] : i.active = i.getElementsAtEventForMode(t, o.mode, o), a.callback(n.onHover || n.hover.onHover, [t.native, i.active], i), "mouseup" !== t.type && "click" !== t.type || n.onClick && n.onClick.call(i, t.native, i.active), i.lastActive.length && i.updateHoverStyle(i.lastActive, o.mode, !1), i.active.length && o.mode && i.updateHoverStyle(i.active, o.mode, !0), e = !a.arrayEquals(i.active, i.lastActive), i.lastActive = i.active, e
                    }
                }), t.Controller = t
            }
        }, {25: 25, 28: 28, 30: 30, 31: 31, 45: 45, 48: 48}], 24: [function (t, e, i) {
            "use strict";
            var n = t(45);
            e.exports = function (t) {
                var e = ["push", "pop", "shift", "splice", "unshift"];

                function i(t, i) {
                    var n = t._chartjs;
                    if (n) {
                        var a = n.listeners, o = a.indexOf(i);
                        -1 !== o && a.splice(o, 1), a.length > 0 || (e.forEach(function (e) {
                            delete t[e]
                        }), delete t._chartjs)
                    }
                }

                t.DatasetController = function (t, e) {
                    this.initialize(t, e)
                }, n.extend(t.DatasetController.prototype, {
                    datasetElementType: null, dataElementType: null, initialize: function (t, e) {
                        this.chart = t, this.index = e, this.linkScales(), this.addElements()
                    }, updateIndex: function (t) {
                        this.index = t
                    }, linkScales: function () {
                        var t = this, e = t.getMeta(), i = t.getDataset();
                        null !== e.xAxisID && e.xAxisID in t.chart.scales || (e.xAxisID = i.xAxisID || t.chart.options.scales.xAxes[0].id), null !== e.yAxisID && e.yAxisID in t.chart.scales || (e.yAxisID = i.yAxisID || t.chart.options.scales.yAxes[0].id)
                    }, getDataset: function () {
                        return this.chart.data.datasets[this.index]
                    }, getMeta: function () {
                        return this.chart.getDatasetMeta(this.index)
                    }, getScaleForId: function (t) {
                        return this.chart.scales[t]
                    }, reset: function () {
                        this.update(!0)
                    }, destroy: function () {
                        this._data && i(this._data, this)
                    }, createMetaDataset: function () {
                        var t = this.datasetElementType;
                        return t && new t({_chart: this.chart, _datasetIndex: this.index})
                    }, createMetaData: function (t) {
                        var e = this.dataElementType;
                        return e && new e({_chart: this.chart, _datasetIndex: this.index, _index: t})
                    }, addElements: function () {
                        var t, e, i = this.getMeta(), n = this.getDataset().data || [], a = i.data;
                        for (t = 0, e = n.length; t < e; ++t) a[t] = a[t] || this.createMetaData(t);
                        i.dataset = i.dataset || this.createMetaDataset()
                    }, addElementAndReset: function (t) {
                        var e = this.createMetaData(t);
                        this.getMeta().data.splice(t, 0, e), this.updateElement(e, t, !0)
                    }, buildOrUpdateElements: function () {
                        var t, a, o = this, r = o.getDataset(), s = r.data || (r.data = []);
                        o._data !== s && (o._data && i(o._data, o), a = o, (t = s)._chartjs ? t._chartjs.listeners.push(a) : (Object.defineProperty(t, "_chartjs", {
                            configurable: !0,
                            enumerable: !1,
                            value: {listeners: [a]}
                        }), e.forEach(function (e) {
                            var i = "onData" + e.charAt(0).toUpperCase() + e.slice(1), a = t[e];
                            Object.defineProperty(t, e, {
                                configurable: !0, enumerable: !1, value: function () {
                                    var e = Array.prototype.slice.call(arguments), o = a.apply(this, e);
                                    return n.each(t._chartjs.listeners, function (t) {
                                        "function" == typeof t[i] && t[i].apply(t, e)
                                    }), o
                                }
                            })
                        })), o._data = s), o.resyncElements()
                    }, update: n.noop, transition: function (t) {
                        for (var e = this.getMeta(), i = e.data || [], n = i.length, a = 0; a < n; ++a) i[a].transition(t);
                        e.dataset && e.dataset.transition(t)
                    }, draw: function () {
                        var t = this.getMeta(), e = t.data || [], i = e.length, n = 0;
                        for (t.dataset && t.dataset.draw(); n < i; ++n) e[n].draw()
                    }, removeHoverStyle: function (t, e) {
                        var i = this.chart.data.datasets[t._datasetIndex], a = t._index, o = t.custom || {}, r = n.valueAtIndexOrDefault, s = t._model;
                        s.backgroundColor = o.backgroundColor ? o.backgroundColor : r(i.backgroundColor, a, e.backgroundColor), s.borderColor = o.borderColor ? o.borderColor : r(i.borderColor, a, e.borderColor), s.borderWidth = o.borderWidth ? o.borderWidth : r(i.borderWidth, a, e.borderWidth)
                    }, setHoverStyle: function (t) {
                        var e = this.chart.data.datasets[t._datasetIndex], i = t._index, a = t.custom || {}, o = n.valueAtIndexOrDefault, r = n.getHoverColor, s = t._model;
                        s.backgroundColor = a.hoverBackgroundColor ? a.hoverBackgroundColor : o(e.hoverBackgroundColor, i, r(s.backgroundColor)), s.borderColor = a.hoverBorderColor ? a.hoverBorderColor : o(e.hoverBorderColor, i, r(s.borderColor)), s.borderWidth = a.hoverBorderWidth ? a.hoverBorderWidth : o(e.hoverBorderWidth, i, s.borderWidth)
                    }, resyncElements: function () {
                        var t = this.getMeta(), e = this.getDataset().data, i = t.data.length, n = e.length;
                        n < i ? t.data.splice(n, i - n) : n > i && this.insertElements(i, n - i)
                    }, insertElements: function (t, e) {
                        for (var i = 0; i < e; ++i) this.addElementAndReset(t + i)
                    }, onDataPush: function () {
                        this.insertElements(this.getDataset().data.length - 1, arguments.length)
                    }, onDataPop: function () {
                        this.getMeta().data.pop()
                    }, onDataShift: function () {
                        this.getMeta().data.shift()
                    }, onDataSplice: function (t, e) {
                        this.getMeta().data.splice(t, e), this.insertElements(t, arguments.length - 2)
                    }, onDataUnshift: function () {
                        this.insertElements(0, arguments.length)
                    }
                }), t.DatasetController.extend = n.inherits
            }
        }, {45: 45}], 25: [function (t, e, i) {
            "use strict";
            var n = t(45);
            e.exports = {
                _set: function (t, e) {
                    return n.merge(this[t] || (this[t] = {}), e)
                }
            }
        }, {45: 45}], 26: [function (t, e, i) {
            "use strict";
            var n = t(3), a = t(45);
            var o = function (t) {
                a.extend(this, t), this.initialize.apply(this, arguments)
            };
            a.extend(o.prototype, {
                initialize: function () {
                    this.hidden = !1
                }, pivot: function () {
                    var t = this;
                    return t._view || (t._view = a.clone(t._model)), t._start = {}, t
                }, transition: function (t) {
                    var e = this, i = e._model, a = e._start, o = e._view;
                    return i && 1 !== t ? (o || (o = e._view = {}), a || (a = e._start = {}), function (t, e, i, a) {
                        var o, r, s, l, u, d, c, h, f, g = Object.keys(i);
                        for (o = 0, r = g.length; o < r; ++o) if (d = i[s = g[o]], e.hasOwnProperty(s) || (e[s] = d), (l = e[s]) !== d && "_" !== s[0]) {
                            if (t.hasOwnProperty(s) || (t[s] = l), (c = typeof d) == typeof (u = t[s])) if ("string" === c) {
                                if ((h = n(u)).valid && (f = n(d)).valid) {
                                    e[s] = f.mix(h, a).rgbString();
                                    continue
                                }
                            } else if ("number" === c && isFinite(u) && isFinite(d)) {
                                e[s] = u + (d - u) * a;
                                continue
                            }
                            e[s] = d
                        }
                    }(a, o, i, t), e) : (e._view = i, e._start = null, e)
                }, tooltipPosition: function () {
                    return {x: this._model.x, y: this._model.y}
                }, hasValue: function () {
                    return a.isNumber(this._model.x) && a.isNumber(this._model.y)
                }
            }), o.extend = a.inherits, e.exports = o
        }, {3: 3, 45: 45}], 27: [function (t, e, i) {
            "use strict";
            var n = t(3), a = t(25), o = t(45);
            e.exports = function (t) {
                function e(t, e, i) {
                    var n;
                    return "string" == typeof t ? (n = parseInt(t, 10), -1 !== t.indexOf("%") && (n = n / 100 * e.parentNode[i])) : n = t, n
                }

                function i(t) {
                    return null != t && "none" !== t
                }

                function r(t, n, a) {
                    var o = document.defaultView, r = t.parentNode, s = o.getComputedStyle(t)[n], l = o.getComputedStyle(r)[n], u = i(s), d = i(l), c = Number.POSITIVE_INFINITY;
                    return u || d ? Math.min(u ? e(s, t, a) : c, d ? e(l, r, a) : c) : "none"
                }

                o.configMerge = function () {
                    return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (e, i, n, a) {
                            var r = i[e] || {}, s = n[e];
                            "scales" === e ? i[e] = o.scaleMerge(r, s) : "scale" === e ? i[e] = o.merge(r, [t.scaleService.getScaleDefaults(s.type), s]) : o._merger(e, i, n, a)
                        }
                    })
                }, o.scaleMerge = function () {
                    return o.merge(o.clone(arguments[0]), [].slice.call(arguments, 1), {
                        merger: function (e, i, n, a) {
                            if ("xAxes" === e || "yAxes" === e) {
                                var r, s, l, u = n[e].length;
                                for (i[e] || (i[e] = []), r = 0; r < u; ++r) l = n[e][r], s = o.valueOrDefault(l.type, "xAxes" === e ? "category" : "linear"), r >= i[e].length && i[e].push({}), !i[e][r].type || l.type && l.type !== i[e][r].type ? o.merge(i[e][r], [t.scaleService.getScaleDefaults(s), l]) : o.merge(i[e][r], l)
                            } else o._merger(e, i, n, a)
                        }
                    })
                }, o.where = function (t, e) {
                    if (o.isArray(t) && Array.prototype.filter) return t.filter(e);
                    var i = [];
                    return o.each(t, function (t) {
                        e(t) && i.push(t)
                    }), i
                }, o.findIndex = Array.prototype.findIndex ? function (t, e, i) {
                    return t.findIndex(e, i)
                } : function (t, e, i) {
                    i = void 0 === i ? t : i;
                    for (var n = 0, a = t.length; n < a; ++n) if (e.call(i, t[n], n, t)) return n;
                    return -1
                }, o.findNextWhere = function (t, e, i) {
                    o.isNullOrUndef(i) && (i = -1);
                    for (var n = i + 1; n < t.length; n++) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, o.findPreviousWhere = function (t, e, i) {
                    o.isNullOrUndef(i) && (i = t.length);
                    for (var n = i - 1; n >= 0; n--) {
                        var a = t[n];
                        if (e(a)) return a
                    }
                }, o.isNumber = function (t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                }, o.almostEquals = function (t, e, i) {
                    return Math.abs(t - e) < i
                }, o.almostWhole = function (t, e) {
                    var i = Math.round(t);
                    return i - e < t && i + e > t
                }, o.max = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.max(t, e)
                    }, Number.NEGATIVE_INFINITY)
                }, o.min = function (t) {
                    return t.reduce(function (t, e) {
                        return isNaN(e) ? t : Math.min(t, e)
                    }, Number.POSITIVE_INFINITY)
                }, o.sign = Math.sign ? function (t) {
                    return Math.sign(t)
                } : function (t) {
                    return 0 === (t = +t) || isNaN(t) ? t : t > 0 ? 1 : -1
                }, o.log10 = Math.log10 ? function (t) {
                    return Math.log10(t)
                } : function (t) {
                    var e = Math.log(t) * Math.LOG10E, i = Math.round(e);
                    return t === Math.pow(10, i) ? i : e
                }, o.toRadians = function (t) {
                    return t * (Math.PI / 180)
                }, o.toDegrees = function (t) {
                    return t * (180 / Math.PI)
                }, o.getAngleFromPoint = function (t, e) {
                    var i = e.x - t.x, n = e.y - t.y, a = Math.sqrt(i * i + n * n), o = Math.atan2(n, i);
                    return o < -.5 * Math.PI && (o += 2 * Math.PI), {angle: o, distance: a}
                }, o.distanceBetweenPoints = function (t, e) {
                    return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
                }, o.aliasPixel = function (t) {
                    return t % 2 == 0 ? 0 : .5
                }, o.splineCurve = function (t, e, i, n) {
                    var a = t.skip ? e : t, o = e, r = i.skip ? e : i, s = Math.sqrt(Math.pow(o.x - a.x, 2) + Math.pow(o.y - a.y, 2)), l = Math.sqrt(Math.pow(r.x - o.x, 2) + Math.pow(r.y - o.y, 2)),
                        u = s / (s + l), d = l / (s + l), c = n * (u = isNaN(u) ? 0 : u), h = n * (d = isNaN(d) ? 0 : d);
                    return {previous: {x: o.x - c * (r.x - a.x), y: o.y - c * (r.y - a.y)}, next: {x: o.x + h * (r.x - a.x), y: o.y + h * (r.y - a.y)}}
                }, o.EPSILON = Number.EPSILON || 1e-14, o.splineCurveMonotone = function (t) {
                    var e, i, n, a, r, s, l, u, d, c = (t || []).map(function (t) {
                        return {model: t._model, deltaK: 0, mK: 0}
                    }), h = c.length;
                    for (e = 0; e < h; ++e) if (!(n = c[e]).model.skip) {
                        if (i = e > 0 ? c[e - 1] : null, (a = e < h - 1 ? c[e + 1] : null) && !a.model.skip) {
                            var f = a.model.x - n.model.x;
                            n.deltaK = 0 !== f ? (a.model.y - n.model.y) / f : 0
                        }
                        !i || i.model.skip ? n.mK = n.deltaK : !a || a.model.skip ? n.mK = i.deltaK : this.sign(i.deltaK) !== this.sign(n.deltaK) ? n.mK = 0 : n.mK = (i.deltaK + n.deltaK) / 2
                    }
                    for (e = 0; e < h - 1; ++e) n = c[e], a = c[e + 1], n.model.skip || a.model.skip || (o.almostEquals(n.deltaK, 0, this.EPSILON) ? n.mK = a.mK = 0 : (r = n.mK / n.deltaK, s = a.mK / n.deltaK, (u = Math.pow(r, 2) + Math.pow(s, 2)) <= 9 || (l = 3 / Math.sqrt(u), n.mK = r * l * n.deltaK, a.mK = s * l * n.deltaK)));
                    for (e = 0; e < h; ++e) (n = c[e]).model.skip || (i = e > 0 ? c[e - 1] : null, a = e < h - 1 ? c[e + 1] : null, i && !i.model.skip && (d = (n.model.x - i.model.x) / 3, n.model.controlPointPreviousX = n.model.x - d, n.model.controlPointPreviousY = n.model.y - d * n.mK), a && !a.model.skip && (d = (a.model.x - n.model.x) / 3, n.model.controlPointNextX = n.model.x + d, n.model.controlPointNextY = n.model.y + d * n.mK))
                }, o.nextItem = function (t, e, i) {
                    return i ? e >= t.length - 1 ? t[0] : t[e + 1] : e >= t.length - 1 ? t[t.length - 1] : t[e + 1]
                }, o.previousItem = function (t, e, i) {
                    return i ? e <= 0 ? t[t.length - 1] : t[e - 1] : e <= 0 ? t[0] : t[e - 1]
                }, o.niceNum = function (t, e) {
                    var i = Math.floor(o.log10(t)), n = t / Math.pow(10, i);
                    return (e ? n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10 : n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10) * Math.pow(10, i)
                }, o.requestAnimFrame = "undefined" == typeof window ? function (t) {
                    t()
                } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 1e3 / 60)
                }, o.getRelativePosition = function (t, e) {
                    var i, n, a = t.originalEvent || t, r = t.currentTarget || t.srcElement, s = r.getBoundingClientRect(), l = a.touches;
                    l && l.length > 0 ? (i = l[0].clientX, n = l[0].clientY) : (i = a.clientX, n = a.clientY);
                    var u = parseFloat(o.getStyle(r, "padding-left")), d = parseFloat(o.getStyle(r, "padding-top")), c = parseFloat(o.getStyle(r, "padding-right")),
                        h = parseFloat(o.getStyle(r, "padding-bottom")), f = s.right - s.left - u - c, g = s.bottom - s.top - d - h;
                    return {x: i = Math.round((i - s.left - u) / f * r.width / e.currentDevicePixelRatio), y: n = Math.round((n - s.top - d) / g * r.height / e.currentDevicePixelRatio)}
                }, o.getConstraintWidth = function (t) {
                    return r(t, "max-width", "clientWidth")
                }, o.getConstraintHeight = function (t) {
                    return r(t, "max-height", "clientHeight")
                }, o.getMaximumWidth = function (t) {
                    var e = t.parentNode;
                    if (!e) return t.clientWidth;
                    var i = parseInt(o.getStyle(e, "padding-left"), 10), n = parseInt(o.getStyle(e, "padding-right"), 10), a = e.clientWidth - i - n, r = o.getConstraintWidth(t);
                    return isNaN(r) ? a : Math.min(a, r)
                }, o.getMaximumHeight = function (t) {
                    var e = t.parentNode;
                    if (!e) return t.clientHeight;
                    var i = parseInt(o.getStyle(e, "padding-top"), 10), n = parseInt(o.getStyle(e, "padding-bottom"), 10), a = e.clientHeight - i - n, r = o.getConstraintHeight(t);
                    return isNaN(r) ? a : Math.min(a, r)
                }, o.getStyle = function (t, e) {
                    return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e)
                }, o.retinaScale = function (t, e) {
                    var i = t.currentDevicePixelRatio = e || window.devicePixelRatio || 1;
                    if (1 !== i) {
                        var n = t.canvas, a = t.height, o = t.width;
                        n.height = a * i, n.width = o * i, t.ctx.scale(i, i), n.style.height || n.style.width || (n.style.height = a + "px", n.style.width = o + "px")
                    }
                }, o.fontString = function (t, e, i) {
                    return e + " " + t + "px " + i
                }, o.longestText = function (t, e, i, n) {
                    var a = (n = n || {}).data = n.data || {}, r = n.garbageCollect = n.garbageCollect || [];
                    n.font !== e && (a = n.data = {}, r = n.garbageCollect = [], n.font = e), t.font = e;
                    var s = 0;
                    o.each(i, function (e) {
                        null != e && !0 !== o.isArray(e) ? s = o.measureText(t, a, r, s, e) : o.isArray(e) && o.each(e, function (e) {
                            null == e || o.isArray(e) || (s = o.measureText(t, a, r, s, e))
                        })
                    });
                    var l = r.length / 2;
                    if (l > i.length) {
                        for (var u = 0; u < l; u++) delete a[r[u]];
                        r.splice(0, l)
                    }
                    return s
                }, o.measureText = function (t, e, i, n, a) {
                    var o = e[a];
                    return o || (o = e[a] = t.measureText(a).width, i.push(a)), o > n && (n = o), n
                }, o.numberOfLabelLines = function (t) {
                    var e = 1;
                    return o.each(t, function (t) {
                        o.isArray(t) && t.length > e && (e = t.length)
                    }), e
                }, o.color = n ? function (t) {
                    return t instanceof CanvasGradient && (t = a.global.defaultColor), n(t)
                } : function (t) {
                    return console.error("Color.js not found!"), t
                }, o.getHoverColor = function (t) {
                    return t instanceof CanvasPattern ? t : o.color(t).saturate(.5).darken(.1).rgbString()
                }
            }
        }, {25: 25, 3: 3, 45: 45}], 28: [function (t, e, i) {
            "use strict";
            var n = t(45);

            function a(t, e) {
                return t.native ? {x: t.x, y: t.y} : n.getRelativePosition(t, e)
            }

            function o(t, e) {
                var i, n, a, o, r;
                for (n = 0, o = t.data.datasets.length; n < o; ++n) if (t.isDatasetVisible(n)) for (a = 0, r = (i = t.getDatasetMeta(n)).data.length; a < r; ++a) {
                    var s = i.data[a];
                    s._view.skip || e(s)
                }
            }

            function r(t, e) {
                var i = [];
                return o(t, function (t) {
                    t.inRange(e.x, e.y) && i.push(t)
                }), i
            }

            function s(t, e, i, n) {
                var a = Number.POSITIVE_INFINITY, r = [];
                return o(t, function (t) {
                    if (!i || t.inRange(e.x, e.y)) {
                        var o = t.getCenterPoint(), s = n(e, o);
                        s < a ? (r = [t], a = s) : s === a && r.push(t)
                    }
                }), r
            }

            function l(t) {
                var e = -1 !== t.indexOf("x"), i = -1 !== t.indexOf("y");
                return function (t, n) {
                    var a = e ? Math.abs(t.x - n.x) : 0, o = i ? Math.abs(t.y - n.y) : 0;
                    return Math.sqrt(Math.pow(a, 2) + Math.pow(o, 2))
                }
            }

            function u(t, e, i) {
                var n = a(e, t);
                i.axis = i.axis || "x";
                var o = l(i.axis), u = i.intersect ? r(t, n) : s(t, n, !1, o), d = [];
                return u.length ? (t.data.datasets.forEach(function (e, i) {
                    if (t.isDatasetVisible(i)) {
                        var n = t.getDatasetMeta(i).data[u[0]._index];
                        n && !n._view.skip && d.push(n)
                    }
                }), d) : []
            }

            e.exports = {
                modes: {
                    single: function (t, e) {
                        var i = a(e, t), n = [];
                        return o(t, function (t) {
                            if (t.inRange(i.x, i.y)) return n.push(t), n
                        }), n.slice(0, 1)
                    }, label: u, index: u, dataset: function (t, e, i) {
                        var n = a(e, t);
                        i.axis = i.axis || "xy";
                        var o = l(i.axis), u = i.intersect ? r(t, n) : s(t, n, !1, o);
                        return u.length > 0 && (u = t.getDatasetMeta(u[0]._datasetIndex).data), u
                    }, "x-axis": function (t, e) {
                        return u(t, e, {intersect: !1})
                    }, point: function (t, e) {
                        return r(t, a(e, t))
                    }, nearest: function (t, e, i) {
                        var n = a(e, t);
                        i.axis = i.axis || "xy";
                        var o = l(i.axis), r = s(t, n, i.intersect, o);
                        return r.length > 1 && r.sort(function (t, e) {
                            var i = t.getArea() - e.getArea();
                            return 0 === i && (i = t._datasetIndex - e._datasetIndex), i
                        }), r.slice(0, 1)
                    }, x: function (t, e, i) {
                        var n = a(e, t), r = [], s = !1;
                        return o(t, function (t) {
                            t.inXRange(n.x) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
                        }), i.intersect && !s && (r = []), r
                    }, y: function (t, e, i) {
                        var n = a(e, t), r = [], s = !1;
                        return o(t, function (t) {
                            t.inYRange(n.y) && r.push(t), t.inRange(n.x, n.y) && (s = !0)
                        }), i.intersect && !s && (r = []), r
                    }
                }
            }
        }, {45: 45}], 29: [function (t, e, i) {
            "use strict";
            t(25)._set("global", {
                responsive: !0,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: !0,
                events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
                hover: {onHover: null, mode: "nearest", intersect: !0, animationDuration: 400},
                onClick: null,
                defaultColor: "rgba(0,0,0,0.1)",
                defaultFontColor: "#666",
                defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                defaultFontSize: 12,
                defaultFontStyle: "normal",
                showLines: !0,
                elements: {},
                layout: {padding: {top: 0, right: 0, bottom: 0, left: 0}}
            }), e.exports = function () {
                var t = function (t, e) {
                    return this.construct(t, e), this
                };
                return t.Chart = t, t
            }
        }, {25: 25}], 30: [function (t, e, i) {
            "use strict";
            var n = t(45);

            function a(t, e) {
                return n.where(t, function (t) {
                    return t.position === e
                })
            }

            function o(t, e) {
                t.forEach(function (t, e) {
                    return t._tmpIndex_ = e, t
                }), t.sort(function (t, i) {
                    var n = e ? i : t, a = e ? t : i;
                    return n.weight === a.weight ? n._tmpIndex_ - a._tmpIndex_ : n.weight - a.weight
                }), t.forEach(function (t) {
                    delete t._tmpIndex_
                })
            }

            e.exports = {
                defaults: {}, addBox: function (t, e) {
                    t.boxes || (t.boxes = []), e.fullWidth = e.fullWidth || !1, e.position = e.position || "top", e.weight = e.weight || 0, t.boxes.push(e)
                }, removeBox: function (t, e) {
                    var i = t.boxes ? t.boxes.indexOf(e) : -1;
                    -1 !== i && t.boxes.splice(i, 1)
                }, configure: function (t, e, i) {
                    for (var n, a = ["fullWidth", "position", "weight"], o = a.length, r = 0; r < o; ++r) n = a[r], i.hasOwnProperty(n) && (e[n] = i[n])
                }, update: function (t, e, i) {
                    if (t) {
                        var r = t.options.layout || {}, s = n.options.toPadding(r.padding), l = s.left, u = s.right, d = s.top, c = s.bottom, h = a(t.boxes, "left"), f = a(t.boxes, "right"),
                            g = a(t.boxes, "top"), p = a(t.boxes, "bottom"), m = a(t.boxes, "chartArea");
                        o(h, !0), o(f, !1), o(g, !0), o(p, !1);
                        var v = e - l - u, b = i - d - c, x = b / 2, y = (e - v / 2) / (h.length + f.length), k = (i - x) / (g.length + p.length), M = v, w = b, S = [];
                        n.each(h.concat(f, g, p), function (t) {
                            var e, i = t.isHorizontal();
                            i ? (e = t.update(t.fullWidth ? v : M, k), w -= e.height) : (e = t.update(y, w), M -= e.width), S.push({horizontal: i, minSize: e, box: t})
                        });
                        var C = 0, _ = 0, D = 0, I = 0;
                        n.each(g.concat(p), function (t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                C = Math.max(C, e.left), _ = Math.max(_, e.right)
                            }
                        }), n.each(h.concat(f), function (t) {
                            if (t.getPadding) {
                                var e = t.getPadding();
                                D = Math.max(D, e.top), I = Math.max(I, e.bottom)
                            }
                        });
                        var P = l, A = u, T = d, F = c;
                        n.each(h.concat(f), N), n.each(h, function (t) {
                            P += t.width
                        }), n.each(f, function (t) {
                            A += t.width
                        }), n.each(g.concat(p), N), n.each(g, function (t) {
                            T += t.height
                        }), n.each(p, function (t) {
                            F += t.height
                        }), n.each(h.concat(f), function (t) {
                            var e = n.findNextWhere(S, function (e) {
                                return e.box === t
                            }), i = {left: 0, right: 0, top: T, bottom: F};
                            e && t.update(e.minSize.width, w, i)
                        }), P = l, A = u, T = d, F = c, n.each(h, function (t) {
                            P += t.width
                        }), n.each(f, function (t) {
                            A += t.width
                        }), n.each(g, function (t) {
                            T += t.height
                        }), n.each(p, function (t) {
                            F += t.height
                        });
                        var O = Math.max(C - P, 0);
                        P += O, A += Math.max(_ - A, 0);
                        var R = Math.max(D - T, 0);
                        T += R, F += Math.max(I - F, 0);
                        var L = i - T - F, z = e - P - A;
                        z === M && L === w || (n.each(h, function (t) {
                            t.height = L
                        }), n.each(f, function (t) {
                            t.height = L
                        }), n.each(g, function (t) {
                            t.fullWidth || (t.width = z)
                        }), n.each(p, function (t) {
                            t.fullWidth || (t.width = z)
                        }), w = L, M = z);
                        var B = l + O, W = d + R;
                        n.each(h.concat(g), V), B += M, W += w, n.each(f, V), n.each(p, V), t.chartArea = {left: P, top: T, right: P + M, bottom: T + w}, n.each(m, function (e) {
                            e.left = t.chartArea.left, e.top = t.chartArea.top, e.right = t.chartArea.right, e.bottom = t.chartArea.bottom, e.update(M, w)
                        })
                    }

                    function N(t) {
                        var e = n.findNextWhere(S, function (e) {
                            return e.box === t
                        });
                        if (e) if (t.isHorizontal()) {
                            var i = {left: Math.max(P, C), right: Math.max(A, _), top: 0, bottom: 0};
                            t.update(t.fullWidth ? v : M, b / 2, i)
                        } else t.update(e.minSize.width, w)
                    }

                    function V(t) {
                        t.isHorizontal() ? (t.left = t.fullWidth ? l : P, t.right = t.fullWidth ? e - u : P + M, t.top = W, t.bottom = W + t.height, W = t.bottom) : (t.left = B, t.right = B + t.width, t.top = T, t.bottom = T + w, B = t.right)
                    }
                }
            }
        }, {45: 45}], 31: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(45);
            n._set("global", {plugins: {}}), e.exports = {
                _plugins: [], _cacheId: 0, register: function (t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function (t) {
                        -1 === e.indexOf(t) && e.push(t)
                    }), this._cacheId++
                }, unregister: function (t) {
                    var e = this._plugins;
                    [].concat(t).forEach(function (t) {
                        var i = e.indexOf(t);
                        -1 !== i && e.splice(i, 1)
                    }), this._cacheId++
                }, clear: function () {
                    this._plugins = [], this._cacheId++
                }, count: function () {
                    return this._plugins.length
                }, getAll: function () {
                    return this._plugins
                }, notify: function (t, e, i) {
                    var n, a, o, r, s, l = this.descriptors(t), u = l.length;
                    for (n = 0; n < u; ++n) if ("function" == typeof (s = (o = (a = l[n]).plugin)[e]) && ((r = [t].concat(i || [])).push(a.options), !1 === s.apply(o, r))) return !1;
                    return !0
                }, descriptors: function (t) {
                    var e = t.$plugins || (t.$plugins = {});
                    if (e.id === this._cacheId) return e.descriptors;
                    var i = [], o = [], r = t && t.config || {}, s = r.options && r.options.plugins || {};
                    return this._plugins.concat(r.plugins || []).forEach(function (t) {
                        if (-1 === i.indexOf(t)) {
                            var e = t.id, r = s[e];
                            !1 !== r && (!0 === r && (r = a.clone(n.global.plugins[e])), i.push(t), o.push({plugin: t, options: r || {}}))
                        }
                    }), e.descriptors = o, e.id = this._cacheId, o
                }, _invalidate: function (t) {
                    delete t.$plugins
                }
            }
        }, {25: 25, 45: 45}], 32: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26), o = t(45), r = t(34);

            function s(t) {
                var e, i, n = [];
                for (e = 0, i = t.length; e < i; ++e) n.push(t[e].label);
                return n
            }

            function l(t, e, i) {
                var n = t.getPixelForTick(e);
                return i && (n -= 0 === e ? (t.getPixelForTick(1) - n) / 2 : (n - t.getPixelForTick(e - 1)) / 2), n
            }

            n._set("scale", {
                display: !0,
                position: "left",
                offset: !1,
                gridLines: {
                    display: !0,
                    color: "rgba(0, 0, 0, 0.1)",
                    lineWidth: 1,
                    drawBorder: !0,
                    drawOnChartArea: !0,
                    drawTicks: !0,
                    tickMarkLength: 10,
                    zeroLineWidth: 1,
                    zeroLineColor: "rgba(0,0,0,0.25)",
                    zeroLineBorderDash: [],
                    zeroLineBorderDashOffset: 0,
                    offsetGridLines: !1,
                    borderDash: [],
                    borderDashOffset: 0
                },
                scaleLabel: {display: !1, labelString: "", lineHeight: 1.2, padding: {top: 4, bottom: 4}},
                ticks: {
                    beginAtZero: !1,
                    minRotation: 0,
                    maxRotation: 50,
                    mirror: !1,
                    padding: 0,
                    reverse: !1,
                    display: !0,
                    autoSkip: !0,
                    autoSkipPadding: 0,
                    labelOffset: 0,
                    callback: r.formatters.values,
                    minor: {},
                    major: {}
                }
            }), e.exports = function (t) {
                function e(t, e, i) {
                    return o.isArray(e) ? o.longestText(t, i, e) : t.measureText(e).width
                }

                function i(t) {
                    var e = o.valueOrDefault, i = n.global, a = e(t.fontSize, i.defaultFontSize), r = e(t.fontStyle, i.defaultFontStyle), s = e(t.fontFamily, i.defaultFontFamily);
                    return {size: a, style: r, family: s, font: o.fontString(a, r, s)}
                }

                function r(t) {
                    return o.options.toLineHeight(o.valueOrDefault(t.lineHeight, 1.2), o.valueOrDefault(t.fontSize, n.global.defaultFontSize))
                }

                t.Scale = a.extend({
                    getPadding: function () {
                        return {left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0}
                    }, getTicks: function () {
                        return this._ticks
                    }, mergeTicksOptions: function () {
                        var t = this.options.ticks;
                        for (var e in !1 === t.minor && (t.minor = {display: !1}), !1 === t.major && (t.major = {display: !1}), t) "major" !== e && "minor" !== e && (void 0 === t.minor[e] && (t.minor[e] = t[e]), void 0 === t.major[e] && (t.major[e] = t[e]))
                    }, beforeUpdate: function () {
                        o.callback(this.options.beforeUpdate, [this])
                    }, update: function (t, e, i) {
                        var n, a, r, s, l, u, d = this;
                        for (d.beforeUpdate(), d.maxWidth = t, d.maxHeight = e, d.margins = o.extend({
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, i), d.longestTextCache = d.longestTextCache || {}, d.beforeSetDimensions(), d.setDimensions(), d.afterSetDimensions(), d.beforeDataLimits(), d.determineDataLimits(), d.afterDataLimits(), d.beforeBuildTicks(), l = d.buildTicks() || [], d.afterBuildTicks(), d.beforeTickToLabelConversion(), r = d.convertTicksToLabels(l) || d.ticks, d.afterTickToLabelConversion(), d.ticks = r, n = 0, a = r.length; n < a; ++n) s = r[n], (u = l[n]) ? u.label = s : l.push(u = {
                            label: s,
                            major: !1
                        });
                        return d._ticks = l, d.beforeCalculateTickRotation(), d.calculateTickRotation(), d.afterCalculateTickRotation(), d.beforeFit(), d.fit(), d.afterFit(), d.afterUpdate(), d.minSize
                    }, afterUpdate: function () {
                        o.callback(this.options.afterUpdate, [this])
                    }, beforeSetDimensions: function () {
                        o.callback(this.options.beforeSetDimensions, [this])
                    }, setDimensions: function () {
                        var t = this;
                        t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0
                    }, afterSetDimensions: function () {
                        o.callback(this.options.afterSetDimensions, [this])
                    }, beforeDataLimits: function () {
                        o.callback(this.options.beforeDataLimits, [this])
                    }, determineDataLimits: o.noop, afterDataLimits: function () {
                        o.callback(this.options.afterDataLimits, [this])
                    }, beforeBuildTicks: function () {
                        o.callback(this.options.beforeBuildTicks, [this])
                    }, buildTicks: o.noop, afterBuildTicks: function () {
                        o.callback(this.options.afterBuildTicks, [this])
                    }, beforeTickToLabelConversion: function () {
                        o.callback(this.options.beforeTickToLabelConversion, [this])
                    }, convertTicksToLabels: function () {
                        var t = this.options.ticks;
                        this.ticks = this.ticks.map(t.userCallback || t.callback, this)
                    }, afterTickToLabelConversion: function () {
                        o.callback(this.options.afterTickToLabelConversion, [this])
                    }, beforeCalculateTickRotation: function () {
                        o.callback(this.options.beforeCalculateTickRotation, [this])
                    }, calculateTickRotation: function () {
                        var t = this, e = t.ctx, n = t.options.ticks, a = s(t._ticks), r = i(n);
                        e.font = r.font;
                        var l = n.minRotation || 0;
                        if (a.length && t.options.display && t.isHorizontal()) for (var u, d = o.longestText(e, r.font, a, t.longestTextCache), c = d, h = t.getPixelForTick(1) - t.getPixelForTick(0) - 6; c > h && l < n.maxRotation;) {
                            var f = o.toRadians(l);
                            if (u = Math.cos(f), Math.sin(f) * d > t.maxHeight) {
                                l--;
                                break
                            }
                            l++, c = u * d
                        }
                        t.labelRotation = l
                    }, afterCalculateTickRotation: function () {
                        o.callback(this.options.afterCalculateTickRotation, [this])
                    }, beforeFit: function () {
                        o.callback(this.options.beforeFit, [this])
                    }, fit: function () {
                        var t = this, n = t.minSize = {width: 0, height: 0}, a = s(t._ticks), l = t.options, u = l.ticks, d = l.scaleLabel, c = l.gridLines, h = l.display, f = t.isHorizontal(),
                            g = i(u), p = l.gridLines.tickMarkLength;
                        if (n.width = f ? t.isFullWidth() ? t.maxWidth - t.margins.left - t.margins.right : t.maxWidth : h && c.drawTicks ? p : 0, n.height = f ? h && c.drawTicks ? p : 0 : t.maxHeight, d.display && h) {
                            var m = r(d) + o.options.toPadding(d.padding).height;
                            f ? n.height += m : n.width += m
                        }
                        if (u.display && h) {
                            var v = o.longestText(t.ctx, g.font, a, t.longestTextCache), b = o.numberOfLabelLines(a), x = .5 * g.size, y = t.options.ticks.padding;
                            if (f) {
                                t.longestLabelWidth = v;
                                var k = o.toRadians(t.labelRotation), M = Math.cos(k), w = Math.sin(k) * v + g.size * b + x * (b - 1) + x;
                                n.height = Math.min(t.maxHeight, n.height + w + y), t.ctx.font = g.font;
                                var S = e(t.ctx, a[0], g.font), C = e(t.ctx, a[a.length - 1], g.font);
                                0 !== t.labelRotation ? (t.paddingLeft = "bottom" === l.position ? M * S + 3 : M * x + 3, t.paddingRight = "bottom" === l.position ? M * x + 3 : M * C + 3) : (t.paddingLeft = S / 2 + 3, t.paddingRight = C / 2 + 3)
                            } else u.mirror ? v = 0 : v += y + x, n.width = Math.min(t.maxWidth, n.width + v), t.paddingTop = g.size / 2, t.paddingBottom = g.size / 2
                        }
                        t.handleMargins(), t.width = n.width, t.height = n.height
                    }, handleMargins: function () {
                        var t = this;
                        t.margins && (t.paddingLeft = Math.max(t.paddingLeft - t.margins.left, 0), t.paddingTop = Math.max(t.paddingTop - t.margins.top, 0), t.paddingRight = Math.max(t.paddingRight - t.margins.right, 0), t.paddingBottom = Math.max(t.paddingBottom - t.margins.bottom, 0))
                    }, afterFit: function () {
                        o.callback(this.options.afterFit, [this])
                    }, isHorizontal: function () {
                        return "top" === this.options.position || "bottom" === this.options.position
                    }, isFullWidth: function () {
                        return this.options.fullWidth
                    }, getRightValue: function (t) {
                        if (o.isNullOrUndef(t)) return NaN;
                        if ("number" == typeof t && !isFinite(t)) return NaN;
                        if (t) if (this.isHorizontal()) {
                            if (void 0 !== t.x) return this.getRightValue(t.x)
                        } else if (void 0 !== t.y) return this.getRightValue(t.y);
                        return t
                    }, getLabelForIndex: o.noop, getPixelForValue: o.noop, getValueForPixel: o.noop, getPixelForTick: function (t) {
                        var e = this, i = e.options.offset;
                        if (e.isHorizontal()) {
                            var n = (e.width - (e.paddingLeft + e.paddingRight)) / Math.max(e._ticks.length - (i ? 0 : 1), 1), a = n * t + e.paddingLeft;
                            i && (a += n / 2);
                            var o = e.left + Math.round(a);
                            return o += e.isFullWidth() ? e.margins.left : 0
                        }
                        var r = e.height - (e.paddingTop + e.paddingBottom);
                        return e.top + t * (r / (e._ticks.length - 1))
                    }, getPixelForDecimal: function (t) {
                        var e = this;
                        if (e.isHorizontal()) {
                            var i = (e.width - (e.paddingLeft + e.paddingRight)) * t + e.paddingLeft, n = e.left + Math.round(i);
                            return n += e.isFullWidth() ? e.margins.left : 0
                        }
                        return e.top + t * e.height
                    }, getBasePixel: function () {
                        return this.getPixelForValue(this.getBaseValue())
                    }, getBaseValue: function () {
                        var t = this.min, e = this.max;
                        return this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
                    }, _autoSkip: function (t) {
                        var e, i, n, a, r = this, s = r.isHorizontal(), l = r.options.ticks.minor, u = t.length, d = o.toRadians(r.labelRotation), c = Math.cos(d), h = r.longestLabelWidth * c, f = [];
                        for (l.maxTicksLimit && (a = l.maxTicksLimit), s && (e = !1, (h + l.autoSkipPadding) * u > r.width - (r.paddingLeft + r.paddingRight) && (e = 1 + Math.floor((h + l.autoSkipPadding) * u / (r.width - (r.paddingLeft + r.paddingRight)))), a && u > a && (e = Math.max(e, Math.floor(u / a)))), i = 0; i < u; i++) n = t[i], (e > 1 && i % e > 0 || i % e == 0 && i + e >= u) && i !== u - 1 && delete n.label, f.push(n);
                        return f
                    }, draw: function (t) {
                        var e = this, a = e.options;
                        if (a.display) {
                            var s = e.ctx, u = n.global, d = a.ticks.minor, c = a.ticks.major || d, h = a.gridLines, f = a.scaleLabel, g = 0 !== e.labelRotation, p = e.isHorizontal(),
                                m = d.autoSkip ? e._autoSkip(e.getTicks()) : e.getTicks(), v = o.valueOrDefault(d.fontColor, u.defaultFontColor), b = i(d),
                                x = o.valueOrDefault(c.fontColor, u.defaultFontColor), y = i(c), k = h.drawTicks ? h.tickMarkLength : 0, M = o.valueOrDefault(f.fontColor, u.defaultFontColor),
                                w = i(f), S = o.options.toPadding(f.padding), C = o.toRadians(e.labelRotation), _ = [], D = e.options.gridLines.lineWidth,
                                I = "right" === a.position ? e.right : e.right - D - k, P = "right" === a.position ? e.right + k : e.right, A = "bottom" === a.position ? e.top + D : e.bottom - k - D,
                                T = "bottom" === a.position ? e.top + D + k : e.bottom + D;
                            if (o.each(m, function (i, n) {
                                if (!o.isNullOrUndef(i.label)) {
                                    var r, s, c, f, v, b, x, y, M, w, S, F, O, R, L = i.label;
                                    n === e.zeroLineIndex && a.offset === h.offsetGridLines ? (r = h.zeroLineWidth, s = h.zeroLineColor, c = h.zeroLineBorderDash, f = h.zeroLineBorderDashOffset) : (r = o.valueAtIndexOrDefault(h.lineWidth, n), s = o.valueAtIndexOrDefault(h.color, n), c = o.valueOrDefault(h.borderDash, u.borderDash), f = o.valueOrDefault(h.borderDashOffset, u.borderDashOffset));
                                    var z = "middle", B = "middle", W = d.padding;
                                    if (p) {
                                        var N = k + W;
                                        "bottom" === a.position ? (B = g ? "middle" : "top", z = g ? "right" : "center", R = e.top + N) : (B = g ? "middle" : "bottom", z = g ? "left" : "center", R = e.bottom - N);
                                        var V = l(e, n, h.offsetGridLines && m.length > 1);
                                        V < e.left && (s = "rgba(0,0,0,0)"), V += o.aliasPixel(r), O = e.getPixelForTick(n) + d.labelOffset, v = x = M = S = V, b = A, y = T, w = t.top, F = t.bottom + D
                                    } else {
                                        var E, H = "left" === a.position;
                                        d.mirror ? (z = H ? "left" : "right", E = W) : (z = H ? "right" : "left", E = k + W), O = H ? e.right - E : e.left + E;
                                        var j = l(e, n, h.offsetGridLines && m.length > 1);
                                        j < e.top && (s = "rgba(0,0,0,0)"), j += o.aliasPixel(r), R = e.getPixelForTick(n) + d.labelOffset, v = I, x = P, M = t.left, S = t.right + D, b = y = w = F = j
                                    }
                                    _.push({
                                        tx1: v,
                                        ty1: b,
                                        tx2: x,
                                        ty2: y,
                                        x1: M,
                                        y1: w,
                                        x2: S,
                                        y2: F,
                                        labelX: O,
                                        labelY: R,
                                        glWidth: r,
                                        glColor: s,
                                        glBorderDash: c,
                                        glBorderDashOffset: f,
                                        rotation: -1 * C,
                                        label: L,
                                        major: i.major,
                                        textBaseline: B,
                                        textAlign: z
                                    })
                                }
                            }), o.each(_, function (t) {
                                if (h.display && (s.save(), s.lineWidth = t.glWidth, s.strokeStyle = t.glColor, s.setLineDash && (s.setLineDash(t.glBorderDash), s.lineDashOffset = t.glBorderDashOffset), s.beginPath(), h.drawTicks && (s.moveTo(t.tx1, t.ty1), s.lineTo(t.tx2, t.ty2)), h.drawOnChartArea && (s.moveTo(t.x1, t.y1), s.lineTo(t.x2, t.y2)), s.stroke(), s.restore()), d.display) {
                                    s.save(), s.translate(t.labelX, t.labelY), s.rotate(t.rotation), s.font = t.major ? y.font : b.font, s.fillStyle = t.major ? x : v, s.textBaseline = t.textBaseline, s.textAlign = t.textAlign;
                                    var i = t.label;
                                    if (o.isArray(i)) for (var n = i.length, a = 1.5 * b.size, r = e.isHorizontal() ? 0 : -a * (n - 1) / 2, l = 0; l < n; ++l) s.fillText("" + i[l], 0, r), r += a; else s.fillText(i, 0, 0);
                                    s.restore()
                                }
                            }), f.display) {
                                var F, O, R = 0, L = r(f) / 2;
                                if (p) F = e.left + (e.right - e.left) / 2, O = "bottom" === a.position ? e.bottom - L - S.bottom : e.top + L + S.top; else {
                                    var z = "left" === a.position;
                                    F = z ? e.left + L + S.top : e.right - L - S.top, O = e.top + (e.bottom - e.top) / 2, R = z ? -.5 * Math.PI : .5 * Math.PI
                                }
                                s.save(), s.translate(F, O), s.rotate(R), s.textAlign = "center", s.textBaseline = "middle", s.fillStyle = M, s.font = w.font, s.fillText(f.labelString, 0, 0), s.restore()
                            }
                            if (h.drawBorder) {
                                s.lineWidth = o.valueAtIndexOrDefault(h.lineWidth, 0), s.strokeStyle = o.valueAtIndexOrDefault(h.color, 0);
                                var B = e.left, W = e.right + D, N = e.top, V = e.bottom + D, E = o.aliasPixel(s.lineWidth);
                                p ? (N = V = "top" === a.position ? e.bottom : e.top, N += E, V += E) : (B = W = "left" === a.position ? e.right : e.left, B += E, W += E), s.beginPath(), s.moveTo(B, N), s.lineTo(W, V), s.stroke()
                            }
                        }
                    }
                })
            }
        }, {25: 25, 26: 26, 34: 34, 45: 45}], 33: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(45), o = t(30);
            e.exports = function (t) {
                t.scaleService = {
                    constructors: {}, defaults: {}, registerScaleType: function (t, e, i) {
                        this.constructors[t] = e, this.defaults[t] = a.clone(i)
                    }, getScaleConstructor: function (t) {
                        return this.constructors.hasOwnProperty(t) ? this.constructors[t] : void 0
                    }, getScaleDefaults: function (t) {
                        return this.defaults.hasOwnProperty(t) ? a.merge({}, [n.scale, this.defaults[t]]) : {}
                    }, updateScaleDefaults: function (t, e) {
                        this.defaults.hasOwnProperty(t) && (this.defaults[t] = a.extend(this.defaults[t], e))
                    }, addScalesToLayout: function (t) {
                        a.each(t.scales, function (e) {
                            e.fullWidth = e.options.fullWidth, e.position = e.options.position, e.weight = e.options.weight, o.addBox(t, e)
                        })
                    }
                }
            }
        }, {25: 25, 30: 30, 45: 45}], 34: [function (t, e, i) {
            "use strict";
            var n = t(45);
            e.exports = {
                formatters: {
                    values: function (t) {
                        return n.isArray(t) ? t : "" + t
                    }, linear: function (t, e, i) {
                        var a = i.length > 3 ? i[2] - i[1] : i[1] - i[0];
                        Math.abs(a) > 1 && t !== Math.floor(t) && (a = t - Math.floor(t));
                        var o = n.log10(Math.abs(a)), r = "";
                        if (0 !== t) {
                            var s = -1 * Math.floor(o);
                            s = Math.max(Math.min(s, 20), 0), r = t.toFixed(s)
                        } else r = "0";
                        return r
                    }, logarithmic: function (t, e, i) {
                        var a = t / Math.pow(10, Math.floor(n.log10(t)));
                        return 0 === t ? "0" : 1 === a || 2 === a || 5 === a || 0 === e || e === i.length - 1 ? t.toExponential() : ""
                    }
                }
            }
        }, {45: 45}], 35: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26), o = t(45);
            n._set("global", {
                tooltips: {
                    enabled: !0,
                    custom: null,
                    mode: "nearest",
                    position: "average",
                    intersect: !0,
                    backgroundColor: "rgba(0,0,0,0.8)",
                    titleFontStyle: "bold",
                    titleSpacing: 2,
                    titleMarginBottom: 6,
                    titleFontColor: "#fff",
                    titleAlign: "left",
                    bodySpacing: 2,
                    bodyFontColor: "#fff",
                    bodyAlign: "left",
                    footerFontStyle: "bold",
                    footerSpacing: 2,
                    footerMarginTop: 6,
                    footerFontColor: "#fff",
                    footerAlign: "left",
                    yPadding: 6,
                    xPadding: 6,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    multiKeyBackground: "#fff",
                    displayColors: !0,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    callbacks: {
                        beforeTitle: o.noop, title: function (t, e) {
                            var i = "", n = e.labels, a = n ? n.length : 0;
                            if (t.length > 0) {
                                var o = t[0];
                                o.xLabel ? i = o.xLabel : a > 0 && o.index < a && (i = n[o.index])
                            }
                            return i
                        }, afterTitle: o.noop, beforeBody: o.noop, beforeLabel: o.noop, label: function (t, e) {
                            var i = e.datasets[t.datasetIndex].label || "";
                            return i && (i += ": "), i += t.yLabel
                        }, labelColor: function (t, e) {
                            var i = e.getDatasetMeta(t.datasetIndex).data[t.index]._view;
                            return {borderColor: i.borderColor, backgroundColor: i.backgroundColor}
                        }, labelTextColor: function () {
                            return this._options.bodyFontColor
                        }, afterLabel: o.noop, afterBody: o.noop, beforeFooter: o.noop, footer: o.noop, afterFooter: o.noop
                    }
                }
            }), e.exports = function (t) {
                function e(t, e) {
                    var i = o.color(t);
                    return i.alpha(e * i.alpha()).rgbaString()
                }

                function i(t, e) {
                    return e && (o.isArray(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
                }

                function r(t) {
                    var e = n.global, i = o.valueOrDefault;
                    return {
                        xPadding: t.xPadding,
                        yPadding: t.yPadding,
                        xAlign: t.xAlign,
                        yAlign: t.yAlign,
                        bodyFontColor: t.bodyFontColor,
                        _bodyFontFamily: i(t.bodyFontFamily, e.defaultFontFamily),
                        _bodyFontStyle: i(t.bodyFontStyle, e.defaultFontStyle),
                        _bodyAlign: t.bodyAlign,
                        bodyFontSize: i(t.bodyFontSize, e.defaultFontSize),
                        bodySpacing: t.bodySpacing,
                        titleFontColor: t.titleFontColor,
                        _titleFontFamily: i(t.titleFontFamily, e.defaultFontFamily),
                        _titleFontStyle: i(t.titleFontStyle, e.defaultFontStyle),
                        titleFontSize: i(t.titleFontSize, e.defaultFontSize),
                        _titleAlign: t.titleAlign,
                        titleSpacing: t.titleSpacing,
                        titleMarginBottom: t.titleMarginBottom,
                        footerFontColor: t.footerFontColor,
                        _footerFontFamily: i(t.footerFontFamily, e.defaultFontFamily),
                        _footerFontStyle: i(t.footerFontStyle, e.defaultFontStyle),
                        footerFontSize: i(t.footerFontSize, e.defaultFontSize),
                        _footerAlign: t.footerAlign,
                        footerSpacing: t.footerSpacing,
                        footerMarginTop: t.footerMarginTop,
                        caretSize: t.caretSize,
                        cornerRadius: t.cornerRadius,
                        backgroundColor: t.backgroundColor,
                        opacity: 0,
                        legendColorBackground: t.multiKeyBackground,
                        displayColors: t.displayColors,
                        borderColor: t.borderColor,
                        borderWidth: t.borderWidth
                    }
                }

                t.Tooltip = a.extend({
                    initialize: function () {
                        this._model = r(this._options), this._lastActive = []
                    }, getTitle: function () {
                        var t = this._options.callbacks, e = t.beforeTitle.apply(this, arguments), n = t.title.apply(this, arguments), a = t.afterTitle.apply(this, arguments), o = [];
                        return o = i(o = i(o = i(o, e), n), a)
                    }, getBeforeBody: function () {
                        var t = this._options.callbacks.beforeBody.apply(this, arguments);
                        return o.isArray(t) ? t : void 0 !== t ? [t] : []
                    }, getBody: function (t, e) {
                        var n = this, a = n._options.callbacks, r = [];
                        return o.each(t, function (t) {
                            var o = {before: [], lines: [], after: []};
                            i(o.before, a.beforeLabel.call(n, t, e)), i(o.lines, a.label.call(n, t, e)), i(o.after, a.afterLabel.call(n, t, e)), r.push(o)
                        }), r
                    }, getAfterBody: function () {
                        var t = this._options.callbacks.afterBody.apply(this, arguments);
                        return o.isArray(t) ? t : void 0 !== t ? [t] : []
                    }, getFooter: function () {
                        var t = this._options.callbacks, e = t.beforeFooter.apply(this, arguments), n = t.footer.apply(this, arguments), a = t.afterFooter.apply(this, arguments), o = [];
                        return o = i(o = i(o = i(o, e), n), a)
                    }, update: function (e) {
                        var i, n, a, s, l, u, d, c, h, f, g, p, m, v, b, x, y, k, M, w, S = this, C = S._options, _ = S._model, D = S._model = r(C), I = S._active, P = S._data,
                            A = {xAlign: _.xAlign, yAlign: _.yAlign}, T = {x: _.x, y: _.y}, F = {width: _.width, height: _.height}, O = {x: _.caretX, y: _.caretY};
                        if (I.length) {
                            D.opacity = 1;
                            var R = [], L = [];
                            O = t.Tooltip.positioners[C.position].call(S, I, S._eventPosition);
                            var z = [];
                            for (i = 0, n = I.length; i < n; ++i) z.push((x = I[i], y = void 0, k = void 0, void 0, void 0, y = x._xScale, k = x._yScale || x._scale, M = x._index, w = x._datasetIndex, {
                                xLabel: y ? y.getLabelForIndex(M, w) : "",
                                yLabel: k ? k.getLabelForIndex(M, w) : "",
                                index: M,
                                datasetIndex: w,
                                x: x._model.x,
                                y: x._model.y
                            }));
                            C.filter && (z = z.filter(function (t) {
                                return C.filter(t, P)
                            })), C.itemSort && (z = z.sort(function (t, e) {
                                return C.itemSort(t, e, P)
                            })), o.each(z, function (t) {
                                R.push(C.callbacks.labelColor.call(S, t, S._chart)), L.push(C.callbacks.labelTextColor.call(S, t, S._chart))
                            }), D.title = S.getTitle(z, P), D.beforeBody = S.getBeforeBody(z, P), D.body = S.getBody(z, P), D.afterBody = S.getAfterBody(z, P), D.footer = S.getFooter(z, P), D.x = Math.round(O.x), D.y = Math.round(O.y), D.caretPadding = C.caretPadding, D.labelColors = R, D.labelTextColors = L, D.dataPoints = z, A = function (t, e) {
                                var i, n, a, o, r, s = t._model, l = t._chart, u = t._chart.chartArea, d = "center", c = "center";
                                s.y < e.height ? c = "top" : s.y > l.height - e.height && (c = "bottom");
                                var h = (u.left + u.right) / 2, f = (u.top + u.bottom) / 2;
                                "center" === c ? (i = function (t) {
                                    return t <= h
                                }, n = function (t) {
                                    return t > h
                                }) : (i = function (t) {
                                    return t <= e.width / 2
                                }, n = function (t) {
                                    return t >= l.width - e.width / 2
                                }), a = function (t) {
                                    return t + e.width + s.caretSize + s.caretPadding > l.width
                                }, o = function (t) {
                                    return t - e.width - s.caretSize - s.caretPadding < 0
                                }, r = function (t) {
                                    return t <= f ? "top" : "bottom"
                                }, i(s.x) ? (d = "left", a(s.x) && (d = "center", c = r(s.y))) : n(s.x) && (d = "right", o(s.x) && (d = "center", c = r(s.y)));
                                var g = t._options;
                                return {xAlign: g.xAlign ? g.xAlign : d, yAlign: g.yAlign ? g.yAlign : c}
                            }(this, F = function (t, e) {
                                var i = t._chart.ctx, n = 2 * e.yPadding, a = 0, r = e.body, s = r.reduce(function (t, e) {
                                    return t + e.before.length + e.lines.length + e.after.length
                                }, 0);
                                s += e.beforeBody.length + e.afterBody.length;
                                var l = e.title.length, u = e.footer.length, d = e.titleFontSize, c = e.bodyFontSize, h = e.footerFontSize;
                                n += l * d, n += l ? (l - 1) * e.titleSpacing : 0, n += l ? e.titleMarginBottom : 0, n += s * c, n += s ? (s - 1) * e.bodySpacing : 0, n += u ? e.footerMarginTop : 0, n += u * h, n += u ? (u - 1) * e.footerSpacing : 0;
                                var f = 0, g = function (t) {
                                    a = Math.max(a, i.measureText(t).width + f)
                                };
                                return i.font = o.fontString(d, e._titleFontStyle, e._titleFontFamily), o.each(e.title, g), i.font = o.fontString(c, e._bodyFontStyle, e._bodyFontFamily), o.each(e.beforeBody.concat(e.afterBody), g), f = e.displayColors ? c + 2 : 0, o.each(r, function (t) {
                                    o.each(t.before, g), o.each(t.lines, g), o.each(t.after, g)
                                }), f = 0, i.font = o.fontString(h, e._footerFontStyle, e._footerFontFamily), o.each(e.footer, g), {width: a += 2 * e.xPadding, height: n}
                            }(this, D)), a = D, s = F, l = A, u = S._chart, d = a.x, c = a.y, h = a.caretSize, f = a.caretPadding, g = a.cornerRadius, p = l.xAlign, m = l.yAlign, v = h + f, b = g + f, "right" === p ? d -= s.width : "center" === p && ((d -= s.width / 2) + s.width > u.width && (d = u.width - s.width), d < 0 && (d = 0)), "top" === m ? c += v : c -= "bottom" === m ? s.height + v : s.height / 2, "center" === m ? "left" === p ? d += v : "right" === p && (d -= v) : "left" === p ? d -= b : "right" === p && (d += b), T = {
                                x: d,
                                y: c
                            }
                        } else D.opacity = 0;
                        return D.xAlign = A.xAlign, D.yAlign = A.yAlign, D.x = T.x, D.y = T.y, D.width = F.width, D.height = F.height, D.caretX = O.x, D.caretY = O.y, S._model = D, e && C.custom && C.custom.call(S, D), S
                    }, drawCaret: function (t, e) {
                        var i = this._chart.ctx, n = this._view, a = this.getCaretPosition(t, e, n);
                        i.lineTo(a.x1, a.y1), i.lineTo(a.x2, a.y2), i.lineTo(a.x3, a.y3)
                    }, getCaretPosition: function (t, e, i) {
                        var n, a, o, r, s, l, u = i.caretSize, d = i.cornerRadius, c = i.xAlign, h = i.yAlign, f = t.x, g = t.y, p = e.width, m = e.height;
                        if ("center" === h) s = g + m / 2, "left" === c ? (a = (n = f) - u, o = n, r = s + u, l = s - u) : (a = (n = f + p) + u, o = n, r = s - u, l = s + u); else if ("left" === c ? (n = (a = f + d + u) - u, o = a + u) : "right" === c ? (n = (a = f + p - d - u) - u, o = a + u) : (n = (a = i.caretX) - u, o = a + u), "top" === h) s = (r = g) - u, l = r; else {
                            s = (r = g + m) + u, l = r;
                            var v = o;
                            o = n, n = v
                        }
                        return {x1: n, x2: a, x3: o, y1: r, y2: s, y3: l}
                    }, drawTitle: function (t, i, n, a) {
                        var r = i.title;
                        if (r.length) {
                            n.textAlign = i._titleAlign, n.textBaseline = "top";
                            var s, l, u = i.titleFontSize, d = i.titleSpacing;
                            for (n.fillStyle = e(i.titleFontColor, a), n.font = o.fontString(u, i._titleFontStyle, i._titleFontFamily), s = 0, l = r.length; s < l; ++s) n.fillText(r[s], t.x, t.y), t.y += u + d, s + 1 === r.length && (t.y += i.titleMarginBottom - d)
                        }
                    }, drawBody: function (t, i, n, a) {
                        var r = i.bodyFontSize, s = i.bodySpacing, l = i.body;
                        n.textAlign = i._bodyAlign, n.textBaseline = "top", n.font = o.fontString(r, i._bodyFontStyle, i._bodyFontFamily);
                        var u = 0, d = function (e) {
                            n.fillText(e, t.x + u, t.y), t.y += r + s
                        };
                        n.fillStyle = e(i.bodyFontColor, a), o.each(i.beforeBody, d);
                        var c = i.displayColors;
                        u = c ? r + 2 : 0, o.each(l, function (s, l) {
                            var u = e(i.labelTextColors[l], a);
                            n.fillStyle = u, o.each(s.before, d), o.each(s.lines, function (o) {
                                c && (n.fillStyle = e(i.legendColorBackground, a), n.fillRect(t.x, t.y, r, r), n.lineWidth = 1, n.strokeStyle = e(i.labelColors[l].borderColor, a), n.strokeRect(t.x, t.y, r, r), n.fillStyle = e(i.labelColors[l].backgroundColor, a), n.fillRect(t.x + 1, t.y + 1, r - 2, r - 2), n.fillStyle = u), d(o)
                            }), o.each(s.after, d)
                        }), u = 0, o.each(i.afterBody, d), t.y -= s
                    }, drawFooter: function (t, i, n, a) {
                        var r = i.footer;
                        r.length && (t.y += i.footerMarginTop, n.textAlign = i._footerAlign, n.textBaseline = "top", n.fillStyle = e(i.footerFontColor, a), n.font = o.fontString(i.footerFontSize, i._footerFontStyle, i._footerFontFamily), o.each(r, function (e) {
                            n.fillText(e, t.x, t.y), t.y += i.footerFontSize + i.footerSpacing
                        }))
                    }, drawBackground: function (t, i, n, a, o) {
                        n.fillStyle = e(i.backgroundColor, o), n.strokeStyle = e(i.borderColor, o), n.lineWidth = i.borderWidth;
                        var r = i.xAlign, s = i.yAlign, l = t.x, u = t.y, d = a.width, c = a.height, h = i.cornerRadius;
                        n.beginPath(), n.moveTo(l + h, u), "top" === s && this.drawCaret(t, a), n.lineTo(l + d - h, u), n.quadraticCurveTo(l + d, u, l + d, u + h), "center" === s && "right" === r && this.drawCaret(t, a), n.lineTo(l + d, u + c - h), n.quadraticCurveTo(l + d, u + c, l + d - h, u + c), "bottom" === s && this.drawCaret(t, a), n.lineTo(l + h, u + c), n.quadraticCurveTo(l, u + c, l, u + c - h), "center" === s && "left" === r && this.drawCaret(t, a), n.lineTo(l, u + h), n.quadraticCurveTo(l, u, l + h, u), n.closePath(), n.fill(), i.borderWidth > 0 && n.stroke()
                    }, draw: function () {
                        var t = this._chart.ctx, e = this._view;
                        if (0 !== e.opacity) {
                            var i = {width: e.width, height: e.height}, n = {x: e.x, y: e.y}, a = Math.abs(e.opacity < .001) ? 0 : e.opacity,
                                o = e.title.length || e.beforeBody.length || e.body.length || e.afterBody.length || e.footer.length;
                            this._options.enabled && o && (this.drawBackground(n, e, t, i, a), n.x += e.xPadding, n.y += e.yPadding, this.drawTitle(n, e, t, a), this.drawBody(n, e, t, a), this.drawFooter(n, e, t, a))
                        }
                    }, handleEvent: function (t) {
                        var e, i = this, n = i._options;
                        return i._lastActive = i._lastActive || [], "mouseout" === t.type ? i._active = [] : i._active = i._chart.getElementsAtEventForMode(t, n.mode, n), (e = !o.arrayEquals(i._active, i._lastActive)) && (i._lastActive = i._active, (n.enabled || n.custom) && (i._eventPosition = {
                            x: t.x,
                            y: t.y
                        }, i.update(!0), i.pivot())), e
                    }
                }), t.Tooltip.positioners = {
                    average: function (t) {
                        if (!t.length) return !1;
                        var e, i, n = 0, a = 0, o = 0;
                        for (e = 0, i = t.length; e < i; ++e) {
                            var r = t[e];
                            if (r && r.hasValue()) {
                                var s = r.tooltipPosition();
                                n += s.x, a += s.y, ++o
                            }
                        }
                        return {x: Math.round(n / o), y: Math.round(a / o)}
                    }, nearest: function (t, e) {
                        var i, n, a, r = e.x, s = e.y, l = Number.POSITIVE_INFINITY;
                        for (i = 0, n = t.length; i < n; ++i) {
                            var u = t[i];
                            if (u && u.hasValue()) {
                                var d = u.getCenterPoint(), c = o.distanceBetweenPoints(e, d);
                                c < l && (l = c, a = u)
                            }
                        }
                        if (a) {
                            var h = a.tooltipPosition();
                            r = h.x, s = h.y
                        }
                        return {x: r, y: s}
                    }
                }
            }
        }, {25: 25, 26: 26, 45: 45}], 36: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26), o = t(45);
            n._set("global", {elements: {arc: {backgroundColor: n.global.defaultColor, borderColor: "#fff", borderWidth: 2}}}), e.exports = a.extend({
                inLabelRange: function (t) {
                    var e = this._view;
                    return !!e && Math.pow(t - e.x, 2) < Math.pow(e.radius + e.hoverRadius, 2)
                }, inRange: function (t, e) {
                    var i = this._view;
                    if (i) {
                        for (var n = o.getAngleFromPoint(i, {x: t, y: e}), a = n.angle, r = n.distance, s = i.startAngle, l = i.endAngle; l < s;) l += 2 * Math.PI;
                        for (; a > l;) a -= 2 * Math.PI;
                        for (; a < s;) a += 2 * Math.PI;
                        var u = a >= s && a <= l, d = r >= i.innerRadius && r <= i.outerRadius;
                        return u && d
                    }
                    return !1
                }, getCenterPoint: function () {
                    var t = this._view, e = (t.startAngle + t.endAngle) / 2, i = (t.innerRadius + t.outerRadius) / 2;
                    return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                }, getArea: function () {
                    var t = this._view;
                    return Math.PI * ((t.endAngle - t.startAngle) / (2 * Math.PI)) * (Math.pow(t.outerRadius, 2) - Math.pow(t.innerRadius, 2))
                }, tooltipPosition: function () {
                    var t = this._view, e = t.startAngle + (t.endAngle - t.startAngle) / 2, i = (t.outerRadius - t.innerRadius) / 2 + t.innerRadius;
                    return {x: t.x + Math.cos(e) * i, y: t.y + Math.sin(e) * i}
                }, draw: function () {
                    var t = this._chart.ctx, e = this._view, i = e.startAngle, n = e.endAngle;
                    t.beginPath(), t.arc(e.x, e.y, e.outerRadius, i, n), t.arc(e.x, e.y, e.innerRadius, n, i, !0), t.closePath(), t.strokeStyle = e.borderColor, t.lineWidth = e.borderWidth, t.fillStyle = e.backgroundColor, t.fill(), t.lineJoin = "bevel", e.borderWidth && t.stroke()
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 37: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26), o = t(45), r = n.global;
            n._set("global", {
                elements: {
                    line: {
                        tension: .4,
                        backgroundColor: r.defaultColor,
                        borderWidth: 3,
                        borderColor: r.defaultColor,
                        borderCapStyle: "butt",
                        borderDash: [],
                        borderDashOffset: 0,
                        borderJoinStyle: "miter",
                        capBezierPoints: !0,
                        fill: !0
                    }
                }
            }), e.exports = a.extend({
                draw: function () {
                    var t, e, i, n, a = this._view, s = this._chart.ctx, l = a.spanGaps, u = this._children.slice(), d = r.elements.line, c = -1;
                    for (this._loop && u.length && u.push(u[0]), s.save(), s.lineCap = a.borderCapStyle || d.borderCapStyle, s.setLineDash && s.setLineDash(a.borderDash || d.borderDash), s.lineDashOffset = a.borderDashOffset || d.borderDashOffset, s.lineJoin = a.borderJoinStyle || d.borderJoinStyle, s.lineWidth = a.borderWidth || d.borderWidth, s.strokeStyle = a.borderColor || r.defaultColor, s.beginPath(), c = -1, t = 0; t < u.length; ++t) e = u[t], i = o.previousItem(u, t), n = e._view, 0 === t ? n.skip || (s.moveTo(n.x, n.y), c = t) : (i = -1 === c ? i : u[c], n.skip || (c !== t - 1 && !l || -1 === c ? s.moveTo(n.x, n.y) : o.canvas.lineTo(s, i._view, e._view), c = t));
                    s.stroke(), s.restore()
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 38: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26), o = t(45), r = n.global.defaultColor;

            function s(t) {
                var e = this._view;
                return !!e && Math.abs(t - e.x) < e.radius + e.hitRadius
            }

            n._set("global", {
                elements: {
                    point: {
                        radius: 3,
                        pointStyle: "circle",
                        backgroundColor: r,
                        borderColor: r,
                        borderWidth: 1,
                        hitRadius: 1,
                        hoverRadius: 4,
                        hoverBorderWidth: 1
                    }
                }
            }), e.exports = a.extend({
                inRange: function (t, e) {
                    var i = this._view;
                    return !!i && Math.pow(t - i.x, 2) + Math.pow(e - i.y, 2) < Math.pow(i.hitRadius + i.radius, 2)
                }, inLabelRange: s, inXRange: s, inYRange: function (t) {
                    var e = this._view;
                    return !!e && Math.abs(t - e.y) < e.radius + e.hitRadius
                }, getCenterPoint: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y}
                }, getArea: function () {
                    return Math.PI * Math.pow(this._view.radius, 2)
                }, tooltipPosition: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y, padding: t.radius + t.borderWidth}
                }, draw: function (t) {
                    var e = this._view, i = this._model, a = this._chart.ctx, s = e.pointStyle, l = e.radius, u = e.x, d = e.y, c = o.color, h = 0;
                    e.skip || (a.strokeStyle = e.borderColor || r, a.lineWidth = o.valueOrDefault(e.borderWidth, n.global.elements.point.borderWidth), a.fillStyle = e.backgroundColor || r, void 0 !== t && (i.x < t.left || 1.01 * t.right < i.x || i.y < t.top || 1.01 * t.bottom < i.y) && (i.x < t.left ? h = (u - i.x) / (t.left - i.x) : 1.01 * t.right < i.x ? h = (i.x - u) / (i.x - t.right) : i.y < t.top ? h = (d - i.y) / (t.top - i.y) : 1.01 * t.bottom < i.y && (h = (i.y - d) / (i.y - t.bottom)), h = Math.round(100 * h) / 100, a.strokeStyle = c(a.strokeStyle).alpha(h).rgbString(), a.fillStyle = c(a.fillStyle).alpha(h).rgbString()), o.canvas.drawPoint(a, s, l, u, d))
                }
            })
        }, {25: 25, 26: 26, 45: 45}], 39: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26);

            function o(t) {
                return void 0 !== t._view.width
            }

            function r(t) {
                var e, i, n, a, r = t._view;
                if (o(t)) {
                    var s = r.width / 2;
                    e = r.x - s, i = r.x + s, n = Math.min(r.y, r.base), a = Math.max(r.y, r.base)
                } else {
                    var l = r.height / 2;
                    e = Math.min(r.x, r.base), i = Math.max(r.x, r.base), n = r.y - l, a = r.y + l
                }
                return {left: e, top: n, right: i, bottom: a}
            }

            n._set("global", {elements: {rectangle: {backgroundColor: n.global.defaultColor, borderColor: n.global.defaultColor, borderSkipped: "bottom", borderWidth: 0}}}), e.exports = a.extend({
                draw: function () {
                    var t, e, i, n, a, o, r, s = this._chart.ctx, l = this._view, u = l.borderWidth;
                    if (l.horizontal ? (t = l.base, e = l.x, i = l.y - l.height / 2, n = l.y + l.height / 2, a = e > t ? 1 : -1, o = 1, r = l.borderSkipped || "left") : (t = l.x - l.width / 2, e = l.x + l.width / 2, i = l.y, a = 1, o = (n = l.base) > i ? 1 : -1, r = l.borderSkipped || "bottom"), u) {
                        var d = Math.min(Math.abs(t - e), Math.abs(i - n)), c = (u = u > d ? d : u) / 2, h = t + ("left" !== r ? c * a : 0), f = e + ("right" !== r ? -c * a : 0),
                            g = i + ("top" !== r ? c * o : 0), p = n + ("bottom" !== r ? -c * o : 0);
                        h !== f && (i = g, n = p), g !== p && (t = h, e = f)
                    }
                    s.beginPath(), s.fillStyle = l.backgroundColor, s.strokeStyle = l.borderColor, s.lineWidth = u;
                    var m = [[t, n], [t, i], [e, i], [e, n]], v = ["bottom", "left", "top", "right"].indexOf(r, 0);

                    function b(t) {
                        return m[(v + t) % 4]
                    }

                    -1 === v && (v = 0);
                    var x = b(0);
                    s.moveTo(x[0], x[1]);
                    for (var y = 1; y < 4; y++) x = b(y), s.lineTo(x[0], x[1]);
                    s.fill(), u && s.stroke()
                }, height: function () {
                    var t = this._view;
                    return t.base - t.y
                }, inRange: function (t, e) {
                    var i = !1;
                    if (this._view) {
                        var n = r(this);
                        i = t >= n.left && t <= n.right && e >= n.top && e <= n.bottom
                    }
                    return i
                }, inLabelRange: function (t, e) {
                    if (!this._view) return !1;
                    var i = r(this);
                    return o(this) ? t >= i.left && t <= i.right : e >= i.top && e <= i.bottom
                }, inXRange: function (t) {
                    var e = r(this);
                    return t >= e.left && t <= e.right
                }, inYRange: function (t) {
                    var e = r(this);
                    return t >= e.top && t <= e.bottom
                }, getCenterPoint: function () {
                    var t, e, i = this._view;
                    return o(this) ? (t = i.x, e = (i.y + i.base) / 2) : (t = (i.x + i.base) / 2, e = i.y), {x: t, y: e}
                }, getArea: function () {
                    var t = this._view;
                    return t.width * Math.abs(t.y - t.base)
                }, tooltipPosition: function () {
                    var t = this._view;
                    return {x: t.x, y: t.y}
                }
            })
        }, {25: 25, 26: 26}], 40: [function (t, e, i) {
            "use strict";
            e.exports = {}, e.exports.Arc = t(36), e.exports.Line = t(37), e.exports.Point = t(38), e.exports.Rectangle = t(39)
        }, {36: 36, 37: 37, 38: 38, 39: 39}], 41: [function (t, e, i) {
            "use strict";
            var n = t(42);
            i = e.exports = {
                clear: function (t) {
                    t.ctx.clearRect(0, 0, t.width, t.height)
                }, roundedRect: function (t, e, i, n, a, o) {
                    if (o) {
                        var r = Math.min(o, n / 2), s = Math.min(o, a / 2);
                        t.moveTo(e + r, i), t.lineTo(e + n - r, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + a - s), t.quadraticCurveTo(e + n, i + a, e + n - r, i + a), t.lineTo(e + r, i + a), t.quadraticCurveTo(e, i + a, e, i + a - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + r, i)
                    } else t.rect(e, i, n, a)
                }, drawPoint: function (t, e, i, n, a) {
                    var o, r, s, l, u, d;
                    if (!e || "object" != typeof e || "[object HTMLImageElement]" !== (o = e.toString()) && "[object HTMLCanvasElement]" !== o) {
                        if (!(isNaN(i) || i <= 0)) {
                            switch (e) {
                                default:
                                    t.beginPath(), t.arc(n, a, i, 0, 2 * Math.PI), t.closePath(), t.fill();
                                    break;
                                case"triangle":
                                    t.beginPath(), u = (r = 3 * i / Math.sqrt(3)) * Math.sqrt(3) / 2, t.moveTo(n - r / 2, a + u / 3), t.lineTo(n + r / 2, a + u / 3), t.lineTo(n, a - 2 * u / 3), t.closePath(), t.fill();
                                    break;
                                case"rect":
                                    d = 1 / Math.SQRT2 * i, t.beginPath(), t.fillRect(n - d, a - d, 2 * d, 2 * d), t.strokeRect(n - d, a - d, 2 * d, 2 * d);
                                    break;
                                case"rectRounded":
                                    var c = i / Math.SQRT2, h = n - c, f = a - c, g = Math.SQRT2 * i;
                                    t.beginPath(), this.roundedRect(t, h, f, g, g, i / 2), t.closePath(), t.fill();
                                    break;
                                case"rectRot":
                                    d = 1 / Math.SQRT2 * i, t.beginPath(), t.moveTo(n - d, a), t.lineTo(n, a + d), t.lineTo(n + d, a), t.lineTo(n, a - d), t.closePath(), t.fill();
                                    break;
                                case"cross":
                                    t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                                    break;
                                case"crossRot":
                                    t.beginPath(), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                                    break;
                                case"star":
                                    t.beginPath(), t.moveTo(n, a + i), t.lineTo(n, a - i), t.moveTo(n - i, a), t.lineTo(n + i, a), s = Math.cos(Math.PI / 4) * i, l = Math.sin(Math.PI / 4) * i, t.moveTo(n - s, a - l), t.lineTo(n + s, a + l), t.moveTo(n - s, a + l), t.lineTo(n + s, a - l), t.closePath();
                                    break;
                                case"line":
                                    t.beginPath(), t.moveTo(n - i, a), t.lineTo(n + i, a), t.closePath();
                                    break;
                                case"dash":
                                    t.beginPath(), t.moveTo(n, a), t.lineTo(n + i, a), t.closePath()
                            }
                            t.stroke()
                        }
                    } else t.drawImage(e, n - e.width / 2, a - e.height / 2, e.width, e.height)
                }, clipArea: function (t, e) {
                    t.save(), t.beginPath(), t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top), t.clip()
                }, unclipArea: function (t) {
                    t.restore()
                }, lineTo: function (t, e, i, n) {
                    if (i.steppedLine) return "after" === i.steppedLine && !n || "after" !== i.steppedLine && n ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y), void t.lineTo(i.x, i.y);
                    i.tension ? t.bezierCurveTo(n ? e.controlPointPreviousX : e.controlPointNextX, n ? e.controlPointPreviousY : e.controlPointNextY, n ? i.controlPointNextX : i.controlPointPreviousX, n ? i.controlPointNextY : i.controlPointPreviousY, i.x, i.y) : t.lineTo(i.x, i.y)
                }
            };
            n.clear = i.clear, n.drawRoundedRectangle = function (t) {
                t.beginPath(), i.roundedRect.apply(i, arguments), t.closePath()
            }
        }, {42: 42}], 42: [function (t, e, i) {
            "use strict";
            var n, a = {
                noop: function () {
                }, uid: (n = 0, function () {
                    return n++
                }), isNullOrUndef: function (t) {
                    return null == t
                }, isArray: Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, isObject: function (t) {
                    return null !== t && "[object Object]" === Object.prototype.toString.call(t)
                }, valueOrDefault: function (t, e) {
                    return void 0 === t ? e : t
                }, valueAtIndexOrDefault: function (t, e, i) {
                    return a.valueOrDefault(a.isArray(t) ? t[e] : t, i)
                }, callback: function (t, e, i) {
                    if (t && "function" == typeof t.call) return t.apply(i, e)
                }, each: function (t, e, i, n) {
                    var o, r, s;
                    if (a.isArray(t)) if (r = t.length, n) for (o = r - 1; o >= 0; o--) e.call(i, t[o], o); else for (o = 0; o < r; o++) e.call(i, t[o], o); else if (a.isObject(t)) for (r = (s = Object.keys(t)).length, o = 0; o < r; o++) e.call(i, t[s[o]], s[o])
                }, arrayEquals: function (t, e) {
                    var i, n, o, r;
                    if (!t || !e || t.length !== e.length) return !1;
                    for (i = 0, n = t.length; i < n; ++i) if (o = t[i], r = e[i], o instanceof Array && r instanceof Array) {
                        if (!a.arrayEquals(o, r)) return !1
                    } else if (o !== r) return !1;
                    return !0
                }, clone: function (t) {
                    if (a.isArray(t)) return t.map(a.clone);
                    if (a.isObject(t)) {
                        for (var e = {}, i = Object.keys(t), n = i.length, o = 0; o < n; ++o) e[i[o]] = a.clone(t[i[o]]);
                        return e
                    }
                    return t
                }, _merger: function (t, e, i, n) {
                    var o = e[t], r = i[t];
                    a.isObject(o) && a.isObject(r) ? a.merge(o, r, n) : e[t] = a.clone(r)
                }, _mergerIf: function (t, e, i) {
                    var n = e[t], o = i[t];
                    a.isObject(n) && a.isObject(o) ? a.mergeIf(n, o) : e.hasOwnProperty(t) || (e[t] = a.clone(o))
                }, merge: function (t, e, i) {
                    var n, o, r, s, l, u = a.isArray(e) ? e : [e], d = u.length;
                    if (!a.isObject(t)) return t;
                    for (n = (i = i || {}).merger || a._merger, o = 0; o < d; ++o) if (e = u[o], a.isObject(e)) for (l = 0, s = (r = Object.keys(e)).length; l < s; ++l) n(r[l], t, e, i);
                    return t
                }, mergeIf: function (t, e) {
                    return a.merge(t, e, {merger: a._mergerIf})
                }, extend: function (t) {
                    for (var e = function (e, i) {
                        t[i] = e
                    }, i = 1, n = arguments.length; i < n; ++i) a.each(arguments[i], e);
                    return t
                }, inherits: function (t) {
                    var e = this, i = t && t.hasOwnProperty("constructor") ? t.constructor : function () {
                        return e.apply(this, arguments)
                    }, n = function () {
                        this.constructor = i
                    };
                    return n.prototype = e.prototype, i.prototype = new n, i.extend = a.inherits, t && a.extend(i.prototype, t), i.__super__ = e.prototype, i
                }
            };
            e.exports = a, a.callCallback = a.callback, a.indexOf = function (t, e, i) {
                return Array.prototype.indexOf.call(t, e, i)
            }, a.getValueOrDefault = a.valueOrDefault, a.getValueAtIndexOrDefault = a.valueAtIndexOrDefault
        }, {}], 43: [function (t, e, i) {
            "use strict";
            var n = t(42), a = {
                linear: function (t) {
                    return t
                }, easeInQuad: function (t) {
                    return t * t
                }, easeOutQuad: function (t) {
                    return -t * (t - 2)
                }, easeInOutQuad: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                }, easeInCubic: function (t) {
                    return t * t * t
                }, easeOutCubic: function (t) {
                    return (t -= 1) * t * t + 1
                }, easeInOutCubic: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                }, easeInQuart: function (t) {
                    return t * t * t * t
                }, easeOutQuart: function (t) {
                    return -((t -= 1) * t * t * t - 1)
                }, easeInOutQuart: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                }, easeInQuint: function (t) {
                    return t * t * t * t * t
                }, easeOutQuint: function (t) {
                    return (t -= 1) * t * t * t * t + 1
                }, easeInOutQuint: function (t) {
                    return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                }, easeInSine: function (t) {
                    return 1 - Math.cos(t * (Math.PI / 2))
                }, easeOutSine: function (t) {
                    return Math.sin(t * (Math.PI / 2))
                }, easeInOutSine: function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                }, easeInExpo: function (t) {
                    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                }, easeOutExpo: function (t) {
                    return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                }, easeInOutExpo: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * --t))
                }, easeInCirc: function (t) {
                    return t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)
                }, easeOutCirc: function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }, easeInOutCirc: function (t) {
                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                }, easeInElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i))
                }, easeOutElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1)
                }, easeInOutElastic: function (t) {
                    var e = 1.70158, i = 0, n = 1;
                    return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .45), n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), t < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1)
                }, easeInBack: function (t) {
                    return t * t * (2.70158 * t - 1.70158)
                }, easeOutBack: function (t) {
                    return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                }, easeInOutBack: function (t) {
                    var e = 1.70158;
                    return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
                }, easeInBounce: function (t) {
                    return 1 - a.easeOutBounce(1 - t)
                }, easeOutBounce: function (t) {
                    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }, easeInOutBounce: function (t) {
                    return t < .5 ? .5 * a.easeInBounce(2 * t) : .5 * a.easeOutBounce(2 * t - 1) + .5
                }
            };
            e.exports = {effects: a}, n.easingEffects = a
        }, {42: 42}], 44: [function (t, e, i) {
            "use strict";
            var n = t(42);
            e.exports = {
                toLineHeight: function (t, e) {
                    var i = ("" + t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
                    if (!i || "normal" === i[1]) return 1.2 * e;
                    switch (t = +i[2], i[3]) {
                        case"px":
                            return t;
                        case"%":
                            t /= 100
                    }
                    return e * t
                }, toPadding: function (t) {
                    var e, i, a, o;
                    return n.isObject(t) ? (e = +t.top || 0, i = +t.right || 0, a = +t.bottom || 0, o = +t.left || 0) : e = i = a = o = +t || 0, {
                        top: e,
                        right: i,
                        bottom: a,
                        left: o,
                        height: e + a,
                        width: o + i
                    }
                }, resolve: function (t, e, i) {
                    var a, o, r;
                    for (a = 0, o = t.length; a < o; ++a) if (void 0 !== (r = t[a]) && (void 0 !== e && "function" == typeof r && (r = r(e)), void 0 !== i && n.isArray(r) && (r = r[i]), void 0 !== r)) return r
                }
            }
        }, {42: 42}], 45: [function (t, e, i) {
            "use strict";
            e.exports = t(42), e.exports.easing = t(43), e.exports.canvas = t(41), e.exports.options = t(44)
        }, {41: 41, 42: 42, 43: 43, 44: 44}], 46: [function (t, e, i) {
            e.exports = {
                acquireContext: function (t) {
                    return t && t.canvas && (t = t.canvas), t && t.getContext("2d") || null
                }
            }
        }, {}], 47: [function (t, e, i) {
            "use strict";
            var n = t(45), a = "$chartjs", o = "chartjs-", r = o + "render-monitor", s = o + "render-animation", l = ["animationstart", "webkitAnimationStart"], u = {
                touchstart: "mousedown",
                touchmove: "mousemove",
                touchend: "mouseup",
                pointerenter: "mouseenter",
                pointerdown: "mousedown",
                pointermove: "mousemove",
                pointerup: "mouseup",
                pointerleave: "mouseout",
                pointerout: "mouseout"
            };

            function d(t, e) {
                var i = n.getStyle(t, e), a = i && i.match(/^(\d+)(\.\d+)?px$/);
                return a ? Number(a[1]) : void 0
            }

            var c = !!function () {
                var t = !1;
                try {
                    var e = Object.defineProperty({}, "passive", {
                        get: function () {
                            t = !0
                        }
                    });
                    window.addEventListener("e", null, e)
                } catch (t) {
                }
                return t
            }() && {passive: !0};

            function h(t, e, i) {
                t.addEventListener(e, i, c)
            }

            function f(t, e, i) {
                t.removeEventListener(e, i, c)
            }

            function g(t, e, i, n, a) {
                return {type: t, chart: e, native: a || null, x: void 0 !== i ? i : null, y: void 0 !== n ? n : null}
            }

            function p(t, e, i) {
                var u, d, c, f, p, m, v, b, x = t[a] || (t[a] = {}), y = x.resizer = function (t) {
                    var e = document.createElement("div"), i = o + "size-monitor",
                        n = "position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";
                    e.style.cssText = n, e.className = i, e.innerHTML = '<div class="' + i + '-expand" style="' + n + '"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="' + i + '-shrink" style="' + n + '"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';
                    var a = e.childNodes[0], r = e.childNodes[1];
                    e._reset = function () {
                        a.scrollLeft = 1e6, a.scrollTop = 1e6, r.scrollLeft = 1e6, r.scrollTop = 1e6
                    };
                    var s = function () {
                        e._reset(), t()
                    };
                    return h(a, "scroll", s.bind(a, "expand")), h(r, "scroll", s.bind(r, "shrink")), e
                }((u = function () {
                    if (x.resizer) return e(g("resize", i))
                }, c = !1, f = [], function () {
                    f = Array.prototype.slice.call(arguments), d = d || this, c || (c = !0, n.requestAnimFrame.call(window, function () {
                        c = !1, u.apply(d, f)
                    }))
                }));
                m = function () {
                    if (x.resizer) {
                        var e = t.parentNode;
                        e && e !== y.parentNode && e.insertBefore(y, e.firstChild), y._reset()
                    }
                }, v = (p = t)[a] || (p[a] = {}), b = v.renderProxy = function (t) {
                    t.animationName === s && m()
                }, n.each(l, function (t) {
                    h(p, t, b)
                }), v.reflow = !!p.offsetParent, p.classList.add(r)
            }

            function m(t) {
                var e, i, o, s = t[a] || {}, u = s.resizer;
                delete s.resizer, i = (e = t)[a] || {}, (o = i.renderProxy) && (n.each(l, function (t) {
                    f(e, t, o)
                }), delete i.renderProxy), e.classList.remove(r), u && u.parentNode && u.parentNode.removeChild(u)
            }

            e.exports = {
                _enabled: "undefined" != typeof window && "undefined" != typeof document, initialize: function () {
                    var t, e, i, n = "from{opacity:0.99}to{opacity:1}";
                    e = "@-webkit-keyframes " + s + "{" + n + "}@keyframes " + s + "{" + n + "}." + r + "{-webkit-animation:" + s + " 0.001s;animation:" + s + " 0.001s;}", i = (t = this)._style || document.createElement("style"), t._style || (t._style = i, e = "/* Chart.js */\n" + e, i.setAttribute("type", "text/css"), document.getElementsByTagName("head")[0].appendChild(i)), i.appendChild(document.createTextNode(e))
                }, acquireContext: function (t, e) {
                    "string" == typeof t ? t = document.getElementById(t) : t.length && (t = t[0]), t && t.canvas && (t = t.canvas);
                    var i = t && t.getContext && t.getContext("2d");
                    return i && i.canvas === t ? (function (t, e) {
                        var i = t.style, n = t.getAttribute("height"), o = t.getAttribute("width");
                        if (t[a] = {initial: {height: n, width: o, style: {display: i.display, height: i.height, width: i.width}}}, i.display = i.display || "block", null === o || "" === o) {
                            var r = d(t, "width");
                            void 0 !== r && (t.width = r)
                        }
                        if (null === n || "" === n) if ("" === t.style.height) t.height = t.width / (e.options.aspectRatio || 2); else {
                            var s = d(t, "height");
                            void 0 !== r && (t.height = s)
                        }
                    }(t, e), i) : null
                }, releaseContext: function (t) {
                    var e = t.canvas;
                    if (e[a]) {
                        var i = e[a].initial;
                        ["height", "width"].forEach(function (t) {
                            var a = i[t];
                            n.isNullOrUndef(a) ? e.removeAttribute(t) : e.setAttribute(t, a)
                        }), n.each(i.style || {}, function (t, i) {
                            e.style[i] = t
                        }), e.width = e.width, delete e[a]
                    }
                }, addEventListener: function (t, e, i) {
                    var o = t.canvas;
                    if ("resize" !== e) {
                        var r = i[a] || (i[a] = {});
                        h(o, e, (r.proxies || (r.proxies = {}))[t.id + "_" + e] = function (e) {
                            var a, o, r, s;
                            i((o = t, r = u[(a = e).type] || a.type, s = n.getRelativePosition(a, o), g(r, o, s.x, s.y, a)))
                        })
                    } else p(o, i, t)
                }, removeEventListener: function (t, e, i) {
                    var n = t.canvas;
                    if ("resize" !== e) {
                        var o = ((i[a] || {}).proxies || {})[t.id + "_" + e];
                        o && f(n, e, o)
                    } else m(n)
                }
            }, n.addEvent = h, n.removeEvent = f
        }, {45: 45}], 48: [function (t, e, i) {
            "use strict";
            var n = t(45), a = t(46), o = t(47), r = o._enabled ? o : a;
            e.exports = n.extend({
                initialize: function () {
                }, acquireContext: function () {
                }, releaseContext: function () {
                }, addEventListener: function () {
                }, removeEventListener: function () {
                }
            }, r)
        }, {45: 45, 46: 46, 47: 47}], 49: [function (t, e, i) {
            "use strict";
            e.exports = {}, e.exports.filler = t(50), e.exports.legend = t(51), e.exports.title = t(52)
        }, {50: 50, 51: 51, 52: 52}], 50: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(40), o = t(45);
            n._set("global", {plugins: {filler: {propagate: !0}}});
            var r = {
                dataset: function (t) {
                    var e = t.fill, i = t.chart, n = i.getDatasetMeta(e), a = n && i.isDatasetVisible(e) && n.dataset._children || [], o = a.length || 0;
                    return o ? function (t, e) {
                        return e < o && a[e]._view || null
                    } : null
                }, boundary: function (t) {
                    var e = t.boundary, i = e ? e.x : null, n = e ? e.y : null;
                    return function (t) {
                        return {x: null === i ? t.x : i, y: null === n ? t.y : n}
                    }
                }
            };

            function s(t, e, i) {
                var n, a = t._model || {}, o = a.fill;
                if (void 0 === o && (o = !!a.backgroundColor), !1 === o || null === o) return !1;
                if (!0 === o) return "origin";
                if (n = parseFloat(o, 10), isFinite(n) && Math.floor(n) === n) return "-" !== o[0] && "+" !== o[0] || (n = e + n), !(n === e || n < 0 || n >= i) && n;
                switch (o) {
                    case"bottom":
                        return "start";
                    case"top":
                        return "end";
                    case"zero":
                        return "origin";
                    case"origin":
                    case"start":
                    case"end":
                        return o;
                    default:
                        return !1
                }
            }

            function l(t) {
                var e, i = t.el._model || {}, n = t.el._scale || {}, a = t.fill, o = null;
                if (isFinite(a)) return null;
                if ("start" === a ? o = void 0 === i.scaleBottom ? n.bottom : i.scaleBottom : "end" === a ? o = void 0 === i.scaleTop ? n.top : i.scaleTop : void 0 !== i.scaleZero ? o = i.scaleZero : n.getBasePosition ? o = n.getBasePosition() : n.getBasePixel && (o = n.getBasePixel()), null != o) {
                    if (void 0 !== o.x && void 0 !== o.y) return o;
                    if ("number" == typeof o && isFinite(o)) return {x: (e = n.isHorizontal()) ? o : null, y: e ? null : o}
                }
                return null
            }

            function u(t, e, i) {
                var n, a = t[e].fill, o = [e];
                if (!i) return a;
                for (; !1 !== a && -1 === o.indexOf(a);) {
                    if (!isFinite(a)) return a;
                    if (!(n = t[a])) return !1;
                    if (n.visible) return a;
                    o.push(a), a = n.fill
                }
                return !1
            }

            function d(t) {
                return t && !t.skip
            }

            function c(t, e, i, n, a) {
                var r;
                if (n && a) {
                    for (t.moveTo(e[0].x, e[0].y), r = 1; r < n; ++r) o.canvas.lineTo(t, e[r - 1], e[r]);
                    for (t.lineTo(i[a - 1].x, i[a - 1].y), r = a - 1; r > 0; --r) o.canvas.lineTo(t, i[r], i[r - 1], !0)
                }
            }

            e.exports = {
                id: "filler", afterDatasetsUpdate: function (t, e) {
                    var i, n, o, d, c, h, f, g = (t.data.datasets || []).length, p = e.propagate, m = [];
                    for (n = 0; n < g; ++n) d = null, (o = (i = t.getDatasetMeta(n)).dataset) && o._model && o instanceof a.Line && (d = {
                        visible: t.isDatasetVisible(n),
                        fill: s(o, n, g),
                        chart: t,
                        el: o
                    }), i.$filler = d, m.push(d);
                    for (n = 0; n < g; ++n) (d = m[n]) && (d.fill = u(m, n, p), d.boundary = l(d), d.mapper = (void 0, f = void 0, h = (c = d).fill, f = "dataset", !1 === h ? null : (isFinite(h) || (f = "boundary"), r[f](c))))
                }, beforeDatasetDraw: function (t, e) {
                    var i = e.meta.$filler;
                    if (i) {
                        var a = t.ctx, r = i.el, s = r._view, l = r._children || [], u = i.mapper, h = s.backgroundColor || n.global.defaultColor;
                        u && h && l.length && (o.canvas.clipArea(a, t.chartArea), function (t, e, i, n, a, o) {
                            var r, s, l, u, h, f, g, p = e.length, m = n.spanGaps, v = [], b = [], x = 0, y = 0;
                            for (t.beginPath(), r = 0, s = p + !!o; r < s; ++r) h = i(u = e[l = r % p]._view, l, n), f = d(u), g = d(h), f && g ? (x = v.push(u), y = b.push(h)) : x && y && (m ? (f && v.push(u), g && b.push(h)) : (c(t, v, b, x, y), x = y = 0, v = [], b = []));
                            c(t, v, b, x, y), t.closePath(), t.fillStyle = a, t.fill()
                        }(a, l, u, s, h, r._loop), o.canvas.unclipArea(a))
                    }
                }
            }
        }, {25: 25, 40: 40, 45: 45}], 51: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26), o = t(45), r = t(30), s = o.noop;

            function l(t, e) {
                return t.usePointStyle ? e * Math.SQRT2 : t.boxWidth
            }

            n._set("global", {
                legend: {
                    display: !0, position: "top", fullWidth: !0, reverse: !1, weight: 1e3, onClick: function (t, e) {
                        var i = e.datasetIndex, n = this.chart, a = n.getDatasetMeta(i);
                        a.hidden = null === a.hidden ? !n.data.datasets[i].hidden : null, n.update()
                    }, onHover: null, labels: {
                        boxWidth: 40, padding: 10, generateLabels: function (t) {
                            var e = t.data;
                            return o.isArray(e.datasets) ? e.datasets.map(function (e, i) {
                                return {
                                    text: e.label,
                                    fillStyle: o.isArray(e.backgroundColor) ? e.backgroundColor[0] : e.backgroundColor,
                                    hidden: !t.isDatasetVisible(i),
                                    lineCap: e.borderCapStyle,
                                    lineDash: e.borderDash,
                                    lineDashOffset: e.borderDashOffset,
                                    lineJoin: e.borderJoinStyle,
                                    lineWidth: e.borderWidth,
                                    strokeStyle: e.borderColor,
                                    pointStyle: e.pointStyle,
                                    datasetIndex: i
                                }
                            }, this) : []
                        }
                    }
                }, legendCallback: function (t) {
                    var e = [];
                    e.push('<ul class="' + t.id + '-legend">');
                    for (var i = 0; i < t.data.datasets.length; i++) e.push('<li><span style="background-color:' + t.data.datasets[i].backgroundColor + '"></span>'), t.data.datasets[i].label && e.push(t.data.datasets[i].label), e.push("</li>");
                    return e.push("</ul>"), e.join("")
                }
            });
            var u = a.extend({
                initialize: function (t) {
                    o.extend(this, t), this.legendHitBoxes = [], this.doughnutMode = !1
                }, beforeUpdate: s, update: function (t, e, i) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                }, afterUpdate: s, beforeSetDimensions: s, setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                }, afterSetDimensions: s, beforeBuildLabels: s, buildLabels: function () {
                    var t = this, e = t.options.labels || {}, i = o.callback(e.generateLabels, [t.chart], t) || [];
                    e.filter && (i = i.filter(function (i) {
                        return e.filter(i, t.chart.data)
                    })), t.options.reverse && i.reverse(), t.legendItems = i
                }, afterBuildLabels: s, beforeFit: s, fit: function () {
                    var t = this, e = t.options, i = e.labels, a = e.display, r = t.ctx, s = n.global, u = o.valueOrDefault, d = u(i.fontSize, s.defaultFontSize),
                        c = u(i.fontStyle, s.defaultFontStyle), h = u(i.fontFamily, s.defaultFontFamily), f = o.fontString(d, c, h), g = t.legendHitBoxes = [], p = t.minSize, m = t.isHorizontal();
                    if (m ? (p.width = t.maxWidth, p.height = a ? 10 : 0) : (p.width = a ? 10 : 0, p.height = t.maxHeight), a) if (r.font = f, m) {
                        var v = t.lineWidths = [0], b = t.legendItems.length ? d + i.padding : 0;
                        r.textAlign = "left", r.textBaseline = "top", o.each(t.legendItems, function (e, n) {
                            var a = l(i, d) + d / 2 + r.measureText(e.text).width;
                            v[v.length - 1] + a + i.padding >= t.width && (b += d + i.padding, v[v.length] = t.left), g[n] = {left: 0, top: 0, width: a, height: d}, v[v.length - 1] += a + i.padding
                        }), p.height += b
                    } else {
                        var x = i.padding, y = t.columnWidths = [], k = i.padding, M = 0, w = 0, S = d + x;
                        o.each(t.legendItems, function (t, e) {
                            var n = l(i, d) + d / 2 + r.measureText(t.text).width;
                            w + S > p.height && (k += M + i.padding, y.push(M), M = 0, w = 0), M = Math.max(M, n), w += S, g[e] = {left: 0, top: 0, width: n, height: d}
                        }), k += M, y.push(M), p.width += k
                    }
                    t.width = p.width, t.height = p.height
                }, afterFit: s, isHorizontal: function () {
                    return "top" === this.options.position || "bottom" === this.options.position
                }, draw: function () {
                    var t = this, e = t.options, i = e.labels, a = n.global, r = a.elements.line, s = t.width, u = t.lineWidths;
                    if (e.display) {
                        var d, c = t.ctx, h = o.valueOrDefault, f = h(i.fontColor, a.defaultFontColor), g = h(i.fontSize, a.defaultFontSize), p = h(i.fontStyle, a.defaultFontStyle),
                            m = h(i.fontFamily, a.defaultFontFamily), v = o.fontString(g, p, m);
                        c.textAlign = "left", c.textBaseline = "middle", c.lineWidth = .5, c.strokeStyle = f, c.fillStyle = f, c.font = v;
                        var b = l(i, g), x = t.legendHitBoxes, y = t.isHorizontal();
                        d = y ? {x: t.left + (s - u[0]) / 2, y: t.top + i.padding, line: 0} : {x: t.left + i.padding, y: t.top + i.padding, line: 0};
                        var k = g + i.padding;
                        o.each(t.legendItems, function (n, l) {
                            var f, p, m, v, M, w = c.measureText(n.text).width, S = b + g / 2 + w, C = d.x, _ = d.y;
                            y ? C + S >= s && (_ = d.y += k, d.line++, C = d.x = t.left + (s - u[d.line]) / 2) : _ + k > t.bottom && (C = d.x = C + t.columnWidths[d.line] + i.padding, _ = d.y = t.top + i.padding, d.line++), function (t, i, n) {
                                if (!(isNaN(b) || b <= 0)) {
                                    c.save(), c.fillStyle = h(n.fillStyle, a.defaultColor), c.lineCap = h(n.lineCap, r.borderCapStyle), c.lineDashOffset = h(n.lineDashOffset, r.borderDashOffset), c.lineJoin = h(n.lineJoin, r.borderJoinStyle), c.lineWidth = h(n.lineWidth, r.borderWidth), c.strokeStyle = h(n.strokeStyle, a.defaultColor);
                                    var s = 0 === h(n.lineWidth, r.borderWidth);
                                    if (c.setLineDash && c.setLineDash(h(n.lineDash, r.borderDash)), e.labels && e.labels.usePointStyle) {
                                        var l = g * Math.SQRT2 / 2, u = l / Math.SQRT2, d = t + u, f = i + u;
                                        o.canvas.drawPoint(c, n.pointStyle, l, d, f)
                                    } else s || c.strokeRect(t, i, b, g), c.fillRect(t, i, b, g);
                                    c.restore()
                                }
                            }(C, _, n), x[l].left = C, x[l].top = _, f = n, p = w, v = b + (m = g / 2) + C, M = _ + m, c.fillText(f.text, v, M), f.hidden && (c.beginPath(), c.lineWidth = 2, c.moveTo(v, M), c.lineTo(v + p, M), c.stroke()), y ? d.x += S + i.padding : d.y += k
                        })
                    }
                }, handleEvent: function (t) {
                    var e = this, i = e.options, n = "mouseup" === t.type ? "click" : t.type, a = !1;
                    if ("mousemove" === n) {
                        if (!i.onHover) return
                    } else {
                        if ("click" !== n) return;
                        if (!i.onClick) return
                    }
                    var o = t.x, r = t.y;
                    if (o >= e.left && o <= e.right && r >= e.top && r <= e.bottom) for (var s = e.legendHitBoxes, l = 0; l < s.length; ++l) {
                        var u = s[l];
                        if (o >= u.left && o <= u.left + u.width && r >= u.top && r <= u.top + u.height) {
                            if ("click" === n) {
                                i.onClick.call(e, t.native, e.legendItems[l]), a = !0;
                                break
                            }
                            if ("mousemove" === n) {
                                i.onHover.call(e, t.native, e.legendItems[l]), a = !0;
                                break
                            }
                        }
                    }
                    return a
                }
            });

            function d(t, e) {
                var i = new u({ctx: t.ctx, options: e, chart: t});
                r.configure(t, i, e), r.addBox(t, i), t.legend = i
            }

            e.exports = {
                id: "legend", _element: u, beforeInit: function (t) {
                    var e = t.options.legend;
                    e && d(t, e)
                }, beforeUpdate: function (t) {
                    var e = t.options.legend, i = t.legend;
                    e ? (o.mergeIf(e, n.global.legend), i ? (r.configure(t, i, e), i.options = e) : d(t, e)) : i && (r.removeBox(t, i), delete t.legend)
                }, afterEvent: function (t, e) {
                    var i = t.legend;
                    i && i.handleEvent(e)
                }
            }
        }, {25: 25, 26: 26, 30: 30, 45: 45}], 52: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(26), o = t(45), r = t(30), s = o.noop;
            n._set("global", {title: {display: !1, fontStyle: "bold", fullWidth: !0, lineHeight: 1.2, padding: 10, position: "top", text: "", weight: 2e3}});
            var l = a.extend({
                initialize: function (t) {
                    o.extend(this, t), this.legendHitBoxes = []
                }, beforeUpdate: s, update: function (t, e, i) {
                    var n = this;
                    return n.beforeUpdate(), n.maxWidth = t, n.maxHeight = e, n.margins = i, n.beforeSetDimensions(), n.setDimensions(), n.afterSetDimensions(), n.beforeBuildLabels(), n.buildLabels(), n.afterBuildLabels(), n.beforeFit(), n.fit(), n.afterFit(), n.afterUpdate(), n.minSize
                }, afterUpdate: s, beforeSetDimensions: s, setDimensions: function () {
                    var t = this;
                    t.isHorizontal() ? (t.width = t.maxWidth, t.left = 0, t.right = t.width) : (t.height = t.maxHeight, t.top = 0, t.bottom = t.height), t.paddingLeft = 0, t.paddingTop = 0, t.paddingRight = 0, t.paddingBottom = 0, t.minSize = {
                        width: 0,
                        height: 0
                    }
                }, afterSetDimensions: s, beforeBuildLabels: s, buildLabels: s, afterBuildLabels: s, beforeFit: s, fit: function () {
                    var t = this, e = o.valueOrDefault, i = t.options, a = i.display, r = e(i.fontSize, n.global.defaultFontSize), s = t.minSize, l = o.isArray(i.text) ? i.text.length : 1,
                        u = o.options.toLineHeight(i.lineHeight, r), d = a ? l * u + 2 * i.padding : 0;
                    t.isHorizontal() ? (s.width = t.maxWidth, s.height = d) : (s.width = d, s.height = t.maxHeight), t.width = s.width, t.height = s.height
                }, afterFit: s, isHorizontal: function () {
                    var t = this.options.position;
                    return "top" === t || "bottom" === t
                }, draw: function () {
                    var t = this, e = t.ctx, i = o.valueOrDefault, a = t.options, r = n.global;
                    if (a.display) {
                        var s, l, u, d = i(a.fontSize, r.defaultFontSize), c = i(a.fontStyle, r.defaultFontStyle), h = i(a.fontFamily, r.defaultFontFamily), f = o.fontString(d, c, h),
                            g = o.options.toLineHeight(a.lineHeight, d), p = g / 2 + a.padding, m = 0, v = t.top, b = t.left, x = t.bottom, y = t.right;
                        e.fillStyle = i(a.fontColor, r.defaultFontColor), e.font = f, t.isHorizontal() ? (l = b + (y - b) / 2, u = v + p, s = y - b) : (l = "left" === a.position ? b + p : y - p, u = v + (x - v) / 2, s = x - v, m = Math.PI * ("left" === a.position ? -.5 : .5)), e.save(), e.translate(l, u), e.rotate(m), e.textAlign = "center", e.textBaseline = "middle";
                        var k = a.text;
                        if (o.isArray(k)) for (var M = 0, w = 0; w < k.length; ++w) e.fillText(k[w], 0, M, s), M += g; else e.fillText(k, 0, 0, s);
                        e.restore()
                    }
                }
            });

            function u(t, e) {
                var i = new l({ctx: t.ctx, options: e, chart: t});
                r.configure(t, i, e), r.addBox(t, i), t.titleBlock = i
            }

            e.exports = {
                id: "title", _element: l, beforeInit: function (t) {
                    var e = t.options.title;
                    e && u(t, e)
                }, beforeUpdate: function (t) {
                    var e = t.options.title, i = t.titleBlock;
                    e ? (o.mergeIf(e, n.global.title), i ? (r.configure(t, i, e), i.options = e) : u(t, e)) : i && (r.removeBox(t, i), delete t.titleBlock)
                }
            }
        }, {25: 25, 26: 26, 30: 30, 45: 45}], 53: [function (t, e, i) {
            "use strict";
            e.exports = function (t) {
                var e = t.Scale.extend({
                    getLabels: function () {
                        var t = this.chart.data;
                        return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels
                    }, determineDataLimits: function () {
                        var t, e = this, i = e.getLabels();
                        e.minIndex = 0, e.maxIndex = i.length - 1, void 0 !== e.options.ticks.min && (t = i.indexOf(e.options.ticks.min), e.minIndex = -1 !== t ? t : e.minIndex), void 0 !== e.options.ticks.max && (t = i.indexOf(e.options.ticks.max), e.maxIndex = -1 !== t ? t : e.maxIndex), e.min = i[e.minIndex], e.max = i[e.maxIndex]
                    }, buildTicks: function () {
                        var t = this, e = t.getLabels();
                        t.ticks = 0 === t.minIndex && t.maxIndex === e.length - 1 ? e : e.slice(t.minIndex, t.maxIndex + 1)
                    }, getLabelForIndex: function (t, e) {
                        var i = this, n = i.chart.data, a = i.isHorizontal();
                        return n.yLabels && !a ? i.getRightValue(n.datasets[e].data[t]) : i.ticks[t - i.minIndex]
                    }, getPixelForValue: function (t, e) {
                        var i, n = this, a = n.options.offset, o = Math.max(n.maxIndex + 1 - n.minIndex - (a ? 0 : 1), 1);
                        if (null != t && (i = n.isHorizontal() ? t.x : t.y), void 0 !== i || void 0 !== t && isNaN(e)) {
                            t = i || t;
                            var r = n.getLabels().indexOf(t);
                            e = -1 !== r ? r : e
                        }
                        if (n.isHorizontal()) {
                            var s = n.width / o, l = s * (e - n.minIndex);
                            return a && (l += s / 2), n.left + Math.round(l)
                        }
                        var u = n.height / o, d = u * (e - n.minIndex);
                        return a && (d += u / 2), n.top + Math.round(d)
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.ticks[t], t + this.minIndex, null)
                    }, getValueForPixel: function (t) {
                        var e = this, i = e.options.offset, n = Math.max(e._ticks.length - (i ? 0 : 1), 1), a = e.isHorizontal(), o = (a ? e.width : e.height) / n;
                        return t -= a ? e.left : e.top, i && (t -= o / 2), (t <= 0 ? 0 : Math.round(t / o)) + e.minIndex
                    }, getBasePixel: function () {
                        return this.bottom
                    }
                });
                t.scaleService.registerScaleType("category", e, {position: "bottom"})
            }
        }, {}], 54: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(45), o = t(34);
            e.exports = function (t) {
                var e = {position: "left", ticks: {callback: o.formatters.linear}}, i = t.LinearScaleBase.extend({
                    determineDataLimits: function () {
                        var t = this, e = t.options, i = t.chart, n = i.data.datasets, o = t.isHorizontal();

                        function r(e) {
                            return o ? e.xAxisID === t.id : e.yAxisID === t.id
                        }

                        t.min = null, t.max = null;
                        var s = e.stacked;
                        if (void 0 === s && a.each(n, function (t, e) {
                            if (!s) {
                                var n = i.getDatasetMeta(e);
                                i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
                            }
                        }), e.stacked || s) {
                            var l = {};
                            a.each(n, function (n, o) {
                                var s = i.getDatasetMeta(o), u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                void 0 === l[u] && (l[u] = {positiveValues: [], negativeValues: []});
                                var d = l[u].positiveValues, c = l[u].negativeValues;
                                i.isDatasetVisible(o) && r(s) && a.each(n.data, function (i, n) {
                                    var a = +t.getRightValue(i);
                                    isNaN(a) || s.data[n].hidden || (d[n] = d[n] || 0, c[n] = c[n] || 0, e.relativePoints ? d[n] = 100 : a < 0 ? c[n] += a : d[n] += a)
                                })
                            }), a.each(l, function (e) {
                                var i = e.positiveValues.concat(e.negativeValues), n = a.min(i), o = a.max(i);
                                t.min = null === t.min ? n : Math.min(t.min, n), t.max = null === t.max ? o : Math.max(t.max, o)
                            })
                        } else a.each(n, function (e, n) {
                            var o = i.getDatasetMeta(n);
                            i.isDatasetVisible(n) && r(o) && a.each(e.data, function (e, i) {
                                var n = +t.getRightValue(e);
                                isNaN(n) || o.data[i].hidden || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n))
                            })
                        });
                        t.min = isFinite(t.min) && !isNaN(t.min) ? t.min : 0, t.max = isFinite(t.max) && !isNaN(t.max) ? t.max : 1, this.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var t, e = this.options.ticks;
                        if (this.isHorizontal()) t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.width / 50)); else {
                            var i = a.valueOrDefault(e.fontSize, n.global.defaultFontSize);
                            t = Math.min(e.maxTicksLimit ? e.maxTicksLimit : 11, Math.ceil(this.height / (2 * i)))
                        }
                        return t
                    }, handleDirectionalChanges: function () {
                        this.isHorizontal() || this.ticks.reverse()
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, getPixelForValue: function (t) {
                        var e = this, i = e.start, n = +e.getRightValue(t), a = e.end - i;
                        return e.isHorizontal() ? e.left + e.width / a * (n - i) : e.bottom - e.height / a * (n - i)
                    }, getValueForPixel: function (t) {
                        var e = this, i = e.isHorizontal(), n = i ? e.width : e.height, a = (i ? t - e.left : e.bottom - t) / n;
                        return e.start + (e.end - e.start) * a
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.ticksAsNumbers[t])
                    }
                });
                t.scaleService.registerScaleType("linear", i, e)
            }
        }, {25: 25, 34: 34, 45: 45}], 55: [function (t, e, i) {
            "use strict";
            var n = t(45);
            e.exports = function (t) {
                var e = n.noop;
                t.LinearScaleBase = t.Scale.extend({
                    getRightValue: function (e) {
                        return "string" == typeof e ? +e : t.Scale.prototype.getRightValue.call(this, e)
                    }, handleTickRangeOptions: function () {
                        var t = this, e = t.options.ticks;
                        if (e.beginAtZero) {
                            var i = n.sign(t.min), a = n.sign(t.max);
                            i < 0 && a < 0 ? t.max = 0 : i > 0 && a > 0 && (t.min = 0)
                        }
                        var o = void 0 !== e.min || void 0 !== e.suggestedMin, r = void 0 !== e.max || void 0 !== e.suggestedMax;
                        void 0 !== e.min ? t.min = e.min : void 0 !== e.suggestedMin && (null === t.min ? t.min = e.suggestedMin : t.min = Math.min(t.min, e.suggestedMin)), void 0 !== e.max ? t.max = e.max : void 0 !== e.suggestedMax && (null === t.max ? t.max = e.suggestedMax : t.max = Math.max(t.max, e.suggestedMax)), o !== r && t.min >= t.max && (o ? t.max = t.min + 1 : t.min = t.max - 1), t.min === t.max && (t.max++, e.beginAtZero || t.min--)
                    }, getTickLimit: e, handleDirectionalChanges: e, buildTicks: function () {
                        var t = this, e = t.options.ticks, i = t.getTickLimit(), a = {maxTicks: i = Math.max(2, i), min: e.min, max: e.max, stepSize: n.valueOrDefault(e.fixedStepSize, e.stepSize)},
                            o = t.ticks = function (t, e) {
                                var i, a = [];
                                if (t.stepSize && t.stepSize > 0) i = t.stepSize; else {
                                    var o = n.niceNum(e.max - e.min, !1);
                                    i = n.niceNum(o / (t.maxTicks - 1), !0)
                                }
                                var r = Math.floor(e.min / i) * i, s = Math.ceil(e.max / i) * i;
                                t.min && t.max && t.stepSize && n.almostWhole((t.max - t.min) / t.stepSize, i / 1e3) && (r = t.min, s = t.max);
                                var l = (s - r) / i;
                                l = n.almostEquals(l, Math.round(l), i / 1e3) ? Math.round(l) : Math.ceil(l);
                                var u = 1;
                                i < 1 && (u = Math.pow(10, i.toString().length - 2), r = Math.round(r * u) / u, s = Math.round(s * u) / u), a.push(void 0 !== t.min ? t.min : r);
                                for (var d = 1; d < l; ++d) a.push(Math.round((r + d * i) * u) / u);
                                return a.push(void 0 !== t.max ? t.max : s), a
                            }(a, t);
                        t.handleDirectionalChanges(), t.max = n.max(o), t.min = n.min(o), e.reverse ? (o.reverse(), t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max)
                    }, convertTicksToLabels: function () {
                        var e = this;
                        e.ticksAsNumbers = e.ticks.slice(), e.zeroLineIndex = e.ticks.indexOf(0), t.Scale.prototype.convertTicksToLabels.call(e)
                    }
                })
            }
        }, {45: 45}], 56: [function (t, e, i) {
            "use strict";
            var n = t(45), a = t(34);
            e.exports = function (t) {
                var e = {position: "left", ticks: {callback: a.formatters.logarithmic}}, i = t.Scale.extend({
                    determineDataLimits: function () {
                        var t = this, e = t.options, i = t.chart, a = i.data.datasets, o = t.isHorizontal();

                        function r(e) {
                            return o ? e.xAxisID === t.id : e.yAxisID === t.id
                        }

                        t.min = null, t.max = null, t.minNotZero = null;
                        var s = e.stacked;
                        if (void 0 === s && n.each(a, function (t, e) {
                            if (!s) {
                                var n = i.getDatasetMeta(e);
                                i.isDatasetVisible(e) && r(n) && void 0 !== n.stack && (s = !0)
                            }
                        }), e.stacked || s) {
                            var l = {};
                            n.each(a, function (a, o) {
                                var s = i.getDatasetMeta(o), u = [s.type, void 0 === e.stacked && void 0 === s.stack ? o : "", s.stack].join(".");
                                i.isDatasetVisible(o) && r(s) && (void 0 === l[u] && (l[u] = []), n.each(a.data, function (e, i) {
                                    var n = l[u], a = +t.getRightValue(e);
                                    isNaN(a) || s.data[i].hidden || a < 0 || (n[i] = n[i] || 0, n[i] += a)
                                }))
                            }), n.each(l, function (e) {
                                if (e.length > 0) {
                                    var i = n.min(e), a = n.max(e);
                                    t.min = null === t.min ? i : Math.min(t.min, i), t.max = null === t.max ? a : Math.max(t.max, a)
                                }
                            })
                        } else n.each(a, function (e, a) {
                            var o = i.getDatasetMeta(a);
                            i.isDatasetVisible(a) && r(o) && n.each(e.data, function (e, i) {
                                var n = +t.getRightValue(e);
                                isNaN(n) || o.data[i].hidden || n < 0 || (null === t.min ? t.min = n : n < t.min && (t.min = n), null === t.max ? t.max = n : n > t.max && (t.max = n), 0 !== n && (null === t.minNotZero || n < t.minNotZero) && (t.minNotZero = n))
                            })
                        });
                        this.handleTickRangeOptions()
                    }, handleTickRangeOptions: function () {
                        var t = this, e = t.options.ticks, i = n.valueOrDefault;
                        t.min = i(e.min, t.min), t.max = i(e.max, t.max), t.min === t.max && (0 !== t.min && null !== t.min ? (t.min = Math.pow(10, Math.floor(n.log10(t.min)) - 1), t.max = Math.pow(10, Math.floor(n.log10(t.max)) + 1)) : (t.min = 1, t.max = 10)), null === t.min && (t.min = Math.pow(10, Math.floor(n.log10(t.max)) - 1)), null === t.max && (t.max = 0 !== t.min ? Math.pow(10, Math.floor(n.log10(t.min)) + 1) : 10), null === t.minNotZero && (t.min > 0 ? t.minNotZero = t.min : t.max < 1 ? t.minNotZero = Math.pow(10, Math.floor(n.log10(t.max))) : t.minNotZero = 1)
                    }, buildTicks: function () {
                        var t = this, e = t.options.ticks, i = !t.isHorizontal(), a = {min: e.min, max: e.max}, o = t.ticks = function (t, e) {
                            var i, a, o = [], r = n.valueOrDefault, s = r(t.min, Math.pow(10, Math.floor(n.log10(e.min)))), l = Math.floor(n.log10(e.max)), u = Math.ceil(e.max / Math.pow(10, l));
                            0 === s ? (i = Math.floor(n.log10(e.minNotZero)), a = Math.floor(e.minNotZero / Math.pow(10, i)), o.push(s), s = a * Math.pow(10, i)) : (i = Math.floor(n.log10(s)), a = Math.floor(s / Math.pow(10, i)));
                            for (var d = i < 0 ? Math.pow(10, Math.abs(i)) : 1; o.push(s), 10 == ++a && (a = 1, d = ++i >= 0 ? 1 : d), s = Math.round(a * Math.pow(10, i) * d) / d, i < l || i === l && a < u;) ;
                            var c = r(t.max, s);
                            return o.push(c), o
                        }(a, t);
                        t.max = n.max(o), t.min = n.min(o), e.reverse ? (i = !i, t.start = t.max, t.end = t.min) : (t.start = t.min, t.end = t.max), i && o.reverse()
                    }, convertTicksToLabels: function () {
                        this.tickValues = this.ticks.slice(), t.Scale.prototype.convertTicksToLabels.call(this)
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, getPixelForTick: function (t) {
                        return this.getPixelForValue(this.tickValues[t])
                    }, _getFirstTickValue: function (t) {
                        var e = Math.floor(n.log10(t));
                        return Math.floor(t / Math.pow(10, e)) * Math.pow(10, e)
                    }, getPixelForValue: function (e) {
                        var i, a, o, r, s, l = this, u = l.options.ticks.reverse, d = n.log10, c = l._getFirstTickValue(l.minNotZero), h = 0;
                        return e = +l.getRightValue(e), u ? (o = l.end, r = l.start, s = -1) : (o = l.start, r = l.end, s = 1), l.isHorizontal() ? (i = l.width, a = u ? l.right : l.left) : (i = l.height, s *= -1, a = u ? l.top : l.bottom), e !== o && (0 === o && (i -= h = n.getValueOrDefault(l.options.ticks.fontSize, t.defaults.global.defaultFontSize), o = c), 0 !== e && (h += i / (d(r) - d(o)) * (d(e) - d(o))), a += s * h), a
                    }, getValueForPixel: function (e) {
                        var i, a, o, r, s = this, l = s.options.ticks.reverse, u = n.log10, d = s._getFirstTickValue(s.minNotZero);
                        if (l ? (a = s.end, o = s.start) : (a = s.start, o = s.end), s.isHorizontal() ? (i = s.width, r = l ? s.right - e : e - s.left) : (i = s.height, r = l ? e - s.top : s.bottom - e), r !== a) {
                            if (0 === a) {
                                var c = n.getValueOrDefault(s.options.ticks.fontSize, t.defaults.global.defaultFontSize);
                                r -= c, i -= c, a = d
                            }
                            r *= u(o) - u(a), r /= i, r = Math.pow(10, u(a) + r)
                        }
                        return r
                    }
                });
                t.scaleService.registerScaleType("logarithmic", i, e)
            }
        }, {34: 34, 45: 45}], 57: [function (t, e, i) {
            "use strict";
            var n = t(25), a = t(45), o = t(34);
            e.exports = function (t) {
                var e = n.global, i = {
                    display: !0,
                    animate: !0,
                    position: "chartArea",
                    angleLines: {display: !0, color: "rgba(0, 0, 0, 0.1)", lineWidth: 1},
                    gridLines: {circular: !1},
                    ticks: {showLabelBackdrop: !0, backdropColor: "rgba(255,255,255,0.75)", backdropPaddingY: 2, backdropPaddingX: 2, callback: o.formatters.linear},
                    pointLabels: {
                        display: !0, fontSize: 10, callback: function (t) {
                            return t
                        }
                    }
                };

                function r(t) {
                    var e = t.options;
                    return e.angleLines.display || e.pointLabels.display ? t.chart.data.labels.length : 0
                }

                function s(t) {
                    var i = t.options.pointLabels, n = a.valueOrDefault(i.fontSize, e.defaultFontSize), o = a.valueOrDefault(i.fontStyle, e.defaultFontStyle),
                        r = a.valueOrDefault(i.fontFamily, e.defaultFontFamily);
                    return {size: n, style: o, family: r, font: a.fontString(n, o, r)}
                }

                function l(t, e, i, n, a) {
                    return t === n || t === a ? {start: e - i / 2, end: e + i / 2} : t < n || t > a ? {start: e - i - 5, end: e} : {start: e, end: e + i + 5}
                }

                function u(t, e, i, n) {
                    if (a.isArray(e)) for (var o = i.y, r = 1.5 * n, s = 0; s < e.length; ++s) t.fillText(e[s], i.x, o), o += r; else t.fillText(e, i.x, i.y)
                }

                function d(t) {
                    return a.isNumber(t) ? t : 0
                }

                var c = t.LinearScaleBase.extend({
                    setDimensions: function () {
                        var t = this, i = t.options, n = i.ticks;
                        t.width = t.maxWidth, t.height = t.maxHeight, t.xCenter = Math.round(t.width / 2), t.yCenter = Math.round(t.height / 2);
                        var o = a.min([t.height, t.width]), r = a.valueOrDefault(n.fontSize, e.defaultFontSize);
                        t.drawingArea = i.display ? o / 2 - (r / 2 + n.backdropPaddingY) : o / 2
                    }, determineDataLimits: function () {
                        var t = this, e = t.chart, i = Number.POSITIVE_INFINITY, n = Number.NEGATIVE_INFINITY;
                        a.each(e.data.datasets, function (o, r) {
                            if (e.isDatasetVisible(r)) {
                                var s = e.getDatasetMeta(r);
                                a.each(o.data, function (e, a) {
                                    var o = +t.getRightValue(e);
                                    isNaN(o) || s.data[a].hidden || (i = Math.min(o, i), n = Math.max(o, n))
                                })
                            }
                        }), t.min = i === Number.POSITIVE_INFINITY ? 0 : i, t.max = n === Number.NEGATIVE_INFINITY ? 0 : n, t.handleTickRangeOptions()
                    }, getTickLimit: function () {
                        var t = this.options.ticks, i = a.valueOrDefault(t.fontSize, e.defaultFontSize);
                        return Math.min(t.maxTicksLimit ? t.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * i)))
                    }, convertTicksToLabels: function () {
                        var e = this;
                        t.LinearScaleBase.prototype.convertTicksToLabels.call(e), e.pointLabels = e.chart.data.labels.map(e.options.pointLabels.callback, e)
                    }, getLabelForIndex: function (t, e) {
                        return +this.getRightValue(this.chart.data.datasets[e].data[t])
                    }, fit: function () {
                        var t, e;
                        this.options.pointLabels.display ? function (t) {
                            var e, i, n, o = s(t), u = Math.min(t.height / 2, t.width / 2), d = {r: t.width, l: 0, t: t.height, b: 0}, c = {};
                            t.ctx.font = o.font, t._pointLabelSizes = [];
                            var h, f, g, p = r(t);
                            for (e = 0; e < p; e++) {
                                n = t.getPointPosition(e, u), h = t.ctx, f = o.size, g = t.pointLabels[e] || "", i = a.isArray(g) ? {
                                    w: a.longestText(h, h.font, g),
                                    h: g.length * f + 1.5 * (g.length - 1) * f
                                } : {w: h.measureText(g).width, h: f}, t._pointLabelSizes[e] = i;
                                var m = t.getIndexAngle(e), v = a.toDegrees(m) % 360, b = l(v, n.x, i.w, 0, 180), x = l(v, n.y, i.h, 90, 270);
                                b.start < d.l && (d.l = b.start, c.l = m), b.end > d.r && (d.r = b.end, c.r = m), x.start < d.t && (d.t = x.start, c.t = m), x.end > d.b && (d.b = x.end, c.b = m)
                            }
                            t.setReductions(u, d, c)
                        }(this) : (t = this, e = Math.min(t.height / 2, t.width / 2), t.drawingArea = Math.round(e), t.setCenterPoint(0, 0, 0, 0))
                    }, setReductions: function (t, e, i) {
                        var n = e.l / Math.sin(i.l), a = Math.max(e.r - this.width, 0) / Math.sin(i.r), o = -e.t / Math.cos(i.t), r = -Math.max(e.b - this.height, 0) / Math.cos(i.b);
                        n = d(n), a = d(a), o = d(o), r = d(r), this.drawingArea = Math.min(Math.round(t - (n + a) / 2), Math.round(t - (o + r) / 2)), this.setCenterPoint(n, a, o, r)
                    }, setCenterPoint: function (t, e, i, n) {
                        var a = this, o = a.width - e - a.drawingArea, r = t + a.drawingArea, s = i + a.drawingArea, l = a.height - n - a.drawingArea;
                        a.xCenter = Math.round((r + o) / 2 + a.left), a.yCenter = Math.round((s + l) / 2 + a.top)
                    }, getIndexAngle: function (t) {
                        return t * (2 * Math.PI / r(this)) + (this.chart.options && this.chart.options.startAngle ? this.chart.options.startAngle : 0) * Math.PI * 2 / 360
                    }, getDistanceFromCenterForValue: function (t) {
                        var e = this;
                        if (null === t) return 0;
                        var i = e.drawingArea / (e.max - e.min);
                        return e.options.ticks.reverse ? (e.max - t) * i : (t - e.min) * i
                    }, getPointPosition: function (t, e) {
                        var i = this.getIndexAngle(t) - Math.PI / 2;
                        return {x: Math.round(Math.cos(i) * e) + this.xCenter, y: Math.round(Math.sin(i) * e) + this.yCenter}
                    }, getPointPositionForValue: function (t, e) {
                        return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
                    }, getBasePosition: function () {
                        var t = this.min, e = this.max;
                        return this.getPointPositionForValue(0, this.beginAtZero ? 0 : t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0)
                    }, draw: function () {
                        var t = this, i = t.options, n = i.gridLines, o = i.ticks, l = a.valueOrDefault;
                        if (i.display) {
                            var d = t.ctx, c = this.getIndexAngle(0), h = l(o.fontSize, e.defaultFontSize), f = l(o.fontStyle, e.defaultFontStyle), g = l(o.fontFamily, e.defaultFontFamily),
                                p = a.fontString(h, f, g);
                            a.each(t.ticks, function (i, s) {
                                if (s > 0 || o.reverse) {
                                    var u = t.getDistanceFromCenterForValue(t.ticksAsNumbers[s]);
                                    if (n.display && 0 !== s && function (t, e, i, n) {
                                        var o = t.ctx;
                                        if (o.strokeStyle = a.valueAtIndexOrDefault(e.color, n - 1), o.lineWidth = a.valueAtIndexOrDefault(e.lineWidth, n - 1), t.options.gridLines.circular) o.beginPath(), o.arc(t.xCenter, t.yCenter, i, 0, 2 * Math.PI), o.closePath(), o.stroke(); else {
                                            var s = r(t);
                                            if (0 === s) return;
                                            o.beginPath();
                                            var l = t.getPointPosition(0, i);
                                            o.moveTo(l.x, l.y);
                                            for (var u = 1; u < s; u++) l = t.getPointPosition(u, i), o.lineTo(l.x, l.y);
                                            o.closePath(), o.stroke()
                                        }
                                    }(t, n, u, s), o.display) {
                                        var f = l(o.fontColor, e.defaultFontColor);
                                        if (d.font = p, d.save(), d.translate(t.xCenter, t.yCenter), d.rotate(c), o.showLabelBackdrop) {
                                            var g = d.measureText(i).width;
                                            d.fillStyle = o.backdropColor, d.fillRect(-g / 2 - o.backdropPaddingX, -u - h / 2 - o.backdropPaddingY, g + 2 * o.backdropPaddingX, h + 2 * o.backdropPaddingY)
                                        }
                                        d.textAlign = "center", d.textBaseline = "middle", d.fillStyle = f, d.fillText(i, 0, -u), d.restore()
                                    }
                                }
                            }), (i.angleLines.display || i.pointLabels.display) && function (t) {
                                var i = t.ctx, n = t.options, o = n.angleLines, l = n.pointLabels;
                                i.lineWidth = o.lineWidth, i.strokeStyle = o.color;
                                var d, c, h, f, g = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max), p = s(t);
                                i.textBaseline = "top";
                                for (var m = r(t) - 1; m >= 0; m--) {
                                    if (o.display) {
                                        var v = t.getPointPosition(m, g);
                                        i.beginPath(), i.moveTo(t.xCenter, t.yCenter), i.lineTo(v.x, v.y), i.stroke(), i.closePath()
                                    }
                                    if (l.display) {
                                        var b = t.getPointPosition(m, g + 5), x = a.valueAtIndexOrDefault(l.fontColor, m, e.defaultFontColor);
                                        i.font = p.font, i.fillStyle = x;
                                        var y = t.getIndexAngle(m), k = a.toDegrees(y);
                                        i.textAlign = 0 === (f = k) || 180 === f ? "center" : f < 180 ? "left" : "right", d = k, c = t._pointLabelSizes[m], h = b, 90 === d || 270 === d ? h.y -= c.h / 2 : (d > 270 || d < 90) && (h.y -= c.h), u(i, t.pointLabels[m] || "", b, p.size)
                                    }
                                }
                            }(t)
                        }
                    }
                });
                t.scaleService.registerScaleType("radialLinear", c, i)
            }
        }, {25: 25, 34: 34, 45: 45}], 58: [function (t, e, i) {
            "use strict";
            var n = t(1);
            n = "function" == typeof n ? n : window.moment;
            var a = t(25), o = t(45), r = Number.MIN_SAFE_INTEGER || -9007199254740991, s = Number.MAX_SAFE_INTEGER || 9007199254740991, l = {
                millisecond: {common: !0, size: 1, steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]},
                second: {common: !0, size: 1e3, steps: [1, 2, 5, 10, 30]},
                minute: {common: !0, size: 6e4, steps: [1, 2, 5, 10, 30]},
                hour: {common: !0, size: 36e5, steps: [1, 2, 3, 6, 12]},
                day: {common: !0, size: 864e5, steps: [1, 2, 5]},
                week: {common: !1, size: 6048e5, steps: [1, 2, 3, 4]},
                month: {common: !0, size: 2628e6, steps: [1, 2, 3]},
                quarter: {common: !1, size: 7884e6, steps: [1, 2, 3, 4]},
                year: {common: !0, size: 3154e7}
            }, u = Object.keys(l);

            function d(t, e) {
                return t - e
            }

            function c(t) {
                var e, i, n, a = {}, o = [];
                for (e = 0, i = t.length; e < i; ++e) a[n = t[e]] || (a[n] = !0, o.push(n));
                return o
            }

            function h(t, e, i, n) {
                var a = function (t, e, i) {
                    for (var n, a, o, r = 0, s = t.length - 1; r >= 0 && r <= s;) {
                        if (a = t[(n = r + s >> 1) - 1] || null, o = t[n], !a) return {lo: null, hi: o};
                        if (o[e] < i) r = n + 1; else {
                            if (!(a[e] > i)) return {lo: a, hi: o};
                            s = n - 1
                        }
                    }
                    return {lo: o, hi: null}
                }(t, e, i), o = a.lo ? a.hi ? a.lo : t[t.length - 2] : t[0], r = a.lo ? a.hi ? a.hi : t[t.length - 1] : t[1], s = r[e] - o[e], l = s ? (i - o[e]) / s : 0, u = (r[n] - o[n]) * l;
                return o[n] + u
            }

            function f(t, e) {
                var i = e.parser, a = e.parser || e.format;
                return "function" == typeof i ? i(t) : "string" == typeof t && "string" == typeof a ? n(t, a) : (t instanceof n || (t = n(t)), t.isValid() ? t : "function" == typeof a ? a(t) : t)
            }

            function g(t, e) {
                if (o.isNullOrUndef(t)) return null;
                var i = e.options.time, n = f(e.getRightValue(t), i);
                return n.isValid() ? (i.round && n.startOf(i.round), n.valueOf()) : null
            }

            function p(t) {
                for (var e = u.indexOf(t) + 1, i = u.length; e < i; ++e) if (l[u[e]].common) return u[e]
            }

            function m(t, e, i, a) {
                var r, d = a.time, c = d.unit || function (t, e, i, n) {
                    var a, o, r, d = u.length;
                    for (a = u.indexOf(t); a < d - 1; ++a) if (r = (o = l[u[a]]).steps ? o.steps[o.steps.length - 1] : s, o.common && Math.ceil((i - e) / (r * o.size)) <= n) return u[a];
                    return u[d - 1]
                }(d.minUnit, t, e, i), h = p(c), f = o.valueOrDefault(d.stepSize, d.unitStepSize), g = "week" === c && d.isoWeekday, m = a.ticks.major.enabled, v = l[c], b = n(t), x = n(e), y = [];
                for (f || (f = function (t, e, i, n) {
                    var a, o, r, s = e - t, u = l[i], d = u.size, c = u.steps;
                    if (!c) return Math.ceil(s / (n * d));
                    for (a = 0, o = c.length; a < o && (r = c[a], !(Math.ceil(s / (d * r)) <= n)); ++a) ;
                    return r
                }(t, e, c, i)), g && (b = b.isoWeekday(g), x = x.isoWeekday(g)), b = b.startOf(g ? "day" : c), (x = x.startOf(g ? "day" : c)) < e && x.add(1, c), r = n(b), m && h && !g && !d.round && (r.startOf(h), r.add(~~((b - r) / (v.size * f)) * f, c)); r < x; r.add(f, c)) y.push(+r);
                return y.push(+r), y
            }

            e.exports = function (t) {
                var e = t.Scale.extend({
                    initialize: function () {
                        if (!n) throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");
                        this.mergeTicksOptions(), t.Scale.prototype.initialize.call(this)
                    }, update: function () {
                        var e = this.options;
                        return e.time && e.time.format && console.warn("options.time.format is deprecated and replaced by options.time.parser."), t.Scale.prototype.update.apply(this, arguments)
                    }, getRightValue: function (e) {
                        return e && void 0 !== e.t && (e = e.t), t.Scale.prototype.getRightValue.call(this, e)
                    }, determineDataLimits: function () {
                        var t, e, i, a, l, u, h = this, f = h.chart, p = h.options.time, m = p.unit || "day", v = s, b = r, x = [], y = [], k = [];
                        for (t = 0, i = f.data.labels.length; t < i; ++t) k.push(g(f.data.labels[t], h));
                        for (t = 0, i = (f.data.datasets || []).length; t < i; ++t) if (f.isDatasetVisible(t)) if (l = f.data.datasets[t].data, o.isObject(l[0])) for (y[t] = [], e = 0, a = l.length; e < a; ++e) u = g(l[e], h), x.push(u), y[t][e] = u; else x.push.apply(x, k), y[t] = k.slice(0); else y[t] = [];
                        k.length && (k = c(k).sort(d), v = Math.min(v, k[0]), b = Math.max(b, k[k.length - 1])), x.length && (x = c(x).sort(d), v = Math.min(v, x[0]), b = Math.max(b, x[x.length - 1])), v = g(p.min, h) || v, b = g(p.max, h) || b, v = v === s ? +n().startOf(m) : v, b = b === r ? +n().endOf(m) + 1 : b, h.min = Math.min(v, b), h.max = Math.max(v + 1, b), h._horizontal = h.isHorizontal(), h._table = [], h._timestamps = {
                            data: x,
                            datasets: y,
                            labels: k
                        }
                    }, buildTicks: function () {
                        var t, e, i, a, o, r, s, d, c, v, b, x, y = this, k = y.min, M = y.max, w = y.options, S = w.time, C = [], _ = [];
                        switch (w.ticks.source) {
                            case"data":
                                C = y._timestamps.data;
                                break;
                            case"labels":
                                C = y._timestamps.labels;
                                break;
                            case"auto":
                            default:
                                C = m(k, M, y.getLabelCapacity(k), w)
                        }
                        for ("ticks" === w.bounds && C.length && (k = C[0], M = C[C.length - 1]), k = g(S.min, y) || k, M = g(S.max, y) || M, t = 0, e = C.length; t < e; ++t) (i = C[t]) >= k && i <= M && _.push(i);
                        return y.min = k, y.max = M, y._unit = S.unit || function (t, e, i, a) {
                            var o, r, s = n.duration(n(a).diff(n(i)));
                            for (o = u.length - 1; o >= u.indexOf(e); o--) if (r = u[o], l[r].common && s.as(r) >= t.length) return r;
                            return u[e ? u.indexOf(e) : 0]
                        }(_, S.minUnit, y.min, y.max), y._majorUnit = p(y._unit), y._table = function (t, e, i, n) {
                            if ("linear" === n || !t.length) return [{time: e, pos: 0}, {time: i, pos: 1}];
                            var a, o, r, s, l, u = [], d = [e];
                            for (a = 0, o = t.length; a < o; ++a) (s = t[a]) > e && s < i && d.push(s);
                            for (d.push(i), a = 0, o = d.length; a < o; ++a) l = d[a + 1], r = d[a - 1], s = d[a], void 0 !== r && void 0 !== l && Math.round((l + r) / 2) === s || u.push({
                                time: s,
                                pos: a / (o - 1)
                            });
                            return u
                        }(y._timestamps.data, k, M, w.distribution), y._offsets = (a = y._table, o = _, r = k, s = M, b = 0, x = 0, (d = w).offset && o.length && (d.time.min || (c = o.length > 1 ? o[1] : s, v = o[0], b = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2), d.time.max || (c = o[o.length - 1], v = o.length > 1 ? o[o.length - 2] : r, x = (h(a, "time", c, "pos") - h(a, "time", v, "pos")) / 2)), {
                            left: b,
                            right: x
                        }), y._labelFormat = function (t, e) {
                            var i, n, a, o = t.length;
                            for (i = 0; i < o; i++) {
                                if (0 !== (n = f(t[i], e)).millisecond()) return "MMM D, YYYY h:mm:ss.SSS a";
                                0 === n.second() && 0 === n.minute() && 0 === n.hour() || (a = !0)
                            }
                            return a ? "MMM D, YYYY h:mm:ss a" : "MMM D, YYYY"
                        }(y._timestamps.data, S), function (t, e) {
                            var i, a, o, r, s = [];
                            for (i = 0, a = t.length; i < a; ++i) o = t[i], r = !!e && o === +n(o).startOf(e), s.push({value: o, major: r});
                            return s
                        }(_, y._majorUnit)
                    }, getLabelForIndex: function (t, e) {
                        var i = this.chart.data, n = this.options.time, a = i.labels && t < i.labels.length ? i.labels[t] : "", r = i.datasets[e].data[t];
                        return o.isObject(r) && (a = this.getRightValue(r)), n.tooltipFormat ? f(a, n).format(n.tooltipFormat) : "string" == typeof a ? a : f(a, n).format(this._labelFormat)
                    }, tickFormatFunction: function (t, e, i, n) {
                        var a = this.options, r = t.valueOf(), s = a.time.displayFormats, l = s[this._unit], u = this._majorUnit, d = s[u], c = t.clone().startOf(u).valueOf(), h = a.ticks.major,
                            f = h.enabled && u && d && r === c, g = t.format(n || (f ? d : l)), p = f ? h : a.ticks.minor, m = o.valueOrDefault(p.callback, p.userCallback);
                        return m ? m(g, e, i) : g
                    }, convertTicksToLabels: function (t) {
                        var e, i, a = [];
                        for (e = 0, i = t.length; e < i; ++e) a.push(this.tickFormatFunction(n(t[e].value), e, t));
                        return a
                    }, getPixelForOffset: function (t) {
                        var e = this, i = e._horizontal ? e.width : e.height, n = e._horizontal ? e.left : e.top, a = h(e._table, "time", t, "pos");
                        return n + i * (e._offsets.left + a) / (e._offsets.left + 1 + e._offsets.right)
                    }, getPixelForValue: function (t, e, i) {
                        var n = null;
                        if (void 0 !== e && void 0 !== i && (n = this._timestamps.datasets[i][e]), null === n && (n = g(t, this)), null !== n) return this.getPixelForOffset(n)
                    }, getPixelForTick: function (t) {
                        var e = this.getTicks();
                        return t >= 0 && t < e.length ? this.getPixelForOffset(e[t].value) : null
                    }, getValueForPixel: function (t) {
                        var e = this, i = e._horizontal ? e.width : e.height, a = e._horizontal ? e.left : e.top,
                            o = (i ? (t - a) / i : 0) * (e._offsets.left + 1 + e._offsets.left) - e._offsets.right, r = h(e._table, "pos", o, "time");
                        return n(r)
                    }, getLabelWidth: function (t) {
                        var e = this.options.ticks, i = this.ctx.measureText(t).width, n = o.toRadians(e.maxRotation), r = Math.cos(n), s = Math.sin(n);
                        return i * r + o.valueOrDefault(e.fontSize, a.global.defaultFontSize) * s
                    }, getLabelCapacity: function (t) {
                        var e = this, i = e.options.time.displayFormats.millisecond, a = e.tickFormatFunction(n(t), 0, [], i), o = e.getLabelWidth(a), r = e.isHorizontal() ? e.width : e.height,
                            s = Math.floor(r / o);
                        return s > 0 ? s : 1
                    }
                });
                t.scaleService.registerScaleType("time", e, {
                    position: "bottom",
                    distribution: "linear",
                    bounds: "data",
                    time: {
                        parser: !1,
                        format: !1,
                        unit: !1,
                        round: !1,
                        displayFormat: !1,
                        isoWeekday: !1,
                        minUnit: "millisecond",
                        displayFormats: {
                            millisecond: "h:mm:ss.SSS a",
                            second: "h:mm:ss a",
                            minute: "h:mm a",
                            hour: "hA",
                            day: "MMM D",
                            week: "ll",
                            month: "MMM YYYY",
                            quarter: "[Q]Q - YYYY",
                            year: "YYYY"
                        }
                    },
                    ticks: {autoSkip: !1, source: "auto", major: {enabled: !1}}
                })
            }
        }, {1: 1, 25: 25, 45: 45}]
    }, {}, [7])(7)
});
/*!
  * Isotope PACKAGED v3.0.6
  */
!function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, s, a) {
        function u(t, e, o) {
            var n, s = "$()." + i + '("' + e + '")';
            return t.each(function (t, u) {
                var h = a.data(u, i);
                if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                var d = h[e];
                if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                var l = d.apply(h, o);
                n = void 0 === n ? l : n
            }), void 0 !== n ? n : t
        }

        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n))
            })
        }

        a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }), a.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = n.call(arguments, 1);
                return u(this, t, e)
            }
            return h(this, t), this
        }, o(a))
    }

    function o(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var n = Array.prototype.slice, s = t.console, r = "undefined" == typeof s ? function () {
    } : function (t) {
        s.error(t)
    };
    return o(e || t.jQuery), i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, o = i[t] = i[t] || [];
            return o.indexOf(e) == -1 && o.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {}, o = i[t] = i[t] || {};
            return o[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var o = i.indexOf(e);
            return o != -1 && i.splice(o, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                var s = i[n], r = o && o[s];
                r && (this.off(t, s), delete o[s]), s.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t), i = t.indexOf("%") == -1 && !isNaN(e);
        return i && e
    }

    function e() {
    }

    function i() {
        for (var t = {width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0}, e = 0; e < h; e++) {
            var i = u[e];
            t[i] = 0
        }
        return t
    }

    function o(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function n() {
        if (!d) {
            d = !0;
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var n = o(e);
            r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e)
        }
    }

    function s(e) {
        if (n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
            var s = o(e);
            if ("none" == s.display) return i();
            var a = {};
            a.width = e.offsetWidth, a.height = e.offsetHeight;
            for (var d = a.isBorderBox = "border-box" == s.boxSizing, l = 0; l < h; l++) {
                var f = u[l], c = s[f], m = parseFloat(c);
                a[f] = isNaN(m) ? 0 : m
            }
            var p = a.paddingLeft + a.paddingRight, y = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, _ = a.borderLeftWidth + a.borderRightWidth,
                z = a.borderTopWidth + a.borderBottomWidth, I = d && r, x = t(s.width);
            x !== !1 && (a.width = x + (I ? 0 : p + _));
            var S = t(s.height);
            return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a
        }
    }

    var r, a = "undefined" == typeof console ? e : function (t) {
            console.error(t)
        },
        u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        h = u.length, d = !1;
    return s
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var o = e[i], n = o + "MatchesSelector";
            if (t[n]) return n
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }, i.modulo = function (t, e) {
        return (t % e + e) % e
    };
    var o = Array.prototype.slice;
    i.makeArray = function (t) {
        if (Array.isArray(t)) return t;
        if (null === t || void 0 === t) return [];
        var e = "object" == typeof t && "number" == typeof t.length;
        return e ? o.call(t) : [t]
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return t.forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!o) return void n.push(t);
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s])
            }
        }), n
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e], n = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[n];
            clearTimeout(t);
            var e = arguments, s = this;
            this[n] = setTimeout(function () {
                o.apply(s, e), delete s[n]
            }, i)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var n = t.console;
    return i.htmlInit = function (e, o) {
        i.docReady(function () {
            var s = i.toDashed(o), r = "data-" + s, a = document.querySelectorAll("[" + r + "]"), u = document.querySelectorAll(".js-" + s), h = i.makeArray(a).concat(i.makeArray(u)),
                d = r + "-options", l = t.jQuery;
            h.forEach(function (t) {
                var i, s = t.getAttribute(r) || t.getAttribute(d);
                try {
                    i = s && JSON.parse(s)
                } catch (a) {
                    return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                }
                var u = new e(t, i);
                l && l.data(t, o, u)
            })
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        for (var e in t) return !1;
        return e = null, !0
    }

    function o(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    function n(t) {
        return t.replace(/([A-Z])/g, function (t) {
            return "-" + t.toLowerCase()
        })
    }

    var s = document.documentElement.style, r = "string" == typeof s.transition ? "transition" : "WebkitTransition", a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        u = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[r],
        h = {transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay"}, d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, d.getSize = function () {
        this.size = e(this.element)
    }, d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            var o = h[i] || i;
            e[o] = t[i]
        }
    }, d.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), o = t[e ? "left" : "right"], n = t[i ? "top" : "bottom"],
            s = parseFloat(o), r = parseFloat(n), a = this.layout.size;
        o.indexOf("%") != -1 && (s = s / 100 * a.width), n.indexOf("%") != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r
    }, d.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop"), n = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right",
            r = i ? "right" : "left", a = this.position.x + t[n];
        e[s] = this.getXValue(a), e[r] = "";
        var u = o ? "paddingTop" : "paddingBottom", h = o ? "top" : "bottom", d = o ? "bottom" : "top", l = this.position.y + t[u];
        e[h] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this])
    }, d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, o = this.position.y, n = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
        var s = t - i, r = e - o, a = {};
        a.transform = this.getTranslate(s, r), this.transition({to: a, onTransitionEnd: {transform: this.layoutPosition}, isCleaning: !0})
    }, d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"), o = this.layout._getOption("originTop");
        return t = i ? t : -t, e = o ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
    }, d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null
        }
        this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
    };
    var l = "opacity," + n(a);
    d.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0}), this.element.addEventListener(u, this, !1)
        }
    }, d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, d.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var f = {"-webkit-transform": "transform"};
    d.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, o = f[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[o]), o in e.onEnd) {
                var n = e.onEnd[o];
                n.call(this), delete e.onEnd[o]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var c = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return d.removeTransitionStyles = function () {
        this.css(c)
    }, d.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, d.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        e[i] = this.onRevealTransitionEnd, this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e})
    }, d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, d.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        e[i] = this.onHideTransitionEnd, this.transition({from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e})
    }, d.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, d.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, o
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
        return e(t, i, o, n, s)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, o, n) {
    "use strict";

    function s(t, e) {
        var i = o.getQueryElement(t);
        if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
        this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
        var n = ++l;
        this.element.outlayerGUID = n, f[n] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function r(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    function a(t) {
        if ("number" == typeof t) return t;
        var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], o = e && e[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var n = m[o] || 1;
        return i * n
    }

    var u = t.console, h = t.jQuery, d = function () {
    }, l = 0, f = {};
    s.namespace = "outlayer", s.Item = n, s.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function (t) {
        o.extend(this.options, t)
    }, c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, c._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize()
    }, c.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, c._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
            var s = e[n], r = new i(s, this);
            o.push(r)
        }
        return o
    }, c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector)
    }, c.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, c._init = c.layout, c._resetLayout = function () {
        this.getSize()
    }, c.getSize = function () {
        this.size = i(this.element)
    }, c._getMeasurement = function (t, e) {
        var o, n = this.options[t];
        n ? ("string" == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0
    }, c.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, c._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var o = this._getItemLayoutPosition(t);
                o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o)
            }, this), this._processLayoutQueue(i)
        }
    }, c._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, c._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger)
    }, c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i))
    }, c._postLayout = function () {
        this.resizeContainer()
    }, c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, c._emitCompleteOnItems = function (t, e) {
        function i() {
            n.dispatchEvent(t + "Complete", null, [e])
        }

        function o() {
            r++, r == s && i()
        }

        var n = this, s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
            e.once(t, o)
        })
    }, c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
            var n = h.Event(e);
            n.type = t, this.$element.trigger(n, i)
        } else this.$element.trigger(t, i)
    }, c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, c.stamp = function (t) {
        t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, c.unstamp = function (t) {
        t = this._find(t), t && t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, c._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
    }, c._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, c._manageStamp = d, c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), o = this._boundingRect, n = i(t),
            s = {left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom};
        return s
    }, c.handleEvent = o.handleEvent, c.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, c.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, c.onresize = function () {
        this.resize()
    }, o.debounceMethod(s, "onresize", 100), c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, c.needsResizeLayout = function () {
        var t = i(this.element), e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth
    }, c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, c.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, c.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), o.removeFrom(this.items, t)
        }, this)
    }, c.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace)
    }, s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e]
    }, s.create = function (t, e) {
        var i = r(s);
        return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i
    };
    var m = {ms: 1, s: 1e3};
    return s.Item = n, s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }

    var i = e.prototype = Object.create(t.Item.prototype), o = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, o.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var o = e[i];
                this.sortData[i] = o(this.element, this)
            }
        }
    };
    var n = i.destroy;
    return i.destroy = function () {
        n.apply(this, arguments), this.css({display: ""})
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    var o = i.prototype, n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return n.forEach(function (t) {
        o[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element), i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight
    }, o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, o.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, o.getSegmentSize = function (t, e) {
        var i = t + e, o = "outer" + e;
        if (this._getMeasurement(i, o), !this[i]) {
            var n = this.getFirstItemSize();
            this[i] = n && n[o] || this.isotope.size["inner" + e]
        }
    }, o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, o.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function n() {
            i.apply(this, arguments)
        }

        return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return o._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, o.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var o = this.columnWidth += this.gutter, n = this.containerWidth + this.gutter, s = n / o, r = o - n % o, a = r && r < 1 ? "round" : "floor";
        s = Math[a](s), this.cols = Math.max(s, 1)
    }, o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, o = e(i);
        this.containerWidth = o && o.innerWidth
    }, o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil", o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = {
            x: this.columnWidth * s.col,
            y: s.y
        }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) this.colYs[h] = a;
        return r
    }, o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
        return {col: e.indexOf(i), y: i}
    }, o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
        return e
    }, o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols, o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, t)}
    }, o._manageStamp = function (t) {
        var i = e(t), o = this._getElementOffset(t), n = this._getOption("originLeft"), s = n ? o.left : o.right, r = s + i.outerWidth, a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);
        for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l])
    }, o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"), o = i.prototype, n = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
        this.items = this.isotope.filteredItems, r.call(this)
    };
    var a = o._getOption;
    return o._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"), i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var o = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o
    }, i._getContainerSize = function () {
        return {height: this.maxY}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {horizontalAlignment: 0}), i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, i._getContainerSize = function () {
        return {height: this.y}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, o, n, s, r, a) {
        return e(t, i, o, n, s, r, a)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
        return function (i, o) {
            for (var n = 0; n < t.length; n++) {
                var s = t[n], r = i.sortData[s], a = o.sortData[s];
                if (r > a || r < a) {
                    var u = void 0 !== e[s] ? e[s] : e, h = u ? 1 : -1;
                    return (r > a ? 1 : -1) * h
                }
            }
            return 0
        }
    }

    var u = t.jQuery, h = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, d = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in r.modes) this._initLayoutMode(t)
    }, l.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, l._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            var o = t[i];
            o.id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, l._initLayoutMode = function (t) {
        var e = r.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, l._init = l.arrange, l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, l._bindArrangeComplete = function () {
        function t() {
            e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems])
        }

        var e, i, o, n = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            o = !0, t()
        })
    }, l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
            var a = t[r];
            if (!a.isIgnored) {
                var u = s(a);
                u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a)
            }
        }
        return {matches: i, needReveal: o, needHide: n}
    }, l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering ? function (e) {
            return u(e.element).is(t);
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return o(e.element, t)
        }
    }, l.updateSortData = function (t) {
        var e;
        t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = f(i)
        }
    }, l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            var o = t[i];
            o.updateSortData()
        }
    };
    var f = function () {
        function t(t) {
            if ("string" != typeof t) return t;
            var i = h(t).split(" "), o = i[0], n = o.match(/^\[(.+)\]$/), s = n && n[1], r = e(s, o), a = d.sortDataParsers[i[1]];
            return t = a ? function (t) {
                return t && a(r(t))
            } : function (t) {
                return t && r(t)
            }
        }

        function e(t, e) {
            return t ? function (e) {
                return e.getAttribute(t)
            } : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent
            }
        }

        return t
    }();
    d.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        }, parseFloat: function (t) {
            return parseFloat(t)
        }
    }, l._sort = function () {
        if (this.options.sortBy) {
            var t = n.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = a(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(e)
        }
    }, l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, l._mode = function () {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, l._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, l._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, o, n = e.length;
            for (i = 0; i < n; i++) o = e[i], this.element.appendChild(o.element);
            var s = this._filter(e).matches;
            for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var c = l.remove;
    return l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
            var s = e[o];
            n.removeFrom(this.filteredItems, s)
        }
    }, l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            var e = this.items[t];
            e.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return this.options.transitionDuration = i, o
    }, l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, d
});

// Simple light box js
!function (X, N, Y, t) {
    "use strict";
    X.fn.simpleLightbox = function (p) {
        p = X.extend({
            sourceAttr: "href",
            overlay: !0,
            spinner: !0,
            nav: !0,
            navText: ["&lsaquo;", "&rsaquo;"],
            captions: !0,
            captionDelay: 0,
            captionSelector: "img",
            captionType: "attr",
            captionsData: "title",
            captionPosition: "bottom",
            captionClass: "",
            close: !0,
            closeText: "×",
            swipeClose: !0,
            showCounter: !0,
            fileExt: "png|jpg|jpeg|gif",
            animationSlide: !0,
            animationSpeed: 250,
            preloading: !0,
            enableKeyboard: !0,
            loop: !0,
            rel: !1,
            docClose: !0,
            swipeTolerance: 50,
            className: "simple-lightbox",
            widthRatio: .8,
            heightRatio: .9,
            scaleImageToRatio: !1,
            disableRightClick: !1,
            disableScroll: !0,
            alertError: !0,
            alertErrorMessage: "Image not found, next image will be loaded",
            additionalHtml: !1,
            history: !0,
            throttleInterval: 0
        }, p), N.navigator.pointerEnabled || N.navigator.msPointerEnabled;
        var d, t, r = 0, l = 0, h = X(), i = function () {
                var t = Y.body || Y.documentElement;
                return "" === (t = t.style).WebkitTransition ? "-webkit-" : "" === t.MozTransition ? "-moz-" : "" === t.OTransition ? "-o-" : "" === t.transition && ""
            }, g = !1, u = [], f = p.rel && !1 !== p.rel ? (t = p.rel, X(this).filter(function () {
                return X(this).attr("rel") === t
            })) : this, m = (i = i(), 0), v = !1 !== i, n = "pushState" in history, x = !1, a = N.location, c = function () {
                return a.hash.substring(1)
            }, b = c(), y = function () {
                c();
                var t = "pid=" + (I + 1), e = a.href.split("#")[0] + "#" + t;
                n ? history[x ? "replaceState" : "pushState"]("", Y.title, e) : x ? a.replace(e) : a.hash = t, x = !0
            }, w = function (e, n) {
                var i;
                return function () {
                    var t = arguments;
                    i || (e.apply(this, t), i = !0, setTimeout(function () {
                        return i = !1
                    }, n))
                }
            }, T = "simplelb", e = X("<div>").addClass("sl-overlay"), o = X("<button>").addClass("sl-close").html(p.closeText), E = X("<div>").addClass("sl-spinner").html("<div></div>"),
            C = X("<div>").addClass("sl-navigation").html('<button class="sl-prev">' + p.navText[0] + '</button><button class="sl-next">' + p.navText[1] + "</button>"),
            s = X("<div>").addClass("sl-counter").html('<span class="sl-current"></span>/<span class="sl-total"></span>'), S = !1, I = 0,
            k = X("<div>").addClass("sl-caption " + p.captionClass + " pos-" + p.captionPosition), q = X("<div>").addClass("sl-image"), D = X("<div>").addClass("sl-wrapper").addClass(p.className),
            M = function (t) {
                t.trigger(X.Event("show.simplelightbox")), p.disableScroll && (m = L("hide")), D.appendTo("body"), q.appendTo(D), p.overlay && e.appendTo(X("body")), S = !0, I = f.index(t), h = X("<img/>").hide().attr("src", t.attr(p.sourceAttr)), -1 == u.indexOf(t.attr(p.sourceAttr)) && u.push(t.attr(p.sourceAttr)), q.html("").attr("style", ""), h.appendTo(q), W(), e.fadeIn("fast"), X(".sl-close").fadeIn("fast"), E.show(), C.fadeIn("fast"), X(".sl-wrapper .sl-counter .sl-current").text(I + 1), s.fadeIn("fast"), R(), p.preloading && P(), setTimeout(function () {
                    t.trigger(X.Event("shown.simplelightbox"))
                }, p.animationSpeed)
            }, R = function (s) {
                if (h.length) {
                    var r = new Image, l = N.innerWidth * p.widthRatio, c = N.innerHeight * p.heightRatio;
                    r.src = h.attr("src"), X(r).on("error", function (t) {
                        f.eq(I).trigger(X.Event("error.simplelightbox")), g = !(S = !1), E.hide(), p.alertError && alert(p.alertErrorMessage), z(1 == s || -1 == s ? s : 1)
                    }), r.onload = function () {
                        void 0 !== s && f.eq(I).trigger(X.Event("changed.simplelightbox")).trigger(X.Event((1 === s ? "nextDone" : "prevDone") + ".simplelightbox")), p.history && (x ? d = setTimeout(y, 800) : y()), -1 == u.indexOf(h.attr("src")) && u.push(h.attr("src"));
                        var t = r.width, e = r.height;
                        if (p.scaleImageToRatio || l < t || c < e) {
                            var n = l / c < t / e ? t / l : e / c;
                            t /= n, e /= n
                        }
                        X(".sl-image").css({top: (N.innerHeight - e) / 2 + "px", left: (N.innerWidth - t - m) / 2 + "px"}), E.hide(), h.css({width: t + "px", height: e + "px"}).fadeIn("fast"), g = !0;
                        var i, a = "self" == p.captionSelector ? f.eq(I) : f.eq(I).find(p.captionSelector);
                        if (i = "data" == p.captionType ? a.data(p.captionsData) : "text" == p.captionType ? a.html() : a.prop(p.captionsData), p.loop || (0 === I && X(".sl-prev").hide(), I >= f.length - 1 && X(".sl-next").hide(), 0 < I && X(".sl-prev").show(), I < f.length - 1 && X(".sl-next").show()), 1 == f.length && X(".sl-prev, .sl-next").hide(), 1 == s || -1 == s) {
                            var o = {opacity: 1};
                            p.animationSlide && (v ? (O(0, 100 * s + "px"), setTimeout(function () {
                                O(p.animationSpeed / 1e3, "0px")
                            }, 50)) : o.left = parseInt(X(".sl-image").css("left")) + 100 * s + "px"), X(".sl-image").animate(o, p.animationSpeed, function () {
                                S = !1, A(i, t)
                            })
                        } else S = !1, A(i, t);
                        p.additionalHtml && 0 === X(".sl-additional-html").length && X("<div>").html(p.additionalHtml).addClass("sl-additional-html").appendTo(X(".sl-image"))
                    }
                }
            }, A = function (t, e) {
                "" !== t && void 0 !== t && p.captions && k.html(t).css({width: e + "px"}).hide().appendTo(X(".sl-image")).delay(p.captionDelay).fadeIn("fast")
            }, O = function (t, e) {
                var n = {};
                n[i + "transform"] = "translateX(" + e + ")", n[i + "transition"] = i + "transform " + t + "s linear", X(".sl-image").css(n)
            }, W = function () {
                X(N).on("resize." + T, R), X(Y).on("click." + T + " touchstart." + T, ".sl-close", function (t) {
                    t.preventDefault(), g && H()
                }), p.history && setTimeout(function () {
                    X(N).on("hashchange." + T, function () {
                        g && c() === b && H()
                    })
                }, 40), C.on("click." + T, "button", w(function (t) {
                    t.preventDefault(), r = 0, z(X(this).hasClass("sl-next") ? 1 : -1)
                }, p.throttleInterval));
                var e = 0, n = 0, i = 0, a = 0, o = !1, s = 0;
                q.on("touchstart." + T + " mousedown." + T, function (t) {
                    return !!o || (v && (s = parseInt(q.css("left"))), o = !0, l = r = 0, e = t.originalEvent.pageX || t.originalEvent.touches[0].pageX, i = t.originalEvent.pageY || t.originalEvent.touches[0].pageY, !1)
                }).on("touchmove." + T + " mousemove." + T + " pointermove MSPointerMove", function (t) {
                    if (!o) return !0;
                    t.preventDefault(), n = t.originalEvent.pageX || t.originalEvent.touches[0].pageX, a = t.originalEvent.pageY || t.originalEvent.touches[0].pageY, r = e - n, l = i - a, p.animationSlide && (v ? O(0, -r + "px") : q.css("left", s - r + "px"))
                }).on("touchend." + T + " mouseup." + T + " touchcancel." + T + " mouseleave." + T + " pointerup pointercancel MSPointerUp MSPointerCancel", function (t) {
                    if (o) {
                        var e = !(o = !1);
                        p.loop || (0 === I && r < 0 && (e = !1), I >= f.length - 1 && 0 < r && (e = !1)), Math.abs(r) > p.swipeTolerance && e ? z(0 < r ? 1 : -1) : p.animationSlide && (v ? O(p.animationSpeed / 1e3, "0px") : q.animate({left: s + "px"}, p.animationSpeed / 2)), p.swipeClose && 50 < Math.abs(l) && Math.abs(r) < p.swipeTolerance && H()
                    }
                })
            }, P = function () {
                var t = I + 1 < 0 ? f.length - 1 : I + 1 >= f.length - 1 ? 0 : I + 1, e = I - 1 < 0 ? f.length - 1 : I - 1 >= f.length - 1 ? 0 : I - 1;
                X("<img />").attr("src", f.eq(t).attr(p.sourceAttr)).on("load", function () {
                    -1 == u.indexOf(X(this).attr("src")) && u.push(X(this).attr("src")), f.eq(I).trigger(X.Event("nextImageLoaded.simplelightbox"))
                }), X("<img />").attr("src", f.eq(e).attr(p.sourceAttr)).on("load", function () {
                    -1 == u.indexOf(X(this).attr("src")) && u.push(X(this).attr("src")), f.eq(I).trigger(X.Event("prevImageLoaded.simplelightbox"))
                })
            }, z = function (e) {
                f.eq(I).trigger(X.Event("change.simplelightbox")).trigger(X.Event((1 === e ? "next" : "prev") + ".simplelightbox"));
                var t = I + e;
                if (!(S || (t < 0 || t >= f.length) && !1 === p.loop)) {
                    I = t < 0 ? f.length - 1 : t > f.length - 1 ? 0 : t, X(".sl-wrapper .sl-counter .sl-current").text(I + 1);
                    var n = {opacity: 0};
                    p.animationSlide && (v ? O(p.animationSpeed / 1e3, -100 * e - r + "px") : n.left = parseInt(X(".sl-image").css("left")) + -100 * e + "px"), X(".sl-image").animate(n, p.animationSpeed, function () {
                        setTimeout(function () {
                            var t = f.eq(I);
                            h.attr("src", t.attr(p.sourceAttr)), -1 == u.indexOf(t.attr(p.sourceAttr)) && E.show(), X(".sl-caption").remove(), R(e), p.preloading && P()
                        }, 100)
                    })
                }
            }, H = function () {
                if (!S) {
                    var t = f.eq(I), e = !1;
                    t.trigger(X.Event("close.simplelightbox")), p.history && (n ? history.pushState("", Y.title, a.pathname + a.search) : a.hash = "", clearTimeout(d)), X(".sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter").fadeOut("fast", function () {
                        p.disableScroll && L("show"), X(".sl-wrapper, .sl-overlay").remove(), C.off("click", "button"), X(Y).off("click." + T, ".sl-close"), X(N).off("resize." + T), X(N).off("hashchange." + T), e || t.trigger(X.Event("closed.simplelightbox")), e = !0
                    }), h = X(), S = g = !1
                }
            }, L = function (t) {
                var e = 0;
                if ("hide" == t) {
                    var n = N.innerWidth;
                    if (!n) {
                        var i = Y.documentElement.getBoundingClientRect();
                        n = i.right - Math.abs(i.left)
                    }
                    if (Y.body.clientWidth < n) {
                        var a = Y.createElement("div"), o = parseInt(X("body").css("padding-right"), 10);
                        a.className = "sl-scrollbar-measure", X("body").append(a), e = a.offsetWidth - a.clientWidth, X(Y.body)[0].removeChild(a), X("body").data("padding", o), 0 < e && X("body").addClass("hidden-scroll").css({"padding-right": o + e})
                    }
                } else X("body").removeClass("hidden-scroll").css({"padding-right": X("body").data("padding")});
                return e
            };
        return p.close && o.appendTo(D), p.showCounter && 1 < f.length && (s.appendTo(D), s.find(".sl-total").text(f.length)), p.nav && C.appendTo(D), p.spinner && E.appendTo(D), f.on("click." + T, function (t) {
            if (function (t) {
                if (!p.fileExt) return !0;
                var e = X(t).attr(p.sourceAttr).match(/\.([0-9a-z]+)(?=[?#])|(\.)(?:[\w]+)$/gim);
                return e && "a" == X(t).prop("tagName").toLowerCase() && new RegExp(".(" + p.fileExt + ")$", "i").test(e)
            }(this)) {
                if (t.preventDefault(), S) return !1;
                M(X(this))
            }
        }), X(Y).on("click." + T + " touchstart." + T, function (t) {
            g && p.docClose && 0 === X(t.target).closest(".sl-image").length && 0 === X(t.target).closest(".sl-navigation").length && H()
        }), p.disableRightClick && X(Y).on("contextmenu", ".sl-image img", function (t) {
            return !1
        }), p.enableKeyboard && X(Y).on("keyup." + T, w(function (t) {
            r = 0;
            var e = t.keyCode;
            S && 27 == e && (h.attr("src", ""), S = !1, H()), g && (t.preventDefault(), 27 == e && H(), 37 != e && 39 != t.keyCode || z(39 == t.keyCode ? 1 : -1))
        }, p.throttleInterval)), this.open = function (t) {
            t = t || X(this[0]), M(t)
        }, this.next = function () {
            z(1)
        }, this.prev = function () {
            z(-1)
        }, this.close = function () {
            H()
        }, this.destroy = function () {
            X(Y).off("click." + T).off("keyup." + T), H(), X(".sl-overlay, .sl-wrapper").remove(), this.off("click")
        }, this.refresh = function () {
            this.destroy(), X(this).simpleLightbox(p)
        }, this
    }
}(jQuery, window, document);

// responsive voice
if ("undefined" != typeof responsiveVoice) console.log("ResponsiveVoice already loaded"), console.log(responsiveVoice); else var ResponsiveVoice = function () {
    var a = this;
    a.version = "1.5.12", console.log("ResponsiveVoice r" + a.version), a.responsivevoices = [{
        name: "UK English Female",
        flag: "gb",
        gender: "f",
        lang: "en-GB",
        voiceIDs: [3, 7, 171, 278, 201, 5, 1, 257, 286, 342, 258, 287, 343, 8]
    }, {name: "UK English Male", flag: "gb", gender: "m", lang: "en-GB", voiceIDs: [0, 277, 202, 75, 4, 2, 256, 285, 341, 159, 6, 7]}, {
        name: "US English Female",
        flag: "us",
        gender: "f",
        lang: "en-US",
        voiceIDs: [39, 40, 41, 42, 383, 205, 204, 43, 173, 235, 283, 339, 408, 44]
    }, {name: "US English Male", flag: "us", gender: "m", lang: "en-US", voiceIDs: [234, 282, 338, 236, 284, 340, 237, 382, 2, 4, 0, 6, 7, 75, 195, 169]}, {
        name: "Arabic Male",
        flag: "ar",
        gender: "m",
        lang: "ar-SA",
        voiceIDs: [96, 95, 97, 196, 388]
    }, {name: "Arabic Female", flag: "ar", gender: "f", lang: "ar-SA", voiceIDs: [98]}, {name: "Armenian Male", flag: "hy", gender: "f", lang: "hy-AM", voiceIDs: [99]}, {
        name: "Australian Female",
        flag: "au",
        gender: "f",
        lang: "en-AU",
        voiceIDs: [276, 201, 87, 5, 88]
    }, {name: "Australian Male", flag: "au", gender: "m", lang: "en-AU", voiceIDs: [86, 381, 386]}, {
        name: "Brazilian Portuguese Female",
        flag: "br",
        gender: "f",
        lang: "pt-BR",
        voiceIDs: [245, 124, 123, 125, 186, 223, 126]
    }, {name: "Brazilian Portuguese Male", flag: "br", gender: "m", lang: "pt-BR", voiceIDs: [315, 332, 371, 399]}, {
        name: "Chinese Female",
        flag: "cn",
        gender: "f",
        lang: "zh-CN",
        voiceIDs: [249, 58, 59, 380, 281, 231, 155, 60, 191, 268, 297, 353, 269, 298, 354, 409, 61]
    }, {name: "Chinese Male", flag: "cn", gender: "m", lang: "zh-CN", voiceIDs: [317, 334, 373, 389]}, {
        name: "Chinese (Hong Kong) Female",
        flag: "hk",
        gender: "f",
        lang: "zh-HK",
        voiceIDs: [192, 193, 232, 250, 251, 270, 299, 355, 409, 252]
    }, {name: "Chinese (Hong Kong) Male", flag: "hk", gender: "m", lang: "zh-HK", voiceIDs: [318, 335, 374, 390]}, {
        name: "Chinese Taiwan Female",
        flag: "tw",
        gender: "f",
        lang: "zh-TW",
        voiceIDs: [194, 233, 253, 254, 305, 322, 361, 384, 319, 336, 375, 409, 255]
    }, {name: "Chinese Taiwan Male", flag: "tw", gender: "m", lang: "zh-TW", voiceIDs: [320, 337, 376, 391]}, {
        name: "Czech Female",
        flag: "cz",
        gender: "f",
        lang: "cs-CZ",
        voiceIDs: [101, 100, 102, 197, 103]
    }, {name: "Czech Male", flag: "cz", gender: "m", lang: "cs-CZ", voiceIDs: [161]}, {
        name: "Danish Female",
        flag: "dk",
        gender: "f",
        lang: "da-DK",
        voiceIDs: [105, 104, 106, 198, 107]
    }, {name: "Danish Male", flag: "da", gender: "m", lang: "da-DK", voiceIDs: [162]}, {
        name: "Deutsch Female",
        flag: "de",
        gender: "f",
        lang: "de-DE",
        voiceIDs: [27, 28, 29, 30, 78, 170, 275, 199, 31, 261, 290, 346, 262, 291, 347, 32]
    }, {name: "Deutsch Male", flag: "de", gender: "m", lang: "de-DE", voiceIDs: [307, 324, 363, 377, 393]}, {
        name: "Dutch Female",
        flag: "nl",
        gender: "f",
        lang: "nl-NL",
        voiceIDs: [243, 219, 84, 157, 158, 184, 45]
    }, {name: "Dutch Male", flag: "nl", gender: "m", lang: "nl-NL", voiceIDs: [157, 220, 407]}, {
        name: "Finnish Female",
        flag: "fi",
        gender: "f",
        lang: "fi-FI",
        voiceIDs: [90, 89, 91, 209, 92]
    }, {name: "Finnish Male", flag: "fi", gender: "m", lang: "fi-FI", voiceIDs: [160]}, {
        name: "French Female",
        flag: "fr",
        gender: "f",
        lang: "fr-FR",
        voiceIDs: [240, 21, 22, 23, 77, 178, 279, 210, 266, 295, 351, 304, 321, 360, 26]
    }, {name: "French Male", flag: "fr", gender: "m", lang: "fr-FR", voiceIDs: [311, 328, 367, 378, 392]}, {
        name: "Greek Female",
        flag: "gr",
        gender: "f",
        lang: "el-GR",
        voiceIDs: [62, 63, 80, 200, 64]
    }, {name: "Greek Male", flag: "gr", gender: "m", lang: "el-GR", voiceIDs: [163]}, {
        name: "Hindi Female",
        flag: "hi",
        gender: "f",
        lang: "hi-IN",
        voiceIDs: [247, 66, 154, 179, 213, 259, 288, 344, 67]
    }, {name: "Hindi Male", flag: "hi", gender: "m", lang: "hi-IN", voiceIDs: [394]}, {
        name: "Hungarian Female",
        flag: "hu",
        gender: "f",
        lang: "hu-HU",
        voiceIDs: [9, 10, 81, 214, 11]
    }, {name: "Hungarian Male", flag: "hu", gender: "m", lang: "hu-HU", voiceIDs: [164]}, {
        name: "Indonesian Female",
        flag: "id",
        gender: "f",
        lang: "id-ID",
        voiceIDs: [241, 111, 112, 180, 215, 113]
    }, {name: "Indonesian Male", flag: "id", gender: "m", lang: "id-ID", voiceIDs: [395]}, {
        name: "Italian Female",
        flag: "it",
        gender: "f",
        lang: "it-IT",
        voiceIDs: [242, 33, 34, 35, 36, 37, 79, 181, 216, 271, 300, 356, 38]
    }, {name: "Italian Male", flag: "it", gender: "m", lang: "it-IT", voiceIDs: [312, 329, 368, 406]}, {
        name: "Japanese Female",
        flag: "jp",
        gender: "f",
        lang: "ja-JP",
        voiceIDs: [248, 50, 51, 280, 217, 52, 153, 182, 273, 302, 358, 274, 303, 359, 53]
    }, {name: "Japanese Male", flag: "jp", gender: "m", lang: "ja-JP", voiceIDs: [313, 330, 369, 379, 396]}, {
        name: "Korean Female",
        flag: "kr",
        gender: "f",
        lang: "ko-KR",
        voiceIDs: [54, 55, 56, 156, 183, 218, 306, 323, 362, 384, 57]
    }, {name: "Korean Male", flag: "kr", gender: "m", lang: "ko-KR", voiceIDs: [397]}, {
        name: "Latin Female",
        flag: "va",
        gender: "f",
        lang: "la",
        voiceIDs: [114],
        deprecated: !0
    }, {name: "Latin Male", flag: "va", gender: "m", lang: "la", voiceIDs: [165]}, {
        name: "Norwegian Female",
        flag: "no",
        gender: "f",
        lang: "nb-NO",
        voiceIDs: [72, 73, 221, 74]
    }, {name: "Norwegian Male", flag: "no", gender: "m", lang: "nb-NO", voiceIDs: [166]}, {
        name: "Polish Female",
        flag: "pl",
        gender: "f",
        lang: "pl-PL",
        voiceIDs: [244, 120, 119, 121, 185, 222, 267, 296, 352, 122]
    }, {name: "Polish Male", flag: "pl", gender: "m", lang: "pl-PL", voiceIDs: [314, 331, 370, 398]}, {
        name: "Portuguese Female",
        flag: "br",
        gender: "f",
        lang: "pt-BR",
        voiceIDs: [128, 127, 129, 187, 224, 272, 301, 357, 130]
    }, {name: "Portuguese Male", flag: "br", gender: "m", lang: "pt-BR", voiceIDs: [400]}, {
        name: "Romanian Female",
        flag: "ro",
        gender: "f",
        lang: "ro-RO",
        voiceIDs: [151, 150, 152, 225, 46]
    }, {name: "Russian Female", flag: "ru", gender: "f", lang: "ru-RU", voiceIDs: [246, 47, 48, 83, 188, 226, 260, 289, 345, 49]}, {
        name: "Russian Male",
        flag: "ru",
        gender: "m",
        lang: "ru-RU",
        voiceIDs: [316, 333, 372, 387]
    }, {name: "Slovak Female", flag: "sk", gender: "f", lang: "sk-SK", voiceIDs: [133, 132, 134, 227, 135]}, {
        name: "Slovak Male",
        flag: "sk",
        gender: "m",
        lang: "sk-SK",
        voiceIDs: [167],
        deprecated: !0
    }, {name: "Spanish Female", flag: "es", gender: "f", lang: "es-ES", voiceIDs: [19, 238, 16, 17, 18, 20, 76, 174, 207, 263, 292, 348, 264, 293, 349, 15]}, {
        name: "Spanish Male",
        flag: "es",
        gender: "m",
        lang: "es-ES",
        voiceIDs: [309, 326, 365, 401]
    }, {name: "Spanish Latin American Female", flag: "es", gender: "f", lang: "es-MX", voiceIDs: [239, 137, 136, 138, 175, 208, 265, 294, 350, 139]}, {
        name: "Spanish Latin American Male",
        flag: "es",
        gender: "m",
        lang: "es-MX",
        voiceIDs: [136, 310, 327, 366, 402]
    }, {name: "Swedish Female", flag: "sv", gender: "f", lang: "sv-SE", voiceIDs: [85, 149, 228, 65]}, {
        name: "Swedish Male",
        flag: "sv",
        gender: "m",
        lang: "sv-SE",
        voiceIDs: [148, 168]
    }, {name: "Tamil Male", flag: "hi", gender: "m", lang: "hi-IN", voiceIDs: [141]}, {
        name: "Thai Female",
        flag: "th",
        gender: "f",
        lang: "th-TH",
        voiceIDs: [143, 142, 144, 189, 229, 145]
    }, {name: "Thai Male", flag: "th", gender: "m", lang: "th-TH", voiceIDs: [403]}, {
        name: "Turkish Female",
        flag: "tr",
        gender: "f",
        lang: "tr-TR",
        voiceIDs: [69, 70, 82, 190, 230, 71]
    }, {name: "Turkish Male", flag: "tr", gender: "m", lang: "tr-TR", voiceIDs: [404]}, {name: "Vietnamese Female", flag: "vi", gender: "f", lang: "vi-VN", voiceIDs: [405]}, {
        name: "Vietnamese Male",
        flag: "vi",
        gender: "m",
        lang: "vi-VN",
        voiceIDs: [146]
    }, {name: "Afrikaans Male", flag: "af", gender: "m", lang: "af-ZA", voiceIDs: [93]}, {name: "Albanian Male", flag: "sq", gender: "m", lang: "sq-AL", voiceIDs: [94]}, {
        name: "Bosnian Male",
        flag: "bs",
        gender: "m",
        lang: "bs",
        voiceIDs: [14]
    }, {name: "Catalan Male", flag: "catalonia", gender: "m", lang: "ca-ES", voiceIDs: [68]}, {name: "Croatian Male", flag: "hr", gender: "m", lang: "hr-HR", voiceIDs: [13]}, {
        name: "Esperanto Male",
        flag: "eo",
        gender: "m",
        lang: "eo",
        voiceIDs: [108]
    }, {name: "Icelandic Male", flag: "is", gender: "m", lang: "is-IS", voiceIDs: [110]}, {name: "Latvian Male", flag: "lv", gender: "m", lang: "lv-LV", voiceIDs: [115]}, {
        name: "Macedonian Male",
        flag: "mk",
        gender: "m",
        lang: "mk-MK",
        voiceIDs: [116]
    }, {name: "Moldavian Female", flag: "md", gender: "f", lang: "md", voiceIDs: [117]}, {
        name: "Moldavian Male",
        flag: "md",
        gender: "m",
        lang: "md",
        voiceIDs: [117],
        deprecated: !0
    }, {name: "Montenegrin Male", flag: "me", gender: "m", lang: "me", voiceIDs: [118]}, {name: "Serbian Male", flag: "sr", gender: "m", lang: "sr-RS", voiceIDs: [12]}, {
        name: "Serbo-Croatian Male",
        flag: "hr",
        gender: "m",
        lang: "hr-HR",
        voiceIDs: [131]
    }, {name: "Swahili Male", flag: "sw", gender: "m", lang: "sw-KE", voiceIDs: [140]}, {name: "Welsh Male", flag: "cy", gender: "m", lang: "cy", voiceIDs: [147]}, {
        name: "Fallback UK Female",
        flag: "gb",
        gender: "f",
        lang: "en-GB",
        voiceIDs: [8]
    }], a.voicecollection = [{name: "Google UK English Male"}, {name: "Agnes"}, {name: "Daniel Compact"}, {name: "Google UK English Female"}, {name: "en-GB", rate: .25, pitch: 1}, {
        name: "en-AU",
        rate: .25,
        pitch: 1
    }, {name: "ingl\xE9s Reino Unido"}, {name: "English United Kingdom"}, {
        name: "Fallback en-GB Female",
        lang: "en-GB",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Eszter Compact"}, {name: "hu-HU", rate: .4}, {name: "Fallback Hungarian Female", lang: "hu", fallbackvoice: !0, service: "g1"}, {
        name: "Fallback Serbian Male",
        lang: "sr",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Croatian Male", lang: "hr", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Bosnian Male",
        lang: "bs",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Spanish Female", lang: "es", fallbackvoice: !0, service: "g1", gender: "female"}, {name: "Spanish Spain"}, {name: "espa\xF1ol Espa\xF1a"}, {
        name: "Diego Compact",
        rate: .3
    }, {name: "Google Espa\xF1ol"}, {name: "es-ES", rate: .2}, {name: "Google Fran\xE7ais"}, {name: "French France"}, {name: "franc\xE9s Francia"}, {
        name: "Virginie Compact",
        rate: .5
    }, {name: "fr-FR", rate: .25}, {
        name: "Fallback French Female",
        lang: "fr",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Google Deutsch"}, {name: "German Germany"}, {name: "alem\xE1n Alemania"}, {name: "Yannick Compact", rate: .5}, {name: "de-DE", rate: .25}, {
        name: "Fallback Deutsch Female",
        lang: "de",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Google Italiano"}, {name: "Italian Italy"}, {name: "italiano Italia"}, {name: "Paolo Compact", rate: .5}, {name: "it-IT", rate: .25}, {
        name: "Fallback Italian Female",
        lang: "it",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Google US English", timerSpeed: 1}, {name: "English United States"}, {name: "ingl\xE9s Estados Unidos"}, {name: "Vicki"}, {
        name: "en-US",
        rate: .2,
        pitch: 1,
        timerSpeed: 1.3
    }, {name: "Fallback US English", lang: "en-US", fallbackvoice: !0, timerSpeed: 0, service: "g1", gender: "female"}, {
        name: "Fallback Dutch Female",
        lang: "nl",
        fallbackvoice: !0,
        timerSpeed: 0,
        service: "g1",
        gender: "female"
    }, {name: "Fallback Romanian", lang: "ro", fallbackvoice: !0, service: "g1", gender: "female"}, {name: "Milena Compact"}, {name: "ru-RU", rate: .25}, {
        name: "Fallback Russian",
        lang: "ru",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Google \u65E5\u672C\u4EBA", timerSpeed: 1}, {name: "Kyoko Compact"}, {name: "ja-JP", rate: .25}, {
        name: "Fallback Japanese Female",
        lang: "ja",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Google \uD55C\uAD6D\uC758", timerSpeed: 1}, {name: "Narae Compact"}, {name: "ko-KR", rate: .25}, {
        name: "Fallback Korean Female",
        lang: "ko",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Google \u4E2D\u56FD\u7684", timerSpeed: 1}, {name: "Ting-Ting Compact"}, {name: "zh-CN", rate: .25}, {
        name: "Fallback Chinese",
        lang: "zh-CN",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Alexandros Compact"}, {name: "el-GR", rate: .25}, {name: "Fallback Greek", lang: "el", fallbackvoice: !0, service: "g2", gender: "female"}, {
        name: "Fallback Swedish",
        lang: "sv",
        fallbackvoice: !0,
        service: "g2",
        gender: "female"
    }, {name: "hi-IN", rate: .25}, {name: "Fallback Hindi Female", lang: "hi", fallbackvoice: !0, service: "g1", gender: "female"}, {
        name: "Fallback Catalan",
        lang: "ca",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Aylin Compact"}, {name: "tr-TR", rate: .25}, {name: "Fallback Turkish", lang: "tr", fallbackvoice: !0, service: "g1", gender: "female"}, {name: "Stine Compact"}, {
        name: "no-NO",
        rate: .25
    }, {
        name: "Fallback Norwegian",
        lang: "no",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Daniel"}, {name: "Monica"}, {name: "Amelie"}, {name: "Anna"}, {name: "Alice"}, {name: "Melina"}, {name: "Mariska"}, {name: "Yelda"}, {name: "Milena"}, {name: "Xander"}, {name: "Alva"}, {name: "Lee Compact"}, {name: "Karen"}, {
        name: "Fallback Australian Female",
        lang: "en-AU",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Mikko Compact"}, {name: "Satu"}, {name: "fi-FI", rate: .25}, {name: "Fallback Finnish", lang: "fi", fallbackvoice: !0, service: "g1", gender: "female"}, {
        name: "Fallback Afrikans",
        lang: "af",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Albanian", lang: "sq", fallbackvoice: !0, service: "g1", gender: "male"}, {name: "Maged Compact"}, {name: "Tarik"}, {name: "ar-SA", rate: .25}, {
        name: "Fallback Arabic",
        lang: "ar",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Fallback Armenian", lang: "hy", fallbackvoice: !0, service: "g1", gender: "male"}, {name: "Zuzana Compact"}, {name: "Zuzana"}, {name: "cs-CZ", rate: .25}, {
        name: "Fallback Czech",
        lang: "cs",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Ida Compact"}, {name: "Sara"}, {name: "da-DK", rate: .25}, {name: "Fallback Danish", lang: "da", fallbackvoice: !0, service: "g1", gender: "female"}, {
        name: "Fallback Esperanto",
        lang: "eo",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Haitian Creole", lang: "ht", fallbackvoice: !0}, {
        name: "Fallback Icelandic",
        lang: "is",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Damayanti"}, {name: "id-ID", rate: .25}, {name: "Fallback Indonesian Female", lang: "id", fallbackvoice: !0, service: "g1", gender: "female"}, {
        name: "Fallback Latin Female",
        lang: "la",
        fallbackvoice: !0,
        service: "g2",
        gender: "female"
    }, {name: "Fallback Latvian Male", lang: "lv", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Macedonian Male",
        lang: "mk",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Moldavian Female", lang: "mo", fallbackvoice: !0, service: "g2", gender: "female"}, {
        name: "Fallback Montenegrin Male",
        lang: "sr-ME",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Agata Compact"}, {name: "Zosia"}, {name: "pl-PL", rate: .25}, {
        name: "Fallback Polish Female",
        lang: "pl",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Raquel Compact"}, {name: "Luciana"}, {name: "pt-BR", rate: .25}, {
        name: "Fallback Brazilian Portuguese Female",
        lang: "pt-BR",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Joana Compact"}, {name: "Joana"}, {name: "pt-PT", rate: .25}, {
        name: "Fallback Portuguese",
        lang: "pt-PT",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Fallback Serbo-Croation", lang: "sh", fallbackvoice: !0, service: "g1", gender: "male"}, {name: "Laura Compact"}, {name: "Laura"}, {name: "sk-SK", rate: .25}, {
        name: "Fallback Slovak",
        lang: "sk",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Javier Compact"}, {name: "Paulina"}, {name: "es-MX", rate: .25}, {
        name: "Fallback Spanish (Latin American) Female",
        lang: "es-419",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Fallback Swahili", lang: "sw", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Tamil",
        lang: "ta",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Narisa Compact"}, {name: "Kanya"}, {name: "th-TH", rate: .25}, {
        name: "Fallback Thai Female",
        lang: "th",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Fallback Vietnamese Male", lang: "vi", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Welsh",
        lang: "cy",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Oskar Compact"}, {name: "sv-SE", rate: .25}, {name: "Simona Compact"}, {name: "Ioana"}, {
        name: "ro-RO",
        rate: .25
    }, {name: "Kyoko"}, {name: "Lekha"}, {name: "Ting-Ting"}, {name: "Yuna"}, {name: "Xander Compact"}, {name: "nl-NL", rate: .25}, {
        name: "Fallback UK English Male",
        lang: "en-GB",
        fallbackvoice: !0,
        service: "g1",
        voicename: "rjs",
        gender: "male"
    }, {name: "Finnish Male", lang: "fi", fallbackvoice: !0, service: "g1", voicename: "", gender: "male"}, {
        name: "Czech Male",
        lang: "cs",
        fallbackvoice: !0,
        service: "g1",
        voicename: "",
        gender: "male"
    }, {name: "Danish Male", lang: "da", fallbackvoice: !0, service: "g1", voicename: "", gender: "male"}, {
        name: "Greek Male",
        lang: "el",
        fallbackvoice: !0,
        service: "g1",
        voicename: "",
        gender: "male"
    }, {name: "Hungarian Male", lang: "hu", fallbackvoice: !0, service: "g1", voicename: "", gender: "male"}, {
        name: "Latin Male",
        lang: "la",
        fallbackvoice: !0,
        service: "g2",
        voicename: "",
        gender: "male"
    }, {name: "Norwegian Male", lang: "no", fallbackvoice: !0, service: "g1", voicename: "", gender: "male"}, {
        name: "Slovak Male",
        lang: "sk",
        fallbackvoice: !0,
        service: "g1",
        voicename: "",
        gender: "male"
    }, {name: "Swedish Male", lang: "sv", fallbackvoice: !0, service: "g1", voicename: "", gender: "male"}, {
        name: "Fallback US English Male",
        lang: "en-US",
        fallbackvoice: !0,
        service: "g1",
        voicename: "",
        gender: "male"
    }, {name: "German Germany", lang: "de_DE"}, {name: "English United Kingdom", lang: "en_GB"}, {name: "English India", lang: "en_IN"}, {
        name: "English United States",
        lang: "en_US"
    }, {name: "Spanish Spain", lang: "es_ES"}, {name: "Spanish Mexico", lang: "es_MX"}, {name: "Spanish United States", lang: "es_US"}, {name: "French Belgium", lang: "fr_BE"}, {
        name: "French France",
        lang: "fr_FR"
    }, {name: "Hindi India", lang: "hi_IN"}, {name: "Indonesian Indonesia", lang: "in_ID"}, {name: "Italian Italy", lang: "it_IT"}, {
        name: "Japanese Japan",
        lang: "ja_JP"
    }, {name: "Korean South Korea", lang: "ko_KR"}, {name: "Dutch Netherlands", lang: "nl_NL"}, {name: "Polish Poland", lang: "pl_PL"}, {
        name: "Portuguese Brazil",
        lang: "pt_BR"
    }, {name: "Portuguese Portugal", lang: "pt_PT"}, {name: "Russian Russia", lang: "ru_RU"}, {name: "Thai Thailand", lang: "th_TH"}, {name: "Turkish Turkey", lang: "tr_TR"}, {
        name: "Chinese China",
        lang: "zh_CN_#Hans"
    }, {name: "Chinese Hong Kong", lang: "zh_HK_#Hans"}, {name: "Chinese Hong Kong", lang: "zh_HK_#Hant"}, {name: "Chinese Taiwan", lang: "zh_TW_#Hant"}, {name: "Alex"}, {
        name: "Maged",
        lang: "ar-SA"
    }, {name: "Zuzana", lang: "cs-CZ"}, {name: "Sara", lang: "da-DK"}, {name: "Anna", lang: "de-DE"}, {name: "Melina", lang: "el-GR"}, {name: "Karen", lang: "en-AU"}, {
        name: "Daniel",
        lang: "en-GB"
    }, {name: "Moira", lang: "en-IE"}, {name: "Samantha (Enhanced)", lang: "en-US"}, {name: "Samantha", lang: "en-US"}, {name: "Tessa", lang: "en-ZA"}, {
        name: "Monica",
        lang: "es-ES"
    }, {name: "Paulina", lang: "es-MX"}, {name: "Satu", lang: "fi-FI"}, {name: "Amelie", lang: "fr-CA"}, {name: "Thomas", lang: "fr-FR"}, {name: "Carmit", lang: "he-IL"}, {
        name: "Lekha",
        lang: "hi-IN"
    }, {name: "Mariska", lang: "hu-HU"}, {name: "Damayanti", lang: "id-ID"}, {name: "Alice", lang: "it-IT"}, {name: "Kyoko", lang: "ja-JP"}, {name: "Yuna", lang: "ko-KR"}, {
        name: "Ellen",
        lang: "nl-BE"
    }, {name: "Xander", lang: "nl-NL"}, {name: "Nora", lang: "no-NO"}, {name: "Zosia", lang: "pl-PL"}, {name: "Luciana", lang: "pt-BR"}, {name: "Joana", lang: "pt-PT"}, {
        name: "Ioana",
        lang: "ro-RO"
    }, {name: "Milena", lang: "ru-RU"}, {name: "Laura", lang: "sk-SK"}, {name: "Alva", lang: "sv-SE"}, {name: "Kanya", lang: "th-TH"}, {name: "Yelda", lang: "tr-TR"}, {
        name: "Ting-Ting",
        lang: "zh-CN"
    }, {name: "Sin-Ji", lang: "zh-HK"}, {name: "Mei-Jia", lang: "zh-TW"}, {
        name: "Microsoft David Mobile - English (United States)",
        lang: "en-US"
    }, {name: "Microsoft Zira Mobile - English (United States)", lang: "en-US"}, {name: "Microsoft Mark Mobile - English (United States)", lang: "en-US"}, {
        name: "native",
        lang: ""
    }, {name: "Google espa\xF1ol"}, {name: "Google espa\xF1ol de Estados Unidos"}, {name: "Google fran\xE7ais"}, {name: "Google Bahasa Indonesia"}, {name: "Google italiano"}, {name: "Google Nederlands"}, {name: "Google polski"}, {name: "Google portugu\xEAs do Brasil"}, {name: "Google \u0440\u0443\u0441\u0441\u043A\u0438\u0439"}, {name: "Google \u0939\u093F\u0928\u094D\u0926\u0940"}, {name: "Google \u65E5\u672C\u8A9E"}, {name: "Google \u666E\u901A\u8BDD\uFF08\u4E2D\u56FD\u5927\u9646\uFF09"}, {name: "Google \u7CA4\u8A9E\uFF08\u9999\u6E2F\uFF09"}, {
        name: "zh-HK",
        rate: .25
    }, {name: "Fallback Chinese (Hong Kong) Female", lang: "zh-HK", fallbackvoice: !0, service: "g1", gender: "female"}, {name: "Google \u7CA4\u8A9E\uFF08\u9999\u6E2F\uFF09"}, {
        name: "zh-TW",
        rate: .25
    }, {name: "Fallback Chinese (Taiwan) Female", lang: "zh-TW", fallbackvoice: !0, service: "g1", gender: "female"}, {
        name: "Microsoft George Mobile - English (United Kingdom)",
        lang: "en-GB"
    }, {name: "Microsoft Susan Mobile - English (United Kingdom)", lang: "en-GB"}, {
        name: "Microsoft Hazel Mobile - English (United Kingdom)",
        lang: "en-GB"
    }, {name: "Microsoft Heera Mobile - English (India)", lang: "en-In"}, {name: "Microsoft Irina Mobile - Russian (Russia)", lang: "ru-RU"}, {
        name: "Microsoft Hedda Mobile - German (Germany)",
        lang: "de-DE"
    }, {name: "Microsoft Katja Mobile - German (Germany)", lang: "de-DE"}, {name: "Microsoft Helena Mobile - Spanish (Spain)", lang: "es-ES"}, {
        name: "Microsoft Laura Mobile - Spanish (Spain)",
        lang: "es-ES"
    }, {name: "Microsoft Sabina Mobile - Spanish (Mexico)", lang: "es-MX"}, {name: "Microsoft Julie Mobile - French (France)", lang: "fr-FR"}, {
        name: "Microsoft Paulina Mobile - Polish (Poland)",
        lang: "pl-PL"
    }, {name: "Microsoft Huihui Mobile - Chinese (Simplified, PRC)", lang: "zh-CN"}, {
        name: "Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)",
        lang: "zh-CN"
    }, {name: "Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-CN"}, {
        name: "Microsoft Elsa Mobile - Italian (Italy)",
        lang: "it-IT"
    }, {name: "Microsoft Maria Mobile - Portuguese (Brazil)", lang: "pt-BR"}, {name: "Microsoft Ayumi Mobile - Japanese (Japan)", lang: "ja-JP"}, {
        name: "Microsoft Haruka Mobile - Japanese (Japan)",
        lang: "ja-JP"
    }, {name: "Helena", lang: "de-DE"}, {name: "Catherine", lang: "en-AU"}, {name: "Arthur", lang: "en-GB"}, {name: "Martha", lang: "en-GB"}, {name: "Marie", lang: "fr-FR"}, {
        name: "O-ren",
        lang: "ja-JP"
    }, {name: "Yu-shu", lang: "zh-CN"}, {name: "Microsoft David - English (United States)", lang: "en-US"}, {
        name: "Microsoft Zira - English (United States)",
        lang: "en-US"
    }, {name: "Microsoft Mark - English (United States)", lang: "en-US"}, {name: "Microsoft George - English (United Kingdom)", lang: "en-GB"}, {
        name: "Microsoft Susan - English (United Kingdom)",
        lang: "en-GB"
    }, {name: "Microsoft Hazel - English (United Kingdom)", lang: "en-GB"}, {name: "Microsoft Heera - English (India)", lang: "en-In"}, {
        name: "Microsoft Irina - Russian (Russia)",
        lang: "ru-RU"
    }, {name: "Microsoft Hedda - German (Germany)", lang: "de-DE"}, {name: "Microsoft Katja - German (Germany)", lang: "de-DE"}, {
        name: "Microsoft Helena - Spanish (Spain)",
        lang: "es-ES"
    }, {name: "Microsoft Laura - Spanish (Spain)", lang: "es-ES"}, {name: "Microsoft Sabina - Spanish (Mexico)", lang: "es-MX"}, {
        name: "Microsoft Julie - French (France)",
        lang: "fr-FR"
    }, {name: "Microsoft Paulina - Polish (Poland)", lang: "pl-PL"}, {name: "Microsoft Huihui - Chinese (Simplified, PRC)", lang: "zh-CN"}, {
        name: "Microsoft Yaoyao - Chinese (Simplified, PRC)",
        lang: "zh-CN"
    }, {name: "Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-CN"}, {name: "Microsoft Elsa - Italian (Italy)", lang: "it-IT"}, {
        name: "Microsoft Maria - Portuguese (Brazil)",
        lang: "pt-BR"
    }, {name: "Microsoft Ayumi - Japanese (Japan)", lang: "ja-JP"}, {name: "Microsoft Haruka - Japanese (Japan)", lang: "ja-JP"}, {
        name: "Microsoft Hortense - French (France)",
        lang: "fr-FR"
    }, {name: "Microsoft Hanhan - Chinese (Traditional, Taiwan)", lang: "zh-TW"}, {name: "Microsoft Heami - Korean (Korean)", lang: "ko-KR"}, {
        name: "Microsoft Stefan - German (Germany)",
        lang: "de-DE"
    }, {name: "Microsoft Ravi - English (India)", lang: "en-IN"}, {name: "Microsoft Pablo - Spanish (Spain)", lang: "es-ES"}, {
        name: "Microsoft Raul - Spanish (Mexico)",
        lang: "es-MX"
    }, {name: "Microsoft Paul - French (France)", lang: "fr-FR"}, {name: "Microsoft Cosimo - Italian (Italy)", lang: "it-IT"}, {
        name: "Microsoft Ichiro - Japanese (Japan)",
        lang: "ja-JP"
    }, {name: "Microsoft Adam - Polish (Poland)", lang: "pl-PL"}, {name: "Microsoft Daniel - Portuguese (Brazil)", lang: "pt-BR"}, {
        name: "Microsoft Pavel - Russian (Russia)",
        lang: "ru-RU"
    }, {name: "Microsoft Kangkang - Chinese (Simplified, PRC)", lang: "zh-CN"}, {
        name: "Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)",
        lang: "zh-HK"
    }, {name: "Microsoft Yating - Chinese (Traditional, Taiwan)", lang: "zh-TW"}, {
        name: "Microsoft Zhiwei - Chinese (Traditional, Taiwan)",
        lang: "zh-TW"
    }, {name: "Microsoft Hortense Mobile - French (France)", lang: "fr-FR"}, {
        name: "Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)",
        lang: "zh-TW"
    }, {name: "Microsoft Heami Mobile - Korean (Korean)", lang: "ko-KR"}, {name: "Microsoft Stefan Mobile - German (Germany)", lang: "de-DE"}, {
        name: "Microsoft Ravi Mobile - English (India)",
        lang: "en-IN"
    }, {name: "Microsoft Pablo Mobile - Spanish (Spain)", lang: "es-ES"}, {name: "Microsoft Raul Mobile - Spanish (Mexico)", lang: "es-MX"}, {
        name: "Microsoft Paul Mobile - French (France)",
        lang: "fr-FR"
    }, {name: "Microsoft Cosimo Mobile - Italian (Italy)", lang: "it-IT"}, {name: "Microsoft Ichiro Mobile - Japanese (Japan)", lang: "ja-JP"}, {
        name: "Microsoft Adam Mobile - Polish (Poland)",
        lang: "pl-PL"
    }, {name: "Microsoft Daniel Mobile - Portuguese (Brazil)", lang: "pt-BR"}, {
        name: "Microsoft Pavel Mobile - Russian (Russia)",
        lang: "ru-RU"
    }, {name: "Microsoft Kangkang Mobile - Chinese (Simplified, PRC)", lang: "zh-CN"}, {
        name: "Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)",
        lang: "zh-HK"
    }, {name: "Microsoft Yating Mobile - Chinese (Traditional, Taiwan)", lang: "zh-TW"}, {
        name: "Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)",
        lang: "zh-TW"
    }, {name: "Microsoft David Desktop - English (United States)", lang: "en-US"}, {
        name: "Microsoft Zira Desktop - English (United States)",
        lang: "en-US"
    }, {name: "Microsoft Mark Desktop - English (United States)", lang: "en-US"}, {
        name: "Microsoft George Desktop - English (United Kingdom)",
        lang: "en-GB"
    }, {name: "Microsoft Susan Desktop - English (United Kingdom)", lang: "en-GB"}, {
        name: "Microsoft Hazel Desktop - English (United Kingdom)",
        lang: "en-GB"
    }, {name: "Microsoft Heera Desktop - English (India)", lang: "en-In"}, {name: "Microsoft Irina Desktop - Russian (Russia)", lang: "ru-RU"}, {
        name: "Microsoft Hedda Desktop - German (Germany)",
        lang: "de-DE"
    }, {name: "Microsoft Katja Desktop - German (Germany)", lang: "de-DE"}, {name: "Microsoft Helena Desktop - Spanish (Spain)", lang: "es-ES"}, {
        name: "Microsoft Laura Desktop - Spanish (Spain)",
        lang: "es-ES"
    }, {name: "Microsoft Sabina Desktop - Spanish (Mexico)", lang: "es-MX"}, {name: "Microsoft Julie Desktop - French (France)", lang: "fr-FR"}, {
        name: "Microsoft Paulina Desktop - Polish (Poland)",
        lang: "pl-PL"
    }, {name: "Microsoft Huihui Desktop - Chinese (Simplified, PRC)", lang: "zh-CN"}, {
        name: "Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)",
        lang: "zh-CN"
    }, {name: "Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-CN"}, {
        name: "Microsoft Elsa Desktop - Italian (Italy)",
        lang: "it-IT"
    }, {name: "Microsoft Maria Desktop - Portuguese (Brazil)", lang: "pt-BR"}, {
        name: "Microsoft Ayumi Desktop - Japanese (Japan)",
        lang: "ja-JP"
    }, {name: "Microsoft Haruka Desktop - Japanese (Japan)", lang: "ja-JP"}, {
        name: "Microsoft Hortense Desktop - French (France)",
        lang: "fr-FR"
    }, {name: "Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)", lang: "zh-TW"}, {
        name: "Microsoft Heami Desktop - Korean (Korean)",
        lang: "ko-KR"
    }, {name: "Microsoft Stefan Desktop - German (Germany)", lang: "de-DE"}, {name: "Microsoft Ravi Desktop - English (India)", lang: "en-IN"}, {
        name: "Microsoft Pablo Desktop - Spanish (Spain)",
        lang: "es-ES"
    }, {name: "Microsoft Raul Desktop - Spanish (Mexico)", lang: "es-MX"}, {name: "Microsoft Paul Desktop - French (France)", lang: "fr-FR"}, {
        name: "Microsoft Cosimo Desktop - Italian (Italy)",
        lang: "it-IT"
    }, {name: "Microsoft Ichiro Desktop - Japanese (Japan)", lang: "ja-JP"}, {name: "Microsoft Adam Desktop - Polish (Poland)", lang: "pl-PL"}, {
        name: "Microsoft Daniel Desktop - Portuguese (Brazil)",
        lang: "pt-BR"
    }, {name: "Microsoft Pavel Desktop - Russian (Russia)", lang: "ru-RU"}, {
        name: "Microsoft Kangkang Desktop - Chinese (Simplified, PRC)",
        lang: "zh-CN"
    }, {name: "Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)", lang: "zh-HK"}, {
        name: "Microsoft Yating Desktop - Chinese (Traditional, Taiwan)",
        lang: "zh-TW"
    }, {name: "Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)", lang: "zh-TW"}, {name: "Martin", lang: "de-DE"}, {name: "Daniel", lang: "fr-FR"}, {
        name: "Hattori",
        lang: "ja-JP"
    }, {name: "Li-mu", lang: "zh-CN"}, {name: "Gordon", lang: "en-AU"}, {name: "Aaron", lang: "en-US"}, {name: "Nicky", lang: "en-US"}, {
        name: "Microsoft Hanhan Desktop - Chinese (Taiwan)",
        lang: "zh-TW"
    }, {name: "Microsoft Heami Desktop - Korean", lang: "ko-KR"}, {name: "Fallback Australian Male", lang: "en-AU", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Russian Male",
        lang: "ru",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Arabic Male", lang: "ar", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Chinese",
        lang: "zh-CN",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Chinese HK", lang: "zh-HK", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Chinese TW",
        lang: "zh-TW",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback French Male", lang: "fr", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Deutsch Male",
        lang: "de",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Hindi Male", lang: "hi", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Indonesian Male",
        lang: "id",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Japanese Male", lang: "ja", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Korean Male",
        lang: "ko",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Polish Male", lang: "pl", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Brazilian Portuguese Male",
        lang: "pt-BR",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Portuguese Male", lang: "pt-PT", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Spanish Male",
        lang: "es",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Spanish (Latin American) Male", lang: "es-419", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Thai Male",
        lang: "th",
        fallbackvoice: !0,
        service: "g1",
        gender: "male"
    }, {name: "Fallback Turkish Male", lang: "tr", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Vietnamese Female",
        lang: "vi",
        fallbackvoice: !0,
        service: "g1",
        gender: "female"
    }, {name: "Fallback Italian Male", lang: "it", fallbackvoice: !0, service: "g1", gender: "male"}, {
        name: "Fallback Dutch Male",
        lang: "nl",
        fallbackvoice: !0,
        timerSpeed: 0,
        service: "g1",
        gender: "male"
    }, {name: "Microsoft Anna - English (United States)", lang: "en-US", gender: "female"}, {
        name: "Microsoft Lili - Chinese (China)",
        lang: "zh-CN",
        gender: "female"
    }], a.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), a.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase()), a.iOS10 = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase()), a.iOS11 = /(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase()), a.iOS9plus = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase()) || /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase()), a.iOS12_0 = /(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase()), a.iOS12 = /(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase()), a.is_chrome = -1 < navigator.userAgent.indexOf("Chrome"), a.is_safari = -1 < navigator.userAgent.indexOf("Safari"), a.is_chrome && a.is_safari && (a.is_safari = !1), a.is_opera = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"), a.is_android = -1 < navigator.userAgent.toLowerCase().indexOf("android"), a.iOS_initialized = !1, a.iOS9_initialized = !1, a.iOS10_initialized = !1, a.iOS11_initialized = !1, a.cache_ios_voices = [{
        name: "he-IL",
        voiceURI: "he-IL",
        lang: "he-IL"
    }, {name: "th-TH", voiceURI: "th-TH", lang: "th-TH"}, {name: "pt-BR", voiceURI: "pt-BR", lang: "pt-BR"}, {name: "sk-SK", voiceURI: "sk-SK", lang: "sk-SK"}, {
        name: "fr-CA",
        voiceURI: "fr-CA",
        lang: "fr-CA"
    }, {name: "ro-RO", voiceURI: "ro-RO", lang: "ro-RO"}, {name: "no-NO", voiceURI: "no-NO", lang: "no-NO"}, {name: "fi-FI", voiceURI: "fi-FI", lang: "fi-FI"}, {
        name: "pl-PL",
        voiceURI: "pl-PL",
        lang: "pl-PL"
    }, {name: "de-DE", voiceURI: "de-DE", lang: "de-DE"}, {name: "nl-NL", voiceURI: "nl-NL", lang: "nl-NL"}, {name: "id-ID", voiceURI: "id-ID", lang: "id-ID"}, {
        name: "tr-TR",
        voiceURI: "tr-TR",
        lang: "tr-TR"
    }, {name: "it-IT", voiceURI: "it-IT", lang: "it-IT"}, {name: "pt-PT", voiceURI: "pt-PT", lang: "pt-PT"}, {name: "fr-FR", voiceURI: "fr-FR", lang: "fr-FR"}, {
        name: "ru-RU",
        voiceURI: "ru-RU",
        lang: "ru-RU"
    }, {name: "es-MX", voiceURI: "es-MX", lang: "es-MX"}, {name: "zh-HK", voiceURI: "zh-HK", lang: "zh-HK"}, {name: "sv-SE", voiceURI: "sv-SE", lang: "sv-SE"}, {
        name: "hu-HU",
        voiceURI: "hu-HU",
        lang: "hu-HU"
    }, {name: "zh-TW", voiceURI: "zh-TW", lang: "zh-TW"}, {name: "es-ES", voiceURI: "es-ES", lang: "es-ES"}, {name: "zh-CN", voiceURI: "zh-CN", lang: "zh-CN"}, {
        name: "nl-BE",
        voiceURI: "nl-BE",
        lang: "nl-BE"
    }, {name: "en-GB", voiceURI: "en-GB", lang: "en-GB"}, {name: "ar-SA", voiceURI: "ar-SA", lang: "ar-SA"}, {name: "ko-KR", voiceURI: "ko-KR", lang: "ko-KR"}, {
        name: "cs-CZ",
        voiceURI: "cs-CZ",
        lang: "cs-CZ"
    }, {name: "en-ZA", voiceURI: "en-ZA", lang: "en-ZA"}, {name: "en-AU", voiceURI: "en-AU", lang: "en-AU"}, {name: "da-DK", voiceURI: "da-DK", lang: "da-DK"}, {
        name: "en-US",
        voiceURI: "en-US",
        lang: "en-US"
    }, {name: "en-IE", voiceURI: "en-IE", lang: "en-IE"}, {name: "hi-IN", voiceURI: "hi-IN", lang: "hi-IN"}, {name: "el-GR", voiceURI: "el-GR", lang: "el-GR"}, {
        name: "ja-JP",
        voiceURI: "ja-JP",
        lang: "ja-JP"
    }], a.cache_ios9_voices = [{name: "Maged", voiceURI: "com.apple.ttsbundle.Maged-compact", lang: "ar-SA", localService: !0, default: !0}, {
        name: "Zuzana",
        voiceURI: "com.apple.ttsbundle.Zuzana-compact",
        lang: "cs-CZ",
        localService: !0,
        default: !0
    }, {name: "Sara", voiceURI: "com.apple.ttsbundle.Sara-compact", lang: "da-DK", localService: !0, default: !0}, {
        name: "Anna",
        voiceURI: "com.apple.ttsbundle.Anna-compact",
        lang: "de-DE",
        localService: !0,
        default: !0
    }, {name: "Melina", voiceURI: "com.apple.ttsbundle.Melina-compact", lang: "el-GR", localService: !0, default: !0}, {
        name: "Karen",
        voiceURI: "com.apple.ttsbundle.Karen-compact",
        lang: "en-AU",
        localService: !0,
        default: !0
    }, {name: "Daniel", voiceURI: "com.apple.ttsbundle.Daniel-compact", lang: "en-GB", localService: !0, default: !0}, {
        name: "Moira",
        voiceURI: "com.apple.ttsbundle.Moira-compact",
        lang: "en-IE",
        localService: !0,
        default: !0
    }, {name: "Samantha (Enhanced)", voiceURI: "com.apple.ttsbundle.Samantha-premium", lang: "en-US", localService: !0, default: !0}, {
        name: "Samantha",
        voiceURI: "com.apple.ttsbundle.Samantha-compact",
        lang: "en-US",
        localService: !0,
        default: !0
    }, {name: "Tessa", voiceURI: "com.apple.ttsbundle.Tessa-compact", lang: "en-ZA", localService: !0, default: !0}, {
        name: "Monica",
        voiceURI: "com.apple.ttsbundle.Monica-compact",
        lang: "es-ES",
        localService: !0,
        default: !0
    }, {name: "Paulina", voiceURI: "com.apple.ttsbundle.Paulina-compact", lang: "es-MX", localService: !0, default: !0}, {
        name: "Satu",
        voiceURI: "com.apple.ttsbundle.Satu-compact",
        lang: "fi-FI",
        localService: !0,
        default: !0
    }, {name: "Amelie", voiceURI: "com.apple.ttsbundle.Amelie-compact", lang: "fr-CA", localService: !0, default: !0}, {
        name: "Thomas",
        voiceURI: "com.apple.ttsbundle.Thomas-compact",
        lang: "fr-FR",
        localService: !0,
        default: !0
    }, {name: "Carmit", voiceURI: "com.apple.ttsbundle.Carmit-compact", lang: "he-IL", localService: !0, default: !0}, {
        name: "Lekha",
        voiceURI: "com.apple.ttsbundle.Lekha-compact",
        lang: "hi-IN",
        localService: !0,
        default: !0
    }, {name: "Mariska", voiceURI: "com.apple.ttsbundle.Mariska-compact", lang: "hu-HU", localService: !0, default: !0}, {
        name: "Damayanti",
        voiceURI: "com.apple.ttsbundle.Damayanti-compact",
        lang: "id-ID",
        localService: !0,
        default: !0
    }, {name: "Alice", voiceURI: "com.apple.ttsbundle.Alice-compact", lang: "it-IT", localService: !0, default: !0}, {
        name: "Kyoko",
        voiceURI: "com.apple.ttsbundle.Kyoko-compact",
        lang: "ja-JP",
        localService: !0,
        default: !0
    }, {name: "Yuna", voiceURI: "com.apple.ttsbundle.Yuna-compact", lang: "ko-KR", localService: !0, default: !0}, {
        name: "Ellen",
        voiceURI: "com.apple.ttsbundle.Ellen-compact",
        lang: "nl-BE",
        localService: !0,
        default: !0
    }, {name: "Xander", voiceURI: "com.apple.ttsbundle.Xander-compact", lang: "nl-NL", localService: !0, default: !0}, {
        name: "Nora",
        voiceURI: "com.apple.ttsbundle.Nora-compact",
        lang: "no-NO",
        localService: !0,
        default: !0
    }, {name: "Zosia", voiceURI: "com.apple.ttsbundle.Zosia-compact", lang: "pl-PL", localService: !0, default: !0}, {
        name: "Luciana",
        voiceURI: "com.apple.ttsbundle.Luciana-compact",
        lang: "pt-BR",
        localService: !0,
        default: !0
    }, {name: "Joana", voiceURI: "com.apple.ttsbundle.Joana-compact", lang: "pt-PT", localService: !0, default: !0}, {
        name: "Ioana",
        voiceURI: "com.apple.ttsbundle.Ioana-compact",
        lang: "ro-RO",
        localService: !0,
        default: !0
    }, {name: "Milena", voiceURI: "com.apple.ttsbundle.Milena-compact", lang: "ru-RU", localService: !0, default: !0}, {
        name: "Laura",
        voiceURI: "com.apple.ttsbundle.Laura-compact",
        lang: "sk-SK",
        localService: !0,
        default: !0
    }, {name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE", localService: !0, default: !0}, {
        name: "Kanya",
        voiceURI: "com.apple.ttsbundle.Kanya-compact",
        lang: "th-TH",
        localService: !0,
        default: !0
    }, {name: "Yelda", voiceURI: "com.apple.ttsbundle.Yelda-compact", lang: "tr-TR", localService: !0, default: !0}, {
        name: "Ting-Ting",
        voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
        lang: "zh-CN",
        localService: !0,
        default: !0
    }, {name: "Sin-Ji", voiceURI: "com.apple.ttsbundle.Sin-Ji-compact", lang: "zh-HK", localService: !0, default: !0}, {
        name: "Mei-Jia",
        voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
        lang: "zh-TW",
        localService: !0,
        default: !0
    }], a.cache_ios10_voices = [{name: "Maged", voiceURI: "com.apple.ttsbundle.Maged-compact", lang: "ar-SA"}, {
        name: "Zuzana",
        voiceURI: "com.apple.ttsbundle.Zuzana-compact",
        lang: "cs-CZ"
    }, {name: "Sara", voiceURI: "com.apple.ttsbundle.Sara-compact", lang: "da-DK"}, {name: "Anna", voiceURI: "com.apple.ttsbundle.Anna-compact", lang: "de-DE"}, {
        name: "Helena",
        voiceURI: "com.apple.ttsbundle.siri_female_de-DE_compact",
        lang: "de-DE"
    }, {name: "Martin", voiceURI: "com.apple.ttsbundle.siri_male_de-DE_compact", lang: "de-DE"}, {
        name: "Nikos (Enhanced)",
        voiceURI: "com.apple.ttsbundle.Nikos-premium",
        lang: "el-GR"
    }, {name: "Melina", voiceURI: "com.apple.ttsbundle.Melina-compact", lang: "el-GR"}, {name: "Nikos", voiceURI: "com.apple.ttsbundle.Nikos-compact", lang: "el-GR"}, {
        name: "Catherine",
        voiceURI: "com.apple.ttsbundle.siri_female_en-AU_compact",
        lang: "en-AU"
    }, {name: "Gordon", voiceURI: "com.apple.ttsbundle.siri_male_en-AU_compact", lang: "en-AU"}, {
        name: "Karen",
        voiceURI: "com.apple.ttsbundle.Karen-compact",
        lang: "en-AU"
    }, {name: "Daniel (Enhanced)", voiceURI: "com.apple.ttsbundle.Daniel-premium", lang: "en-GB"}, {
        name: "Arthur",
        voiceURI: "com.apple.ttsbundle.siri_male_en-GB_compact",
        lang: "en-GB"
    }, {name: "Daniel", voiceURI: "com.apple.ttsbundle.Daniel-compact", lang: "en-GB"}, {name: "Martha", voiceURI: "com.apple.ttsbundle.siri_female_en-GB_compact", lang: "en-GB"}, {
        name: "Moira",
        voiceURI: "com.apple.ttsbundle.Moira-compact",
        lang: "en-IE"
    }, {name: "Nicky (Enhanced)", voiceURI: "com.apple.ttsbundle.siri_female_en-US_premium", lang: "en-US"}, {
        name: "Samantha (Enhanced)",
        voiceURI: "com.apple.ttsbundle.Samantha-premium",
        lang: "en-US"
    }, {name: "Aaron", voiceURI: "com.apple.ttsbundle.siri_male_en-US_compact", lang: "en-US"}, {name: "Fred", voiceURI: "com.apple.speech.synthesis.voice.Fred", lang: "en-US"}, {
        name: "Nicky",
        voiceURI: "com.apple.ttsbundle.siri_female_en-US_compact",
        lang: "en-US"
    }, {name: "Samantha", voiceURI: "com.apple.ttsbundle.Samantha-compact", lang: "en-US"}, {name: "Tessa", voiceURI: "com.apple.ttsbundle.Tessa-compact", lang: "en-ZA"}, {
        name: "Monica",
        voiceURI: "com.apple.ttsbundle.Monica-compact",
        lang: "es-ES"
    }, {name: "Paulina", voiceURI: "com.apple.ttsbundle.Paulina-compact", lang: "es-MX"}, {name: "Satu", voiceURI: "com.apple.ttsbundle.Satu-compact", lang: "fi-FI"}, {
        name: "Amelie",
        voiceURI: "com.apple.ttsbundle.Amelie-compact",
        lang: "fr-CA"
    }, {name: "Daniel", voiceURI: "com.apple.ttsbundle.siri_male_fr-FR_compact", lang: "fr-FR"}, {
        name: "Marie",
        voiceURI: "com.apple.ttsbundle.siri_female_fr-FR_compact",
        lang: "fr-FR"
    }, {name: "Thomas", voiceURI: "com.apple.ttsbundle.Thomas-compact", lang: "fr-FR"}, {name: "Carmit", voiceURI: "com.apple.ttsbundle.Carmit-compact", lang: "he-IL"}, {
        name: "Lekha",
        voiceURI: "com.apple.ttsbundle.Lekha-compact",
        lang: "hi-IN"
    }, {name: "Mariska", voiceURI: "com.apple.ttsbundle.Mariska-compact", lang: "hu-HU"}, {name: "Damayanti", voiceURI: "com.apple.ttsbundle.Damayanti-compact", lang: "id-ID"}, {
        name: "Alice",
        voiceURI: "com.apple.ttsbundle.Alice-compact",
        lang: "it-IT"
    }, {name: "Hattori", voiceURI: "com.apple.ttsbundle.siri_male_ja-JP_compact", lang: "ja-JP"}, {name: "Kyoko", voiceURI: "com.apple.ttsbundle.Kyoko-compact", lang: "ja-JP"}, {
        name: "O-ren",
        voiceURI: "com.apple.ttsbundle.siri_female_ja-JP_compact",
        lang: "ja-JP"
    }, {name: "Yuna", voiceURI: "com.apple.ttsbundle.Yuna-compact", lang: "ko-KR"}, {name: "Ellen", voiceURI: "com.apple.ttsbundle.Ellen-compact", lang: "nl-BE"}, {
        name: "Xander",
        voiceURI: "com.apple.ttsbundle.Xander-compact",
        lang: "nl-NL"
    }, {name: "Nora", voiceURI: "com.apple.ttsbundle.Nora-compact", lang: "no-NO"}, {name: "Zosia", voiceURI: "com.apple.ttsbundle.Zosia-compact", lang: "pl-PL"}, {
        name: "Luciana",
        voiceURI: "com.apple.ttsbundle.Luciana-compact",
        lang: "pt-BR"
    }, {name: "Joana", voiceURI: "com.apple.ttsbundle.Joana-compact", lang: "pt-PT"}, {name: "Ioana", voiceURI: "com.apple.ttsbundle.Ioana-compact", lang: "ro-RO"}, {
        name: "Milena",
        voiceURI: "com.apple.ttsbundle.Milena-compact",
        lang: "ru-RU"
    }, {name: "Laura", voiceURI: "com.apple.ttsbundle.Laura-compact", lang: "sk-SK"}, {name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE"}, {
        name: "Kanya",
        voiceURI: "com.apple.ttsbundle.Kanya-compact",
        lang: "th-TH"
    }, {name: "Yelda", voiceURI: "com.apple.ttsbundle.Yelda-compact", lang: "tr-TR"}, {name: "Li-mu", voiceURI: "com.apple.ttsbundle.siri_male_zh-CN_compact", lang: "zh-CN"}, {
        name: "Ting-Ting",
        voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
        lang: "zh-CN"
    }, {name: "Yu-shu", voiceURI: "com.apple.ttsbundle.siri_female_zh-CN_compact", lang: "zh-CN"}, {name: "Sin-Ji", voiceURI: "com.apple.ttsbundle.Sin-Ji-compact", lang: "zh-HK"}, {
        name: "Mei-Jia",
        voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
        lang: "zh-TW"
    }], a.cache_ios11_voices = [{name: "Maged", voiceURI: "com.apple.ttsbundle.Maged-compact", lang: "ar-SA"}, {
        name: "Zuzana",
        voiceURI: "com.apple.ttsbundle.Zuzana-compact",
        lang: "cs-CZ"
    }, {name: "Sara", voiceURI: "com.apple.ttsbundle.Sara-compact", lang: "da-DK"}, {name: "Anna", voiceURI: "com.apple.ttsbundle.Anna-compact", lang: "de-DE"}, {
        name: "Helena",
        voiceURI: "com.apple.ttsbundle.siri_female_de-DE_compact",
        lang: "de-DE"
    }, {name: "Martin", voiceURI: "com.apple.ttsbundle.siri_male_de-DE_compact", lang: "de-DE"}, {name: "Melina", voiceURI: "com.apple.ttsbundle.Melina-compact", lang: "el-GR"}, {
        name: "Catherine",
        voiceURI: "com.apple.ttsbundle.siri_female_en-AU_compact",
        lang: "en-AU"
    }, {name: "Gordon", voiceURI: "com.apple.ttsbundle.siri_male_en-AU_compact", lang: "en-AU"}, {name: "Karen", voiceURI: "com.apple.ttsbundle.Karen-compact", lang: "en-AU"}, {
        name: "Arthur",
        voiceURI: "com.apple.ttsbundle.siri_male_en-GB_compact",
        lang: "en-GB"
    }, {name: "Daniel", voiceURI: "com.apple.ttsbundle.Daniel-compact", lang: "en-GB"}, {name: "Martha", voiceURI: "com.apple.ttsbundle.siri_female_en-GB_compact", lang: "en-GB"}, {
        name: "Moira",
        voiceURI: "com.apple.ttsbundle.Moira-compact",
        lang: "en-IE"
    }, {name: "Aaron", voiceURI: "com.apple.ttsbundle.siri_male_en-US_compact", lang: "en-US"}, {name: "Fred", voiceURI: "com.apple.speech.synthesis.voice.Fred", lang: "en-US"}, {
        name: "Nicky",
        voiceURI: "com.apple.ttsbundle.siri_female_en-US_compact",
        lang: "en-US"
    }, {name: "Samantha", voiceURI: "com.apple.ttsbundle.Samantha-compact", lang: "en-US"}, {name: "Tessa", voiceURI: "com.apple.ttsbundle.Tessa-compact", lang: "en-ZA"}, {
        name: "Monica",
        voiceURI: "com.apple.ttsbundle.Monica-compact",
        lang: "es-ES"
    }, {name: "Paulina", voiceURI: "com.apple.ttsbundle.Paulina-compact", lang: "es-MX"}, {name: "Satu", voiceURI: "com.apple.ttsbundle.Satu-compact", lang: "fi-FI"}, {
        name: "Amelie",
        voiceURI: "com.apple.ttsbundle.Amelie-compact",
        lang: "fr-CA"
    }, {name: "Daniel", voiceURI: "com.apple.ttsbundle.siri_male_fr-FR_compact", lang: "fr-FR"}, {
        name: "Marie",
        voiceURI: "com.apple.ttsbundle.siri_female_fr-FR_compact",
        lang: "fr-FR"
    }, {name: "Thomas", voiceURI: "com.apple.ttsbundle.Thomas-compact", lang: "fr-FR"}, {name: "Carmit", voiceURI: "com.apple.ttsbundle.Carmit-compact", lang: "he-IL"}, {
        name: "Lekha",
        voiceURI: "com.apple.ttsbundle.Lekha-compact",
        lang: "hi-IN"
    }, {name: "Mariska", voiceURI: "com.apple.ttsbundle.Mariska-compact", lang: "hu-HU"}, {name: "Damayanti", voiceURI: "com.apple.ttsbundle.Damayanti-compact", lang: "id-ID"}, {
        name: "Alice",
        voiceURI: "com.apple.ttsbundle.Alice-compact",
        lang: "it-IT"
    }, {name: "Hattori", voiceURI: "com.apple.ttsbundle.siri_male_ja-JP_compact", lang: "ja-JP"}, {name: "Kyoko", voiceURI: "com.apple.ttsbundle.Kyoko-compact", lang: "ja-JP"}, {
        name: "O-ren",
        voiceURI: "com.apple.ttsbundle.siri_female_ja-JP_compact",
        lang: "ja-JP"
    }, {name: "Yuna", voiceURI: "com.apple.ttsbundle.Yuna-compact", lang: "ko-KR"}, {name: "Ellen", voiceURI: "com.apple.ttsbundle.Ellen-compact", lang: "nl-BE"}, {
        name: "Xander",
        voiceURI: "com.apple.ttsbundle.Xander-compact",
        lang: "nl-NL"
    }, {name: "Nora", voiceURI: "com.apple.ttsbundle.Nora-compact", lang: "no-NO"}, {name: "Zosia", voiceURI: "com.apple.ttsbundle.Zosia-compact", lang: "pl-PL"}, {
        name: "Luciana",
        voiceURI: "com.apple.ttsbundle.Luciana-compact",
        lang: "pt-BR"
    }, {name: "Joana", voiceURI: "com.apple.ttsbundle.Joana-compact", lang: "pt-PT"}, {name: "Ioana", voiceURI: "com.apple.ttsbundle.Ioana-compact", lang: "ro-RO"}, {
        name: "Milena",
        voiceURI: "com.apple.ttsbundle.Milena-compact",
        lang: "ru-RU"
    }, {name: "Laura", voiceURI: "com.apple.ttsbundle.Laura-compact", lang: "sk-SK"}, {name: "Alva", voiceURI: "com.apple.ttsbundle.Alva-compact", lang: "sv-SE"}, {
        name: "Kanya",
        voiceURI: "com.apple.ttsbundle.Kanya-compact",
        lang: "th-TH"
    }, {name: "Yelda", voiceURI: "com.apple.ttsbundle.Yelda-compact", lang: "tr-TR"}, {name: "Li-mu", voiceURI: "com.apple.ttsbundle.siri_male_zh-CN_compact", lang: "zh-CN"}, {
        name: "Ting-Ting",
        voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
        lang: "zh-CN"
    }, {name: "Yu-shu", voiceURI: "com.apple.ttsbundle.siri_female_zh-CN_compact", lang: "zh-CN"}, {name: "Sin-Ji", voiceURI: "com.apple.ttsbundle.Sin-Ji-compact", lang: "zh-HK"}, {
        name: "Mei-Jia",
        voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
        lang: "zh-TW"
    }], a.systemvoices = null, a.CHARACTER_LIMIT = 100, a.VOICESUPPORT_ATTEMPTLIMIT = 5, a.voicesupport_attempts = 0, a.fallbackMode = !1, a.WORDS_PER_MINUTE = 130, a.fallback_audio = null, a.fallback_playbackrate = 1, a.def_fallback_playbackrate = a.fallback_playbackrate, a.fallback_audiopool = [], a.msgparameters = null, a.timeoutId = null, a.OnLoad_callbacks = [], a.useTimer = !1, a.utterances = [], a.userInteractionEvents = ["mousedown", "mouseup", "mousewheel", "keydown"], a.fallbackBufferLength = 5, a.tstCompiled = function (a) {
        return eval("typeof xy === 'undefined'")
    }, a.fallbackServicePath = "https://code.responsivevoice.org/" + (a.tstCompiled() ? "" : "develop/") + "getvoice.php", a.default_rv = a.responsivevoices[0], a.debug = !1, a.rvsMapped = !1, a.forcedFallbackMode = !1, a.speechAllowedByUser = !0, a.log = function (c) {
        a.debug && console.log(c)
    }, a.init = function () {
        a.is_android && (a.useTimer = !0), a.is_opera || "undefined" == typeof speechSynthesis ? (console.log("RV: Voice synthesis not supported"), a.enableFallbackMode()) : setTimeout(function () {
            var d = setInterval(function () {
                var b = window.speechSynthesis.getVoices();
                0 != b.length || null != a.systemvoices && 0 != a.systemvoices.length ? (console.log("RV: Voice support ready"), a.systemVoicesReady(b), clearInterval(d)) : (console.log("Voice support NOT ready"), a.voicesupport_attempts++, a.voicesupport_attempts > a.VOICESUPPORT_ATTEMPTLIMIT && (clearInterval(d), null == window.speechSynthesis ? a.enableFallbackMode() : a.iOS ? (a.iOS11 ? a.systemVoicesReady(a.cache_ios11_voices) : a.iOS10 ? a.systemVoicesReady(a.cache_ios10_voices) : a.iOS9 ? a.systemVoicesReady(a.cache_ios9_voices) : a.systemVoicesReady(a.cache_ios_voices), console.log("RV: Voice support ready (cached)")) : (console.log("RV: speechSynthesis present but no system voices found"), a.enableFallbackMode())))
            }, 100)
        }, 100), (a.iOS || a.is_android || a.is_safari) && a.enableWindowClickHook(), a.Dispatch("OnLoad")
    }, a.systemVoicesReady = function (c) {
        a.systemvoices = c, a.mapRVs(), null != a.OnVoiceReady && a.OnVoiceReady.call(), a.Dispatch("OnReady"), window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))
    }, a.enableFallbackMode = function () {
        a.fallbackMode = !0, a.forcedFallbackMode = !0, console.log("RV: Enabling fallback mode"), a.mapRVs(), null != a.OnVoiceReady && a.OnVoiceReady.call(), a.Dispatch("OnReady"), window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ResponsiveVoice_OnReady")), a.Dispatch("OnServiceSwitched")
    }, a.getVoices = function () {
        for (var d = [], b = 0; b < a.responsivevoices.length; b++) d.push({name: a.responsivevoices[b].name});
        return d
    }, a.speak = function (i, j, c) {
        if (a.rvsMapped) {
            var d = null;
            if (a.isPlaying()) a.log("Cancelling previous speech"), a.cancel(), setTimeout(function () {
                a.speak(i, j, c)
            }, 50); else {
                i = i.replace(/["`]/gm, "'"), a.msgparameters = c || {}, a.msgtext = i, a.msgvoicename = j, a.onstartFired = !1;
                var o = [];
                if (i.length > a.CHARACTER_LIMIT) {
                    for (var k = i; k.length > a.CHARACTER_LIMIT;) {
                        var p = k.search(/([:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/), q = "";
                        if ((-1 == p || p >= a.CHARACTER_LIMIT) && (p = k.search(/,[^0-9]+/)), -1 == p || p >= a.CHARACTER_LIMIT) {
                            var r = k.split(" ");
                            for (p = 0; p < r.length; p++) {
                                if (q.length + r[p].length + 1 > a.CHARACTER_LIMIT) {
                                    r[p].length >= a.CHARACTER_LIMIT && (q += r[p].substr(0, a.CHARACTER_LIMIT - q.length - 1));
                                    break
                                }
                                q += (0 == p ? "" : " ") + r[p]
                            }
                        } else q = k.substr(0, p + 1);
                        k = k.substr(q.length, k.length - q.length), o.push(q)
                    }
                    0 < k.length && o.push(k)
                } else o.push(i);
                if (console.log(o), a.multipartText = o, null == j ? (p = a.default_rv, a.setDefaultVoice(p.name)) : p = a.getResponsiveVoice(j), !0 === p.deprecated && console.warn("ResponsiveVoice: Voice " + p.name + " is deprecated and will be removed in future releases"), k = {}, null != p.mappedProfile) k = p.mappedProfile; else if (k.systemvoice = a.getMatchedVoice(p), k.collectionvoice = {}, null == k.systemvoice) return void console.log("RV: ERROR: No voice found for: " + j);
                if (a.checkSpeechAllowed()) {
                    for (a.fallbackMode && 0 < a.fallback_audiopool.length && a.clearFallbackPool(), a.msgprofile = k, a.log("Voice picked: " + a.msgprofile.systemvoice.name), a.utterances = [], a.fallbackChunks = [], p = 0; p < o.length; p++) if (!a.fallbackMode && a.getServiceEnabled(a.services.NATIVE_TTS)) a.log("Using SpeechSynthesis"), d = a.services.NATIVE_TTS, q = new SpeechSynthesisUtterance, q.voiceURI = k.systemvoice.voiceURI, q.volume = a.selectBest([k.collectionvoice.volume, k.systemvoice.volume, 1]), q.rate = a.selectBest([a.iOS9plus ? 1 : null, k.collectionvoice.rate, k.systemvoice.rate, 1]), q.pitch = a.selectBest([k.collectionvoice.pitch, k.systemvoice.pitch, 1]), q.text = o[p], q.lang = a.selectBest([k.collectionvoice.lang, k.systemvoice.lang]), q.rvIndex = p, q.rvTotal = o.length, 0 == p && (q.onstart = a.speech_onstart), a.msgparameters.onendcalled = !1, null == c ? (a.log("No Params received for current Utterance"), q.voice = k.systemvoice, q.onend = a.speech_onend, q.onboundary = a.onboundary, q.onerror = function (c) {
                        a.log("RV: Unknow Error"), a.log(c)
                    }) : (q.voice = "undefined" == typeof c.voice ? k.systemvoice : c.voice, p < o.length - 1 && 1 < o.length ? (q.onend = a.onPartEnd, q.hasOwnProperty("addEventListener") && q.addEventListener("end", a.onPartEnd)) : (q.onend = a.speech_onend, q.hasOwnProperty("addEventListener") && q.addEventListener("end", a.speech_onend)), q.onerror = c.onerror || function (c) {
                        a.log("RV: Unknow Error"), a.log(c)
                    }, c.rate = a.validateParameters(c, "rate"), c.pitch = a.validateParameters(c, "pitch"), c.volume = a.validateParameters(c, "volume"), q.onpause = c.onpause, q.onresume = c.onresume, q.onmark = c.onmark, q.onboundary = c.onboundary || a.onboundary, q.pitch = null == c.pitch ? q.pitch : c.pitch, q.rate = a.iOS ? (null == c.rate ? 1 : c.rate * c.rate) * q.rate : (null == c.rate ? 1 : c.rate) * q.rate, q.volume = null == c.volume ? q.volume : c.volume), a.utterances.push(q), 0 == p && (a.currentMsg = q), console.log(q), a.tts_speak(q); else if (a.fallbackMode && a.getServiceEnabled(a.services.FALLBACK_AUDIO)) {
                        d = a.services.FALLBACK_AUDIO, a.fallback_playbackrate = a.def_fallback_playbackrate, q = a.selectBest([k.collectionvoice.pitch, k.systemvoice.pitch, 1]), r = a.selectBest([a.iOS9plus ? 1 : null, k.collectionvoice.rate, k.systemvoice.rate, 1]);
                        var s = a.selectBest([k.collectionvoice.volume, k.systemvoice.volume, 1]);
                        if (null != c) {
                            q *= null == c.pitch ? 1 : c.pitch, r *= null == c.rate ? 1 : c.rate, s *= null == c.volume ? 1 : c.volume;
                            var t = c.extraParams || null
                        }
                        q /= 2, r /= 2, s *= 2, q = Math.min(Math.max(q, 0), 1), r = Math.min(Math.max(r, 0), 1), s = Math.min(Math.max(s, 0), 1), q = a.fallbackServicePath + "?t=" + encodeURIComponent(o[p]) + "&tl=" + (k.collectionvoice.lang || k.systemvoice.lang || "en-US") + "&sv=" + (k.collectionvoice.service || k.systemvoice.service || "") + "&vn=" + (k.collectionvoice.voicename || k.systemvoice.voicename || "") + "&pitch=" + q.toString() + "&rate=" + r.toString() + "&vol=" + s.toString(), void 0 !== k.collectionvoice.gender && (q += "&gender=" + k.collectionvoice.gender), t && (q += "&extraParams=" + JSON.stringify(t)), a.fallbackChunks.push({
                            text: o[p],
                            url: q,
                            audio: null
                        })
                    }
                    a.fallbackMode && a.getServiceEnabled(a.services.FALLBACK_AUDIO) && (a.fallbackChunkIndex = 0, a.fallback_startPart()), a.log("Service used: " + d)
                } else a.scheduledSpeak = {text: i, voicename: j, parameters: c}
            }
        } else setTimeout(function () {
            a.speak(i, j, c)
        }, 15)
    }, a.startTimeout = function (e, b) {
        var c = a.msgprofile.collectionvoice.timerSpeed;
        null == a.msgprofile.collectionvoice.timerSpeed && (c = 1), 0 >= c || (a.timeoutId = setTimeout(b, a.getEstimatedTimeLength(e, c)), a.log("Timeout ID: " + a.timeoutId))
    }, a.checkAndCancelTimeout = function () {
        null != a.timeoutId && (clearTimeout(a.timeoutId), a.timeoutId = null)
    }, a.speech_timedout = function () {
        a.cancel(), a.cancelled = !1, a.speech_onend()
    }, a.speech_onend = function () {
        a.checkAndCancelTimeout(), !0 === a.cancelled ? a.cancelled = !1 : (a.log("on end fired"), null != a.msgparameters && null != a.msgparameters.onend && 1 != a.msgparameters.onendcalled && (a.log("Speech on end called  -" + a.msgtext), a.msgparameters.onendcalled = !0, a.msgparameters.onend()))
    }, a.speech_onstart = function () {
        a.onstartFired || (a.onstartFired = !0, a.log("Speech start"), (a.iOS || a.is_safari || a.useTimer) && (a.fallbackMode || a.startTimeout(a.msgtext, a.speech_timedout)), a.msgparameters.onendcalled = !1, null != a.msgparameters && null != a.msgparameters.onstart && a.msgparameters.onstart())
    }, a.fallback_startPart = function () {
        0 == a.fallbackChunkIndex && a.speech_onstart(), a.fallback_updateChunksBuffer(), a.fallback_audio = a.fallbackChunks[a.fallbackChunkIndex].audio, null == a.fallback_audio ? a.log("RV: Fallback Audio is not available") : (function () {
            var d = a.fallback_audio;
            if (setTimeout(function () {
                d.playbackRate = a.fallback_playbackrate
            }, 50), d.onloadedmetadata = function () {
                d.playbackRate = a.fallback_playbackrate
            }, 2 <= d.readyState) d.play(); else {
                var b = function () {
                    d.play(), d.removeEventListener("canplaythrough", b)
                };
                d.addEventListener("canplaythrough", b, !1)
            }
        }(), a.fallback_errors && (a.log("RV: Speech cancelled due to errors"), a.speech_onend()), a.fallback_audio.addEventListener("ended", a.fallback_finishPart), a.useTimer && a.startTimeout(a.multipartText[a.fallbackChunkIndex], a.fallback_finishPart))
    }, a.isFallbackAudioPlaying = function () {
        var d;
        for (d = 0; d < a.fallback_audiopool.length; d++) {
            var e = a.fallback_audiopool[d];
            if (!e.paused && !e.ended && e.currentTime != e.duration) return !0
        }
        return !1
    }, a.fallback_finishPart = function () {
        a.isFallbackAudioPlaying() ? (a.checkAndCancelTimeout(), a.timeoutId = setTimeout(a.fallback_finishPart, 1E3 * (a.fallback_audio.duration - a.fallback_audio.currentTime))) : (a.checkAndCancelTimeout(), a.fallbackChunkIndex < a.fallbackChunks.length - 1 ? (a.fallbackChunkIndex++, a.fallback_startPart()) : a.speech_onend())
    }, a.cancel = function () {
        a.checkAndCancelTimeout(), a.fallbackMode ? (null != a.fallback_audio && a.fallback_audio.pause(), a.clearFallbackPool()) : (a.cancelled = !0, speechSynthesis.cancel())
    }, a.voiceSupport = function () {
        return "speechSynthesis" in window
    }, a.OnFinishedPlaying = function () {
        null != a.msgparameters && null != a.msgparameters.onend && a.msgparameters.onend()
    }, a.setDefaultVoice = function (d) {
        if (a.rvsMapped) {
            var b = a.getResponsiveVoice(d);
            null != b && (a.default_rv = b)
        } else setTimeout(function () {
            a.setDefaultVoice(d)
        }, 15)
    }, a.mapRVs = function () {
        if ("object" == typeof navigator) {
            var e, g = "anguage", i = navigator;
            i = (e = i["l" + g + "s"], e && e.length ? e : (g = i["l" + g] || i["browserL" + g] || i["userL" + g]) ? [g] : g)
        } else i = void 0;
        for (e = i[0], g = 0; g < a.responsivevoices.length; g++) {
            i = a.responsivevoices[g];
            for (var j, l = 0; l < i.voiceIDs.length; l++) if (j = a.voicecollection[i.voiceIDs[l]], 1 != j.fallbackvoice) {
                var m = a.getSystemVoice(j.name);
                if (a.forcedFallbackMode && (m = null), a.iOS12_0 && i.lang.toLowerCase() != e.toLowerCase() && i.lang.toLowerCase().split("-")[0] != e.toLowerCase() && (m = null), null != m) {
                    i.mappedProfile = {systemvoice: m, collectionvoice: j};
                    break
                }
            } else {
                i.mappedProfile = {systemvoice: {}, collectionvoice: j};
                break
            }
        }
        a.rvsMapped = !0
    }, a.getMatchedVoice = function (e) {
        for (var b, f = 0; f < e.voiceIDs.length; f++) if (b = a.getSystemVoice(a.voicecollection[e.voiceIDs[f]].name), null != b) return b;
        return null
    }, a.getSystemVoice = function (e) {
        var b = String.fromCharCode(160), c = e.replace(/\s+|В /g, "");
        if ("undefined" == typeof a.systemvoices || null === a.systemvoices) return null;
        for (var d = 0; d < a.systemvoices.length; d++) if (0 === a.systemvoices[d].name.localeCompare(e) || 0 === a.systemvoices[d].name.replace(/\s+|В /g, "").replace(/ *\([^)]*\) */g, "").localeCompare(c)) return a.systemvoices[d];
        return null
    }, a.getResponsiveVoice = function (d) {
        for (var e = 0; e < a.responsivevoices.length; e++) if (a.responsivevoices[e].name == d) return d = a.fallbackMode, a.fallbackMode = !(!0 !== a.responsivevoices[e].mappedProfile.collectionvoice.fallbackvoice && !0 !== a.forcedFallbackMode), d != a.fallbackMode && (a.mapRVs(), a.Dispatch("OnServiceSwitched")), a.responsivevoices[e];
        return null
    }, a.Dispatch = function (e) {
        if (a.hasOwnProperty(e + "_callbacks") && null != a[e + "_callbacks"] && 0 < a[e + "_callbacks"].length) {
            for (var b = a[e + "_callbacks"], c = 0; c < b.length; c++) b[c]();
            return !0
        }
        var f = e + "_callbacks_timeout", g = e + "_callbacks_timeoutCount";
        return a.hasOwnProperty(f) || (a[g] = 10, a[f] = setInterval(function () {
            --a[g], (a.Dispatch(e) || 0 > a[g]) && clearTimeout(a[f])
        }, 50)), !1
    }, a.AddEventListener = function (d, b) {
        a.hasOwnProperty(d + "_callbacks") || (a[d + "_callbacks"] = []), a[d + "_callbacks"].push(b)
    }, a.addEventListener = a.AddEventListener, a.RemoveEventListener = function (d, b) {
        a[d + "_callbacks"] && -1 != a[d + "_callbacks"].indexOf(b) && a[d + "_callbacks"].splice(a[d + "_callbacks"].indexOf(b), 1)
    }, a.clickEvent = function () {
        a.log("Click event"), a.click_event_detected = !0, a.initializePermissions(), a.userInteractionEvents.forEach(function (c) {
            window.removeEventListener(c, a.clickEvent, !1)
        }), a.Dispatch("OnClickEvent")
    }, a.initializePermissions = function () {
        if (a.iOS && !a.iOS_initialized) {
            a.log("Initializing iOS click event");
            var c = new SpeechSynthesisUtterance(" ");
            speechSynthesis.speak(c), a.iOS_initialized = !0
        }
        a.is_android && !a.android_initialized && (a.log("Initializing Android click event"), c = new SpeechSynthesisUtterance(" "), speechSynthesis.speak(c)), a.initFallbackPool()
    }, a.isPlaying = function () {
        return a.fallbackMode ? null != a.fallback_audio && !a.fallback_audio.ended && !a.fallback_audio.paused : speechSynthesis.speaking
    }, a.clearFallbackPool = function () {
        for (var c = 0; c < a.fallback_audiopool.length; c++) null != a.fallback_audiopool[c] && (a.fallback_audiopool[c].pause(), a.fallback_audiopool[c].src = "");
        a.fallback_audiopool_index = 0, a.fallbackChunks = []
    }, a.initFallbackPool = function () {
        if (!a.fallback_audiopool || 0 == a.fallback_audiopool.length) {
            for (var e = 0; 10 > e; e++) {
                var f = e, c = document.createElement("AUDIO");
                c.preload = "auto", a.is_android && (c.src = "", c.load(), 9 == f && (a.log("Android HTML audio initialized"), a.android_initialized = !0)), a.iOS && (c.src = "", c.load(), 9 == f && (a.log("iOS HTML audio initialized"), a.iOS_initialized = !0)), a.fallback_audiopool.push(c)
            }
            a.fallback_audiopool_index = 0
        }
    }, a.allowSpeechClicked = function (c) {
        a.allowSpeechDiv.parentNode.removeChild(a.allowSpeechDiv), a.allowSpeechDiv = null, (a.speechAllowedByUser = c) && (a.clickEvent(), a.scheduledSpeak && (a.speak(a.scheduledSpeak.text, a.scheduledSpeak.voicename, a.scheduledSpeak.parameters), a.scheduledSpeak = null)), a.Dispatch("OnAllowSpeechClicked")
    }, a.checkSpeechAllowed = function (d) {
        if (0 == a.speechAllowedByUser) return !1;
        if ((a.is_android || a.iOS || a.is_safari && (a.fallbackMode || a.forcedFallbackMode)) && !a.click_event_detected) {
            if (a.allowSpeechDiv) return;
            if (a.allowSpeechDiv_appearances = null == a.allowSpeechDiv_appearances ? 1 : ++a.allowSpeechDiv_appearances, 2 < a.allowSpeechDiv_appearances) return console.log("ResponsiveVoice: Speech not allowed by user"), !1;
            var e = document.createElement("style");
            return e.innerHTML = ".rvNotification{position:fixed;background-color:#fff;text-align:center;font-family:-apple-system,system-ui,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif;font-weight:400;line-height:1.5;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:10000;width:100vw;left:0;bottom:0;font-size:1rem;padding-bottom:.5em;padding-right:.5em}.rvButtonRow{padding-right:2em;padding-bottom:1em;text-align:right;font-size:medium}.rvButton{cursor:pointer;display:inline-block;margin-left:1em;padding:.8em 2em;border-radius:3px;font-size:small}.rvButtonAllow{border:none;background-color:#2b8cff;color:#fff}.rvButtonDeny{border:1px solid #2b8cff;color:#2b8cff;background-color:#fff}.rvTextRow{padding-top:1em;padding-bottom:2em}@media (min-width:576px){.rvNotification{width:60vw;left:20vw}}@media (min-width:768px){.rvNotification{width:50vw;left:25vw}}@media (min-width:992px){.rvNotification{width:40vw;left:30vw}}@media (min-width:1200px){.rvNotification{width:30vw;left:35vw}}", document.body.appendChild(e), a.allowSpeechDiv = document.createElement("div"), a.allowSpeechDiv.classList.add("rvNotification"), null == d && (d = {}), a.allowSpeechDiv.innerHTML = "<div class=\"rvTextRow\"><strong>" + (null == d.urlOverride ? window.location.hostname : d.urlOverride) + "</strong> " + (null == d.textOverride ? "wants to play speech" : d.textOverride) + "</div><div class=\"rvButtonRow\"><div onclick=\"responsiveVoice.allowSpeechClicked(false);\" class=\"rvButton rvButtonDeny\">DENY</div><div onclick=\"responsiveVoice.allowSpeechClicked(true);\" class=\"rvButton rvButtonAllow\">ALLOW</div></div>", document.body.appendChild(a.allowSpeechDiv), !1
        }
        return !0
    }, a.fallback_audioPool_getAudio = function () {
        return a.initFallbackPool(), a.fallback_audiopool_index >= a.fallback_audiopool.length && (a.fallback_audiopool_index = 0), a.fallback_audiopool[a.fallback_audiopool_index++]
    }, a.fallback_updateChunksBuffer = function () {
        for (var d, e = a.fallbackChunkIndex; e < Math.min(a.fallbackChunks.length, a.fallbackChunkIndex + a.fallbackBufferLength); e++) d = a.fallbackChunks[e], null == d.audio && (d.audio = a.fallback_audioPool_getAudio(), d.audio.src = d.url, d.audio.playbackRate = a.fallback_playbackrate, d.audio.preload = "auto", d.audio.load())
    }, a.selectBest = function (c) {
        for (var a = 0; a < c.length; a++) if (null != c[a]) return c[a];
        return null
    }, a.pause = function () {
        a.fallbackMode ? null != a.fallback_audio && a.fallback_audio.pause() : speechSynthesis.pause()
    }, a.resume = function () {
        a.fallbackMode ? null != a.fallback_audio && a.fallback_audio.play() : speechSynthesis.resume()
    }, a.tts_speak = function (c) {
        setTimeout(function () {
            a.cancelled = !1, speechSynthesis.speak(c)
        }, .01)
    }, a.setVolume = function (d) {
        if (a.isPlaying()) if (a.fallbackMode) {
            for (var b = 0; b < a.fallback_audiopool.length; b++) a.fallback_audiopool[b].volume = d;
            a.fallback_audio.volume = d
        } else for (b = 0; b < a.utterances.length; b++) a.utterances[b].volume = d
    }, a.onPartEnd = function (c) {
        null != a.msgparameters && null != a.msgparameters.onchuckend && a.msgparameters.onchuckend(), a.Dispatch("OnPartEnd"), c = a.utterances.indexOf(c.utterance), a.currentMsg = a.utterances[c + 1]
    }, a.onboundary = function () {
        a.log("On Boundary"), a.iOS && !a.onstartFired && a.speech_onstart()
    }, a.numToWords = function (g) {
        function i(d) {
            if (Array.isArray(d)) {
                for (var a = 0, e = Array(d.length); a < d.length; a++) e[a] = d[a];
                return e
            }
            return Array.from(d)
        }

        var j = function () {
                return function (i, a) {
                    if (Array.isArray(i)) return i;
                    if (Symbol.iterator in Object(i)) {
                        var b, j = [], c = !0, k = !1;
                        try {
                            for (var l, m = i[Symbol.iterator](); !(c = (l = m.next()).done) && (j.push(l.value), !a || j.length !== a); c = !0) ;
                        } catch (a) {
                            k = !0, b = a
                        } finally {
                            try {
                                !c && m["return"] && m["return"]()
                            } finally {
                                if (k) throw b
                            }
                        }
                        return j
                    }
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            }(), c = function (b) {
                return 0 === b.length
            }, d = function (c) {
                return function (a) {
                    return a.slice(0, c)
                }
            }, h = function (c) {
                return function (a) {
                    return a.slice(c)
                }
            }, b = function (d) {
                return function (a) {
                    return function (b) {
                        return d(a(b))
                    }
                }
            },
            e = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
            f = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
            k = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion"];
        return "number" == typeof g ? a.numToWords(g + "") : "0" === g ? "zero" : b(function e(f) {
            return function (a) {
                return c(a) ? [] : [d(f)(a)].concat(i(e(f)(h(f)(a))))
            }
        }(3))(function (b) {
            return b.slice(0).reverse()
        })(Array.from(g)).map(function (d) {
            var g = j(d, 3);
            d = g[0];
            var h = g[1];
            return g = g[2], [0 === (+g || 0) ? "" : e[g] + " hundred ", 0 === (+d || 0) ? f[h] : f[h] && f[h] + " " || "", e[h + d] || e[d]].join("")
        }).map(function (c, a) {
            return "" === c ? c : c + " " + k[a]
        }).filter(b(function (b) {
            return !b
        })(c)).reverse().join(" ").trim()
    }, a.getWords = function (e) {
        e = e.replace(/$|\u00a5|\u20a1|\u20ac|\u00a3|\u20aa|\u20b9|\uffe5|\u17db|\u20a9|\u20a6|\u0e3f|\u20b4|\u20ab/gi, " dummy currency ");
        var f = e.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/);
        f = f.filter(function (b) {
            return /[^\s]/.test(b)
        });
        for (var g = 0; g < f.length; g++) null != (e = f[g].toString().match(/\d+/)) && (f.splice(g, 1), a.numToWords(+e[0]).split(/\s+/).map(function (b) {
            f.push(b)
        }));
        return f
    }, a.getEstimatedTimeLength = function (e, b) {
        var i = a.getWords(e), d = 0, j = a.fallbackMode ? 1300 : 700;
        b = b || 1, i.map(function (b) {
            d += (b.toString().match(/[^ ]/igm) || b).length
        });
        var k = i.length, f = 1E3 * (60 / a.WORDS_PER_MINUTE * b) * k;
        return 5 > k && (f = b * (j + 50 * d)), a.log("Estimated time length: " + f + " ms, words: [" + i + "], charsCount: " + d), f
    }, a.validateParameters = function (d, a) {
        if ("undefined" == typeof d[a]) return d[a];
        switch (a) {
            case"rate":
            case"pitch":
            case"volume":
                var c = +d[a];
                isNaN(c) && console.warn("ResponsiveVoice: the parameter " + a + " has a wrong value \"" + d[a] + "\". Defaults were used."), d[a] = isNaN(c) ? "1" : d[a];
        }
        return d[a]
    }, a.services = {NATIVE_TTS: 0, FALLBACK_AUDIO: 1}, a.servicesPriority = [0, 1], a.servicesEnabled = [], a.setServiceEnabled = function (d, b) {
        a.servicesEnabled[d] = b
    }, a.getServiceEnabled = function (c) {
        return a.servicesEnabled[c] || !1
    }, a.setServiceEnabled(a.services.NATIVE_TTS, !0), a.setServiceEnabled(a.services.FALLBACK_AUDIO, !0),a.forceFallbackMode = function (c) {
        a.forcedFallbackMode = c, a.fallbackMode = c, a.mapRVs(), a.Dispatch("OnServiceSwitched")
    },a.enableWindowClickHook = function () {
        a.userInteractionEvents.forEach(function (c) {
            window.addEventListener(c, a.clickEvent, !1)
        })
    },"interactive" === document.readyState ? a.init() : document.addEventListener("DOMContentLoaded", function () {
        a.init()
    })
}, responsiveVoice = new ResponsiveVoice;


// Speacial Fuatured

$('.specialFeatured').hover(function () {
    $(this).find('a').addClass('active');
    $(this).parent().find('.specialFeaturedBlock').addClass('active');
}, function () {
    $(this).find('a').removeClass('active');
    $(this).parent().find('.specialFeaturedBlock').removeClass('active');
});

$('a.js-lightbox').simpleLightbox();

$('.specialFeatured .specialFeaturedBlock .specialFeaturedBlockWraps .typeView a.blackWhite').click(function () {
    $('.specialFeatured .specialFeaturedBlock .specialFeaturedBlockWraps .typeView a').removeClass('active');
    $(this).addClass('active');
    $('body').addClass('modeBlackWhite');
    window.localStorage.setItem('modeBlackWhite', '1');
});
$('.specialFeatured .specialFeaturedBlock .specialFeaturedBlockWraps .typeView a.default').click(function () {
    $('.specialFeatured .specialFeaturedBlock .specialFeaturedBlockWraps .typeView a').removeClass('active');
    $(this).addClass('active');
    $('body').removeClass('modeBlackWhite');
    window.localStorage.removeItem('modeBlackWhite', '1');
});
var modeBW = window.localStorage.getItem('modeBlackWhite');
if (modeBW == 1) {
    $('body').addClass('modeBlackWhite');
} else {
    $('body').removeClass('modeBlackWhite');
}

$('.myCabinet .myCabinetBtn').click(function () {
    $(this).toggleClass('active');
    $(this).parent().find('ul').toggleClass('active');
});

$('.myCabinet').hover(function () {
    $(this).find('.myCabinetBtn').addClass('active');
    $(this).find('ul').addClass('active');
}, function () {
    $(this).find('.myCabinetBtn').removeClass('active');
    $(this).find('ul').removeClass('active');
});

$('.regionLangbtns li').each(function () {
    var btn = $(this).find('a');
    btn.click(function () {
        $('.regionLangbtns li').removeClass('active');
        $(this).parent().addClass('active');
    });
});

$('.regionLangbtns').hover(function () {
    $(this).parent().find('li').addClass('active');
}, function () {
    $(this).parent().find('li').removeClass('active');
});


(function ($) {
    $.fn.clickToggle = function (func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function () {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
}(jQuery));


// Single Constructor Modal
$('.singleMobileConstructor .singleMobileConstructor__content .singleMobileConstructor__right .singleMobileConstructor__right--wraps .btn').click(function () {
    $('.modalConstruktor').addClass('active');
});
$('.modalConstruktor .container .close, .modalConstruktor .overlay-modalConstruktor').click(function () {
    $('.modalConstruktor').removeClass('active');
});


jQuery(window).on("load", function () {

    // Font size change
    var $selectedItems = $("a, p, strong, span, address, h4, h5, h6 ,div");
    $selectedItems.each(function () {
        var $this = $(this);
        $this.data("orig-size", $this.css("font-size"));
    });

    $('.typeSizeFonts ul li.inc2 label').click(function (e) {
        //e.preventDefault();
        changeFontSize(14);
    });
    $('.typeSizeFonts ul li.inc3 label').click(function (e) {
        //e.preventDefault();
        changeFontSize(16);
    });
    $('.typeSizeFonts ul li.inc4 label').click(function (e) {
        //e.preventDefault();
        changeFontSize(18);
    });
    $('.typeSizeFonts ul li.inc5 label').click(function (e) {
        //e.preventDefault();
        changeFontSize(19);
    });

    $('.typeSizeFonts ul li.inc1 label').click(function (e) {
        $selectedItems.each(function () {
            var $this = $(this);
            $this.css("font-size", $this.data("orig-size"));
            $this.css("line-height", '');
        });
    });

    function changeFontSize(direction) {
        $selectedItems.each(function () {
            var $this = $(this);
            $this.css('font-size', parseInt($this.css('font-size', direction)));
            $this.css('line-height', parseInt($this.css('line-height', direction + 'px')));
        });
    }

});


$(document).ready(function () {
    //$('#frame1').css('display','block');
    console.log('display:block');
    setTimeout(function () {
        $('#frame1').css('display', 'block');
    }, 2000);
});


// FOOTER height value
// function footerAlign() {
//   $('footer').css('height', 'auto');
//   var footerHeight = $('footer').outerHeight();
//   $('.emptyblock').css('height', footerHeight);
//   $('footer').css('height', footerHeight);
//   $('footer').css('margin-top', -footerHeight);
// }
// $(document).ready(function(){
//   footerAlign();
// });
// $( window ).resize(function() {
//   footerAlign();
// });

function formShow() {
    $(".hidden_form_pyrex").slideDown("slow");
    $(".hidden_form_pyrex").css("display", "block");
    console.log('slide works');
    $('#phone').attr('required', 'required');
    $('#full_name').attr('required', 'required');
    $('#phone-error').remove();
};