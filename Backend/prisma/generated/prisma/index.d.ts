
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model practiceSession
 * 
 */
export type practiceSession = $Result.DefaultSelection<Prisma.$practiceSessionPayload>
/**
 * Model piece
 * 
 */
export type piece = $Result.DefaultSelection<Prisma.$piecePayload>
/**
 * Model practicedPiece
 * 
 */
export type practicedPiece = $Result.DefaultSelection<Prisma.$practicedPiecePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.practiceSession`: Exposes CRUD operations for the **practiceSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PracticeSessions
    * const practiceSessions = await prisma.practiceSession.findMany()
    * ```
    */
  get practiceSession(): Prisma.practiceSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.piece`: Exposes CRUD operations for the **piece** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pieces
    * const pieces = await prisma.piece.findMany()
    * ```
    */
  get piece(): Prisma.pieceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.practicedPiece`: Exposes CRUD operations for the **practicedPiece** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PracticedPieces
    * const practicedPieces = await prisma.practicedPiece.findMany()
    * ```
    */
  get practicedPiece(): Prisma.practicedPieceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    practiceSession: 'practiceSession',
    piece: 'piece',
    practicedPiece: 'practicedPiece'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "practiceSession" | "piece" | "practicedPiece"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      practiceSession: {
        payload: Prisma.$practiceSessionPayload<ExtArgs>
        fields: Prisma.practiceSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.practiceSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.practiceSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>
          }
          findFirst: {
            args: Prisma.practiceSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.practiceSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>
          }
          findMany: {
            args: Prisma.practiceSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>[]
          }
          create: {
            args: Prisma.practiceSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>
          }
          createMany: {
            args: Prisma.practiceSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.practiceSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>[]
          }
          delete: {
            args: Prisma.practiceSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>
          }
          update: {
            args: Prisma.practiceSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>
          }
          deleteMany: {
            args: Prisma.practiceSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.practiceSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.practiceSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>[]
          }
          upsert: {
            args: Prisma.practiceSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practiceSessionPayload>
          }
          aggregate: {
            args: Prisma.PracticeSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePracticeSession>
          }
          groupBy: {
            args: Prisma.practiceSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PracticeSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.practiceSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PracticeSessionCountAggregateOutputType> | number
          }
        }
      }
      piece: {
        payload: Prisma.$piecePayload<ExtArgs>
        fields: Prisma.pieceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pieceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pieceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>
          }
          findFirst: {
            args: Prisma.pieceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pieceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>
          }
          findMany: {
            args: Prisma.pieceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>[]
          }
          create: {
            args: Prisma.pieceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>
          }
          createMany: {
            args: Prisma.pieceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pieceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>[]
          }
          delete: {
            args: Prisma.pieceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>
          }
          update: {
            args: Prisma.pieceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>
          }
          deleteMany: {
            args: Prisma.pieceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pieceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pieceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>[]
          }
          upsert: {
            args: Prisma.pieceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$piecePayload>
          }
          aggregate: {
            args: Prisma.PieceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePiece>
          }
          groupBy: {
            args: Prisma.pieceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PieceGroupByOutputType>[]
          }
          count: {
            args: Prisma.pieceCountArgs<ExtArgs>
            result: $Utils.Optional<PieceCountAggregateOutputType> | number
          }
        }
      }
      practicedPiece: {
        payload: Prisma.$practicedPiecePayload<ExtArgs>
        fields: Prisma.practicedPieceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.practicedPieceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.practicedPieceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>
          }
          findFirst: {
            args: Prisma.practicedPieceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.practicedPieceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>
          }
          findMany: {
            args: Prisma.practicedPieceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>[]
          }
          create: {
            args: Prisma.practicedPieceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>
          }
          createMany: {
            args: Prisma.practicedPieceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.practicedPieceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>[]
          }
          delete: {
            args: Prisma.practicedPieceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>
          }
          update: {
            args: Prisma.practicedPieceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>
          }
          deleteMany: {
            args: Prisma.practicedPieceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.practicedPieceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.practicedPieceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>[]
          }
          upsert: {
            args: Prisma.practicedPieceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$practicedPiecePayload>
          }
          aggregate: {
            args: Prisma.PracticedPieceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePracticedPiece>
          }
          groupBy: {
            args: Prisma.practicedPieceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PracticedPieceGroupByOutputType>[]
          }
          count: {
            args: Prisma.practicedPieceCountArgs<ExtArgs>
            result: $Utils.Optional<PracticedPieceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    practiceSession?: practiceSessionOmit
    piece?: pieceOmit
    practicedPiece?: practicedPieceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    practiceSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceSessions?: boolean | UserCountOutputTypeCountPracticeSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPracticeSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practiceSessionWhereInput
  }


  /**
   * Count Type PracticeSessionCountOutputType
   */

  export type PracticeSessionCountOutputType = {
    practicedPieces: number
  }

  export type PracticeSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practicedPieces?: boolean | PracticeSessionCountOutputTypeCountPracticedPiecesArgs
  }

  // Custom InputTypes
  /**
   * PracticeSessionCountOutputType without action
   */
  export type PracticeSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PracticeSessionCountOutputType
     */
    select?: PracticeSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PracticeSessionCountOutputType without action
   */
  export type PracticeSessionCountOutputTypeCountPracticedPiecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practicedPieceWhereInput
  }


  /**
   * Count Type PieceCountOutputType
   */

  export type PieceCountOutputType = {
    practicedPieces: number
  }

  export type PieceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practicedPieces?: boolean | PieceCountOutputTypeCountPracticedPiecesArgs
  }

  // Custom InputTypes
  /**
   * PieceCountOutputType without action
   */
  export type PieceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PieceCountOutputType
     */
    select?: PieceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PieceCountOutputType without action
   */
  export type PieceCountOutputTypeCountPracticedPiecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practicedPieceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    phone: string | null
    userName: string | null
    password: string | null
    salt: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    phone: string | null
    userName: string | null
    password: string | null
    salt: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    phone: number
    userName: number
    password: number
    salt: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    phone?: true
    userName?: true
    password?: true
    salt?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    phone?: true
    userName?: true
    password?: true
    salt?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    phone?: true
    userName?: true
    password?: true
    salt?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    phone: string
    userName: string
    password: string
    salt: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    userName?: boolean
    password?: boolean
    salt?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    practiceSessions?: boolean | User$practiceSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    userName?: boolean
    password?: boolean
    salt?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    userName?: boolean
    password?: boolean
    salt?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    phone?: boolean
    userName?: boolean
    password?: boolean
    salt?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "userName" | "password" | "salt" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceSessions?: boolean | User$practiceSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      practiceSessions: Prisma.$practiceSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      phone: string
      userName: string
      password: string
      salt: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    practiceSessions<T extends User$practiceSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$practiceSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly userName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly salt: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.practiceSessions
   */
  export type User$practiceSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    where?: practiceSessionWhereInput
    orderBy?: practiceSessionOrderByWithRelationInput | practiceSessionOrderByWithRelationInput[]
    cursor?: practiceSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model practiceSession
   */

  export type AggregatePracticeSession = {
    _count: PracticeSessionCountAggregateOutputType | null
    _avg: PracticeSessionAvgAggregateOutputType | null
    _sum: PracticeSessionSumAggregateOutputType | null
    _min: PracticeSessionMinAggregateOutputType | null
    _max: PracticeSessionMaxAggregateOutputType | null
  }

  export type PracticeSessionAvgAggregateOutputType = {
    duration: number | null
  }

  export type PracticeSessionSumAggregateOutputType = {
    duration: number | null
  }

  export type PracticeSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: number | null
    startDate: Date | null
    starteTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    notes: string | null
  }

  export type PracticeSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    duration: number | null
    startDate: Date | null
    starteTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    notes: string | null
  }

  export type PracticeSessionCountAggregateOutputType = {
    id: number
    userId: number
    duration: number
    startDate: number
    starteTime: number
    createdAt: number
    updatedAt: number
    notes: number
    _all: number
  }


  export type PracticeSessionAvgAggregateInputType = {
    duration?: true
  }

  export type PracticeSessionSumAggregateInputType = {
    duration?: true
  }

  export type PracticeSessionMinAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    startDate?: true
    starteTime?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
  }

  export type PracticeSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    startDate?: true
    starteTime?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
  }

  export type PracticeSessionCountAggregateInputType = {
    id?: true
    userId?: true
    duration?: true
    startDate?: true
    starteTime?: true
    createdAt?: true
    updatedAt?: true
    notes?: true
    _all?: true
  }

  export type PracticeSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which practiceSession to aggregate.
     */
    where?: practiceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practiceSessions to fetch.
     */
    orderBy?: practiceSessionOrderByWithRelationInput | practiceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: practiceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practiceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practiceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned practiceSessions
    **/
    _count?: true | PracticeSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PracticeSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PracticeSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PracticeSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PracticeSessionMaxAggregateInputType
  }

  export type GetPracticeSessionAggregateType<T extends PracticeSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePracticeSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePracticeSession[P]>
      : GetScalarType<T[P], AggregatePracticeSession[P]>
  }




  export type practiceSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practiceSessionWhereInput
    orderBy?: practiceSessionOrderByWithAggregationInput | practiceSessionOrderByWithAggregationInput[]
    by: PracticeSessionScalarFieldEnum[] | PracticeSessionScalarFieldEnum
    having?: practiceSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PracticeSessionCountAggregateInputType | true
    _avg?: PracticeSessionAvgAggregateInputType
    _sum?: PracticeSessionSumAggregateInputType
    _min?: PracticeSessionMinAggregateInputType
    _max?: PracticeSessionMaxAggregateInputType
  }

  export type PracticeSessionGroupByOutputType = {
    id: string
    userId: string
    duration: number
    startDate: Date
    starteTime: Date
    createdAt: Date
    updatedAt: Date
    notes: string | null
    _count: PracticeSessionCountAggregateOutputType | null
    _avg: PracticeSessionAvgAggregateOutputType | null
    _sum: PracticeSessionSumAggregateOutputType | null
    _min: PracticeSessionMinAggregateOutputType | null
    _max: PracticeSessionMaxAggregateOutputType | null
  }

  type GetPracticeSessionGroupByPayload<T extends practiceSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PracticeSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PracticeSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PracticeSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PracticeSessionGroupByOutputType[P]>
        }
      >
    >


  export type practiceSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    startDate?: boolean
    starteTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    practicedPieces?: boolean | practiceSession$practicedPiecesArgs<ExtArgs>
    _count?: boolean | PracticeSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceSession"]>

  export type practiceSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    startDate?: boolean
    starteTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceSession"]>

  export type practiceSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duration?: boolean
    startDate?: boolean
    starteTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practiceSession"]>

  export type practiceSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    duration?: boolean
    startDate?: boolean
    starteTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    notes?: boolean
  }

  export type practiceSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "duration" | "startDate" | "starteTime" | "createdAt" | "updatedAt" | "notes", ExtArgs["result"]["practiceSession"]>
  export type practiceSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    practicedPieces?: boolean | practiceSession$practicedPiecesArgs<ExtArgs>
    _count?: boolean | PracticeSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type practiceSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type practiceSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $practiceSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "practiceSession"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      practicedPieces: Prisma.$practicedPiecePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      duration: number
      startDate: Date
      starteTime: Date
      createdAt: Date
      updatedAt: Date
      notes: string | null
    }, ExtArgs["result"]["practiceSession"]>
    composites: {}
  }

  type practiceSessionGetPayload<S extends boolean | null | undefined | practiceSessionDefaultArgs> = $Result.GetResult<Prisma.$practiceSessionPayload, S>

  type practiceSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<practiceSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PracticeSessionCountAggregateInputType | true
    }

  export interface practiceSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['practiceSession'], meta: { name: 'practiceSession' } }
    /**
     * Find zero or one PracticeSession that matches the filter.
     * @param {practiceSessionFindUniqueArgs} args - Arguments to find a PracticeSession
     * @example
     * // Get one PracticeSession
     * const practiceSession = await prisma.practiceSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends practiceSessionFindUniqueArgs>(args: SelectSubset<T, practiceSessionFindUniqueArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PracticeSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {practiceSessionFindUniqueOrThrowArgs} args - Arguments to find a PracticeSession
     * @example
     * // Get one PracticeSession
     * const practiceSession = await prisma.practiceSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends practiceSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, practiceSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticeSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practiceSessionFindFirstArgs} args - Arguments to find a PracticeSession
     * @example
     * // Get one PracticeSession
     * const practiceSession = await prisma.practiceSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends practiceSessionFindFirstArgs>(args?: SelectSubset<T, practiceSessionFindFirstArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticeSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practiceSessionFindFirstOrThrowArgs} args - Arguments to find a PracticeSession
     * @example
     * // Get one PracticeSession
     * const practiceSession = await prisma.practiceSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends practiceSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, practiceSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PracticeSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practiceSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PracticeSessions
     * const practiceSessions = await prisma.practiceSession.findMany()
     * 
     * // Get first 10 PracticeSessions
     * const practiceSessions = await prisma.practiceSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const practiceSessionWithIdOnly = await prisma.practiceSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends practiceSessionFindManyArgs>(args?: SelectSubset<T, practiceSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PracticeSession.
     * @param {practiceSessionCreateArgs} args - Arguments to create a PracticeSession.
     * @example
     * // Create one PracticeSession
     * const PracticeSession = await prisma.practiceSession.create({
     *   data: {
     *     // ... data to create a PracticeSession
     *   }
     * })
     * 
     */
    create<T extends practiceSessionCreateArgs>(args: SelectSubset<T, practiceSessionCreateArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PracticeSessions.
     * @param {practiceSessionCreateManyArgs} args - Arguments to create many PracticeSessions.
     * @example
     * // Create many PracticeSessions
     * const practiceSession = await prisma.practiceSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends practiceSessionCreateManyArgs>(args?: SelectSubset<T, practiceSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PracticeSessions and returns the data saved in the database.
     * @param {practiceSessionCreateManyAndReturnArgs} args - Arguments to create many PracticeSessions.
     * @example
     * // Create many PracticeSessions
     * const practiceSession = await prisma.practiceSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PracticeSessions and only return the `id`
     * const practiceSessionWithIdOnly = await prisma.practiceSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends practiceSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, practiceSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PracticeSession.
     * @param {practiceSessionDeleteArgs} args - Arguments to delete one PracticeSession.
     * @example
     * // Delete one PracticeSession
     * const PracticeSession = await prisma.practiceSession.delete({
     *   where: {
     *     // ... filter to delete one PracticeSession
     *   }
     * })
     * 
     */
    delete<T extends practiceSessionDeleteArgs>(args: SelectSubset<T, practiceSessionDeleteArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PracticeSession.
     * @param {practiceSessionUpdateArgs} args - Arguments to update one PracticeSession.
     * @example
     * // Update one PracticeSession
     * const practiceSession = await prisma.practiceSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends practiceSessionUpdateArgs>(args: SelectSubset<T, practiceSessionUpdateArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PracticeSessions.
     * @param {practiceSessionDeleteManyArgs} args - Arguments to filter PracticeSessions to delete.
     * @example
     * // Delete a few PracticeSessions
     * const { count } = await prisma.practiceSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends practiceSessionDeleteManyArgs>(args?: SelectSubset<T, practiceSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practiceSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PracticeSessions
     * const practiceSession = await prisma.practiceSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends practiceSessionUpdateManyArgs>(args: SelectSubset<T, practiceSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticeSessions and returns the data updated in the database.
     * @param {practiceSessionUpdateManyAndReturnArgs} args - Arguments to update many PracticeSessions.
     * @example
     * // Update many PracticeSessions
     * const practiceSession = await prisma.practiceSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PracticeSessions and only return the `id`
     * const practiceSessionWithIdOnly = await prisma.practiceSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends practiceSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, practiceSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PracticeSession.
     * @param {practiceSessionUpsertArgs} args - Arguments to update or create a PracticeSession.
     * @example
     * // Update or create a PracticeSession
     * const practiceSession = await prisma.practiceSession.upsert({
     *   create: {
     *     // ... data to create a PracticeSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PracticeSession we want to update
     *   }
     * })
     */
    upsert<T extends practiceSessionUpsertArgs>(args: SelectSubset<T, practiceSessionUpsertArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PracticeSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practiceSessionCountArgs} args - Arguments to filter PracticeSessions to count.
     * @example
     * // Count the number of PracticeSessions
     * const count = await prisma.practiceSession.count({
     *   where: {
     *     // ... the filter for the PracticeSessions we want to count
     *   }
     * })
    **/
    count<T extends practiceSessionCountArgs>(
      args?: Subset<T, practiceSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PracticeSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PracticeSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticeSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PracticeSessionAggregateArgs>(args: Subset<T, PracticeSessionAggregateArgs>): Prisma.PrismaPromise<GetPracticeSessionAggregateType<T>>

    /**
     * Group by PracticeSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practiceSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends practiceSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: practiceSessionGroupByArgs['orderBy'] }
        : { orderBy?: practiceSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, practiceSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPracticeSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the practiceSession model
   */
  readonly fields: practiceSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for practiceSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__practiceSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    practicedPieces<T extends practiceSession$practicedPiecesArgs<ExtArgs> = {}>(args?: Subset<T, practiceSession$practicedPiecesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the practiceSession model
   */
  interface practiceSessionFieldRefs {
    readonly id: FieldRef<"practiceSession", 'String'>
    readonly userId: FieldRef<"practiceSession", 'String'>
    readonly duration: FieldRef<"practiceSession", 'Int'>
    readonly startDate: FieldRef<"practiceSession", 'DateTime'>
    readonly starteTime: FieldRef<"practiceSession", 'DateTime'>
    readonly createdAt: FieldRef<"practiceSession", 'DateTime'>
    readonly updatedAt: FieldRef<"practiceSession", 'DateTime'>
    readonly notes: FieldRef<"practiceSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * practiceSession findUnique
   */
  export type practiceSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * Filter, which practiceSession to fetch.
     */
    where: practiceSessionWhereUniqueInput
  }

  /**
   * practiceSession findUniqueOrThrow
   */
  export type practiceSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * Filter, which practiceSession to fetch.
     */
    where: practiceSessionWhereUniqueInput
  }

  /**
   * practiceSession findFirst
   */
  export type practiceSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * Filter, which practiceSession to fetch.
     */
    where?: practiceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practiceSessions to fetch.
     */
    orderBy?: practiceSessionOrderByWithRelationInput | practiceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for practiceSessions.
     */
    cursor?: practiceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practiceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practiceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of practiceSessions.
     */
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * practiceSession findFirstOrThrow
   */
  export type practiceSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * Filter, which practiceSession to fetch.
     */
    where?: practiceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practiceSessions to fetch.
     */
    orderBy?: practiceSessionOrderByWithRelationInput | practiceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for practiceSessions.
     */
    cursor?: practiceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practiceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practiceSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of practiceSessions.
     */
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * practiceSession findMany
   */
  export type practiceSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * Filter, which practiceSessions to fetch.
     */
    where?: practiceSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practiceSessions to fetch.
     */
    orderBy?: practiceSessionOrderByWithRelationInput | practiceSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing practiceSessions.
     */
    cursor?: practiceSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practiceSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practiceSessions.
     */
    skip?: number
    distinct?: PracticeSessionScalarFieldEnum | PracticeSessionScalarFieldEnum[]
  }

  /**
   * practiceSession create
   */
  export type practiceSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a practiceSession.
     */
    data: XOR<practiceSessionCreateInput, practiceSessionUncheckedCreateInput>
  }

  /**
   * practiceSession createMany
   */
  export type practiceSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many practiceSessions.
     */
    data: practiceSessionCreateManyInput | practiceSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * practiceSession createManyAndReturn
   */
  export type practiceSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * The data used to create many practiceSessions.
     */
    data: practiceSessionCreateManyInput | practiceSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * practiceSession update
   */
  export type practiceSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a practiceSession.
     */
    data: XOR<practiceSessionUpdateInput, practiceSessionUncheckedUpdateInput>
    /**
     * Choose, which practiceSession to update.
     */
    where: practiceSessionWhereUniqueInput
  }

  /**
   * practiceSession updateMany
   */
  export type practiceSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update practiceSessions.
     */
    data: XOR<practiceSessionUpdateManyMutationInput, practiceSessionUncheckedUpdateManyInput>
    /**
     * Filter which practiceSessions to update
     */
    where?: practiceSessionWhereInput
    /**
     * Limit how many practiceSessions to update.
     */
    limit?: number
  }

  /**
   * practiceSession updateManyAndReturn
   */
  export type practiceSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * The data used to update practiceSessions.
     */
    data: XOR<practiceSessionUpdateManyMutationInput, practiceSessionUncheckedUpdateManyInput>
    /**
     * Filter which practiceSessions to update
     */
    where?: practiceSessionWhereInput
    /**
     * Limit how many practiceSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * practiceSession upsert
   */
  export type practiceSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the practiceSession to update in case it exists.
     */
    where: practiceSessionWhereUniqueInput
    /**
     * In case the practiceSession found by the `where` argument doesn't exist, create a new practiceSession with this data.
     */
    create: XOR<practiceSessionCreateInput, practiceSessionUncheckedCreateInput>
    /**
     * In case the practiceSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<practiceSessionUpdateInput, practiceSessionUncheckedUpdateInput>
  }

  /**
   * practiceSession delete
   */
  export type practiceSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
    /**
     * Filter which practiceSession to delete.
     */
    where: practiceSessionWhereUniqueInput
  }

  /**
   * practiceSession deleteMany
   */
  export type practiceSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which practiceSessions to delete
     */
    where?: practiceSessionWhereInput
    /**
     * Limit how many practiceSessions to delete.
     */
    limit?: number
  }

  /**
   * practiceSession.practicedPieces
   */
  export type practiceSession$practicedPiecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    where?: practicedPieceWhereInput
    orderBy?: practicedPieceOrderByWithRelationInput | practicedPieceOrderByWithRelationInput[]
    cursor?: practicedPieceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticedPieceScalarFieldEnum | PracticedPieceScalarFieldEnum[]
  }

  /**
   * practiceSession without action
   */
  export type practiceSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practiceSession
     */
    select?: practiceSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practiceSession
     */
    omit?: practiceSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practiceSessionInclude<ExtArgs> | null
  }


  /**
   * Model piece
   */

  export type AggregatePiece = {
    _count: PieceCountAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  export type PieceMinAggregateOutputType = {
    id: string | null
    title: string | null
    composer: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleteAt: Date | null
  }

  export type PieceMaxAggregateOutputType = {
    id: string | null
    title: string | null
    composer: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deleteAt: Date | null
  }

  export type PieceCountAggregateOutputType = {
    id: number
    title: number
    composer: number
    createdAt: number
    updatedAt: number
    deleteAt: number
    _all: number
  }


  export type PieceMinAggregateInputType = {
    id?: true
    title?: true
    composer?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
  }

  export type PieceMaxAggregateInputType = {
    id?: true
    title?: true
    composer?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
  }

  export type PieceCountAggregateInputType = {
    id?: true
    title?: true
    composer?: true
    createdAt?: true
    updatedAt?: true
    deleteAt?: true
    _all?: true
  }

  export type PieceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which piece to aggregate.
     */
    where?: pieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pieces to fetch.
     */
    orderBy?: pieceOrderByWithRelationInput | pieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pieces
    **/
    _count?: true | PieceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PieceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PieceMaxAggregateInputType
  }

  export type GetPieceAggregateType<T extends PieceAggregateArgs> = {
        [P in keyof T & keyof AggregatePiece]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePiece[P]>
      : GetScalarType<T[P], AggregatePiece[P]>
  }




  export type pieceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pieceWhereInput
    orderBy?: pieceOrderByWithAggregationInput | pieceOrderByWithAggregationInput[]
    by: PieceScalarFieldEnum[] | PieceScalarFieldEnum
    having?: pieceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PieceCountAggregateInputType | true
    _min?: PieceMinAggregateInputType
    _max?: PieceMaxAggregateInputType
  }

  export type PieceGroupByOutputType = {
    id: string
    title: string
    composer: string
    createdAt: Date
    updatedAt: Date
    deleteAt: Date | null
    _count: PieceCountAggregateOutputType | null
    _min: PieceMinAggregateOutputType | null
    _max: PieceMaxAggregateOutputType | null
  }

  type GetPieceGroupByPayload<T extends pieceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PieceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PieceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PieceGroupByOutputType[P]>
            : GetScalarType<T[P], PieceGroupByOutputType[P]>
        }
      >
    >


  export type pieceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    composer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleteAt?: boolean
    practicedPieces?: boolean | piece$practicedPiecesArgs<ExtArgs>
    _count?: boolean | PieceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["piece"]>

  export type pieceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    composer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleteAt?: boolean
  }, ExtArgs["result"]["piece"]>

  export type pieceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    composer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleteAt?: boolean
  }, ExtArgs["result"]["piece"]>

  export type pieceSelectScalar = {
    id?: boolean
    title?: boolean
    composer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deleteAt?: boolean
  }

  export type pieceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "composer" | "createdAt" | "updatedAt" | "deleteAt", ExtArgs["result"]["piece"]>
  export type pieceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practicedPieces?: boolean | piece$practicedPiecesArgs<ExtArgs>
    _count?: boolean | PieceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type pieceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type pieceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $piecePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "piece"
    objects: {
      practicedPieces: Prisma.$practicedPiecePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      composer: string
      createdAt: Date
      updatedAt: Date
      deleteAt: Date | null
    }, ExtArgs["result"]["piece"]>
    composites: {}
  }

  type pieceGetPayload<S extends boolean | null | undefined | pieceDefaultArgs> = $Result.GetResult<Prisma.$piecePayload, S>

  type pieceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pieceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PieceCountAggregateInputType | true
    }

  export interface pieceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['piece'], meta: { name: 'piece' } }
    /**
     * Find zero or one Piece that matches the filter.
     * @param {pieceFindUniqueArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pieceFindUniqueArgs>(args: SelectSubset<T, pieceFindUniqueArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Piece that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pieceFindUniqueOrThrowArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pieceFindUniqueOrThrowArgs>(args: SelectSubset<T, pieceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piece that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pieceFindFirstArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pieceFindFirstArgs>(args?: SelectSubset<T, pieceFindFirstArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Piece that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pieceFindFirstOrThrowArgs} args - Arguments to find a Piece
     * @example
     * // Get one Piece
     * const piece = await prisma.piece.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pieceFindFirstOrThrowArgs>(args?: SelectSubset<T, pieceFindFirstOrThrowArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pieces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pieceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pieces
     * const pieces = await prisma.piece.findMany()
     * 
     * // Get first 10 Pieces
     * const pieces = await prisma.piece.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pieceWithIdOnly = await prisma.piece.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pieceFindManyArgs>(args?: SelectSubset<T, pieceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Piece.
     * @param {pieceCreateArgs} args - Arguments to create a Piece.
     * @example
     * // Create one Piece
     * const Piece = await prisma.piece.create({
     *   data: {
     *     // ... data to create a Piece
     *   }
     * })
     * 
     */
    create<T extends pieceCreateArgs>(args: SelectSubset<T, pieceCreateArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pieces.
     * @param {pieceCreateManyArgs} args - Arguments to create many Pieces.
     * @example
     * // Create many Pieces
     * const piece = await prisma.piece.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pieceCreateManyArgs>(args?: SelectSubset<T, pieceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pieces and returns the data saved in the database.
     * @param {pieceCreateManyAndReturnArgs} args - Arguments to create many Pieces.
     * @example
     * // Create many Pieces
     * const piece = await prisma.piece.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pieces and only return the `id`
     * const pieceWithIdOnly = await prisma.piece.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pieceCreateManyAndReturnArgs>(args?: SelectSubset<T, pieceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Piece.
     * @param {pieceDeleteArgs} args - Arguments to delete one Piece.
     * @example
     * // Delete one Piece
     * const Piece = await prisma.piece.delete({
     *   where: {
     *     // ... filter to delete one Piece
     *   }
     * })
     * 
     */
    delete<T extends pieceDeleteArgs>(args: SelectSubset<T, pieceDeleteArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Piece.
     * @param {pieceUpdateArgs} args - Arguments to update one Piece.
     * @example
     * // Update one Piece
     * const piece = await prisma.piece.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pieceUpdateArgs>(args: SelectSubset<T, pieceUpdateArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pieces.
     * @param {pieceDeleteManyArgs} args - Arguments to filter Pieces to delete.
     * @example
     * // Delete a few Pieces
     * const { count } = await prisma.piece.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pieceDeleteManyArgs>(args?: SelectSubset<T, pieceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pieceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pieces
     * const piece = await prisma.piece.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pieceUpdateManyArgs>(args: SelectSubset<T, pieceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pieces and returns the data updated in the database.
     * @param {pieceUpdateManyAndReturnArgs} args - Arguments to update many Pieces.
     * @example
     * // Update many Pieces
     * const piece = await prisma.piece.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pieces and only return the `id`
     * const pieceWithIdOnly = await prisma.piece.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends pieceUpdateManyAndReturnArgs>(args: SelectSubset<T, pieceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Piece.
     * @param {pieceUpsertArgs} args - Arguments to update or create a Piece.
     * @example
     * // Update or create a Piece
     * const piece = await prisma.piece.upsert({
     *   create: {
     *     // ... data to create a Piece
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Piece we want to update
     *   }
     * })
     */
    upsert<T extends pieceUpsertArgs>(args: SelectSubset<T, pieceUpsertArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pieceCountArgs} args - Arguments to filter Pieces to count.
     * @example
     * // Count the number of Pieces
     * const count = await prisma.piece.count({
     *   where: {
     *     // ... the filter for the Pieces we want to count
     *   }
     * })
    **/
    count<T extends pieceCountArgs>(
      args?: Subset<T, pieceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PieceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PieceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PieceAggregateArgs>(args: Subset<T, PieceAggregateArgs>): Prisma.PrismaPromise<GetPieceAggregateType<T>>

    /**
     * Group by Piece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pieceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pieceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pieceGroupByArgs['orderBy'] }
        : { orderBy?: pieceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pieceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPieceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the piece model
   */
  readonly fields: pieceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for piece.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pieceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    practicedPieces<T extends piece$practicedPiecesArgs<ExtArgs> = {}>(args?: Subset<T, piece$practicedPiecesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the piece model
   */
  interface pieceFieldRefs {
    readonly id: FieldRef<"piece", 'String'>
    readonly title: FieldRef<"piece", 'String'>
    readonly composer: FieldRef<"piece", 'String'>
    readonly createdAt: FieldRef<"piece", 'DateTime'>
    readonly updatedAt: FieldRef<"piece", 'DateTime'>
    readonly deleteAt: FieldRef<"piece", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * piece findUnique
   */
  export type pieceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * Filter, which piece to fetch.
     */
    where: pieceWhereUniqueInput
  }

  /**
   * piece findUniqueOrThrow
   */
  export type pieceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * Filter, which piece to fetch.
     */
    where: pieceWhereUniqueInput
  }

  /**
   * piece findFirst
   */
  export type pieceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * Filter, which piece to fetch.
     */
    where?: pieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pieces to fetch.
     */
    orderBy?: pieceOrderByWithRelationInput | pieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pieces.
     */
    cursor?: pieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pieces.
     */
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * piece findFirstOrThrow
   */
  export type pieceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * Filter, which piece to fetch.
     */
    where?: pieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pieces to fetch.
     */
    orderBy?: pieceOrderByWithRelationInput | pieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pieces.
     */
    cursor?: pieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pieces.
     */
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * piece findMany
   */
  export type pieceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * Filter, which pieces to fetch.
     */
    where?: pieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pieces to fetch.
     */
    orderBy?: pieceOrderByWithRelationInput | pieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pieces.
     */
    cursor?: pieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pieces.
     */
    skip?: number
    distinct?: PieceScalarFieldEnum | PieceScalarFieldEnum[]
  }

  /**
   * piece create
   */
  export type pieceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * The data needed to create a piece.
     */
    data: XOR<pieceCreateInput, pieceUncheckedCreateInput>
  }

  /**
   * piece createMany
   */
  export type pieceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pieces.
     */
    data: pieceCreateManyInput | pieceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * piece createManyAndReturn
   */
  export type pieceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * The data used to create many pieces.
     */
    data: pieceCreateManyInput | pieceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * piece update
   */
  export type pieceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * The data needed to update a piece.
     */
    data: XOR<pieceUpdateInput, pieceUncheckedUpdateInput>
    /**
     * Choose, which piece to update.
     */
    where: pieceWhereUniqueInput
  }

  /**
   * piece updateMany
   */
  export type pieceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pieces.
     */
    data: XOR<pieceUpdateManyMutationInput, pieceUncheckedUpdateManyInput>
    /**
     * Filter which pieces to update
     */
    where?: pieceWhereInput
    /**
     * Limit how many pieces to update.
     */
    limit?: number
  }

  /**
   * piece updateManyAndReturn
   */
  export type pieceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * The data used to update pieces.
     */
    data: XOR<pieceUpdateManyMutationInput, pieceUncheckedUpdateManyInput>
    /**
     * Filter which pieces to update
     */
    where?: pieceWhereInput
    /**
     * Limit how many pieces to update.
     */
    limit?: number
  }

  /**
   * piece upsert
   */
  export type pieceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * The filter to search for the piece to update in case it exists.
     */
    where: pieceWhereUniqueInput
    /**
     * In case the piece found by the `where` argument doesn't exist, create a new piece with this data.
     */
    create: XOR<pieceCreateInput, pieceUncheckedCreateInput>
    /**
     * In case the piece was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pieceUpdateInput, pieceUncheckedUpdateInput>
  }

  /**
   * piece delete
   */
  export type pieceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
    /**
     * Filter which piece to delete.
     */
    where: pieceWhereUniqueInput
  }

  /**
   * piece deleteMany
   */
  export type pieceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pieces to delete
     */
    where?: pieceWhereInput
    /**
     * Limit how many pieces to delete.
     */
    limit?: number
  }

  /**
   * piece.practicedPieces
   */
  export type piece$practicedPiecesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    where?: practicedPieceWhereInput
    orderBy?: practicedPieceOrderByWithRelationInput | practicedPieceOrderByWithRelationInput[]
    cursor?: practicedPieceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PracticedPieceScalarFieldEnum | PracticedPieceScalarFieldEnum[]
  }

  /**
   * piece without action
   */
  export type pieceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piece
     */
    select?: pieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the piece
     */
    omit?: pieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pieceInclude<ExtArgs> | null
  }


  /**
   * Model practicedPiece
   */

  export type AggregatePracticedPiece = {
    _count: PracticedPieceCountAggregateOutputType | null
    _min: PracticedPieceMinAggregateOutputType | null
    _max: PracticedPieceMaxAggregateOutputType | null
  }

  export type PracticedPieceMinAggregateOutputType = {
    id: string | null
    practiceSessionId: string | null
    pieceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PracticedPieceMaxAggregateOutputType = {
    id: string | null
    practiceSessionId: string | null
    pieceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PracticedPieceCountAggregateOutputType = {
    id: number
    practiceSessionId: number
    pieceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PracticedPieceMinAggregateInputType = {
    id?: true
    practiceSessionId?: true
    pieceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PracticedPieceMaxAggregateInputType = {
    id?: true
    practiceSessionId?: true
    pieceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PracticedPieceCountAggregateInputType = {
    id?: true
    practiceSessionId?: true
    pieceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PracticedPieceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which practicedPiece to aggregate.
     */
    where?: practicedPieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practicedPieces to fetch.
     */
    orderBy?: practicedPieceOrderByWithRelationInput | practicedPieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: practicedPieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practicedPieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practicedPieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned practicedPieces
    **/
    _count?: true | PracticedPieceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PracticedPieceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PracticedPieceMaxAggregateInputType
  }

  export type GetPracticedPieceAggregateType<T extends PracticedPieceAggregateArgs> = {
        [P in keyof T & keyof AggregatePracticedPiece]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePracticedPiece[P]>
      : GetScalarType<T[P], AggregatePracticedPiece[P]>
  }




  export type practicedPieceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: practicedPieceWhereInput
    orderBy?: practicedPieceOrderByWithAggregationInput | practicedPieceOrderByWithAggregationInput[]
    by: PracticedPieceScalarFieldEnum[] | PracticedPieceScalarFieldEnum
    having?: practicedPieceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PracticedPieceCountAggregateInputType | true
    _min?: PracticedPieceMinAggregateInputType
    _max?: PracticedPieceMaxAggregateInputType
  }

  export type PracticedPieceGroupByOutputType = {
    id: string
    practiceSessionId: string
    pieceId: string
    createdAt: Date
    updatedAt: Date
    _count: PracticedPieceCountAggregateOutputType | null
    _min: PracticedPieceMinAggregateOutputType | null
    _max: PracticedPieceMaxAggregateOutputType | null
  }

  type GetPracticedPieceGroupByPayload<T extends practicedPieceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PracticedPieceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PracticedPieceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PracticedPieceGroupByOutputType[P]>
            : GetScalarType<T[P], PracticedPieceGroupByOutputType[P]>
        }
      >
    >


  export type practicedPieceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceSessionId?: boolean
    pieceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    practiceSession?: boolean | practiceSessionDefaultArgs<ExtArgs>
    pieces?: boolean | pieceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practicedPiece"]>

  export type practicedPieceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceSessionId?: boolean
    pieceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    practiceSession?: boolean | practiceSessionDefaultArgs<ExtArgs>
    pieces?: boolean | pieceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practicedPiece"]>

  export type practicedPieceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    practiceSessionId?: boolean
    pieceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    practiceSession?: boolean | practiceSessionDefaultArgs<ExtArgs>
    pieces?: boolean | pieceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["practicedPiece"]>

  export type practicedPieceSelectScalar = {
    id?: boolean
    practiceSessionId?: boolean
    pieceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type practicedPieceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "practiceSessionId" | "pieceId" | "createdAt" | "updatedAt", ExtArgs["result"]["practicedPiece"]>
  export type practicedPieceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceSession?: boolean | practiceSessionDefaultArgs<ExtArgs>
    pieces?: boolean | pieceDefaultArgs<ExtArgs>
  }
  export type practicedPieceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceSession?: boolean | practiceSessionDefaultArgs<ExtArgs>
    pieces?: boolean | pieceDefaultArgs<ExtArgs>
  }
  export type practicedPieceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    practiceSession?: boolean | practiceSessionDefaultArgs<ExtArgs>
    pieces?: boolean | pieceDefaultArgs<ExtArgs>
  }

  export type $practicedPiecePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "practicedPiece"
    objects: {
      practiceSession: Prisma.$practiceSessionPayload<ExtArgs>
      pieces: Prisma.$piecePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      practiceSessionId: string
      pieceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["practicedPiece"]>
    composites: {}
  }

  type practicedPieceGetPayload<S extends boolean | null | undefined | practicedPieceDefaultArgs> = $Result.GetResult<Prisma.$practicedPiecePayload, S>

  type practicedPieceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<practicedPieceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PracticedPieceCountAggregateInputType | true
    }

  export interface practicedPieceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['practicedPiece'], meta: { name: 'practicedPiece' } }
    /**
     * Find zero or one PracticedPiece that matches the filter.
     * @param {practicedPieceFindUniqueArgs} args - Arguments to find a PracticedPiece
     * @example
     * // Get one PracticedPiece
     * const practicedPiece = await prisma.practicedPiece.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends practicedPieceFindUniqueArgs>(args: SelectSubset<T, practicedPieceFindUniqueArgs<ExtArgs>>): Prisma__practicedPieceClient<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PracticedPiece that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {practicedPieceFindUniqueOrThrowArgs} args - Arguments to find a PracticedPiece
     * @example
     * // Get one PracticedPiece
     * const practicedPiece = await prisma.practicedPiece.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends practicedPieceFindUniqueOrThrowArgs>(args: SelectSubset<T, practicedPieceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__practicedPieceClient<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticedPiece that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicedPieceFindFirstArgs} args - Arguments to find a PracticedPiece
     * @example
     * // Get one PracticedPiece
     * const practicedPiece = await prisma.practicedPiece.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends practicedPieceFindFirstArgs>(args?: SelectSubset<T, practicedPieceFindFirstArgs<ExtArgs>>): Prisma__practicedPieceClient<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PracticedPiece that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicedPieceFindFirstOrThrowArgs} args - Arguments to find a PracticedPiece
     * @example
     * // Get one PracticedPiece
     * const practicedPiece = await prisma.practicedPiece.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends practicedPieceFindFirstOrThrowArgs>(args?: SelectSubset<T, practicedPieceFindFirstOrThrowArgs<ExtArgs>>): Prisma__practicedPieceClient<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PracticedPieces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicedPieceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PracticedPieces
     * const practicedPieces = await prisma.practicedPiece.findMany()
     * 
     * // Get first 10 PracticedPieces
     * const practicedPieces = await prisma.practicedPiece.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const practicedPieceWithIdOnly = await prisma.practicedPiece.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends practicedPieceFindManyArgs>(args?: SelectSubset<T, practicedPieceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PracticedPiece.
     * @param {practicedPieceCreateArgs} args - Arguments to create a PracticedPiece.
     * @example
     * // Create one PracticedPiece
     * const PracticedPiece = await prisma.practicedPiece.create({
     *   data: {
     *     // ... data to create a PracticedPiece
     *   }
     * })
     * 
     */
    create<T extends practicedPieceCreateArgs>(args: SelectSubset<T, practicedPieceCreateArgs<ExtArgs>>): Prisma__practicedPieceClient<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PracticedPieces.
     * @param {practicedPieceCreateManyArgs} args - Arguments to create many PracticedPieces.
     * @example
     * // Create many PracticedPieces
     * const practicedPiece = await prisma.practicedPiece.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends practicedPieceCreateManyArgs>(args?: SelectSubset<T, practicedPieceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PracticedPieces and returns the data saved in the database.
     * @param {practicedPieceCreateManyAndReturnArgs} args - Arguments to create many PracticedPieces.
     * @example
     * // Create many PracticedPieces
     * const practicedPiece = await prisma.practicedPiece.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PracticedPieces and only return the `id`
     * const practicedPieceWithIdOnly = await prisma.practicedPiece.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends practicedPieceCreateManyAndReturnArgs>(args?: SelectSubset<T, practicedPieceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PracticedPiece.
     * @param {practicedPieceDeleteArgs} args - Arguments to delete one PracticedPiece.
     * @example
     * // Delete one PracticedPiece
     * const PracticedPiece = await prisma.practicedPiece.delete({
     *   where: {
     *     // ... filter to delete one PracticedPiece
     *   }
     * })
     * 
     */
    delete<T extends practicedPieceDeleteArgs>(args: SelectSubset<T, practicedPieceDeleteArgs<ExtArgs>>): Prisma__practicedPieceClient<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PracticedPiece.
     * @param {practicedPieceUpdateArgs} args - Arguments to update one PracticedPiece.
     * @example
     * // Update one PracticedPiece
     * const practicedPiece = await prisma.practicedPiece.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends practicedPieceUpdateArgs>(args: SelectSubset<T, practicedPieceUpdateArgs<ExtArgs>>): Prisma__practicedPieceClient<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PracticedPieces.
     * @param {practicedPieceDeleteManyArgs} args - Arguments to filter PracticedPieces to delete.
     * @example
     * // Delete a few PracticedPieces
     * const { count } = await prisma.practicedPiece.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends practicedPieceDeleteManyArgs>(args?: SelectSubset<T, practicedPieceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticedPieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicedPieceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PracticedPieces
     * const practicedPiece = await prisma.practicedPiece.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends practicedPieceUpdateManyArgs>(args: SelectSubset<T, practicedPieceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PracticedPieces and returns the data updated in the database.
     * @param {practicedPieceUpdateManyAndReturnArgs} args - Arguments to update many PracticedPieces.
     * @example
     * // Update many PracticedPieces
     * const practicedPiece = await prisma.practicedPiece.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PracticedPieces and only return the `id`
     * const practicedPieceWithIdOnly = await prisma.practicedPiece.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends practicedPieceUpdateManyAndReturnArgs>(args: SelectSubset<T, practicedPieceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PracticedPiece.
     * @param {practicedPieceUpsertArgs} args - Arguments to update or create a PracticedPiece.
     * @example
     * // Update or create a PracticedPiece
     * const practicedPiece = await prisma.practicedPiece.upsert({
     *   create: {
     *     // ... data to create a PracticedPiece
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PracticedPiece we want to update
     *   }
     * })
     */
    upsert<T extends practicedPieceUpsertArgs>(args: SelectSubset<T, practicedPieceUpsertArgs<ExtArgs>>): Prisma__practicedPieceClient<$Result.GetResult<Prisma.$practicedPiecePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PracticedPieces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicedPieceCountArgs} args - Arguments to filter PracticedPieces to count.
     * @example
     * // Count the number of PracticedPieces
     * const count = await prisma.practicedPiece.count({
     *   where: {
     *     // ... the filter for the PracticedPieces we want to count
     *   }
     * })
    **/
    count<T extends practicedPieceCountArgs>(
      args?: Subset<T, practicedPieceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PracticedPieceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PracticedPiece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PracticedPieceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PracticedPieceAggregateArgs>(args: Subset<T, PracticedPieceAggregateArgs>): Prisma.PrismaPromise<GetPracticedPieceAggregateType<T>>

    /**
     * Group by PracticedPiece.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {practicedPieceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends practicedPieceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: practicedPieceGroupByArgs['orderBy'] }
        : { orderBy?: practicedPieceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, practicedPieceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPracticedPieceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the practicedPiece model
   */
  readonly fields: practicedPieceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for practicedPiece.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__practicedPieceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    practiceSession<T extends practiceSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, practiceSessionDefaultArgs<ExtArgs>>): Prisma__practiceSessionClient<$Result.GetResult<Prisma.$practiceSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pieces<T extends pieceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pieceDefaultArgs<ExtArgs>>): Prisma__pieceClient<$Result.GetResult<Prisma.$piecePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the practicedPiece model
   */
  interface practicedPieceFieldRefs {
    readonly id: FieldRef<"practicedPiece", 'String'>
    readonly practiceSessionId: FieldRef<"practicedPiece", 'String'>
    readonly pieceId: FieldRef<"practicedPiece", 'String'>
    readonly createdAt: FieldRef<"practicedPiece", 'DateTime'>
    readonly updatedAt: FieldRef<"practicedPiece", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * practicedPiece findUnique
   */
  export type practicedPieceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * Filter, which practicedPiece to fetch.
     */
    where: practicedPieceWhereUniqueInput
  }

  /**
   * practicedPiece findUniqueOrThrow
   */
  export type practicedPieceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * Filter, which practicedPiece to fetch.
     */
    where: practicedPieceWhereUniqueInput
  }

  /**
   * practicedPiece findFirst
   */
  export type practicedPieceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * Filter, which practicedPiece to fetch.
     */
    where?: practicedPieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practicedPieces to fetch.
     */
    orderBy?: practicedPieceOrderByWithRelationInput | practicedPieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for practicedPieces.
     */
    cursor?: practicedPieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practicedPieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practicedPieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of practicedPieces.
     */
    distinct?: PracticedPieceScalarFieldEnum | PracticedPieceScalarFieldEnum[]
  }

  /**
   * practicedPiece findFirstOrThrow
   */
  export type practicedPieceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * Filter, which practicedPiece to fetch.
     */
    where?: practicedPieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practicedPieces to fetch.
     */
    orderBy?: practicedPieceOrderByWithRelationInput | practicedPieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for practicedPieces.
     */
    cursor?: practicedPieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practicedPieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practicedPieces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of practicedPieces.
     */
    distinct?: PracticedPieceScalarFieldEnum | PracticedPieceScalarFieldEnum[]
  }

  /**
   * practicedPiece findMany
   */
  export type practicedPieceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * Filter, which practicedPieces to fetch.
     */
    where?: practicedPieceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of practicedPieces to fetch.
     */
    orderBy?: practicedPieceOrderByWithRelationInput | practicedPieceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing practicedPieces.
     */
    cursor?: practicedPieceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` practicedPieces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` practicedPieces.
     */
    skip?: number
    distinct?: PracticedPieceScalarFieldEnum | PracticedPieceScalarFieldEnum[]
  }

  /**
   * practicedPiece create
   */
  export type practicedPieceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * The data needed to create a practicedPiece.
     */
    data: XOR<practicedPieceCreateInput, practicedPieceUncheckedCreateInput>
  }

  /**
   * practicedPiece createMany
   */
  export type practicedPieceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many practicedPieces.
     */
    data: practicedPieceCreateManyInput | practicedPieceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * practicedPiece createManyAndReturn
   */
  export type practicedPieceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * The data used to create many practicedPieces.
     */
    data: practicedPieceCreateManyInput | practicedPieceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * practicedPiece update
   */
  export type practicedPieceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * The data needed to update a practicedPiece.
     */
    data: XOR<practicedPieceUpdateInput, practicedPieceUncheckedUpdateInput>
    /**
     * Choose, which practicedPiece to update.
     */
    where: practicedPieceWhereUniqueInput
  }

  /**
   * practicedPiece updateMany
   */
  export type practicedPieceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update practicedPieces.
     */
    data: XOR<practicedPieceUpdateManyMutationInput, practicedPieceUncheckedUpdateManyInput>
    /**
     * Filter which practicedPieces to update
     */
    where?: practicedPieceWhereInput
    /**
     * Limit how many practicedPieces to update.
     */
    limit?: number
  }

  /**
   * practicedPiece updateManyAndReturn
   */
  export type practicedPieceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * The data used to update practicedPieces.
     */
    data: XOR<practicedPieceUpdateManyMutationInput, practicedPieceUncheckedUpdateManyInput>
    /**
     * Filter which practicedPieces to update
     */
    where?: practicedPieceWhereInput
    /**
     * Limit how many practicedPieces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * practicedPiece upsert
   */
  export type practicedPieceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * The filter to search for the practicedPiece to update in case it exists.
     */
    where: practicedPieceWhereUniqueInput
    /**
     * In case the practicedPiece found by the `where` argument doesn't exist, create a new practicedPiece with this data.
     */
    create: XOR<practicedPieceCreateInput, practicedPieceUncheckedCreateInput>
    /**
     * In case the practicedPiece was found with the provided `where` argument, update it with this data.
     */
    update: XOR<practicedPieceUpdateInput, practicedPieceUncheckedUpdateInput>
  }

  /**
   * practicedPiece delete
   */
  export type practicedPieceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
    /**
     * Filter which practicedPiece to delete.
     */
    where: practicedPieceWhereUniqueInput
  }

  /**
   * practicedPiece deleteMany
   */
  export type practicedPieceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which practicedPieces to delete
     */
    where?: practicedPieceWhereInput
    /**
     * Limit how many practicedPieces to delete.
     */
    limit?: number
  }

  /**
   * practicedPiece without action
   */
  export type practicedPieceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the practicedPiece
     */
    select?: practicedPieceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the practicedPiece
     */
    omit?: practicedPieceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: practicedPieceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    userName: 'userName',
    password: 'password',
    salt: 'salt',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PracticeSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    duration: 'duration',
    startDate: 'startDate',
    starteTime: 'starteTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    notes: 'notes'
  };

  export type PracticeSessionScalarFieldEnum = (typeof PracticeSessionScalarFieldEnum)[keyof typeof PracticeSessionScalarFieldEnum]


  export const PieceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    composer: 'composer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deleteAt: 'deleteAt'
  };

  export type PieceScalarFieldEnum = (typeof PieceScalarFieldEnum)[keyof typeof PieceScalarFieldEnum]


  export const PracticedPieceScalarFieldEnum: {
    id: 'id',
    practiceSessionId: 'practiceSessionId',
    pieceId: 'pieceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PracticedPieceScalarFieldEnum = (typeof PracticedPieceScalarFieldEnum)[keyof typeof PracticedPieceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    practiceSessions?: PracticeSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    practiceSessions?: practiceSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    userName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    salt?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    practiceSessions?: PracticeSessionListRelationFilter
  }, "id" | "phone" | "userName">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    userName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    salt?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type practiceSessionWhereInput = {
    AND?: practiceSessionWhereInput | practiceSessionWhereInput[]
    OR?: practiceSessionWhereInput[]
    NOT?: practiceSessionWhereInput | practiceSessionWhereInput[]
    id?: StringFilter<"practiceSession"> | string
    userId?: StringFilter<"practiceSession"> | string
    duration?: IntFilter<"practiceSession"> | number
    startDate?: DateTimeFilter<"practiceSession"> | Date | string
    starteTime?: DateTimeFilter<"practiceSession"> | Date | string
    createdAt?: DateTimeFilter<"practiceSession"> | Date | string
    updatedAt?: DateTimeFilter<"practiceSession"> | Date | string
    notes?: StringNullableFilter<"practiceSession"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    practicedPieces?: PracticedPieceListRelationFilter
  }

  export type practiceSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    starteTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    practicedPieces?: practicedPieceOrderByRelationAggregateInput
  }

  export type practiceSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: practiceSessionWhereInput | practiceSessionWhereInput[]
    OR?: practiceSessionWhereInput[]
    NOT?: practiceSessionWhereInput | practiceSessionWhereInput[]
    userId?: StringFilter<"practiceSession"> | string
    duration?: IntFilter<"practiceSession"> | number
    startDate?: DateTimeFilter<"practiceSession"> | Date | string
    starteTime?: DateTimeFilter<"practiceSession"> | Date | string
    createdAt?: DateTimeFilter<"practiceSession"> | Date | string
    updatedAt?: DateTimeFilter<"practiceSession"> | Date | string
    notes?: StringNullableFilter<"practiceSession"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    practicedPieces?: PracticedPieceListRelationFilter
  }, "id">

  export type practiceSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    starteTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: practiceSessionCountOrderByAggregateInput
    _avg?: practiceSessionAvgOrderByAggregateInput
    _max?: practiceSessionMaxOrderByAggregateInput
    _min?: practiceSessionMinOrderByAggregateInput
    _sum?: practiceSessionSumOrderByAggregateInput
  }

  export type practiceSessionScalarWhereWithAggregatesInput = {
    AND?: practiceSessionScalarWhereWithAggregatesInput | practiceSessionScalarWhereWithAggregatesInput[]
    OR?: practiceSessionScalarWhereWithAggregatesInput[]
    NOT?: practiceSessionScalarWhereWithAggregatesInput | practiceSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"practiceSession"> | string
    userId?: StringWithAggregatesFilter<"practiceSession"> | string
    duration?: IntWithAggregatesFilter<"practiceSession"> | number
    startDate?: DateTimeWithAggregatesFilter<"practiceSession"> | Date | string
    starteTime?: DateTimeWithAggregatesFilter<"practiceSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"practiceSession"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"practiceSession"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"practiceSession"> | string | null
  }

  export type pieceWhereInput = {
    AND?: pieceWhereInput | pieceWhereInput[]
    OR?: pieceWhereInput[]
    NOT?: pieceWhereInput | pieceWhereInput[]
    id?: StringFilter<"piece"> | string
    title?: StringFilter<"piece"> | string
    composer?: StringFilter<"piece"> | string
    createdAt?: DateTimeFilter<"piece"> | Date | string
    updatedAt?: DateTimeFilter<"piece"> | Date | string
    deleteAt?: DateTimeNullableFilter<"piece"> | Date | string | null
    practicedPieces?: PracticedPieceListRelationFilter
  }

  export type pieceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    composer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    practicedPieces?: practicedPieceOrderByRelationAggregateInput
  }

  export type pieceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: pieceWhereInput | pieceWhereInput[]
    OR?: pieceWhereInput[]
    NOT?: pieceWhereInput | pieceWhereInput[]
    title?: StringFilter<"piece"> | string
    composer?: StringFilter<"piece"> | string
    createdAt?: DateTimeFilter<"piece"> | Date | string
    updatedAt?: DateTimeFilter<"piece"> | Date | string
    deleteAt?: DateTimeNullableFilter<"piece"> | Date | string | null
    practicedPieces?: PracticedPieceListRelationFilter
  }, "id">

  export type pieceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    composer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrderInput | SortOrder
    _count?: pieceCountOrderByAggregateInput
    _max?: pieceMaxOrderByAggregateInput
    _min?: pieceMinOrderByAggregateInput
  }

  export type pieceScalarWhereWithAggregatesInput = {
    AND?: pieceScalarWhereWithAggregatesInput | pieceScalarWhereWithAggregatesInput[]
    OR?: pieceScalarWhereWithAggregatesInput[]
    NOT?: pieceScalarWhereWithAggregatesInput | pieceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"piece"> | string
    title?: StringWithAggregatesFilter<"piece"> | string
    composer?: StringWithAggregatesFilter<"piece"> | string
    createdAt?: DateTimeWithAggregatesFilter<"piece"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"piece"> | Date | string
    deleteAt?: DateTimeNullableWithAggregatesFilter<"piece"> | Date | string | null
  }

  export type practicedPieceWhereInput = {
    AND?: practicedPieceWhereInput | practicedPieceWhereInput[]
    OR?: practicedPieceWhereInput[]
    NOT?: practicedPieceWhereInput | practicedPieceWhereInput[]
    id?: StringFilter<"practicedPiece"> | string
    practiceSessionId?: StringFilter<"practicedPiece"> | string
    pieceId?: StringFilter<"practicedPiece"> | string
    createdAt?: DateTimeFilter<"practicedPiece"> | Date | string
    updatedAt?: DateTimeFilter<"practicedPiece"> | Date | string
    practiceSession?: XOR<PracticeSessionScalarRelationFilter, practiceSessionWhereInput>
    pieces?: XOR<PieceScalarRelationFilter, pieceWhereInput>
  }

  export type practicedPieceOrderByWithRelationInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    pieceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    practiceSession?: practiceSessionOrderByWithRelationInput
    pieces?: pieceOrderByWithRelationInput
  }

  export type practicedPieceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: practicedPieceWhereInput | practicedPieceWhereInput[]
    OR?: practicedPieceWhereInput[]
    NOT?: practicedPieceWhereInput | practicedPieceWhereInput[]
    practiceSessionId?: StringFilter<"practicedPiece"> | string
    pieceId?: StringFilter<"practicedPiece"> | string
    createdAt?: DateTimeFilter<"practicedPiece"> | Date | string
    updatedAt?: DateTimeFilter<"practicedPiece"> | Date | string
    practiceSession?: XOR<PracticeSessionScalarRelationFilter, practiceSessionWhereInput>
    pieces?: XOR<PieceScalarRelationFilter, pieceWhereInput>
  }, "id">

  export type practicedPieceOrderByWithAggregationInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    pieceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: practicedPieceCountOrderByAggregateInput
    _max?: practicedPieceMaxOrderByAggregateInput
    _min?: practicedPieceMinOrderByAggregateInput
  }

  export type practicedPieceScalarWhereWithAggregatesInput = {
    AND?: practicedPieceScalarWhereWithAggregatesInput | practicedPieceScalarWhereWithAggregatesInput[]
    OR?: practicedPieceScalarWhereWithAggregatesInput[]
    NOT?: practicedPieceScalarWhereWithAggregatesInput | practicedPieceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"practicedPiece"> | string
    practiceSessionId?: StringWithAggregatesFilter<"practicedPiece"> | string
    pieceId?: StringWithAggregatesFilter<"practicedPiece"> | string
    createdAt?: DateTimeWithAggregatesFilter<"practicedPiece"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"practicedPiece"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    phone: string
    userName: string
    password: string
    salt: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceSessions?: practiceSessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    phone: string
    userName: string
    password: string
    salt: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceSessions?: practiceSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSessions?: practiceSessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSessions?: practiceSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    phone: string
    userName: string
    password: string
    salt: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type practiceSessionCreateInput = {
    id?: string
    duration: number
    startDate: Date | string
    starteTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutPracticeSessionsInput
    practicedPieces?: practicedPieceCreateNestedManyWithoutPracticeSessionInput
  }

  export type practiceSessionUncheckedCreateInput = {
    id?: string
    userId: string
    duration: number
    startDate: Date | string
    starteTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    practicedPieces?: practicedPieceUncheckedCreateNestedManyWithoutPracticeSessionInput
  }

  export type practiceSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPracticeSessionsNestedInput
    practicedPieces?: practicedPieceUpdateManyWithoutPracticeSessionNestedInput
  }

  export type practiceSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    practicedPieces?: practicedPieceUncheckedUpdateManyWithoutPracticeSessionNestedInput
  }

  export type practiceSessionCreateManyInput = {
    id?: string
    userId: string
    duration: number
    startDate: Date | string
    starteTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
  }

  export type practiceSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type practiceSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pieceCreateInput = {
    id?: string
    title: string
    composer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    practicedPieces?: practicedPieceCreateNestedManyWithoutPiecesInput
  }

  export type pieceUncheckedCreateInput = {
    id?: string
    title: string
    composer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
    practicedPieces?: practicedPieceUncheckedCreateNestedManyWithoutPiecesInput
  }

  export type pieceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    composer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practicedPieces?: practicedPieceUpdateManyWithoutPiecesNestedInput
  }

  export type pieceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    composer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    practicedPieces?: practicedPieceUncheckedUpdateManyWithoutPiecesNestedInput
  }

  export type pieceCreateManyInput = {
    id?: string
    title: string
    composer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type pieceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    composer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pieceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    composer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type practicedPieceCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceSession: practiceSessionCreateNestedOneWithoutPracticedPiecesInput
    pieces: pieceCreateNestedOneWithoutPracticedPiecesInput
  }

  export type practicedPieceUncheckedCreateInput = {
    id?: string
    practiceSessionId: string
    pieceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type practicedPieceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSession?: practiceSessionUpdateOneRequiredWithoutPracticedPiecesNestedInput
    pieces?: pieceUpdateOneRequiredWithoutPracticedPiecesNestedInput
  }

  export type practicedPieceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    pieceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type practicedPieceCreateManyInput = {
    id?: string
    practiceSessionId: string
    pieceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type practicedPieceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type practicedPieceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    pieceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PracticeSessionListRelationFilter = {
    every?: practiceSessionWhereInput
    some?: practiceSessionWhereInput
    none?: practiceSessionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type practiceSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    salt?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PracticedPieceListRelationFilter = {
    every?: practicedPieceWhereInput
    some?: practicedPieceWhereInput
    none?: practicedPieceWhereInput
  }

  export type practicedPieceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type practiceSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    starteTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type practiceSessionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type practiceSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    starteTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type practiceSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duration?: SortOrder
    startDate?: SortOrder
    starteTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    notes?: SortOrder
  }

  export type practiceSessionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type pieceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    composer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type pieceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    composer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type pieceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    composer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deleteAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PracticeSessionScalarRelationFilter = {
    is?: practiceSessionWhereInput
    isNot?: practiceSessionWhereInput
  }

  export type PieceScalarRelationFilter = {
    is?: pieceWhereInput
    isNot?: pieceWhereInput
  }

  export type practicedPieceCountOrderByAggregateInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    pieceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type practicedPieceMaxOrderByAggregateInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    pieceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type practicedPieceMinOrderByAggregateInput = {
    id?: SortOrder
    practiceSessionId?: SortOrder
    pieceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type practiceSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<practiceSessionCreateWithoutUserInput, practiceSessionUncheckedCreateWithoutUserInput> | practiceSessionCreateWithoutUserInput[] | practiceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: practiceSessionCreateOrConnectWithoutUserInput | practiceSessionCreateOrConnectWithoutUserInput[]
    createMany?: practiceSessionCreateManyUserInputEnvelope
    connect?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
  }

  export type practiceSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<practiceSessionCreateWithoutUserInput, practiceSessionUncheckedCreateWithoutUserInput> | practiceSessionCreateWithoutUserInput[] | practiceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: practiceSessionCreateOrConnectWithoutUserInput | practiceSessionCreateOrConnectWithoutUserInput[]
    createMany?: practiceSessionCreateManyUserInputEnvelope
    connect?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type practiceSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<practiceSessionCreateWithoutUserInput, practiceSessionUncheckedCreateWithoutUserInput> | practiceSessionCreateWithoutUserInput[] | practiceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: practiceSessionCreateOrConnectWithoutUserInput | practiceSessionCreateOrConnectWithoutUserInput[]
    upsert?: practiceSessionUpsertWithWhereUniqueWithoutUserInput | practiceSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: practiceSessionCreateManyUserInputEnvelope
    set?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
    disconnect?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
    delete?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
    connect?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
    update?: practiceSessionUpdateWithWhereUniqueWithoutUserInput | practiceSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: practiceSessionUpdateManyWithWhereWithoutUserInput | practiceSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: practiceSessionScalarWhereInput | practiceSessionScalarWhereInput[]
  }

  export type practiceSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<practiceSessionCreateWithoutUserInput, practiceSessionUncheckedCreateWithoutUserInput> | practiceSessionCreateWithoutUserInput[] | practiceSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: practiceSessionCreateOrConnectWithoutUserInput | practiceSessionCreateOrConnectWithoutUserInput[]
    upsert?: practiceSessionUpsertWithWhereUniqueWithoutUserInput | practiceSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: practiceSessionCreateManyUserInputEnvelope
    set?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
    disconnect?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
    delete?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
    connect?: practiceSessionWhereUniqueInput | practiceSessionWhereUniqueInput[]
    update?: practiceSessionUpdateWithWhereUniqueWithoutUserInput | practiceSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: practiceSessionUpdateManyWithWhereWithoutUserInput | practiceSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: practiceSessionScalarWhereInput | practiceSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPracticeSessionsInput = {
    create?: XOR<UserCreateWithoutPracticeSessionsInput, UserUncheckedCreateWithoutPracticeSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPracticeSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type practicedPieceCreateNestedManyWithoutPracticeSessionInput = {
    create?: XOR<practicedPieceCreateWithoutPracticeSessionInput, practicedPieceUncheckedCreateWithoutPracticeSessionInput> | practicedPieceCreateWithoutPracticeSessionInput[] | practicedPieceUncheckedCreateWithoutPracticeSessionInput[]
    connectOrCreate?: practicedPieceCreateOrConnectWithoutPracticeSessionInput | practicedPieceCreateOrConnectWithoutPracticeSessionInput[]
    createMany?: practicedPieceCreateManyPracticeSessionInputEnvelope
    connect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
  }

  export type practicedPieceUncheckedCreateNestedManyWithoutPracticeSessionInput = {
    create?: XOR<practicedPieceCreateWithoutPracticeSessionInput, practicedPieceUncheckedCreateWithoutPracticeSessionInput> | practicedPieceCreateWithoutPracticeSessionInput[] | practicedPieceUncheckedCreateWithoutPracticeSessionInput[]
    connectOrCreate?: practicedPieceCreateOrConnectWithoutPracticeSessionInput | practicedPieceCreateOrConnectWithoutPracticeSessionInput[]
    createMany?: practicedPieceCreateManyPracticeSessionInputEnvelope
    connect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPracticeSessionsNestedInput = {
    create?: XOR<UserCreateWithoutPracticeSessionsInput, UserUncheckedCreateWithoutPracticeSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPracticeSessionsInput
    upsert?: UserUpsertWithoutPracticeSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPracticeSessionsInput, UserUpdateWithoutPracticeSessionsInput>, UserUncheckedUpdateWithoutPracticeSessionsInput>
  }

  export type practicedPieceUpdateManyWithoutPracticeSessionNestedInput = {
    create?: XOR<practicedPieceCreateWithoutPracticeSessionInput, practicedPieceUncheckedCreateWithoutPracticeSessionInput> | practicedPieceCreateWithoutPracticeSessionInput[] | practicedPieceUncheckedCreateWithoutPracticeSessionInput[]
    connectOrCreate?: practicedPieceCreateOrConnectWithoutPracticeSessionInput | practicedPieceCreateOrConnectWithoutPracticeSessionInput[]
    upsert?: practicedPieceUpsertWithWhereUniqueWithoutPracticeSessionInput | practicedPieceUpsertWithWhereUniqueWithoutPracticeSessionInput[]
    createMany?: practicedPieceCreateManyPracticeSessionInputEnvelope
    set?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    disconnect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    delete?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    connect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    update?: practicedPieceUpdateWithWhereUniqueWithoutPracticeSessionInput | practicedPieceUpdateWithWhereUniqueWithoutPracticeSessionInput[]
    updateMany?: practicedPieceUpdateManyWithWhereWithoutPracticeSessionInput | practicedPieceUpdateManyWithWhereWithoutPracticeSessionInput[]
    deleteMany?: practicedPieceScalarWhereInput | practicedPieceScalarWhereInput[]
  }

  export type practicedPieceUncheckedUpdateManyWithoutPracticeSessionNestedInput = {
    create?: XOR<practicedPieceCreateWithoutPracticeSessionInput, practicedPieceUncheckedCreateWithoutPracticeSessionInput> | practicedPieceCreateWithoutPracticeSessionInput[] | practicedPieceUncheckedCreateWithoutPracticeSessionInput[]
    connectOrCreate?: practicedPieceCreateOrConnectWithoutPracticeSessionInput | practicedPieceCreateOrConnectWithoutPracticeSessionInput[]
    upsert?: practicedPieceUpsertWithWhereUniqueWithoutPracticeSessionInput | practicedPieceUpsertWithWhereUniqueWithoutPracticeSessionInput[]
    createMany?: practicedPieceCreateManyPracticeSessionInputEnvelope
    set?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    disconnect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    delete?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    connect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    update?: practicedPieceUpdateWithWhereUniqueWithoutPracticeSessionInput | practicedPieceUpdateWithWhereUniqueWithoutPracticeSessionInput[]
    updateMany?: practicedPieceUpdateManyWithWhereWithoutPracticeSessionInput | practicedPieceUpdateManyWithWhereWithoutPracticeSessionInput[]
    deleteMany?: practicedPieceScalarWhereInput | practicedPieceScalarWhereInput[]
  }

  export type practicedPieceCreateNestedManyWithoutPiecesInput = {
    create?: XOR<practicedPieceCreateWithoutPiecesInput, practicedPieceUncheckedCreateWithoutPiecesInput> | practicedPieceCreateWithoutPiecesInput[] | practicedPieceUncheckedCreateWithoutPiecesInput[]
    connectOrCreate?: practicedPieceCreateOrConnectWithoutPiecesInput | practicedPieceCreateOrConnectWithoutPiecesInput[]
    createMany?: practicedPieceCreateManyPiecesInputEnvelope
    connect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
  }

  export type practicedPieceUncheckedCreateNestedManyWithoutPiecesInput = {
    create?: XOR<practicedPieceCreateWithoutPiecesInput, practicedPieceUncheckedCreateWithoutPiecesInput> | practicedPieceCreateWithoutPiecesInput[] | practicedPieceUncheckedCreateWithoutPiecesInput[]
    connectOrCreate?: practicedPieceCreateOrConnectWithoutPiecesInput | practicedPieceCreateOrConnectWithoutPiecesInput[]
    createMany?: practicedPieceCreateManyPiecesInputEnvelope
    connect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type practicedPieceUpdateManyWithoutPiecesNestedInput = {
    create?: XOR<practicedPieceCreateWithoutPiecesInput, practicedPieceUncheckedCreateWithoutPiecesInput> | practicedPieceCreateWithoutPiecesInput[] | practicedPieceUncheckedCreateWithoutPiecesInput[]
    connectOrCreate?: practicedPieceCreateOrConnectWithoutPiecesInput | practicedPieceCreateOrConnectWithoutPiecesInput[]
    upsert?: practicedPieceUpsertWithWhereUniqueWithoutPiecesInput | practicedPieceUpsertWithWhereUniqueWithoutPiecesInput[]
    createMany?: practicedPieceCreateManyPiecesInputEnvelope
    set?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    disconnect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    delete?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    connect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    update?: practicedPieceUpdateWithWhereUniqueWithoutPiecesInput | practicedPieceUpdateWithWhereUniqueWithoutPiecesInput[]
    updateMany?: practicedPieceUpdateManyWithWhereWithoutPiecesInput | practicedPieceUpdateManyWithWhereWithoutPiecesInput[]
    deleteMany?: practicedPieceScalarWhereInput | practicedPieceScalarWhereInput[]
  }

  export type practicedPieceUncheckedUpdateManyWithoutPiecesNestedInput = {
    create?: XOR<practicedPieceCreateWithoutPiecesInput, practicedPieceUncheckedCreateWithoutPiecesInput> | practicedPieceCreateWithoutPiecesInput[] | practicedPieceUncheckedCreateWithoutPiecesInput[]
    connectOrCreate?: practicedPieceCreateOrConnectWithoutPiecesInput | practicedPieceCreateOrConnectWithoutPiecesInput[]
    upsert?: practicedPieceUpsertWithWhereUniqueWithoutPiecesInput | practicedPieceUpsertWithWhereUniqueWithoutPiecesInput[]
    createMany?: practicedPieceCreateManyPiecesInputEnvelope
    set?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    disconnect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    delete?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    connect?: practicedPieceWhereUniqueInput | practicedPieceWhereUniqueInput[]
    update?: practicedPieceUpdateWithWhereUniqueWithoutPiecesInput | practicedPieceUpdateWithWhereUniqueWithoutPiecesInput[]
    updateMany?: practicedPieceUpdateManyWithWhereWithoutPiecesInput | practicedPieceUpdateManyWithWhereWithoutPiecesInput[]
    deleteMany?: practicedPieceScalarWhereInput | practicedPieceScalarWhereInput[]
  }

  export type practiceSessionCreateNestedOneWithoutPracticedPiecesInput = {
    create?: XOR<practiceSessionCreateWithoutPracticedPiecesInput, practiceSessionUncheckedCreateWithoutPracticedPiecesInput>
    connectOrCreate?: practiceSessionCreateOrConnectWithoutPracticedPiecesInput
    connect?: practiceSessionWhereUniqueInput
  }

  export type pieceCreateNestedOneWithoutPracticedPiecesInput = {
    create?: XOR<pieceCreateWithoutPracticedPiecesInput, pieceUncheckedCreateWithoutPracticedPiecesInput>
    connectOrCreate?: pieceCreateOrConnectWithoutPracticedPiecesInput
    connect?: pieceWhereUniqueInput
  }

  export type practiceSessionUpdateOneRequiredWithoutPracticedPiecesNestedInput = {
    create?: XOR<practiceSessionCreateWithoutPracticedPiecesInput, practiceSessionUncheckedCreateWithoutPracticedPiecesInput>
    connectOrCreate?: practiceSessionCreateOrConnectWithoutPracticedPiecesInput
    upsert?: practiceSessionUpsertWithoutPracticedPiecesInput
    connect?: practiceSessionWhereUniqueInput
    update?: XOR<XOR<practiceSessionUpdateToOneWithWhereWithoutPracticedPiecesInput, practiceSessionUpdateWithoutPracticedPiecesInput>, practiceSessionUncheckedUpdateWithoutPracticedPiecesInput>
  }

  export type pieceUpdateOneRequiredWithoutPracticedPiecesNestedInput = {
    create?: XOR<pieceCreateWithoutPracticedPiecesInput, pieceUncheckedCreateWithoutPracticedPiecesInput>
    connectOrCreate?: pieceCreateOrConnectWithoutPracticedPiecesInput
    upsert?: pieceUpsertWithoutPracticedPiecesInput
    connect?: pieceWhereUniqueInput
    update?: XOR<XOR<pieceUpdateToOneWithWhereWithoutPracticedPiecesInput, pieceUpdateWithoutPracticedPiecesInput>, pieceUncheckedUpdateWithoutPracticedPiecesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type practiceSessionCreateWithoutUserInput = {
    id?: string
    duration: number
    startDate: Date | string
    starteTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    practicedPieces?: practicedPieceCreateNestedManyWithoutPracticeSessionInput
  }

  export type practiceSessionUncheckedCreateWithoutUserInput = {
    id?: string
    duration: number
    startDate: Date | string
    starteTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    practicedPieces?: practicedPieceUncheckedCreateNestedManyWithoutPracticeSessionInput
  }

  export type practiceSessionCreateOrConnectWithoutUserInput = {
    where: practiceSessionWhereUniqueInput
    create: XOR<practiceSessionCreateWithoutUserInput, practiceSessionUncheckedCreateWithoutUserInput>
  }

  export type practiceSessionCreateManyUserInputEnvelope = {
    data: practiceSessionCreateManyUserInput | practiceSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type practiceSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: practiceSessionWhereUniqueInput
    update: XOR<practiceSessionUpdateWithoutUserInput, practiceSessionUncheckedUpdateWithoutUserInput>
    create: XOR<practiceSessionCreateWithoutUserInput, practiceSessionUncheckedCreateWithoutUserInput>
  }

  export type practiceSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: practiceSessionWhereUniqueInput
    data: XOR<practiceSessionUpdateWithoutUserInput, practiceSessionUncheckedUpdateWithoutUserInput>
  }

  export type practiceSessionUpdateManyWithWhereWithoutUserInput = {
    where: practiceSessionScalarWhereInput
    data: XOR<practiceSessionUpdateManyMutationInput, practiceSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type practiceSessionScalarWhereInput = {
    AND?: practiceSessionScalarWhereInput | practiceSessionScalarWhereInput[]
    OR?: practiceSessionScalarWhereInput[]
    NOT?: practiceSessionScalarWhereInput | practiceSessionScalarWhereInput[]
    id?: StringFilter<"practiceSession"> | string
    userId?: StringFilter<"practiceSession"> | string
    duration?: IntFilter<"practiceSession"> | number
    startDate?: DateTimeFilter<"practiceSession"> | Date | string
    starteTime?: DateTimeFilter<"practiceSession"> | Date | string
    createdAt?: DateTimeFilter<"practiceSession"> | Date | string
    updatedAt?: DateTimeFilter<"practiceSession"> | Date | string
    notes?: StringNullableFilter<"practiceSession"> | string | null
  }

  export type UserCreateWithoutPracticeSessionsInput = {
    id?: string
    phone: string
    userName: string
    password: string
    salt: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPracticeSessionsInput = {
    id?: string
    phone: string
    userName: string
    password: string
    salt: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPracticeSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPracticeSessionsInput, UserUncheckedCreateWithoutPracticeSessionsInput>
  }

  export type practicedPieceCreateWithoutPracticeSessionInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    pieces: pieceCreateNestedOneWithoutPracticedPiecesInput
  }

  export type practicedPieceUncheckedCreateWithoutPracticeSessionInput = {
    id?: string
    pieceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type practicedPieceCreateOrConnectWithoutPracticeSessionInput = {
    where: practicedPieceWhereUniqueInput
    create: XOR<practicedPieceCreateWithoutPracticeSessionInput, practicedPieceUncheckedCreateWithoutPracticeSessionInput>
  }

  export type practicedPieceCreateManyPracticeSessionInputEnvelope = {
    data: practicedPieceCreateManyPracticeSessionInput | practicedPieceCreateManyPracticeSessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPracticeSessionsInput = {
    update: XOR<UserUpdateWithoutPracticeSessionsInput, UserUncheckedUpdateWithoutPracticeSessionsInput>
    create: XOR<UserCreateWithoutPracticeSessionsInput, UserUncheckedCreateWithoutPracticeSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPracticeSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPracticeSessionsInput, UserUncheckedUpdateWithoutPracticeSessionsInput>
  }

  export type UserUpdateWithoutPracticeSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPracticeSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type practicedPieceUpsertWithWhereUniqueWithoutPracticeSessionInput = {
    where: practicedPieceWhereUniqueInput
    update: XOR<practicedPieceUpdateWithoutPracticeSessionInput, practicedPieceUncheckedUpdateWithoutPracticeSessionInput>
    create: XOR<practicedPieceCreateWithoutPracticeSessionInput, practicedPieceUncheckedCreateWithoutPracticeSessionInput>
  }

  export type practicedPieceUpdateWithWhereUniqueWithoutPracticeSessionInput = {
    where: practicedPieceWhereUniqueInput
    data: XOR<practicedPieceUpdateWithoutPracticeSessionInput, practicedPieceUncheckedUpdateWithoutPracticeSessionInput>
  }

  export type practicedPieceUpdateManyWithWhereWithoutPracticeSessionInput = {
    where: practicedPieceScalarWhereInput
    data: XOR<practicedPieceUpdateManyMutationInput, practicedPieceUncheckedUpdateManyWithoutPracticeSessionInput>
  }

  export type practicedPieceScalarWhereInput = {
    AND?: practicedPieceScalarWhereInput | practicedPieceScalarWhereInput[]
    OR?: practicedPieceScalarWhereInput[]
    NOT?: practicedPieceScalarWhereInput | practicedPieceScalarWhereInput[]
    id?: StringFilter<"practicedPiece"> | string
    practiceSessionId?: StringFilter<"practicedPiece"> | string
    pieceId?: StringFilter<"practicedPiece"> | string
    createdAt?: DateTimeFilter<"practicedPiece"> | Date | string
    updatedAt?: DateTimeFilter<"practicedPiece"> | Date | string
  }

  export type practicedPieceCreateWithoutPiecesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    practiceSession: practiceSessionCreateNestedOneWithoutPracticedPiecesInput
  }

  export type practicedPieceUncheckedCreateWithoutPiecesInput = {
    id?: string
    practiceSessionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type practicedPieceCreateOrConnectWithoutPiecesInput = {
    where: practicedPieceWhereUniqueInput
    create: XOR<practicedPieceCreateWithoutPiecesInput, practicedPieceUncheckedCreateWithoutPiecesInput>
  }

  export type practicedPieceCreateManyPiecesInputEnvelope = {
    data: practicedPieceCreateManyPiecesInput | practicedPieceCreateManyPiecesInput[]
    skipDuplicates?: boolean
  }

  export type practicedPieceUpsertWithWhereUniqueWithoutPiecesInput = {
    where: practicedPieceWhereUniqueInput
    update: XOR<practicedPieceUpdateWithoutPiecesInput, practicedPieceUncheckedUpdateWithoutPiecesInput>
    create: XOR<practicedPieceCreateWithoutPiecesInput, practicedPieceUncheckedCreateWithoutPiecesInput>
  }

  export type practicedPieceUpdateWithWhereUniqueWithoutPiecesInput = {
    where: practicedPieceWhereUniqueInput
    data: XOR<practicedPieceUpdateWithoutPiecesInput, practicedPieceUncheckedUpdateWithoutPiecesInput>
  }

  export type practicedPieceUpdateManyWithWhereWithoutPiecesInput = {
    where: practicedPieceScalarWhereInput
    data: XOR<practicedPieceUpdateManyMutationInput, practicedPieceUncheckedUpdateManyWithoutPiecesInput>
  }

  export type practiceSessionCreateWithoutPracticedPiecesInput = {
    id?: string
    duration: number
    startDate: Date | string
    starteTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
    user: UserCreateNestedOneWithoutPracticeSessionsInput
  }

  export type practiceSessionUncheckedCreateWithoutPracticedPiecesInput = {
    id?: string
    userId: string
    duration: number
    startDate: Date | string
    starteTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
  }

  export type practiceSessionCreateOrConnectWithoutPracticedPiecesInput = {
    where: practiceSessionWhereUniqueInput
    create: XOR<practiceSessionCreateWithoutPracticedPiecesInput, practiceSessionUncheckedCreateWithoutPracticedPiecesInput>
  }

  export type pieceCreateWithoutPracticedPiecesInput = {
    id?: string
    title: string
    composer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type pieceUncheckedCreateWithoutPracticedPiecesInput = {
    id?: string
    title: string
    composer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deleteAt?: Date | string | null
  }

  export type pieceCreateOrConnectWithoutPracticedPiecesInput = {
    where: pieceWhereUniqueInput
    create: XOR<pieceCreateWithoutPracticedPiecesInput, pieceUncheckedCreateWithoutPracticedPiecesInput>
  }

  export type practiceSessionUpsertWithoutPracticedPiecesInput = {
    update: XOR<practiceSessionUpdateWithoutPracticedPiecesInput, practiceSessionUncheckedUpdateWithoutPracticedPiecesInput>
    create: XOR<practiceSessionCreateWithoutPracticedPiecesInput, practiceSessionUncheckedCreateWithoutPracticedPiecesInput>
    where?: practiceSessionWhereInput
  }

  export type practiceSessionUpdateToOneWithWhereWithoutPracticedPiecesInput = {
    where?: practiceSessionWhereInput
    data: XOR<practiceSessionUpdateWithoutPracticedPiecesInput, practiceSessionUncheckedUpdateWithoutPracticedPiecesInput>
  }

  export type practiceSessionUpdateWithoutPracticedPiecesInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPracticeSessionsNestedInput
  }

  export type practiceSessionUncheckedUpdateWithoutPracticedPiecesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type pieceUpsertWithoutPracticedPiecesInput = {
    update: XOR<pieceUpdateWithoutPracticedPiecesInput, pieceUncheckedUpdateWithoutPracticedPiecesInput>
    create: XOR<pieceCreateWithoutPracticedPiecesInput, pieceUncheckedCreateWithoutPracticedPiecesInput>
    where?: pieceWhereInput
  }

  export type pieceUpdateToOneWithWhereWithoutPracticedPiecesInput = {
    where?: pieceWhereInput
    data: XOR<pieceUpdateWithoutPracticedPiecesInput, pieceUncheckedUpdateWithoutPracticedPiecesInput>
  }

  export type pieceUpdateWithoutPracticedPiecesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    composer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type pieceUncheckedUpdateWithoutPracticedPiecesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    composer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deleteAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type practiceSessionCreateManyUserInput = {
    id?: string
    duration: number
    startDate: Date | string
    starteTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    notes?: string | null
  }

  export type practiceSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    practicedPieces?: practicedPieceUpdateManyWithoutPracticeSessionNestedInput
  }

  export type practiceSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    practicedPieces?: practicedPieceUncheckedUpdateManyWithoutPracticeSessionNestedInput
  }

  export type practiceSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    starteTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type practicedPieceCreateManyPracticeSessionInput = {
    id?: string
    pieceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type practicedPieceUpdateWithoutPracticeSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pieces?: pieceUpdateOneRequiredWithoutPracticedPiecesNestedInput
  }

  export type practicedPieceUncheckedUpdateWithoutPracticeSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type practicedPieceUncheckedUpdateManyWithoutPracticeSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    pieceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type practicedPieceCreateManyPiecesInput = {
    id?: string
    practiceSessionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type practicedPieceUpdateWithoutPiecesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    practiceSession?: practiceSessionUpdateOneRequiredWithoutPracticedPiecesNestedInput
  }

  export type practicedPieceUncheckedUpdateWithoutPiecesInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type practicedPieceUncheckedUpdateManyWithoutPiecesInput = {
    id?: StringFieldUpdateOperationsInput | string
    practiceSessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}