'use client';

const shapes = {
    square: "rounded-[0px]"
} as const;

const variants = {
    fill: {
        white_A700: "bg-white-a700",
        underline: {
            blue_gray_100: "text-gray-800 border-b border-blue_gray-100 border-solid"
        }, outline: {
            blue_gray_100: "border-blue_gray-100 border border-solid text-gray-800"
        },
    } 
}as const;

const sizes = {
    sm: "h-[56px] pr-[34px] text-[18px]",
    md: "h-[60px] pl-6 pr-4 text-[18px]",
    xs: "h-[48px] pl-8 text-[18px]",
    lg: "h-[60px] pl-6 pr-4"
} as const;

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "sizes"> & Partial <{
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    shape: keyof typeof shapes;
    variant: keyof typeof variants | null;
    size: keyof typeof sizes;
    color: string;
}>;

const Input = React.forwardRef<HTMLInputElement, InputProps>((
    {
        className = "",
        name="",
        placeholder="",
        type="text",
        prefix,
        suffix,
        onChange,
        shape,
        variant = "outline",
        size = "lg",
        color = "blue_gray_100",
        ...restProps
    },
    ref
) => {
    return (
        <label className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color as keyof (typeof variant)])}`}>
            {!!label && label}
            {!!prefix && prefix}
            <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps}/>
            {!!suffix && suffix}
        </label>
    )
})

export {Input};