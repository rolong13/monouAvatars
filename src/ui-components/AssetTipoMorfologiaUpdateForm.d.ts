/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AssetTipoMorfologia } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AssetTipoMorfologiaUpdateFormInputValues = {};
export declare type AssetTipoMorfologiaUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetTipoMorfologiaUpdateFormOverridesProps = {
    AssetTipoMorfologiaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type AssetTipoMorfologiaUpdateFormProps = React.PropsWithChildren<{
    overrides?: AssetTipoMorfologiaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    assetTipoMorfologia?: AssetTipoMorfologia;
    onSubmit?: (fields: AssetTipoMorfologiaUpdateFormInputValues) => AssetTipoMorfologiaUpdateFormInputValues;
    onSuccess?: (fields: AssetTipoMorfologiaUpdateFormInputValues) => void;
    onError?: (fields: AssetTipoMorfologiaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssetTipoMorfologiaUpdateFormInputValues) => AssetTipoMorfologiaUpdateFormInputValues;
    onValidate?: AssetTipoMorfologiaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AssetTipoMorfologiaUpdateForm(props: AssetTipoMorfologiaUpdateFormProps): React.ReactElement;
