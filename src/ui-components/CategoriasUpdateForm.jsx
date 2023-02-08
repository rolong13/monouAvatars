/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Categorias } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CategoriasUpdateForm(props) {
  const {
    id: idProp,
    categorias,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    categoriaNombre: "",
  };
  const [categoriaNombre, setCategoriaNombre] = React.useState(
    initialValues.categoriaNombre
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = categoriasRecord
      ? { ...initialValues, ...categoriasRecord }
      : initialValues;
    setCategoriaNombre(cleanValues.categoriaNombre);
    setErrors({});
  };
  const [categoriasRecord, setCategoriasRecord] = React.useState(categorias);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Categorias, idProp)
        : categorias;
      setCategoriasRecord(record);
    };
    queryData();
  }, [idProp, categorias]);
  React.useEffect(resetStateValues, [categoriasRecord]);
  const validations = {
    categoriaNombre: [],
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
          categoriaNombre,
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
            Categorias.copyOf(categoriasRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CategoriasUpdateForm")}
      {...rest}
    >
      <TextField
        label="Categoria nombre"
        isRequired={false}
        isReadOnly={false}
        value={categoriaNombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              categoriaNombre: value,
            };
            const result = onChange(modelFields);
            value = result?.categoriaNombre ?? value;
          }
          if (errors.categoriaNombre?.hasError) {
            runValidationTasks("categoriaNombre", value);
          }
          setCategoriaNombre(value);
        }}
        onBlur={() => runValidationTasks("categoriaNombre", categoriaNombre)}
        errorMessage={errors.categoriaNombre?.errorMessage}
        hasError={errors.categoriaNombre?.hasError}
        {...getOverrideProps(overrides, "categoriaNombre")}
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
          isDisabled={!(idProp || categorias)}
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
              !(idProp || categorias) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
