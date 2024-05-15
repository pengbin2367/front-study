class Promise {

    constructor(executor) {
        this.PromiseState = "pengding";
        this.PromiseResult = null;
        this.callbacks = [];

        const _this = this;

        function resolve(data) {
            // make sure just do once
            if (_this.PromiseState !== "pengding") return;
            // update object state
            _this.PromiseState = "fulfilled";
            // set object res
            _this.PromiseResult = data;
            // make sure callback do work at last
            _this.callbacks.forEach(item => {
                setTimeout(() => {
                    item.onResolved(data)
                })
            });
        }

        function reject(data) {
            if (_this.PromiseState !== "pengding") return;
            _this.PromiseState = "rejected";
            _this.PromiseResult = data;
            _this.callbacks.forEach(item => {
                setTimeout(() => {
                    item.OnRejected(data)
                })
            });
        }

        // throw
        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onResolved, OnRejected) {
        const _this = this;
        if (typeof OnRejected !== "function") {
            OnRejected = reason => {
                throw reason;
            };
        }
        if (typeof onResolved !== "function") {
            onResolved = value => value;
        }
        return new Promise((resolve, reject) => {
            function callback(type) {
                try {
                    let result = type(_this.PromiseResult);
                    if (result instanceof Promise) {
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r);
                        });
                    } else {
                        resolve(result);
                    }
                } catch (e) {
                    reject(e);
                }
            }

            if (this.PromiseState === "fulfilled") {
                callback(onResolved);
            }
            if (this.PromiseState === "rejected") {
                callback(OnRejected);
            }
            if (this.PromiseState === "pengding") {
                this.callbacks.push({
                    onResolved: function () {
                        setTimeout(() => {
                            callback(onResolved)
                        });
                    },
                    OnRejected: function () {
                        setTimeout(() => {
                            callback(OnRejected)
                        });
                    }
                });
            }
        });
    }
    catch(onRejected) {
        return this.then(undefined, onRejected);
    }
    static resolve(value) {
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                });
            } else {
                resolve(value);
            }
        })
    }
    static reject(reason) {
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }
    static all(promises) {
        return new Promise((resolve, reject) => {
            let count = 0;
            let arr = [];
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    count++;
                    arr[i] = v;
                    if (count === promises.length) {
                        resolve(arr);
                    }
                }, r => {
                    reject(r);
                })
            }
        })
    }
    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            }
        })
    }
}