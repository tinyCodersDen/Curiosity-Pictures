import { EarthDateWhereInput } from "./EarthDateWhereInput";
import { EarthDateOrderByInput } from "./EarthDateOrderByInput";

export type EarthDateFindManyArgs = {
  where?: EarthDateWhereInput;
  orderBy?: Array<EarthDateOrderByInput>;
  skip?: number;
  take?: number;
};
