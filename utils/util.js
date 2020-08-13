let timeout = null
export default {

    copy(message) {
        let doc = document.createElement("input")
        doc.value = message
        document.body.appendChild(doc)
        doc.select()
        let status
        try {
            status = document.execCommand('copy')
        } catch (e) { }
        document.body.removeChild(doc)
        return status
    },
    /**
     * 判断移动端还是pc端
     */
    isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
    },
    /**
     * 函数防抖
     * @param {Function} fn 
     * @param {Number} wait 
     */
    debounce(fn, wait) {
        if (timeout !== null) clearTimeout(timeout)
        timeout = setTimeout(fn, wait)
    }

}