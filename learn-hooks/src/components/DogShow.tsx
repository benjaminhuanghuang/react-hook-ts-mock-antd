import React from 'react'

import withLoader from '../hoc/withLoader'


export interface ShowRestul {
  message: string;
  status:string

}
/*
/ interface of withLoader is 
  interface ILoaderState {
    data: any;
    isLoading: boolean;
  }
  HOC的缺点是 被wrapped的组件需要之道HOC的数据结构
*/
const DogShow : React.FC<{data:ShowRestul}> = ({data:{status, message}})=>{
  return (
    <div>
      <h2>{status}</h2>
      <img style={{width:400}} src= {message}></img>
    </div>
  )
}

export default DogShow;
