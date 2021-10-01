import React from 'react'

export default function Step1And2Heading({ finalImage }) {
  return (
    <div className="headText">
      {!finalImage && (
        <>
          <span>STEP 1</span>
          <p>Generate your Email Signature</p>
        </>
      )}
      {finalImage && (
        <>
          <span>STEP 2</span>
          <p>Copy Generated Email Signature</p>
        </>
      )}
    </div>
  )
}
