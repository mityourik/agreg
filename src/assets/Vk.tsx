import React from 'react';

interface IVkProps extends React.SVGProps<SVGSVGElement> {}

export const VkIcon: React.FC<IVkProps> = ({ ...props }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <rect width="24" height="24" transform="translate(0.710022)" fill="white" />
            <g clipPath="url(#clip0_1_14)">
                <g clipPath="url(#clip1_1_14)">
                    <path d="M13.4246 17C7.95802 17 4.83994 13.25 4.71002 7H7.44831C7.53825 11.58 9.55702 13.5301 11.156 13.9301V7H13.7344V10.95C15.3134 10.78 16.9723 8.98 17.532 7H20.1104C19.6806 9.44 17.8818 11.24 16.6026 11.98C17.8818 12.59 19.9305 14.16 20.71 17H17.8718C17.2622 15.1 15.7431 13.6301 13.7344 13.4301V17H13.4246Z" fill="#525252" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_14">
                    <rect width="24" height="24" fill="white" transform="translate(0.710022)" />
                </clipPath>
                <clipPath id="clip1_1_14">
                    <rect width="30" height="2400" fill="white" transform="translate(-2.28998 -1863)" />
                </clipPath>
            </defs>
        </svg>
    );
};
