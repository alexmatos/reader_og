const PageRepository = {
    pageList: [],

    save(page) {
        if(this.exists(page.url))
            return false

        this.pageList.push(page)
        return true;
    },

    exists(url) {
        return this.pageList.some(page => page.url === url)
    }
}

module.exports = PageRepository