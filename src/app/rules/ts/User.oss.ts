/**
 *  This is generated file. Do not edit !!
 *
 *  @formatter:off
 *
 */
/* tslint:disable */
export const UserRule = '/*ɵ    User rules.oss -- Meta-data rules. Generated fileɵɵ    Default definitionɵ*/ɵclass=User {ɵɵ    field=uniqueName {ɵ           label:"Id";ɵ       }ɵɵ       field=name {ɵ           label:"Namexxxxx";ɵ       }ɵɵ       field=description {ɵ           trait:longtext;ɵ       }ɵɵ       zNone => *;ɵ       zLeft => uniqueName => name => description => created;ɵ}ɵɵ/*ɵ  Sample definition for operations edit and createɵɵ*/ɵclass=User {ɵ   operation=(edit, create) {ɵ      zNone => *;ɵ      zLeft => name => description;ɵ   }ɵɵ  operation=(create) {ɵ      zNone => *;ɵ      zLeft => name => description => created;ɵ   }ɵɵ}ɵ';
/* tslint:disable */
/**
 *  @formatter:on
 *
 */
 