import { Matrix } from "./matrix"

class FenceGroup {
    
    spu
    spuList = []

    constructor(spu) {
        this.spu = spu
        this.spuList = spu.spu_list
    }

    initFences() {
        const matrix = this._createMatrix(this.spuList)
        matrix.forEach(element, i, j => {
            
        })
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