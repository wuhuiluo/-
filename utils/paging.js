import { Http } from '../utils/http'
class Paging {
    start
    count
    req
    url
    moreData = true
    accumulator = []
    locker = false

    constructor(req, count = 10, start = 0) {
        this.start = start
        this.count = count
        this.req = req
        this.url = req.url
    }

    async getMoreData() {
        if(!this.moreData) {
            return 
        }
        if (!this._getLocker()) {
            return
        }
        const data = await this._actualGetData()
        this._releaseLocker()
        return data
    }

    async _actualGetData() {
        const req = this._getCurrentReq()
        let paging = await Http.request(req)
        if (!paging) {
            return null
        }
        if (paging.total === 0) {
            return {
                empty: true,
                items: [], //当前请求回的数据
                moreData: flase,
                accumulator: []
            }
        }
        this._accumulate(paging.items)
        this.moreData = Paging._moreData(paging.total_page, paging.page)
        if(this.moreData) {
            this.start += this.count
        }
        return {
            empty: false,
            items: paging.items,
            moreData: this.moreData,
            accumulator: this.accumulator
        }
    }

    _accumulate(items) {
        this.accumulator = this.accumulator.concat(items)
    }

    static _moreData(totalPage, pageNum) {
        return pageNum < totalPage - 1
    }

    _getCurrentReq() {
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`
        // ?不存在的话返回-1
        if (url.includes('?')) {
            url += '&' + params
        } else {
            url += '?' + params
        }
        this.req.url = url
        return this.req
    }

    _getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
        return true
    }

    _releaseLocker() {
        this.locker = false
    }
}

export {
    Paging
}