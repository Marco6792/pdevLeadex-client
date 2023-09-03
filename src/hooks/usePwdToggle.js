import React, { useState } from "react";
import {faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const usePwdToggle = () => {
   
    const [visible, setVisible] = useState(false)

    const Icon = (
      <FontAwesomeIcon icon={visible ? faEyeSlash : faEye}/>
    )

    const InputType = visible ? "text" : "password"

    return [InputType, Icon]
}

export default usePwdToggle