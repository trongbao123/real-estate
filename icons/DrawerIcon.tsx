import * as React from "react"
const DrawerIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <path
            stroke="#1868B3"
            strokeLinecap="round"
            strokeWidth={3}
            d="M17.25 6H3m24 9H3m24 9H3"
        />
    </svg>
)
export default DrawerIcon
