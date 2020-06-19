import { Paging } from '../utils/paging';

class SpuPaging {

    static getLatestPaging() {
        return new Paging({
            url: `spu/latest`
        },5)
    }
    // 1. 一条数据没有 空
    // 2. 最后一页，还有没有更多数据
    // 3. 累加 
    // 4. 非分页数据 a.正在加载 loading b.空
    // 5. 上滑触底加载 避免用户重复发送请求
}

export {
    SpuPaging
}