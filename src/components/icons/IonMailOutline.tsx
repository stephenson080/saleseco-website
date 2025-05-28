// import { SVGProps } from 'react';

export function IonMailOutline(props: any) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
            {...props}
        >
            {/* Icon from IonIcons by Ben Sperry - https://github.com/ionic-team/ionicons/blob/main/LICENSE */}
            <rect
                width="416"
                height="320"
                x="48"
                y="96"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                rx="40"
                ry="40"
            ></rect>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="m112 160l144 112l144-112"
            ></path>
        </svg>
    );
}
export default IonMailOutline;
