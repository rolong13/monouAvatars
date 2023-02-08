/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Comportamiento } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ComportamientoUpdateFormInputValues = {};
export declare type ComportamientoUpdateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ComportamientoUpdateFormOverridesProps = {
    ComportamientoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ComportamientoUpdateFormProps = React.PropsWithChildren<{
    overrides?: ComportamientoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    comportamiento?: Comportamiento;
    onSubmit?: (fields: ComportamientoUpdateFormInputValues) => ComportamientoUpdateFormInputValues;
    onSuccess?: (fields: ComportamientoUpdateFormInputValues) => void;
    onError?: (fields: ComportamientoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ComportamientoUpdateFormInputValues) => ComportamientoUpdateFormInputValues;
    onValidate?: ComportamientoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ComportamientoUpdateForm(props: ComportamientoUpdateFormProps): React.ReactElement;
