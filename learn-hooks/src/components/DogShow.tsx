import React from 'react'

import withLoader from '../hoc/withLoader'


interface ShowRestul {
  message: string;
  status:string

}
/*
/ interface of withLoader is 
  interface ILoaderState {
    data: any;
    isLoading: boolean;
  }
*/
const DogShow : React.FC<{data:ShowRestul}> = ({data:{status, message}})=>{
  return (
    <div>
      <h2>{status}</h2>
      <img style={{width:400}} src= {message}></img>
    </div>
  )
}

const HOCDogShow = withLoader(DogShow, "https://dog.ceo/api/breeds/image/random")

export default HOCDogShow;
