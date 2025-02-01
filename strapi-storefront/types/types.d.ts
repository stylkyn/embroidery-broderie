declare type FCC<T = unknown> = React.FC<React.PropsWithChildren<T>>;

declare type Unpack<A> = A extends Array<infer E> ? E : A;

declare type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>
