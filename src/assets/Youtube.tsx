import React from 'react';

interface IYoutubeProps extends React.SVGProps<SVGSVGElement> {}

export const YoutubeIcon: React.FC<IYoutubeProps> = ({ ...props }) => {
    return (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <rect width="24" height="24" transform="translate(0.710022)" fill="white" />
            <g clipPath="url(#clip0_1_144)">
                <g clipPath="url(#clip1_1_144)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.71002 6C6.05317 6 4.71002 7.34 4.71002 9V15C4.71002 16.66 6.05317 18 7.71002 18H17.71C19.3669 18 20.71 16.66 20.71 15V9C20.71 7.34 19.3669 6 17.71 6H7.71002ZM10.71 9L16.71 12L10.71 15V9Z" fill="#525252" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_1_144">
                    <rect width="24" height="24" fill="white" transform="translate(0.710022)" />
                </clipPath>
                <clipPath id="clip1_1_144">
                    <rect width="30" height="2400" fill="white" transform="translate(-2.28998 -1383)" />
                </clipPath>
            </defs>
        </svg>
    );
};
