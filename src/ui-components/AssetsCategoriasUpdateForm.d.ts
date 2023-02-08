/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AssetsCategorias } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssetsCategoriasUpdateFormInputValues = {};
export declare type AssetsCategoriasUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetsCategoriasUpdateFormOverridesProps = {
    AssetsCategoriasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type AssetsCategoriasUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssetsCategoriasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    assetsCategorias?: AssetsCategorias;
    onSubmit?: (fields: AssetsCategoriasUpdateFormInputValues) => AssetsCategoriasUpdateFormInputValues;
    onSuccess?: (fields: AssetsCategoriasUpdateFormInputValues) => void;
    onError?: (fields: AssetsCategoriasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssetsCategoriasUpdateFormInputValues) => AssetsCategoriasUpdateFormInputValues;
    onValidate?: AssetsCategoriasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssetsCategoriasUpdateForm(props: AssetsCategoriasUpdateFormProps): React.ReactElement;
