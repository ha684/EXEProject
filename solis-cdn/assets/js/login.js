"use strict";
var myclient = new ClientJS
  , user = new Vue({
    el: "#login-form",
    data: {
        url: window.location.origin,
        currentBrowser: myclient.getBrowser(),
        currentOsName: myclient.getOS(),
        currentFingerprint: myclient.getFingerprint(),
        buttonState: !0,
        error: null,
        countWrongPass: 0
    },
    methods: {
        changeCaptchaLogin: function() {
            var n = "".concat(this.url, "/account/refresh-captcha?").concat(Date.now());
            $("#captcha_login_change").attr("src", n)
        },
        login: function() {
            if ($("#email").val() && $("#password").val()) {
                var n = this;
                n.buttonState = !1;
                var r = $("#login-form")
                  , t = r.serialize() + "&countWrongPass=" + n.countWrongPass;
                t += "&browser=" + n.currentBrowser + "&os=" + n.currentOsName + "&fingerprint=" + n.currentFingerprint,
                setTimeout(function() {
                    $.ajax({
                        url: window.location.origin + "/login",
                        type: "POST",
                        data: t,
                        error: function(r) {
                            n.buttonState = !0,
                            null != r.responseJSON.errors && (n.error = r.responseJSON.errors),
                            null != r.responseJSON.count_wrong_pass && (n.countWrongPass = r.responseJSON.count_wrong_pass),
                            n.changeCaptchaLogin()
                        },
                        success: function(n) {
                            location.reload()
                        }
                    })
                }, 1e3)
            }
        },
        hideError: function() {
            this.error = null
        }
    },
    mounted: function() {}
});
"use strict";
var myclient = new ClientJS
  , userIp = ""
  , user = new Vue({
    el: "#register-form",
    data: {
        buttonState: !0,
        error: null
    },
    methods: {
        register: function() {
            var e = this;
            e.buttonState = !1;
            var r = myclient.getBrowser()
              , t = myclient.getOS()
              , n = myclient.getFingerprint()
              , o = $("#register-form")
              , i = o.serialize();
            i += "&browser=" + r + "&os=" + t + "&fingerprint=" + n + "&userIp=" + userIp,
            console.log(i),
            setTimeout(function() {
                $.ajax({
                    url: window.location.origin + "/register",
                    type: "POST",
                    data: i,
                    error: function(r) {
                        e.buttonState = !0,
                        null != r.responseJSON.errors && (e.error = r.responseJSON.errors)
                    },
                    success: function(r) {
                        e.buttonState = !0,
                        location.reload()
                    }
                })
            }, 1e3)
        },
        hideError: function() {
            this.error = null
        }
    },
    mounted: function() {}
});
