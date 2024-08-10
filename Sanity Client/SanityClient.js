
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'i6lq0jaa',
  dataset: 'production',
  apiVersion: '2023-08-10',
  useCdn: false
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;


