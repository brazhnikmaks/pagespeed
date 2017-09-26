(function() {
    const settings = {
        getParamsName: ["order_id", "hash"],
        validPatterns: {
            email: new RegExp(".+@.+\\..+", "i")
        },
        serverErrorMsg: "Server Error :(",
        wrapperHeight: (function() {
            let contentHeight = document.querySelector(".content__data").clientHeight;
            let footerHeight = document.querySelector(".footer-content").clientHeight;
            return document.body.clientHeight + contentHeight + footerHeight + "px";
        })(),
        errorAttribute: "data-error",
        successAttribute: "data-success"
    };

    const ThxPageApp = {
        emailInput: document.forms[0].email,
        submitButton: document.querySelector(".submit-btn"),
        output: document.querySelector("output.email"),
        modal: document.querySelector(".modal"),
        backButton: document.querySelector(".backToLanding"),
        isValid: function(pattern, node) {
            let value = node.value;
            if ( pattern.test(value) ) {
                this.isSuccess(node, settings.successAttribute);
                this.output.textContent = value;
                return true;
            }
            else {
                this.isError(node, settings.errorAttribute);
                return false;
            }
        },
        isSuccess: function(node, attr) {
            node.setAttribute(attr, "true");
        },
        isError: function(node, errorAttr) {
            if (node.getAttribute(errorAttr)) {
                return true;
            }
            else {
                node.setAttribute(errorAttr, "true");
            }
        },
        isTyping: function(node, attrs) {
            attrs.forEach(function(attr) {
                if(node.getAttribute(attr)) {
                    node.removeAttribute(attr);
                }
            });
            return true;
        },
        backToLanding: function() {
            location.assign("/");
        },
        getData: function() {
            let data = "";
            data += this.locationHandler(settings.getParamsName);
            data += "&" + this.emailInput.name + "=" + encodeURIComponent(this.emailInput.value);
            return data;
        },
        showModal: function() {
            this.modal.style.height = settings.wrapperHeight;
            this.modal.classList.remove("hidden");
        },
        sendData: function(data, callback) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/land/success", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.onreadystatechange = function() {
                if( xhr.status === 200 && xhr.readyState === 4 ) {
                    let answer = JSON.parse(xhr.responseText);
                    if (answer.status && answer.status.length > 0 && answer.status.toLowerCase() === "ok") {
                        callback.call(ThxPageApp);
                    }
                    else {
                        let msg = answer.data || settings.serverErrorMsg;
                        ThxPageApp.makeErrorBlock(msg);
                    }
                }
            };
            xhr.send(data);
        },
        locationHandler: function(action, callback) {
            let url = location.search,
                tmp = tmp2 = [],
                param = {},
                result = "",
                get = url;
            if(get !== "") {
                tmp = get.substr(1).split("&");
                if ( !(action instanceof Array) ) {
                    for(let i = 0; i < tmp.length; i++) {
                        tmp2 = tmp[i].split("=");
                        if ( tmp2[0] === action && typeof action === "string" ) {
                            callback(tmp2[1]);
                            break;
                        }
                    }
                }
                else {
                    for(let i = 0; i < tmp.length; i++) {
                        tmp2 = tmp[i].split("=");
                        for ( let j = 0; j < action.length; j++ ) {
                            if ( action[j] === tmp2[0] ) param[tmp2[0]] = tmp2[1];
                        }
                    }
                }
                for (let key in param) result += "&" + key + "=" + encodeURIComponent(param[key]);
                return result.substr(1);
            }
            else return false;
        },
        makeErrorBlock: function(message) {
            const errBlockStyles = {
                    width: document.body.clientWidth + "px",
                    height: settings.wrapperHeight,
                    textAlign: "center",
                    position: "absolute",
                    top: "0",
                    backgroundColor: "rgba(255,255,255,.8)",
                    zIndex: "99999"
                },
                massageStyles = {
                    fontSize: "26px",
                    color: "#FF4C4C",
                    borderRadius: "20px",
                    border: "2px solid #FF4C4C",
                    padding: "10px 15px",
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translateX(-50%) translateY(-50%)",
                    fontWeight: "700",
                    backgroundColor: "rgba(255,76,76,.2)"
                },
                btnStyles = {
                    display: "block",
                    padding: "8px 20px",
                    color: "#FF4C4C",
                    borderRadius: "6px",
                    margin: "15px auto 0",
                    backgroundColor: "rgba(255,76,76,.2)",
                    border: "1px solid rgba(255,76,76,.8)",
                    cursor: "pointer",
                    fontWeight: "700",
                    transition: "background-color .4s"
                },
                errorBlock = document.createElement("DIV"),
                backBtn = document.createElement("BUTTON"),
                massageElement = document.createElement("H2");

            for(let key in errBlockStyles) errorBlock.style[key] = errBlockStyles[key];
            for(let key in massageStyles) massageElement.style[key] = massageStyles[key];
            for(let key in btnStyles) backBtn.style[key] = btnStyles[key];

            errorBlock.classList.add("js-error");
            backBtn.setAttribute("type", "button");
            backBtn.appendChild( document.createTextNode("Ok") );
            backBtn.addEventListener("mouseover", function() {
                this.style.backgroundColor = "rgba(255,76,76,.4)";
            });
            backBtn.addEventListener("mouseleave", function() {
                this.style.backgroundColor = "rgba(255,76,76,.2)";
            });
            backBtn.addEventListener("click", function() {
                document.body.removeChild( errorBlock );
            });
            massageElement.appendChild( document.createTextNode(message) );
            massageElement.appendChild(backBtn);
            errorBlock.appendChild(massageElement);
            document.body.appendChild( errorBlock );
        }
    };

    const pattern = settings.validPatterns.email;
    ThxPageApp.emailInput.addEventListener("blur", function() {
        if (ThxPageApp.isValid(pattern, ThxPageApp.emailInput)) {
            ThxPageApp.data = ThxPageApp.getData();
        }
        else {
            if (ThxPageApp.data && ThxPageApp.data.length) ThxPageApp.data = null;
            ThxPageApp.isError(this, settings.errorAttribute);
        }
    });
    const stateAttributes = [settings.errorAttribute, settings.successAttribute];
    ThxPageApp.emailInput.addEventListener("focus", function() {
        ThxPageApp.isTyping(this, stateAttributes);
    });
    ThxPageApp.submitButton.addEventListener("click", function(e) {
        e.preventDefault();
        if (ThxPageApp.isValid(pattern, ThxPageApp.emailInput)) {
            if (ThxPageApp.data) {
                ThxPageApp.sendData(ThxPageApp.data, ThxPageApp.showModal);
            }
        }
        else ThxPageApp.isError(ThxPageApp.emailInput, settings.errorAttribute);
    });
    ThxPageApp.backButton.addEventListener("click", ThxPageApp.backToLanding);
    ThxPageApp.locationHandler("email", function (data) {
        if (data) {
            ThxPageApp.emailInput.value = data;
            ThxPageApp.isValid(pattern, ThxPageApp.emailInput);
            ThxPageApp.data = ThxPageApp.getData();
        }
        else {
            return false;
        }
    });
})();
