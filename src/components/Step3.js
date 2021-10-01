import React from 'react'

export default function Step3() {
  return (
    <div className="app-inner-wrap">
      <div className="headText">
        <span>STEP 3</span>
        <p>Add your Generated Signature to Gmail</p>
      </div>
      <div className="signature-wrap gmail-steps">
        <ol>
          <li>
            Open Gmail in a web browser. Sign in. Open Gmail settings
            under the gear icon in the right top corner in Gmail.
          </li>
          <li>
            Scroll down to the signature field. If you have something
            inside signature field then delete everything inside of
            it; including spaces. Paste in the signature that was
            copied in the STEP 2 (right click into the input field and
            click "Paste" or use keyboard shortcut "Ctrl + V" after
            you clicked into the input field). Make sure the radio
            button that is selected in the Signature section of the
            settings page is NOT the one beside label "No signature".
          </li>
          <li>
            You should see your signature now in the signature field,
            check it over to make sure there are no typos. DO NOT
            attempt to fix ANYTHING inside Gmail. If there are any
            typos then go back to STEP 1 and regenerate the signature.
            Once you made sure everything is good, scroll down to the
            very bottom of the page and save your changes via the Save
            button.
          </li>
        </ol>
      </div>
    </div>
  )
}
