import { client } from "./client";
import { createImageUrlBuilder } from "@sanity/image-url";

import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
