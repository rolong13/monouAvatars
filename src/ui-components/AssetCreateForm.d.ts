/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssetCreateFormInputValues = {
    assetNombre?: string;
};
export declare type AssetCreateFormValidationValues = {
    assetNombre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetCreateFormOverridesProps = {
    AssetCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    assetNombre?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AssetCreateFormProps = React.PropsWithChildren<{
    overrides?: AssetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssetCreateFormInputValues) => AssetCreateFormInputValues;
    onSuccess?: (fields: AssetCreateFormInputValues) => void;
    onError?: (fields: AssetCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssetCreateFormInputValues) => AssetCreateFormInputValues;
    onValidate?: AssetCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssetCreateForm(props: AssetCreateFormProps): React.ReactElement;
