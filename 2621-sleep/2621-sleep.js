/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        if(millis > 0 && millis <= 1000) {
            setTimeout(() => {return resolve();}, millis);
        }
        else {
            reject()
            return
        }
    });
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */