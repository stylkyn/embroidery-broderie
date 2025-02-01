import { type StrapiEntityTypes } from '../../schemas/schemas.types';

export interface BuildBaseQueryOneProps<T extends StrapiEntityTypes> {
    entityType: T;
    attributes: object;
    id: number;
}
