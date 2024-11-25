'use client'

import React, { useState } from 'react'
import { UrlForm } from './form'
import { UrlList } from './list'

export const UrlContainer = () => {

  const [refreshKey, setRefreshKey] = useState(0);

  const handleUrlShort = () => {
    setRefreshKey((prev) => prev + 1);
  }

  return (
    <div>
        <UrlForm handleUrlShort={handleUrlShort}/>
        <UrlList key={refreshKey}/>
    </div>
  )
}
