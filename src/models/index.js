// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comportamiento, Asset, AssetFiles, Categorias, AssetTipoMorfologia, TipoAsset, AssetUsuario, UsuarioAssetSeleccionado, TipoMorfologia, AssetsCategorias, AssetComportamiento, AssetCategorias, AssetAssetTipoMorfologia } = initSchema(schema);

export {
  Comportamiento,
  Asset,
  AssetFiles,
  Categorias,
  AssetTipoMorfologia,
  TipoAsset,
  AssetUsuario,
  UsuarioAssetSeleccionado,
  TipoMorfologia,
  AssetsCategorias,
  AssetComportamiento,
  AssetCategorias,
  AssetAssetTipoMorfologia
};