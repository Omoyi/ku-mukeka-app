import * as ImageManipulator from 'expo-image-manipulator';
import * as FileSystem from 'expo-file-system';
import { supabase } from './supabase';

async function uriToBlob(uri: string) {
  const res = await fetch(uri);
  return await res.blob();
}

export async function processAndUploadSingleImage({
  localUri,
  destFolder,       // e.g. `images/u_<userId>`
  filenameBase,     // e.g. `${Date.now()}_name`
  maxWidth = 1200,  // tune this: lower -> smaller files
  quality = 0.75,   // 0 to 1
}: {
  localUri: string;
  destFolder: string;
  filenameBase: string;
  maxWidth?: number;
  quality?: number;
}) {
  // 1) Resize & compress (JPEG)
  const result = await ImageManipulator.manipulateAsync(
    localUri,
    [{ resize: { width: maxWidth } }],
    { compress: quality, format: ImageManipulator.SaveFormat.JPEG }
  );

  // 2) Upload to Supabase storage
  const bucket = 'images'; // create this bucket in Supabase
  const filename = `${filenameBase}.jpg`;
  const path = `${destFolder}/${filename}`;

  const blob = await uriToBlob(result.uri);

  const { error: uploadError } = await supabase.storage
    .from(bucket)
    .upload(path, blob, {
      contentType: 'image/jpeg',
      cacheControl: 'public, max-age=31536000',
      upsert: false,
    });

  if (uploadError) throw uploadError;

  // 3) get public URL (or signed URL if you keep bucket private)
  const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(path);

  // 4) file metadata
  const info = await FileSystem.getInfoAsync(result.uri);

  return {
    image_url: urlData.publicUrl,
    width: result.width,
    height: result.height,
    size: (info.exists && 'size' in info) ? info.size : null,
    format: 'jpeg',
  };
}
