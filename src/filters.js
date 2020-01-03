import * as textCase from "text-case";

const truncate = (value, length = 15) => {
  if (!value || typeof value !== "string") return "";
  if (value.length <= length) return value;
  return value.substring(0, length) + "...";
};

const methods = {
  $1_camel_$2: textCase.camelCase,
  $1_pascal_$2: textCase.pascalCase,
  $1_capital_$2: textCase.capitalCase,
  $1_header_$2: textCase.headerCase,
  $1_title_$2: textCase.titleCase,
  $1_path_$2: textCase.pathCase,
  $1_param_$2: textCase.paramCase,
  $1_dot_$2: textCase.dotCase,
  $1_snake_$2: textCase.snakeCase,
  $1_constant_$2: textCase.constantCase,
  $1_lower_$2: textCase.lowerCase,
  $1_lower_$2_First: textCase.lowerCaseFirst,
  $1_upper_$2: textCase.upperCase,
  $1_upper_$2_First: textCase.upperCaseFirst,
  $1_swap_$2: textCase.swapCase,
  $1_sentence_$2: textCase.sentenceCase,
  $1_no_$2: textCase.noCase,
  $1_isLower_$2: textCase.isLowerCase,
  $1_isUpper_$2: textCase.isUpperCase
};

const additionals = {
  truncate
};

const VueCase = {
  install: function(Vue, options = {}) {
    const { prefix = "", postfix = "" } = {
      prefix: "",
      postfix: "Case",
      ...options
    };

    Object.keys(methods).map(key => {
      Vue.filter(
        textCase.camelCase(key.replace("$1", prefix).replace("$2", postfix)),
        methods[key]
      );
    });

    Object.keys(additionals).map(key => Vue.filter(key, additionals[key]));
  }
};

export default VueCase;

if (typeof window !== `undefined` && window.Vue) {
  window.Vue.use(VueCase);
  window.VueCase = VueCase;
}
