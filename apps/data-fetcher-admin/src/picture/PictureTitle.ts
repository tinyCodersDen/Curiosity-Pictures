import { Picture as TPicture } from "../api/picture/Picture";

export const PICTURE_TITLE_FIELD = "id";

export const PictureTitle = (record: TPicture): string => {
  return record.id?.toString() || String(record.id);
};
