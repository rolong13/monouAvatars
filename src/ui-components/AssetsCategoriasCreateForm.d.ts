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
export declare type AssetsCategoriasCreateFormInputValues = {};
export declare type AssetsCategoriasCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetsCategoriasCreateFormOverridesProps = {
    AssetsCategoriasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type AssetsCategoriasCreateFormProps = React.PropsWithChildren<{
    overrides?: AssetsCategoriasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssetsCategoriasCreateFormInputValues) => AssetsCategoriasCreateFormInputValues;
    onSuccess?: (fields: AssetsCategoriasCreateFormInputValues) => void;
    onError?: (fields: AssetsCategoriasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssetsCategoriasCreateFormInputValues) => AssetsCategoriasCreateFormInputValues;
    onValidate?: AssetsCategoriasCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssetsCategoriasCreateForm(props: AssetsCategoriasCreateFormProps): React.ReactElement;
