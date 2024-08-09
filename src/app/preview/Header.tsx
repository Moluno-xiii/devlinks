import React from 'react'
import { Button } from '@nextui-org/react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className="flex z-20 w-full flex-row items-center justify-center gap-x-2 sticky top-0 md:rounded-md p-4 md:justify-between bg-white">
    <Button className="w-40" variant="bordered" color="primary">
      Back to Editor
    </Button>
    <Button className="w-40" color="primary" variant="shadow">
      Share Link
    </Button>
  </header>
  )
}

export default Header