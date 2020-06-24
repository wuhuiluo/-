import { Matrix } from "./matrix"
import { Fence } from "./fence"
class FenceGroup {

    spu
    spuList = []

    constructor(spu) {
        this.spu = spu
        this.skuList = spu.sku_list
    }

    initFences() {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        let currentJ = -1
        matrix.forEach((element, i, j) => {
            // 开启一个新列，需要创建一个新的fence
            if (currentJ !== j) {
                currentJ = j
                fences[currentJ] = this._createFence(element)
            }
            fences[currentJ].pushValueTitle(element.value)
        })
        console.log(fences)
    }

    initFences1() {
        const matrix = this._createMatrix(this.skuList)
        const fences = []
        const AT = matrix.transpose()
        console.log(AT)
        AT.forEach(r => {
            const fence = new Fence(r)
            fence.init()
            fences.push(fence)
        })
        console.log(fences)
    }

    _createFence() {
        const fence = new Fence()
        return fence
    }

    _createMatrix(skuList) {
        const m = []
        skuList.forEach(sku => {
            m.push(sku.specs)
        })
        return new Matrix(m)
    }
}

export {
    FenceGroup
}