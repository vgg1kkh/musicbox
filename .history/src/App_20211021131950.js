import React, { memo } from 'react'
import HYAppHeader from '@/components/app-header'


export default memo(function App() {
  return (
    <div>
      <HYAppHeader />
      <h2>Content</h2>
      <h2>Footer</h2>

    </div>
  )
})

