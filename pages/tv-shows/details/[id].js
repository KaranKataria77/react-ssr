import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/router';
import CardDetail from '../../../src/components/CardDetail'
import { fetchShow } from "../../../lib/helper";

function Details({data}) {
  const router = useRouter()
  const [getResult, setGetResult] = useState()

  useEffect(() => {
    show()
  },[])

  const show = async () => {
    let showResult = await fetchShow(router.query.id)
    if(showResult && showResult?.length < 1){
      router.push("/error")
    }
    setGetResult(showResult)
  }

  try{
    return (
      <div><CardDetail data={getResult && getResult != undefined ? getResult : {}} /></div>
    )
  }catch(e){
    return null
  }
}

export default Details