"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const adjacent_overload_signatures_1 = __importDefault(require("./adjacent-overload-signatures"));
const array_type_1 = __importDefault(require("./array-type"));
const await_thenable_1 = __importDefault(require("./await-thenable"));
const ban_ts_comment_1 = __importDefault(require("./ban-ts-comment"));
const ban_tslint_comment_1 = __importDefault(require("./ban-tslint-comment"));
const class_literal_property_style_1 = __importDefault(require("./class-literal-property-style"));
const class_methods_use_this_1 = __importDefault(require("./class-methods-use-this"));
const consistent_generic_constructors_1 = __importDefault(require("./consistent-generic-constructors"));
const consistent_indexed_object_style_1 = __importDefault(require("./consistent-indexed-object-style"));
const consistent_return_1 = __importDefault(require("./consistent-return"));
const consistent_type_assertions_1 = __importDefault(require("./consistent-type-assertions"));
const consistent_type_definitions_1 = __importDefault(require("./consistent-type-definitions"));
const consistent_type_exports_1 = __importDefault(require("./consistent-type-exports"));
const consistent_type_imports_1 = __importDefault(require("./consistent-type-imports"));
const default_param_last_1 = __importDefault(require("./default-param-last"));
const dot_notation_1 = __importDefault(require("./dot-notation"));
const explicit_function_return_type_1 = __importDefault(require("./explicit-function-return-type"));
const explicit_member_accessibility_1 = __importDefault(require("./explicit-member-accessibility"));
const explicit_module_boundary_types_1 = __importDefault(require("./explicit-module-boundary-types"));
const init_declarations_1 = __importDefault(require("./init-declarations"));
const max_params_1 = __importDefault(require("./max-params"));
const member_ordering_1 = __importDefault(require("./member-ordering"));
const method_signature_style_1 = __importDefault(require("./method-signature-style"));
const naming_convention_1 = __importDefault(require("./naming-convention"));
const no_array_constructor_1 = __importDefault(require("./no-array-constructor"));
const no_array_delete_1 = __importDefault(require("./no-array-delete"));
const no_base_to_string_1 = __importDefault(require("./no-base-to-string"));
const no_confusing_non_null_assertion_1 = __importDefault(require("./no-confusing-non-null-assertion"));
const no_confusing_void_expression_1 = __importDefault(require("./no-confusing-void-expression"));
const no_deprecated_1 = __importDefault(require("./no-deprecated"));
const no_dupe_class_members_1 = __importDefault(require("./no-dupe-class-members"));
const no_duplicate_enum_values_1 = __importDefault(require("./no-duplicate-enum-values"));
const no_duplicate_type_constituents_1 = __importDefault(require("./no-duplicate-type-constituents"));
const no_dynamic_delete_1 = __importDefault(require("./no-dynamic-delete"));
const no_empty_function_1 = __importDefault(require("./no-empty-function"));
const no_empty_interface_1 = __importDefault(require("./no-empty-interface"));
const no_empty_object_type_1 = __importDefault(require("./no-empty-object-type"));
const no_explicit_any_1 = __importDefault(require("./no-explicit-any"));
const no_extra_non_null_assertion_1 = __importDefault(require("./no-extra-non-null-assertion"));
const no_extraneous_class_1 = __importDefault(require("./no-extraneous-class"));
const no_floating_promises_1 = __importDefault(require("./no-floating-promises"));
const no_for_in_array_1 = __importDefault(require("./no-for-in-array"));
const no_implied_eval_1 = __importDefault(require("./no-implied-eval"));
const no_import_type_side_effects_1 = __importDefault(require("./no-import-type-side-effects"));
const no_inferrable_types_1 = __importDefault(require("./no-inferrable-types"));
const no_invalid_this_1 = __importDefault(require("./no-invalid-this"));
const no_invalid_void_type_1 = __importDefault(require("./no-invalid-void-type"));
const no_loop_func_1 = __importDefault(require("./no-loop-func"));
const no_loss_of_precision_1 = __importDefault(require("./no-loss-of-precision"));
const no_magic_numbers_1 = __importDefault(require("./no-magic-numbers"));
const no_meaningless_void_operator_1 = __importDefault(require("./no-meaningless-void-operator"));
const no_misused_new_1 = __importDefault(require("./no-misused-new"));
const no_misused_promises_1 = __importDefault(require("./no-misused-promises"));
const no_mixed_enums_1 = __importDefault(require("./no-mixed-enums"));
const no_namespace_1 = __importDefault(require("./no-namespace"));
const no_non_null_asserted_nullish_coalescing_1 = __importDefault(require("./no-non-null-asserted-nullish-coalescing"));
const no_non_null_asserted_optional_chain_1 = __importDefault(require("./no-non-null-asserted-optional-chain"));
const no_non_null_assertion_1 = __importDefault(require("./no-non-null-assertion"));
const no_redeclare_1 = __importDefault(require("./no-redeclare"));
const no_redundant_type_constituents_1 = __importDefault(require("./no-redundant-type-constituents"));
const no_require_imports_1 = __importDefault(require("./no-require-imports"));
const no_restricted_imports_1 = __importDefault(require("./no-restricted-imports"));
const no_restricted_types_1 = __importDefault(require("./no-restricted-types"));
const no_shadow_1 = __importDefault(require("./no-shadow"));
const no_this_alias_1 = __importDefault(require("./no-this-alias"));
const no_type_alias_1 = __importDefault(require("./no-type-alias"));
const no_unnecessary_boolean_literal_compare_1 = __importDefault(require("./no-unnecessary-boolean-literal-compare"));
const no_unnecessary_condition_1 = __importDefault(require("./no-unnecessary-condition"));
const no_unnecessary_parameter_property_assignment_1 = __importDefault(require("./no-unnecessary-parameter-property-assignment"));
const no_unnecessary_qualifier_1 = __importDefault(require("./no-unnecessary-qualifier"));
const no_unnecessary_template_expression_1 = __importDefault(require("./no-unnecessary-template-expression"));
const no_unnecessary_type_arguments_1 = __importDefault(require("./no-unnecessary-type-arguments"));
const no_unnecessary_type_assertion_1 = __importDefault(require("./no-unnecessary-type-assertion"));
const no_unnecessary_type_constraint_1 = __importDefault(require("./no-unnecessary-type-constraint"));
const no_unnecessary_type_parameters_1 = __importDefault(require("./no-unnecessary-type-parameters"));
const no_unsafe_argument_1 = __importDefault(require("./no-unsafe-argument"));
const no_unsafe_assignment_1 = __importDefault(require("./no-unsafe-assignment"));
const no_unsafe_call_1 = __importDefault(require("./no-unsafe-call"));
const no_unsafe_declaration_merging_1 = __importDefault(require("./no-unsafe-declaration-merging"));
const no_unsafe_enum_comparison_1 = __importDefault(require("./no-unsafe-enum-comparison"));
const no_unsafe_function_type_1 = __importDefault(require("./no-unsafe-function-type"));
const no_unsafe_member_access_1 = __importDefault(require("./no-unsafe-member-access"));
const no_unsafe_return_1 = __importDefault(require("./no-unsafe-return"));
const no_unsafe_type_assertion_1 = __importDefault(require("./no-unsafe-type-assertion"));
const no_unsafe_unary_minus_1 = __importDefault(require("./no-unsafe-unary-minus"));
const no_unused_expressions_1 = __importDefault(require("./no-unused-expressions"));
const no_unused_vars_1 = __importDefault(require("./no-unused-vars"));
const no_use_before_define_1 = __importDefault(require("./no-use-before-define"));
const no_useless_constructor_1 = __importDefault(require("./no-useless-constructor"));
const no_useless_empty_export_1 = __importDefault(require("./no-useless-empty-export"));
const no_var_requires_1 = __importDefault(require("./no-var-requires"));
const no_wrapper_object_types_1 = __importDefault(require("./no-wrapper-object-types"));
const non_nullable_type_assertion_style_1 = __importDefault(require("./non-nullable-type-assertion-style"));
const only_throw_error_1 = __importDefault(require("./only-throw-error"));
const parameter_properties_1 = __importDefault(require("./parameter-properties"));
const prefer_as_const_1 = __importDefault(require("./prefer-as-const"));
const prefer_destructuring_1 = __importDefault(require("./prefer-destructuring"));
const prefer_enum_initializers_1 = __importDefault(require("./prefer-enum-initializers"));
const prefer_find_1 = __importDefault(require("./prefer-find"));
const prefer_for_of_1 = __importDefault(require("./prefer-for-of"));
const prefer_function_type_1 = __importDefault(require("./prefer-function-type"));
const prefer_includes_1 = __importDefault(require("./prefer-includes"));
const prefer_literal_enum_member_1 = __importDefault(require("./prefer-literal-enum-member"));
const prefer_namespace_keyword_1 = __importDefault(require("./prefer-namespace-keyword"));
const prefer_nullish_coalescing_1 = __importDefault(require("./prefer-nullish-coalescing"));
const prefer_optional_chain_1 = __importDefault(require("./prefer-optional-chain"));
const prefer_promise_reject_errors_1 = __importDefault(require("./prefer-promise-reject-errors"));
const prefer_readonly_1 = __importDefault(require("./prefer-readonly"));
const prefer_readonly_parameter_types_1 = __importDefault(require("./prefer-readonly-parameter-types"));
const prefer_reduce_type_parameter_1 = __importDefault(require("./prefer-reduce-type-parameter"));
const prefer_regexp_exec_1 = __importDefault(require("./prefer-regexp-exec"));
const prefer_return_this_type_1 = __importDefault(require("./prefer-return-this-type"));
const prefer_string_starts_ends_with_1 = __importDefault(require("./prefer-string-starts-ends-with"));
const prefer_ts_expect_error_1 = __importDefault(require("./prefer-ts-expect-error"));
const promise_function_async_1 = __importDefault(require("./promise-function-async"));
const related_getter_setter_pairs_1 = __importDefault(require("./related-getter-setter-pairs"));
const require_array_sort_compare_1 = __importDefault(require("./require-array-sort-compare"));
const require_await_1 = __importDefault(require("./require-await"));
const restrict_plus_operands_1 = __importDefault(require("./restrict-plus-operands"));
const restrict_template_expressions_1 = __importDefault(require("./restrict-template-expressions"));
const return_await_1 = __importDefault(require("./return-await"));
const sort_type_constituents_1 = __importDefault(require("./sort-type-constituents"));
const strict_boolean_expressions_1 = __importDefault(require("./strict-boolean-expressions"));
const switch_exhaustiveness_check_1 = __importDefault(require("./switch-exhaustiveness-check"));
const triple_slash_reference_1 = __importDefault(require("./triple-slash-reference"));
const typedef_1 = __importDefault(require("./typedef"));
const unbound_method_1 = __importDefault(require("./unbound-method"));
const unified_signatures_1 = __importDefault(require("./unified-signatures"));
const use_unknown_in_catch_callback_variable_1 = __importDefault(require("./use-unknown-in-catch-callback-variable"));
const rules = {
    'adjacent-overload-signatures': adjacent_overload_signatures_1.default,
    'array-type': array_type_1.default,
    'await-thenable': await_thenable_1.default,
    'ban-ts-comment': ban_ts_comment_1.default,
    'ban-tslint-comment': ban_tslint_comment_1.default,
    'class-literal-property-style': class_literal_property_style_1.default,
    'class-methods-use-this': class_methods_use_this_1.default,
    'consistent-generic-constructors': consistent_generic_constructors_1.default,
    'consistent-indexed-object-style': consistent_indexed_object_style_1.default,
    'consistent-return': consistent_return_1.default,
    'consistent-type-assertions': consistent_type_assertions_1.default,
    'consistent-type-definitions': consistent_type_definitions_1.default,
    'consistent-type-exports': consistent_type_exports_1.default,
    'consistent-type-imports': consistent_type_imports_1.default,
    'default-param-last': default_param_last_1.default,
    'dot-notation': dot_notation_1.default,
    'explicit-function-return-type': explicit_function_return_type_1.default,
    'explicit-member-accessibility': explicit_member_accessibility_1.default,
    'explicit-module-boundary-types': explicit_module_boundary_types_1.default,
    'init-declarations': init_declarations_1.default,
    'max-params': max_params_1.default,
    'member-ordering': member_ordering_1.default,
    'method-signature-style': method_signature_style_1.default,
    'naming-convention': naming_convention_1.default,
    'no-array-constructor': no_array_constructor_1.default,
    'no-array-delete': no_array_delete_1.default,
    'no-base-to-string': no_base_to_string_1.default,
    'no-confusing-non-null-assertion': no_confusing_non_null_assertion_1.default,
    'no-confusing-void-expression': no_confusing_void_expression_1.default,
    'no-deprecated': no_deprecated_1.default,
    'no-dupe-class-members': no_dupe_class_members_1.default,
    'no-duplicate-enum-values': no_duplicate_enum_values_1.default,
    'no-duplicate-type-constituents': no_duplicate_type_constituents_1.default,
    'no-dynamic-delete': no_dynamic_delete_1.default,
    'no-empty-function': no_empty_function_1.default,
    'no-empty-interface': no_empty_interface_1.default,
    'no-empty-object-type': no_empty_object_type_1.default,
    'no-explicit-any': no_explicit_any_1.default,
    'no-extra-non-null-assertion': no_extra_non_null_assertion_1.default,
    'no-extraneous-class': no_extraneous_class_1.default,
    'no-floating-promises': no_floating_promises_1.default,
    'no-for-in-array': no_for_in_array_1.default,
    'no-implied-eval': no_implied_eval_1.default,
    'no-import-type-side-effects': no_import_type_side_effects_1.default,
    'no-inferrable-types': no_inferrable_types_1.default,
    'no-invalid-this': no_invalid_this_1.default,
    'no-invalid-void-type': no_invalid_void_type_1.default,
    'no-loop-func': no_loop_func_1.default,
    'no-loss-of-precision': no_loss_of_precision_1.default,
    'no-magic-numbers': no_magic_numbers_1.default,
    'no-meaningless-void-operator': no_meaningless_void_operator_1.default,
    'no-misused-new': no_misused_new_1.default,
    'no-misused-promises': no_misused_promises_1.default,
    'no-mixed-enums': no_mixed_enums_1.default,
    'no-namespace': no_namespace_1.default,
    'no-non-null-asserted-nullish-coalescing': no_non_null_asserted_nullish_coalescing_1.default,
    'no-non-null-asserted-optional-chain': no_non_null_asserted_optional_chain_1.default,
    'no-non-null-assertion': no_non_null_assertion_1.default,
    'no-redeclare': no_redeclare_1.default,
    'no-redundant-type-constituents': no_redundant_type_constituents_1.default,
    'no-require-imports': no_require_imports_1.default,
    'no-restricted-imports': no_restricted_imports_1.default,
    'no-restricted-types': no_restricted_types_1.default,
    'no-shadow': no_shadow_1.default,
    'no-this-alias': no_this_alias_1.default,
    'no-type-alias': no_type_alias_1.default,
    'no-unnecessary-boolean-literal-compare': no_unnecessary_boolean_literal_compare_1.default,
    'no-unnecessary-condition': no_unnecessary_condition_1.default,
    'no-unnecessary-parameter-property-assignment': no_unnecessary_parameter_property_assignment_1.default,
    'no-unnecessary-qualifier': no_unnecessary_qualifier_1.default,
    'no-unnecessary-template-expression': no_unnecessary_template_expression_1.default,
    'no-unnecessary-type-arguments': no_unnecessary_type_arguments_1.default,
    'no-unnecessary-type-assertion': no_unnecessary_type_assertion_1.default,
    'no-unnecessary-type-constraint': no_unnecessary_type_constraint_1.default,
    'no-unnecessary-type-parameters': no_unnecessary_type_parameters_1.default,
    'no-unsafe-argument': no_unsafe_argument_1.default,
    'no-unsafe-assignment': no_unsafe_assignment_1.default,
    'no-unsafe-call': no_unsafe_call_1.default,
    'no-unsafe-declaration-merging': no_unsafe_declaration_merging_1.default,
    'no-unsafe-enum-comparison': no_unsafe_enum_comparison_1.default,
    'no-unsafe-function-type': no_unsafe_function_type_1.default,
    'no-unsafe-member-access': no_unsafe_member_access_1.default,
    'no-unsafe-return': no_unsafe_return_1.default,
    'no-unsafe-type-assertion': no_unsafe_type_assertion_1.default,
    'no-unsafe-unary-minus': no_unsafe_unary_minus_1.default,
    'no-unused-expressions': no_unused_expressions_1.default,
    'no-unused-vars': no_unused_vars_1.default,
    'no-use-before-define': no_use_before_define_1.default,
    'no-useless-constructor': no_useless_constructor_1.default,
    'no-useless-empty-export': no_useless_empty_export_1.default,
    'no-var-requires': no_var_requires_1.default,
    'no-wrapper-object-types': no_wrapper_object_types_1.default,
    'non-nullable-type-assertion-style': non_nullable_type_assertion_style_1.default,
    'only-throw-error': only_throw_error_1.default,
    'parameter-properties': parameter_properties_1.default,
    'prefer-as-const': prefer_as_const_1.default,
    'prefer-destructuring': prefer_destructuring_1.default,
    'prefer-enum-initializers': prefer_enum_initializers_1.default,
    'prefer-find': prefer_find_1.default,
    'prefer-for-of': prefer_for_of_1.default,
    'prefer-function-type': prefer_function_type_1.default,
    'prefer-includes': prefer_includes_1.default,
    'prefer-literal-enum-member': prefer_literal_enum_member_1.default,
    'prefer-namespace-keyword': prefer_namespace_keyword_1.default,
    'prefer-nullish-coalescing': prefer_nullish_coalescing_1.default,
    'prefer-optional-chain': prefer_optional_chain_1.default,
    'prefer-promise-reject-errors': prefer_promise_reject_errors_1.default,
    'prefer-readonly': prefer_readonly_1.default,
    'prefer-readonly-parameter-types': prefer_readonly_parameter_types_1.default,
    'prefer-reduce-type-parameter': prefer_reduce_type_parameter_1.default,
    'prefer-regexp-exec': prefer_regexp_exec_1.default,
    'prefer-return-this-type': prefer_return_this_type_1.default,
    'prefer-string-starts-ends-with': prefer_string_starts_ends_with_1.default,
    'prefer-ts-expect-error': prefer_ts_expect_error_1.default,
    'promise-function-async': promise_function_async_1.default,
    'related-getter-setter-pairs': related_getter_setter_pairs_1.default,
    'require-array-sort-compare': require_array_sort_compare_1.default,
    'require-await': require_await_1.default,
    'restrict-plus-operands': restrict_plus_operands_1.default,
    'restrict-template-expressions': restrict_template_expressions_1.default,
    'return-await': return_await_1.default,
    'sort-type-constituents': sort_type_constituents_1.default,
    'strict-boolean-expressions': strict_boolean_expressions_1.default,
    'switch-exhaustiveness-check': switch_exhaustiveness_check_1.default,
    'triple-slash-reference': triple_slash_reference_1.default,
    typedef: typedef_1.default,
    'unbound-method': unbound_method_1.default,
    'unified-signatures': unified_signatures_1.default,
    'use-unknown-in-catch-callback-variable': use_unknown_in_catch_callback_variable_1.default,
};
module.exports = rules;
//# sourceMappingURL=index.js.map