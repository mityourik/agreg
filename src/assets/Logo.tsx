import React from 'react';

interface ILogoProps extends React.SVGProps<SVGSVGElement> {}

export const LogoIcon: React.FC<ILogoProps> = ({ ...props }) => {
    return (
        <svg width="201" height="58" viewBox="0 0 201 58" fill="none" fillRule="evenodd" clipRule="evenodd" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0.5 57.5L0.5 0.500002L200.5 0.500002V57.5L0.5 57.5ZM114.915 33.8834L114.915 15.8161L140.117 15.8161C140.983 15.8161 141.857 15.8066 142.732 15.797H142.733C144.535 15.7771 146.348 15.7572 148.127 15.8207C151.284 15.9332 154.517 16.3679 157.31 17.155C159.699 17.8285 161.915 18.6815 163.74 19.7349C169.791 23.2252 171.364 28.2951 167.818 32.6111C166.803 33.8472 165.376 34.9636 163.675 35.9701C161.85 37.05 159.568 37.9439 157.115 38.6034C154.416 39.3289 151.353 39.7762 148.323 39.8844C147.059 39.9295 145.774 39.9157 144.494 39.902C143.879 39.8955 143.266 39.8889 142.657 39.8889L61.2853 39.8889C60.3467 39.8889 59.3951 39.9014 58.4386 39.9139C56.088 39.9446 53.7082 39.9757 51.4191 39.8235C46.5315 39.4985 42.0631 38.337 38.4269 36.6231C37.0533 35.9755 35.8982 35.1938 34.8778 34.3924C30.3963 30.8727 29.9553 26.2487 33.5691 22.4832C35.3441 20.6337 38.08 19.0298 41.3575 17.8694C44.3615 16.8057 47.9095 16.107 51.5167 15.8817C53.5541 15.7542 55.6529 15.7767 57.7315 15.7991H57.7317H57.7322C58.5303 15.8074 59.3255 15.8161 60.113 15.8161V22.6359C61.3607 22.1731 62.9104 21.9581 64.4112 21.8646C65.9475 21.7688 67.5106 21.8251 69.0024 22.0469C75.5313 23.0176 79.1065 26.8459 76.5628 30.1173C76.0112 30.8267 75.1948 31.4985 74.176 32.0512C70.717 33.9275 65.0595 34.4203 60.6015 33.259C58.5076 32.7136 56.8184 31.8321 55.6613 30.7789C54.2079 29.4559 54.2274 28.0192 54.2473 26.5573V26.5561C54.2497 26.3863 54.252 26.2161 54.252 26.0458V18.8188C52.2058 18.8195 50.0924 19.0546 48.1955 19.4499C45.5868 19.9935 43.2559 20.834 41.3742 21.9234C36.7728 24.587 35.6634 28.5843 38.7463 31.7968C39.6471 32.7353 40.8791 33.6143 42.3343 34.3395C44.9181 35.6272 48.273 36.4899 51.8098 36.7627C53.9431 36.9272 56.1293 36.9113 58.298 36.8955H58.2989C58.9383 36.8908 59.5762 36.8862 60.2108 36.8862L142.169 36.8862C142.418 36.8862 142.668 36.8864 142.918 36.8867H142.927C146.47 36.8905 149.973 36.8943 153.305 36.1519C155.34 35.6984 157.201 35.0501 158.775 34.2395C165.023 31.0216 165.647 25.7919 160.097 22.2287C158.7 21.3312 156.987 20.5846 155.063 20.0111C152.913 19.3705 150.49 19.0004 148.029 18.8784C146.514 18.8031 144.947 18.8259 143.394 18.8484C142.654 18.8591 141.918 18.8697 141.191 18.8697L120.775 18.8697V33.8834H114.915ZM80.433 19.8754C77.5206 18.6992 78.7127 16.1459 82.3856 15.8385C83.0202 15.7854 83.7189 15.8037 84.3391 15.8921C87.9878 16.4114 88.5728 19.0945 85.3155 20.0567C84.8681 20.1889 84.3615 20.292 83.8509 20.3304C83.1883 20.3801 82.4384 20.358 81.7989 20.2553C81.3091 20.1767 80.8369 20.0385 80.433 19.8754ZM80.2362 33.8834V21.8216H85.9998V33.8834H80.2362ZM93.3259 23.0882C95.1267 22.3619 97.1475 21.998 99.3828 21.8432C100.688 21.7527 102.118 21.8371 103.388 22.0063C104.79 22.1932 106.121 22.5233 107.295 22.963C112.494 24.9105 113.547 28.7639 109.833 31.4405C109.107 31.9646 108.213 32.42 107.197 32.7923C105.542 33.3995 103.628 33.741 101.629 33.8689C100.308 33.9534 98.9082 33.879 97.6244 33.7117C96.1807 33.5236 94.8273 33.1945 93.6188 32.742C87.4572 30.4336 87.3451 25.5006 93.3259 23.0882ZM140.899 33.8834V33.12C140.636 33.1769 140.38 33.2374 140.125 33.2978C139.612 33.4189 139.103 33.5392 138.554 33.6277C136.709 33.9249 134.677 33.9767 132.791 33.7601C130.554 33.5031 128.551 32.9468 126.93 32.1022C125.535 31.3755 124.524 30.4965 123.985 29.5066C123.504 28.6209 123.407 27.6641 123.732 26.7583C124.685 24.098 129.01 22.0865 134.158 21.8302C140.204 21.5292 146.652 24.134 146.662 27.4199C146.666 28.8562 146.665 30.2926 146.663 31.7289C146.663 32.4471 146.662 33.1653 146.662 33.8834H140.899ZM62.6529 25.3514C63.3631 25.1059 64.1573 24.9659 64.9973 24.8975C69.8976 24.4988 73.3724 27.531 70.4887 29.6084C70.0711 29.9091 69.5083 30.1848 68.9047 30.3812C68.2465 30.5954 67.5251 30.7443 66.7556 30.8074C64.9684 30.954 63.0869 30.6645 61.7825 30.0068C59.8135 29.014 59.5423 27.311 61.0938 26.1476C61.5261 25.8234 62.022 25.5694 62.6529 25.3514ZM97.3307 25.3378C98.0462 25.099 98.8393 24.9594 99.6757 24.897C104.502 24.5367 107.928 27.3901 105.298 29.5066C104.868 29.8525 104.246 30.1635 103.583 30.3871C102.918 30.6114 102.123 30.7616 101.336 30.8151C99.6957 30.9264 98.0254 30.7074 96.7449 30.1516C94.516 29.1837 94.0414 27.3881 95.7133 26.1476C96.1495 25.824 96.6921 25.5514 97.3307 25.3378ZM132.009 25.3378C132.646 25.1255 133.414 24.9687 134.158 24.8989C134.781 24.8405 135.492 24.8597 136.112 24.9136C136.869 24.9793 137.613 25.1216 138.262 25.3378C141.614 26.4579 141.707 29.1097 138.457 30.2985C137.843 30.5227 137.143 30.6934 136.406 30.7656C135.489 30.8553 134.473 30.883 133.572 30.7422C129.777 30.1491 128.184 27.7838 130.467 26.0967C130.878 25.7923 131.408 25.5387 132.009 25.3378ZM81.2403 50.4677H73.7908V49.9004L78.0561 47.9214C78.7544 47.5894 79.1315 47.3021 79.1873 47.0596L79.2124 46.8301C79.2124 46.5876 79.0365 46.3884 78.6846 46.2325C78.3382 46.0766 77.8801 45.9987 77.3103 45.9987C76.6288 45.9987 76.0785 46.1012 75.6595 46.3061C75.2461 46.5111 75.0394 46.7825 75.0394 47.1203H73.4892C73.4892 46.7969 73.6568 46.4981 73.992 46.2239C74.3271 45.9467 74.788 45.7302 75.3746 45.5743C75.9611 45.4184 76.6064 45.3404 77.3103 45.3404C78.355 45.3404 79.1901 45.4732 79.8158 45.7389C80.4471 46.0044 80.7625 46.3566 80.7625 46.7955C80.7625 47.3065 80.2124 47.8218 79.1119 48.3414L75.9444 49.8138H81.2403V50.4677ZM91.7901 47.9907C91.7901 48.7932 91.3996 49.4226 90.6168 49.8787C89.8349 50.332 88.7761 50.5586 87.4412 50.5586C86.1062 50.5586 85.045 50.3305 84.2567 49.8744C83.4692 49.4182 83.073 48.7918 83.0674 47.995V47.9084C83.0674 47.1116 83.458 46.4837 84.2399 46.0247C85.0282 45.5656 86.0894 45.3361 87.4244 45.3361C88.7593 45.3361 89.8181 45.5642 90.6 46.0203C91.3884 46.4765 91.7845 47.1044 91.7901 47.9041V47.9907ZM90.2319 47.8478C90.2319 47.2646 89.983 46.8099 89.486 46.4837C88.989 46.1575 88.3015 45.9943 87.4244 45.9943C86.5584 45.9943 85.8773 46.156 85.3795 46.4794C84.8825 46.8027 84.6289 47.2487 84.6177 47.8175V48.0427C84.6177 48.6229 84.8713 49.079 85.3795 49.4111C85.8886 49.7402 86.5752 49.9047 87.4412 49.9047C88.3015 49.9047 88.9778 49.7459 89.4692 49.4284C89.9662 49.1079 90.2207 48.6561 90.2319 48.073V47.8478ZM101.344 49.8787C102.125 49.4226 102.516 48.7932 102.516 47.9907V47.9041C102.51 47.1044 102.114 46.4765 101.327 46.0203C100.544 45.5642 99.486 45.3361 98.1503 45.3361C96.8153 45.3361 95.7541 45.5656 94.9666 46.0247C94.1839 46.4837 93.7933 47.1116 93.7933 47.9084V47.995C93.7989 48.7918 94.1951 49.4182 94.9826 49.8744C95.7709 50.3305 96.8321 50.5586 98.1671 50.5586C99.5028 50.5586 100.561 50.332 101.344 49.8787ZM100.212 46.4837C100.709 46.8099 100.958 47.2646 100.958 47.8478V48.073C100.947 48.6561 100.692 49.1079 100.195 49.4284C99.7037 49.7459 99.0274 49.9047 98.1671 49.9047C97.3011 49.9047 96.6144 49.7402 96.1062 49.4111C95.5972 49.079 95.3435 48.6229 95.3435 48.0427V47.8175C95.3547 47.2487 95.6084 46.8027 96.1062 46.4794C96.6032 46.156 97.2843 45.9943 98.1503 45.9943C99.0274 45.9943 99.7149 46.1575 100.212 46.4837ZM106.354 45.7822V48.5233C106.36 48.9939 106.505 49.3418 106.79 49.567C107.08 49.7921 107.55 49.9047 108.197 49.9047C109.309 49.9047 110.038 49.6853 110.385 49.2465V45.7822H111.944V50.4677H110.544L110.469 49.9696C109.949 50.3594 109.215 50.5543 108.265 50.5543C107.444 50.5543 106.807 50.4489 106.354 50.2382V52.2691H104.804V45.7822H106.354ZM115.907 46.3018L115.865 45.7822H114.398V50.4677H115.949V47.0466C116.323 46.5992 117.019 46.3754 118.036 46.3754C119.326 46.3754 119.971 46.7161 119.971 47.3974V50.4677H121.53V47.3584C121.591 47.0582 121.812 46.82 122.192 46.6439C122.572 46.4649 123.049 46.3754 123.624 46.3754C124.323 46.3754 124.82 46.4591 125.116 46.6266C125.412 46.7911 125.56 47.0409 125.56 47.3758V50.4677H127.111V47.3281C127.077 46.2397 126.066 45.6956 124.077 45.6956C123.418 45.6956 122.846 45.7649 122.359 45.9034C121.879 46.042 121.488 46.2239 121.186 46.4491C120.728 45.9467 119.865 45.6956 118.597 45.6956C117.468 45.6956 116.572 45.8977 115.907 46.3018Z" fill="#03A552" />
        </svg>
    );
};
