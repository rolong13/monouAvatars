/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Asset } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function AssetUpdateForm(props) {
  const {
    id: idProp,
    asset,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    assetNombre: "",
  };
  const [assetNombre, setAssetNombre] = React.useState(
    initialValues.assetNombre
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = assetRecord
      ? { ...initialValues, ...assetRecord }
      : initialValues;
    setAssetNombre(cleanValues.assetNombre);
    setErrors({});
  };
  const [assetRecord, setAssetRecord] = React.useState(asset);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Asset, idProp) : asset;
      setAssetRecord(record);
    };
    queryData();
  }, [idProp, asset]);
  React.useEffect(resetStateValues, [assetRecord]);
  const validations = {
    assetNombre: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          assetNombre,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Asset.copyOf(assetRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AssetUpdateForm")}
      {...rest}
    >
      <TextField
        label="Asset nombre"
        isRequired={false}
        isReadOnly={false}
        value={assetNombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              assetNombre: value,
            };
            const result = onChange(modelFields);
            value = result?.assetNombre ?? value;
          }
          if (errors.assetNombre?.hasError) {
            runValidationTasks("assetNombre", value);
          }
          setAssetNombre(value);
        }}
        onBlur={() => runValidationTasks("assetNombre", assetNombre)}
        errorMessage={errors.assetNombre?.errorMessage}
        hasError={errors.assetNombre?.hasError}
        {...getOverrideProps(overrides, "assetNombre")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || asset)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || asset) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}