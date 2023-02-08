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
export declare type AssetTipoMorfologiaCreateFormInputValues = {};
export declare type AssetTipoMorfologiaCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AssetTipoMorfologiaCreateFormOverridesProps = {
    AssetTipoMorfologiaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type AssetTipoMorfologiaCreateFormProps = React.PropsWithChildren<{
    overrides?: AssetTipoMorfologiaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AssetTipoMorfologiaCreateFormInputValues) => AssetTipoMorfologiaCreateFormInputValues;
    onSuccess?: (fields: AssetTipoMorfologiaCreateFormInputValues) => void;
    onError?: (fields: AssetTipoMorfologiaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AssetTipoMorfologiaCreateFormInputValues) => AssetTipoMorfologiaCreateFormInputValues;
    onValidate?: AssetTipoMorfologiaCreateFormValidationValues;
} & React.CSSProperties>;
export default function AssetTipoMorfologiaCreateForm(props: AssetTipoMorfologiaCreateFormProps): React.ReactElement;
