import { EarthDate as TEarthDate } from "../api/earthDate/EarthDate";

export const EARTHDATE_TITLE_FIELD = "address_1";

export const EarthDateTitle = (record: TEarthDate): string => {
  return record.address_1?.toString() || String(record.id);
};
