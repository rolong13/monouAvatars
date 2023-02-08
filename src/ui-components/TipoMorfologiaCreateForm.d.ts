/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TipoMorfologiaCreateFormInputValues = {};
export declare type TipoMorfologiaCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TipoMorfologiaCreateFormOverridesProps = {
    TipoMorfologiaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type TipoMorfologiaCreateFormProps = React.PropsWithChildren<{
    overrides?: TipoMorfologiaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TipoMorfologiaCreateFormInputValues) => TipoMorfologiaCreateFormInputValues;
    onSuccess?: (fields: TipoMorfologiaCreateFormInputValues) => void;
    onError?: (fields: TipoMorfologiaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TipoMorfologiaCreateFormInputValues) => TipoMorfologiaCreateFormInputValues;
    onValidate?: TipoMorfologiaCreateFormValidationValues;
} & React.CSSProperties>;
export default function TipoMorfologiaCreateForm(props: TipoMorfologiaCreateFormProps): React.ReactElement;
