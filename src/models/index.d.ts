import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerComportamiento = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comportamiento, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assets?: (AssetComportamiento | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComportamiento = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comportamiento, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assets: AsyncCollection<AssetComportamiento>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comportamiento = LazyLoading extends LazyLoadingDisabled ? EagerComportamiento : LazyComportamiento

export declare const Comportamiento: (new (init: ModelInit<Comportamiento>) => Comportamiento) & {
  copyOf(source: Comportamiento, mutator: (draft: MutableModel<Comportamiento>) => MutableModel<Comportamiento> | void): Comportamiento;
}

type EagerAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Asset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetNombre?: string | null;
  readonly AssetFiles?: (AssetFiles | null)[] | null;
  readonly Categorias?: (AssetCategorias | null)[] | null;
  readonly AssetTipoMorfologias?: (AssetAssetTipoMorfologia | null)[] | null;
  readonly TipoAsset?: TipoAsset | null;
  readonly Comportamientos?: (AssetComportamiento | null)[] | null;
  readonly AssetUsuarios?: (AssetUsuario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assetTipoAssetId?: string | null;
}

type LazyAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Asset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetNombre?: string | null;
  readonly AssetFiles: AsyncCollection<AssetFiles>;
  readonly Categorias: AsyncCollection<AssetCategorias>;
  readonly AssetTipoMorfologias: AsyncCollection<AssetAssetTipoMorfologia>;
  readonly TipoAsset: AsyncItem<TipoAsset | undefined>;
  readonly Comportamientos: AsyncCollection<AssetComportamiento>;
  readonly AssetUsuarios: AsyncCollection<AssetUsuario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assetTipoAssetId?: string | null;
}

export declare type Asset = LazyLoading extends LazyLoadingDisabled ? EagerAsset : LazyAsset

export declare const Asset: (new (init: ModelInit<Asset>) => Asset) & {
  copyOf(source: Asset, mutator: (draft: MutableModel<Asset>) => MutableModel<Asset> | void): Asset;
}

type EagerAssetFiles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetFiles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetURL?: string | null;
  readonly assetID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssetFiles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetFiles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetURL?: string | null;
  readonly assetID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssetFiles = LazyLoading extends LazyLoadingDisabled ? EagerAssetFiles : LazyAssetFiles

export declare const AssetFiles: (new (init: ModelInit<AssetFiles>) => AssetFiles) & {
  copyOf(source: AssetFiles, mutator: (draft: MutableModel<AssetFiles>) => MutableModel<AssetFiles> | void): AssetFiles;
}

type EagerCategorias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categorias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoriaNombre?: string | null;
  readonly assets?: (AssetCategorias | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategorias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categorias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoriaNombre?: string | null;
  readonly assets: AsyncCollection<AssetCategorias>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categorias = LazyLoading extends LazyLoadingDisabled ? EagerCategorias : LazyCategorias

export declare const Categorias: (new (init: ModelInit<Categorias>) => Categorias) & {
  copyOf(source: Categorias, mutator: (draft: MutableModel<Categorias>) => MutableModel<Categorias> | void): Categorias;
}

type EagerAssetTipoMorfologia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetTipoMorfologia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assets?: (AssetAssetTipoMorfologia | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssetTipoMorfologia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetTipoMorfologia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assets: AsyncCollection<AssetAssetTipoMorfologia>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssetTipoMorfologia = LazyLoading extends LazyLoadingDisabled ? EagerAssetTipoMorfologia : LazyAssetTipoMorfologia

export declare const AssetTipoMorfologia: (new (init: ModelInit<AssetTipoMorfologia>) => AssetTipoMorfologia) & {
  copyOf(source: AssetTipoMorfologia, mutator: (draft: MutableModel<AssetTipoMorfologia>) => MutableModel<AssetTipoMorfologia> | void): AssetTipoMorfologia;
}

type EagerTipoAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TipoAsset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTipoAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TipoAsset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TipoAsset = LazyLoading extends LazyLoadingDisabled ? EagerTipoAsset : LazyTipoAsset

export declare const TipoAsset: (new (init: ModelInit<TipoAsset>) => TipoAsset) & {
  copyOf(source: TipoAsset, mutator: (draft: MutableModel<TipoAsset>) => MutableModel<TipoAsset> | void): TipoAsset;
}

type EagerAssetUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetID: string;
  readonly UsuarioAssetSeleccionados?: (UsuarioAssetSeleccionado | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssetUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetID: string;
  readonly UsuarioAssetSeleccionados: AsyncCollection<UsuarioAssetSeleccionado>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssetUsuario = LazyLoading extends LazyLoadingDisabled ? EagerAssetUsuario : LazyAssetUsuario

export declare const AssetUsuario: (new (init: ModelInit<AssetUsuario>) => AssetUsuario) & {
  copyOf(source: AssetUsuario, mutator: (draft: MutableModel<AssetUsuario>) => MutableModel<AssetUsuario> | void): AssetUsuario;
}

type EagerUsuarioAssetSeleccionado = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsuarioAssetSeleccionado, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetusuarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuarioAssetSeleccionado = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UsuarioAssetSeleccionado, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetusuarioID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UsuarioAssetSeleccionado = LazyLoading extends LazyLoadingDisabled ? EagerUsuarioAssetSeleccionado : LazyUsuarioAssetSeleccionado

export declare const UsuarioAssetSeleccionado: (new (init: ModelInit<UsuarioAssetSeleccionado>) => UsuarioAssetSeleccionado) & {
  copyOf(source: UsuarioAssetSeleccionado, mutator: (draft: MutableModel<UsuarioAssetSeleccionado>) => MutableModel<UsuarioAssetSeleccionado> | void): UsuarioAssetSeleccionado;
}

type EagerTipoMorfologia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TipoMorfologia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTipoMorfologia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TipoMorfologia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TipoMorfologia = LazyLoading extends LazyLoadingDisabled ? EagerTipoMorfologia : LazyTipoMorfologia

export declare const TipoMorfologia: (new (init: ModelInit<TipoMorfologia>) => TipoMorfologia) & {
  copyOf(source: TipoMorfologia, mutator: (draft: MutableModel<TipoMorfologia>) => MutableModel<TipoMorfologia> | void): TipoMorfologia;
}

type EagerAssetsCategorias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetsCategorias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssetsCategorias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetsCategorias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssetsCategorias = LazyLoading extends LazyLoadingDisabled ? EagerAssetsCategorias : LazyAssetsCategorias

export declare const AssetsCategorias: (new (init: ModelInit<AssetsCategorias>) => AssetsCategorias) & {
  copyOf(source: AssetsCategorias, mutator: (draft: MutableModel<AssetsCategorias>) => MutableModel<AssetsCategorias> | void): AssetsCategorias;
}

type EagerAssetComportamiento = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetComportamiento, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comportamientoId?: string | null;
  readonly assetId?: string | null;
  readonly comportamiento: Comportamiento;
  readonly asset: Asset;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssetComportamiento = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetComportamiento, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comportamientoId?: string | null;
  readonly assetId?: string | null;
  readonly comportamiento: AsyncItem<Comportamiento>;
  readonly asset: AsyncItem<Asset>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssetComportamiento = LazyLoading extends LazyLoadingDisabled ? EagerAssetComportamiento : LazyAssetComportamiento

export declare const AssetComportamiento: (new (init: ModelInit<AssetComportamiento>) => AssetComportamiento) & {
  copyOf(source: AssetComportamiento, mutator: (draft: MutableModel<AssetComportamiento>) => MutableModel<AssetComportamiento> | void): AssetComportamiento;
}

type EagerAssetCategorias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetCategorias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetId?: string | null;
  readonly categoriasId?: string | null;
  readonly asset: Asset;
  readonly categorias: Categorias;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssetCategorias = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetCategorias, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetId?: string | null;
  readonly categoriasId?: string | null;
  readonly asset: AsyncItem<Asset>;
  readonly categorias: AsyncItem<Categorias>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssetCategorias = LazyLoading extends LazyLoadingDisabled ? EagerAssetCategorias : LazyAssetCategorias

export declare const AssetCategorias: (new (init: ModelInit<AssetCategorias>) => AssetCategorias) & {
  copyOf(source: AssetCategorias, mutator: (draft: MutableModel<AssetCategorias>) => MutableModel<AssetCategorias> | void): AssetCategorias;
}

type EagerAssetAssetTipoMorfologia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetAssetTipoMorfologia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetId?: string | null;
  readonly assetTipoMorfologiaId?: string | null;
  readonly asset: Asset;
  readonly assetTipoMorfologia: AssetTipoMorfologia;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAssetAssetTipoMorfologia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetAssetTipoMorfologia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly assetId?: string | null;
  readonly assetTipoMorfologiaId?: string | null;
  readonly asset: AsyncItem<Asset>;
  readonly assetTipoMorfologia: AsyncItem<AssetTipoMorfologia>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AssetAssetTipoMorfologia = LazyLoading extends LazyLoadingDisabled ? EagerAssetAssetTipoMorfologia : LazyAssetAssetTipoMorfologia

export declare const AssetAssetTipoMorfologia: (new (init: ModelInit<AssetAssetTipoMorfologia>) => AssetAssetTipoMorfologia) & {
  copyOf(source: AssetAssetTipoMorfologia, mutator: (draft: MutableModel<AssetAssetTipoMorfologia>) => MutableModel<AssetAssetTipoMorfologia> | void): AssetAssetTipoMorfologia;
}