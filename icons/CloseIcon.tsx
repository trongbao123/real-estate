import * as React from "react"
const CloseIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#1868B3"
            strokeLinecap="round"
            strokeWidth={2}
            d="M19 5 5 19m14 0L5 5"
        />
    </svg>
)
export default CloseIcon
