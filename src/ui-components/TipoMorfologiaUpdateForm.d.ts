/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TipoMorfologia } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TipoMorfologiaUpdateFormInputValues = {};
export declare type TipoMorfologiaUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TipoMorfologiaUpdateFormOverridesProps = {
    TipoMorfologiaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type TipoMorfologiaUpdateFormProps = React.PropsWithChildren<{
    overrides?: TipoMorfologiaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tipoMorfologia?: TipoMorfologia;
    onSubmit?: (fields: TipoMorfologiaUpdateFormInputValues) => TipoMorfologiaUpdateFormInputValues;
    onSuccess?: (fields: TipoMorfologiaUpdateFormInputValues) => void;
    onError?: (fields: TipoMorfologiaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TipoMorfologiaUpdateFormInputValues) => TipoMorfologiaUpdateFormInputValues;
    onValidate?: TipoMorfologiaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TipoMorfologiaUpdateForm(props: TipoMorfologiaUpdateFormProps): React.ReactElement;
