import React, { CSSProperties, ReactNode } from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Button = ({
  children,
  className,
  style,
  ...props
}: Props): React.JSX.Element => {
  return (
    <button
      {...props}
      className={`
        px-8 py-3 rounded-full bg-[#006EBD] text-white text-base font-inter disabled:opacity-70
        ${className}
      `}
      style={style}
    >
      {children}
    </button>
  );
};
