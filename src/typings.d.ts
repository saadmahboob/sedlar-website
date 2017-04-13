declare var $: JQueryStatic;
declare var jQuery: JQueryStatic;

declare var app: {
  environment: string;
};

declare var require: {
    (path: string): any;
    ensure: (paths: string[], callback: (require: (path: string) => any) => void) => void;
};
