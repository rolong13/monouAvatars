/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TipoAsset } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TipoAssetUpdateFormInputValues = {};
export declare type TipoAssetUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TipoAssetUpdateFormOverridesProps = {
    TipoAssetUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type TipoAssetUpdateFormProps = React.PropsWithChildren<{
    overrides?: TipoAssetUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tipoAsset?: TipoAsset;
    onSubmit?: (fields: TipoAssetUpdateFormInputValues) => TipoAssetUpdateFormInputValues;
    onSuccess?: (fields: TipoAssetUpdateFormInputValues) => void;
    onError?: (fields: TipoAssetUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TipoAssetUpdateFormInputValues) => TipoAssetUpdateFormInputValues;
    onValidate?: TipoAssetUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TipoAssetUpdateForm(props: TipoAssetUpdateFormProps): React.ReactElement;
