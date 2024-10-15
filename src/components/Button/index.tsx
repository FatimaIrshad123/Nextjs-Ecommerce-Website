const shapes = {
    square: "rounded-[0px]"
} as const;
const variants = {
    outline: {
        gray_800: "border-gray-800 border border-solid text-gray-800",
        blue_gray_100: "border-blue_gray-100 border border-solid text-gray-800",
        gray_500: "border-gray-500 border-2 border-solid text-gray-500"
    },
    fill: {
        gray_800: "bg-gray-800 text-white-a700",
        white_A700: "bg-white-a700 text-gray-800"
    }
} as const;
const sizes = {
    "5xl": "h-[64px] px-[34px] text-[18px]",
    lg: "h-[52px] px-[34px] text-[14px]",
    xl: "h-[56px] px-2.5 text-[24px]",
    "6xl": "h-[102px] px-8 text-[18px]",
    "3xl": "h-[60px] px-8 text-[24px]",
    xs: "h-[48px] px-[34px] text-[14px]",
    sm: "h-[48px]", 
    '2xl': "h-[60px] px-3.5",
    md: "h-[50px] px-[22px] text-[18px]",
    "4xl": "h-[60px] px-7 text-[18px]" 
} as const;

type ButtonProps = Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "onCLick">  & Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
}> ;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children, className="",leftIcon,rightIcon, shape, variant= "fill", size = "4xl", color="gray_800", ...restProps
}) => {
    return (
        <button className={`${className} flex flex-row items-center justify-center text-center cursor-pointer`} {...restProps}>
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    )
}
export {Button};