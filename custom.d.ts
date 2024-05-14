// custom.d.ts
declare module '*.hbs?raw' {
  const content: string;
  export default content;
}
