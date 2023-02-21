import React, { useRef, ChangeEvent } from 'react';
import { CustomInputStyled } from './CustomInput.styled';

interface ICustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  touched: { [field: string]: boolean };
  errors: { [field: string]: any };
  name: string;
}

export const CustomInput: React.FC<ICustomInputProps> = ({
  children,
  label,
  onChange,
  touched,
  errors,
  name,
  ...rest
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.value) {
      spanRef.current!.style.left = '12px';
      spanRef.current!.style.top = '-8px';
      spanRef.current!.style.fontSize = '12px';
      spanRef.current!.style.lineHeight = '14px';
    } else {
      spanRef.current!.style.left = '16px';
      spanRef.current!.style.top = '14px';
      spanRef.current!.style.fontSize = 'inherit';
      spanRef.current!.style.lineHeight = 'inherit';
    }

    onChange(e);
  };

  const isError = touched[name] && errors[name];

  return (
    <CustomInputStyled>
      <div>
        <span ref={spanRef}>{label}</span>
        <input {...rest} onChange={handleChange} name={name} />
      </div>
      {isError ? <span>{errors[name]}</span> : null}
    </CustomInputStyled>
  );
};
