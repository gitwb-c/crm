
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
 * Model Permissao
 * 
 */
export type Permissao = $Result.DefaultSelection<Prisma.$PermissaoPayload>
/**
 * Model Departamento
 * 
 */
export type Departamento = $Result.DefaultSelection<Prisma.$DepartamentoPayload>
/**
 * Model UsuarioConectado
 * 
 */
export type UsuarioConectado = $Result.DefaultSelection<Prisma.$UsuarioConectadoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Fila
 * 
 */
export type Fila = $Result.DefaultSelection<Prisma.$FilaPayload>
/**
 * Model Instancia
 * 
 */
export type Instancia = $Result.DefaultSelection<Prisma.$InstanciaPayload>
/**
 * Model Fase
 * 
 */
export type Fase = $Result.DefaultSelection<Prisma.$FasePayload>
/**
 * Model Pipeline
 * 
 */
export type Pipeline = $Result.DefaultSelection<Prisma.$PipelinePayload>
/**
 * Model Campo
 * 
 */
export type Campo = $Result.DefaultSelection<Prisma.$CampoPayload>
/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model Negocio
 * 
 */
export type Negocio = $Result.DefaultSelection<Prisma.$NegocioPayload>
/**
 * Model Mensagem
 * 
 */
export type Mensagem = $Result.DefaultSelection<Prisma.$MensagemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Permissaos
 * const permissaos = await prisma.permissao.findMany()
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
   * // Fetch zero or more Permissaos
   * const permissaos = await prisma.permissao.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.permissao`: Exposes CRUD operations for the **Permissao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissaos
    * const permissaos = await prisma.permissao.findMany()
    * ```
    */
  get permissao(): Prisma.PermissaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.departamento`: Exposes CRUD operations for the **Departamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departamentos
    * const departamentos = await prisma.departamento.findMany()
    * ```
    */
  get departamento(): Prisma.DepartamentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuarioConectado`: Exposes CRUD operations for the **UsuarioConectado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsuarioConectados
    * const usuarioConectados = await prisma.usuarioConectado.findMany()
    * ```
    */
  get usuarioConectado(): Prisma.UsuarioConectadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fila`: Exposes CRUD operations for the **Fila** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filas
    * const filas = await prisma.fila.findMany()
    * ```
    */
  get fila(): Prisma.FilaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instancia`: Exposes CRUD operations for the **Instancia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instancias
    * const instancias = await prisma.instancia.findMany()
    * ```
    */
  get instancia(): Prisma.InstanciaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fase`: Exposes CRUD operations for the **Fase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fases
    * const fases = await prisma.fase.findMany()
    * ```
    */
  get fase(): Prisma.FaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pipeline`: Exposes CRUD operations for the **Pipeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pipelines
    * const pipelines = await prisma.pipeline.findMany()
    * ```
    */
  get pipeline(): Prisma.PipelineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campo`: Exposes CRUD operations for the **Campo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campos
    * const campos = await prisma.campo.findMany()
    * ```
    */
  get campo(): Prisma.CampoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.negocio`: Exposes CRUD operations for the **Negocio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Negocios
    * const negocios = await prisma.negocio.findMany()
    * ```
    */
  get negocio(): Prisma.NegocioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mensagem`: Exposes CRUD operations for the **Mensagem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mensagems
    * const mensagems = await prisma.mensagem.findMany()
    * ```
    */
  get mensagem(): Prisma.MensagemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Permissao: 'Permissao',
    Departamento: 'Departamento',
    UsuarioConectado: 'UsuarioConectado',
    Usuario: 'Usuario',
    Fila: 'Fila',
    Instancia: 'Instancia',
    Fase: 'Fase',
    Pipeline: 'Pipeline',
    Campo: 'Campo',
    Form: 'Form',
    Negocio: 'Negocio',
    Mensagem: 'Mensagem'
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
      modelProps: "permissao" | "departamento" | "usuarioConectado" | "usuario" | "fila" | "instancia" | "fase" | "pipeline" | "campo" | "form" | "negocio" | "mensagem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Permissao: {
        payload: Prisma.$PermissaoPayload<ExtArgs>
        fields: Prisma.PermissaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          findFirst: {
            args: Prisma.PermissaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          findMany: {
            args: Prisma.PermissaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          create: {
            args: Prisma.PermissaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          createMany: {
            args: Prisma.PermissaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          delete: {
            args: Prisma.PermissaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          update: {
            args: Prisma.PermissaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          deleteMany: {
            args: Prisma.PermissaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>[]
          }
          upsert: {
            args: Prisma.PermissaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissaoPayload>
          }
          aggregate: {
            args: Prisma.PermissaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissao>
          }
          groupBy: {
            args: Prisma.PermissaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissaoCountArgs<ExtArgs>
            result: $Utils.Optional<PermissaoCountAggregateOutputType> | number
          }
        }
      }
      Departamento: {
        payload: Prisma.$DepartamentoPayload<ExtArgs>
        fields: Prisma.DepartamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findFirst: {
            args: Prisma.DepartamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          findMany: {
            args: Prisma.DepartamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          create: {
            args: Prisma.DepartamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          createMany: {
            args: Prisma.DepartamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          delete: {
            args: Prisma.DepartamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          update: {
            args: Prisma.DepartamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          deleteMany: {
            args: Prisma.DepartamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>[]
          }
          upsert: {
            args: Prisma.DepartamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartamentoPayload>
          }
          aggregate: {
            args: Prisma.DepartamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartamento>
          }
          groupBy: {
            args: Prisma.DepartamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartamentoCountArgs<ExtArgs>
            result: $Utils.Optional<DepartamentoCountAggregateOutputType> | number
          }
        }
      }
      UsuarioConectado: {
        payload: Prisma.$UsuarioConectadoPayload<ExtArgs>
        fields: Prisma.UsuarioConectadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioConectadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioConectadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>
          }
          findFirst: {
            args: Prisma.UsuarioConectadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioConectadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>
          }
          findMany: {
            args: Prisma.UsuarioConectadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>[]
          }
          create: {
            args: Prisma.UsuarioConectadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>
          }
          createMany: {
            args: Prisma.UsuarioConectadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioConectadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>[]
          }
          delete: {
            args: Prisma.UsuarioConectadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>
          }
          update: {
            args: Prisma.UsuarioConectadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioConectadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioConectadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioConectadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioConectadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioConectadoPayload>
          }
          aggregate: {
            args: Prisma.UsuarioConectadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarioConectado>
          }
          groupBy: {
            args: Prisma.UsuarioConectadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioConectadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioConectadoCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioConectadoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Fila: {
        payload: Prisma.$FilaPayload<ExtArgs>
        fields: Prisma.FilaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          findFirst: {
            args: Prisma.FilaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          findMany: {
            args: Prisma.FilaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>[]
          }
          create: {
            args: Prisma.FilaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          createMany: {
            args: Prisma.FilaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>[]
          }
          delete: {
            args: Prisma.FilaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          update: {
            args: Prisma.FilaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          deleteMany: {
            args: Prisma.FilaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>[]
          }
          upsert: {
            args: Prisma.FilaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilaPayload>
          }
          aggregate: {
            args: Prisma.FilaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFila>
          }
          groupBy: {
            args: Prisma.FilaGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilaGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilaCountArgs<ExtArgs>
            result: $Utils.Optional<FilaCountAggregateOutputType> | number
          }
        }
      }
      Instancia: {
        payload: Prisma.$InstanciaPayload<ExtArgs>
        fields: Prisma.InstanciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstanciaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstanciaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>
          }
          findFirst: {
            args: Prisma.InstanciaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstanciaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>
          }
          findMany: {
            args: Prisma.InstanciaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>[]
          }
          create: {
            args: Prisma.InstanciaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>
          }
          createMany: {
            args: Prisma.InstanciaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstanciaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>[]
          }
          delete: {
            args: Prisma.InstanciaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>
          }
          update: {
            args: Prisma.InstanciaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>
          }
          deleteMany: {
            args: Prisma.InstanciaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstanciaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstanciaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>[]
          }
          upsert: {
            args: Prisma.InstanciaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstanciaPayload>
          }
          aggregate: {
            args: Prisma.InstanciaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstancia>
          }
          groupBy: {
            args: Prisma.InstanciaGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstanciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstanciaCountArgs<ExtArgs>
            result: $Utils.Optional<InstanciaCountAggregateOutputType> | number
          }
        }
      }
      Fase: {
        payload: Prisma.$FasePayload<ExtArgs>
        fields: Prisma.FaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>
          }
          findFirst: {
            args: Prisma.FaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>
          }
          findMany: {
            args: Prisma.FaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>[]
          }
          create: {
            args: Prisma.FaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>
          }
          createMany: {
            args: Prisma.FaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>[]
          }
          delete: {
            args: Prisma.FaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>
          }
          update: {
            args: Prisma.FaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>
          }
          deleteMany: {
            args: Prisma.FaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>[]
          }
          upsert: {
            args: Prisma.FaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FasePayload>
          }
          aggregate: {
            args: Prisma.FaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFase>
          }
          groupBy: {
            args: Prisma.FaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaseCountArgs<ExtArgs>
            result: $Utils.Optional<FaseCountAggregateOutputType> | number
          }
        }
      }
      Pipeline: {
        payload: Prisma.$PipelinePayload<ExtArgs>
        fields: Prisma.PipelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PipelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PipelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          findFirst: {
            args: Prisma.PipelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PipelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          findMany: {
            args: Prisma.PipelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>[]
          }
          create: {
            args: Prisma.PipelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          createMany: {
            args: Prisma.PipelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PipelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>[]
          }
          delete: {
            args: Prisma.PipelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          update: {
            args: Prisma.PipelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          deleteMany: {
            args: Prisma.PipelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PipelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PipelineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>[]
          }
          upsert: {
            args: Prisma.PipelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          aggregate: {
            args: Prisma.PipelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePipeline>
          }
          groupBy: {
            args: Prisma.PipelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<PipelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.PipelineCountArgs<ExtArgs>
            result: $Utils.Optional<PipelineCountAggregateOutputType> | number
          }
        }
      }
      Campo: {
        payload: Prisma.$CampoPayload<ExtArgs>
        fields: Prisma.CampoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>
          }
          findFirst: {
            args: Prisma.CampoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>
          }
          findMany: {
            args: Prisma.CampoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>[]
          }
          create: {
            args: Prisma.CampoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>
          }
          createMany: {
            args: Prisma.CampoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>[]
          }
          delete: {
            args: Prisma.CampoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>
          }
          update: {
            args: Prisma.CampoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>
          }
          deleteMany: {
            args: Prisma.CampoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>[]
          }
          upsert: {
            args: Prisma.CampoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampoPayload>
          }
          aggregate: {
            args: Prisma.CampoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampo>
          }
          groupBy: {
            args: Prisma.CampoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampoCountArgs<ExtArgs>
            result: $Utils.Optional<CampoCountAggregateOutputType> | number
          }
        }
      }
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      Negocio: {
        payload: Prisma.$NegocioPayload<ExtArgs>
        fields: Prisma.NegocioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NegocioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NegocioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          findFirst: {
            args: Prisma.NegocioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NegocioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          findMany: {
            args: Prisma.NegocioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>[]
          }
          create: {
            args: Prisma.NegocioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          createMany: {
            args: Prisma.NegocioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NegocioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>[]
          }
          delete: {
            args: Prisma.NegocioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          update: {
            args: Prisma.NegocioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          deleteMany: {
            args: Prisma.NegocioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NegocioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NegocioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>[]
          }
          upsert: {
            args: Prisma.NegocioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NegocioPayload>
          }
          aggregate: {
            args: Prisma.NegocioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNegocio>
          }
          groupBy: {
            args: Prisma.NegocioGroupByArgs<ExtArgs>
            result: $Utils.Optional<NegocioGroupByOutputType>[]
          }
          count: {
            args: Prisma.NegocioCountArgs<ExtArgs>
            result: $Utils.Optional<NegocioCountAggregateOutputType> | number
          }
        }
      }
      Mensagem: {
        payload: Prisma.$MensagemPayload<ExtArgs>
        fields: Prisma.MensagemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensagemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensagemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findFirst: {
            args: Prisma.MensagemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensagemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          findMany: {
            args: Prisma.MensagemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          create: {
            args: Prisma.MensagemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          createMany: {
            args: Prisma.MensagemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensagemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          delete: {
            args: Prisma.MensagemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          update: {
            args: Prisma.MensagemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          deleteMany: {
            args: Prisma.MensagemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensagemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MensagemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>[]
          }
          upsert: {
            args: Prisma.MensagemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensagemPayload>
          }
          aggregate: {
            args: Prisma.MensagemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensagem>
          }
          groupBy: {
            args: Prisma.MensagemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensagemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensagemCountArgs<ExtArgs>
            result: $Utils.Optional<MensagemCountAggregateOutputType> | number
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
    permissao?: PermissaoOmit
    departamento?: DepartamentoOmit
    usuarioConectado?: UsuarioConectadoOmit
    usuario?: UsuarioOmit
    fila?: FilaOmit
    instancia?: InstanciaOmit
    fase?: FaseOmit
    pipeline?: PipelineOmit
    campo?: CampoOmit
    form?: FormOmit
    negocio?: NegocioOmit
    mensagem?: MensagemOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type PermissaoCountOutputType
   */

  export type PermissaoCountOutputType = {
    departamentos: number
  }

  export type PermissaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamentos?: boolean | PermissaoCountOutputTypeCountDepartamentosArgs
  }

  // Custom InputTypes
  /**
   * PermissaoCountOutputType without action
   */
  export type PermissaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissaoCountOutputType
     */
    select?: PermissaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissaoCountOutputType without action
   */
  export type PermissaoCountOutputTypeCountDepartamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartamentoWhereInput
  }


  /**
   * Count Type DepartamentoCountOutputType
   */

  export type DepartamentoCountOutputType = {
    filas: number
    usuarios: number
    permissoes: number
  }

  export type DepartamentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filas?: boolean | DepartamentoCountOutputTypeCountFilasArgs
    usuarios?: boolean | DepartamentoCountOutputTypeCountUsuariosArgs
    permissoes?: boolean | DepartamentoCountOutputTypeCountPermissoesArgs
  }

  // Custom InputTypes
  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartamentoCountOutputType
     */
    select?: DepartamentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountFilasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilaWhereInput
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * DepartamentoCountOutputType without action
   */
  export type DepartamentoCountOutputTypeCountPermissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissaoWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    negocios: number
    u_: number
    filas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    negocios?: boolean | UsuarioCountOutputTypeCountNegociosArgs
    u_?: boolean | UsuarioCountOutputTypeCountU_Args
    filas?: boolean | UsuarioCountOutputTypeCountFilasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountNegociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegocioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountU_Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioConectadoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountFilasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilaWhereInput
  }


  /**
   * Count Type FilaCountOutputType
   */

  export type FilaCountOutputType = {
    fases: number
    usuarios: number
  }

  export type FilaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fases?: boolean | FilaCountOutputTypeCountFasesArgs
    usuarios?: boolean | FilaCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * FilaCountOutputType without action
   */
  export type FilaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilaCountOutputType
     */
    select?: FilaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilaCountOutputType without action
   */
  export type FilaCountOutputTypeCountFasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaseWhereInput
  }

  /**
   * FilaCountOutputType without action
   */
  export type FilaCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }


  /**
   * Count Type InstanciaCountOutputType
   */

  export type InstanciaCountOutputType = {
    mensagens: number
  }

  export type InstanciaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mensagens?: boolean | InstanciaCountOutputTypeCountMensagensArgs
  }

  // Custom InputTypes
  /**
   * InstanciaCountOutputType without action
   */
  export type InstanciaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstanciaCountOutputType
     */
    select?: InstanciaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstanciaCountOutputType without action
   */
  export type InstanciaCountOutputTypeCountMensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
  }


  /**
   * Count Type FaseCountOutputType
   */

  export type FaseCountOutputType = {
    negocios: number
    camposObrigatorios: number
  }

  export type FaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    negocios?: boolean | FaseCountOutputTypeCountNegociosArgs
    camposObrigatorios?: boolean | FaseCountOutputTypeCountCamposObrigatoriosArgs
  }

  // Custom InputTypes
  /**
   * FaseCountOutputType without action
   */
  export type FaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaseCountOutputType
     */
    select?: FaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FaseCountOutputType without action
   */
  export type FaseCountOutputTypeCountNegociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegocioWhereInput
  }

  /**
   * FaseCountOutputType without action
   */
  export type FaseCountOutputTypeCountCamposObrigatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampoWhereInput
  }


  /**
   * Count Type PipelineCountOutputType
   */

  export type PipelineCountOutputType = {
    fases: number
    negocios: number
  }

  export type PipelineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fases?: boolean | PipelineCountOutputTypeCountFasesArgs
    negocios?: boolean | PipelineCountOutputTypeCountNegociosArgs
  }

  // Custom InputTypes
  /**
   * PipelineCountOutputType without action
   */
  export type PipelineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineCountOutputType
     */
    select?: PipelineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PipelineCountOutputType without action
   */
  export type PipelineCountOutputTypeCountFasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaseWhereInput
  }

  /**
   * PipelineCountOutputType without action
   */
  export type PipelineCountOutputTypeCountNegociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegocioWhereInput
  }


  /**
   * Count Type CampoCountOutputType
   */

  export type CampoCountOutputType = {
    form: number
    fasesObrigatorias: number
  }

  export type CampoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | CampoCountOutputTypeCountFormArgs
    fasesObrigatorias?: boolean | CampoCountOutputTypeCountFasesObrigatoriasArgs
  }

  // Custom InputTypes
  /**
   * CampoCountOutputType without action
   */
  export type CampoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampoCountOutputType
     */
    select?: CampoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampoCountOutputType without action
   */
  export type CampoCountOutputTypeCountFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
  }

  /**
   * CampoCountOutputType without action
   */
  export type CampoCountOutputTypeCountFasesObrigatoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaseWhereInput
  }


  /**
   * Count Type NegocioCountOutputType
   */

  export type NegocioCountOutputType = {
    form: number
    instancias: number
  }

  export type NegocioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | NegocioCountOutputTypeCountFormArgs
    instancias?: boolean | NegocioCountOutputTypeCountInstanciasArgs
  }

  // Custom InputTypes
  /**
   * NegocioCountOutputType without action
   */
  export type NegocioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NegocioCountOutputType
     */
    select?: NegocioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NegocioCountOutputType without action
   */
  export type NegocioCountOutputTypeCountFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
  }

  /**
   * NegocioCountOutputType without action
   */
  export type NegocioCountOutputTypeCountInstanciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanciaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Permissao
   */

  export type AggregatePermissao = {
    _count: PermissaoCountAggregateOutputType | null
    _avg: PermissaoAvgAggregateOutputType | null
    _sum: PermissaoSumAggregateOutputType | null
    _min: PermissaoMinAggregateOutputType | null
    _max: PermissaoMaxAggregateOutputType | null
  }

  export type PermissaoAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissaoSumAggregateOutputType = {
    id: number | null
  }

  export type PermissaoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type PermissaoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type PermissaoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type PermissaoAvgAggregateInputType = {
    id?: true
  }

  export type PermissaoSumAggregateInputType = {
    id?: true
  }

  export type PermissaoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type PermissaoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type PermissaoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type PermissaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissao to aggregate.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissaos
    **/
    _count?: true | PermissaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissaoMaxAggregateInputType
  }

  export type GetPermissaoAggregateType<T extends PermissaoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissao[P]>
      : GetScalarType<T[P], AggregatePermissao[P]>
  }




  export type PermissaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissaoWhereInput
    orderBy?: PermissaoOrderByWithAggregationInput | PermissaoOrderByWithAggregationInput[]
    by: PermissaoScalarFieldEnum[] | PermissaoScalarFieldEnum
    having?: PermissaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissaoCountAggregateInputType | true
    _avg?: PermissaoAvgAggregateInputType
    _sum?: PermissaoSumAggregateInputType
    _min?: PermissaoMinAggregateInputType
    _max?: PermissaoMaxAggregateInputType
  }

  export type PermissaoGroupByOutputType = {
    id: number
    nome: string
    _count: PermissaoCountAggregateOutputType | null
    _avg: PermissaoAvgAggregateOutputType | null
    _sum: PermissaoSumAggregateOutputType | null
    _min: PermissaoMinAggregateOutputType | null
    _max: PermissaoMaxAggregateOutputType | null
  }

  type GetPermissaoGroupByPayload<T extends PermissaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissaoGroupByOutputType[P]>
            : GetScalarType<T[P], PermissaoGroupByOutputType[P]>
        }
      >
    >


  export type PermissaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    departamentos?: boolean | Permissao$departamentosArgs<ExtArgs>
    _count?: boolean | PermissaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["permissao"]>

  export type PermissaoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type PermissaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["permissao"]>
  export type PermissaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamentos?: boolean | Permissao$departamentosArgs<ExtArgs>
    _count?: boolean | PermissaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permissao"
    objects: {
      departamentos: Prisma.$DepartamentoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["permissao"]>
    composites: {}
  }

  type PermissaoGetPayload<S extends boolean | null | undefined | PermissaoDefaultArgs> = $Result.GetResult<Prisma.$PermissaoPayload, S>

  type PermissaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissaoCountAggregateInputType | true
    }

  export interface PermissaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permissao'], meta: { name: 'Permissao' } }
    /**
     * Find zero or one Permissao that matches the filter.
     * @param {PermissaoFindUniqueArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissaoFindUniqueArgs>(args: SelectSubset<T, PermissaoFindUniqueArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissaoFindUniqueOrThrowArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissaoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindFirstArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissaoFindFirstArgs>(args?: SelectSubset<T, PermissaoFindFirstArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindFirstOrThrowArgs} args - Arguments to find a Permissao
     * @example
     * // Get one Permissao
     * const permissao = await prisma.permissao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissaoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissaos
     * const permissaos = await prisma.permissao.findMany()
     * 
     * // Get first 10 Permissaos
     * const permissaos = await prisma.permissao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissaoWithIdOnly = await prisma.permissao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissaoFindManyArgs>(args?: SelectSubset<T, PermissaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissao.
     * @param {PermissaoCreateArgs} args - Arguments to create a Permissao.
     * @example
     * // Create one Permissao
     * const Permissao = await prisma.permissao.create({
     *   data: {
     *     // ... data to create a Permissao
     *   }
     * })
     * 
     */
    create<T extends PermissaoCreateArgs>(args: SelectSubset<T, PermissaoCreateArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissaos.
     * @param {PermissaoCreateManyArgs} args - Arguments to create many Permissaos.
     * @example
     * // Create many Permissaos
     * const permissao = await prisma.permissao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissaoCreateManyArgs>(args?: SelectSubset<T, PermissaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissaos and returns the data saved in the database.
     * @param {PermissaoCreateManyAndReturnArgs} args - Arguments to create many Permissaos.
     * @example
     * // Create many Permissaos
     * const permissao = await prisma.permissao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissaos and only return the `id`
     * const permissaoWithIdOnly = await prisma.permissao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissaoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permissao.
     * @param {PermissaoDeleteArgs} args - Arguments to delete one Permissao.
     * @example
     * // Delete one Permissao
     * const Permissao = await prisma.permissao.delete({
     *   where: {
     *     // ... filter to delete one Permissao
     *   }
     * })
     * 
     */
    delete<T extends PermissaoDeleteArgs>(args: SelectSubset<T, PermissaoDeleteArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissao.
     * @param {PermissaoUpdateArgs} args - Arguments to update one Permissao.
     * @example
     * // Update one Permissao
     * const permissao = await prisma.permissao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissaoUpdateArgs>(args: SelectSubset<T, PermissaoUpdateArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissaos.
     * @param {PermissaoDeleteManyArgs} args - Arguments to filter Permissaos to delete.
     * @example
     * // Delete a few Permissaos
     * const { count } = await prisma.permissao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissaoDeleteManyArgs>(args?: SelectSubset<T, PermissaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissaos
     * const permissao = await prisma.permissao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissaoUpdateManyArgs>(args: SelectSubset<T, PermissaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissaos and returns the data updated in the database.
     * @param {PermissaoUpdateManyAndReturnArgs} args - Arguments to update many Permissaos.
     * @example
     * // Update many Permissaos
     * const permissao = await prisma.permissao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissaos and only return the `id`
     * const permissaoWithIdOnly = await prisma.permissao.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermissaoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permissao.
     * @param {PermissaoUpsertArgs} args - Arguments to update or create a Permissao.
     * @example
     * // Update or create a Permissao
     * const permissao = await prisma.permissao.upsert({
     *   create: {
     *     // ... data to create a Permissao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissao we want to update
     *   }
     * })
     */
    upsert<T extends PermissaoUpsertArgs>(args: SelectSubset<T, PermissaoUpsertArgs<ExtArgs>>): Prisma__PermissaoClient<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoCountArgs} args - Arguments to filter Permissaos to count.
     * @example
     * // Count the number of Permissaos
     * const count = await prisma.permissao.count({
     *   where: {
     *     // ... the filter for the Permissaos we want to count
     *   }
     * })
    **/
    count<T extends PermissaoCountArgs>(
      args?: Subset<T, PermissaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissaoAggregateArgs>(args: Subset<T, PermissaoAggregateArgs>): Prisma.PrismaPromise<GetPermissaoAggregateType<T>>

    /**
     * Group by Permissao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissaoGroupByArgs} args - Group by arguments.
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
      T extends PermissaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissaoGroupByArgs['orderBy'] }
        : { orderBy?: PermissaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permissao model
   */
  readonly fields: PermissaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permissao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departamentos<T extends Permissao$departamentosArgs<ExtArgs> = {}>(args?: Subset<T, Permissao$departamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permissao model
   */
  interface PermissaoFieldRefs {
    readonly id: FieldRef<"Permissao", 'Int'>
    readonly nome: FieldRef<"Permissao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permissao findUnique
   */
  export type PermissaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao findUniqueOrThrow
   */
  export type PermissaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao findFirst
   */
  export type PermissaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissaos.
     */
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao findFirstOrThrow
   */
  export type PermissaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissao to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissaos.
     */
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao findMany
   */
  export type PermissaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter, which Permissaos to fetch.
     */
    where?: PermissaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissaos to fetch.
     */
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissaos.
     */
    cursor?: PermissaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissaos.
     */
    skip?: number
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Permissao create
   */
  export type PermissaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permissao.
     */
    data: XOR<PermissaoCreateInput, PermissaoUncheckedCreateInput>
  }

  /**
   * Permissao createMany
   */
  export type PermissaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissaos.
     */
    data: PermissaoCreateManyInput | PermissaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissao createManyAndReturn
   */
  export type PermissaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * The data used to create many Permissaos.
     */
    data: PermissaoCreateManyInput | PermissaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissao update
   */
  export type PermissaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permissao.
     */
    data: XOR<PermissaoUpdateInput, PermissaoUncheckedUpdateInput>
    /**
     * Choose, which Permissao to update.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao updateMany
   */
  export type PermissaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissaos.
     */
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyInput>
    /**
     * Filter which Permissaos to update
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to update.
     */
    limit?: number
  }

  /**
   * Permissao updateManyAndReturn
   */
  export type PermissaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * The data used to update Permissaos.
     */
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyInput>
    /**
     * Filter which Permissaos to update
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to update.
     */
    limit?: number
  }

  /**
   * Permissao upsert
   */
  export type PermissaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permissao to update in case it exists.
     */
    where: PermissaoWhereUniqueInput
    /**
     * In case the Permissao found by the `where` argument doesn't exist, create a new Permissao with this data.
     */
    create: XOR<PermissaoCreateInput, PermissaoUncheckedCreateInput>
    /**
     * In case the Permissao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissaoUpdateInput, PermissaoUncheckedUpdateInput>
  }

  /**
   * Permissao delete
   */
  export type PermissaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    /**
     * Filter which Permissao to delete.
     */
    where: PermissaoWhereUniqueInput
  }

  /**
   * Permissao deleteMany
   */
  export type PermissaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissaos to delete
     */
    where?: PermissaoWhereInput
    /**
     * Limit how many Permissaos to delete.
     */
    limit?: number
  }

  /**
   * Permissao.departamentos
   */
  export type Permissao$departamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    where?: DepartamentoWhereInput
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    cursor?: DepartamentoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Permissao without action
   */
  export type PermissaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
  }


  /**
   * Model Departamento
   */

  export type AggregateDepartamento = {
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  export type DepartamentoAvgAggregateOutputType = {
    id: number | null
  }

  export type DepartamentoSumAggregateOutputType = {
    id: number | null
  }

  export type DepartamentoMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type DepartamentoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type DepartamentoCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type DepartamentoAvgAggregateInputType = {
    id?: true
  }

  export type DepartamentoSumAggregateInputType = {
    id?: true
  }

  export type DepartamentoMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type DepartamentoMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type DepartamentoCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type DepartamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamento to aggregate.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departamentos
    **/
    _count?: true | DepartamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartamentoMaxAggregateInputType
  }

  export type GetDepartamentoAggregateType<T extends DepartamentoAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartamento[P]>
      : GetScalarType<T[P], AggregateDepartamento[P]>
  }




  export type DepartamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartamentoWhereInput
    orderBy?: DepartamentoOrderByWithAggregationInput | DepartamentoOrderByWithAggregationInput[]
    by: DepartamentoScalarFieldEnum[] | DepartamentoScalarFieldEnum
    having?: DepartamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartamentoCountAggregateInputType | true
    _avg?: DepartamentoAvgAggregateInputType
    _sum?: DepartamentoSumAggregateInputType
    _min?: DepartamentoMinAggregateInputType
    _max?: DepartamentoMaxAggregateInputType
  }

  export type DepartamentoGroupByOutputType = {
    id: number
    nome: string
    _count: DepartamentoCountAggregateOutputType | null
    _avg: DepartamentoAvgAggregateOutputType | null
    _sum: DepartamentoSumAggregateOutputType | null
    _min: DepartamentoMinAggregateOutputType | null
    _max: DepartamentoMaxAggregateOutputType | null
  }

  type GetDepartamentoGroupByPayload<T extends DepartamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
            : GetScalarType<T[P], DepartamentoGroupByOutputType[P]>
        }
      >
    >


  export type DepartamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    filas?: boolean | Departamento$filasArgs<ExtArgs>
    usuarios?: boolean | Departamento$usuariosArgs<ExtArgs>
    permissoes?: boolean | Departamento$permissoesArgs<ExtArgs>
    _count?: boolean | DepartamentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["departamento"]>

  export type DepartamentoSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type DepartamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["departamento"]>
  export type DepartamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filas?: boolean | Departamento$filasArgs<ExtArgs>
    usuarios?: boolean | Departamento$usuariosArgs<ExtArgs>
    permissoes?: boolean | Departamento$permissoesArgs<ExtArgs>
    _count?: boolean | DepartamentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Departamento"
    objects: {
      filas: Prisma.$FilaPayload<ExtArgs>[]
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      permissoes: Prisma.$PermissaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["departamento"]>
    composites: {}
  }

  type DepartamentoGetPayload<S extends boolean | null | undefined | DepartamentoDefaultArgs> = $Result.GetResult<Prisma.$DepartamentoPayload, S>

  type DepartamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartamentoCountAggregateInputType | true
    }

  export interface DepartamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Departamento'], meta: { name: 'Departamento' } }
    /**
     * Find zero or one Departamento that matches the filter.
     * @param {DepartamentoFindUniqueArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartamentoFindUniqueArgs>(args: SelectSubset<T, DepartamentoFindUniqueArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Departamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartamentoFindUniqueOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartamentoFindFirstArgs>(args?: SelectSubset<T, DepartamentoFindFirstArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Departamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindFirstOrThrowArgs} args - Arguments to find a Departamento
     * @example
     * // Get one Departamento
     * const departamento = await prisma.departamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departamentos
     * const departamentos = await prisma.departamento.findMany()
     * 
     * // Get first 10 Departamentos
     * const departamentos = await prisma.departamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departamentoWithIdOnly = await prisma.departamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartamentoFindManyArgs>(args?: SelectSubset<T, DepartamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Departamento.
     * @param {DepartamentoCreateArgs} args - Arguments to create a Departamento.
     * @example
     * // Create one Departamento
     * const Departamento = await prisma.departamento.create({
     *   data: {
     *     // ... data to create a Departamento
     *   }
     * })
     * 
     */
    create<T extends DepartamentoCreateArgs>(args: SelectSubset<T, DepartamentoCreateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departamentos.
     * @param {DepartamentoCreateManyArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartamentoCreateManyArgs>(args?: SelectSubset<T, DepartamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departamentos and returns the data saved in the database.
     * @param {DepartamentoCreateManyAndReturnArgs} args - Arguments to create many Departamentos.
     * @example
     * // Create many Departamentos
     * const departamento = await prisma.departamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departamentos and only return the `id`
     * const departamentoWithIdOnly = await prisma.departamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Departamento.
     * @param {DepartamentoDeleteArgs} args - Arguments to delete one Departamento.
     * @example
     * // Delete one Departamento
     * const Departamento = await prisma.departamento.delete({
     *   where: {
     *     // ... filter to delete one Departamento
     *   }
     * })
     * 
     */
    delete<T extends DepartamentoDeleteArgs>(args: SelectSubset<T, DepartamentoDeleteArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Departamento.
     * @param {DepartamentoUpdateArgs} args - Arguments to update one Departamento.
     * @example
     * // Update one Departamento
     * const departamento = await prisma.departamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartamentoUpdateArgs>(args: SelectSubset<T, DepartamentoUpdateArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departamentos.
     * @param {DepartamentoDeleteManyArgs} args - Arguments to filter Departamentos to delete.
     * @example
     * // Delete a few Departamentos
     * const { count } = await prisma.departamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartamentoDeleteManyArgs>(args?: SelectSubset<T, DepartamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartamentoUpdateManyArgs>(args: SelectSubset<T, DepartamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos and returns the data updated in the database.
     * @param {DepartamentoUpdateManyAndReturnArgs} args - Arguments to update many Departamentos.
     * @example
     * // Update many Departamentos
     * const departamento = await prisma.departamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departamentos and only return the `id`
     * const departamentoWithIdOnly = await prisma.departamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Departamento.
     * @param {DepartamentoUpsertArgs} args - Arguments to update or create a Departamento.
     * @example
     * // Update or create a Departamento
     * const departamento = await prisma.departamento.upsert({
     *   create: {
     *     // ... data to create a Departamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departamento we want to update
     *   }
     * })
     */
    upsert<T extends DepartamentoUpsertArgs>(args: SelectSubset<T, DepartamentoUpsertArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoCountArgs} args - Arguments to filter Departamentos to count.
     * @example
     * // Count the number of Departamentos
     * const count = await prisma.departamento.count({
     *   where: {
     *     // ... the filter for the Departamentos we want to count
     *   }
     * })
    **/
    count<T extends DepartamentoCountArgs>(
      args?: Subset<T, DepartamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartamentoAggregateArgs>(args: Subset<T, DepartamentoAggregateArgs>): Prisma.PrismaPromise<GetDepartamentoAggregateType<T>>

    /**
     * Group by Departamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentoGroupByArgs} args - Group by arguments.
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
      T extends DepartamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartamentoGroupByArgs['orderBy'] }
        : { orderBy?: DepartamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Departamento model
   */
  readonly fields: DepartamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Departamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    filas<T extends Departamento$filasArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$filasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuarios<T extends Departamento$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissoes<T extends Departamento$permissoesArgs<ExtArgs> = {}>(args?: Subset<T, Departamento$permissoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Departamento model
   */
  interface DepartamentoFieldRefs {
    readonly id: FieldRef<"Departamento", 'Int'>
    readonly nome: FieldRef<"Departamento", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Departamento findUnique
   */
  export type DepartamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento findUniqueOrThrow
   */
  export type DepartamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento findFirst
   */
  export type DepartamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento findFirstOrThrow
   */
  export type DepartamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamento to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departamentos.
     */
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento findMany
   */
  export type DepartamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter, which Departamentos to fetch.
     */
    where?: DepartamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departamentos to fetch.
     */
    orderBy?: DepartamentoOrderByWithRelationInput | DepartamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departamentos.
     */
    cursor?: DepartamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departamentos.
     */
    skip?: number
    distinct?: DepartamentoScalarFieldEnum | DepartamentoScalarFieldEnum[]
  }

  /**
   * Departamento create
   */
  export type DepartamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Departamento.
     */
    data: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
  }

  /**
   * Departamento createMany
   */
  export type DepartamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departamentos.
     */
    data: DepartamentoCreateManyInput | DepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departamento createManyAndReturn
   */
  export type DepartamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Departamentos.
     */
    data: DepartamentoCreateManyInput | DepartamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Departamento update
   */
  export type DepartamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Departamento.
     */
    data: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
    /**
     * Choose, which Departamento to update.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento updateMany
   */
  export type DepartamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departamentos.
     */
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which Departamentos to update
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to update.
     */
    limit?: number
  }

  /**
   * Departamento updateManyAndReturn
   */
  export type DepartamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * The data used to update Departamentos.
     */
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyInput>
    /**
     * Filter which Departamentos to update
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to update.
     */
    limit?: number
  }

  /**
   * Departamento upsert
   */
  export type DepartamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Departamento to update in case it exists.
     */
    where: DepartamentoWhereUniqueInput
    /**
     * In case the Departamento found by the `where` argument doesn't exist, create a new Departamento with this data.
     */
    create: XOR<DepartamentoCreateInput, DepartamentoUncheckedCreateInput>
    /**
     * In case the Departamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartamentoUpdateInput, DepartamentoUncheckedUpdateInput>
  }

  /**
   * Departamento delete
   */
  export type DepartamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
    /**
     * Filter which Departamento to delete.
     */
    where: DepartamentoWhereUniqueInput
  }

  /**
   * Departamento deleteMany
   */
  export type DepartamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departamentos to delete
     */
    where?: DepartamentoWhereInput
    /**
     * Limit how many Departamentos to delete.
     */
    limit?: number
  }

  /**
   * Departamento.filas
   */
  export type Departamento$filasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    where?: FilaWhereInput
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    cursor?: FilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilaScalarFieldEnum | FilaScalarFieldEnum[]
  }

  /**
   * Departamento.usuarios
   */
  export type Departamento$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Departamento.permissoes
   */
  export type Departamento$permissoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissao
     */
    select?: PermissaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissao
     */
    omit?: PermissaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissaoInclude<ExtArgs> | null
    where?: PermissaoWhereInput
    orderBy?: PermissaoOrderByWithRelationInput | PermissaoOrderByWithRelationInput[]
    cursor?: PermissaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissaoScalarFieldEnum | PermissaoScalarFieldEnum[]
  }

  /**
   * Departamento without action
   */
  export type DepartamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Departamento
     */
    select?: DepartamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Departamento
     */
    omit?: DepartamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartamentoInclude<ExtArgs> | null
  }


  /**
   * Model UsuarioConectado
   */

  export type AggregateUsuarioConectado = {
    _count: UsuarioConectadoCountAggregateOutputType | null
    _avg: UsuarioConectadoAvgAggregateOutputType | null
    _sum: UsuarioConectadoSumAggregateOutputType | null
    _min: UsuarioConectadoMinAggregateOutputType | null
    _max: UsuarioConectadoMaxAggregateOutputType | null
  }

  export type UsuarioConectadoAvgAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    rankFila: number | null
  }

  export type UsuarioConectadoSumAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    rankFila: number | null
  }

  export type UsuarioConectadoMinAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    rankFila: number | null
  }

  export type UsuarioConectadoMaxAggregateOutputType = {
    id: number | null
    idUsuario: number | null
    rankFila: number | null
  }

  export type UsuarioConectadoCountAggregateOutputType = {
    id: number
    idUsuario: number
    rankFila: number
    _all: number
  }


  export type UsuarioConectadoAvgAggregateInputType = {
    id?: true
    idUsuario?: true
    rankFila?: true
  }

  export type UsuarioConectadoSumAggregateInputType = {
    id?: true
    idUsuario?: true
    rankFila?: true
  }

  export type UsuarioConectadoMinAggregateInputType = {
    id?: true
    idUsuario?: true
    rankFila?: true
  }

  export type UsuarioConectadoMaxAggregateInputType = {
    id?: true
    idUsuario?: true
    rankFila?: true
  }

  export type UsuarioConectadoCountAggregateInputType = {
    id?: true
    idUsuario?: true
    rankFila?: true
    _all?: true
  }

  export type UsuarioConectadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioConectado to aggregate.
     */
    where?: UsuarioConectadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioConectados to fetch.
     */
    orderBy?: UsuarioConectadoOrderByWithRelationInput | UsuarioConectadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioConectadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioConectados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioConectados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsuarioConectados
    **/
    _count?: true | UsuarioConectadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioConectadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioConectadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioConectadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioConectadoMaxAggregateInputType
  }

  export type GetUsuarioConectadoAggregateType<T extends UsuarioConectadoAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarioConectado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarioConectado[P]>
      : GetScalarType<T[P], AggregateUsuarioConectado[P]>
  }




  export type UsuarioConectadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioConectadoWhereInput
    orderBy?: UsuarioConectadoOrderByWithAggregationInput | UsuarioConectadoOrderByWithAggregationInput[]
    by: UsuarioConectadoScalarFieldEnum[] | UsuarioConectadoScalarFieldEnum
    having?: UsuarioConectadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioConectadoCountAggregateInputType | true
    _avg?: UsuarioConectadoAvgAggregateInputType
    _sum?: UsuarioConectadoSumAggregateInputType
    _min?: UsuarioConectadoMinAggregateInputType
    _max?: UsuarioConectadoMaxAggregateInputType
  }

  export type UsuarioConectadoGroupByOutputType = {
    id: number
    idUsuario: number
    rankFila: number
    _count: UsuarioConectadoCountAggregateOutputType | null
    _avg: UsuarioConectadoAvgAggregateOutputType | null
    _sum: UsuarioConectadoSumAggregateOutputType | null
    _min: UsuarioConectadoMinAggregateOutputType | null
    _max: UsuarioConectadoMaxAggregateOutputType | null
  }

  type GetUsuarioConectadoGroupByPayload<T extends UsuarioConectadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioConectadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioConectadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioConectadoGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioConectadoGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioConectadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    rankFila?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioConectado"]>

  export type UsuarioConectadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    rankFila?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioConectado"]>

  export type UsuarioConectadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idUsuario?: boolean
    rankFila?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarioConectado"]>

  export type UsuarioConectadoSelectScalar = {
    id?: boolean
    idUsuario?: boolean
    rankFila?: boolean
  }

  export type UsuarioConectadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idUsuario" | "rankFila", ExtArgs["result"]["usuarioConectado"]>
  export type UsuarioConectadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type UsuarioConectadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type UsuarioConectadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $UsuarioConectadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsuarioConectado"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      idUsuario: number
      rankFila: number
    }, ExtArgs["result"]["usuarioConectado"]>
    composites: {}
  }

  type UsuarioConectadoGetPayload<S extends boolean | null | undefined | UsuarioConectadoDefaultArgs> = $Result.GetResult<Prisma.$UsuarioConectadoPayload, S>

  type UsuarioConectadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioConectadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioConectadoCountAggregateInputType | true
    }

  export interface UsuarioConectadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsuarioConectado'], meta: { name: 'UsuarioConectado' } }
    /**
     * Find zero or one UsuarioConectado that matches the filter.
     * @param {UsuarioConectadoFindUniqueArgs} args - Arguments to find a UsuarioConectado
     * @example
     * // Get one UsuarioConectado
     * const usuarioConectado = await prisma.usuarioConectado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioConectadoFindUniqueArgs>(args: SelectSubset<T, UsuarioConectadoFindUniqueArgs<ExtArgs>>): Prisma__UsuarioConectadoClient<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UsuarioConectado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioConectadoFindUniqueOrThrowArgs} args - Arguments to find a UsuarioConectado
     * @example
     * // Get one UsuarioConectado
     * const usuarioConectado = await prisma.usuarioConectado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioConectadoFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioConectadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioConectadoClient<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioConectado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioConectadoFindFirstArgs} args - Arguments to find a UsuarioConectado
     * @example
     * // Get one UsuarioConectado
     * const usuarioConectado = await prisma.usuarioConectado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioConectadoFindFirstArgs>(args?: SelectSubset<T, UsuarioConectadoFindFirstArgs<ExtArgs>>): Prisma__UsuarioConectadoClient<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UsuarioConectado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioConectadoFindFirstOrThrowArgs} args - Arguments to find a UsuarioConectado
     * @example
     * // Get one UsuarioConectado
     * const usuarioConectado = await prisma.usuarioConectado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioConectadoFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioConectadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioConectadoClient<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UsuarioConectados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioConectadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsuarioConectados
     * const usuarioConectados = await prisma.usuarioConectado.findMany()
     * 
     * // Get first 10 UsuarioConectados
     * const usuarioConectados = await prisma.usuarioConectado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioConectadoWithIdOnly = await prisma.usuarioConectado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioConectadoFindManyArgs>(args?: SelectSubset<T, UsuarioConectadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UsuarioConectado.
     * @param {UsuarioConectadoCreateArgs} args - Arguments to create a UsuarioConectado.
     * @example
     * // Create one UsuarioConectado
     * const UsuarioConectado = await prisma.usuarioConectado.create({
     *   data: {
     *     // ... data to create a UsuarioConectado
     *   }
     * })
     * 
     */
    create<T extends UsuarioConectadoCreateArgs>(args: SelectSubset<T, UsuarioConectadoCreateArgs<ExtArgs>>): Prisma__UsuarioConectadoClient<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UsuarioConectados.
     * @param {UsuarioConectadoCreateManyArgs} args - Arguments to create many UsuarioConectados.
     * @example
     * // Create many UsuarioConectados
     * const usuarioConectado = await prisma.usuarioConectado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioConectadoCreateManyArgs>(args?: SelectSubset<T, UsuarioConectadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsuarioConectados and returns the data saved in the database.
     * @param {UsuarioConectadoCreateManyAndReturnArgs} args - Arguments to create many UsuarioConectados.
     * @example
     * // Create many UsuarioConectados
     * const usuarioConectado = await prisma.usuarioConectado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsuarioConectados and only return the `id`
     * const usuarioConectadoWithIdOnly = await prisma.usuarioConectado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioConectadoCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioConectadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UsuarioConectado.
     * @param {UsuarioConectadoDeleteArgs} args - Arguments to delete one UsuarioConectado.
     * @example
     * // Delete one UsuarioConectado
     * const UsuarioConectado = await prisma.usuarioConectado.delete({
     *   where: {
     *     // ... filter to delete one UsuarioConectado
     *   }
     * })
     * 
     */
    delete<T extends UsuarioConectadoDeleteArgs>(args: SelectSubset<T, UsuarioConectadoDeleteArgs<ExtArgs>>): Prisma__UsuarioConectadoClient<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UsuarioConectado.
     * @param {UsuarioConectadoUpdateArgs} args - Arguments to update one UsuarioConectado.
     * @example
     * // Update one UsuarioConectado
     * const usuarioConectado = await prisma.usuarioConectado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioConectadoUpdateArgs>(args: SelectSubset<T, UsuarioConectadoUpdateArgs<ExtArgs>>): Prisma__UsuarioConectadoClient<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UsuarioConectados.
     * @param {UsuarioConectadoDeleteManyArgs} args - Arguments to filter UsuarioConectados to delete.
     * @example
     * // Delete a few UsuarioConectados
     * const { count } = await prisma.usuarioConectado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioConectadoDeleteManyArgs>(args?: SelectSubset<T, UsuarioConectadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioConectados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioConectadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsuarioConectados
     * const usuarioConectado = await prisma.usuarioConectado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioConectadoUpdateManyArgs>(args: SelectSubset<T, UsuarioConectadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsuarioConectados and returns the data updated in the database.
     * @param {UsuarioConectadoUpdateManyAndReturnArgs} args - Arguments to update many UsuarioConectados.
     * @example
     * // Update many UsuarioConectados
     * const usuarioConectado = await prisma.usuarioConectado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UsuarioConectados and only return the `id`
     * const usuarioConectadoWithIdOnly = await prisma.usuarioConectado.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioConectadoUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioConectadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UsuarioConectado.
     * @param {UsuarioConectadoUpsertArgs} args - Arguments to update or create a UsuarioConectado.
     * @example
     * // Update or create a UsuarioConectado
     * const usuarioConectado = await prisma.usuarioConectado.upsert({
     *   create: {
     *     // ... data to create a UsuarioConectado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsuarioConectado we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioConectadoUpsertArgs>(args: SelectSubset<T, UsuarioConectadoUpsertArgs<ExtArgs>>): Prisma__UsuarioConectadoClient<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UsuarioConectados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioConectadoCountArgs} args - Arguments to filter UsuarioConectados to count.
     * @example
     * // Count the number of UsuarioConectados
     * const count = await prisma.usuarioConectado.count({
     *   where: {
     *     // ... the filter for the UsuarioConectados we want to count
     *   }
     * })
    **/
    count<T extends UsuarioConectadoCountArgs>(
      args?: Subset<T, UsuarioConectadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioConectadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsuarioConectado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioConectadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioConectadoAggregateArgs>(args: Subset<T, UsuarioConectadoAggregateArgs>): Prisma.PrismaPromise<GetUsuarioConectadoAggregateType<T>>

    /**
     * Group by UsuarioConectado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioConectadoGroupByArgs} args - Group by arguments.
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
      T extends UsuarioConectadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioConectadoGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioConectadoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioConectadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioConectadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsuarioConectado model
   */
  readonly fields: UsuarioConectadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsuarioConectado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioConectadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UsuarioConectado model
   */
  interface UsuarioConectadoFieldRefs {
    readonly id: FieldRef<"UsuarioConectado", 'Int'>
    readonly idUsuario: FieldRef<"UsuarioConectado", 'Int'>
    readonly rankFila: FieldRef<"UsuarioConectado", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UsuarioConectado findUnique
   */
  export type UsuarioConectadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioConectado to fetch.
     */
    where: UsuarioConectadoWhereUniqueInput
  }

  /**
   * UsuarioConectado findUniqueOrThrow
   */
  export type UsuarioConectadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioConectado to fetch.
     */
    where: UsuarioConectadoWhereUniqueInput
  }

  /**
   * UsuarioConectado findFirst
   */
  export type UsuarioConectadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioConectado to fetch.
     */
    where?: UsuarioConectadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioConectados to fetch.
     */
    orderBy?: UsuarioConectadoOrderByWithRelationInput | UsuarioConectadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioConectados.
     */
    cursor?: UsuarioConectadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioConectados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioConectados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioConectados.
     */
    distinct?: UsuarioConectadoScalarFieldEnum | UsuarioConectadoScalarFieldEnum[]
  }

  /**
   * UsuarioConectado findFirstOrThrow
   */
  export type UsuarioConectadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioConectado to fetch.
     */
    where?: UsuarioConectadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioConectados to fetch.
     */
    orderBy?: UsuarioConectadoOrderByWithRelationInput | UsuarioConectadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsuarioConectados.
     */
    cursor?: UsuarioConectadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioConectados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioConectados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsuarioConectados.
     */
    distinct?: UsuarioConectadoScalarFieldEnum | UsuarioConectadoScalarFieldEnum[]
  }

  /**
   * UsuarioConectado findMany
   */
  export type UsuarioConectadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * Filter, which UsuarioConectados to fetch.
     */
    where?: UsuarioConectadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsuarioConectados to fetch.
     */
    orderBy?: UsuarioConectadoOrderByWithRelationInput | UsuarioConectadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsuarioConectados.
     */
    cursor?: UsuarioConectadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsuarioConectados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsuarioConectados.
     */
    skip?: number
    distinct?: UsuarioConectadoScalarFieldEnum | UsuarioConectadoScalarFieldEnum[]
  }

  /**
   * UsuarioConectado create
   */
  export type UsuarioConectadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * The data needed to create a UsuarioConectado.
     */
    data: XOR<UsuarioConectadoCreateInput, UsuarioConectadoUncheckedCreateInput>
  }

  /**
   * UsuarioConectado createMany
   */
  export type UsuarioConectadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsuarioConectados.
     */
    data: UsuarioConectadoCreateManyInput | UsuarioConectadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsuarioConectado createManyAndReturn
   */
  export type UsuarioConectadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * The data used to create many UsuarioConectados.
     */
    data: UsuarioConectadoCreateManyInput | UsuarioConectadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioConectado update
   */
  export type UsuarioConectadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * The data needed to update a UsuarioConectado.
     */
    data: XOR<UsuarioConectadoUpdateInput, UsuarioConectadoUncheckedUpdateInput>
    /**
     * Choose, which UsuarioConectado to update.
     */
    where: UsuarioConectadoWhereUniqueInput
  }

  /**
   * UsuarioConectado updateMany
   */
  export type UsuarioConectadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsuarioConectados.
     */
    data: XOR<UsuarioConectadoUpdateManyMutationInput, UsuarioConectadoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioConectados to update
     */
    where?: UsuarioConectadoWhereInput
    /**
     * Limit how many UsuarioConectados to update.
     */
    limit?: number
  }

  /**
   * UsuarioConectado updateManyAndReturn
   */
  export type UsuarioConectadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * The data used to update UsuarioConectados.
     */
    data: XOR<UsuarioConectadoUpdateManyMutationInput, UsuarioConectadoUncheckedUpdateManyInput>
    /**
     * Filter which UsuarioConectados to update
     */
    where?: UsuarioConectadoWhereInput
    /**
     * Limit how many UsuarioConectados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsuarioConectado upsert
   */
  export type UsuarioConectadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * The filter to search for the UsuarioConectado to update in case it exists.
     */
    where: UsuarioConectadoWhereUniqueInput
    /**
     * In case the UsuarioConectado found by the `where` argument doesn't exist, create a new UsuarioConectado with this data.
     */
    create: XOR<UsuarioConectadoCreateInput, UsuarioConectadoUncheckedCreateInput>
    /**
     * In case the UsuarioConectado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioConectadoUpdateInput, UsuarioConectadoUncheckedUpdateInput>
  }

  /**
   * UsuarioConectado delete
   */
  export type UsuarioConectadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    /**
     * Filter which UsuarioConectado to delete.
     */
    where: UsuarioConectadoWhereUniqueInput
  }

  /**
   * UsuarioConectado deleteMany
   */
  export type UsuarioConectadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsuarioConectados to delete
     */
    where?: UsuarioConectadoWhereInput
    /**
     * Limit how many UsuarioConectados to delete.
     */
    limit?: number
  }

  /**
   * UsuarioConectado without action
   */
  export type UsuarioConectadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
  }


  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    idDepartamento: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    idDepartamento: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    idDepartamento: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    idDepartamento: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    idDepartamento: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    idDepartamento?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    idDepartamento?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    idDepartamento?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    idDepartamento?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    idDepartamento?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    idDepartamento: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    idDepartamento?: boolean
    negocios?: boolean | Usuario$negociosArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    u_?: boolean | Usuario$u_Args<ExtArgs>
    filas?: boolean | Usuario$filasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    idDepartamento?: boolean
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    idDepartamento?: boolean
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    idDepartamento?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "idDepartamento", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    negocios?: boolean | Usuario$negociosArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    u_?: boolean | Usuario$u_Args<ExtArgs>
    filas?: boolean | Usuario$filasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      negocios: Prisma.$NegocioPayload<ExtArgs>[]
      departamento: Prisma.$DepartamentoPayload<ExtArgs>
      u_: Prisma.$UsuarioConectadoPayload<ExtArgs>[]
      filas: Prisma.$FilaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      idDepartamento: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    negocios<T extends Usuario$negociosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$negociosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departamento<T extends DepartamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartamentoDefaultArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    u_<T extends Usuario$u_Args<ExtArgs> = {}>(args?: Subset<T, Usuario$u_Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioConectadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filas<T extends Usuario$filasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$filasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly idDepartamento: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.negocios
   */
  export type Usuario$negociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    where?: NegocioWhereInput
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    cursor?: NegocioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Usuario.u_
   */
  export type Usuario$u_Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioConectado
     */
    select?: UsuarioConectadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UsuarioConectado
     */
    omit?: UsuarioConectadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioConectadoInclude<ExtArgs> | null
    where?: UsuarioConectadoWhereInput
    orderBy?: UsuarioConectadoOrderByWithRelationInput | UsuarioConectadoOrderByWithRelationInput[]
    cursor?: UsuarioConectadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioConectadoScalarFieldEnum | UsuarioConectadoScalarFieldEnum[]
  }

  /**
   * Usuario.filas
   */
  export type Usuario$filasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    where?: FilaWhereInput
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    cursor?: FilaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilaScalarFieldEnum | FilaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Fila
   */

  export type AggregateFila = {
    _count: FilaCountAggregateOutputType | null
    _avg: FilaAvgAggregateOutputType | null
    _sum: FilaSumAggregateOutputType | null
    _min: FilaMinAggregateOutputType | null
    _max: FilaMaxAggregateOutputType | null
  }

  export type FilaAvgAggregateOutputType = {
    id: number | null
    tempoFila: number | null
    idDepartamento: number | null
  }

  export type FilaSumAggregateOutputType = {
    id: number | null
    tempoFila: number | null
    idDepartamento: number | null
  }

  export type FilaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tempoFila: number | null
    idDepartamento: number | null
  }

  export type FilaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tempoFila: number | null
    idDepartamento: number | null
  }

  export type FilaCountAggregateOutputType = {
    id: number
    nome: number
    tempoFila: number
    idDepartamento: number
    _all: number
  }


  export type FilaAvgAggregateInputType = {
    id?: true
    tempoFila?: true
    idDepartamento?: true
  }

  export type FilaSumAggregateInputType = {
    id?: true
    tempoFila?: true
    idDepartamento?: true
  }

  export type FilaMinAggregateInputType = {
    id?: true
    nome?: true
    tempoFila?: true
    idDepartamento?: true
  }

  export type FilaMaxAggregateInputType = {
    id?: true
    nome?: true
    tempoFila?: true
    idDepartamento?: true
  }

  export type FilaCountAggregateInputType = {
    id?: true
    nome?: true
    tempoFila?: true
    idDepartamento?: true
    _all?: true
  }

  export type FilaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fila to aggregate.
     */
    where?: FilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filas to fetch.
     */
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filas
    **/
    _count?: true | FilaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilaMaxAggregateInputType
  }

  export type GetFilaAggregateType<T extends FilaAggregateArgs> = {
        [P in keyof T & keyof AggregateFila]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFila[P]>
      : GetScalarType<T[P], AggregateFila[P]>
  }




  export type FilaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilaWhereInput
    orderBy?: FilaOrderByWithAggregationInput | FilaOrderByWithAggregationInput[]
    by: FilaScalarFieldEnum[] | FilaScalarFieldEnum
    having?: FilaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilaCountAggregateInputType | true
    _avg?: FilaAvgAggregateInputType
    _sum?: FilaSumAggregateInputType
    _min?: FilaMinAggregateInputType
    _max?: FilaMaxAggregateInputType
  }

  export type FilaGroupByOutputType = {
    id: number
    nome: string
    tempoFila: number
    idDepartamento: number
    _count: FilaCountAggregateOutputType | null
    _avg: FilaAvgAggregateOutputType | null
    _sum: FilaSumAggregateOutputType | null
    _min: FilaMinAggregateOutputType | null
    _max: FilaMaxAggregateOutputType | null
  }

  type GetFilaGroupByPayload<T extends FilaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilaGroupByOutputType[P]>
            : GetScalarType<T[P], FilaGroupByOutputType[P]>
        }
      >
    >


  export type FilaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tempoFila?: boolean
    idDepartamento?: boolean
    fases?: boolean | Fila$fasesArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    usuarios?: boolean | Fila$usuariosArgs<ExtArgs>
    _count?: boolean | FilaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fila"]>

  export type FilaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tempoFila?: boolean
    idDepartamento?: boolean
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fila"]>

  export type FilaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tempoFila?: boolean
    idDepartamento?: boolean
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fila"]>

  export type FilaSelectScalar = {
    id?: boolean
    nome?: boolean
    tempoFila?: boolean
    idDepartamento?: boolean
  }

  export type FilaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tempoFila" | "idDepartamento", ExtArgs["result"]["fila"]>
  export type FilaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fases?: boolean | Fila$fasesArgs<ExtArgs>
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
    usuarios?: boolean | Fila$usuariosArgs<ExtArgs>
    _count?: boolean | FilaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }
  export type FilaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | DepartamentoDefaultArgs<ExtArgs>
  }

  export type $FilaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fila"
    objects: {
      fases: Prisma.$FasePayload<ExtArgs>[]
      departamento: Prisma.$DepartamentoPayload<ExtArgs>
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tempoFila: number
      idDepartamento: number
    }, ExtArgs["result"]["fila"]>
    composites: {}
  }

  type FilaGetPayload<S extends boolean | null | undefined | FilaDefaultArgs> = $Result.GetResult<Prisma.$FilaPayload, S>

  type FilaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilaCountAggregateInputType | true
    }

  export interface FilaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fila'], meta: { name: 'Fila' } }
    /**
     * Find zero or one Fila that matches the filter.
     * @param {FilaFindUniqueArgs} args - Arguments to find a Fila
     * @example
     * // Get one Fila
     * const fila = await prisma.fila.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilaFindUniqueArgs>(args: SelectSubset<T, FilaFindUniqueArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fila that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilaFindUniqueOrThrowArgs} args - Arguments to find a Fila
     * @example
     * // Get one Fila
     * const fila = await prisma.fila.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilaFindUniqueOrThrowArgs>(args: SelectSubset<T, FilaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fila that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaFindFirstArgs} args - Arguments to find a Fila
     * @example
     * // Get one Fila
     * const fila = await prisma.fila.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilaFindFirstArgs>(args?: SelectSubset<T, FilaFindFirstArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fila that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaFindFirstOrThrowArgs} args - Arguments to find a Fila
     * @example
     * // Get one Fila
     * const fila = await prisma.fila.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilaFindFirstOrThrowArgs>(args?: SelectSubset<T, FilaFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filas
     * const filas = await prisma.fila.findMany()
     * 
     * // Get first 10 Filas
     * const filas = await prisma.fila.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filaWithIdOnly = await prisma.fila.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilaFindManyArgs>(args?: SelectSubset<T, FilaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fila.
     * @param {FilaCreateArgs} args - Arguments to create a Fila.
     * @example
     * // Create one Fila
     * const Fila = await prisma.fila.create({
     *   data: {
     *     // ... data to create a Fila
     *   }
     * })
     * 
     */
    create<T extends FilaCreateArgs>(args: SelectSubset<T, FilaCreateArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filas.
     * @param {FilaCreateManyArgs} args - Arguments to create many Filas.
     * @example
     * // Create many Filas
     * const fila = await prisma.fila.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilaCreateManyArgs>(args?: SelectSubset<T, FilaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filas and returns the data saved in the database.
     * @param {FilaCreateManyAndReturnArgs} args - Arguments to create many Filas.
     * @example
     * // Create many Filas
     * const fila = await prisma.fila.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filas and only return the `id`
     * const filaWithIdOnly = await prisma.fila.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilaCreateManyAndReturnArgs>(args?: SelectSubset<T, FilaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fila.
     * @param {FilaDeleteArgs} args - Arguments to delete one Fila.
     * @example
     * // Delete one Fila
     * const Fila = await prisma.fila.delete({
     *   where: {
     *     // ... filter to delete one Fila
     *   }
     * })
     * 
     */
    delete<T extends FilaDeleteArgs>(args: SelectSubset<T, FilaDeleteArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fila.
     * @param {FilaUpdateArgs} args - Arguments to update one Fila.
     * @example
     * // Update one Fila
     * const fila = await prisma.fila.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilaUpdateArgs>(args: SelectSubset<T, FilaUpdateArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filas.
     * @param {FilaDeleteManyArgs} args - Arguments to filter Filas to delete.
     * @example
     * // Delete a few Filas
     * const { count } = await prisma.fila.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilaDeleteManyArgs>(args?: SelectSubset<T, FilaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filas
     * const fila = await prisma.fila.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilaUpdateManyArgs>(args: SelectSubset<T, FilaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filas and returns the data updated in the database.
     * @param {FilaUpdateManyAndReturnArgs} args - Arguments to update many Filas.
     * @example
     * // Update many Filas
     * const fila = await prisma.fila.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filas and only return the `id`
     * const filaWithIdOnly = await prisma.fila.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilaUpdateManyAndReturnArgs>(args: SelectSubset<T, FilaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fila.
     * @param {FilaUpsertArgs} args - Arguments to update or create a Fila.
     * @example
     * // Update or create a Fila
     * const fila = await prisma.fila.upsert({
     *   create: {
     *     // ... data to create a Fila
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fila we want to update
     *   }
     * })
     */
    upsert<T extends FilaUpsertArgs>(args: SelectSubset<T, FilaUpsertArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaCountArgs} args - Arguments to filter Filas to count.
     * @example
     * // Count the number of Filas
     * const count = await prisma.fila.count({
     *   where: {
     *     // ... the filter for the Filas we want to count
     *   }
     * })
    **/
    count<T extends FilaCountArgs>(
      args?: Subset<T, FilaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilaAggregateArgs>(args: Subset<T, FilaAggregateArgs>): Prisma.PrismaPromise<GetFilaAggregateType<T>>

    /**
     * Group by Fila.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilaGroupByArgs} args - Group by arguments.
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
      T extends FilaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilaGroupByArgs['orderBy'] }
        : { orderBy?: FilaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FilaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fila model
   */
  readonly fields: FilaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fila.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fases<T extends Fila$fasesArgs<ExtArgs> = {}>(args?: Subset<T, Fila$fasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    departamento<T extends DepartamentoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartamentoDefaultArgs<ExtArgs>>): Prisma__DepartamentoClient<$Result.GetResult<Prisma.$DepartamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuarios<T extends Fila$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Fila$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fila model
   */
  interface FilaFieldRefs {
    readonly id: FieldRef<"Fila", 'Int'>
    readonly nome: FieldRef<"Fila", 'String'>
    readonly tempoFila: FieldRef<"Fila", 'Int'>
    readonly idDepartamento: FieldRef<"Fila", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Fila findUnique
   */
  export type FilaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Fila to fetch.
     */
    where: FilaWhereUniqueInput
  }

  /**
   * Fila findUniqueOrThrow
   */
  export type FilaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Fila to fetch.
     */
    where: FilaWhereUniqueInput
  }

  /**
   * Fila findFirst
   */
  export type FilaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Fila to fetch.
     */
    where?: FilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filas to fetch.
     */
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filas.
     */
    cursor?: FilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filas.
     */
    distinct?: FilaScalarFieldEnum | FilaScalarFieldEnum[]
  }

  /**
   * Fila findFirstOrThrow
   */
  export type FilaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Fila to fetch.
     */
    where?: FilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filas to fetch.
     */
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filas.
     */
    cursor?: FilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filas.
     */
    distinct?: FilaScalarFieldEnum | FilaScalarFieldEnum[]
  }

  /**
   * Fila findMany
   */
  export type FilaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter, which Filas to fetch.
     */
    where?: FilaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filas to fetch.
     */
    orderBy?: FilaOrderByWithRelationInput | FilaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filas.
     */
    cursor?: FilaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filas.
     */
    skip?: number
    distinct?: FilaScalarFieldEnum | FilaScalarFieldEnum[]
  }

  /**
   * Fila create
   */
  export type FilaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * The data needed to create a Fila.
     */
    data: XOR<FilaCreateInput, FilaUncheckedCreateInput>
  }

  /**
   * Fila createMany
   */
  export type FilaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filas.
     */
    data: FilaCreateManyInput | FilaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fila createManyAndReturn
   */
  export type FilaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * The data used to create many Filas.
     */
    data: FilaCreateManyInput | FilaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fila update
   */
  export type FilaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * The data needed to update a Fila.
     */
    data: XOR<FilaUpdateInput, FilaUncheckedUpdateInput>
    /**
     * Choose, which Fila to update.
     */
    where: FilaWhereUniqueInput
  }

  /**
   * Fila updateMany
   */
  export type FilaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filas.
     */
    data: XOR<FilaUpdateManyMutationInput, FilaUncheckedUpdateManyInput>
    /**
     * Filter which Filas to update
     */
    where?: FilaWhereInput
    /**
     * Limit how many Filas to update.
     */
    limit?: number
  }

  /**
   * Fila updateManyAndReturn
   */
  export type FilaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * The data used to update Filas.
     */
    data: XOR<FilaUpdateManyMutationInput, FilaUncheckedUpdateManyInput>
    /**
     * Filter which Filas to update
     */
    where?: FilaWhereInput
    /**
     * Limit how many Filas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fila upsert
   */
  export type FilaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * The filter to search for the Fila to update in case it exists.
     */
    where: FilaWhereUniqueInput
    /**
     * In case the Fila found by the `where` argument doesn't exist, create a new Fila with this data.
     */
    create: XOR<FilaCreateInput, FilaUncheckedCreateInput>
    /**
     * In case the Fila was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilaUpdateInput, FilaUncheckedUpdateInput>
  }

  /**
   * Fila delete
   */
  export type FilaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    /**
     * Filter which Fila to delete.
     */
    where: FilaWhereUniqueInput
  }

  /**
   * Fila deleteMany
   */
  export type FilaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filas to delete
     */
    where?: FilaWhereInput
    /**
     * Limit how many Filas to delete.
     */
    limit?: number
  }

  /**
   * Fila.fases
   */
  export type Fila$fasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    where?: FaseWhereInput
    orderBy?: FaseOrderByWithRelationInput | FaseOrderByWithRelationInput[]
    cursor?: FaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaseScalarFieldEnum | FaseScalarFieldEnum[]
  }

  /**
   * Fila.usuarios
   */
  export type Fila$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Fila without action
   */
  export type FilaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
  }


  /**
   * Model Instancia
   */

  export type AggregateInstancia = {
    _count: InstanciaCountAggregateOutputType | null
    _avg: InstanciaAvgAggregateOutputType | null
    _sum: InstanciaSumAggregateOutputType | null
    _min: InstanciaMinAggregateOutputType | null
    _max: InstanciaMaxAggregateOutputType | null
  }

  export type InstanciaAvgAggregateOutputType = {
    id: number | null
    idNegocio: number | null
  }

  export type InstanciaSumAggregateOutputType = {
    id: number | null
    idNegocio: number | null
  }

  export type InstanciaMinAggregateOutputType = {
    id: number | null
    conversaAceita: boolean | null
    conversaFechada: boolean | null
    chaveApi: string | null
    idNegocio: number | null
    nome: string | null
    idInstancia: string | null
  }

  export type InstanciaMaxAggregateOutputType = {
    id: number | null
    conversaAceita: boolean | null
    conversaFechada: boolean | null
    chaveApi: string | null
    idNegocio: number | null
    nome: string | null
    idInstancia: string | null
  }

  export type InstanciaCountAggregateOutputType = {
    id: number
    conversaAceita: number
    conversaFechada: number
    chaveApi: number
    idNegocio: number
    nome: number
    idInstancia: number
    _all: number
  }


  export type InstanciaAvgAggregateInputType = {
    id?: true
    idNegocio?: true
  }

  export type InstanciaSumAggregateInputType = {
    id?: true
    idNegocio?: true
  }

  export type InstanciaMinAggregateInputType = {
    id?: true
    conversaAceita?: true
    conversaFechada?: true
    chaveApi?: true
    idNegocio?: true
    nome?: true
    idInstancia?: true
  }

  export type InstanciaMaxAggregateInputType = {
    id?: true
    conversaAceita?: true
    conversaFechada?: true
    chaveApi?: true
    idNegocio?: true
    nome?: true
    idInstancia?: true
  }

  export type InstanciaCountAggregateInputType = {
    id?: true
    conversaAceita?: true
    conversaFechada?: true
    chaveApi?: true
    idNegocio?: true
    nome?: true
    idInstancia?: true
    _all?: true
  }

  export type InstanciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instancia to aggregate.
     */
    where?: InstanciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instancias to fetch.
     */
    orderBy?: InstanciaOrderByWithRelationInput | InstanciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstanciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instancias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instancias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instancias
    **/
    _count?: true | InstanciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InstanciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InstanciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstanciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstanciaMaxAggregateInputType
  }

  export type GetInstanciaAggregateType<T extends InstanciaAggregateArgs> = {
        [P in keyof T & keyof AggregateInstancia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstancia[P]>
      : GetScalarType<T[P], AggregateInstancia[P]>
  }




  export type InstanciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstanciaWhereInput
    orderBy?: InstanciaOrderByWithAggregationInput | InstanciaOrderByWithAggregationInput[]
    by: InstanciaScalarFieldEnum[] | InstanciaScalarFieldEnum
    having?: InstanciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstanciaCountAggregateInputType | true
    _avg?: InstanciaAvgAggregateInputType
    _sum?: InstanciaSumAggregateInputType
    _min?: InstanciaMinAggregateInputType
    _max?: InstanciaMaxAggregateInputType
  }

  export type InstanciaGroupByOutputType = {
    id: number
    conversaAceita: boolean
    conversaFechada: boolean
    chaveApi: string
    idNegocio: number
    nome: string
    idInstancia: string
    _count: InstanciaCountAggregateOutputType | null
    _avg: InstanciaAvgAggregateOutputType | null
    _sum: InstanciaSumAggregateOutputType | null
    _min: InstanciaMinAggregateOutputType | null
    _max: InstanciaMaxAggregateOutputType | null
  }

  type GetInstanciaGroupByPayload<T extends InstanciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstanciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstanciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstanciaGroupByOutputType[P]>
            : GetScalarType<T[P], InstanciaGroupByOutputType[P]>
        }
      >
    >


  export type InstanciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi?: boolean
    idNegocio?: boolean
    nome?: boolean
    idInstancia?: boolean
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
    mensagens?: boolean | Instancia$mensagensArgs<ExtArgs>
    _count?: boolean | InstanciaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instancia"]>

  export type InstanciaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi?: boolean
    idNegocio?: boolean
    nome?: boolean
    idInstancia?: boolean
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instancia"]>

  export type InstanciaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi?: boolean
    idNegocio?: boolean
    nome?: boolean
    idInstancia?: boolean
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instancia"]>

  export type InstanciaSelectScalar = {
    id?: boolean
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi?: boolean
    idNegocio?: boolean
    nome?: boolean
    idInstancia?: boolean
  }

  export type InstanciaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversaAceita" | "conversaFechada" | "chaveApi" | "idNegocio" | "nome" | "idInstancia", ExtArgs["result"]["instancia"]>
  export type InstanciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
    mensagens?: boolean | Instancia$mensagensArgs<ExtArgs>
    _count?: boolean | InstanciaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstanciaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }
  export type InstanciaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }

  export type $InstanciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instancia"
    objects: {
      negocio: Prisma.$NegocioPayload<ExtArgs>
      mensagens: Prisma.$MensagemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      conversaAceita: boolean
      conversaFechada: boolean
      chaveApi: string
      idNegocio: number
      nome: string
      idInstancia: string
    }, ExtArgs["result"]["instancia"]>
    composites: {}
  }

  type InstanciaGetPayload<S extends boolean | null | undefined | InstanciaDefaultArgs> = $Result.GetResult<Prisma.$InstanciaPayload, S>

  type InstanciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstanciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstanciaCountAggregateInputType | true
    }

  export interface InstanciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instancia'], meta: { name: 'Instancia' } }
    /**
     * Find zero or one Instancia that matches the filter.
     * @param {InstanciaFindUniqueArgs} args - Arguments to find a Instancia
     * @example
     * // Get one Instancia
     * const instancia = await prisma.instancia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstanciaFindUniqueArgs>(args: SelectSubset<T, InstanciaFindUniqueArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instancia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstanciaFindUniqueOrThrowArgs} args - Arguments to find a Instancia
     * @example
     * // Get one Instancia
     * const instancia = await prisma.instancia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstanciaFindUniqueOrThrowArgs>(args: SelectSubset<T, InstanciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instancia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanciaFindFirstArgs} args - Arguments to find a Instancia
     * @example
     * // Get one Instancia
     * const instancia = await prisma.instancia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstanciaFindFirstArgs>(args?: SelectSubset<T, InstanciaFindFirstArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instancia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanciaFindFirstOrThrowArgs} args - Arguments to find a Instancia
     * @example
     * // Get one Instancia
     * const instancia = await prisma.instancia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstanciaFindFirstOrThrowArgs>(args?: SelectSubset<T, InstanciaFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instancias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instancias
     * const instancias = await prisma.instancia.findMany()
     * 
     * // Get first 10 Instancias
     * const instancias = await prisma.instancia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instanciaWithIdOnly = await prisma.instancia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstanciaFindManyArgs>(args?: SelectSubset<T, InstanciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instancia.
     * @param {InstanciaCreateArgs} args - Arguments to create a Instancia.
     * @example
     * // Create one Instancia
     * const Instancia = await prisma.instancia.create({
     *   data: {
     *     // ... data to create a Instancia
     *   }
     * })
     * 
     */
    create<T extends InstanciaCreateArgs>(args: SelectSubset<T, InstanciaCreateArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instancias.
     * @param {InstanciaCreateManyArgs} args - Arguments to create many Instancias.
     * @example
     * // Create many Instancias
     * const instancia = await prisma.instancia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstanciaCreateManyArgs>(args?: SelectSubset<T, InstanciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instancias and returns the data saved in the database.
     * @param {InstanciaCreateManyAndReturnArgs} args - Arguments to create many Instancias.
     * @example
     * // Create many Instancias
     * const instancia = await prisma.instancia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instancias and only return the `id`
     * const instanciaWithIdOnly = await prisma.instancia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstanciaCreateManyAndReturnArgs>(args?: SelectSubset<T, InstanciaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instancia.
     * @param {InstanciaDeleteArgs} args - Arguments to delete one Instancia.
     * @example
     * // Delete one Instancia
     * const Instancia = await prisma.instancia.delete({
     *   where: {
     *     // ... filter to delete one Instancia
     *   }
     * })
     * 
     */
    delete<T extends InstanciaDeleteArgs>(args: SelectSubset<T, InstanciaDeleteArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instancia.
     * @param {InstanciaUpdateArgs} args - Arguments to update one Instancia.
     * @example
     * // Update one Instancia
     * const instancia = await prisma.instancia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstanciaUpdateArgs>(args: SelectSubset<T, InstanciaUpdateArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instancias.
     * @param {InstanciaDeleteManyArgs} args - Arguments to filter Instancias to delete.
     * @example
     * // Delete a few Instancias
     * const { count } = await prisma.instancia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstanciaDeleteManyArgs>(args?: SelectSubset<T, InstanciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instancias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instancias
     * const instancia = await prisma.instancia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstanciaUpdateManyArgs>(args: SelectSubset<T, InstanciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instancias and returns the data updated in the database.
     * @param {InstanciaUpdateManyAndReturnArgs} args - Arguments to update many Instancias.
     * @example
     * // Update many Instancias
     * const instancia = await prisma.instancia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instancias and only return the `id`
     * const instanciaWithIdOnly = await prisma.instancia.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstanciaUpdateManyAndReturnArgs>(args: SelectSubset<T, InstanciaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instancia.
     * @param {InstanciaUpsertArgs} args - Arguments to update or create a Instancia.
     * @example
     * // Update or create a Instancia
     * const instancia = await prisma.instancia.upsert({
     *   create: {
     *     // ... data to create a Instancia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instancia we want to update
     *   }
     * })
     */
    upsert<T extends InstanciaUpsertArgs>(args: SelectSubset<T, InstanciaUpsertArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instancias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanciaCountArgs} args - Arguments to filter Instancias to count.
     * @example
     * // Count the number of Instancias
     * const count = await prisma.instancia.count({
     *   where: {
     *     // ... the filter for the Instancias we want to count
     *   }
     * })
    **/
    count<T extends InstanciaCountArgs>(
      args?: Subset<T, InstanciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstanciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instancia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstanciaAggregateArgs>(args: Subset<T, InstanciaAggregateArgs>): Prisma.PrismaPromise<GetInstanciaAggregateType<T>>

    /**
     * Group by Instancia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstanciaGroupByArgs} args - Group by arguments.
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
      T extends InstanciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstanciaGroupByArgs['orderBy'] }
        : { orderBy?: InstanciaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstanciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstanciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instancia model
   */
  readonly fields: InstanciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instancia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstanciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    negocio<T extends NegocioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NegocioDefaultArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mensagens<T extends Instancia$mensagensArgs<ExtArgs> = {}>(args?: Subset<T, Instancia$mensagensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Instancia model
   */
  interface InstanciaFieldRefs {
    readonly id: FieldRef<"Instancia", 'Int'>
    readonly conversaAceita: FieldRef<"Instancia", 'Boolean'>
    readonly conversaFechada: FieldRef<"Instancia", 'Boolean'>
    readonly chaveApi: FieldRef<"Instancia", 'String'>
    readonly idNegocio: FieldRef<"Instancia", 'Int'>
    readonly nome: FieldRef<"Instancia", 'String'>
    readonly idInstancia: FieldRef<"Instancia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instancia findUnique
   */
  export type InstanciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * Filter, which Instancia to fetch.
     */
    where: InstanciaWhereUniqueInput
  }

  /**
   * Instancia findUniqueOrThrow
   */
  export type InstanciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * Filter, which Instancia to fetch.
     */
    where: InstanciaWhereUniqueInput
  }

  /**
   * Instancia findFirst
   */
  export type InstanciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * Filter, which Instancia to fetch.
     */
    where?: InstanciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instancias to fetch.
     */
    orderBy?: InstanciaOrderByWithRelationInput | InstanciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instancias.
     */
    cursor?: InstanciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instancias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instancias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instancias.
     */
    distinct?: InstanciaScalarFieldEnum | InstanciaScalarFieldEnum[]
  }

  /**
   * Instancia findFirstOrThrow
   */
  export type InstanciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * Filter, which Instancia to fetch.
     */
    where?: InstanciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instancias to fetch.
     */
    orderBy?: InstanciaOrderByWithRelationInput | InstanciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instancias.
     */
    cursor?: InstanciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instancias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instancias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instancias.
     */
    distinct?: InstanciaScalarFieldEnum | InstanciaScalarFieldEnum[]
  }

  /**
   * Instancia findMany
   */
  export type InstanciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * Filter, which Instancias to fetch.
     */
    where?: InstanciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instancias to fetch.
     */
    orderBy?: InstanciaOrderByWithRelationInput | InstanciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instancias.
     */
    cursor?: InstanciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instancias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instancias.
     */
    skip?: number
    distinct?: InstanciaScalarFieldEnum | InstanciaScalarFieldEnum[]
  }

  /**
   * Instancia create
   */
  export type InstanciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Instancia.
     */
    data: XOR<InstanciaCreateInput, InstanciaUncheckedCreateInput>
  }

  /**
   * Instancia createMany
   */
  export type InstanciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instancias.
     */
    data: InstanciaCreateManyInput | InstanciaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Instancia createManyAndReturn
   */
  export type InstanciaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * The data used to create many Instancias.
     */
    data: InstanciaCreateManyInput | InstanciaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instancia update
   */
  export type InstanciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Instancia.
     */
    data: XOR<InstanciaUpdateInput, InstanciaUncheckedUpdateInput>
    /**
     * Choose, which Instancia to update.
     */
    where: InstanciaWhereUniqueInput
  }

  /**
   * Instancia updateMany
   */
  export type InstanciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instancias.
     */
    data: XOR<InstanciaUpdateManyMutationInput, InstanciaUncheckedUpdateManyInput>
    /**
     * Filter which Instancias to update
     */
    where?: InstanciaWhereInput
    /**
     * Limit how many Instancias to update.
     */
    limit?: number
  }

  /**
   * Instancia updateManyAndReturn
   */
  export type InstanciaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * The data used to update Instancias.
     */
    data: XOR<InstanciaUpdateManyMutationInput, InstanciaUncheckedUpdateManyInput>
    /**
     * Filter which Instancias to update
     */
    where?: InstanciaWhereInput
    /**
     * Limit how many Instancias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instancia upsert
   */
  export type InstanciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Instancia to update in case it exists.
     */
    where: InstanciaWhereUniqueInput
    /**
     * In case the Instancia found by the `where` argument doesn't exist, create a new Instancia with this data.
     */
    create: XOR<InstanciaCreateInput, InstanciaUncheckedCreateInput>
    /**
     * In case the Instancia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstanciaUpdateInput, InstanciaUncheckedUpdateInput>
  }

  /**
   * Instancia delete
   */
  export type InstanciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    /**
     * Filter which Instancia to delete.
     */
    where: InstanciaWhereUniqueInput
  }

  /**
   * Instancia deleteMany
   */
  export type InstanciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instancias to delete
     */
    where?: InstanciaWhereInput
    /**
     * Limit how many Instancias to delete.
     */
    limit?: number
  }

  /**
   * Instancia.mensagens
   */
  export type Instancia$mensagensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    cursor?: MensagemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Instancia without action
   */
  export type InstanciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
  }


  /**
   * Model Fase
   */

  export type AggregateFase = {
    _count: FaseCountAggregateOutputType | null
    _avg: FaseAvgAggregateOutputType | null
    _sum: FaseSumAggregateOutputType | null
    _min: FaseMinAggregateOutputType | null
    _max: FaseMaxAggregateOutputType | null
  }

  export type FaseAvgAggregateOutputType = {
    id: number | null
    idPipeline: number | null
    idFila: number | null
  }

  export type FaseSumAggregateOutputType = {
    id: number | null
    idPipeline: number | null
    idFila: number | null
  }

  export type FaseMinAggregateOutputType = {
    id: number | null
    cor: string | null
    posicao: string | null
    idPipeline: number | null
    nome: string | null
    perdaOuGanho: boolean | null
    idFila: number | null
  }

  export type FaseMaxAggregateOutputType = {
    id: number | null
    cor: string | null
    posicao: string | null
    idPipeline: number | null
    nome: string | null
    perdaOuGanho: boolean | null
    idFila: number | null
  }

  export type FaseCountAggregateOutputType = {
    id: number
    cor: number
    posicao: number
    idPipeline: number
    nome: number
    perdaOuGanho: number
    idFila: number
    _all: number
  }


  export type FaseAvgAggregateInputType = {
    id?: true
    idPipeline?: true
    idFila?: true
  }

  export type FaseSumAggregateInputType = {
    id?: true
    idPipeline?: true
    idFila?: true
  }

  export type FaseMinAggregateInputType = {
    id?: true
    cor?: true
    posicao?: true
    idPipeline?: true
    nome?: true
    perdaOuGanho?: true
    idFila?: true
  }

  export type FaseMaxAggregateInputType = {
    id?: true
    cor?: true
    posicao?: true
    idPipeline?: true
    nome?: true
    perdaOuGanho?: true
    idFila?: true
  }

  export type FaseCountAggregateInputType = {
    id?: true
    cor?: true
    posicao?: true
    idPipeline?: true
    nome?: true
    perdaOuGanho?: true
    idFila?: true
    _all?: true
  }

  export type FaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fase to aggregate.
     */
    where?: FaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fases to fetch.
     */
    orderBy?: FaseOrderByWithRelationInput | FaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fases
    **/
    _count?: true | FaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaseMaxAggregateInputType
  }

  export type GetFaseAggregateType<T extends FaseAggregateArgs> = {
        [P in keyof T & keyof AggregateFase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFase[P]>
      : GetScalarType<T[P], AggregateFase[P]>
  }




  export type FaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaseWhereInput
    orderBy?: FaseOrderByWithAggregationInput | FaseOrderByWithAggregationInput[]
    by: FaseScalarFieldEnum[] | FaseScalarFieldEnum
    having?: FaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaseCountAggregateInputType | true
    _avg?: FaseAvgAggregateInputType
    _sum?: FaseSumAggregateInputType
    _min?: FaseMinAggregateInputType
    _max?: FaseMaxAggregateInputType
  }

  export type FaseGroupByOutputType = {
    id: number
    cor: string
    posicao: string
    idPipeline: number
    nome: string
    perdaOuGanho: boolean
    idFila: number | null
    _count: FaseCountAggregateOutputType | null
    _avg: FaseAvgAggregateOutputType | null
    _sum: FaseSumAggregateOutputType | null
    _min: FaseMinAggregateOutputType | null
    _max: FaseMaxAggregateOutputType | null
  }

  type GetFaseGroupByPayload<T extends FaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaseGroupByOutputType[P]>
            : GetScalarType<T[P], FaseGroupByOutputType[P]>
        }
      >
    >


  export type FaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cor?: boolean
    posicao?: boolean
    idPipeline?: boolean
    nome?: boolean
    perdaOuGanho?: boolean
    idFila?: boolean
    fila?: boolean | Fase$filaArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    negocios?: boolean | Fase$negociosArgs<ExtArgs>
    camposObrigatorios?: boolean | Fase$camposObrigatoriosArgs<ExtArgs>
    _count?: boolean | FaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fase"]>

  export type FaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cor?: boolean
    posicao?: boolean
    idPipeline?: boolean
    nome?: boolean
    perdaOuGanho?: boolean
    idFila?: boolean
    fila?: boolean | Fase$filaArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fase"]>

  export type FaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cor?: boolean
    posicao?: boolean
    idPipeline?: boolean
    nome?: boolean
    perdaOuGanho?: boolean
    idFila?: boolean
    fila?: boolean | Fase$filaArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fase"]>

  export type FaseSelectScalar = {
    id?: boolean
    cor?: boolean
    posicao?: boolean
    idPipeline?: boolean
    nome?: boolean
    perdaOuGanho?: boolean
    idFila?: boolean
  }

  export type FaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cor" | "posicao" | "idPipeline" | "nome" | "perdaOuGanho" | "idFila", ExtArgs["result"]["fase"]>
  export type FaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fila?: boolean | Fase$filaArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    negocios?: boolean | Fase$negociosArgs<ExtArgs>
    camposObrigatorios?: boolean | Fase$camposObrigatoriosArgs<ExtArgs>
    _count?: boolean | FaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fila?: boolean | Fase$filaArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
  }
  export type FaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fila?: boolean | Fase$filaArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
  }

  export type $FasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fase"
    objects: {
      fila: Prisma.$FilaPayload<ExtArgs> | null
      pipeline: Prisma.$PipelinePayload<ExtArgs>
      negocios: Prisma.$NegocioPayload<ExtArgs>[]
      camposObrigatorios: Prisma.$CampoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cor: string
      posicao: string
      idPipeline: number
      nome: string
      perdaOuGanho: boolean
      idFila: number | null
    }, ExtArgs["result"]["fase"]>
    composites: {}
  }

  type FaseGetPayload<S extends boolean | null | undefined | FaseDefaultArgs> = $Result.GetResult<Prisma.$FasePayload, S>

  type FaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaseCountAggregateInputType | true
    }

  export interface FaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fase'], meta: { name: 'Fase' } }
    /**
     * Find zero or one Fase that matches the filter.
     * @param {FaseFindUniqueArgs} args - Arguments to find a Fase
     * @example
     * // Get one Fase
     * const fase = await prisma.fase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaseFindUniqueArgs>(args: SelectSubset<T, FaseFindUniqueArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaseFindUniqueOrThrowArgs} args - Arguments to find a Fase
     * @example
     * // Get one Fase
     * const fase = await prisma.fase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaseFindUniqueOrThrowArgs>(args: SelectSubset<T, FaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaseFindFirstArgs} args - Arguments to find a Fase
     * @example
     * // Get one Fase
     * const fase = await prisma.fase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaseFindFirstArgs>(args?: SelectSubset<T, FaseFindFirstArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaseFindFirstOrThrowArgs} args - Arguments to find a Fase
     * @example
     * // Get one Fase
     * const fase = await prisma.fase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaseFindFirstOrThrowArgs>(args?: SelectSubset<T, FaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fases
     * const fases = await prisma.fase.findMany()
     * 
     * // Get first 10 Fases
     * const fases = await prisma.fase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faseWithIdOnly = await prisma.fase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaseFindManyArgs>(args?: SelectSubset<T, FaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fase.
     * @param {FaseCreateArgs} args - Arguments to create a Fase.
     * @example
     * // Create one Fase
     * const Fase = await prisma.fase.create({
     *   data: {
     *     // ... data to create a Fase
     *   }
     * })
     * 
     */
    create<T extends FaseCreateArgs>(args: SelectSubset<T, FaseCreateArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fases.
     * @param {FaseCreateManyArgs} args - Arguments to create many Fases.
     * @example
     * // Create many Fases
     * const fase = await prisma.fase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaseCreateManyArgs>(args?: SelectSubset<T, FaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fases and returns the data saved in the database.
     * @param {FaseCreateManyAndReturnArgs} args - Arguments to create many Fases.
     * @example
     * // Create many Fases
     * const fase = await prisma.fase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fases and only return the `id`
     * const faseWithIdOnly = await prisma.fase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaseCreateManyAndReturnArgs>(args?: SelectSubset<T, FaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fase.
     * @param {FaseDeleteArgs} args - Arguments to delete one Fase.
     * @example
     * // Delete one Fase
     * const Fase = await prisma.fase.delete({
     *   where: {
     *     // ... filter to delete one Fase
     *   }
     * })
     * 
     */
    delete<T extends FaseDeleteArgs>(args: SelectSubset<T, FaseDeleteArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fase.
     * @param {FaseUpdateArgs} args - Arguments to update one Fase.
     * @example
     * // Update one Fase
     * const fase = await prisma.fase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaseUpdateArgs>(args: SelectSubset<T, FaseUpdateArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fases.
     * @param {FaseDeleteManyArgs} args - Arguments to filter Fases to delete.
     * @example
     * // Delete a few Fases
     * const { count } = await prisma.fase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaseDeleteManyArgs>(args?: SelectSubset<T, FaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fases
     * const fase = await prisma.fase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaseUpdateManyArgs>(args: SelectSubset<T, FaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fases and returns the data updated in the database.
     * @param {FaseUpdateManyAndReturnArgs} args - Arguments to update many Fases.
     * @example
     * // Update many Fases
     * const fase = await prisma.fase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fases and only return the `id`
     * const faseWithIdOnly = await prisma.fase.updateManyAndReturn({
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
    updateManyAndReturn<T extends FaseUpdateManyAndReturnArgs>(args: SelectSubset<T, FaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fase.
     * @param {FaseUpsertArgs} args - Arguments to update or create a Fase.
     * @example
     * // Update or create a Fase
     * const fase = await prisma.fase.upsert({
     *   create: {
     *     // ... data to create a Fase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fase we want to update
     *   }
     * })
     */
    upsert<T extends FaseUpsertArgs>(args: SelectSubset<T, FaseUpsertArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaseCountArgs} args - Arguments to filter Fases to count.
     * @example
     * // Count the number of Fases
     * const count = await prisma.fase.count({
     *   where: {
     *     // ... the filter for the Fases we want to count
     *   }
     * })
    **/
    count<T extends FaseCountArgs>(
      args?: Subset<T, FaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaseAggregateArgs>(args: Subset<T, FaseAggregateArgs>): Prisma.PrismaPromise<GetFaseAggregateType<T>>

    /**
     * Group by Fase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaseGroupByArgs} args - Group by arguments.
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
      T extends FaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaseGroupByArgs['orderBy'] }
        : { orderBy?: FaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fase model
   */
  readonly fields: FaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fila<T extends Fase$filaArgs<ExtArgs> = {}>(args?: Subset<T, Fase$filaArgs<ExtArgs>>): Prisma__FilaClient<$Result.GetResult<Prisma.$FilaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pipeline<T extends PipelineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PipelineDefaultArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    negocios<T extends Fase$negociosArgs<ExtArgs> = {}>(args?: Subset<T, Fase$negociosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    camposObrigatorios<T extends Fase$camposObrigatoriosArgs<ExtArgs> = {}>(args?: Subset<T, Fase$camposObrigatoriosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fase model
   */
  interface FaseFieldRefs {
    readonly id: FieldRef<"Fase", 'Int'>
    readonly cor: FieldRef<"Fase", 'String'>
    readonly posicao: FieldRef<"Fase", 'String'>
    readonly idPipeline: FieldRef<"Fase", 'Int'>
    readonly nome: FieldRef<"Fase", 'String'>
    readonly perdaOuGanho: FieldRef<"Fase", 'Boolean'>
    readonly idFila: FieldRef<"Fase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Fase findUnique
   */
  export type FaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * Filter, which Fase to fetch.
     */
    where: FaseWhereUniqueInput
  }

  /**
   * Fase findUniqueOrThrow
   */
  export type FaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * Filter, which Fase to fetch.
     */
    where: FaseWhereUniqueInput
  }

  /**
   * Fase findFirst
   */
  export type FaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * Filter, which Fase to fetch.
     */
    where?: FaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fases to fetch.
     */
    orderBy?: FaseOrderByWithRelationInput | FaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fases.
     */
    cursor?: FaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fases.
     */
    distinct?: FaseScalarFieldEnum | FaseScalarFieldEnum[]
  }

  /**
   * Fase findFirstOrThrow
   */
  export type FaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * Filter, which Fase to fetch.
     */
    where?: FaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fases to fetch.
     */
    orderBy?: FaseOrderByWithRelationInput | FaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fases.
     */
    cursor?: FaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fases.
     */
    distinct?: FaseScalarFieldEnum | FaseScalarFieldEnum[]
  }

  /**
   * Fase findMany
   */
  export type FaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * Filter, which Fases to fetch.
     */
    where?: FaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fases to fetch.
     */
    orderBy?: FaseOrderByWithRelationInput | FaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fases.
     */
    cursor?: FaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fases.
     */
    skip?: number
    distinct?: FaseScalarFieldEnum | FaseScalarFieldEnum[]
  }

  /**
   * Fase create
   */
  export type FaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Fase.
     */
    data: XOR<FaseCreateInput, FaseUncheckedCreateInput>
  }

  /**
   * Fase createMany
   */
  export type FaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fases.
     */
    data: FaseCreateManyInput | FaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fase createManyAndReturn
   */
  export type FaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * The data used to create many Fases.
     */
    data: FaseCreateManyInput | FaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fase update
   */
  export type FaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Fase.
     */
    data: XOR<FaseUpdateInput, FaseUncheckedUpdateInput>
    /**
     * Choose, which Fase to update.
     */
    where: FaseWhereUniqueInput
  }

  /**
   * Fase updateMany
   */
  export type FaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fases.
     */
    data: XOR<FaseUpdateManyMutationInput, FaseUncheckedUpdateManyInput>
    /**
     * Filter which Fases to update
     */
    where?: FaseWhereInput
    /**
     * Limit how many Fases to update.
     */
    limit?: number
  }

  /**
   * Fase updateManyAndReturn
   */
  export type FaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * The data used to update Fases.
     */
    data: XOR<FaseUpdateManyMutationInput, FaseUncheckedUpdateManyInput>
    /**
     * Filter which Fases to update
     */
    where?: FaseWhereInput
    /**
     * Limit how many Fases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fase upsert
   */
  export type FaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Fase to update in case it exists.
     */
    where: FaseWhereUniqueInput
    /**
     * In case the Fase found by the `where` argument doesn't exist, create a new Fase with this data.
     */
    create: XOR<FaseCreateInput, FaseUncheckedCreateInput>
    /**
     * In case the Fase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaseUpdateInput, FaseUncheckedUpdateInput>
  }

  /**
   * Fase delete
   */
  export type FaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    /**
     * Filter which Fase to delete.
     */
    where: FaseWhereUniqueInput
  }

  /**
   * Fase deleteMany
   */
  export type FaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fases to delete
     */
    where?: FaseWhereInput
    /**
     * Limit how many Fases to delete.
     */
    limit?: number
  }

  /**
   * Fase.fila
   */
  export type Fase$filaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fila
     */
    select?: FilaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fila
     */
    omit?: FilaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilaInclude<ExtArgs> | null
    where?: FilaWhereInput
  }

  /**
   * Fase.negocios
   */
  export type Fase$negociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    where?: NegocioWhereInput
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    cursor?: NegocioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Fase.camposObrigatorios
   */
  export type Fase$camposObrigatoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    where?: CampoWhereInput
    orderBy?: CampoOrderByWithRelationInput | CampoOrderByWithRelationInput[]
    cursor?: CampoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampoScalarFieldEnum | CampoScalarFieldEnum[]
  }

  /**
   * Fase without action
   */
  export type FaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
  }


  /**
   * Model Pipeline
   */

  export type AggregatePipeline = {
    _count: PipelineCountAggregateOutputType | null
    _avg: PipelineAvgAggregateOutputType | null
    _sum: PipelineSumAggregateOutputType | null
    _min: PipelineMinAggregateOutputType | null
    _max: PipelineMaxAggregateOutputType | null
  }

  export type PipelineAvgAggregateOutputType = {
    id: number | null
  }

  export type PipelineSumAggregateOutputType = {
    id: number | null
  }

  export type PipelineMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type PipelineMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type PipelineCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type PipelineAvgAggregateInputType = {
    id?: true
  }

  export type PipelineSumAggregateInputType = {
    id?: true
  }

  export type PipelineMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type PipelineMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type PipelineCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type PipelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pipeline to aggregate.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pipelines
    **/
    _count?: true | PipelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PipelineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PipelineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PipelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PipelineMaxAggregateInputType
  }

  export type GetPipelineAggregateType<T extends PipelineAggregateArgs> = {
        [P in keyof T & keyof AggregatePipeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePipeline[P]>
      : GetScalarType<T[P], AggregatePipeline[P]>
  }




  export type PipelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PipelineWhereInput
    orderBy?: PipelineOrderByWithAggregationInput | PipelineOrderByWithAggregationInput[]
    by: PipelineScalarFieldEnum[] | PipelineScalarFieldEnum
    having?: PipelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PipelineCountAggregateInputType | true
    _avg?: PipelineAvgAggregateInputType
    _sum?: PipelineSumAggregateInputType
    _min?: PipelineMinAggregateInputType
    _max?: PipelineMaxAggregateInputType
  }

  export type PipelineGroupByOutputType = {
    id: number
    nome: string
    _count: PipelineCountAggregateOutputType | null
    _avg: PipelineAvgAggregateOutputType | null
    _sum: PipelineSumAggregateOutputType | null
    _min: PipelineMinAggregateOutputType | null
    _max: PipelineMaxAggregateOutputType | null
  }

  type GetPipelineGroupByPayload<T extends PipelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PipelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PipelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PipelineGroupByOutputType[P]>
            : GetScalarType<T[P], PipelineGroupByOutputType[P]>
        }
      >
    >


  export type PipelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    fases?: boolean | Pipeline$fasesArgs<ExtArgs>
    negocios?: boolean | Pipeline$negociosArgs<ExtArgs>
    _count?: boolean | PipelineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pipeline"]>

  export type PipelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["pipeline"]>

  export type PipelineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["pipeline"]>

  export type PipelineSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type PipelineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["pipeline"]>
  export type PipelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fases?: boolean | Pipeline$fasesArgs<ExtArgs>
    negocios?: boolean | Pipeline$negociosArgs<ExtArgs>
    _count?: boolean | PipelineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PipelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PipelineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PipelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pipeline"
    objects: {
      fases: Prisma.$FasePayload<ExtArgs>[]
      negocios: Prisma.$NegocioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["pipeline"]>
    composites: {}
  }

  type PipelineGetPayload<S extends boolean | null | undefined | PipelineDefaultArgs> = $Result.GetResult<Prisma.$PipelinePayload, S>

  type PipelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PipelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PipelineCountAggregateInputType | true
    }

  export interface PipelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pipeline'], meta: { name: 'Pipeline' } }
    /**
     * Find zero or one Pipeline that matches the filter.
     * @param {PipelineFindUniqueArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PipelineFindUniqueArgs>(args: SelectSubset<T, PipelineFindUniqueArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pipeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PipelineFindUniqueOrThrowArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PipelineFindUniqueOrThrowArgs>(args: SelectSubset<T, PipelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pipeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindFirstArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PipelineFindFirstArgs>(args?: SelectSubset<T, PipelineFindFirstArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pipeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindFirstOrThrowArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PipelineFindFirstOrThrowArgs>(args?: SelectSubset<T, PipelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pipelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pipelines
     * const pipelines = await prisma.pipeline.findMany()
     * 
     * // Get first 10 Pipelines
     * const pipelines = await prisma.pipeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pipelineWithIdOnly = await prisma.pipeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PipelineFindManyArgs>(args?: SelectSubset<T, PipelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pipeline.
     * @param {PipelineCreateArgs} args - Arguments to create a Pipeline.
     * @example
     * // Create one Pipeline
     * const Pipeline = await prisma.pipeline.create({
     *   data: {
     *     // ... data to create a Pipeline
     *   }
     * })
     * 
     */
    create<T extends PipelineCreateArgs>(args: SelectSubset<T, PipelineCreateArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pipelines.
     * @param {PipelineCreateManyArgs} args - Arguments to create many Pipelines.
     * @example
     * // Create many Pipelines
     * const pipeline = await prisma.pipeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PipelineCreateManyArgs>(args?: SelectSubset<T, PipelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pipelines and returns the data saved in the database.
     * @param {PipelineCreateManyAndReturnArgs} args - Arguments to create many Pipelines.
     * @example
     * // Create many Pipelines
     * const pipeline = await prisma.pipeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pipelines and only return the `id`
     * const pipelineWithIdOnly = await prisma.pipeline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PipelineCreateManyAndReturnArgs>(args?: SelectSubset<T, PipelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pipeline.
     * @param {PipelineDeleteArgs} args - Arguments to delete one Pipeline.
     * @example
     * // Delete one Pipeline
     * const Pipeline = await prisma.pipeline.delete({
     *   where: {
     *     // ... filter to delete one Pipeline
     *   }
     * })
     * 
     */
    delete<T extends PipelineDeleteArgs>(args: SelectSubset<T, PipelineDeleteArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pipeline.
     * @param {PipelineUpdateArgs} args - Arguments to update one Pipeline.
     * @example
     * // Update one Pipeline
     * const pipeline = await prisma.pipeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PipelineUpdateArgs>(args: SelectSubset<T, PipelineUpdateArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pipelines.
     * @param {PipelineDeleteManyArgs} args - Arguments to filter Pipelines to delete.
     * @example
     * // Delete a few Pipelines
     * const { count } = await prisma.pipeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PipelineDeleteManyArgs>(args?: SelectSubset<T, PipelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pipelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pipelines
     * const pipeline = await prisma.pipeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PipelineUpdateManyArgs>(args: SelectSubset<T, PipelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pipelines and returns the data updated in the database.
     * @param {PipelineUpdateManyAndReturnArgs} args - Arguments to update many Pipelines.
     * @example
     * // Update many Pipelines
     * const pipeline = await prisma.pipeline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pipelines and only return the `id`
     * const pipelineWithIdOnly = await prisma.pipeline.updateManyAndReturn({
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
    updateManyAndReturn<T extends PipelineUpdateManyAndReturnArgs>(args: SelectSubset<T, PipelineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pipeline.
     * @param {PipelineUpsertArgs} args - Arguments to update or create a Pipeline.
     * @example
     * // Update or create a Pipeline
     * const pipeline = await prisma.pipeline.upsert({
     *   create: {
     *     // ... data to create a Pipeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pipeline we want to update
     *   }
     * })
     */
    upsert<T extends PipelineUpsertArgs>(args: SelectSubset<T, PipelineUpsertArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pipelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineCountArgs} args - Arguments to filter Pipelines to count.
     * @example
     * // Count the number of Pipelines
     * const count = await prisma.pipeline.count({
     *   where: {
     *     // ... the filter for the Pipelines we want to count
     *   }
     * })
    **/
    count<T extends PipelineCountArgs>(
      args?: Subset<T, PipelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PipelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pipeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PipelineAggregateArgs>(args: Subset<T, PipelineAggregateArgs>): Prisma.PrismaPromise<GetPipelineAggregateType<T>>

    /**
     * Group by Pipeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineGroupByArgs} args - Group by arguments.
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
      T extends PipelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PipelineGroupByArgs['orderBy'] }
        : { orderBy?: PipelineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PipelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPipelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pipeline model
   */
  readonly fields: PipelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pipeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PipelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fases<T extends Pipeline$fasesArgs<ExtArgs> = {}>(args?: Subset<T, Pipeline$fasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    negocios<T extends Pipeline$negociosArgs<ExtArgs> = {}>(args?: Subset<T, Pipeline$negociosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pipeline model
   */
  interface PipelineFieldRefs {
    readonly id: FieldRef<"Pipeline", 'Int'>
    readonly nome: FieldRef<"Pipeline", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pipeline findUnique
   */
  export type PipelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline findUniqueOrThrow
   */
  export type PipelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline findFirst
   */
  export type PipelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pipelines.
     */
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline findFirstOrThrow
   */
  export type PipelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pipelines.
     */
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline findMany
   */
  export type PipelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipelines to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline create
   */
  export type PipelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The data needed to create a Pipeline.
     */
    data: XOR<PipelineCreateInput, PipelineUncheckedCreateInput>
  }

  /**
   * Pipeline createMany
   */
  export type PipelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pipelines.
     */
    data: PipelineCreateManyInput | PipelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pipeline createManyAndReturn
   */
  export type PipelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * The data used to create many Pipelines.
     */
    data: PipelineCreateManyInput | PipelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pipeline update
   */
  export type PipelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The data needed to update a Pipeline.
     */
    data: XOR<PipelineUpdateInput, PipelineUncheckedUpdateInput>
    /**
     * Choose, which Pipeline to update.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline updateMany
   */
  export type PipelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pipelines.
     */
    data: XOR<PipelineUpdateManyMutationInput, PipelineUncheckedUpdateManyInput>
    /**
     * Filter which Pipelines to update
     */
    where?: PipelineWhereInput
    /**
     * Limit how many Pipelines to update.
     */
    limit?: number
  }

  /**
   * Pipeline updateManyAndReturn
   */
  export type PipelineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * The data used to update Pipelines.
     */
    data: XOR<PipelineUpdateManyMutationInput, PipelineUncheckedUpdateManyInput>
    /**
     * Filter which Pipelines to update
     */
    where?: PipelineWhereInput
    /**
     * Limit how many Pipelines to update.
     */
    limit?: number
  }

  /**
   * Pipeline upsert
   */
  export type PipelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The filter to search for the Pipeline to update in case it exists.
     */
    where: PipelineWhereUniqueInput
    /**
     * In case the Pipeline found by the `where` argument doesn't exist, create a new Pipeline with this data.
     */
    create: XOR<PipelineCreateInput, PipelineUncheckedCreateInput>
    /**
     * In case the Pipeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PipelineUpdateInput, PipelineUncheckedUpdateInput>
  }

  /**
   * Pipeline delete
   */
  export type PipelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter which Pipeline to delete.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline deleteMany
   */
  export type PipelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pipelines to delete
     */
    where?: PipelineWhereInput
    /**
     * Limit how many Pipelines to delete.
     */
    limit?: number
  }

  /**
   * Pipeline.fases
   */
  export type Pipeline$fasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    where?: FaseWhereInput
    orderBy?: FaseOrderByWithRelationInput | FaseOrderByWithRelationInput[]
    cursor?: FaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaseScalarFieldEnum | FaseScalarFieldEnum[]
  }

  /**
   * Pipeline.negocios
   */
  export type Pipeline$negociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    where?: NegocioWhereInput
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    cursor?: NegocioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Pipeline without action
   */
  export type PipelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
  }


  /**
   * Model Campo
   */

  export type AggregateCampo = {
    _count: CampoCountAggregateOutputType | null
    _avg: CampoAvgAggregateOutputType | null
    _sum: CampoSumAggregateOutputType | null
    _min: CampoMinAggregateOutputType | null
    _max: CampoMaxAggregateOutputType | null
  }

  export type CampoAvgAggregateOutputType = {
    id: number | null
  }

  export type CampoSumAggregateOutputType = {
    id: number | null
  }

  export type CampoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
  }

  export type CampoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
  }

  export type CampoCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    _all: number
  }


  export type CampoAvgAggregateInputType = {
    id?: true
  }

  export type CampoSumAggregateInputType = {
    id?: true
  }

  export type CampoMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
  }

  export type CampoMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
  }

  export type CampoCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    _all?: true
  }

  export type CampoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campo to aggregate.
     */
    where?: CampoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campos to fetch.
     */
    orderBy?: CampoOrderByWithRelationInput | CampoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campos
    **/
    _count?: true | CampoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CampoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CampoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampoMaxAggregateInputType
  }

  export type GetCampoAggregateType<T extends CampoAggregateArgs> = {
        [P in keyof T & keyof AggregateCampo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampo[P]>
      : GetScalarType<T[P], AggregateCampo[P]>
  }




  export type CampoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampoWhereInput
    orderBy?: CampoOrderByWithAggregationInput | CampoOrderByWithAggregationInput[]
    by: CampoScalarFieldEnum[] | CampoScalarFieldEnum
    having?: CampoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampoCountAggregateInputType | true
    _avg?: CampoAvgAggregateInputType
    _sum?: CampoSumAggregateInputType
    _min?: CampoMinAggregateInputType
    _max?: CampoMaxAggregateInputType
  }

  export type CampoGroupByOutputType = {
    id: number
    nome: string
    tipo: string
    _count: CampoCountAggregateOutputType | null
    _avg: CampoAvgAggregateOutputType | null
    _sum: CampoSumAggregateOutputType | null
    _min: CampoMinAggregateOutputType | null
    _max: CampoMaxAggregateOutputType | null
  }

  type GetCampoGroupByPayload<T extends CampoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampoGroupByOutputType[P]>
            : GetScalarType<T[P], CampoGroupByOutputType[P]>
        }
      >
    >


  export type CampoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    form?: boolean | Campo$formArgs<ExtArgs>
    fasesObrigatorias?: boolean | Campo$fasesObrigatoriasArgs<ExtArgs>
    _count?: boolean | CampoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campo"]>

  export type CampoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["campo"]>

  export type CampoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["campo"]>

  export type CampoSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
  }

  export type CampoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo", ExtArgs["result"]["campo"]>
  export type CampoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | Campo$formArgs<ExtArgs>
    fasesObrigatorias?: boolean | Campo$fasesObrigatoriasArgs<ExtArgs>
    _count?: boolean | CampoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campo"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>[]
      fasesObrigatorias: Prisma.$FasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string
    }, ExtArgs["result"]["campo"]>
    composites: {}
  }

  type CampoGetPayload<S extends boolean | null | undefined | CampoDefaultArgs> = $Result.GetResult<Prisma.$CampoPayload, S>

  type CampoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampoCountAggregateInputType | true
    }

  export interface CampoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campo'], meta: { name: 'Campo' } }
    /**
     * Find zero or one Campo that matches the filter.
     * @param {CampoFindUniqueArgs} args - Arguments to find a Campo
     * @example
     * // Get one Campo
     * const campo = await prisma.campo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampoFindUniqueArgs>(args: SelectSubset<T, CampoFindUniqueArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampoFindUniqueOrThrowArgs} args - Arguments to find a Campo
     * @example
     * // Get one Campo
     * const campo = await prisma.campo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampoFindUniqueOrThrowArgs>(args: SelectSubset<T, CampoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoFindFirstArgs} args - Arguments to find a Campo
     * @example
     * // Get one Campo
     * const campo = await prisma.campo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampoFindFirstArgs>(args?: SelectSubset<T, CampoFindFirstArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoFindFirstOrThrowArgs} args - Arguments to find a Campo
     * @example
     * // Get one Campo
     * const campo = await prisma.campo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampoFindFirstOrThrowArgs>(args?: SelectSubset<T, CampoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campos
     * const campos = await prisma.campo.findMany()
     * 
     * // Get first 10 Campos
     * const campos = await prisma.campo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campoWithIdOnly = await prisma.campo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampoFindManyArgs>(args?: SelectSubset<T, CampoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campo.
     * @param {CampoCreateArgs} args - Arguments to create a Campo.
     * @example
     * // Create one Campo
     * const Campo = await prisma.campo.create({
     *   data: {
     *     // ... data to create a Campo
     *   }
     * })
     * 
     */
    create<T extends CampoCreateArgs>(args: SelectSubset<T, CampoCreateArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campos.
     * @param {CampoCreateManyArgs} args - Arguments to create many Campos.
     * @example
     * // Create many Campos
     * const campo = await prisma.campo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampoCreateManyArgs>(args?: SelectSubset<T, CampoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campos and returns the data saved in the database.
     * @param {CampoCreateManyAndReturnArgs} args - Arguments to create many Campos.
     * @example
     * // Create many Campos
     * const campo = await prisma.campo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campos and only return the `id`
     * const campoWithIdOnly = await prisma.campo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampoCreateManyAndReturnArgs>(args?: SelectSubset<T, CampoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campo.
     * @param {CampoDeleteArgs} args - Arguments to delete one Campo.
     * @example
     * // Delete one Campo
     * const Campo = await prisma.campo.delete({
     *   where: {
     *     // ... filter to delete one Campo
     *   }
     * })
     * 
     */
    delete<T extends CampoDeleteArgs>(args: SelectSubset<T, CampoDeleteArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campo.
     * @param {CampoUpdateArgs} args - Arguments to update one Campo.
     * @example
     * // Update one Campo
     * const campo = await prisma.campo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampoUpdateArgs>(args: SelectSubset<T, CampoUpdateArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campos.
     * @param {CampoDeleteManyArgs} args - Arguments to filter Campos to delete.
     * @example
     * // Delete a few Campos
     * const { count } = await prisma.campo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampoDeleteManyArgs>(args?: SelectSubset<T, CampoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campos
     * const campo = await prisma.campo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampoUpdateManyArgs>(args: SelectSubset<T, CampoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campos and returns the data updated in the database.
     * @param {CampoUpdateManyAndReturnArgs} args - Arguments to update many Campos.
     * @example
     * // Update many Campos
     * const campo = await prisma.campo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campos and only return the `id`
     * const campoWithIdOnly = await prisma.campo.updateManyAndReturn({
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
    updateManyAndReturn<T extends CampoUpdateManyAndReturnArgs>(args: SelectSubset<T, CampoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campo.
     * @param {CampoUpsertArgs} args - Arguments to update or create a Campo.
     * @example
     * // Update or create a Campo
     * const campo = await prisma.campo.upsert({
     *   create: {
     *     // ... data to create a Campo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campo we want to update
     *   }
     * })
     */
    upsert<T extends CampoUpsertArgs>(args: SelectSubset<T, CampoUpsertArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoCountArgs} args - Arguments to filter Campos to count.
     * @example
     * // Count the number of Campos
     * const count = await prisma.campo.count({
     *   where: {
     *     // ... the filter for the Campos we want to count
     *   }
     * })
    **/
    count<T extends CampoCountArgs>(
      args?: Subset<T, CampoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CampoAggregateArgs>(args: Subset<T, CampoAggregateArgs>): Prisma.PrismaPromise<GetCampoAggregateType<T>>

    /**
     * Group by Campo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampoGroupByArgs} args - Group by arguments.
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
      T extends CampoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampoGroupByArgs['orderBy'] }
        : { orderBy?: CampoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CampoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campo model
   */
  readonly fields: CampoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends Campo$formArgs<ExtArgs> = {}>(args?: Subset<T, Campo$formArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fasesObrigatorias<T extends Campo$fasesObrigatoriasArgs<ExtArgs> = {}>(args?: Subset<T, Campo$fasesObrigatoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Campo model
   */
  interface CampoFieldRefs {
    readonly id: FieldRef<"Campo", 'Int'>
    readonly nome: FieldRef<"Campo", 'String'>
    readonly tipo: FieldRef<"Campo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Campo findUnique
   */
  export type CampoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * Filter, which Campo to fetch.
     */
    where: CampoWhereUniqueInput
  }

  /**
   * Campo findUniqueOrThrow
   */
  export type CampoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * Filter, which Campo to fetch.
     */
    where: CampoWhereUniqueInput
  }

  /**
   * Campo findFirst
   */
  export type CampoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * Filter, which Campo to fetch.
     */
    where?: CampoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campos to fetch.
     */
    orderBy?: CampoOrderByWithRelationInput | CampoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campos.
     */
    cursor?: CampoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campos.
     */
    distinct?: CampoScalarFieldEnum | CampoScalarFieldEnum[]
  }

  /**
   * Campo findFirstOrThrow
   */
  export type CampoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * Filter, which Campo to fetch.
     */
    where?: CampoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campos to fetch.
     */
    orderBy?: CampoOrderByWithRelationInput | CampoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campos.
     */
    cursor?: CampoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campos.
     */
    distinct?: CampoScalarFieldEnum | CampoScalarFieldEnum[]
  }

  /**
   * Campo findMany
   */
  export type CampoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * Filter, which Campos to fetch.
     */
    where?: CampoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campos to fetch.
     */
    orderBy?: CampoOrderByWithRelationInput | CampoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campos.
     */
    cursor?: CampoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campos.
     */
    skip?: number
    distinct?: CampoScalarFieldEnum | CampoScalarFieldEnum[]
  }

  /**
   * Campo create
   */
  export type CampoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * The data needed to create a Campo.
     */
    data: XOR<CampoCreateInput, CampoUncheckedCreateInput>
  }

  /**
   * Campo createMany
   */
  export type CampoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campos.
     */
    data: CampoCreateManyInput | CampoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campo createManyAndReturn
   */
  export type CampoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * The data used to create many Campos.
     */
    data: CampoCreateManyInput | CampoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campo update
   */
  export type CampoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * The data needed to update a Campo.
     */
    data: XOR<CampoUpdateInput, CampoUncheckedUpdateInput>
    /**
     * Choose, which Campo to update.
     */
    where: CampoWhereUniqueInput
  }

  /**
   * Campo updateMany
   */
  export type CampoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campos.
     */
    data: XOR<CampoUpdateManyMutationInput, CampoUncheckedUpdateManyInput>
    /**
     * Filter which Campos to update
     */
    where?: CampoWhereInput
    /**
     * Limit how many Campos to update.
     */
    limit?: number
  }

  /**
   * Campo updateManyAndReturn
   */
  export type CampoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * The data used to update Campos.
     */
    data: XOR<CampoUpdateManyMutationInput, CampoUncheckedUpdateManyInput>
    /**
     * Filter which Campos to update
     */
    where?: CampoWhereInput
    /**
     * Limit how many Campos to update.
     */
    limit?: number
  }

  /**
   * Campo upsert
   */
  export type CampoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * The filter to search for the Campo to update in case it exists.
     */
    where: CampoWhereUniqueInput
    /**
     * In case the Campo found by the `where` argument doesn't exist, create a new Campo with this data.
     */
    create: XOR<CampoCreateInput, CampoUncheckedCreateInput>
    /**
     * In case the Campo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampoUpdateInput, CampoUncheckedUpdateInput>
  }

  /**
   * Campo delete
   */
  export type CampoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
    /**
     * Filter which Campo to delete.
     */
    where: CampoWhereUniqueInput
  }

  /**
   * Campo deleteMany
   */
  export type CampoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campos to delete
     */
    where?: CampoWhereInput
    /**
     * Limit how many Campos to delete.
     */
    limit?: number
  }

  /**
   * Campo.form
   */
  export type Campo$formArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    where?: FormWhereInput
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    cursor?: FormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Campo.fasesObrigatorias
   */
  export type Campo$fasesObrigatoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fase
     */
    select?: FaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fase
     */
    omit?: FaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FaseInclude<ExtArgs> | null
    where?: FaseWhereInput
    orderBy?: FaseOrderByWithRelationInput | FaseOrderByWithRelationInput[]
    cursor?: FaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FaseScalarFieldEnum | FaseScalarFieldEnum[]
  }

  /**
   * Campo without action
   */
  export type CampoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campo
     */
    select?: CampoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campo
     */
    omit?: CampoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampoInclude<ExtArgs> | null
  }


  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormAvgAggregateOutputType = {
    id: number | null
    idCampo: number | null
    idNegocio: number | null
  }

  export type FormSumAggregateOutputType = {
    id: number | null
    idCampo: number | null
    idNegocio: number | null
  }

  export type FormMinAggregateOutputType = {
    id: number | null
    valor: string | null
    idCampo: number | null
    idNegocio: number | null
  }

  export type FormMaxAggregateOutputType = {
    id: number | null
    valor: string | null
    idCampo: number | null
    idNegocio: number | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    valor: number
    idCampo: number
    idNegocio: number
    _all: number
  }


  export type FormAvgAggregateInputType = {
    id?: true
    idCampo?: true
    idNegocio?: true
  }

  export type FormSumAggregateInputType = {
    id?: true
    idCampo?: true
    idNegocio?: true
  }

  export type FormMinAggregateInputType = {
    id?: true
    valor?: true
    idCampo?: true
    idNegocio?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    valor?: true
    idCampo?: true
    idNegocio?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    valor?: true
    idCampo?: true
    idNegocio?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _avg?: FormAvgAggregateInputType
    _sum?: FormSumAggregateInputType
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: number
    valor: string
    idCampo: number
    idNegocio: number
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    idCampo?: boolean
    idNegocio?: boolean
    campo?: boolean | CampoDefaultArgs<ExtArgs>
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    idCampo?: boolean
    idNegocio?: boolean
    campo?: boolean | CampoDefaultArgs<ExtArgs>
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    valor?: boolean
    idCampo?: boolean
    idNegocio?: boolean
    campo?: boolean | CampoDefaultArgs<ExtArgs>
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    valor?: boolean
    idCampo?: boolean
    idNegocio?: boolean
  }

  export type FormOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "valor" | "idCampo" | "idNegocio", ExtArgs["result"]["form"]>
  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campo?: boolean | CampoDefaultArgs<ExtArgs>
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }
  export type FormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campo?: boolean | CampoDefaultArgs<ExtArgs>
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }
  export type FormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campo?: boolean | CampoDefaultArgs<ExtArgs>
    negocio?: boolean | NegocioDefaultArgs<ExtArgs>
  }

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      campo: Prisma.$CampoPayload<ExtArgs>
      negocio: Prisma.$NegocioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      valor: string
      idCampo: number
      idNegocio: number
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormCreateManyAndReturnArgs>(args?: SelectSubset<T, FormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormUpdateManyAndReturnArgs>(args: SelectSubset<T, FormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
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
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campo<T extends CampoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampoDefaultArgs<ExtArgs>>): Prisma__CampoClient<$Result.GetResult<Prisma.$CampoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    negocio<T extends NegocioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NegocioDefaultArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Form model
   */
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'Int'>
    readonly valor: FieldRef<"Form", 'String'>
    readonly idCampo: FieldRef<"Form", 'Int'>
    readonly idNegocio: FieldRef<"Form", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form createManyAndReturn
   */
  export type FormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Form updateManyAndReturn
   */
  export type FormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
  }


  /**
   * Model Negocio
   */

  export type AggregateNegocio = {
    _count: NegocioCountAggregateOutputType | null
    _avg: NegocioAvgAggregateOutputType | null
    _sum: NegocioSumAggregateOutputType | null
    _min: NegocioMinAggregateOutputType | null
    _max: NegocioMaxAggregateOutputType | null
  }

  export type NegocioAvgAggregateOutputType = {
    id: number | null
    idFase: number | null
    idPipeline: number | null
    idUsuario: number | null
  }

  export type NegocioSumAggregateOutputType = {
    id: number | null
    idFase: number | null
    idPipeline: number | null
    idUsuario: number | null
  }

  export type NegocioMinAggregateOutputType = {
    id: number | null
    telefone: string | null
    dateCreate: Date | null
    numeroCampanha: string | null
    idFase: number | null
    idPipeline: number | null
    idUsuario: number | null
    nome: string | null
  }

  export type NegocioMaxAggregateOutputType = {
    id: number | null
    telefone: string | null
    dateCreate: Date | null
    numeroCampanha: string | null
    idFase: number | null
    idPipeline: number | null
    idUsuario: number | null
    nome: string | null
  }

  export type NegocioCountAggregateOutputType = {
    id: number
    telefone: number
    dateCreate: number
    numeroCampanha: number
    idFase: number
    idPipeline: number
    idUsuario: number
    nome: number
    _all: number
  }


  export type NegocioAvgAggregateInputType = {
    id?: true
    idFase?: true
    idPipeline?: true
    idUsuario?: true
  }

  export type NegocioSumAggregateInputType = {
    id?: true
    idFase?: true
    idPipeline?: true
    idUsuario?: true
  }

  export type NegocioMinAggregateInputType = {
    id?: true
    telefone?: true
    dateCreate?: true
    numeroCampanha?: true
    idFase?: true
    idPipeline?: true
    idUsuario?: true
    nome?: true
  }

  export type NegocioMaxAggregateInputType = {
    id?: true
    telefone?: true
    dateCreate?: true
    numeroCampanha?: true
    idFase?: true
    idPipeline?: true
    idUsuario?: true
    nome?: true
  }

  export type NegocioCountAggregateInputType = {
    id?: true
    telefone?: true
    dateCreate?: true
    numeroCampanha?: true
    idFase?: true
    idPipeline?: true
    idUsuario?: true
    nome?: true
    _all?: true
  }

  export type NegocioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Negocio to aggregate.
     */
    where?: NegocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negocios to fetch.
     */
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NegocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Negocios
    **/
    _count?: true | NegocioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NegocioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NegocioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NegocioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NegocioMaxAggregateInputType
  }

  export type GetNegocioAggregateType<T extends NegocioAggregateArgs> = {
        [P in keyof T & keyof AggregateNegocio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNegocio[P]>
      : GetScalarType<T[P], AggregateNegocio[P]>
  }




  export type NegocioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NegocioWhereInput
    orderBy?: NegocioOrderByWithAggregationInput | NegocioOrderByWithAggregationInput[]
    by: NegocioScalarFieldEnum[] | NegocioScalarFieldEnum
    having?: NegocioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NegocioCountAggregateInputType | true
    _avg?: NegocioAvgAggregateInputType
    _sum?: NegocioSumAggregateInputType
    _min?: NegocioMinAggregateInputType
    _max?: NegocioMaxAggregateInputType
  }

  export type NegocioGroupByOutputType = {
    id: number
    telefone: string
    dateCreate: Date
    numeroCampanha: string
    idFase: number
    idPipeline: number
    idUsuario: number
    nome: string | null
    _count: NegocioCountAggregateOutputType | null
    _avg: NegocioAvgAggregateOutputType | null
    _sum: NegocioSumAggregateOutputType | null
    _min: NegocioMinAggregateOutputType | null
    _max: NegocioMaxAggregateOutputType | null
  }

  type GetNegocioGroupByPayload<T extends NegocioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NegocioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NegocioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NegocioGroupByOutputType[P]>
            : GetScalarType<T[P], NegocioGroupByOutputType[P]>
        }
      >
    >


  export type NegocioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telefone?: boolean
    dateCreate?: boolean
    numeroCampanha?: boolean
    idFase?: boolean
    idPipeline?: boolean
    idUsuario?: boolean
    nome?: boolean
    form?: boolean | Negocio$formArgs<ExtArgs>
    instancias?: boolean | Negocio$instanciasArgs<ExtArgs>
    fase?: boolean | FaseDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | NegocioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telefone?: boolean
    dateCreate?: boolean
    numeroCampanha?: boolean
    idFase?: boolean
    idPipeline?: boolean
    idUsuario?: boolean
    nome?: boolean
    fase?: boolean | FaseDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telefone?: boolean
    dateCreate?: boolean
    numeroCampanha?: boolean
    idFase?: boolean
    idPipeline?: boolean
    idUsuario?: boolean
    nome?: boolean
    fase?: boolean | FaseDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["negocio"]>

  export type NegocioSelectScalar = {
    id?: boolean
    telefone?: boolean
    dateCreate?: boolean
    numeroCampanha?: boolean
    idFase?: boolean
    idPipeline?: boolean
    idUsuario?: boolean
    nome?: boolean
  }

  export type NegocioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telefone" | "dateCreate" | "numeroCampanha" | "idFase" | "idPipeline" | "idUsuario" | "nome", ExtArgs["result"]["negocio"]>
  export type NegocioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | Negocio$formArgs<ExtArgs>
    instancias?: boolean | Negocio$instanciasArgs<ExtArgs>
    fase?: boolean | FaseDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    _count?: boolean | NegocioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NegocioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fase?: boolean | FaseDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type NegocioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fase?: boolean | FaseDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $NegocioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Negocio"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>[]
      instancias: Prisma.$InstanciaPayload<ExtArgs>[]
      fase: Prisma.$FasePayload<ExtArgs>
      pipeline: Prisma.$PipelinePayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      telefone: string
      dateCreate: Date
      numeroCampanha: string
      idFase: number
      idPipeline: number
      idUsuario: number
      nome: string | null
    }, ExtArgs["result"]["negocio"]>
    composites: {}
  }

  type NegocioGetPayload<S extends boolean | null | undefined | NegocioDefaultArgs> = $Result.GetResult<Prisma.$NegocioPayload, S>

  type NegocioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NegocioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NegocioCountAggregateInputType | true
    }

  export interface NegocioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Negocio'], meta: { name: 'Negocio' } }
    /**
     * Find zero or one Negocio that matches the filter.
     * @param {NegocioFindUniqueArgs} args - Arguments to find a Negocio
     * @example
     * // Get one Negocio
     * const negocio = await prisma.negocio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NegocioFindUniqueArgs>(args: SelectSubset<T, NegocioFindUniqueArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Negocio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NegocioFindUniqueOrThrowArgs} args - Arguments to find a Negocio
     * @example
     * // Get one Negocio
     * const negocio = await prisma.negocio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NegocioFindUniqueOrThrowArgs>(args: SelectSubset<T, NegocioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Negocio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioFindFirstArgs} args - Arguments to find a Negocio
     * @example
     * // Get one Negocio
     * const negocio = await prisma.negocio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NegocioFindFirstArgs>(args?: SelectSubset<T, NegocioFindFirstArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Negocio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioFindFirstOrThrowArgs} args - Arguments to find a Negocio
     * @example
     * // Get one Negocio
     * const negocio = await prisma.negocio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NegocioFindFirstOrThrowArgs>(args?: SelectSubset<T, NegocioFindFirstOrThrowArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Negocios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Negocios
     * const negocios = await prisma.negocio.findMany()
     * 
     * // Get first 10 Negocios
     * const negocios = await prisma.negocio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const negocioWithIdOnly = await prisma.negocio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NegocioFindManyArgs>(args?: SelectSubset<T, NegocioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Negocio.
     * @param {NegocioCreateArgs} args - Arguments to create a Negocio.
     * @example
     * // Create one Negocio
     * const Negocio = await prisma.negocio.create({
     *   data: {
     *     // ... data to create a Negocio
     *   }
     * })
     * 
     */
    create<T extends NegocioCreateArgs>(args: SelectSubset<T, NegocioCreateArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Negocios.
     * @param {NegocioCreateManyArgs} args - Arguments to create many Negocios.
     * @example
     * // Create many Negocios
     * const negocio = await prisma.negocio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NegocioCreateManyArgs>(args?: SelectSubset<T, NegocioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Negocios and returns the data saved in the database.
     * @param {NegocioCreateManyAndReturnArgs} args - Arguments to create many Negocios.
     * @example
     * // Create many Negocios
     * const negocio = await prisma.negocio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Negocios and only return the `id`
     * const negocioWithIdOnly = await prisma.negocio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NegocioCreateManyAndReturnArgs>(args?: SelectSubset<T, NegocioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Negocio.
     * @param {NegocioDeleteArgs} args - Arguments to delete one Negocio.
     * @example
     * // Delete one Negocio
     * const Negocio = await prisma.negocio.delete({
     *   where: {
     *     // ... filter to delete one Negocio
     *   }
     * })
     * 
     */
    delete<T extends NegocioDeleteArgs>(args: SelectSubset<T, NegocioDeleteArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Negocio.
     * @param {NegocioUpdateArgs} args - Arguments to update one Negocio.
     * @example
     * // Update one Negocio
     * const negocio = await prisma.negocio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NegocioUpdateArgs>(args: SelectSubset<T, NegocioUpdateArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Negocios.
     * @param {NegocioDeleteManyArgs} args - Arguments to filter Negocios to delete.
     * @example
     * // Delete a few Negocios
     * const { count } = await prisma.negocio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NegocioDeleteManyArgs>(args?: SelectSubset<T, NegocioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Negocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Negocios
     * const negocio = await prisma.negocio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NegocioUpdateManyArgs>(args: SelectSubset<T, NegocioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Negocios and returns the data updated in the database.
     * @param {NegocioUpdateManyAndReturnArgs} args - Arguments to update many Negocios.
     * @example
     * // Update many Negocios
     * const negocio = await prisma.negocio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Negocios and only return the `id`
     * const negocioWithIdOnly = await prisma.negocio.updateManyAndReturn({
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
    updateManyAndReturn<T extends NegocioUpdateManyAndReturnArgs>(args: SelectSubset<T, NegocioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Negocio.
     * @param {NegocioUpsertArgs} args - Arguments to update or create a Negocio.
     * @example
     * // Update or create a Negocio
     * const negocio = await prisma.negocio.upsert({
     *   create: {
     *     // ... data to create a Negocio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Negocio we want to update
     *   }
     * })
     */
    upsert<T extends NegocioUpsertArgs>(args: SelectSubset<T, NegocioUpsertArgs<ExtArgs>>): Prisma__NegocioClient<$Result.GetResult<Prisma.$NegocioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Negocios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioCountArgs} args - Arguments to filter Negocios to count.
     * @example
     * // Count the number of Negocios
     * const count = await prisma.negocio.count({
     *   where: {
     *     // ... the filter for the Negocios we want to count
     *   }
     * })
    **/
    count<T extends NegocioCountArgs>(
      args?: Subset<T, NegocioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NegocioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Negocio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NegocioAggregateArgs>(args: Subset<T, NegocioAggregateArgs>): Prisma.PrismaPromise<GetNegocioAggregateType<T>>

    /**
     * Group by Negocio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NegocioGroupByArgs} args - Group by arguments.
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
      T extends NegocioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NegocioGroupByArgs['orderBy'] }
        : { orderBy?: NegocioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NegocioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNegocioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Negocio model
   */
  readonly fields: NegocioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Negocio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NegocioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends Negocio$formArgs<ExtArgs> = {}>(args?: Subset<T, Negocio$formArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    instancias<T extends Negocio$instanciasArgs<ExtArgs> = {}>(args?: Subset<T, Negocio$instanciasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fase<T extends FaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FaseDefaultArgs<ExtArgs>>): Prisma__FaseClient<$Result.GetResult<Prisma.$FasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pipeline<T extends PipelineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PipelineDefaultArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Negocio model
   */
  interface NegocioFieldRefs {
    readonly id: FieldRef<"Negocio", 'Int'>
    readonly telefone: FieldRef<"Negocio", 'String'>
    readonly dateCreate: FieldRef<"Negocio", 'DateTime'>
    readonly numeroCampanha: FieldRef<"Negocio", 'String'>
    readonly idFase: FieldRef<"Negocio", 'Int'>
    readonly idPipeline: FieldRef<"Negocio", 'Int'>
    readonly idUsuario: FieldRef<"Negocio", 'Int'>
    readonly nome: FieldRef<"Negocio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Negocio findUnique
   */
  export type NegocioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocio to fetch.
     */
    where: NegocioWhereUniqueInput
  }

  /**
   * Negocio findUniqueOrThrow
   */
  export type NegocioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocio to fetch.
     */
    where: NegocioWhereUniqueInput
  }

  /**
   * Negocio findFirst
   */
  export type NegocioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocio to fetch.
     */
    where?: NegocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negocios to fetch.
     */
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Negocios.
     */
    cursor?: NegocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Negocios.
     */
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Negocio findFirstOrThrow
   */
  export type NegocioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocio to fetch.
     */
    where?: NegocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negocios to fetch.
     */
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Negocios.
     */
    cursor?: NegocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negocios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Negocios.
     */
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Negocio findMany
   */
  export type NegocioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter, which Negocios to fetch.
     */
    where?: NegocioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Negocios to fetch.
     */
    orderBy?: NegocioOrderByWithRelationInput | NegocioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Negocios.
     */
    cursor?: NegocioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Negocios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Negocios.
     */
    skip?: number
    distinct?: NegocioScalarFieldEnum | NegocioScalarFieldEnum[]
  }

  /**
   * Negocio create
   */
  export type NegocioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * The data needed to create a Negocio.
     */
    data: XOR<NegocioCreateInput, NegocioUncheckedCreateInput>
  }

  /**
   * Negocio createMany
   */
  export type NegocioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Negocios.
     */
    data: NegocioCreateManyInput | NegocioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Negocio createManyAndReturn
   */
  export type NegocioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * The data used to create many Negocios.
     */
    data: NegocioCreateManyInput | NegocioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Negocio update
   */
  export type NegocioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * The data needed to update a Negocio.
     */
    data: XOR<NegocioUpdateInput, NegocioUncheckedUpdateInput>
    /**
     * Choose, which Negocio to update.
     */
    where: NegocioWhereUniqueInput
  }

  /**
   * Negocio updateMany
   */
  export type NegocioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Negocios.
     */
    data: XOR<NegocioUpdateManyMutationInput, NegocioUncheckedUpdateManyInput>
    /**
     * Filter which Negocios to update
     */
    where?: NegocioWhereInput
    /**
     * Limit how many Negocios to update.
     */
    limit?: number
  }

  /**
   * Negocio updateManyAndReturn
   */
  export type NegocioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * The data used to update Negocios.
     */
    data: XOR<NegocioUpdateManyMutationInput, NegocioUncheckedUpdateManyInput>
    /**
     * Filter which Negocios to update
     */
    where?: NegocioWhereInput
    /**
     * Limit how many Negocios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Negocio upsert
   */
  export type NegocioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * The filter to search for the Negocio to update in case it exists.
     */
    where: NegocioWhereUniqueInput
    /**
     * In case the Negocio found by the `where` argument doesn't exist, create a new Negocio with this data.
     */
    create: XOR<NegocioCreateInput, NegocioUncheckedCreateInput>
    /**
     * In case the Negocio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NegocioUpdateInput, NegocioUncheckedUpdateInput>
  }

  /**
   * Negocio delete
   */
  export type NegocioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
    /**
     * Filter which Negocio to delete.
     */
    where: NegocioWhereUniqueInput
  }

  /**
   * Negocio deleteMany
   */
  export type NegocioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Negocios to delete
     */
    where?: NegocioWhereInput
    /**
     * Limit how many Negocios to delete.
     */
    limit?: number
  }

  /**
   * Negocio.form
   */
  export type Negocio$formArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Form
     */
    omit?: FormOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    where?: FormWhereInput
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    cursor?: FormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Negocio.instancias
   */
  export type Negocio$instanciasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instancia
     */
    select?: InstanciaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instancia
     */
    omit?: InstanciaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstanciaInclude<ExtArgs> | null
    where?: InstanciaWhereInput
    orderBy?: InstanciaOrderByWithRelationInput | InstanciaOrderByWithRelationInput[]
    cursor?: InstanciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstanciaScalarFieldEnum | InstanciaScalarFieldEnum[]
  }

  /**
   * Negocio without action
   */
  export type NegocioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Negocio
     */
    select?: NegocioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Negocio
     */
    omit?: NegocioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NegocioInclude<ExtArgs> | null
  }


  /**
   * Model Mensagem
   */

  export type AggregateMensagem = {
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  export type MensagemAvgAggregateOutputType = {
    id: number | null
    idInstancia: number | null
  }

  export type MensagemSumAggregateOutputType = {
    id: number | null
    idInstancia: number | null
  }

  export type MensagemMinAggregateOutputType = {
    id: number | null
    mensagem: string | null
    base64: boolean | null
    caption: string | null
    timestamp: Date | null
    nome: string | null
    fromMe: boolean | null
    idInstancia: number | null
  }

  export type MensagemMaxAggregateOutputType = {
    id: number | null
    mensagem: string | null
    base64: boolean | null
    caption: string | null
    timestamp: Date | null
    nome: string | null
    fromMe: boolean | null
    idInstancia: number | null
  }

  export type MensagemCountAggregateOutputType = {
    id: number
    mensagem: number
    base64: number
    caption: number
    timestamp: number
    nome: number
    fromMe: number
    idInstancia: number
    _all: number
  }


  export type MensagemAvgAggregateInputType = {
    id?: true
    idInstancia?: true
  }

  export type MensagemSumAggregateInputType = {
    id?: true
    idInstancia?: true
  }

  export type MensagemMinAggregateInputType = {
    id?: true
    mensagem?: true
    base64?: true
    caption?: true
    timestamp?: true
    nome?: true
    fromMe?: true
    idInstancia?: true
  }

  export type MensagemMaxAggregateInputType = {
    id?: true
    mensagem?: true
    base64?: true
    caption?: true
    timestamp?: true
    nome?: true
    fromMe?: true
    idInstancia?: true
  }

  export type MensagemCountAggregateInputType = {
    id?: true
    mensagem?: true
    base64?: true
    caption?: true
    timestamp?: true
    nome?: true
    fromMe?: true
    idInstancia?: true
    _all?: true
  }

  export type MensagemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagem to aggregate.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mensagems
    **/
    _count?: true | MensagemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensagemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensagemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensagemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensagemMaxAggregateInputType
  }

  export type GetMensagemAggregateType<T extends MensagemAggregateArgs> = {
        [P in keyof T & keyof AggregateMensagem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensagem[P]>
      : GetScalarType<T[P], AggregateMensagem[P]>
  }




  export type MensagemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensagemWhereInput
    orderBy?: MensagemOrderByWithAggregationInput | MensagemOrderByWithAggregationInput[]
    by: MensagemScalarFieldEnum[] | MensagemScalarFieldEnum
    having?: MensagemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensagemCountAggregateInputType | true
    _avg?: MensagemAvgAggregateInputType
    _sum?: MensagemSumAggregateInputType
    _min?: MensagemMinAggregateInputType
    _max?: MensagemMaxAggregateInputType
  }

  export type MensagemGroupByOutputType = {
    id: number
    mensagem: string
    base64: boolean
    caption: string | null
    timestamp: Date
    nome: string
    fromMe: boolean
    idInstancia: number
    _count: MensagemCountAggregateOutputType | null
    _avg: MensagemAvgAggregateOutputType | null
    _sum: MensagemSumAggregateOutputType | null
    _min: MensagemMinAggregateOutputType | null
    _max: MensagemMaxAggregateOutputType | null
  }

  type GetMensagemGroupByPayload<T extends MensagemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensagemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensagemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensagemGroupByOutputType[P]>
            : GetScalarType<T[P], MensagemGroupByOutputType[P]>
        }
      >
    >


  export type MensagemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    base64?: boolean
    caption?: boolean
    timestamp?: boolean
    nome?: boolean
    fromMe?: boolean
    idInstancia?: boolean
    instancia?: boolean | InstanciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    base64?: boolean
    caption?: boolean
    timestamp?: boolean
    nome?: boolean
    fromMe?: boolean
    idInstancia?: boolean
    instancia?: boolean | InstanciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mensagem?: boolean
    base64?: boolean
    caption?: boolean
    timestamp?: boolean
    nome?: boolean
    fromMe?: boolean
    idInstancia?: boolean
    instancia?: boolean | InstanciaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mensagem"]>

  export type MensagemSelectScalar = {
    id?: boolean
    mensagem?: boolean
    base64?: boolean
    caption?: boolean
    timestamp?: boolean
    nome?: boolean
    fromMe?: boolean
    idInstancia?: boolean
  }

  export type MensagemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mensagem" | "base64" | "caption" | "timestamp" | "nome" | "fromMe" | "idInstancia", ExtArgs["result"]["mensagem"]>
  export type MensagemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instancia?: boolean | InstanciaDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instancia?: boolean | InstanciaDefaultArgs<ExtArgs>
  }
  export type MensagemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instancia?: boolean | InstanciaDefaultArgs<ExtArgs>
  }

  export type $MensagemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mensagem"
    objects: {
      instancia: Prisma.$InstanciaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mensagem: string
      base64: boolean
      caption: string | null
      timestamp: Date
      nome: string
      fromMe: boolean
      idInstancia: number
    }, ExtArgs["result"]["mensagem"]>
    composites: {}
  }

  type MensagemGetPayload<S extends boolean | null | undefined | MensagemDefaultArgs> = $Result.GetResult<Prisma.$MensagemPayload, S>

  type MensagemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MensagemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MensagemCountAggregateInputType | true
    }

  export interface MensagemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mensagem'], meta: { name: 'Mensagem' } }
    /**
     * Find zero or one Mensagem that matches the filter.
     * @param {MensagemFindUniqueArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensagemFindUniqueArgs>(args: SelectSubset<T, MensagemFindUniqueArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mensagem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MensagemFindUniqueOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensagemFindUniqueOrThrowArgs>(args: SelectSubset<T, MensagemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensagemFindFirstArgs>(args?: SelectSubset<T, MensagemFindFirstArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mensagem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindFirstOrThrowArgs} args - Arguments to find a Mensagem
     * @example
     * // Get one Mensagem
     * const mensagem = await prisma.mensagem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensagemFindFirstOrThrowArgs>(args?: SelectSubset<T, MensagemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Mensagems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mensagems
     * const mensagems = await prisma.mensagem.findMany()
     * 
     * // Get first 10 Mensagems
     * const mensagems = await prisma.mensagem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensagemFindManyArgs>(args?: SelectSubset<T, MensagemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mensagem.
     * @param {MensagemCreateArgs} args - Arguments to create a Mensagem.
     * @example
     * // Create one Mensagem
     * const Mensagem = await prisma.mensagem.create({
     *   data: {
     *     // ... data to create a Mensagem
     *   }
     * })
     * 
     */
    create<T extends MensagemCreateArgs>(args: SelectSubset<T, MensagemCreateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Mensagems.
     * @param {MensagemCreateManyArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensagemCreateManyArgs>(args?: SelectSubset<T, MensagemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Mensagems and returns the data saved in the database.
     * @param {MensagemCreateManyAndReturnArgs} args - Arguments to create many Mensagems.
     * @example
     * // Create many Mensagems
     * const mensagem = await prisma.mensagem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensagemCreateManyAndReturnArgs>(args?: SelectSubset<T, MensagemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mensagem.
     * @param {MensagemDeleteArgs} args - Arguments to delete one Mensagem.
     * @example
     * // Delete one Mensagem
     * const Mensagem = await prisma.mensagem.delete({
     *   where: {
     *     // ... filter to delete one Mensagem
     *   }
     * })
     * 
     */
    delete<T extends MensagemDeleteArgs>(args: SelectSubset<T, MensagemDeleteArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mensagem.
     * @param {MensagemUpdateArgs} args - Arguments to update one Mensagem.
     * @example
     * // Update one Mensagem
     * const mensagem = await prisma.mensagem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensagemUpdateArgs>(args: SelectSubset<T, MensagemUpdateArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Mensagems.
     * @param {MensagemDeleteManyArgs} args - Arguments to filter Mensagems to delete.
     * @example
     * // Delete a few Mensagems
     * const { count } = await prisma.mensagem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensagemDeleteManyArgs>(args?: SelectSubset<T, MensagemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensagemUpdateManyArgs>(args: SelectSubset<T, MensagemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mensagems and returns the data updated in the database.
     * @param {MensagemUpdateManyAndReturnArgs} args - Arguments to update many Mensagems.
     * @example
     * // Update many Mensagems
     * const mensagem = await prisma.mensagem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Mensagems and only return the `id`
     * const mensagemWithIdOnly = await prisma.mensagem.updateManyAndReturn({
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
    updateManyAndReturn<T extends MensagemUpdateManyAndReturnArgs>(args: SelectSubset<T, MensagemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mensagem.
     * @param {MensagemUpsertArgs} args - Arguments to update or create a Mensagem.
     * @example
     * // Update or create a Mensagem
     * const mensagem = await prisma.mensagem.upsert({
     *   create: {
     *     // ... data to create a Mensagem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mensagem we want to update
     *   }
     * })
     */
    upsert<T extends MensagemUpsertArgs>(args: SelectSubset<T, MensagemUpsertArgs<ExtArgs>>): Prisma__MensagemClient<$Result.GetResult<Prisma.$MensagemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Mensagems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemCountArgs} args - Arguments to filter Mensagems to count.
     * @example
     * // Count the number of Mensagems
     * const count = await prisma.mensagem.count({
     *   where: {
     *     // ... the filter for the Mensagems we want to count
     *   }
     * })
    **/
    count<T extends MensagemCountArgs>(
      args?: Subset<T, MensagemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensagemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MensagemAggregateArgs>(args: Subset<T, MensagemAggregateArgs>): Prisma.PrismaPromise<GetMensagemAggregateType<T>>

    /**
     * Group by Mensagem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensagemGroupByArgs} args - Group by arguments.
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
      T extends MensagemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensagemGroupByArgs['orderBy'] }
        : { orderBy?: MensagemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MensagemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensagemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mensagem model
   */
  readonly fields: MensagemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mensagem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensagemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instancia<T extends InstanciaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstanciaDefaultArgs<ExtArgs>>): Prisma__InstanciaClient<$Result.GetResult<Prisma.$InstanciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mensagem model
   */
  interface MensagemFieldRefs {
    readonly id: FieldRef<"Mensagem", 'Int'>
    readonly mensagem: FieldRef<"Mensagem", 'String'>
    readonly base64: FieldRef<"Mensagem", 'Boolean'>
    readonly caption: FieldRef<"Mensagem", 'String'>
    readonly timestamp: FieldRef<"Mensagem", 'DateTime'>
    readonly nome: FieldRef<"Mensagem", 'String'>
    readonly fromMe: FieldRef<"Mensagem", 'Boolean'>
    readonly idInstancia: FieldRef<"Mensagem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Mensagem findUnique
   */
  export type MensagemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findUniqueOrThrow
   */
  export type MensagemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem findFirst
   */
  export type MensagemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findFirstOrThrow
   */
  export type MensagemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagem to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mensagems.
     */
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem findMany
   */
  export type MensagemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter, which Mensagems to fetch.
     */
    where?: MensagemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mensagems to fetch.
     */
    orderBy?: MensagemOrderByWithRelationInput | MensagemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mensagems.
     */
    cursor?: MensagemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mensagems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mensagems.
     */
    skip?: number
    distinct?: MensagemScalarFieldEnum | MensagemScalarFieldEnum[]
  }

  /**
   * Mensagem create
   */
  export type MensagemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to create a Mensagem.
     */
    data: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
  }

  /**
   * Mensagem createMany
   */
  export type MensagemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mensagem createManyAndReturn
   */
  export type MensagemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to create many Mensagems.
     */
    data: MensagemCreateManyInput | MensagemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem update
   */
  export type MensagemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The data needed to update a Mensagem.
     */
    data: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
    /**
     * Choose, which Mensagem to update.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem updateMany
   */
  export type MensagemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
  }

  /**
   * Mensagem updateManyAndReturn
   */
  export type MensagemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * The data used to update Mensagems.
     */
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyInput>
    /**
     * Filter which Mensagems to update
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mensagem upsert
   */
  export type MensagemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * The filter to search for the Mensagem to update in case it exists.
     */
    where: MensagemWhereUniqueInput
    /**
     * In case the Mensagem found by the `where` argument doesn't exist, create a new Mensagem with this data.
     */
    create: XOR<MensagemCreateInput, MensagemUncheckedCreateInput>
    /**
     * In case the Mensagem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensagemUpdateInput, MensagemUncheckedUpdateInput>
  }

  /**
   * Mensagem delete
   */
  export type MensagemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
    /**
     * Filter which Mensagem to delete.
     */
    where: MensagemWhereUniqueInput
  }

  /**
   * Mensagem deleteMany
   */
  export type MensagemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mensagems to delete
     */
    where?: MensagemWhereInput
    /**
     * Limit how many Mensagems to delete.
     */
    limit?: number
  }

  /**
   * Mensagem without action
   */
  export type MensagemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mensagem
     */
    select?: MensagemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mensagem
     */
    omit?: MensagemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MensagemInclude<ExtArgs> | null
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


  export const PermissaoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type PermissaoScalarFieldEnum = (typeof PermissaoScalarFieldEnum)[keyof typeof PermissaoScalarFieldEnum]


  export const DepartamentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type DepartamentoScalarFieldEnum = (typeof DepartamentoScalarFieldEnum)[keyof typeof DepartamentoScalarFieldEnum]


  export const UsuarioConectadoScalarFieldEnum: {
    id: 'id',
    idUsuario: 'idUsuario',
    rankFila: 'rankFila'
  };

  export type UsuarioConectadoScalarFieldEnum = (typeof UsuarioConectadoScalarFieldEnum)[keyof typeof UsuarioConectadoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    idDepartamento: 'idDepartamento'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FilaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tempoFila: 'tempoFila',
    idDepartamento: 'idDepartamento'
  };

  export type FilaScalarFieldEnum = (typeof FilaScalarFieldEnum)[keyof typeof FilaScalarFieldEnum]


  export const InstanciaScalarFieldEnum: {
    id: 'id',
    conversaAceita: 'conversaAceita',
    conversaFechada: 'conversaFechada',
    chaveApi: 'chaveApi',
    idNegocio: 'idNegocio',
    nome: 'nome',
    idInstancia: 'idInstancia'
  };

  export type InstanciaScalarFieldEnum = (typeof InstanciaScalarFieldEnum)[keyof typeof InstanciaScalarFieldEnum]


  export const FaseScalarFieldEnum: {
    id: 'id',
    cor: 'cor',
    posicao: 'posicao',
    idPipeline: 'idPipeline',
    nome: 'nome',
    perdaOuGanho: 'perdaOuGanho',
    idFila: 'idFila'
  };

  export type FaseScalarFieldEnum = (typeof FaseScalarFieldEnum)[keyof typeof FaseScalarFieldEnum]


  export const PipelineScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type PipelineScalarFieldEnum = (typeof PipelineScalarFieldEnum)[keyof typeof PipelineScalarFieldEnum]


  export const CampoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo'
  };

  export type CampoScalarFieldEnum = (typeof CampoScalarFieldEnum)[keyof typeof CampoScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    valor: 'valor',
    idCampo: 'idCampo',
    idNegocio: 'idNegocio'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const NegocioScalarFieldEnum: {
    id: 'id',
    telefone: 'telefone',
    dateCreate: 'dateCreate',
    numeroCampanha: 'numeroCampanha',
    idFase: 'idFase',
    idPipeline: 'idPipeline',
    idUsuario: 'idUsuario',
    nome: 'nome'
  };

  export type NegocioScalarFieldEnum = (typeof NegocioScalarFieldEnum)[keyof typeof NegocioScalarFieldEnum]


  export const MensagemScalarFieldEnum: {
    id: 'id',
    mensagem: 'mensagem',
    base64: 'base64',
    caption: 'caption',
    timestamp: 'timestamp',
    nome: 'nome',
    fromMe: 'fromMe',
    idInstancia: 'idInstancia'
  };

  export type MensagemScalarFieldEnum = (typeof MensagemScalarFieldEnum)[keyof typeof MensagemScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type PermissaoWhereInput = {
    AND?: PermissaoWhereInput | PermissaoWhereInput[]
    OR?: PermissaoWhereInput[]
    NOT?: PermissaoWhereInput | PermissaoWhereInput[]
    id?: IntFilter<"Permissao"> | number
    nome?: StringFilter<"Permissao"> | string
    departamentos?: DepartamentoListRelationFilter
  }

  export type PermissaoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    departamentos?: DepartamentoOrderByRelationAggregateInput
  }

  export type PermissaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PermissaoWhereInput | PermissaoWhereInput[]
    OR?: PermissaoWhereInput[]
    NOT?: PermissaoWhereInput | PermissaoWhereInput[]
    nome?: StringFilter<"Permissao"> | string
    departamentos?: DepartamentoListRelationFilter
  }, "id">

  export type PermissaoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: PermissaoCountOrderByAggregateInput
    _avg?: PermissaoAvgOrderByAggregateInput
    _max?: PermissaoMaxOrderByAggregateInput
    _min?: PermissaoMinOrderByAggregateInput
    _sum?: PermissaoSumOrderByAggregateInput
  }

  export type PermissaoScalarWhereWithAggregatesInput = {
    AND?: PermissaoScalarWhereWithAggregatesInput | PermissaoScalarWhereWithAggregatesInput[]
    OR?: PermissaoScalarWhereWithAggregatesInput[]
    NOT?: PermissaoScalarWhereWithAggregatesInput | PermissaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permissao"> | number
    nome?: StringWithAggregatesFilter<"Permissao"> | string
  }

  export type DepartamentoWhereInput = {
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    id?: IntFilter<"Departamento"> | number
    nome?: StringFilter<"Departamento"> | string
    filas?: FilaListRelationFilter
    usuarios?: UsuarioListRelationFilter
    permissoes?: PermissaoListRelationFilter
  }

  export type DepartamentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    filas?: FilaOrderByRelationAggregateInput
    usuarios?: UsuarioOrderByRelationAggregateInput
    permissoes?: PermissaoOrderByRelationAggregateInput
  }

  export type DepartamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DepartamentoWhereInput | DepartamentoWhereInput[]
    OR?: DepartamentoWhereInput[]
    NOT?: DepartamentoWhereInput | DepartamentoWhereInput[]
    nome?: StringFilter<"Departamento"> | string
    filas?: FilaListRelationFilter
    usuarios?: UsuarioListRelationFilter
    permissoes?: PermissaoListRelationFilter
  }, "id">

  export type DepartamentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: DepartamentoCountOrderByAggregateInput
    _avg?: DepartamentoAvgOrderByAggregateInput
    _max?: DepartamentoMaxOrderByAggregateInput
    _min?: DepartamentoMinOrderByAggregateInput
    _sum?: DepartamentoSumOrderByAggregateInput
  }

  export type DepartamentoScalarWhereWithAggregatesInput = {
    AND?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    OR?: DepartamentoScalarWhereWithAggregatesInput[]
    NOT?: DepartamentoScalarWhereWithAggregatesInput | DepartamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Departamento"> | number
    nome?: StringWithAggregatesFilter<"Departamento"> | string
  }

  export type UsuarioConectadoWhereInput = {
    AND?: UsuarioConectadoWhereInput | UsuarioConectadoWhereInput[]
    OR?: UsuarioConectadoWhereInput[]
    NOT?: UsuarioConectadoWhereInput | UsuarioConectadoWhereInput[]
    id?: IntFilter<"UsuarioConectado"> | number
    idUsuario?: IntFilter<"UsuarioConectado"> | number
    rankFila?: IntFilter<"UsuarioConectado"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type UsuarioConectadoOrderByWithRelationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    rankFila?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type UsuarioConectadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsuarioConectadoWhereInput | UsuarioConectadoWhereInput[]
    OR?: UsuarioConectadoWhereInput[]
    NOT?: UsuarioConectadoWhereInput | UsuarioConectadoWhereInput[]
    idUsuario?: IntFilter<"UsuarioConectado"> | number
    rankFila?: IntFilter<"UsuarioConectado"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type UsuarioConectadoOrderByWithAggregationInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    rankFila?: SortOrder
    _count?: UsuarioConectadoCountOrderByAggregateInput
    _avg?: UsuarioConectadoAvgOrderByAggregateInput
    _max?: UsuarioConectadoMaxOrderByAggregateInput
    _min?: UsuarioConectadoMinOrderByAggregateInput
    _sum?: UsuarioConectadoSumOrderByAggregateInput
  }

  export type UsuarioConectadoScalarWhereWithAggregatesInput = {
    AND?: UsuarioConectadoScalarWhereWithAggregatesInput | UsuarioConectadoScalarWhereWithAggregatesInput[]
    OR?: UsuarioConectadoScalarWhereWithAggregatesInput[]
    NOT?: UsuarioConectadoScalarWhereWithAggregatesInput | UsuarioConectadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UsuarioConectado"> | number
    idUsuario?: IntWithAggregatesFilter<"UsuarioConectado"> | number
    rankFila?: IntWithAggregatesFilter<"UsuarioConectado"> | number
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    idDepartamento?: IntFilter<"Usuario"> | number
    negocios?: NegocioListRelationFilter
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
    u_?: UsuarioConectadoListRelationFilter
    filas?: FilaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    idDepartamento?: SortOrder
    negocios?: NegocioOrderByRelationAggregateInput
    departamento?: DepartamentoOrderByWithRelationInput
    u_?: UsuarioConectadoOrderByRelationAggregateInput
    filas?: FilaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    idDepartamento?: IntFilter<"Usuario"> | number
    negocios?: NegocioListRelationFilter
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
    u_?: UsuarioConectadoListRelationFilter
    filas?: FilaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    idDepartamento?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    idDepartamento?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type FilaWhereInput = {
    AND?: FilaWhereInput | FilaWhereInput[]
    OR?: FilaWhereInput[]
    NOT?: FilaWhereInput | FilaWhereInput[]
    id?: IntFilter<"Fila"> | number
    nome?: StringFilter<"Fila"> | string
    tempoFila?: IntFilter<"Fila"> | number
    idDepartamento?: IntFilter<"Fila"> | number
    fases?: FaseListRelationFilter
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
    usuarios?: UsuarioListRelationFilter
  }

  export type FilaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tempoFila?: SortOrder
    idDepartamento?: SortOrder
    fases?: FaseOrderByRelationAggregateInput
    departamento?: DepartamentoOrderByWithRelationInput
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type FilaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: FilaWhereInput | FilaWhereInput[]
    OR?: FilaWhereInput[]
    NOT?: FilaWhereInput | FilaWhereInput[]
    tempoFila?: IntFilter<"Fila"> | number
    idDepartamento?: IntFilter<"Fila"> | number
    fases?: FaseListRelationFilter
    departamento?: XOR<DepartamentoScalarRelationFilter, DepartamentoWhereInput>
    usuarios?: UsuarioListRelationFilter
  }, "id" | "nome">

  export type FilaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tempoFila?: SortOrder
    idDepartamento?: SortOrder
    _count?: FilaCountOrderByAggregateInput
    _avg?: FilaAvgOrderByAggregateInput
    _max?: FilaMaxOrderByAggregateInput
    _min?: FilaMinOrderByAggregateInput
    _sum?: FilaSumOrderByAggregateInput
  }

  export type FilaScalarWhereWithAggregatesInput = {
    AND?: FilaScalarWhereWithAggregatesInput | FilaScalarWhereWithAggregatesInput[]
    OR?: FilaScalarWhereWithAggregatesInput[]
    NOT?: FilaScalarWhereWithAggregatesInput | FilaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fila"> | number
    nome?: StringWithAggregatesFilter<"Fila"> | string
    tempoFila?: IntWithAggregatesFilter<"Fila"> | number
    idDepartamento?: IntWithAggregatesFilter<"Fila"> | number
  }

  export type InstanciaWhereInput = {
    AND?: InstanciaWhereInput | InstanciaWhereInput[]
    OR?: InstanciaWhereInput[]
    NOT?: InstanciaWhereInput | InstanciaWhereInput[]
    id?: IntFilter<"Instancia"> | number
    conversaAceita?: BoolFilter<"Instancia"> | boolean
    conversaFechada?: BoolFilter<"Instancia"> | boolean
    chaveApi?: StringFilter<"Instancia"> | string
    idNegocio?: IntFilter<"Instancia"> | number
    nome?: StringFilter<"Instancia"> | string
    idInstancia?: StringFilter<"Instancia"> | string
    negocio?: XOR<NegocioScalarRelationFilter, NegocioWhereInput>
    mensagens?: MensagemListRelationFilter
  }

  export type InstanciaOrderByWithRelationInput = {
    id?: SortOrder
    conversaAceita?: SortOrder
    conversaFechada?: SortOrder
    chaveApi?: SortOrder
    idNegocio?: SortOrder
    nome?: SortOrder
    idInstancia?: SortOrder
    negocio?: NegocioOrderByWithRelationInput
    mensagens?: MensagemOrderByRelationAggregateInput
  }

  export type InstanciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InstanciaWhereInput | InstanciaWhereInput[]
    OR?: InstanciaWhereInput[]
    NOT?: InstanciaWhereInput | InstanciaWhereInput[]
    conversaAceita?: BoolFilter<"Instancia"> | boolean
    conversaFechada?: BoolFilter<"Instancia"> | boolean
    chaveApi?: StringFilter<"Instancia"> | string
    idNegocio?: IntFilter<"Instancia"> | number
    nome?: StringFilter<"Instancia"> | string
    idInstancia?: StringFilter<"Instancia"> | string
    negocio?: XOR<NegocioScalarRelationFilter, NegocioWhereInput>
    mensagens?: MensagemListRelationFilter
  }, "id">

  export type InstanciaOrderByWithAggregationInput = {
    id?: SortOrder
    conversaAceita?: SortOrder
    conversaFechada?: SortOrder
    chaveApi?: SortOrder
    idNegocio?: SortOrder
    nome?: SortOrder
    idInstancia?: SortOrder
    _count?: InstanciaCountOrderByAggregateInput
    _avg?: InstanciaAvgOrderByAggregateInput
    _max?: InstanciaMaxOrderByAggregateInput
    _min?: InstanciaMinOrderByAggregateInput
    _sum?: InstanciaSumOrderByAggregateInput
  }

  export type InstanciaScalarWhereWithAggregatesInput = {
    AND?: InstanciaScalarWhereWithAggregatesInput | InstanciaScalarWhereWithAggregatesInput[]
    OR?: InstanciaScalarWhereWithAggregatesInput[]
    NOT?: InstanciaScalarWhereWithAggregatesInput | InstanciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Instancia"> | number
    conversaAceita?: BoolWithAggregatesFilter<"Instancia"> | boolean
    conversaFechada?: BoolWithAggregatesFilter<"Instancia"> | boolean
    chaveApi?: StringWithAggregatesFilter<"Instancia"> | string
    idNegocio?: IntWithAggregatesFilter<"Instancia"> | number
    nome?: StringWithAggregatesFilter<"Instancia"> | string
    idInstancia?: StringWithAggregatesFilter<"Instancia"> | string
  }

  export type FaseWhereInput = {
    AND?: FaseWhereInput | FaseWhereInput[]
    OR?: FaseWhereInput[]
    NOT?: FaseWhereInput | FaseWhereInput[]
    id?: IntFilter<"Fase"> | number
    cor?: StringFilter<"Fase"> | string
    posicao?: StringFilter<"Fase"> | string
    idPipeline?: IntFilter<"Fase"> | number
    nome?: StringFilter<"Fase"> | string
    perdaOuGanho?: BoolFilter<"Fase"> | boolean
    idFila?: IntNullableFilter<"Fase"> | number | null
    fila?: XOR<FilaNullableScalarRelationFilter, FilaWhereInput> | null
    pipeline?: XOR<PipelineScalarRelationFilter, PipelineWhereInput>
    negocios?: NegocioListRelationFilter
    camposObrigatorios?: CampoListRelationFilter
  }

  export type FaseOrderByWithRelationInput = {
    id?: SortOrder
    cor?: SortOrder
    posicao?: SortOrder
    idPipeline?: SortOrder
    nome?: SortOrder
    perdaOuGanho?: SortOrder
    idFila?: SortOrderInput | SortOrder
    fila?: FilaOrderByWithRelationInput
    pipeline?: PipelineOrderByWithRelationInput
    negocios?: NegocioOrderByRelationAggregateInput
    camposObrigatorios?: CampoOrderByRelationAggregateInput
  }

  export type FaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: FaseWhereInput | FaseWhereInput[]
    OR?: FaseWhereInput[]
    NOT?: FaseWhereInput | FaseWhereInput[]
    cor?: StringFilter<"Fase"> | string
    posicao?: StringFilter<"Fase"> | string
    idPipeline?: IntFilter<"Fase"> | number
    perdaOuGanho?: BoolFilter<"Fase"> | boolean
    idFila?: IntNullableFilter<"Fase"> | number | null
    fila?: XOR<FilaNullableScalarRelationFilter, FilaWhereInput> | null
    pipeline?: XOR<PipelineScalarRelationFilter, PipelineWhereInput>
    negocios?: NegocioListRelationFilter
    camposObrigatorios?: CampoListRelationFilter
  }, "id" | "nome">

  export type FaseOrderByWithAggregationInput = {
    id?: SortOrder
    cor?: SortOrder
    posicao?: SortOrder
    idPipeline?: SortOrder
    nome?: SortOrder
    perdaOuGanho?: SortOrder
    idFila?: SortOrderInput | SortOrder
    _count?: FaseCountOrderByAggregateInput
    _avg?: FaseAvgOrderByAggregateInput
    _max?: FaseMaxOrderByAggregateInput
    _min?: FaseMinOrderByAggregateInput
    _sum?: FaseSumOrderByAggregateInput
  }

  export type FaseScalarWhereWithAggregatesInput = {
    AND?: FaseScalarWhereWithAggregatesInput | FaseScalarWhereWithAggregatesInput[]
    OR?: FaseScalarWhereWithAggregatesInput[]
    NOT?: FaseScalarWhereWithAggregatesInput | FaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fase"> | number
    cor?: StringWithAggregatesFilter<"Fase"> | string
    posicao?: StringWithAggregatesFilter<"Fase"> | string
    idPipeline?: IntWithAggregatesFilter<"Fase"> | number
    nome?: StringWithAggregatesFilter<"Fase"> | string
    perdaOuGanho?: BoolWithAggregatesFilter<"Fase"> | boolean
    idFila?: IntNullableWithAggregatesFilter<"Fase"> | number | null
  }

  export type PipelineWhereInput = {
    AND?: PipelineWhereInput | PipelineWhereInput[]
    OR?: PipelineWhereInput[]
    NOT?: PipelineWhereInput | PipelineWhereInput[]
    id?: IntFilter<"Pipeline"> | number
    nome?: StringFilter<"Pipeline"> | string
    fases?: FaseListRelationFilter
    negocios?: NegocioListRelationFilter
  }

  export type PipelineOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    fases?: FaseOrderByRelationAggregateInput
    negocios?: NegocioOrderByRelationAggregateInput
  }

  export type PipelineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: PipelineWhereInput | PipelineWhereInput[]
    OR?: PipelineWhereInput[]
    NOT?: PipelineWhereInput | PipelineWhereInput[]
    fases?: FaseListRelationFilter
    negocios?: NegocioListRelationFilter
  }, "id" | "nome">

  export type PipelineOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: PipelineCountOrderByAggregateInput
    _avg?: PipelineAvgOrderByAggregateInput
    _max?: PipelineMaxOrderByAggregateInput
    _min?: PipelineMinOrderByAggregateInput
    _sum?: PipelineSumOrderByAggregateInput
  }

  export type PipelineScalarWhereWithAggregatesInput = {
    AND?: PipelineScalarWhereWithAggregatesInput | PipelineScalarWhereWithAggregatesInput[]
    OR?: PipelineScalarWhereWithAggregatesInput[]
    NOT?: PipelineScalarWhereWithAggregatesInput | PipelineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pipeline"> | number
    nome?: StringWithAggregatesFilter<"Pipeline"> | string
  }

  export type CampoWhereInput = {
    AND?: CampoWhereInput | CampoWhereInput[]
    OR?: CampoWhereInput[]
    NOT?: CampoWhereInput | CampoWhereInput[]
    id?: IntFilter<"Campo"> | number
    nome?: StringFilter<"Campo"> | string
    tipo?: StringFilter<"Campo"> | string
    form?: FormListRelationFilter
    fasesObrigatorias?: FaseListRelationFilter
  }

  export type CampoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    form?: FormOrderByRelationAggregateInput
    fasesObrigatorias?: FaseOrderByRelationAggregateInput
  }

  export type CampoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: CampoWhereInput | CampoWhereInput[]
    OR?: CampoWhereInput[]
    NOT?: CampoWhereInput | CampoWhereInput[]
    tipo?: StringFilter<"Campo"> | string
    form?: FormListRelationFilter
    fasesObrigatorias?: FaseListRelationFilter
  }, "id" | "nome">

  export type CampoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    _count?: CampoCountOrderByAggregateInput
    _avg?: CampoAvgOrderByAggregateInput
    _max?: CampoMaxOrderByAggregateInput
    _min?: CampoMinOrderByAggregateInput
    _sum?: CampoSumOrderByAggregateInput
  }

  export type CampoScalarWhereWithAggregatesInput = {
    AND?: CampoScalarWhereWithAggregatesInput | CampoScalarWhereWithAggregatesInput[]
    OR?: CampoScalarWhereWithAggregatesInput[]
    NOT?: CampoScalarWhereWithAggregatesInput | CampoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Campo"> | number
    nome?: StringWithAggregatesFilter<"Campo"> | string
    tipo?: StringWithAggregatesFilter<"Campo"> | string
  }

  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: IntFilter<"Form"> | number
    valor?: StringFilter<"Form"> | string
    idCampo?: IntFilter<"Form"> | number
    idNegocio?: IntFilter<"Form"> | number
    campo?: XOR<CampoScalarRelationFilter, CampoWhereInput>
    negocio?: XOR<NegocioScalarRelationFilter, NegocioWhereInput>
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    valor?: SortOrder
    idCampo?: SortOrder
    idNegocio?: SortOrder
    campo?: CampoOrderByWithRelationInput
    negocio?: NegocioOrderByWithRelationInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    valor?: StringFilter<"Form"> | string
    idCampo?: IntFilter<"Form"> | number
    idNegocio?: IntFilter<"Form"> | number
    campo?: XOR<CampoScalarRelationFilter, CampoWhereInput>
    negocio?: XOR<NegocioScalarRelationFilter, NegocioWhereInput>
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    valor?: SortOrder
    idCampo?: SortOrder
    idNegocio?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _avg?: FormAvgOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
    _sum?: FormSumOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Form"> | number
    valor?: StringWithAggregatesFilter<"Form"> | string
    idCampo?: IntWithAggregatesFilter<"Form"> | number
    idNegocio?: IntWithAggregatesFilter<"Form"> | number
  }

  export type NegocioWhereInput = {
    AND?: NegocioWhereInput | NegocioWhereInput[]
    OR?: NegocioWhereInput[]
    NOT?: NegocioWhereInput | NegocioWhereInput[]
    id?: IntFilter<"Negocio"> | number
    telefone?: StringFilter<"Negocio"> | string
    dateCreate?: DateTimeFilter<"Negocio"> | Date | string
    numeroCampanha?: StringFilter<"Negocio"> | string
    idFase?: IntFilter<"Negocio"> | number
    idPipeline?: IntFilter<"Negocio"> | number
    idUsuario?: IntFilter<"Negocio"> | number
    nome?: StringNullableFilter<"Negocio"> | string | null
    form?: FormListRelationFilter
    instancias?: InstanciaListRelationFilter
    fase?: XOR<FaseScalarRelationFilter, FaseWhereInput>
    pipeline?: XOR<PipelineScalarRelationFilter, PipelineWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type NegocioOrderByWithRelationInput = {
    id?: SortOrder
    telefone?: SortOrder
    dateCreate?: SortOrder
    numeroCampanha?: SortOrder
    idFase?: SortOrder
    idPipeline?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrderInput | SortOrder
    form?: FormOrderByRelationAggregateInput
    instancias?: InstanciaOrderByRelationAggregateInput
    fase?: FaseOrderByWithRelationInput
    pipeline?: PipelineOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type NegocioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    telefone?: string
    nome?: string
    AND?: NegocioWhereInput | NegocioWhereInput[]
    OR?: NegocioWhereInput[]
    NOT?: NegocioWhereInput | NegocioWhereInput[]
    dateCreate?: DateTimeFilter<"Negocio"> | Date | string
    numeroCampanha?: StringFilter<"Negocio"> | string
    idFase?: IntFilter<"Negocio"> | number
    idPipeline?: IntFilter<"Negocio"> | number
    idUsuario?: IntFilter<"Negocio"> | number
    form?: FormListRelationFilter
    instancias?: InstanciaListRelationFilter
    fase?: XOR<FaseScalarRelationFilter, FaseWhereInput>
    pipeline?: XOR<PipelineScalarRelationFilter, PipelineWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "telefone" | "nome">

  export type NegocioOrderByWithAggregationInput = {
    id?: SortOrder
    telefone?: SortOrder
    dateCreate?: SortOrder
    numeroCampanha?: SortOrder
    idFase?: SortOrder
    idPipeline?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: NegocioCountOrderByAggregateInput
    _avg?: NegocioAvgOrderByAggregateInput
    _max?: NegocioMaxOrderByAggregateInput
    _min?: NegocioMinOrderByAggregateInput
    _sum?: NegocioSumOrderByAggregateInput
  }

  export type NegocioScalarWhereWithAggregatesInput = {
    AND?: NegocioScalarWhereWithAggregatesInput | NegocioScalarWhereWithAggregatesInput[]
    OR?: NegocioScalarWhereWithAggregatesInput[]
    NOT?: NegocioScalarWhereWithAggregatesInput | NegocioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Negocio"> | number
    telefone?: StringWithAggregatesFilter<"Negocio"> | string
    dateCreate?: DateTimeWithAggregatesFilter<"Negocio"> | Date | string
    numeroCampanha?: StringWithAggregatesFilter<"Negocio"> | string
    idFase?: IntWithAggregatesFilter<"Negocio"> | number
    idPipeline?: IntWithAggregatesFilter<"Negocio"> | number
    idUsuario?: IntWithAggregatesFilter<"Negocio"> | number
    nome?: StringNullableWithAggregatesFilter<"Negocio"> | string | null
  }

  export type MensagemWhereInput = {
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    id?: IntFilter<"Mensagem"> | number
    mensagem?: StringFilter<"Mensagem"> | string
    base64?: BoolFilter<"Mensagem"> | boolean
    caption?: StringNullableFilter<"Mensagem"> | string | null
    timestamp?: DateTimeFilter<"Mensagem"> | Date | string
    nome?: StringFilter<"Mensagem"> | string
    fromMe?: BoolFilter<"Mensagem"> | boolean
    idInstancia?: IntFilter<"Mensagem"> | number
    instancia?: XOR<InstanciaScalarRelationFilter, InstanciaWhereInput>
  }

  export type MensagemOrderByWithRelationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    base64?: SortOrder
    caption?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    nome?: SortOrder
    fromMe?: SortOrder
    idInstancia?: SortOrder
    instancia?: InstanciaOrderByWithRelationInput
  }

  export type MensagemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MensagemWhereInput | MensagemWhereInput[]
    OR?: MensagemWhereInput[]
    NOT?: MensagemWhereInput | MensagemWhereInput[]
    mensagem?: StringFilter<"Mensagem"> | string
    base64?: BoolFilter<"Mensagem"> | boolean
    caption?: StringNullableFilter<"Mensagem"> | string | null
    timestamp?: DateTimeFilter<"Mensagem"> | Date | string
    nome?: StringFilter<"Mensagem"> | string
    fromMe?: BoolFilter<"Mensagem"> | boolean
    idInstancia?: IntFilter<"Mensagem"> | number
    instancia?: XOR<InstanciaScalarRelationFilter, InstanciaWhereInput>
  }, "id">

  export type MensagemOrderByWithAggregationInput = {
    id?: SortOrder
    mensagem?: SortOrder
    base64?: SortOrder
    caption?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    nome?: SortOrder
    fromMe?: SortOrder
    idInstancia?: SortOrder
    _count?: MensagemCountOrderByAggregateInput
    _avg?: MensagemAvgOrderByAggregateInput
    _max?: MensagemMaxOrderByAggregateInput
    _min?: MensagemMinOrderByAggregateInput
    _sum?: MensagemSumOrderByAggregateInput
  }

  export type MensagemScalarWhereWithAggregatesInput = {
    AND?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    OR?: MensagemScalarWhereWithAggregatesInput[]
    NOT?: MensagemScalarWhereWithAggregatesInput | MensagemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mensagem"> | number
    mensagem?: StringWithAggregatesFilter<"Mensagem"> | string
    base64?: BoolWithAggregatesFilter<"Mensagem"> | boolean
    caption?: StringNullableWithAggregatesFilter<"Mensagem"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"Mensagem"> | Date | string
    nome?: StringWithAggregatesFilter<"Mensagem"> | string
    fromMe?: BoolWithAggregatesFilter<"Mensagem"> | boolean
    idInstancia?: IntWithAggregatesFilter<"Mensagem"> | number
  }

  export type PermissaoCreateInput = {
    nome: string
    departamentos?: DepartamentoCreateNestedManyWithoutPermissoesInput
  }

  export type PermissaoUncheckedCreateInput = {
    id?: number
    nome: string
    departamentos?: DepartamentoUncheckedCreateNestedManyWithoutPermissoesInput
  }

  export type PermissaoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    departamentos?: DepartamentoUpdateManyWithoutPermissoesNestedInput
  }

  export type PermissaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    departamentos?: DepartamentoUncheckedUpdateManyWithoutPermissoesNestedInput
  }

  export type PermissaoCreateManyInput = {
    id?: number
    nome: string
  }

  export type PermissaoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PermissaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DepartamentoCreateInput = {
    nome: string
    filas?: FilaCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioCreateNestedManyWithoutDepartamentoInput
    permissoes?: PermissaoCreateNestedManyWithoutDepartamentosInput
  }

  export type DepartamentoUncheckedCreateInput = {
    id?: number
    nome: string
    filas?: FilaUncheckedCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutDepartamentoInput
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutDepartamentosInput
  }

  export type DepartamentoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    filas?: FilaUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioUpdateManyWithoutDepartamentoNestedInput
    permissoes?: PermissaoUpdateManyWithoutDepartamentosNestedInput
  }

  export type DepartamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    filas?: FilaUncheckedUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutDepartamentoNestedInput
    permissoes?: PermissaoUncheckedUpdateManyWithoutDepartamentosNestedInput
  }

  export type DepartamentoCreateManyInput = {
    id?: number
    nome: string
  }

  export type DepartamentoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type DepartamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioConectadoCreateInput = {
    rankFila: number
    usuario: UsuarioCreateNestedOneWithoutU_Input
  }

  export type UsuarioConectadoUncheckedCreateInput = {
    id?: number
    idUsuario: number
    rankFila: number
  }

  export type UsuarioConectadoUpdateInput = {
    rankFila?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutU_NestedInput
  }

  export type UsuarioConectadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    rankFila?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioConectadoCreateManyInput = {
    id?: number
    idUsuario: number
    rankFila: number
  }

  export type UsuarioConectadoUpdateManyMutationInput = {
    rankFila?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioConectadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    rankFila?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    negocios?: NegocioCreateNestedManyWithoutUsuarioInput
    departamento: DepartamentoCreateNestedOneWithoutUsuariosInput
    u_?: UsuarioConectadoCreateNestedManyWithoutUsuarioInput
    filas?: FilaCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    idDepartamento: number
    negocios?: NegocioUncheckedCreateNestedManyWithoutUsuarioInput
    u_?: UsuarioConectadoUncheckedCreateNestedManyWithoutUsuarioInput
    filas?: FilaUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    negocios?: NegocioUpdateManyWithoutUsuarioNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutUsuariosNestedInput
    u_?: UsuarioConectadoUpdateManyWithoutUsuarioNestedInput
    filas?: FilaUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idDepartamento?: IntFieldUpdateOperationsInput | number
    negocios?: NegocioUncheckedUpdateManyWithoutUsuarioNestedInput
    u_?: UsuarioConectadoUncheckedUpdateManyWithoutUsuarioNestedInput
    filas?: FilaUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    idDepartamento: number
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idDepartamento?: IntFieldUpdateOperationsInput | number
  }

  export type FilaCreateInput = {
    nome: string
    tempoFila?: number
    fases?: FaseCreateNestedManyWithoutFilaInput
    departamento: DepartamentoCreateNestedOneWithoutFilasInput
    usuarios?: UsuarioCreateNestedManyWithoutFilasInput
  }

  export type FilaUncheckedCreateInput = {
    id?: number
    nome: string
    tempoFila?: number
    idDepartamento: number
    fases?: FaseUncheckedCreateNestedManyWithoutFilaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutFilasInput
  }

  export type FilaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    fases?: FaseUpdateManyWithoutFilaNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutFilasNestedInput
    usuarios?: UsuarioUpdateManyWithoutFilasNestedInput
  }

  export type FilaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    fases?: FaseUncheckedUpdateManyWithoutFilaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutFilasNestedInput
  }

  export type FilaCreateManyInput = {
    id?: number
    nome: string
    tempoFila?: number
    idDepartamento: number
  }

  export type FilaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
  }

  export type FilaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
  }

  export type InstanciaCreateInput = {
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi: string
    nome: string
    idInstancia: string
    negocio: NegocioCreateNestedOneWithoutInstanciasInput
    mensagens?: MensagemCreateNestedManyWithoutInstanciaInput
  }

  export type InstanciaUncheckedCreateInput = {
    id?: number
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi: string
    idNegocio: number
    nome: string
    idInstancia: string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutInstanciaInput
  }

  export type InstanciaUpdateInput = {
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
    negocio?: NegocioUpdateOneRequiredWithoutInstanciasNestedInput
    mensagens?: MensagemUpdateManyWithoutInstanciaNestedInput
  }

  export type InstanciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    idNegocio?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
    mensagens?: MensagemUncheckedUpdateManyWithoutInstanciaNestedInput
  }

  export type InstanciaCreateManyInput = {
    id?: number
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi: string
    idNegocio: number
    nome: string
    idInstancia: string
  }

  export type InstanciaUpdateManyMutationInput = {
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
  }

  export type InstanciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    idNegocio?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
  }

  export type FaseCreateInput = {
    cor: string
    posicao: string
    nome: string
    perdaOuGanho: boolean
    fila?: FilaCreateNestedOneWithoutFasesInput
    pipeline: PipelineCreateNestedOneWithoutFasesInput
    negocios?: NegocioCreateNestedManyWithoutFaseInput
    camposObrigatorios?: CampoCreateNestedManyWithoutFasesObrigatoriasInput
  }

  export type FaseUncheckedCreateInput = {
    id?: number
    cor: string
    posicao: string
    idPipeline: number
    nome: string
    perdaOuGanho: boolean
    idFila?: number | null
    negocios?: NegocioUncheckedCreateNestedManyWithoutFaseInput
    camposObrigatorios?: CampoUncheckedCreateNestedManyWithoutFasesObrigatoriasInput
  }

  export type FaseUpdateInput = {
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    fila?: FilaUpdateOneWithoutFasesNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutFasesNestedInput
    negocios?: NegocioUpdateManyWithoutFaseNestedInput
    camposObrigatorios?: CampoUpdateManyWithoutFasesObrigatoriasNestedInput
  }

  export type FaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    idFila?: NullableIntFieldUpdateOperationsInput | number | null
    negocios?: NegocioUncheckedUpdateManyWithoutFaseNestedInput
    camposObrigatorios?: CampoUncheckedUpdateManyWithoutFasesObrigatoriasNestedInput
  }

  export type FaseCreateManyInput = {
    id?: number
    cor: string
    posicao: string
    idPipeline: number
    nome: string
    perdaOuGanho: boolean
    idFila?: number | null
  }

  export type FaseUpdateManyMutationInput = {
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    idFila?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PipelineCreateInput = {
    nome: string
    fases?: FaseCreateNestedManyWithoutPipelineInput
    negocios?: NegocioCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateInput = {
    id?: number
    nome: string
    fases?: FaseUncheckedCreateNestedManyWithoutPipelineInput
    negocios?: NegocioUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fases?: FaseUpdateManyWithoutPipelineNestedInput
    negocios?: NegocioUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fases?: FaseUncheckedUpdateManyWithoutPipelineNestedInput
    negocios?: NegocioUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineCreateManyInput = {
    id?: number
    nome: string
  }

  export type PipelineUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PipelineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type CampoCreateInput = {
    nome: string
    tipo: string
    form?: FormCreateNestedManyWithoutCampoInput
    fasesObrigatorias?: FaseCreateNestedManyWithoutCamposObrigatoriosInput
  }

  export type CampoUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: string
    form?: FormUncheckedCreateNestedManyWithoutCampoInput
    fasesObrigatorias?: FaseUncheckedCreateNestedManyWithoutCamposObrigatoriosInput
  }

  export type CampoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    form?: FormUpdateManyWithoutCampoNestedInput
    fasesObrigatorias?: FaseUpdateManyWithoutCamposObrigatoriosNestedInput
  }

  export type CampoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    form?: FormUncheckedUpdateManyWithoutCampoNestedInput
    fasesObrigatorias?: FaseUncheckedUpdateManyWithoutCamposObrigatoriosNestedInput
  }

  export type CampoCreateManyInput = {
    id?: number
    nome: string
    tipo: string
  }

  export type CampoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type CampoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FormCreateInput = {
    valor: string
    campo: CampoCreateNestedOneWithoutFormInput
    negocio: NegocioCreateNestedOneWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: number
    valor: string
    idCampo: number
    idNegocio: number
  }

  export type FormUpdateInput = {
    valor?: StringFieldUpdateOperationsInput | string
    campo?: CampoUpdateOneRequiredWithoutFormNestedInput
    negocio?: NegocioUpdateOneRequiredWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    idCampo?: IntFieldUpdateOperationsInput | number
    idNegocio?: IntFieldUpdateOperationsInput | number
  }

  export type FormCreateManyInput = {
    id?: number
    valor: string
    idCampo: number
    idNegocio: number
  }

  export type FormUpdateManyMutationInput = {
    valor?: StringFieldUpdateOperationsInput | string
  }

  export type FormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    idCampo?: IntFieldUpdateOperationsInput | number
    idNegocio?: IntFieldUpdateOperationsInput | number
  }

  export type NegocioCreateInput = {
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    nome?: string | null
    form?: FormCreateNestedManyWithoutNegocioInput
    instancias?: InstanciaCreateNestedManyWithoutNegocioInput
    fase?: FaseCreateNestedOneWithoutNegociosInput
    pipeline?: PipelineCreateNestedOneWithoutNegociosInput
    usuario: UsuarioCreateNestedOneWithoutNegociosInput
  }

  export type NegocioUncheckedCreateInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idFase?: number
    idPipeline?: number
    idUsuario: number
    nome?: string | null
    form?: FormUncheckedCreateNestedManyWithoutNegocioInput
    instancias?: InstanciaUncheckedCreateNestedManyWithoutNegocioInput
  }

  export type NegocioUpdateInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUpdateManyWithoutNegocioNestedInput
    instancias?: InstanciaUpdateManyWithoutNegocioNestedInput
    fase?: FaseUpdateOneRequiredWithoutNegociosNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutNegociosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNegociosNestedInput
  }

  export type NegocioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idFase?: IntFieldUpdateOperationsInput | number
    idPipeline?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUncheckedUpdateManyWithoutNegocioNestedInput
    instancias?: InstanciaUncheckedUpdateManyWithoutNegocioNestedInput
  }

  export type NegocioCreateManyInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idFase?: number
    idPipeline?: number
    idUsuario: number
    nome?: string | null
  }

  export type NegocioUpdateManyMutationInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NegocioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idFase?: IntFieldUpdateOperationsInput | number
    idPipeline?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MensagemCreateInput = {
    mensagem: string
    base64: boolean
    caption?: string | null
    timestamp?: Date | string
    nome: string
    fromMe: boolean
    instancia: InstanciaCreateNestedOneWithoutMensagensInput
  }

  export type MensagemUncheckedCreateInput = {
    id?: number
    mensagem: string
    base64: boolean
    caption?: string | null
    timestamp?: Date | string
    nome: string
    fromMe: boolean
    idInstancia: number
  }

  export type MensagemUpdateInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    base64?: BoolFieldUpdateOperationsInput | boolean
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    instancia?: InstanciaUpdateOneRequiredWithoutMensagensNestedInput
  }

  export type MensagemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    base64?: BoolFieldUpdateOperationsInput | boolean
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    idInstancia?: IntFieldUpdateOperationsInput | number
  }

  export type MensagemCreateManyInput = {
    id?: number
    mensagem: string
    base64: boolean
    caption?: string | null
    timestamp?: Date | string
    nome: string
    fromMe: boolean
    idInstancia: number
  }

  export type MensagemUpdateManyMutationInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    base64?: BoolFieldUpdateOperationsInput | boolean
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    base64?: BoolFieldUpdateOperationsInput | boolean
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
    idInstancia?: IntFieldUpdateOperationsInput | number
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

  export type DepartamentoListRelationFilter = {
    every?: DepartamentoWhereInput
    some?: DepartamentoWhereInput
    none?: DepartamentoWhereInput
  }

  export type DepartamentoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissaoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PermissaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissaoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PermissaoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PermissaoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FilaListRelationFilter = {
    every?: FilaWhereInput
    some?: FilaWhereInput
    none?: FilaWhereInput
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type PermissaoListRelationFilter = {
    every?: PermissaoWhereInput
    some?: PermissaoWhereInput
    none?: PermissaoWhereInput
  }

  export type FilaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartamentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type DepartamentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepartamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type DepartamentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type DepartamentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type UsuarioConectadoCountOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    rankFila?: SortOrder
  }

  export type UsuarioConectadoAvgOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    rankFila?: SortOrder
  }

  export type UsuarioConectadoMaxOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    rankFila?: SortOrder
  }

  export type UsuarioConectadoMinOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    rankFila?: SortOrder
  }

  export type UsuarioConectadoSumOrderByAggregateInput = {
    id?: SortOrder
    idUsuario?: SortOrder
    rankFila?: SortOrder
  }

  export type NegocioListRelationFilter = {
    every?: NegocioWhereInput
    some?: NegocioWhereInput
    none?: NegocioWhereInput
  }

  export type DepartamentoScalarRelationFilter = {
    is?: DepartamentoWhereInput
    isNot?: DepartamentoWhereInput
  }

  export type UsuarioConectadoListRelationFilter = {
    every?: UsuarioConectadoWhereInput
    some?: UsuarioConectadoWhereInput
    none?: UsuarioConectadoWhereInput
  }

  export type NegocioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioConectadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    idDepartamento?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    idDepartamento?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    idDepartamento?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    idDepartamento?: SortOrder
  }

  export type FaseListRelationFilter = {
    every?: FaseWhereInput
    some?: FaseWhereInput
    none?: FaseWhereInput
  }

  export type FaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tempoFila?: SortOrder
    idDepartamento?: SortOrder
  }

  export type FilaAvgOrderByAggregateInput = {
    id?: SortOrder
    tempoFila?: SortOrder
    idDepartamento?: SortOrder
  }

  export type FilaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tempoFila?: SortOrder
    idDepartamento?: SortOrder
  }

  export type FilaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tempoFila?: SortOrder
    idDepartamento?: SortOrder
  }

  export type FilaSumOrderByAggregateInput = {
    id?: SortOrder
    tempoFila?: SortOrder
    idDepartamento?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NegocioScalarRelationFilter = {
    is?: NegocioWhereInput
    isNot?: NegocioWhereInput
  }

  export type MensagemListRelationFilter = {
    every?: MensagemWhereInput
    some?: MensagemWhereInput
    none?: MensagemWhereInput
  }

  export type MensagemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstanciaCountOrderByAggregateInput = {
    id?: SortOrder
    conversaAceita?: SortOrder
    conversaFechada?: SortOrder
    chaveApi?: SortOrder
    idNegocio?: SortOrder
    nome?: SortOrder
    idInstancia?: SortOrder
  }

  export type InstanciaAvgOrderByAggregateInput = {
    id?: SortOrder
    idNegocio?: SortOrder
  }

  export type InstanciaMaxOrderByAggregateInput = {
    id?: SortOrder
    conversaAceita?: SortOrder
    conversaFechada?: SortOrder
    chaveApi?: SortOrder
    idNegocio?: SortOrder
    nome?: SortOrder
    idInstancia?: SortOrder
  }

  export type InstanciaMinOrderByAggregateInput = {
    id?: SortOrder
    conversaAceita?: SortOrder
    conversaFechada?: SortOrder
    chaveApi?: SortOrder
    idNegocio?: SortOrder
    nome?: SortOrder
    idInstancia?: SortOrder
  }

  export type InstanciaSumOrderByAggregateInput = {
    id?: SortOrder
    idNegocio?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FilaNullableScalarRelationFilter = {
    is?: FilaWhereInput | null
    isNot?: FilaWhereInput | null
  }

  export type PipelineScalarRelationFilter = {
    is?: PipelineWhereInput
    isNot?: PipelineWhereInput
  }

  export type CampoListRelationFilter = {
    every?: CampoWhereInput
    some?: CampoWhereInput
    none?: CampoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaseCountOrderByAggregateInput = {
    id?: SortOrder
    cor?: SortOrder
    posicao?: SortOrder
    idPipeline?: SortOrder
    nome?: SortOrder
    perdaOuGanho?: SortOrder
    idFila?: SortOrder
  }

  export type FaseAvgOrderByAggregateInput = {
    id?: SortOrder
    idPipeline?: SortOrder
    idFila?: SortOrder
  }

  export type FaseMaxOrderByAggregateInput = {
    id?: SortOrder
    cor?: SortOrder
    posicao?: SortOrder
    idPipeline?: SortOrder
    nome?: SortOrder
    perdaOuGanho?: SortOrder
    idFila?: SortOrder
  }

  export type FaseMinOrderByAggregateInput = {
    id?: SortOrder
    cor?: SortOrder
    posicao?: SortOrder
    idPipeline?: SortOrder
    nome?: SortOrder
    perdaOuGanho?: SortOrder
    idFila?: SortOrder
  }

  export type FaseSumOrderByAggregateInput = {
    id?: SortOrder
    idPipeline?: SortOrder
    idFila?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PipelineCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PipelineAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PipelineMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PipelineMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type PipelineSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormListRelationFilter = {
    every?: FormWhereInput
    some?: FormWhereInput
    none?: FormWhereInput
  }

  export type FormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type CampoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type CampoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type CampoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CampoScalarRelationFilter = {
    is?: CampoWhereInput
    isNot?: CampoWhereInput
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    idCampo?: SortOrder
    idNegocio?: SortOrder
  }

  export type FormAvgOrderByAggregateInput = {
    id?: SortOrder
    idCampo?: SortOrder
    idNegocio?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    idCampo?: SortOrder
    idNegocio?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    idCampo?: SortOrder
    idNegocio?: SortOrder
  }

  export type FormSumOrderByAggregateInput = {
    id?: SortOrder
    idCampo?: SortOrder
    idNegocio?: SortOrder
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

  export type InstanciaListRelationFilter = {
    every?: InstanciaWhereInput
    some?: InstanciaWhereInput
    none?: InstanciaWhereInput
  }

  export type FaseScalarRelationFilter = {
    is?: FaseWhereInput
    isNot?: FaseWhereInput
  }

  export type InstanciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NegocioCountOrderByAggregateInput = {
    id?: SortOrder
    telefone?: SortOrder
    dateCreate?: SortOrder
    numeroCampanha?: SortOrder
    idFase?: SortOrder
    idPipeline?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrder
  }

  export type NegocioAvgOrderByAggregateInput = {
    id?: SortOrder
    idFase?: SortOrder
    idPipeline?: SortOrder
    idUsuario?: SortOrder
  }

  export type NegocioMaxOrderByAggregateInput = {
    id?: SortOrder
    telefone?: SortOrder
    dateCreate?: SortOrder
    numeroCampanha?: SortOrder
    idFase?: SortOrder
    idPipeline?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrder
  }

  export type NegocioMinOrderByAggregateInput = {
    id?: SortOrder
    telefone?: SortOrder
    dateCreate?: SortOrder
    numeroCampanha?: SortOrder
    idFase?: SortOrder
    idPipeline?: SortOrder
    idUsuario?: SortOrder
    nome?: SortOrder
  }

  export type NegocioSumOrderByAggregateInput = {
    id?: SortOrder
    idFase?: SortOrder
    idPipeline?: SortOrder
    idUsuario?: SortOrder
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

  export type InstanciaScalarRelationFilter = {
    is?: InstanciaWhereInput
    isNot?: InstanciaWhereInput
  }

  export type MensagemCountOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    base64?: SortOrder
    caption?: SortOrder
    timestamp?: SortOrder
    nome?: SortOrder
    fromMe?: SortOrder
    idInstancia?: SortOrder
  }

  export type MensagemAvgOrderByAggregateInput = {
    id?: SortOrder
    idInstancia?: SortOrder
  }

  export type MensagemMaxOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    base64?: SortOrder
    caption?: SortOrder
    timestamp?: SortOrder
    nome?: SortOrder
    fromMe?: SortOrder
    idInstancia?: SortOrder
  }

  export type MensagemMinOrderByAggregateInput = {
    id?: SortOrder
    mensagem?: SortOrder
    base64?: SortOrder
    caption?: SortOrder
    timestamp?: SortOrder
    nome?: SortOrder
    fromMe?: SortOrder
    idInstancia?: SortOrder
  }

  export type MensagemSumOrderByAggregateInput = {
    id?: SortOrder
    idInstancia?: SortOrder
  }

  export type DepartamentoCreateNestedManyWithoutPermissoesInput = {
    create?: XOR<DepartamentoCreateWithoutPermissoesInput, DepartamentoUncheckedCreateWithoutPermissoesInput> | DepartamentoCreateWithoutPermissoesInput[] | DepartamentoUncheckedCreateWithoutPermissoesInput[]
    connectOrCreate?: DepartamentoCreateOrConnectWithoutPermissoesInput | DepartamentoCreateOrConnectWithoutPermissoesInput[]
    connect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
  }

  export type DepartamentoUncheckedCreateNestedManyWithoutPermissoesInput = {
    create?: XOR<DepartamentoCreateWithoutPermissoesInput, DepartamentoUncheckedCreateWithoutPermissoesInput> | DepartamentoCreateWithoutPermissoesInput[] | DepartamentoUncheckedCreateWithoutPermissoesInput[]
    connectOrCreate?: DepartamentoCreateOrConnectWithoutPermissoesInput | DepartamentoCreateOrConnectWithoutPermissoesInput[]
    connect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DepartamentoUpdateManyWithoutPermissoesNestedInput = {
    create?: XOR<DepartamentoCreateWithoutPermissoesInput, DepartamentoUncheckedCreateWithoutPermissoesInput> | DepartamentoCreateWithoutPermissoesInput[] | DepartamentoUncheckedCreateWithoutPermissoesInput[]
    connectOrCreate?: DepartamentoCreateOrConnectWithoutPermissoesInput | DepartamentoCreateOrConnectWithoutPermissoesInput[]
    upsert?: DepartamentoUpsertWithWhereUniqueWithoutPermissoesInput | DepartamentoUpsertWithWhereUniqueWithoutPermissoesInput[]
    set?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    disconnect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    delete?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    connect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    update?: DepartamentoUpdateWithWhereUniqueWithoutPermissoesInput | DepartamentoUpdateWithWhereUniqueWithoutPermissoesInput[]
    updateMany?: DepartamentoUpdateManyWithWhereWithoutPermissoesInput | DepartamentoUpdateManyWithWhereWithoutPermissoesInput[]
    deleteMany?: DepartamentoScalarWhereInput | DepartamentoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DepartamentoUncheckedUpdateManyWithoutPermissoesNestedInput = {
    create?: XOR<DepartamentoCreateWithoutPermissoesInput, DepartamentoUncheckedCreateWithoutPermissoesInput> | DepartamentoCreateWithoutPermissoesInput[] | DepartamentoUncheckedCreateWithoutPermissoesInput[]
    connectOrCreate?: DepartamentoCreateOrConnectWithoutPermissoesInput | DepartamentoCreateOrConnectWithoutPermissoesInput[]
    upsert?: DepartamentoUpsertWithWhereUniqueWithoutPermissoesInput | DepartamentoUpsertWithWhereUniqueWithoutPermissoesInput[]
    set?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    disconnect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    delete?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    connect?: DepartamentoWhereUniqueInput | DepartamentoWhereUniqueInput[]
    update?: DepartamentoUpdateWithWhereUniqueWithoutPermissoesInput | DepartamentoUpdateWithWhereUniqueWithoutPermissoesInput[]
    updateMany?: DepartamentoUpdateManyWithWhereWithoutPermissoesInput | DepartamentoUpdateManyWithWhereWithoutPermissoesInput[]
    deleteMany?: DepartamentoScalarWhereInput | DepartamentoScalarWhereInput[]
  }

  export type FilaCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<FilaCreateWithoutDepartamentoInput, FilaUncheckedCreateWithoutDepartamentoInput> | FilaCreateWithoutDepartamentoInput[] | FilaUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: FilaCreateOrConnectWithoutDepartamentoInput | FilaCreateOrConnectWithoutDepartamentoInput[]
    createMany?: FilaCreateManyDepartamentoInputEnvelope
    connect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<UsuarioCreateWithoutDepartamentoInput, UsuarioUncheckedCreateWithoutDepartamentoInput> | UsuarioCreateWithoutDepartamentoInput[] | UsuarioUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDepartamentoInput | UsuarioCreateOrConnectWithoutDepartamentoInput[]
    createMany?: UsuarioCreateManyDepartamentoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PermissaoCreateNestedManyWithoutDepartamentosInput = {
    create?: XOR<PermissaoCreateWithoutDepartamentosInput, PermissaoUncheckedCreateWithoutDepartamentosInput> | PermissaoCreateWithoutDepartamentosInput[] | PermissaoUncheckedCreateWithoutDepartamentosInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutDepartamentosInput | PermissaoCreateOrConnectWithoutDepartamentosInput[]
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
  }

  export type FilaUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<FilaCreateWithoutDepartamentoInput, FilaUncheckedCreateWithoutDepartamentoInput> | FilaCreateWithoutDepartamentoInput[] | FilaUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: FilaCreateOrConnectWithoutDepartamentoInput | FilaCreateOrConnectWithoutDepartamentoInput[]
    createMany?: FilaCreateManyDepartamentoInputEnvelope
    connect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<UsuarioCreateWithoutDepartamentoInput, UsuarioUncheckedCreateWithoutDepartamentoInput> | UsuarioCreateWithoutDepartamentoInput[] | UsuarioUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDepartamentoInput | UsuarioCreateOrConnectWithoutDepartamentoInput[]
    createMany?: UsuarioCreateManyDepartamentoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PermissaoUncheckedCreateNestedManyWithoutDepartamentosInput = {
    create?: XOR<PermissaoCreateWithoutDepartamentosInput, PermissaoUncheckedCreateWithoutDepartamentosInput> | PermissaoCreateWithoutDepartamentosInput[] | PermissaoUncheckedCreateWithoutDepartamentosInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutDepartamentosInput | PermissaoCreateOrConnectWithoutDepartamentosInput[]
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
  }

  export type FilaUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<FilaCreateWithoutDepartamentoInput, FilaUncheckedCreateWithoutDepartamentoInput> | FilaCreateWithoutDepartamentoInput[] | FilaUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: FilaCreateOrConnectWithoutDepartamentoInput | FilaCreateOrConnectWithoutDepartamentoInput[]
    upsert?: FilaUpsertWithWhereUniqueWithoutDepartamentoInput | FilaUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: FilaCreateManyDepartamentoInputEnvelope
    set?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    disconnect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    delete?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    connect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    update?: FilaUpdateWithWhereUniqueWithoutDepartamentoInput | FilaUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: FilaUpdateManyWithWhereWithoutDepartamentoInput | FilaUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: FilaScalarWhereInput | FilaScalarWhereInput[]
  }

  export type UsuarioUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<UsuarioCreateWithoutDepartamentoInput, UsuarioUncheckedCreateWithoutDepartamentoInput> | UsuarioCreateWithoutDepartamentoInput[] | UsuarioUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDepartamentoInput | UsuarioCreateOrConnectWithoutDepartamentoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutDepartamentoInput | UsuarioUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: UsuarioCreateManyDepartamentoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutDepartamentoInput | UsuarioUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutDepartamentoInput | UsuarioUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PermissaoUpdateManyWithoutDepartamentosNestedInput = {
    create?: XOR<PermissaoCreateWithoutDepartamentosInput, PermissaoUncheckedCreateWithoutDepartamentosInput> | PermissaoCreateWithoutDepartamentosInput[] | PermissaoUncheckedCreateWithoutDepartamentosInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutDepartamentosInput | PermissaoCreateOrConnectWithoutDepartamentosInput[]
    upsert?: PermissaoUpsertWithWhereUniqueWithoutDepartamentosInput | PermissaoUpsertWithWhereUniqueWithoutDepartamentosInput[]
    set?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    disconnect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    delete?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    update?: PermissaoUpdateWithWhereUniqueWithoutDepartamentosInput | PermissaoUpdateWithWhereUniqueWithoutDepartamentosInput[]
    updateMany?: PermissaoUpdateManyWithWhereWithoutDepartamentosInput | PermissaoUpdateManyWithWhereWithoutDepartamentosInput[]
    deleteMany?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
  }

  export type FilaUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<FilaCreateWithoutDepartamentoInput, FilaUncheckedCreateWithoutDepartamentoInput> | FilaCreateWithoutDepartamentoInput[] | FilaUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: FilaCreateOrConnectWithoutDepartamentoInput | FilaCreateOrConnectWithoutDepartamentoInput[]
    upsert?: FilaUpsertWithWhereUniqueWithoutDepartamentoInput | FilaUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: FilaCreateManyDepartamentoInputEnvelope
    set?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    disconnect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    delete?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    connect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    update?: FilaUpdateWithWhereUniqueWithoutDepartamentoInput | FilaUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: FilaUpdateManyWithWhereWithoutDepartamentoInput | FilaUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: FilaScalarWhereInput | FilaScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<UsuarioCreateWithoutDepartamentoInput, UsuarioUncheckedCreateWithoutDepartamentoInput> | UsuarioCreateWithoutDepartamentoInput[] | UsuarioUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutDepartamentoInput | UsuarioCreateOrConnectWithoutDepartamentoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutDepartamentoInput | UsuarioUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: UsuarioCreateManyDepartamentoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutDepartamentoInput | UsuarioUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutDepartamentoInput | UsuarioUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PermissaoUncheckedUpdateManyWithoutDepartamentosNestedInput = {
    create?: XOR<PermissaoCreateWithoutDepartamentosInput, PermissaoUncheckedCreateWithoutDepartamentosInput> | PermissaoCreateWithoutDepartamentosInput[] | PermissaoUncheckedCreateWithoutDepartamentosInput[]
    connectOrCreate?: PermissaoCreateOrConnectWithoutDepartamentosInput | PermissaoCreateOrConnectWithoutDepartamentosInput[]
    upsert?: PermissaoUpsertWithWhereUniqueWithoutDepartamentosInput | PermissaoUpsertWithWhereUniqueWithoutDepartamentosInput[]
    set?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    disconnect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    delete?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    connect?: PermissaoWhereUniqueInput | PermissaoWhereUniqueInput[]
    update?: PermissaoUpdateWithWhereUniqueWithoutDepartamentosInput | PermissaoUpdateWithWhereUniqueWithoutDepartamentosInput[]
    updateMany?: PermissaoUpdateManyWithWhereWithoutDepartamentosInput | PermissaoUpdateManyWithWhereWithoutDepartamentosInput[]
    deleteMany?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutU_Input = {
    create?: XOR<UsuarioCreateWithoutU_Input, UsuarioUncheckedCreateWithoutU_Input>
    connectOrCreate?: UsuarioCreateOrConnectWithoutU_Input
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutU_NestedInput = {
    create?: XOR<UsuarioCreateWithoutU_Input, UsuarioUncheckedCreateWithoutU_Input>
    connectOrCreate?: UsuarioCreateOrConnectWithoutU_Input
    upsert?: UsuarioUpsertWithoutU_Input
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutU_Input, UsuarioUpdateWithoutU_Input>, UsuarioUncheckedUpdateWithoutU_Input>
  }

  export type NegocioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NegocioCreateWithoutUsuarioInput, NegocioUncheckedCreateWithoutUsuarioInput> | NegocioCreateWithoutUsuarioInput[] | NegocioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutUsuarioInput | NegocioCreateOrConnectWithoutUsuarioInput[]
    createMany?: NegocioCreateManyUsuarioInputEnvelope
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
  }

  export type DepartamentoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<DepartamentoCreateWithoutUsuariosInput, DepartamentoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutUsuariosInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type UsuarioConectadoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioConectadoCreateWithoutUsuarioInput, UsuarioConectadoUncheckedCreateWithoutUsuarioInput> | UsuarioConectadoCreateWithoutUsuarioInput[] | UsuarioConectadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioConectadoCreateOrConnectWithoutUsuarioInput | UsuarioConectadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioConectadoCreateManyUsuarioInputEnvelope
    connect?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
  }

  export type FilaCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<FilaCreateWithoutUsuariosInput, FilaUncheckedCreateWithoutUsuariosInput> | FilaCreateWithoutUsuariosInput[] | FilaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: FilaCreateOrConnectWithoutUsuariosInput | FilaCreateOrConnectWithoutUsuariosInput[]
    connect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
  }

  export type NegocioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<NegocioCreateWithoutUsuarioInput, NegocioUncheckedCreateWithoutUsuarioInput> | NegocioCreateWithoutUsuarioInput[] | NegocioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutUsuarioInput | NegocioCreateOrConnectWithoutUsuarioInput[]
    createMany?: NegocioCreateManyUsuarioInputEnvelope
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
  }

  export type UsuarioConectadoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<UsuarioConectadoCreateWithoutUsuarioInput, UsuarioConectadoUncheckedCreateWithoutUsuarioInput> | UsuarioConectadoCreateWithoutUsuarioInput[] | UsuarioConectadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioConectadoCreateOrConnectWithoutUsuarioInput | UsuarioConectadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: UsuarioConectadoCreateManyUsuarioInputEnvelope
    connect?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
  }

  export type FilaUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<FilaCreateWithoutUsuariosInput, FilaUncheckedCreateWithoutUsuariosInput> | FilaCreateWithoutUsuariosInput[] | FilaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: FilaCreateOrConnectWithoutUsuariosInput | FilaCreateOrConnectWithoutUsuariosInput[]
    connect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
  }

  export type NegocioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NegocioCreateWithoutUsuarioInput, NegocioUncheckedCreateWithoutUsuarioInput> | NegocioCreateWithoutUsuarioInput[] | NegocioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutUsuarioInput | NegocioCreateOrConnectWithoutUsuarioInput[]
    upsert?: NegocioUpsertWithWhereUniqueWithoutUsuarioInput | NegocioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NegocioCreateManyUsuarioInputEnvelope
    set?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    disconnect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    delete?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    update?: NegocioUpdateWithWhereUniqueWithoutUsuarioInput | NegocioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NegocioUpdateManyWithWhereWithoutUsuarioInput | NegocioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NegocioScalarWhereInput | NegocioScalarWhereInput[]
  }

  export type DepartamentoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<DepartamentoCreateWithoutUsuariosInput, DepartamentoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutUsuariosInput
    upsert?: DepartamentoUpsertWithoutUsuariosInput
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutUsuariosInput, DepartamentoUpdateWithoutUsuariosInput>, DepartamentoUncheckedUpdateWithoutUsuariosInput>
  }

  export type UsuarioConectadoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioConectadoCreateWithoutUsuarioInput, UsuarioConectadoUncheckedCreateWithoutUsuarioInput> | UsuarioConectadoCreateWithoutUsuarioInput[] | UsuarioConectadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioConectadoCreateOrConnectWithoutUsuarioInput | UsuarioConectadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioConectadoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioConectadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioConectadoCreateManyUsuarioInputEnvelope
    set?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
    disconnect?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
    delete?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
    connect?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
    update?: UsuarioConectadoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioConectadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioConectadoUpdateManyWithWhereWithoutUsuarioInput | UsuarioConectadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioConectadoScalarWhereInput | UsuarioConectadoScalarWhereInput[]
  }

  export type FilaUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<FilaCreateWithoutUsuariosInput, FilaUncheckedCreateWithoutUsuariosInput> | FilaCreateWithoutUsuariosInput[] | FilaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: FilaCreateOrConnectWithoutUsuariosInput | FilaCreateOrConnectWithoutUsuariosInput[]
    upsert?: FilaUpsertWithWhereUniqueWithoutUsuariosInput | FilaUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    disconnect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    delete?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    connect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    update?: FilaUpdateWithWhereUniqueWithoutUsuariosInput | FilaUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: FilaUpdateManyWithWhereWithoutUsuariosInput | FilaUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: FilaScalarWhereInput | FilaScalarWhereInput[]
  }

  export type NegocioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<NegocioCreateWithoutUsuarioInput, NegocioUncheckedCreateWithoutUsuarioInput> | NegocioCreateWithoutUsuarioInput[] | NegocioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutUsuarioInput | NegocioCreateOrConnectWithoutUsuarioInput[]
    upsert?: NegocioUpsertWithWhereUniqueWithoutUsuarioInput | NegocioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: NegocioCreateManyUsuarioInputEnvelope
    set?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    disconnect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    delete?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    update?: NegocioUpdateWithWhereUniqueWithoutUsuarioInput | NegocioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: NegocioUpdateManyWithWhereWithoutUsuarioInput | NegocioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: NegocioScalarWhereInput | NegocioScalarWhereInput[]
  }

  export type UsuarioConectadoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<UsuarioConectadoCreateWithoutUsuarioInput, UsuarioConectadoUncheckedCreateWithoutUsuarioInput> | UsuarioConectadoCreateWithoutUsuarioInput[] | UsuarioConectadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: UsuarioConectadoCreateOrConnectWithoutUsuarioInput | UsuarioConectadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: UsuarioConectadoUpsertWithWhereUniqueWithoutUsuarioInput | UsuarioConectadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: UsuarioConectadoCreateManyUsuarioInputEnvelope
    set?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
    disconnect?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
    delete?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
    connect?: UsuarioConectadoWhereUniqueInput | UsuarioConectadoWhereUniqueInput[]
    update?: UsuarioConectadoUpdateWithWhereUniqueWithoutUsuarioInput | UsuarioConectadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: UsuarioConectadoUpdateManyWithWhereWithoutUsuarioInput | UsuarioConectadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: UsuarioConectadoScalarWhereInput | UsuarioConectadoScalarWhereInput[]
  }

  export type FilaUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<FilaCreateWithoutUsuariosInput, FilaUncheckedCreateWithoutUsuariosInput> | FilaCreateWithoutUsuariosInput[] | FilaUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: FilaCreateOrConnectWithoutUsuariosInput | FilaCreateOrConnectWithoutUsuariosInput[]
    upsert?: FilaUpsertWithWhereUniqueWithoutUsuariosInput | FilaUpsertWithWhereUniqueWithoutUsuariosInput[]
    set?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    disconnect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    delete?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    connect?: FilaWhereUniqueInput | FilaWhereUniqueInput[]
    update?: FilaUpdateWithWhereUniqueWithoutUsuariosInput | FilaUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: FilaUpdateManyWithWhereWithoutUsuariosInput | FilaUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: FilaScalarWhereInput | FilaScalarWhereInput[]
  }

  export type FaseCreateNestedManyWithoutFilaInput = {
    create?: XOR<FaseCreateWithoutFilaInput, FaseUncheckedCreateWithoutFilaInput> | FaseCreateWithoutFilaInput[] | FaseUncheckedCreateWithoutFilaInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutFilaInput | FaseCreateOrConnectWithoutFilaInput[]
    createMany?: FaseCreateManyFilaInputEnvelope
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
  }

  export type DepartamentoCreateNestedOneWithoutFilasInput = {
    create?: XOR<DepartamentoCreateWithoutFilasInput, DepartamentoUncheckedCreateWithoutFilasInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutFilasInput
    connect?: DepartamentoWhereUniqueInput
  }

  export type UsuarioCreateNestedManyWithoutFilasInput = {
    create?: XOR<UsuarioCreateWithoutFilasInput, UsuarioUncheckedCreateWithoutFilasInput> | UsuarioCreateWithoutFilasInput[] | UsuarioUncheckedCreateWithoutFilasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFilasInput | UsuarioCreateOrConnectWithoutFilasInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type FaseUncheckedCreateNestedManyWithoutFilaInput = {
    create?: XOR<FaseCreateWithoutFilaInput, FaseUncheckedCreateWithoutFilaInput> | FaseCreateWithoutFilaInput[] | FaseUncheckedCreateWithoutFilaInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutFilaInput | FaseCreateOrConnectWithoutFilaInput[]
    createMany?: FaseCreateManyFilaInputEnvelope
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutFilasInput = {
    create?: XOR<UsuarioCreateWithoutFilasInput, UsuarioUncheckedCreateWithoutFilasInput> | UsuarioCreateWithoutFilasInput[] | UsuarioUncheckedCreateWithoutFilasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFilasInput | UsuarioCreateOrConnectWithoutFilasInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type FaseUpdateManyWithoutFilaNestedInput = {
    create?: XOR<FaseCreateWithoutFilaInput, FaseUncheckedCreateWithoutFilaInput> | FaseCreateWithoutFilaInput[] | FaseUncheckedCreateWithoutFilaInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutFilaInput | FaseCreateOrConnectWithoutFilaInput[]
    upsert?: FaseUpsertWithWhereUniqueWithoutFilaInput | FaseUpsertWithWhereUniqueWithoutFilaInput[]
    createMany?: FaseCreateManyFilaInputEnvelope
    set?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    disconnect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    delete?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    update?: FaseUpdateWithWhereUniqueWithoutFilaInput | FaseUpdateWithWhereUniqueWithoutFilaInput[]
    updateMany?: FaseUpdateManyWithWhereWithoutFilaInput | FaseUpdateManyWithWhereWithoutFilaInput[]
    deleteMany?: FaseScalarWhereInput | FaseScalarWhereInput[]
  }

  export type DepartamentoUpdateOneRequiredWithoutFilasNestedInput = {
    create?: XOR<DepartamentoCreateWithoutFilasInput, DepartamentoUncheckedCreateWithoutFilasInput>
    connectOrCreate?: DepartamentoCreateOrConnectWithoutFilasInput
    upsert?: DepartamentoUpsertWithoutFilasInput
    connect?: DepartamentoWhereUniqueInput
    update?: XOR<XOR<DepartamentoUpdateToOneWithWhereWithoutFilasInput, DepartamentoUpdateWithoutFilasInput>, DepartamentoUncheckedUpdateWithoutFilasInput>
  }

  export type UsuarioUpdateManyWithoutFilasNestedInput = {
    create?: XOR<UsuarioCreateWithoutFilasInput, UsuarioUncheckedCreateWithoutFilasInput> | UsuarioCreateWithoutFilasInput[] | UsuarioUncheckedCreateWithoutFilasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFilasInput | UsuarioCreateOrConnectWithoutFilasInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutFilasInput | UsuarioUpsertWithWhereUniqueWithoutFilasInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutFilasInput | UsuarioUpdateWithWhereUniqueWithoutFilasInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutFilasInput | UsuarioUpdateManyWithWhereWithoutFilasInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type FaseUncheckedUpdateManyWithoutFilaNestedInput = {
    create?: XOR<FaseCreateWithoutFilaInput, FaseUncheckedCreateWithoutFilaInput> | FaseCreateWithoutFilaInput[] | FaseUncheckedCreateWithoutFilaInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutFilaInput | FaseCreateOrConnectWithoutFilaInput[]
    upsert?: FaseUpsertWithWhereUniqueWithoutFilaInput | FaseUpsertWithWhereUniqueWithoutFilaInput[]
    createMany?: FaseCreateManyFilaInputEnvelope
    set?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    disconnect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    delete?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    update?: FaseUpdateWithWhereUniqueWithoutFilaInput | FaseUpdateWithWhereUniqueWithoutFilaInput[]
    updateMany?: FaseUpdateManyWithWhereWithoutFilaInput | FaseUpdateManyWithWhereWithoutFilaInput[]
    deleteMany?: FaseScalarWhereInput | FaseScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutFilasNestedInput = {
    create?: XOR<UsuarioCreateWithoutFilasInput, UsuarioUncheckedCreateWithoutFilasInput> | UsuarioCreateWithoutFilasInput[] | UsuarioUncheckedCreateWithoutFilasInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutFilasInput | UsuarioCreateOrConnectWithoutFilasInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutFilasInput | UsuarioUpsertWithWhereUniqueWithoutFilasInput[]
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutFilasInput | UsuarioUpdateWithWhereUniqueWithoutFilasInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutFilasInput | UsuarioUpdateManyWithWhereWithoutFilasInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type NegocioCreateNestedOneWithoutInstanciasInput = {
    create?: XOR<NegocioCreateWithoutInstanciasInput, NegocioUncheckedCreateWithoutInstanciasInput>
    connectOrCreate?: NegocioCreateOrConnectWithoutInstanciasInput
    connect?: NegocioWhereUniqueInput
  }

  export type MensagemCreateNestedManyWithoutInstanciaInput = {
    create?: XOR<MensagemCreateWithoutInstanciaInput, MensagemUncheckedCreateWithoutInstanciaInput> | MensagemCreateWithoutInstanciaInput[] | MensagemUncheckedCreateWithoutInstanciaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutInstanciaInput | MensagemCreateOrConnectWithoutInstanciaInput[]
    createMany?: MensagemCreateManyInstanciaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type MensagemUncheckedCreateNestedManyWithoutInstanciaInput = {
    create?: XOR<MensagemCreateWithoutInstanciaInput, MensagemUncheckedCreateWithoutInstanciaInput> | MensagemCreateWithoutInstanciaInput[] | MensagemUncheckedCreateWithoutInstanciaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutInstanciaInput | MensagemCreateOrConnectWithoutInstanciaInput[]
    createMany?: MensagemCreateManyInstanciaInputEnvelope
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NegocioUpdateOneRequiredWithoutInstanciasNestedInput = {
    create?: XOR<NegocioCreateWithoutInstanciasInput, NegocioUncheckedCreateWithoutInstanciasInput>
    connectOrCreate?: NegocioCreateOrConnectWithoutInstanciasInput
    upsert?: NegocioUpsertWithoutInstanciasInput
    connect?: NegocioWhereUniqueInput
    update?: XOR<XOR<NegocioUpdateToOneWithWhereWithoutInstanciasInput, NegocioUpdateWithoutInstanciasInput>, NegocioUncheckedUpdateWithoutInstanciasInput>
  }

  export type MensagemUpdateManyWithoutInstanciaNestedInput = {
    create?: XOR<MensagemCreateWithoutInstanciaInput, MensagemUncheckedCreateWithoutInstanciaInput> | MensagemCreateWithoutInstanciaInput[] | MensagemUncheckedCreateWithoutInstanciaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutInstanciaInput | MensagemCreateOrConnectWithoutInstanciaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutInstanciaInput | MensagemUpsertWithWhereUniqueWithoutInstanciaInput[]
    createMany?: MensagemCreateManyInstanciaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutInstanciaInput | MensagemUpdateWithWhereUniqueWithoutInstanciaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutInstanciaInput | MensagemUpdateManyWithWhereWithoutInstanciaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type MensagemUncheckedUpdateManyWithoutInstanciaNestedInput = {
    create?: XOR<MensagemCreateWithoutInstanciaInput, MensagemUncheckedCreateWithoutInstanciaInput> | MensagemCreateWithoutInstanciaInput[] | MensagemUncheckedCreateWithoutInstanciaInput[]
    connectOrCreate?: MensagemCreateOrConnectWithoutInstanciaInput | MensagemCreateOrConnectWithoutInstanciaInput[]
    upsert?: MensagemUpsertWithWhereUniqueWithoutInstanciaInput | MensagemUpsertWithWhereUniqueWithoutInstanciaInput[]
    createMany?: MensagemCreateManyInstanciaInputEnvelope
    set?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    disconnect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    delete?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    connect?: MensagemWhereUniqueInput | MensagemWhereUniqueInput[]
    update?: MensagemUpdateWithWhereUniqueWithoutInstanciaInput | MensagemUpdateWithWhereUniqueWithoutInstanciaInput[]
    updateMany?: MensagemUpdateManyWithWhereWithoutInstanciaInput | MensagemUpdateManyWithWhereWithoutInstanciaInput[]
    deleteMany?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
  }

  export type FilaCreateNestedOneWithoutFasesInput = {
    create?: XOR<FilaCreateWithoutFasesInput, FilaUncheckedCreateWithoutFasesInput>
    connectOrCreate?: FilaCreateOrConnectWithoutFasesInput
    connect?: FilaWhereUniqueInput
  }

  export type PipelineCreateNestedOneWithoutFasesInput = {
    create?: XOR<PipelineCreateWithoutFasesInput, PipelineUncheckedCreateWithoutFasesInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutFasesInput
    connect?: PipelineWhereUniqueInput
  }

  export type NegocioCreateNestedManyWithoutFaseInput = {
    create?: XOR<NegocioCreateWithoutFaseInput, NegocioUncheckedCreateWithoutFaseInput> | NegocioCreateWithoutFaseInput[] | NegocioUncheckedCreateWithoutFaseInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutFaseInput | NegocioCreateOrConnectWithoutFaseInput[]
    createMany?: NegocioCreateManyFaseInputEnvelope
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
  }

  export type CampoCreateNestedManyWithoutFasesObrigatoriasInput = {
    create?: XOR<CampoCreateWithoutFasesObrigatoriasInput, CampoUncheckedCreateWithoutFasesObrigatoriasInput> | CampoCreateWithoutFasesObrigatoriasInput[] | CampoUncheckedCreateWithoutFasesObrigatoriasInput[]
    connectOrCreate?: CampoCreateOrConnectWithoutFasesObrigatoriasInput | CampoCreateOrConnectWithoutFasesObrigatoriasInput[]
    connect?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
  }

  export type NegocioUncheckedCreateNestedManyWithoutFaseInput = {
    create?: XOR<NegocioCreateWithoutFaseInput, NegocioUncheckedCreateWithoutFaseInput> | NegocioCreateWithoutFaseInput[] | NegocioUncheckedCreateWithoutFaseInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutFaseInput | NegocioCreateOrConnectWithoutFaseInput[]
    createMany?: NegocioCreateManyFaseInputEnvelope
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
  }

  export type CampoUncheckedCreateNestedManyWithoutFasesObrigatoriasInput = {
    create?: XOR<CampoCreateWithoutFasesObrigatoriasInput, CampoUncheckedCreateWithoutFasesObrigatoriasInput> | CampoCreateWithoutFasesObrigatoriasInput[] | CampoUncheckedCreateWithoutFasesObrigatoriasInput[]
    connectOrCreate?: CampoCreateOrConnectWithoutFasesObrigatoriasInput | CampoCreateOrConnectWithoutFasesObrigatoriasInput[]
    connect?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
  }

  export type FilaUpdateOneWithoutFasesNestedInput = {
    create?: XOR<FilaCreateWithoutFasesInput, FilaUncheckedCreateWithoutFasesInput>
    connectOrCreate?: FilaCreateOrConnectWithoutFasesInput
    upsert?: FilaUpsertWithoutFasesInput
    disconnect?: FilaWhereInput | boolean
    delete?: FilaWhereInput | boolean
    connect?: FilaWhereUniqueInput
    update?: XOR<XOR<FilaUpdateToOneWithWhereWithoutFasesInput, FilaUpdateWithoutFasesInput>, FilaUncheckedUpdateWithoutFasesInput>
  }

  export type PipelineUpdateOneRequiredWithoutFasesNestedInput = {
    create?: XOR<PipelineCreateWithoutFasesInput, PipelineUncheckedCreateWithoutFasesInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutFasesInput
    upsert?: PipelineUpsertWithoutFasesInput
    connect?: PipelineWhereUniqueInput
    update?: XOR<XOR<PipelineUpdateToOneWithWhereWithoutFasesInput, PipelineUpdateWithoutFasesInput>, PipelineUncheckedUpdateWithoutFasesInput>
  }

  export type NegocioUpdateManyWithoutFaseNestedInput = {
    create?: XOR<NegocioCreateWithoutFaseInput, NegocioUncheckedCreateWithoutFaseInput> | NegocioCreateWithoutFaseInput[] | NegocioUncheckedCreateWithoutFaseInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutFaseInput | NegocioCreateOrConnectWithoutFaseInput[]
    upsert?: NegocioUpsertWithWhereUniqueWithoutFaseInput | NegocioUpsertWithWhereUniqueWithoutFaseInput[]
    createMany?: NegocioCreateManyFaseInputEnvelope
    set?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    disconnect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    delete?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    update?: NegocioUpdateWithWhereUniqueWithoutFaseInput | NegocioUpdateWithWhereUniqueWithoutFaseInput[]
    updateMany?: NegocioUpdateManyWithWhereWithoutFaseInput | NegocioUpdateManyWithWhereWithoutFaseInput[]
    deleteMany?: NegocioScalarWhereInput | NegocioScalarWhereInput[]
  }

  export type CampoUpdateManyWithoutFasesObrigatoriasNestedInput = {
    create?: XOR<CampoCreateWithoutFasesObrigatoriasInput, CampoUncheckedCreateWithoutFasesObrigatoriasInput> | CampoCreateWithoutFasesObrigatoriasInput[] | CampoUncheckedCreateWithoutFasesObrigatoriasInput[]
    connectOrCreate?: CampoCreateOrConnectWithoutFasesObrigatoriasInput | CampoCreateOrConnectWithoutFasesObrigatoriasInput[]
    upsert?: CampoUpsertWithWhereUniqueWithoutFasesObrigatoriasInput | CampoUpsertWithWhereUniqueWithoutFasesObrigatoriasInput[]
    set?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
    disconnect?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
    delete?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
    connect?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
    update?: CampoUpdateWithWhereUniqueWithoutFasesObrigatoriasInput | CampoUpdateWithWhereUniqueWithoutFasesObrigatoriasInput[]
    updateMany?: CampoUpdateManyWithWhereWithoutFasesObrigatoriasInput | CampoUpdateManyWithWhereWithoutFasesObrigatoriasInput[]
    deleteMany?: CampoScalarWhereInput | CampoScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NegocioUncheckedUpdateManyWithoutFaseNestedInput = {
    create?: XOR<NegocioCreateWithoutFaseInput, NegocioUncheckedCreateWithoutFaseInput> | NegocioCreateWithoutFaseInput[] | NegocioUncheckedCreateWithoutFaseInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutFaseInput | NegocioCreateOrConnectWithoutFaseInput[]
    upsert?: NegocioUpsertWithWhereUniqueWithoutFaseInput | NegocioUpsertWithWhereUniqueWithoutFaseInput[]
    createMany?: NegocioCreateManyFaseInputEnvelope
    set?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    disconnect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    delete?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    update?: NegocioUpdateWithWhereUniqueWithoutFaseInput | NegocioUpdateWithWhereUniqueWithoutFaseInput[]
    updateMany?: NegocioUpdateManyWithWhereWithoutFaseInput | NegocioUpdateManyWithWhereWithoutFaseInput[]
    deleteMany?: NegocioScalarWhereInput | NegocioScalarWhereInput[]
  }

  export type CampoUncheckedUpdateManyWithoutFasesObrigatoriasNestedInput = {
    create?: XOR<CampoCreateWithoutFasesObrigatoriasInput, CampoUncheckedCreateWithoutFasesObrigatoriasInput> | CampoCreateWithoutFasesObrigatoriasInput[] | CampoUncheckedCreateWithoutFasesObrigatoriasInput[]
    connectOrCreate?: CampoCreateOrConnectWithoutFasesObrigatoriasInput | CampoCreateOrConnectWithoutFasesObrigatoriasInput[]
    upsert?: CampoUpsertWithWhereUniqueWithoutFasesObrigatoriasInput | CampoUpsertWithWhereUniqueWithoutFasesObrigatoriasInput[]
    set?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
    disconnect?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
    delete?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
    connect?: CampoWhereUniqueInput | CampoWhereUniqueInput[]
    update?: CampoUpdateWithWhereUniqueWithoutFasesObrigatoriasInput | CampoUpdateWithWhereUniqueWithoutFasesObrigatoriasInput[]
    updateMany?: CampoUpdateManyWithWhereWithoutFasesObrigatoriasInput | CampoUpdateManyWithWhereWithoutFasesObrigatoriasInput[]
    deleteMany?: CampoScalarWhereInput | CampoScalarWhereInput[]
  }

  export type FaseCreateNestedManyWithoutPipelineInput = {
    create?: XOR<FaseCreateWithoutPipelineInput, FaseUncheckedCreateWithoutPipelineInput> | FaseCreateWithoutPipelineInput[] | FaseUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutPipelineInput | FaseCreateOrConnectWithoutPipelineInput[]
    createMany?: FaseCreateManyPipelineInputEnvelope
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
  }

  export type NegocioCreateNestedManyWithoutPipelineInput = {
    create?: XOR<NegocioCreateWithoutPipelineInput, NegocioUncheckedCreateWithoutPipelineInput> | NegocioCreateWithoutPipelineInput[] | NegocioUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutPipelineInput | NegocioCreateOrConnectWithoutPipelineInput[]
    createMany?: NegocioCreateManyPipelineInputEnvelope
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
  }

  export type FaseUncheckedCreateNestedManyWithoutPipelineInput = {
    create?: XOR<FaseCreateWithoutPipelineInput, FaseUncheckedCreateWithoutPipelineInput> | FaseCreateWithoutPipelineInput[] | FaseUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutPipelineInput | FaseCreateOrConnectWithoutPipelineInput[]
    createMany?: FaseCreateManyPipelineInputEnvelope
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
  }

  export type NegocioUncheckedCreateNestedManyWithoutPipelineInput = {
    create?: XOR<NegocioCreateWithoutPipelineInput, NegocioUncheckedCreateWithoutPipelineInput> | NegocioCreateWithoutPipelineInput[] | NegocioUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutPipelineInput | NegocioCreateOrConnectWithoutPipelineInput[]
    createMany?: NegocioCreateManyPipelineInputEnvelope
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
  }

  export type FaseUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<FaseCreateWithoutPipelineInput, FaseUncheckedCreateWithoutPipelineInput> | FaseCreateWithoutPipelineInput[] | FaseUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutPipelineInput | FaseCreateOrConnectWithoutPipelineInput[]
    upsert?: FaseUpsertWithWhereUniqueWithoutPipelineInput | FaseUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: FaseCreateManyPipelineInputEnvelope
    set?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    disconnect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    delete?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    update?: FaseUpdateWithWhereUniqueWithoutPipelineInput | FaseUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: FaseUpdateManyWithWhereWithoutPipelineInput | FaseUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: FaseScalarWhereInput | FaseScalarWhereInput[]
  }

  export type NegocioUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<NegocioCreateWithoutPipelineInput, NegocioUncheckedCreateWithoutPipelineInput> | NegocioCreateWithoutPipelineInput[] | NegocioUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutPipelineInput | NegocioCreateOrConnectWithoutPipelineInput[]
    upsert?: NegocioUpsertWithWhereUniqueWithoutPipelineInput | NegocioUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: NegocioCreateManyPipelineInputEnvelope
    set?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    disconnect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    delete?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    update?: NegocioUpdateWithWhereUniqueWithoutPipelineInput | NegocioUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: NegocioUpdateManyWithWhereWithoutPipelineInput | NegocioUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: NegocioScalarWhereInput | NegocioScalarWhereInput[]
  }

  export type FaseUncheckedUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<FaseCreateWithoutPipelineInput, FaseUncheckedCreateWithoutPipelineInput> | FaseCreateWithoutPipelineInput[] | FaseUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutPipelineInput | FaseCreateOrConnectWithoutPipelineInput[]
    upsert?: FaseUpsertWithWhereUniqueWithoutPipelineInput | FaseUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: FaseCreateManyPipelineInputEnvelope
    set?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    disconnect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    delete?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    update?: FaseUpdateWithWhereUniqueWithoutPipelineInput | FaseUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: FaseUpdateManyWithWhereWithoutPipelineInput | FaseUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: FaseScalarWhereInput | FaseScalarWhereInput[]
  }

  export type NegocioUncheckedUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<NegocioCreateWithoutPipelineInput, NegocioUncheckedCreateWithoutPipelineInput> | NegocioCreateWithoutPipelineInput[] | NegocioUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: NegocioCreateOrConnectWithoutPipelineInput | NegocioCreateOrConnectWithoutPipelineInput[]
    upsert?: NegocioUpsertWithWhereUniqueWithoutPipelineInput | NegocioUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: NegocioCreateManyPipelineInputEnvelope
    set?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    disconnect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    delete?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    connect?: NegocioWhereUniqueInput | NegocioWhereUniqueInput[]
    update?: NegocioUpdateWithWhereUniqueWithoutPipelineInput | NegocioUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: NegocioUpdateManyWithWhereWithoutPipelineInput | NegocioUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: NegocioScalarWhereInput | NegocioScalarWhereInput[]
  }

  export type FormCreateNestedManyWithoutCampoInput = {
    create?: XOR<FormCreateWithoutCampoInput, FormUncheckedCreateWithoutCampoInput> | FormCreateWithoutCampoInput[] | FormUncheckedCreateWithoutCampoInput[]
    connectOrCreate?: FormCreateOrConnectWithoutCampoInput | FormCreateOrConnectWithoutCampoInput[]
    createMany?: FormCreateManyCampoInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FaseCreateNestedManyWithoutCamposObrigatoriosInput = {
    create?: XOR<FaseCreateWithoutCamposObrigatoriosInput, FaseUncheckedCreateWithoutCamposObrigatoriosInput> | FaseCreateWithoutCamposObrigatoriosInput[] | FaseUncheckedCreateWithoutCamposObrigatoriosInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutCamposObrigatoriosInput | FaseCreateOrConnectWithoutCamposObrigatoriosInput[]
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
  }

  export type FormUncheckedCreateNestedManyWithoutCampoInput = {
    create?: XOR<FormCreateWithoutCampoInput, FormUncheckedCreateWithoutCampoInput> | FormCreateWithoutCampoInput[] | FormUncheckedCreateWithoutCampoInput[]
    connectOrCreate?: FormCreateOrConnectWithoutCampoInput | FormCreateOrConnectWithoutCampoInput[]
    createMany?: FormCreateManyCampoInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FaseUncheckedCreateNestedManyWithoutCamposObrigatoriosInput = {
    create?: XOR<FaseCreateWithoutCamposObrigatoriosInput, FaseUncheckedCreateWithoutCamposObrigatoriosInput> | FaseCreateWithoutCamposObrigatoriosInput[] | FaseUncheckedCreateWithoutCamposObrigatoriosInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutCamposObrigatoriosInput | FaseCreateOrConnectWithoutCamposObrigatoriosInput[]
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
  }

  export type FormUpdateManyWithoutCampoNestedInput = {
    create?: XOR<FormCreateWithoutCampoInput, FormUncheckedCreateWithoutCampoInput> | FormCreateWithoutCampoInput[] | FormUncheckedCreateWithoutCampoInput[]
    connectOrCreate?: FormCreateOrConnectWithoutCampoInput | FormCreateOrConnectWithoutCampoInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutCampoInput | FormUpsertWithWhereUniqueWithoutCampoInput[]
    createMany?: FormCreateManyCampoInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutCampoInput | FormUpdateWithWhereUniqueWithoutCampoInput[]
    updateMany?: FormUpdateManyWithWhereWithoutCampoInput | FormUpdateManyWithWhereWithoutCampoInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FaseUpdateManyWithoutCamposObrigatoriosNestedInput = {
    create?: XOR<FaseCreateWithoutCamposObrigatoriosInput, FaseUncheckedCreateWithoutCamposObrigatoriosInput> | FaseCreateWithoutCamposObrigatoriosInput[] | FaseUncheckedCreateWithoutCamposObrigatoriosInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutCamposObrigatoriosInput | FaseCreateOrConnectWithoutCamposObrigatoriosInput[]
    upsert?: FaseUpsertWithWhereUniqueWithoutCamposObrigatoriosInput | FaseUpsertWithWhereUniqueWithoutCamposObrigatoriosInput[]
    set?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    disconnect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    delete?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    update?: FaseUpdateWithWhereUniqueWithoutCamposObrigatoriosInput | FaseUpdateWithWhereUniqueWithoutCamposObrigatoriosInput[]
    updateMany?: FaseUpdateManyWithWhereWithoutCamposObrigatoriosInput | FaseUpdateManyWithWhereWithoutCamposObrigatoriosInput[]
    deleteMany?: FaseScalarWhereInput | FaseScalarWhereInput[]
  }

  export type FormUncheckedUpdateManyWithoutCampoNestedInput = {
    create?: XOR<FormCreateWithoutCampoInput, FormUncheckedCreateWithoutCampoInput> | FormCreateWithoutCampoInput[] | FormUncheckedCreateWithoutCampoInput[]
    connectOrCreate?: FormCreateOrConnectWithoutCampoInput | FormCreateOrConnectWithoutCampoInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutCampoInput | FormUpsertWithWhereUniqueWithoutCampoInput[]
    createMany?: FormCreateManyCampoInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutCampoInput | FormUpdateWithWhereUniqueWithoutCampoInput[]
    updateMany?: FormUpdateManyWithWhereWithoutCampoInput | FormUpdateManyWithWhereWithoutCampoInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FaseUncheckedUpdateManyWithoutCamposObrigatoriosNestedInput = {
    create?: XOR<FaseCreateWithoutCamposObrigatoriosInput, FaseUncheckedCreateWithoutCamposObrigatoriosInput> | FaseCreateWithoutCamposObrigatoriosInput[] | FaseUncheckedCreateWithoutCamposObrigatoriosInput[]
    connectOrCreate?: FaseCreateOrConnectWithoutCamposObrigatoriosInput | FaseCreateOrConnectWithoutCamposObrigatoriosInput[]
    upsert?: FaseUpsertWithWhereUniqueWithoutCamposObrigatoriosInput | FaseUpsertWithWhereUniqueWithoutCamposObrigatoriosInput[]
    set?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    disconnect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    delete?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    connect?: FaseWhereUniqueInput | FaseWhereUniqueInput[]
    update?: FaseUpdateWithWhereUniqueWithoutCamposObrigatoriosInput | FaseUpdateWithWhereUniqueWithoutCamposObrigatoriosInput[]
    updateMany?: FaseUpdateManyWithWhereWithoutCamposObrigatoriosInput | FaseUpdateManyWithWhereWithoutCamposObrigatoriosInput[]
    deleteMany?: FaseScalarWhereInput | FaseScalarWhereInput[]
  }

  export type CampoCreateNestedOneWithoutFormInput = {
    create?: XOR<CampoCreateWithoutFormInput, CampoUncheckedCreateWithoutFormInput>
    connectOrCreate?: CampoCreateOrConnectWithoutFormInput
    connect?: CampoWhereUniqueInput
  }

  export type NegocioCreateNestedOneWithoutFormInput = {
    create?: XOR<NegocioCreateWithoutFormInput, NegocioUncheckedCreateWithoutFormInput>
    connectOrCreate?: NegocioCreateOrConnectWithoutFormInput
    connect?: NegocioWhereUniqueInput
  }

  export type CampoUpdateOneRequiredWithoutFormNestedInput = {
    create?: XOR<CampoCreateWithoutFormInput, CampoUncheckedCreateWithoutFormInput>
    connectOrCreate?: CampoCreateOrConnectWithoutFormInput
    upsert?: CampoUpsertWithoutFormInput
    connect?: CampoWhereUniqueInput
    update?: XOR<XOR<CampoUpdateToOneWithWhereWithoutFormInput, CampoUpdateWithoutFormInput>, CampoUncheckedUpdateWithoutFormInput>
  }

  export type NegocioUpdateOneRequiredWithoutFormNestedInput = {
    create?: XOR<NegocioCreateWithoutFormInput, NegocioUncheckedCreateWithoutFormInput>
    connectOrCreate?: NegocioCreateOrConnectWithoutFormInput
    upsert?: NegocioUpsertWithoutFormInput
    connect?: NegocioWhereUniqueInput
    update?: XOR<XOR<NegocioUpdateToOneWithWhereWithoutFormInput, NegocioUpdateWithoutFormInput>, NegocioUncheckedUpdateWithoutFormInput>
  }

  export type FormCreateNestedManyWithoutNegocioInput = {
    create?: XOR<FormCreateWithoutNegocioInput, FormUncheckedCreateWithoutNegocioInput> | FormCreateWithoutNegocioInput[] | FormUncheckedCreateWithoutNegocioInput[]
    connectOrCreate?: FormCreateOrConnectWithoutNegocioInput | FormCreateOrConnectWithoutNegocioInput[]
    createMany?: FormCreateManyNegocioInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type InstanciaCreateNestedManyWithoutNegocioInput = {
    create?: XOR<InstanciaCreateWithoutNegocioInput, InstanciaUncheckedCreateWithoutNegocioInput> | InstanciaCreateWithoutNegocioInput[] | InstanciaUncheckedCreateWithoutNegocioInput[]
    connectOrCreate?: InstanciaCreateOrConnectWithoutNegocioInput | InstanciaCreateOrConnectWithoutNegocioInput[]
    createMany?: InstanciaCreateManyNegocioInputEnvelope
    connect?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
  }

  export type FaseCreateNestedOneWithoutNegociosInput = {
    create?: XOR<FaseCreateWithoutNegociosInput, FaseUncheckedCreateWithoutNegociosInput>
    connectOrCreate?: FaseCreateOrConnectWithoutNegociosInput
    connect?: FaseWhereUniqueInput
  }

  export type PipelineCreateNestedOneWithoutNegociosInput = {
    create?: XOR<PipelineCreateWithoutNegociosInput, PipelineUncheckedCreateWithoutNegociosInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutNegociosInput
    connect?: PipelineWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutNegociosInput = {
    create?: XOR<UsuarioCreateWithoutNegociosInput, UsuarioUncheckedCreateWithoutNegociosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNegociosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type FormUncheckedCreateNestedManyWithoutNegocioInput = {
    create?: XOR<FormCreateWithoutNegocioInput, FormUncheckedCreateWithoutNegocioInput> | FormCreateWithoutNegocioInput[] | FormUncheckedCreateWithoutNegocioInput[]
    connectOrCreate?: FormCreateOrConnectWithoutNegocioInput | FormCreateOrConnectWithoutNegocioInput[]
    createMany?: FormCreateManyNegocioInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type InstanciaUncheckedCreateNestedManyWithoutNegocioInput = {
    create?: XOR<InstanciaCreateWithoutNegocioInput, InstanciaUncheckedCreateWithoutNegocioInput> | InstanciaCreateWithoutNegocioInput[] | InstanciaUncheckedCreateWithoutNegocioInput[]
    connectOrCreate?: InstanciaCreateOrConnectWithoutNegocioInput | InstanciaCreateOrConnectWithoutNegocioInput[]
    createMany?: InstanciaCreateManyNegocioInputEnvelope
    connect?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FormUpdateManyWithoutNegocioNestedInput = {
    create?: XOR<FormCreateWithoutNegocioInput, FormUncheckedCreateWithoutNegocioInput> | FormCreateWithoutNegocioInput[] | FormUncheckedCreateWithoutNegocioInput[]
    connectOrCreate?: FormCreateOrConnectWithoutNegocioInput | FormCreateOrConnectWithoutNegocioInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutNegocioInput | FormUpsertWithWhereUniqueWithoutNegocioInput[]
    createMany?: FormCreateManyNegocioInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutNegocioInput | FormUpdateWithWhereUniqueWithoutNegocioInput[]
    updateMany?: FormUpdateManyWithWhereWithoutNegocioInput | FormUpdateManyWithWhereWithoutNegocioInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type InstanciaUpdateManyWithoutNegocioNestedInput = {
    create?: XOR<InstanciaCreateWithoutNegocioInput, InstanciaUncheckedCreateWithoutNegocioInput> | InstanciaCreateWithoutNegocioInput[] | InstanciaUncheckedCreateWithoutNegocioInput[]
    connectOrCreate?: InstanciaCreateOrConnectWithoutNegocioInput | InstanciaCreateOrConnectWithoutNegocioInput[]
    upsert?: InstanciaUpsertWithWhereUniqueWithoutNegocioInput | InstanciaUpsertWithWhereUniqueWithoutNegocioInput[]
    createMany?: InstanciaCreateManyNegocioInputEnvelope
    set?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
    disconnect?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
    delete?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
    connect?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
    update?: InstanciaUpdateWithWhereUniqueWithoutNegocioInput | InstanciaUpdateWithWhereUniqueWithoutNegocioInput[]
    updateMany?: InstanciaUpdateManyWithWhereWithoutNegocioInput | InstanciaUpdateManyWithWhereWithoutNegocioInput[]
    deleteMany?: InstanciaScalarWhereInput | InstanciaScalarWhereInput[]
  }

  export type FaseUpdateOneRequiredWithoutNegociosNestedInput = {
    create?: XOR<FaseCreateWithoutNegociosInput, FaseUncheckedCreateWithoutNegociosInput>
    connectOrCreate?: FaseCreateOrConnectWithoutNegociosInput
    upsert?: FaseUpsertWithoutNegociosInput
    connect?: FaseWhereUniqueInput
    update?: XOR<XOR<FaseUpdateToOneWithWhereWithoutNegociosInput, FaseUpdateWithoutNegociosInput>, FaseUncheckedUpdateWithoutNegociosInput>
  }

  export type PipelineUpdateOneRequiredWithoutNegociosNestedInput = {
    create?: XOR<PipelineCreateWithoutNegociosInput, PipelineUncheckedCreateWithoutNegociosInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutNegociosInput
    upsert?: PipelineUpsertWithoutNegociosInput
    connect?: PipelineWhereUniqueInput
    update?: XOR<XOR<PipelineUpdateToOneWithWhereWithoutNegociosInput, PipelineUpdateWithoutNegociosInput>, PipelineUncheckedUpdateWithoutNegociosInput>
  }

  export type UsuarioUpdateOneRequiredWithoutNegociosNestedInput = {
    create?: XOR<UsuarioCreateWithoutNegociosInput, UsuarioUncheckedCreateWithoutNegociosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutNegociosInput
    upsert?: UsuarioUpsertWithoutNegociosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutNegociosInput, UsuarioUpdateWithoutNegociosInput>, UsuarioUncheckedUpdateWithoutNegociosInput>
  }

  export type FormUncheckedUpdateManyWithoutNegocioNestedInput = {
    create?: XOR<FormCreateWithoutNegocioInput, FormUncheckedCreateWithoutNegocioInput> | FormCreateWithoutNegocioInput[] | FormUncheckedCreateWithoutNegocioInput[]
    connectOrCreate?: FormCreateOrConnectWithoutNegocioInput | FormCreateOrConnectWithoutNegocioInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutNegocioInput | FormUpsertWithWhereUniqueWithoutNegocioInput[]
    createMany?: FormCreateManyNegocioInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutNegocioInput | FormUpdateWithWhereUniqueWithoutNegocioInput[]
    updateMany?: FormUpdateManyWithWhereWithoutNegocioInput | FormUpdateManyWithWhereWithoutNegocioInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type InstanciaUncheckedUpdateManyWithoutNegocioNestedInput = {
    create?: XOR<InstanciaCreateWithoutNegocioInput, InstanciaUncheckedCreateWithoutNegocioInput> | InstanciaCreateWithoutNegocioInput[] | InstanciaUncheckedCreateWithoutNegocioInput[]
    connectOrCreate?: InstanciaCreateOrConnectWithoutNegocioInput | InstanciaCreateOrConnectWithoutNegocioInput[]
    upsert?: InstanciaUpsertWithWhereUniqueWithoutNegocioInput | InstanciaUpsertWithWhereUniqueWithoutNegocioInput[]
    createMany?: InstanciaCreateManyNegocioInputEnvelope
    set?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
    disconnect?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
    delete?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
    connect?: InstanciaWhereUniqueInput | InstanciaWhereUniqueInput[]
    update?: InstanciaUpdateWithWhereUniqueWithoutNegocioInput | InstanciaUpdateWithWhereUniqueWithoutNegocioInput[]
    updateMany?: InstanciaUpdateManyWithWhereWithoutNegocioInput | InstanciaUpdateManyWithWhereWithoutNegocioInput[]
    deleteMany?: InstanciaScalarWhereInput | InstanciaScalarWhereInput[]
  }

  export type InstanciaCreateNestedOneWithoutMensagensInput = {
    create?: XOR<InstanciaCreateWithoutMensagensInput, InstanciaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: InstanciaCreateOrConnectWithoutMensagensInput
    connect?: InstanciaWhereUniqueInput
  }

  export type InstanciaUpdateOneRequiredWithoutMensagensNestedInput = {
    create?: XOR<InstanciaCreateWithoutMensagensInput, InstanciaUncheckedCreateWithoutMensagensInput>
    connectOrCreate?: InstanciaCreateOrConnectWithoutMensagensInput
    upsert?: InstanciaUpsertWithoutMensagensInput
    connect?: InstanciaWhereUniqueInput
    update?: XOR<XOR<InstanciaUpdateToOneWithWhereWithoutMensagensInput, InstanciaUpdateWithoutMensagensInput>, InstanciaUncheckedUpdateWithoutMensagensInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type DepartamentoCreateWithoutPermissoesInput = {
    nome: string
    filas?: FilaCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoUncheckedCreateWithoutPermissoesInput = {
    id?: number
    nome: string
    filas?: FilaUncheckedCreateNestedManyWithoutDepartamentoInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type DepartamentoCreateOrConnectWithoutPermissoesInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutPermissoesInput, DepartamentoUncheckedCreateWithoutPermissoesInput>
  }

  export type DepartamentoUpsertWithWhereUniqueWithoutPermissoesInput = {
    where: DepartamentoWhereUniqueInput
    update: XOR<DepartamentoUpdateWithoutPermissoesInput, DepartamentoUncheckedUpdateWithoutPermissoesInput>
    create: XOR<DepartamentoCreateWithoutPermissoesInput, DepartamentoUncheckedCreateWithoutPermissoesInput>
  }

  export type DepartamentoUpdateWithWhereUniqueWithoutPermissoesInput = {
    where: DepartamentoWhereUniqueInput
    data: XOR<DepartamentoUpdateWithoutPermissoesInput, DepartamentoUncheckedUpdateWithoutPermissoesInput>
  }

  export type DepartamentoUpdateManyWithWhereWithoutPermissoesInput = {
    where: DepartamentoScalarWhereInput
    data: XOR<DepartamentoUpdateManyMutationInput, DepartamentoUncheckedUpdateManyWithoutPermissoesInput>
  }

  export type DepartamentoScalarWhereInput = {
    AND?: DepartamentoScalarWhereInput | DepartamentoScalarWhereInput[]
    OR?: DepartamentoScalarWhereInput[]
    NOT?: DepartamentoScalarWhereInput | DepartamentoScalarWhereInput[]
    id?: IntFilter<"Departamento"> | number
    nome?: StringFilter<"Departamento"> | string
  }

  export type FilaCreateWithoutDepartamentoInput = {
    nome: string
    tempoFila?: number
    fases?: FaseCreateNestedManyWithoutFilaInput
    usuarios?: UsuarioCreateNestedManyWithoutFilasInput
  }

  export type FilaUncheckedCreateWithoutDepartamentoInput = {
    id?: number
    nome: string
    tempoFila?: number
    fases?: FaseUncheckedCreateNestedManyWithoutFilaInput
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutFilasInput
  }

  export type FilaCreateOrConnectWithoutDepartamentoInput = {
    where: FilaWhereUniqueInput
    create: XOR<FilaCreateWithoutDepartamentoInput, FilaUncheckedCreateWithoutDepartamentoInput>
  }

  export type FilaCreateManyDepartamentoInputEnvelope = {
    data: FilaCreateManyDepartamentoInput | FilaCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutDepartamentoInput = {
    nome: string
    email: string
    senha: string
    negocios?: NegocioCreateNestedManyWithoutUsuarioInput
    u_?: UsuarioConectadoCreateNestedManyWithoutUsuarioInput
    filas?: FilaCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutDepartamentoInput = {
    id?: number
    nome: string
    email: string
    senha: string
    negocios?: NegocioUncheckedCreateNestedManyWithoutUsuarioInput
    u_?: UsuarioConectadoUncheckedCreateNestedManyWithoutUsuarioInput
    filas?: FilaUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioCreateOrConnectWithoutDepartamentoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutDepartamentoInput, UsuarioUncheckedCreateWithoutDepartamentoInput>
  }

  export type UsuarioCreateManyDepartamentoInputEnvelope = {
    data: UsuarioCreateManyDepartamentoInput | UsuarioCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type PermissaoCreateWithoutDepartamentosInput = {
    nome: string
  }

  export type PermissaoUncheckedCreateWithoutDepartamentosInput = {
    id?: number
    nome: string
  }

  export type PermissaoCreateOrConnectWithoutDepartamentosInput = {
    where: PermissaoWhereUniqueInput
    create: XOR<PermissaoCreateWithoutDepartamentosInput, PermissaoUncheckedCreateWithoutDepartamentosInput>
  }

  export type FilaUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: FilaWhereUniqueInput
    update: XOR<FilaUpdateWithoutDepartamentoInput, FilaUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<FilaCreateWithoutDepartamentoInput, FilaUncheckedCreateWithoutDepartamentoInput>
  }

  export type FilaUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: FilaWhereUniqueInput
    data: XOR<FilaUpdateWithoutDepartamentoInput, FilaUncheckedUpdateWithoutDepartamentoInput>
  }

  export type FilaUpdateManyWithWhereWithoutDepartamentoInput = {
    where: FilaScalarWhereInput
    data: XOR<FilaUpdateManyMutationInput, FilaUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type FilaScalarWhereInput = {
    AND?: FilaScalarWhereInput | FilaScalarWhereInput[]
    OR?: FilaScalarWhereInput[]
    NOT?: FilaScalarWhereInput | FilaScalarWhereInput[]
    id?: IntFilter<"Fila"> | number
    nome?: StringFilter<"Fila"> | string
    tempoFila?: IntFilter<"Fila"> | number
    idDepartamento?: IntFilter<"Fila"> | number
  }

  export type UsuarioUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutDepartamentoInput, UsuarioUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<UsuarioCreateWithoutDepartamentoInput, UsuarioUncheckedCreateWithoutDepartamentoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutDepartamentoInput, UsuarioUncheckedUpdateWithoutDepartamentoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutDepartamentoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    idDepartamento?: IntFilter<"Usuario"> | number
  }

  export type PermissaoUpsertWithWhereUniqueWithoutDepartamentosInput = {
    where: PermissaoWhereUniqueInput
    update: XOR<PermissaoUpdateWithoutDepartamentosInput, PermissaoUncheckedUpdateWithoutDepartamentosInput>
    create: XOR<PermissaoCreateWithoutDepartamentosInput, PermissaoUncheckedCreateWithoutDepartamentosInput>
  }

  export type PermissaoUpdateWithWhereUniqueWithoutDepartamentosInput = {
    where: PermissaoWhereUniqueInput
    data: XOR<PermissaoUpdateWithoutDepartamentosInput, PermissaoUncheckedUpdateWithoutDepartamentosInput>
  }

  export type PermissaoUpdateManyWithWhereWithoutDepartamentosInput = {
    where: PermissaoScalarWhereInput
    data: XOR<PermissaoUpdateManyMutationInput, PermissaoUncheckedUpdateManyWithoutDepartamentosInput>
  }

  export type PermissaoScalarWhereInput = {
    AND?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
    OR?: PermissaoScalarWhereInput[]
    NOT?: PermissaoScalarWhereInput | PermissaoScalarWhereInput[]
    id?: IntFilter<"Permissao"> | number
    nome?: StringFilter<"Permissao"> | string
  }

  export type UsuarioCreateWithoutU_Input = {
    nome: string
    email: string
    senha: string
    negocios?: NegocioCreateNestedManyWithoutUsuarioInput
    departamento: DepartamentoCreateNestedOneWithoutUsuariosInput
    filas?: FilaCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutU_Input = {
    id?: number
    nome: string
    email: string
    senha: string
    idDepartamento: number
    negocios?: NegocioUncheckedCreateNestedManyWithoutUsuarioInput
    filas?: FilaUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioCreateOrConnectWithoutU_Input = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutU_Input, UsuarioUncheckedCreateWithoutU_Input>
  }

  export type UsuarioUpsertWithoutU_Input = {
    update: XOR<UsuarioUpdateWithoutU_Input, UsuarioUncheckedUpdateWithoutU_Input>
    create: XOR<UsuarioCreateWithoutU_Input, UsuarioUncheckedCreateWithoutU_Input>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutU_Input = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutU_Input, UsuarioUncheckedUpdateWithoutU_Input>
  }

  export type UsuarioUpdateWithoutU_Input = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    negocios?: NegocioUpdateManyWithoutUsuarioNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutUsuariosNestedInput
    filas?: FilaUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutU_Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idDepartamento?: IntFieldUpdateOperationsInput | number
    negocios?: NegocioUncheckedUpdateManyWithoutUsuarioNestedInput
    filas?: FilaUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type NegocioCreateWithoutUsuarioInput = {
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    nome?: string | null
    form?: FormCreateNestedManyWithoutNegocioInput
    instancias?: InstanciaCreateNestedManyWithoutNegocioInput
    fase?: FaseCreateNestedOneWithoutNegociosInput
    pipeline?: PipelineCreateNestedOneWithoutNegociosInput
  }

  export type NegocioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idFase?: number
    idPipeline?: number
    nome?: string | null
    form?: FormUncheckedCreateNestedManyWithoutNegocioInput
    instancias?: InstanciaUncheckedCreateNestedManyWithoutNegocioInput
  }

  export type NegocioCreateOrConnectWithoutUsuarioInput = {
    where: NegocioWhereUniqueInput
    create: XOR<NegocioCreateWithoutUsuarioInput, NegocioUncheckedCreateWithoutUsuarioInput>
  }

  export type NegocioCreateManyUsuarioInputEnvelope = {
    data: NegocioCreateManyUsuarioInput | NegocioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type DepartamentoCreateWithoutUsuariosInput = {
    nome: string
    filas?: FilaCreateNestedManyWithoutDepartamentoInput
    permissoes?: PermissaoCreateNestedManyWithoutDepartamentosInput
  }

  export type DepartamentoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    filas?: FilaUncheckedCreateNestedManyWithoutDepartamentoInput
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutDepartamentosInput
  }

  export type DepartamentoCreateOrConnectWithoutUsuariosInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutUsuariosInput, DepartamentoUncheckedCreateWithoutUsuariosInput>
  }

  export type UsuarioConectadoCreateWithoutUsuarioInput = {
    rankFila: number
  }

  export type UsuarioConectadoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    rankFila: number
  }

  export type UsuarioConectadoCreateOrConnectWithoutUsuarioInput = {
    where: UsuarioConectadoWhereUniqueInput
    create: XOR<UsuarioConectadoCreateWithoutUsuarioInput, UsuarioConectadoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioConectadoCreateManyUsuarioInputEnvelope = {
    data: UsuarioConectadoCreateManyUsuarioInput | UsuarioConectadoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type FilaCreateWithoutUsuariosInput = {
    nome: string
    tempoFila?: number
    fases?: FaseCreateNestedManyWithoutFilaInput
    departamento: DepartamentoCreateNestedOneWithoutFilasInput
  }

  export type FilaUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nome: string
    tempoFila?: number
    idDepartamento: number
    fases?: FaseUncheckedCreateNestedManyWithoutFilaInput
  }

  export type FilaCreateOrConnectWithoutUsuariosInput = {
    where: FilaWhereUniqueInput
    create: XOR<FilaCreateWithoutUsuariosInput, FilaUncheckedCreateWithoutUsuariosInput>
  }

  export type NegocioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: NegocioWhereUniqueInput
    update: XOR<NegocioUpdateWithoutUsuarioInput, NegocioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<NegocioCreateWithoutUsuarioInput, NegocioUncheckedCreateWithoutUsuarioInput>
  }

  export type NegocioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: NegocioWhereUniqueInput
    data: XOR<NegocioUpdateWithoutUsuarioInput, NegocioUncheckedUpdateWithoutUsuarioInput>
  }

  export type NegocioUpdateManyWithWhereWithoutUsuarioInput = {
    where: NegocioScalarWhereInput
    data: XOR<NegocioUpdateManyMutationInput, NegocioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type NegocioScalarWhereInput = {
    AND?: NegocioScalarWhereInput | NegocioScalarWhereInput[]
    OR?: NegocioScalarWhereInput[]
    NOT?: NegocioScalarWhereInput | NegocioScalarWhereInput[]
    id?: IntFilter<"Negocio"> | number
    telefone?: StringFilter<"Negocio"> | string
    dateCreate?: DateTimeFilter<"Negocio"> | Date | string
    numeroCampanha?: StringFilter<"Negocio"> | string
    idFase?: IntFilter<"Negocio"> | number
    idPipeline?: IntFilter<"Negocio"> | number
    idUsuario?: IntFilter<"Negocio"> | number
    nome?: StringNullableFilter<"Negocio"> | string | null
  }

  export type DepartamentoUpsertWithoutUsuariosInput = {
    update: XOR<DepartamentoUpdateWithoutUsuariosInput, DepartamentoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<DepartamentoCreateWithoutUsuariosInput, DepartamentoUncheckedCreateWithoutUsuariosInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutUsuariosInput, DepartamentoUncheckedUpdateWithoutUsuariosInput>
  }

  export type DepartamentoUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    filas?: FilaUpdateManyWithoutDepartamentoNestedInput
    permissoes?: PermissaoUpdateManyWithoutDepartamentosNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    filas?: FilaUncheckedUpdateManyWithoutDepartamentoNestedInput
    permissoes?: PermissaoUncheckedUpdateManyWithoutDepartamentosNestedInput
  }

  export type UsuarioConectadoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioConectadoWhereUniqueInput
    update: XOR<UsuarioConectadoUpdateWithoutUsuarioInput, UsuarioConectadoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<UsuarioConectadoCreateWithoutUsuarioInput, UsuarioConectadoUncheckedCreateWithoutUsuarioInput>
  }

  export type UsuarioConectadoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: UsuarioConectadoWhereUniqueInput
    data: XOR<UsuarioConectadoUpdateWithoutUsuarioInput, UsuarioConectadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type UsuarioConectadoUpdateManyWithWhereWithoutUsuarioInput = {
    where: UsuarioConectadoScalarWhereInput
    data: XOR<UsuarioConectadoUpdateManyMutationInput, UsuarioConectadoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type UsuarioConectadoScalarWhereInput = {
    AND?: UsuarioConectadoScalarWhereInput | UsuarioConectadoScalarWhereInput[]
    OR?: UsuarioConectadoScalarWhereInput[]
    NOT?: UsuarioConectadoScalarWhereInput | UsuarioConectadoScalarWhereInput[]
    id?: IntFilter<"UsuarioConectado"> | number
    idUsuario?: IntFilter<"UsuarioConectado"> | number
    rankFila?: IntFilter<"UsuarioConectado"> | number
  }

  export type FilaUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: FilaWhereUniqueInput
    update: XOR<FilaUpdateWithoutUsuariosInput, FilaUncheckedUpdateWithoutUsuariosInput>
    create: XOR<FilaCreateWithoutUsuariosInput, FilaUncheckedCreateWithoutUsuariosInput>
  }

  export type FilaUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: FilaWhereUniqueInput
    data: XOR<FilaUpdateWithoutUsuariosInput, FilaUncheckedUpdateWithoutUsuariosInput>
  }

  export type FilaUpdateManyWithWhereWithoutUsuariosInput = {
    where: FilaScalarWhereInput
    data: XOR<FilaUpdateManyMutationInput, FilaUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type FaseCreateWithoutFilaInput = {
    cor: string
    posicao: string
    nome: string
    perdaOuGanho: boolean
    pipeline: PipelineCreateNestedOneWithoutFasesInput
    negocios?: NegocioCreateNestedManyWithoutFaseInput
    camposObrigatorios?: CampoCreateNestedManyWithoutFasesObrigatoriasInput
  }

  export type FaseUncheckedCreateWithoutFilaInput = {
    id?: number
    cor: string
    posicao: string
    idPipeline: number
    nome: string
    perdaOuGanho: boolean
    negocios?: NegocioUncheckedCreateNestedManyWithoutFaseInput
    camposObrigatorios?: CampoUncheckedCreateNestedManyWithoutFasesObrigatoriasInput
  }

  export type FaseCreateOrConnectWithoutFilaInput = {
    where: FaseWhereUniqueInput
    create: XOR<FaseCreateWithoutFilaInput, FaseUncheckedCreateWithoutFilaInput>
  }

  export type FaseCreateManyFilaInputEnvelope = {
    data: FaseCreateManyFilaInput | FaseCreateManyFilaInput[]
    skipDuplicates?: boolean
  }

  export type DepartamentoCreateWithoutFilasInput = {
    nome: string
    usuarios?: UsuarioCreateNestedManyWithoutDepartamentoInput
    permissoes?: PermissaoCreateNestedManyWithoutDepartamentosInput
  }

  export type DepartamentoUncheckedCreateWithoutFilasInput = {
    id?: number
    nome: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutDepartamentoInput
    permissoes?: PermissaoUncheckedCreateNestedManyWithoutDepartamentosInput
  }

  export type DepartamentoCreateOrConnectWithoutFilasInput = {
    where: DepartamentoWhereUniqueInput
    create: XOR<DepartamentoCreateWithoutFilasInput, DepartamentoUncheckedCreateWithoutFilasInput>
  }

  export type UsuarioCreateWithoutFilasInput = {
    nome: string
    email: string
    senha: string
    negocios?: NegocioCreateNestedManyWithoutUsuarioInput
    departamento: DepartamentoCreateNestedOneWithoutUsuariosInput
    u_?: UsuarioConectadoCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutFilasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    idDepartamento: number
    negocios?: NegocioUncheckedCreateNestedManyWithoutUsuarioInput
    u_?: UsuarioConectadoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutFilasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutFilasInput, UsuarioUncheckedCreateWithoutFilasInput>
  }

  export type FaseUpsertWithWhereUniqueWithoutFilaInput = {
    where: FaseWhereUniqueInput
    update: XOR<FaseUpdateWithoutFilaInput, FaseUncheckedUpdateWithoutFilaInput>
    create: XOR<FaseCreateWithoutFilaInput, FaseUncheckedCreateWithoutFilaInput>
  }

  export type FaseUpdateWithWhereUniqueWithoutFilaInput = {
    where: FaseWhereUniqueInput
    data: XOR<FaseUpdateWithoutFilaInput, FaseUncheckedUpdateWithoutFilaInput>
  }

  export type FaseUpdateManyWithWhereWithoutFilaInput = {
    where: FaseScalarWhereInput
    data: XOR<FaseUpdateManyMutationInput, FaseUncheckedUpdateManyWithoutFilaInput>
  }

  export type FaseScalarWhereInput = {
    AND?: FaseScalarWhereInput | FaseScalarWhereInput[]
    OR?: FaseScalarWhereInput[]
    NOT?: FaseScalarWhereInput | FaseScalarWhereInput[]
    id?: IntFilter<"Fase"> | number
    cor?: StringFilter<"Fase"> | string
    posicao?: StringFilter<"Fase"> | string
    idPipeline?: IntFilter<"Fase"> | number
    nome?: StringFilter<"Fase"> | string
    perdaOuGanho?: BoolFilter<"Fase"> | boolean
    idFila?: IntNullableFilter<"Fase"> | number | null
  }

  export type DepartamentoUpsertWithoutFilasInput = {
    update: XOR<DepartamentoUpdateWithoutFilasInput, DepartamentoUncheckedUpdateWithoutFilasInput>
    create: XOR<DepartamentoCreateWithoutFilasInput, DepartamentoUncheckedCreateWithoutFilasInput>
    where?: DepartamentoWhereInput
  }

  export type DepartamentoUpdateToOneWithWhereWithoutFilasInput = {
    where?: DepartamentoWhereInput
    data: XOR<DepartamentoUpdateWithoutFilasInput, DepartamentoUncheckedUpdateWithoutFilasInput>
  }

  export type DepartamentoUpdateWithoutFilasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutDepartamentoNestedInput
    permissoes?: PermissaoUpdateManyWithoutDepartamentosNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutFilasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutDepartamentoNestedInput
    permissoes?: PermissaoUncheckedUpdateManyWithoutDepartamentosNestedInput
  }

  export type UsuarioUpsertWithWhereUniqueWithoutFilasInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutFilasInput, UsuarioUncheckedUpdateWithoutFilasInput>
    create: XOR<UsuarioCreateWithoutFilasInput, UsuarioUncheckedCreateWithoutFilasInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutFilasInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutFilasInput, UsuarioUncheckedUpdateWithoutFilasInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutFilasInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutFilasInput>
  }

  export type NegocioCreateWithoutInstanciasInput = {
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    nome?: string | null
    form?: FormCreateNestedManyWithoutNegocioInput
    fase?: FaseCreateNestedOneWithoutNegociosInput
    pipeline?: PipelineCreateNestedOneWithoutNegociosInput
    usuario: UsuarioCreateNestedOneWithoutNegociosInput
  }

  export type NegocioUncheckedCreateWithoutInstanciasInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idFase?: number
    idPipeline?: number
    idUsuario: number
    nome?: string | null
    form?: FormUncheckedCreateNestedManyWithoutNegocioInput
  }

  export type NegocioCreateOrConnectWithoutInstanciasInput = {
    where: NegocioWhereUniqueInput
    create: XOR<NegocioCreateWithoutInstanciasInput, NegocioUncheckedCreateWithoutInstanciasInput>
  }

  export type MensagemCreateWithoutInstanciaInput = {
    mensagem: string
    base64: boolean
    caption?: string | null
    timestamp?: Date | string
    nome: string
    fromMe: boolean
  }

  export type MensagemUncheckedCreateWithoutInstanciaInput = {
    id?: number
    mensagem: string
    base64: boolean
    caption?: string | null
    timestamp?: Date | string
    nome: string
    fromMe: boolean
  }

  export type MensagemCreateOrConnectWithoutInstanciaInput = {
    where: MensagemWhereUniqueInput
    create: XOR<MensagemCreateWithoutInstanciaInput, MensagemUncheckedCreateWithoutInstanciaInput>
  }

  export type MensagemCreateManyInstanciaInputEnvelope = {
    data: MensagemCreateManyInstanciaInput | MensagemCreateManyInstanciaInput[]
    skipDuplicates?: boolean
  }

  export type NegocioUpsertWithoutInstanciasInput = {
    update: XOR<NegocioUpdateWithoutInstanciasInput, NegocioUncheckedUpdateWithoutInstanciasInput>
    create: XOR<NegocioCreateWithoutInstanciasInput, NegocioUncheckedCreateWithoutInstanciasInput>
    where?: NegocioWhereInput
  }

  export type NegocioUpdateToOneWithWhereWithoutInstanciasInput = {
    where?: NegocioWhereInput
    data: XOR<NegocioUpdateWithoutInstanciasInput, NegocioUncheckedUpdateWithoutInstanciasInput>
  }

  export type NegocioUpdateWithoutInstanciasInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUpdateManyWithoutNegocioNestedInput
    fase?: FaseUpdateOneRequiredWithoutNegociosNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutNegociosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNegociosNestedInput
  }

  export type NegocioUncheckedUpdateWithoutInstanciasInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idFase?: IntFieldUpdateOperationsInput | number
    idPipeline?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUncheckedUpdateManyWithoutNegocioNestedInput
  }

  export type MensagemUpsertWithWhereUniqueWithoutInstanciaInput = {
    where: MensagemWhereUniqueInput
    update: XOR<MensagemUpdateWithoutInstanciaInput, MensagemUncheckedUpdateWithoutInstanciaInput>
    create: XOR<MensagemCreateWithoutInstanciaInput, MensagemUncheckedCreateWithoutInstanciaInput>
  }

  export type MensagemUpdateWithWhereUniqueWithoutInstanciaInput = {
    where: MensagemWhereUniqueInput
    data: XOR<MensagemUpdateWithoutInstanciaInput, MensagemUncheckedUpdateWithoutInstanciaInput>
  }

  export type MensagemUpdateManyWithWhereWithoutInstanciaInput = {
    where: MensagemScalarWhereInput
    data: XOR<MensagemUpdateManyMutationInput, MensagemUncheckedUpdateManyWithoutInstanciaInput>
  }

  export type MensagemScalarWhereInput = {
    AND?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    OR?: MensagemScalarWhereInput[]
    NOT?: MensagemScalarWhereInput | MensagemScalarWhereInput[]
    id?: IntFilter<"Mensagem"> | number
    mensagem?: StringFilter<"Mensagem"> | string
    base64?: BoolFilter<"Mensagem"> | boolean
    caption?: StringNullableFilter<"Mensagem"> | string | null
    timestamp?: DateTimeFilter<"Mensagem"> | Date | string
    nome?: StringFilter<"Mensagem"> | string
    fromMe?: BoolFilter<"Mensagem"> | boolean
    idInstancia?: IntFilter<"Mensagem"> | number
  }

  export type FilaCreateWithoutFasesInput = {
    nome: string
    tempoFila?: number
    departamento: DepartamentoCreateNestedOneWithoutFilasInput
    usuarios?: UsuarioCreateNestedManyWithoutFilasInput
  }

  export type FilaUncheckedCreateWithoutFasesInput = {
    id?: number
    nome: string
    tempoFila?: number
    idDepartamento: number
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutFilasInput
  }

  export type FilaCreateOrConnectWithoutFasesInput = {
    where: FilaWhereUniqueInput
    create: XOR<FilaCreateWithoutFasesInput, FilaUncheckedCreateWithoutFasesInput>
  }

  export type PipelineCreateWithoutFasesInput = {
    nome: string
    negocios?: NegocioCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateWithoutFasesInput = {
    id?: number
    nome: string
    negocios?: NegocioUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineCreateOrConnectWithoutFasesInput = {
    where: PipelineWhereUniqueInput
    create: XOR<PipelineCreateWithoutFasesInput, PipelineUncheckedCreateWithoutFasesInput>
  }

  export type NegocioCreateWithoutFaseInput = {
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    nome?: string | null
    form?: FormCreateNestedManyWithoutNegocioInput
    instancias?: InstanciaCreateNestedManyWithoutNegocioInput
    pipeline?: PipelineCreateNestedOneWithoutNegociosInput
    usuario: UsuarioCreateNestedOneWithoutNegociosInput
  }

  export type NegocioUncheckedCreateWithoutFaseInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idPipeline?: number
    idUsuario: number
    nome?: string | null
    form?: FormUncheckedCreateNestedManyWithoutNegocioInput
    instancias?: InstanciaUncheckedCreateNestedManyWithoutNegocioInput
  }

  export type NegocioCreateOrConnectWithoutFaseInput = {
    where: NegocioWhereUniqueInput
    create: XOR<NegocioCreateWithoutFaseInput, NegocioUncheckedCreateWithoutFaseInput>
  }

  export type NegocioCreateManyFaseInputEnvelope = {
    data: NegocioCreateManyFaseInput | NegocioCreateManyFaseInput[]
    skipDuplicates?: boolean
  }

  export type CampoCreateWithoutFasesObrigatoriasInput = {
    nome: string
    tipo: string
    form?: FormCreateNestedManyWithoutCampoInput
  }

  export type CampoUncheckedCreateWithoutFasesObrigatoriasInput = {
    id?: number
    nome: string
    tipo: string
    form?: FormUncheckedCreateNestedManyWithoutCampoInput
  }

  export type CampoCreateOrConnectWithoutFasesObrigatoriasInput = {
    where: CampoWhereUniqueInput
    create: XOR<CampoCreateWithoutFasesObrigatoriasInput, CampoUncheckedCreateWithoutFasesObrigatoriasInput>
  }

  export type FilaUpsertWithoutFasesInput = {
    update: XOR<FilaUpdateWithoutFasesInput, FilaUncheckedUpdateWithoutFasesInput>
    create: XOR<FilaCreateWithoutFasesInput, FilaUncheckedCreateWithoutFasesInput>
    where?: FilaWhereInput
  }

  export type FilaUpdateToOneWithWhereWithoutFasesInput = {
    where?: FilaWhereInput
    data: XOR<FilaUpdateWithoutFasesInput, FilaUncheckedUpdateWithoutFasesInput>
  }

  export type FilaUpdateWithoutFasesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    departamento?: DepartamentoUpdateOneRequiredWithoutFilasNestedInput
    usuarios?: UsuarioUpdateManyWithoutFilasNestedInput
  }

  export type FilaUncheckedUpdateWithoutFasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    usuarios?: UsuarioUncheckedUpdateManyWithoutFilasNestedInput
  }

  export type PipelineUpsertWithoutFasesInput = {
    update: XOR<PipelineUpdateWithoutFasesInput, PipelineUncheckedUpdateWithoutFasesInput>
    create: XOR<PipelineCreateWithoutFasesInput, PipelineUncheckedCreateWithoutFasesInput>
    where?: PipelineWhereInput
  }

  export type PipelineUpdateToOneWithWhereWithoutFasesInput = {
    where?: PipelineWhereInput
    data: XOR<PipelineUpdateWithoutFasesInput, PipelineUncheckedUpdateWithoutFasesInput>
  }

  export type PipelineUpdateWithoutFasesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    negocios?: NegocioUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateWithoutFasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    negocios?: NegocioUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type NegocioUpsertWithWhereUniqueWithoutFaseInput = {
    where: NegocioWhereUniqueInput
    update: XOR<NegocioUpdateWithoutFaseInput, NegocioUncheckedUpdateWithoutFaseInput>
    create: XOR<NegocioCreateWithoutFaseInput, NegocioUncheckedCreateWithoutFaseInput>
  }

  export type NegocioUpdateWithWhereUniqueWithoutFaseInput = {
    where: NegocioWhereUniqueInput
    data: XOR<NegocioUpdateWithoutFaseInput, NegocioUncheckedUpdateWithoutFaseInput>
  }

  export type NegocioUpdateManyWithWhereWithoutFaseInput = {
    where: NegocioScalarWhereInput
    data: XOR<NegocioUpdateManyMutationInput, NegocioUncheckedUpdateManyWithoutFaseInput>
  }

  export type CampoUpsertWithWhereUniqueWithoutFasesObrigatoriasInput = {
    where: CampoWhereUniqueInput
    update: XOR<CampoUpdateWithoutFasesObrigatoriasInput, CampoUncheckedUpdateWithoutFasesObrigatoriasInput>
    create: XOR<CampoCreateWithoutFasesObrigatoriasInput, CampoUncheckedCreateWithoutFasesObrigatoriasInput>
  }

  export type CampoUpdateWithWhereUniqueWithoutFasesObrigatoriasInput = {
    where: CampoWhereUniqueInput
    data: XOR<CampoUpdateWithoutFasesObrigatoriasInput, CampoUncheckedUpdateWithoutFasesObrigatoriasInput>
  }

  export type CampoUpdateManyWithWhereWithoutFasesObrigatoriasInput = {
    where: CampoScalarWhereInput
    data: XOR<CampoUpdateManyMutationInput, CampoUncheckedUpdateManyWithoutFasesObrigatoriasInput>
  }

  export type CampoScalarWhereInput = {
    AND?: CampoScalarWhereInput | CampoScalarWhereInput[]
    OR?: CampoScalarWhereInput[]
    NOT?: CampoScalarWhereInput | CampoScalarWhereInput[]
    id?: IntFilter<"Campo"> | number
    nome?: StringFilter<"Campo"> | string
    tipo?: StringFilter<"Campo"> | string
  }

  export type FaseCreateWithoutPipelineInput = {
    cor: string
    posicao: string
    nome: string
    perdaOuGanho: boolean
    fila?: FilaCreateNestedOneWithoutFasesInput
    negocios?: NegocioCreateNestedManyWithoutFaseInput
    camposObrigatorios?: CampoCreateNestedManyWithoutFasesObrigatoriasInput
  }

  export type FaseUncheckedCreateWithoutPipelineInput = {
    id?: number
    cor: string
    posicao: string
    nome: string
    perdaOuGanho: boolean
    idFila?: number | null
    negocios?: NegocioUncheckedCreateNestedManyWithoutFaseInput
    camposObrigatorios?: CampoUncheckedCreateNestedManyWithoutFasesObrigatoriasInput
  }

  export type FaseCreateOrConnectWithoutPipelineInput = {
    where: FaseWhereUniqueInput
    create: XOR<FaseCreateWithoutPipelineInput, FaseUncheckedCreateWithoutPipelineInput>
  }

  export type FaseCreateManyPipelineInputEnvelope = {
    data: FaseCreateManyPipelineInput | FaseCreateManyPipelineInput[]
    skipDuplicates?: boolean
  }

  export type NegocioCreateWithoutPipelineInput = {
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    nome?: string | null
    form?: FormCreateNestedManyWithoutNegocioInput
    instancias?: InstanciaCreateNestedManyWithoutNegocioInput
    fase?: FaseCreateNestedOneWithoutNegociosInput
    usuario: UsuarioCreateNestedOneWithoutNegociosInput
  }

  export type NegocioUncheckedCreateWithoutPipelineInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idFase?: number
    idUsuario: number
    nome?: string | null
    form?: FormUncheckedCreateNestedManyWithoutNegocioInput
    instancias?: InstanciaUncheckedCreateNestedManyWithoutNegocioInput
  }

  export type NegocioCreateOrConnectWithoutPipelineInput = {
    where: NegocioWhereUniqueInput
    create: XOR<NegocioCreateWithoutPipelineInput, NegocioUncheckedCreateWithoutPipelineInput>
  }

  export type NegocioCreateManyPipelineInputEnvelope = {
    data: NegocioCreateManyPipelineInput | NegocioCreateManyPipelineInput[]
    skipDuplicates?: boolean
  }

  export type FaseUpsertWithWhereUniqueWithoutPipelineInput = {
    where: FaseWhereUniqueInput
    update: XOR<FaseUpdateWithoutPipelineInput, FaseUncheckedUpdateWithoutPipelineInput>
    create: XOR<FaseCreateWithoutPipelineInput, FaseUncheckedCreateWithoutPipelineInput>
  }

  export type FaseUpdateWithWhereUniqueWithoutPipelineInput = {
    where: FaseWhereUniqueInput
    data: XOR<FaseUpdateWithoutPipelineInput, FaseUncheckedUpdateWithoutPipelineInput>
  }

  export type FaseUpdateManyWithWhereWithoutPipelineInput = {
    where: FaseScalarWhereInput
    data: XOR<FaseUpdateManyMutationInput, FaseUncheckedUpdateManyWithoutPipelineInput>
  }

  export type NegocioUpsertWithWhereUniqueWithoutPipelineInput = {
    where: NegocioWhereUniqueInput
    update: XOR<NegocioUpdateWithoutPipelineInput, NegocioUncheckedUpdateWithoutPipelineInput>
    create: XOR<NegocioCreateWithoutPipelineInput, NegocioUncheckedCreateWithoutPipelineInput>
  }

  export type NegocioUpdateWithWhereUniqueWithoutPipelineInput = {
    where: NegocioWhereUniqueInput
    data: XOR<NegocioUpdateWithoutPipelineInput, NegocioUncheckedUpdateWithoutPipelineInput>
  }

  export type NegocioUpdateManyWithWhereWithoutPipelineInput = {
    where: NegocioScalarWhereInput
    data: XOR<NegocioUpdateManyMutationInput, NegocioUncheckedUpdateManyWithoutPipelineInput>
  }

  export type FormCreateWithoutCampoInput = {
    valor: string
    negocio: NegocioCreateNestedOneWithoutFormInput
  }

  export type FormUncheckedCreateWithoutCampoInput = {
    id?: number
    valor: string
    idNegocio: number
  }

  export type FormCreateOrConnectWithoutCampoInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutCampoInput, FormUncheckedCreateWithoutCampoInput>
  }

  export type FormCreateManyCampoInputEnvelope = {
    data: FormCreateManyCampoInput | FormCreateManyCampoInput[]
    skipDuplicates?: boolean
  }

  export type FaseCreateWithoutCamposObrigatoriosInput = {
    cor: string
    posicao: string
    nome: string
    perdaOuGanho: boolean
    fila?: FilaCreateNestedOneWithoutFasesInput
    pipeline: PipelineCreateNestedOneWithoutFasesInput
    negocios?: NegocioCreateNestedManyWithoutFaseInput
  }

  export type FaseUncheckedCreateWithoutCamposObrigatoriosInput = {
    id?: number
    cor: string
    posicao: string
    idPipeline: number
    nome: string
    perdaOuGanho: boolean
    idFila?: number | null
    negocios?: NegocioUncheckedCreateNestedManyWithoutFaseInput
  }

  export type FaseCreateOrConnectWithoutCamposObrigatoriosInput = {
    where: FaseWhereUniqueInput
    create: XOR<FaseCreateWithoutCamposObrigatoriosInput, FaseUncheckedCreateWithoutCamposObrigatoriosInput>
  }

  export type FormUpsertWithWhereUniqueWithoutCampoInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutCampoInput, FormUncheckedUpdateWithoutCampoInput>
    create: XOR<FormCreateWithoutCampoInput, FormUncheckedCreateWithoutCampoInput>
  }

  export type FormUpdateWithWhereUniqueWithoutCampoInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutCampoInput, FormUncheckedUpdateWithoutCampoInput>
  }

  export type FormUpdateManyWithWhereWithoutCampoInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutCampoInput>
  }

  export type FormScalarWhereInput = {
    AND?: FormScalarWhereInput | FormScalarWhereInput[]
    OR?: FormScalarWhereInput[]
    NOT?: FormScalarWhereInput | FormScalarWhereInput[]
    id?: IntFilter<"Form"> | number
    valor?: StringFilter<"Form"> | string
    idCampo?: IntFilter<"Form"> | number
    idNegocio?: IntFilter<"Form"> | number
  }

  export type FaseUpsertWithWhereUniqueWithoutCamposObrigatoriosInput = {
    where: FaseWhereUniqueInput
    update: XOR<FaseUpdateWithoutCamposObrigatoriosInput, FaseUncheckedUpdateWithoutCamposObrigatoriosInput>
    create: XOR<FaseCreateWithoutCamposObrigatoriosInput, FaseUncheckedCreateWithoutCamposObrigatoriosInput>
  }

  export type FaseUpdateWithWhereUniqueWithoutCamposObrigatoriosInput = {
    where: FaseWhereUniqueInput
    data: XOR<FaseUpdateWithoutCamposObrigatoriosInput, FaseUncheckedUpdateWithoutCamposObrigatoriosInput>
  }

  export type FaseUpdateManyWithWhereWithoutCamposObrigatoriosInput = {
    where: FaseScalarWhereInput
    data: XOR<FaseUpdateManyMutationInput, FaseUncheckedUpdateManyWithoutCamposObrigatoriosInput>
  }

  export type CampoCreateWithoutFormInput = {
    nome: string
    tipo: string
    fasesObrigatorias?: FaseCreateNestedManyWithoutCamposObrigatoriosInput
  }

  export type CampoUncheckedCreateWithoutFormInput = {
    id?: number
    nome: string
    tipo: string
    fasesObrigatorias?: FaseUncheckedCreateNestedManyWithoutCamposObrigatoriosInput
  }

  export type CampoCreateOrConnectWithoutFormInput = {
    where: CampoWhereUniqueInput
    create: XOR<CampoCreateWithoutFormInput, CampoUncheckedCreateWithoutFormInput>
  }

  export type NegocioCreateWithoutFormInput = {
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    nome?: string | null
    instancias?: InstanciaCreateNestedManyWithoutNegocioInput
    fase?: FaseCreateNestedOneWithoutNegociosInput
    pipeline?: PipelineCreateNestedOneWithoutNegociosInput
    usuario: UsuarioCreateNestedOneWithoutNegociosInput
  }

  export type NegocioUncheckedCreateWithoutFormInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idFase?: number
    idPipeline?: number
    idUsuario: number
    nome?: string | null
    instancias?: InstanciaUncheckedCreateNestedManyWithoutNegocioInput
  }

  export type NegocioCreateOrConnectWithoutFormInput = {
    where: NegocioWhereUniqueInput
    create: XOR<NegocioCreateWithoutFormInput, NegocioUncheckedCreateWithoutFormInput>
  }

  export type CampoUpsertWithoutFormInput = {
    update: XOR<CampoUpdateWithoutFormInput, CampoUncheckedUpdateWithoutFormInput>
    create: XOR<CampoCreateWithoutFormInput, CampoUncheckedCreateWithoutFormInput>
    where?: CampoWhereInput
  }

  export type CampoUpdateToOneWithWhereWithoutFormInput = {
    where?: CampoWhereInput
    data: XOR<CampoUpdateWithoutFormInput, CampoUncheckedUpdateWithoutFormInput>
  }

  export type CampoUpdateWithoutFormInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fasesObrigatorias?: FaseUpdateManyWithoutCamposObrigatoriosNestedInput
  }

  export type CampoUncheckedUpdateWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    fasesObrigatorias?: FaseUncheckedUpdateManyWithoutCamposObrigatoriosNestedInput
  }

  export type NegocioUpsertWithoutFormInput = {
    update: XOR<NegocioUpdateWithoutFormInput, NegocioUncheckedUpdateWithoutFormInput>
    create: XOR<NegocioCreateWithoutFormInput, NegocioUncheckedCreateWithoutFormInput>
    where?: NegocioWhereInput
  }

  export type NegocioUpdateToOneWithWhereWithoutFormInput = {
    where?: NegocioWhereInput
    data: XOR<NegocioUpdateWithoutFormInput, NegocioUncheckedUpdateWithoutFormInput>
  }

  export type NegocioUpdateWithoutFormInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    instancias?: InstanciaUpdateManyWithoutNegocioNestedInput
    fase?: FaseUpdateOneRequiredWithoutNegociosNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutNegociosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNegociosNestedInput
  }

  export type NegocioUncheckedUpdateWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idFase?: IntFieldUpdateOperationsInput | number
    idPipeline?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    instancias?: InstanciaUncheckedUpdateManyWithoutNegocioNestedInput
  }

  export type FormCreateWithoutNegocioInput = {
    valor: string
    campo: CampoCreateNestedOneWithoutFormInput
  }

  export type FormUncheckedCreateWithoutNegocioInput = {
    id?: number
    valor: string
    idCampo: number
  }

  export type FormCreateOrConnectWithoutNegocioInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutNegocioInput, FormUncheckedCreateWithoutNegocioInput>
  }

  export type FormCreateManyNegocioInputEnvelope = {
    data: FormCreateManyNegocioInput | FormCreateManyNegocioInput[]
    skipDuplicates?: boolean
  }

  export type InstanciaCreateWithoutNegocioInput = {
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi: string
    nome: string
    idInstancia: string
    mensagens?: MensagemCreateNestedManyWithoutInstanciaInput
  }

  export type InstanciaUncheckedCreateWithoutNegocioInput = {
    id?: number
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi: string
    nome: string
    idInstancia: string
    mensagens?: MensagemUncheckedCreateNestedManyWithoutInstanciaInput
  }

  export type InstanciaCreateOrConnectWithoutNegocioInput = {
    where: InstanciaWhereUniqueInput
    create: XOR<InstanciaCreateWithoutNegocioInput, InstanciaUncheckedCreateWithoutNegocioInput>
  }

  export type InstanciaCreateManyNegocioInputEnvelope = {
    data: InstanciaCreateManyNegocioInput | InstanciaCreateManyNegocioInput[]
    skipDuplicates?: boolean
  }

  export type FaseCreateWithoutNegociosInput = {
    cor: string
    posicao: string
    nome: string
    perdaOuGanho: boolean
    fila?: FilaCreateNestedOneWithoutFasesInput
    pipeline: PipelineCreateNestedOneWithoutFasesInput
    camposObrigatorios?: CampoCreateNestedManyWithoutFasesObrigatoriasInput
  }

  export type FaseUncheckedCreateWithoutNegociosInput = {
    id?: number
    cor: string
    posicao: string
    idPipeline: number
    nome: string
    perdaOuGanho: boolean
    idFila?: number | null
    camposObrigatorios?: CampoUncheckedCreateNestedManyWithoutFasesObrigatoriasInput
  }

  export type FaseCreateOrConnectWithoutNegociosInput = {
    where: FaseWhereUniqueInput
    create: XOR<FaseCreateWithoutNegociosInput, FaseUncheckedCreateWithoutNegociosInput>
  }

  export type PipelineCreateWithoutNegociosInput = {
    nome: string
    fases?: FaseCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateWithoutNegociosInput = {
    id?: number
    nome: string
    fases?: FaseUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineCreateOrConnectWithoutNegociosInput = {
    where: PipelineWhereUniqueInput
    create: XOR<PipelineCreateWithoutNegociosInput, PipelineUncheckedCreateWithoutNegociosInput>
  }

  export type UsuarioCreateWithoutNegociosInput = {
    nome: string
    email: string
    senha: string
    departamento: DepartamentoCreateNestedOneWithoutUsuariosInput
    u_?: UsuarioConectadoCreateNestedManyWithoutUsuarioInput
    filas?: FilaCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutNegociosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    idDepartamento: number
    u_?: UsuarioConectadoUncheckedCreateNestedManyWithoutUsuarioInput
    filas?: FilaUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type UsuarioCreateOrConnectWithoutNegociosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutNegociosInput, UsuarioUncheckedCreateWithoutNegociosInput>
  }

  export type FormUpsertWithWhereUniqueWithoutNegocioInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutNegocioInput, FormUncheckedUpdateWithoutNegocioInput>
    create: XOR<FormCreateWithoutNegocioInput, FormUncheckedCreateWithoutNegocioInput>
  }

  export type FormUpdateWithWhereUniqueWithoutNegocioInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutNegocioInput, FormUncheckedUpdateWithoutNegocioInput>
  }

  export type FormUpdateManyWithWhereWithoutNegocioInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutNegocioInput>
  }

  export type InstanciaUpsertWithWhereUniqueWithoutNegocioInput = {
    where: InstanciaWhereUniqueInput
    update: XOR<InstanciaUpdateWithoutNegocioInput, InstanciaUncheckedUpdateWithoutNegocioInput>
    create: XOR<InstanciaCreateWithoutNegocioInput, InstanciaUncheckedCreateWithoutNegocioInput>
  }

  export type InstanciaUpdateWithWhereUniqueWithoutNegocioInput = {
    where: InstanciaWhereUniqueInput
    data: XOR<InstanciaUpdateWithoutNegocioInput, InstanciaUncheckedUpdateWithoutNegocioInput>
  }

  export type InstanciaUpdateManyWithWhereWithoutNegocioInput = {
    where: InstanciaScalarWhereInput
    data: XOR<InstanciaUpdateManyMutationInput, InstanciaUncheckedUpdateManyWithoutNegocioInput>
  }

  export type InstanciaScalarWhereInput = {
    AND?: InstanciaScalarWhereInput | InstanciaScalarWhereInput[]
    OR?: InstanciaScalarWhereInput[]
    NOT?: InstanciaScalarWhereInput | InstanciaScalarWhereInput[]
    id?: IntFilter<"Instancia"> | number
    conversaAceita?: BoolFilter<"Instancia"> | boolean
    conversaFechada?: BoolFilter<"Instancia"> | boolean
    chaveApi?: StringFilter<"Instancia"> | string
    idNegocio?: IntFilter<"Instancia"> | number
    nome?: StringFilter<"Instancia"> | string
    idInstancia?: StringFilter<"Instancia"> | string
  }

  export type FaseUpsertWithoutNegociosInput = {
    update: XOR<FaseUpdateWithoutNegociosInput, FaseUncheckedUpdateWithoutNegociosInput>
    create: XOR<FaseCreateWithoutNegociosInput, FaseUncheckedCreateWithoutNegociosInput>
    where?: FaseWhereInput
  }

  export type FaseUpdateToOneWithWhereWithoutNegociosInput = {
    where?: FaseWhereInput
    data: XOR<FaseUpdateWithoutNegociosInput, FaseUncheckedUpdateWithoutNegociosInput>
  }

  export type FaseUpdateWithoutNegociosInput = {
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    fila?: FilaUpdateOneWithoutFasesNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutFasesNestedInput
    camposObrigatorios?: CampoUpdateManyWithoutFasesObrigatoriasNestedInput
  }

  export type FaseUncheckedUpdateWithoutNegociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    idFila?: NullableIntFieldUpdateOperationsInput | number | null
    camposObrigatorios?: CampoUncheckedUpdateManyWithoutFasesObrigatoriasNestedInput
  }

  export type PipelineUpsertWithoutNegociosInput = {
    update: XOR<PipelineUpdateWithoutNegociosInput, PipelineUncheckedUpdateWithoutNegociosInput>
    create: XOR<PipelineCreateWithoutNegociosInput, PipelineUncheckedCreateWithoutNegociosInput>
    where?: PipelineWhereInput
  }

  export type PipelineUpdateToOneWithWhereWithoutNegociosInput = {
    where?: PipelineWhereInput
    data: XOR<PipelineUpdateWithoutNegociosInput, PipelineUncheckedUpdateWithoutNegociosInput>
  }

  export type PipelineUpdateWithoutNegociosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    fases?: FaseUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateWithoutNegociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    fases?: FaseUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type UsuarioUpsertWithoutNegociosInput = {
    update: XOR<UsuarioUpdateWithoutNegociosInput, UsuarioUncheckedUpdateWithoutNegociosInput>
    create: XOR<UsuarioCreateWithoutNegociosInput, UsuarioUncheckedCreateWithoutNegociosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutNegociosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutNegociosInput, UsuarioUncheckedUpdateWithoutNegociosInput>
  }

  export type UsuarioUpdateWithoutNegociosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    departamento?: DepartamentoUpdateOneRequiredWithoutUsuariosNestedInput
    u_?: UsuarioConectadoUpdateManyWithoutUsuarioNestedInput
    filas?: FilaUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutNegociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idDepartamento?: IntFieldUpdateOperationsInput | number
    u_?: UsuarioConectadoUncheckedUpdateManyWithoutUsuarioNestedInput
    filas?: FilaUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type InstanciaCreateWithoutMensagensInput = {
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi: string
    nome: string
    idInstancia: string
    negocio: NegocioCreateNestedOneWithoutInstanciasInput
  }

  export type InstanciaUncheckedCreateWithoutMensagensInput = {
    id?: number
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi: string
    idNegocio: number
    nome: string
    idInstancia: string
  }

  export type InstanciaCreateOrConnectWithoutMensagensInput = {
    where: InstanciaWhereUniqueInput
    create: XOR<InstanciaCreateWithoutMensagensInput, InstanciaUncheckedCreateWithoutMensagensInput>
  }

  export type InstanciaUpsertWithoutMensagensInput = {
    update: XOR<InstanciaUpdateWithoutMensagensInput, InstanciaUncheckedUpdateWithoutMensagensInput>
    create: XOR<InstanciaCreateWithoutMensagensInput, InstanciaUncheckedCreateWithoutMensagensInput>
    where?: InstanciaWhereInput
  }

  export type InstanciaUpdateToOneWithWhereWithoutMensagensInput = {
    where?: InstanciaWhereInput
    data: XOR<InstanciaUpdateWithoutMensagensInput, InstanciaUncheckedUpdateWithoutMensagensInput>
  }

  export type InstanciaUpdateWithoutMensagensInput = {
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
    negocio?: NegocioUpdateOneRequiredWithoutInstanciasNestedInput
  }

  export type InstanciaUncheckedUpdateWithoutMensagensInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    idNegocio?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
  }

  export type DepartamentoUpdateWithoutPermissoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    filas?: FilaUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateWithoutPermissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    filas?: FilaUncheckedUpdateManyWithoutDepartamentoNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type DepartamentoUncheckedUpdateManyWithoutPermissoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type FilaCreateManyDepartamentoInput = {
    id?: number
    nome: string
    tempoFila?: number
  }

  export type UsuarioCreateManyDepartamentoInput = {
    id?: number
    nome: string
    email: string
    senha: string
  }

  export type FilaUpdateWithoutDepartamentoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    fases?: FaseUpdateManyWithoutFilaNestedInput
    usuarios?: UsuarioUpdateManyWithoutFilasNestedInput
  }

  export type FilaUncheckedUpdateWithoutDepartamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    fases?: FaseUncheckedUpdateManyWithoutFilaNestedInput
    usuarios?: UsuarioUncheckedUpdateManyWithoutFilasNestedInput
  }

  export type FilaUncheckedUpdateManyWithoutDepartamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUpdateWithoutDepartamentoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    negocios?: NegocioUpdateManyWithoutUsuarioNestedInput
    u_?: UsuarioConectadoUpdateManyWithoutUsuarioNestedInput
    filas?: FilaUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutDepartamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    negocios?: NegocioUncheckedUpdateManyWithoutUsuarioNestedInput
    u_?: UsuarioConectadoUncheckedUpdateManyWithoutUsuarioNestedInput
    filas?: FilaUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutDepartamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
  }

  export type PermissaoUpdateWithoutDepartamentosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PermissaoUncheckedUpdateWithoutDepartamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type PermissaoUncheckedUpdateManyWithoutDepartamentosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type NegocioCreateManyUsuarioInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idFase?: number
    idPipeline?: number
    nome?: string | null
  }

  export type UsuarioConectadoCreateManyUsuarioInput = {
    id?: number
    rankFila: number
  }

  export type NegocioUpdateWithoutUsuarioInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUpdateManyWithoutNegocioNestedInput
    instancias?: InstanciaUpdateManyWithoutNegocioNestedInput
    fase?: FaseUpdateOneRequiredWithoutNegociosNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutNegociosNestedInput
  }

  export type NegocioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idFase?: IntFieldUpdateOperationsInput | number
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUncheckedUpdateManyWithoutNegocioNestedInput
    instancias?: InstanciaUncheckedUpdateManyWithoutNegocioNestedInput
  }

  export type NegocioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idFase?: IntFieldUpdateOperationsInput | number
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsuarioConectadoUpdateWithoutUsuarioInput = {
    rankFila?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioConectadoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rankFila?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioConectadoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    rankFila?: IntFieldUpdateOperationsInput | number
  }

  export type FilaUpdateWithoutUsuariosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    fases?: FaseUpdateManyWithoutFilaNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutFilasNestedInput
  }

  export type FilaUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
    fases?: FaseUncheckedUpdateManyWithoutFilaNestedInput
  }

  export type FilaUncheckedUpdateManyWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tempoFila?: IntFieldUpdateOperationsInput | number
    idDepartamento?: IntFieldUpdateOperationsInput | number
  }

  export type FaseCreateManyFilaInput = {
    id?: number
    cor: string
    posicao: string
    idPipeline: number
    nome: string
    perdaOuGanho: boolean
  }

  export type FaseUpdateWithoutFilaInput = {
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    pipeline?: PipelineUpdateOneRequiredWithoutFasesNestedInput
    negocios?: NegocioUpdateManyWithoutFaseNestedInput
    camposObrigatorios?: CampoUpdateManyWithoutFasesObrigatoriasNestedInput
  }

  export type FaseUncheckedUpdateWithoutFilaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    negocios?: NegocioUncheckedUpdateManyWithoutFaseNestedInput
    camposObrigatorios?: CampoUncheckedUpdateManyWithoutFasesObrigatoriasNestedInput
  }

  export type FaseUncheckedUpdateManyWithoutFilaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUpdateWithoutFilasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    negocios?: NegocioUpdateManyWithoutUsuarioNestedInput
    departamento?: DepartamentoUpdateOneRequiredWithoutUsuariosNestedInput
    u_?: UsuarioConectadoUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutFilasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idDepartamento?: IntFieldUpdateOperationsInput | number
    negocios?: NegocioUncheckedUpdateManyWithoutUsuarioNestedInput
    u_?: UsuarioConectadoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutFilasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    idDepartamento?: IntFieldUpdateOperationsInput | number
  }

  export type MensagemCreateManyInstanciaInput = {
    id?: number
    mensagem: string
    base64: boolean
    caption?: string | null
    timestamp?: Date | string
    nome: string
    fromMe: boolean
  }

  export type MensagemUpdateWithoutInstanciaInput = {
    mensagem?: StringFieldUpdateOperationsInput | string
    base64?: BoolFieldUpdateOperationsInput | boolean
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateWithoutInstanciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    base64?: BoolFieldUpdateOperationsInput | boolean
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensagemUncheckedUpdateManyWithoutInstanciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    mensagem?: StringFieldUpdateOperationsInput | string
    base64?: BoolFieldUpdateOperationsInput | boolean
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    nome?: StringFieldUpdateOperationsInput | string
    fromMe?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NegocioCreateManyFaseInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idPipeline?: number
    idUsuario: number
    nome?: string | null
  }

  export type NegocioUpdateWithoutFaseInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUpdateManyWithoutNegocioNestedInput
    instancias?: InstanciaUpdateManyWithoutNegocioNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutNegociosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNegociosNestedInput
  }

  export type NegocioUncheckedUpdateWithoutFaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUncheckedUpdateManyWithoutNegocioNestedInput
    instancias?: InstanciaUncheckedUpdateManyWithoutNegocioNestedInput
  }

  export type NegocioUncheckedUpdateManyWithoutFaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CampoUpdateWithoutFasesObrigatoriasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    form?: FormUpdateManyWithoutCampoNestedInput
  }

  export type CampoUncheckedUpdateWithoutFasesObrigatoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    form?: FormUncheckedUpdateManyWithoutCampoNestedInput
  }

  export type CampoUncheckedUpdateManyWithoutFasesObrigatoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type FaseCreateManyPipelineInput = {
    id?: number
    cor: string
    posicao: string
    nome: string
    perdaOuGanho: boolean
    idFila?: number | null
  }

  export type NegocioCreateManyPipelineInput = {
    id?: number
    telefone: string
    dateCreate?: Date | string
    numeroCampanha: string
    idFase?: number
    idUsuario: number
    nome?: string | null
  }

  export type FaseUpdateWithoutPipelineInput = {
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    fila?: FilaUpdateOneWithoutFasesNestedInput
    negocios?: NegocioUpdateManyWithoutFaseNestedInput
    camposObrigatorios?: CampoUpdateManyWithoutFasesObrigatoriasNestedInput
  }

  export type FaseUncheckedUpdateWithoutPipelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    idFila?: NullableIntFieldUpdateOperationsInput | number | null
    negocios?: NegocioUncheckedUpdateManyWithoutFaseNestedInput
    camposObrigatorios?: CampoUncheckedUpdateManyWithoutFasesObrigatoriasNestedInput
  }

  export type FaseUncheckedUpdateManyWithoutPipelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    idFila?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type NegocioUpdateWithoutPipelineInput = {
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUpdateManyWithoutNegocioNestedInput
    instancias?: InstanciaUpdateManyWithoutNegocioNestedInput
    fase?: FaseUpdateOneRequiredWithoutNegociosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutNegociosNestedInput
  }

  export type NegocioUncheckedUpdateWithoutPipelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idFase?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    form?: FormUncheckedUpdateManyWithoutNegocioNestedInput
    instancias?: InstanciaUncheckedUpdateManyWithoutNegocioNestedInput
  }

  export type NegocioUncheckedUpdateManyWithoutPipelineInput = {
    id?: IntFieldUpdateOperationsInput | number
    telefone?: StringFieldUpdateOperationsInput | string
    dateCreate?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroCampanha?: StringFieldUpdateOperationsInput | string
    idFase?: IntFieldUpdateOperationsInput | number
    idUsuario?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormCreateManyCampoInput = {
    id?: number
    valor: string
    idNegocio: number
  }

  export type FormUpdateWithoutCampoInput = {
    valor?: StringFieldUpdateOperationsInput | string
    negocio?: NegocioUpdateOneRequiredWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutCampoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    idNegocio?: IntFieldUpdateOperationsInput | number
  }

  export type FormUncheckedUpdateManyWithoutCampoInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    idNegocio?: IntFieldUpdateOperationsInput | number
  }

  export type FaseUpdateWithoutCamposObrigatoriosInput = {
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    fila?: FilaUpdateOneWithoutFasesNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutFasesNestedInput
    negocios?: NegocioUpdateManyWithoutFaseNestedInput
  }

  export type FaseUncheckedUpdateWithoutCamposObrigatoriosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    idFila?: NullableIntFieldUpdateOperationsInput | number | null
    negocios?: NegocioUncheckedUpdateManyWithoutFaseNestedInput
  }

  export type FaseUncheckedUpdateManyWithoutCamposObrigatoriosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cor?: StringFieldUpdateOperationsInput | string
    posicao?: StringFieldUpdateOperationsInput | string
    idPipeline?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    perdaOuGanho?: BoolFieldUpdateOperationsInput | boolean
    idFila?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FormCreateManyNegocioInput = {
    id?: number
    valor: string
    idCampo: number
  }

  export type InstanciaCreateManyNegocioInput = {
    id?: number
    conversaAceita?: boolean
    conversaFechada?: boolean
    chaveApi: string
    nome: string
    idInstancia: string
  }

  export type FormUpdateWithoutNegocioInput = {
    valor?: StringFieldUpdateOperationsInput | string
    campo?: CampoUpdateOneRequiredWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutNegocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    idCampo?: IntFieldUpdateOperationsInput | number
  }

  export type FormUncheckedUpdateManyWithoutNegocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: StringFieldUpdateOperationsInput | string
    idCampo?: IntFieldUpdateOperationsInput | number
  }

  export type InstanciaUpdateWithoutNegocioInput = {
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
    mensagens?: MensagemUpdateManyWithoutInstanciaNestedInput
  }

  export type InstanciaUncheckedUpdateWithoutNegocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
    mensagens?: MensagemUncheckedUpdateManyWithoutInstanciaNestedInput
  }

  export type InstanciaUncheckedUpdateManyWithoutNegocioInput = {
    id?: IntFieldUpdateOperationsInput | number
    conversaAceita?: BoolFieldUpdateOperationsInput | boolean
    conversaFechada?: BoolFieldUpdateOperationsInput | boolean
    chaveApi?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    idInstancia?: StringFieldUpdateOperationsInput | string
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