import * as React from 'react'
import { orderBy, isEqual } from 'lodash-es'

import Order from './enum/Order'

type ContentType = string | React.ReactNode
type ContentsType = ContentType[][]

interface DataTableModelInterface {
  contents: ContentsType;

  search: (searchValue: string) => ContentsType;
  searchSort: (searchValue: string, index: number, order: Order) => ContentsType;
  equal: (contents: ContentsType) => boolean;
}

class DataTableModel implements DataTableModelInterface {
  contents: ContentsType

  public constructor(contents?: ContentsType) {
    this.contents = contents || []
  }

  public search(searchValue: string): ContentsType {
    if (!searchValue) {
      return this.contents
    }

    const contents = this.contents.filter(val => {
      let rst = false
      val.forEach(v => {
        if (typeof v === 'string' && v.includes(searchValue)) {
          rst = true
        }
      })
      return rst
    })
    return contents
  }

  public searchSort(searchValue: string, index: number, order: Order): ContentsType {
    const contents = this.search(searchValue)
    return orderBy(contents, [index], [Order.toString(order)])
  }

  public equal(contents: ContentType) {
    return isEqual(this.contents, contents)
  }
}

export { DataTableModel as default, DataTableModelInterface, ContentType, ContentsType }
