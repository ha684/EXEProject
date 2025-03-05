"use strict";
function _typeof(e) {
    "@babel/helpers - typeof";
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    )(e)
}
function _regeneratorRuntime() {
    function e(e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }),
        e[t]
    }
    function t(e, t, n, s) {
        var o = t && t.prototype instanceof r ? t : r
          , a = Object.create(o.prototype)
          , i = new h(s || []);
        return _(a, "_invoke", {
            value: c(e, n, i)
        }),
        a
    }
    function n(e, t, n) {
        try {
            return {
                type: "normal",
                arg: e.call(t, n)
            }
        } catch (r) {
            return {
                type: "throw",
                arg: r
            }
        }
    }
    function r() {}
    function s() {}
    function o() {}
    function a(t) {
        ["next", "throw", "return"].forEach(function(n) {
            e(t, n, function(e) {
                return this._invoke(n, e)
            })
        })
    }
    function i(e, t) {
        function r(s, o, a, i) {
            var c = n(e[s], e, o);
            if ("throw" !== c.type) {
                var u = c.arg
                  , d = u.value;
                return d && "object" == _typeof(d) && v.call(d, "__await") ? t.resolve(d.__await).then(function(e) {
                    r("next", e, a, i)
                }, function(e) {
                    r("throw", e, a, i)
                }) : t.resolve(d).then(function(e) {
                    u.value = e,
                    a(u)
                }, function(e) {
                    return r("throw", e, a, i)
                })
            }
            i(c.arg)
        }
        var s;
        _(this, "_invoke", {
            value: function(e, n) {
                function o() {
                    return new t(function(t, s) {
                        r(e, n, t, s)
                    }
                    )
                }
                return s = s ? s.then(o, o) : o()
            }
        })
    }
    function c(e, t, r) {
        var s = "suspendedStart";
        return function(o, a) {
            if ("executing" === s)
                throw new Error("Generator is already running");
            if ("completed" === s) {
                if ("throw" === o)
                    throw a;
                return m()
            }
            for (r.method = o,
            r.arg = a; ; ) {
                var i = r.delegate;
                if (i) {
                    var c = u(i, r);
                    if (c) {
                        if (c === I)
                            continue;
                        return c
                    }
                }
                if ("next" === r.method)
                    r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                    if ("suspendedStart" === s)
                        throw s = "completed",
                        r.arg;
                    r.dispatchException(r.arg)
                } else
                    "return" === r.method && r.abrupt("return", r.arg);
                s = "executing";
                var d = n(e, t, r);
                if ("normal" === d.type) {
                    if (s = r.done ? "completed" : "suspendedYield",
                    d.arg === I)
                        continue;
                    return {
                        value: d.arg,
                        done: r.done
                    }
                }
                "throw" === d.type && (s = "completed",
                r.method = "throw",
                r.arg = d.arg)
            }
        }
    }
    function u(e, t) {
        var r = t.method
          , s = e.iterator[r];
        if (void 0 === s)
            return t.delegate = null,
            "throw" === r && e.iterator["return"] && (t.method = "return",
            t.arg = void 0,
            u(e, t),
            "throw" === t.method) || "return" !== r && (t.method = "throw",
            t.arg = new TypeError("The iterator does not provide a '" + r + "' method")),
            I;
        var o = n(s, e.iterator, t.arg);
        if ("throw" === o.type)
            return t.method = "throw",
            t.arg = o.arg,
            t.delegate = null,
            I;
        var a = o.arg;
        return a ? a.done ? (t[e.resultName] = a.value,
        t.next = e.nextLoc,
        "return" !== t.method && (t.method = "next",
        t.arg = void 0),
        t.delegate = null,
        I) : a : (t.method = "throw",
        t.arg = new TypeError("iterator result is not an object"),
        t.delegate = null,
        I)
    }
    function d(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]),
        2 in e && (t.finallyLoc = e[2],
        t.afterLoc = e[3]),
        this.tryEntries.push(t)
    }
    function l(e) {
        var t = e.completion || {};
        t.type = "normal",
        delete t.arg,
        e.completion = t
    }
    function h(e) {
        this.tryEntries = [{
            tryLoc: "root"
        }],
        e.forEach(d, this),
        this.reset(!0)
    }
    function g(e) {
        if (e) {
            var t = e[M];
            if (t)
                return t.call(e);
            if ("function" == typeof e.next)
                return e;
            if (!isNaN(e.length)) {
                var n = -1
                  , r = function s() {
                    for (; ++n < e.length; )
                        if (v.call(e, n))
                            return s.value = e[n],
                            s.done = !1,
                            s;
                    return s.value = void 0,
                    s.done = !0,
                    s
                };
                return r.next = r
            }
        }
        return {
            next: m
        }
    }
    function m() {
        return {
            value: void 0,
            done: !0
        }
    }
    _regeneratorRuntime = function() {
        return p
    }
    ;
    var p = {}
      , f = Object.prototype
      , v = f.hasOwnProperty
      , _ = Object.defineProperty || function(e, t, n) {
        e[t] = n.value
    }
      , y = "function" == typeof Symbol ? Symbol : {}
      , M = y.iterator || "@@iterator"
      , C = y.asyncIterator || "@@asyncIterator"
      , w = y.toStringTag || "@@toStringTag";
    try {
        e({}, "")
    } catch (b) {
        e = function(e, t, n) {
            return e[t] = n
        }
    }
    p.wrap = t;
    var I = {}
      , x = {};
    e(x, M, function() {
        return this
    });
    var k = Object.getPrototypeOf
      , T = k && k(k(g([])));
    T && T !== f && v.call(T, M) && (x = T);
    var S = o.prototype = r.prototype = Object.create(x);
    return s.prototype = o,
    _(S, "constructor", {
        value: o,
        configurable: !0
    }),
    _(o, "constructor", {
        value: s,
        configurable: !0
    }),
    s.displayName = e(o, w, "GeneratorFunction"),
    p.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === s || "GeneratorFunction" === (t.displayName || t.name))
    }
    ,
    p.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, o) : (t.__proto__ = o,
        e(t, w, "GeneratorFunction")),
        t.prototype = Object.create(S),
        t
    }
    ,
    p.awrap = function(e) {
        return {
            __await: e
        }
    }
    ,
    a(i.prototype),
    e(i.prototype, C, function() {
        return this
    }),
    p.AsyncIterator = i,
    p.async = function(e, n, r, s, o) {
        void 0 === o && (o = Promise);
        var a = new i(t(e, n, r, s),o);
        return p.isGeneratorFunction(n) ? a : a.next().then(function(e) {
            return e.done ? e.value : a.next()
        })
    }
    ,
    a(S),
    e(S, w, "Generator"),
    e(S, M, function() {
        return this
    }),
    e(S, "toString", function() {
        return "[object Generator]"
    }),
    p.keys = function(e) {
        var t = Object(e)
          , n = [];
        for (var r in t)
            n.push(r);
        return n.reverse(),
        function s() {
            for (; n.length; ) {
                var e = n.pop();
                if (e in t)
                    return s.value = e,
                    s.done = !1,
                    s
            }
            return s.done = !0,
            s
        }
    }
    ,
    p.values = g,
    h.prototype = {
        constructor: h,
        reset: function(e) {
            if (this.prev = 0,
            this.next = 0,
            this.sent = this._sent = void 0,
            this.done = !1,
            this.delegate = null,
            this.method = "next",
            this.arg = void 0,
            this.tryEntries.forEach(l),
            !e)
                for (var t in this)
                    "t" === t.charAt(0) && v.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
        },
        stop: function() {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type)
                throw e.arg;
            return this.rval
        },
        dispatchException: function(e) {
            function t(t, r) {
                return o.type = "throw",
                o.arg = e,
                n.next = t,
                r && (n.method = "next",
                n.arg = void 0),
                !!r
            }
            if (this.done)
                throw e;
            for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                var s = this.tryEntries[r]
                  , o = s.completion;
                if ("root" === s.tryLoc)
                    return t("end");
                if (s.tryLoc <= this.prev) {
                    var a = v.call(s, "catchLoc")
                      , i = v.call(s, "finallyLoc");
                    if (a && i) {
                        if (this.prev < s.catchLoc)
                            return t(s.catchLoc, !0);
                        if (this.prev < s.finallyLoc)
                            return t(s.finallyLoc)
                    } else if (a) {
                        if (this.prev < s.catchLoc)
                            return t(s.catchLoc, !0)
                    } else {
                        if (!i)
                            throw new Error("try statement without catch or finally");
                        if (this.prev < s.finallyLoc)
                            return t(s.finallyLoc)
                    }
                }
            }
        },
        abrupt: function(e, t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && v.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var s = r;
                    break
                }
            }
            s && ("break" === e || "continue" === e) && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
            var o = s ? s.completion : {};
            return o.type = e,
            o.arg = t,
            s ? (this.method = "next",
            this.next = s.finallyLoc,
            I) : this.complete(o)
        },
        complete: function(e, t) {
            if ("throw" === e.type)
                throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg,
            this.method = "return",
            this.next = "end") : "normal" === e.type && t && (this.next = t),
            I
        },
        finish: function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc),
                    l(n),
                    I
            }
        },
        "catch": function(e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                        var s = r.arg;
                        l(n)
                    }
                    return s
                }
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function(e, t, n) {
            return this.delegate = {
                iterator: g(e),
                resultName: t,
                nextLoc: n
            },
            "next" === this.method && (this.arg = void 0),
            I
        }
    },
    p
}
function _toConsumableArray(e) {
    return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(e, t) {
    if (e) {
        if ("string" == typeof e)
            return _arrayLikeToArray(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0
    }
}
function _iterableToArray(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
        return Array.from(e)
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e))
        return _arrayLikeToArray(e)
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
        r[n] = e[n];
    return r
}
function asyncGeneratorStep(e, t, n, r, s, o, a) {
    try {
        var i = e[o](a)
          , c = i.value
    } catch (u) {
        return void n(u)
    }
    i.done ? t(c) : Promise.resolve(c).then(r, s)
}
function _asyncToGenerator(e) {
    return function() {
        var t = this
          , n = arguments;
        return new Promise(function(r, s) {
            function o(e) {
                asyncGeneratorStep(i, r, s, o, a, "next", e)
            }
            function a(e) {
                asyncGeneratorStep(i, r, s, o, a, "throw", e)
            }
            var i = e.apply(t, n);
            o(void 0)
        }
        )
    }
}
function closePreviewImg() {
    $("#preview-image").css("display", "none"),
    $("#input_image_mess").val("")
}
function sendImgMess() {
    var e = new FormData($("#send_image_form")[0]);
    $.ajax({
        url: window.location.origin + "/api/chat/upload-img",
        type: "post",
        processData: !1,
        contentType: !1,
        data: e,
        success: function(e) {
            closePreviewImg(),
            chatbox.sendImage(e),
            preventMultiImage = !1
        },
        error: function(e) {
            500 == e.status ? alert("Lỗi khi upload ảnh") : "imageType" == e.responseJSON.error ? alert("Định dạng ảnh không hợp lệ") : alert("Lỗi dung lượng ảnh vượt quá giới hạn cho phép 8 MB"),
            preventMultiImage = !1
        }
    })
}
function sendFileMess() {
    var e = new FormData($("#send_file_form")[0]);
    $.ajax({
        url: window.location.origin + "/api/chat/upload-file",
        type: "post",
        processData: !1,
        contentType: !1,
        data: e,
        success: function(e) {
            chatbox.sendFile(e)
        },
        error: function(e) {
            500 == e.status || 422 == e.status ? alert("Lỗi khi upload file") : 413 == e.status ? alert("Lỗi dung lượng file vượt quá giới hạn cho phép 8 MB") : "fileType" == e.responseJSON.error ? alert("Định dạng file không hợp lệ") : alert("Lỗi dung lượng file vượt quá giới hạn cho phép 8 MB")
        }
    })
}
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
    }
});
var preventMultiImage = !1
  , chatbox = new Vue({
    el: "#chat-box",
    data: function() {
        return {
            url: window.location.origin,
            listConversation: [],
            title: document.title,
            socket: null,
            listMessages: [],
            user: null,
            mess: "",
            previewImg: !1,
            loadMoreState: !0,
            loading: !1,
            countMess: "undefined" == typeof countMess ? 0 : countMess,
            userId: null,
            endOfConversation: !1,
            showConversationList: !1,
            curConv: null,
            people: [],
            showFullPin: !1,
            pinMessages: [],
            rootMessage: null,
            searchKey: "",
            notReadFilter: !1,
            typeChatFilter: "all",
            searchTimeout: null,
            oldListCon: [],
            settingOpen: !1,
            groupName: "",
            isEditGroupName: !1,
            searchMsgKey: "",
            listSearchMsg: [],
            endOfSearchMsg: !1,
            hasNextMsg: !1,
            isTag: !1,
            tagName: null,
            tagSelectedIndex: 0,
            tagData: [],
            setTimeoutMsg: null,
            searchMembers: [],
            searchMembersPage: 0,
            endOfSearchmember: !1,
            searchMemberKey: "",
            searchMembersChat: [],
            searchMembersChatPage: 0,
            endOfSearchmemberChat: !1,
            searchMemberChatKey: "",
            oldConv: null,
            currentMemberSwitch: null,
            conversationGroups: [],
            switchConvId: null,
            histories: [],
            notSeenMsgId: null,
            tagMsgId: null,
            testerSenderId: null,
            loadingConversation: !1,
            focusConversationId: null,
            chatMembers: [],
            chatMembetsPage: 0,
            admins: [],
            adminSearchKey: "",
            currentEditMessage: null,
            preventSpam: !1,
            markUnreadCons: []
        }
    },
    computed: {
        testers: function() {
            return this.people.filter(function(e) {
                return e.is_tester
            })
        },
        members: function() {
            return this.people.filter(function(e) {
                return !e.is_tester
            })
        },
        tagMembers: function() {
            var e = this;
            return null === e.tagName ? [] : "" == e.tagName ? [{
                name: "all",
                id: -1
            }].concat(this.people) : [{
                name: "all",
                id: -1
            }].concat(this.people).filter(function(t) {
                return t.name && t.name.toLowerCase().includes(e.tagName.toLowerCase())
            })
        },
        adminFilter: function() {
            var e = this;
            return this.adminSearchKey ? this.admins.filter(function(t) {
                return t.name && t.email && (t.name.toLowerCase().includes(e.adminSearchKey.toLowerCase()) || t.email.toLowerCase().includes(e.adminSearchKey.toLowerCase()))
            }) : this.admins
        }
    },
    watch: {
        searchKey: function(e) {
            var t = this;
            t.searchTimeout && clearTimeout(t.searchTimeout),
            t.searchTimeout = setTimeout(function() {
                "" == e ? t.oldListCon.length > 0 && (t.listConversation = t.oldListCon,
                t.endOfConversation = (t.listConversation.length - 1) % 10 != 0,
                t.oldListCon = []) : (t.endOfConversation = !1,
                0 == t.oldListCon.length && (t.oldListCon = t.listConversation),
                t.listConversation = [],
                t.loadMoreConversation())
            }, 500)
        },
        notReadFilter: function() {
            var e = this;
            e.searchTimeout && clearTimeout(e.searchTimeout),
            e.searchTimeout = setTimeout(function() {
                e.listConversation = [],
                e.endOfConversation = !1,
                e.loadMoreConversation()
            }, 500)
        },
        typeChatFilter: function() {
            var e = this;
            e.searchTimeout && clearTimeout(e.searchTimeout),
            e.searchTimeout = setTimeout(function() {
                e.listConversation = [],
                e.endOfConversation = !1,
                e.loadMoreConversation()
            }, 500)
        },
        searchMsgKey: function(e) {
            var t = this;
            t.searchTimeout && clearTimeout(t.searchTimeout),
            t.searchTimeout = setTimeout(function() {
                t.endOfSearchMsg = !1,
                t.listSearchMsg = [],
                "" != e && t.searchMsg()
            }, 500)
        },
        searchMemberKey: function() {
            var e = this;
            e.searchTimeout && clearTimeout(e.searchTimeout),
            e.searchTimeout = setTimeout(function() {
                e.endOfSearchmember = !1,
                e.searchMembersPage = 0,
                e.searchMembers = [],
                e.searchMember()
            }, 500)
        },
        searchMemberChatKey: function() {
            var e = this;
            e.searchTimeout && clearTimeout(e.searchTimeout),
            e.searchTimeout = setTimeout(function() {
                e.endOfSearchmemberChat = !1,
                e.searchMembersChatPage = 0,
                e.searchMembersChat = [],
                e.searchMemberChat()
            }, 500)
        },
        tagMembers: function() {
            this.tagSelectedIndex = 0
        }
    },
    methods: {
        moveCursor: function(e, t) {
            var n = document.createRange()
              , r = window.getSelection();
            n.setStart(e, t),
            n.collapse(!0),
            r.removeAllRanges(),
            r.addRange(n)
        },
        changeTextInput: function() {
            var e = this
              , t = $("#mess-input").text();
            null != this.setTimeoutMsg && clearTimeout(this.setTimeoutMsg),
            this.setTimeoutMsg = setTimeout(function() {
                var n = t.lastIndexOf("@");
                if (!e.curConv.is_group || n == -1)
                    return e.tagName = null,
                    void (e.isTag = !1);
                var r = t.substring(n + 1);
                return e.tagData.find(function(e) {
                    return e.text == r
                }) ? (e.tagName = null,
                void (e.isTag = !1)) : (e.tagName = r,
                void (e.isTag = !0))
            }, 100)
        },
        onKeyDown: function(e) {
            return "ArrowUp" === e.key ? (this.upHandler(),
            !0) : "ArrowDown" === e.key ? (this.downHandler(),
            !0) : "Enter" === e.key && (this.enterHandler(),
            !0)
        },
        upHandler: function() {
            this.tagSelectedIndex = (this.tagSelectedIndex + this.tagMembers.length - 1) % this.tagMembers.length
        },
        downHandler: function() {
            this.tagSelectedIndex = (this.tagSelectedIndex + 1) % this.tagMembers.length
        },
        enterHandler: function() {
            0 !== this.tagMembers.length && this.applyTagMemberName(this.tagMembers[this.tagSelectedIndex])
        },
        randomString: function() {
            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10, t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = n.length, s = 0; s < e; s++)
                t += n.charAt(Math.floor(Math.random() * r));
            return t
        },
        applyTagMemberName: function(e) {
            var t = this
              , n = document.getElementById("mess-input").innerHTML.lastIndexOf("@")
              , r = this.randomString(8);
            document.getElementById("mess-input").innerHTML = document.getElementById("mess-input").innerHTML.substring(0, n) + "<span id='".concat(r, "'>@").concat(e.name, "</span>&nbsp"),
            this.isTag = !1,
            this.tagName = null,
            this.tagData.push({
                text: e.name,
                user_id: e.id
            }),
            setTimeout(function() {
                var e = document.getElementById("mess-input").childNodes;
                e.length >= 2 && e[e.length - 2].scrollIntoView();
                for (var n = null, s = 0; s < e.length; s++)
                    e[s].id == r && (n = s + 1);
                t.moveCursor(e[n], 1)
            }, 0)
        },
        hideChatbox: function() {
            $("#chat-box").css("display", "none")
        },
        initChat: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e, t;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (e = this,
                            !(e.listConversation.length > 0)) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return");
                        case 3:
                            return n.next = 5,
                            e.loadMoreConversation();
                        case 5:
                            if (!e.focusConversationId) {
                                n.next = 17;
                                break
                            }
                            if (t = e.listConversation.find(function(t) {
                                return t.id == e.focusConversationId
                            })) {
                                n.next = 13;
                                break
                            }
                            return n.next = 10,
                            $.post(window.location.origin + "/api/chat/get-focus-conversation", {
                                id: e.focusConversationId
                            });
                        case 10:
                            if (t = n.sent,
                            t.last_message) {
                                t.last_message.created_at = e.formatTime(t.last_message.created_at);
                                try {
                                    t.last_message.content = JSON.parse(t.last_message.content)
                                } catch (r) {
                                    console.log("error parse in load more conversation", r)
                                }
                            }
                            t && t.id && (e.listConversation = [t].concat(_toConsumableArray(e.listConversation)));
                        case 13:
                            t && t.id ? e.selectConversation(t) : e.selectConversation(e.listConversation[0]),
                            e.focusConversationId = null,
                            n.next = 18;
                            break;
                        case 17:
                            e.selectConversation(e.listConversation[0]);
                        case 18:
                            1 == e.listConversation.length ? (e.showConversationList = !1,
                            $("#chat-box").css("display", "flex")) : (e.showConversationList = !0,
                            $("#chat-box").css("display", "flex"),
                            $("#chat-box").css("width", "780px"));
                        case 19:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        searchMsg: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e, t, r, s, o, a;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (t = this,
                            !t.endOfSearchMsg) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return");
                        case 3:
                            return r = t.listSearchMsg.length > 0 ? t.listSearchMsg[t.listSearchMsg.length - 1].id : null,
                            n.next = 6,
                            $.post(window.location.origin + "/api/chat/search-msg", {
                                lastId: r,
                                cId: t.curConv.id,
                                key: t.searchMsgKey
                            });
                        case 6:
                            for (s = n.sent,
                            s.length < 20 && (t.endOfSearchMsg = !0),
                            o = 0; o < s.length; o++) {
                                a = t.people.find(function(e) {
                                    return e.id == s[o].sender_id
                                }),
                                s[o].member = a;
                                try {
                                    s[o].content = JSON.parse(s[o].content)
                                } catch (i) {
                                    console.log("error parse in search msg", i)
                                }
                            }
                            (e = t.listSearchMsg).push.apply(e, _toConsumableArray(s));
                        case 10:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        loadMoreConversation: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e, t, r;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (e = this,
                            !e.endOfConversation && !e.loadingConversation) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return");
                        case 3:
                            return e.loadingConversation = !0,
                            n.next = 6,
                            $.post(window.location.origin + "/api/chat/get-conversations", {
                                userId: e.userId,
                                ids: e.listConversation.map(function(e) {
                                    return e.id
                                }),
                                key: e.searchKey,
                                notReadFilter: e.notReadFilter,
                                typeChatFilter: e.typeChatFilter
                            });
                        case 6:
                            for (t = n.sent,
                            t && t.length < 10 && (e.endOfConversation = !0),
                            r = 0; r < t.length; r++)
                                if (t[r].last_message) {
                                    t[r].last_message.created_at = e.formatTime(t[r].last_message.created_at);
                                    try {
                                        t[r].last_message.content = JSON.parse(t[r].last_message.content)
                                    } catch (s) {
                                        console.log("error parse in load more conversation", s)
                                    }
                                }
                            return e.listConversation = [].concat(_toConsumableArray(e.listConversation), _toConsumableArray(t)),
                            e.loadingConversation = !1,
                            n.abrupt("return", t);
                        case 12:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        formatTime: function(e) {
            var t = moment()
              , n = moment(e);
            return 0 == t.diff(e, "days") ? n.format("HH:mm") : n.year() == t.year() ? n.format("DD-MM HH:mm") : n.format("DD-MM-YY HH:mm")
        },
        changeFullPinState: function() {
            this.showFullPin = !this.showFullPin
        },
        selectConversationById: function(e) {
            this.focusConversationId = e
        },
        selectConversation: function(e) {
            if (!this.curConv || this.curConv.id != e.id) {
                this.removeListeners(),
                this.curConv = e,
                this.listMessages = [],
                this.pinMessages = [],
                this.people = [],
                this.showFullPin = !1,
                this.settingOpen = !1,
                this.isEditGroupName = !1,
                this.rootMessage = null,
                this.searchMsgKey = "",
                this.listSearchMsg = [],
                this.endOfSearchMsg = !1,
                this.searchMembers = [],
                this.endOfSearchmember = !1,
                this.searchMembersPage = 0,
                this.searchMemberKey = "",
                this.notSeenMsgId = null,
                this.tagMsgId = null,
                this.loading = !1,
                this.loadMoreState = !0,
                this.testerSenderId = null,
                this.loadMoreMsg(),
                $("#mess-input").trigger("focus");
                var t = this;
                t.listConversation.find(function(t) {
                    return t.id == e.id
                }) || t.listConversation.unshift(e),
                setTimeout(function() {
                    $("#chat-screen").on("scroll", function() {
                        $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight && t.listMessages.length > 0 && t.loadNextMsg()
                    });
                    var e = document.getElementById("input_image_mess")
                      , n = document.getElementById("input_file_mess");
                    window.addEventListener("paste", function(t) {
                        if (t.clipboardData.files.length > 0) {
                            if ("image/png" == t.clipboardData.files[0].type) {
                                if (preventMultiImage)
                                    return;
                                preventMultiImage = !0,
                                e.files = t.clipboardData.files,
                                sendImgMess()
                            } else
                                n.files = t.clipboardData.files,
                                sendFileMess();
                            t.preventDefault()
                        }
                    })
                }, 500)
            }
        },
        backChat: function() {
            this.removeListeners(),
            this.oldConv ? (this.selectConversation(this.oldConv),
            this.oldConv = null) : this.curConv = null
        },
        removeListeners: function() {
            var e = this;
            e.curConv && (e.socket.removeAllListeners("sent_enc_" + e.curConv.id + "_" + e.curConv.user_id),
            e.socket.removeAllListeners("group_message_received_enc_" + e.curConv.id),
            e.socket.removeAllListeners("received_enc_" + e.curConv.id + "_" + e.curConv.user_id),
            e.socket.removeAllListeners("received_" + e.curConv.id + "_" + e.curConv.user_id),
            e.socket.removeAllListeners("unsend_msg_enc_" + e.curConv.id),
            e.socket.removeAllListeners("pin_msg_enc_" + e.curConv.id),
            e.socket.removeAllListeners("unpin_msg_enc_" + e.curConv.id),
            e.socket.removeAllListeners("group_message_readed" + e.curConv.id),
            e.socket.removeAllListeners("edit_msg_" + e.curConv.id))
        },
        checkUnreadMessage: function() {
            var e = this;
            $.post(window.location.origin + "/api/chat/check-unread-message", {
                id: e.userId
            }, function(t) {
                t && e.initChat()
            })
        },
        markRead: function() {
            var e = this;
            e.countMess = 0,
            $.post(window.location.origin + "/api/chat/mark-read-conversation", {
                id: e.curConv.id
            }, function(t) {
                !e.curConv.is_group && e.curConv.friend_id && "undefined" != typeof notiCount && (notiCount.countUnreadMess -= t)
            })
        },
        loadMoreMsg: function() {
            var e = this
              , t = e.listMessages.length > 0 ? e.listMessages[0].id : null;
            e.loading = !0;
            var n = 0 == e.listMessages.length
              , r = {
                lastId: t,
                cId: e.curConv.id,
                isGroup: e.curConv.is_group
            };
            setTimeout(function() {
                $.post(window.location.origin + "/api/chat/load-more-messages", r, function(r) {
                    if (!(r.messages.length > 0 && r.messages[0].conversation_id != e.curConv.id)) {
                        if (r.notSeenMsgId && (e.notSeenMsgId = r.notSeenMsgId),
                        r.tagMsgId && (e.tagMsgId = r.tagMsgId),
                        e.curConv.is_group && null == t && r.pinMessages) {
                            var s = r.pinMessages.map(function(e) {
                                try {
                                    e.content = JSON.parse(e.content)
                                } catch (t) {
                                    console.log("error JSON.parse message from load", t)
                                }
                                return e
                            });
                            e.pinMessages = s
                        }
                        if (r.messages.length < 20 && (e.loadMoreState = !1),
                        r.people && (e.people = r.people),
                        r.messages.length > 0) {
                            var o, a = r.messages;
                            a.reverse(),
                            a.map(function(t) {
                                return e.handleMessage(t),
                                t
                            }),
                            (o = e.listMessages).unshift.apply(o, _toConsumableArray(a)),
                            e.loading = !1
                        }
                        n && (e.goToBottom(),
                        e.listen()),
                        e.markRead(),
                        setTimeout(function() {
                            new EmojiPicker,
                            $("#mess-input").trigger("focus")
                        }, 100)
                    }
                })
            }, 600)
        },
        goToNotSeenMsg: function() {
            this.notSeenMsgId && (this.getListFocusMessages(this.notSeenMsgId),
            this.notSeenMsgId = null)
        },
        goToTagMsg: function() {
            this.tagMsgId && (this.getListFocusMessages(this.tagMsgId),
            this.tagMsgId = null)
        },
        loadNextMsg: function() {
            var e = this;
            if (0 !== e.listMessages.length && e.hasNextMsg !== !1) {
                var t = {
                    newestId: e.listMessages[e.listMessages.length - 1].id,
                    cId: e.curConv.id,
                    isGroup: e.curConv.is_group
                };
                $.post(window.location.origin + "/api/chat/load-next-messages", t, function(t) {
                    var n, r = t;
                    r.length < 20 && (e.hasNextMsg = !1),
                    r.map(function(t) {
                        return e.handleMessage(t),
                        t
                    }),
                    (n = e.listMessages).push.apply(n, _toConsumableArray(r))
                })
            }
        },
        changePinState: function(e) {
            this.pinMessages = this.pinMessages.map(function(t, n) {
                return n == e && (t.showFull = !t.showFull),
                t
            })
        },
        renderContent: function(e) {
            var t = e.content;
            if (e.mention_data) {
                var n = JSON.parse(e.mention_data);
                if (n && n.length > 0)
                    for (var r = 0; r < n.length; r++)
                        t = t.replace("@".concat(n[r].text), '<span style="display:contents;font-weight:bold">@'.concat(n[r].text, "</span>"))
            }
            var s = t;
            s = s.replace("<", "&#60;"),
            s = s.replace(">", "&#62;"),
            s = t.replace(new RegExp("\r?\n","g"), "<br />");
            var o = /(\(.*?)?\b((?:https?|ftp|file):\/\/[-a-z0-9+&@#\/%?=~_()|!:,.;]*[-a-z0-9+&@#\/%=~_()|])/gi;
            return s.replace(o, function(e, t, n) {
                var r = "";
                t = t || "";
                for (var s = /\(/g; s.exec(t); ) {
                    var o;
                    (o = /(.*)(\.\).*)/.exec(n) || /(.*)(\).*)/.exec(n)) && (n = o[1],
                    r = o[2] + r)
                }
                return t + "<a class='msg-link' href='" + n + "' target='_blank'>" + n + "</a>" + r
            })
        },
        readMess: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e, t, r;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (e = this,
                            e.curConv.is_group ? e.listMessages.length > 0 && e.listMessages[e.listMessages.length - 1].id && e.socket.emit("readed", {
                                conversationId: e.curConv.id,
                                isGroupChat: !0,
                                messageId: e.listMessages[e.listMessages.length - 1].id
                            }) : e.socket.emit("readed", {
                                conversationId: e.curConv.id,
                                receiverId: 0
                            }),
                            e.curConv.is_group || null != e.curConv.friend_id || "undefined" != typeof countAdminMess && countAdminMess > 0 && (notiCount.countUnreadMess -= countAdminMess,
                            countAdminMess = 0),
                            !(e.listMessages.length > 0)) {
                                n.next = 10;
                                break
                            }
                            if ("none" == $("#chat-box").css("display") || !e.curConv.is_group || !e.listMessages[e.listMessages.length - 1].id) {
                                n.next = 9;
                                break
                            }
                            return n.next = 7,
                            $.post(window.location.origin + "/api/chat/update-read-msg", {
                                cId: e.curConv.id,
                                msgId: e.listMessages[e.listMessages.length - 1].id
                            });
                        case 7:
                            t = n.sent,
                            t && t > 0 && (notiCount.countUnreadMess -= t);
                        case 9:
                            e.listConversation = e.listConversation.map(function(t) {
                                return t.id == e.curConv.id && e.listMessages.length > 0 && (t.last_message || (t.last_message = {}),
                                t.last_message.status = 1,
                                t.last_message.id = e.listMessages[e.listMessages.length - 1].id,
                                t.last_message_id = e.listMessages[e.listMessages.length - 1].id),
                                t
                            });
                        case 10:
                            "undefined" != typeof notiCount && (r = notiCount.countUnreadMess + notiCount.countNotification,
                            r > 0 ? document.title = "(" + r + ") " + e.title : document.title = e.title);
                        case 11:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        readAll: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                return _regeneratorRuntime().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!this.preventSpam) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return this.preventSpam = !0,
                            e.next = 5,
                            $.post(window.location.origin + "/api/chat/read-all");
                        case 5:
                            this.preventSpam = !1,
                            this.listConversation = this.listConversation.map(function(e) {
                                return e.last_message && (e.is_group ? e.last_message_id = e.last_message.id : e.last_message.status = !0),
                                e
                            });
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        copyLink: function() {
            var e = window.location.origin + "?chat=" + this.curConv.id;
            navigator.clipboard.writeText(e),
            this.settingOpen = !1
        },
        updateLastMsgWhenSend: function(e) {
            var t = this;
            t.listConversation = t.listConversation.map(function(t) {
                return t.id == e.conversationId && (t.last_message || (t.last_message = {}),
                t.last_message.content = e.content,
                t.last_message.created_at = moment().format("HH:mm"),
                t.last_message.type = e.type,
                t.last_message.status = 1,
                t.last_message.id = -1,
                t.last_message_id = -1),
                t
            })
        },
        sendMess: function() {
            ga("send", "event", "send_message_category", "send_message", "send_message_label");
            var e = this;
            if (!(e.tagMembers.length > 0) && 0 !== $("#mess-input").text().trim().length && $("#mess-input").text()) {
                if (this.currentEditMessage)
                    return e.socket.emit("edit_msg", this.encrypt({
                        id: this.currentEditMessage.id,
                        content: $("#mess-input").text()
                    })),
                    $("#mess-input").text(""),
                    void (this.currentEditMessage = null);
                var t = null;
                e.testerSenderId && (t = e.testers.find(function(t) {
                    return t.id == e.testerSenderId
                }));
                var n = {
                    senderId: e.testerSenderId ? e.testerSenderId : e.curConv.user_id,
                    senderType: "user",
                    senderName: t ? t.name : e.curConv.user_name,
                    senderAvatar: t ? t.avatar : e.curConv.user_avatar,
                    conversationId: e.curConv.id,
                    receiverId: e.curConv.fr_id ? e.curConv.fr_id : 0,
                    content: $("#mess-input").text().trim(),
                    type: "text",
                    sentId: Date.now() + "_" + e.curConv.user_id + "_" + Math.floor(1e4 * Math.random() + 10),
                    mentionData: e.tagData.length > 0 ? e.tagData : null
                };
                if (e.rootMessage && (n.rootMessage = e.rootMessage),
                e.curConv.is_group) {
                    var r = e.encrypt(n);
                    e.socket.emit("group_message_send_enc", r)
                } else if (chatUser < 0)
                    e.socket.emit("send", n);
                else {
                    var r = e.encrypt(n);
                    e.socket.emit("send_enc", r)
                }
                var s = {
                    content: $("#mess-input").text().trim(),
                    sender_id: e.testerSenderId ? e.testerSenderId : e.curConv.user_id,
                    user_avatar: t ? t.avatar : e.curConv.user_avatar,
                    sender_type: "user",
                    type: "text",
                    sentId: n.sentId,
                    rootMessage: e.rootMessage,
                    message_id: e.rootMessage ? e.rootMessage.id : null,
                    mentionData: e.tagData.length > 0 ? e.tagData : null
                };
                e.listMessages.push(s),
                $("#mess-input").text(""),
                e.tagData = [],
                e.rootMessage = null,
                e.socket.emit("stopTyping", {
                    conversationId: e.curConv.id,
                    senderId: e.curConv.user_id
                }),
                e.goToBottom(),
                this.updateLastMsgWhenSend(n)
            }
        },
        editMsg: function(e) {
            $("#mess-input").text(e.content),
            this.currentEditMessage = e
        },
        goToRootMsg: function(e) {
            var t = document.getElementById("item_container_" + e);
            return t ? ($("#chat-screen").animate({
                scrollTop: t.offsetTop - t.offsetHeight - 10 - $("#pin_container").height()
            }, 350),
            $(".content-ani").removeClass("content-ani"),
            void $("#content_" + e).addClass("content-ani")) : void this.getListFocusMessages(e)
        },
        getListFocusMessages: function(e) {
            var t = this;
            t.loading = !0;
            var n = {
                focusId: e,
                cId: t.curConv.id,
                isGroup: t.curConv.is_group
            };
            t.listMessages = [],
            $.post(window.location.origin + "/api/chat/load-focus-messages", n, function(n) {
                var r;
                t.loadMoreState = n.hasPrevious;
                var s = n.messages;
                s.map(function(e) {
                    return t.handleMessage(e),
                    e
                }),
                (r = t.listMessages).unshift.apply(r, _toConsumableArray(s)),
                t.loading = !1,
                setTimeout(function() {
                    t.goToRootMsg(e),
                    t.hasNextMsg = !0
                }, 200)
            })
        },
        focusMessage: function(e) {
            $("#search_msg").modal("toggle"),
            this.settingOpen = !1,
            this.listMessages.find(function(t) {
                return t.id == e
            }) ? this.goToRootMsg(e) : this.getListFocusMessages(e)
        },
        handleMessage: function(e) {
            try {
                if (e.content = JSON.parse(e.content),
                e.rootMessage && (e.rootMessage.content = JSON.parse(e.rootMessage.content)),
                e.sender_id != this.curConv.user_id) {
                    var t = this.people.find(function(t) {
                        return t.id == e.sender_id
                    });
                    e.user_avatar = t ? t.avatar : null,
                    e.user_name = t ? t.name : "Ẩn danh",
                    e.is_tester = !!t && t.is_tester
                }
            } catch (n) {
                console.log("error JSON.parse message from load", n)
            }
            return e
        },
        sendTemplateMess: function(e) {
            var t = this
              , n = t.listConversation.find(function(e) {
                return !e.is_group
            });
            if (n && e) {
                var r = {
                    senderId: n.user_id,
                    senderType: "user",
                    senderName: n.user_name,
                    conversationId: n.id,
                    receiverId: 0,
                    content: e,
                    type: "text"
                }
                  , s = t.encrypt(r);
                t.socket.emit("send_enc", s);
                var o = {
                    content: e,
                    sender_id: n.user_id,
                    sender_type: "user",
                    type: "text"
                };
                t.listMessages.push(o),
                $("#mess-input").text(""),
                t.socket.emit("stopTyping", {
                    conversationId: n.id,
                    senderId: n.user_id
                }),
                t.goToBottom(),
                this.updateLastMsgWhenSend(r)
            }
        },
        sendImage: function(e) {
            var t = this
              , n = null;
            t.testerSenderId && (n = t.testers.find(function(e) {
                return e.id == t.testerSenderId
            }));
            var r = {
                senderId: t.testerSenderId ? t.testerSenderId : t.curConv.user_id,
                senderType: "user",
                senderName: n ? n.name : t.curConv.user_name,
                senderAvatar: n ? n.avatar : t.curConv.user_avatar,
                conversationId: t.curConv.id,
                receiverId: t.curConv.fr_id ? t.curConv.fr_id : 0,
                content: e,
                type: "image",
                sentId: Date.now() + "_" + t.curConv.user_id + "_" + Math.floor(1e4 * Math.random() + 10)
            };
            if (t.rootMessage && (r.rootMessage = t.rootMessage),
            t.curConv.is_group) {
                var s = t.encrypt(r);
                t.socket.emit("group_message_send_enc", s)
            } else if (chatUser > 0) {
                var s = t.encrypt(r);
                t.socket.emit("send_enc", s)
            } else
                t.socket.emit("send", r);
            var o = {
                content: e,
                sender_id: t.testerSenderId ? t.testerSenderId : t.curConv.user_id,
                user_avatar: n ? n.avatar : t.curConv.user_avatar,
                sender_type: "user",
                type: "image",
                sentId: r.sentId,
                rootMessage: t.rootMessage,
                message_id: t.rootMessage ? t.rootMessage.id : null
            };
            t.listMessages.push(o),
            t.rootMessage = null,
            t.socket.emit("stopTyping", {
                conversationId: t.curConv.id,
                senderId: t.curConv.user_id
            }),
            t.goToBottom(),
            this.updateLastMsgWhenSend(r)
        },
        sendFile: function(e) {
            var t = this
              , n = null;
            t.testerSenderId && (n = t.testers.find(function(e) {
                return e.id == t.testerSenderId
            }));
            var r = {
                senderId: t.testerSenderId ? t.testerSenderId : t.curConv.user_id,
                senderType: "user",
                senderName: n ? n.name : t.curConv.user_name,
                senderAvatar: n ? n.avatar : t.curConv.user_avatar,
                conversationId: t.curConv.id,
                receiverId: t.curConv.fr_id ? t.curConv.fr_id : 0,
                content: e,
                type: "file",
                sentId: Date.now() + "_" + t.curConv.user_id + "_" + Math.floor(1e4 * Math.random() + 10)
            };
            if (t.rootMessage && (r.rootMessage = t.rootMessage),
            t.curConv.is_group) {
                var s = t.encrypt(r);
                t.socket.emit("group_message_send_enc", s)
            } else if (chatUser > 0) {
                var s = t.encrypt(r);
                t.socket.emit("send_enc", s)
            } else
                t.socket.emit("send", r);
            var o = {
                content: e,
                sender_id: t.testerSenderId ? t.testerSenderId : t.curConv.user_id,
                user_avatar: n ? n.avatar : t.curConv.user_avatar,
                sender_type: "user",
                type: "file",
                sentId: r.sentId,
                rootMessage: t.rootMessage,
                message_id: t.rootMessage ? t.rootMessage.id : null
            };
            t.listMessages.push(o),
            t.rootMessage = null,
            t.socket.emit("stopTyping", {
                conversationId: t.curConv.id,
                senderId: t.curConv.user_id
            }),
            t.goToBottom(),
            this.updateLastMsgWhenSend(r)
        },
        encrypt: function(e) {
            return emsg(JSON.stringify(e))
        },
        decrypt: function(e) {
            return JSON.parse(dmsg(e))
        },
        listen: function() {
            var e = this;
            e.socket.on("sent_enc_" + e.curConv.id + "_" + e.curConv.user_id, function(t) {
                var t = e.decrypt(t);
                e.listMessages = e.listMessages.map(function(e) {
                    return e.sentId == t.sentId && (e = Object.assign(e, t)),
                    e
                })
            }),
            e.socket.on("like_message" + e.curConv.id, function(t) {
                e.listMessages = e.listMessages.map(function(e) {
                    return e.id == t.id && (e.reaction_data = t.reaction_data),
                    e
                })
            }),
            e.socket.on("edit_msg_" + e.curConv.id, function(t) {
                var t = e.decrypt(t);
                e.listMessages = e.listMessages.map(function(e) {
                    return e.id == t.id && (e.content = t.content),
                    e
                }),
                e.listConversation = e.listConversation.map(function(e) {
                    return e.last_message && e.last_message.id == t.id && (e.last_message.content = t.content),
                    e
                })
            }),
            e.curConv.is_group ? (e.socket.on("group_message_received_enc_" + e.curConv.id, function(t) {
                var t = e.decrypt(t);
                if (t && t.id) {
                    var n = {
                        content: t.content,
                        sender_id: t.senderId,
                        conversation_id: t.conversation_id,
                        created_at: t.created_at,
                        user_avatar: t.avatar,
                        user_name: t.name,
                        mention_data: t.mention_data,
                        sender_type: "user",
                        type: t.type,
                        id: t.id,
                        message_id: t.message_id,
                        rootMessage: t.rootMessage
                    };
                    e.listMessages.push(n),
                    $("#chat-screen") && $("#chat-screen")[0] && $("#chat-screen").scrollTop() + $("#chat-screen").innerHeight() >= $("#chat-screen")[0].scrollHeight - 25 && e.goToBottom()
                }
            }),
            e.socket.on("pin_msg_enc_" + e.curConv.id, function(t) {
                var t = e.decrypt(t);
                e.pinMessages.unshift(t),
                e.listMessages = e.listMessages.map(function(e) {
                    return e.id == t.id && (e.pinned_at = t.pinned_at),
                    e
                })
            }),
            e.socket.on("unpin_msg_enc_" + e.curConv.id, function(t) {
                var t = e.decrypt(t);
                e.pinMessages = e.pinMessages.filter(function(e) {
                    return e.id != t.id
                }),
                e.listMessages = e.listMessages.map(function(e) {
                    return e.id == t.id && (e.pinned_at = null),
                    e
                })
            }),
            e.socket.on("group_message_readed" + e.curConv.id, function(t) {
                e.listMessages = e.listMessages.map(function(e) {
                    return e.seenUsers ? e.seenUsers = e.seenUsers.filter(function(e) {
                        return e != t.userId
                    }) : e.seenUsers = [],
                    e.id != t.messageId || e.seenUsers.includes(t.userId) || e.seenUsers.push(t.userId),
                    e
                })
            })) : chatUser > 0 ? e.socket.on("received_enc_" + e.curConv.id + "_" + e.curConv.user_id, function(t) {
                t = e.decrypt(t),
                t && t.content && e.receiveAdminMsg(t)
            }) : e.socket.on("received_" + e.curConv.id + "_" + e.curConv.user_id, function(t) {
                e.receiveAdminMsg(t)
            }),
            e.socket.on("unsend_msg_enc_" + e.curConv.id, function(t) {
                var t = e.decrypt(t);
                e.listMessages = e.listMessages.filter(function(e) {
                    return e.id != t.id
                }),
                e.listMessages = e.listMessages.map(function(e) {
                    return e.rootMessage && e.rootMessage.id == t.id && (e.rootMessage = null),
                    e
                })
            })
        },
        receiveAdminMsg: function(e) {
            var t = this
              , n = {
                content: e.content,
                sender_id: e.senderId,
                conversation_id: e.conversation_id,
                created_at: e.created_at,
                sender_type: e.senderType,
                user_avatar: e.senderAvatar,
                user_name: e.senderName,
                type: e.type,
                rootMessage: e.rootMessage
            };
            e.id && (n.id = e.id),
            t.listMessages.push(n),
            $("#chat-screen") && $("#chat-screen")[0] && $("#chat-screen").scrollTop() + $("#chat-screen").innerHeight() >= $("#chat-screen")[0].scrollHeight - 25 && t.goToBottom()
        },
        keyTyping: function() {
            var e = this;
            "" != $("#mess-input").text() ? e.socket.emit("typing", {
                conversationId: e.curConv.id,
                senderId: e.curConv.user_id
            }) : e.socket.emit("stopTyping", {
                conversationId: e.curConv.id,
                senderId: e.curConv.user_id
            })
        },
        previewImage: function() {
            function e(e) {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n(e) {
                var t, r, s;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (t = e.target,
                            0 != t.files.length) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return");
                        case 3:
                            if (!(t.files.length > 12)) {
                                n.next = 6;
                                break
                            }
                            return alert("Bạn chỉ có thể gửi tối đa 12 ảnh một lần"),
                            n.abrupt("return");
                        case 6:
                            $("#image-list").html(""),
                            $("#preview-image").css("display", "flex"),
                            r = 0;
                        case 9:
                            if (!(r < t.files.length)) {
                                n.next = 17;
                                break
                            }
                            return s = new FileReader,
                            s.onload = function() {
                                var e = _asyncToGenerator(_regeneratorRuntime().mark(function t(e) {
                                    return _regeneratorRuntime().wrap(function(t) {
                                        for (; ; )
                                            switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2,
                                                $("#image-list").append('<img src="' + e.target.result + '"/>');
                                            case 2:
                                            case "end":
                                                return t.stop()
                                            }
                                    }, t)
                                }));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }(),
                            n.next = 14,
                            s.readAsDataURL(t.files[r]);
                        case 14:
                            r++,
                            n.next = 9;
                            break;
                        case 17:
                        case "end":
                            return n.stop()
                        }
                }, n)
            }));
            return e
        }(),
        prettyDate: function(e) {
            var t = new Date(e)
              , n = new Date;
            return t.getFullYear() == n.getFullYear() ? t.getMonth() == n.getMonth() && t.getDate() == n.getDate() ? moment(e).format("HH:mm") : moment(e).format("HH:mm DD/MM") : moment(e).format("DD/MM/YYYY")
        },
        goToBottom: function() {
            var e = this;
            setTimeout(function() {
                var t = document.getElementById("chat-screen");
                t && (t.scrollTop = t.scrollHeight,
                e.readMess())
            }, 100)
        },
        receiveNewMsg: function(e) {
            if (!this.curConv || e.senderId != this.curConv.user_id) {
                var t = this;
                t.listConversation = t.listConversation.map(function(t) {
                    return t.id == e.conversationId && (t.last_message || (t.last_message = {}),
                    t.last_message.sender_id = parseInt(e.senderId),
                    t.last_message.content = e.content,
                    t.last_message.created_at = moment().format("HH:mm"),
                    t.last_message.type = e.type,
                    t.last_message.status = 0,
                    t.last_message.id = 0),
                    t
                })
            }
        },
        likeMessage: function(e) {
            e.liked || (this.listMessages = this.listMessages.map(function(t) {
                return t.id == e.id && (t.liked = !t.liked),
                t
            }),
            this.socket.emit("like_message", {
                message: e,
                userId: this.curConv.user_id
            }))
        },
        showListLiked: function(e) {
            for (var t = JSON.parse(e.reaction_data), n = "", r = 0; r < t.length; r++) {
                var s = this.people.find(function(e) {
                    return e.id == t[r]
                });
                s && (n += "".concat(r > 0 ? "<br>" : "").concat(s.name))
            }
            return n
        },
        pinMsg: function(e) {
            $("#chat-item-" + e.id).removeClass("open"),
            e = this.encrypt(e),
            this.socket.emit("pin_msg_enc", e)
        },
        unPinMsg: function(e) {
            e = this.encrypt(e),
            this.socket.emit("unpin_msg_enc", e)
        },
        unsendMsg: function(e) {
            $("#chat-item-" + e.id).removeClass("open"),
            e = this.encrypt(e),
            this.socket.emit("unsend_msg_enc", e)
        },
        startReply: function(e) {
            var t = this.people.find(function(t) {
                return t.id == e.sender_id
            });
            e.senderName = t ? t.name : null,
            this.rootMessage = e,
            $("#mess-input").trigger("focus")
        },
        clearRootMessage: function() {
            this.rootMessage = null
        },
        editGroupName: function() {
            this.groupName = this.curConv.title,
            this.isEditGroupName = !0,
            $("#edit_group_name").trigger("focus")
        },
        saveGroupName: function() {
            var e = this;
            $.post(window.location.origin + "/api/chat/save-group-name", {
                cId: e.curConv.id,
                groupName: e.groupName
            }),
            e.settingOpen = !1,
            e.isEditGroupName = !1,
            e.curConv.title = e.groupName
        },
        changeGroupAvatar: function() {
            $("#input_group_avatar").trigger("click")
        },
        saveGroupAvatar: function() {
            var e = this
              , t = new FormData($("#form_group_avatar")[0]);
            t.append("cId", e.curConv.id),
            $.ajax({
                url: window.location.origin + "/api/chat/change-group-avatar",
                type: "post",
                processData: !1,
                contentType: !1,
                data: t,
                success: function(t) {
                    e.settingOpen = !1,
                    e.curConv.avatar = t
                },
                error: function(e) {
                    500 == e.status ? alert("Lỗi khi upload ảnh") : "imageType" == e.responseJSON.error ? alert("Định dạng ảnh không hợp lệ") : "imagesize" == e.responseJSON.error && alert("Lỗi dung lượng ảnh vượt quá giới hạn cho phép 8 MB")
                }
            })
        },
        showPeople: function() {
            $("#show_people").modal("toggle")
        },
        showHistory: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e, t;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return e = this,
                            $("#show_history").modal("toggle"),
                            n.next = 4,
                            $.get(window.location.origin + "/api/chat/get-member-histories", {
                                cId: e.curConv.id
                            });
                        case 4:
                            t = n.sent,
                            e.histories = t;
                        case 6:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        markAsUnread: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e, t;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return e = this,
                            n.next = 3,
                            $.post(window.location.origin + "/api/chat/mark-as-unread", {
                                cId: e.curConv.id,
                                isGroup: e.curConv.is_group
                            });
                        case 3:
                            t = n.sent,
                            e.curConv.is_group ? e.listConversation = e.listConversation.map(function(n) {
                                return n.id == e.curConv.id && e.listMessages.length > 0 && (n.last_message_id = t > 0 ? t : null),
                                n
                            }) : e.listConversation = e.listConversation.map(function(t) {
                                return t.id == e.curConv.id && e.listMessages.length > 0 && (t.last_message || (t.last_message = {}),
                                t.last_message.status = 0),
                                t
                            }),
                            "undefined" == typeof notiCount || this.markUnreadCons.includes(e.curConv.id) || (notiCount.countUnreadMess += 1,
                            this.markUnreadCons.push(e.curConv.id));
                        case 6:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        searchMember: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e;
                return _regeneratorRuntime().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (!this.endOfSearchmember && this.curConv && this.curConv.group_id) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return this.searchMembersPage++,
                            t.next = 5,
                            $.post(window.location.origin + "/api/chat/search-member", {
                                page: this.searchMembersPage,
                                group_id: this.curConv.group_id,
                                textSearch: this.searchMemberKey
                            });
                        case 5:
                            e = t.sent,
                            e.data.items.length < 20 && (this.endOfSearchmember = !0),
                            this.searchMembers = [].concat(_toConsumableArray(this.searchMembers), _toConsumableArray(e.data.items));
                        case 8:
                        case "end":
                            return t.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        searchAdmin: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e;
                return _regeneratorRuntime().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            $.post(window.location.origin + "/api/chat/search-admin");
                        case 2:
                            e = t.sent,
                            this.admins = e;
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        searchMemberChat: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e;
                return _regeneratorRuntime().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            if (!this.endOfSearchmemberChat) {
                                t.next = 2;
                                break
                            }
                            return t.abrupt("return");
                        case 2:
                            return this.searchMembersChatPage++,
                            t.next = 5,
                            $.post(window.location.origin + "/api/chat/search-member-chat", {
                                page: this.searchMembersChatPage,
                                textSearch: this.searchMemberChatKey
                            });
                        case 5:
                            e = t.sent,
                            e.data.length < 20 && (this.endOfSearchmemberChat = !0),
                            this.searchMembersChat = [].concat(_toConsumableArray(this.searchMembersChat), _toConsumableArray(e.data));
                        case 8:
                        case "end":
                            return t.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        openAddPeopleModal: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                return _regeneratorRuntime().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.searchMember();
                        case 2:
                            $("#add_people").modal("toggle");
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        showAdmin: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                return _regeneratorRuntime().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (0 !== this.admins.length) {
                                e.next = 3;
                                break
                            }
                            return e.next = 3,
                            this.searchAdmin();
                        case 3:
                            $("#admin_select").modal("toggle");
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        login: function(e) {
            return _asyncToGenerator(_regeneratorRuntime().mark(function t() {
                return _regeneratorRuntime().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            $.post(window.location.origin + "/api/chat/login", {
                                id: e
                            });
                        case 2:
                            location.reload();
                        case 3:
                        case "end":
                            return t.stop()
                        }
                }, t)
            }))()
        },
        toggleJoinable: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e;
                return _regeneratorRuntime().wrap(function(t) {
                    for (; ; )
                        switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2,
                            $.post(window.location.origin + "/api/chat/toggle-joinable/" + this.curConv.id);
                        case 2:
                            e = t.sent,
                            this.curConv.is_joinable = e.is_joinable;
                        case 4:
                        case "end":
                            return t.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        openAddChatModal: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                return _regeneratorRuntime().wrap(function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.searchMemberChat();
                        case 2:
                            $("#add_chat").modal("toggle");
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        addMember: function(e) {
            $.post(window.location.origin + "/api/chat/add-member-to-group-chat", {
                cId: this.curConv.id,
                userId: e.user_id
            }),
            this.people.push({
                id: e.user_id,
                avatar: e.avatar,
                name: e.name,
                is_tester: e.is_tester
            })
        },
        removeMember: function(e) {
            $.post(window.location.origin + "/api/chat/remove-member-to-group-chat", {
                cId: this.curConv.id,
                userId: e.id
            }),
            this.people = this.people.filter(function(t) {
                return t.id != e.id
            })
        },
        openSearchMsgModal: function() {
            $("#search_msg").modal("toggle")
        },
        clearSearchConversation: function() {
            this.searchKey = "",
            this.oldListCon.length > 0 && (this.listConversation = this.oldListCon,
            this.endOfConversation = (this.listConversation.length - 1) % 10 != 0,
            this.oldListCon = [])
        },
        goToChatUser: function() {
            function e(e) {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n(e) {
                var t;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            return $("#show_people").modal("hide"),
                            $("#add_people").modal("hide"),
                            $("#add_chat").modal("hide"),
                            e.user_id ? (e.sender_id = e.user_id,
                            e.user_avatar = e.avatar,
                            e.user_name = e.name) : e.sender_id || (e.sender_id = e.id,
                            e.user_avatar = e.avatar,
                            e.user_name = e.name),
                            n.next = 6,
                            $.post(window.location.origin + "/api/chat/init-chat-personal", {
                                userId: e.sender_id
                            });
                        case 6:
                            t = n.sent,
                            this.oldConv = this.curConv,
                            this.selectConversation({
                                id: t.id,
                                conversation_id: t.id,
                                fr_avatar: e.user_avatar,
                                fr_name: e.user_name,
                                fr_id: e.sender_id,
                                avatar: t.user_avatar,
                                user_avatar: t.user_avatar,
                                user_name: t.user_name,
                                user_id: t.user_id,
                                last_message: {},
                                last_message_id: null,
                                friend_id: t.friend_id,
                                is_group: 0
                            });
                        case 9:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        openSwitchGroupModal: function() {
            function e(e) {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n(e) {
                var t;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (this.currentMemberSwitch = e,
                            this.curConv.group_id) {
                                n.next = 3;
                                break
                            }
                            return n.abrupt("return");
                        case 3:
                            return n.next = 5,
                            $.post(window.location.origin + "/api/chat/get-conversation-list-in-group", {
                                groupId: this.curConv.group_id
                            });
                        case 5:
                            t = n.sent,
                            this.switchConvId = this.curConv.id,
                            this.conversationGroups = t,
                            $("#switch_group").modal("toggle");
                        case 9:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }(),
        switchConvGroup: function() {
            function e() {
                return t.apply(this, arguments)
            }
            var t = _asyncToGenerator(_regeneratorRuntime().mark(function n() {
                var e, t = this;
                return _regeneratorRuntime().wrap(function(n) {
                    for (; ; )
                        switch (n.prev = n.next) {
                        case 0:
                            if (this.switchConvId != this.curConv) {
                                n.next = 2;
                                break
                            }
                            return n.abrupt("return");
                        case 2:
                            if (this.switchConvId && this.currentMemberSwitch) {
                                n.next = 4;
                                break
                            }
                            return n.abrupt("return");
                        case 4:
                            return n.next = 6,
                            $.post(window.location.origin + "/api/chat/switch-conversation-group", {
                                userId: this.currentMemberSwitch.id,
                                switchConvId: this.switchConvId,
                                currentConvId: this.curConv.id
                            });
                        case 6:
                            e = n.sent,
                            200 == e.code && (this.people = this.people.filter(function(e) {
                                return e.id != t.currentMemberSwitch.id
                            }),
                            $("#switch_group").modal("hide"));
                        case 8:
                        case "end":
                            return n.stop()
                        }
                }, n, this)
            }));
            return e
        }()
    },
    mounted: function() {
        var e = this;
        e.userId = chatUser,
        "undefined" != typeof at && $.ajaxSetup({
            headers: {
                token: at
            }
        }),
        socket ? e.socket = socket : socketServer && (e.socket = io.connect(socketServer)),
        e.checkUnreadMessage()
    }
});
$(document).keydown(function(e) {
    27 == e.keyCode && document.activeElement == document.getElementById("mess-input") && chatbox.hideChatbox()
}),
$(document).ready(function() {
    $("#con-container").on("scroll", function() {
        $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 1 && chatbox.listConversation.length > 0 && chatbox.loadMoreConversation()
    }),
    $("#search_msg_modal_body").on("scroll", function() {
        $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight && chatbox.listSearchMsg.length > 0 && chatbox.searchMsg()
    }),
    $("#search_member_modal_body").on("scroll", function() {
        $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight && chatbox.searchMembers.length > 0 && chatbox.searchMember()
    }),
    $("#search_member_chat_modal_body").on("scroll", function() {
        $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight && chatbox.searchMembersChat.length > 0 && chatbox.searchMemberChat()
    }),
    $("#mess-input").focusout(function() {
        var e = $(this);
        e.text().replace(" ", "").length || e.empty()
    }),
    $("html").on("dragover", function(e) {
        e.preventDefault(),
        e.stopPropagation()
    }),
    $("html").on("drop", function(e) {
        e.preventDefault(),
        e.stopPropagation()
    }),
    $(".chat-box").on("dragenter", function(e) {
        e.stopPropagation(),
        e.preventDefault()
    }),
    $(".chat-box").on("dragover", function(e) {
        e.stopPropagation(),
        e.preventDefault()
    }),
    $(".chat-box").on("drop", function(e) {
        e.stopPropagation(),
        e.preventDefault();
        var t = e.originalEvent.dataTransfer.files
          , n = document.getElementById("input_image_mess")
          , r = document.getElementById("input_file_mess");
        if (t.length > 0)
            if ("image/png" == t[0].type) {
                if (preventMultiImage)
                    return;
                preventMultiImage = !0,
                n.files = t,
                sendImgMess()
            } else
                r.files = t,
                sendFileMess()
    });
    var e = new URL(document.location).searchParams;
    e && e.get("chat") && (navigator.userAgentData.mobile ? window.location.href = "dungmori://app/conversation/" + e.get("chat") : (showChatbox(),
    chatbox.selectConversationById(e.get("chat"))))
});
