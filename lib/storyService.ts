import { supabase } from './supabase';
import { processAndUploadSingleImage } from './imageUpload';

export async function createStory({
  userId = '',
  title = '',
  description = '',
  localImageUri = '',
  medium = 'audio', // or text/video depending on choice
  category = 'Riddles',
  age_group = 'Toddler',
  language = 'Kinyarwanda',
}) {
  const filenameBase = `${userId}_${Date.now()}`;
  const destFolder = `u_${userId}`;

  const imgResult = await processAndUploadSingleImage({
    localUri: localImageUri,
    destFolder,
    filenameBase,
    maxWidth: 1200,
    quality: 0.75,
  });

  const { data, error } = await supabase
    .from('stories')
    .insert({
      user_id: userId,
      title,
      description,
      medium,
      category,
      age_group,
      language,
      file_url: null,
      image_url: imgResult.image_url,
      image_width: imgResult.width,
      image_height: imgResult.height,
      image_size: imgResult.size,
      image_format: imgResult.format,
      moderation_status: 'pending',
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}
