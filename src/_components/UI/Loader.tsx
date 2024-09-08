import { Spinner } from '@nextui-org/react'
import React from 'react'

type Props = {}

const Loader = (props: Props) => {
  return (
    <div className='h-dvh flex justify-center items-center'>
        <Spinner size='lg'/>
    </div>
  )
}

export default Loader