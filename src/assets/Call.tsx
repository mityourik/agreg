import React from 'react';

interface ICallProps extends React.SVGProps<SVGSVGElement> {}

export const CallIcon: React.FC<ICallProps> = ({ ...props }) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#8A0707" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <path d="M13.8659 9.50191C13.8659 9.63984 13.8334 9.81992 13.7684 10.0421C13.7033 10.2644 13.6351 10.4393 13.5636 10.567C13.427 10.8225 13.0304 11.0932 12.3737 11.3793C11.7626 11.6398 11.1579 11.7701 10.5597 11.7701C10.3842 11.7701 10.2135 11.7612 10.0477 11.7433C9.88192 11.7254 9.69499 11.6935 9.48693 11.6475C9.27888 11.6015 9.12446 11.5645 9.02368 11.5364C8.9229 11.5083 8.74248 11.4559 8.4824 11.3793C8.22233 11.3027 8.06304 11.2567 8.00452 11.2414C7.36735 11.0626 6.79844 10.8506 6.2978 10.6054C5.46557 10.2018 4.60571 9.65134 3.71821 8.95402C2.83072 8.2567 2.13015 7.58109 1.6165 6.9272C1.30442 6.53384 1.03459 6.08684 0.80703 5.5862C0.787525 5.54023 0.729009 5.41507 0.631482 5.21072C0.533955 5.00638 0.467311 4.86462 0.431552 4.78544C0.395792 4.70625 0.348654 4.58493 0.290137 4.42145C0.231621 4.25798 0.190985 4.11111 0.168229 3.98084C0.145472 3.85057 0.134094 3.71647 0.134094 3.57854C0.134094 3.10855 0.29989 2.63346 0.631482 2.15325C0.995583 1.63729 1.34018 1.32567 1.66527 1.21839C1.82781 1.16219 2.0505 1.10855 2.33333 1.05747C2.61616 1.00638 2.84534 0.98084 3.02089 0.98084C3.11192 0.98084 3.18019 0.988503 3.2257 1.00383C3.34273 1.03448 3.51503 1.2286 3.74259 1.5862C3.81411 1.68327 3.91164 1.8212 4.03517 2C4.15871 2.1788 4.27249 2.34099 4.37652 2.48659C4.48055 2.63218 4.58133 2.76883 4.67885 2.89655C4.69836 2.91698 4.75525 2.98084 4.84952 3.08812C4.9438 3.1954 5.01369 3.28608 5.05921 3.36015C5.10472 3.43422 5.12748 3.50702 5.12748 3.57854C5.12748 3.68071 5.03483 3.80843 4.84952 3.96168C4.66422 4.11494 4.46267 4.25542 4.24486 4.38314C4.02705 4.51085 3.82549 4.64623 3.64019 4.78927C3.45489 4.93231 3.36224 5.04981 3.36224 5.14176C3.36224 5.18774 3.37849 5.24521 3.411 5.31417C3.44351 5.38314 3.47114 5.4355 3.4939 5.47126C3.51666 5.50702 3.56217 5.56832 3.63044 5.65517C3.69871 5.74201 3.73609 5.79055 3.74259 5.80076C4.23673 6.50064 4.80239 7.10089 5.43956 7.60153C6.07674 8.10217 6.8407 8.54661 7.73145 8.93486C7.74445 8.93997 7.80622 8.96935 7.91675 9.02298C8.02728 9.07662 8.1053 9.11238 8.15081 9.13026C8.19633 9.14814 8.26297 9.16986 8.35074 9.1954C8.43852 9.22094 8.51166 9.23371 8.57018 9.23371C8.68721 9.23371 8.83675 9.16092 9.0188 9.01532C9.20085 8.86973 9.37315 8.71136 9.5357 8.54023C9.69824 8.36909 9.87704 8.21072 10.0721 8.06513C10.2671 7.91954 10.4297 7.84674 10.5597 7.84674C10.6508 7.84674 10.7434 7.86462 10.8377 7.90038C10.932 7.93614 11.0474 7.99106 11.1839 8.06513C11.3204 8.1392 11.4017 8.1839 11.4277 8.19923C11.5903 8.27586 11.7642 8.35504 11.9495 8.43678C12.1348 8.51851 12.3412 8.60791 12.5688 8.70498C12.7963 8.80204 12.9719 8.87867 13.0954 8.93486C13.5506 9.11366 13.7976 9.24904 13.8366 9.34099C13.8561 9.37675 13.8659 9.43039 13.8659 9.50191Z" />
        </svg>
    );
};
